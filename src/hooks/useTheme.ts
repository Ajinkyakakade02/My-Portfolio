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

interface ThemeChangeEvent extends CustomEvent {
  detail: {
    theme: Theme;
  };
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
    useState<Theme>(defaultTheme);

  const [isTransitioning, setIsTransitioning] =
    useState(false);

  // ==========================================================
  // Apply theme to document
  // ==========================================================

  const applyTheme = useCallback(
    (
      newTheme: Theme,
      transition: ThemeTransition = "smooth",
      shouldDispatch = true
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

      // Update html classes

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

      // Save theme

      localStorage.setItem(
        persistKey,
        newTheme
      );

      // Notify all useTheme() instances

      if (shouldDispatch) {
        window.dispatchEvent(
          new CustomEvent("themeChange", {
            detail: {
              theme: newTheme,
            },
          })
        );
      }
    },
    [
      enableTransition,
      transitionDuration,
      persistKey,
    ]
  );

  // ==========================================================
  // Initial theme
  // ==========================================================

  useEffect(() => {
    const storedTheme =
      localStorage.getItem(
        persistKey
      ) as Theme | null;

    let initialTheme: Theme;

    if (
      storedTheme === "light" ||
      storedTheme === "dark"
    ) {
      initialTheme = storedTheme;
    } else if (
      window.matchMedia &&
      window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches
    ) {
      initialTheme = "dark";
    } else {
      initialTheme = defaultTheme;
    }

    setThemeState(initialTheme);

    applyTheme(
      initialTheme,
      "instant",
      false
    );
  }, [
    defaultTheme,
    persistKey,
    applyTheme,
  ]);

  // ==========================================================
  // Listen for theme changes from other components
  // ==========================================================

  useEffect(() => {
    const handleThemeChange = (
      event: Event
    ) => {
      const customEvent =
        event as ThemeChangeEvent;

      const newTheme =
        customEvent.detail?.theme;

      if (
        newTheme !== "light" &&
        newTheme !== "dark"
      ) {
        return;
      }

      // Update this component's local state

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

  // ==========================================================
  // Set theme
  // ==========================================================

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
        transition,
        true
      );
    },
    [theme, applyTheme]
  );

  // ==========================================================
  // Toggle theme
  // ==========================================================

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

  // ==========================================================
  // System preference changes
  // ==========================================================

  useEffect(() => {
    const mediaQuery =
      window.matchMedia(
        "(prefers-color-scheme: dark)"
      );

    const handleSystemThemeChange = (
      event: MediaQueryListEvent
    ) => {
      // Only follow system preference when
      // user has not manually selected a theme.

      const storedTheme =
        localStorage.getItem(
          persistKey
        );

      if (storedTheme) {
        return;
      }

      const newTheme: Theme =
        event.matches
          ? "dark"
          : "light";

      setThemeState(newTheme);

      applyTheme(
        newTheme,
        "instant",
        true
      );
    };

    mediaQuery.addEventListener(
      "change",
      handleSystemThemeChange
    );

    return () => {
      mediaQuery.removeEventListener(
        "change",
        handleSystemThemeChange
      );
    };
  }, [
    applyTheme,
    persistKey,
  ]);

  // ==========================================================
  // Available themes
  // ==========================================================

  const availableThemes =
    useMemo(
      () =>
        [
          "light",
          "dark",
        ] as Theme[],
      []
    );

  // ==========================================================
  // Return
  // ==========================================================

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
