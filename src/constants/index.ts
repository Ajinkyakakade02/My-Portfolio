// src/constants/index.ts
// done
import { 
  RxGithubLogo, 
  RxInstagramLogo, 
  RxTwitterLogo, 
  RxLinkedinLogo 
} from "react-icons/rx";
import { FaFacebook } from "react-icons/fa";

// Navigation Links
export const NAV_LINKS = [
  { title: "About me", link: "#about-me" },
  { title: "Skills", link: "#skills" },
  { title: "Projects", link: "#projects" },
] as const;

// Social Links
export const SOCIALS = [
  { 
    name: "Instagram", 
    icon: RxInstagramLogo, 
    link: "https://instagram.com" 
  },
  { 
    name: "Facebook", 
    icon: FaFacebook, 
    link: "https://facebook.com" 
  },
  { 
    name: "Twitter", 
    icon: RxTwitterLogo, 
    link: "https://twitter.com" 
  },
] as const;

// Projects Data
export const PROJECTS = [
  {
    title: "E-Learning Platform",
    image: "/projects/project-1.webp",
    link: "https://elearn-pro-hyym.vercel.app",
  },
  {
    title: "Voice to Voice Translator",
    image: "/projects/project-2.webp",
    link: "https://voice-translator.vercel.app",
  },
  {
    title: "Real-Time Chat Application",
    image: "/projects/project-3.webp",
    link: "https://chat-app.vercel.app",
  },
  {
    title: "Auto Email Generator",
    image: "/projects/project-3.webp",
    link: "https://email-generator.vercel.app",
  },
] as const;

// Footer Data - UPDATED
export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      { 
        name: "GitHub", 
        icon: RxGithubLogo, 
        link: "https://github.com/Ajinkyakakade02"
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/ajinkyakakade",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:ajinkya@example.com",
      },
    ],
  },
] as const;

// SKILLS DATA
export const SKILL_DATA = [
  { skill_name: "HTML", image: "/skills/html.png", width: 80, height: 80 },
  { skill_name: "CSS", image: "/skills/css.png", width: 80, height: 80 },
  { skill_name: "JavaScript", image: "/skills/js.png", width: 65, height: 65 },
  { skill_name: "TypeScript", image: "/skills/ts.png", width: 80, height: 80 },
  { skill_name: "React", image: "/skills/react.png", width: 80, height: 80 },
  { skill_name: "Tailwind CSS", image: "/skills/tailwind.png", width: 80, height: 80 },
  { skill_name: "Node.js", image: "/skills/node.png", width: 80, height: 80 },
  { skill_name: "MongoDB", image: "/skills/mongodb.png", width: 40, height: 40 },
  { skill_name: "PostgreSQL", image: "/skills/postgresql.png", width: 80, height: 80 },
  { skill_name: "MySQL", image: "/skills/mysql.png", width: 80, height: 80 },
  { skill_name: "Docker", image: "/skills/docker.png", width: 80, height: 80 },
  { skill_name: "Figma", image: "/skills/figma.png", width: 80, height: 80 },
  { skill_name: "Firebase", image: "/skills/firebase.png", width: 80, height: 80 },
] as const;

// Frontend Skills
export const FRONTEND_SKILL = [
  { skill_name: "HTML", image: "/skills/html.png", width: 80, height: 80 },
  { skill_name: "CSS", image: "/skills/css.png", width: 80, height: 80 },
  { skill_name: "JavaScript", image: "/skills/js.png", width: 65, height: 65 },
  { skill_name: "TypeScript", image: "/skills/ts.png", width: 80, height: 80 },
  { skill_name: "React", image: "/skills/react.png", width: 80, height: 80 },
  { skill_name: "Tailwind CSS", image: "/skills/tailwind.png", width: 80, height: 80 },
] as const;

// Backend Skills
export const BACKEND_SKILL = [
  { skill_name: "Node.js", image: "/skills/node.png", width: 80, height: 80 },
  { skill_name: "MongoDB", image: "/skills/mongodb.png", width: 40, height: 40 },
  { skill_name: "PostgreSQL", image: "/skills/postgresql.png", width: 80, height: 80 },
  { skill_name: "MySQL", image: "/skills/mysql.png", width: 80, height: 80 },
] as const;

// DevOps & Tools
export const DEVOPS_SKILL = [
  { skill_name: "Docker", image: "/skills/docker.png", width: 80, height: 80 },
  { skill_name: "Figma", image: "/skills/figma.png", width: 80, height: 80 },
  { skill_name: "Firebase", image: "/skills/firebase.png", width: 80, height: 80 },
] as const;

// Full Stack Skills
export const FULLSTACK_SKILL = [] as const;

// Other Skills
export const OTHER_SKILL = [] as const;

// Site Config - UPDATED
export const siteConfig = {
  name: "Space Portfolio",
  description: "A modern portfolio showcasing skills and projects",
  author: "Ajinkya Kakade",
  email: "ajinkya@example.com",
  github: "https://github.com/Ajinkyakakade02",
  linkedin: "https://linkedin.com/in/ajinkyakakade",
  twitter: "https://twitter.com/ajinkyakakade",
};
