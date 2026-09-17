"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "227ea04e-c550-4027-8450-3a62b3efe5aa",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Contact Inquiry: ${formData.name}`,
          from_name: formData.name,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("sent");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => {
          setStatus("idle");
        }, 6000);
      } else {
        setStatus("error");
        setErrorMessage(result.message || "Failed to transmit message. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again or reach out directly via email.");
    }
  };

  return (
    <section className="py-24 border-t border-white/5 relative bg-black" id="contact">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal variant="fade-up" className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 mb-3">
            <span className="text-xs uppercase tracking-widest text-[#ef233c] font-bold">
              Initiate Collaboration
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            LET&apos;S BUILD <br />
            <span className="text-[#ef233c]">SOMETHING GREAT</span>
          </h2>
          <p className="text-sm text-gray-400 mt-3">Have an opportunity? Let&apos;s talk.</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details */}
          <ScrollReveal variant="fade-right" delay={100} className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-white mb-6">Contact</h3>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-zinc-900/60 border border-white/5 hover:border-red-500/40 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(239,35,60,0.15)] transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-[#ef233c] shrink-0 transition-transform duration-300 group-hover:scale-110">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div>
                <span className="text-xs text-gray-400 block">Direct Email</span>
                <a
                  className="text-sm font-semibold text-white hover:text-[#ef233c] transition-colors"
                  href="mailto:kavisridharsk2005@gmail.com"
                >
                  kavisridharsk2005@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-zinc-900/60 border border-white/5 hover:border-red-500/40 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(239,35,60,0.15)] transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-[#ef233c] shrink-0 transition-transform duration-300 group-hover:scale-110">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div>
                <span className="text-xs text-gray-400 block">Phone / WhatsApp</span>
                <a
                  className="text-sm font-semibold text-white hover:text-[#ef233c] transition-colors"
                  href="https://wa.me/919360071341"
                  rel="noreferrer"
                  target="_blank"
                >
                  +91 9360071341
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-zinc-900/60 border border-white/5 hover:border-red-500/40 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(239,35,60,0.15)] transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-[#ef233c] shrink-0 transition-transform duration-300 group-hover:scale-110">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                  <path
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div>
                <span className="text-xs text-gray-400 block">Location</span>
                <span className="text-sm font-semibold text-white">Anthiyur, Erode, Tamil Nadu</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/40 border border-white/5 text-xs text-gray-400 leading-relaxed">
              <p className="font-medium text-gray-300">
                Available for freelance projects and full-time opportunities
              </p>
              <p className="text-gray-500 mt-1">Response time: Usually within 24 hours</p>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal variant="fade-left" delay={180} className="lg:col-span-7">
            <div className="card-glass p-8 rounded-2xl hover:border-red-500/30 transition-all duration-500">
              <form className="space-y-5" onSubmit={handleSubmit}>
                {/* HoneyPot Bot Check */}
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

                <div>
                  <label
                    className="block text-xs font-semibold uppercase text-gray-200 tracking-wider mb-2"
                    htmlFor="contact-name"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    disabled={status === "sending"}
                    className="w-full px-4 py-3 rounded-lg bg-zinc-900/90 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-[#ef233c] focus:ring-1 focus:ring-[#ef233c] text-sm transition-all duration-300 disabled:opacity-60"
                  />
                </div>

                <div>
                  <label
                    className="block text-xs font-semibold uppercase text-gray-200 tracking-wider mb-2"
                    htmlFor="contact-email"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    disabled={status === "sending"}
                    className="w-full px-4 py-3 rounded-lg bg-zinc-900/90 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-[#ef233c] focus:ring-1 focus:ring-[#ef233c] text-sm transition-all duration-300 disabled:opacity-60"
                  />
                </div>

                <div>
                  <label
                    className="block text-xs font-semibold uppercase text-gray-200 tracking-wider mb-2"
                    htmlFor="contact-message"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your biomedical inquiry or project idea..."
                    disabled={status === "sending"}
                    className="w-full px-4 py-3 rounded-lg bg-zinc-900/90 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-[#ef233c] focus:ring-1 focus:ring-[#ef233c] text-sm resize-none transition-all duration-300 disabled:opacity-60"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className={`btn-sweep w-full py-3.5 px-6 rounded-lg text-xs uppercase tracking-widest font-bold text-white shadow-lg transition flex items-center justify-center gap-2 group cursor-pointer ${
                    status === "sent"
                      ? "bg-emerald-600 shadow-emerald-600/30"
                      : status === "error"
                      ? "bg-rose-700 hover:bg-rose-800 shadow-rose-700/30"
                      : "bg-[#ef233c] hover:bg-[#d90429] shadow-red-600/30"
                  }`}
                >
                  <span>
                    {status === "sending"
                      ? "Transmitting..."
                      : status === "sent"
                      ? "Dispatched ✓"
                      : status === "error"
                      ? "Retry Transmission"
                      : "Send Message"}
                  </span>

                  {status === "sending" && (
                    <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                  )}

                  {status === "idle" && (
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  )}
                </button>

                {status === "sent" && (
                  <div className="text-center text-xs font-medium text-emerald-400 pt-1 flex items-center justify-center gap-1.5 animate-hero-up">
                    <svg className="w-4 h-4 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Message dispatched successfully! Sridhar will reach out soon.</span>
                  </div>
                )}

                {status === "error" && (
                  <div className="text-center text-xs font-medium text-red-400 pt-1 flex items-center justify-center gap-1.5 animate-hero-up">
                    <svg className="w-4 h-4 text-red-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{errorMessage || "Transmission failed. Please try again or email directly."}</span>
                  </div>
                )}
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
