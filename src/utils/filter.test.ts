import test from 'node:test';
import assert from 'node:assert/strict';
import { filterProjects, extractUniqueCategories } from './filter';
import { ProjectItem } from '../types/portfolio';

const mockProjects: ProjectItem[] = [
  {
    id: 'p1',
    title: 'Alpha Stream',
    category: 'Full Stack',
    shortDescription: 'Realtime telemetry pipeline with websockets',
    fullOverview: '',
    previewType: 'dashboard',
    techStack: ['React', 'TypeScript', 'Node.js'],
    specificContribution: '',
    technicalChallenge: 'High throughput memory buffering',
    githubUrl: '',
    caseStudy: {} as any
  },
  {
    id: 'p2',
    title: 'Neon Store',
    category: 'Frontend',
    shortDescription: 'Modern e-commerce UI with instant filtering',
    fullOverview: '',
    previewType: 'ecommerce',
    techStack: ['React', 'Tailwind CSS'],
    specificContribution: '',
    technicalChallenge: 'Layout shift prevention',
    githubUrl: '',
    caseStudy: {} as any
  },
  {
    id: 'p3',
    title: 'AI Matrix',
    category: 'Systems & AI',
    shortDescription: 'Conversational LLM interface with syntax tree parsing',
    fullOverview: '',
    previewType: 'terminal',
    techStack: ['Python', 'TypeScript'],
    specificContribution: '',
    technicalChallenge: 'Token streaming synchronization',
    githubUrl: '',
    caseStudy: {} as any
  }
];

test('filterProjects handles All category correctly', () => {
  const result = filterProjects(mockProjects, 'All');
  assert.equal(result.length, 3);
});

test('filterProjects filters by specific category', () => {
  const frontendOnly = filterProjects(mockProjects, 'Frontend');
  assert.equal(frontendOnly.length, 1);
  assert.equal(frontendOnly[0].title, 'Neon Store');
});

test('filterProjects filters by search query matching tech stack or title', () => {
  const tsSearch = filterProjects(mockProjects, 'All', 'Node.js');
  assert.equal(tsSearch.length, 1);
  assert.equal(tsSearch[0].id, 'p1');

  const streamSearch = filterProjects(mockProjects, 'All', 'telemetry');
  assert.equal(streamSearch.length, 1);
  assert.equal(streamSearch[0].title, 'Alpha Stream');
});

test('extractUniqueCategories returns all distinct categories with All prepended', () => {
  const cats = extractUniqueCategories(mockProjects);
  assert.deepEqual(cats, ['All', 'Full Stack', 'Frontend', 'Systems & AI']);
});
