import { DeveloperProfile, ProjectItem, SkillItem } from '../types/portfolio';

export interface TerminalOutputLine {
  text: string;
  type: 'system' | 'output' | 'error' | 'success' | 'command';
  timestamp?: string;
}

export function executeTerminalCommand(
  rawInput: string,
  profile: DeveloperProfile,
  skills: SkillItem[],
  projects: ProjectItem[]
): { lines: TerminalOutputLine[]; clearRequested?: boolean } {
  const trimmed = rawInput.trim();
  if (!trimmed) {
    return { lines: [] };
  }

  const [cmd, ...args] = trimmed.split(' ');
  const command = cmd.toLowerCase();

  switch (command) {
    case 'clear':
    case 'cls':
      return { lines: [], clearRequested: true };

    case 'help':
      return {
        lines: [
          { text: "NEON//OS Command Line Interface v2.4.0", type: "system" },
          { text: "Available commands:", type: "system" },
          { text: "  whoami       - Display identity, role, and current status", type: "output" },
          { text: "  about        - View developer philosophy and engineering approach", type: "output" },
          { text: "  skills       - Query tech stack and proficiency ratings", type: "output" },
          { text: "  projects     - List selected production engineering projects", type: "output" },
          { text: "  contact      - Display communication channels and direct email", type: "output" },
          { text: "  status       - Inspect current developer availability & metrics", type: "output" },
          { text: "  clear        - Clear console buffer", type: "output" },
        ]
      };

    case 'whoami':
      return {
        lines: [
          { text: `IDENTITY: ${profile.name}`, type: "success" },
          { text: `ROLE: ${profile.role}`, type: "output" },
          { text: `LOCATION: ${profile.location}`, type: "output" },
          { text: `STATUS: ${profile.availabilityStatus}`, type: "output" },
        ]
      };

    case 'about':
      return {
        lines: [
          { text: `// BACKGROUND SUMMARY`, type: "system" },
          { text: profile.bio, type: "output" },
          { text: `Approach: ${profile.approach}`, type: "output" },
          { text: `Core Specialty: ${profile.specialty}`, type: "output" },
        ]
      };

    case 'skills':
      if (args[0] === '--verbose') {
        return {
          lines: [
            { text: `// FULL TECH MATRIX`, type: "system" },
            ...skills.map(s => ({
              text: `[${s.category}] ${s.name} (${s.level}) - ${s.description || ''}`,
              type: "output" as const
            }))
          ]
        };
      }
      return {
        lines: [
          { text: `// CORE TECH STACK`, type: "system" },
          { text: "Frontend: TypeScript, React, Tailwind CSS, JavaScript ESNext, HTML5/CSS3", type: "output" },
          { text: "Backend:  Node.js, Express, REST APIs, Microservices", type: "output" },
          { text: "Database: PostgreSQL, MongoDB, MySQL", type: "output" },
          { text: "Tooling:  Git, GitHub Actions, Vite, Chrome DevTools", type: "output" },
          { text: "Hint: Run 'skills --verbose' for full breakdown.", type: "system" }
        ]
      };

    case 'projects':
      return {
        lines: [
          { text: `// SELECTED WORK (${projects.length} PROJECTS RECORDED)`, type: "system" },
          ...projects.map(p => ({
            text: `* ${p.title} [${p.category}] - ${p.shortDescription} (Stack: ${p.techStack.slice(0, 3).join(', ')})`,
            type: "output" as const
          })),
          { text: "Scroll to // 03 — SELECTED WORK to inspect interactive live demos and case studies.", type: "success" }
        ]
      };

    case 'contact':
      return {
        lines: [
          { text: `// SECURE COMMS`, type: "system" },
          { text: `Direct Email: ${profile.email}`, type: "output" },
          { text: `GitHub:       ${profile.githubUrl}`, type: "output" },
          { text: `LinkedIn:     ${profile.linkedinUrl}`, type: "output" },
          { text: "Scroll to // 05 — INITIATE CONTACT or submit the contact form below.", type: "success" }
        ]
      };

    case 'status':
    case 'uptime':
      return {
        lines: [
          { text: `SYSTEM_STATUS: OPERATIONAL [200 OK]`, type: "success" },
          { text: `AVAILABILITY:  ${profile.availabilityStatus}`, type: "output" },
          { text: `FOCUS:         ${profile.currentStatus}`, type: "output" },
          { text: `CORE_VITALS:   LCP < 0.8s | CLS 0.00 | FID < 12ms`, type: "output" }
        ]
      };

    default:
      return {
        lines: [
          { text: `command not found: "${trimmed}". Type "help" for a list of valid commands.`, type: "error" }
        ]
      };
  }
}
