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
  resumePath: "https://drive.google.com/uc?export=download&id=1Ivkz7_5eRYMmBya02PfTjBG8lRczVSEl",
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
// ==================== PROJECTS ====================
// ==================== PROJECTS ====================
export const PROJECTS = [
  {
    id: 1,
    title: "E-Learning Platform",
    description:
      "Modern e-learning platform with interactive courses, video lectures, progress tracking, and certification system.",
    image: "/projects/elearning-banner.webp",   // ✅ updated
    link: "https://elearn-pro-hyym.vercel.app",
    github: "https://github.com/Ajinkyakakade02/elearn-pro",
    technologies: ["React", "Spring Boot", "MySQL", "Tailwind"],
    icon: "📚",
  },
  {
    id: 2,
    title: "AI Content Moderation System",
    description:
      "AI-powered content moderation system that automatically detects and filters inappropriate content in real-time.",
    image: "/projects/content-mod-banner.webp", // ✅ updated
    link: "https://content-mod-ai.vercel.app",
    github: "https://github.com/Ajinkyakakade02",
    technologies: ["AI/ML", "React", "FastAPI", "TensorFlow"],
    icon: "🤖",
  },
  {
    id: 3,
    title: "Chat Application",
    description:
      "Instant messaging app with group chats, file sharing, emoji reactions, and real-time notifications.",
    image: "/projects/project-3.webp",   // unchanged (placeholder)
    link: "https://chat-nova02.vercel.app",
    github: "https://github.com/Ajinkyakakade02",
    technologies: ["WebSocket", "React", "TypeScript", "Spring Boot"],
    icon: "💬",
  },
  {
    id: 4,
    title: "Auto Email Extension",
    description:
      "AI-powered email generator that creates professional emails based on context, tone, and recipient.",
    image: "/projects/project-4.webp",   // unchanged (placeholder)
    link: "https://github.com/Ajinkyakakade02",
    github: "https://github.com/Ajinkyakakade02",
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

// ==================== SKILLS (REMOVED: Legacy arrays are no longer used) ====================
