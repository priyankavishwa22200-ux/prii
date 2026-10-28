# NEON//DEV — Futuristic Developer Portfolio & Workspace

A production-grade, highly responsive developer portfolio inspired by futuristic operating systems, terminal environments, and high-performance engineering product websites.

Built with **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Vite**.

---

## ⚡ Key Highlights & Architecture

- **Visual Identity ("NEON//DEV")**: Cyber-grid backdrop, electric violet accents, neon cyan highlights (`#55E6FF`), and dark slate surfaces (`#07090F`, `#0D111B`, `#111827`).
- **Interactive Workspace / Terminal**: Embedded side-by-side terminal that executes real commands (`whoami`, `about`, `skills`, `projects`, `contact`, `status`, `clear`) alongside syntax-highlighted TypeScript architecture code.
- **Centralized Data Model**: All personal data, projects, skills, education, and milestones live in `src/data/portfolioData.ts` for instant single-file customization.
- **Detailed Architectural Case Studies**: Comprehensive modal deep-dives covering problem statements, goals, tech rationale, challenges, solutions, and measurable outcomes.
- **Printable & Exportable Resume**: In-app modal CV with instant print-to-PDF (`window.print()`) and markdown file download.
- **Accessibility First**: WCAG 2.2 AA compliant, skip link, visible focus rings, aria-landmarks, aria-expanded, and keyboard operable modal dialogues.
- **Deterministic Unit Tests**: Pure functions decoupled into `src/utils/` and tested via Node's native test runner (`node:test` + `node:assert/strict`).

---

## 🛠️ Quickstart

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open `http://localhost:3000` to preview the portfolio.

### 3. Run Unit Tests
```bash
npx --yes tsx --test src/utils/*.test.ts
```

### 4. Build for Production
```bash
npm run build
```

---

## ⚙️ Customization Guide

### Updating Personal Information
Edit `src/data/portfolioData.ts`:
- **`developerProfile`**: Update your name, role, email, LinkedIn, GitHub, and bio.
- **`skillsData`**: Add, remove, or modify your tech stack items and proficiency levels.
- **`projectsData`**: Populate your genuine project repositories, live demo links, architecture descriptions, and case study solutions.
- **`timelineData`**: Add your internships, professional experience, degrees, and hackathon wins.
- **`activityCredibilityData`**: Configure your pinned GitHub repositories and key metric cards.

---

## 🚀 Deployment Guide

### Vercel
1. Push your repository to GitHub.
2. Import the repository in [Vercel](https://vercel.com).
3. Framework preset: **Vite**.
4. Build command: `npm run build`
5. Output directory: `dist`
6. Add environment variables from `.env.example`.

### Netlify
1. Connect your repository in [Netlify](https://netlify.com).
2. Build command: `npm run build`
3. Publish directory: `dist`

---

## 📋 Production Readiness Checklist

- [x] All navigation links smoothly scroll to sections without obscuring headers.
- [x] Interactive terminal handles typing, command history (up/down arrow), and quick-command pills.
- [x] Case study modal traps focus and closes with `Escape` or backdrop click.
- [x] Resume modal provides one-click print or markdown download.
- [x] Contact form validates required fields and proper email syntax before dispatch.
- [x] Tested at narrow mobile (375px), tablet (768px), and large desktop (1440px) viewports.
- [x] Zero console errors during interaction and clean production build.
