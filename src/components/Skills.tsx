import React, { useState } from 'react';
import { 
  Code2, Layers, Palette, Braces, FileCode, Sparkles, 
  Server, Cpu, Network, Database, HardDrive, ServerCrash, 
  GitBranch, Github, Zap, Package, Laptop, Terminal, 
  Check, Filter
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import { SkillItem, SkillLevel } from '../types/portfolio';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'Developer tools'];

  const filteredSkills = activeCategory === 'All'
    ? skillsData
    : skillsData.filter(s => s.category.toLowerCase() === activeCategory.toLowerCase());

  const getIcon = (name: string) => {
    switch (name) {
      case 'Code2': return <Code2 className="w-4 h-4" />;
      case 'Layers': return <Layers className="w-4 h-4" />;
      case 'Palette': return <Palette className="w-4 h-4" />;
      case 'Braces': return <Braces className="w-4 h-4" />;
      case 'FileCode': return <FileCode className="w-4 h-4" />;
      case 'Sparkles': return <Sparkles className="w-4 h-4" />;
      case 'Server': return <Server className="w-4 h-4" />;
      case 'Cpu': return <Cpu className="w-4 h-4" />;
      case 'Network': return <Network className="w-4 h-4" />;
      case 'Database': return <Database className="w-4 h-4" />;
      case 'HardDrive': return <HardDrive className="w-4 h-4" />;
      case 'ServerCrash': return <ServerCrash className="w-4 h-4" />;
      case 'GitBranch': return <GitBranch className="w-4 h-4" />;
      case 'Github': return <Github className="w-4 h-4" />;
      case 'Zap': return <Zap className="w-4 h-4" />;
      case 'Package': return <Package className="w-4 h-4" />;
      case 'Laptop': return <Laptop className="w-4 h-4" />;
      default: return <Terminal className="w-4 h-4" />;
    }
  };

  const getLevelBadge = (level: SkillLevel) => {
    switch (level) {
      case 'Proficient':
        return (
          <span className="inline-flex items-center gap-1 text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-[#55E6FF]/10 text-[#55E6FF] border border-[#55E6FF]/25">
            <span className="w-1.5 h-1.5 rounded-full bg-[#55E6FF]" />
            Proficient
          </span>
        );
      case 'Working knowledge':
        return (
          <span className="inline-flex items-center gap-1 text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-[#9B7BFF]/10 text-[#9B7BFF] border border-[#9B7BFF]/25">
            <span className="w-1.5 h-1.5 rounded-full bg-[#9B7BFF]" />
            Working Knowledge
          </span>
        );
      case 'Learning':
      default:
        return (
          <span className="inline-flex items-center gap-1 text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/25">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-300" />
            Learning
          </span>
        );
    }
  };

  return (
    <section
      id="skills"
      className="py-20 lg:py-28 relative bg-[#07090F] border-t border-slate-900"
      aria-label="Technical Skills"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#55E6FF] tracking-wider uppercase mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#55E6FF]" />
              <span>// 02 — TECH STACK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F4F7FF]">
              Tools I use to build.
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 bg-[#0D111B] p-1 rounded-lg border border-slate-800">
            {categories.map((cat) => {
              const isSelected = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1 text-xs font-mono rounded-md transition-all duration-150 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#55E6FF] ${
                    isSelected
                      ? 'bg-[#111827] text-[#55E6FF] border border-[#55E6FF]/30 shadow-sm font-semibold'
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

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="group p-4 rounded-xl bg-[#0D111B] border border-slate-800/80 hover:border-[#55E6FF]/40 transition-all duration-200 cyber-card flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-2.5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#111827] border border-slate-800 group-hover:border-[#55E6FF]/30 text-[#55E6FF] flex items-center justify-center transition-colors">
                      {getIcon(skill.icon)}
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[#F4F7FF] group-hover:text-[#55E6FF] transition-colors">
                        {skill.name}
                      </h3>
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                        {skill.category}
                      </span>
                    </div>
                  </div>
                  <div>
                    {getLevelBadge(skill.level)}
                  </div>
                </div>

                {skill.description && (
                  <p className="text-xs text-[#9AA6BA] mt-2 font-mono leading-relaxed pl-1">
                    {skill.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Philosophy Note */}
        <div className="mt-10 p-4 rounded-xl bg-[#0D111B]/60 border border-slate-800/60 flex items-center justify-between flex-wrap gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#55E6FF]" />
            <span>Philosophy: Tooling serves user outcome, performance, and ergonomic maintainability.</span>
          </div>
          <span className="text-slate-500 text-[11px]">Configurable & Verified Stack</span>
        </div>
      </div>
    </section>
  );
};
