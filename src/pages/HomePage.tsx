// src/pages/HomePage.tsx

import { useState, useRef, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  useNavigate,
  useLocation,
} from "react-router-dom";
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
import { getImagePath } from "@/lib/paths";
import { siteConfig, PROJECTS } from "@/constants";
import {
  getAccentClasses,
  type AccentColor,
} from "@/lib/colorStyles";

// ============================================================
// THEME HELPER
// ============================================================

const t = (
  theme: string,
  dark: string,
  light: string
) => (theme === "dark" ? dark : light);

// ============================================================
// HERO CONTENT
// ============================================================

const HeroContent = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const prefersReducedMotion =
    useReducedMotion();

  const { theme } = useTheme();

  return (
    <div
      className="
        min-h-screen
        flex
        items-center
        justify-center
        pt-20
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          py-16
          w-full
        "
      >
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-12
            items-center
          "
        >
          {/* ==================================================
              LEFT SIDE
          ================================================== */}

          <motion.div
            ref={ref}
            initial={
              prefersReducedMotion
                ? false
                : {
                    opacity: 0,
                    x: -50,
                  }
            }
            animate={
              inView
                ? {
                    opacity: 1,
                    x: 0,
                  }
                : {}
            }
            transition={{
              duration: 0.6,
            }}
            className="
              text-center
              lg:text-left
            "
          >
            {/* Developer Badge */}

            <motion.div
              initial={
                prefersReducedMotion
                  ? false
                  : {
                      opacity: 0,
                      y: -10,
                    }
              }
              animate={
                inView
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {}
              }
              transition={{
                delay: 0.15,
              }}
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
                    ? `
                      bg-white/[0.035]
                      border-white/10
                      text-[#D8BC91]
                    `
                    : `
                      bg-black/[0.02]
                      border-black/10
                      text-[#7C5B2B]
                    `
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
                Full Stack Developer | Spring Boot,
                React, TypeScript, MySQL, MongoDB
              </span>
            </motion.div>

            {/* Main Heading */}

            <motion.h1
              initial={
                prefersReducedMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 20,
                    }
              }
              animate={
                inView
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {}
              }
              transition={{
                delay: 0.2,
              }}
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
                className={
                  theme === "dark"
                    ? "text-[#F5F3EE]"
                    : "text-[#171717]"
                }
              >
                Transforming Ideas
              </span>

              <br />

              <span
                className={
                  theme === "dark"
                    ? "text-[#A7A39A]"
                    : "text-[#65615A]"
                }
              >
                Into Digital Reality
              </span>
            </motion.h1>

            {/* Description */}

            <motion.p
              initial={
                prefersReducedMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 20,
                    }
              }
              animate={
                inView
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {}
              }
              transition={{
                delay: 0.3,
              }}
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
                  : {
                      opacity: 0,
                      y: 20,
                    }
              }
              animate={
                inView
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {}
              }
              transition={{
                delay: 0.65,
              }}
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
                    : {
                        y: -2,
                      }
                }
                whileTap={{
                  scale: 0.98,
                }}
                onClick={() => {
                  const section =
                    document.getElementById(
                      "projects"
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
                <span>
                  View My Work
                </span>

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
                href={
                  siteConfig.resumePath
                }
                download
                whileHover={
                  prefersReducedMotion
                    ? undefined
                    : {
                        y: -2,
                      }
                }
                whileTap={{
                  scale: 0.98,
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
                <FaDownload
                  className="
                    text-xs
                    transition-transform
                    duration-200
                    group-hover:-translate-y-0.5
                  "
                  aria-hidden="true"
                />

                <span>
                  Get Resume
                </span>
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
                : {
                    opacity: 0,
                    x: 50,
                  }
            }
            animate={
              inView
                ? {
                    opacity: 1,
                    x: 0,
                  }
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
            <div
              className="
                relative
                w-full
                max-w-md
              "
            >
              {/* Hero Illustration */}

              <img
                src={getImagePath(
                  "/hero-bg.svg"
                )}
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

              {/* Center Glow */}

              <motion.div
                animate={
                  prefersReducedMotion
                    ? {}
                    : {
                        scale: [
                          1,
                          1.2,
                          1,
                        ],
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

              {/* ==================================================
                  PROJECTS STATISTIC
              ================================================== */}

              <motion.div
                animate={
                  prefersReducedMotion
                    ? {}
                    : {
                        y: [
                          0,
                          -12,
                          0,
                        ],
                        x: [
                          0,
                          4,
                          0,
                        ],
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
                      ? `
                        bg-white/[0.06]
                        border-white/10
                      `
                      : `
                        bg-white
                        border-black/10
                      `
                  }
                `}
                style={{
                  top: "10%",
                  right: "-8%",
                }}
              >
                <div
                  className="
                    p-2
                    rounded-xl
                    bg-[#C9A66B]/[0.07]
                  "
                >
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

              {/* ==================================================
                  LEETCODE STATISTIC
              ================================================== */}

              <motion.div
                animate={
                  prefersReducedMotion
                    ? {}
                    : {
                        y: [
                          0,
                          12,
                          0,
                        ],
                        x: [
                          0,
                          -4,
                          0,
                        ],
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
                      ? `
                        bg-white/[0.06]
                        border-white/10
                      `
                      : `
                        bg-white
                        border-black/10
                      `
                  }
                `}
                style={{
                  bottom: "15%",
                  left: "-8%",
                }}
              >
                <div
                  className="
                    p-2
                    rounded-xl
                    bg-[#C9A66B]/[0.05]
                  "
                >
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

// ============================================================
// HERO BACKGROUND
// ============================================================

const Hero = () => {
  const { theme } = useTheme();

  return (
    <div
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
      "
    >
      {/* Static Background */}

      <div className="absolute inset-0">
        <div
          className={`
            absolute
            inset-0
            bg-gradient-to-br

            ${
              theme === "dark"
                ? `
                  from-[#121212]
                  via-[#0A0A0A]
                  to-[#080808]
                `
                : `
                  from-[#F5F4EF]
                  via-[#FFFFFF]
                  to-[#EEECE6]
                `
            }
          `}
        />

        {/* Subtle center glow */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[500px]
            w-[500px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#C9A66B]/[0.025]
            blur-[140px]
          "
        />

        {/* Subtle radial vignette */}

        <div
          className={`
            pointer-events-none
            absolute
            inset-0
            ${
              theme === "dark"
                ? `
                  bg-[radial-gradient(
                    ellipse_at_center,
                    transparent_25%,
                    rgba(0,0,0,0.45)_100%
                  )]
                `
                : `
                  bg-[radial-gradient(
                    ellipse_at_center,
                    transparent_30%,
                    rgba(0,0,0,0.035)_100%
                  )]
                `
            }
          `}
        />
      </div>

      {/* Hero Content */}

      <div className="relative z-10">
        <HeroContent />
      </div>
    </div>
  );
};

// ============================================================
// SKILLS
// ============================================================

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { theme } = useTheme();

  const prefersReducedMotion =
    useReducedMotion();

  const technologies = [
    {
      name: "Java",
      icon: FaJava,
      color: "#ED8B00",
    },
    {
      name: "Spring Boot",
      icon: SiSpringboot,
      color: "#6DB33F",
    },
    {
      name: "Spring Security",
      icon: SiSpringsecurity,
      color: "#6DB33F",
    },
    {
      name: "React",
      icon: FaReact,
      color: "#61DAFB",
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      color: "#3178C6",
    },
    {
      name: "JavaScript",
      icon: FaJs,
      color: "#F7DF1E",
    },
    {
      name: "Python",
      icon: FaPython,
      color: "#3776AB",
    },
    {
      name: "MySQL",
      icon: SiMysql,
      color: "#4479A1",
    },
    {
      name: "PostgreSQL",
      icon: SiPostgresql,
      color: "#336791",
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
      color: "#47A248",
    },
    {
      name: "Redis",
      icon: SiRedis,
      color: "#DC382D",
    },
    {
      name: "Docker",
      icon: FaDocker,
      color: "#2496ED",
    },
    {
      name: "Git",
      icon: FaGitAlt,
      color: "#F05032",
    },
    {
      name: "Node.js",
      icon: FaNodeJs,
      color: "#339933",
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      color: "#06B6D4",
    },
    {
      name: "HTML5",
      icon: FaHtml5,
      color: "#E34F26",
    },
    {
      name: "CSS3",
      icon: FaCss3Alt,
      color: "#1572B6",
    },
    {
      name: "REST APIs",
      icon: FaServer,
      color: "#A78BFA",
    },
  ];

  const firstRow =
    technologies.slice(0, 7);

  const secondRow =
    technologies.slice(7, 13);

  const thirdRow =
    technologies.slice(13, 18);

  // ==========================================================
  // Technology Item
  // ==========================================================

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
                y: -3,
                scale: 1.03,
              }
        }
        className={`
          group
          flex
          shrink-0
          items-center
          gap-3
          rounded-xl
          border
          px-4
          py-3
          backdrop-blur-md
          transition-all
          duration-300

          ${
            theme === "dark"
              ? `
                border-white/[0.08]
                bg-white/[0.025]
                hover:border-[#C9A66B]/30
                hover:bg-[#C9A66B]/[0.035]
              `
              : `
                border-black/[0.08]
                bg-white/80
                hover:border-[#9A743B]/30
                hover:bg-[#9A743B]/[0.04]
              `
          }
        `}
      >
        <Icon
          className="
            text-lg
            transition-transform
            duration-300
            group-hover:scale-110
          "
          style={{
            color: tech.color,
          }}
          aria-hidden="true"
        />

        <span
          className={`
            whitespace-nowrap
            text-sm
            font-medium
            tracking-wide

            ${
              theme === "dark"
                ? `
                  text-white/70
                  group-hover:text-white
                `
                : `
                  text-[#65615A]
                  group-hover:text-[#171717]
                `
            }
          `}
        >
          {tech.name}
        </span>
      </motion.div>
    );
  };

  // ==========================================================
  // Marquee Row
  // ==========================================================

  const MarqueeRow = ({
    items,
    reverse = false,
    duration = 28,
  }: {
    items: typeof technologies;
    reverse?: boolean;
    duration?: number;
  }) => {
    const repeated = [
      ...items,
      ...items,
      ...items,
      ...items,
    ];

    return (
      <div
        className="
          relative
          overflow-hidden
          py-2
        "
      >
        <motion.div
          className="
            flex
            w-max
            gap-3
            sm:gap-4
          "
          animate={
            prefersReducedMotion
              ? undefined
              : {
                  x: reverse
                    ? ["-25%", "0%"]
                    : ["0%", "-25%"],
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
          {repeated.map(
            (tech, index) => (
              <TechItem
                key={`${tech.name}-${index}`}
                tech={tech}
              />
            )
          )}
        </motion.div>
      </div>
    );
  };

  // ==========================================================
  // Skills Section
  // ==========================================================

  return (
    <section
      id="skills"
      className="
        relative
        overflow-hidden
        py-24
        sm:py-28
      "
    >
      {/* ======================================================
          SECTION BACKGROUND
      ======================================================= */}

      <div
        className="
          absolute
          inset-0
          -z-10
        "
      >
        <div
          className={`
            absolute
            inset-0

            ${
              theme === "dark"
                ? `
                  bg-gradient-to-b
                  from-[#0A0A0A]
                  via-[#0A0A0A]
                  to-[#0A0A0A]
                `
                : `
                  bg-gradient-to-b
                  from-[#F5F4EF]
                  via-[#F5F4EF]
                  to-[#F1EFE9]
                `
            }
          `}
        />

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-96
            w-96
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#C9A66B]/[0.055]
            blur-[130px]
          "
        />
      </div>

      {/* ======================================================
          HEADING
      ======================================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          mb-14
          max-w-4xl
          px-4
          text-center
        "
      >
        <motion.div
          ref={ref}
          initial={
            prefersReducedMotion
              ? false
              : {
                  opacity: 0,
                  y: 20,
                }
          }
          animate={
            inView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: 0.6,
          }}
        >
          <p
            className="
              mb-3
              text-xs
              font-semibold
              uppercase
              tracking-[0.3em]
              text-[#C9A66B]
            "
          >
            Technologies
          </p>

          <h2
            className="
              bg-gradient-to-r
              from-[#F5F3EE]
              via-[#E5D3B3]
              to-[#C9A66B]
              bg-clip-text
              text-4xl
              font-bold
              text-transparent
              sm:text-5xl
            "
          >
            My Tech Stack
          </h2>

          <p
            className={`
              mx-auto
              mt-4
              max-w-2xl
              text-base
              leading-7
              sm:text-lg

              ${
                theme === "dark"
                  ? "text-[#8F8B83]"
                  : "text-[#65615A]"
              }
            `}
          >
            The technologies I use to build
            scalable, secure, and modern
            applications.
          </p>
        </motion.div>
      </div>

      {/* ======================================================
          TECH STACK BOX
      ======================================================= */}

      <motion.div
        initial={
          prefersReducedMotion
            ? false
            : {
                opacity: 0,
                y: 25,
              }
        }
        animate={
          inView
            ? {
                opacity: 1,
                y: 0,
              }
            : {}
        }
        transition={{
          delay: 0.15,
          duration: 0.6,
        }}
        className="
          relative
          z-10
          mx-auto
          max-w-6xl
          px-4
        "
      >
        <div
          className={`
            relative
            overflow-hidden
            rounded-3xl
            border
            p-4
            sm:p-6
            lg:p-8

            ${
              theme === "dark"
                ? `
                  border-white/[0.08]
                  bg-white/[0.025]
                  shadow-[0_20px_60px_rgba(0,0,0,0.22)]
                `
                : `
                  border-black/[0.08]
                  bg-white/80
                  shadow-[0_20px_60px_rgba(30,25,15,0.07)]
                `
            }
          `}
        >
          {/* Inner Glow */}

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-80
              w-80
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#C9A66B]/[0.045]
              blur-[120px]
            "
          />

          {/* Top Line */}

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-0
              h-px
              w-2/3
              -translate-x-1/2
              bg-gradient-to-r
              from-transparent
              via-[#C9A66B]/30
              to-transparent
            "
          />

          {/* Moving Rows */}

          <div
            className="
              relative
              z-10
              space-y-3
              sm:space-y-4
            "
          >
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

          {/* Left Fade */}

          <div
            className={`
              pointer-events-none
              absolute
              inset-y-0
              left-0
              z-20
              w-12
              sm:w-20
              bg-gradient-to-r

              ${
                theme === "dark"
                  ? `
                    from-[#0A0A0A]
                    via-[#0A0A0A]/90
                    to-transparent
                  `
                  : `
                    from-[#F5F4EF]
                    via-[#F5F4EF]/90
                    to-transparent
                  `
              }
            `}
          />

          {/* Right Fade */}

          <div
            className={`
              pointer-events-none
              absolute
              inset-y-0
              right-0
              z-20
              w-12
              sm:w-20
              bg-gradient-to-l

              ${
                theme === "dark"
                  ? `
                    from-[#0A0A0A]
                    via-[#0A0A0A]/90
                    to-transparent
                  `
                  : `
                    from-[#F5F4EF]
                    via-[#F5F4EF]/90
                    to-transparent
                  `
              }
            `}
          />

          {/* Bottom Line */}

          <div
            className="
              pointer-events-none
              absolute
              bottom-0
              left-1/2
              h-px
              w-2/3
              -translate-x-1/2
              bg-gradient-to-r
              from-transparent
              via-[#C9A66B]/20
              to-transparent
            "
          />
        </div>
      </motion.div>
    </section>
  );
};

// ============================================================
// PROJECTS SHOWCASE
// ============================================================

const ProjectsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { theme } = useTheme();

  const prefersReducedMotion =
    useReducedMotion();

  return (
    <section
      id="projects"
      className="
        relative
        overflow-hidden
        py-28
        sm:py-32
      "
    >
      {/* ======================================================
          BACKGROUND
      ======================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
        "
      >
        <div
          className="
            absolute
            left-1/2
            top-[30%]
            h-[600px]
            w-[600px]
            -translate-x-1/2
            rounded-full
            bg-[#C9A66B]/[0.025]
            blur-[150px]
          "
        />

        <div
          className="
            absolute
            inset-x-0
            top-0
            h-px
            bg-gradient-to-r
            from-transparent
            via-[#C9A66B]/20
            to-transparent
          "
        />
      </div>

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* ==================================================
            SECTION HEADER
        ================================================== */}

        <motion.div
          ref={ref}
          initial={
            prefersReducedMotion
              ? false
              : {
                  opacity: 0,
                  y: 30,
                }
          }
          animate={
            inView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="
            mb-20
            max-w-4xl
          "
        >
          <div
            className="
              mb-5
              flex
              items-center
              gap-4
            "
          >
            <span
              className="
                h-px
                w-10
                bg-[#C9A66B]
              "
            />

            <span
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.35em]
                text-[#C9A66B]
              "
            >
              Selected Work
            </span>
          </div>

          <div
            className="
              flex
              flex-col
              gap-6
              lg:flex-row
              lg:items-end
              lg:justify-between
            "
          >
            <h2
              className="
                text-5xl
                font-bold
                leading-[0.95]
                tracking-tight
                sm:text-6xl
                lg:text-7xl
              "
            >
              <span
                className={
                  theme === "dark"
                    ? "text-[#F5F3EE]"
                    : "text-[#171717]"
                }
              >
                Project
              </span>

              <br />

              <span
                className="
                  text-[#C9A66B]
                "
              >
                Showcase
              </span>
            </h2>

            <p
              className={`
                max-w-md
                text-base
                leading-7
                lg:pb-1

                ${
                  theme === "dark"
                    ? "text-[#8F8B83]"
                    : "text-[#65615A]"
                }
              `}
            >
              A selection of applications I have
              designed and built across full-stack
              development, real-time systems, and
              AI-powered experiences.
            </p>
          </div>
        </motion.div>

        {/* ==================================================
            PROJECTS
        ================================================== */}

        <div className="space-y-28 sm:space-y-36">
          {PROJECTS.map((project, index) => {
            const isLive =
              (project.link as string) !== "#";

            const projectNumber =
              String(index + 1).padStart(2, "0");

            return (
              <motion.article
                key={project.id}
                initial={
                  prefersReducedMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 60,
                      }
                }
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.12,
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}
                className="
                  group
                  relative
                "
              >
                {/* ==================================================
                    PROJECT NUMBER + LINE
                ================================================== */}

                <div
                  className="
                    mb-6
                    flex
                    items-center
                    gap-4
                  "
                >
                  <span
                    className="
                      font-mono
                      text-sm
                      font-medium
                      tracking-[0.2em]
                      text-[#C9A66B]
                    "
                  >
                    {projectNumber}
                  </span>

                  <div
                    className={`
                      h-px
                      flex-1

                      ${
                        theme === "dark"
                          ? "bg-white/[0.08]"
                          : "bg-black/[0.08]"
                      }
                    `}
                  />

                  <span
                    className={`
                      text-[10px]
                      font-medium
                      uppercase
                      tracking-[0.25em]

                      ${
                        theme === "dark"
                          ? "text-white/30"
                          : "text-black/30"
                      }
                    `}
                  >
                    Featured Project
                  </span>
                </div>

                {/* ==================================================
                    PROJECT TITLE
                ================================================== */}

                <div
                  className="
                    mb-8
                    flex
                    flex-col
                    gap-4
                    lg:flex-row
                    lg:items-end
                    lg:justify-between
                  "
                >
                  <div>
                    <h3
                      className={`
                        text-3xl
                        font-bold
                        tracking-tight
                        transition-colors
                        duration-300
                        sm:text-4xl
                        lg:text-5xl

                        ${
                          theme === "dark"
                            ? `
                              text-[#F5F3EE]
                              group-hover:text-[#D8BC91]
                            `
                            : `
                              text-[#171717]
                              group-hover:text-[#9A743B]
                            `
                        }
                      `}
                    >
                      {project.title}
                    </h3>

                    <p
                      className="
                        mt-2
                        text-sm
                        uppercase
                        tracking-[0.18em]
                        text-[#C9A66B]
                      "
                    >
                      {project.technologies
                        .slice(0, 3)
                        .join(" · ")}
                    </p>
                  </div>

                  {/* Project Icon */}

                  <div
                    className={`
                      hidden
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-full
                      border
                      text-xl
                      transition-all
                      duration-300
                      lg:flex

                      ${
                        theme === "dark"
                          ? `
                            border-white/10
                            bg-white/[0.025]
                            text-[#C9A66B]
                            group-hover:border-[#C9A66B]/30
                            group-hover:bg-[#C9A66B]/[0.05]
                          `
                          : `
                            border-black/10
                            bg-white
                            text-[#9A743B]
                            group-hover:border-[#9A743B]/30
                            group-hover:bg-[#9A743B]/[0.04]
                          `
                      }
                    `}
                  >
                    {project.icon}
                  </div>
                </div>

                {/* ==================================================
                    LARGE PROJECT VISUAL
                ================================================== */}

                <div
                  className={`
                    relative
                    overflow-hidden
                    rounded-3xl
                    border

                    ${
                      theme === "dark"
                        ? `
                          border-white/[0.08]
                          bg-[#111111]
                        `
                        : `
                          border-black/[0.08]
                          bg-white
                        `
                    }
                  `}
                >
                  {/* Top Gold Line */}

                  <div
                    className="
                      absolute
                      left-1/2
                      top-0
                      z-20
                      h-px
                      w-1/3
                      -translate-x-1/2
                      bg-gradient-to-r
                      from-transparent
                      via-[#C9A66B]/60
                      to-transparent
                    "
                  />

                  <motion.div
                    whileHover={
                      prefersReducedMotion
                        ? undefined
                        : {
                            scale: 1.025,
                          }
                    }
                    transition={{
                      duration: 0.7,
                      ease: "easeOut",
                    }}
                    className="
                      relative
                      aspect-[16/8]
                      overflow-hidden
                      sm:aspect-[16/7]
                    "
                  >
                    <img
                      src={getImagePath(
                        project.image
                      )}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      className="
                        h-full
                        w-full
                        object-cover
                      "
                      onError={(e) => {
                        const target =
                          e.currentTarget;

                        target.onerror = null;

                        target.src =
                          `data:image/svg+xml,${encodeURIComponent(
                            `
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1200"
                                height="600"
                              >
                                <rect
                                  width="100%"
                                  height="100%"
                                  fill="#111111"
                                />

                                <text
                                  x="50%"
                                  y="50%"
                                  fill="#C9A66B"
                                  font-family="sans-serif"
                                  font-size="42"
                                  text-anchor="middle"
                                  dominant-baseline="middle"
                                >
                                  ${project.title}
                                </text>
                              </svg>
                            `
                          )}`;
                      }}
                    />

                    {/* Image Overlay */}

                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/60
                        via-black/10
                        to-transparent
                      "
                    />

                    {/* Project Icon */}

                    <div
                      className="
                        absolute
                        bottom-5
                        left-5
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-white/15
                        bg-black/40
                        text-xl
                        text-[#D8BC91]
                        backdrop-blur-md
                        sm:bottom-7
                        sm:left-7
                      "
                    >
                      {project.icon}
                    </div>

                    {/* View Button */}

                    {isLive && (
                      <a
                        href={
                          project.link
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) =>
                          e.stopPropagation()
                        }
                        className="
                          absolute
                          right-5
                          top-5
                          inline-flex
                          h-11
                          items-center
                          gap-2
                          rounded-full
                          border
                          border-white/15
                          bg-black/40
                          px-5
                          text-xs
                          font-semibold
                          text-white
                          opacity-0
                          backdrop-blur-md
                          transition-all
                          duration-300
                          group-hover:opacity-100
                          hover:border-[#C9A66B]/50
                          hover:bg-black/60
                          sm:right-7
                          sm:top-7
                        "
                      >
                        <span>
                          Visit Project
                        </span>

                        <FaExternalLinkAlt
                          className="text-[10px]"
                          aria-hidden="true"
                        />
                      </a>
                    )}
                  </motion.div>
                </div>

                {/* ==================================================
                    PROJECT INFORMATION
                ================================================== */}

                <div
                  className="
                    mt-7
                    grid
                    grid-cols-1
                    gap-8
                    lg:grid-cols-12
                  "
                >
                  {/* Description */}

                  <div
                    className="
                      lg:col-span-7
                    "
                  >
                    <p
                      className={`
                        max-w-3xl
                        text-base
                        leading-7
                        sm:text-lg
                        sm:leading-8

                        ${
                          theme === "dark"
                            ? "text-[#96928A]"
                            : "text-[#65615A]"
                        }
                      `}
                    >
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}

                  <div
                    className="
                      lg:col-span-5
                    "
                  >
                    <div
                      className="
                        mb-3
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.25em]
                        text-[#C9A66B]
                      "
                    >
                      Built With
                    </div>

                    <div
                      className="
                        flex
                        flex-wrap
                        gap-2
                      "
                    >
                      {project.technologies.map(
                        (tech) => (
                          <span
                            key={tech}
                            className={`
                              rounded-full
                              border
                              px-3
                              py-1.5
                              text-xs
                              font-medium
                              transition-colors
                              duration-300

                              ${
                                theme === "dark"
                                  ? `
                                    border-white/10
                                    bg-white/[0.025]
                                    text-white/60
                                    group-hover:border-[#C9A66B]/20
                                    group-hover:text-[#D8BC91]
                                  `
                                  : `
                                    border-black/10
                                    bg-black/[0.015]
                                    text-[#65615A]
                                    group-hover:border-[#9A743B]/20
                                    group-hover:text-[#7C5B2B]
                                  `
                              }
                            `}
                          >
                            {tech}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </div>

                {/* ==================================================
                    PROJECT LINKS
                ================================================== */}

                <div
                  className="
                    mt-8
                    flex
                    flex-wrap
                    items-center
                    gap-6
                  "
                >
                  {isLive && (
                    <motion.a
                      href={
                        project.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={
                        prefersReducedMotion
                          ? undefined
                          : {
                              x: 4,
                            }
                      }
                      className="
                        group/link
                        inline-flex
                        items-center
                        gap-3
                        text-sm
                        font-semibold
                        text-[#C9A66B]
                      "
                    >
                      <span>
                        View Live Project
                      </span>

                      <FaArrowRight
                        className="
                          text-xs
                          transition-transform
                          duration-200
                          group-hover/link:translate-x-1
                        "
                        aria-hidden="true"
                      />
                    </motion.a>
                  )}

                  {project.github &&
                    (project.github as string) !==
                      "#" && (
                      <motion.a
                        href={
                          project.github
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={
                          prefersReducedMotion
                            ? undefined
                            : {
                                x: 4,
                              }
                        }
                        className={`
                          inline-flex
                          items-center
                          gap-2
                          text-sm
                          font-medium

                          ${
                            theme === "dark"
                              ? "text-white/40 hover:text-white/80"
                              : "text-black/40 hover:text-black/80"
                          }
                        `}
                      >
                        <FaGithub
                          className="text-base"
                          aria-hidden="true"
                        />

                        <span>
                          Source Code
                        </span>
                      </motion.a>
                    )}
                </div>

                {/* ==================================================
                    DIVIDER
                ================================================== */}

                {index <
                  PROJECTS.length - 1 && (
                  <div
                    className="
                      mt-16
                      h-px
                      bg-gradient-to-r
                      from-[#C9A66B]/20
                      via-white/[0.06]
                      to-transparent
                    "
                  />
                )}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ============================================================
// VIEW MY WORK
// ============================================================

const ViewMyWork = () => {
  const [ref, inView] =
    useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

  const { theme } = useTheme();

  const prefersReducedMotion =
    useReducedMotion();

  const navigate =
    useNavigate();

  const cards = [
    {
      title: "About Me",
      description:
        "View my resume, tech stack, and achievements",
      icon: <FaUser />,
      accent:
        "primary" as AccentColor,
      onClick: () =>
        navigate("/about-me"),
    },
    {
      title: "My Projects",
      description:
        "Explore all my completed projects with live links",
      icon: <FaFolderOpen />,
      accent:
        "accent" as AccentColor,
      onClick: () =>
        navigate("/projects"),
    },
    {
      title: "GitHub Profile",
      description:
        "Visit my GitHub profile and see my open-source work",
      icon: <FaGithub />,
      accent:
        "primary" as AccentColor,
      onClick: () =>
        navigate("/github"),
    },
  ];

  return (
    <section
      id="view-my-work"
      className="
        relative
        py-20
        px-4
        overflow-hidden
      "
    >
      <div
        className={`
          absolute
          inset-0
          bg-gradient-to-b

          ${t(
            theme,
            `
              from-transparent
              via-[#C9A66B]/[0.025]
              to-transparent
            `,
            `
              from-transparent
              via-[#9A743B]/[0.025]
              to-transparent
            `
          )}
        `}
      />

      <div
        className="
          max-w-7xl
          mx-auto
          relative
          z-10
        "
      >
        {/* Heading */}

        <div
          className="
            text-center
            mb-12
          "
        >
          <motion.h2
            ref={ref}
            initial={
              prefersReducedMotion
                ? false
                : {
                    opacity: 0,
                    y: 20,
                  }
            }
            animate={
              inView
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {}
            }
            transition={{
              duration: 0.5,
            }}
            className="
              text-4xl
              sm:text-5xl
              font-bold
              bg-gradient-to-r
              from-[#C9A66B]
              to-[#D8BC91]
              bg-clip-text
              text-transparent
            "
          >
            View My Work
          </motion.h2>

          <motion.p
            initial={
              prefersReducedMotion
                ? false
                : {
                    opacity: 0,
                    y: 20,
                  }
            }
            animate={
              inView
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {}
            }
            transition={{
              delay: 0.2,
            }}
            className={`
              text-lg
              max-w-2xl
              mx-auto

              ${t(
                theme,
                "text-gray-400",
                "text-gray-600"
              )}
            `}
          >
            Explore my professional
            information and projects
          </motion.p>
        </div>

        {/* Cards */}

        <motion.div
          initial={
            prefersReducedMotion
              ? false
              : {
                  opacity: 0,
                  y: 50,
                }
          }
          animate={
            inView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            delay: 0.3,
          }}
          className="
            grid
            grid-cols-1
            md:grid-cols-3
            gap-8
            max-w-6xl
            mx-auto
          "
        >
          {cards.map(
            (card, index) => {
              const accent =
                getAccentClasses(
                  card.accent,
                  theme
                );

              return (
                <motion.div
                  key={
                    card.title
                  }
                  initial={
                    prefersReducedMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 30,
                        }
                  }
                  animate={
                    inView
                      ? {
                          opacity: 1,
                          y: 0,
                        }
                      : {}
                  }
                  transition={{
                    delay:
                      0.4 +
                      index * 0.1,
                  }}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                  }}
                  onClick={
                    card.onClick
                  }
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (
                      e.key ===
                        "Enter" ||
                      e.key ===
                        " "
                    ) {
                      e.preventDefault();

                      card.onClick();
                    }
                  }}
                  className={`
                    group
                    relative
                    backdrop-blur-md
                    rounded-2xl
                    p-6
                    cursor-pointer
                    border
                    transition-all
                    duration-300
                    focus-visible:outline
                    focus-visible:outline-2
                    focus-visible:outline-[#C9A66B]

                    ${t(
                      theme,
                      "bg-white/5",
                      "bg-white shadow-sm"
                    )}

                    ${accent.cardBorder}

                    ${accent.cardBorderHover}
                  `}
                >
                  {/* Hover Background */}

                  <div
                    className={`
                      absolute
                      inset-0
                      rounded-2xl
                      opacity-0
                      group-hover:opacity-100
                      transition-opacity
                      duration-300
                      bg-gradient-to-r

                      ${t(
                        theme,
                        card.accent ===
                          "primary"
                          ? `
                            from-[#C9A66B]/[0.06]
                            to-transparent
                          `
                          : `
                            from-[#C9A66B]/[0.035]
                            to-transparent
                          `,
                        card.accent ===
                          "primary"
                          ? `
                            from-[#C9A66B]/[0.05]
                            to-transparent
                          `
                          : `
                            from-[#9A743B]/[0.04]
                            to-transparent
                          `
                      )}
                    `}
                  />

                  <div
                    className="
                      relative
                      z-10
                      text-center
                    "
                  >
                    {/* Icon */}

                    <div
                      className={`
                        inline-flex
                        p-4
                        rounded-2xl
                        mb-4
                        group-hover:scale-110
                        transition-transform

                        ${t(
                          theme,
                          card.accent ===
                            "primary"
                            ? "bg-white/[0.05]"
                            : "bg-[#C9A66B]/[0.06]",
                          card.accent ===
                            "primary"
                            ? "bg-black/[0.025]"
                            : "bg-[#9A743B]/[0.05]"
                        )}
                      `}
                    >
                      <div
                        className={`
                          text-4xl
                          ${accent.text}
                        `}
                        aria-hidden="true"
                      >
                        {
                          card.icon
                        }
                      </div>
                    </div>

                    <h3
                      className={`
                        text-xl
                        font-bold
                        mb-2

                        ${t(
                          theme,
                          "text-white",
                          "text-gray-900"
                        )}
                      `}
                    >
                      {
                        card.title
                      }
                    </h3>

                    <p
                      className={`
                        text-sm
                        leading-relaxed
                        mb-4

                        ${t(
                          theme,
                          "text-gray-400",
                          "text-gray-600"
                        )}
                      `}
                    >
                      {
                        card.description
                      }
                    </p>

                    <motion.div
                      className={`
                        inline-flex
                        items-center
                        gap-2
                        text-sm
                        font-medium
                        ${accent.text}
                      `}
                      whileHover={{
                        x: 5,
                      }}
                    >
                      <span>
                        Click to explore
                      </span>

                      <FaExternalLinkAlt
                        className="
                          text-xs
                        "
                        aria-hidden="true"
                      />
                    </motion.div>
                  </div>

                  {/* Bottom Accent */}

                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      right-0
                      h-0.5
                      rounded-b-2xl
                      opacity-0
                      group-hover:opacity-100
                      transition-opacity
                      duration-300
                      bg-gradient-to-r
                      from-[#C9A66B]
                      to-transparent
                    "
                  />
                </motion.div>
              );
            }
          )}
        </motion.div>
      </div>
    </section>
  );
};

// ============================================================
// CONTACT
// ============================================================

const MAX_MESSAGE_LENGTH = 1000;

const Contact = () => {
  const [ref, inView] =
    useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

  const { theme } = useTheme();

  const prefersReducedMotion =
    useReducedMotion();

  const [form, setForm] =
    useState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

  const [status, setStatus] =
    useState<
      "idle" |
      "sending" |
      "sent" |
      "error"
    >("idle");

  const honeypotRef =
    useRef<HTMLInputElement>(
      null
    );

  // ==========================================================
  // Input Change
  // ==========================================================

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement
    >
  ) => {
    setForm(
      (previous) => ({
        ...previous,
        [e.target.name]:
          e.target.value,
      })
    );
  };

  // ==========================================================
  // Submit
  // ==========================================================

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.message
    ) {
      return;
    }

    // Honeypot

    if (
      honeypotRef.current?.value
    ) {
      setStatus("sent");

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      return;
    }

    setStatus("sending");

    try {
      await emailjs.send(
        import.meta.env
          .VITE_EMAILJS_SERVICE_ID ||
          "YOUR_SERVICE_ID",
        import.meta.env
          .VITE_EMAILJS_TEMPLATE_ID ||
          "YOUR_TEMPLATE_ID",
        {
          from_name:
            form.name,
          to_name:
            siteConfig.name,
          from_email:
            form.email,
          to_email:
            siteConfig.email,
          subject:
            form.subject,
          message:
            form.message,
        },
        import.meta.env
          .VITE_EMAILJS_PUBLIC_KEY ||
          "YOUR_PUBLIC_KEY"
      );

      setStatus("sent");

      toast.success(
        "Message sent successfully!"
      );

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setStatus("error");

      toast.error(
        "Failed to send message. Please try again later."
      );

      console.error(
        "EmailJS Error:",
        error
      );
    }
  };

  // ==========================================================
  // Input Styling
  // ==========================================================

  const inputClass = `
    w-full
    px-4
    py-3
    rounded-xl
    border
    outline-none
    text-sm
    transition-all
    duration-200
    focus:ring-2
    focus:ring-[#C9A66B]/20

    ${t(
      theme,
      `
        bg-white/[0.025]
        border-white/10
        text-[#F5F3EE]
        placeholder-[#706D67]
        focus:border-[#C9A66B]/45
      `,
      `
        bg-white/80
        border-black/10
        text-[#171717]
        placeholder-[#918D84]
        focus:border-[#9A743B]/45
      `
    )}
  `;

  return (
    <section
      id="contact"
      className="
        relative
        py-20
        px-4
        overflow-hidden
      "
    >
      <div
        className={`
          absolute
          inset-0
          bg-gradient-to-b

          ${t(
            theme,
            `
              from-transparent
              via-[#C9A66B]/[0.025]
              to-transparent
            `,
            `
              from-transparent
              via-[#9A743B]/[0.025]
              to-transparent
            `
          )}
        `}
      />

      <div
        className="
          max-w-6xl
          mx-auto
          relative
          z-10
        "
      >
        {/* Heading */}

        <div
          className="
            text-center
            mb-14
          "
        >
          <motion.h2
            ref={ref}
            initial={
              prefersReducedMotion
                ? false
                : {
                    opacity: 0,
                    y: 20,
                  }
            }
            animate={
              inView
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {}
            }
            className="
              text-4xl
              sm:text-5xl
              font-bold
              bg-gradient-to-r
              from-[#C9A66B]
              to-[#D8BC91]
              bg-clip-text
              text-transparent
            "
          >
            Get In Touch
          </motion.h2>

          <motion.p
            initial={
              prefersReducedMotion
                ? false
                : {
                    opacity: 0,
                    y: 20,
                  }
            }
            animate={
              inView
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {}
            }
            transition={{
              delay: 0.2,
            }}
            className={`
              text-lg
              mt-4
              max-w-xl
              mx-auto

              ${t(
                theme,
                "text-gray-400",
                "text-gray-600"
              )}
            `}
          >
            Have a project in mind or
            just want to say hello?
            My inbox is always open.
          </motion.p>
        </div>

        {/* Grid */}

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-5
            gap-8
            items-stretch
          "
        >
          {/* ==================================================
              LEFT COLUMN
          ================================================== */}

          <motion.div
            initial={
              prefersReducedMotion
                ? false
                : {
                    opacity: 0,
                    x: -30,
                  }
            }
            animate={
              inView
                ? {
                    opacity: 1,
                    x: 0,
                  }
                : {}
            }
            transition={{
              delay: 0.2,
            }}
            className="
              lg:col-span-2
              flex
              flex-col
              gap-6
              h-full
            "
          >
            {/* Contact Info */}

            <div
              className={`
                rounded-2xl
                p-6
                border
                flex-1

                ${t(
                  theme,
                  `
                    bg-white/[0.025]
                    border-white/10
                  `,
                  `
                    bg-white
                    border-black/10
                    shadow-sm
                  `
                )}
              `}
            >
              <h3
                className={`
                  text-xl
                  font-bold
                  mb-4

                  ${t(
                    theme,
                    "text-white",
                    "text-gray-900"
                  )}
                `}
              >
                Contact Info
              </h3>

              <div
                className="
                  space-y-4
                "
              >
                {[
                  {
                    icon: FaEnvelope,
                    label: "Email",
                    value:
                      siteConfig.email,
                    href:
                      `mailto:${siteConfig.email}`,
                  },
                  {
                    icon: FaPhone,
                    label: "Phone",
                    value:
                      siteConfig.phone,
                    href:
                      `tel:${siteConfig.phone.replace(
                        /\s/g,
                        ""
                      )}`,
                  },
                  {
                    icon: FaMapMarkerAlt,
                    label:
                      "Location",
                    value:
                      siteConfig.location,
                    href:
                      undefined,
                  },
                ].map(
                  ({
                    icon: Icon,
                    label,
                    value,
                    href,
                  }) =>
                    href ? (
                      <a
                        key={
                          label
                        }
                        href={
                          href
                        }
                        className={`
                          flex
                          items-start
                          gap-3
                          transition-colors
                          rounded

                          ${t(
                            theme,
                            `
                              text-gray-400
                              hover:text-[#C9A66B]
                            `,
                            `
                              text-[#65615A]
                              hover:text-[#9A743B]
                            `
                          )}
                        `}
                      >
                        <div
                          className={`
                            mt-0.5
                            p-2
                            rounded-lg

                            ${t(
                              theme,
                              "bg-[#C9A66B]/[0.06]",
                              "bg-[#9A743B]/[0.05]"
                            )}
                          `}
                        >
                          <Icon
                            className={`
                              text-sm
                              ${t(
                                theme,
                                "text-[#C9A66B]",
                                "text-[#9A743B]"
                              )}
                            `}
                            aria-hidden="true"
                          />
                        </div>

                        <div>
                          <p
                            className="
                              text-xs
                              opacity-60
                            "
                          >
                            {
                              label
                            }
                          </p>

                          <p
                            className="
                              text-sm
                              font-medium
                            "
                          >
                            {
                              value
                            }
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div
                        key={
                          label
                        }
                        className={`
                          flex
                          items-start
                          gap-3

                          ${t(
                            theme,
                            "text-gray-400",
                            "text-gray-600"
                          )}
                        `}
                      >
                        <div
                          className={`
                            mt-0.5
                            p-2
                            rounded-lg

                            ${t(
                              theme,
                              "bg-[#C9A66B]/[0.06]",
                              "bg-[#9A743B]/[0.05]"
                            )}
                          `}
                        >
                          <Icon
                            className={`
                              text-sm
                              ${t(
                                theme,
                                "text-[#C9A66B]",
                                "text-[#9A743B]"
                              )}
                            `}
                            aria-hidden="true"
                          />
                        </div>

                        <div>
                          <p
                            className="
                              text-xs
                              opacity-60
                            "
                          >
                            {
                              label
                            }
                          </p>

                          <p
                            className="
                              text-sm
                              font-medium
                            "
                          >
                            {
                              value
                            }
                          </p>
                        </div>
                      </div>
                    )
                )}
              </div>
            </div>

            {/* Social */}

            <div
              className={`
                rounded-2xl
                p-6
                border
                flex-1

                ${t(
                  theme,
                  `
                    bg-white/[0.025]
                    border-white/10
                  `,
                  `
                    bg-white
                    border-black/10
                    shadow-sm
                  `
                )}
              `}
            >
              <h3
                className={`
                  text-lg
                  font-bold
                  mb-4

                  ${t(
                    theme,
                    "text-white",
                    "text-gray-900"
                  )}
                `}
              >
                Check out my
              </h3>

              <div
                className="
                  flex
                  gap-3
                "
              >
                {[
                  {
                    icon: FaGithub,
                    href:
                      siteConfig.github,
                    label:
                      "GitHub",
                  },
                  {
                    icon: FaLinkedin,
                    href:
                      siteConfig.linkedin,
                    label:
                      "LinkedIn",
                  },
                  {
                    icon: SiLeetcode,
                    href:
                      siteConfig.leetcode,
                    label:
                      "LeetCode",
                  },
                ].map(
                  ({
                    icon: Icon,
                    href,
                    label,
                  }) => (
                    <motion.a
                      key={
                        label
                      }
                      href={
                        href
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={
                        label
                      }
                      whileHover={{
                        y: -3,
                        scale: 1.1,
                      }}
                      className={`
                        p-3
                        rounded-xl
                        border
                        transition-all

                        ${t(
                          theme,
                          `
                            bg-white/[0.025]
                            border-white/10
                            text-[#A7A39A]
                            hover:text-[#F5F3EE]
                            hover:border-[#C9A66B]/30
                          `,
                          `
                            bg-black/[0.015]
                            border-black/10
                            text-[#77716A]
                            hover:text-[#171717]
                            hover:border-[#9A743B]/30
                          `
                        )}
                      `}
                    >
                      <Icon
                        className="
                          text-lg
                        "
                      />
                    </motion.a>
                  )
                )}
              </div>
            </div>
          </motion.div>

          {/* ==================================================
              RIGHT COLUMN
          ================================================== */}

          <motion.div
            initial={
              prefersReducedMotion
                ? false
                : {
                    opacity: 0,
                    x: 30,
                  }
            }
            animate={
              inView
                ? {
                    opacity: 1,
                    x: 0,
                  }
                : {}
            }
            transition={{
              delay: 0.3,
            }}
            className="
              lg:col-span-3
              h-full
            "
          >
            <div
              className={`
                rounded-2xl
                p-8
                border
                h-full

                ${t(
                  theme,
                  `
                    bg-white/[0.025]
                    border-white/10
                  `,
                  `
                    bg-white
                    border-black/10
                    shadow-sm
                  `
                )}
              `}
            >
              <AnimatePresence
                mode="wait"
              >
                {status ===
                "sent" ? (
                  <motion.div
                    key="success"
                    role="status"
                    aria-live="polite"
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.9,
                    }}
                    className="
                      flex
                      flex-col
                      items-center
                      justify-center
                      h-full
                      min-h-[300px]
                      text-center
                      gap-4
                    "
                  >
                    <FaCheckCircle
                      className="
                        text-5xl
                        text-green-400
                      "
                      aria-hidden="true"
                    />

                    <h3
                      className={`
                        text-xl
                        font-bold

                        ${t(
                          theme,
                          "text-white",
                          "text-gray-900"
                        )}
                      `}
                    >
                      Message Sent!
                    </h3>

                    <p
                      className={`
                        text-sm

                        ${t(
                          theme,
                          "text-gray-400",
                          "text-gray-600"
                        )}
                      `}
                    >
                      Thanks for reaching
                      out,{" "}
                      {
                        siteConfig.name.split(
                          " "
                        )[0]
                      }{" "}
                      will get back to you
                      within 24 hours.
                    </p>

                    <button
                      onClick={() =>
                        setStatus(
                          "idle"
                        )
                      }
                      className="
                        mt-4
                        text-sm
                        text-[#C9A66B]
                        hover:text-[#D8BC91]
                        underline
                        underline-offset-4
                        rounded
                      "
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={
                      handleSubmit
                    }
                    className="
                      space-y-4
                      h-full
                      flex
                      flex-col
                    "
                    noValidate
                  >
                    {/* Honeypot */}

                    <input
                      ref={
                        honeypotRef
                      }
                      type="text"
                      name="company"
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                      className="
                        absolute
                        left-[-9999px]
                        w-px
                        h-px
                        opacity-0
                      "
                    />

                    {/* Name + Email */}

                    <div
                      className="
                        grid
                        grid-cols-1
                        sm:grid-cols-2
                        gap-4
                      "
                    >
                      <div>
                        <label
                          htmlFor="contact-name"
                          className={`
                            block
                            text-xs
                            font-medium
                            mb-1.5

                            ${t(
                              theme,
                              "text-gray-400",
                              "text-gray-600"
                            )}
                          `}
                        >
                          Name *
                        </label>

                        <input
                          id="contact-name"
                          type="text"
                          name="name"
                          value={
                            form.name
                          }
                          onChange={
                            handleChange
                          }
                          placeholder="Your name"
                          required
                          autoComplete="name"
                          className={
                            inputClass
                          }
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="contact-email"
                          className={`
                            block
                            text-xs
                            font-medium
                            mb-1.5

                            ${t(
                              theme,
                              "text-gray-400",
                              "text-gray-600"
                            )}
                          `}
                        >
                          Email *
                        </label>

                        <input
                          id="contact-email"
                          type="email"
                          name="email"
                          value={
                            form.email
                          }
                          onChange={
                            handleChange
                          }
                          placeholder="your@email.com"
                          required
                          autoComplete="email"
                          className={
                            inputClass
                          }
                        />
                      </div>
                    </div>

                    {/* Subject */}

                    <div>
                      <label
                        htmlFor="contact-subject"
                        className={`
                          block
                          text-xs
                          font-medium
                          mb-1.5

                          ${t(
                            theme,
                            "text-gray-400",
                            "text-gray-600"
                          )}
                        `}
                      >
                        Subject
                      </label>

                      <input
                        id="contact-subject"
                        type="text"
                        name="subject"
                        value={
                          form.subject
                        }
                        onChange={
                          handleChange
                        }
                        placeholder="Project Collaboration"
                        className={
                          inputClass
                        }
                      />
                    </div>

                    {/* Message */}

                    <div
                      className="
                        flex
                        flex-1
                        flex-col
                      "
                    >
                      <div
                        className="
                          flex
                          items-center
                          justify-between
                          mb-1.5
                        "
                      >
                        <label
                          htmlFor="contact-message"
                          className={`
                            block
                            text-xs
                            font-medium

                            ${t(
                              theme,
                              "text-gray-400",
                              "text-gray-600"
                            )}
                          `}
                        >
                          Message *
                        </label>

                        <span
                          className={`
                            text-xs

                            ${t(
                              theme,
                              "text-gray-500",
                              "text-gray-400"
                            )}
                          `}
                        >
                          {
                            form.message.length
                          }
                          /
                          {
                            MAX_MESSAGE_LENGTH
                          }
                        </span>
                      </div>

                      <textarea
                        id="contact-message"
                        name="message"
                        value={
                          form.message
                        }
                        onChange={
                          handleChange
                        }
                        placeholder="Tell me about your project..."
                        required
                        rows={5}
                        maxLength={
                          MAX_MESSAGE_LENGTH
                        }
                        className={`
                          ${inputClass}
                          resize-none
                          flex-1
                          min-h-[120px]
                        `}
                      />
                    </div>

                    {/* Submit */}

                    <motion.button
                      type="submit"
                      disabled={
                        status ===
                        "sending"
                      }
                      whileHover={{
                        scale: 1.02,
                      }}
                      whileTap={{
                        scale: 0.98,
                      }}
                      className="
                        w-full
                        inline-flex
                        items-center
                        justify-center
                        gap-2
                        bg-[#F5F3EE]
                        py-3.5
                        rounded-full
                        font-semibold
                        text-[#0A0A0A]
                        shadow-lg
                        hover:bg-[#C9A66B]
                        transition-all
                        disabled:opacity-60
                        disabled:cursor-not-allowed
                        focus-visible:outline
                        focus-visible:outline-2
                        focus-visible:outline-offset-2
                        focus-visible:outline-[#C9A66B]
                      "
                    >
                      {status ===
                      "sending" ? (
                        <>
                          <svg
                            className="
                              animate-spin
                              h-4
                              w-4
                            "
                            fill="none"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />

                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="
                                M4 12
                                a8 8 0 018-8
                                V0
                                C5.373 0
                                0 5.373 0 12
                                h4z
                              "
                            />
                          </svg>

                          <span>
                            Sending...
                          </span>
                        </>
                      ) : (
                        <>
                          <FaPaperPlane
                            className="
                              text-sm
                            "
                            aria-hidden="true"
                          />

                          <span>
                            Send Message
                          </span>
                        </>
                      )}
                    </motion.button>

                    {/* Error */}

                    {status ===
                      "error" && (
                      <p
                        className="
                          text-sm
                          text-red-400
                          text-center
                        "
                        role="alert"
                      >
                        Something went wrong.
                        Please email directly
                        at{" "}

                        <a
                          href={`mailto:${siteConfig.email}`}
                          className="
                            underline
                          "
                        >
                          {
                            siteConfig.email
                          }
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

// ============================================================
// SCROLL TO TOP
// ============================================================

const ScrollToTop = () => {
  const [visible, setVisible] =
    useState(false);

  const prefersReducedMotion =
    useReducedMotion();

  useEffect(() => {
    const onScroll = () => {
      setVisible(
        window.scrollY > 400
      );
    };

    window.addEventListener(
      "scroll",
      onScroll,
      {
        passive: true,
      }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        onScroll
      );
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 0.8,
          }}
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior:
                prefersReducedMotion
                  ? "auto"
                  : "smooth",
            })
          }
          className="
            fixed
            bottom-6
            right-6
            z-50
            w-11
            h-11
            rounded-full
            bg-[#F5F3EE]
            flex
            items-center
            justify-center
            text-[#0A0A0A]
            shadow-lg
            hover:bg-[#C9A66B]
            transition-shadow
            focus-visible:outline
            focus-visible:outline-2
            focus-visible:outline-offset-2
            focus-visible:outline-[#C9A66B]
          "
          aria-label="Scroll to top"
        >
          <svg
            className="
              w-4
              h-4
            "
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="
                M5 15
                l7-7
                7 7
              "
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

// ============================================================
// MAIN EXPORT
// ============================================================

const HomePage = () => {
  const { theme } =
    useTheme();

  const location =
    useLocation();

  // ==========================================================
  // Scroll to View My Work after navigation
  // ==========================================================

  useEffect(() => {
    const state =
      location.state as {
        scrollTo?: string;
      } | null;

    if (
      state?.scrollTo ===
      "view-my-work"
    ) {
      const timer =
        window.setTimeout(
          () => {
            const section =
              document.getElementById(
                "view-my-work"
              );

            if (section) {
              section.scrollIntoView(
                {
                  behavior:
                    "smooth",
                }
              );
            }

            window.history.replaceState(
              {},
              document.title
            );
          },
          100
        );

      return () =>
        window.clearTimeout(
          timer
        );
    }
  }, [location]);

  return (
    <div
      className={`
        min-h-screen
        overflow-x-hidden
        transition-colors
        duration-300

        ${t(
          theme,
          `
            bg-[#0A0A0A]
            text-[#F5F3EE]
          `,
          `
            bg-[#F5F4EF]
            text-[#171717]
          `
        )}
      `}
    >
      <main>
        {/* Home / Hero */}

        <section id="about-me">
          <Hero />
        </section>

        {/* Skills */}

        <section id="skills">
          <Skills />
        </section>

        {/* Projects */}

        <ProjectsSection />

        {/* View My Work */}

        <section id="view-my-work">
          <ViewMyWork />
        </section>

        {/* Contact */}

        <section id="contact">
          <Contact />
        </section>
      </main>

      <ScrollToTop />
    </div>
  );
};

export default HomePage;
