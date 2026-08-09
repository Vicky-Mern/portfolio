import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { Laptop, Plus } from 'lucide-react';
import { PROJECTS_DATA } from '../data/projectsData';
import { Project } from '../types';
import { ProjectCard } from './ProjectCard';
import { AddProjectModal } from './AddProjectModal';

export const ProjectsSection: React.FC = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [customProjects, setCustomProjects] = useState<Project[]>(() => {
    try {
      const saved = localStorage.getItem('vicky_portfolio_custom_projects');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('vicky_portfolio_custom_projects', JSON.stringify(customProjects));
    } catch (e) {
      console.error("Failed to save custom projects:", e);
    }
  }, [customProjects]);

  const handleAddProject = (newProj: Project) => {
    setCustomProjects(prev => [newProj, ...prev]);
  };

  const handleDeleteCustomProject = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setCustomProjects(prev => prev.filter(p => p.id !== id));
  };

  const allProjects = [...customProjects, ...PROJECTS_DATA];

  return (
    <section id="projects" className="py-20 relative">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 pb-6 border-b border-white/10">
          <div className="text-center md:text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-3">
              <Laptop className="w-3.5 h-3.5" />
              <span>Full Stack Portfolio</span>
            </div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500 block mb-1">
              Featured Engineering
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Projects ({allProjects.length})
            </h3>
            <p className="mt-2 text-slate-400 text-xs sm:text-sm">
              Real-world applications built with modern frameworks, clean software design, and scalable backend services.
            </p>
          </div>

          {/* Add Project Button Trigger */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="px-5 py-3 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-xs shadow-lg shadow-cyan-600/30 flex items-center gap-2 transition-all transform hover:scale-105 active:scale-95 cursor-pointer border border-cyan-400/30"
            >
              <Plus className="w-4 h-4 stroke-[2.5]" />
              <span>Add Custom Project</span>
            </button>
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {allProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onDeleteCustom={handleDeleteCustomProject}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Add Project Modal */}
      <AddProjectModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddProject={handleAddProject}
      />
    </section>
  );
};


