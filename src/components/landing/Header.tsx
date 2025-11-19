"use client";

import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { handleSmoothScroll } from "@/utils/smoothScroll";
import EarlyAccessDialog from "./EarlyAccessDialog";
import PatentBadge from "./PatentBadge";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Security", href: "#security" },
  { label: "FAQs", href: "#faq" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    // Check initial scroll position after mount
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${scrolled
            ? "bg-primary-600/95 backdrop-blur-md shadow-lg py-3"
            : "bg-primary-600 py-4"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="cursor-pointer">
                <Image
                  src="/images/insurancebuddy-logo-white.svg"
                  alt="InsuranceBuddy™"
                  width={220}
                  height={32}
                  className="h-8 w-auto"
                />
              </Link>
              <div className="hidden sm:block">
                <PatentBadge size="small" />
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className="text-white/90 hover:text-white font-medium transition-colors text-sm"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <button
              onClick={() => setDialogOpen(true)}
              className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-white text-primary-600 rounded-full text-sm font-bold shadow-md hover:shadow-lg hover:bg-slate-50 transition-all duration-300"
            >
              Get Early Access
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Mobile menu button placeholder - can be expanded if needed */}
            <button
              onClick={() => setDialogOpen(true)}
              className="md:hidden px-4 py-2 bg-white text-primary-600 rounded-full text-sm font-bold shadow-sm"
            >
              Join Beta
            </button>
          </div>
        </div>
      </header>

      <EarlyAccessDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
      />
    </>
  );
}
