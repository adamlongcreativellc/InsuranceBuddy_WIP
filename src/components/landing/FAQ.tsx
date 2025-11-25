"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Is Buddy an insurance advisor?",
    answer:
      "No. Buddy is your faithful pal, not an advisor. Think of Buddy like a helpful dog – we read your papers, fetch info when you ask, and recall it all so you don't have to. We sort and explain, but you choose what to do.",
  },
  {
    question: "How does Buddy help me track my spend?",
    answer:
      "Buddy reads all your insurance papers and adds up what you really spend each year. Many people are shocked to learn they spend way more than they thought – just like Stephen, who thought he spent $12,000 but really spent $35,000!",
  },
  {
    question: "Which plan types work?",
    answer:
      "All personal insurance: auto, home, renters, health, dental, vision, life, disability, long-term care, pet insurance, umbrella plans, and more. Buddy reads 30-50 pages in just 30 seconds and pulls out 250+ facts from each plan.",
  },
  {
    question: "Is my info safe?",
    answer:
      "Yes. Buddy uses private AI that only works with YOUR data. Your info is never shared or sold. We use top safety and you can delete your data any time. We don't sell things – we work for you.",
  },
  {
    question: "What if I don't upload all my files?",
    answer:
      "Bad data in, bad data out! Buddy can only help with what you share. The more papers you upload, the better Buddy can track what you spend and answer your questions. Upload it all for the best results.",
  },
  {
    question: "Which phones work with Buddy?",
    answer:
      "Buddy works on both iPhone and Android during the beta.",
  },
  {
    question: "How much does it cost?",
    answer:
      "The app is free during beta. When we launch for real, there will be a free type for all, plus paid features if you want extra tools.",
  },
  {
    question: "Who can join the beta?",
    answer:
      "We're starting with a small beta to make sure it works great. Join our waitlist to get in early!",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-32 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12">
          <div className="text-center flex flex-col gap-6">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Questions We Get a Lot
            </h2>
            <p className="text-xl text-slate-600 font-medium">
              Everything you need to know about InsuranceBuddy
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`
                  bg-white rounded-2xl border transition-all duration-300 overflow-hidden
                  ${openIndex === index
                    ? "border-primary-500 shadow-lg"
                    : "border-slate-200 hover:border-slate-300"
                  }
                `}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className={`text-lg font-bold ${openIndex === index ? "text-primary-700" : "text-slate-900"}`}>
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-slate-400 transition-transform duration-300 ${openIndex === index ? "rotate-180 text-primary-500" : ""}`}
                  />
                </button>
                <div
                  className={`
                    transition-all duration-300 ease-in-out
                    ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
                  `}
                >
                  <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
