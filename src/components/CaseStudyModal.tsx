import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, AlertTriangle, Layers, Target, ShieldCheck, Zap } from 'lucide-react';
import { ProjectItem } from '../types/portfolio';

interface CaseStudyModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const { caseStudy } = project;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      {/* Backdrop click dismiss */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#0D111B] border border-slate-700/80 rounded-2xl shadow-2xl overflow-y-auto z-10 flex flex-col my-auto cyber-card">
        {/* Modal Sticky Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#090D16]/95 border-b border-slate-800 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#55E6FF]/10 text-[#55E6FF] border border-[#55E6FF]/30">
              CASE STUDY // {project.category}
            </span>
            <span className="text-xs font-mono text-slate-400 hidden sm:inline-block">
              PROJECT_ID: {project.id}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#55E6FF]"
            aria-label="Close case study dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8 text-sm text-slate-300">
          {/* Main Title & Hero Meta */}
          <div className="space-y-3 pb-6 border-b border-slate-800">
            <h2 id="case-study-title" className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              {project.fullOverview || project.shortDescription}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono px-2.5 py-1 rounded bg-[#111827] text-[#55E6FF] border border-slate-800"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Quick Action Links */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#55E6FF] to-[#9B7BFF] text-[#07090F] font-semibold text-xs hover:opacity-90 transition-opacity"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Launch Live Demo</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#111827] border border-slate-700 text-slate-200 text-xs hover:border-[#55E6FF] transition-colors"
                >
                  <Github className="w-3.5 h-3.5 text-[#55E6FF]" />
                  <span>Inspect Source Repository</span>
                </a>
              )}
            </div>
          </div>

          {/* Role & Target Users Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[#111827]/70 border border-slate-800">
              <span className="text-[10px] font-mono text-[#55E6FF] uppercase tracking-wider block mb-1">
                My Primary Role
              </span>
              <p className="text-sm font-semibold text-white">
                {caseStudy.myRole}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#111827]/70 border border-slate-800">
              <span className="text-[10px] font-mono text-[#9B7BFF] uppercase tracking-wider block mb-1">
                Target Users
              </span>
              <p className="text-sm font-semibold text-white">
                {caseStudy.targetUsers}
              </p>
            </div>
          </div>

          {/* Problem Statement */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-white flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              <span>Problem Statement</span>
            </h3>
            <p className="text-slate-300 leading-relaxed bg-[#111827]/40 p-4 rounded-xl border border-slate-800/80">
              {caseStudy.problemStatement}
            </p>
          </div>

          {/* Project Goals */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-white flex items-center gap-2">
              <Target className="w-4 h-4 text-[#55E6FF]" />
              <span>Core Project Goals</span>
            </h3>
            <ul className="space-y-2">
              {caseStudy.projectGoals.map((goal, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#55E6FF] shrink-0 mt-0.5" />
                  <span className="text-slate-300">{goal}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology Choices & Rationale */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-white flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#9B7BFF]" />
              <span>Technology Rationale</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {caseStudy.techChoicesRationale.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-lg bg-[#111827] border border-slate-800">
                  <span className="text-xs font-mono font-semibold text-[#55E6FF] block mb-1">
                    {item.tech}
                  </span>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.reason}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Overview */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-white flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#55E6FF]" />
              <span>Architecture & Component Structure</span>
            </h3>
            <p className="text-slate-300 leading-relaxed bg-[#07090F] p-4 rounded-xl border border-slate-800 font-mono text-xs">
              {caseStudy.architectureOverview}
            </p>
          </div>

          {/* Key Challenges and Engineered Solutions */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-white flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-[#9B7BFF]" />
              <span>Key Challenges & Technical Solutions</span>
            </h3>
            <div className="space-y-3">
              {caseStudy.challengesAndSolutions.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#111827]/70 border border-slate-800 space-y-2">
                  <div className="text-xs font-mono text-rose-300 flex items-start gap-1.5">
                    <span className="font-bold">CHALLENGE:</span>
                    <span>{item.challenge}</span>
                  </div>
                  <div className="text-xs font-mono text-emerald-300 flex items-start gap-1.5 pl-3 border-l-2 border-emerald-500/50">
                    <span className="font-bold">SOLUTION:</span>
                    <span>{item.solution}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Accessibility & Performance Considerations */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-white flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Accessibility (WCAG 2.2) & Performance</span>
            </h3>
            <p className="text-slate-300 leading-relaxed bg-[#111827]/40 p-4 rounded-xl border border-slate-800/80">
              {caseStudy.accessibilityAndPerf}
            </p>
          </div>

          {/* Measurable Results & Learnings */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-white flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#55E6FF]" />
              <span>Key Results & Architectural Learnings</span>
            </h3>
            <ul className="space-y-2">
              {caseStudy.resultsAndLearnings.map((result, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#55E6FF] shrink-0 mt-2" />
                  <span className="text-slate-300">{result}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-[#090D16] border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs font-mono text-slate-500">
            Press [ESC] to exit case study
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-white transition-colors"
          >
            Close Deep Dive
          </button>
        </div>
      </div>
    </div>
  );
};
