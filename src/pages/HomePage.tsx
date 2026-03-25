// src/pages/HomePage.tsx
import React, { useState, useRef, useEffect, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import {
  FaShieldAlt,
  FaLock,
  FaKey,
  FaNetworkWired,
  FaClock,
  FaJs,
  FaAws,
  FaReact,
  FaArrowRight,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaDownload,
  FaBriefcase,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaPaperPlane,
  FaCheckCircle,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { BookOpenIcon, MicrophoneIcon } from "@heroicons/react/16/solid";
import { MdEmail } from "react-icons/md";
import { RiChatSettingsFill } from "react-icons/ri";
import { useTheme } from "@/hooks/useTheme";

// Import constants
import { FRONTEND_SKILL, BACKEND_SKILL, DEVOPS_SKILL } from "@/constants";

// ==================== TYPES ====================

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  technologies: string[];
  icon: React.ReactNode;
  github?: string;
}

interface SkillDataProviderProps {
  src: string;
  width: number;
  height: number;
  index: number;
  skill_name: string;
}

// ==================== THEME HELPERS ====================
// Centralized theme utility — eliminates repeated ternary chains
const t = (theme: string, dark: string, light: string) =>
  theme === "dark" ? dark : light;

// ==================== NAV BAR ====================

const NAV_LINKS = [
  { label: "Home", href: "#about-me" },
  { label: "Skills", href: "#skills" },
  { label: "Security", href: "#encryption" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const NavBar = () => {
  const { theme } = useTheme();
  const [activeSection, setActiveSection] = useState("about-me");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sectionIds = NAV_LINKS.map((l) => l.href.replace("#", ""));
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? t(
              theme,
              "bg-[#030014]/90 backdrop-blur-xl border-b border-purple-500/20 shadow-[0_4px_30px_rgba(139,92,246,0.15)]",
              "bg-white/90 backdrop-blur-xl border-b border-purple-300/30 shadow-md"
            )
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#about-me"
          onClick={(e) => { e.preventDefault(); scrollTo("#about-me"); }}
          className="text-xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
        >
          &lt;DevPortfolio /&gt;
        </motion.a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  isActive
                    ? t(theme, "text-purple-400", "text-purple-600")
                    : t(theme, "text-gray-400 hover:text-white", "text-gray-600 hover:text-gray-900")
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className={`absolute inset-0 rounded-lg ${t(theme, "bg-purple-500/15", "bg-purple-100")}`}
                    transition={{ type: "spring", bounce: 0.25, duration: 0.4 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </button>
            );
          })}
        </div>

        {/* Download Resume CTA */}
        <div className="hidden md:flex items-center gap-3">
          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-600 px-4 py-2 rounded-full text-sm font-semibold text-white shadow-lg hover:shadow-purple-500/30 transition-shadow"
          >
            <FaDownload className="text-xs" />
            Resume
          </motion.a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className={`md:hidden flex flex-col gap-1.5 p-2 ${t(theme, "text-white", "text-gray-900")}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <motion.span animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }} className="block w-6 h-0.5 bg-current" />
          <motion.span animate={{ opacity: menuOpen ? 0 : 1 }} className="block w-6 h-0.5 bg-current" />
          <motion.span animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }} className="block w-6 h-0.5 bg-current" />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden border-t ${t(theme, "bg-[#030014]/95 border-purple-500/20", "bg-white/95 border-purple-300/30")} backdrop-blur-xl`}
          >
            <div className="px-4 py-4 flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === link.href.replace("#", "")
                      ? t(theme, "bg-purple-500/20 text-purple-400", "bg-purple-100 text-purple-600")
                      : t(theme, "text-gray-300 hover:text-white", "text-gray-600 hover:text-gray-900")
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <a
                href="/resume.pdf"
                download
                className="mt-2 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-600 px-4 py-3 rounded-lg text-sm font-semibold text-white"
              >
                <FaDownload className="text-xs" />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

// ==================== SKILL DATA PROVIDER ====================

const SkillDataProvider = ({ src, width, height, index, skill_name }: SkillDataProviderProps) => {
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ scale: 1.1, y: -5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      <div
        className={`backdrop-blur-sm rounded-xl p-3 border transition-all duration-300 ${t(
          theme,
          "bg-white/5 border-purple-500/30 hover:border-purple-500/60",
          "bg-black/5 border-purple-300/30 hover:border-purple-400/60"
        )}`}
      >
        {!imageError ? (
          <img
            src={src}
            alt={skill_name}
            width={width}
            height={height}
            className="object-contain"
            style={{ width: `${width}px`, height: `${height}px` }}
            onError={() => setImageError(true)}
          />
        ) : (
          <div
            className="flex items-center justify-center bg-gradient-to-br from-purple-900/30 to-cyan-900/30 rounded-lg"
            style={{ width: `${width}px`, height: `${height}px` }}
          >
            <span className="text-2xl font-bold text-purple-400">{skill_name.charAt(0)}</span>
          </div>
        )}
      </div>

      {/* Animated tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15 }}
            className="absolute -bottom-9 left-1/2 -translate-x-1/2 pointer-events-none z-20"
          >
            <div
              className={`text-white text-xs px-2 py-1 rounded whitespace-nowrap shadow-lg border ${t(
                theme,
                "bg-gray-900 border-purple-500/30",
                "bg-gray-800 border-purple-400/30"
              )}`}
            >
              {skill_name}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// ==================== PROJECT CARD ====================

const ProjectCard = ({ title, description, image, link, technologies, icon, github }: ProjectCardProps) => {
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { theme } = useTheme();

  return (
    <motion.div
      className={`group relative backdrop-blur-md rounded-2xl overflow-hidden border transition-all duration-300 cursor-pointer h-full flex flex-col ${t(
        theme,
        "bg-white/5 border-purple-500/30 hover:border-purple-500/60",
        "bg-black/5 border-purple-300/30 hover:border-purple-400/60"
      )}`}
      whileHover={{ y: -8 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => window.open(link, "_blank")}
    >
      {/* Glow Effect — CSS-only, no duplicate motion state */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${t(
          theme,
          "bg-gradient-to-br from-purple-500/10 to-cyan-500/10",
          "bg-gradient-to-br from-purple-400/10 to-cyan-400/10"
        )}`}
      />

      {/* Image Container */}
      <div className="relative overflow-hidden h-44 shrink-0">
        {!imageError ? (
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.08 : 1 }}
            transition={{ duration: 0.4 }}
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-purple-900/50 to-cyan-900/50 flex items-center justify-center">
            <div className="text-5xl opacity-60">{icon}</div>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Icon Badge */}
        <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm rounded-full w-9 h-9 flex items-center justify-center">
          <div className="text-lg">{icon}</div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3
          className={`text-lg font-bold mb-2 transition-colors duration-300 ${t(
            theme,
            "text-white group-hover:text-purple-400",
            "text-gray-900 group-hover:text-purple-600"
          )}`}
        >
          {title}
        </h3>

        <p className={`text-sm mb-4 line-clamp-2 flex-1 ${t(theme, "text-gray-400", "text-gray-600")}`}>
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className={`text-xs px-2 py-0.5 rounded-full border ${t(
                theme,
                "bg-purple-500/20 text-purple-300 border-purple-500/30",
                "bg-purple-400/20 text-purple-700 border-purple-400/30"
              )}`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center justify-between mt-auto">
          <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${t(
              theme,
              "text-purple-400 hover:text-purple-300",
              "text-purple-600 hover:text-purple-500"
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

      {/* Bottom border sweep */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500"
        initial={{ width: "0%" }}
        animate={{ width: isHovered ? "100%" : "0%" }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

// ==================== HERO SECTION ====================

const HeroContent = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const { theme } = useTheme();

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
  }, []);

  const techIcons = [
    { icon: FaJs, name: "JavaScript", color: "#f7df1e" },
    { icon: SiTypescript, name: "TypeScript", color: "#3178c6" },
    { icon: FaReact, name: "React", color: "#61dafb" },
    { icon: FaAws, name: "AWS", color: "#ff9900" },
  ];

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/yourusername", label: "GitHub" },
    { icon: FaLinkedin, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
    { icon: FaTwitter, href: "https://twitter.com/yourusername", label: "Twitter" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6 text-sm font-medium ${t(
                theme,
                "bg-green-500/10 border-green-500/30 text-green-400",
                "bg-green-50 border-green-400/30 text-green-600"
              )}`}
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Available for work
            </motion.div>

            {/* Main Heading */}
            <motion.h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-500 via-purple-400 to-cyan-500 bg-clip-text text-transparent">
                Providing the best
              </span>
              <br />
              <span className={t(theme, "text-white", "text-gray-900")}>project experience</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className={`text-lg mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed ${t(
                theme,
                "text-gray-300",
                "text-gray-600"
              )}`}
            >
              I'm a <span className={`font-semibold ${t(theme, "text-purple-400", "text-purple-600")}`}>Full Stack Software Engineer</span> with
              experience in Web, Mobile, and Software development. I build performant, secure, and delightful digital products.
            </motion.p>

            {/* Tech Icons */}
            <motion.div className="flex justify-center lg:justify-start gap-4 mb-8 flex-wrap">
              {techIcons.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.2, y: -4 }}
                  title={tech.name}
                  className="group relative"
                >
                  <div
                    className={`backdrop-blur-sm p-3 rounded-xl border transition-all ${t(
                      theme,
                      "bg-white/10 border-purple-500/30 hover:border-purple-500/60",
                      "bg-black/5 border-purple-400/30 hover:border-purple-500/60"
                    )}`}
                  >
                    <tech.icon className="text-3xl" style={{ color: tech.color }} />
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollTo("projects")}
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-600 px-7 py-3.5 rounded-full font-semibold text-white shadow-lg hover:shadow-purple-500/30 transition-shadow"
              >
                <span>See My Projects</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300 text-sm" />
              </motion.button>

              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold border transition-all ${t(
                  theme,
                  "border-purple-500/40 text-purple-300 hover:bg-purple-500/10",
                  "border-purple-400/40 text-purple-600 hover:bg-purple-50"
                )}`}
              >
                <FaDownload className="text-sm" />
                Download CV
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.9 }}
              className="flex justify-center lg:justify-start gap-4"
            >
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -3, scale: 1.1 }}
                  className={`transition-colors ${t(theme, "text-gray-400 hover:text-white", "text-gray-500 hover:text-gray-900")}`}
                >
                  <Icon className="text-xl" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-md">
              <img
                src="/hero-bg.svg"
                alt="Hero Illustration"
                className="w-full h-auto"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />

              {/* Floating Stats Cards */}
              <motion.div
                animate={{ y: [0, -16, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className={`absolute backdrop-blur-md rounded-xl px-4 py-3 border shadow-lg ${t(
                  theme,
                  "bg-white/10 border-purple-500/30",
                  "bg-white border-purple-400/30"
                )}`}
                style={{ top: "20%", left: "-8%" }}
              >
                <div className={`text-2xl font-bold ${t(theme, "text-white", "text-gray-900")}`}>5+</div>
                <div className={`text-xs font-medium ${t(theme, "text-purple-300", "text-purple-600")}`}>Years Exp</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className={`absolute backdrop-blur-md rounded-xl px-4 py-3 border shadow-lg ${t(
                  theme,
                  "bg-white/10 border-purple-500/30",
                  "bg-white border-purple-400/30"
                )}`}
                style={{ bottom: "30%", right: "-8%" }}
              >
                <div className={`text-2xl font-bold ${t(theme, "text-white", "text-gray-900")}`}>15+</div>
                <div className={`text-xs font-medium ${t(theme, "text-purple-300", "text-purple-600")}`}>Projects</div>
              </motion.div>

              {/* Glow */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"
              />
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
      <div className="absolute inset-0 w-full h-full">
        {!videoError ? (
          <>
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover"
              style={{ transform: "translate(-50%, -50%) scaleY(-1)", filter: "brightness(0.45) contrast(1.3) saturate(1.2)" }}
              onError={() => setVideoError(true)}
            >
              <source src="/videos/blackhole.webm" type="video/webm" />
              <source src="/videos/blackhole.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(0,0,0,0.5)_100%)]" />
          </>
        ) : (
          <div
            className={`absolute inset-0 ${t(
              theme,
              "bg-gradient-to-br from-purple-900 via-black to-black",
              "bg-gradient-to-br from-purple-300 via-gray-100 to-gray-200"
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

// ==================== SKILLS SECTION ====================

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [videoError, setVideoError] = useState(false);
  const { theme } = useTheme();

  return (
    <section
      id="skills"
      className="relative flex flex-col items-center justify-center gap-10 py-20 min-h-screen overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full -z-10">
        {!videoError ? (
          <>
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover"
              style={{ filter: "brightness(0.4) contrast(1.2) saturate(1.1)" }}
              onError={() => setVideoError(true)}
            >
              <source src="/videos/skills-bg.webm" type="video/webm" />
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
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
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

      <div className="relative w-full max-w-7xl mx-auto px-4 z-10 space-y-14">
        {[
          { label: "Frontend Development", color: "text-purple-400", skills: FRONTEND_SKILL },
          { label: "Backend Development", color: "text-cyan-400", skills: BACKEND_SKILL },
          { label: "DevOps & Tools", color: "text-purple-400", skills: DEVOPS_SKILL },
        ].map(({ label, color, skills }, catIdx) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 + catIdx * 0.1 }}
          >
            <h3 className={`text-2xl font-semibold ${color} mb-6 text-center`}>{label}</h3>
            <div className="flex flex-row justify-center flex-wrap gap-6 pb-2">
              {skills.map((skill: { skill_name: string; image: string; width: number; height: number }, index: number) => (
                <SkillDataProvider
                  key={skill.skill_name}
                  src={skill.image}
                  width={skill.width}
                  height={skill.height}
                  index={index}
                  skill_name={skill.skill_name}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// ==================== ENCRYPTION SECTION ====================

const Encryption = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [isHovered, setIsHovered] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [imageError, setImageError] = useState({ top: false, main: false });
  const { theme } = useTheme();
  const navigate = useNavigate();

  // Memoize particles to prevent re-renders creating new random values
  const particles = useMemo(
    () =>
      Array.from({ length: 40 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        duration: 3 + Math.random() * 4,
        delay: Math.random() * 5,
        value: `${Math.random() > 0.5 ? "0x" : "enc:"}${Math.floor(Math.random() * 16777215).toString(16)}`,
      })),
    []
  );

  const securityStats = [
    { icon: FaShieldAlt, title: "256-bit Encryption", description: "Military-grade AES-256 encryption standard", value: "AES-256" },
    { icon: FaNetworkWired, title: "Zero-Trust Architecture", description: "Never trust, always verify security model", value: "Zero-Trust" },
    { icon: FaClock, title: "99.99% Uptime", description: "Enterprise-grade reliability and availability", value: "99.99%" },
  ];

  return (
    <section id="encryption" className="relative w-full min-h-screen py-20 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        {!videoError ? (
          <>
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover"
              style={{ filter: "brightness(0.4) contrast(1.3) saturate(1.2)" }}
              onError={() => setVideoError(true)}
            >
              <source src="/videos/encryption-bg.webm" type="video/webm" />
              <source src="/videos/encryption-bg.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/70" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-[#030014]/50" />
          </>
        ) : (
          <div className={`absolute inset-0 ${t(theme, "bg-gradient-to-b from-purple-900/30 via-black to-black", "bg-gradient-to-b from-purple-200/50 via-gray-100 to-gray-200")}`} />
        )}
      </div>

      {/* Memoized floating code particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute text-xs text-cyan-400/30 font-mono whitespace-nowrap"
            initial={{ opacity: 0 }}
            animate={{ y: [0, -100], opacity: [0, 0.4, 0] }}
            transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "linear" }}
            style={{ left: p.left, top: p.top }}
          >
            {p.value}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: -30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className={`inline-flex items-center gap-2 backdrop-blur-sm px-5 py-2.5 rounded-full border mb-6 ${t(
              theme,
              "bg-white/10 border-purple-500/30",
              "bg-black/5 border-purple-400/30"
            )}`}
          >
            <FaShieldAlt className="text-purple-400 animate-pulse" />
            <span className={`text-sm font-medium tracking-wide ${t(theme, "text-purple-300", "text-purple-700")}`}>
              Enterprise Grade Security
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-purple-500 via-purple-400 to-cyan-500 bg-clip-text text-transparent">
              Performance & Security
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={`text-lg max-w-2xl mx-auto leading-relaxed ${t(theme, "text-gray-300", "text-gray-600")}`}
          >
            Military-grade encryption to protect your data with zero-trust architecture
          </motion.p>
        </div>

        {/* Lock UI */}
        <div className="flex justify-center items-center mb-16">
          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full blur-3xl opacity-20"
              animate={{ scale: isHovered ? 1.2 : 1, opacity: isHovered ? 0.3 : 0.2 }}
              transition={{ duration: 0.3 }}
              style={{ width: "300px", height: "300px", left: "50%", transform: "translateX(-50%)", top: "50%", marginTop: "-150px" }}
            />

            <div
              className="relative flex justify-center items-center cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{ minHeight: "280px" }}
            >
              <motion.div className="relative z-30" animate={{ scale: isHovered ? 1.05 : 1 }} transition={{ duration: 0.3 }}>
                {!imageError.main ? (
                  <img
                    src="/lock-main.png"
                    alt="Lock Body"
                    className="w-[100px] h-[120px] md:w-[120px] md:h-[145px] object-contain"
                    onError={() => setImageError((prev) => ({ ...prev, main: true }))}
                  />
                ) : (
                  <div
                    className={`w-[140px] h-[140px] md:w-[180px] md:h-[215px] rounded-2xl border-2 shadow-2xl flex items-center justify-center ${t(
                      theme,
                      "bg-gradient-to-b from-gray-800 to-gray-900 border-purple-500/50",
                      "bg-gradient-to-b from-gray-200 to-gray-300 border-purple-400/50"
                    )}`}
                  >
                    <FaLock className={`text-5xl ${t(theme, "text-purple-400", "text-purple-600")}`} />
                  </div>
                )}
              </motion.div>

              <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{ top: "24%" }}>
                {!imageError.top ? (
                  <img
                    src="/lock-top.png"
                    alt="Lock Shackle"
                    className="w-[180px] h-[190px] md:w-[160px] md:h-[115px] object-contain"
                    style={{ filter: "brightness(0.65) contrast(1.1)", opacity: 0.8 }}
                    onError={() => setImageError((prev) => ({ ...prev, top: true }))}
                  />
                ) : (
                  <div className="relative w-[140px] h-[90px] md:w-[160px] md:h-[105px]">
                    <div className={`absolute left-0 top-0 w-10 h-[80px] md:w-12 md:h-[95px] rounded-t-2xl border-t-2 border-l-2 border-r-2 ${t(theme, "bg-gradient-to-b from-gray-700 to-gray-800 border-purple-500/60", "bg-gradient-to-b from-gray-300 to-gray-400 border-purple-400/60")}`} />
                    <div className={`absolute right-0 top-0 w-10 h-[80px] md:w-12 md:h-[95px] rounded-t-2xl border-t-2 border-l-2 border-r-2 ${t(theme, "bg-gradient-to-b from-gray-700 to-gray-800 border-purple-500/60", "bg-gradient-to-b from-gray-300 to-gray-400 border-purple-400/60")}`} />
                  </div>
                )}
              </div>
            </div>

            <motion.div
              className="mt-2 text-center cursor-pointer"
              animate={{ y: isHovered ? [0, -5, 0] : 0 }}
              transition={{ duration: 0.5, repeat: isHovered ? Infinity : 0 }}
              onClick={() => navigate("/encryption-page")}
            >
              <div
                className={`inline-flex items-center gap-2 backdrop-blur-md px-4 py-2 rounded-full border shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all duration-300 hover:scale-105 ${t(
                  theme,
                  "bg-white/10 border-purple-500/50 hover:border-purple-500/70",
                  "bg-black/5 border-purple-400/50 hover:border-purple-500/70"
                )}`}
              >
                <FaLock className={`text-xs ${t(theme, "text-purple-400", "text-purple-600")}`} />
                <span className={`text-xs font-medium ${t(theme, "text-purple-300", "text-purple-700")}`}>About me</span>
                <FaKey className={`text-xs ${t(theme, "text-cyan-400", "text-cyan-600")}`} />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Security Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {securityStats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`group relative backdrop-blur-md rounded-2xl p-6 border transition-all duration-300 ${t(
                theme,
                "bg-white/5 border-purple-500/30 hover:border-purple-500/60",
                "bg-black/5 border-purple-400/30 hover:border-purple-500/60"
              )}`}
            >
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${t(theme, "bg-gradient-to-r from-purple-500/10 to-cyan-500/10", "bg-gradient-to-r from-purple-400/10 to-cyan-400/10")}`} />
              <div className="relative z-10 text-center">
                <div className={`inline-flex p-3 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300 ${t(theme, "bg-purple-500/10", "bg-purple-400/10")}`}>
                  <stat.icon className={`text-3xl ${t(theme, "text-purple-400", "text-purple-600")}`} />
                </div>
                <h3 className={`text-2xl font-bold mb-2 ${t(theme, "text-white", "text-gray-900")}`}>{stat.value}</h3>
                <p className={`text-lg font-semibold mb-2 ${t(theme, "text-purple-300", "text-purple-600")}`}>{stat.title}</p>
                <p className={`text-sm ${t(theme, "text-gray-400", "text-gray-600")}`}>{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// ==================== PROJECTS SECTION ====================

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const { theme } = useTheme();

  const projects = [
    {
      id: 1,
      title: "E-Learning Platform",
      description: "Modern e-learning platform with interactive courses, video lectures, progress tracking, and certification system.",
      image: "/projects/project-1.webp",
      link: "https://elearn-pro-hyym.vercel.app",
      github: "https://github.com/yourusername/elearn-pro",
      technologies: ["React", "Spring Boot", "MySQL", "Tailwind"],
      icon: <BookOpenIcon className="w-8 h-8" />,
    },
    {
      id: 2,
      title: "Voice to Voice Translator",
      description: "Real-time voice translation app supporting 50+ languages with natural speech synthesis and accent detection.",
      image: "/projects/project-2.webp",
      link: "#",
      github: "#",
      technologies: ["E-Speak", "WebRTC", "AI/ML", "Speech Recognition"],
      icon: <MicrophoneIcon className="w-8 h-8" />,
    },
    {
      id: 3,
      title: "Chat Application",
      description: "Instant messaging app with group chats, file sharing, emoji reactions, and real-time notifications.",
      image: "/projects/project-3.webp",
      link: "#",
      github: "#",
      technologies: ["WebSocket", "React", "TypeScript", "Spring Boot"],
      icon: <RiChatSettingsFill className="w-8 h-8" />,
    },
    {
      id: 4,
      title: "Auto Email Extension",
      description: "AI-powered email generator that creates professional emails based on context, tone, and recipient.",
      image: "/projects/project-4.webp",
      link: "#",
      github: "#",
      technologies: ["Gemini API", "React", "Spring Boot", "OAuth"],
      icon: <MdEmail className="w-8 h-8" />,
    },
  ];

  return (
    <section id="projects" className="relative flex flex-col items-center justify-center py-20 px-4 overflow-hidden">
      <div className={`absolute inset-0 ${t(theme, "bg-gradient-to-b from-transparent via-purple-900/10 to-transparent", "bg-gradient-to-b from-transparent via-purple-400/10 to-transparent")}`} />

      <div className="text-center mb-12 z-10">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent"
        >
          Featured Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`text-lg mt-4 max-w-2xl mx-auto ${t(theme, "text-gray-400", "text-gray-600")}`}
        >
          Here are some of my recent works that showcase my skills and expertise
        </motion.p>
      </div>

      {/* Improved: 2-col on large screens for larger cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto z-10 w-full">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="h-full"
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// ==================== EXPERIENCE / TIMELINE SECTION (NEW) ====================

const Experience = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const { theme } = useTheme();

  const timeline = [
    {
      type: "work",
      icon: FaBriefcase,
      title: "Senior Full Stack Engineer",
      org: "Tech Company Inc.",
      period: "2022 – Present",
      location: "Remote",
      description:
        "Led development of microservices architecture serving 100k+ users. Built real-time systems with WebSocket and Spring Boot, reducing latency by 40%.",
      tech: ["React", "Spring Boot", "AWS", "PostgreSQL"],
    },
    {
      type: "work",
      icon: FaBriefcase,
      title: "Full Stack Developer",
      org: "Startup Studio",
      period: "2020 – 2022",
      location: "Pune, IN",
      description:
        "Developed 5+ client-facing products from scratch. Designed REST APIs, integrated third-party services, and mentored junior developers.",
      tech: ["React", "Node.js", "MySQL", "Docker"],
    },
    {
      type: "education",
      icon: FaGraduationCap,
      title: "B.E. Computer Engineering",
      org: "University of Pune",
      period: "2016 – 2020",
      location: "Pune, IN",
      description:
        "Graduated with distinction. Final year project on real-time speech translation received Best Project Award.",
      tech: ["DSA", "OS", "Networking", "ML"],
    },
  ];

  return (
    <section id="experience" className="relative py-20 px-4 overflow-hidden">
      <div className={`absolute inset-0 ${t(theme, "bg-gradient-to-b from-transparent via-cyan-900/5 to-transparent", "bg-gradient-to-b from-transparent via-cyan-400/5 to-transparent")}`} />

      <div className="max-w-4xl mx-auto z-10 relative">
        <div className="text-center mb-14">
          <motion.h2
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent"
          >
            Experience & Education
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`text-lg mt-4 ${t(theme, "text-gray-400", "text-gray-600")}`}
          >
            My professional journey so far
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className={`absolute left-6 top-0 bottom-0 w-0.5 ${t(theme, "bg-purple-500/20", "bg-purple-300/40")}`} />

          <div className="space-y-10 pl-16">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                className="relative group"
              >
                {/* Dot */}
                <div
                  className={`absolute -left-10 top-5 w-10 h-10 rounded-full border-2 flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 ${
                    item.type === "work"
                      ? t(theme, "bg-purple-500/20 border-purple-500/60 group-hover:bg-purple-500/40", "bg-purple-100 border-purple-400 group-hover:bg-purple-200")
                      : t(theme, "bg-cyan-500/20 border-cyan-500/60 group-hover:bg-cyan-500/40", "bg-cyan-100 border-cyan-400 group-hover:bg-cyan-200")
                  }`}
                  style={{ left: "-3.5rem" }}
                >
                  <item.icon className={`text-sm ${item.type === "work" ? t(theme, "text-purple-400", "text-purple-600") : t(theme, "text-cyan-400", "text-cyan-600")}`} />
                </div>

                {/* Card */}
                <div
                  className={`rounded-2xl p-6 border transition-all duration-300 ${t(
                    theme,
                    "bg-white/5 border-purple-500/20 hover:border-purple-500/40 backdrop-blur-sm",
                    "bg-white border-purple-200 hover:border-purple-300 shadow-sm"
                  )}`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className={`text-lg font-bold ${t(theme, "text-white", "text-gray-900")}`}>{item.title}</h3>
                      <p className={`text-sm font-medium ${t(theme, "text-purple-400", "text-purple-600")}`}>{item.org}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <span className={`text-sm font-medium ${t(theme, "text-cyan-400", "text-cyan-600")}`}>{item.period}</span>
                      <div className={`flex items-center gap-1 text-xs mt-1 justify-end ${t(theme, "text-gray-500", "text-gray-500")}`}>
                        <FaMapMarkerAlt className="text-xs" />
                        {item.location}
                      </div>
                    </div>
                  </div>

                  <p className={`text-sm leading-relaxed mb-4 ${t(theme, "text-gray-400", "text-gray-600")}`}>{item.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`text-xs px-2.5 py-1 rounded-full border ${t(
                          theme,
                          "bg-purple-500/10 text-purple-300 border-purple-500/20",
                          "bg-purple-50 text-purple-700 border-purple-200"
                        )}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== CONTACT SECTION (NEW) ====================

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const { theme } = useTheme();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    // Replace this with your actual email service (EmailJS, Formspree, etc.)
    try {
      await new Promise((res) => setTimeout(res, 1500)); // Simulated API call
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const contactInfo = [
    { icon: FaEnvelope, label: "Email", value: "youremail@gmail.com", href: "mailto:youremail@gmail.com" },
    { icon: FaPhone, label: "Phone", value: "+91 98765 43210", href: "tel:+919876543210" },
    { icon: FaMapMarkerAlt, label: "Location", value: "Pune, Maharashtra, IN", href: "#" },
  ];

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/yourusername", label: "GitHub" },
    { icon: FaLinkedin, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
    { icon: FaTwitter, href: "https://twitter.com/yourusername", label: "Twitter" },
  ];

  const inputClass = `w-full px-4 py-3 rounded-xl border outline-none text-sm transition-all duration-200 focus:ring-2 focus:ring-purple-500/50 ${t(
    theme,
    "bg-white/5 border-purple-500/20 text-white placeholder-gray-500 focus:border-purple-500/60",
    "bg-gray-50 border-purple-200 text-gray-900 placeholder-gray-400 focus:border-purple-400"
  )}`;

  return (
    <section id="contact" className="relative py-20 px-4 overflow-hidden">
      <div className={`absolute inset-0 ${t(theme, "bg-gradient-to-b from-transparent via-purple-900/10 to-transparent", "bg-gradient-to-b from-transparent via-purple-100/50 to-transparent")}`} />

      <div className="max-w-6xl mx-auto z-10 relative">
        <div className="text-center mb-14">
          <motion.h2
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`text-lg mt-4 max-w-xl mx-auto ${t(theme, "text-gray-400", "text-gray-600")}`}
          >
            Have a project in mind or just want to say hello? My inbox is always open.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <div className={`rounded-2xl p-6 border ${t(theme, "bg-white/5 border-purple-500/20", "bg-white border-purple-200 shadow-sm")}`}>
              <h3 className={`text-xl font-bold mb-4 ${t(theme, "text-white", "text-gray-900")}`}>Contact Info</h3>
              <div className="space-y-4">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    className={`flex items-start gap-3 group transition-colors ${t(theme, "text-gray-400 hover:text-purple-400", "text-gray-600 hover:text-purple-600")}`}
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
              <h3 className={`text-lg font-bold mb-4 ${t(theme, "text-white", "text-gray-900")}`}>Follow Me</h3>
              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
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

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={`lg:col-span-3 rounded-2xl p-8 border ${t(theme, "bg-white/5 border-purple-500/20", "bg-white border-purple-200 shadow-sm")}`}
          >
            <AnimatePresence mode="wait">
              {status === "sent" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex flex-col items-center justify-center h-full py-12 text-center gap-4"
                >
                  <FaCheckCircle className="text-5xl text-green-400" />
                  <h3 className={`text-xl font-bold ${t(theme, "text-white", "text-gray-900")}`}>Message Sent!</h3>
                  <p className={`text-sm ${t(theme, "text-gray-400", "text-gray-600")}`}>
                    Thanks for reaching out. I'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-4 text-sm text-purple-400 hover:text-purple-300 underline underline-offset-4"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={`block text-xs font-medium mb-1.5 ${t(theme, "text-gray-400", "text-gray-600")}`}>Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={`block text-xs font-medium mb-1.5 ${t(theme, "text-gray-400", "text-gray-600")}`}>Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={`block text-xs font-medium mb-1.5 ${t(theme, "text-gray-400", "text-gray-600")}`}>Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Project Collaboration"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className={`block text-xs font-medium mb-1.5 ${t(theme, "text-gray-400", "text-gray-600")}`}>Message *</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      required
                      rows={5}
                      className={`${inputClass} resize-none`}
                    />
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
                        <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="text-sm" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>

                  {status === "error" && (
                    <p className="text-sm text-red-400 text-center">Something went wrong. Please try again or email me directly.</p>
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

// ==================== FOOTER (NEW) ====================

const Footer = () => {
  const { theme } = useTheme();
  const year = new Date().getFullYear();

  return (
    <footer className={`relative border-t py-8 px-4 ${t(theme, "border-purple-500/10 bg-[#030014]", "border-purple-200 bg-gray-50")}`}>
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent font-semibold">
          &lt;DevPortfolio /&gt;
        </span>
        <p className={t(theme, "text-gray-500", "text-gray-500")}>
          © {year} · Crafted with ♥ in Pune, IN
        </p>
        <div className="flex items-center gap-4">
          {[
            { icon: FaGithub, href: "https://github.com/yourusername" },
            { icon: FaLinkedin, href: "https://linkedin.com/in/yourusername" },
            { icon: FaTwitter, href: "https://twitter.com/yourusername" },
          ].map(({ icon: Icon, href }, i) => (
            <motion.a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className={t(theme, "text-gray-500 hover:text-purple-400", "text-gray-400 hover:text-purple-600")}
            >
              <Icon />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
};

// ==================== STARS BACKGROUND ====================

const StarsCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  // Store stars in a ref so they survive re-renders and resize without re-randomizing
  const starsRef = useRef<{ x: number; y: number; radius: number; alpha: number; normX: number; normY: number }[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();

    // Initialize stars with normalized positions (0-1) to survive resize
    if (starsRef.current.length === 0) {
      starsRef.current = Array.from({ length: 300 }, () => {
        const normX = Math.random();
        const normY = Math.random();
        return {
          normX,
          normY,
          x: normX * canvas.width,
          y: normY * canvas.height,
          radius: Math.random() * 1.8,
          alpha: Math.random() * 0.5 + 0.2,
        };
      });
    }

    let animationFrameId: number;
    const alphaMultiplier = theme === "dark" ? 1 : 0.2;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      starsRef.current.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha * alphaMultiplier})`;
        ctx.fill();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // On resize: scale positions proportionally instead of re-randomizing
    const handleResize = () => {
      setCanvasSize();
      starsRef.current.forEach((star) => {
        star.x = star.normX * canvas.width;
        star.y = star.normY * canvas.height;
      });
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

// ==================== SCROLL TO TOP BUTTON (NEW) ====================

const ScrollToTop = () => {
  const { theme } = useTheme();
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
    <div
      className={`min-h-screen overflow-x-hidden transition-colors duration-300 ${t(
        theme,
        "bg-[#030014]",
        "bg-white"
      )}`}
    >
      <StarsCanvas />
      <NavBar />
      <main>
        <section id="about-me">
          <Hero />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="encryption">
          <Encryption />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default HomePage;