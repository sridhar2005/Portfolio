"use client";

import ScrollReveal from "./ScrollReveal";

export default function HonorsAwards() {
  const awards = [
    {
      badge: "2nd PRIZE",
      badgeColor: "bg-amber-500/10 text-amber-300 border-amber-500/20",
      icon: "emoji_events",
      iconColor: "bg-amber-500/10 border-amber-500/20 text-amber-400",
      hoverTitle: "group-hover:text-amber-300",
      title: "Foot Ulcer Monitoring Prototype",
      description:
        "Awarded 2nd Prize at Shanmuga Engineering College for engineering an innovative real-time podiatric diagnostic circuitry to detect plantar pressure ulcers before tissue breakdown.",
    },
    {
      badge: "3rd PRIZE",
      badgeColor: "bg-amber-500/10 text-amber-300 border-amber-500/20",
      icon: "workspace_premium",
      iconColor: "bg-amber-500/10 border-amber-500/20 text-amber-400",
      hoverTitle: "group-hover:text-amber-300",
      title: "Paper: Diabetic Monitor in Foot",
      description:
        "Awarded 3rd Prize for scholarly paper researching continuous non-invasive diabetic pressure degradation, sensor fusion algorithms, and early preventative warning telemetry.",
    },
    {
      badge: "STATE LEVEL",
      badgeColor: "bg-red-500/10 text-red-300 border-red-500/20",
      icon: "military_tech",
      iconColor: "bg-red-500/10 border-red-500/20 text-[#ef233c]",
      hoverTitle: "group-hover:text-[#ef233c]",
      title: "TN-IMPACT",
      description:
        "Selected delegate representing biomedical engineering initiatives at SNS College, Coimbatore in the Tamil Nadu state innovation consortium.",
    },
  ];

  return (
    <section className="py-24 border-t border-white/5 bg-[#050508] relative" id="awards">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal variant="fade-up" className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 mb-3">
            <span className="text-xs uppercase tracking-widest text-[#ef233c] font-bold">
              Scholarly &amp; Prototype Distinctions
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase">
            Honors &amp; <span className="text-[#ef233c]">Awards</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 mt-2 max-w-xl mx-auto">
            Work that speaks. Achievements that follow
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {awards.map((award, idx) => (
            <ScrollReveal
              key={award.title}
              variant="fade-up"
              delay={idx * 90}
              className="h-full"
            >
              <div className="card-glass rounded-2xl p-7 relative border border-white/10 group hover:-translate-y-2 hover:border-[#ef233c]/40 hover:shadow-[0_16px_36px_rgba(239,35,60,0.2)] transition-all duration-300 h-full flex flex-col justify-between">
                <div>
                  <div
                    className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 ${award.iconColor}`}
                  >
                    <span className="material-symbols-outlined text-[26px]">{award.icon}</span>
                  </div>
                  <div
                    className={`inline-block px-2.5 py-0.5 rounded text-[11px] font-mono font-bold border mb-3 ${award.badgeColor}`}
                  >
                    {award.badge}
                  </div>
                  <h3
                    className={`text-lg font-bold text-white mb-2 leading-tight transition-colors ${award.hoverTitle}`}
                  >
                    {award.title}
                  </h3>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed font-light mt-2">{award.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
