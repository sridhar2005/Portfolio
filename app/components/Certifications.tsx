"use client";

import ScrollReveal from "./ScrollReveal";

export default function Certifications() {
  const certs = [
    {
      issuer: "Google Cloud",
      date: "July 2026",
      title: "Introduction to Generative AI Studio",
      desc: "Exploration of foundation model prompting, multimodal pipelines, and rapid GenAI prototype tooling.",
      highlight: false,
    },
    {
      issuer: "Microsoft Tech",
      date: "July 2026",
      title: "Optimize & Extend Microsoft 365 Copilot",
      desc: "Custom plugin workflows, enterprise semantic index integration, and automated document synthesis.",
      highlight: false,
    },
    {
      issuer: "IBM SkillsBuild",
      date: "July 2026",
      title: "Artificial Intelligence Fundamentals",
      desc: "Supervised/unsupervised concepts, ethical AI deployment in diagnostics, and neural structure evaluation.",
      highlight: false,
    },
    {
      issuer: "NPTEL / IIT",
      date: "Elite (Score 71)",
      title: "Introduction to Internet of Things",
      desc: "12-Week intensive covering edge compute, wireless sensor networks, MQTT/HTTP protocols, and MCU integration.",
      highlight: true,
    },
    {
      issuer: "Govt of Tamil Nadu",
      date: "TN Skills 2025",
      title: "TN Skills: Dental Prosthetics",
      desc: "State competition participation focused on precision dental casting, prosthetic tolerances, and biomaterials.",
      highlight: false,
    },
    {
      issuer: "TANCAM",
      date: "March 2026",
      title: "TN-IMPACT / CAD & CAM Sessions",
      desc: "Special sessions in advanced digital manufacturing, 3D modeling pipelines, and rapid medical tooling.",
      highlight: false,
    },
  ];

  return (
    <section className="py-24 border-t border-white/5 relative bg-black" id="certifications">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal variant="fade-up" className="text-left mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 mb-3">
            <span className="text-xs uppercase tracking-widest text-[#ef233c] font-bold">
              Continuous Learning
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase">
            <span className="text-[#ef233c]">Certifications</span>
          </h2>
          <p className="text-sm text-gray-400 mt-2">
            Credentials validated across Google Cloud, Microsoft, IBM, IIT / NPTEL, and Tamil Nadu state bodies.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert, idx) => (
            <ScrollReveal
              key={cert.title}
              variant="fade-up"
              delay={idx * 70}
              className="h-full"
            >
              <div className="card-glass rounded-xl p-6 border border-white/10 hover:border-[#ef233c]/50 hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(239,35,60,0.18)] group transition-all duration-300 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono font-semibold text-gray-400 uppercase">
                      {cert.issuer}
                    </span>
                    <span
                      className={`text-[11px] font-mono flex items-center gap-1 ${
                        cert.highlight ? "text-emerald-400 font-bold" : "text-[#ef233c]"
                      }`}
                    >
                      <span className="material-symbols-outlined text-[13px] group-hover:rotate-180 transition-transform duration-500">
                        {cert.highlight ? "workspace_premium" : "verified"}
                      </span>
                      {cert.date}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 leading-snug group-hover:text-[#ef233c] transition-colors">
                    {cert.title}
                  </h3>
                </div>
                <p className="text-xs text-gray-400 font-light leading-relaxed mt-2">{cert.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
