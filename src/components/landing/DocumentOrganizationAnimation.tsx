"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PatentBadge from "./PatentBadge";

gsap.registerPlugin(ScrollTrigger);

// Document items scattered randomly around center
const documentItems = [
  { emoji: "📄", label: "Auto Policy", startX: 35, startY: -445 },
  { emoji: "📋", label: "Health Insurance", startX: 380, startY: -195 },
  { emoji: "🗂️", label: "File Cabinet", startX: 340, startY: 235 },
  { emoji: "📱", label: "Phone Photos", startX: -25, startY: 470 },
  { emoji: "💼", label: "Work Benefits", startX: -385, startY: 190 },
  { emoji: "🏠", label: "Home Policy", startX: -340, startY: -245 },
  { emoji: "🚗", label: "Car Insurance", startX: 425, startY: -125 },
  { emoji: "💻", label: "Computer Files", startX: 285, startY: 330 },
  { emoji: "📧", label: "Email Docs", startX: -315, startY: 285 },
  { emoji: "🧾", label: "Receipts", startX: -275, startY: -340 },
  { emoji: "📑", label: "Life Insurance", startX: 465, startY: 45 },
  { emoji: "🗄️", label: "Storage Box", startX: -455, startY: -20 },
  { emoji: "📲", label: "Phone Storage", startX: 195, startY: -380 },
  { emoji: "📦", label: "Storage Tub", startX: -215, startY: 395 },
  { emoji: "🧤", label: "Glove Box", startX: 410, startY: -235 },
  { emoji: "🍽️", label: "Kitchen Drawer", startX: -395, startY: -165 },
  { emoji: "📚", label: "Bookshelf", startX: 235, startY: 365 },
  { emoji: "🔒", label: "Lockbox", startX: -295, startY: -315 },
  { emoji: "🏦", label: "Safety Deposit", startX: 500, startY: -85 },
  { emoji: "🔐", label: "Safe", startX: -475, startY: 135 },
  { emoji: "💾", label: "Computer Backup", startX: 155, startY: -495 },
  { emoji: "🖊️", label: "Desk Drawer", startX: -125, startY: 485 },
  // Additional scattered duplicates for fuller effect
  { emoji: "📄", label: "Policy Document", startX: -520, startY: -280 },
  { emoji: "📋", label: "Insurance Form", startX: 125, startY: 510 },
  { emoji: "🗂️", label: "Filing Cabinet", startX: -165, startY: -520 },
  { emoji: "📱", label: "Mobile Device", startX: 485, startY: 220 },
  { emoji: "💼", label: "Briefcase", startX: -95, startY: 315 },
  { emoji: "🚗", label: "Vehicle", startX: 215, startY: -475 },
  { emoji: "💻", label: "Laptop", startX: -445, startY: 425 },
  { emoji: "📧", label: "Email", startX: 540, startY: -265 },
  { emoji: "🧾", label: "Paper Receipt", startX: -185, startY: -185 },
  { emoji: "📑", label: "Documents", startX: 335, startY: 445 },
  { emoji: "🗄️", label: "File Drawer", startX: -510, startY: 315 },
  { emoji: "📦", label: "Box", startX: 75, startY: -295 },
  { emoji: "🔒", label: "Lock", startX: 525, startY: 155 },
  { emoji: "🔐", label: "Secure Box", startX: -235, startY: 525 },
  { emoji: "💾", label: "Disk", startX: 405, startY: -405 },
  { emoji: "📚", label: "Books", startX: -425, startY: -95 },
  { emoji: "🏠", label: "House", startX: 165, startY: 235 },
  { emoji: "📱", label: "Phone", startX: -355, startY: -435 },
  { emoji: "💼", label: "Work Bag", startX: 465, startY: 375 },
];

