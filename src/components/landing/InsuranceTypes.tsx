"use client";

import { CheckCircle } from "lucide-react";
import PatentBadge from "./PatentBadge";

const insuranceTypes = [
  { name: "Auto Insurance", common: true },
  { name: "Health Insurance", common: true },
  { name: "Home Insurance", common: true },
  { name: "Life Insurance", common: true },
  { name: "Disability Insurance (STD/LTD)", common: true },
  { name: "Dental Insurance", common: true },
  { name: "Vision Insurance", common: true },
  { name: "Pet Insurance", common: false },
  { name: "RV Insurance", common: false },
  { name: "Boat Insurance", common: false },
  { name: "Motorcycle Insurance", common: false },
  { name: "Renters Insurance", common: false },
  { name: "Umbrella Insurance", common: false },
];

export default function InsuranceTypes() {
  return (
    <section className="py-20 md:py-32 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12">
          <div className="text-center max-w-3xl mx-auto flex flex-col gap-6 items-center">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
              You Have More Policies Than You Think
            </h2>
            <p className="text-xl text-slate-600 font-medium">
              Most folks forget about plans they&apos;ve picked up over the years.
              How many do you have?
            </p>
            <PatentBadge />
          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
            <div className="bg-primary-600 px-6 py-4 grid grid-cols-12 gap-4 text-white font-bold text-lg">
              <div className="col-span-8 md:col-span-9">Insurance Type</div>
              <div className="col-span-4 md:col-span-3 text-center">Do You Have This?</div>
            </div>
            <div className="divide-y divide-slate-100">
              {insuranceTypes.map((insurance, index) => (
                <div
                  key={index}
                  className="grid grid-cols-12 gap-4 px-6 py-4 items-center hover:bg-primary-50/50 transition-colors duration-200"
                >
                  <div className={`col-span-8 md:col-span-9 text-lg ${insurance.common ? "font-semibold text-slate-900" : "text-slate-600"}`}>
                    {insurance.name}
                  </div>
                  <div className="col-span-4 md:col-span-3 flex justify-center">
                    <div className="w-8 h-8 rounded-full border-2 border-slate-200 flex items-center justify-center group cursor-pointer hover:border-primary-500 hover:bg-primary-50 transition-all">
                      <CheckCircle className="w-5 h-5 text-slate-300 group-hover:text-primary-500 transition-colors" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary-50 rounded-2xl p-8 text-center border border-primary-100">
            <h3 className="text-xl font-bold text-primary-800">
              Buddy helps you track all of them in one place
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

