"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

interface SkillCardData {
  id: string;
  icon: string;
  title: string;
  summary: string;
  backTitle: string;
  points: string[];
}

const SKILL_CARDS: SkillCardData[] = [
  {
    id: "biomedical",
    icon: "ecg_heart",
    title: "Biomedical",
    summary: "ECG, EMG, EEG, Cath Lab systems, ICU monitoring & Safety protocols.",
    backTitle: "Biomedical Focus",
    points: [
      "Patient vitals monitoring",
      "Cath Lab telemetry & OCT",
      "NABH calibration tests",
      "Bio-potential lead sensors",
    ],
  },
  {
    id: "embedded-iot",
    icon: "memory",
    title: "Embedded / IoT",
    summary: "Microcontroller integration, sensor arrays, wireless telemetry & circuits.",
    backTitle: "MCU Architecture",
    points: [
      "ESP32 & Arduino UNO / Nano",
      "MQTT & HTTP sensor nodes",
      "ADC signal conditioning",
      "Low-power edge boards",
    ],
  },
  {
    id: "software-tools",
    icon: "hub",
    title: "Software / Tools",
    summary: "Microsoft 365, hospital asset calibration, workflow management & telemetry.",
    backTitle: "Suite & Tools",
    points: [
      "MS 365 Copilot Studio",
      "Hospital PPM & BD registries",
      "Asset calibration tracking",
      "Technical documentation",
    ],
  },
  {
    id: "troubleshooting",
    icon: "construction",
    title: "Troubleshooting",
    summary: "Bypass solutions, Root cause analysis, Circuit debugging & hardware repairs.",
    backTitle: "Hardware Debugging",
    points: [
      "Multimeter / Oscilloscope testing",
      "Power supply isolation",
      "Fail-safe bypass pathways",
      "Component-level diagnosis",
    ],
  },
  {
    id: "ai-ml",
    icon: "smart_toy",
    title: "AI / ML",
    summary: "Generative AI Studio, AI Fundamentals, Model Inference & Copilot extensions.",
    backTitle: "AI & Neural Models",
    points: [
      "Google Cloud GenAI Studio",
      "Prompt engineering architectures",
      "IBM AI certified principles",
      "Signal classification workflows",
    ],
  },
  {
    id: "programming",
    icon: "terminal",
    title: "Programming",
    summary: "Python, C/C++ logic scripts, algorithms & sensor signal ingestion pipelines.",
    backTitle: "Languages & Scripts",
    points: [
      "Embedded C / C++",
      "Python data pipelines",
      "Sensor filtering algorithms",
      "Serial communication loops",
    ],
  },
  {
    id: "3d-cad",
    icon: "3d_rotation",
    title: "3D / CAD",
    summary: "AutoCAD drafting, Autodesk Fusion 360 parametric solid modeling & 3D printing.",
    backTitle: "Modelling Suite",
    points: [
      "Autodesk Fusion 360 solid CAD",
      "AutoCAD orthographic drafting",
      "Rapid SLA/FDM 3D printing",
      "Enclosure tolerance fits",
    ],
  },
  {
    id: "web-ui",
    icon: "dashboard",
    title: "Web & UI",
    summary: "HTML structures, responsive UX wireframes & technical telemetry dashboards.",
    backTitle: "Front-End & Telemetry",
    points: [
      "Semantic HTML5 & modern CSS",
      "Responsive telemetry viewports",
      "Clean clinical data display",
      "Real-time graph integration",
    ],
  },
];

export default function SkillsMatrix() {
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  const toggleFlip = (id: string) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="py-24 border-t border-[var(--border-faint)] relative bg-[var(--bg-primary)]" id="skills">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal variant="fade-up" className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 mb-3">
            <span className="text-xs uppercase tracking-widest text-[#ef233c] font-bold">
              Technical Arsenal
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-primary)] uppercase">
            Capabilities &amp; <span className="text-[#ef233c]">Core Matrix</span>
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-muted)] mt-2 max-w-xl mx-auto">
            Learning. Building. Innovating
          </p>
        </ScrollReveal>

        {/* 8 Flip Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CARDS.map((card, idx) => {
            const isFlipped = !!flippedCards[card.id];
            return (
              <ScrollReveal
                key={card.id}
                variant="fade-up"
                delay={idx * 65}
                className="h-[240px] sm:h-[220px]"
              >
                <div
                  aria-label={`${card.title} Card`}
                  role="button"
                  tabIndex={0}
                  onClick={() => toggleFlip(card.id)}
                  onMouseLeave={() =>
                    setFlippedCards((prev) => (prev[card.id] ? { ...prev, [card.id]: false } : prev))
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggleFlip(card.id);
                    }
                  }}
                  className="card-flip-container h-full cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-xl active:scale-[0.98] transition-transform duration-200"
                >
                  <div className={`card-flip-inner ${isFlipped ? "is-flipped" : ""}`}>
                    {/* Front */}
                    <div className="card-flip-front card-glass rounded-xl p-6 flex flex-col justify-between border border-[var(--border-subtle)] hover:border-red-500/40 hover:shadow-[0_8px_25px_rgba(239,35,60,0.18)] transition-all duration-300">
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-[22px]">{card.icon}</span>
                          </div>
                        </div>
                        <h3 className="text-base font-bold text-[var(--text-primary)] mb-1.5">{card.title}</h3>
                        <p className="text-xs text-[var(--text-secondary)] font-normal line-clamp-2 leading-relaxed">
                          {card.summary}
                        </p>
                      </div>
                      <div>
                        <span className="text-[10px] text-[var(--text-muted)] mt-2 block text-right font-medium">
                          Hover to flip ↻
                        </span>
                      </div>
                    </div>

                    {/* Back */}
                    <div className="card-flip-back card-glass rounded-xl p-5 flex flex-col justify-between border border-red-500/40 bg-[var(--bg-card-alt)] shadow-[0_0_25px_rgba(239,35,60,0.25)]">
                      <div>
                        <span className="text-[11px] font-mono font-bold text-red-300 uppercase tracking-wider">
                          {card.backTitle}
                        </span>
                        <ul className="text-xs text-[var(--text-secondary)] space-y-1.5 mt-2.5 font-normal">
                          {card.points.map((point) => (
                            <li key={point} className="flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
