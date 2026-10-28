import React, { useState } from 'react';
import { Briefcase, GraduationCap, Award, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { timelineData } from '../data/portfolioData';
import { TimelineItem } from '../types/portfolio';

export const Experience: React.FC = () => {
  const [filterType, setFilterType] = useState<'all' | 'experience' | 'education'>('all');

  const filteredTimeline = filterType === 'all'
    ? timelineData
    : timelineData.filter(item => {
        if (filterType === 'experience') return item.type === 'experience';
        if (filterType === 'education') return item.type === 'education' || item.type === 'milestone';
        return true;
      });

  const getItemIcon = (type: TimelineItem['type']) => {
    switch (type) {
      case 'experience':
        return <Briefcase className="w-4 h-4 text-[#55E6FF]" />;
      case 'education':
        return <GraduationCap className="w-4 h-4 text-[#9B7BFF]" />;
      case 'milestone':
      default:
        return <Award className="w-4 h-4 text-emerald-400" />;
    }
  };

  return (
    <section
      id="background"
      className="py-20 lg:py-28 relative bg-[#07090F] border-t border-slate-900"
      aria-label="Experience and Education Background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#55E6FF] tracking-wider uppercase mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#55E6FF]" />
              <span>// 04 — BACKGROUND</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F4F7FF]">
              My journey so far.
            </h2>
            <p className="text-sm text-slate-400 mt-2 max-w-xl">
              Practical engineering experience, academic foundations in computer science, and open-source contributions.
            </p>
          </div>

          {/* Filter Toggle */}
          <div className="flex items-center gap-1.5 bg-[#0D111B] p-1 rounded-lg border border-slate-800">
            <button
              type="button"
              onClick={() => setFilterType('all')}
              className={`px-3 py-1 text-xs font-mono rounded-md transition-all ${
                filterType === 'all'
                  ? 'bg-[#111827] text-[#55E6FF] border border-[#55E6FF]/30 font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Milestones
            </button>
            <button
              type="button"
              onClick={() => setFilterType('experience')}
              className={`px-3 py-1 text-xs font-mono rounded-md transition-all ${
                filterType === 'experience'
                  ? 'bg-[#111827] text-[#55E6FF] border border-[#55E6FF]/30 font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Experience
            </button>
            <button
              type="button"
              onClick={() => setFilterType('education')}
              className={`px-3 py-1 text-xs font-mono rounded-md transition-all ${
                filterType === 'education'
                  ? 'bg-[#111827] text-[#55E6FF] border border-[#55E6FF]/30 font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Education & Awards
            </button>
          </div>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l border-slate-800/80 space-y-10 ml-2 sm:ml-4">
          {filteredTimeline.map((item) => (
            <div key={item.id} className="relative group">
              {/* Timeline Node Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-8 h-8 rounded-full bg-[#0D111B] border border-slate-700 flex items-center justify-center group-hover:border-[#55E6FF] group-hover:shadow-[0_0_12px_rgba(85,230,255,0.2)] transition-all">
                {getItemIcon(item.type)}
              </div>

              {/* Card Container */}
              <div className="p-5 sm:p-6 rounded-xl bg-[#0D111B] border border-slate-800/80 hover:border-[#55E6FF]/30 transition-all cyber-card space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/60 pb-3">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-[#55E6FF] transition-colors">
                      {item.role}
                    </h3>
                    <div className="text-sm font-semibold text-[#9B7BFF]">
                      {item.organization}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1.5 bg-[#111827] px-2.5 py-1 rounded border border-slate-800">
                      <Calendar className="w-3.5 h-3.5 text-[#55E6FF]" />
                      {item.period}
                    </span>
                    <span className="flex items-center gap-1.5 bg-[#111827] px-2.5 py-1 rounded border border-slate-800">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {item.location}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                {/* Achievements List */}
                {item.achievements.length > 0 && (
                  <ul className="space-y-1.5 pt-1">
                    {item.achievements.map((ach, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#55E6FF] shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#111827] text-slate-400 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
