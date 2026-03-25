// src/components/layout/Header.tsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { useTheme } from "@/hooks/useTheme";

const NAV_LINKS = [
  { title: "About me", link: "#about-me" },
  { title: "Skills", link: "#skills" },
  { title: "Projects", link: "#projects" },
];

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about-me");
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ["about-me", "skills", "projects"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);
  
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    e.preventDefault();
    const sectionId = link.replace("#", "");
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
      closeMenu();
    }
  };

  const socialLinks = [
    { icon: FaGithub, link: "https://github.com/ajinkyakakade", label: "GitHub" },
    { icon: FaLinkedin, link: "https://linkedin.com/in/ajinkyakakade", label: "LinkedIn" },
    { icon: FaTwitter, link: "https://twitter.com/ajinkyakakade", label: "Twitter" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? theme === 'dark' 
            ? "bg-[#030014]/80 backdrop-blur-xl shadow-[0_0_30px_rgba(139,92,246,0.3)]" 
            : "bg-white/80 backdrop-blur-xl shadow-[0_0_30px_rgba(139,92,246,0.2)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Left Section - Logo and Name */}
          <div className="flex items-center gap-3">
            <motion.a 
              href="#about-me" 
              className="relative group cursor-pointer"
              onClick={(e) => scrollToSection(e, "#about-me")}
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full blur-md opacity-50 group-hover:opacity-100 transition-opacity" />
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="relative w-full h-full object-contain rounded-full"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/40?text=AK";
                  }}
                />
              </div>
            </motion.a>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="hidden sm:block"
            >
              <span className={`font-bold text-lg tracking-wide ${
                theme === 'dark' 
                  ? "bg-gradient-to-r from-purple-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent"
                  : "bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent"
              }`}>
                Ajinkya Kakade
              </span>
            </motion.div>
          </div>

          {/* Navigation Links - Center */}
          <div className={`hidden md:flex items-center gap-1 backdrop-blur-md px-4 py-2 rounded-full border ${
            theme === 'dark' 
              ? "bg-white/5 border-purple-500/30 shadow-[0_0_15px_rgba(139,92,246,0.2)]"
              : "bg-black/5 border-purple-500/20 shadow-[0_0_15px_rgba(139,92,246,0.1)]"
          }`}>
            {NAV_LINKS.map((link) => (
              <motion.a 
                key={link.title} 
                href={link.link} 
                onClick={(e) => scrollToSection(e, link.link)}
                className={`relative px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium ${
                  activeSection === link.link.replace("#", "")
                    ? "text-white"
                    : theme === 'dark' ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"
                }`}
                whileHover={{ scale: 1.05 }}
              >
                {activeSection === link.link.replace("#", "") && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{link.title}</span>
              </motion.a>
            ))}
          </div>

          {/* Right Section - Social Icons and Theme Toggle */}
          <div className="hidden md:flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors ${
                  theme === 'dark' ? "text-gray-400 hover:text-purple-400" : "text-gray-600 hover:text-purple-600"
                }`}
                whileHover={{ scale: 1.1, y: -2 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <social.icon className="h-5 w-5" />
              </motion.a>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden backdrop-blur-xl border-t ${
              theme === 'dark'
                ? "bg-[#030014]/95 border-purple-500/30"
                : "bg-white/95 border-purple-500/20"
            }`}
          >
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Name */}
              <div className={`text-center pb-4 border-b ${
                theme === 'dark' ? "border-purple-500/20" : "border-purple-500/10"
              }`}>
                <span className={`text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent`}>
                  Ajinkya Kakade
                </span>
              </div>
              
              {NAV_LINKS.map((link) => (
                <a
                  key={link.title}
                  href={link.link}
                  onClick={(e) => scrollToSection(e, link.link)}
                  className={`block px-4 py-3 rounded-lg transition-colors ${
                    theme === 'dark'
                      ? "text-gray-300 hover:bg-purple-500/20"
                      : "text-gray-700 hover:bg-purple-500/10"
                  }`}
                >
                  {link.title}
                </a>
              ))}
              <div className={`flex items-center justify-between pt-4 border-t ${
                theme === 'dark' ? "border-gray-800" : "border-gray-200"
              }`}>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a 
                      key={social.label} 
                      href={social.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={theme === 'dark' ? "text-gray-400 hover:text-purple-400" : "text-gray-600 hover:text-purple-600"}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};