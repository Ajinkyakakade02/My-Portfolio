// src/pages/AboutPage.tsx

import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import {
  FaReact,
  FaAws,
  FaGraduationCap,
  FaDownload,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaArrowLeft,
  FaExternalLinkAlt,
  FaJava,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaServer,
  FaKey,
} from "react-icons/fa";

import {
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiSpringboot,
  SiSpringsecurity,
  SiMysql,
  SiRedis,
} from "react-icons/si";

import { useTheme } from "@/hooks/useTheme";
import { siteConfig } from "@/constants";
import { getImagePath } from "@/lib/paths";

const t = (
  theme: string,
  dark: string,
  light: string
) => (theme === "dark" ? dark : light);

// ============================================================
// CERTIFICATIONS
// ============================================================

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

const AboutPage = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();

  return (
    <div
      className={`
        min-h-screen
        py-20
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
                  scrollTo: "view-my-work",
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
                    hover:bg-white/[0.045]
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
                duration-200
                group-hover:-translate-x-0.5
              "
            />
            Back to Home
          </motion.button>
        </div>

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
    </div>
  );
};

export default AboutPage;
