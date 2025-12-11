"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import EarlyAccessDialog from "./EarlyAccessDialog";

export default function Hero() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <section className="relative pt-32 pb-32 md:pt-40 md:pb-40 lg:pb-60 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary-100/50 rounded-full blur-3xl opacity-60 animate-float-slow" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-secondary-100/40 rounded-full blur-3xl opacity-50 animate-float" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-25 items-center">
          {/* Text Content */}
          <div className="lg:col-span-6 flex flex-col gap-6 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-[3rem] xl:text-[3.25rem] 2xl:text-[3.5rem] font-bold leading-[1.15] tracking-tight text-slate-900">
              Do You Know What <br />
              You&apos;re{" "}
              <span className="relative inline-block text-primary-600">
                Really
                <svg
                  className="absolute left-0 right-0 -bottom-2 w-full h-4 text-primary-500"
                  viewBox="0 0 120 12"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2,9 C10,8 15,10 25,8.5 C35,7 42,9.5 52,7.5 C62,6 70,8 80,6 C90,4.5 98,6 108,4 C112,3.5 116,3 118,2.5"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-500">
                $pending
              </span>{" "}
              <br />
              on Insurance?
            </h1>

            {/* Mobile-only Buddy Mascot (Above the fold) - HIDDEN */}
            {/* <div className="lg:hidden relative w-48 h-48 mx-auto -my-4 animate-float-slow z-10">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-200 to-secondary-200 rounded-full blur-2xl opacity-40 animate-pulse-glow" />
              <div className="relative w-full h-full flex items-center justify-center">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-[110%] max-w-none drop-shadow-xl"
                  style={{ background: 'transparent' }}
                >
                  <source
                    src="https://res.cloudinary.com/dzcrxivpm/video/upload/v1760106640/buddyanimate_rokrov.webm"
                    type="video/webm"
                  />
                  <source
                    src="https://res.cloudinary.com/dzcrxivpm/video/upload/v1760106640/buddyanimate_rokrov.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div> */}

            <p className="text-base sm:text-lg lg:text-lg xl:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 font-medium">
              InsuranceBuddy™ is your faithful companion that finally reveals how much you&apos;re really spending on insurance and organizes all your scattered policies into one secure place.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center lg:justify-start">
              <div className="flex flex-col items-center sm:items-start">
                <button
                  onClick={() => setDialogOpen(true)}
                  className="group relative px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-primary-500/30 transition-all duration-300 flex items-center gap-2"
                >
                  Get Early Access
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <span className="text-sm text-green-600 font-semibold mt-2">
                  100% Free • No Credit Card
                </span>
              </div>
            </div>
          </div>

          {/* Video/Visual Content (Desktop Only) */}
          <div className="hidden lg:block lg:col-span-6 relative">
            <div className="relative w-full max-w-[240px] lg:max-w-[250px] xl:max-w-[275px] 2xl:max-w-[320px] ml-0 lg:-ml-8 xl:-ml-4 2xl:ml-0 aspect-[9/19] mx-auto">
              {/* Phone Mockup */}
              <div className="relative z-20 rounded-[2.5rem] border-8 border-slate-900 overflow-hidden shadow-2xl bg-slate-900 w-auto h-auto aspect-[9/19]">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-auto h-auto object-cover"
                >
                  <source src="/images/app-recording.mp4" type="video/mp4" />
                </video>
              </div>

              {/* Decorative elements behind phone */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 bg-gradient-to-b from-primary-200/30 to-secondary-200/30 blur-3xl rounded-full transform scale-150" />
            </div>
          </div>

          {/* Buddy Peeking from Browser Edge */}
          <div className="hidden lg:block absolute top-1/2 -right-16 xl:-right-12 2xl:-right-8 transform -translate-y-1/3 translate-x-[20%] xl:translate-x-[15%] 2xl:translate-x-[10%] w-[clamp(280px,_22vw,_550px)] h-auto z-30 -rotate-0 overflow-visible">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto object-contain"
              style={{ background: "transparent" }}
            >
              <source
                src="https://res.cloudinary.com/dzcrxivpm/video/upload/v1760106640/buddyanimate_rokrov.webm"
                type="video/webm"
              />
              <source
                src="https://res.cloudinary.com/dzcrxivpm/video/upload/v1760106640/buddyanimate_rokrov.mp4"
                type="video/mp4"
              />
            </video>

            {/* Ground shadow under buddy's feet */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-8 bg-slate-900/20 rounded-full blur-xl -z-10" />
          </div>
        </div>
      </div>

      <EarlyAccessDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
      />
    </section>
  );
}
