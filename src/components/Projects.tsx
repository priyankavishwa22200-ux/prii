import React, { useState } from 'react';
import { Search, Filter, Sparkles } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { ProjectItem } from '../types/portfolio';
import { ProjectCard } from './ProjectCard';
import { CaseStudyModal } from './CaseStudyModal';
import { filterProjects, extractUniqueCategories } from '../utils/filter';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCaseStudyProject, setActiveCaseStudyProject] = useState<ProjectItem | null>(null);

  const categories = extractUniqueCategories(projectsData);
  const displayedProjects = filterProjects(projectsData, selectedCategory, searchQuery);

  return (
    <section
      id="projects"
      className="py-20 lg:py-28 relative bg-[#07090F] border-t border-slate-900"
      aria-label="Selected Engineering Projects"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#55E6FF] tracking-wider uppercase mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#55E6FF]" />
              <span>// 03 — SELECTED WORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F4F7FF]">
              Projects that bring ideas to life.
            </h2>
            <p className="text-sm text-slate-400 mt-2 max-w-xl">
              Production web applications engineered with strict focus on architecture, performance benchmarks, and measurable outcomes.
            </p>
          </div>

          {/* Search & Category Filter Controls */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search stack or keywords..."
                className="pl-9 pr-3 py-1.5 text-xs font-mono rounded-lg bg-[#0D111B] border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-[#55E6FF] w-full sm:w-56 transition-colors"
                aria-label="Filter projects by search term"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 bg-[#0D111B] p-1 rounded-lg border border-slate-800">
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1 text-xs font-mono rounded-md transition-all ${
                      isSelected
                        ? 'bg-[#111827] text-[#55E6FF] border border-[#55E6FF]/30 font-semibold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                    aria-pressed={isSelected}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Project Grid */}
        {displayedProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {displayedProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenCaseStudy={(proj) => setActiveCaseStudyProject(proj)}
              />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center rounded-2xl bg-[#0D111B] border border-slate-800 text-slate-400 space-y-3">
            <p className="text-sm font-mono">No projects matched criteria: "{searchQuery}"</p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 text-xs font-mono bg-[#111827] border border-slate-700 text-[#55E6FF] rounded-lg"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Interactive Case Study Modal Dialog */}
        <CaseStudyModal
          project={activeCaseStudyProject}
          onClose={() => setActiveCaseStudyProject(null)}
        />
      </div>
    </section>
  );
};
