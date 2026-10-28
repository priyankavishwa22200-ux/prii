export interface DeveloperProfile {
  name: string;
  role: string;
  availabilityStatus: string;
  tagline: string;
  bio: string;
  approach: string;
  specialty: string;
  location: string;
  currentStatus: string;
  technicalInterests: string[];
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  resumeFileName: string;
  avatarPlaceholderText: string;
}

export type SkillLevel = 'Proficient' | 'Working knowledge' | 'Learning';

export interface SkillItem {
  name: string;
  level: SkillLevel;
  icon: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Developer tools';
  description?: string;
}

export interface CaseStudy {
  problemStatement: string;
  projectGoals: string[];
  targetUsers: string;
  myRole: string;
  techChoicesRationale: { tech: string; reason: string }[];
  architectureOverview: string;
  challengesAndSolutions: { challenge: string; solution: string }[];
  accessibilityAndPerf: string;
  resultsAndLearnings: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Full Stack' | 'Frontend' | 'Systems & AI' | 'Developer Tools';
  shortDescription: string;
  fullOverview: string;
  previewType: 'dashboard' | 'ecommerce' | 'analytics' | 'terminal';
  techStack: string[];
  specificContribution: string;
  technicalChallenge: string;
  githubUrl: string;
  demoUrl?: string;
  caseStudy: CaseStudy;
  featured?: boolean;
}

export interface TimelineItem {
  id: string;
  type: 'experience' | 'education' | 'milestone';
  role: string;
  organization: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface RepoHighlight {
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  url: string;
}

export interface ActivityCredibility {
  githubUsername: string;
  githubProfileUrl: string;
  contributionsNote: string;
  pinnedRepos: RepoHighlight[];
  verifiedMilestones: {
    label: string;
    value: string;
    detail: string;
  }[];
}
