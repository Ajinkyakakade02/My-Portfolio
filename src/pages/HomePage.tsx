// src/pages/HomePage.tsx

import { useState, useRef, useEffect } from "react";
import {
motion,
AnimatePresence,
useReducedMotion,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
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
FaDocker,
FaGitAlt,
FaUser,
FaFolderOpen,
FaJava,
FaPython,
FaServer,
FaExternalLinkAlt,
FaAws,
FaGraduationCap,
FaKey,
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
SiHibernate,
SiRedux,
SiMui,
SiJsonwebtokens,
SiSwagger,
SiPostman,
} from "react-icons/si";

import { useTheme } from "@/hooks/useTheme";
import MascotWidget from "@/components/shared/MascotWidget";
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
     relative
     min-h-screen
     flex
     items-center
     justify-center
     pt-20
   "
 >
<div
     className="
       relative
       max-w-7xl
       mx-auto
       px-4
       sm:px-6
       lg:px-8
       py-16
       w-full
     "
   >
      {/* Center Penguin Mascot */}
      <MascotWidget />

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
            max-w-full
            flex-wrap
            items-center
            justify-center
            gap-x-3
            gap-y-2
            px-5
            py-2
            rounded-2xl
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
          {/* Status Dot */}
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

          {/* Developer Title */}
          <span className="whitespace-nowrap font-semibold">
            Full Stack Developer
          </span>

          {/* Separator */}
          <span className="text-[#A7A39A]/60">|</span>

          {/* Spring Boot */}
          <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
            <SiSpringboot
              className="text-base"
              style={{ color: "#6DB33F" }}
              aria-hidden="true"
            />
            <span>Spring Boot</span>
          </span>

          {/* React */}
          <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
            <FaReact
              className="text-base"
              style={{ color: "#61DAFB" }}
              aria-hidden="true"
            />
            <span>React</span>
          </span>

          {/* TypeScript */}
          <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
            <SiTypescript
              className="text-base"
              style={{ color: "#3178C6" }}
              aria-hidden="true"
            />
            <span>TypeScript</span>
          </span>

          {/* MySQL */}
          <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
            <SiMysql
              className="text-base"
              style={{ color: "#4479A1" }}
              aria-hidden="true"
            />
            <span>MySQL</span>
          </span>

          {/* MongoDB */}
          <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
            <SiMongodb
              className="text-base"
              style={{ color: "#47A248" }}
              aria-hidden="true"
            />
            <span>MongoDB</span>
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
                208+
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
    name: "Python",
    icon: FaPython,
    color: "#3776AB",
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
    name: "JPA / Hibernate",
    icon: SiHibernate,
    color: "#59666C",
  },
  {
    name: "REST APIs",
    icon: FaServer,
    color: "#A78BFA",
  },
  {
    name: "JWT",
    icon: SiJsonwebtokens,
    color: "#D63AFF",
  },
  {
    name: "Maven",
    icon: FaServer,
    color: "#C71A36",
  },
  {
    name: "WebSocket",
    icon: FaServer,
    color: "#C9A66B",
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
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#06B6D4",
  },
  {
    name: "Material UI",
    icon: SiMui,
    color: "#007FFF",
  },
  {
    name: "Redux Toolkit",
    icon: SiRedux,
    color: "#764ABC",
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
    name: "Git",
    icon: FaGitAlt,
    color: "#F05032",
  },
  {
    name: "Docker",
    icon: FaDocker,
    color: "#2496ED",
  },
  {
    name: "Postman",
    icon: SiPostman,
    color: "#FF6C37",
  },
  {
    name: "Swagger / OpenAPI",
    icon: SiSwagger,
    color: "#85EA2D",
  },
];

const firstRow = technologies.slice(0, 9);
const secondRow = technologies.slice(9, 17);
const thirdRow = technologies.slice(17, 25);

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

