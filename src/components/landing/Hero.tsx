"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import EarlyAccessDialog from "./EarlyAccessDialog";
import PatentBadge from "./PatentBadge";
import { handleSmoothScroll } from "@/utils/smoothScroll";

export default function Hero() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <section className="relative pt-32 pb-12 md:pt-40 md:pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary-100/50 rounded-full blur-3xl opacity-60 animate-float-slow" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-secondary-100/40 rounded-full blur-3xl opacity-50 animate-float" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight text-slate-900">
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
              </span> <br />
              on Insurance?
            </h1>

            <div className="flex justify-center lg:justify-start">
              <PatentBadge />
            </div>

            {/* Mobile-only Buddy Mascot (Above the fold) */}
            <div className="lg:hidden relative w-48 h-48 mx-auto -my-4 animate-float-slow z-10">
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
                    src="https://res.cloudinary.com/dzcrxivpm/video/upload/v1/buddyanimate_rokrov.webm"
                    type='video/webm; codecs="vp8, vorbis"'
                  />
                </video>
              </div>
            </div>

            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 font-medium">
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

              <button
                onClick={(e) => handleSmoothScroll(e, "#how-it-works")}
                className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-lg font-semibold rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                See How It Works
              </button>
            </div>

            {/* Social Proof / Beta Users */}
            <div className="flex items-center justify-center lg:justify-start gap-3 mt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-500"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <p className="text-sm font-medium text-slate-600">
                Join our beta community
              </p>
            </div>
          </div>

          {/* Video/Visual Content (Desktop Only) */}
          <div className="hidden lg:block lg:col-span-5 relative">
            <div className="relative w-full aspect-square max-w-[500px] mx-auto animate-float-slow">
              {/* Decorative blob behind video */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-200 to-secondary-200 rounded-full blur-3xl opacity-30 animate-pulse-glow" />

              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-[110%] lg:w-[120%] max-w-none drop-shadow-2xl"
                  style={{ background: 'transparent' }}
                >
                  <source
                    src="https://res.cloudinary.com/dzcrxivpm/video/upload/v1/buddyanimate_rokrov.webm"
                    type='video/webm; codecs="vp8, vorbis"'
                  />
                </video>
              </div>
            </div>
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
