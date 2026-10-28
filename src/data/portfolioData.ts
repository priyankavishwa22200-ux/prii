import { DeveloperProfile, SkillItem, ProjectItem, TimelineItem, ActivityCredibility } from '../types/portfolio';

export const developerProfile: DeveloperProfile = {
  name: "Alex Vance", // Editable: [YOUR NAME]
  role: "Full-Stack Software Engineer", // Editable: [YOUR ROLE]
  availabilityStatus: "AVAILABLE FOR OPPORTUNITIES",
  tagline: "Building digital experiences for the next generation.",
  bio: "Hi, I'm Alex Vance, a software engineer focused on building fast, accessible, and scalable web experiences.",
  approach: "I bridge user-centric frontend engineering with robust distributed system architectures, prioritizing measurable performance, accessible UI primitives, and clean code ergonomics.",
  specialty: "High-Performance Web Applications & Distributed UI Systems",
  location: "San Francisco, CA (Open to Remote)", // Editable: [YOUR LOCATION]
  currentStatus: "Seeking Full-Time Software Engineering Roles & High-Impact Internships",
  technicalInterests: [
    "Modern React Architecture",
    "Systems Performance & Core Web Vitals",
    "Design Systems & WCAG 2.2 Accessibility",
    "Micro-Frontends & Cloud-Native APIs",
    "Developer Tooling & DX"
  ],
  email: "alex.vance.dev@gmail.com", // Editable: [YOUR EMAIL]
  githubUrl: "https://github.com/alexvance-dev", // Editable: [YOUR GITHUB URL]
  linkedinUrl: "https://linkedin.com/in/alexvance-dev", // Editable: [YOUR LINKEDIN URL]
  resumeFileName: "Alex_Vance_Software_Engineer_Resume.pdf",
  avatarPlaceholderText: "AV"
};

export const skillsData: SkillItem[] = [
  // Frontend
  { name: "TypeScript", level: "Proficient", icon: "Code2", category: "Frontend", description: "Strict typing, generics, AST utilities" },
  { name: "React", level: "Proficient", icon: "Layers", category: "Frontend", description: "Hooks, Server Components, State machines" },
  { name: "Tailwind CSS", level: "Proficient", icon: "Palette", category: "Frontend", description: "Design tokens, utility-first UI, responsive styling" },
  { name: "JavaScript (ESNext)", level: "Proficient", icon: "Braces", category: "Frontend", description: "Async/await, Event loop, DOM APIs" },
  { name: "HTML5 & Semantics", level: "Proficient", icon: "FileCode", category: "Frontend", description: "WCAG 2.2 AA accessibility, semantic landmarks" },
  { name: "CSS3 & Modern Layouts", level: "Proficient", icon: "Sparkles", category: "Frontend", description: "Grid, Flexbox, custom properties, animations" },

  // Backend
  { name: "Node.js", level: "Proficient", icon: "Server", category: "Backend", description: "Event-driven runtime, streams, worker threads" },
  { name: "Express", level: "Proficient", icon: "Cpu", category: "Backend", description: "RESTful architecture, middleware pipelines, security" },
  { name: "REST APIs", level: "Proficient", icon: "Network", category: "Backend", description: "Contract testing, OpenAPI schemas, rate limiting" },

  // Database
  { name: "PostgreSQL", level: "Working knowledge", icon: "Database", category: "Database", description: "Relational modeling, indexing, ACID compliance" },
  { name: "MongoDB", level: "Working knowledge", icon: "HardDrive", category: "Database", description: "Document schemas, aggregation pipelines, Mongoose" },
  { name: "MySQL", level: "Working knowledge", icon: "ServerCrash", category: "Database", description: "Normalized schemas, transaction handling, query tuning" },

  // Developer tools
  { name: "Git", level: "Proficient", icon: "GitBranch", category: "Developer tools", description: "Interactive rebasing, branching workflows, bisect" },
  { name: "GitHub", level: "Proficient", icon: "Github", category: "Developer tools", description: "CI/CD Actions, code review, issue automation" },
  { name: "Vite", level: "Proficient", icon: "Zap", category: "Developer tools", description: "Rollup bundling, lightning-fast HMR, build optimization" },
  { name: "npm / pnpm", level: "Proficient", icon: "Package", category: "Developer tools", description: "Dependency graph auditing, script automation" },
  { name: "VS Code", level: "Proficient", icon: "Laptop", category: "Developer tools", description: "Debugger setups, custom snippets, workspace config" },
  { name: "Chrome DevTools", level: "Proficient", icon: "Terminal", category: "Developer tools", description: "Performance profiling, memory audits, network tracing" },
];

