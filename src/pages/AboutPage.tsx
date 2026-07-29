// src/pages/AboutPage.tsx
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  FaReact, 
  FaAws, 
  FaTrophy, 
  FaGraduationCap, 
  FaBriefcase, 
  FaDownload,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaArrowLeft,
  FaExternalLinkAlt,
  FaJava,
  FaPython,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaServer,
  FaKey,
  FaCalendarAlt,
  FaMapPin,
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

const t = (theme: string, dark: string, light: string) =>
  theme === "dark" ? dark : light;

// ==================== CERTIFICATIONS DATA ====================
const certificates = [
  {
    id: 1,
    name: "Agentic AI Oracle",
    organization: "Oracle University",
    period: "July 2026",
    image: "/certificates/agentic-ai-oracle-thumbnail.jpg",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=C3E61DCCC8A83594C24EAF10BB8BB2060D8A67C29F62F2732BA2BFF1B5E1BAB3",
    description: "Earned the Agentic AI Certified Foundations Associate certification from Oracle, covering intelligent agents, autonomous decision-making, and real-world AI system design.",
  },
  {
    id: 2,
    name: "Java Spring Boot",
    organization: "Onwingspan",
    period: "April 2026",
    image: "/certificates/java-spring-boot-thumbnail.jpg",
    link: "/certificates/java-spring-boot-thumbnail.jpg",
    description: "Completed a hands-on course in Java Spring Boot, focusing on building scalable backend applications, REST APIs, and enterprise-level services.",
  },
  {
    id: 3,
    name: "AI on Jetson Nano",
    organization: "NVIDIA",
    period: "2026",
    image: "/certificates/nvidia-jetson-nano-thumbnail.jpg",
    link: "/certificates/nvidia-jetson-nano-thumbnail.jpg",
    description: "Learned the fundamentals of edge AI by building and deploying AI models on NVIDIA Jetson Nano for real-world applications.",
  },
  {
    id: 4,
    name: "Lyzr AI Nation SkillUp",
    organization: "GeeksforGeeks",
    period: "2025",
    image: "/certificates/lyzr-ai-nation-thumbnail.jpg",
    link: "/certificates/lyzr-ai-nation-thumbnail.jpg",
    description: "Gained practical exposure to applied AI concepts, tools, and workflows through the Lyzr AI SkillUp program.",
  },
  {
    id: 5,
    name: "GenAI Powered Data Analytics",
    organization: "Tata",
    period: "September 2025",
    image: "/certificates/tata-genai-thumbnail.jpg",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_68c523f5c5c1406e81da9833_1757874836524_completion_certificate.pdf",
    description: "Completed a Generative AI certification, understanding core concepts like LLMs, prompt engineering, and AI-driven content generation.",
  },
  {
    id: 6,
    name: "Java Course",
    organization: "Scaler",
    period: "April 2026",
    image: "/certificates/java-thumbnail.jpg",
    link: "/certificates/java-thumbnail.jpg",
    description: "Mastered core Java concepts including OOP, problem-solving, and foundational programming through an intensive learning program.",
  },
];

// ==================== ACHIEVEMENTS & LEADERSHIP ====================
const achievements = [
  {
    title: "Software Engineer Intern",
    organization: "Crescify Pvt Ltd",
    period: "2025",
    location: "Remote",
    description: "Full-stack development using React, Spring Boot, and REST APIs",
    tech: ["React", "Spring Boot", "Java", "REST APIs"],
  },
  {
    title: "Smart India Hackathon — Team Lead",
    organization: "Government of India",
    period: "2024 & 2025",
    location: "India",
    description: "Led 6-member team to national-level win twice among 10,000+ teams",
    tech: ["React", "Spring Boot", "AI/ML", "AWS", "Leadership"],
  },
  {
    title: "MetaXScalar School Hackathon",
    organization: "MetaXScalar",
    period: "2025",
    location: "Online",
    description: "Built an innovative AI-powered solution in a competitive hackathon environment",
    tech: ["AI/ML", "React", "Python", "FastAPI"],
  },
  {
    title: "Google Developer Hackathon",
    organization: "Google",
    period: "2025",
    location: "Online",
    description: "Developed a scalable application using Google Cloud technologies",
    tech: ["Google Cloud", "React", "Firebase", "Node.js"],
  },
];

