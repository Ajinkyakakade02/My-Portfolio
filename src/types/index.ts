// src/types/index.ts
export interface NavLink {
  title: string;
  link: string;
}

export interface SocialLink {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  link: string;
}

export interface Skill {
  skill_name: string;
  image: string;
  width: number;
  height: number;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  github?: string;
  technologies: string[];
  icon: string;
}

export interface FooterData {
  title: string;
  data: {
    name: string;
    icon: React.ComponentType<{ className?: string }> | null;
    link: string;
  }[];
}

export interface Theme {
  isDark: boolean;
  toggleTheme: () => void;
  setTheme: (theme: 'light' | 'dark') => void;
}

export interface EncryptionStats {
  icon: React.ComponentType;
  title: string;
  description: string;
  color: string;
  value: string;
}

export interface HeroStats {
  value: string;
  label: string;
  delay: number;
  x: number;
  y: number;
}