export const projectsData: ProjectItem[] = [
  {
    id: "devflow",
    title: "DevFlow",
    category: "Full Stack",
    shortDescription: "A developer productivity dashboard with task management, project organization, and a clean responsive interface.",
    fullOverview: "DevFlow unifies kanban sprint tracking, Git repository issue synchronization, and distraction-free developer timers into a high-performance desktop-grade web application.",
    previewType: "dashboard",
    techStack: ["React 19", "TypeScript", "Tailwind CSS", "Node.js", "Express", "Vite"],
    specificContribution: "Architected the full frontend state management system using immutable reducers, integrated local optimistic UI updates, and built the responsive multi-view sprint board.",
    technicalChallenge: "Eliminating UI stutter during rapid drag-and-drop operations with 500+ synchronized task cards through virtualized DOM rendering and pointer-event debouncing.",
    githubUrl: "https://github.com/alexvance-dev/devflow",
    demoUrl: "https://devflow-demo.example.com",
    featured: true,
    caseStudy: {
      problemStatement: "Developers often juggle separate apps for sprint tasks, terminal notes, and timer trackers, causing context switching overhead and fragmented focus.",
      projectGoals: [
        "Consolidate daily developer workflows into one unified, low-latency dashboard.",
        "Deliver sub-50ms interaction response times for all card reordering and status transitions.",
        "Ensure full keyboard navigation with customizable hotkeys."
      ],
      targetUsers: "Individual software engineers, tech leads, and agile development squads seeking a minimal, distraction-free productivity environment.",
      myRole: "Lead Frontend Engineer & Architecture Designer",
      techChoicesRationale: [
        { tech: "React 19 + TypeScript", reason: "Zero-runtime type safety across task contracts and concurrent rendering support for smooth UI updates." },
        { tech: "Tailwind CSS", reason: "Atomic CSS architecture ensuring minimal CSS bundle size (<12kB gzipped) and rapid design system tokens." },
        { tech: "Node.js / Express backend", reason: "Lightweight JSON API with streaming task updates and secure JWT authentication." }
      ],
      architectureOverview: "Client-side unidirectional state flow with optimistic cache updates, backed by an Express REST gateway with rate-limiting and structured JSON validation.",
      challengesAndSolutions: [
        {
          challenge: "Rendering hundreds of cards on lower-tier mobile hardware caused layout thrashing during drag interactions.",
          solution: "Implemented virtualized list rendering with CSS `transform: translate3d` hardware acceleration and requestAnimationFrame scheduling."
        },
        {
          challenge: "State desynchronization when offline or encountering unstable network connections.",
          solution: "Built an indexedDB queue that caches offline mutations and replays them sequentially with idempotent transaction IDs upon reconnection."
        }
      ],
      accessibilityAndPerf: "Tested against WCAG 2.2 AA. Achieved 98+ Lighthouse scores across Performance, Accessibility, and Best Practices. Fully operable via Tab, Arrow keys, and Space/Enter.",
      resultsAndLearnings: [
        "Verified sub-35ms drag response latency across benchmark tests.",
        "Gained deep expertise in browser rendering pipelines, paint containment, and optimistic mutations.",
        "Adopted by 40+ engineering peers for daily sprint management during prototype rollout."
      ]
    }
  },
  {
    id: "commerceos",
    title: "CommerceOS",
    category: "Frontend",
    shortDescription: "An e-commerce experience featuring product discovery, filtering, shopping cart interactions, and responsive product pages.",
    fullOverview: "A next-generation storefront engineered for instant product filtering, dynamic faceted search, and an accessible fly-out cart with localized tax and shipping previews.",
    previewType: "ecommerce",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Motion", "Vite"],
    specificContribution: "Designed and built the faceted filtering engine, animated interactive cart drawer, and high-performance product gallery with zero layout shift.",
    technicalChallenge: "Implementing instant multi-attribute facet filtering (price, category, brand, rating) over thousands of catalog items without blocking the main browser thread.",
    githubUrl: "https://github.com/alexvance-dev/commerce-os",
    demoUrl: "https://commerceos-demo.example.com",
    featured: true,
    caseStudy: {
      problemStatement: "Traditional e-commerce storefronts suffer from heavy bundle weights, jarring layout shifts during image loads, and clumsy multi-step cart experiences.",
      projectGoals: [
        "Deliver instant zero-delay catalog search and category filtering.",
        "Provide seamless cart drawer animations with keyboard traps and screen reader announcements.",
        "Maintain strict Cumulative Layout Shift (CLS) of 0.00 across all responsive breakpoints."
      ],
      targetUsers: "Online shoppers expecting snappy mobile checkout and design-forward consumer electronics exploration.",
      myRole: "UI/UX & Frontend Engineer",
      techChoicesRationale: [
        { tech: "TypeScript", reason: "Guarantees strict currency calculation precision and product schema integrity." },
        { tech: "Motion", reason: "Physics-based spring animations for natural cart drawer interactions and fluid product card layout transitions." },
        { tech: "Vite", reason: "Blazing fast build pipeline with automated asset hashing and optimal code splitting." }
      ],
      architectureOverview: "Modular component hierarchy separating presentation from filter predicates, utilizing React context for global cart synchronization and LocalStorage hydration.",
      challengesAndSolutions: [
        {
          challenge: "Handling complex combinatory facet filters caused laggy UI feedback during rapid user clicking.",
          solution: "Offloaded multi-criteria array filtering to a custom memoized hook with inverted index caching."
        },
        {
          challenge: "Cart flyout accessibility: Screen readers lost focus when modal opened or closed.",
          solution: "Implemented an accessible focus trap with WAI-ARIA dialog attributes, restoring user focus to the activator button on exit."
        }
      ],
      accessibilityAndPerf: "100 Lighthouse Accessibility score. Visible high-contrast focus rings, ARIA live regions for cart quantity updates, and full mobile touch-target compliance (>48px).",
      resultsAndLearnings: [
        "Zero layout shifts measured via PerformanceObserver in synthetic testing.",
        "Mastered accessible modal dialog ergonomics and fluid spring physics."
      ]
    }
  },
  {
    id: "pulse-analytics",
    title: "Pulse Analytics",
    category: "Full Stack",
    shortDescription: "A data visualization dashboard with reusable chart components, summary metrics, and interactive filters.",
    fullOverview: "An enterprise telemetry and operational monitoring console providing realtime latency distributions, request throughput graphs, and customizable widget grids.",
    previewType: "analytics",
    techStack: ["React", "TypeScript", "Tailwind CSS", "SVG Data Viz", "Express API"],
    specificContribution: "Built custom, accessible SVG chart primitives (time-series, donut distribution, sparklines) without relying on heavy external charting libraries.",
    technicalChallenge: "Rendering dynamic 60fps time-series graphs with smooth bezier curves and responsive coordinate mapping across dynamic viewport resizing.",
    githubUrl: "https://github.com/alexvance-dev/pulse-analytics",
    demoUrl: "https://pulse-demo.example.com",
    featured: true,
    caseStudy: {
      problemStatement: "Commercial charting libraries often bloat client bundle sizes by 300kB+ and provide poor accessibility support for screen reader users.",
      projectGoals: [
        "Construct ultra-lightweight (<15kB), dependency-free SVG chart components.",
        "Support interactive hover tooltips with exact timestamp and percentile metrics.",
        "Provide accessible tabular data alternatives for assistive technologies."
      ],
      targetUsers: "DevOps engineers and engineering leads monitoring system health, API uptime, and infrastructure costs.",
      myRole: "Full Stack Engineer",
      techChoicesRationale: [
        { tech: "Custom SVG Primitives", reason: "Eliminates heavy 3rd-party charting packages, allowing complete control over rendering math and styling." },
        { tech: "TypeScript Matrix Math", reason: "Pure math functions for min/max domain scaling and smooth cubic bezier SVG path interpolation." }
      ],
      architectureOverview: "Decoupled domain projection math from visual SVG markup. Summary stat cards feed from a normalized time-series data pipeline.",
      challengesAndSolutions: [
        {
          challenge: "SVG tooltips flickering or getting clipped near container edges on mobile devices.",
          solution: "Designed an auto-reversing boundary collision algorithm that flips tooltip orientation when within 80px of viewport borders."
        },
        {
          challenge: "Chart data was completely opaque to screen reader software.",
          solution: "Coupled every chart with a visually hidden, accessible `<table>` landmark synchronized with the active filter range."
        }
      ],
      accessibilityAndPerf: "High color contrast ratios (>5.5:1), ARIA descriptions, and minimal repaint footprint. Total charting bundle size is under 8kB.",
      resultsAndLearnings: [
        "Achieved 60fps graph renders on both mobile and desktop screens.",
        "Deepened understanding of SVG path commands (`M`, `C`, `Z`), viewbox math, and accessible data storytelling."
      ]
    }
  },
  {
    id: "ai-workspace",
    title: "AI Workspace",
    category: "Systems & AI",
    shortDescription: "An AI-assisted workspace concept with a conversational interface, organized outputs, and reusable UI components.",
    fullOverview: "A futuristic AI playground interface featuring structured prompt templates, token-streaming simulation, syntax-highlighted code blocks, and markdown export tools.",
    previewType: "terminal",
    techStack: ["React 19", "TypeScript", "Tailwind CSS", "REST Proxy API", "Motion"],
    specificContribution: "Engineered the streaming message buffer, collapsible prompt template library, and interactive code block sandbox with one-click copy and run capabilities.",
    technicalChallenge: "Preventing UI jank and reflow while streaming incoming chunks at 60 tokens/second through auto-scrolling virtual text buffers.",
    githubUrl: "https://github.com/alexvance-dev/ai-workspace",
    demoUrl: "https://ai-workspace-demo.example.com",
    featured: false,
    caseStudy: {
      problemStatement: "Most conversational AI user interfaces lack structured document organization, clean code block extraction, and fine-grained prompt versioning.",
      projectGoals: [
        "Create an ergonomic, distraction-free environment for interacting with generative AI workflows.",
        "Support formatted markdown output, code block execution preview, and persistent conversation history.",
        "Provide snappy keyboard-first navigation (Cmd+Enter to execute, Esc to blur)."
      ],
      targetUsers: "Engineers, technical writers, and researchers leveraging AI models for code generation and drafting technical documentation.",
      myRole: "Frontend Systems Developer",
      techChoicesRationale: [
        { tech: "React 19 Hooks", reason: "Leveraging useTransition and concurrent rendering to prioritize user input over high-frequency stream updates." },
        { tech: "Tailwind CSS + JetBrains Mono", reason: "Precise monospace font alignment for code snippets and futuristic terminal-inspired UI tokens." }
      ],
      architectureOverview: "Server-side proxy endpoint protecting API credentials, pushing SSE/JSON chunks to a client state machine with stream debouncing.",
      challengesAndSolutions: [
        {
          challenge: "High-frequency token streaming overwhelmed React state updates, leading to dropped frames.",
          solution: "Implemented an adaptive batching queue that buffers incoming tokens and flushes to state on requestAnimationFrame ticks."
        },
        {
          challenge: "Auto-scroll would violently yank the screen if the user manually scrolled up to inspect previous responses.",
          solution: "Built a user-intent scroll listener that disables sticky auto-scroll whenever the user scrolls upward by more than 40px."
        }
      ],
      accessibilityAndPerf: "Keyboard operable commands, semantic landmark sections, and WCAG AA contrast compliance across dark-mode palettes.",
      resultsAndLearnings: [
        "Demonstrates solid command over concurrent React, streaming protocol handling, and responsive terminal UX."
      ]
    }
  }
];

