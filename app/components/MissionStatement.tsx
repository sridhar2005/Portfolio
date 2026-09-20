"use client";

import ScrollReveal from "./ScrollReveal";

export default function MissionStatement() {
  const metrics = [
    { value: "7.5", label: "CGPA Metric" },
    { value: "30+", label: "Hospital Days" },
    { value: "6+", label: "Certifications" },
    { value: "2+", label: "State Awards" },
  ];

  return (
    <section className="py-28 border-t border-[var(--border-faint)] bg-[var(--bg-primary)] relative overflow-hidden" id="mission">
      <div className="absolute inset-0 pointer-events-none -z-10" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-red-600/10 rounded-full blur-[100px] ambient-glow" />
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center">
        <ScrollReveal variant="fade-up">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[var(--text-primary)] leading-tight mb-8">
            MAKING STEADY <br />
            PROGRESS ON OUR MISSION TO <br />
            <span className="text-[#ef233c] inline-block hover:scale-105 transition-transform duration-300">
              TRANSFORM IDEAS <br />
              INTO HARDWARE
            </span>
          </h2>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={150}>
          <div className="max-w-3xl mx-auto space-y-4 text-[var(--text-muted)] text-sm sm:text-base leading-relaxed font-normal mb-16">
            <p>
              <em>I believe every challenge is an opportunity to learn, create, and become better than yesterday,</em>
              <br />
              <em>with a mindset focused on innovation, continuous growth, and building solutions that truly matter.</em>
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-[var(--border-subtle)]">
          {metrics.map((m, idx) => (
            <ScrollReveal
              key={m.label}
              variant="zoom-in"
              delay={180 + idx * 80}
            >
              <div className="flex flex-col items-center group cursor-default">
                <span className="text-4xl sm:text-5xl font-black text-[#ef233c] group-hover:scale-110 group-hover:drop-shadow-[0_0_16px_rgba(239,35,60,0.6)] transition-all duration-300">
                  {m.value}
                </span>
                <span className="text-xs text-[var(--text-muted)] uppercase tracking-widest mt-2 group-hover:text-[var(--text-secondary)] transition-colors">
                  {m.label}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
