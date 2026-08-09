import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { CONTACT_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/5 bg-[#020617]/90 backdrop-blur-xl py-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand Copyright */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-xl bg-gradient-to-br from-blue-500/30 via-cyan-500/30 to-indigo-500/30 p-[1px] border border-cyan-500/30">
              <div className="w-full h-full bg-[#020617] rounded-[10px] flex items-center justify-center">
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 text-xs">
                  VK
                </span>
              </div>
            </div>
            <span className="text-sm font-bold text-white">Vicky Kumar</span>
            <span className="text-xs text-slate-500 font-mono">| Full Stack Developer</span>
          </div>

          <p className="text-xs text-slate-400 mt-1">
            © 2026 Vicky Kumar. Built with React.js, Tailwind CSS & Modern Web Technologies
          </p>
        </div>

        {/* Quick Links Navigation */}
        <div className="flex items-center gap-5 text-xs font-semibold text-slate-400">
          <button onClick={() => scrollToSection('home')} className="hover:text-cyan-400 transition-colors cursor-pointer">
            Home
          </button>
          <button onClick={() => scrollToSection('about')} className="hover:text-cyan-400 transition-colors cursor-pointer">
            About
          </button>
          <button onClick={() => scrollToSection('skills')} className="hover:text-cyan-400 transition-colors cursor-pointer">
            Skills
          </button>
          <button onClick={() => scrollToSection('projects')} className="hover:text-cyan-400 transition-colors cursor-pointer">
            Projects
          </button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-cyan-400 transition-colors cursor-pointer">
            Contact
          </button>
        </div>

        {/* Social Links & Back To Top */}
        <div className="flex items-center gap-3">
          <a
            href={CONTACT_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2.5 rounded-2xl bg-white/5 border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={CONTACT_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2.5 rounded-2xl bg-white/5 border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            aria-label="Email Me"
            className="p-2.5 rounded-2xl bg-white/5 border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            aria-label="Back to Top"
            className="p-2.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500 hover:text-white font-bold transition-all ml-2 cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

