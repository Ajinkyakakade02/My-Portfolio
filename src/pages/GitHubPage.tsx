// src/pages/GitHubPage.tsx
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";
import { useTheme } from "@/hooks/useTheme";
import { siteConfig } from "@/constants";

const t = (theme: string, dark: string, light: string) =>
  theme === "dark" ? dark : light;

const GitHubPage = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();

  const stats = [
    { value: "50+", label: "Repositories" },
    { value: "100+", label: "Contributions" },
    { value: "20+", label: "Followers" },
  ];

  return (
    <div className={`min-h-screen py-20 transition-colors duration-300 ${t(theme, "bg-[#030014]", "bg-gray-50")}`}>
      <div className="max-w-4xl mx-auto px-4">
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

        <div className="mb-12 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent"
          >
            GitHub Profile
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={`text-lg mb-8 ${t(theme, "text-gray-400", "text-gray-600")}`}
          >
            Explore my open-source contributions and projects
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.02, y: -4 }}
          onClick={() => window.open(siteConfig.github, "_blank")}
          className={`cursor-pointer rounded-2xl p-12 transition-all duration-300 border ${t(
            theme,
            "bg-white/5 border-purple-500/30 hover:border-purple-500/60",
            "bg-white border-purple-300/30 hover:border-purple-400/60 shadow-sm"
          )}`}
        >
          <FaGithub className={`text-8xl mx-auto mb-6 ${t(theme, "text-purple-400", "text-purple-600")}`} />
          <h2 className={`text-2xl font-bold mb-4 ${t(theme, "text-white", "text-gray-900")}`}>
            Visit My GitHub
          </h2>
          <p className={`mb-6 ${t(theme, "text-gray-400", "text-gray-600")}`}>
            Check out my repositories, contributions, and open-source work
          </p>
          <div
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${t(
              theme,
              "bg-purple-500/20 text-purple-400 hover:bg-purple-500/30",
              "bg-purple-100 text-purple-700 hover:bg-purple-200"
            )}`}
          >
            <FaGithub />
            <span>github.com/Ajinkyakakade02</span>
            <FaExternalLinkAlt className="text-xs ml-1" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className={`mt-8 rounded-2xl p-4 border overflow-hidden ${t(theme, "bg-white/5 border-purple-500/20", "bg-white border-purple-200 shadow-sm")}`}
        >
          <img
            src={`https://ghchart.rshah.org/9333ea/Ajinkyakakade02`}
            alt="GitHub contribution chart"
            className="w-full rounded-lg opacity-80"
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6"
        >
          {stats.map(({ value, label }) => (
            <motion.div
              key={label}
              whileHover={{ scale: 1.05, y: -3 }}
              className={`p-6 rounded-xl border ${t(theme, "bg-white/5 border-purple-500/20", "bg-white border-purple-200 shadow-sm")}`}
            >
              <div className="text-3xl font-bold text-purple-500">{value}</div>
              <div className={`text-sm mt-1 ${t(theme, "text-gray-400", "text-gray-600")}`}>{label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default GitHubPage;