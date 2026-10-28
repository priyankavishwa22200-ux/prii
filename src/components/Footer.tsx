import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart, Sparkles, Terminal } from 'lucide-react';
import { developerProfile } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#07090F] border-t border-slate-900 py-12 relative overflow-hidden" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          {/* Brand info */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md bg-[#111827] border border-[#55E6FF]/40 flex items-center justify-center">
              <span className="font-mono text-xs font-bold text-[#55E6FF]">ND</span>
            </div>
            <div>
              <span className="font-bold text-sm text-white tracking-tight">
                {developerProfile.name}
              </span>
              <span className="text-xs text-slate-500 font-mono block">
                {developerProfile.role}
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-slate-400">
            <a
              href={developerProfile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#0D111B] border border-slate-800 hover:text-[#55E6FF] hover:border-[#55E6FF]/40 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={developerProfile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#0D111B] border border-slate-800 hover:text-[#9B7BFF] hover:border-[#9B7BFF]/40 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${developerProfile.email}`}
              className="p-2 rounded-lg bg-[#0D111B] border border-slate-800 hover:text-[#55E6FF] hover:border-[#55E6FF]/40 transition-colors"
              aria-label="Send Direct Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Back to top button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#0D111B] border border-slate-800 hover:border-[#55E6FF] text-xs font-mono text-slate-300 hover:text-[#55E6FF] transition-all focus:outline-none focus-visible:ring-1 focus-visible:ring-[#55E6FF]"
            aria-label="Scroll back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom sign-off & system status */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-emerald-400">SYSTEM STATUS: ALL SERVICES OPERATIONAL</span>
          </div>

          <div className="text-center sm:text-right">
            <span>Designed with intent. Built with code.</span>
            <span className="block sm:inline sm:ml-2 text-slate-600">
              © {currentYear} {developerProfile.name}. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
