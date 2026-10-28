import React, { useState, useRef, useEffect } from 'react';
import { Terminal, Code2, Play, RefreshCw, CheckCircle2, ChevronRight, Activity, Cpu } from 'lucide-react';
import { developerProfile, skillsData, projectsData } from '../data/portfolioData';
import { executeTerminalCommand, TerminalOutputLine } from '../utils/terminal';

export const TerminalWorkspace: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'editor' | 'terminal'>('terminal');
  const [inputVal, setInputVal] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [terminalLines, setTerminalLines] = useState<TerminalOutputLine[]>([
    { text: 'SYSTEM: NEON//OS kernel v5.19-arch initialized.', type: 'system' },
    { text: `PROFILE: Loaded credentials for "${developerProfile.name}" [SWE]`, type: 'system' },
    { text: 'STATUS: Ready. Type "help" or select a quick command below:', type: 'success' },
    { text: 'HINT: Run "projects" to query portfolio work or "whoami" for role details.', type: 'system' }
  ]);

  const terminalScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalScrollRef.current) {
      terminalScrollRef.current.scrollTop = terminalScrollRef.current.scrollHeight;
    }
  }, [terminalLines, activeTab]);

  const handleCommandSubmit = (commandText: string) => {
    const raw = commandText.trim();
    if (!raw) return;

    // Add command echo
    const echoLine: TerminalOutputLine = {
      text: `neon-os:~$ ${raw}`,
      type: 'command'
    };

    const res = executeTerminalCommand(raw, developerProfile, skillsData, projectsData);

    setCommandHistory(prev => [...prev, raw]);
    setHistoryIndex(-1);

    if (res.clearRequested) {
      setTerminalLines([]);
    } else {
      setTerminalLines(prev => [...prev, echoLine, ...res.lines]);
    }
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleCommandSubmit(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIdx = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIdx);
        setInputVal(commandHistory[nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const nextIdx = historyIndex + 1;
        if (nextIdx >= commandHistory.length) {
          setHistoryIndex(-1);
          setInputVal('');
        } else {
          setHistoryIndex(nextIdx);
          setInputVal(commandHistory[nextIdx]);
        }
      }
    }
  };

  const quickCommands = ['help', 'whoami', 'skills', 'projects', 'status'];

  const sampleCode = `// engineer.ts — Core Architectural Definition
import { Engineer, SkillCategory, Architecture } from '@neon/core';

export const engineer: Engineer = {
  name: "${developerProfile.name}",
  role: "${developerProfile.role}",
  specialty: "${developerProfile.specialty}",
  status: "${developerProfile.availabilityStatus}",
  principles: [
    "Zero Layout Shift (CLS: 0.00)",
    "Accessible by Default (WCAG 2.2 AA)",
    "Strict TypeScript Contracts",
    "Observable Distributed Systems"
  ],
  isAvailableForHire: () => true
};

export async function buildNextGenExperience(): Promise<void> {
  await engineer.deploy({ performanceTarget: 'sub-second' });
}`;

  return (
    <div className="w-full rounded-xl bg-[#0D111B]/90 border border-slate-800 shadow-2xl backdrop-blur-xl overflow-hidden flex flex-col transition-all duration-300 hover:border-slate-700">
      {/* Window Title Bar */}
      <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 bg-[#090D16] border-b border-slate-800/80">
        <div className="flex items-center gap-2">
          {/* Mac-style traffic lights */}
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="text-[11px] font-mono text-slate-400 pl-2 hidden sm:inline-block">
            neon-workspace — zsh
          </span>
        </div>

        {/* Workspace Mode Tabs */}
        <div className="flex items-center gap-1 bg-[#111827] p-0.5 rounded-md border border-slate-800 text-[11px] font-mono">
          <button
            type="button"
            onClick={() => setActiveTab('terminal')}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded transition-colors ${
              activeTab === 'terminal'
                ? 'bg-[#55E6FF]/15 text-[#55E6FF] font-semibold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
            aria-label="Switch to interactive terminal"
          >
            <Terminal className="w-3 h-3" />
            <span>Interactive Terminal</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('editor')}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded transition-colors ${
              activeTab === 'editor'
                ? 'bg-[#9B7BFF]/20 text-[#9B7BFF] font-semibold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
            aria-label="Switch to code editor view"
          >
            <Code2 className="w-3 h-3" />
            <span>engineer.ts</span>
          </button>
        </div>

        {/* Live Status indicator */}
        <div className="hidden sm:flex items-center gap-1.5 text-[10px] font-mono text-emerald-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>200 OK</span>
        </div>
      </div>

      {/* Main Workspace Body */}
      <div className="relative min-h-[340px] sm:min-h-[380px] max-h-[460px] flex flex-col font-mono text-xs">
        {activeTab === 'terminal' ? (
          <div className="flex-1 flex flex-col p-3 sm:p-4 bg-[#07090F]/95 overflow-hidden">
            {/* Scrollable command output */}
            <div
              ref={terminalScrollRef}
              className="flex-1 overflow-y-auto space-y-1.5 pr-1 text-[11px] sm:text-xs leading-relaxed"
              role="log"
              aria-live="polite"
            >
              {terminalLines.map((line, idx) => (
                <div key={idx} className="break-words">
                  {line.type === 'command' && (
                    <span className="text-[#55E6FF] font-semibold">{line.text}</span>
                  )}
                  {line.type === 'system' && (
                    <span className="text-slate-400">{line.text}</span>
                  )}
                  {line.type === 'output' && (
                    <span className="text-slate-200">{line.text}</span>
                  )}
                  {line.type === 'success' && (
                    <span className="text-emerald-400">{line.text}</span>
                  )}
                  {line.type === 'error' && (
                    <span className="text-rose-400">{line.text}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Quick Interactive Command Pills */}
            <div className="pt-2 pb-1.5 border-t border-slate-800/80 flex flex-wrap items-center gap-1.5">
              <span className="text-[10px] text-slate-500 uppercase tracking-wider mr-1">Quick Run:</span>
              {quickCommands.map((cmd) => (
                <button
                  key={cmd}
                  type="button"
                  onClick={() => handleCommandSubmit(cmd)}
                  className="px-2 py-0.5 text-[10px] bg-slate-900 hover:bg-[#55E6FF]/15 border border-slate-800 hover:border-[#55E6FF]/40 text-[#55E6FF] rounded transition-all focus:outline-none focus-visible:ring-1 focus-visible:ring-[#55E6FF]"
                >
                  {cmd}
                </button>
              ))}
              <button
                type="button"
                onClick={() => setTerminalLines([])}
                className="px-2 py-0.5 text-[10px] bg-slate-900/60 hover:bg-slate-800 border border-slate-800 text-slate-400 rounded transition-all ml-auto"
              >
                clear
              </button>
            </div>

            {/* Active Command Prompt Input */}
            <div className="flex items-center gap-1.5 pt-2 border-t border-slate-800 text-slate-200">
              <span className="text-[#55E6FF] font-semibold select-none flex items-center">
                <span>neon-os:~$</span>
                <ChevronRight className="w-3.5 h-3.5 text-[#55E6FF]" />
              </span>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="type 'help', 'skills', or 'projects'..."
                className="flex-1 bg-transparent border-none outline-none text-[#F4F7FF] placeholder-slate-600 font-mono text-xs"
                aria-label="Interactive terminal input prompt"
              />
              <span className="w-1.5 h-3.5 bg-[#55E6FF] animate-cursor-blink" />
            </div>
          </div>
        ) : (
          /* Code Editor View */
          <div className="flex-1 p-3 sm:p-4 bg-[#090D16] overflow-x-auto text-[11px] sm:text-xs leading-relaxed text-slate-300">
            <pre className="font-mono">
              <code>
                {sampleCode.split('\n').map((line, idx) => (
                  <div key={idx} className="flex">
                    <span className="w-7 text-right pr-3 select-none text-slate-600 font-mono">
                      {idx + 1}
                    </span>
                    <span
                      className={
                        line.startsWith('//')
                          ? 'text-slate-500 italic'
                          : line.includes('import') || line.includes('export') || line.includes('const') || line.includes('function')
                          ? 'text-[#9B7BFF]'
                          : line.includes('true') || line.includes('string') || line.includes('Promise')
                          ? 'text-[#55E6FF]'
                          : line.includes('"')
                          ? 'text-emerald-300'
                          : 'text-slate-200'
                      }
                    >
                      {line}
                    </span>
                  </div>
                ))}
              </code>
            </pre>
          </div>
        )}
      </div>

      {/* Terminal Telemetry Footer Bar */}
      <div className="px-3 py-1.5 bg-[#07090F] border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-400">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1">
            <Cpu className="w-3 h-3 text-[#55E6FF]" />
            <span>ENV: Node v22.14 LTS</span>
          </span>
          <span className="hidden sm:inline-block">ARCH: x86_64</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span className="text-emerald-400">0 ERRORS // CLEAN BUILD</span>
        </div>
      </div>
    </div>
  );
};
