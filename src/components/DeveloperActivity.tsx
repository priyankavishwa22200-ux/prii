import React from 'react';
import { Github, Star, GitFork, ExternalLink, ShieldCheck, Zap, Code2, Terminal } from 'lucide-react';
import { activityCredibilityData, developerProfile } from '../data/portfolioData';

export const DeveloperActivity: React.FC = () => {
  return (
    <section
      id="credibility"
      className="py-20 lg:py-28 relative bg-[#07090F] border-t border-slate-900"
      aria-label="Developer Activity and Technical Credibility"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#55E6FF] tracking-wider uppercase mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#55E6FF]" />
              <span>// METRICS & CREDIBILITY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F4F7FF]">
              Engineering standards & activity.
            </h2>
            <p className="text-sm text-slate-400 mt-2 max-w-xl">
              Public repositories, architecture benchmarks, and verifiable engineering practices.
            </p>
          </div>

          <a
            href={developerProfile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#111827] border border-slate-700 hover:border-[#55E6FF] text-[#F4F7FF] text-xs font-mono transition-all self-start sm:self-auto"
          >
            <Github className="w-4 h-4 text-[#55E6FF]" />
            <span>github.com/{activityCredibilityData.githubUsername}</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </div>

        {/* Top Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {activityCredibilityData.verifiedMilestones.map((milestone, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-[#0D111B] border border-slate-800 cyber-card space-y-1"
            >
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">
                {milestone.label}
              </span>
              <div className="text-xl sm:text-2xl font-bold font-mono text-[#55E6FF]">
                {milestone.value}
              </div>
              <p className="text-xs text-slate-400">
                {milestone.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Pinned Repositories Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400">
            <span className="uppercase tracking-wider">PINNED_OPEN_SOURCE_MODULES</span>
            <span>PUBLIC REPOSITORIES</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {activityCredibilityData.pinnedRepos.map((repo) => (
              <a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-xl bg-[#0D111B] border border-slate-800 hover:border-[#55E6FF]/50 transition-all cyber-card flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold font-mono text-white group-hover:text-[#55E6FF] transition-colors flex items-center gap-1.5">
                      <Code2 className="w-3.5 h-3.5 text-[#55E6FF]" />
                      {repo.name}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#55E6FF] transition-colors" />
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {repo.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 mt-4 border-t border-slate-800/80 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#9B7BFF]" />
                    <span>{repo.language}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-amber-400" />
                      {repo.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-3.5 h-3.5 text-slate-400" />
                      {repo.forks}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
