// src/components/layout/Header.tsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/hooks/useTheme";
import { NAV_LINKS, SOCIALS, siteConfig } from "@/constants";
import { getImagePath } from "@/lib/paths";

// ==================== HELPERS ====================
const t = (theme: string, dark: string, light: string) =>
  theme === "dark" ? dark : light;

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about-me");
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionIds = NAV_LINKS.map((l) => l.link.replace("#", ""));
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent, link: string) => {
    e.preventDefault();
    const id = link.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
      setActiveSection(id);
    }
    setIsMobileMenuOpen(false);
  };

  // Updated navigation links - removed projects and security, added "All about me"
  const updatedNavLinks = [
    { title: "Home", link: "#about-me" },
    { title: "Skills", link: "#skills" },
    { title: "All about me", link: "#encryption" },
    { title: "Experience", link: "#experience" },
    { title: "Contact", link: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#030014]/95 backdrop-blur-xl shadow-2xl border-b border-purple-500/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Left Side - Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {updatedNavLinks.map((link, index) => {
              const isActive = activeSection === link.link.replace("#", "");
              return (
                <motion.a
                  key={link.title}
                  href={link.link}
                  onClick={(e) => scrollToSection(e, link.link)}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-xl border border-purple-500/30"
                      transition={{ type: "spring", duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10">{link.title}</span>
                </motion.a>
              );
            })}
          </div>

          {/* Right Side - Logo + Name + Social */}
          <div className="flex items-center gap-4">
            {/* Social Icons */}
            <div className="hidden md:flex items-center gap-2">
              {SOCIALS.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  className="p-2 rounded-lg transition-all duration-300 text-gray-400 hover:text-purple-400 hover:bg-purple-500/10"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>

            {/* Logo + Name */}
            <div className="flex items-center gap-3">
              <motion.a
                href="#about-me"
                onClick={(e) => scrollToSection(e, "#about-me")}
                className="relative group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative w-10 h-10">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      opacity: [0.5, 0.8, 0.5]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <div className="absolute inset-[2px] bg-gradient-to-br from-purple-600 to-cyan-600 rounded-full" />
                  <img
                    src={getImagePath("/logo.png")}
                    alt={siteConfig.name}
                    className="relative w-full h-full object-contain rounded-full z-10"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      const parent = e.currentTarget.parentElement;
                      if (parent && !parent.querySelector(".initials")) {
                        const div = document.createElement("div");
                        div.className =
                          "initials relative w-full h-full rounded-full bg-gradient-to-br from-purple-600 to-cyan-600 flex items-center justify-center text-white font-bold text-sm z-10";
                        div.textContent = "AK";
                        parent.appendChild(div);
                      }
                    }}
                  />
                </div>
              </motion.a>

              <div className="flex flex-col">
                <motion.span
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="font-bold text-lg tracking-tight bg-gradient-to-r from-purple-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent"
                >
                  {siteConfig.name.split(" ")[0]}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 }}
                  className="text-[10px] font-mono text-gray-500 text-right"
                >
                  {siteConfig.role}
                </motion.span>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-xl transition-all duration-300 text-white hover:bg-white/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden border-t backdrop-blur-2xl bg-[#030014]/98 border-purple-500/20"
          >
            <div className="px-4 py-6 space-y-2">
              {/* Mobile Brand */}
              <div className="text-center pb-4 mb-2 border-b border-purple-500/20">
                <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  {siteConfig.name}
                </span>
                <p className="text-xs mt-1 text-gray-500">
                  {siteConfig.role}
                </p>
              </div>

              {/* Navigation Links - Mobile */}
              {updatedNavLinks.map((link) => (
                <motion.a
                  key={link.title}
                  href={link.link}
                  onClick={(e) => scrollToSection(e, link.link)}
                  whileTap={{ scale: 0.98 }}
                  className={`block px-4 py-3 rounded-xl transition-all duration-300 text-sm font-medium ${
                    activeSection === link.link.replace("#", "")
                      ? "bg-purple-500/20 text-purple-400"
                      : "text-gray-300 hover:bg-white/5"
                  }`}
                >
                  {link.title}
                </motion.a>
              ))}

              {/* Mobile Footer - Social Icons only */}
              <div className="flex items-center justify-center pt-4 mt-2 border-t border-gray-800">
                <div className="flex gap-4">
                  {SOCIALS.map((social) => (
                    <a
                      key={social.name}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors p-2 rounded-lg text-gray-400 hover:text-purple-400 hover:bg-white/5"
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};