// src/pages/HomePage.tsx

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate, useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

import {
  FaJs,
  FaReact,
  FaArrowRight,
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaPaperPlane,
  FaCheckCircle,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaUser,
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
  SiMongodb,
  SiMysql,
  SiSpringsecurity,
  SiPostgresql,
  SiRedis,
} from "react-icons/si";

import { useTheme } from "@/hooks/useTheme";
import { getImagePath, getVideoPath } from "@/lib/paths";
import { siteConfig, PROJECTS } from "@/constants";
import {
  getAccentClasses,
  type AccentColor,
} from "@/lib/colorStyles";

// ==================== THEME HELPER ====================

const t = (
  theme: string,
  dark: string,
  light: string
) => (theme === "dark" ? dark : light);

// ==================== HERO ====================

const HeroContent = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const prefersReducedMotion = useReducedMotion();
  const { theme } = useTheme();

  return (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ==================================================
              LEFT SIDE
          ================================================== */}

          <motion.div
            ref={ref}
            initial={
              prefersReducedMotion
                ? false
                : { opacity: 0, x: -50 }
            }
            animate={
              inView
                ? { opacity: 1, x: 0 }
                : {}
            }
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >

            {/* Developer badge */}

            <motion.div
              initial={
                prefersReducedMotion
                  ? false
                  : { opacity: 0, y: -10 }
              }
              animate={
                inView
                  ? { opacity: 1, y: 0 }
                  : {}
              }
              transition={{ delay: 0.15 }}
              className={`
                relative
                inline-flex
                items-center
                gap-2
                px-5
                py-2
                rounded-full
                border
                mb-6
                text-sm
                font-medium
                backdrop-blur-sm

                ${
                  theme === "dark"
                    ? "bg-white/[0.035] border-white/10 text-[#D8BC91]"
                    : "bg-black/[0.02] border-black/10 text-[#7C5B2B]"
                }
              `}
            >
              <span
                className="
                  w-2
                  h-2
                  rounded-full
                  bg-[#C9A66B]
                  animate-pulse
                  shrink-0
                "
              />

              <span>
                Full Stack Developer | Spring Boot, React,
                TypeScript, MySQL, MongoDB
              </span>
            </motion.div>

            {/* Main heading */}

            <motion.h1
              initial={
                prefersReducedMotion
                  ? false
                  : { opacity: 0, y: 20 }
              }
              animate={
                inView
                  ? { opacity: 1, y: 0 }
                  : {}
              }
              transition={{ delay: 0.2 }}
              className="
                text-4xl
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
                font-bold
                mb-6
                leading-[1.05]
                tracking-tight
              "
            >
              <span
                className={`
                  ${
                    theme === "dark"
                      ? "text-[#F5F3EE]"
                      : "text-[#171717]"
                  }
                `}
              >
                Transforming Ideas
              </span>

              <br />

              <span
                className={`
                  ${
                    theme === "dark"
                      ? "text-[#A7A39A]"
                      : "text-[#65615A]"
                  }
                `}
              >
                Into Digital Reality
              </span>
            </motion.h1>

            {/* Description */}

            <motion.p
              initial={
                prefersReducedMotion
                  ? false
                  : { opacity: 0, y: 20 }
              }
              animate={
                inView
                  ? { opacity: 1, y: 0 }
                  : {}
              }
              transition={{ delay: 0.3 }}
              className={`
                text-lg
                mb-8
                max-w-xl
                mx-auto
                lg:mx-0
                leading-relaxed

                ${
                  theme === "dark"
                    ? "text-[#A7A39A]"
                    : "text-[#65615A]"
                }
              `}
            >
              I'm{" "}
              <span
                className="
                  font-semibold
                  text-[#C9A66B]
                "
              >
                Ajinkya Kakade
              </span>
              , a passionate Full Stack Developer
              with expertise in React, Spring Boot,
              and cloud technologies. I build end-to-end
              web applications that are scalable, secure,
              and user-friendly.
            </motion.p>

            {/* ==================================================
                BUTTONS
            ================================================== */}

            <motion.div
              initial={
                prefersReducedMotion
                  ? false
                  : { opacity: 0, y: 20 }
              }
              animate={
                inView
                  ? { opacity: 1, y: 0 }
                  : {}
              }
              transition={{ delay: 0.65 }}
              className="
                flex
                flex-wrap
                gap-3
                justify-center
                lg:justify-start
                mb-8
              "
            >

              {/* View My Work */}

              <motion.button
                type="button"
                whileHover={
                  prefersReducedMotion
                    ? undefined
                    : { y: -2 }
                }
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  const section =
                    document.getElementById(
                      "view-my-work"
                    );

                  if (section) {
                    section.scrollIntoView({
                      behavior:
                        prefersReducedMotion
                          ? "auto"
                          : "smooth",
                    });
                  }
                }}
                className="
  group
  inline-flex
  h-12
  items-center
  justify-center
  gap-2
  rounded-full
  border
  border-white/[0.12]
  bg-[#0A0A0A]
  px-7
  text-sm
  font-semibold
  text-[#F5F3EE]
  transition-all
  duration-300
  hover:border-[#C9A66B]/40
  hover:bg-[#171717]
  hover:text-[#D8BC91]
  focus-visible:outline
  focus-visible:outline-2
  focus-visible:outline-offset-2
  focus-visible:outline-[#C9A66B]
"
              >
                <span>View My Work</span>

                <FaArrowRight
                  className="
                    text-xs
                    transition-transform
                    duration-200
                    group-hover:translate-x-1
                  "
                  aria-hidden="true"
                />
              </motion.button>

              {/* Get Resume */}

              <motion.a
                href={siteConfig.resumePath}
                download
                whileHover={
                  prefersReducedMotion
                    ? undefined
                    : { y: -2 }
                }
                whileTap={{ scale: 0.98 }}
                className="
  group
  inline-flex
  h-12
  items-center
  justify-center
  gap-2
  rounded-full
  border
  border-white/[0.12]
  bg-[#0A0A0A]
  px-7
  text-sm
  font-semibold
  text-[#F5F3EE]
  transition-all
  duration-300
  hover:border-[#C9A66B]/40
  hover:bg-[#171717]
  hover:text-[#D8BC91]
  focus-visible:outline
  focus-visible:outline-2
  focus-visible:outline-offset-2
  focus-visible:outline-[#C9A66B]
"
              >
                <FaDownload
                  className="
                    text-xs
                    transition-transform
                    duration-200
                    group-hover:-translate-y-0.5
                  "
                  aria-hidden="true"
                />

                <span>Get Resume</span>
              </motion.a>

            </motion.div>
          </motion.div>

          {/* ==================================================
              RIGHT SIDE
          ================================================== */}

          <motion.div
            initial={
              prefersReducedMotion
                ? false
                : { opacity: 0, x: 50 }
            }
            animate={
              inView
                ? { opacity: 1, x: 0 }
                : {}
            }
            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
            className="
              relative
              flex
              justify-center
            "
          >
            <div className="relative w-full max-w-md">

              <img
                src={getImagePath("/hero-bg.svg")}
                alt=""
                loading="eager"
                decoding="async"
                className="
                  w-full
                  h-auto
                  opacity-80
                "
                onError={(e) => {
                  e.currentTarget.style.display =
                    "none";
                }}
              />

              {/* Center glow */}

              <motion.div
                animate={
                  prefersReducedMotion
                    ? {}
                    : {
                        scale: [1, 1.2, 1],
                        opacity: [
                          0.15,
                          0.35,
                          0.15,
                        ],
                      }
                }
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  pointer-events-none
                  absolute
                  top-1/2
                  left-1/2
                  h-96
                  w-96
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-[#C9A66B]/[0.06]
                  blur-3xl
                "
              />

              {/* Projects statistic */}

              <motion.div
                animate={
                  prefersReducedMotion
                    ? {}
                    : {
                        y: [0, -12, 0],
                        x: [0, 4, 0],
                      }
                }
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className={`
                  absolute
                  backdrop-blur-xl
                  rounded-2xl
                  px-6
                  py-4
                  border
                  shadow-2xl
                  flex
                  items-center
                  gap-3

                  ${
                    theme === "dark"
                      ? "bg-white/[0.06] border-white/10"
                      : "bg-white border-black/10"
                  }
                `}
                style={{
                  top: "10%",
                  right: "-8%",
                }}
              >
                <div className="
                  p-2
                  rounded-xl
                  bg-[#C9A66B]/[0.07]
                ">
                  <FaFolderOpen
                    className="
                      text-2xl
                      text-[#C9A66B]
                    "
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <div
                    className={`
                      text-2xl
                      font-bold
                      ${
                        theme === "dark"
                          ? "text-[#F5F3EE]"
                          : "text-[#171717]"
                      }
                    `}
                  >
                    5+
                  </div>

                  <div
                    className="
                      text-xs
                      font-medium
                      text-[#C9A66B]
                    "
                  >
                    Projects Completed
                  </div>
                </div>
              </motion.div>

              {/* LeetCode statistic */}

              <motion.div
                animate={
                  prefersReducedMotion
                    ? {}
                    : {
                        y: [0, 12, 0],
                        x: [0, -4, 0],
                      }
                }
                transition={{
                  duration: 3.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.3,
                }}
                className={`
                  absolute
                  backdrop-blur-xl
                  rounded-2xl
                  px-6
                  py-4
                  border
                  shadow-2xl
                  flex
                  items-center
                  gap-3

                  ${
                    theme === "dark"
                      ? "bg-white/[0.06] border-white/10"
                      : "bg-white border-black/10"
                  }
                `}
                style={{
                  bottom: "15%",
                  left: "-8%",
                }}
              >
                <div className="
                  p-2
                  rounded-xl
                  bg-[#C9A66B]/[0.05]
                ">
                  <SiLeetcode
                    className="
                      text-2xl
                    "
                    style={{
                      color: "#f89f1c",
                    }}
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <div
                    className={`
                      text-2xl
                      font-bold
                      ${
                        theme === "dark"
                          ? "text-[#F5F3EE]"
                          : "text-[#171717]"
                      }
                    `}
                  >
                    200+
                  </div>

                  <div
                    className="
                      text-xs
                      font-medium
                      text-[#A7A39A]
                    "
                  >
                    LeetCode Problems
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

// ==================== HERO BACKGROUND ====================

const Hero = () => {
  const [videoError, setVideoError] =
    useState(false);

  const { theme } = useTheme();

  const prefersReducedMotion =
    useReducedMotion();

  const showVideo =
    !videoError &&
    !prefersReducedMotion &&
    theme === "dark";

  return (
    <div
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
      "
    >
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
              className="
                absolute
                left-1/2
                top-1/2
                min-h-full
                min-w-full
                h-auto
                w-auto
                object-cover
              "
              style={{
                transform:
                  "translate(-50%, -50%) scaleY(-1)",
                filter:
                  "brightness(0.45) contrast(1.3) saturate(0.9)",
              }}
              onError={() =>
                setVideoError(true)
              }
            >
              <source
                src={getVideoPath(
                  "/videos/blackhole.webm"
                )}
                type="video/webm"
              />

              <source
                src={getVideoPath(
                  "/videos/blackhole.mp4"
                )}
                type="video/mp4"
              />
            </video>

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-b
                from-black/55
                via-black/45
                to-black/70
              "
            />

            <div
              className="
                absolute
                inset-0
                bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(0,0,0,0.55)_100%)]
              "
            />
          </>
        ) : (
          <div
            className={`
              absolute
              inset-0
              bg-gradient-to-br

              ${
                theme === "dark"
                  ? "from-[#121212] via-[#0A0A0A] to-[#0A0A0A]"
                  : "from-[#F5F4EF] via-[#FFFFFF] to-[#EEECE6]"
              }
            `}
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
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { theme } = useTheme();
  const prefersReducedMotion = useReducedMotion();

  const technologies = [
    { name: "Java", icon: FaJava, color: "#ED8B00" },
    { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
    { name: "Spring Security", icon: SiSpringsecurity, color: "#6DB33F" },
    { name: "React", icon: FaReact, color: "#61DAFB" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
    { name: "Python", icon: FaPython, color: "#3776AB" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Redis", icon: SiRedis, color: "#DC382D" },
    { name: "Docker", icon: FaDocker, color: "#2496ED" },
    { name: "Git", icon: FaGitAlt, color: "#F05032" },
    { name: "Node.js", icon: FaNodeJs, color: "#339933" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
    { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
    { name: "REST APIs", icon: FaServer, color: "#A78BFA" },
  ];

  const firstRow = technologies.slice(0, 7);
  const secondRow = technologies.slice(7, 13);
  const thirdRow = technologies.slice(13, 18);

  const TechItem = ({
    tech,
  }: {
    tech: (typeof technologies)[number];
  }) => {
    const Icon = tech.icon;

    return (
      <motion.div
        whileHover={
          prefersReducedMotion
            ? undefined
            : {
                y: -4,
                scale: 1.04,
              }
        }
        className={`group flex shrink-0 items-center gap-3 rounded-full border px-5 py-3 backdrop-blur-md transition-all duration-300 ${
          theme === "dark"
            ? "border-white/10 bg-white/[0.025] hover:border-[#C9A66B]/30 hover:bg-[#C9A66B]/[0.035]"
            : "border-black/10 bg-white/70 hover:border-[#9A743B]/30 hover:bg-[#9A743B]/[0.05]"
        }`}
      >
        <Icon
          className="text-xl transition-transform duration-300 group-hover:scale-110"
          style={{ color: tech.color }}
          aria-hidden="true"
        />

        <span
          className={`whitespace-nowrap text-sm font-medium tracking-wide ${
            theme === "dark"
              ? "text-white/70 group-hover:text-white"
              : "text-gray-700 group-hover:text-gray-900"
          }`}
        >
          {tech.name}
        </span>
      </motion.div>
    );
  };

  const MarqueeRow = ({
    items,
    reverse = false,
    duration = 28,
  }: {
    items: typeof technologies;
    reverse?: boolean;
    duration?: number;
  }) => {
    const repeated = [...items, ...items, ...items];

    return (
      <div className="relative overflow-hidden py-2">
        <motion.div
          className="flex w-max gap-4"
          animate={
            prefersReducedMotion
              ? undefined
              : {
                  x: reverse
                    ? ["-33.333%", "0%"]
                    : ["0%", "-33.333%"],
                }
          }
          transition={
            prefersReducedMotion
              ? undefined
              : {
                  x: {
                    duration,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }
          }
        >
          {repeated.map((tech, index) => (
            <TechItem
              key={`${tech.name}-${index}`}
              tech={tech}
            />
          ))}
        </motion.div>
      </div>
    );
  };

  return (
    <section
      id="skills"
      className="relative overflow-hidden py-24 sm:py-28"
    >
      {/* Existing portfolio background */}
      <div className="absolute inset-0 -z-10">
        <div
          className={`absolute inset-0 ${
            theme === "dark"
              ? "bg-gradient-to-b from-[#C9A66B]/[0.025] via-black to-black"
              : "bg-gradient-to-b from-[#9A743B]/[0.025] via-[#F5F4EF] to-[#F1EFE9]"
          }`}
        />

        <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A66B]/[0.06] blur-[120px]" />
      </div>

      {/* Heading */}
      <div className="relative z-10 mx-auto mb-14 max-w-4xl px-4 text-center">
        <motion.div
          ref={ref}
          initial={
            prefersReducedMotion
              ? false
              : { opacity: 0, y: 20 }
          }
          animate={
            inView
              ? { opacity: 1, y: 0 }
              : {}
          }
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A66B]">
            Technologies
          </p>

          <h2 className="bg-gradient-to-r from-[#F5F3EE] via-[#E5D3B3] to-[#C9A66B] bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
            My Tech Stack
          </h2>

          <p
            className={`mx-auto mt-4 max-w-2xl text-base leading-7 sm:text-lg ${
              theme === "dark"
                ? "text-gray-400"
                : "text-gray-600"
            }`}
          >
            The technologies I use to build scalable,
            secure, and modern applications.
          </p>
        </motion.div>
      </div>

      {/* Moving tech stack */}
      <div className="relative z-10 space-y-4">
        <MarqueeRow
          items={firstRow}
          duration={26}
        />

        <MarqueeRow
          items={secondRow}
          reverse
          duration={30}
        />

        <MarqueeRow
          items={thirdRow}
          duration={27}
        />
      </div>

      {/* Left fade */}
      <div
        className={`pointer-events-none absolute inset-y-0 left-0 z-20 w-20 bg-gradient-to-r ${
          theme === "dark"
            ? "from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent"
            : "from-white via-white/80 to-transparent"
        }`}
      />

      {/* Right fade */}
      <div
        className={`pointer-events-none absolute inset-y-0 right-0 z-20 w-20 bg-gradient-to-l ${
          theme === "dark"
            ? "from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent"
            : "from-white via-white/80 to-transparent"
        }`}
      />
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
          "from-transparent via-[#C9A66B]/[0.025] to-transparent",
          "from-transparent via-[#9A743B]/[0.025] to-transparent"
        )}`}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <motion.h2
            ref={ref}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#C9A66B] to-[#D8BC91] bg-clip-text text-transparent"
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
                  "bg-white/[0.035] border-white/10 hover:border-[#C9A66B]/30",
                  "bg-white border-black/10 hover:border-[#9A743B]/30 shadow-sm"
                )} ${isLive ? "focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C9A66B]" : ""}`}
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
                      "text-white group-hover:text-[#C9A66B]",
                      "text-[#171717] group-hover:text-[#9A743B]"
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
                          "bg-[#C9A66B]/[0.06] text-[#D8BC91] border-[#C9A66B]/20",
                          "bg-[#9A743B]/[0.05] text-[#7C5B2B] border-[#9A743B]/20"
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
                      className={`inline-flex items-center gap-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C9A66B] rounded ${t(
                        theme,
                        "text-[#C9A66B] hover:text-[#D8BC91]",
                        "text-[#9A743B] hover:text-[#7C5B2B]"
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
                        className={`transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C9A66B] rounded ${t(
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

                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C9A66B] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
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
      accent: "primary" as AccentColor,
      onClick: () => navigate("/about-me"),
    },
    {
      title: "My Projects",
      description: "Explore all my completed projects with live links",
      icon: <FaFolderOpen />,
      accent: "accent" as AccentColor,
      onClick: () => navigate("/projects"),
    },
    {
      title: "GitHub Profile",
      description: "Visit my GitHub profile and see my open-source work",
      icon: <FaGithub />,
      accent: "primary" as AccentColor,
      onClick: () => navigate("/github"),
    },
  ];

  return (
    <section id="view-my-work" className="relative py-20 px-4 overflow-hidden">
      <div
        className={`absolute inset-0 bg-gradient-to-b ${t(
          theme,
          "from-transparent via-[#C9A66B]/[0.025] to-transparent",
          "from-transparent via-[#9A743B]/[0.025] to-transparent"
        )}`}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <motion.h2
            ref={ref}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#C9A66B] to-[#D8BC91] bg-clip-text text-transparent"
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
                className={`group relative backdrop-blur-md rounded-2xl p-6 cursor-pointer border transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C9A66B] ${t(
                  theme,
                  "bg-white/5",
                  "bg-white shadow-sm"
                )} ${accent.cardBorder} ${accent.cardBorderHover}`}
              >
                <div
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r ${t(
                    theme,
                    card.accent === "primary" ? "from-[#C9A66B]/[0.06] to-transparent" : "from-[#C9A66B]/[0.035] to-transparent",
                    card.accent === "primary" ? "from-[#C9A66B]/[0.05] to-transparent" : "from-[#9A743B]/[0.04] to-transparent"
                  )}`}
                />

                <div className="relative z-10 text-center">
                  <div
                    className={`inline-flex p-4 rounded-2xl mb-4 group-hover:scale-110 transition-transform ${t(
                      theme,
                      card.accent === "primary" ? "bg-white/[0.05]" : "bg-[#C9A66B]/[0.06]",
                      card.accent === "primary" ? "bg-black/[0.025]" : "bg-[#9A743B]/[0.05]"
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
                    "from-[#C9A66B] to-transparent"
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

  const inputClass = `w-full px-4 py-3 rounded-xl border outline-none text-sm transition-all duration-200 focus:ring-2 focus:ring-[#C9A66B]/20 ${t(
    theme,
    "bg-white/[0.025] border-white/10 text-[#F5F3EE] placeholder-[#706D67] focus:border-[#C9A66B]/45",
    "bg-white/80 border-black/10 text-[#171717] placeholder-[#918D84] focus:border-[#9A743B]/45"
  )}`;

  return (
    <section id="contact" className="relative py-20 px-4 overflow-hidden">
      <div
        className={`absolute inset-0 bg-gradient-to-b ${t(
          theme,
          "from-transparent via-[#C9A66B]/[0.025] to-transparent",
          "from-transparent via-[#9A743B]/[0.025] to-transparent"
        )}`}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <motion.h2
            ref={ref}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#C9A66B] to-[#D8BC91] bg-clip-text text-transparent"
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
            <div className={`rounded-2xl p-6 border flex-1 ${t(theme, "bg-white/[0.025] border-white/10", "bg-white border-black/10 shadow-sm")}`}>
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
                      className={`flex items-start gap-3 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C9A66B] rounded ${t(
                        theme,
                        "text-gray-400 hover:text-[#C9A66B]",
                        "text-[#65615A] hover:text-[#9A743B]"
                      )}`}
                    >
                      <div className={`mt-0.5 p-2 rounded-lg ${t(theme, "bg-[#C9A66B]/[0.06]", "bg-[#9A743B]/[0.05]")}`}>
                        <Icon className={`text-sm ${t(theme, "text-[#C9A66B]", "text-[#9A743B]")}`} aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-xs opacity-60">{label}</p>
                        <p className="text-sm font-medium">{value}</p>
                      </div>
                    </a>
                  ) : (
                    <div key={label} className={`flex items-start gap-3 ${t(theme, "text-gray-400", "text-gray-600")}`}>
                      <div className={`mt-0.5 p-2 rounded-lg ${t(theme, "bg-[#C9A66B]/[0.06]", "bg-[#9A743B]/[0.05]")}`}>
                        <Icon className={`text-sm ${t(theme, "text-[#C9A66B]", "text-[#9A743B]")}`} aria-hidden="true" />
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
            <div className={`rounded-2xl p-6 border flex-1 ${t(theme, "bg-white/[0.025] border-white/10", "bg-white border-black/10 shadow-sm")}`}>
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
                    className={`p-3 rounded-xl border transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C9A66B] ${t(
                      theme,
                      "bg-white/[0.025] border-white/10 text-[#A7A39A] hover:text-[#F5F3EE] hover:border-[#C9A66B]/30",
                      "bg-black/[0.015] border-black/10 text-[#77716A] hover:text-[#171717] hover:border-[#9A743B]/30"
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
            <div className={`rounded-2xl p-8 border h-full ${t(theme, "bg-white/[0.025] border-white/10", "bg-white border-black/10 shadow-sm")}`}>
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
                      className="mt-4 text-sm text-[#C9A66B] hover:text-[#D8BC91] underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C9A66B] rounded"
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
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#F5F3EE] py-3.5 rounded-full font-semibold text-[#0A0A0A] shadow-lg hover:bg-[#C9A66B] transition-all disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A66B]"
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
          className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-[#F5F3EE] flex items-center justify-center text-[#0A0A0A] shadow-lg hover:bg-[#C9A66B] transition-shadow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A66B]"
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
    <div className={`min-h-screen overflow-x-hidden transition-colors duration-300 ${t(theme, "bg-[#0A0A0A] text-[#F5F3EE]", "bg-[#F5F4EF] text-[#171717]")}`}>
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
