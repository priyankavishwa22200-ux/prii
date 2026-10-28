import React from 'react';
import { ExternalLink, Github, BookOpen, Sparkles, Layers, ArrowRight, Activity, ShoppingBag, LayoutDashboard, Terminal } from 'lucide-react';
import { ProjectItem } from '../types/portfolio';

interface ProjectCardProps {
  project: ProjectItem;
  onOpenCaseStudy: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenCaseStudy }) => {
  // Render cinematic mockup visual based on previewType
  const renderVisualPreview = () => {
    switch (project.previewType) {
      case 'dashboard':
        return (
          <div className="w-full h-44 sm:h-48 bg-[#090D16] p-3 rounded-lg border border-slate-800 flex flex-col justify-between overflow-hidden relative group-hover:border-[#55E6FF]/40 transition-colors">
            {/* Top header bar */}
            <div className="flex items-center justify-between pb-2 border-b border-slate-800/80 text-[10px] font-mono text-slate-400">
              <div className="flex items-center gap-1.5">
                <LayoutDashboard className="w-3 h-3 text-[#55E6FF]" />
                <span className="text-[#55E6FF] font-semibold">DEVFLOW // SPRINT_CONSOLE</span>
              </div>
              <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[9px]">
                ACTIVE SPRINT #42
              </span>
            </div>

            {/* Simulated mini kanban columns */}
            <div className="grid grid-cols-3 gap-2 my-auto">
              <div className="bg-[#111827] p-2 rounded border border-slate-800/80 space-y-1.5">
                <span className="text-[9px] font-mono text-slate-500 block uppercase">To Do (4)</span>
                <div className="h-4 bg-slate-800/60 rounded text-[9px] font-mono px-1 flex items-center text-slate-400">
                  AST Parser
                </div>
                <div className="h-4 bg-slate-800/60 rounded text-[9px] font-mono px-1 flex items-center text-slate-400">
                  Cache Layer
                </div>
              </div>
              <div className="bg-[#111827] p-2 rounded border border-[#55E6FF]/20 space-y-1.5">
                <span className="text-[9px] font-mono text-[#55E6FF] block uppercase">In Progress</span>
                <div className="h-5 bg-[#55E6FF]/10 border border-[#55E6FF]/30 rounded text-[9px] font-mono px-1 flex items-center text-[#55E6FF]">
                  Virtual Grid
                </div>
              </div>
              <div className="bg-[#111827] p-2 rounded border border-slate-800/80 space-y-1.5">
                <span className="text-[9px] font-mono text-emerald-400 block uppercase">Shipped</span>
                <div className="h-4 bg-emerald-500/10 rounded text-[9px] font-mono px-1 flex items-center text-emerald-400">
                  Auth Gateway
                </div>
              </div>
            </div>

            {/* Bottom status */}
            <div className="flex items-center justify-between pt-2 border-t border-slate-800/80 text-[9px] font-mono text-slate-500">
              <span>Optimistic Reducer: ENABLED</span>
              <span className="text-[#55E6FF]">Latency: 14ms</span>
            </div>
          </div>
        );

      case 'ecommerce':
        return (
          <div className="w-full h-44 sm:h-48 bg-[#090D16] p-3 rounded-lg border border-slate-800 flex flex-col justify-between overflow-hidden relative group-hover:border-[#55E6FF]/40 transition-colors">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800/80 text-[10px] font-mono text-slate-400">
              <div className="flex items-center gap-1.5">
                <ShoppingBag className="w-3 h-3 text-[#9B7BFF]" />
                <span className="text-[#9B7BFF] font-semibold">COMMERCE_OS // STOREFRONT</span>
              </div>
              <span className="text-[9px] font-mono text-slate-400">CLS: 0.00</span>
            </div>

            <div className="grid grid-cols-2 gap-2 my-auto">
              <div className="bg-[#111827] p-2.5 rounded border border-slate-800 flex flex-col justify-between">
                <div>
                  <span className="text-[9px] font-mono text-[#55E6FF]">FACETED SEARCH</span>
                  <div className="text-[11px] font-semibold text-white mt-0.5">Quantum Audio Headset</div>
                </div>
                <div className="flex items-center justify-between mt-2 pt-1 border-t border-slate-800">
                  <span className="text-xs font-mono font-bold text-white">$249.00</span>
                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-[#9B7BFF]/20 text-[#9B7BFF]">In Stock</span>
                </div>
              </div>

              <div className="bg-[#111827] p-2.5 rounded border border-slate-800 flex flex-col justify-between">
                <div>
                  <span className="text-[9px] font-mono text-slate-400">DYNAMIC CART</span>
                  <div className="text-[11px] font-semibold text-white mt-0.5">2 Items in Bag</div>
                </div>
                <div className="w-full h-6 rounded bg-[#55E6FF]/20 text-[#55E6FF] text-[9px] font-mono flex items-center justify-center font-semibold mt-2">
                  FLYOUT CHECKOUT &rarr;
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-slate-800/80 text-[9px] font-mono text-slate-500">
              <span>A11y Trap Focus: OK</span>
              <span className="text-[#9B7BFF]">Lighthouse: 100</span>
            </div>
          </div>
        );

      case 'analytics':
        return (
          <div className="w-full h-44 sm:h-48 bg-[#090D16] p-3 rounded-lg border border-slate-800 flex flex-col justify-between overflow-hidden relative group-hover:border-[#55E6FF]/40 transition-colors">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800/80 text-[10px] font-mono text-slate-400">
              <div className="flex items-center gap-1.5">
                <Activity className="w-3 h-3 text-[#55E6FF]" />
                <span className="text-[#55E6FF] font-semibold">PULSE // TELEMETRY_STREAM</span>
              </div>
              <span className="text-[9px] font-mono text-emerald-400">99.98% UPTIME</span>
            </div>

            {/* Custom SVG Telemetry Chart */}
            <div className="relative my-auto w-full h-20">
              <svg className="w-full h-full" viewBox="0 0 300 80" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="gradient-chart" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#55E6FF" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#55E6FF" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                {/* Grid horizontal guidelines */}
                <line x1="0" y1="20" x2="300" y2="20" stroke="#1E293B" strokeDasharray="3 3" />
                <line x1="0" y1="50" x2="300" y2="50" stroke="#1E293B" strokeDasharray="3 3" />
                
                {/* Area fill */}
                <path
                  d="M 0,60 Q 50,15 100,45 T 200,25 T 300,10 L 300,80 L 0,80 Z"
                  fill="url(#gradient-chart)"
                />
                {/* Curve stroke */}
                <path
                  d="M 0,60 Q 50,15 100,45 T 200,25 T 300,10"
                  fill="none"
                  stroke="#55E6FF"
                  strokeWidth="2.5"
                />
              </svg>
            </div>

            <div className="flex items-center justify-between pt-1 border-t border-slate-800/80 text-[9px] font-mono text-slate-400">
              <span>p95: 22ms</span>
              <span>Req/s: 14.2k</span>
              <span className="text-[#55E6FF]">SVG Size: 7.4kB</span>
            </div>
          </div>
        );

      case 'terminal':
      default:
        return (
          <div className="w-full h-44 sm:h-48 bg-[#090D16] p-3 rounded-lg border border-slate-800 flex flex-col justify-between overflow-hidden relative group-hover:border-[#55E6FF]/40 transition-colors">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800/80 text-[10px] font-mono text-slate-400">
              <div className="flex items-center gap-1.5">
                <Terminal className="w-3 h-3 text-[#9B7BFF]" />
                <span className="text-[#9B7BFF] font-semibold">AI_WORKSPACE // REPL</span>
              </div>
              <span className="text-[9px] font-mono text-[#55E6FF]">STREAMING: ACTIVE</span>
            </div>

            <div className="space-y-1.5 font-mono text-[10px] my-auto bg-[#111827] p-2 rounded border border-slate-800">
              <div className="text-slate-400">&gt; prompt: "Refactor concurrency queue to async iterator"</div>
              <div className="text-emerald-400">&lt; compiler: generated 3 AST nodes (0 errors)</div>
              <div className="text-[#55E6FF] flex items-center gap-1">
                <span>&lt; tokens: 62 tok/sec</span>
                <span className="w-1.5 h-3 bg-[#55E6FF] animate-pulse" />
              </div>
            </div>

            <div className="flex items-center justify-between pt-1 border-t border-slate-800/80 text-[9px] font-mono text-slate-500">
              <span>Zero-Jank Batching</span>
              <span className="text-[#9B7BFF]">React 19 Concurrency</span>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="group rounded-2xl bg-[#0D111B] border border-slate-800 hover:border-[#55E6FF]/40 transition-all duration-300 p-5 sm:p-6 flex flex-col justify-between shadow-xl cyber-card">
      <div className="space-y-4">
        {/* Preview Visualization */}
        {renderVisualPreview()}

        {/* Title & Category Badge */}
        <div>
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <h3 className="text-xl font-bold text-white group-hover:text-[#55E6FF] transition-colors">
              {project.title}
            </h3>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#111827] text-[#55E6FF] border border-slate-800">
              {project.category}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {project.shortDescription}
          </p>
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#111827] text-slate-300 border border-slate-800/80"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Specific Contribution & Key Technical Challenge */}
        <div className="space-y-2 pt-2 border-t border-slate-800/80 text-xs">
          <div className="bg-[#07090F]/80 p-2.5 rounded-lg border border-slate-800/80">
            <span className="text-[10px] font-mono text-[#55E6FF] uppercase tracking-wider block font-semibold mb-0.5">
              My Specific Contribution:
            </span>
            <p className="text-slate-300 leading-normal">
              {project.specificContribution}
            </p>
          </div>

          <div className="bg-[#07090F]/80 p-2.5 rounded-lg border border-slate-800/80">
            <span className="text-[10px] font-mono text-[#9B7BFF] uppercase tracking-wider block font-semibold mb-0.5">
              Key Technical Challenge:
            </span>
            <p className="text-slate-300 leading-normal">
              {project.technicalChallenge}
            </p>
          </div>
        </div>
      </div>

      {/* Card Actions Footer */}
      <div className="pt-5 mt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2">
        <button
          type="button"
          onClick={() => onOpenCaseStudy(project)}
          className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#55E6FF] hover:text-white transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#55E6FF] py-1"
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>Case Study // Deep Dive &rarr;</span>
        </button>

        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md bg-[#111827] border border-slate-800 text-slate-300 hover:text-white hover:border-slate-600 transition-colors"
              aria-label={`View GitHub repository for ${project.title}`}
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md bg-[#111827] border border-slate-800 text-[#55E6FF] hover:text-white hover:border-[#55E6FF] transition-colors"
              aria-label={`Open live deployment for ${project.title}`}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
