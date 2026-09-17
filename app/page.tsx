"use client";

import { useState } from "react";
import CursorGlow from "./components/CursorGlow";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import SkillsMatrix from "./components/SkillsMatrix";
import ClinicalRotations from "./components/ClinicalRotations";
import Education from "./components/Education";
import HonorsAwards from "./components/HonorsAwards";
import Certifications from "./components/Certifications";
import MissionStatement from "./components/MissionStatement";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Modal, { ModalType } from "./components/Modal";

export default function Home() {
  const [modalType, setModalType] = useState<ModalType>(null);

  return (
    <div className="relative min-h-screen bg-black text-gray-200">
      {/* Dynamic Cursor Light Follower */}
      <CursorGlow />

      {/* Navigation Header */}
      <Navbar />

      <main>
        {/* Hero Section */}
        <Hero onOpenCredentials={() => setModalType("credentials")} />

        {/* About & Engineering Manifesto */}
        <About />

        {/* Skills & 3D Interactive Capabilities Matrix */}
        <SkillsMatrix />

        {/* Clinical & Hospital Internships */}
        <ClinicalRotations onOpenHospital={(type) => setModalType(type)} />

        {/* Education & Academic Journey */}
        <Education />

        {/* Scholarly Distinctions & Awards */}
        <HonorsAwards />

        {/* Certifications & Continuous Learning */}
        <Certifications />

        {/* Mission Statement */}
        <MissionStatement />

        {/* Contact & Collaboration */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modal for Rotations & Credentials */}
      <Modal type={modalType} onClose={() => setModalType(null)} />
    </div>
  );
}
