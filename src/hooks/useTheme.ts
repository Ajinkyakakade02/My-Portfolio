// src/hooks/useTheme.ts

import {
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";

type Theme = "light" | "dark";
type ThemeTransition = "smooth" | "instant";

interface UseThemeOptions {
  defaultTheme?: Theme;
  enableTransition?: boolean;
  transitionDuration?: number;
  persistKey?: string;
}

interface UseThemeReturn {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (
    theme: Theme,
    transition?: ThemeTransition
  ) => void;
  isDark: boolean;
  isLight: boolean;
  isTransitioning: boolean;
  availableThemes: Theme[];
}

export const useTheme = (
  options: UseThemeOptions = {}
): UseThemeReturn => {
  const {
    defaultTheme = "dark",
    enableTransition = true,
    transitionDuration = 300,
    persistKey = "space-theme",
  } = options;

  const [theme, setThemeState] =
    useState<Theme>("dark");

  const [isTransitioning, setIsTransitioning] =
    useState(false);

  // ============================================================
  // Apply theme
  // ============================================================

  const applyTheme = useCallback(
    (
      newTheme: Theme,
      transition: ThemeTransition = "smooth"
    ) => {
      const shouldTransition =
        enableTransition &&
        transition !== "instant";

      if (shouldTransition) {
        setIsTransitioning(true);

        document.documentElement.classList.add(
          "theme-transition"
        );

        window.setTimeout(() => {
          document.documentElement.classList.remove(
            "theme-transition"
          );

          setIsTransitioning(false);
        }, transitionDuration);
      }

      /*
       * Dark mode is the default and preferred
       * appearance of the portfolio.
       */

      if (newTheme === "dark") {
        document.documentElement.classList.add(
          "dark"
        );

        document.documentElement.classList.remove(
          "light"
        );
      } else {
        document.documentElement.classList.add(
          "light"
        );

        document.documentElement.classList.remove(
          "dark"
        );
      }

      localStorage.setItem(
        persistKey,
        newTheme
      );

      window.dispatchEvent(
        new CustomEvent("themeChange", {
          detail: {
            theme: newTheme,
          },
        })
      );
    },
    [
      enableTransition,
      transitionDuration,
      persistKey,
    ]
  );

  // ============================================================
  // Initialize theme
  // ============================================================

  useEffect(() => {
    /*
     * Force dark mode.
     *
     * We intentionally do not follow the user's
     * system/browser color preference because the
     * portfolio is now dark-only.
     */

    setThemeState("dark");

    document.documentElement.classList.add(
      "dark"
    );

    document.documentElement.classList.remove(
      "light"
    );

    localStorage.setItem(
      persistKey,
      "dark"
    );
  }, [persistKey]);

  // ============================================================
  // Listen for theme events
  // ============================================================

  useEffect(() => {
    const handleThemeChange = (
      event: Event
    ) => {
      const customEvent =
        event as CustomEvent<{
          theme: Theme;
        }>;

      const newTheme =
        customEvent.detail?.theme;

      if (
        newTheme !== "light" &&
        newTheme !== "dark"
      ) {
        return;
      }

      setThemeState(newTheme);
    };

    window.addEventListener(
      "themeChange",
      handleThemeChange
    );

    return () => {
      window.removeEventListener(
        "themeChange",
        handleThemeChange
      );
    };
  }, []);

  // ============================================================
  // Set theme
  // ============================================================

  const setTheme = useCallback(
    (
      newTheme: Theme,
      transition: ThemeTransition = "smooth"
    ) => {
      if (newTheme === theme) {
        return;
      }

      setThemeState(newTheme);

      applyTheme(
        newTheme,
        transition
      );
    },
    [theme, applyTheme]
  );

  // ============================================================
  // Toggle theme
  //
  // Kept for compatibility with any other component
  // that may still call toggleTheme().
  // ============================================================

  const toggleTheme = useCallback(() => {
    const newTheme =
      theme === "dark"
        ? "light"
        : "dark";

    setTheme(
      newTheme,
      "smooth"
    );
  }, [theme, setTheme]);

  // ============================================================
  // Available themes
  // ============================================================

  const availableThemes =
    useMemo(
      () =>
        [
          "light",
          "dark",
        ] as Theme[],
      []
    );

  // ============================================================
  // Return
  // ============================================================

  return {
    theme,
    toggleTheme,
    setTheme,
    isDark: theme === "dark",
    isLight: theme === "light",
    isTransitioning,
    availableThemes,
  };
};
