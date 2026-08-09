import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Code2,
  Database,
  Server,
  Terminal,
  Globe,
  Cpu,
  Layers,
  Layout,
  Smartphone,
  CheckCircle,
  FileCode,
  ShieldCheck,
  Zap,
  Boxes,
  Workflow,
  Sparkles,
  GitBranch,
  Wrench,
  Bot,
  Brain,
  CreditCard
} from 'lucide-react';
import { SKILLS_DATA, AI_ASSISTED_DESCRIPTION } from '../data/portfolioData';
import { SkillItem, SkillProficiency } from '../types';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Tech' },
    { id: 'languages', label: 'Programming Languages' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend_primary', label: 'Backend (Primary)' },
    { id: 'backend_secondary', label: 'Backend (Secondary)' },
    { id: 'databases', label: 'Database' },
    { id: 'tools', label: 'Tools' },
    { id: 'core_cs', label: 'Core CS' },
    { id: 'ai_assisted', label: 'AI Assisted Development' },
  ];

  const renderIcon = (skillName: string) => {
    const iconClass = "w-6 h-6 transition-transform duration-300 group-hover:scale-110";
    switch (skillName) {
      case 'JavaScript':
      case 'Python':
        return <Code2 className={`${iconClass} text-yellow-400`} />;
      case 'React.js':
      case 'HTML5':
      case 'CSS3':
      case 'Tailwind CSS':
      case 'Bootstrap':
      case 'Context API':
        return <Layout className={`${iconClass} text-cyan-400`} />;
      case 'Node.js':
      case 'Express.js':
      case 'REST APIs':
      case 'MVC Architecture':
      case 'Django':
      case 'Django REST Framework':
        return <Server className={`${iconClass} text-emerald-400`} />;
      case 'MongoDB':
      case 'Mongoose':
      case 'MySQL':
      case 'SQL':
        return <Database className={`${iconClass} text-sky-400`} />;
      case 'Git':
      case 'GitHub':
        return <GitBranch className={`${iconClass} text-orange-400`} />;
      case 'Postman':
        return <Workflow className={`${iconClass} text-amber-400`} />;
      case 'VS Code':
      case 'npm':
      case 'Vite':
        return <Terminal className={`${iconClass} text-indigo-400`} />;
      case 'JWT Authentication':
      case 'Authentication':
        return <ShieldCheck className={`${iconClass} text-purple-400`} />;
      case 'Stripe API Integration':
        return <CreditCard className={`${iconClass} text-emerald-400`} />;
      case 'Data Structures & Algorithms':
      case 'DBMS':
      case 'OOP':
      case 'Problem Solving':
        return <Cpu className={`${iconClass} text-blue-400`} />;
      case 'ChatGPT':
      case 'Cursor AI':
        return <Bot className={`${iconClass} text-teal-300`} />;
      case 'Google AI Studio (Gemini)':
      case 'Claude AI':
        return <Sparkles className={`${iconClass} text-cyan-300`} />;
      case 'GitHub Copilot':
        return <Code2 className={`${iconClass} text-indigo-300`} />;
      default:
        return <Wrench className={`${iconClass} text-cyan-400`} />;
    }
  };

  const getProficiencyBadge = (proficiency: SkillProficiency) => {
    switch (proficiency) {
      case 'Advanced':
        return (
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            Advanced
          </span>
        );
      case 'Intermediate':
        return (
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
            Intermediate
          </span>
        );
      case 'Familiar':
        return (
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30">
            Familiar
          </span>
        );
    }
  };

  const filteredSkills = SKILLS_DATA.filter(skill => {
    if (activeCategory === 'all') return true;
    return skill.category === activeCategory;
  });

  return (
    <section id="skills" className="py-20 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">
            Technical Stack
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & Core Expertise
          </h3>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Structured competency across MERN Stack, Python/Django backend systems, databases, CS fundamentals, and AI workflows.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/40 shadow-sm shadow-cyan-500/10 scale-105'
                  : 'bg-white/5 text-slate-400 hover:text-white border border-white/5 hover:border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* AI Assisted Banner when active */}
        {(activeCategory === 'ai_assisted' || activeCategory === 'all') && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 max-w-3xl mx-auto p-4 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-indigo-950/30 to-blue-950/40 border border-cyan-500/30 flex items-start gap-3.5 shadow-lg"
          >
            <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 shrink-0">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h4 className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider mb-1">
                AI Assisted Development Expertise
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {AI_ASSISTED_DESCRIPTION}
              </p>
            </div>
          </motion.div>
        )}

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              layout
              key={`${skill.category}-${skill.name}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.02 }}
              className="glass-card glass-card-hover p-4 rounded-3xl flex flex-col items-center justify-between group border border-white/10 hover:border-cyan-500/50"
            >
              <div className="w-full flex items-center justify-between">
                {skill.badge ? (
                  <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-md bg-white/5 text-cyan-300 border border-white/10">
                    {skill.badge}
                  </span>
                ) : (
                  <span />
                )}
                {getProficiencyBadge(skill.proficiency)}
              </div>

              <div className="p-3.5 my-2 rounded-2xl bg-white/5 border border-white/10 group-hover:border-cyan-500/30 transition-colors flex items-center justify-center">
                {renderIcon(skill.name)}
              </div>

              <span className="text-xs sm:text-sm font-bold text-slate-200 text-center group-hover:text-cyan-300 transition-colors">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

