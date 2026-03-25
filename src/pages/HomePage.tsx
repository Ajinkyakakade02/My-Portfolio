// src/pages/HomePage.tsx
import React, { useState, useEffect, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
// Add these imports at the top of HomePage.tsx
import {
  FaShieldAlt, FaLock, FaKey,
  FaJs, FaReact, FaArrowRight, FaGithub, FaLinkedin, FaDownload, 
  FaGraduationCap, FaTrophy, FaMapMarkerAlt, FaPhone, 
  FaEnvelope, FaPaperPlane, FaCheckCircle,
  FaHtml5, FaCss3Alt, FaNodeJs, FaDocker, FaGitAlt, FaUser,
  FaFolderOpen, FaAward,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { 
  SiLeetcode, 
  SiTypescript, 
  SiTailwindcss, 
  SiSpringboot, 
  SiMongodb, 
  SiMysql, 
} from "react-icons/si";

import { useTheme } from "@/hooks/useTheme";
import { getImagePath, getVideoPath } from "@/lib/paths";
import {
  PROJECTS, siteConfig,
} from "@/constants";

// ==================== THEME HELPER ====================
const t = (theme: string, dark: string, light: string) =>
  theme === "dark" ? dark : light;

// ==================== TYPES ====================
interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  technologies: readonly string[];
  icon: React.ReactNode;
  github?: string;
}

// ==================== PROJECT CARD ====================
const ProjectCard = ({ title, description, image, link, technologies, icon, github }: ProjectCardProps) => {
  const [imgError, setImgError] = useState(false);
  const [hovered, setHovered] = useState(false);
  const { theme } = useTheme();

  return (
    <motion.div
      className={`group relative backdrop-blur-md rounded-2xl overflow-hidden border transition-all duration-300 cursor-pointer h-full flex flex-col ${t(
        theme,
        "bg-white/5 border-purple-500/30 hover:border-purple-500/60",
        "bg-white border-purple-300/30 hover:border-purple-400/60 shadow-sm"
      )}`}
      whileHover={{ y: -8 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => link !== "#" && window.open(link, "_blank")}
    >
      {/* Glow overlay */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br ${t(
        theme, "from-purple-500/10 to-cyan-500/10", "from-purple-400/10 to-cyan-400/10"
      )}`} />

      {/* Image */}
      <div className="relative overflow-hidden h-44 shrink-0">
        {!imgError ? (
          <motion.img
            src={getImagePath(image)}
            alt={title}
            className="w-full h-full object-cover"
            animate={{ scale: hovered ? 1.08 : 1 }}
            transition={{ duration: 0.4 }}
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-purple-900/50 to-cyan-900/50 flex items-center justify-center">
            <div className="text-5xl opacity-60">{icon}</div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm rounded-full w-9 h-9 flex items-center justify-center">
          <div className="text-lg">{icon}</div>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className={`text-lg font-bold mb-2 transition-colors duration-300 ${t(
          theme,
          "text-white group-hover:text-purple-400",
          "text-gray-900 group-hover:text-purple-600"
        )}`}>{title}</h3>

        <p className={`text-sm mb-4 line-clamp-2 flex-1 ${t(theme, "text-gray-400", "text-gray-600")}`}>
          {description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {technologies.map((tech) => (
            <span key={tech} className={`text-xs px-2 py-0.5 rounded-full border ${t(
              theme,
              "bg-purple-500/20 text-purple-300 border-purple-500/30",
              "bg-purple-100 text-purple-700 border-purple-200"
            )}`}>{tech}</span>
          ))}
        </div>

        <div className="flex items-center justify-between mt-auto">
          <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${t(
              theme, "text-purple-400 hover:text-purple-300", "text-purple-600 hover:text-purple-500"
            )}`}
            whileHover={{ x: 4 }}
            onClick={(e) => e.stopPropagation()}
          >
            <span>View Project</span>
            <FaArrowRight className="text-xs" />
          </motion.a>

          {github && github !== "#" && (
            <motion.a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors ${t(theme, "text-gray-400 hover:text-white", "text-gray-500 hover:text-gray-900")}`}
              whileHover={{ scale: 1.15 }}
              onClick={(e) => e.stopPropagation()}
            >
              <FaGithub className="text-lg" />
            </motion.a>
          )}
        </div>
      </div>

      {/* Bottom sweep */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500"
        initial={{ width: "0%" }}
        animate={{ width: hovered ? "100%" : "0%" }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

// ==================== HERO ====================
const HeroContent = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const { theme } = useTheme();
  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Side - Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Badge - Modern Glass Effect */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 }}
              className="relative inline-flex items-center gap-2 px-5 py-2 rounded-full border mb-6 text-sm font-medium backdrop-blur-sm bg-white/5 border-purple-500/30"
            >
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 animate-pulse" />
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Full Stack Developer | Spring Boot, React, Typescript, MySQL, MongoDB
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-purple-500 via-purple-400 to-cyan-500 bg-clip-text text-transparent">
                Transforming Ideas
              </span>
              <br />
              <span className="text-white">
                Into Digital Reality
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-lg mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed text-gray-300"
            >
              I'm <span className="font-semibold text-purple-400">Ajinkya Kakade</span>, 
              a passionate Full Stack Developer with expertise in React, Spring Boot, and cloud technologies. 
              I build end-to-end web applications that are scalable, secure, and user-friendly.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.65 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollTo("experience")}
                className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 opacity-90 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 blur-md group-hover:blur-lg transition-all" />
                <span className="relative z-10 text-sm font-semibold text-white flex items-center gap-2">
                  View My Work
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform text-sm" />
                </span>
              </motion.button>

              <motion.a
                href={siteConfig.resumePath}
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-xl overflow-hidden border border-purple-500/40"
              >
                <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative z-10 text-sm font-semibold text-purple-300 flex items-center gap-2">
                  <FaDownload className="text-sm" />
                  Get Resume
                </span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right side illustration - Modern Floating Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Central Illustration */}
              <div className="relative z-0">
                <img
                  src={getImagePath("/hero-bg.svg")}
                  alt="Hero Illustration"
                  className="w-full h-auto opacity-80"
                  onError={(e) => { e.currentTarget.style.display = "none"; }}
                />
              </div>

              {/* Central Glow Effect */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full blur-3xl pointer-events-none"
              />

              {/* 5+ Projects Card */}
              <motion.div
                animate={{ y: [0, -12, 0], x: [0, 4, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0 }}
                className="absolute backdrop-blur-xl rounded-2xl px-6 py-4 border shadow-2xl flex items-center gap-3 bg-white/10 border-purple-500/30"
                style={{ top: "10%", right: "-8%" }}
              >
                <div className="p-2 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20">
                  <FaFolderOpen className="text-2xl" style={{ color: "#a855f7" }} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">5+</div>
                  <div className="text-xs font-medium text-purple-300">Projects Completed</div>
                </div>
              </motion.div>

              {/* 100+ LeetCode Card */}
              <motion.div
                animate={{ y: [0, 12, 0], x: [0, -4, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                className="absolute backdrop-blur-xl rounded-2xl px-6 py-4 border shadow-2xl flex items-center gap-3 bg-white/10 border-cyan-500/30"
                style={{ bottom: "15%", left: "-8%" }}
              >
                <div className="p-2 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20">
                  <SiLeetcode className="text-2xl" style={{ color: "#f89f1c" }} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">100+</div>
                  <div className="text-xs font-medium text-cyan-300">LeetCode Problems</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  const [videoError, setVideoError] = useState(false);
  const { theme } = useTheme();
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        {!videoError ? (
          <>
            <video
              autoPlay muted loop playsInline
              className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover"
              style={{ transform: "translate(-50%, -50%) scaleY(-1)", filter: "brightness(0.45) contrast(1.3) saturate(1.2)" }}
              onError={() => setVideoError(true)}
            >
              <source src={getVideoPath("/videos/blackhole.webm")} type="video/webm" />
              <source src={getVideoPath("/videos/blackhole.mp4")}  type="video/mp4"  />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(0,0,0,0.5)_100%)]" />
          </>
        ) : (
          <div className={`absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-black`} />
        )}
      </div>
      <div className="relative z-10"><HeroContent /></div>
    </div>
  );
};

// ==================== SKILLS ====================
const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [videoError, setVideoError] = useState(false);
  const { theme } = useTheme();

  // Frontend Skills (Top Row)
  const frontendSkills = [
    { name: "HTML5", icon: FaHtml5, color: "#e34c26" },
    { name: "CSS3", icon: FaCss3Alt, color: "#264de4" },
    { name: "JavaScript", icon: FaJs, color: "#f7df1e" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
    { name: "React", icon: FaReact, color: "#61dafb" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06b6d4" },
  ];

  // Backend Skills (Middle Row)
  const backendSkills = [
    { name: "Node.js", icon: FaNodeJs, color: "#339933" },
    { name: "Spring Boot", icon: SiSpringboot, color: "#6db33f" },
    { name: "MySQL", icon: SiMysql, color: "#4479a1" },
    { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
  ];

  // DevOps Skills (Bottom Row)
  const devopsSkills = [
    { name: "Docker", icon: FaDocker, color: "#2496ed" },
    { name: "Git", icon: FaGitAlt, color: "#f05032" },
  ];

  return (
    <section id="skills" className="relative flex flex-col items-center gap-10 py-20 min-h-screen overflow-hidden">
      <div className="absolute inset-0 w-full h-full -z-10">
        {!videoError ? (
          <>
            <video autoPlay muted loop playsInline
              className="absolute top-0 left-0 w-full h-full object-cover"
              style={{ filter: "brightness(0.4) contrast(1.2) saturate(1.1)" }}
              onError={() => setVideoError(true)}
            >
              <source src={getVideoPath("/videos/skills-bg.webm")} type="video/webm" />
            </video>
            <div className="absolute inset-0 bg-black/70" />
            <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-cyan-900/20" />
          </>
        ) : (
          <div className={`absolute inset-0 ${t(theme, "bg-gradient-to-b from-purple-900/30 via-black to-black", "bg-gradient-to-b from-purple-200/50 via-gray-100 to-gray-200")}`} />
        )}
      </div>

      <div className="text-center max-w-4xl mx-auto px-4 z-10">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent"
        >
          My Tech Stack
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`text-lg mb-12 ${t(theme, "text-gray-300", "text-gray-600")}`}
        >
          Technologies I work with to build amazing digital experiences
        </motion.p>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 z-10">
        {/* Top Row - Frontend */}
        <div className="flex flex-row justify-center flex-wrap gap-6 pb-12">
          {frontendSkills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: idx * 0.03 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="relative group"
            >
              <div className={`backdrop-blur-sm rounded-xl p-4 border transition-all duration-300 ${t(
                theme,
                "bg-white/5 border-purple-500/30 hover:border-purple-500/60",
                "bg-black/5 border-purple-300/30 hover:border-purple-400/60"
              )}`}>
                <skill.icon className="text-5xl" style={{ color: skill.color }} />
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 0, y: 4 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.15 }}
                className="absolute -bottom-9 left-1/2 -translate-x-1/2 pointer-events-none z-20 whitespace-nowrap"
              >
                <div className={`text-white text-xs px-2 py-1 rounded shadow-lg border ${t(
                  theme,
                  "bg-gray-900 border-purple-500/30",
                  "bg-gray-800 border-purple-400/30"
                )}`}>
                  {skill.name}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Middle Row - Backend */}
        <div className="flex flex-row justify-center flex-wrap gap-6 pb-12">
          {backendSkills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: idx * 0.03 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="relative group"
            >
              <div className={`backdrop-blur-sm rounded-xl p-4 border transition-all duration-300 ${t(
                theme,
                "bg-white/5 border-purple-500/30 hover:border-purple-500/60",
                "bg-black/5 border-purple-300/30 hover:border-purple-400/60"
              )}`}>
                <skill.icon className="text-5xl" style={{ color: skill.color }} />
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 0, y: 4 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.15 }}
                className="absolute -bottom-9 left-1/2 -translate-x-1/2 pointer-events-none z-20 whitespace-nowrap"
              >
                <div className={`text-white text-xs px-2 py-1 rounded shadow-lg border ${t(
                  theme,
                  "bg-gray-900 border-purple-500/30",
                  "bg-gray-800 border-purple-400/30"
                )}`}>
                  {skill.name}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Row - DevOps */}
        <div className="flex flex-row justify-center flex-wrap gap-6">
          {devopsSkills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: idx * 0.03 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="relative group"
            >
              <div className={`backdrop-blur-sm rounded-xl p-4 border transition-all duration-300 ${t(
                theme,
                "bg-white/5 border-purple-500/30 hover:border-purple-500/60",
                "bg-black/5 border-purple-300/30 hover:border-purple-400/60"
              )}`}>
                <skill.icon className="text-5xl" style={{ color: skill.color }} />
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 0, y: 4 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.15 }}
                className="absolute -bottom-9 left-1/2 -translate-x-1/2 pointer-events-none z-20 whitespace-nowrap"
              >
                <div className={`text-white text-xs px-2 py-1 rounded shadow-lg border ${t(
                  theme,
                  "bg-gray-900 border-purple-500/30",
                  "bg-gray-800 border-purple-400/30"
                )}`}>
                  {skill.name}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}; 

// ==================== ENCRYPTION ====================
const Encryption = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [isHovered, setIsHovered] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [imgError, setImgError] = useState(false);
  const { theme } = useTheme();
  const navigate = useNavigate();

  const particles = useMemo(() =>
    Array.from({ length: 60 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top:  `${Math.random() * 100}%`,
      dur:  3 + Math.random() * 4,
      del:  Math.random() * 5,
      val:  `${Math.random() > 0.5 ? "0x" : "enc:"}${Math.floor(Math.random() * 0xffffff).toString(16)}`,
    })), []);

  // Cards data with correct navigation
  const cards = [
    {
      title: "About Me",
      description: "View my resume, tech stack, and achievements",
      icon: <FaUser />,
      accent: "purple",
      onClick: () => navigate("/about-me")
    },
    {
      title: "My Projects",
      description: "Explore all my completed projects with live links",
      icon: <FaFolderOpen />,
      accent: "cyan",
      onClick: () => navigate("/projects")
    },
    {
      title: "GitHub Profile",
      description: "Visit my GitHub profile and see my open-source work",
      icon: <FaGithub />,
      accent: "purple",
      onClick: () => navigate("/github")
    },
  ];

  return (
    <section id="encryption" className="relative w-full min-h-screen py-20 overflow-hidden">
      <div className="absolute inset-0">
        {!videoError ? (
          <>
            <video 
              autoPlay muted loop playsInline
              className="absolute top-0 left-0 w-full h-full object-cover"
              style={{ filter: "brightness(0.65) contrast(1.2) saturate(1.1)" }}
              onError={() => setVideoError(true)}
            >
              <source src={getVideoPath("/videos/encryption-bg.webm")} type="video/webm" />
              <source src={getVideoPath("/videos/encryption-bg.mp4")}  type="video/mp4"  />
            </video>
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030014]/40 via-transparent to-[#030014]/30" />
          </>
        ) : (
          <div className={`absolute inset-0 ${t(theme, "bg-gradient-to-b from-purple-900/30 via-black to-black", "bg-gradient-to-b from-purple-200/50 via-gray-100 to-gray-200")}`} />
        )}
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((p) => (
          <motion.div key={p.id}
            className="absolute text-xs text-cyan-400/40 font-mono whitespace-nowrap"
            initial={{ opacity: 0 }}
            animate={{ y: [0, -120], opacity: [0, 0.5, 0] }}
            transition={{ duration: p.dur, repeat: Infinity, delay: p.del, ease: "linear" }}
            style={{ left: p.left, top: p.top }}
          >{p.val}</motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            ref={ref}
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-purple-400 to-cyan-500 bg-clip-text text-transparent"
          >
            All about me
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className={`text-lg max-w-2xl mx-auto ${t(theme, "text-gray-300", "text-gray-600")}`}
          >
            Check out my work, projects, and get information about me
          </motion.p>
        </div>

        <div className="flex justify-center items-center mb-16">
          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full blur-3xl"
              animate={{ 
                scale: isHovered ? 1.3 : 1, 
                opacity: isHovered ? 0.5 : 0.3 
              }}
              transition={{ duration: 0.3 }}
              style={{ width: 400, height: 400, left: "50%", top: "50%", marginLeft: -200, marginTop: -200 }}
            />

            <motion.div
              className="absolute rounded-full border-2 border-purple-500/30"
              animate={{ 
                rotate: 360,
                scale: isHovered ? 1.15 : 1
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 0.3 }
              }}
              style={{ 
                width: 240, 
                height: 240, 
                left: "59%", 
                top: "55%", 
                marginLeft: -140, 
                marginTop: -140,
                borderTop: "2px solid rgba(139, 92, 246, 0.6)",
                borderRight: "2px solid rgba(6, 182, 212, 0.6)",
                borderBottom: "2px solid rgba(139, 92, 246, 0.6)",
                borderLeft: "2px solid rgba(6, 182, 212, 0.6)"
              }}
            />

            <motion.div
              className="absolute rounded-full border-2 border-cyan-500/30"
              animate={{ 
                rotate: -360,
                scale: isHovered ? 1.25 : 1.1
              }}
              transition={{ 
                rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                scale: { duration: 0.3 }
              }}
              style={{ 
                width: 300, 
                height: 300, 
                left: "55%", 
                top: "52%", 
                marginLeft: -160, 
                marginTop: -160,
                borderTop: "2px solid rgba(6, 182, 212, 0.4)",
                borderRight: "2px solid rgba(139, 92, 246, 0.4)",
                borderBottom: "2px solid rgba(6, 182, 212, 0.4)",
                borderLeft: "2px solid rgba(139, 92, 246, 0.4)"
              }}
            />

            <div
              className="relative flex justify-center items-center cursor-pointer"
              style={{ minHeight: 400 }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <motion.div 
                className="relative z-30"
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{ 
                  scale: { 
                    duration: 2.5, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    times: [0, 0.5, 1]
                  }
                }}
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.2 }
                }}
                onClick={() => navigate("/")}
              >
                {!imgError ? (
                  <img 
                    src={getImagePath("/lock.png")} 
                    alt="Lock"
                    className="w-[220px] h-[260px] md:w-[280px] md:h-[340px] object-contain cursor-pointer transition-all duration-300"
                    style={{ 
                      filter: isHovered 
                        ? "drop-shadow(0 0 30px rgba(139, 92, 246, 0.8))" 
                        : "drop-shadow(0 0 15px rgba(139, 92, 246, 0.5))"
                    }}
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className={`w-[220px] h-[260px] md:w-[280px] md:h-[340px] rounded-2xl border-2 shadow-2xl flex items-center justify-center cursor-pointer transition-all duration-300 ${t(theme, "bg-gradient-to-b from-gray-800 to-gray-900 border-purple-500/50", "bg-gradient-to-b from-gray-200 to-gray-300 border-purple-400/50")}`}>
                    <FaLock className={`text-8xl ${t(theme, "text-purple-400", "text-purple-600")}`} />
                  </div>
                )}
              </motion.div>

              {[...Array(12)].map((_, i) => {
                const angle = (i * 30) * (Math.PI / 180);
                const radius = 180;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                return (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-purple-500/60"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.4, 0.8, 0.4],
                      x: [x, x * 1.1, x],
                      y: [y, y * 1.1, y]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut"
                    }}
                    style={{
                      left: "50%",
                      top: "50%",
                      marginLeft: -4,
                      marginTop: -4,
                      transform: `translate(${x}px, ${y}px)`
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              onClick={card.onClick}
              className={`group relative backdrop-blur-md rounded-2xl p-6 cursor-pointer border transition-all duration-300 ${t(
                theme,
                "bg-white/5 border-purple-500/30 hover:border-purple-500/60",
                "bg-white border-purple-300/30 hover:border-purple-500/60 shadow-sm"
              )}`}
            >
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r ${t(
                theme,
                card.accent === "purple" ? "from-purple-500/10 to-cyan-500/10" : "from-cyan-500/10 to-purple-500/10",
                card.accent === "purple" ? "from-purple-400/10 to-cyan-400/10" : "from-cyan-400/10 to-purple-400/10"
              )}`} />
              
              <div className="relative z-10 text-center">
                <div className={`inline-flex p-4 rounded-2xl mb-4 group-hover:scale-110 transition-transform ${t(
                  theme,
                  card.accent === "purple" ? "bg-purple-500/20" : "bg-cyan-500/20",
                  card.accent === "purple" ? "bg-purple-100" : "bg-cyan-100"
                )}`}>
                  <div className={`text-4xl ${t(
                    theme,
                    card.accent === "purple" ? "text-purple-400" : "text-cyan-400",
                    card.accent === "purple" ? "text-purple-600" : "text-cyan-600"
                  )}`}>
                    {card.icon}
                  </div>
                </div>
                
                <h3 className={`text-xl font-bold mb-2 ${t(theme, "text-white", "text-gray-900")}`}>
                  {card.title}
                </h3>
                
                <p className={`text-sm leading-relaxed mb-4 ${t(theme, "text-gray-400", "text-gray-600")}`}>
                  {card.description}
                </p>
                
                <motion.div
                  className={`inline-flex items-center gap-2 text-sm font-medium ${t(
                    theme,
                    card.accent === "purple" ? "text-purple-400" : "text-cyan-400",
                    card.accent === "purple" ? "text-purple-600" : "text-cyan-600"
                  )}`}
                  whileHover={{ x: 5 }}
                >
                  <span>Click to explore</span>
                  <FaExternalLinkAlt className="text-xs" />
                </motion.div>
              </div>
              
              <div className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r ${
                card.accent === "purple" ? "from-purple-500 to-cyan-500" : "from-cyan-500 to-purple-500"
              }`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// ==================== EXPERIENCE ====================
const Experience = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const { theme } = useTheme();

  const experienceData = [
    {
      type: "education" as const,
      title: "Education", 
      icon: FaGraduationCap,
      color: "blue",
      summary: "Computer Engineering student with strong academic background",
      items: [
        {
          degree: "B.Tech in Computer Science & Engineering",
          institution: "Nutan College of Engineering & Research, Pune",
          period: "2023 – 2027",
          location: "Pune, India",
          description: "Currently pursuing with CGPA: 7.9/10. Focus on full-stack development and AI/ML.",
          tech: ["DSA", "OOP", "DBMS", "OS", "Networking"]
        },
        {
          degree: "Higher Secondary Certificate (HSC)",
          institution: "Sant Tukaram Maharaj High School",
          period: "2022",
          location: "Buldhana, India",
          description: "Science stream with 70.17%",
          tech: ["Physics", "Chemistry", "Mathematics"]
        },
        {
          degree: "Secondary School Certificate (SSC)",
          institution: "Deulgaon Raja High School",
          period: "2020",
          location: "Buldhana, India",
          description: "Completed with 80.82%",
          tech: ["Mathematics", "Science", "English"]
        }
      ]
    },
    {
      type: "certification" as const,
      title: "Certifications",
      icon: FaAward,
      color: "green",
      summary: "Professional certifications in AI/ML and edge computing",
      items: [
        {
          name: "AI on Jetson Nano",
          organization: "NVIDIA Deep Learning Institute",
          period: "2026",
          location: "Online",
          description: "Edge AI, computer vision, and model deployment on NVIDIA Jetson Nano",
          tech: ["Edge AI", "Computer Vision", "Deep Learning"]
        },
        {
          name: "Machine Learning with Python",
          organization: "IBM (Coursera)",
          period: "2025",
          location: "Online",
          description: "Supervised/unsupervised learning, regression, classification",
          tech: ["Python", "Scikit-learn", "Pandas", "NumPy"]
        },
        {
          name: "Lyzr AI Nation Skill-Up Program",
          organization: "GeeksforGeeks",
          period: "2025",
          location: "Online",
          description: "Generative AI, prompt engineering, and LLM applications",
          tech: ["Generative AI", "Prompt Engineering", "LLMs"]
        }
      ]
    },
    {
      type: "achievement" as const,
      title: "Achievements & Leadership",
      icon: FaTrophy,
      color: "yellow",
      summary: "Hackathon winner and technical leadership experience",
      items: [
        {
          title: "Software Engineer Intern",
          organization: "Crescify Pvt Ltd",
          period: "2025",
          location: "Remote",
          description: "Full-stack development using React, Spring Boot, and REST APIs",
          tech: ["React", "Spring Boot", "Java", "REST APIs"]
        },
        {
          title: "Smart India Hackathon — Team Lead & Winner",
          organization: "Government of India",
          period: "2024 & 2025",
          location: "India",
          description: "Led 6-member team to national-level win twice among 10,000+ teams",
          tech: ["React", "Spring Boot", "AI/ML", "AWS", "Leadership"]
        }
      ]
    }
  ];

  const getCardStyles = (color: string) => {
    switch (color) {
      case "blue":
        return {
          border: t(theme, "border-blue-500/30", "border-blue-300/30"),
          hover: t(theme, "hover:border-blue-500/60", "hover:border-blue-400/60"),
          bg: t(theme, "bg-blue-500/10", "bg-blue-50"),
          icon: t(theme, "text-blue-400", "text-blue-600"),
          tech: t(theme, "bg-blue-500/10 text-blue-300 border-blue-500/20", "bg-blue-50 text-blue-700 border-blue-200")
        };
      case "green":
        return {
          border: t(theme, "border-green-500/30", "border-green-300/30"),
          hover: t(theme, "hover:border-green-500/60", "hover:border-green-400/60"),
          bg: t(theme, "bg-green-500/10", "bg-green-50"),
          icon: t(theme, "text-green-400", "text-green-600"),
          tech: t(theme, "bg-green-500/10 text-green-300 border-green-500/20", "bg-green-50 text-green-700 border-green-200")
        };
      case "yellow":
        return {
          border: t(theme, "border-yellow-500/30", "border-yellow-300/30"),
          hover: t(theme, "hover:border-yellow-500/60", "hover:border-yellow-400/60"),
          bg: t(theme, "bg-yellow-500/10", "bg-yellow-50"),
          icon: t(theme, "text-yellow-400", "text-yellow-600"),
          tech: t(theme, "bg-yellow-500/10 text-yellow-300 border-yellow-500/20", "bg-yellow-50 text-yellow-700 border-yellow-200")
        };
      default:
        return {
          border: t(theme, "border-purple-500/30", "border-purple-300/30"),
          hover: t(theme, "hover:border-purple-500/60", "hover:border-purple-400/60"),
          bg: t(theme, "bg-purple-500/10", "bg-purple-50"),
          icon: t(theme, "text-purple-400", "text-purple-600"),
          tech: t(theme, "bg-purple-500/10 text-purple-300 border-purple-500/20", "bg-purple-50 text-purple-700 border-purple-200")
        };
    }
  };

  return (
    <section id="experience" className="relative py-20 px-4 overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-b ${t(theme, "from-transparent via-cyan-900/5 to-transparent", "from-transparent via-cyan-400/5 to-transparent")}`} />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <motion.h2
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent"
          >
            Experience & Education
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className={`text-lg mt-4 ${t(theme, "text-gray-400", "text-gray-600")}`}
          >
            My journey in technology and education
          </motion.p>
        </div>

        <div className="space-y-8">
          {experienceData.map((section, sectionIndex) => {
            const styles = getCardStyles(section.color);
            return (
              <motion.div
                key={section.type}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + sectionIndex * 0.1 }}
                className={`rounded-2xl border backdrop-blur-sm overflow-hidden transition-all duration-300 ${styles.border} ${styles.hover} ${t(
                  theme,
                  "bg-white/5",
                  "bg-white shadow-sm"
                )}`}
              >
                <div className={`p-6 border-b ${styles.border} ${styles.bg}`}>
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-xl ${styles.bg}`}>
                      <section.icon className={`text-3xl ${styles.icon}`} />
                    </div>
                    <div>
                      <h3 className={`text-2xl font-bold ${t(theme, "text-white", "text-gray-900")}`}>
                        {section.title}
                      </h3>
                      <p className={`text-sm mt-1 ${t(theme, "text-gray-400", "text-gray-600")}`}>
                        {section.summary}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="space-y-3">
                        <div>
                          <h4 className={`text-base font-semibold ${t(theme, "text-white", "text-gray-900")}`}>
                            {item.degree || item.name || item.title}
                          </h4>
                          <p className={`text-xs font-medium ${styles.icon} mt-0.5`}>
                            {item.institution || item.organization}
                          </p>
                          <div className="flex flex-wrap items-center justify-between gap-2 mt-1">
                            <span className={`text-xs ${t(theme, "text-cyan-400", "text-cyan-600")}`}>
                              {item.period}
                            </span>
                            <div className={`flex items-center gap-1 text-xs ${t(theme, "text-gray-500", "text-gray-500")}`}>
                              <FaMapMarkerAlt className="text-xs" />
                              {item.location}
                            </div>
                          </div>
                        </div>
                        
                        <p className={`text-xs leading-relaxed ${t(theme, "text-gray-400", "text-gray-600")}`}>
                          {item.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {item.tech.map((tech) => (
                            <span
                              key={tech}
                              className={`text-xs px-2 py-0.5 rounded-full border ${styles.tech}`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ==================== CONTACT ====================
const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const { theme } = useTheme();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    try {
      await new Promise((res) => setTimeout(res, 1500));
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch { setStatus("error"); }
  };

  const inputClass = `w-full px-4 py-3 rounded-xl border outline-none text-sm transition-all duration-200 focus:ring-2 focus:ring-purple-500/50 ${t(
    theme,
    "bg-white/5 border-purple-500/20 text-white placeholder-gray-500 focus:border-purple-500/60",
    "bg-gray-50 border-purple-200 text-gray-900 placeholder-gray-400 focus:border-purple-400"
  )}`;

  return (
    <section id="contact" className="relative py-20 px-4 overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-b ${t(theme, "from-transparent via-purple-900/10 to-transparent", "from-transparent via-purple-100/50 to-transparent")}`} />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <motion.h2
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className={`text-lg mt-4 max-w-xl mx-auto ${t(theme, "text-gray-400", "text-gray-600")}`}
          >
            Have a project in mind or just want to say hello? My inbox is always open.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <div className={`rounded-2xl p-6 border ${t(theme, "bg-white/5 border-purple-500/20", "bg-white border-purple-200 shadow-sm")}`}>
              <h3 className={`text-xl font-bold mb-4 ${t(theme, "text-white", "text-gray-900")}`}>Contact Info</h3>
              <div className="space-y-4">
                {[
                  { icon: FaEnvelope,    label: "Email",    value: siteConfig.email,    href: `mailto:${siteConfig.email}` },
                  { icon: FaPhone,       label: "Phone",    value: siteConfig.phone,    href: `tel:${siteConfig.phone.replace(/\s/g, "")}` },
                  { icon: FaMapMarkerAlt,label: "Location", value: siteConfig.location, href: "#" },
                ].map(({ icon: Icon, label, value, href }) => (
                  <a key={label} href={href}
                    className={`flex items-start gap-3 transition-colors ${t(theme, "text-gray-400 hover:text-purple-400", "text-gray-600 hover:text-purple-600")}`}
                  >
                    <div className={`mt-0.5 p-2 rounded-lg ${t(theme, "bg-purple-500/10", "bg-purple-50")}`}>
                      <Icon className={`text-sm ${t(theme, "text-purple-400", "text-purple-600")}`} />
                    </div>
                    <div>
                      <p className="text-xs opacity-60">{label}</p>
                      <p className="text-sm font-medium">{value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className={`rounded-2xl p-6 border ${t(theme, "bg-white/5 border-purple-500/20", "bg-white border-purple-200 shadow-sm")}`}>
              <h3 className={`text-lg font-bold mb-4 ${t(theme, "text-white", "text-gray-900")}`}>Check out my</h3>
              <div className="flex gap-3">
                {[
                  { icon: FaGithub,   href: siteConfig.github,   label: "GitHub"   },
                  { icon: FaLinkedin, href: siteConfig.linkedin, label: "LinkedIn" },
                  { icon: SiLeetcode, href: siteConfig.leetcode, label: "LeetCode" },
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                    whileHover={{ y: -3, scale: 1.1 }}
                    className={`p-3 rounded-xl border transition-all ${t(
                      theme,
                      "bg-white/5 border-purple-500/20 text-gray-400 hover:text-white hover:border-purple-500/50",
                      "bg-gray-50 border-purple-200 text-gray-500 hover:text-gray-900 hover:border-purple-300"
                    )}`}
                  >
                    <Icon className="text-lg" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className={`lg:col-span-3 rounded-2xl p-8 border ${t(theme, "bg-white/5 border-purple-500/20", "bg-white border-purple-200 shadow-sm")}`}
          >
            <AnimatePresence mode="wait">
              {status === "sent" ? (
                <motion.div key="success"
                  initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
                  className="flex flex-col items-center justify-center py-12 text-center gap-4"
                >
                  <FaCheckCircle className="text-5xl text-green-400" />
                  <h3 className={`text-xl font-bold ${t(theme, "text-white", "text-gray-900")}`}>Message Sent!</h3>
                  <p className={`text-sm ${t(theme, "text-gray-400", "text-gray-600")}`}>
                    Thanks for reaching out, {siteConfig.name.split(" ")[0]} will get back to you within 24 hours.
                  </p>
                  <button onClick={() => setStatus("idle")} className="mt-4 text-sm text-purple-400 hover:text-purple-300 underline underline-offset-4">
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={`block text-xs font-medium mb-1.5 ${t(theme, "text-gray-400", "text-gray-600")}`}>Name *</label>
                      <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your name" required className={inputClass} />
                    </div>
                    <div>
                      <label className={`block text-xs font-medium mb-1.5 ${t(theme, "text-gray-400", "text-gray-600")}`}>Email *</label>
                      <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" required className={inputClass} />
                    </div>
                  </div>
                  <div>
                    <label className={`block text-xs font-medium mb-1.5 ${t(theme, "text-gray-400", "text-gray-600")}`}>Subject</label>
                    <input type="text" name="subject" value={form.subject} onChange={handleChange} placeholder="Project Collaboration" className={inputClass} />
                  </div>
                  <div>
                    <label className={`block text-xs font-medium mb-1.5 ${t(theme, "text-gray-400", "text-gray-600")}`}>Message *</label>
                    <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell me about your project..." required rows={5} className={`${inputClass} resize-none`} />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={status === "sending"}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-600 py-3.5 rounded-xl font-semibold text-white shadow-lg hover:shadow-purple-500/25 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "sending" ? (
                      <>
                        <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                        </svg>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <><FaPaperPlane className="text-sm" /><span>Send Message</span></>
                    )}
                  </motion.button>
                  {status === "error" && (
                    <p className="text-sm text-red-400 text-center">
                      Something went wrong. Please email directly at{" "}
                      <a href={`mailto:${siteConfig.email}`} className="underline">{siteConfig.email}</a>
                    </p>
                  )}
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ==================== SCROLL TO TOP ====================
const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 flex items-center justify-center text-white shadow-lg hover:shadow-purple-500/30 transition-shadow"
          aria-label="Scroll to top"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

// ==================== MAIN EXPORT ====================
const HomePage = () => {
  const { theme } = useTheme();
  return (
    <div className={`min-h-screen overflow-x-hidden transition-colors duration-300 ${t(theme, "bg-[#030014]", "bg-white")}`}>
      <main>
        <section id="about-me"><Hero /></section>
        <section id="skills"><Skills /></section>
        <section id="encryption"><Encryption /></section>
        <section id="experience"><Experience /></section>
        <section id="contact"><Contact /></section>
      </main>
      <ScrollToTop />
    </div>
  );
};

export default HomePage;