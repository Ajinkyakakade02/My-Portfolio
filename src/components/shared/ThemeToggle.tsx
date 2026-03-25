// src/components/shared/ThemeToggle.tsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "@/hooks/useTheme";

export const ThemeToggle = () => {
  const { theme, toggleTheme, isTransitioning } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.button
      onClick={toggleTheme}
      className={`relative w-10 h-10 rounded-full backdrop-blur-sm border transition-all duration-300 flex items-center justify-center overflow-hidden group ${
        isDark
          ? "bg-white/10 border-purple-500/30 hover:border-purple-500/60"
          : "bg-black/10 border-purple-400/30 hover:border-purple-500/60"
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {/* Transition glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full"
        animate={{ opacity: isTransitioning ? [0, 0.5, 0] : 0 }}
        transition={{ duration: 0.3 }}
      />

      <AnimatePresence mode="wait">
        {isDark ? (
          <motion.div
            key="moon"
            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
            transition={{ duration: 0.2 }}
            className="relative z-10"
          >
            <FaMoon className="text-cyan-400 text-lg group-hover:text-cyan-300 transition-colors" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
            transition={{ duration: 0.2 }}
            className="relative z-10"
          >
            <FaSun className="text-yellow-400 text-lg group-hover:text-yellow-300 transition-colors" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Ripple on tap */}
      <motion.div
        className="absolute inset-0 rounded-full bg-white/20"
        initial={{ scale: 0, opacity: 0 }}
        whileTap={{ scale: 1.5, opacity: 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
};