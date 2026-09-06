// src/pages/ProjectsPage.tsx

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import {
  FaArrowRight,
  FaGithub,
  FaExternalLinkAlt,
  FaArrowLeft,
} from "react-icons/fa";

import { useTheme } from "@/hooks/useTheme";
import { getImagePath } from "@/lib/paths";
import { PROJECTS } from "@/constants";

const t = (
  theme: string,
  dark: string,
  light: string
) => (theme === "dark" ? dark : light);

const ProjectsPage = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();

  return (
    <div
      className={`
        min-h-screen
        py-20
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
            Back button
        ===================================================== */}

        <div className="mb-10">
          <motion.button
            initial={{
              opacity: 0,
              x: -20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.35,
            }}
            onClick={() =>
              navigate("/", {
                state: {
                  scrollTo:
                    "view-my-work",
                },
              })
            }
            className={`
              group
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              px-5
              py-2.5
              text-sm
              font-medium
              transition-all
              duration-200

              ${
                theme === "dark"
                  ? `
                    border-white/[0.08]
                    bg-white/[0.025]
                    text-[#A7A39A]
                    hover:border-[#C9A66B]/30
                    hover:text-[#F5F3EE]
                  `
                  : `
                    border-black/[0.08]
                    bg-white
                    text-[#65615A]
                    hover:border-[#9A743B]/30
                    hover:text-[#171717]
                  `
              }
            `}
          >
            <FaArrowLeft
              className="
                text-xs
                transition-transform
                group-hover:-translate-x-0.5
              "
            />
            Back to Home
          </motion.button>
        </div>

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
    </div>
  );
};

export default ProjectsPage;