export const timelineData: TimelineItem[] = [
  {
    id: "exp-1",
    type: "experience",
    role: "Frontend Software Engineer Intern",
    organization: "Apex Systems Labs", // Sample starter organization
    period: "May 2024 — Aug 2024",
    location: "San Francisco, CA",
    description: "Contributed to core frontend infrastructure, reusable component libraries, and performance optimization for customer-facing web dashboards.",
    achievements: [
      "Collaborated with senior engineers to migrate legacy UI modules to TypeScript, boosting type coverage to 92%.",
      "Engineered reusable table and filter components adopted by 3 internal engineering teams.",
      "Optimized client-side bundle size by 24% through tree-shaking and dynamic route-based imports."
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Jest", "Git"]
  },
  {
    id: "exp-2",
    type: "experience",
    role: "Full-Stack Web Developer (Contract / Capstone)",
    organization: "Nexis Digital Solutions",
    period: "Jan 2024 — Apr 2024",
    location: "Remote",
    description: "Built client portal prototypes and integrated authenticated REST endpoints with PostgreSQL schemas.",
    achievements: [
      "Designed and deployed 12+ REST endpoints using Node.js and Express with automated input validation.",
      "Constructed responsive UI pages following WCAG 2.1 AA accessibility guidelines."
    ],
    technologies: ["Node.js", "Express", "PostgreSQL", "React", "REST APIs"]
  },
  {
    id: "edu-1",
    type: "education",
    role: "B.S. in Computer Science",
    organization: "University of Technology", // Editable: [YOUR EDUCATION]
    period: "2021 — 2025 (Expected)",
    location: "California, USA",
    description: "Relevant coursework in Data Structures & Algorithms, Distributed Systems, Software Engineering Methodologies, Database Management, and Web Architecture.",
    achievements: [
      "Dean's Honor List (Multiple Semesters)",
      "Lead Organizer for Campus Hackathon (200+ participants)"
    ],
    technologies: ["Algorithms", "Data Structures", "System Design", "Operating Systems", "Networking"]
  },
  {
    id: "milestone-1",
    type: "milestone",
    role: "Open Source Contributor & Hackathon Winner",
    organization: "HackGlobal 2024",
    period: "Nov 2024",
    location: "San Francisco, CA",
    description: "Won 1st Place in the Developer Tooling category for building an open-source accessibility audit CLI tool.",
    achievements: [
      "Created an automated CLI tool that scans web components for missing ARIA attributes and color contrast issues.",
      "Received 120+ GitHub stars within the first two weeks of release."
    ],
    technologies: ["TypeScript", "Node.js", "Accessibility", "Open Source"]
  }
];

export const activityCredibilityData: ActivityCredibility = {
  githubUsername: "alexvance-dev",
  githubProfileUrl: "https://github.com/alexvance-dev",
  contributionsNote: "Verified GitHub repositories, open-source commits, and active software projects maintained in public repositories.",
  pinnedRepos: [
    {
      name: "devflow-core",
      description: "Low-latency developer task & sprint orchestration workspace built with React 19 and Node.js.",
      language: "TypeScript",
      stars: 142,
      forks: 28,
      url: "https://github.com/alexvance-dev/devflow"
    },
    {
      name: "a11y-scan-engine",
      description: "Fast headless accessibility checking engine for automated CI/CD pipeline integration.",
      language: "TypeScript",
      stars: 89,
      forks: 14,
      url: "https://github.com/alexvance-dev/a11y-scan-engine"
    },
    {
      name: "cyber-ui-tokens",
      description: "Futuristic dark mode design system tokens and accessible React primitives.",
      language: "CSS / TS",
      stars: 64,
      forks: 9,
      url: "https://github.com/alexvance-dev/cyber-ui-tokens"
    }
  ],
  verifiedMilestones: [
    { label: "Core Tech Focus", value: "React + TS", detail: "5+ production-grade web apps" },
    { label: "Code Quality", value: "98%+", detail: "Consistently high Lighthouse metrics" },
    { label: "A11y Standard", value: "WCAG 2.2 AA", detail: "Keyboard-navigable & screen-reader friendly" },
    { label: "Target Roles", value: "SWE / Frontend", detail: "Full-Time & Internship Ready" }
  ]
};
