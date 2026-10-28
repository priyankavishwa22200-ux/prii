import React from 'react';
import { ArrowDown, FileText, Send, Sparkles, Terminal, ShieldCheck, Zap } from 'lucide-react';
import { developerProfile } from '../data/portfolioData';
import { TerminalWorkspace } from './TerminalWorkspace';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-radial-vignette"
      aria-label="Introduction & Hero"
    >
      {/* Background Cyber Grid Accent */}
      <div className="absolute inset-0 bg-cyber-grid pointer-events-none opacity-60" />
      
      {/* Subtle Glow Orb in background */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#55E6FF]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#9B7BFF]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Status indicator */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#111827]/80 border border-[#55E6FF]/30 backdrop-blur-md shadow-[0_0_15px_rgba(85,230,255,0.12)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#55E6FF] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#55E6FF]" />
              </span>
              <span className="font-mono text-xs font-semibold tracking-wider text-[#55E6FF] uppercase">
                {developerProfile.availabilityStatus}
              </span>
            </div>

            {/* Oversized Responsive Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F4F7FF] leading-[1.1] sm:leading-[1.15]">
              Building{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#55E6FF] via-[#7DEBFF] to-[#9B7BFF] drop-shadow-[0_0_25px_rgba(85,230,255,0.25)]">
                digital experiences
              </span>{' '}
              for the next generation.
            </h1>

            {/* Introduction and Bio */}
            <div className="space-y-3 max-w-2xl">
              <p className="text-base sm:text-lg text-[#F4F7FF] font-medium leading-relaxed">
                Hi, I'm <span className="text-[#55E6FF] font-semibold">{developerProfile.name}</span>, a{' '}
                <span className="text-white font-semibold">{developerProfile.role}</span> focused on building fast,
                accessible, and scalable web experiences.
              </p>
              <p className="text-sm sm:text-base text-[#9AA6BA] leading-relaxed">
                Specializing in distributed React architectures, strict TypeScript engineering, and sub-second
                Core Web Vitals. Passionate about solving complex state orchestration and crafting intuitive developer ergonomics.
              </p>
            </div>

            {/* Quick credibility tags */}
            <div className="flex flex-wrap items-center gap-3 pt-1 text-xs font-mono text-[#9AA6BA]">
              <span className="flex items-center gap-1.5 bg-[#111827]/80 px-2.5 py-1 rounded border border-slate-800">
                <Zap className="w-3.5 h-3.5 text-[#55E6FF]" />
                Lighthouse 98+
              </span>
              <span className="flex items-center gap-1.5 bg-[#111827]/80 px-2.5 py-1 rounded border border-slate-800">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                WCAG 2.2 AA
              </span>
              <span className="flex items-center gap-1.5 bg-[#111827]/80 px-2.5 py-1 rounded border border-slate-800">
                <Terminal className="w-3.5 h-3.5 text-[#9B7BFF]" />
                Full-Stack Systems
              </span>
            </div>

            {/* Hero CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              {/* Primary CTA */}
              <button
                type="button"
                onClick={() => scrollToSection('projects')}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-[#07090F] bg-gradient-to-r from-[#55E6FF] to-[#9B7BFF] hover:opacity-95 shadow-[0_0_20px_rgba(85,230,255,0.25)] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#55E6FF]"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              {/* Secondary CTA: Real Resume Action */}
              <button
                type="button"
                onClick={onOpenResume}
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-medium text-[#F4F7FF] bg-[#111827] hover:bg-[#1A2337] border border-slate-700/80 hover:border-[#55E6FF]/50 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#55E6FF]"
                aria-label="View or download developer resume"
              >
                <FileText className="w-4 h-4 text-[#55E6FF]" />
                <span>View Resume</span>
              </button>

              {/* Text Link: Get in touch */}
              <button
                type="button"
                onClick={() => scrollToSection('contact')}
                className="text-xs font-mono text-[#9AA6BA] hover:text-[#55E6FF] flex items-center gap-1.5 py-2 px-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#55E6FF] rounded transition-colors"
              >
                <Send className="w-3 h-3" />
                <span>Get in Touch // Initiate Contact &rarr;</span>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Developer Workspace Visual */}
          <div className="lg:col-span-5 w-full">
            <div className="relative">
              {/* Subtle back ambient glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#55E6FF]/20 to-[#9B7BFF]/20 blur-xl opacity-50" />
              <TerminalWorkspace />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
