"use client";

import Image from "next/image";
import { scrollToSection } from "../../lib/scrollToSection";

interface HeroProps {
  onOpenCredentials: () => void;
}

export default function Hero({ onOpenCredentials }: HeroProps) {
  return (
    <section className="relative pt-16 pb-20 overflow-hidden cyber-grid" id="home">
      {/* Ambient Floating Particles & Radial Glow */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[720px] h-[520px] rounded-full bg-gradient-to-tr from-red-600/15 via-rose-600/10 to-transparent blur-[110px] ambient-glow" />
        <div className="absolute top-20 left-16 w-2 h-2 rounded-full bg-red-500/40 float-slow" />
        <div className="absolute top-1/2 left-12 w-2.5 h-2.5 rounded-full bg-red-500/30 float-delayed" />
        <div className="absolute top-24 right-28 w-2 h-2 rounded-full bg-red-400/40 float-slow" />
        <div className="absolute bottom-28 right-1/4 w-3 h-3 rounded-full bg-red-500/25 float-delayed" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Intro */}
          <div className="lg:col-span-7 flex flex-col space-y-5">
            {/* Live Biomedical Telemetry Indicators */}
            <div className="flex flex-wrap items-center gap-2 anim-hero-up anim-delay-100">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full liquid-glass-btn text-sm font-medium tracking-wide text-[var(--text-secondary)] transition-colors duration-300 hover:border-red-500/40">
                <span className="w-2 h-2 rounded-full bg-[#ef233c] animate-pulse" />
                Hi, I am <strong className="text-[var(--text-primary)] text-base">Sridhar</strong>
              </span>

              {/* Live Vitals Badge with ECG Rhythm Pulse */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-500/30 text-xs font-mono text-red-300 shadow-[0_0_12px_rgba(239,35,60,0.2)] hover:shadow-[0_0_16px_rgba(239,35,60,0.35)] transition-shadow duration-300 backdrop-blur-md">
                <svg
                  className="w-12 h-3.5"
                  fill="none"
                  viewBox="0 0 100 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="ECG wave"
                >
                  <path
                    className="ecg-line stroke-[#ef233c]"
                    d="M0 12 H25 L32 3 L40 22 L48 6 L55 16 L62 12 H100"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                  />
                </svg>
                <span className="font-bold flex items-center gap-1">
                  <span className="text-white">72</span> BPM • <span className="text-emerald-400">99%</span> SpO₂
                </span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[var(--text-primary)] leading-none anim-hero-up anim-delay-200">
              Biomedical <br />
              <span className="text-shimmer">Engineer</span>
            </h1>

            <p className="text-base sm:text-lg text-[var(--text-secondary)] font-normal leading-relaxed max-w-xl anim-hero-up anim-delay-300">
              Passionate about IoT and driven to explore new technologies. I enjoy solving challenges,
              building practical solutions, and continuously improving my skills.
            </p>

            {/* Social Skills Badges with Rotational Nudge Hover */}
            <div className="flex items-center space-x-3 pt-0.5 anim-hero-up anim-delay-350">
              <a
                aria-label="Instagram"
                className="social-btn w-9 h-9 rounded-full flex items-center justify-center border border-[var(--border-subtle)] bg-[var(--border-faint)] text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                href="https://www.instagram.com/srizz_sk._/"
                rel="noreferrer"
                target="_blank"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <rect height="20" rx="5" ry="5" width="20" x="2" y="2" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>

              <a
                aria-label="LinkedIn"
                className="social-btn w-9 h-9 rounded-full flex items-center justify-center border border-[var(--border-subtle)] bg-[var(--border-faint)] text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                href="https://www.linkedin.com/in/sridhar-sk-hellcatie1341/"
                rel="noreferrer"
                target="_blank"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>

              <a
                aria-label="GitHub"
                className="social-btn w-9 h-9 rounded-full flex items-center justify-center border border-[var(--border-subtle)] bg-[var(--border-faint)] text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                href="https://github.com/sridhar2005"
                rel="noreferrer"
                target="_blank"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>

              <a
                aria-label="WhatsApp"
                className="social-btn w-9 h-9 rounded-full flex items-center justify-center border border-[var(--border-subtle)] bg-[var(--border-faint)] text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                href="https://wa.me/919360071341"
                rel="noreferrer"
                target="_blank"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.79 14.07c-.24.67-1.39 1.28-1.92 1.36-.51.08-1.17.11-3.79-.96-3.34-1.37-5.48-4.78-5.65-5-.16-.22-1.36-1.81-1.36-3.45 0-1.64.86-2.45 1.16-2.78.3-.33.66-.41.88-.41.22 0 .44 0 .63.01.2.01.47-.08.73.55.27.65.92 2.25 1 2.41.08.16.14.36.03.58-.11.22-.16.36-.33.55-.16.19-.35.43-.5.58-.16.16-.33.34-.14.67.19.33.84 1.39 1.81 2.25 1.25 1.11 2.3 1.46 2.63 1.62.33.16.52.14.71-.08.2-.22.82-.96 1.04-1.29.22-.33.44-.27.74-.16.3.11 1.91.9 2.24 1.06.33.16.55.25.63.38.08.14.08.79-.16 1.46z" />
                </svg>
              </a>

              <a
                aria-label="Email"
                className="social-btn w-9 h-9 rounded-full flex items-center justify-center border border-[var(--border-subtle)] bg-[var(--border-faint)] text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                href="mailto:kavisridharsk2005@gmail.com"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <path
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1 anim-hero-up anim-delay-400">
              <a
                className="btn-sweep w-full sm:w-auto px-7 py-3 rounded-full text-xs uppercase tracking-wider font-bold text-white bg-[#ef233c] shadow-md shadow-red-600/30 transition-all text-center inline-block hover:shadow-red-600/50 cursor-pointer"
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
              >
                Hire Me
              </a>
              <button
                className="liquid-glass-btn w-full sm:w-auto px-7 py-3 rounded-full text-xs uppercase tracking-wider font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-center inline-block cursor-pointer"
                onClick={onOpenCredentials}
              >
                View Credentials
              </button>
            </div>

            {/* Hero Metrics */}
            <div className="grid grid-cols-3 border-t border-[var(--border-subtle)] max-w-lg pt-4 gap-2.5 sm:gap-4 anim-hero-up anim-delay-500">
              <div className="group cursor-default">
                <span className="block text-xl sm:text-2xl sm:text-3xl font-black text-[var(--text-primary)] group-hover:text-[#ef233c] transition-colors">
                  7.5
                </span>
                <span className="text-xs text-[var(--text-muted)] font-medium">CGPA (B.E.)</span>
              </div>
              <div className="group cursor-default">
                <span className="block text-xl sm:text-2xl sm:text-3xl font-black text-[var(--text-primary)] group-hover:text-[#ef233c] transition-colors">
                  30+
                </span>
                <span className="text-xs text-[var(--text-muted)] font-medium">Days Clinical Immersion</span>
              </div>
              <div className="group cursor-default">
                <span className="block text-xl sm:text-2xl sm:text-3xl font-black text-[var(--text-primary)] group-hover:text-[#ef233c] transition-colors">
                  6+
                </span>
                <span className="text-xs text-[var(--text-muted)] font-medium">Certifications</span>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Image with Glow */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative anim-hero-scale anim-delay-200">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96">
              <div className="absolute -inset-4 rounded-full bg-[#ef233c]/25 blur-2xl anim-hero-aura pointer-events-none -z-10" />
              <div className="absolute -inset-1 rounded-full border border-[#ef233c]/40 -z-10 animate-pulse" />
              <div className="relative w-full h-full rounded-full bg-gradient-to-b from-zinc-800 via-zinc-950 to-black border-2 border-red-500/40 shadow-2xl overflow-hidden flex items-end justify-center transition-all duration-500 hover:scale-[1.03] group">
                <Image
                  src="/images/profile.png"
                  alt="Sridhar SK - Biomedical Engineer"
                  fill
                  sizes="(max-width: 768px) 288px, 384px"
                  priority
                  className="object-cover object-center transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Tagline Below Hero */}
        <div className="mt-20 text-center max-w-3xl mx-auto anim-hero-up anim-delay-600">
          <p className="text-lg sm:text-xl font-normal text-[var(--text-secondary)] tracking-wide leading-relaxed">
            Bridging the gap between IoT and medical to build the generation of healthcare solutions
          </p>

          {/* Center CTA */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
            <a
              className="btn-sweep px-5 py-2.5 sm:px-6 sm:py-3 md:px-7 md:py-3 rounded-md text-[11px] sm:text-xs md:text-xs uppercase tracking-normal sm:tracking-wider md:tracking-wider font-bold text-white bg-[#ef233c] hover:bg-[#d90429] transition shadow-lg shadow-red-600/30 cursor-pointer active:scale-95"
              href="#clinical"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("clinical");
              }}
            >
              Explore
            </a>
            <a
              className="liquid-glass-btn mobile-hero-cta px-4 py-2 sm:px-5 sm:py-2.5 md:px-7 md:py-3 rounded-md text-[11px] sm:text-xs md:text-xs uppercase tracking-normal sm:tracking-wider md:tracking-wider font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-center inline-block cursor-pointer active:scale-95"
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
