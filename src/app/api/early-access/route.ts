import { NextRequest, NextResponse } from "next/server";
import { firestore } from "@/lib/firebase-admin";
import { FieldValue } from "firebase-admin/firestore";

interface EarlyAccessFormData {
  email: string;
  platform: "iOS" | "Android";
  personalInsurance: string[];
  topChallenges: string[];
}

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body: EarlyAccessFormData = await request.json();

    // Validate required fields
    if (!body.email || !body.platform) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Validate platform
    if (!["iOS", "Android"].includes(body.platform)) {
      return NextResponse.json({ error: "Invalid platform" }, { status: 400 });
    }

    // Get additional metadata
    const userAgent = request.headers.get("user-agent") || "";
    const ipAddress =
      request.headers.get("x-forwarded-for") ||
      request.headers.get("x-real-ip") ||
      "";

    // Check for duplicate email
    const existingSignup = await firestore
      .collection("beta_signups")
      .where("email", "==", body.email.toLowerCase())
      .limit(1)
      .get();

    if (!existingSignup.empty) {
      return NextResponse.json(
        { error: "Email already registered for early access" },
        { status: 409 } // Conflict
      );
    }

    // Prepare data for Firestore
    const signupData = {
      email: body.email.toLowerCase(),
      platform: body.platform,
      personalInsurance: body.personalInsurance || [],
      topChallenges: body.topChallenges || [],
      createdAt: FieldValue.serverTimestamp(),
      userAgent,
      ipAddress,
    };

    // Save to Firestore
    const docRef = await firestore.collection("beta_signups").add(signupData);

    console.log("New beta signup created:", docRef.id);

    return NextResponse.json(
      {
        success: true,
        message: "Successfully joined the waitlist",
        id: docRef.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error processing early access signup:", error);

    return NextResponse.json(
      { error: "Failed to process signup. Please try again." },
      { status: 500 }
    );
  }
}
