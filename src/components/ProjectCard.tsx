import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle, Sparkles, Trash2 } from 'lucide-react';
import { Project } from '../types';
import { ProjectCarousel } from './ProjectCarousel';
import { ProjectActions } from './ProjectActions';

interface ProjectCardProps {
  project: Project;
  index: number;
  onSelectProject?: (project: Project) => void;
  onDeleteCustom?: (id: string, e: React.MouseEvent) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  onSelectProject,
  onDeleteCustom
}) => {
  const isCustom = project.id.startsWith('custom-project-');

  // Normalize fields between legacy schema and new data-driven schema
  const techList = project.technologies && project.technologies.length > 0 
    ? project.technologies 
    : project.tech;

  const featureList = project.features && project.features.length > 0 
    ? project.features 
    : project.keyFeatures;

  const imageList = project.images && project.images.length > 0
    ? project.images
    : (project.image ? [project.image] : []);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="glass-card glass-card-hover rounded-3xl overflow-hidden flex flex-col border border-white/10 group hover:border-cyan-500/50 relative shadow-2xl transition-all"
    >
      {/* 1. PROJECT SCREENSHOT CAROUSEL AT TOP */}
      <ProjectCarousel
        images={imageList}
        fallbackImage={project.image}
        projectTitle={project.title}
        category={project.category}
      />

      {/* Custom badge & Delete trigger for user-created custom projects */}
      {isCustom && (
        <div className="absolute top-3 right-3 z-30 flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 backdrop-blur-md flex items-center gap-1 shadow-md">
            <Sparkles className="w-3 h-3" /> Custom
          </span>
          {onDeleteCustom && (
            <button
              onClick={(e) => onDeleteCustom(project.id, e)}
              title="Delete custom project"
              className="p-1.5 rounded-full bg-red-500/20 hover:bg-red-500/40 text-red-300 border border-red-500/40 backdrop-blur-md transition-colors cursor-pointer"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      )}

      {/* 2. CARD CONTENT CONTAINER */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        <div>
          {/* Project Title */}
          <h3 
            className="text-xl sm:text-2xl font-bold text-white transition-colors"
          >
            {project.title}
          </h3>

          {/* Technology Badges / Tags */}
          <div className="flex flex-wrap gap-2 my-3">
            {techList.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-lg bg-white/5 text-cyan-300 border border-white/10 text-[10px] font-mono font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Short Clean Description */}
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2.5">
            {project.description}
          </p>

          {/* Compact Feature Bullet Checklist */}
          {featureList && featureList.length > 0 && (
            <div className="mt-4 pt-3 border-t border-white/10 space-y-2">
              <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block mb-1">
                Key Application Features:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {featureList.slice(0, 8).map((feat, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-[11px] text-slate-300">
                    <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span className="truncate">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* 3. CARD ACTION BUTTONS (GitHub Code & Live Demo) */}
        <ProjectActions
          githubUrl={project.githubUrl}
          liveDemoUrl={project.liveDemoUrl}
          demoUrl={project.demoUrl}
        />
      </div>
    </motion.div>
  );
};
