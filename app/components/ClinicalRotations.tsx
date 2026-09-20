"use client";

import ScrollReveal from "./ScrollReveal";

interface ClinicalRotationsProps {
  onOpenHospital: (type: "care24" | "maruthi") => void;
}

export default function ClinicalRotations({ onOpenHospital }: ClinicalRotationsProps) {
  return (
    <section className="py-24 border-t border-[var(--border-faint)] relative bg-[var(--bg-primary)]" id="clinical">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal variant="fade-up" className="text-left mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 mb-3">
            <span className="text-xs uppercase tracking-widest text-[#ef233c] font-bold">
              Clinical &amp; Hospital Internships
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-primary)] uppercase">
            Hands-on Hospital <span className="text-[#ef233c]">Rotations</span>
          </h2>
          <p className="text-sm text-[var(--text-muted)] mt-2">
            Direct clinical exposure to critical care systems, preventive maintenance (PPM), and NABH hospital standards.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Care24 Medical Centre */}
          <ScrollReveal variant="fade-up" delay={80} className="h-full">
            <div
              className="card-glass rounded-2xl p-8 border border-[var(--border-subtle)] relative overflow-hidden group hover:border-[#ef233c]/50 hover:shadow-[0_16px_40px_rgba(239,35,60,0.18)] hover:-translate-y-1.5 transition-all duration-300 cursor-pointer h-full flex flex-col justify-between"
              onClick={() => onOpenHospital("care24")}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onOpenHospital("care24");
                }
              }}
            >
              <div>
                <div className="flex flex-wrap items-start justify-between gap-3 mb-6">
                  <div>
                    <span className="text-[11px] font-mono text-[#ef233c] uppercase tracking-wider font-semibold">
                      15 Days Rotation • 2026
                    </span>
                    <h3 className="text-2xl font-black text-[var(--text-primary)] mt-1 group-hover:text-[var(--text-primary)] transition-colors">
                      Care24 Medical Centre &amp; Hospital
                    </h3>
                    <p className="text-xs text-[var(--text-muted)] mt-0.5">Erode, Tamil Nadu</p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 transition-all group-hover:bg-emerald-500/20">
                    Critical Care
                  </span>
                </div>

                <div className="space-y-4 text-xs text-[var(--text-secondary)]">
                  <div>
                    <h4 className="font-bold uppercase tracking-wider text-[11px] mb-2 text-[#ef233c]">
                      Advanced Clinical Systems Handled:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[var(--text-secondary)] font-light">
                      <div className="flex items-center gap-1.5 p-1 rounded hover:bg-[var(--border-faint)] transition-colors">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ef233c]" />
                        <span>Cath Lab: Siemens Artis Zee, OCT</span>
                      </div>
                      <div className="flex items-center gap-1.5 p-1 rounded hover:bg-[var(--border-faint)] transition-colors">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ef233c]" />
                        <span>CT: GE Revolution ACT 16-Slice</span>
                      </div>
                      <div className="flex items-center gap-1.5 p-1 rounded hover:bg-[var(--border-faint)] transition-colors">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ef233c]" />
                        <span>ICU: Mindray UMEC 12 Monitor</span>
                      </div>
                      <div className="flex items-center gap-1.5 p-1 rounded hover:bg-[var(--border-faint)] transition-colors">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ef233c]" />
                        <span>Ventilator: Dräger Evita V300</span>
                      </div>
                      <div className="flex items-center gap-1.5 p-1 rounded hover:bg-[var(--border-faint)] transition-colors">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ef233c]" />
                        <span>Dialysis: Fresenius 4008S Classix</span>
                      </div>
                      <div className="flex items-center gap-1.5 p-1 rounded hover:bg-[var(--border-faint)] transition-colors">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ef233c]" />
                        <span>Ultrasound: Philips Affiniti 50G</span>
                      </div>
                      <div className="flex items-center gap-1.5 p-1 rounded hover:bg-[var(--border-faint)] transition-colors">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ef233c]" />
                        <span>NICU: Phoenix IW-200 Warmer</span>
                      </div>
                      <div className="flex items-center gap-1.5 p-1 rounded hover:bg-[var(--border-faint)] transition-colors">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ef233c]" />
                        <span>Anesthesia: Dräger Perseus A500</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[var(--border-faint)] flex items-center justify-between mt-4">
                <p className="text-xs text-[var(--text-muted)] leading-relaxed font-light">
                  Executed Planned Preventive Maintenance (PPM), Breakdown (BD) workflows, and NABH compliance.
                </p>
                <span className="text-xs font-bold text-[#ef233c] shrink-0 ml-2 group-hover:translate-x-1.5 transition-transform">
                  Details →
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* Maruthi Medical Centre */}
          <ScrollReveal variant="fade-up" delay={180} className="h-full">
            <div
              className="card-glass rounded-2xl p-8 border border-[var(--border-subtle)] relative overflow-hidden group hover:border-[#ef233c]/50 hover:shadow-[0_16px_40px_rgba(239,35,60,0.18)] hover:-translate-y-1.5 transition-all duration-300 cursor-pointer h-full flex flex-col justify-between"
              onClick={() => onOpenHospital("maruthi")}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onOpenHospital("maruthi");
                }
              }}
            >
              <div>
                <div className="flex flex-wrap items-start justify-between gap-3 mb-6">
                  <div>
                    <span className="text-[11px] font-mono text-[#ef233c] uppercase tracking-wider font-semibold">
                      15 Days Rotation • 2025
                    </span>
                    <h3 className="text-2xl font-black text-[var(--text-primary)] mt-1 group-hover:text-[var(--text-primary)] transition-colors">
                      Maruthi Medical Centre
                    </h3>
                    <p className="text-xs text-[var(--text-muted)] mt-0.5">Erode, Tamil Nadu</p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-red-500/10 text-red-400 border border-red-500/20 transition-all group-hover:bg-red-500/20">
                    Diagnostic &amp; Imaging
                  </span>
                </div>

                <div className="space-y-4 text-xs text-[var(--text-secondary)]">
                  <div>
                    <h4 className="font-bold uppercase tracking-wider text-[11px] mb-2 text-[#ef233c]">
                      Departments &amp; Modalities:
                    </h4>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {["EEG", "EMG", "ECG", "Cath Lab", "CT Scan", "MRI Suite", "OT & OP"].map((modality) => (
                        <span
                          key={modality}
                          className="px-2.5 py-1 rounded bg-[var(--bg-card-alt)] border border-[var(--border-subtle)] text-[11px] text-[var(--text-secondary)] hover:border-red-500/30 transition-colors"
                        >
                          {modality}
                        </span>
                      ))}
                    </div>

                    <h4 className="font-bold text-[var(--text-primary)] uppercase tracking-wider text-[11px] mb-1.5">
                      Instrumentation &amp; Calibration:
                    </h4>
                    <p className="text-xs text-[var(--text-muted)] leading-relaxed font-light">
                      Assisted senior biomedical engineers in CT/MRI room shielding assessments, centrifuges,
                      clinical oxygen pipelines, and anesthesia vaporizers calibration protocols.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[var(--border-faint)] flex items-center justify-between mt-4">
                <p className="text-xs text-[var(--text-muted)] leading-relaxed font-light">
                  Practical understanding of hospital procurement pipelines and clinical life cycles.
                </p>
                <span className="text-xs font-bold text-[#ef233c] shrink-0 ml-2 group-hover:translate-x-1.5 transition-transform">
                  Details →
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
