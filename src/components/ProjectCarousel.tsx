import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Image as ImageIcon, Sparkles } from 'lucide-react';

interface ProjectCarouselProps {
  images?: string[];
  fallbackImage?: string;
  projectTitle: string;
  category?: string;
}

export const ProjectCarousel: React.FC<ProjectCarouselProps> = ({
  images = [],
  fallbackImage,
  projectTitle,
  category
}) => {
  // Combine images array or use fallback image
  const validImagesList = images && images.length > 0 
    ? images 
    : (fallbackImage ? [fallbackImage] : []);

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [failedImages, setFailedImages] = useState<Record<number, boolean>>({});

  const hasMultiple = validImagesList.length > 1;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? validImagesList.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === validImagesList.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex(index);
  };

  const handleImageError = (index: number) => {
    setFailedImages((prev) => ({ ...prev, [index]: true }));
  };

  const currentImageSrc = validImagesList[currentIndex];
  const isCurrentFailed = failedImages[currentIndex];

  return (
    <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-950 group select-none">
      {/* Background Image or Clean Fallback Banner */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0.3, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0.3, scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="w-full h-full relative flex items-center justify-center"
        >
          {currentImageSrc && !isCurrentFailed ? (
            <img
              src={currentImageSrc}
              alt={`${projectTitle} screenshot ${currentIndex + 1}`}
              onError={() => handleImageError(currentIndex)}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover filter brightness-90 group-hover:brightness-100 transition-all duration-500"
            />
          ) : (
            /* Clean Modern Fallback Card View if image path is not yet created on disk */
            <div className="w-full h-full bg-gradient-to-br from-slate-900 via-indigo-950/80 to-slate-950 p-6 flex flex-col justify-between border-b border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <ImageIcon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-cyan-300 uppercase tracking-wider">
                    Screenshot {currentIndex + 1}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-400 bg-slate-900/80 px-2 py-0.5 rounded border border-slate-800">
                  {category || 'Preview'}
                </span>
              </div>

              <div className="space-y-1">
                <h4 className="text-sm font-bold text-white line-clamp-1">{projectTitle}</h4>
                <p className="text-[11px] text-slate-400 font-mono">
                  Slide {currentIndex + 1} of {validImagesList.length || 1}
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-[10px] text-cyan-400/80 font-mono">
                <Sparkles className="w-3 h-3" />
                <span>Replace in /src/data/projectsData.ts</span>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Subtle Bottom Gradient Overlay for Typography Contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/30 to-transparent pointer-events-none" />

      {/* Category Badge */}
      <div className="absolute top-3 left-3 z-10 flex items-center gap-2 pointer-events-none">
        <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-[#020617]/80 backdrop-blur-md text-cyan-400 border border-cyan-500/30 shadow-md">
          {category || 'Project'}
        </span>
      </div>

      {/* Slide Counter Indicator (e.g. "1 / 4") */}
      {validImagesList.length > 0 && (
        <div className="absolute top-3 right-3 z-10">
          <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#020617]/85 backdrop-blur-md text-slate-200 border border-white/10 shadow-md">
            {currentIndex + 1} / {validImagesList.length}
          </span>
        </div>
      )}

      {/* Carousel Navigation Arrow Buttons */}
      {hasMultiple && (
        <>
          <button
            onClick={handlePrev}
            aria-label="Previous screenshot"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-[#020617]/80 hover:bg-cyan-500 text-slate-200 hover:text-slate-950 border border-white/10 hover:border-cyan-400 backdrop-blur-md opacity-80 hover:opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all cursor-pointer shadow-lg transform active:scale-90"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next screenshot"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-[#020617]/80 hover:bg-cyan-500 text-slate-200 hover:text-slate-950 border border-white/10 hover:border-cyan-400 backdrop-blur-md opacity-80 hover:opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all cursor-pointer shadow-lg transform active:scale-90"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </>
      )}

      {/* Small Indicator Dots / Pills Below/On Image */}
      {hasMultiple && (
        <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#020617]/70 backdrop-blur-md border border-white/10">
          {validImagesList.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => handleDotClick(idx, e)}
              aria-label={`Go to screenshot ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all cursor-pointer ${
                currentIndex === idx
                  ? 'w-5 bg-cyan-400 shadow-sm shadow-cyan-400/50'
                  : 'w-1.5 bg-slate-500 hover:bg-slate-300'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
