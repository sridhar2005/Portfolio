export default function Footer() {
  return (
    <footer className="py-8 border-t border-[var(--border-faint)] text-center text-xs text-[var(--text-faint)] bg-[var(--bg-primary)]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="tracking-wide">
          © {new Date().getFullYear()} Sridhar SK. Biomedical Engineering Portfolio.
        </p>

        {/* Social Destination Links */}
        <div className="flex items-center space-x-3">
          <a
            aria-label="Instagram"
            className="social-btn w-10 h-10 sm:w-8 sm:h-8 rounded-full flex items-center justify-center border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)]"
            href="https://www.instagram.com/srizz_sk._/"
            rel="noreferrer"
            target="_blank"
          >
            <svg className="w-4 h-4 sm:w-3.5 sm:h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
              <rect height="20" rx="5" ry="5" width="20" x="2" y="2" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>

          <a
            aria-label="LinkedIn"
            className="social-btn w-10 h-10 sm:w-8 sm:h-8 rounded-full flex items-center justify-center border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)]"
            href="https://www.linkedin.com/in/sridhar-sk-hellcatie1341/"
            rel="noreferrer"
            target="_blank"
          >
            <svg className="w-4 h-4 sm:w-3.5 sm:h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
            </svg>
          </a>

          <a
            aria-label="GitHub"
            className="social-btn w-10 h-10 sm:w-8 sm:h-8 rounded-full flex items-center justify-center border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)]"
            href="https://github.com/sridhar2005"
            rel="noreferrer"
            target="_blank"
          >
            <svg className="w-4 h-4 sm:w-3.5 sm:h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </a>

          <a
            aria-label="WhatsApp"
            className="social-btn w-10 h-10 sm:w-8 sm:h-8 rounded-full flex items-center justify-center border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)]"
            href="https://wa.me/919360071341"
            rel="noreferrer"
            target="_blank"
          >
            <svg className="w-4 h-4 sm:w-3.5 sm:h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.79 14.07c-.24.67-1.39 1.28-1.92 1.36-.51.08-1.17.11-3.79-.96-3.34-1.37-5.48-4.78-5.65-5-.16-.22-1.36-1.81-1.36-3.45 0-1.64.86-2.45 1.16-2.78.3-.33.66-.41.88-.41.22 0 .44 0 .63.01.2.01.47-.08.73.55.27.65.92 2.25 1 2.41.08.16.14.36.03.58-.11.22-.16.36-.33.55-.16.19-.35.43-.5.58-.16.16-.33.34-.14.67.19.33.84 1.39 1.81 2.25 1.25 1.11 2.3 1.46 2.63 1.62.33.16.52.14.71-.08.2-.22.82-.96 1.04-1.29.22-.33.44-.27.74-.16.3.11 1.91.9 2.24 1.06.33.16.55.25.63.38.08.14.08.79-.16 1.46z" />
            </svg>
          </a>

          <a
            aria-label="Email"
            className="social-btn w-10 h-10 sm:w-8 sm:h-8 rounded-full flex items-center justify-center border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)]"
            href="mailto:kavisridharsk2005@gmail.com"
          >
            <svg className="w-4 h-4 sm:w-3.5 sm:h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
              <path
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        <div className="flex items-center gap-2 font-mono text-[11px] text-[var(--text-muted)]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ef233c] animate-pulse" />
          <span>Designed for Healthcare &amp; Medical Robotics</span>
        </div>
      </div>
    </footer>
  );
}
