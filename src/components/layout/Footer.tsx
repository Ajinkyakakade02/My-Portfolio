// src/components/layout/Footer.tsx
import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/hooks/useTheme";
import { FOOTER_DATA, siteConfig, NAV_LINKS } from "@/constants";
import { useNavigate, useLocation } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { getImagePath } from "@/lib/paths";

const t = (theme: string, dark: string, light: string) =>
  theme === "dark" ? dark : light;

export const Footer = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }
  };

  const handleNavClick = (e: React.MouseEvent, link: string) => {
    e.preventDefault();
    const sectionId = link.replace("#", "");
    scrollToSection(sectionId);
  };

  // Updated navigation links to match header
  const updatedNavLinks = [
    { title: "Home", link: "#about-me" },
    { title: "Skills", link: "#skills" },
    { title: "All about me", link: "#encryption" },
    { title: "Experience", link: "#experience" },
    { title: "Contact", link: "#contact" },
  ];

  return (
    <footer
      className={`relative border-t transition-all duration-300 ${
        t(
          theme,
          "bg-[#030014]/95 backdrop-blur-xl border-purple-500/30",
          "bg-gray-50 border-purple-200"
        )
      }`}
    >
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Section - Modern Glass Effect with Avatar */}
          <div className="col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="relative">
                  {/* Pulsing Glow Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full blur-md"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      opacity: [0.5, 0.8, 0.5]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <div className="relative w-12 h-12 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-full overflow-hidden">
                    <img
                      src={getImagePath("/logo.png")}
                      alt={siteConfig.name}
                      className="w-full h-full object-cover rounded-full"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        const parent = e.currentTarget.parentElement;
                        if (parent && !parent.querySelector(".initials")) {
                          const div = document.createElement("div");
                          div.className =
                            "initials absolute inset-0 flex items-center justify-center text-white font-bold text-lg";
                          div.textContent = "AK";
                          parent.appendChild(div);
                        }
                      }}
                    />
                  </div>
                </div>
                <div>
                  <span
                    className={`font-bold text-lg bg-gradient-to-r from-purple-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent`}
                  >
                    {siteConfig.name.split(" ")[0]}
                  </span>
                  <p className="text-[10px] font-mono text-gray-500">
                    {siteConfig.role}
                  </p>
                </div>
              </div>
              <p
                className={`text-sm leading-relaxed ${t(
                  theme,
                  "text-gray-400",
                  "text-gray-600"
                )}`}
              >
                Building secure, performant, and delightful digital experiences
                with modern web technologies.
              </p>
            </motion.div>
          </div>

          {/* Quick Links - Modern Styling */}
          <div className="col-span-1">
            <h3
              className={`text-sm font-semibold uppercase tracking-wider mb-4 flex items-center gap-2 ${t(
                theme,
                "text-purple-400",
                "text-purple-600"
              )}`}
            >
              <span className="w-1 h-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {updatedNavLinks.map((link, index) => (
                <motion.li
                  key={link.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <button
                    onClick={(e) => handleNavClick(e, link.link)}
                    className={`group relative inline-flex items-center text-sm transition-all duration-300 ${
                      t(
                        theme,
                        "text-gray-400 hover:text-purple-400",
                        "text-gray-600 hover:text-purple-600"
                      )
                    }`}
                  >
                    <span className="relative">
                      {link.title}
                      <span className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-purple-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </span>
                  </button>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Social Media - Modern Icons */}
          <div className="col-span-1">
            <h3
              className={`text-sm font-semibold uppercase tracking-wider mb-4 flex items-center gap-2 ${t(
                theme,
                "text-purple-400",
                "text-purple-600"
              )}`}
            >
              <span className="w-1 h-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" />
              Connect
            </h3>
            <div className="flex flex-wrap gap-3">
              {FOOTER_DATA[1]?.data.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 rounded-xl transition-all duration-300 ${
                    t(
                      theme,
                      "bg-white/5 border border-purple-500/20 text-gray-400 hover:text-purple-400 hover:border-purple-500/50 hover:bg-purple-500/10",
                      "bg-gray-50 border border-purple-200 text-gray-600 hover:text-purple-600 hover:border-purple-300 hover:bg-purple-50"
                    )
                  }`}
                >
                  {item.icon && <item.icon className="w-5 h-5" />}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact - Modern Card Style */}
          <div className="col-span-1">
            <h3
              className={`text-sm font-semibold uppercase tracking-wider mb-4 flex items-center gap-2 ${t(
                theme,
                "text-purple-400",
                "text-purple-600"
              )}`}
            >
              <span className="w-1 h-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" />
              Contact
            </h3>
            <div className={`rounded-xl p-4 ${
              t(
                theme,
                "bg-white/5 border border-purple-500/20",
                "bg-gray-50 border border-purple-200"
              )
            }`}>
              <ul className="space-y-3">
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className={`flex items-center gap-2 text-sm transition-colors group ${
                      t(
                        theme,
                        "text-gray-400 hover:text-purple-400",
                        "text-gray-600 hover:text-purple-600"
                      )
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-purple-500 group-hover:scale-125 transition-transform" />
                    <span>{siteConfig.email}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                    className={`flex items-center gap-2 text-sm transition-colors group ${
                      t(
                        theme,
                        "text-gray-400 hover:text-purple-400",
                        "text-gray-600 hover:text-purple-600"
                      )
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-purple-500 group-hover:scale-125 transition-transform" />
                    <span>{siteConfig.phone}</span>
                  </a>
                </li>
                <li>
                  <div className={`flex items-center gap-2 text-sm ${
                    t(theme, "text-gray-400", "text-gray-600")
                  }`}>
                    <span className="w-2 h-2 rounded-full bg-cyan-500" />
                    <span>{siteConfig.location}</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright Section - Modern Design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className={`mt-12 pt-8 border-t text-center ${
            t(
              theme,
              "border-purple-500/20",
              "border-purple-200"
            )
          }`}
        >
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-2 text-sm">
              <span className={t(theme, "text-gray-500", "text-gray-500")}>
                © {currentYear} {siteConfig.name}
              </span>
              <span className={t(theme, "text-purple-500", "text-purple-400")}>•</span>
              <span className={t(theme, "text-gray-500", "text-gray-500")}>
                All rights reserved
              </span>
            </div>
            
            <div className="flex items-center gap-2 text-xs">
              <span className={t(theme, "text-gray-500", "text-gray-500")}>
                Built with
              </span>
              <FaHeart className="text-red-500 text-xs animate-pulse" />
              <span className={t(theme, "text-gray-500", "text-gray-500")}>
                using React, TypeScript, Tailwind CSS
              </span>
            </div>

            {/* Decorative Line */}
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
          </div>
        </motion.div>
      </div>
    </footer>
  );
};