// src/config/index.ts

export const siteConfig = {
  name: "Space Portfolio",
  title: "Space Portfolio | Full Stack Developer",
  description: "Welcome to my full stack developer portfolio showcasing skills and projects",
  author: {
    name: "Ajinkya Kakade",
    email: "ajinkya@example.com",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
  },
  keywords: ["portfolio", "developer", "fullstack", "react", "typescript", "tailwind"],
  url: "https://your-portfolio.vercel.app",
  socialLinks: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
  },
  navLinks: [
    { title: "About me", href: "#about-me" },
    { title: "Skills", href: "#skills" },
    { title: "Projects", href: "#projects" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;