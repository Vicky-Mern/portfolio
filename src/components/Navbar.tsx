import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, Linkedin, Menu, X, Code2 } from 'lucide-react';
import { CONTACT_INFO } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About Me', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/40 backdrop-blur-xl border-b border-white/5 shadow-2xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2.5 group cursor-pointer focus:outline-none"
            aria-label="Home"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-500/30 via-cyan-500/30 to-indigo-500/30 p-[1px] border border-cyan-500/30 group-hover:border-cyan-400/60 transition-all duration-300">
              <div className="w-full h-full bg-[#020617] rounded-[15px] flex items-center justify-center">
                <span className="font-extrabold text-2xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  VK
                </span>
              </div>
            </div>
            <div className="flex flex-col text-left">
              <span className="font-bold text-white text-base tracking-tight group-hover:text-cyan-400 transition-colors">
                Vicky Kumar
              </span>
              <span className="text-[10px] text-cyan-400 font-mono flex items-center gap-1">
                <Code2 className="w-3 h-3" /> MERN Stack
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-4 py-1.5 shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={CONTACT_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-200"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={CONTACT_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-200"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-3 pb-6 mt-3 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-left px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${
                    activeSection === link.id
                      ? 'bg-cyan-950/60 text-cyan-400 border border-cyan-800/50'
                      : 'text-slate-300 hover:bg-slate-900'
                  }`}
                >
                  {link.name}
                </button>
              ))}

              <div className="pt-3 mt-2 border-t border-slate-800/80 flex items-center justify-around">
                <a
                  href={CONTACT_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 text-slate-300 border border-slate-800"
                >
                  <Github className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs">GitHub</span>
                </a>
                <a
                  href={CONTACT_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 text-slate-300 border border-slate-800"
                >
                  <Linkedin className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs">LinkedIn</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
