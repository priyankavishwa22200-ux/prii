import React, { useEffect } from 'react';
import { X, Download, Printer, ExternalLink, Mail, MapPin, Globe, Github, Linkedin, CheckCircle2 } from 'lucide-react';
import { developerProfile, skillsData, timelineData, projectsData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadText = () => {
    const resumeText = `# ${developerProfile.name}
${developerProfile.role} — ${developerProfile.location}
Email: ${developerProfile.email} | GitHub: ${developerProfile.githubUrl} | LinkedIn: ${developerProfile.linkedinUrl}

---

## PROFESSIONAL SUMMARY
${developerProfile.bio}
${developerProfile.approach}

---

## TECHNICAL SKILLS
- Frontend: TypeScript, React, Tailwind CSS, JavaScript ESNext, HTML5, CSS3
- Backend: Node.js, Express, REST APIs
- Databases: PostgreSQL, MongoDB, MySQL
- Developer Tools: Git, GitHub, Vite, Chrome DevTools, npm

---

## EXPERIENCE & MILESTONES
${timelineData.map(item => `
### ${item.role} | ${item.organization}
${item.period} — ${item.location}
${item.description}
Achievements:
${item.achievements.map(a => `  * ${a}`).join('\n')}
Technologies: ${item.technologies.join(', ')}
`).join('\n')}

---

## SELECTED PROJECTS
${projectsData.map(p => `
### ${p.title} (${p.category})
${p.shortDescription}
Stack: ${p.techStack.join(', ')}
Contribution: ${p.specificContribution}
Challenge: ${p.technicalChallenge}
`).join('\n')}
`;

    const blob = new Blob([resumeText], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${developerProfile.name.replace(/\s+/g, '_')}_Software_Engineer_Resume.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative w-full max-w-4xl max-h-[92vh] bg-[#0D111B] border border-slate-700 rounded-2xl shadow-2xl overflow-y-auto z-10 flex flex-col my-auto cyber-card">
        {/* Sticky Action Toolbar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-5 py-3.5 bg-[#090D16]/95 border-b border-slate-800 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-semibold text-[#55E6FF]">
              RESUME // VERIFIED_CV.PDF
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hidden sm:inline-block">
              READY FOR HIRE
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#111827] border border-slate-700 text-slate-300 hover:text-white text-xs font-mono transition-colors"
              aria-label="Print or save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-[#55E6FF]" />
              <span className="hidden sm:inline">Print / PDF</span>
            </button>

            <button
              type="button"
              onClick={handleDownloadText}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#111827] border border-slate-700 text-slate-300 hover:text-[#55E6FF] text-xs font-mono transition-colors"
              aria-label="Download markdown formatted resume"
            >
              <Download className="w-3.5 h-3.5 text-[#55E6FF]" />
              <span className="hidden sm:inline">Download .MD</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
              aria-label="Close resume dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Sheet Canvas */}
        <div className="p-6 sm:p-10 space-y-8 bg-[#0D111B] text-slate-300">
          {/* Header */}
          <div className="border-b border-slate-800 pb-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <h1 id="resume-modal-title" className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {developerProfile.name}
              </h1>
              <p className="text-base text-[#55E6FF] font-medium font-mono mt-1">
                {developerProfile.role}
              </p>
              <p className="text-xs text-slate-400 mt-2 max-w-xl leading-relaxed">
                {developerProfile.bio}
              </p>
            </div>

            <div className="text-xs font-mono space-y-1 text-slate-400 shrink-0">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#55E6FF]" />
                <span>{developerProfile.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#55E6FF]" />
                <a href={`mailto:${developerProfile.email}`} className="text-slate-300 hover:underline">
                  {developerProfile.email}
                </a>
              </div>
              <div className="flex items-center gap-1.5">
                <Github className="w-3.5 h-3.5 text-[#55E6FF]" />
                <a href={developerProfile.githubUrl} target="_blank" rel="noreferrer" className="text-slate-300 hover:underline">
                  GitHub Profile
                </a>
              </div>
              <div className="flex items-center gap-1.5">
                <Linkedin className="w-3.5 h-3.5 text-[#55E6FF]" />
                <a href={developerProfile.linkedinUrl} target="_blank" rel="noreferrer" className="text-slate-300 hover:underline">
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>

          {/* Technical Skills Section */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#55E6FF] border-b border-slate-800/80 pb-1">
              Technical Core Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded bg-[#111827] border border-slate-800">
                <strong className="text-white block mb-0.5">Languages & Frontend:</strong>
                <span className="text-slate-400">TypeScript, JavaScript (ESNext), React, Tailwind CSS, HTML5, CSS3</span>
              </div>
              <div className="p-2.5 rounded bg-[#111827] border border-slate-800">
                <strong className="text-white block mb-0.5">Backend & Architecture:</strong>
                <span className="text-slate-400">Node.js, Express, RESTful APIs, Microservices, JSON Schemas</span>
              </div>
              <div className="p-2.5 rounded bg-[#111827] border border-slate-800">
                <strong className="text-white block mb-0.5">Databases & Storage:</strong>
                <span className="text-slate-400">PostgreSQL, MongoDB, MySQL, IndexedDB, Cache Strategies</span>
              </div>
              <div className="p-2.5 rounded bg-[#111827] border border-slate-800">
                <strong className="text-white block mb-0.5">Tooling & Quality:</strong>
                <span className="text-slate-400">Git, GitHub Actions, Vite, Chrome DevTools, WCAG 2.2 AA, Core Web Vitals</span>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#55E6FF] border-b border-slate-800/80 pb-1">
              Engineering Experience & Education
            </h2>
            <div className="space-y-4">
              {timelineData.map(item => (
                <div key={item.id} className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                    <span className="font-bold text-white text-sm">
                      {item.role} <span className="text-[#9B7BFF] font-normal">@ {item.organization}</span>
                    </span>
                    <span className="font-mono text-slate-400">
                      {item.period} | {item.location}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300">
                    {item.description}
                  </p>
                  <ul className="space-y-1 pl-2">
                    {item.achievements.map((ach, idx) => (
                      <li key={idx} className="text-xs text-slate-400 flex items-start gap-2">
                        <span className="text-[#55E6FF]">•</span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Selected Work Section */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#55E6FF] border-b border-slate-800/80 pb-1">
              Featured Software Engineering Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {projectsData.slice(0, 4).map(p => (
                <div key={p.id} className="p-3 rounded-lg bg-[#111827] border border-slate-800 space-y-1">
                  <div className="flex items-center justify-between font-bold text-white">
                    <span>{p.title}</span>
                    <span className="text-[10px] font-mono text-[#55E6FF]">{p.category}</span>
                  </div>
                  <p className="text-slate-400 text-[11px] leading-normal">
                    {p.shortDescription}
                  </p>
                  <div className="text-[10px] font-mono text-slate-500 pt-1">
                    Tech: {p.techStack.slice(0, 4).join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
