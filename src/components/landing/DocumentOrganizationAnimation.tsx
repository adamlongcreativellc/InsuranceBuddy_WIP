"use client";

import { useRef, useState, useEffect } from "react";
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

// Different torn paper mask variations
const paperMasks = [
  // Mask 1: Rough edges with medium tears
  `url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' viewBox='0 0 400 200' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'%3E%3Cpath d='M5 8 L12 2 L388 4 L395 12 L398 188 L390 196 L15 198 L8 190 L2 15 Z' fill='black' stroke='black' stroke-width='8' stroke-linejoin='round' stroke-dasharray='8 12' /%3E%3C/svg%3E")`,
  // Mask 2: More aggressive tears
  `url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' viewBox='0 0 400 200' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'%3E%3Cpath d='M8 15 L18 3 L385 6 L393 18 L396 182 L388 194 L20 197 L10 185 L3 20 Z' fill='black' stroke='black' stroke-width='10' stroke-linejoin='round' stroke-dasharray='6 15' /%3E%3C/svg%3E")`,
  // Mask 3: Uneven tears
  `url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' viewBox='0 0 400 200' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'%3E%3Cpath d='M3 12 L15 4 L390 2 L397 15 L399 185 L387 198 L12 196 L5 188 L1 18 Z' fill='black' stroke='black' stroke-width='9' stroke-linejoin='round' stroke-dasharray='10 8' /%3E%3C/svg%3E")`,
  // Mask 4: Fine ragged edges
  `url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' viewBox='0 0 400 200' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'%3E%3Cpath d='M7 10 L14 5 L386 3 L394 14 L397 186 L389 195 L18 199 L9 192 L2 12 Z' fill='black' stroke='black' stroke-width='7' stroke-linejoin='round' stroke-dasharray='5 10' /%3E%3C/svg%3E")`,
  // Mask 5: Heavy damage
  `url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' viewBox='0 0 400 200' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'%3E%3Cpath d='M10 18 L20 4 L382 8 L392 20 L395 180 L385 195 L22 194 L12 186 L4 22 Z' fill='black' stroke='black' stroke-width='11' stroke-linejoin='round' stroke-dasharray='7 14' /%3E%3C/svg%3E")`,
];

