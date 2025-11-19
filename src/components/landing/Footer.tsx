"use client";

import { handleSmoothScroll } from "@/utils/smoothScroll";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Security", href: "#security" },
    { label: "FAQs", href: "#faq" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ];

  return (
    <footer className="py-12 border-t border-slate-200 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8">
          {/* Top section with logo */}
          <div>
            <Image
              src="/images/insurancebuddy-logo-black.svg"
              alt="InsuranceBuddy™"
              width={210}
              height={28}
              className="h-8 w-auto"
            />
          </div>

          {/* Middle section with navigation links */}
          <div className="flex flex-wrap gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="text-slate-600 hover:text-primary-600 font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Bottom section with company name and legal links */}
          <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-sm text-slate-500">
                © {currentYear} Digital Benefits Advisors LLC. Patent Pending.
              </p>
              <p className="text-xs text-slate-400">
                InsuranceBuddy™ and Ask Buddy™ are trademarks of Digital
                Benefits Advisors LLC.
              </p>
            </div>

            <div className="flex gap-6">
              {legalLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
