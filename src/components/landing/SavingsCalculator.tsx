"use client";

import { TrendingUp, PiggyBank, DollarSign } from "lucide-react";
import { useState } from "react";
import PatentBadge from "./PatentBadge";

const incomeRanges = [
  { label: "$40,000", value: 40000, percentage: 20 },
  { label: "$60,000", value: 60000, percentage: 20 },
  { label: "$80,000", value: 80000, percentage: 18 },
  { label: "$100,000", value: 100000, percentage: 18 },
  { label: "$150,000", value: 150000, percentage: 16 },
  { label: "$200,000", value: 200000, percentage: 15 },
];

export default function SavingsCalculator() {
  const [selectedIncome, setSelectedIncome] = useState(100000);
  const [customIncome, setCustomIncome] = useState("");

  const getInsuranceSpend = (income: number) => {
    if (income <= 40000) return Math.round(income * 0.2);
    if (income <= 60000) return Math.round(income * 0.2);
    if (income <= 80000) return Math.round(income * 0.18);
    if (income <= 100000) return Math.round(income * 0.18);
    if (income <= 150000) return Math.round(income * 0.16);
    return Math.round(income * 0.15);
  };

  const currentIncome = customIncome ? parseInt(customIncome) : selectedIncome;
  const insuranceSpend = getInsuranceSpend(currentIncome);
  const estimatedSavings = Math.round(insuranceSpend * 0.1);

  const handleCustomIncomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setCustomIncome(value);
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

          <div className="glass-card p-6 md:p-10 border-t-4 border-t-primary-500 shadow-xl">
            <div className="flex flex-col gap-8">
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">
                  Pick Your Home Pay
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                  {incomeRanges.map((range) => (
                    <button
                      key={range.value}
                      onClick={() => {
                        setSelectedIncome(range.value);
                        setCustomIncome("");
                      }}
                      className={`
                        py-3 px-4 rounded-xl text-sm font-bold transition-all duration-200
                        ${selectedIncome === range.value && !customIncome
                          ? "bg-primary-600 text-white shadow-lg shadow-primary-500/30 scale-105"
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                        }
                      `}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
                <div className="mt-6 max-w-sm">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-slate-500 font-bold">$</span>
                    </div>
                    <input
                      type="text"
                      className="block w-full pl-8 pr-12 py-3 border-slate-200 rounded-xl focus:ring-primary-500 focus:border-primary-500 font-medium text-slate-900 placeholder-slate-400 bg-slate-50"
                      placeholder="Or type a custom amount"
                      value={customIncome}
                      onChange={handleCustomIncomeChange}
                    />
                  </div>
                </div>
              </div>

              <div className="bg-primary-50/50 rounded-2xl p-6 md:p-8 border border-primary-100">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mb-2">
                      <DollarSign className="w-8 h-8" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-primary-700">
                      ${currentIncome.toLocaleString()}
                    </div>
                    <div className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
                      Your Home Pay
                    </div>
                  </div>

                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="w-16 h-16 rounded-full bg-rose-100 flex items-center justify-center text-rose-500 mb-2">
                      <TrendingUp className="w-8 h-8" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-rose-600">
                      ${insuranceSpend.toLocaleString()}
                    </div>
                    <div className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
                      Est. Insurance Spend Each Year
                    </div>
                  </div>

                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mb-2">
                      <PiggyBank className="w-8 h-8" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-emerald-600">
                      ${estimatedSavings.toLocaleString()}
                    </div>
                    <div className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
                      What You Could Save Each Year
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-6 text-center">
                <p className="text-lg text-emerald-800 font-medium">
                  💡 <strong className="font-bold">That&apos;s ${estimatedSavings.toLocaleString()}</strong> you could use for a trip,
                  for when you retire, or for your kids&apos; school. Buddy helps you find
                  this cash by sorting your plans and showing where it goes.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm text-slate-400 italic">
              * Guesses based on what most homes spend, plus what jobs pay.
              Your real spend and savings may differ.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