export default function DocumentOrganizationAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (!containerRef.current || !pinRef.current) return;

    // Create GSAP ScrollTrigger for scroll-pinning
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        pin: pinRef.current,
        start: "top top",
        end: "+=1200", // Further reduced to make it snappier
        scrub: 1,
        onUpdate: (self) => {
          setScrollProgress(self.progress);
        },
      });
    });

    return () => ctx.revert();
  }, []);

  // Calculate Buddy's position based on scroll progress
  const getBuddyPosition = () => {
    return { x: 0, y: 0, scale: 1 };
  };

  const buddyPos = getBuddyPosition();

  // Calculate position for each document based on scroll progress
  const getDocumentStyle = (item: typeof documentItems[0]) => {
    const progress = scrollProgress;

    // Interpolate position from start to center (0, 0)
    const currentX = item.startX * (1 - progress);
    const currentY = item.startY * (1 - progress);

    // Scale down as they converge
    const scale = 1 - progress * 0.8;

    // Fade in faster - reaches full opacity at 0.4 progress, then fades out
    // Chaos text fades out around 0.4-0.5, so we match that
    const opacity = progress < 0.3 ? progress * 3.3 : progress < 0.4 ? 1 : Math.max(0, 1 - (progress - 0.4) * 5);

    return {
      transform: `translate(${currentX}px, ${currentY}px) scale(${scale})`,
      opacity: Math.max(0, Math.min(1, opacity)),
      zIndex: 0,
    };
  };

  return (
    <section
      ref={containerRef}
      className="min-h-screen relative py-10 -mt-12 md:-mt-16 bg-transparent overflow-hidden"
    >
      <div
        ref={pinRef}
        className="h-[70vh] flex flex-col items-center justify-center relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 w-full flex flex-col items-center">

          {/* Header text */}
          <div className="absolute top-16 md:top-20 left-0 right-0 z-20 px-4 text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4 drop-shadow-sm">
              Do you know where all your <br></br> insurance docs are?
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-4 font-medium">
              File drawers, glove boxes, phones, computers, email—total chaos.
            </p>
            <div className="flex justify-center mt-2">
              <PatentBadge className="bg-white/50 backdrop-blur-sm" />
            </div>
          </div>

          {/* Animation container */}
          <div className="relative w-full max-w-5xl h-[500px] md:h-[600px] flex items-center justify-center shrink-0">
            {/* Scattered documents */}
            {documentItems.map((item, index) => (
              <div
                key={index}
                className="absolute text-5xl md:text-6xl will-change-transform pointer-events-none select-none"
                style={getDocumentStyle(item)}
                role="img"
                aria-label={item.label}
              >
                {item.emoji}
              </div>
            ))}

            {/* Chaos messaging - floating questions */}
            <div
              className={`absolute top-[15%] md:top-[20%] left-[5%] md:left-[10%] transition-opacity duration-300 pointer-events-none ${scrollProgress > 0.1 && scrollProgress < 0.35 ? "opacity-100" : "opacity-0"
                }`}
            >
              <div className="glass-card px-6 py-3 text-rose-500 font-medium italic text-lg shadow-lg">
                &ldquo;How much is my renters insurance?&rdquo;
              </div>
            </div>

            <div
              className={`absolute top-[68%] md:top-[70%] right-[8%] md:right-[12%] transition-opacity duration-300 pointer-events-none ${scrollProgress > 0.2 && scrollProgress < 0.45 ? "opacity-100" : "opacity-0"
                }`}
            >
              <div className="glass-card px-6 py-3 text-rose-500 font-medium italic text-lg shadow-lg">
                &ldquo;What are we paying for car insurance?&rdquo;
              </div>
            </div>

            <div
              className={`absolute bottom-[18%] md:bottom-[20%] left-[8%] md:left-[15%] transition-opacity duration-300 pointer-events-none ${scrollProgress > 0.15 && scrollProgress < 0.4 ? "opacity-100" : "opacity-0"
                }`}
            >
              <div className="glass-card px-6 py-3 text-rose-500 font-medium italic text-lg shadow-lg">
                &ldquo;Maybe the desk?&rdquo;
              </div>
            </div>

            {/* Additional chaos questions */}
            <div
              className={`absolute top-[10%] md:top-[15%] right-[5%] md:right-[12%] transition-opacity duration-300 pointer-events-none ${scrollProgress > 0.05 && scrollProgress < 0.3 ? "opacity-100" : "opacity-0"
                }`}
            >
              <div className="glass-card px-6 py-3 text-rose-500 font-medium italic text-lg shadow-lg">
                &ldquo;What do we pay for life insurance?&rdquo;
              </div>
            </div>

            <div
              className={`absolute top-[32%] md:top-[35%] left-[3%] md:left-[8%] transition-opacity duration-300 pointer-events-none ${scrollProgress > 0.18 && scrollProgress < 0.42 ? "opacity-100" : "opacity-0"
                }`}
            >
              <div className="glass-card px-6 py-3 text-rose-500 font-medium italic text-lg shadow-lg">
                &ldquo;Is it in my email?&rdquo;
              </div>
            </div>

            <div
              className={`absolute top-[50%] md:top-[52%] right-[5%] md:right-[10%] transition-opacity duration-300 pointer-events-none ${scrollProgress > 0.25 && scrollProgress < 0.48 ? "opacity-100" : "opacity-0"
                }`}
            >
              <div className="glass-card px-6 py-3 text-rose-500 font-medium italic text-lg shadow-lg">
                &ldquo;Check the storage box?&rdquo;
              </div>
            </div>

            <div
              className={`absolute bottom-[8%] md:bottom-[10%] right-[25%] md:right-[30%] transition-opacity duration-300 pointer-events-none ${scrollProgress > 0.12 && scrollProgress < 0.38 ? "opacity-100" : "opacity-0"
                }`}
            >
              <div className="glass-card px-6 py-3 text-rose-500 font-medium italic text-lg shadow-lg">
                &ldquo;Which phone has it?&rdquo;
              </div>
            </div>

            <div
              className={`absolute top-[52%] md:top-[55%] left-[5%] md:left-[10%] transition-opacity duration-300 pointer-events-none ${scrollProgress > 0.22 && scrollProgress < 0.46 ? "opacity-100" : "opacity-0"
                }`}
            >
              <div className="glass-card px-6 py-3 text-rose-500 font-medium italic text-lg shadow-lg">
                &ldquo;Filing cabinet or desk?&rdquo;
              </div>
            </div>

            {/* Center logo - Buddy */}
            <div
              className="absolute z-10 w-40 h-40 md:w-56 md:h-56 rounded-full bg-primary-600 flex items-center justify-center overflow-hidden will-change-transform animate-breathe"
              style={{
                boxShadow: `0 8px 32px rgba(37, 99, 235, ${0.3 + scrollProgress * 0.4})`,
                transform: `translate(${buddyPos.x}px, ${buddyPos.y}px) scale(${buddyPos.scale})`,
              }}
            >
              <div className="relative w-[85%] h-[85%] drop-shadow-lg">
                <Image
                  src="https://res.cloudinary.com/dzcrxivpm/image/upload/v1760720724/buddy_website_i9yk5a.webp"
                  alt="InsuranceBuddy Mascot"
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
            </div>
          </div>

          {/* Bottom text - Relative positioning to be closer to Buddy */}
          <div
            className={`relative -mt-24 md:-mt-32 z-20 text-center transition-opacity duration-300 ${scrollProgress > 0.45 ? "opacity-100" : "opacity-0"
              }`}
            style={{
              // Fade in earlier (starting at 0.45)
              opacity: scrollProgress > 0.45 ? Math.min(1, (scrollProgress - 0.45) * 4) : 0,
            }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-primary-600 mb-3 drop-shadow-sm">
              ✨ All Sorted in One Place
            </h3>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
              Buddy brings it all together—safe, sorted, and always there for you.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-16 left-1/2 -translate-x-1/2 transition-opacity duration-300 ${scrollProgress < 0.1 ? "opacity-100" : "opacity-0"
          }`}
      >
        <div className="flex flex-col items-center gap-2 text-slate-500 text-sm font-medium animate-bounce">
          Scroll to organize
          <span className="text-2xl">↓</span>
        </div>
      </div>
    </section>
  );
}

