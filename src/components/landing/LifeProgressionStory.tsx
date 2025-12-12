"use client";

import { Home, Car, Ship, Truck, Bike, Gem } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Life milestones with spending progression and associated images
const lifeMilestones = [
  {
    age: 25,
    spending: 2500,
    image: "https://res.cloudinary.com/dzcrxivpm/image/upload/v1765482363/1PR_Male_mg3hji.webp",
    events: []
  },
  {
    age: 35,
    spending: 12000,
    image: "https://res.cloudinary.com/dzcrxivpm/image/upload/v1765482364/2PR_MarriageHouse_ybuwtc.webp",
    events: [{ icon: Home, label: "House" }, { icon: Gem, label: "Married" }]
  },
  {
    age: 45,
    spending: 25000,
    image: "https://res.cloudinary.com/dzcrxivpm/image/upload/v1765482364/3PR_FamilyVehicles_oiaaf5.webp",
    events: [{ icon: Car, label: "Cars" }, { icon: Ship, label: "Boat" }]
  },
  {
    age: 59,
    spending: 40000,
    image: "https://res.cloudinary.com/dzcrxivpm/image/upload/v1765482364/4Retirement_hykece.webp",
    events: [{ icon: Truck, label: "RV" }, { icon: Bike, label: "Motorcycle" }]
  },
];

export default function LifeProgressionStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {

    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          pin: pinRef.current,
          start: "top top",
          end: "+=3000", // Standard scroll distance for 4 items
          scrub: 0.5,
          onUpdate: (self) => {
            // Map progress 0-1 to index 0-3
            const progress = self.progress;
            // Add a small buffer to make the last item reachable/stable
            const index = Math.min(
              lifeMilestones.length - 1,
              Math.floor(progress * lifeMilestones.length)
            );
            setVisibleIndex(index);
          }
        },
      });

      // We can add specific animations to the timeline if needed,
      // but for now we drive state via onUpdate for React re-renders of the content
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative bg-slate-50">
      <div ref={pinRef} className="h-screen w-full flex flex-col items-center justify-center overflow-hidden relative pt-20">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary-100/40 rounded-full blur-3xl -translate-x-1/2" />
          <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-secondary-100/30 rounded-full blur-3xl translate-x-1/3" />
        </div>

        <div className="max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex flex-col">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto pt-8 md:pt-12 mb-8 md:mb-12 shrink-0">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
              Real people, Real Shocks
            </h2>
            <p className="text-lg md:text-xl text-slate-600 font-medium">
              Watch how life adds up.
            </p>
          </div>

          {/* Main Content - Pinned Layout */}
          {/* Reduced gap and max-width to bring elements closer */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center flex-grow pb-12">

            {/* Left: Timeline Display (Updates based on scroll state) */}
            <div className="relative flex justify-end">
              {/* Timeline line - Positioned relative to the content block now */}
              <div className="absolute right-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-200 via-primary-300 to-transparent rounded-full opacity-30 mr-[-20px] hidden md:block" />

              <div className="flex flex-col gap-16 relative w-full max-w-[300px] md:pr-8 border-r-2 border-primary-200/30">
                {lifeMilestones.map((milestone, index) => (
                  <div
                    key={milestone.age}
                    className={`relative flex flex-col items-end text-right transition-all duration-500 ease-out pr-6 ${
                      // Only highlight the current one, fade others slightly
                      index === visibleIndex
                        ? "opacity-100 scale-105"
                        : "opacity-40 scale-100 blur-[1px]"
                      }`}
                  >
                    {/* Timeline Dot */}
                    <div
                      className={`absolute -right-[7px] top-1 w-3 h-3 rounded-full border-2 border-white transition-all duration-300 z-10 ${index === visibleIndex
                          ? "bg-primary-600 scale-150 ring-4 ring-primary-100"
                          : "bg-slate-300"
                        }`}
                    />

                    <h4 className="text-3xl font-bold text-slate-900 mb-2">
                      Age {milestone.age}
                    </h4>

                    <p className="text-xl text-primary-600 font-bold mb-4">
                      ${milestone.spending.toLocaleString()}/yr
                    </p>

                    {/* Events Badge Row */}
                    <div className="flex flex-wrap justify-end gap-2">
                      {milestone.events.map((event, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 px-3 py-1 bg-white rounded-full shadow-sm border border-primary-100 text-sm text-slate-700">
                          <event.icon className="w-3.5 h-3.5 text-primary-500" />
                          <span>{event.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Images (Absolute raw, no frames) */}
            <div className="relative w-full h-[50vh] md:h-[60vh] flex items-center justify-start pl-8">
              {lifeMilestones.map((milestone, index) => (
                <div
                  key={milestone.age}
                  className={`absolute inset-0 transition-opacity duration-500 ease-in-out flex items-center justify-start ${index === visibleIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                    }`}
                >
                  <div className="relative w-full max-w-sm h-full">
                    <Image
                      src={milestone.image}
                      alt={`Timeline age ${milestone.age}`}
                      fill
                      className="object-contain object-left"
                      priority={index === 0}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
