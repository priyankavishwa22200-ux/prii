import { ProjectItem } from '../types/portfolio';

export function filterProjects(
  projects: ProjectItem[],
  selectedCategory: string,
  searchQuery: string = ''
): ProjectItem[] {
  return projects.filter((project) => {
    // Category match
    const matchesCategory =
      selectedCategory === 'All' ||
      project.category.toLowerCase() === selectedCategory.toLowerCase();

    if (!matchesCategory) return false;

    // Search query match (if any)
    const query = searchQuery.trim().toLowerCase();
    if (!query) return true;

    const matchesTitle = project.title.toLowerCase().includes(query);
    const matchesDesc = project.shortDescription.toLowerCase().includes(query);
    const matchesTech = project.techStack.some((tech) =>
      tech.toLowerCase().includes(query)
    );
    const matchesChallenge = project.technicalChallenge
      .toLowerCase()
      .includes(query);

    return matchesTitle || matchesDesc || matchesTech || matchesChallenge;
  });
}

export function extractUniqueCategories(projects: ProjectItem[]): string[] {
  const set = new Set<string>();
  set.add('All');
  for (const p of projects) {
    set.add(p.category);
  }
  return Array.from(set);
}
