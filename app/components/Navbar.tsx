"use client";

import { useEffect, useState } from "react";
import { scrollToSection } from "../../lib/scrollToSection";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#clinical" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Lock body scroll and allow Escape-to-close while the mobile panel is open
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  // Close the mobile panel automatically if the viewport grows into desktop width
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const handleChange = () => setMobileMenuOpen(false);
    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        setScrollProgress((totalScroll / windowHeight) * 100);
      }

      setIsScrolled(totalScroll > 30);

      // Scroll Spy
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const top = el.offsetTop - 140;
          if (totalScroll >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        id="scroll-progress"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "3px",
          width: `${scrollProgress}%`,
          background: "linear-gradient(90deg, #d90429, #ef233c, #ff6b7e)",
          zIndex: 100,
          boxShadow: "0 0 12px rgba(239, 35, 60, 0.8)",
          transition: "width 0.08s ease-out",
        }}
      />

      {/* Navigation Header */}
      <header
        className={`sticky top-0 z-50 liquid-glass-nav ${
          isScrolled ? "is-scrolled" : ""
        }`}
      >
        <nav
          aria-label="Main Navigation"
          className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between"
        >
          {/* Brand Logo */}
          <a
            className="flex items-center gap-1.5 focus:outline-none group cursor-pointer"
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
          >
            <span className="text-xl font-black tracking-widest text-[var(--text-primary)] transition-transform duration-300 group-hover:tracking-wider">
              SRIDHAR<span className="text-[#ef233c] drop-shadow-[0_0_10px_rgba(239,35,60,0.8)]">.BME</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-7 text-sm font-medium">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href.substring(1));
                  }}
                  className={`py-1 relative transition-colors cursor-pointer ${
                    isActive ? "text-[#ef233c]" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-[#ef233c] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              );
            })}
          </div>

          {/* Header Action Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3">
            <a
              className="btn-sweep mobile-header-cta px-3 py-1.5 sm:px-3.5 sm:py-2 md:px-5 md:py-2.5 rounded-full md:rounded-lg text-[10.5px] sm:text-[11.5px] md:text-xs uppercase tracking-tight sm:tracking-normal md:tracking-wider font-semibold md:font-bold text-white bg-[#ef233c] hover:bg-[#d90429] shadow-md shadow-red-600/20 md:shadow-lg md:shadow-red-600/25 transition-all text-center inline-flex items-center gap-1 cursor-pointer whitespace-nowrap active:scale-95"
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
            >
              Get In Touch
            </a>

            {/* Mobile Hamburger Toggle (animated burger-to-close morph) */}
            <button
              onClick={() => setMobileMenuOpen((v) => !v)}
              className="md:hidden relative w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-[var(--text-secondary)] active:scale-90 rounded-full transition-transform duration-200 focus:outline-none focus:ring-1 focus:ring-red-500 cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-panel"
            >
              <span className="relative w-4.5 h-3.5 flex flex-col justify-between">
                <span
                  className={`block h-[1.5px] w-full bg-current rounded-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center ${
                    mobileMenuOpen ? "translate-y-[6px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`block h-[1.5px] w-full bg-current rounded-full transition-all duration-200 ${
                    mobileMenuOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
                  }`}
                />
                <span
                  className={`block h-[1.5px] w-full bg-current rounded-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center ${
                    mobileMenuOpen ? "-translate-y-[6px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </nav>

        {/* Mobile Slide-Down Panel — always mounted so open AND close both animate smoothly */}
        <div
          id="mobile-nav-panel"
          className={`md:hidden grid transition-[grid-template-rows] duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            mobileMenuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden border-b border-[var(--border-subtle)] bg-[var(--bg-surface)]/95 backdrop-blur-2xl">
            <nav aria-label="Mobile Navigation" className="px-5 sm:px-6 py-2.5 flex flex-col divide-y divide-[var(--border-faint)]">
              {NAV_ITEMS.map((item, idx) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href.substring(1));
                      setMobileMenuOpen(false);
                    }}
                    style={{ transitionDelay: mobileMenuOpen ? `${idx * 35}ms` : "0ms" }}
                    className={`flex items-center justify-between min-h-[46px] py-2.5 text-sm font-medium transition-all duration-300 active:bg-white/[0.04] active:px-2 rounded-lg cursor-pointer ${
                      mobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-3"
                    } ${isActive ? "text-[#ef233c] font-bold" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"}`}
                  >
                    <span className="flex items-center gap-2.5">
                      <span
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                          isActive ? "bg-[#ef233c] shadow-[0_0_8px_rgba(239,35,60,0.8)] scale-125" : "bg-transparent"
                        }`}
                      />
                      {item.label}
                    </span>
                    <span className="text-xs text-[var(--text-muted)] opacity-50">›</span>
                  </a>
                );
              })}
            </nav>

            {/* Mobile Drawer Quick Status Footer */}
            <div className="px-5 sm:px-6 py-3 bg-[var(--border-faint)]/40 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs text-[var(--text-muted)]">
              <span className="flex items-center gap-2 font-medium text-[11px]">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Available for opportunities
              </span>
              <span className="font-mono text-[10px] tracking-wider text-[#ef233c] font-semibold">
                SRIDHAR.BME
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Dimming backdrop behind the mobile panel — tap anywhere to dismiss */}
      <div
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
        className={`md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-[3px] transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Mobile Floating Back-to-Top Button */}
      <button
        onClick={() => scrollToSection("home")}
        aria-label="Back to top"
        className={`md:hidden fixed bottom-6 right-5 z-40 w-10 h-10 rounded-full bg-[var(--bg-surface)]/90 backdrop-blur-xl border border-[var(--border-subtle)] text-[var(--text-primary)] shadow-lg shadow-black/50 flex items-center justify-center transition-all duration-300 active:scale-90 ${
          isScrolled
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <span className="material-symbols-outlined text-lg text-[#ef233c]">arrow_upward</span>
      </button>
    </>
  );
}
