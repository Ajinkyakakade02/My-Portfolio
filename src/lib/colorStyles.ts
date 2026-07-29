// src/lib/colorStyles.ts

export type AccentColor = "purple" | "cyan" | "green" | "yellow";

export function getAccentClasses(accent: AccentColor, theme: string) {
  const isDark = theme === "dark";

  const base: Record<AccentColor, { text: string; cardBorder: string; cardBorderHover: string }> = {
    purple: {
      text: isDark ? "text-purple-400" : "text-purple-600",
      cardBorder: isDark ? "border-purple-500/30" : "border-purple-300/30",
      cardBorderHover: isDark ? "hover:border-purple-500/60" : "hover:border-purple-500/60",
    },
    cyan: {
      text: isDark ? "text-cyan-400" : "text-cyan-600",
      cardBorder: isDark ? "border-cyan-500/30" : "border-cyan-300/30",
      cardBorderHover: isDark ? "hover:border-cyan-500/60" : "hover:border-cyan-400/60",
    },
    green: {
      text: isDark ? "text-green-400" : "text-green-600",
      cardBorder: isDark ? "border-green-500/30" : "border-green-300/30",
      cardBorderHover: isDark ? "hover:border-green-500/60" : "hover:border-green-400/60",
    },
    yellow: {
      text: isDark ? "text-yellow-400" : "text-yellow-600",
      cardBorder: isDark ? "border-yellow-500/30" : "border-yellow-300/30",
      cardBorderHover: isDark ? "hover:border-yellow-500/60" : "hover:border-yellow-400/60",
    },
  };

  return base[accent] || base.purple;
}