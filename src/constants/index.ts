// src/constants/index.ts
import {
  RxGithubLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { SiLeetcode } from "react-icons/si"; 

// ==================== SITE CONFIG ====================
export const siteConfig = {
  name: "Ajinkya Kakade",
  title: "Space Portfolio",
  role: "Full Stack Developer",
  tagline: "Providing the best project experience",
  description: "Full Stack Developer specializing in React, Spring Boot, and cloud-native applications.",
  email: "ajinkyakakde510@gmail.com",
  phone: "+91 7498717236",
  location: "Pune, Maharashtra, India",
  github: "https://github.com/Ajinkyakakade02",
  linkedin: "https://www.linkedin.com/in/ajinkya-kakade-981a55288/",
  leetcode: "https://leetcode.com/u/Ajinkya_kakade_02/",
  resumePath: "/My-Portfolio/Ajinkya_Kakade_Resume.pdf",
} as const;

// ==================== NAVIGATION ====================
// Single source of truth — used by Header, NavBar, Footer
export const NAV_LINKS = [
  { title: "Home",       link: "#about-me"   },
  { title: "Skills",     link: "#skills"     },
  { title: "Security",   link: "#encryption" },
  { title: "Projects",   link: "#projects"   },
  { title: "Experience", link: "#experience" },
  { title: "Contact",    link: "#contact"    },
] as const;

// ==================== SOCIAL LINKS ====================
export const SOCIALS = [
  { name: "GitHub",   icon: RxGithubLogo,   link: siteConfig.github   },
  { name: "LinkedIn", icon: RxLinkedinLogo, link: siteConfig.linkedin },
    { name: "LeetCode", icon: SiLeetcode,     link: siteConfig.leetcode },
] as const;

// ==================== PROJECTS ====================
export const PROJECTS = [
  {
    id: 1,
    title: "E-Learning Platform",
    description:
      "Modern e-learning platform with interactive courses, video lectures, progress tracking, and certification system.",
    image: "/projects/project-1.webp",
    link: "https://elearn-pro-hyym.vercel.app",
    github: "https://github.com/Ajinkyakakade02/elearn-pro",
    technologies: ["React", "Spring Boot", "MySQL", "Tailwind"],
    icon: "📚",
  },
  {
    id: 2,
    title: "Voice to Voice Translator",
    description:
      "Real-time voice translation app supporting 50+ languages with natural speech synthesis and accent detection.",
    image: "/projects/project-2.webp",
    link: "#",
    github: "#",
    technologies: ["E-Speak", "WebRTC", "AI/ML", "Speech Recognition"],
    icon: "🎤",
  },
  {
    id: 3,
    title: "Chat Application",
    description:
      "Instant messaging app with group chats, file sharing, emoji reactions, and real-time notifications.",
    image: "/projects/project-3.webp",
    link: "#",
    github: "#",
    technologies: ["WebSocket", "React", "TypeScript", "Spring Boot"],
    icon: "💬",
  },
  {
    id: 4,
    title: "Auto Email Extension",
    description:
      "AI-powered email generator that creates professional emails based on context, tone, and recipient.",
    image: "/projects/project-4.webp",
    link: "#",
    github: "#",
    technologies: ["Gemini API", "React", "Spring Boot", "OAuth"],
    icon: "✉️",
  },
] as const;

// ==================== EXPERIENCE / TIMELINE ====================
export const TIMELINE = [
  {
    type: "achievement" as const,
    title: "Smart India Hackathon — Team Lead & Winner",
    org: "Government of India",
    period: "2024 & 2025",
    location: "India",
    description:
      "Led a team of 6 to build an AI-powered solution selected at national level. Won consecutive years as team lead, demonstrating strong technical and leadership skills.",
    tech: ["React", "Spring Boot", "AI/ML", "AWS"],
  },
  {
    type: "education" as const,
    title: "B.E. Computer Engineering",
    org: "University of Pune",
    period: "2023 – 2027 (Expected)",
    location: "Pune, IN",
    description:
      "Currently pursuing Bachelor's in Computer Engineering. Final year project focus on real-time speech translation and AI systems. Active open-source contributor with 10+ GitHub stars.",
    tech: ["DSA", "OS", "Networking", "ML"],
  },
] as const;

// ==================== ACHIEVEMENTS ====================
export const ACHIEVEMENTS = [
  {
    title: "SIH Winner",
    year: "2024 & 2025",
    description: "National-level hackathon",
  },
  {
    title: "10+ GitHub Stars",
    year: "2026",
    description: "Open-source contributions",
  },
  {
    title: "B.E. CS Degree",
    year: "2027 (Expected)",
    description: "University of Pune",
  },
  {
    title: "SIH Team Lead",
    year: "2024 & 2025",
    description: "Successful project leadership",
  },
] as const;

// ==================== FOOTER DATA ====================
export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      { name: "GitHub", icon: RxGithubLogo, link: siteConfig.github },
    ],
  },
  {
    title: "Social Media",
    data: [
      { name: "LinkedIn", icon: RxLinkedinLogo, link: siteConfig.linkedin },
      { name: "LeetCode", icon: SiLeetcode,     link: siteConfig.leetcode }, 
    ],
  },
  {
    title: "About",
    data: [
      { name: "Contact Me", icon: null, link: `mailto:${siteConfig.email}` },
    ],
  },
] as const;

// ==================== SKILLS ====================
export const FRONTEND_SKILL = [
  { skill_name: "HTML",        image: "/skills/html.png",     width: 80, height: 80 },
  { skill_name: "CSS",         image: "/skills/css.png",      width: 80, height: 80 },
  { skill_name: "JavaScript",  image: "/skills/js.png",       width: 65, height: 65 },
  { skill_name: "TypeScript",  image: "/skills/ts.png",       width: 80, height: 80 },
  { skill_name: "React",       image: "/skills/react.png",    width: 80, height: 80 },
  { skill_name: "Tailwind CSS",image: "/skills/tailwind.png", width: 80, height: 80 },
] as const;

export const BACKEND_SKILL = [
  { skill_name: "Node.js",    image: "/skills/node.png",       width: 80, height: 80 },
  { skill_name: "Spring Boot",image: "/skills/springboot.png", width: 80, height: 80 },
  { skill_name: "MongoDB",    image: "/skills/mongodb.png",    width: 40, height: 40 },
  { skill_name: "PostgreSQL", image: "/skills/postgresql.png", width: 80, height: 80 },
  { skill_name: "MySQL",      image: "/skills/mysql.png",      width: 80, height: 80 },
] as const;

export const DEVOPS_SKILL = [
  { skill_name: "Docker",   image: "/skills/docker.png",   width: 80, height: 80 },
  { skill_name: "AWS",      image: "/skills/aws.png",      width: 80, height: 80 },
  { skill_name: "Figma",    image: "/skills/figma.png",    width: 80, height: 80 },
  { skill_name: "Firebase", image: "/skills/firebase.png", width: 80, height: 80 },
] as const;

// Legacy flat array (kept for backward compatibility)
export const SKILL_DATA = [
  ...FRONTEND_SKILL,
  ...BACKEND_SKILL,
  ...DEVOPS_SKILL,
] as const;