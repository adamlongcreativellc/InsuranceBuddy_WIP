import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import ThemeRegistry from "@/components/ThemeRegistry";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "InsuranceBuddy™ — Your Friendly Insurance Assistant",
  description:
    "Upload your insurance documents to stay organized and understand your coverage – no advice, just clarity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`} suppressHydrationWarning>
      <body className="antialiased bg-slate-50 text-slate-900">
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
