import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle,
  Trophy,
  Rocket,
  Code2,
  Award,
  Sparkles,
  Clock,
  CreditCard
} from 'lucide-react';
import { HERO_DATA, CONTACT_INFO, ABOUT_TRAITS, ACHIEVEMENTS } from '../data/portfolioData';

export const HeroSection: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const roles = HERO_DATA.typingRoles;
    const currentRole = roles[roleIndex];
    let typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && displayText === currentRole) {
      typingSpeed = 2000;
      const timer = setTimeout(() => setIsDeleting(true), typingSpeed);
      return () => clearTimeout(timer);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      typingSpeed = 400;
    }

    const timer = setTimeout(() => {
      setDisplayText(
        isDeleting
          ? currentRole.substring(0, displayText.length - 1)
          : currentRole.substring(0, displayText.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getAchievementIcon = (iconName: string) => {
    switch (iconName) {
      case 'Trophy':
        return <Trophy className="w-5 h-5 text-yellow-400" />;
      case 'Rocket':
        return <Rocket className="w-5 h-5 text-cyan-400" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-blue-400" />;
      case 'Award':
        return <Award className="w-5 h-5 text-purple-400" />;
      case 'CreditCard':
        return <CreditCard className="w-5 h-5 text-emerald-400" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-amber-400" />;
      default:
        return <Trophy className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background Animated Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HERO TOP GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* LEFT: PHOTO + STATUS BADGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col items-center justify-center"
          >
            <div className="relative group">
              {/* Outer Glowing Pulsing Ring */}
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 blur-md opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse" />

              {/* Profile Image Frame */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-cyan-500/50 p-1.5 bg-slate-900/60 shadow-2xl shadow-cyan-500/20">
                <img
                  src={HERO_DATA.profileImage}
                  alt={HERO_DATA.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-full filter saturate-105 contrast-105 group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Floating MERN Badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#020617]/90 backdrop-blur-xl border border-cyan-500/40 px-4 py-1.5 rounded-full shadow-lg flex items-center gap-2 whitespace-nowrap">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 absolute" />
                <span className="text-xs font-semibold text-slate-200 ml-1">
                  Available for Opportunities
                </span>
              </div>
            </div>

            {/* Quick Contact Info Chips Under Photo */}
            <div className="mt-8 w-full max-w-sm glass-card rounded-3xl p-5 flex flex-col gap-3 text-xs text-slate-300 border border-white/10">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-cyan-400 transition-colors truncate">
                  {CONTACT_INFO.email}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-cyan-400 transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span>{CONTACT_INFO.location}</span>
              </div>

              <div className="pt-2.5 border-t border-white/10 flex items-center gap-2 text-[11px] text-cyan-400 font-medium">
                <Clock className="w-3.5 h-3.5" />
                <span>{CONTACT_INFO.responseTime}</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: HEADING, TYPING, SUMMARY, ACTIONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col text-left"
          >
            {/* Greeting pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold w-fit mb-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span>Available for Full-Time Roles</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Hi, I'm <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300 bg-clip-text text-transparent">Vicky Kumar</span>
            </h1>

            {/* Professional Title */}
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-200 mt-1.5 tracking-tight">
              {HERO_DATA.title}
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base font-semibold text-cyan-400 mt-1 font-mono">
              {HERO_DATA.subtitle}
            </p>

            {/* Typing Effect */}
            <div className="mt-3 text-lg sm:text-xl font-bold text-slate-300 flex items-center gap-2 min-h-[32px]">
              <span className="text-slate-400">Building as</span>
              <span className="text-cyan-400 font-mono underline decoration-cyan-500/50 decoration-wavy">
                {displayText}
              </span>
              <span className="w-0.5 h-5 bg-cyan-400 animate-pulse inline-block ml-0.5" />
            </div>

            {/* Professional Summary */}
            <p className="mt-5 text-sm sm:text-base text-slate-300 leading-relaxed font-normal bg-white/5 border-l-2 border-cyan-400 pl-4 py-3 rounded-r-2xl border-t border-r border-b border-white/5 shadow-inner">
              "{HERO_DATA.summary}"
            </p>

            {/* Primary Button */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={scrollToProjects}
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-2xl text-xs font-bold uppercase tracking-wider text-white bg-cyan-600 hover:bg-cyan-500 shadow-xl shadow-cyan-600/20 hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* SECTION: ABOUT ME HIGHLIGHTS (11 TRAITS) */}
        <div id="about" className="mt-24 pt-12 border-t border-white/5">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">
              Core Strengths
            </h2>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Professional About Me & Key Attributes
            </h3>
            <p className="mt-2 text-slate-400 text-sm">
              Beyond code syntax, I bring strong interpersonal, problem-solving, and professional work ethics.
            </p>
          </div>

          {/* 11 Traits Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5">
            {ABOUT_TRAITS.map((trait, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className="glass-card glass-card-hover p-4 rounded-2xl flex items-center gap-3 border border-white/10"
              >
                <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-200 leading-snug">
                  {trait.title}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SECTION: ACHIEVEMENTS HIGHLIGHT CARDS */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500">
                Milestones
              </h2>
              <h3 className="text-2xl font-extrabold text-white mt-1">
                Achievements & Highlights
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {ACHIEVEMENTS.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="glass-card glass-card-hover p-6 rounded-3xl relative overflow-hidden group border border-white/10"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:border-cyan-500/40 transition-colors">
                    {getAchievementIcon(item.icon)}
                  </div>
                  <span className="text-[10px] font-mono font-semibold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                    {item.badge}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-white mt-4 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h4>

                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
