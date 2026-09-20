"use client";

import ScrollReveal from "./ScrollReveal";

export default function Education() {
  const timeline = [
    {
      degree: "B.E. Biomedical Engineering",
      badge: "2024 - 2028 (Undergrad)",
      badgeColor: "bg-red-500/10 text-[#ef233c] border-red-500/20",
      institution: "K.S.R. College of Engineering, Tiruchengode",
      metricLabel: "Current Academic Score:",
      metricValue: "7.5 CGPA",
      metricColor: "text-emerald-400",
    },
    {
      degree: "Higher Secondary (12th Grade)",
      badge: "State Board",
      badgeColor: "bg-[var(--bg-card-alt)] text-[var(--text-secondary)] border-[var(--border-subtle)]",
      institution: "GBHSS Anthiyur, Tamil Nadu",
      metricLabel: "Final Examination Result:",
      metricValue: "80%",
      metricColor: "text-[var(--text-primary)]",
    },
    {
      degree: "Secondary School Leaving Certificate (10th Grade)",
      badge: "State Board",
      badgeColor: "bg-[var(--bg-card-alt)] text-[var(--text-secondary)] border-[var(--border-subtle)]",
      institution: "GHS Pallipalayam, Tamil Nadu",
      metricLabel: "Final Examination Result:",
      metricValue: "76%",
      metricColor: "text-[var(--text-primary)]",
    },
  ];

  return (
    <section className="py-24 border-t border-[var(--border-faint)] relative bg-[var(--bg-primary)]" id="education">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal variant="fade-up" className="text-left mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 mb-3">
            <span className="text-xs uppercase tracking-widest text-[#ef233c] font-bold">
              Milestone
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-primary)] uppercase">
            Academic <span className="text-[#ef233c]">Journey</span>
          </h2>
          <p className="text-sm text-[var(--text-muted)] mt-2">
            Foundation in engineering science, clinical biomedical devices, and physical mathematics.
          </p>
        </ScrollReveal>

        <div className="relative border-l-2 border-red-600/30 pl-8 ml-3 space-y-10">
          {timeline.map((item, idx) => (
            <ScrollReveal
              key={item.degree}
              variant="fade-right"
              delay={idx * 100}
              className="relative group"
            >
              <span className="absolute -left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#ef233c] ring-4 ring-[var(--bg-primary)] group-hover:scale-150 group-hover:bg-red-400 group-hover:shadow-[0_0_12px_rgba(239,35,60,0.8)] transition-all duration-300" />
              <div className="card-glass p-6 rounded-xl border border-[var(--border-subtle)] hover:border-red-500/40 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(239,35,60,0.15)] transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h3 className="text-xl font-bold text-[var(--text-primary)] tracking-wide group-hover:text-[#ef233c] transition-colors">
                    {item.degree}
                  </h3>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-mono font-bold border w-fit ${item.badgeColor}`}
                  >
                    {item.badge}
                  </span>
                </div>
                <p className="text-sm font-semibold text-[var(--text-secondary)] mb-2">{item.institution}</p>
                <div className="flex items-center gap-3 mt-3 pt-3 border-t border-[var(--border-faint)]">
                  <span className="text-xs text-[var(--text-muted)]">{item.metricLabel}</span>
                  <span className={`text-sm font-bold font-mono ${item.metricColor}`}>
                    {item.metricValue}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
