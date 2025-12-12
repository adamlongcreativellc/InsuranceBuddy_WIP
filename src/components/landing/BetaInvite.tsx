"use client";

import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import EarlyAccessDialog from "./EarlyAccessDialog";

const betaCopyOptions = [
  "We're starting with a small beta to make sure it works great.",
  "We're going slow to make sure it all works just right.",
  "Early access means early feedback — help shape what Buddy becomes.",
  "Small beta, big potential. We're just getting started.",
];

export default function BetaInvite() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [copyText, setCopyText] = useState(betaCopyOptions[0]);

  useEffect(() => {
    // Only set random copy on client side to avoid hydration mismatch
    setCopyText(
      betaCopyOptions[Math.floor(Math.random() * betaCopyOptions.length)]
    );
  }, []);

  return (
    <section
      id="waitlist"
      className="py-20 md:py-32 bg-gradient-to-br from-primary-600 to-primary-800 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 md:p-12 text-center rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md shadow-2xl">
          <div className="flex flex-col gap-8 items-center">
            <div className="flex flex-col gap-4">
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                Join the Beta
              </h2>
              <div className="flex items-center justify-center gap-2 text-white/90">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-primary-300 border-2 border-white/30" />
                  <div className="w-8 h-8 rounded-full bg-secondary-400 border-2 border-white/30" />
                  <div className="w-8 h-8 rounded-full bg-primary-400 border-2 border-white/30" />
                </div>
                <span className="text-sm font-semibold">2,800+ people on the waitlist</span>
              </div>
              <p className="text-xl text-primary-100 font-medium max-w-2xl mx-auto">
                {copyText}
              </p>
            </div>

            <button
              onClick={() => setDialogOpen(true)}
              className="group flex items-center gap-3 px-8 py-4 bg-white text-primary-700 rounded-full text-lg font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Join the Waitlist
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
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
