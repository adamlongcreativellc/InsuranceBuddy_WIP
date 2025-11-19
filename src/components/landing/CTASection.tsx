"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";
import EarlyAccessDialog from "./EarlyAccessDialog";

interface CTASectionProps {
  variant?: "default" | "compact";
}

export default function CTASection({ variant = "default" }: CTASectionProps) {
  const [dialogOpen, setDialogOpen] = useState(false);

  if (variant === "compact") {
    return (
      <>
        <section className="py-12 md:py-16 text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-block">
              <button
                onClick={() => setDialogOpen(true)}
                className="group flex items-center gap-2 px-8 py-4 bg-primary-600 text-white rounded-full text-lg font-bold shadow-lg hover:bg-primary-700 hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Get Early Access
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="mt-3 text-sm font-bold text-emerald-600">
                100% Free • No Credit Card
              </p>
            </div>
          </div>
        </section>
        <EarlyAccessDialog
          open={dialogOpen}
          onClose={() => setDialogOpen(false)}
        />
      </>
    );
  }

  return (
    <>
      <section className="py-20 md:py-32 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col gap-8 items-center">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Ready to See What You&apos;re Really Spending?
            </h2>
            <p className="text-xl text-slate-600 font-medium max-w-2xl">
              Join our beta and let Buddy help you track what you spend on insurance.
              Don&apos;t believe us? Download for free and see for yourself.
            </p>
            <div className="inline-block">
              <button
                onClick={() => setDialogOpen(true)}
                className="group flex items-center gap-2 px-8 py-4 bg-primary-600 text-white rounded-full text-lg font-bold shadow-lg hover:bg-primary-700 hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Get Early Access
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="mt-3 text-sm font-bold text-emerald-600">
                100% Free • No Credit Card
              </p>
            </div>
          </div>
        </div>
      </section>
      <EarlyAccessDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
      />
    </>
  );
}
