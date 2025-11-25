"use client";

import { useRef, useState, useEffect } from "react";
import { CheckCircle } from "lucide-react";
import PatentBadge from "./PatentBadge";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const insuranceTypes = [
  { name: "Auto Insurance", color: "bg-blue-50", border: "border-blue-200" },
  { name: "Health Insurance", color: "bg-rose-50", border: "border-rose-200" },
  { name: "Home Insurance", color: "bg-emerald-50", border: "border-emerald-200" },
  { name: "Life Insurance", color: "bg-amber-50", border: "border-amber-200" },
  { name: "Disability Insurance", color: "bg-purple-50", border: "border-purple-200" },
  { name: "Dental Insurance", color: "bg-cyan-50", border: "border-cyan-200" },
  { name: "Vision Insurance", color: "bg-indigo-50", border: "border-indigo-200" },
  { name: "Pet Insurance", color: "bg-orange-50", border: "border-orange-200" },
  { name: "RV Insurance", color: "bg-teal-50", border: "border-teal-200" },
  { name: "Boat Insurance", color: "bg-sky-50", border: "border-sky-200" },
  { name: "Motorcycle Insurance", color: "bg-red-50", border: "border-red-200" },
  { name: "Renters Insurance", color: "bg-lime-50", border: "border-lime-200" },
  { name: "Umbrella Insurance", color: "bg-slate-50", border: "border-slate-200" },
];

export default function InsuranceTypes() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const finalTextRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile to adjust animation values
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          pin: pinRef.current,
          start: "top top",
          end: "+=1500", // Reduced duration for snappier feel
          scrub: 1,
          // Removed anticipatePin to avoid "magnet" snapping effect
        },
      });

      // Initial state: cards are off-screen (bottom)
      // We want them to fly in one by one
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        // Randomize rotation and slight position for "chaos"
        const randomRotation = (Math.random() - 0.5) * 25; // -12.5 to 12.5 degrees
        const randomX = (Math.random() - 0.5) * 60; // -30 to 30px
        const randomY = (Math.random() - 0.5) * 60; // -30 to 30px

        tl.fromTo(
          card,
          {
            y: "110vh",
            x: (Math.random() - 0.5) * 150,
            rotation: (Math.random() - 0.5) * 60,
            opacity: 0,
            scale: 0.8,
          },
          {
            y: randomY,
            x: randomX,
            rotation: randomRotation,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power3.out",
          },
          index * 0.12
        );
      });

      // Animate the final text reveal after cards are stacked
      tl.fromTo(
        finalTextRef.current,
        {
          y: 50,
          opacity: 0,
          scale: 0.9,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "+=0.1"
      );
    }, containerRef);

    return () => ctx.revert();
  }, [isMobile]); // Re-run if mobile state changes

  return (
    <section ref={containerRef} className="relative min-h-screen bg-slate-50">
      {/* Added padding-top to container to account for fixed header and prevent overlap */}
      <div ref={pinRef} className="h-screen flex flex-col items-center justify-center overflow-hidden pt-20 md:pt-24">
        {/* Header Section - Always visible */}
        <div className="relative z-10 text-center max-w-3xl mx-auto px-4 mb-8 md:mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            You Have More Policies Than You Think
          </h2>
          <p className="text-xl text-slate-600 font-medium mb-4">
            Most people forget about plans they&apos;ve picked up over the years.
            <br className="hidden md:block" /> How many do you have?
          </p>
          <div className="flex justify-center">
            <PatentBadge />
          </div>
        </div>

        {/* Stacking Cards Container */}
        <div className="relative w-full max-w-md h-[300px] md:h-[400px] flex items-center justify-center perspective-[1000px]">
          {insuranceTypes.map((type, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              // Increased width by ~15% (w-[320px] -> w-[360px] approx)
              className={`absolute w-[320px] md:w-[400px] p-6 md:p-8 rounded-2xl shadow-xl border-2 ${type.border} ${type.color} flex items-center justify-between transform origin-center will-change-transform`}
              style={{
                zIndex: index + 1, // Ensure correct stacking order
              }}
            >
              <span className="text-xl md:text-2xl font-bold text-slate-800">
                {type.name}
              </span>
              <div className="w-10 h-10 rounded-full bg-white/50 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-primary-600" />
              </div>
            </div>
          ))}
        </div>

        {/* Final Reveal Text */}
        <div
          ref={finalTextRef}
          className="relative z-20 mt-8 md:mt-12 bg-white/80 backdrop-blur-md border border-primary-100 p-6 md:p-8 rounded-3xl shadow-2xl max-w-2xl mx-4 text-center transform"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-primary-600 mb-2">
            ✨ Buddy helps you track all of them in one place
          </h3>
          <p className="text-slate-600 font-medium">
            No more lost policies. No more guessing.
          </p>
        </div>
      </div>
    </section>
  );
}

