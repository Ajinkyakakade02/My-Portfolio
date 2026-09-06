// src/pages/GitHubPage.tsx

import {
  useState,
  useEffect,
} from "react";

import { motion } from "framer-motion";

import {
  useNavigate,
} from "react-router-dom";

import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowLeft,
  FaStar,
  FaCodeBranch,
  FaEye,
  FaLanguage,
  FaCode,
} from "react-icons/fa";

import { useTheme } from "@/hooks/useTheme";
import { siteConfig } from "@/constants";

const t = (
  theme: string,
  dark: string,
  light: string
) => (theme === "dark" ? dark : light);

interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
  language: string;
  updated_at: string;
  homepage: string;
}

const GitHubPage = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();

  const [repos, setRepos] = useState<
    GitHubRepo[]
  >([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState<string | null>(null);

  const [selectedLanguage, setSelectedLanguage] =
    useState<string>("all");

  // ==========================================================
  // Fetch repositories
  // ==========================================================

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);

        const username =
          siteConfig.github
            .split("/")
            .pop();

        const response = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`
        );

        if (!response.ok) {
          throw new Error(
            "Failed to fetch repositories"
          );
        }

        const data =
          (await response.json()) as GitHubRepo[];

        setRepos(data);
        setError(null);
      } catch (err) {
        setError(
          "Unable to load repositories. Please try again later."
        );

        console.error(
          "Error fetching repos:",
          err
        );
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  // ==========================================================
  // Languages
  // ==========================================================

  const languages = [
    "all",
    ...new Set(
      repos
        .map((repo) => repo.language)
        .filter(Boolean)
    ),
  ];

  // ==========================================================
  // Filter
  // ==========================================================

  const filteredRepos =
    selectedLanguage === "all"
      ? repos
      : repos.filter(
          (repo) =>
            repo.language ===
            selectedLanguage
        );

  // ==========================================================
  // Date
  // ==========================================================

  const formatDate = (
    dateString: string
  ) => {
    const date = new Date(dateString);

    return date.toLocaleDateString(
      "en-US",
      {
        year: "numeric",
        month: "short",
        day: "numeric",
      }
    );
  };

  // ==========================================================
  // Stats
  // ==========================================================

  const stats = [
    {
      value: repos.length,
      label: "Repositories",
      icon: FaCode,
    },
    {
      value: repos.reduce(
        (acc, repo) =>
          acc +
          repo.stargazers_count,
        0
      ),
      label: "Total Stars",
      icon: FaStar,
    },
    {
      value: repos.reduce(
        (acc, repo) =>
          acc + repo.forks_count,
        0
      ),
      label: "Total Forks",
      icon: FaCodeBranch,
    },
  ];

  const username =
    siteConfig.github
      .split("/")
      .pop();

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
      {/* Ambient background */}

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div
          className={`
            absolute
            right-[10%]
            top-[8%]
            h-80
            w-80
            rounded-full
            blur-[130px]

            ${
              theme === "dark"
                ? "bg-[#C9A66B]/[0.02]"
                : "bg-[#9A743B]/[0.03]"
            }
          `}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* ====================================================
            Back
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
            Profile Header
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
            duration: 0.5,
          }}
          className={`
            relative
            mb-8
            overflow-hidden
            rounded-2xl
            border
            p-6
            ${
              theme === "dark"
                ? "border-white/[0.07] bg-[#141414]/85"
                : "border-black/[0.07] bg-white"
            }
          `}
        >
          {/* Decorative accent */}

          <div
            className={`
              absolute
              -right-16
              -top-16
              h-40
              w-40
              rounded-full
              blur-3xl

              ${
                theme === "dark"
                  ? "bg-[#C9A66B]/[0.04]"
                  : "bg-[#9A743B]/[0.05]"
              }
            `}
          />

          <div
            className="
              relative
              z-10
              flex
              flex-col
              items-start
              justify-between
              gap-6
              md:flex-row
              md:items-center
            "
          >
            <div className="flex items-center gap-4">
              <div
                className={`
                  flex
                  h-14
                  w-14
                  shrink-0
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  ${
                    theme === "dark"
                      ? "border-white/[0.08] bg-white/[0.04]"
                      : "border-black/[0.07] bg-black/[0.025]"
                  }
                `}
              >
                <FaGithub
                  className={`
                    text-2xl
                    ${
                      theme ===
                      "dark"
                        ? "text-[#F5F3EE]"
                        : "text-[#171717]"
                    }
                  `}
                />
              </div>

              <div>
                <p
                  className={`
                    mb-1
                    text-xs
                    uppercase
                    tracking-[0.18em]
                    ${
                      theme ===
                      "dark"
                        ? "text-[#C9A66B]"
                        : "text-[#9A743B]"
                    }
                  `}
                >
                  Open Source
                </p>

                <h1
                  className={`
                    text-2xl
                    font-bold
                    tracking-tight
                    sm:text-3xl
                    ${
                      theme ===
                      "dark"
                        ? "text-[#F5F3EE]"
                        : "text-[#171717]"
                    }
                  `}
                >
                  {username}
                </h1>

                <p
                  className={`
                    mt-1
                    text-sm
                    ${
                      theme ===
                      "dark"
                        ? "text-[#8F8B83]"
                        : "text-[#65615A]"
                    }
                  `}
                >
                  GitHub Profile ·{" "}
                  {repos.length}{" "}
                  repositories
                </p>
              </div>
            </div>

            <motion.a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
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
              <FaGithub />
              View Profile
              <FaExternalLinkAlt className="text-[10px]" />
            </motion.a>
          </div>
        </motion.div>

        {/* ====================================================
            Stats
        ===================================================== */}

        <div className="mb-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          {stats.map(
            (stat, index) => (
              <motion.div
                key={stat.label}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay:
                    0.1 +
                    index * 0.08,
                }}
                whileHover={{
                  y: -4,
                }}
                className={`
                  rounded-2xl
                  border
                  p-6
                  text-center
                  transition-all
                  duration-300
                  ${
                    theme === "dark"
                      ? `
                        border-white/[0.07]
                        bg-[#141414]
                        hover:border-[#C9A66B]/25
                      `
                      : `
                        border-black/[0.07]
                        bg-white
                        hover:border-[#9A743B]/25
                      `
                  }
                `}
              >
                <stat.icon
                  className={`
                    mx-auto
                    mb-3
                    text-2xl
                    ${
                      theme ===
                      "dark"
                        ? "text-[#C9A66B]"
                        : "text-[#9A743B]"
                    }
                  `}
                />

                <div
                  className={`
                    text-3xl
                    font-bold
                    ${
                      theme ===
                      "dark"
                        ? "text-[#F5F3EE]"
                        : "text-[#171717]"
                    }
                  `}
                >
                  {stat.value}
                </div>

                <div
                  className={`
                    mt-1
                    text-xs
                    uppercase
                    tracking-wider
                    ${
                      theme ===
                      "dark"
                        ? "text-[#706D67]"
                        : "text-[#918D84]"
                    }
                  `}
                >
                  {stat.label}
                </div>
              </motion.div>
            )
          )}
        </div>

        {/* ====================================================
            Language Filter
        ===================================================== */}

        {languages.length > 1 && (
          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.25,
            }}
            className="mb-8 flex flex-wrap justify-center gap-2"
          >
            {languages.map(
              (lang) => {
                const active =
                  selectedLanguage ===
                  lang;

                return (
                  <motion.button
                    key={lang}
                    onClick={() =>
                      setSelectedLanguage(
                        lang
                      )
                    }
                    whileTap={{
                      scale: 0.96,
                    }}
                    className={`
                      rounded-full
                      border
                      px-4
                      py-2
                      text-xs
                      font-medium
                      transition-all
                      duration-200

                      ${
                        active
                          ? `
                            border-[#C9A66B]/40
                            bg-[#C9A66B]
                            text-[#0A0A0A]
                          `
                          : theme ===
                              "dark"
                            ? `
                              border-white/[0.08]
                              bg-white/[0.02]
                              text-[#8F8B83]
                              hover:border-[#C9A66B]/25
                              hover:text-[#F5F3EE]
                            `
                            : `
                              border-black/[0.07]
                              bg-white
                              text-[#65615A]
                              hover:border-[#9A743B]/25
                              hover:text-[#171717]
                            `
                      }
                    `}
                  >
                    {lang === "all"
                      ? "All Languages"
                      : lang}
                  </motion.button>
                );
              }
            )}
          </motion.div>
        )}

        {/* ====================================================
            Repository Content
        ===================================================== */}

        {loading ? (
          <div className="flex min-h-[300px] items-center justify-center">
            <div
              className={`
                h-9
                w-9
                animate-spin
                rounded-full
                border-2
                border-transparent
                ${
                  theme ===
                  "dark"
                    ? "border-t-[#C9A66B]"
                    : "border-t-[#9A743B]"
                }
              `}
            />
          </div>
        ) : error ? (
          <div className="py-20 text-center">
            <p className="text-sm text-red-400">
              {error}
            </p>

            <button
              onClick={() =>
                window.location.reload()
              }
              className="
                mt-5
                rounded-full
                bg-[#F5F3EE]
                px-5
                py-2.5
                text-sm
                font-semibold
                text-[#0A0A0A]
                transition-all
                hover:bg-[#C9A66B]
              "
            >
              Try Again
            </button>
          </div>
        ) : filteredRepos.length ===
          0 ? (
          <div className="py-20 text-center">
            <p
              className={t(
                theme,
                "text-[#8F8B83]",
                "text-[#65615A]"
              )}
            >
              No repositories found
              {selectedLanguage !==
                "all"
                ? ` for ${selectedLanguage}`
                : ""}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {filteredRepos.map(
              (repo, index) => (
                <motion.div
                  key={repo.id}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay:
                      0.05 +
                      index * 0.035,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  onClick={() =>
                    window.open(
                      repo.html_url,
                      "_blank"
                    )
                  }
                  className={`
                    group
                    relative
                    cursor-pointer
                    overflow-hidden
                    rounded-2xl
                    border
                    p-6
                    transition-all
                    duration-300

                    ${
                      theme === "dark"
                        ? `
                          border-white/[0.07]
                          bg-[#141414]
                          hover:border-[#C9A66B]/28
                        `
                        : `
                          border-black/[0.07]
                          bg-white
                          hover:border-[#9A743B]/25
                        `
                    }
                  `}
                >
                  {/* subtle hover */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-[#C9A66B]/[0.025]
                      opacity-0
                      transition-opacity
                      duration-300
                      group-hover:opacity-100
                    "
                  />

                  <div className="relative z-10">
                    <div className="mb-3 flex items-start justify-between gap-4">
                      <h3
                        className={`
                          break-words
                          text-lg
                          font-semibold
                          transition-colors
                          ${
                            theme ===
                            "dark"
                              ? "text-[#F5F3EE] group-hover:text-[#D8BC91]"
                              : "text-[#171717] group-hover:text-[#9A743B]"
                          }
                        `}
                      >
                        {repo.name}
                      </h3>

                      <FaExternalLinkAlt
                        className={`
                          mt-1
                          shrink-0
                          text-[10px]
                          opacity-0
                          transition-all
                          duration-200
                          group-hover:translate-x-0.5
                          group-hover:opacity-100
                          ${
                            theme ===
                            "dark"
                              ? "text-[#C9A66B]"
                              : "text-[#9A743B]"
                          }
                        `}
                      />
                    </div>

                    <p
                      className={`
                        mb-5
                        line-clamp-3
                        text-sm
                        leading-6
                        ${
                          theme ===
                          "dark"
                            ? "text-[#858179]"
                            : "text-[#65615A]"
                        }
                      `}
                    >
                      {repo.description ||
                        "No description provided"}
                    </p>

                    <div className="mb-4 flex flex-wrap gap-4">
                      {repo.language && (
                        <div className="flex items-center gap-1.5">
                          <FaLanguage
                            className={`
                              text-xs
                              ${
                                theme ===
                                "dark"
                                  ? "text-[#C9A66B]"
                                  : "text-[#9A743B]"
                              }
                            `}
                          />

                          <span
                            className={`
                              text-xs
                              ${
                                theme ===
                                "dark"
                                  ? "text-[#A7A39A]"
                                  : "text-[#65615A]"
                              }
                            `}
                          >
                            {repo.language}
                          </span>
                        </div>
                      )}

                      <div className="flex items-center gap-1.5">
                        <FaStar className="text-xs text-[#B89452]" />

                        <span
                          className={`
                            text-xs
                            ${
                              theme ===
                              "dark"
                                ? "text-[#A7A39A]"
                                : "text-[#65615A]"
                            }
                          `}
                        >
                          {repo.stargazers_count}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <FaCodeBranch
                          className={`
                            text-xs
                            ${
                              theme ===
                              "dark"
                                ? "text-[#706D67]"
                                : "text-[#918D84]"
                            }
                          `}
                        />

                        <span
                          className={`
                            text-xs
                            ${
                              theme ===
                              "dark"
                                ? "text-[#A7A39A]"
                                : "text-[#65615A]"
                            }
                          `}
                        >
                          {repo.forks_count}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <FaEye
                          className={`
                            text-xs
                            ${
                              theme ===
                              "dark"
                                ? "text-[#706D67]"
                                : "text-[#918D84]"
                            }
                          `}
                        />

                        <span
                          className={`
                            text-xs
                            ${
                              theme ===
                              "dark"
                                ? "text-[#A7A39A]"
                                : "text-[#65615A]"
                            }
                          `}
                        >
                          {repo.watchers_count}
                        </span>
                      </div>
                    </div>

                    <div
                      className={`
                        border-t
                        pt-3
                        text-[11px]
                        ${
                          theme ===
                          "dark"
                            ? "border-white/[0.06] text-[#706D67]"
                            : "border-black/[0.06] text-[#918D84]"
                        }
                      `}
                    >
                      Updated{" "}
                      {formatDate(
                        repo.updated_at
                      )}
                    </div>
                  </div>

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
              )
            )}
          </div>
        )}

        {/* ====================================================
            Contribution Graph
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
            delay: 0.5,
          }}
          className={`
            mt-12
            rounded-2xl
            border
            p-5

            ${
              theme === "dark"
                ? "border-white/[0.07] bg-[#141414]"
                : "border-black/[0.07] bg-white"
            }
          `}
        >
          <div className="mb-4">
            <p
              className={`
                mb-1
                text-xs
                uppercase
                tracking-[0.18em]
                ${
                  theme ===
                  "dark"
                    ? "text-[#C9A66B]"
                    : "text-[#9A743B]"
                }
              `}
            >
              Activity
            </p>

            <h3
              className={`
                text-lg
                font-semibold
                ${
                  theme ===
                  "dark"
                    ? "text-[#F5F3EE]"
                    : "text-[#171717]"
                }
              `}
            >
              Contribution Activity
            </h3>
          </div>

          <div
            className={`
              overflow-hidden
              rounded-xl
              border
              p-3
              ${
                theme ===
                "dark"
                  ? "border-white/[0.06] bg-white/[0.015]"
                  : "border-black/[0.06] bg-black/[0.01]"
              }
            `}
          >
            <img
              src={`https://ghchart.rshah.org/C9A66B/${username}`}
              alt="GitHub contribution chart"
              className="w-full rounded-lg"
              onError={(e) => {
                (
                  e.currentTarget as HTMLImageElement
                ).style.display =
                  "none";
              }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GitHubPage;
