// src/lib/colorStyles.ts

export type AccentColor =
  | "primary"
  | "accent"
  | "muted"
  | "success";

type AccentClasses = {
  text: string;
  cardBorder: string;
  cardBorderHover: string;
  background: string;
  backgroundHover: string;
};

export function getAccentClasses(
  accent: AccentColor,
  theme: string
): AccentClasses {
  const isDark = theme === "dark";

  const base: Record<AccentColor, AccentClasses> = {
    primary: {
      text: isDark
        ? "text-[#F5F3EE]"
        : "text-[#171717]",

      cardBorder: isDark
        ? "border-white/[0.08]"
        : "border-black/[0.08]",

      cardBorderHover: isDark
        ? "hover:border-[#C9A66B]/35"
        : "hover:border-[#9A743B]/35",

      background: isDark
        ? "bg-white/[0.025]"
        : "bg-black/[0.015]",

      backgroundHover: isDark
        ? "hover:bg-white/[0.045]"
        : "hover:bg-black/[0.025]",
    },

    accent: {
      text: isDark
        ? "text-[#C9A66B]"
        : "text-[#9A743B]",

      cardBorder: isDark
        ? "border-[#C9A66B]/15"
        : "border-[#9A743B]/15",

      cardBorderHover: isDark
        ? "hover:border-[#C9A66B]/40"
        : "hover:border-[#9A743B]/40",

      background: isDark
        ? "bg-[#C9A66B]/[0.035]"
        : "bg-[#9A743B]/[0.025]",

      backgroundHover: isDark
        ? "hover:bg-[#C9A66B]/[0.07]"
        : "hover:bg-[#9A743B]/[0.05]",
    },

    muted: {
      text: isDark
        ? "text-[#A7A39A]"
        : "text-[#65615A]",

      cardBorder: isDark
        ? "border-white/[0.06]"
        : "border-black/[0.07]",

      cardBorderHover: isDark
        ? "hover:border-white/[0.14]"
        : "hover:border-black/[0.14]",

      background: isDark
        ? "bg-white/[0.02]"
        : "bg-black/[0.015]",

      backgroundHover: isDark
        ? "hover:bg-white/[0.04]"
        : "hover:bg-black/[0.025]",
    },

    success: {
      text: isDark
        ? "text-[#A8B89A]"
        : "text-[#58704D]",

      cardBorder: isDark
        ? "border-[#A8B89A]/15"
        : "border-[#58704D]/15",

      cardBorderHover: isDark
        ? "hover:border-[#A8B89A]/35"
        : "hover:border-[#58704D]/35",

      background: isDark
        ? "bg-[#A8B89A]/[0.025]"
        : "bg-[#58704D]/[0.02]",

      backgroundHover: isDark
        ? "hover:bg-[#A8B89A]/[0.05]"
        : "hover:bg-[#58704D]/[0.04]",
    },
  };

  return base[accent] ?? base.primary;
}
