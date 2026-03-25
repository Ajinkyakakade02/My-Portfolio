// src/pages/ProjectsPage.tsx
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaArrowRight, FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";
import { useTheme } from "@/hooks/useTheme";
import { getImagePath } from "@/lib/paths";
import { PROJECTS } from "@/constants";

const t = (theme: string, dark: string, light: string) =>
  theme === "dark" ? dark : light;

const ProjectsPage = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();

  return (
    <div className={`min-h-screen py-20 transition-colors duration-300 ${t(theme, "bg-[#030014]", "bg-gray-50")}`}>
      <div className="max-w-7xl mx-auto px-4">
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
            My Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={t(theme, "text-gray-400", "text-gray-600")}
          >
            Click on any project to visit the live website
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              onClick={() => project.link !== "#" && window.open(project.link, "_blank")}
              className={`group relative backdrop-blur-md rounded-2xl overflow-hidden border transition-all duration-300 h-full flex flex-col ${
                project.link !== "#" ? "cursor-pointer" : "cursor-default"
              } ${t(
                theme,
                "bg-white/5 border-purple-500/30 hover:border-purple-500/60",
                "bg-white border-purple-300/30 hover:border-purple-400/60 shadow-sm"
              )}`}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={getImagePath(project.image)}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      `https://via.placeholder.com/400x200/1a1040/9333ea?text=${encodeURIComponent(project.title)}`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-4xl">{project.icon}</div>
                {project.link !== "#" && (
                  <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <FaExternalLinkAlt className="text-white text-xs" />
                  </div>
                )}
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className={`text-xl font-bold mb-2 ${t(theme, "text-white group-hover:text-purple-400", "text-gray-900 group-hover:text-purple-600")} transition-colors`}>
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
                        "bg-purple-500/20 text-purple-300 border-purple-500/30",
                        "bg-purple-100 text-purple-700 border-purple-200"
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
                    className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${t(
                      theme, "text-purple-400 hover:text-purple-300", "text-purple-600 hover:text-purple-500"
                    )}`}
                    whileHover={{ x: 4 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span>View Project</span>
                    <FaArrowRight className="text-xs" />
                  </motion.a>
                  {project.github && project.github !== "#" && (
                    <motion.a
                      href={project.github}
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

              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;