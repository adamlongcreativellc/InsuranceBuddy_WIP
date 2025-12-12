"use client";

import { Upload, BookOpen, Search } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import PatentBadge from "./PatentBadge";

const steps = [
  {
    id: 0,
    number: "1",
    icon: Upload,
    title: "Upload Your Plans",
    description:
      "Take a photo or upload a file. That's it. Auto, health, home, life—bring all your papers.",
    screenshot: "/images/app-screenshot-upload.png",
  },
  {
    id: 1,
    number: "2",
    icon: BookOpen,
    title: "Buddy Sorts It All",
    description:
      "Buddy reads your plans in seconds and sorts all the key bits—what you're covered for, what you pay, and when.",
    screenshot: "/images/app-screenshot-document-review.png",
  },
  {
    id: 2,
    number: "3",
    icon: Search,
    title: "See Your Real Spend",
    description:
      "Track what you really pay and see where your cash goes. Most people are shocked by how much they spend.",
    screenshot: "/images/app-screenshot-policy-search.png",
  },
];

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % steps.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleStepClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <section
      id="how-it-works"
      className="py-20 md:py-32 bg-gradient-to-b from-slate-50 via-white to-primary-50/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-6">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            How It Works
          </h2>
          <p className="text-xl text-slate-600 font-medium">
            Three easy steps to sort and see your insurance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div role="tablist" aria-label="How it works steps" className="flex flex-col gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                id={`step-tab-${index}`}
                role="tab"
                tabIndex={activeTab === index ? 0 : -1}
                aria-selected={activeTab === index}
                aria-controls={`step-panel-${index}`}
                onClick={() => handleStepClick(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleStepClick(index);
                  }
                }}
                className={`
                  p-6 rounded-2xl cursor-pointer border-2 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2
                  ${activeTab === index
                    ? "border-primary-500 bg-gradient-to-r from-primary-50 to-white shadow-lg scale-[1.02]"
                    : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
                  }
                `}
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <div
                      className={`
                        w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold transition-all duration-300
                        ${activeTab === index
                          ? "bg-gradient-to-br from-primary-600 to-primary-500 text-white shadow-md"
                          : "bg-slate-200 text-slate-500"
                        }
                      `}
                    >
                      {step.number}
                    </div>
                    <h3
                      className={`text-2xl font-bold transition-colors duration-300 ${activeTab === index ? "text-primary-700" : "text-slate-800"
                        }`}
                    >
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-lg text-slate-600 pl-16">
                    {step.description}
                  </p>

                  {index === 1 && activeTab === 1 && (
                    <div className="pl-16 mt-2 animate-in fade-in slide-in-from-top-2 duration-500">
                      <div className="grid grid-cols-3 gap-4 mb-4">
                        <div className="text-center p-2 bg-white rounded-lg border border-slate-100 shadow-sm">
                          <div className="text-xl font-bold text-primary-600">458</div>
                          <div className="text-xs text-slate-500 font-medium">Policy Elements</div>
                        </div>
                        <div className="text-center p-2 bg-white rounded-lg border border-slate-100 shadow-sm">
                          <div className="text-xl font-bold text-primary-600">30s</div>
                          <div className="text-xs text-slate-500 font-medium">Read Time</div>
                        </div>
                        <div className="text-center p-2 bg-white rounded-lg border border-slate-100 shadow-sm">
                          <div className="text-xl font-bold text-primary-600">99%+</div>
                          <div className="text-xs text-slate-500 font-medium">Accurate</div>
                        </div>
                      </div>
                      <PatentBadge size="small" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="relative h-[600px] md:h-[740px] w-full max-w-md mx-auto md:max-w-none perspective-1000">
            <div className="sticky top-24 w-full h-full flex items-center justify-center">
              {/* iPhone Mockup Container */}
              <div className="relative w-[320px] md:w-[360px] h-[650px] md:h-[720px] bg-slate-900 rounded-[3rem] shadow-2xl border-[8px] border-slate-900 overflow-hidden ring-1 ring-slate-900/50 transform transition-transform duration-500 hover:scale-[1.02]">
                {/* Dynamic Island / Notch Area */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl z-20 flex items-center justify-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-800/50"></div>
                  <div className="w-12 h-1.5 rounded-full bg-slate-800/50"></div>
                </div>

                {/* Screen Content */}
                <div className="relative w-full h-full bg-white overflow-hidden">
                  {/* Status Bar Placeholder */}
                  <div className="h-12 w-full bg-white z-10 relative flex justify-between items-center px-6 pt-2">
                    <div className="text-xs font-bold text-slate-900">9:41</div>
                    <div className="flex gap-1.5">
                      <div className="w-4 h-2.5 bg-slate-900 rounded-[1px]"></div>
                      <div className="w-4 h-2.5 bg-slate-900 rounded-[1px]"></div>
                      <div className="w-5 h-2.5 border border-slate-900 rounded-[2px] relative">
                        <div className="absolute inset-0.5 bg-slate-900"></div>
                      </div>
                    </div>
                  </div>

                  {steps.map((step, index) => (
                    <div
                      key={index}
                      id={`step-panel-${index}`}
                      role="tabpanel"
                      aria-labelledby={`step-tab-${index}`}
                      hidden={activeTab !== index}
                      className={`
                        absolute top-0 left-0 w-full h-full pt-12 transition-all duration-500 ease-in-out
                        ${activeTab === index
                          ? "opacity-100 translate-x-0 pointer-events-auto"
                          : activeTab > index
                            ? "opacity-0 -translate-x-full pointer-events-none"
                            : "opacity-0 translate-x-full pointer-events-none"
                        }
                      `}
                    >
                      <div className="relative w-full h-full bg-slate-50 flex flex-col">
                        {/* App Header Placeholder */}
                        <div className="px-6 py-4 bg-white border-b border-slate-100 flex items-center justify-between">
                          <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
                            <step.icon className="w-4 h-4" />
                          </div>
                          <div className="font-bold text-slate-900">{step.title}</div>
                          <div className="w-8"></div>
                        </div>

                        {/* Screenshot Image */}
                        <div className="relative flex-1 w-full overflow-hidden group">
                          <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium bg-slate-100">
                            <div className="text-center p-8">
                              <p className="mb-2">App Screenshot</p>
                              <p className="text-sm opacity-70">{step.title}</p>
                            </div>
                          </div>
                          <Image
                            src={step.screenshot}
                            alt={`${step.title} screenshot`}
                            fill
                            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                            priority={index === 0}
                          />
                        </div>

                        {/* App Bottom Nav Placeholder */}
                        <div className="h-20 bg-white border-t border-slate-100 flex justify-around items-center px-6 pb-4">
                          <div className="w-6 h-6 rounded-full bg-primary-600/10"></div>
                          <div className="w-6 h-6 rounded-full bg-slate-100"></div>
                          <div className="w-12 h-12 rounded-full bg-primary-600 -mt-8 border-4 border-white shadow-lg flex items-center justify-center">
                            <div className="w-6 h-6 text-white">+</div>
                          </div>
                          <div className="w-6 h-6 rounded-full bg-slate-100"></div>
                          <div className="w-6 h-6 rounded-full bg-slate-100"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Home Indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white rounded-full z-20"></div>
              </div>

              {/* Device Shadow/Glow */}
              <div className="absolute -inset-4 bg-primary-500/20 blur-3xl -z-10 rounded-full opacity-50 animate-pulse-glow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
