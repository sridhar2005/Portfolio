"use client";

import ScrollReveal from "./ScrollReveal";

export default function About() {
  const pillars = [
    {
      icon: "alt_route",
      title: "Alternative Possibilities",
      desc: "Reframing technical and clinical constraints into lateral diagnostic innovations.",
    },
    {
      icon: "healing",
      title: "Bypass & Solutions",
      desc: "Rapid fault isolation, emergency bypass routing, and hardware circuit recovery.",
    },
    {
      icon: "view_in_ar",
      title: "CAD & Prototyping",
      desc: "AutoCAD & Fusion 360 iterative component drafting for custom healthcare hardware.",
    },
    {
      icon: "psychology",
      title: "Reverse Engineering",
      desc: "Methodical troubleshooting, composed decision-making, and high-stress clinical resilience.",
    },
  ];

  const dossier = [
    { label: "Current Degree", value: "B.E. Biomedical Eng. (2024–2028)" },
    { label: "Education", value: "K.S.R. College of Eng." },
    { label: "Location", value: "Tiruchengode, Tamil Nadu" },
    { label: "Academic Metric", value: "7.5 CGPA", highlight: true },
    { label: "Primary Discipline", value: "R&D / Medical Robotics" },
  ];

  return (
    <section className="py-24 border-t border-[var(--border-faint)] relative bg-[var(--bg-primary)]" id="about">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Engineering Manifesto */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal variant="fade-up">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#ef233c] animate-ping" />
                <span className="text-xs uppercase tracking-widest text-[#ef233c] font-bold">
                  Engineering Manifesto
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-primary)] uppercase mt-4">
                Take risk.
                <div>
                  <span className="text-[#ef233c]">create something.</span>
                </div>
              </h2>

              <p className="text-base sm:text-lg text-[var(--text-secondary)] font-normal leading-relaxed mt-4">
                &ldquo;I am a Biomedical Engineer passionate about R&amp;D and 3D modelling. I enjoy problem solving,
                finding alternate possibilities, and exploring bypass solutions. I am currently learning Advanced
                softwares. I like Robotics and aim toward advanced technology.&rdquo;
              </p>
            </ScrollReveal>

            {/* 4 Pillars with Staggered Entrance */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {pillars.map((pillar, idx) => (
                <ScrollReveal
                  key={pillar.title}
                  variant="fade-up"
                  delay={120 + idx * 80}
                  className="h-full"
                >
                  <div className="card-glass p-5 rounded-xl group cursor-default h-full transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(239,35,60,0.18)] hover:border-red-500/40">
                    <div className="w-9 h-9 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-[#ef233c] mb-3 group-hover:scale-110 group-hover:bg-[#ef233c] group-hover:text-white transition-all duration-300">
                      <span className="material-symbols-outlined text-[20px]">{pillar.icon}</span>
                    </div>
                    <h3 className="text-sm font-bold text-[var(--text-primary)] mb-1 group-hover:text-[#ef233c] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-[var(--text-muted)] leading-relaxed font-light">{pillar.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Right: Telemetry Dossier Card */}
          <ScrollReveal variant="fade-left" delay={200} className="lg:col-span-5 w-full">
            <div className="card-glass rounded-2xl p-7 relative overflow-hidden border border-[var(--border-subtle)] shadow-2xl hover:border-red-500/30 transition-all duration-500">
              <div className="flex items-center justify-between pb-5 border-b border-[var(--border-subtle)]">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#ef233c]">
                    BIOMEDICAL_DOSSIER
                  </span>
                  <h3 className="text-xl font-bold text-[var(--text-primary)] tracking-tight">Sridhar SK</h3>
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" title="System Active" />
              </div>

              <div className="space-y-4 pt-5 font-mono text-xs">
                {dossier.map((item) => (
                  <div
                    key={item.label}
                    className="flex justify-between items-center py-2 border-b border-[var(--border-subtle)] hover:bg-[var(--border-faint)] px-2 rounded transition-all duration-200"
                  >
                    <span className="text-[var(--text-secondary)] font-medium">{item.label}</span>
                    <span
                      className={`text-right ${
                        item.highlight ? "text-red-400 font-bold text-sm" : "text-[var(--text-primary)] font-semibold"
                      }`}
                    >
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-[var(--border-subtle)] bg-[var(--border-faint)] -mx-7 -mb-7 p-5 flex items-center justify-between">
                <span className="text-xs text-[var(--text-muted)]">Hometown</span>
                <span className="text-xs font-semibold text-[var(--text-primary)] flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[14px] text-[#ef233c]">location_on</span>
                  Anthiyur, Erode (TN)
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