const ProjectsSection = () => {
  const { theme } = useTheme();

  return (
    <section
      id="projects"
      className={`
        relative
        overflow-hidden
        py-24
        transition-colors
        duration-300

        ${
          theme === "dark"
            ? "bg-[#0A0A0A] text-[#F5F3EE]"
            : "bg-[#F5F4EF] text-[#171717]"
        }
      `}
    >
      {/* ======================================================
          Ambient background
      ======================================================= */}

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div
          className={`
            absolute
            left-[10%]
            top-[12%]
            h-72
            w-72
            rounded-full
            blur-[130px]

            ${
              theme === "dark"
                ? "bg-[#C9A66B]/[0.02]"
                : "bg-[#9A743B]/[0.03]"
            }
          `}
        />

        <div
          className={`
            absolute
            bottom-[10%]
            right-[5%]
            h-80
            w-80
            rounded-full
            blur-[140px]

            ${
              theme === "dark"
                ? "bg-white/[0.012]"
                : "bg-black/[0.015]"
            }
          `}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* ====================================================
            Page heading
        ===================================================== */}

        <div className="mb-12 text-center">
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <p
              className={`
                mb-3
                text-xs
                font-semibold
                uppercase
                tracking-[0.28em]
                ${
                  theme === "dark"
                    ? "text-[#C9A66B]"
                    : "text-[#9A743B]"
                }
              `}
            >
              Selected Work
            </p>

            <h1
              className={`
                text-4xl
                font-bold
                tracking-tight
                sm:text-5xl
                ${
                  theme ===
                  "dark"
                    ? "text-[#F5F3EE]"
                    : "text-[#171717]"
                }
              `}
            >
              My Projects
            </h1>

            <p
              className={`
                mx-auto
                mt-4
                max-w-2xl
                text-sm
                leading-7
                sm:text-base
                ${
                  theme ===
                  "dark"
                    ? "text-[#8F8B83]"
                    : "text-[#65615A]"
                }
              `}
            >
              A collection of applications and
              solutions built with modern
              technologies.
            </p>
          </motion.div>
        </div>

        {/* ====================================================
            Projects
        ===================================================== */}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {PROJECTS.map(
            (project, index) => {
              const isLive =
                (project.link as string) !==
                "#";

              return (
                <motion.div
                  key={project.id}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay:
                      index * 0.08,
                    duration: 0.5,
                  }}
                  whileHover={{
                    y: -6,
                  }}
                  onClick={() =>
                    isLive &&
                    window.open(
                      project.link,
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                  className={`
                    group
                    relative
                    flex
                    h-full
                    flex-col
                    overflow-hidden
                    rounded-2xl
                    border
                    transition-all
                    duration-300

                    ${
                      isLive
                        ? "cursor-pointer"
                        : "cursor-default"
                    }

                    ${
                      theme === "dark"
                        ? `
                          border-white/[0.07]
                          bg-[#141414]
                          hover:border-[#C9A66B]/30
                        `
                        : `
                          border-black/[0.07]
                          bg-white
                          hover:border-[#9A743B]/30
                        `
                    }
                  `}
                >
                  {/* ==================================================
                      Image
                  =================================================== */}

                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={getImagePath(
                        project.image
                      )}
                      alt={project.title}
                      loading="lazy"
                      className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-[1.04]
                      "
                      onError={(e) => {
                        const target =
                          e.currentTarget as HTMLImageElement;

                        target.onerror = null;

                        target.src =
                          `data:image/svg+xml,${encodeURIComponent(`
                            <svg xmlns="http://www.w3.org/2000/svg" width="400" height="200">
                              <rect width="100%" height="100%" fill="#141414"/>
                              <text
                                x="50%"
                                y="50%"
                                fill="#C9A66B"
                                font-family="sans-serif"
                                font-size="20"
                                text-anchor="middle"
                                dominant-baseline="middle"
                              >${project.title}</text>
                            </svg>
                          `)}`;
                      }}
                    />

                    {/* Image overlay */}

                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/80
                        via-black/10
                        to-transparent
                      "
                    />

                    {/* Project icon */}

                    <div
                      className="
                        absolute
                        bottom-4
                        left-5
                        text-3xl
                        text-white
                        drop-shadow-lg
                      "
                    >
                      {project.icon}
                    </div>

                    {/* External link */}

                    {isLive && (
                      <div
                        className="
                          absolute
                          right-4
                          top-4
                          flex
                          h-8
                          w-8
                          items-center
                          justify-center
                          rounded-full
                          bg-black/55
                          opacity-0
                          backdrop-blur-sm
                          transition-all
                          duration-200
                          group-hover:opacity-100
                        "
                      >
                        <FaExternalLinkAlt className="text-[10px] text-white" />
                      </div>
                    )}
                  </div>

                  {/* ==================================================
                      Content
                  =================================================== */}

                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-2 flex items-start justify-between gap-4">
                      <h3
                        className={`
                          text-xl
                          font-semibold
                          transition-colors
                          duration-200

                          ${
                            theme ===
                            "dark"
                              ? "text-[#F5F3EE] group-hover:text-[#D8BC91]"
                              : "text-[#171717] group-hover:text-[#9A743B]"
                          }
                        `}
                      >
                        {project.title}
                      </h3>
                    </div>

                    <p
                      className={`
                        mb-5
                        flex-1
                        text-sm
                        leading-7
                        ${
                          theme ===
                          "dark"
                            ? "text-[#858179]"
                            : "text-[#65615A]"
                        }
                      `}
                    >
                      {project.description}
                    </p>

                    {/* Technologies */}

                    <div className="mb-6 flex flex-wrap gap-2">
                      {project.technologies.map(
                        (tech) => (
                          <span
                            key={tech}
                            className={`
                              rounded-full
                              border
                              px-2.5
                              py-1
                              text-[11px]
                              transition-colors
                              duration-200

                              ${
                                theme ===
                                "dark"
                                  ? `
                                    border-white/[0.07]
                                    bg-white/[0.02]
                                    text-[#8F8B83]
                                    group-hover:border-[#C9A66B]/20
                                  `
                                  : `
                                    border-black/[0.07]
                                    bg-black/[0.012]
                                    text-[#65615A]
                                    group-hover:border-[#9A743B]/20
                                  `
                              }
                            `}
                          >
                            {tech}
                          </span>
                        )
                      )}
                    </div>

                    {/* Actions */}

                    <div
                      className="
                        mt-auto
                        flex
                        items-center
                        justify-between
                        gap-4
                      "
                    >
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{
                          x: 3,
                        }}
                        onClick={(e) =>
                          e.stopPropagation()
                        }
                        className={`
                          inline-flex
                          items-center
                          gap-2
                          rounded-full
                          text-sm
                          font-medium
                          transition-colors
                          duration-200

                          ${
                            theme ===
                            "dark"
                              ? "text-[#C9A66B] hover:text-[#D8BC91]"
                              : "text-[#9A743B] hover:text-[#7D5D2C]"
                          }
                        `}
                      >
                        <span>
                          View Project
                        </span>

                        <FaArrowRight className="text-xs" />
                      </motion.a>

                      {project.github &&
                        (project.github as string) !==
                          "#" && (
                          <motion.a
                            href={
                              project.github
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${project.title} on GitHub`}
                            whileHover={{
                              scale: 1.08,
                            }}
                            whileTap={{
                              scale: 0.95,
                            }}
                            onClick={(e) =>
                              e.stopPropagation()
                            }
                            className={`
                              flex
                              h-9
                              w-9
                              items-center
                              justify-center
                              rounded-full
                              border
                              transition-all
                              duration-200

                              ${
                                theme ===
                                "dark"
                                  ? `
                                    border-white/[0.07]
                                    text-[#77736B]
                                    hover:border-[#C9A66B]/30
                                    hover:text-[#D8BC91]
                                  `
                                  : `
                                    border-black/[0.07]
                                    text-[#77726A]
                                    hover:border-[#9A743B]/30
                                    hover:text-[#9A743B]
                                  `
                              }
                            `}
                          >
                            <FaGithub className="text-sm" />
                          </motion.a>
                        )}
                    </div>
                  </div>

                  {/* Bottom accent */}

                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-px
                      w-full
                      origin-left
                      scale-x-0
                      bg-[#C9A66B]
                      transition-transform
                      duration-300
                      group-hover:scale-x-100
                    "
                  />
                </motion.div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};





const certificates = [
  {
    id: 1,
    name: "Agentic AI Oracle",
    organization: "Oracle University",
    period: "July 2026",
    image: "/certificates/agentic-ai-oracle-thumbnail.jpg",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=C3E61DCCC8A83594C24EAF10BB8BB2060D8A67C29F62F2732BA2BFF1B5E1BAB3",
    description:
      "Earned the Agentic AI Certified Foundations Associate certification from Oracle, covering intelligent agents, autonomous decision-making, and real-world AI system design.",
  },
  {
    id: 2,
    name: "Java Spring Boot",
    organization: "Onwingspan",
    period: "April 2026",
    image: "/certificates/java-spring-boot-thumbnail.jpg",
    link: "/certificates/java-spring-boot-thumbnail.jpg",
    description:
      "Completed a hands-on course in Java Spring Boot, focusing on building scalable backend applications, REST APIs, and enterprise-level services.",
  },
  {
    id: 3,
    name: "AI on Jetson Nano",
    organization: "NVIDIA",
    period: "2026",
    image: "/certificates/nvidia-jetson-nano-thumbnail.jpg",
    link: "/certificates/nvidia-jetson-nano-thumbnail.jpg",
    description:
      "Learned the fundamentals of edge AI by building and deploying AI models on NVIDIA Jetson Nano for real-world applications.",
  },
  {
    id: 4,
    name: "Lyzr AI Nation SkillUp",
    organization: "GeeksforGeeks",
    period: "2025",
    image: "/certificates/lyzr-ai-nation-thumbnail.jpg",
    link: "/certificates/lyzr-ai-nation-thumbnail.jpg",
    description:
      "Gained practical exposure to applied AI concepts, tools, and workflows through the Lyzr AI SkillUp program.",
  },
  {
    id: 5,
    name: "GenAI Powered Data Analytics",
    organization: "Tata",
    period: "September 2025",
    image: "/certificates/tata-genai-thumbnail.jpg",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_68c523f5c5c1406e81da9833_1757874836524_completion_certificate.pdf",
    description:
      "Completed a Generative AI certification, understanding core concepts like LLMs, prompt engineering, and AI-driven content generation.",
  },
  {
    id: 6,
    name: "Java Course",
    organization: "Scaler",
    period: "April 2026",
    image: "/certificates/java-thumbnail.jpg",
    link: "/certificates/java-thumbnail.jpg",
    description:
      "Mastered core Java concepts including OOP, problem-solving, and foundational programming through an intensive learning program.",
  },
];

// ============================================================
// ACHIEVEMENTS
// ============================================================

const achievements = [
  {
    title: "Software Engineer Intern",
    organization: "Crescify Pvt Ltd",
    period: "2025",
    location: "Remote",
    description:
      "Full-stack development using React, Spring Boot, and REST APIs",
    tech: ["React", "Spring Boot", "Java", "REST APIs"],
  },
  {
    title: "Smart India Hackathon — Team Lead",
    organization: "Government of India",
    period: "2024 & 2025",
    location: "India",
    description:
      "Led 6-member team to national-level win twice among 10,000+ teams",
    tech: ["React", "Spring Boot", "AI/ML", "AWS", "Leadership"],
  },
  {
    title: "MetaXScalar School Hackathon",
    organization: "MetaXScalar",
    period: "2025",
    location: "Online",
    description:
      "Built an innovative AI-powered solution in a competitive hackathon environment",
    tech: ["AI/ML", "React", "Python", "FastAPI"],
  },
  {
    title: "Google Developer Hackathon",
    organization: "Google",
    period: "2025",
    location: "Online",
    description:
      "Developed a scalable application using Google Cloud technologies",
    tech: ["Google Cloud", "React", "Firebase", "Node.js"],
  },
];

// ============================================================
// EDUCATION
// ============================================================

const educationData = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution:
      "Nutan College of Engineering & Research, Pune",
    period: "2023 – 2027",
    location: "Pune, India",
    description:
      "Focus on full-stack development and AI/ML.",
    grade: "CGPA: 7.45/10",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution:
      "Sant Tukaram Maharaj High School, Buldhana",
    period: "2022",
    location: "Buldhana, India",
    description: "Science stream.",
    grade: "70.17%",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution:
      "Deulgaon Raja High School, Buldhana",
    period: "2020",
    location: "Buldhana, India",
    description: "",
    grade: "82%",
  },
];

// ============================================================
// REUSABLE CLASSES
// ============================================================

const pageBackground = (
  theme: string
) =>
  t(
    theme,
    "bg-[#0A0A0A] text-[#F5F3EE]",
    "bg-[#F5F4EF] text-[#171717]"
  );

const cardClass = (
  theme: string
) =>
  t(
    theme,
    "bg-[#141414]/85 border-white/[0.07]",
    "bg-white border-black/[0.07]"
  );

const innerCardClass = (
  theme: string
) =>
  t(
    theme,
    "bg-white/[0.018] border-white/[0.07]",
    "bg-black/[0.012] border-black/[0.07]"
  );

const primaryText = (
  theme: string
) =>
  t(
    theme,
    "text-[#F5F3EE]",
    "text-[#171717]"
  );

const secondaryText = (
  theme: string
) =>
  t(
    theme,
    "text-[#A7A39A]",
    "text-[#65615A]"
  );

const mutedText = (
  theme: string
) =>
  t(
    theme,
    "text-[#706D67]",
    "text-[#918D84]"
  );

const accentText = (
  theme: string
) =>
  t(
    theme,
    "text-[#C9A66B]",
    "text-[#9A743B]"
  );

// ============================================================
// PAGE
// ============================================================

const AboutSection = () => {
  const { theme } = useTheme();

  return (
    <section
      id="about-me"
      className={`
        relative
        overflow-hidden
        py-24
        transition-colors
        duration-300
        ${pageBackground(theme)}
      `}
    >
      {/* Ambient background */}
      <div
        className="
          pointer-events-none
          fixed
          inset-0
          -z-10
          overflow-hidden
        "
      >
        <div
          className={`
            absolute
            left-[10%]
            top-[8%]
            h-72
            w-72
            rounded-full
            blur-[120px]
            ${
              theme === "dark"
                ? "bg-[#C9A66B]/[0.025]"
                : "bg-[#9A743B]/[0.035]"
            }
          `}
        />

        <div
          className={`
            absolute
            bottom-[10%]
            right-[8%]
            h-80
            w-80
            rounded-full
            blur-[130px]
            ${
              theme === "dark"
                ? "bg-white/[0.012]"
                : "bg-black/[0.015]"
            }
          `}
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        {/* ====================================================
            Header
        ===================================================== */}

        <div className="mb-12 text-center">
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <p
              className={`
                mb-3
                text-xs
                font-semibold
                uppercase
                tracking-[0.28em]
                ${accentText(theme)}
              `}
            >
              Profile
            </p>

            <h1
              className={`
                text-4xl
                font-bold
                tracking-tight
                sm:text-5xl
                ${primaryText(theme)}
              `}
            >
              About Me
            </h1>

            <p
              className={`
                mx-auto
                mt-4
                max-w-2xl
                text-sm
                leading-7
                sm:text-base
                ${secondaryText(theme)}
              `}
            >
              Resume, education, technology,
              certifications, achievements and
              professional experience.
            </p>
          </motion.div>
        </div>

        {/* ====================================================
            Resume + Education
        ===================================================== */}

        <div className="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Resume */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.1,
              duration: 0.5,
            }}
            className={`
              flex
              h-full
              flex-col
              rounded-2xl
              border
              p-6
              ${cardClass(theme)}
            `}
          >
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p
                  className={`
                    mb-1
                    text-xs
                    uppercase
                    tracking-[0.18em]
                    ${accentText(theme)}
                  `}
                >
                  Profile
                </p>

                <h2
                  className={`
                    text-xl
                    font-semibold
                    ${primaryText(theme)}
                  `}
                >
                  Resume
                </h2>
              </div>

              <FaUser
                className={`
                  text-lg
                  ${mutedText(theme)}
                `}
              />
            </div>

            <p
              className={`
                mb-6
                text-sm
                leading-7
                ${secondaryText(theme)}
              `}
            >
              Full Stack Developer with expertise
              in React, Spring Boot, and cloud
              technologies. Passionate about building
              scalable, secure, and user-friendly web
              applications. Experienced in leading
              teams and delivering high-impact
              solutions in hackathons and internships.
            </p>

            <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-4">
                {[
                  {
                    label: "Name",
                    value: siteConfig.name,
                    icon: FaUser,
                  },
                  {
                    label: "Role",
                    value: "Full Stack Developer",
                    icon: FaUser,
                  },
                  {
                    label: "Status",
                    value: "Open to opportunities",
                    icon: FaUser,
                  },
                ].map(
                  ({
                    label,
                    value,
                    icon: Icon,
                  }) => (
                    <div
                      key={label}
                      className="flex items-start gap-3"
                    >
                      <div
                        className={`
                          mt-0.5
                          rounded-lg
                          border
                          p-2
                          ${innerCardClass(theme)}
                        `}
                      >
                        <Icon
                          className={`
                            text-xs
                            ${accentText(theme)}
                          `}
                        />
                      </div>

                      <div className="min-w-0">
                        <p
                          className={`
                            text-[10px]
                            uppercase
                            tracking-wider
                            ${mutedText(theme)}
                          `}
                        >
                          {label}
                        </p>

                        <p
                          className={`
                            mt-0.5
                            break-words
                            text-xs
                            font-semibold
                            ${primaryText(theme)}
                          `}
                        >
                          {value}
                          {label === "Status" &&
                            " ✅"}
                        </p>
                      </div>
                    </div>
                  )
                )}
              </div>

              <div className="space-y-4">
                {[
                  {
                    label: "Location",
                    value: siteConfig.location,
                    icon: FaMapMarkerAlt,
                  },
                  {
                    label: "Email",
                    value: siteConfig.email,
                    icon: FaEnvelope,
                  },
                  {
                    label: "Phone",
                    value: siteConfig.phone,
                    icon: FaPhone,
                  },
                ].map(
                  ({
                    label,
                    value,
                    icon: Icon,
                  }) => (
                    <div
                      key={label}
                      className="flex items-start gap-3"
                    >
                      <div
                        className={`
                          mt-0.5
                          rounded-lg
                          border
                          p-2
                          ${innerCardClass(theme)}
                        `}
                      >
                        <Icon
                          className={`
                            text-xs
                            ${accentText(theme)}
                          `}
                        />
                      </div>

                      <div className="min-w-0">
                        <p
                          className={`
                            text-[10px]
                            uppercase
                            tracking-wider
                            ${mutedText(theme)}
                          `}
                        >
                          {label}
                        </p>

                        <p
                          className={`
                            mt-0.5
                            break-words
                            text-xs
                            font-semibold
                            ${primaryText(theme)}
                          `}
                        >
                          {value}
                        </p>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>

            <div
              className={`
                mt-6
                border-t
                pt-5
                ${
                  theme === "dark"
                    ? "border-white/[0.07]"
                    : "border-black/[0.07]"
                }
              `}
            >
              <motion.a
                href={siteConfig.resumePath}
                download
                whileHover={{
                  scale: 1.02,
                  y: -1,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-[#F5F3EE]
                  px-5
                  py-2.5
                  text-sm
                  font-semibold
                  text-[#0A0A0A]
                  transition-all
                  duration-300
                  hover:bg-[#C9A66B]
                "
              >
                <FaDownload className="text-xs" />
                Download Full Resume
              </motion.a>
            </div>
          </motion.div>

          {/* Education */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.15,
              duration: 0.5,
            }}
            className={`
              flex
              h-full
              flex-col
              rounded-2xl
              border
              p-6
              ${cardClass(theme)}
            `}
          >
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p
                  className={`
                    mb-1
                    text-xs
                    uppercase
                    tracking-[0.18em]
                    ${accentText(theme)}
                  `}
                >
                  Academic
                </p>

                <h2
                  className={`
                    text-xl
                    font-semibold
                    ${primaryText(theme)}
                  `}
                >
                  Education
                </h2>
              </div>

              <FaGraduationCap
                className={`
                  text-lg
                  ${mutedText(theme)}
                `}
              />
            </div>

            <div className="flex flex-1 flex-col gap-4">
              {educationData.map(
                (item, idx) => (
                  <div
                    key={idx}
                    className={`
                      rounded-xl
                      border
                      p-4
                      transition-all
                      duration-300
                      ${
                        theme === "dark"
                          ? `
                            bg-white/[0.018]
                            border-white/[0.07]
                            hover:border-[#C9A66B]/25
                            hover:bg-white/[0.03]
                          `
                          : `
                            bg-black/[0.012]
                            border-black/[0.07]
                            hover:border-[#9A743B]/25
                            hover:bg-black/[0.02]
                          `
                      }
                    `}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <h3
                          className={`
                            text-sm
                            font-semibold
                            leading-6
                            ${primaryText(theme)}
                          `}
                        >
                          {item.degree}
                        </h3>

                        <p
                          className={`
                            mt-1
                            text-xs
                            ${accentText(theme)}
                          `}
                        >
                          {item.institution}
                        </p>
                      </div>

                      <div className="shrink-0 text-right">
                        <span
                          className={`
                            text-xs
                            font-medium
                            ${primaryText(theme)}
                          `}
                        >
                          {item.period}
                        </span>

                        <p
                          className={`
                            mt-1
                            text-[11px]
                            ${mutedText(theme)}
                          `}
                        >
                          {item.location}
                        </p>
                      </div>
                    </div>

                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      <span
                        className={`
                          rounded-full
                          border
                          px-2.5
                          py-1
                          text-[11px]
                          font-medium
                          ${
                            theme === "dark"
                              ? "border-[#C9A66B]/20 bg-[#C9A66B]/[0.06] text-[#D8BC91]"
                              : "border-[#9A743B]/20 bg-[#9A743B]/[0.05] text-[#9A743B]"
                          }
                        `}
                      >
                        {item.grade}
                      </span>

                      {item.description && (
                        <span
                          className={`
                            text-xs
                            ${secondaryText(theme)}
                          `}
                        >
                          {item.description}
                        </span>
                      )}
                    </div>
                  </div>
                )
              )}
            </div>
          </motion.div>
        </div>

        {/* ====================================================
            Tech Stack
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.2,
            duration: 0.5,
          }}
          className={`
            mb-6
            rounded-2xl
            border
            p-6
            ${cardClass(theme)}
          `}
        >
          <div className="mb-6">
            <p
              className={`
                mb-1
                text-xs
                uppercase
                tracking-[0.18em]
                ${accentText(theme)}
              `}
            >
              Technologies
            </p>

            <h2
              className={`
                text-xl
                font-semibold
                ${primaryText(theme)}
              `}
            >
              Tech Stack
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              {
                title: "Frontend",
                items: [
                  { name: "React", icon: FaReact },
                  {
                    name: "TypeScript",
                    icon: SiTypescript,
                  },
                  {
                    name: "JavaScript",
                    icon: FaJs,
                  },
                  {
                    name: "Tailwind CSS",
                    icon: SiTailwindcss,
                  },
                  {
                    name: "HTML5",
                    icon: FaHtml5,
                  },
                  {
                    name: "CSS3",
                    icon: FaCss3Alt,
                  },
                ],
              },
              {
                title: "Backend",
                items: [
                  { name: "Java", icon: FaJava },
                  {
                    name: "Python",
                    icon: FaPython,
                  },
                  {
                    name: "Spring Boot",
                    icon: SiSpringboot,
                  },
                  {
                    name: "Spring Security",
                    icon: SiSpringsecurity,
                  },
                  { name: "JWT", icon: FaKey },
                  {
                    name: "REST APIs",
                    icon: FaServer,
                  },
                ],
              },
              {
                title: "Database & DevOps",
                items: [
                  {
                    name: "MySQL",
                    icon: SiMysql,
                  },
                  {
                    name: "MongoDB",
                    icon: SiMongodb,
                  },
                  {
                    name: "PostgreSQL",
                    icon: SiPostgresql,
                  },
                  {
                    name: "Redis",
                    icon: SiRedis,
                  },
                  { name: "Git", icon: FaGitAlt },
                  {
                    name: "Docker",
                    icon: FaDocker,
                  },
                  { name: "AWS", icon: FaAws },
                ],
              },
            ].map((group) => (
              <div
                key={group.title}
                className={`
                  rounded-xl
                  border
                  p-5
                  ${innerCardClass(theme)}
                `}
              >
                <h3
                  className={`
                    mb-4
                    text-sm
                    font-semibold
                    ${primaryText(theme)}
                  `}
                >
                  {group.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {group.items.map(
                    ({
                      name,
                      icon: Icon,
                    }) => (
                      <span
                        key={name}
                        className={`
                          group
                          inline-flex
                          items-center
                          gap-2
                          rounded-full
                          border
                          px-3
                          py-1.5
                          text-xs
                          transition-all
                          duration-200

                          ${
                            theme === "dark"
                              ? `
                                border-white/[0.08]
                                bg-white/[0.02]
                                text-[#A7A39A]
                                hover:border-[#C9A66B]/25
                                hover:text-[#F5F3EE]
                              `
                              : `
                                border-black/[0.07]
                                bg-black/[0.012]
                                text-[#65615A]
                                hover:border-[#9A743B]/25
                                hover:text-[#171717]
                              `
                          }
                        `}
                      >
                        <Icon
                          className={`
                            text-sm
                            transition-colors
                            duration-200
                            ${
                              theme === "dark"
                                ? "text-[#817C72] group-hover:text-[#C9A66B]"
                                : "text-[#858077] group-hover:text-[#9A743B]"
                            }
                          `}
                        />
                        {name}
                      </span>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ====================================================
            Certifications
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.3,
            duration: 0.5,
          }}
          className={`
            mb-6
            rounded-2xl
            border
            p-6
            ${cardClass(theme)}
          `}
        >
          <div className="mb-6">
            <p
              className={`
                mb-1
                text-xs
                uppercase
                tracking-[0.18em]
                ${accentText(theme)}
              `}
            >
              Credentials
            </p>

            <h2
              className={`
                text-xl
                font-semibold
                ${primaryText(theme)}
              `}
            >
              Certifications
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certificates.map((cert) => (
              <motion.a
                key={cert.id}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  y: -4,
                }}
                className={`
                  group
                  overflow-hidden
                  rounded-xl
                  border
                  transition-all
                  duration-300

                  ${
                    theme === "dark"
                      ? `
                        border-white/[0.07]
                        bg-white/[0.018]
                        hover:border-[#C9A66B]/30
                        hover:bg-white/[0.03]
                      `
                      : `
                        border-black/[0.07]
                        bg-white
                        hover:border-[#9A743B]/25
                      `
                  }
                `}
              >
                <div className="relative h-36 overflow-hidden">
                  <img
                    src={getImagePath(cert.image)}
                    alt={cert.name}
                    loading="lazy"
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-105
                    "
                    onError={(e) => {
                      const target =
                        e.currentTarget as HTMLImageElement;

                      target.onerror = null;

                      target.src =
                        `data:image/svg+xml,${encodeURIComponent(`
                          <svg xmlns="http://www.w3.org/2000/svg" width="400" height="200">
                            <rect width="100%" height="100%" fill="#141414"/>
                            <text
                              x="50%"
                              y="50%"
                              fill="#C9A66B"
                              font-family="sans-serif"
                              font-size="16"
                              text-anchor="middle"
                              dominant-baseline="middle"
                            >${cert.name}</text>
                          </svg>
                        `)}`;
                    }}
                  />

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/65
                      via-transparent
                      to-transparent
                    "
                  />

                  <div
                    className="
                      absolute
                      bottom-2
                      right-2
                      flex
                      h-7
                      w-7
                      items-center
                      justify-center
                      rounded-full
                      bg-black/55
                      opacity-0
                      backdrop-blur-sm
                      transition-opacity
                      duration-200
                      group-hover:opacity-100
                    "
                  >
                    <FaExternalLinkAlt className="text-[10px] text-white" />
                  </div>
                </div>

                <div className="p-4">
                  <h4
                    className={`
                      text-sm
                      font-semibold
                      ${primaryText(theme)}
                    `}
                  >
                    {cert.name}
                  </h4>

                  <p
                    className={`
                      mt-1
                      text-xs
                      ${accentText(theme)}
                    `}
                  >
                    {cert.organization}
                    {" • "}
                    {cert.period}
                  </p>

                  <p
                    className={`
                      mt-2
                      text-xs
                      leading-6
                      ${secondaryText(theme)}
                    `}
                  >
                    {cert.description}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* ====================================================
            Achievements
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.4,
            duration: 0.5,
          }}
          className={`
            rounded-2xl
            border
            p-6
            ${cardClass(theme)}
          `}
        >
          <div className="mb-6">
            <p
              className={`
                mb-1
                text-xs
                uppercase
                tracking-[0.18em]
                ${accentText(theme)}
              `}
            >
              Experience
            </p>

            <h2
              className={`
                text-xl
                font-semibold
                ${primaryText(theme)}
              `}
            >
              Achievements & Leadership
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {achievements.map(
              (item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{
                    y: -3,
                  }}
                  className={`
                    rounded-xl
                    border
                    p-5
                    transition-all
                    duration-300

                    ${
                      theme === "dark"
                        ? `
                          border-white/[0.07]
                          bg-white/[0.018]
                          hover:border-[#C9A66B]/25
                          hover:bg-white/[0.03]
                        `
                        : `
                          border-black/[0.07]
                          bg-black/[0.01]
                          hover:border-[#9A743B]/25
                        `
                    }
                  `}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3
                        className={`
                          text-sm
                          font-semibold
                          ${primaryText(theme)}
                        `}
                      >
                        {item.title}
                      </h3>

                      <p
                        className={`
                          mt-1
                          text-xs
                          ${accentText(theme)}
                        `}
                      >
                        {item.organization}
                      </p>
                    </div>

                    <div className="shrink-0 text-right">
                      <span
                        className={`
                          text-xs
                          font-medium
                          ${primaryText(theme)}
                        `}
                      >
                        {item.period}
                      </span>

                      <p
                        className={`
                          mt-1
                          text-[11px]
                          ${mutedText(theme)}
                        `}
                      >
                        {item.location}
                      </p>
                    </div>
                  </div>

                  <p
                    className={`
                      mt-3
                      text-xs
                      leading-6
                      ${secondaryText(theme)}
                    `}
                  >
                    {item.description}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {item.tech.map(
                      (tech) => (
                        <span
                          key={tech}
                          className={`
                            rounded-full
                            border
                            px-2.5
                            py-1
                            text-[11px]

                            ${
                              theme ===
                              "dark"
                                ? `
                                  border-white/[0.07]
                                  bg-white/[0.02]
                                  text-[#8F8B83]
                                `
                                : `
                                  border-black/[0.07]
                                  bg-black/[0.012]
                                  text-[#65615A]
                                `
                            }
                          `}
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                </motion.div>
              )
            )}
          </div>
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
  const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

  if (!endpoint) {
    throw new Error(
      "VITE_FORMSPREE_ENDPOINT is not configured. Add it to your Vercel environment variables and redeploy."
    );
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: form.name,
      email: form.email,
      subject: form.subject || "Portfolio Contact",
      message: form.message,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => null);
    throw new Error(
      errorData?.error ||
        `Form submission failed with status ${response.status}`
    );
  }

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
    "Formspree Error:",
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
focus
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
focus-visible
focus-visible
focus-visible
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
const { theme } = useTheme();

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

    <section id="home">
      <Hero />
    </section>

    {/* Skills */}

    <section id="skills">
      <Skills />
    </section>

    {/* ==================================================
        PROJECTS
    ================================================== */}

    <ProjectsSection />

    {/* ==================================================
        ABOUT
    ================================================== */}

    <AboutSection />

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
