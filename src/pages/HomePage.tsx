// src/pages/HomePage.tsx
import { useState, useRef, useEffect} from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate, useLocation} from "react-router-dom";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import {
  FaJs, FaReact, FaArrowRight, FaGithub, FaLinkedin, FaDownload,
  FaMapMarkerAlt, FaPhone,
  FaEnvelope, FaPaperPlane, FaCheckCircle,
  FaHtml5, FaCss3Alt, FaNodeJs, FaDocker, FaGitAlt, FaUser,
  FaFolderOpen,
  FaKey,
  FaJava,
  FaPython,
  FaServer,
  FaExternalLinkAlt,
} from "react-icons/fa";
import {
  SiLeetcode,
  SiTypescript,
  SiTailwindcss,
  SiSpringboot,
  SiSpring,
  SiMongodb,
  SiMysql,
  SiSpringsecurity,
  SiPostgresql,
  SiRedis,
} from "react-icons/si";

import { useTheme } from "@/hooks/useTheme";
import { getImagePath, getVideoPath } from "@/lib/paths";
import { siteConfig, PROJECTS } from "@/constants";
import { getAccentClasses, type AccentColor } from "@/lib/colorStyles";

// ==================== THEME HELPER ====================
const t = (theme: string, dark: string, light: string) =>
  theme === "dark" ? dark : light;

// ==================== HERO ====================
const HeroContent = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const prefersReducedMotion = useReducedMotion();
  const { theme } = useTheme();

  return (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <motion.div
            ref={ref}
            initial={prefersReducedMotion ? false : { opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: -10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 }}
              className={`relative inline-flex items-center gap-2 px-5 py-2 rounded-full border mb-6 text-sm font-medium backdrop-blur-sm ${t(
                theme,
                "bg-white/5 border-purple-500/30",
                "bg-black/5 border-purple-400/40"
              )}`}
            >
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 animate-pulse" />
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Full Stack Developer | Spring Boot, React, Typescript, MySQL, MongoDB
              </span>
            </motion.div>

            <motion.h1
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-purple-500 via-purple-400 to-cyan-500 bg-clip-text text-transparent">
                Transforming Ideas
              </span>
              <br />
              <span className={t(theme, "text-white", "text-gray-900")}>
                Into Digital Reality
              </span>
            </motion.h1>

            <motion.p
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className={`text-lg mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed ${t(
                theme,
                "text-gray-300",
                "text-gray-600"
              )}`}
            >
              I'm <span className="font-semibold text-purple-400">Ajinkya Kakade</span>,
              a passionate Full Stack Developer with expertise in React, Spring Boot, and cloud technologies.
              I build end-to-end web applications that are scalable, secure, and user-friendly.
            </motion.p>

            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.65 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const section = document.getElementById("view-my-work");
                  if (section) {
                    section.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });
                  }
                }}
                className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-xl overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-400"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 opacity-90 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 blur-md group-hover:blur-lg transition-all" />
                <span className="relative z-10 text-sm font-semibold text-white flex items-center gap-2">
                  View My Work
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform text-sm" aria-hidden="true" />
                </span>
              </motion.button>

              <motion.a
                href={siteConfig.resumePath}
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-xl overflow-hidden border border-purple-500/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-400"
              >
                <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative z-10 text-sm font-semibold text-purple-300 flex items-center gap-2">
                  <FaDownload className="text-sm" aria-hidden="true" />
                  Get Resume
                </span>
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-md">
              <img
                src={getImagePath("/hero-bg.svg")}
                alt=""
                loading="eager"
                decoding="async"
                className="w-full h-auto opacity-80"
                onError={(e) => { e.currentTarget.style.display = "none"; }}
              />
              <motion.div
                animate={
                  prefersReducedMotion
                    ? {}
                    : { scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }
                }
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full blur-3xl pointer-events-none"
              />

              <motion.div
                animate={prefersReducedMotion ? {} : { y: [0, -12, 0], x: [0, 4, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0 }}
                className={`absolute backdrop-blur-xl rounded-2xl px-6 py-4 border shadow-2xl flex items-center gap-3 ${t(
                  theme,
                  "bg-white/10 border-purple-500/30",
                  "bg-white border-purple-300/50"
                )}`}
                style={{ top: "10%", right: "-8%" }}
              >
                <div className="p-2 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20">
                  <FaFolderOpen className="text-2xl" style={{ color: "#a855f7" }} aria-hidden="true" />
                </div>
                <div>
                  <div className={`text-2xl font-bold ${t(theme, "text-white", "text-gray-900")}`}>5+</div>
                  <div className="text-xs font-medium text-purple-400">Projects Completed</div>
                </div>
              </motion.div>

              <motion.div
                animate={prefersReducedMotion ? {} : { y: [0, 12, 0], x: [0, -4, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                className={`absolute backdrop-blur-xl rounded-2xl px-6 py-4 border shadow-2xl flex items-center gap-3 ${t(
                  theme,
                  "bg-white/10 border-cyan-500/30",
                  "bg-white border-cyan-300/50"
                )}`}
                style={{ bottom: "15%", left: "-8%" }}
              >
                <div className="p-2 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20">
                  <SiLeetcode className="text-2xl" style={{ color: "#f89f1c" }} aria-hidden="true" />
                </div>
                <div>
                  <div className={`text-2xl font-bold ${t(theme, "text-white", "text-gray-900")}`}>200+</div>
                  <div className="text-xs font-medium text-cyan-400">LeetCode Problems</div>
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
  const prefersReducedMotion = useReducedMotion();

  const showVideo = !videoError && !prefersReducedMotion && theme === "dark";

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        {showVideo ? (
          <>
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="none"
              aria-hidden="true"
              className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover"
              style={{
                transform: "translate(-50%, -50%) scaleY(-1)",
                filter: "brightness(0.45) contrast(1.3) saturate(1.2)",
              }}
              onError={() => setVideoError(true)}
            >
              <source src={getVideoPath("/videos/blackhole.webm")} type="video/webm" />
              <source src={getVideoPath("/videos/blackhole.mp4")} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(0,0,0,0.5)_100%)]" />
          </>
        ) : (
          <div
            className={`absolute inset-0 bg-gradient-to-br ${t(
              theme,
              "from-purple-900 via-black to-black",
              "from-purple-100 via-white to-cyan-50"
            )}`}
          />
        )}
      </div>
      <div className="relative z-10">
        <HeroContent />
      </div>
    </div>
  );
};

