"use client";

import { useEffect, useRef, useState } from "react";
import { TrendingUp, FolderOpen, ArrowRight } from "lucide-react";
import PatentBadge from "./PatentBadge";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const valueProps = [
  {
    icon: <TrendingUp className="w-8 h-8 text-primary-600" />,
    title: "Track Your Real Spend",
    description:
      "Most people guess too low—by thousands. See what you really spend.",
  },
  {
    icon: <FolderOpen className="w-8 h-8 text-secondary-500" />,
    title: "Sort It All",
    description:
      "From file drawers to your car to your phone—bring all your lost plans to one safe place.",
  },
];

export default function ValueProps() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [animatedNumber, setAnimatedNumber] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Timeline for coordinated animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",      // Start when top of element is 80% down viewport
          end: "top 30%",        // End when top is 30% down viewport
          scrub: 1,              // Smooth scrubbing with 1 second lag
          toggleActions: "play reverse play reverse"
        }
      });

      // Fade in and slide up
      tl.fromTo(
        containerRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );

      // Animate number
      tl.to(
        { value: 0 },
        {
          value: 18,
          duration: 1,
          ease: "power2.out",
          onUpdate: function() {
            setAnimatedNumber(Math.round(this.targets()[0].value));
          }
        },
        "<" // Start at same time as fade
      );
    });

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <section id="features" className="py-12 md:py-5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 18% Income Stat Callout */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <div ref={containerRef} className="p-8 md:p-6 relative overflow-hidden">
            <h3 className="text-5xl md:text-7xl font-bold text-primary-600 mb-4 tracking-tight">
              {animatedNumber}% of Your Annual Income
            </h3>
            <p className="text-xl md:text-2xl text-slate-600 font-medium">
              is normal insurance spending for most households
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Left Column - First card */}
          <div className="h-full">
            <div className="glass p-8 h-full rounded-2xl hover:border-primary-200 hover:bg-gradient-to-br hover:from-white hover:to-primary-50 transition-all duration-300 flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {valueProps[0].icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {valueProps[0].title}
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                {valueProps[0].description}
              </p>
            </div>
          </div>

          {/* Right Column - Second card */}
          <div className="h-full">
            <div className="glass p-8 h-full rounded-2xl hover:border-secondary-200 hover:bg-gradient-to-br hover:from-white hover:to-secondary-50 transition-all duration-300 flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-secondary-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {valueProps[1].icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {valueProps[1].title}
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                {valueProps[1].description}
              </p>
            </div>
          </div>
        </div>

        {/* AI Capabilities Stats */}
        <div className="mt-24 mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { value: "458", label: "Policy Elements", color: "text-primary-600" },
              { value: "30s", label: "Read Time", color: "text-secondary-600" },
              { value: "99%+", label: "Accurate", color: "text-accent-500" },
            ].map((stat, index) => (
              <div key={index} className="glass p-8 rounded-2xl text-center hover:transform hover:-translate-y-1 transition-all duration-300">
                <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-slate-600 font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Challenge CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-primary-600 to-primary-500 rounded-3xl p-8 md:p-12 text-center text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />

            <div className="relative z-10 flex flex-col items-center gap-6">
              <h3 className="text-2xl md:text-3xl font-bold">
                Don&apos;t believe us?
              </h3>
              <PatentBadge className="bg-white/20 text-white border-white/30" />
              <a
                href="#beta-signup"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 rounded-xl font-bold text-lg hover:bg-primary-50 transition-colors shadow-lg"
              >
                Download for Free and See for Yourself
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
