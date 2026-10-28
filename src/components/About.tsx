import React from 'react';
import { Terminal, MapPin, Briefcase, Sparkles, Target, Bug, CheckCircle2, Code2, Users, Lightbulb } from 'lucide-react';
import { developerProfile } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 lg:py-28 relative bg-[#07090F] border-t border-slate-900"
      aria-label="About the Developer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-mono text-[#55E6FF] tracking-wider uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#55E6FF]" />
            <span>// 01 — ABOUT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F4F7FF]">
            The developer behind the code.
          </h2>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Narrative & Philosophy */}
          <div className="lg:col-span-7 space-y-6 text-[#9AA6BA] text-sm sm:text-base leading-relaxed">
            <div className="p-6 rounded-xl bg-[#0D111B] border border-slate-800/80 cyber-card">
              <h3 className="text-base font-semibold text-[#F4F7FF] mb-3 flex items-center gap-2">
                <Code2 className="w-4 h-4 text-[#55E6FF]" />
                <span>Engineering Background & Vision</span>
              </h3>
              <p className="mb-3">
                I build software with a focus on precision, speed, and deep technical curiosity. My journey started
                with building low-level algorithmic utilities and quickly expanded into modern distributed frontend systems,
                where millimeter-level user experience meets complex asynchronous state.
              </p>
              <p>
                Whether architecting component primitives for enterprise design systems or tuning database query plans,
                I treat performance, predictability, and maintainability as non-negotiable foundations.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-[#0D111B] border border-slate-800/80 cyber-card">
                <div className="w-8 h-8 rounded-lg bg-[#55E6FF]/10 border border-[#55E6FF]/20 flex items-center justify-center mb-3">
                  <Bug className="w-4 h-4 text-[#55E6FF]" />
                </div>
                <h4 className="text-sm font-semibold text-[#F4F7FF] mb-1.5">
                  Debugging & Root-Cause Analysis
                </h4>
                <p className="text-xs text-[#9AA6BA] leading-normal">
                  I diagnose bugs from first principles using flamegraphs, network traces, and reproducible unit tests
                  rather than guesswork or patch-over fixes.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#0D111B] border border-slate-800/80 cyber-card">
                <div className="w-8 h-8 rounded-lg bg-[#9B7BFF]/10 border border-[#9B7BFF]/20 flex items-center justify-center mb-3">
                  <Users className="w-4 h-4 text-[#9B7BFF]" />
                </div>
                <h4 className="text-sm font-semibold text-[#F4F7FF] mb-1.5">
                  Code Quality & Collaboration
                </h4>
                <p className="text-xs text-[#9AA6BA] leading-normal">
                  Clean pull requests, thoughtful code reviews, automated CI testing, and clear technical documentation
                  ensure long-term team velocity.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-r from-[#111827] to-[#0D111B] border border-slate-800 flex items-start gap-3.5">
              <Target className="w-5 h-5 text-[#55E6FF] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#55E6FF] mb-1">
                  Current Career Goal
                </h4>
                <p className="text-xs sm:text-sm text-[#F4F7FF] font-medium leading-relaxed">
                  Joining an innovative engineering team as a full-time software engineer or high-impact intern,
                  building production systems that push the boundary of web responsiveness and user delight.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Technical Profile Panel HUD */}
          <div className="lg:col-span-5 space-y-5">
            <div className="rounded-xl bg-[#0D111B] border border-slate-800 p-6 shadow-xl cyber-card">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  OPERATOR_PROFILE.JSON
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#55E6FF]/10 text-[#55E6FF] border border-[#55E6FF]/20">
                  VERIFIED
                </span>
              </div>

              <div className="divide-y divide-slate-800/60 text-xs font-mono">
                {/* Specialty */}
                <div className="py-3.5">
                  <span className="text-slate-500 block mb-1 uppercase text-[10px]">Focus Specialty</span>
                  <span className="text-[#F4F7FF] font-sans font-medium text-sm flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#55E6FF]" />
                    {developerProfile.specialty}
                  </span>
                </div>

                {/* Location */}
                <div className="py-3.5">
                  <span className="text-slate-500 block mb-1 uppercase text-[10px]">Location</span>
                  <span className="text-[#F4F7FF] font-sans font-medium text-sm flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#55E6FF]" />
                    {developerProfile.location}
                  </span>
                </div>

                {/* Status */}
                <div className="py-3.5">
                  <span className="text-slate-500 block mb-1 uppercase text-[10px]">Current Status</span>
                  <span className="text-emerald-400 font-sans font-medium text-sm flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-emerald-400" />
                    {developerProfile.currentStatus}
                  </span>
                </div>

                {/* Technical Interests */}
                <div className="py-3.5">
                  <span className="text-slate-500 block mb-2 uppercase text-[10px]">Technical Interests</span>
                  <div className="flex flex-wrap gap-1.5">
                    {developerProfile.technicalInterests.map((interest, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#111827] text-slate-300 border border-slate-800 hover:border-[#55E6FF]/30 transition-colors"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Approach summary quote */}
              <div className="mt-4 pt-4 border-t border-slate-800/80 bg-[#07090F]/70 p-3 rounded-lg text-xs italic text-slate-400">
                "{developerProfile.approach}"
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
