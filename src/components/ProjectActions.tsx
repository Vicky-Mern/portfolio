import React from 'react';
import { Github, ExternalLink, Rocket, Lock } from 'lucide-react';

interface ProjectActionsProps {
  githubUrl?: string;
  liveDemoUrl?: string;
  demoUrl?: string;
  onOpenModal?: () => void;
}

export const ProjectActions: React.FC<ProjectActionsProps> = ({
  githubUrl,
  liveDemoUrl,
  demoUrl,
  onOpenModal
}) => {

  // Helper to check if a URL string is valid and active
  const isValidUrl = (url?: string): boolean => {
    if (!url) return false;
    const trimmed = url.trim();
    if (trimmed === "" || trimmed === "#" || trimmed.startsWith("PASTE_")) return false;
    return trimmed.startsWith("http://") || trimmed.startsWith("https://");
  };

  const finalGithubUrl = githubUrl?.trim() || "";
  const finalLiveUrl = (liveDemoUrl || demoUrl)?.trim() || "";

  const isGithubValid = isValidUrl(finalGithubUrl);
  const isLiveValid = isValidUrl(finalLiveUrl);

  const handleLiveClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isLiveValid) {
      window.open(finalLiveUrl, '_blank', 'noopener,noreferrer');
    } else if (onOpenModal) {
      onOpenModal();
    }
  };

  return (
    <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between gap-3">
      {/* GITHUB CODE BUTTON */}
      {isGithubValid ? (
        <a
          href={finalGithubUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 border border-white/10 text-xs font-semibold transition-all cursor-pointer transform hover:scale-[1.02] active:scale-95"
        >
          <Github className="w-4 h-4 text-cyan-400" />
          <span>GitHub Code</span>
        </a>
      ) : (
        /* Disabled State when githubUrl: "" */
        <button
          disabled
          title="GitHub URL pending - Add in /src/data/projectsData.ts"
          className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/5 text-slate-500 border border-white/5 text-xs font-medium cursor-not-allowed opacity-70"
        >
          <Github className="w-3.5 h-3.5 opacity-50" />
          <span>GitHub Code</span>
          <Lock className="w-3 h-3 text-slate-500 ml-0.5" />
        </button>
      )}

      {/* LIVE DEMO BUTTON */}
      {isLiveValid ? (
        <a
          href={finalLiveUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold shadow-lg shadow-cyan-600/20 active:scale-95 transition-all cursor-pointer transform hover:scale-[1.02]"
        >
          <ExternalLink className="w-3.5 h-3.5" />
          <span>Live Demo</span>
        </a>
      ) : onOpenModal ? (
        /* Interactive Demo Modal Launcher if URL is not yet external */
        <button
          onClick={onOpenModal}
          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-xs font-bold shadow-lg shadow-cyan-600/20 active:scale-95 transition-all cursor-pointer transform hover:scale-[1.02] border border-cyan-400/30"
        >
          <Rocket className="w-3.5 h-3.5" />
          <span>Live Demo</span>
        </button>
      ) : (
        /* Disabled State when liveDemoUrl: "" */
        <button
          disabled
          title="Live Demo URL pending - Add in /src/data/projectsData.ts"
          className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-cyan-950/30 text-cyan-500/50 border border-cyan-900/30 text-xs font-medium cursor-not-allowed opacity-70"
        >
          <Rocket className="w-3.5 h-3.5 opacity-40" />
          <span>Live Demo</span>
          <Lock className="w-3 h-3 text-cyan-600/50 ml-0.5" />
        </button>
      )}
    </div>
  );
};
