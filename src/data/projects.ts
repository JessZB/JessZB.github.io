import identityData from './identity.json';

export interface Project {
  slug: string;
  title: string;
  description: { es: string; en: string };
  fullDescription: { es: string; en: string };
  category: 'own' | 'collab';
  status: 'completed' | 'in-progress';
  images: string[];
  techs: string[];
  tools: string[];
  demo?: string;
  code?: string;
  color: 'primary' | 'secondary' | 'highlight' | 'accent';
  timeWorked: { es: string; en: string };
  featured?: boolean;
  problemsSolved?: { es: string; en: string };
  keyFeatures?: { es: string[]; en: string[] };
  architecture?: { es: string; en: string };
}

// Convert from identity.json format to the Project interface
export const projects: Project[] = identityData.projects.map(project => ({
  slug: project.slug,
  title: project.title,
  description: {
    es: project.description_es,
    en: project.description_en
  },
  fullDescription: {
    es: project.fullDescription_es,
    en: project.fullDescription_en
  },
  category: project.category as 'own' | 'collab',
  status: project.status as 'completed' | 'in-progress',
  images: project.images,
  techs: project.techs,
  tools: project.tools,
  demo: project.demo,
  code: project.code,
  color: project.color as 'primary' | 'secondary' | 'highlight' | 'accent',
  timeWorked: {
    es: project.timeWorked_es,
    en: project.timeWorked_en
  },
  featured: project.featured,
  problemsSolved: project.problemsSolved_es
    ? { es: project.problemsSolved_es, en: project.problemsSolved_en }
    : undefined,
  keyFeatures: project.keyFeatures_es
    ? { es: project.keyFeatures_es, en: project.keyFeatures_en }
    : undefined,
  architecture: project.architecture_es
    ? { es: project.architecture_es, en: project.architecture_en }
    : undefined,
}));

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}

export function getRelatedProjects(slug: string, limit: number = 3): Project[] {
  return projects.filter(p => p.slug !== slug).slice(0, limit);
}

