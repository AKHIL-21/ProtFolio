export interface Skill {
  name: string;
  icon: string;
}

export interface ProjectLinks {
  view?: string;
  code?: string;
}

export interface Project {
  name: string;
  tagline?: string;
  desc: string;
  tech?: string[];
  /** Art theme id consumed by <app-project-art>: 'modernization' | 'surety' | 'activity'. */
  art: string;
  category: string;
  links?: ProjectLinks;
}
