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
      "Track what you really pay and see where your cash goes. Most folks are shocked by how much they spend.",
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
      className="py-20 md:py-32 bg-gradient-to-b from-slate-50 to-white"
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
          <div className="flex flex-col gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                onClick={() => handleStepClick(index)}
                className={`
                  p-6 rounded-2xl cursor-pointer border-2 transition-all duration-300
                  ${activeTab === index
                    ? "border-primary-500 bg-primary-50/50 shadow-lg scale-[1.02]"
                    : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
                  }
                `}
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <div
                      className={`
                        w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold transition-colors duration-300
                        ${activeTab === index
                          ? "bg-primary-600 text-white"
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

          <div className="relative h-[600px] md:h-[740px] w-full max-w-md mx-auto md:max-w-none">
            <div className="sticky top-24 w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-slate-900 bg-slate-100">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`
                    absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in-out
                    ${activeTab === index
                      ? "opacity-100 translate-x-0 pointer-events-auto"
                      : activeTab > index
                        ? "opacity-0 -translate-x-full pointer-events-none"
                        : "opacity-0 translate-x-full pointer-events-none"
                    }
                  `}
                >
                  <div className="relative w-full h-full bg-slate-200">
                    {/* Placeholder for screenshot if image fails to load or is missing */}
                    <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium">
                      App Screenshot: {step.title}
                    </div>
                    <Image
                      src={step.screenshot}
                      alt={`${step.title} screenshot`}
                      fill
                      className="object-cover object-top"
                      priority={index === 0}
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
