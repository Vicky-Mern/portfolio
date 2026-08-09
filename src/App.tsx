import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 bg-grid-pattern relative overflow-x-hidden">
      {/* Animated Gradient Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[45%] h-[45%] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[45%] h-[45%] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[40%] left-[30%] w-[35%] h-[35%] bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Sticky Top Navbar */}
      <Navbar />

      {/* Main Sections */}
      <main>
        {/* 1. HERO SECTION (PHOTO + DESCRIPTION + ABOUT ME + ACHIEVEMENTS) */}
        <HeroSection />

        {/* 2. SKILLS SECTION */}
        <SkillsSection />

        {/* 3. PROJECT SECTION */}
        <ProjectsSection />

        {/* 4. FOOTER + CONTACT SECTION */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