// ==================== SKILLS ====================
const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [videoError, setVideoError] = useState(true);
  const { theme } = useTheme();
  const prefersReducedMotion = useReducedMotion();

  const frontendSkills = [
    { name: "HTML5", icon: FaHtml5, color: "#e34c26" },
    { name: "CSS3", icon: FaCss3Alt, color: "#264de4" },
    { name: "JavaScript", icon: FaJs, color: "#f7df1e" },
    { name: "React", icon: FaReact, color: "#61dafb" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06b6d4" },
    
  ];

  const backendSkills = [
    { name: "Java", icon: FaJava, color: "#007396" },
    { name: "Python", icon: FaPython, color: "#3776AB" },
    { name: "Spring", icon: SiSpring, color: "#6db33f" },
    { name: "Spring Boot", icon: SiSpringboot, color: "#6db33f" },
    { name: "Spring Security", icon: SiSpringsecurity, color: "#6db33f" },
    { name: "REST APIs", icon: FaServer, color: "#9ca3af" },
  ];

  const databaseSkills = [
    { name: "MySQL", icon: SiMysql, color: "#4479a1" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
    { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
    { name: "Redis", icon: SiRedis, color: "#DC382D" },
    { name: "Git", icon: FaGitAlt, color: "#f05032" },
    { name: "Docker", icon: FaDocker, color: "#2496ed" },
  ];

  const sections: { title: string; skills: typeof frontendSkills; accent: AccentColor }[] = [
    { title: "Frontend", skills: frontendSkills, accent: "purple" },
    { title: "Backend", skills: backendSkills, accent: "cyan" },
    { title: "Database & DevOps", skills: databaseSkills, accent: "green" },
  ];

  return (
    <section id="skills" className="relative flex flex-col items-center gap-10 py-20 min-h-screen overflow-hidden">
      <div className="absolute inset-0 w-full h-full -z-10">
        {!videoError && theme === "dark" && !prefersReducedMotion ? (
          <>
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="none"
              aria-hidden="true"
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
          <div
            className={`absolute inset-0 ${t(
              theme,
              "bg-gradient-to-b from-purple-900/30 via-black to-black",
              "bg-gradient-to-b from-purple-200/50 via-gray-100 to-gray-200"
            )}`}
          />
        )}
      </div>

      <div className="text-center max-w-4xl mx-auto px-4 z-10">
        <motion.h2
          ref={ref}
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent"
        >
          My Tech Stack
        </motion.h2>
        <motion.p
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`text-lg mb-12 ${t(theme, "text-gray-300", "text-gray-600")}`}
        >
          Technologies I work with to build amazing digital experiences
        </motion.p>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sections.map((section, idx) => {
            const accent = getAccentClasses(section.accent, theme);
            return (
              <motion.div
                key={section.title}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                className={`rounded-2xl border backdrop-blur-sm p-6 transition-all duration-300 ${t(
                  theme,
                  "bg-white/5",
                  "bg-white shadow-sm"
                )} ${accent.cardBorder} ${accent.cardBorderHover}`}
              >
                <h3 className={`text-2xl font-semibold mb-6 text-center ${accent.text}`}>
                  {section.title}
                </h3>

                <div className="flex flex-row justify-center flex-wrap gap-6">
                  {section.skills.map((skill, idx2) => (
                    <motion.div
                      key={skill.name}
                      initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 + idx2 * 0.04 }}
                      whileHover={{ scale: 1.15, y: -4 }}
                      className="relative group flex flex-col items-center"
                    >
                      <div
                        className={`backdrop-blur-sm rounded-xl p-4 border transition-all duration-300 ${t(
                          theme,
                          "bg-white/5 border-purple-500/30 hover:border-purple-500/60",
                          "bg-black/5 border-purple-300/30 hover:border-purple-400/60"
                        )}`}
                      >
                        <skill.icon className="text-5xl" style={{ color: skill.color }} aria-hidden="true" />
                      </div>
                      <span className={`text-xs mt-2 text-center ${t(theme, "text-gray-400", "text-gray-600")}`}>
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ==================== PROJECTS SECTION (kept but not rendered on homepage) ====================
// You can keep or delete this component – it's not used in the main return.
const ProjectsSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const { theme } = useTheme();
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="projects" className="relative py-20 px-4 overflow-hidden">
      <div
        className={`absolute inset-0 bg-gradient-to-b ${t(
          theme,
          "from-transparent via-purple-900/10 to-transparent",
          "from-transparent via-purple-400/10 to-transparent"
        )}`}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <motion.h2
            ref={ref}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent"
          >
            My Projects
          </motion.h2>
          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className={`text-lg max-w-2xl mx-auto ${t(theme, "text-gray-400", "text-gray-600")}`}
          >
            Click on any project to visit the live website
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project, index) => {
            const isLive = (project.link as string) !== "#";
            return (
              <motion.div
                key={project.id}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + index * 0.1 }}
                whileHover={{ y: -6 }}
                role={isLive ? "link" : undefined}
                tabIndex={isLive ? 0 : undefined}
                onClick={() => isLive && window.open(project.link, "_blank", "noopener,noreferrer")}
                onKeyDown={(e) => {
                  if (isLive && (e.key === "Enter" || e.key === " ")) {
                    e.preventDefault();
                    window.open(project.link, "_blank", "noopener,noreferrer");
                  }
                }}
                className={`group relative backdrop-blur-md rounded-2xl overflow-hidden border transition-all duration-300 h-full flex flex-col ${
                  isLive ? "cursor-pointer" : "cursor-default"
                } ${t(
                  theme,
                  "bg-white/5 border-purple-500/30 hover:border-purple-500/60",
                  "bg-white border-purple-300/30 hover:border-purple-400/60 shadow-sm"
                )} ${isLive ? "focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-400" : ""}`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={getImagePath(project.image)}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      target.onerror = null;
                      target.src = `data:image/svg+xml,${encodeURIComponent(
                        `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200">
                          <rect width="100%" height="100%" fill="#1a1040"/>
                          <text x="50%" y="50%" fill="#9333ea" font-family="sans-serif" font-size="20"
                            text-anchor="middle" dominant-baseline="middle">${project.title}</text>
                        </svg>`
                      )}`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 text-4xl">{project.icon}</div>
                  {isLive && (
                    <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <FaExternalLinkAlt className="text-white text-xs" aria-hidden="true" />
                    </div>
                  )}
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3
                    className={`text-xl font-bold mb-2 ${t(
                      theme,
                      "text-white group-hover:text-purple-400",
                      "text-gray-900 group-hover:text-purple-600"
                    )} transition-colors`}
                  >
                    {project.title}
                  </h3>
                  <p className={`text-sm mb-4 leading-relaxed flex-1 ${t(theme, "text-gray-400", "text-gray-600")}`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`text-xs px-2 py-1 rounded-full border ${t(
                          theme,
                          "bg-purple-500/20 text-purple-300 border-purple-500/30",
                          "bg-purple-100 text-purple-700 border-purple-200"
                        )}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-400 rounded ${t(
                        theme,
                        "text-purple-400 hover:text-purple-300",
                        "text-purple-600 hover:text-purple-500"
                      )}`}
                      whileHover={{ x: 4 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span>View Project</span>
                      <FaArrowRight className="text-xs" aria-hidden="true" />
                    </motion.a>
                    {project.github && (project.github as string) !== "#" && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} on GitHub`}
                        className={`transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-400 rounded ${t(
                          theme,
                          "text-gray-400 hover:text-white",
                          "text-gray-500 hover:text-gray-900"
                        )}`}
                        whileHover={{ scale: 1.15 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaGithub className="text-lg" />
                      </motion.a>
                    )}
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ==================== VIEW MY WORK (Cards) ====================
const ViewMyWork = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const { theme } = useTheme();
  const prefersReducedMotion = useReducedMotion();
  const navigate = useNavigate();

  const cards = [
    {
      title: "About Me",
      description: "View my resume, tech stack, and achievements",
      icon: <FaUser />,
      accent: "purple" as AccentColor,
      onClick: () => navigate("/about-me"),
    },
    {
      title: "My Projects",
      description: "Explore all my completed projects with live links",
      icon: <FaFolderOpen />,
      accent: "cyan" as AccentColor,
      onClick: () => navigate("/projects"),
    },
    {
      title: "GitHub Profile",
      description: "Visit my GitHub profile and see my open-source work",
      icon: <FaGithub />,
      accent: "purple" as AccentColor,
      onClick: () => navigate("/github"),
    },
  ];

  return (
    <section id="view-my-work" className="relative py-20 px-4 overflow-hidden">
      <div
        className={`absolute inset-0 bg-gradient-to-b ${t(
          theme,
          "from-transparent via-purple-900/10 to-transparent",
          "from-transparent via-purple-400/10 to-transparent"
        )}`}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <motion.h2
            ref={ref}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent"
          >
            View My Work
          </motion.h2>
          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className={`text-lg max-w-2xl mx-auto ${t(theme, "text-gray-400", "text-gray-600")}`}
          >
            Explore my professional information and projects
          </motion.p>
        </div>

        {/* ✅ 3 cards in a single horizontal row on desktop */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {cards.map((card, index) => {
            const accent = getAccentClasses(card.accent, theme);
            return (
              <motion.div
                key={card.title}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                onClick={card.onClick}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    card.onClick();
                  }
                }}
                className={`group relative backdrop-blur-md rounded-2xl p-6 cursor-pointer border transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-400 ${t(
                  theme,
                  "bg-white/5",
                  "bg-white shadow-sm"
                )} ${accent.cardBorder} ${accent.cardBorderHover}`}
              >
                <div
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r ${t(
                    theme,
                    card.accent === "purple" ? "from-purple-500/10 to-cyan-500/10" : "from-cyan-500/10 to-purple-500/10",
                    card.accent === "purple" ? "from-purple-400/10 to-cyan-400/10" : "from-cyan-400/10 to-purple-400/10"
                  )}`}
                />

                <div className="relative z-10 text-center">
                  <div
                    className={`inline-flex p-4 rounded-2xl mb-4 group-hover:scale-110 transition-transform ${t(
                      theme,
                      card.accent === "purple" ? "bg-purple-500/20" : "bg-cyan-500/20",
                      card.accent === "purple" ? "bg-purple-100" : "bg-cyan-100"
                    )}`}
                  >
                    <div className={`text-4xl ${accent.text}`} aria-hidden="true">
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
                    className={`inline-flex items-center gap-2 text-sm font-medium ${accent.text}`}
                    whileHover={{ x: 5 }}
                  >
                    <span>Click to explore</span>
                    <FaExternalLinkAlt className="text-xs" aria-hidden="true" />
                  </motion.div>
                </div>

                <div
                  className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r ${
                    card.accent === "purple" ? "from-purple-500 to-cyan-500" : "from-cyan-500 to-purple-500"
                  }`}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

// ==================== CONTACT ====================
const MAX_MESSAGE_LENGTH = 1000;

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const { theme } = useTheme();
  const prefersReducedMotion = useReducedMotion();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const honeypotRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    if (honeypotRef.current?.value) {
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
      return;
    }

    setStatus("sending");
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID",
        {
          from_name: form.name,
          to_name: siteConfig.name,
          from_email: form.email,
          to_email: siteConfig.email,
          subject: form.subject,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY"
      );
      setStatus("sent");
      toast.success("Message sent successfully!");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setStatus("error");
      toast.error("Failed to send message. Please try again later.");
      console.error("EmailJS Error:", error);
    }
  };

  const inputClass = `w-full px-4 py-3 rounded-xl border outline-none text-sm transition-all duration-200 focus:ring-2 focus:ring-purple-500/50 ${t(
    theme,
    "bg-white/5 border-purple-500/20 text-white placeholder-gray-500 focus:border-purple-500/60",
    "bg-gray-50 border-purple-200 text-gray-900 placeholder-gray-400 focus:border-purple-400"
  )}`;

  return (
    <section id="contact" className="relative py-20 px-4 overflow-hidden">
      <div
        className={`absolute inset-0 bg-gradient-to-b ${t(
          theme,
          "from-transparent via-purple-900/10 to-transparent",
          "from-transparent via-purple-100/50 to-transparent"
        )}`}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <motion.h2
            ref={ref}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className={`text-lg mt-4 max-w-xl mx-auto ${t(theme, "text-gray-400", "text-gray-600")}`}
          >
            Have a project in mind or just want to say hello? My inbox is always open.
          </motion.p>
        </div>

        {/* Grid with equal height columns */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">
          {/* Left Column - Contact Info + Social */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-6 h-full"
          >
            {/* Contact Info Card */}
            <div className={`rounded-2xl p-6 border flex-1 ${t(theme, "bg-white/5 border-purple-500/20", "bg-white border-purple-200 shadow-sm")}`}>
              <h3 className={`text-xl font-bold mb-4 ${t(theme, "text-white", "text-gray-900")}`}>Contact Info</h3>
              <div className="space-y-4">
                {[
                  { icon: FaEnvelope, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
                  { icon: FaPhone, label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/\s/g, "")}` },
                  { icon: FaMapMarkerAlt, label: "Location", value: siteConfig.location, href: undefined },
                ].map(({ icon: Icon, label, value, href }) =>
                  href ? (
                    <a
                      key={label}
                      href={href}
                      className={`flex items-start gap-3 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-400 rounded ${t(
                        theme,
                        "text-gray-400 hover:text-purple-400",
                        "text-gray-600 hover:text-purple-600"
                      )}`}
                    >
                      <div className={`mt-0.5 p-2 rounded-lg ${t(theme, "bg-purple-500/10", "bg-purple-50")}`}>
                        <Icon className={`text-sm ${t(theme, "text-purple-400", "text-purple-600")}`} aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-xs opacity-60">{label}</p>
                        <p className="text-sm font-medium">{value}</p>
                      </div>
                    </a>
                  ) : (
                    <div key={label} className={`flex items-start gap-3 ${t(theme, "text-gray-400", "text-gray-600")}`}>
                      <div className={`mt-0.5 p-2 rounded-lg ${t(theme, "bg-purple-500/10", "bg-purple-50")}`}>
                        <Icon className={`text-sm ${t(theme, "text-purple-400", "text-purple-600")}`} aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-xs opacity-60">{label}</p>
                        <p className="text-sm font-medium">{value}</p>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Social Card */}
            <div className={`rounded-2xl p-6 border flex-1 ${t(theme, "bg-white/5 border-purple-500/20", "bg-white border-purple-200 shadow-sm")}`}>
              <h3 className={`text-lg font-bold mb-4 ${t(theme, "text-white", "text-gray-900")}`}>Check out my</h3>
              <div className="flex gap-3">
                {[
                  { icon: FaGithub, href: siteConfig.github, label: "GitHub" },
                  { icon: FaLinkedin, href: siteConfig.linkedin, label: "LinkedIn" },
                  { icon: SiLeetcode, href: siteConfig.leetcode, label: "LeetCode" },
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ y: -3, scale: 1.1 }}
                    className={`p-3 rounded-xl border transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-400 ${t(
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

          {/* Right Column - Form Card */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="lg:col-span-3 h-full"
          >
            <div className={`rounded-2xl p-8 border h-full ${t(theme, "bg-white/5 border-purple-500/20", "bg-white border-purple-200 shadow-sm")}`}>
              <AnimatePresence mode="wait">
                {status === "sent" ? (
                  <motion.div
                    key="success"
                    role="status"
                    aria-live="polite"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex flex-col items-center justify-center h-full min-h-[300px] text-center gap-4"
                  >
                    <FaCheckCircle className="text-5xl text-green-400" aria-hidden="true" />
                    <h3 className={`text-xl font-bold ${t(theme, "text-white", "text-gray-900")}`}>Message Sent!</h3>
                    <p className={`text-sm ${t(theme, "text-gray-400", "text-gray-600")}`}>
                      Thanks for reaching out, {siteConfig.name.split(" ")[0]} will get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="mt-4 text-sm text-purple-400 hover:text-purple-300 underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-400 rounded"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form key="form" onSubmit={handleSubmit} className="space-y-4 h-full flex flex-col" noValidate>
                    <input
                      ref={honeypotRef}
                      type="text"
                      name="company"
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                      className="absolute left-[-9999px] w-px h-px opacity-0"
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact-name" className={`block text-xs font-medium mb-1.5 ${t(theme, "text-gray-400", "text-gray-600")}`}>
                          Name *
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          required
                          autoComplete="name"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-email" className={`block text-xs font-medium mb-1.5 ${t(theme, "text-gray-400", "text-gray-600")}`}>
                          Email *
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          required
                          autoComplete="email"
                          className={inputClass}
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="contact-subject" className={`block text-xs font-medium mb-1.5 ${t(theme, "text-gray-400", "text-gray-600")}`}>
                        Subject
                      </label>
                      <input
                        id="contact-subject"
                        type="text"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        placeholder="Project Collaboration"
                        className={inputClass}
                      />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <div className="flex items-center justify-between mb-1.5">
                        <label htmlFor="contact-message" className={`block text-xs font-medium ${t(theme, "text-gray-400", "text-gray-600")}`}>
                          Message *
                        </label>
                        <span className={`text-xs ${t(theme, "text-gray-500", "text-gray-400")}`}>
                          {form.message.length}/{MAX_MESSAGE_LENGTH}
                        </span>
                      </div>
                      <textarea
                        id="contact-message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project..."
                        required
                        rows={5}
                        maxLength={MAX_MESSAGE_LENGTH}
                        className={`${inputClass} resize-none flex-1 min-h-[120px]`}
                      />
                    </div>
                    <motion.button
                      type="submit"
                      disabled={status === "sending"}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-600 py-3.5 rounded-xl font-semibold text-white shadow-lg hover:shadow-purple-500/25 transition-all disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-400"
                    >
                      {status === "sending" ? (
                        <>
                          <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <FaPaperPlane className="text-sm" aria-hidden="true" />
                          <span>Send Message</span>
                        </>
                      )}
                    </motion.button>
                    {status === "error" && (
                      <p className="text-sm text-red-400 text-center" role="alert">
                        Something went wrong. Please email directly at{" "}
                        <a href={`mailto:${siteConfig.email}`} className="underline">
                          {siteConfig.email}
                        </a>
                      </p>
                    )}
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ==================== SCROLL TO TOP ====================
const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const prefersReducedMotion = useReducedMotion();

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
          onClick={() => window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" })}
          className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 flex items-center justify-center text-white shadow-lg hover:shadow-purple-500/30 transition-shadow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-300"
          aria-label="Scroll to top"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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
  const location = useLocation();   // ✅ added

  // ✅ Scroll to view-my-work if navigation state instructs
  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null;
    if (state?.scrollTo === "view-my-work") {
      // Small delay to ensure the DOM is ready
      setTimeout(() => {
        const section = document.getElementById("view-my-work");
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
        // Clear the state so it doesn't re‑trigger on refresh
        window.history.replaceState({}, document.title);
      }, 100);
    }
  }, [location]);

  return (
    <div className={`min-h-screen overflow-x-hidden transition-colors duration-300 ${t(theme, "bg-[#030014]", "bg-white")}`}>
      <main>
        <section id="about-me"><Hero /></section>
        <section id="skills"><Skills /></section>
        {/* Projects section is NOT rendered on homepage – only the dedicated /projects page */}
        <section id="view-my-work"><ViewMyWork /></section>
        <section id="contact"><Contact /></section>
      </main>
      <ScrollToTop />
    </div>
  );
};

export default HomePage;