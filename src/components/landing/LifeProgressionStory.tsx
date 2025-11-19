"use client";

import { Home, Car, Ship, Truck, Bike, Gem } from "lucide-react";
import { useState, useEffect, useRef } from "react";

// Life milestones with spending progression
const lifeMilestones = [
  { age: 25, spending: 2500, events: [] },
  { age: 35, spending: 12000, events: [{ icon: Home, label: "House" }, { icon: Gem, label: "Married" }] },
  { age: 45, spending: 25000, events: [{ icon: Car, label: "Cars" }, { icon: Ship, label: "Boat" }] },
  { age: 59, spending: 40000, events: [{ icon: Truck, label: "RV" }, { icon: Bike, label: "Motorcycle" }] },
];

export default function LifeProgressionStory() {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const interval = setInterval(() => {
            setVisibleIndex((prev) => {
              if (prev < lifeMilestones.length - 1) {
                return prev + 1;
              }
              clearInterval(interval);
              return prev;
            });
          }, 1200); // Progress every 1.2 seconds

          return () => clearInterval(interval);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const currentMilestone = lifeMilestones[visibleIndex];
  const allVisibleEvents = lifeMilestones
    .slice(0, visibleIndex + 1)
    .flatMap((m) => m.events);

  return (
    <section
      ref={containerRef}
      id="life-progression"
      className="py-20 md:py-20 bg-slate-50 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary-100/40 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary-100/40 rounded-full blur-3xl translate-x-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col gap-16">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Real Folks, Real Shocks
            </h2>
            <p className="text-xl text-slate-600 font-medium">
              Watch how life adds up. Most folks have no idea how much they really spend.
            </p>
          </div>

          {/* Main Content - Split Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Age Timeline */}
            <div className="relative py-8 pl-8 md:pl-12">
              {/* Timeline line */}
              <div className="absolute left-[43px] md:left-[59px] top-12 bottom-12 w-1 bg-primary-200 rounded-full" />

              {/* Milestones */}
              <div className="flex flex-col gap-12">
                {lifeMilestones.map((milestone, index) => (
                  <div
                    key={milestone.age}
                    className={`relative pl-12 transition-all duration-700 ease-out ${index <= visibleIndex
                      ? "opacity-100 translate-x-0"
                      : "opacity-30 -translate-x-4"
                      }`}
                  >
                    {/* Timeline dot */}
                    <div
                      className={`absolute left-0 top-2 w-6 h-6 rounded-full border-4 border-white transition-all duration-500 ${index <= visibleIndex
                        ? "bg-primary-600 scale-125 shadow-[0_0_0_4px_rgba(37,99,235,0.2)]"
                        : "bg-slate-300 scale-100"
                        }`}
                    />

                    <h4
                      className={`text-2xl font-bold mb-3 ${index <= visibleIndex ? "text-primary-700" : "text-slate-400"
                        }`}
                    >
                      Age {milestone.age}
                    </h4>

                    {/* Life events icons */}
                    {milestone.events.length > 0 && index <= visibleIndex && (
                      <div className="flex flex-wrap gap-3">
                        {milestone.events.map((event, eventIndex) => (
                          <div
                            key={eventIndex}
                            className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-lg shadow-sm border border-primary-100 text-primary-700 text-sm font-semibold animate-in fade-in slide-in-from-bottom-2 duration-500 fill-mode-forwards"
                            style={{ animationDelay: `${eventIndex * 200}ms` }}
                          >
                            <event.icon className="w-4 h-4" />
                            <span>{event.label}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Spending Counter */}
            <div>
              <div className="glass-card p-8 md:p-12 text-center transform transition-all duration-500 hover:shadow-2xl border-t-4 border-t-primary-500">
                <p className="text-lg text-slate-500 font-medium mb-4 uppercase tracking-wider">
                  Insurance Spend Each Year
                </p>

                <div className="text-6xl md:text-7xl font-bold text-primary-600 mb-8 tracking-tight transition-all duration-500">
                  ${currentMilestone.spending.toLocaleString()}
                </div>

                {/* All collected life events displayed as icons */}
                <div className="flex flex-wrap justify-center gap-3 min-h-[80px]">
                  {allVisibleEvents.map((event, index) => (
                    <div
                      key={index}
                      className="w-14 h-14 rounded-full bg-primary-50 flex items-center justify-center text-primary-600 animate-in zoom-in duration-300 fill-mode-forwards shadow-sm"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <event.icon className="w-7 h-7" />
                    </div>
                  ))}
                </div>

                {visibleIndex === lifeMilestones.length - 1 && (
                  <div className="mt-8 pt-8 border-t border-slate-100 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <p className="text-lg text-rose-500 font-bold mb-2">
                      Most folks guess: $10,000
                    </p>
                    <p className="text-2xl text-slate-700">
                      Real cost? <strong className="text-slate-900">${currentMilestone.spending.toLocaleString()}/year</strong>
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="bg-primary-50 rounded-2xl p-8 text-center border border-primary-100 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-primary-800 mb-2">
              Life adds up fast—but you don&apos;t have to guess.
            </h3>
            <p className="text-primary-700/80">
              Buddy shows you what you really spend. No advice, no judgment – just facts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
