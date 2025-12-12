"use client";

import { ArrowRight, Menu, X } from "lucide-react";
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${scrolled || mobileMenuOpen
            ? "bg-primary-600/80 backdrop-blur-xl shadow-lg py-3 border-b border-white/10"
            : "bg-primary-600 py-4 border-b border-transparent"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 relative z-50">
              <Link href="/" className="cursor-pointer" onClick={() => setMobileMenuOpen(false)}>
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

            {/* Desktop Navigation */}
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

            <div className="flex items-center gap-4">
              {/* Desktop CTA */}
              <button
                onClick={() => setDialogOpen(true)}
                className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-white text-primary-600 rounded-full text-sm font-bold shadow-md hover:shadow-lg hover:bg-slate-50 transition-all duration-300"
              >
                Get Early Access
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Mobile CTA - Kept visible as requested */}
              <button
                onClick={() => setDialogOpen(true)}
                className="md:hidden px-4 py-2 bg-white text-primary-600 rounded-full text-sm font-bold shadow-sm relative z-50"
              >
                Join Beta
              </button>

              {/* Mobile Menu Toggle */}
              <button
                className="md:hidden p-2 text-white relative z-50"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header >

      {/* Mobile Menu Overlay */}
      < div
        className={`fixed inset-0 z-40 bg-primary-600 transform transition-transform duration-300 ease-in-out md:hidden ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`
        }
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 p-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                setMobileMenuOpen(false);
                handleSmoothScroll(e, item.href);
              }}
              className="text-white text-2xl font-bold hover:text-white/80 transition-colors"
            >
              {item.label}
            </a>
          ))}

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              setDialogOpen(true);
            }}
            className="mt-8 flex items-center gap-2 px-8 py-4 bg-white text-primary-600 rounded-xl text-lg font-bold shadow-lg hover:bg-slate-50 transition-all"
          >
            Get Early Access
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div >

      <EarlyAccessDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
      />
    </>
  );
}
