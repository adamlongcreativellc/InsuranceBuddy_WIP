"use client";

import { TrendingUp, PiggyBank, DollarSign } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import PatentBadge from "./PatentBadge";

// Simple hook for counting up animation
const useCountUp = (end: number, duration: number = 1000) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    startTimeRef.current = null;
    const start = countRef.current;

    const step = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const progress = Math.min((timestamp - startTimeRef.current) / duration, 1);

      // Easing function (easeOutExpo)
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      const current = Math.floor(start + (end - start) * easeProgress);
      setCount(current);
      countRef.current = current;

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [end, duration]);

  return count;
};

const AnimatedNumber = ({ value, prefix = "" }: { value: number; prefix?: string }) => {
  const count = useCountUp(value, 800);
  return (
    <span>
      {prefix}{count.toLocaleString()}
    </span>
  );
};

export default function SavingsCalculator() {
  const [income, setIncome] = useState(100000);
  const [isDragging, setIsDragging] = useState(false);

  const getInsuranceSpend = (income: number) => {
    // Simplified logic for smoother slider transitions
    let percentage = 0.15;
    if (income <= 40000) percentage = 0.20;
    else if (income <= 80000) percentage = 0.18;
    else if (income <= 150000) percentage = 0.16;

    return Math.round(income * percentage);
  };

  const insuranceSpend = getInsuranceSpend(income);
  const estimatedSavings = Math.round(insuranceSpend * 0.1);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIncome(parseInt(e.target.value));
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12">
          <div className="text-center max-w-3xl mx-auto flex flex-col gap-6 items-center">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
              How Much Could You Save?
            </h2>
            <p className="text-xl text-slate-600 font-medium">
              Most homes spend 18% of their pay on insurance—and don&apos;t even know it.
              See what you spend and what you could save.
            </p>
            <PatentBadge size="small" />
          </div>

          <div className="glass-card p-6 md:p-12 border-t-4 border-t-primary-500 shadow-2xl max-w-5xl mx-auto w-full">
            <div className="flex flex-col gap-12">
              {/* Slider Section */}
              <div className="flex flex-col gap-6">
                <div className="flex justify-between items-end">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800">
                    Pick Your Home Pay
                  </h3>
                  <div className="text-3xl md:text-4xl font-bold text-primary-600 bg-primary-50 px-4 py-2 rounded-xl border border-primary-100">
                    $<span className="tabular-nums">{income.toLocaleString()}</span>
                  </div>
                </div>

                <div className="relative h-12 flex items-center">
                  <input
                    type="range"
                    min="30000"
                    max="300000"
                    step="1000"
                    value={income}
                    onChange={handleSliderChange}
                    onMouseDown={() => setIsDragging(true)}
                    onMouseUp={() => setIsDragging(false)}
                    onTouchStart={() => setIsDragging(true)}
                    onTouchEnd={() => setIsDragging(false)}
                    className="w-full h-4 bg-slate-200 rounded-full appearance-none cursor-pointer accent-primary-600 hover:accent-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-500/20 transition-all"
                    style={{
                      background: `linear-gradient(to right, #2563eb 0%, #2563eb ${(income - 30000) / (300000 - 30000) * 100}%, #e2e8f0 ${(income - 30000) / (300000 - 30000) * 100}%, #e2e8f0 100%)`
                    }}
                  />
                </div>
                <div className="flex justify-between text-sm font-medium text-slate-400 px-1">
                  <span>$30k</span>
                  <span>$300k+</span>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {/* Card 1: Income (Visual confirmation) */}
                <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col items-center text-center gap-3 transition-transform hover:scale-105 duration-300">
                  <div className="w-14 h-14 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mb-1">
                    <DollarSign className="w-7 h-7" />
                  </div>
                  <div className="text-3xl font-bold text-slate-800 tabular-nums">
                    <AnimatedNumber value={income} prefix="$" />
                  </div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Your Home Pay
                  </div>
                </div>

                {/* Card 2: Insurance Spend */}
                <div className="bg-rose-50 rounded-2xl p-6 border border-rose-100 shadow-sm flex flex-col items-center text-center gap-3 transition-transform hover:scale-105 duration-300">
                  <div className="w-14 h-14 rounded-full bg-rose-100 flex items-center justify-center text-rose-500 mb-1">
                    <TrendingUp className="w-7 h-7" />
                  </div>
                  <div className="text-3xl font-bold text-rose-600 tabular-nums">
                    <AnimatedNumber value={insuranceSpend} prefix="$" />
                  </div>
                  <div className="text-xs font-bold text-rose-400 uppercase tracking-wider">
                    Est. Insurance Spend
                  </div>
                </div>

                {/* Card 3: Savings */}
                <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100 shadow-md flex flex-col items-center text-center gap-3 transform scale-105 ring-4 ring-emerald-500/10 transition-transform hover:scale-110 duration-300">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mb-1 animate-bounce-subtle">
                    <PiggyBank className="w-7 h-7" />
                  </div>
                  <div className="text-3xl font-bold text-emerald-600 tabular-nums">
                    <AnimatedNumber value={estimatedSavings} prefix="$" />
                  </div>
                  <div className="text-xs font-bold text-emerald-600/70 uppercase tracking-wider">
                    Potential Savings
                  </div>
                </div>
              </div>

              {/* Insight Box */}
              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-6 md:p-8 text-center text-white shadow-lg transform transition-all duration-500">
                <p className="text-lg md:text-xl font-medium leading-relaxed">
                  💡 That&apos;s <strong className="font-bold text-2xl bg-white/20 px-2 py-1 rounded mx-1"><AnimatedNumber value={estimatedSavings} prefix="$" /></strong> you could use for a trip,
                  retirement, or your kids&apos; school. Buddy helps you find
                  this cash by sorting your plans.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm text-slate-400 italic max-w-2xl mx-auto">
              * Based on what most homes spend (approx 15-20% of income).
              Your real spend and savings may differ.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