// ==================== EDUCATION DATA ====================
const educationData = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Nutan College of Engineering & Research, Pune",
    period: "2023 – 2027",
    location: "Pune, India",
    description: "Focus on full-stack development and AI/ML.",
    grade: "CGPA: 7.45/10",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Sant Tukaram Maharaj High School, Buldhana",
    period: "2022",
    location: "Buldhana, India",
    description: "Science stream.",
    grade: "70.17%",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Deulgaon Raja High School, Buldhana",
    period: "2020",
    location: "Buldhana, India",
    description: "",
    grade: "82%",
  },
];

const AboutPage = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();

  const cardClass = `rounded-2xl p-6 mb-6 border ${t(
    theme,
    "bg-white/5 border-purple-500/30",
    "bg-white border-purple-200 shadow-sm"
  )}`;

  const labelClass = `text-sm font-medium ${t(theme, "text-gray-500", "text-gray-500")}`;
  const valueClass = `text-sm font-semibold ${t(theme, "text-gray-200", "text-gray-800")}`;

  return (
    <div className={`min-h-screen py-20 transition-colors duration-300 ${t(theme, "bg-[#030014]", "bg-gray-50")}`}>
      <div className="max-w-6xl mx-auto px-4">
        {/* Back Button */}
        <div className="flex justify-start mb-8">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => navigate("/", { state: { scrollTo: "view-my-work" } })}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm font-medium transition-all ${t(
              theme,
              "bg-white/5 border-purple-500/30 text-purple-400 hover:bg-white/10",
              "bg-white border-purple-200 text-purple-600 hover:bg-purple-50 shadow-sm"
            )}`}
          >
            <FaArrowLeft className="text-xs" />
            Back to Home
          </motion.button>
        </div>

        {/* Header */}
        <div className="text-center mb-10">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent"
          >
            About Me
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={t(theme, "text-gray-400", "text-gray-600")}
          >
            Resume, Education, Tech Stack, Certifications & Achievements
          </motion.p>
        </div>

        {/* ===== TWO‑COLUMN: RESUME (left) & EDUCATION (right) ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Resume Card with Professional Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`${cardClass} flex flex-col h-full`}
          >
            <h2 className={`text-xl font-bold mb-4 ${t(theme, "text-purple-400", "text-purple-600")}`}>
              Resume
            </h2>

            {/* Professional Summary */}
            <div className="mb-4">
              <p className={`text-sm leading-relaxed ${t(theme, "text-gray-300", "text-gray-700")}`}>
                Full Stack Developer with expertise in React, Spring Boot, and cloud technologies. 
                Passionate about building scalable, secure, and user-friendly web applications. 
                Experienced in leading teams and delivering high-impact solutions in hackathons and internships.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-1">
              {/* Left Column */}
              <div className="space-y-3">
                {[
                  { label: "Name", value: siteConfig.name, icon: FaUser },
                  { label: "Role", value: "Full Stack Developer", icon: FaUser },
                  { label: "Status", value: "Open to opportunities ✅", icon: FaUser },
                ].map(({ label, value, icon: Icon }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className={`mt-0.5 p-1.5 rounded-lg ${t(theme, "bg-purple-500/10", "bg-purple-50")}`}>
                      <Icon className={`text-xs ${t(theme, "text-purple-400", "text-purple-600")}`} />
                    </div>
                    <div>
                      <p className={`text-[10px] ${labelClass}`}>{label}</p>
                      <p className={`text-xs font-semibold ${t(theme, "text-gray-200", "text-gray-800")}`}>{value}</p>
                    </div>
                  </div>
                ))}
              </div>
              {/* Right Column */}
              <div className="space-y-3">
                {[
                  { label: "Location", value: siteConfig.location, icon: FaMapMarkerAlt },
                  { label: "Email", value: siteConfig.email, icon: FaEnvelope },
                  { label: "Phone", value: siteConfig.phone, icon: FaPhone },
                ].map(({ label, value, icon: Icon }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className={`mt-0.5 p-1.5 rounded-lg ${t(theme, "bg-purple-500/10", "bg-purple-50")}`}>
                      <Icon className={`text-xs ${t(theme, "text-purple-400", "text-purple-600")}`} />
                    </div>
                    <div>
                      <p className={`text-[10px] ${labelClass}`}>{label}</p>
                      <p className={`text-xs font-semibold ${t(theme, "text-gray-200", "text-gray-800")}`}>{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-purple-500/20 text-center">
              <motion.a
                href={siteConfig.resumePath}
                download
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-600 px-5 py-2.5 rounded-full font-semibold text-white shadow-lg hover:shadow-purple-500/25 transition-shadow text-sm"
              >
                <FaDownload className="text-sm" />
                Download Full Resume
              </motion.a>
            </div>
          </motion.div>

          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className={`${cardClass} flex flex-col h-full`}
          >
            <h2 className={`text-xl font-bold mb-4 ${t(theme, "text-purple-400", "text-purple-600")}`}>
              Education
            </h2>
            <div className="space-y-4 flex-1">
              {educationData.map((item, idx) => (
                <div
                  key={idx}
                  className={`p-3 rounded-xl border transition-all ${t(
                    theme,
                    "bg-white/5 border-purple-500/20 hover:border-purple-500/40",
                    "bg-gray-50 border-purple-200 hover:border-purple-300"
                  )}`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className={`text-sm font-semibold ${t(theme, "text-white", "text-gray-900")}`}>
                        {item.degree}
                      </h3>
                      <p className={`text-xs ${t(theme, "text-purple-400", "text-purple-600")}`}>
                        {item.institution}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <span className={`text-xs font-medium ${t(theme, "text-cyan-400", "text-cyan-600")}`}>
                        {item.period}
                      </span>
                      <p className={`text-xs ${t(theme, "text-gray-500", "text-gray-500")}`}>
                        {item.location}
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    <span className={`inline-block text-xs font-medium px-2.5 py-0.5 rounded-full ${t(
                      theme,
                      "bg-purple-500/20 text-purple-300 border border-purple-500/30",
                      "bg-purple-100 text-purple-700 border border-purple-200"
                    )}`}>
                      {item.grade}
                    </span>
                    {item.description && (
                      <span className={`text-xs ${t(theme, "text-gray-400", "text-gray-600")}`}>
                        {item.description}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ===== TECH STACK – ONE BIG CARD WITH THREE INNER CARDS ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className={cardClass}
        >
          <h2 className={`text-xl font-bold mb-4 ${t(theme, "text-purple-400", "text-purple-600")}`}>
            Tech Stack
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Frontend Inner Card */}
            <div className={`rounded-2xl p-5 border ${t(
              theme,
              "bg-white/5 border-purple-500/30",
              "bg-white border-purple-200 shadow-sm"
            )}`}>
              <h3 className={`text-lg font-semibold mb-3 ${t(theme, "text-purple-400", "text-purple-600")}`}>
                Frontend
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: "React", icon: FaReact, color: "#61dafb" },
                  { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
                  { name: "JavaScript", icon: FaJs, color: "#f7df1e" },
                  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06b6d4" },
                  { name: "HTML5", icon: FaHtml5, color: "#e34c26" },
                  { name: "CSS3", icon: FaCss3Alt, color: "#264de4" },
                ].map((tech) => (
                  <span
                    key={tech.name}
                    className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full border text-xs ${t(
                      theme,
                      "bg-white/5 border-purple-500/20 text-gray-300",
                      "bg-gray-50 border-purple-200 text-gray-700"
                    )}`}
                  >
                    <tech.icon className="text-sm" style={{ color: tech.color }} />
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend Inner Card */}
            <div className={`rounded-2xl p-5 border ${t(
              theme,
              "bg-white/5 border-cyan-500/30",
              "bg-white border-cyan-200 shadow-sm"
            )}`}>
              <h3 className={`text-lg font-semibold mb-3 ${t(theme, "text-cyan-400", "text-cyan-600")}`}>
                Backend
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: "Java", icon: FaJava, color: "#007396" },
                  { name: "Python", icon: FaPython, color: "#3776AB" },
                  { name: "Spring Boot", icon: SiSpringboot, color: "#6db33f" },
                  { name: "Spring Security", icon: SiSpringsecurity, color: "#6db33f" },
                  { name: "JWT", icon: FaKey, color: "#eab308" },
                  { name: "REST APIs", icon: FaServer, color: "#9ca3af" },
                ].map((tech) => (
                  <span
                    key={tech.name}
                    className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full border text-xs ${t(
                      theme,
                      "bg-white/5 border-cyan-500/20 text-gray-300",
                      "bg-gray-50 border-cyan-200 text-gray-700"
                    )}`}
                  >
                    <tech.icon className="text-sm" style={{ color: tech.color }} />
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Database & DevOps Inner Card */}
            <div className={`rounded-2xl p-5 border ${t(
              theme,
              "bg-white/5 border-green-500/30",
              "bg-white border-green-200 shadow-sm"
            )}`}>
              <h3 className={`text-lg font-semibold mb-3 ${t(theme, "text-green-400", "text-green-600")}`}>
                Database & DevOps
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: "MySQL", icon: SiMysql, color: "#4479a1" },
                  { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
                  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
                  { name: "Redis", icon: SiRedis, color: "#DC382D" },
                  { name: "Git", icon: FaGitAlt, color: "#f05032" },
                  { name: "Docker", icon: FaDocker, color: "#2496ed" },
                  { name: "AWS", icon: FaAws, color: "#ff9900" },
                ].map((tech) => (
                  <span
                    key={tech.name}
                    className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full border text-xs ${t(
                      theme,
                      "bg-white/5 border-green-500/20 text-gray-300",
                      "bg-gray-50 border-green-200 text-gray-700"
                    )}`}
                  >
                    <tech.icon className="text-sm" style={{ color: tech.color }} />
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ===== CERTIFICATIONS ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className={cardClass}
        >
          <h2 className={`text-xl font-bold mb-4 ${t(theme, "text-purple-400", "text-purple-600")}`}>
            Certifications
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {certificates.map((cert) => (
              <motion.a
                key={cert.id}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, y: -4 }}
                className={`group relative rounded-xl overflow-hidden border transition-all duration-300 ${t(
                  theme,
                  "bg-white/5 border-purple-500/30 hover:border-purple-500/60",
                  "bg-white border-purple-200 hover:border-purple-300 shadow-sm"
                )}`}
              >
                <div className="relative h-36 overflow-hidden bg-gradient-to-br from-purple-900/30 to-cyan-900/30">
                  <img
                    src={getImagePath(cert.image)}
                    alt={cert.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      target.onerror = null;
                      target.src = `data:image/svg+xml,${encodeURIComponent(
                        `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200">
                          <rect width="100%" height="100%" fill="#1a1040"/>
                          <text x="50%" y="50%" fill="#9333ea" font-family="sans-serif" font-size="16"
                            text-anchor="middle" dominant-baseline="middle">${cert.name}</text>
                        </svg>`
                      )}`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <FaExternalLinkAlt className="text-white text-xs" />
                  </div>
                </div>
                <div className="p-3">
                  <h4 className={`text-sm font-semibold ${t(theme, "text-white", "text-gray-900")}`}>
                    {cert.name}
                  </h4>
                  <p className={`text-xs ${t(theme, "text-gray-400", "text-gray-600")}`}>
                    {cert.organization} • {cert.period}
                  </p>
                  <p className={`text-xs mt-1 leading-relaxed ${t(theme, "text-gray-500", "text-gray-400")}`}>
                    {cert.description}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* ===== ACHIEVEMENTS & LEADERSHIP ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className={cardClass}
        >
          <h2 className={`text-xl font-bold mb-4 ${t(theme, "text-purple-400", "text-purple-600")}`}>
            Achievements & Leadership
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((item, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-xl border transition-all ${t(
                  theme,
                  "bg-white/5 border-purple-500/20 hover:border-purple-500/40",
                  "bg-gray-50 border-purple-200 hover:border-purple-300"
                )}`}
              >
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className={`text-sm font-semibold ${t(theme, "text-white", "text-gray-900")}`}>
                      {item.title}
                    </h3>
                    <p className={`text-xs ${t(theme, "text-purple-400", "text-purple-600")}`}>
                      {item.organization}
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className={`text-xs font-medium ${t(theme, "text-cyan-400", "text-cyan-600")}`}>
                      {item.period}
                    </span>
                    <p className={`text-xs ${t(theme, "text-gray-500", "text-gray-500")}`}>{item.location}</p>
                  </div>
                </div>
                <p className={`text-xs mt-2 ${t(theme, "text-gray-400", "text-gray-600")}`}>
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {item.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`text-xs px-2 py-0.5 rounded-full border ${t(
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
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;