export default function DocumentOrganizationAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const finalTextRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [cardStyles, setCardStyles] = useState<Array<{
    widthVariation: number;
    mdWidthVariation: number;
    brightness: number;
    contrast: number;
    shadowX1: number;
    shadowY1: number;
    shadowBlur1: number;
    shadowOpacity1: number;
    shadowX2: number;
    shadowY2: number;
    shadowBlur2: number;
    shadowOpacity2: number;
    maskIndex: number;
  }>>([]);

  // Check for mobile to adjust animation values
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Generate random styles once on mount (client-side only)
  useEffect(() => {
    const styles = insuranceTypes.map(() => ({
      widthVariation: 290 + Math.random() * 60,
      mdWidthVariation: 370 + Math.random() * 60,
      brightness: 0.92 + Math.random() * 0.16,
      contrast: 0.95 + Math.random() * 0.1,
      shadowX1: Math.random() * 4 - 2,
      shadowY1: Math.random() * 4 - 2,
      shadowBlur1: 8 + Math.random() * 8,
      shadowOpacity1: 0.15 + Math.random() * 0.1,
      shadowX2: Math.random() * 2 - 1,
      shadowY2: Math.random() * 2 - 1,
      shadowBlur2: 4 + Math.random() * 4,
      shadowOpacity2: 0.1 + Math.random() * 0.05,
      maskIndex: Math.floor(Math.random() * 5), // Choose from 5 mask variations
    }));
    setCardStyles(styles);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          pin: pinRef.current,
          start: "top top",
          end: "+=2500", // Increased from 1500 to give more time for reading
          scrub: 1,
        },
      });

      // Initial state: cards are off-screen (bottom)
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        // More randomization for tattered paper effect
        const randomRotation = (Math.random() - 0.5) * 70; // Increased from 25 to 70
        const randomX = (Math.random() - 0.5) * 500; // Spread out more horizontally (±250px)
        const randomY = (Math.random() - 0.5) * 240; // Increased for more Y-axis spacing (±120px)
        const randomSkew = (Math.random() - 0.5) * 6; // Add skew for crumpled effect

        tl.fromTo(
          card,
          {
            y: "110vh",
            x: (Math.random() - 0.5) * 300, // Increased from 150 to 300
            rotation: (Math.random() - 0.5) * 120, // Increased from 60 to 120
            opacity: 0,
            scale: 0.7 + Math.random() * 0.2, // Vary initial scale
            skewX: (Math.random() - 0.5) * 15,
            skewY: (Math.random() - 0.5) * 15,
          },
          {
            y: randomY,
            x: randomX,
            rotation: randomRotation,
            skewX: randomSkew,
            skewY: randomSkew * 0.5,
            opacity: 1, // Solid paper - no transparency
            scale: 0.95 + Math.random() * 0.1, // Slight scale variation
            duration: 1,
            ease: "power3.out",
          },
          index * 0.25 // Increased stagger delay for more time between cards
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
  }, [isMobile]);

  return (
    <section ref={containerRef} className="relative min-h-screen bg-slate-50 pb-40 md:pb-56 lg:pb-64">
      <div ref={pinRef} className="h-screen flex flex-col items-center justify-center overflow-hidden pt-20 md:pt-24">
        {/* Combined Header Section */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 mb-8 md:mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight mb-6 leading-tight">
            You Have More Policies Than You Think—And You Probably Don&apos;t Know Where They Are
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
            Most people forget about plans they&apos;ve picked up over the years, scattered across file drawers, glove boxes, phones, computers, and email. How many do you have?
          </p>
        </div>

        {/* Stacking Cards Container */}
        <div className="relative w-full max-w-md h-[300px] md:h-[400px] flex items-center justify-center perspective-[1000px]">
          {insuranceTypes.map((type, index) => {
            const style = cardStyles[index];
            return (
              <div
                key={index}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                className={`absolute transform origin-center will-change-transform`}
                style={
                  style
                    ? {
                        zIndex: index + 1,
                        width: `${isMobile ? style.widthVariation : style.mdWidthVariation}px`,
                        filter: `drop-shadow(${style.shadowX1}px ${style.shadowY1}px ${style.shadowBlur1}px rgba(0,0,0,${style.shadowOpacity1})) drop-shadow(${style.shadowX2}px ${style.shadowY2}px ${style.shadowBlur2}px rgba(0,0,0,${style.shadowOpacity2})) brightness(${style.brightness}) contrast(${style.contrast})`,
                      }
                    : {
                        zIndex: index + 1,
                      }
                }
              >
                <div
                  className={`relative p-6 md:p-8 border-2 ${type.border} ${type.color} flex items-center justify-center overflow-hidden`}
                  style={{
                    maskImage: style ? paperMasks[style.maskIndex] : paperMasks[0],
                    WebkitMaskImage: style ? paperMasks[style.maskIndex] : paperMasks[0],
                    maskSize: "100% 100%",
                    maskRepeat: "no-repeat",
                    WebkitMaskSize: "100% 100%",
                    WebkitMaskRepeat: "no-repeat",
                  }}
                >
                  {/* Paper grain texture */}
                  <div
                    className="absolute inset-0 opacity-20 pointer-events-none"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    }}
                  />

                  {/* Content - Just the text, no icon */}
                  <div className="relative z-10 w-full text-center">
                    <span className="text-xl md:text-2xl font-bold text-slate-800">
                      {type.name}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Final Reveal Text */}
        <div
          ref={finalTextRef}
          className="relative z-20 mt-20 md:mt-32 bg-white/80 backdrop-blur-md border border-primary-100 p-6 md:p-8 rounded-3xl shadow-2xl max-w-2xl mx-4 text-center transform"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-primary-600 mb-2">
            ✨ All Sorted in One Place
          </h3>
          <p className="text-slate-600 font-medium">
            Buddy brings it all together—safe, sorted, and always there for you.
          </p>
        </div>
      </div>
    </section>
  );
}
