import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, Github, ExternalLink, CheckCircle, ChevronLeft, ChevronRight, 
  Maximize2, Sparkles, Globe, Edit3, Save, Check 
} from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'slides' | 'overview' | 'architecture'>('slides');
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [isFullscreenImage, setIsFullscreenImage] = useState<boolean>(false);

  // Editable live deployment URL state
  const [liveUrl, setLiveUrl] = useState<string>('');
  const [isEditingUrl, setIsEditingUrl] = useState<boolean>(false);
  const [savedUrlSuccess, setSavedUrlSuccess] = useState<boolean>(false);

  useEffect(() => {
    if (project) {
      setCurrentSlideIndex(0);
      try {
        const storedUrls = localStorage.getItem('vicky_portfolio_project_urls');
        if (storedUrls) {
          const parsed = JSON.parse(storedUrls);
          if (parsed[project.id]) {
            setLiveUrl(parsed[project.id]);
          } else {
            setLiveUrl(project.demoUrl.startsWith('http') ? project.demoUrl : '');
          }
        } else {
          setLiveUrl(project.demoUrl.startsWith('http') ? project.demoUrl : '');
        }
      } catch {
        setLiveUrl(project.demoUrl.startsWith('http') ? project.demoUrl : '');
      }
    }
  }, [project]);

  if (!project) return null;

  const slides = project.screenshots && project.screenshots.length > 0 ? project.screenshots : [
    {
      id: "main-shot",
      title: project.title,
      description: project.description,
      category: project.category
    }
  ];

  const handleSaveLiveUrl = () => {
    try {
      const stored = localStorage.getItem('vicky_portfolio_project_urls');
      const existingMap = stored ? JSON.parse(stored) : {};
      existingMap[project.id] = liveUrl;
      localStorage.setItem('vicky_portfolio_project_urls', JSON.stringify(existingMap));
      
      // Also update project object dynamically if needed
      project.demoUrl = liveUrl;
      
      setIsEditingUrl(false);
      setSavedUrlSuccess(true);
      setTimeout(() => setSavedUrlSuccess(false), 2500);
    } catch (e) {
      console.error("Failed to save project URL:", e);
    }
  };

  const currentSlide = slides[currentSlideIndex] || slides[0];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-[#020617]/90 backdrop-blur-xl overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-5xl bg-[#020617] border border-white/10 rounded-3xl shadow-2xl overflow-hidden my-6"
        >
          {/* Modal Top Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-slate-900/50">
            <div>
              <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Project Showcase & Image Slides
              </span>
              <h3 className="text-xl font-extrabold text-white mt-0.5">{project.title}</h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Navigation Tabs */}
          <div className="flex border-b border-slate-800 bg-slate-950/60 px-6 overflow-x-auto">
            <button
              onClick={() => setActiveTab('slides')}
              className={`py-3 px-4 text-xs font-bold font-mono transition-colors border-b-2 cursor-pointer whitespace-nowrap ${
                activeTab === 'slides'
                  ? 'border-cyan-400 text-cyan-400'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              🖼️ Screenshot Slides ({slides.length})
            </button>
            <button
              onClick={() => setActiveTab('overview')}
              className={`py-3 px-4 text-xs font-bold font-mono transition-colors border-b-2 cursor-pointer whitespace-nowrap ${
                activeTab === 'overview'
                  ? 'border-cyan-400 text-cyan-400'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              📋 Features & Specs
            </button>
            <button
              onClick={() => setActiveTab('architecture')}
              className={`py-3 px-4 text-xs font-bold font-mono transition-colors border-b-2 cursor-pointer whitespace-nowrap ${
                activeTab === 'architecture'
                  ? 'border-cyan-400 text-cyan-400'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              ⚙️ Architecture & Deployment
            </button>
          </div>

          {/* Modal Main Content Container */}
          <div className="p-6 max-h-[72vh] overflow-y-auto space-y-6">
            
            {/* TAB 1: SCREENSHOT SLIDESHOW */}
            {activeTab === 'slides' && (
              <div className="space-y-5 animate-fadeIn">
                {/* Main Slide Card Container */}
                <div className="bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
                  
                  {/* Slide Top Banner & Controls */}
                  <div className="p-4 bg-slate-950 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-400 font-mono text-[10px] font-bold border border-cyan-500/30">
                          {currentSlide.category || 'Screen'}
                        </span>
                        <span className="text-xs font-mono text-slate-400">
                          Slide {currentSlideIndex + 1} of {slides.length}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-white">
                        {currentSlide.title}
                      </h4>
                    </div>

                    {/* Navigation Quick Arrows */}
                    <div className="flex items-center gap-2 self-end sm:self-auto">
                      <button
                        onClick={() => setCurrentSlideIndex(prev => Math.max(0, prev - 1))}
                        disabled={currentSlideIndex === 0}
                        className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-30 text-slate-200 text-xs transition-colors cursor-pointer"
                        title="Previous slide"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setCurrentSlideIndex(prev => Math.min(slides.length - 1, prev + 1))}
                        disabled={currentSlideIndex === slides.length - 1}
                        className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-30 text-slate-200 text-xs transition-colors cursor-pointer"
                        title="Next slide"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setIsFullscreenImage(true)}
                        className="p-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 text-xs transition-colors cursor-pointer border border-cyan-500/30"
                        title="Expand / Fullscreen View"
                      >
                        <Maximize2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Slide Image Stage */}
                  <div className="relative bg-slate-950 flex items-center justify-center min-h-[320px] max-h-[460px] p-2 group">
                    <img
                      src={project.image}
                      alt={currentSlide.title}
                      referrerPolicy="no-referrer"
                      className="max-h-[420px] w-auto object-contain rounded-xl shadow-2xl transition-all duration-300 group-hover:scale-[1.01]"
                    />

                    {/* Quick On-Image Navigation Overlays */}
                    {currentSlideIndex > 0 && (
                      <button
                        onClick={() => setCurrentSlideIndex(prev => prev - 1)}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-950/80 hover:bg-cyan-600 text-white border border-slate-700 transition-all cursor-pointer shadow-lg"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                    )}
                    {currentSlideIndex < slides.length - 1 && (
                      <button
                        onClick={() => setCurrentSlideIndex(prev => prev + 1)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-950/80 hover:bg-cyan-600 text-white border border-slate-700 transition-all cursor-pointer shadow-lg"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    )}
                  </div>

                  {/* Slide Description Caption */}
                  <div className="p-4 bg-slate-900 border-t border-slate-800">
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {currentSlide.description}
                    </p>
                  </div>
                </div>

                {/* Thumbnail Strip / Slide Pills Selector */}
                {slides.length > 1 && (
                  <div className="space-y-2">
                    <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                      Jump to Screenshot Slide:
                    </span>
                    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
                      {slides.map((s, idx) => (
                        <button
                          key={s.id || idx}
                          onClick={() => setCurrentSlideIndex(idx)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-medium shrink-0 transition-all cursor-pointer flex items-center gap-1.5 border ${
                            currentSlideIndex === idx
                              ? 'bg-cyan-500 text-slate-950 font-bold border-cyan-400 shadow-md shadow-cyan-500/20'
                              : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border-slate-800 hover:bg-slate-800'
                          }`}
                        >
                          <span className="text-[10px] font-mono opacity-80">{idx + 1}.</span>
                          <span>{s.category || `Slide ${idx + 1}`}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* MANUAL DEPLOYMENT & LIVE URL MANAGER */}
                <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-950/50 via-slate-900 to-indigo-950/50 border border-blue-500/30 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-cyan-400" />
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                        Live Deployment & URL Configuration
                      </h4>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30 w-fit">
                      {liveUrl ? '🟢 Configured' : '🟡 Ready to Add URL'}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300">
                    You can manually deploy your source code repository to platforms like <strong className="text-white">Vercel, Netlify, Render, or Railway</strong>, then paste your live URL below to display it across your portfolio!
                  </p>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                    <div className="flex-1 relative">
                      <input
                        type="url"
                        placeholder="https://your-deployed-app.vercel.app"
                        value={liveUrl}
                        onChange={(e) => setLiveUrl(e.target.value)}
                        disabled={!isEditingUrl && !!liveUrl}
                        className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2 text-xs text-cyan-300 font-mono focus:outline-none focus:border-cyan-500 disabled:opacity-80"
                      />
                    </div>

                    {!isEditingUrl && liveUrl ? (
                      <div className="flex items-center gap-2">
                        <a
                          href={liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5" /> Visit Live
                        </a>
                        <button
                          onClick={() => setIsEditingUrl(true)}
                          className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold cursor-pointer border border-slate-700"
                        >
                          <Edit3 className="w-3.5 h-3.5" /> Edit
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={handleSaveLiveUrl}
                        className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-md"
                      >
                        <Save className="w-3.5 h-3.5" /> Save URL
                      </button>
                    )}
                  </div>

                  {savedUrlSuccess && (
                    <div className="text-[11px] text-emerald-400 font-mono flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" /> Live deployment URL saved successfully to your portfolio!
                    </div>
                  )}
                </div>

              </div>
            )}

            {/* TAB 2: OVERVIEW & FEATURES */}
            {activeTab === 'overview' && (
              <div className="space-y-4 animate-fadeIn">
                <p className="text-sm text-slate-300 leading-relaxed">
                  {project.description}
                </p>

                <h4 className="text-xs font-bold font-mono text-cyan-400 uppercase tracking-wider mt-4">
                  Key Technical Features & Capabilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.keyFeatures.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 3: ARCHITECTURE */}
            {activeTab === 'architecture' && (
              <div className="space-y-4 animate-fadeIn">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300 space-y-2">
                  <div className="text-cyan-400 font-bold">Architectural Blueprint & Stack Design:</div>
                  <p className="leading-relaxed">
                    {project.architectureNotes || "Built with modern decoupled architecture prioritizing security, low latency, and modular codebase structure."}
                  </p>
                </div>

                <div className="space-y-2 pt-2">
                  <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                    Core Technologies & Frameworks:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="px-3 py-1.5 rounded-lg bg-slate-800 text-cyan-300 border border-slate-700 font-mono text-xs font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-t border-slate-800 bg-slate-950/80">
            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors"
                >
                  <Github className="w-4 h-4 text-cyan-400" /> View Source Code
                </a>
              )}

              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs shadow-lg shadow-cyan-600/20 transition-all"
                >
                  <ExternalLink className="w-3.5 h-3.5" /> Visit Live Demo
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-colors cursor-pointer"
            >
              Close Showcase
            </button>
          </div>
        </motion.div>

        {/* FULLSCREEN IMAGE LIGHTBOX MODAL */}
        {isFullscreenImage && (
          <div 
            onClick={() => setIsFullscreenImage(false)}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 cursor-zoom-out animate-fadeIn"
          >
            <div className="relative max-w-6xl max-h-screen p-2">
              <button
                onClick={() => setIsFullscreenImage(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/90 text-white hover:bg-cyan-600 transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={project.image}
                alt={currentSlide.title}
                referrerPolicy="no-referrer"
                className="max-h-[90vh] w-auto object-contain rounded-2xl shadow-2xl"
              />
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-slate-950/90 text-white px-4 py-2 rounded-full text-xs font-mono border border-white/20">
                {currentSlide.title}
              </div>
            </div>
          </div>
        )}
      </div>
    </AnimatePresence>
  );
};

