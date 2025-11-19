"use client";

import { TrendingUp, FolderOpen, ShieldCheck, ArrowRight } from "lucide-react";
import PatentBadge from "./PatentBadge";

const valueProps = [
  {
    icon: <TrendingUp className="w-8 h-8 text-primary-600" />,
    title: "Track Your Real Spend",
    description:
      "Most folks guess too low—by thousands. See what you really spend.",
  },
  {
    icon: <FolderOpen className="w-8 h-8 text-secondary-500" />,
    title: "Sort It All",
    description:
      "From file drawers to your car to your phone—bring all your lost plans to one safe place.",
  },
];

export default function ValueProps() {
  return (
    <section id="features" className="py-12 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 18% Income Stat Callout */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <div className="glass-card p-8 md:p-12 relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-secondary-500" />
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary-100/50 rounded-full blur-3xl group-hover:bg-primary-200/50 transition-colors duration-500" />

            <h3 className="text-5xl md:text-7xl font-bold text-primary-600 mb-4 tracking-tight">
              18% of Income
            </h3>
            <p className="text-xl md:text-2xl text-slate-600 font-medium">
              is normal insurance spending for most households
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
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

          {/* Center Column - Phone Video */}
          <div className="relative">
            <div className="sticky top-24">
              <div className="relative rounded-[2.5rem] border-8 border-slate-900 overflow-hidden shadow-2xl bg-slate-900 aspect-[9/19] max-w-[320px] mx-auto">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/images/app-recording.mp4" type="video/mp4" />
                </video>
              </div>
              {/* Decorative elements behind phone */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 bg-gradient-to-b from-primary-200/30 to-secondary-200/30 blur-3xl rounded-full transform scale-150" />
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

