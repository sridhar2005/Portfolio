"use client";

import { useEffect, useState } from "react";

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

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        setScrollProgress((totalScroll / windowHeight) * 100);
      }

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
      <header className="sticky top-0 z-50 backdrop-blur-md border-b border-white/[0.06] transition-colors duration-300 bg-black/90">
        <nav
          aria-label="Main Navigation"
          className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between"
        >
          {/* Brand Logo */}
          <a className="flex items-center gap-1.5 focus:outline-none group" href="#home">
            <span className="text-xl font-black tracking-widest text-white transition-transform duration-300 group-hover:tracking-wider">
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
                  className={`py-1 relative transition-colors ${
                    isActive ? "text-[#ef233c]" : "text-gray-300 hover:text-white"
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
              className="btn-sweep px-5 py-2.5 rounded-lg text-xs uppercase tracking-wider font-bold text-white bg-[#ef233c] hover:bg-[#d90429] shadow-lg shadow-red-600/25 transition-all text-center inline-flex items-center gap-1.5"
              href="#contact"
            >
              Get In Touch
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-400 hover:text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-red-500"
              aria-label="Toggle navigation menu"
            >
              <span className="material-symbols-outlined text-2xl">
                {mobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-white/10 bg-black/95 px-6 py-4 space-y-3 backdrop-blur-xl">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 text-sm font-medium ${
                  activeSection === item.href.substring(1)
                    ? "text-[#ef233c] font-bold"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </header>
    </>
  );
}
