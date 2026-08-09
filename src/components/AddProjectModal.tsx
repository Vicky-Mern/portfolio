import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Plus, Sparkles, Code2, Image as ImageIcon, Github, ExternalLink, Check } from 'lucide-react';
import { Project } from '../types';
// Load a small set of project images for presets using Vite's eager glob
const ALL_IMAGE_MODULES = import.meta.glob('../assets/images/*/*', { eager: true }) as Record<string, { default: string }>;

const firstFromFolder = (folder: string) => {
  try {
    const keys = Object.keys(ALL_IMAGE_MODULES).filter(k => k.includes(`/${folder}/`)).sort();
    return keys.length > 0 ? ALL_IMAGE_MODULES[keys[0]].default : '';
  } catch {
    return '';
  }
};

const taskImg = firstFromFolder('task-management') || firstFromFolder('e-commerce') || '';
const paymentImg = firstFromFolder('payment_system') || firstFromFolder('e-commerce') || '';
const ecommerceImg = firstFromFolder('e-commerce') || '';
const portfolioImg = firstFromFolder('portfolio') || '';

interface AddProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddProject: (project: Project) => void;
}

const PRESET_IMAGES = [
  { label: 'Task Management Cover', url: taskImg },
  { label: 'E-Commerce / Store Cover', url: ecommerceImg },
  { label: 'Payment / Finance Cover', url: paymentImg },
  { label: 'Portfolio / Web App Cover', url: portfolioImg },
  { label: 'Default Tech Gradient', url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80' },
  { label: 'Code & Data Visualization', url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80' }
];

export const AddProjectModal: React.FC<AddProjectModalProps> = ({ isOpen, onClose, onAddProject }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Full Stack (MERN)');
  const [techStack, setTechStack] = useState('React.js, Node.js, Express.js, MongoDB');
  const [description, setDescription] = useState('');
  const [keyFeaturesText, setKeyFeaturesText] = useState("User Authentication & JWT Security\nInteractive Dashboard with Real-time Updates\nRESTful API Integration\nResponsive Modern UI");
  const [selectedImage, setSelectedImage] = useState(taskImg);
  const [customImageUrl, setCustomImageUrl] = useState('');
  const [githubUrl, setGithubUrl] = useState('https://github.com/Vicky-Kr-Singh');
  const [demoUrl, setDemoUrl] = useState('#demo');
  const [architectureNotes, setArchitectureNotes] = useState('Built with scalable architecture, modular API controllers, and responsive component structure.');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    const techArray = techStack
      .split(',')
      .map(t => t.trim())
      .filter(Boolean);

    const keyFeaturesArray = keyFeaturesText
      .split('\n')
      .map(f => f.trim())
      .filter(Boolean);

    const finalImage = customImageUrl.trim() ? customImageUrl.trim() : selectedImage;

    const newProject: Project = {
      id: `custom-project-${Date.now()}`,
      title: title.trim(),
      category: category.trim(),
      tech: techArray.length > 0 ? techArray : ['React.js', 'Node.js'],
      description: description.trim(),
      keyFeatures: keyFeaturesArray.length > 0 ? keyFeaturesArray : ['Responsive Layout', 'RESTful API'],
      image: finalImage,
      githubUrl: githubUrl.trim() || 'https://github.com/Vicky-Kr-Singh',
      demoUrl: demoUrl.trim() || '#demo',
      featured: true,
      architectureNotes: architectureNotes.trim()
    };

    onAddProject(newProject);
    onClose();

    // Reset form
    setTitle('');
    setDescription('');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-[#090d16] border border-cyan-500/30 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/5">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                <Plus className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Add Custom Project</h3>
                <p className="text-xs text-slate-400">Add 2-3 additional projects directly to your live portfolio showcase</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form Content */}
          <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-5 text-xs text-slate-200">
            {/* Title & Category */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-400 font-mono font-bold mb-1.5 uppercase tracking-wider text-[10px]">
                  Project Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. AI-Powered Notes Manager"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-400 text-xs"
                />
              </div>

              <div>
                <label className="block text-slate-400 font-mono font-bold mb-1.5 uppercase tracking-wider text-[10px]">
                  Category *
                </label>
                <select
                  value={category}
                  onChange={e => setCategory(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0c1220] border border-white/10 text-white focus:outline-none focus:border-cyan-400 text-xs cursor-pointer"
                >
                  <option value="Full Stack (MERN)">Full Stack (MERN)</option>
                  <option value="Full Stack (Python/Django)">Full Stack (Python/Django)</option>
                  <option value="Backend Engineering">Backend Engineering</option>
                  <option value="Frontend & UI/UX">Frontend & UI/UX</option>
                  <option value="AI / Machine Learning">AI / Machine Learning</option>
                  <option value="Mobile / Cross Platform">Mobile / Cross Platform</option>
                </select>
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <label className="block text-slate-400 font-mono font-bold mb-1.5 uppercase tracking-wider text-[10px]">
                Technologies Used (Comma Separated) *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. React.js, Node.js, Express.js, MongoDB, JWT, Tailwind CSS"
                value={techStack}
                onChange={e => setTechStack(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-400 text-xs"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-slate-400 font-mono font-bold mb-1.5 uppercase tracking-wider text-[10px]">
                Short Summary / Overview *
              </label>
              <textarea
                required
                rows={3}
                placeholder="Briefly describe the purpose of the project, architecture, and problem solved..."
                value={description}
                onChange={e => setDescription(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-400 text-xs leading-relaxed"
              />
            </div>

            {/* Key Features Checklist */}
            <div>
              <label className="block text-slate-400 font-mono font-bold mb-1.5 uppercase tracking-wider text-[10px]">
                Key Features Checklist (One Feature Per Line)
              </label>
              <textarea
                rows={3}
                placeholder="Feature 1: Secure Authentication&#10;Feature 2: Real-time CRUD Operations&#10;Feature 3: RESTful API Integration"
                value={keyFeaturesText}
                onChange={e => setKeyFeaturesText(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-400 text-xs leading-relaxed font-mono"
              />
            </div>

            {/* Cover Image Selection */}
            <div>
              <label className="block text-slate-400 font-mono font-bold mb-2 uppercase tracking-wider text-[10px]">
                Select Cover Banner Image
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-3">
                {PRESET_IMAGES.map((preset, idx) => (
                  <button
                    type="button"
                    key={idx}
                    onClick={() => {
                      setSelectedImage(preset.url);
                      setCustomImageUrl('');
                    }}
                    className={`relative h-16 rounded-xl overflow-hidden border transition-all text-left group cursor-pointer ${
                      selectedImage === preset.url && !customImageUrl
                        ? 'border-cyan-400 ring-2 ring-cyan-400/50'
                        : 'border-white/10 hover:border-white/30'
                    }`}
                  >
                    <img src={preset.url} alt={preset.label} className="w-full h-full object-cover filter brightness-75 group-hover:brightness-90" />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-1 text-center">
                      <span className="text-[10px] font-bold text-white leading-tight drop-shadow">{preset.label}</span>
                    </div>
                    {selectedImage === preset.url && !customImageUrl && (
                      <div className="absolute top-1 right-1 bg-cyan-500 text-black p-0.5 rounded-full">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                    )}
                  </button>
                ))}
              </div>

              <input
                type="url"
                placeholder="Or paste custom Image URL (https://...)"
                value={customImageUrl}
                onChange={e => setCustomImageUrl(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-400 text-xs"
              />
            </div>

            {/* GitHub & Live Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-400 font-mono font-bold mb-1.5 uppercase tracking-wider text-[10px]">
                  GitHub Repository URL
                </label>
                <input
                  type="url"
                  placeholder="https://github.com/Vicky-Kr-Singh/my-project"
                  value={githubUrl}
                  onChange={e => setGithubUrl(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-400 text-xs"
                />
              </div>

              <div>
                <label className="block text-slate-400 font-mono font-bold mb-1.5 uppercase tracking-wider text-[10px]">
                  Live Demo / App URL
                </label>
                <input
                  type="text"
                  placeholder="#demo or https://myproject.vercel.app"
                  value={demoUrl}
                  onChange={e => setDemoUrl(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-400 text-xs"
                />
              </div>
            </div>

            {/* Architecture Notes */}
            <div>
              <label className="block text-slate-400 font-mono font-bold mb-1.5 uppercase tracking-wider text-[10px]">
                Architecture & Engineering Notes
              </label>
              <input
                type="text"
                placeholder="e.g. Uses Express JWT auth middleware, MongoDB aggregations, and React custom hooks."
                value={architectureNotes}
                onChange={e => setArchitectureNotes(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-400 text-xs"
              />
            </div>

            {/* Submit Actions */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-slate-300 font-semibold text-xs cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs shadow-lg shadow-cyan-600/30 flex items-center gap-2 cursor-pointer active:scale-95 transition-all"
              >
                <Plus className="w-4 h-4" /> Add Project to Portfolio
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
