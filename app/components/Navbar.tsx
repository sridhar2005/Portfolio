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
          <div className="flex items-center gap-3">
            <a
              className="btn-sweep px-5 py-2.5 rounded-lg text-xs uppercase tracking-wider font-bold text-white bg-[#ef233c] hover:bg-[#d90429] shadow-lg shadow-red-600/25 transition-all text-center inline-flex items-center gap-1.5 cursor-pointer"
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
              className="md:hidden relative w-11 h-11 -mr-1 flex items-center justify-center text-[var(--text-secondary)] active:scale-90 rounded-full transition-transform duration-200 focus:outline-none focus:ring-1 focus:ring-red-500 cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-panel"
            >
              <span className="relative w-5 h-4 flex flex-col justify-between">
                <span
                  className={`block h-[1.5px] w-full bg-current rounded-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center ${
                    mobileMenuOpen ? "translate-y-[7px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`block h-[1.5px] w-full bg-current rounded-full transition-all duration-200 ${
                    mobileMenuOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
                  }`}
                />
                <span
                  className={`block h-[1.5px] w-full bg-current rounded-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center ${
                    mobileMenuOpen ? "-translate-y-[7px] -rotate-45" : ""
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
            <nav aria-label="Mobile Navigation" className="px-6 py-3 flex flex-col">
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
                    style={{ transitionDelay: mobileMenuOpen ? `${idx * 45}ms` : "0ms" }}
                    className={`flex items-center justify-between min-h-[48px] py-3 text-base font-medium border-b border-[var(--border-faint)] last:border-b-0 transition-all duration-300 active:opacity-60 cursor-pointer ${
                      mobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-3"
                    } ${isActive ? "text-[#ef233c] font-bold" : "text-[var(--text-secondary)]"}`}
                  >
                    {item.label}
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#ef233c] shadow-[0_0_8px_rgba(239,35,60,0.8)]" />}
                  </a>
                );
              })}
            </nav>
          </div>
        </div>
      </header>

      {/* Dimming backdrop behind the mobile panel — tap anywhere to dismiss */}
      <div
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
        className={`md:hidden fixed inset-0 z-40 bg-black/55 backdrop-blur-[2px] transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />
    </>
  );
}
