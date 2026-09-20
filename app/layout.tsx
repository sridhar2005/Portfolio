import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sridhar SK | Biomedical Engineer & Medical IoT Developer",
  description:
    "Portfolio of Sridhar SK, Biomedical Engineer passionate about healthcare robotics, IoT telemetry, clinical systems engineering, and rapid medical prototyping.",
  keywords: [
    "Biomedical Engineer",
    "Sridhar SK",
    "Medical IoT",
    "Clinical Engineering",
    "Healthcare Robotics",
    "Hospital PPM",
    "Cath Lab",
    "Autodesk Fusion 360",
    "Tamil Nadu"
  ],
  authors: [{ name: "Sridhar SK" }],
  openGraph: {
    title: "Sridhar SK | Biomedical Engineer Portfolio",
    description: "Bridging the gap between IoT and medical to build the next generation of healthcare solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${jetbrainsMono.variable} scroll-smooth dark`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{document.documentElement.setAttribute('data-theme','dark');document.documentElement.classList.add('dark');}catch(e){}`,
          }}
        />
        <meta name="theme-color" content="#000000" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[var(--bg-primary)] text-[var(--text-secondary)] antialiased selection:bg-[#ef233c] selection:text-white relative min-h-screen">
        {children}
      </body>
    </html>
  );
}
