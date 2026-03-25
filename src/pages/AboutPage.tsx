// src/pages/AboutPage.tsx
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  FaReact, 
  FaAws, 
  FaCode, 
  FaTrophy, 
  FaGraduationCap, 
  FaBriefcase, 
  FaDownload,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaArrowLeft
} from "react-icons/fa";
import { 
  SiTypescript, 
  SiTailwindcss, 
  SiMongodb, 
  SiPostgresql, 
  SiSpringboot 
} from "react-icons/si";
import { useTheme } from "@/hooks/useTheme";
import { siteConfig, ACHIEVEMENTS } from "@/constants";

const t = (theme: string, dark: string, light: string) =>
  theme === "dark" ? dark : light;

const AboutPage = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();

  const techStack = [
    { name: "Spring Boot", icon: SiSpringboot, color: "#6db33f" },
    { name: "React", icon: FaReact, color: "#61dafb" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
    { name: "Tailwind", icon: SiTailwindcss, color: "#06b6d4" },
    { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
    { name: "AWS", icon: FaAws, color: "#ff9900" },
  ];

  const achievementIcons: Record<string, React.ElementType> = {
    "SIH Winner": FaTrophy,
    "10+ GitHub Stars": FaCode,
    "B.E. CS Degree": FaGraduationCap,
    "SIH Team Lead": FaBriefcase,
  };

  const cardClass = `rounded-2xl p-8 mb-8 border ${t(
    theme,
    "bg-white/5 border-purple-500/30",
    "bg-white border-purple-200 shadow-sm"
  )}`;

  const labelClass = `text-sm font-medium ${t(theme, "text-gray-500", "text-gray-500")}`;
  const valueClass = `text-sm font-semibold ${t(theme, "text-gray-200", "text-gray-800")}`;

  return (
    <div className={`min-h-screen py-20 transition-colors duration-300 ${t(theme, "bg-[#030014]", "bg-gray-50")}`}>
      <div className="max-w-6xl mx-auto px-4">
        {/* Back Button - Repositioned lower */}
        <div className="flex justify-start mb-12">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => navigate("/")}
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

        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent"
          >
            About Me
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={t(theme, "text-gray-400", "text-gray-600")}
          >
            Get to know me better
          </motion.p>
        </div>

        {/* Resume Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={cardClass}
        >
          <h2 className={`text-2xl font-bold mb-6 ${t(theme, "text-purple-400", "text-purple-600")}`}>
            Resume
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { label: "Name", value: siteConfig.name, icon: FaUser },
              { label: "Role", value: "Full Stack Developer", icon: FaUser },
              { label: "Status", value: "Open to opportunities ✅", icon: FaUser },
              { label: "Location", value: siteConfig.location, icon: FaMapMarkerAlt },
              { label: "Email", value: siteConfig.email, icon: FaEnvelope },
              { label: "Phone", value: siteConfig.phone, icon: FaPhone },
            ].map(({ label, value, icon: Icon }) => (
              <div key={label} className="flex items-start gap-3">
                <div className={`mt-0.5 p-2 rounded-lg ${t(theme, "bg-purple-500/10", "bg-purple-50")}`}>
                  <Icon className={`text-sm ${t(theme, "text-purple-400", "text-purple-600")}`} />
                </div>
                <div>
                  <p className={`text-xs ${labelClass}`}>{label}</p>
                  <p className={valueClass}>{value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-purple-500/20">
            <motion.a
              href={siteConfig.resumePath}
              download
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-600 px-6 py-3 rounded-full font-semibold text-white shadow-lg hover:shadow-purple-500/25 transition-shadow text-sm"
            >
              <FaDownload className="text-sm" />
              Download Full Resume
            </motion.a>
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className={cardClass}
        >
          <h2 className={`text-2xl font-bold mb-6 ${t(theme, "text-purple-400", "text-purple-600")}`}>
            Tech Stack
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-6">
            {techStack.map((tech) => (
              <motion.div
                key={tech.name}
                whileHover={{ scale: 1.15, y: -4 }}
                className="text-center group"
              >
                <div className={`p-3 rounded-xl border mb-2 transition-all ${t(
                  theme,
                  "bg-white/5 border-purple-500/20 group-hover:border-purple-500/50",
                  "bg-gray-50 border-purple-200 group-hover:border-purple-400"
                )}`}>
                  <tech.icon className="text-3xl mx-auto" style={{ color: tech.color }} />
                </div>
                <p className={`text-xs ${t(theme, "text-gray-400", "text-gray-600")}`}>{tech.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className={cardClass.replace(" mb-8", "")}
        >
          <h2 className={`text-2xl font-bold mb-6 ${t(theme, "text-purple-400", "text-purple-600")}`}>
            Achievements
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ACHIEVEMENTS.map((a) => {
              const Icon = achievementIcons[a.title] ?? FaTrophy;
              return (
                <motion.div
                  key={a.title}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className={`text-center p-5 rounded-xl border transition-all ${t(
                    theme,
                    "bg-white/5 border-purple-500/20 hover:border-purple-500/40",
                    "bg-gray-50 border-purple-200 hover:border-purple-300"
                  )}`}
                >
                  <Icon className={`text-3xl mx-auto mb-3 ${t(theme, "text-purple-400", "text-purple-600")}`} />
                  <h3 className={`font-semibold text-sm mb-1 ${t(theme, "text-white", "text-gray-900")}`}>
                    {a.title}
                  </h3>
                  <p className={`text-xs mb-1 font-medium ${t(theme, "text-purple-400", "text-purple-600")}`}>
                    {a.year}
                  </p>
                  <p className={`text-xs ${t(theme, "text-gray-400", "text-gray-600")}`}>
                    {a.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;