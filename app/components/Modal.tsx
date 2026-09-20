"use client";

import { useEffect } from "react";

export type ModalType = "care24" | "maruthi" | "credentials" | null;

interface ModalProps {
  type: ModalType;
  onClose: () => void;
}

export default function Modal({ type, onClose }: ModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (type) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [type, onClose]);

  if (!type) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xl modal-backdrop-anim"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto liquid-glass-modal rounded-2xl p-6 sm:p-8 shadow-2xl text-left modal-dialog-anim">
        <button
          aria-label="Close Modal"
          onClick={onClose}
          className="absolute top-5 right-5 text-[var(--text-muted)] hover:text-[var(--text-primary)] p-1.5 rounded-full hover:bg-[var(--border-faint)] transition-colors focus:outline-none cursor-pointer"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        {type === "care24" && (
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#ef233c] font-bold uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-[#ef233c] animate-ping" />
              Clinical Rotation Breakdown
            </div>
            <h3 className="text-2xl font-black text-[var(--text-primary)] mb-2">Care24 Medical Centre &amp; Hospital</h3>
            <p className="text-xs text-[var(--text-muted)] mb-4">
              15 Days Intensive Rotation • Critical Care &amp; Diagnostic Radiography
            </p>
            <div className="space-y-3 text-xs text-[var(--text-secondary)]">
              <p className="leading-relaxed">
                <strong className="text-[var(--text-primary)]">Core Focus:</strong> Direct clinical biomedical equipment
                maintenance, sensor calibration, and life-support stability protocols.
              </p>
              <div className="p-3.5 liquid-glass-subtle rounded-xl space-y-2">
                <div className="font-mono text-[11px] text-red-300 font-bold uppercase">
                  Key Medical Instruments Maintained:
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[var(--text-secondary)] font-light">
                  <li>• Siemens Artis Zee Cath Lab</li>
                  <li>• GE Revolution ACT 16-Slice CT</li>
                  <li>• Mindray UMEC 12 Multi-param</li>
                  <li>• Dräger Evita V300 Ventilator</li>
                  <li>• Fresenius 4008S Dialysis</li>
                  <li>• Philips Affiniti 50G Ultrasound</li>
                </ul>
              </div>
              <p className="leading-relaxed text-[var(--text-muted)]">
                Maintained adherence with NABH hospital calibration standards and continuous Planned
                Preventive Maintenance (PPM) registry updates.
              </p>
            </div>
          </div>
        )}

        {type === "maruthi" && (
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#ef233c] font-bold uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-[#ef233c] animate-ping" />
              Clinical Rotation Breakdown
            </div>
            <h3 className="text-2xl font-black text-[var(--text-primary)] mb-2">Maruthi Medical Centre</h3>
            <p className="text-xs text-[var(--text-muted)] mb-4">
              15 Days Intensive Rotation • Diagnostic &amp; Neuro-Imaging Modalities
            </p>
            <div className="space-y-3 text-xs text-[var(--text-secondary)]">
              <p className="leading-relaxed">
                <strong className="text-[var(--text-primary)]">Core Focus:</strong> Diagnostic biopotential telemetry, imaging
                suite radiation shielding assessment, and emergency breakdown (BD) protocols.
              </p>
              <div className="p-3.5 liquid-glass-subtle rounded-xl space-y-2">
                <div className="font-mono text-[11px] text-red-300 font-bold uppercase">Clinical Modalities:</div>
                <p className="text-[var(--text-secondary)] font-light">
                  Comprehensive rotation through EEG, EMG, 12-lead ECG, CT Scanning Suite, MRI Cryogen status
                  monitoring, and Operation Theatre (OT) anesthesia apparatus.
                </p>
              </div>
              <p className="leading-relaxed text-[var(--text-muted)]">
                Assisted senior biomedical staff with high-pressure oxygen pipeline inspections, vacuum
                regulators, and clinical asset uptime tracking.
              </p>
            </div>
          </div>
        )}

        {type === "credentials" && (
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#ef233c] font-bold uppercase tracking-wider mb-2">
              <span className="material-symbols-outlined text-base">verified</span> Verified Academic Credentials
            </div>
            <h3 className="text-2xl font-black text-[var(--text-primary)] mb-1">Sridhar SK</h3>
            <p className="text-xs text-[var(--text-muted)] mb-4">
              B.E. Biomedical Engineering (2024–2028) • K.S.R. College of Engineering
            </p>
            <div className="space-y-3 font-mono text-xs">
              <div className="p-3 liquid-glass-subtle rounded-lg flex justify-between items-center">
                <span className="text-[var(--text-secondary)] font-medium">B.E. Cumulative CGPA</span>
                <span className="text-emerald-400 font-bold text-sm">7.5 / 10.0</span>
              </div>
              <div className="p-3 liquid-glass-subtle rounded-lg flex justify-between items-center">
                <span className="text-[var(--text-secondary)] font-medium">Higher Secondary (12th)</span>
                <span className="text-[var(--text-primary)] font-bold text-sm">80.0%</span>
              </div>
              <div className="p-3 liquid-glass-subtle rounded-lg flex justify-between items-center">
                <span className="text-[var(--text-secondary)] font-medium">NPTEL IoT Certification</span>
                <span className="text-[#ef233c] font-bold text-sm">Elite Certificate (Score 71)</span>
              </div>
              <div className="p-3 liquid-glass-subtle rounded-lg flex justify-between items-center">
                <span className="text-[var(--text-secondary)] font-medium">Shanmuga Eng College Award</span>
                <span className="text-amber-400 font-bold text-sm">2nd Prize (Plantar Ulcer Device)</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
