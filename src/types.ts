export interface ProjectScreenshot {
  id: string;
  title: string;
  description: string;
  category: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  keyFeatures: string[];
  image: string;
  images?: string[];
  technologies?: string[];
  features?: string[];
  githubUrl: string;
  demoUrl: string;
  liveDemoUrl?: string;
  featured: boolean;
  architectureNotes?: string;
  screenshots?: ProjectScreenshot[];
}

export type SkillProficiency = 'Advanced' | 'Intermediate' | 'Familiar';

export type SkillCategoryType =
  | 'languages'
  | 'frontend'
  | 'backend_primary'
  | 'backend_secondary'
  | 'databases'
  | 'tools'
  | 'core_cs'
  | 'ai_assisted'
  | 'other';

export interface SkillItem {
  name: string;
  category: SkillCategoryType;
  icon: string;
  proficiency: SkillProficiency;
  badge?: string;
}

export interface Achievement {
  id: string;
  title: string;
  description?: string;
  icon: string;
  badge: string;
}

export interface AboutTrait {
  title: string;
  icon: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  responseTime: string;
}

