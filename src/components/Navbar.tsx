import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, FileText, Send, Sparkles } from 'lucide-react';
import { developerProfile } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['about', 'skills', 'projects', 'background', 'credibility', 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            return;
          }
        }
      }

      if (window.scrollY < 300) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Experience', href: '#background', id: 'background' },
    { name: 'Credibility', href: '#credibility', id: 'credibility' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#07090F]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40 py-3'
          : 'bg-transparent py-5'
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between" aria-label="Main Navigation">
          {/* Logo / Monogram */}
          <a
            href="#top"
            className="group flex items-center gap-3 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#55E6FF] rounded px-1"
            aria-label="NEON DEV Portfolio Home"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="w-9 h-9 rounded-md bg-gradient-to-br from-[#111827] to-[#0D111B] border border-[#55E6FF]/40 flex items-center justify-center group-hover:border-[#55E6FF] transition-colors shadow-[0_0_12px_rgba(85,230,255,0.15)]">
              <span className="font-mono text-xs font-bold text-[#55E6FF] tracking-tighter">
                ND
              </span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-bold tracking-tight text-sm text-[#F4F7FF]">
                  {developerProfile.name}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#55E6FF] animate-pulse" />
              </div>
              <span className="font-mono text-[10px] text-[#9AA6BA] tracking-wider uppercase">
                NEON//DEV v2.4
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 bg-[#111827]/60 border border-slate-800/80 rounded-full px-3 py-1.5 backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`relative px-3.5 py-1 text-xs font-medium transition-all duration-200 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#55E6FF] ${
                    isActive
                      ? 'text-[#55E6FF] bg-[#55E6FF]/10 shadow-[0_0_10px_rgba(85,230,255,0.1)]'
                      : 'text-[#9AA6BA] hover:text-[#F4F7FF] hover:bg-slate-800/40'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#55E6FF] rounded-full shadow-[0_0_6px_#55E6FF]" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Actions: Resume & Let's Talk */}
          <div className="hidden md:flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenResume}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium text-[#9AA6BA] hover:text-[#F4F7FF] hover:border-slate-700 bg-[#111827]/70 border border-slate-800 rounded-md transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#55E6FF]"
              aria-label="View developer resume"
            >
              <FileText className="w-3.5 h-3.5 text-[#55E6FF]" />
              <span>Resume</span>
            </button>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="relative group overflow-hidden px-4 py-1.5 rounded-md text-xs font-semibold text-[#07090F] bg-gradient-to-r from-[#55E6FF] to-[#9B7BFF] hover:opacity-95 transition-all shadow-[0_0_15px_rgba(85,230,255,0.25)] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07090F] focus-visible:ring-[#55E6FF]"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <Send className="w-3 h-3 text-[#07090F]" />
                <span>Let's Talk</span>
              </span>
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={onOpenResume}
              className="p-1.5 rounded-md bg-[#111827] border border-slate-800 text-xs font-mono text-[#55E6FF]"
              aria-label="View Resume"
            >
              <FileText className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md bg-[#111827] border border-slate-800 text-[#F4F7FF] hover:text-[#55E6FF] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#55E6FF]"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#07090F]/98 border-b border-slate-800 px-4 pt-3 pb-6 shadow-2xl backdrop-blur-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`px-3 py-2 text-sm font-medium rounded-md flex items-center justify-between ${
                    isActive
                      ? 'text-[#55E6FF] bg-[#55E6FF]/10 font-mono'
                      : 'text-[#9AA6BA] hover:text-[#F4F7FF] hover:bg-slate-900'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="text-xs font-mono text-[#55E6FF]">ACTIVE</span>}
                </a>
              );
            })}

            <div className="pt-3 mt-2 border-t border-slate-800/80 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-mono bg-[#111827] border border-slate-700 rounded-md text-[#F4F7FF]"
              >
                <FileText className="w-4 h-4 text-[#55E6FF]" />
                <span>View Full Resume</span>
              </button>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
                className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold bg-gradient-to-r from-[#55E6FF] to-[#9B7BFF] text-[#07090F] rounded-md"
              >
                <Send className="w-4 h-4" />
                <span>Let's Talk — Hire Me</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
