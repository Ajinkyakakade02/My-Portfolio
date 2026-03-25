// src/hooks/useTheme.ts
import { useState, useEffect, useCallback, useMemo } from 'react';

type Theme = 'light' | 'dark';
type ThemeTransition = 'smooth' | 'instant';

interface UseThemeOptions {
  defaultTheme?: Theme;
  enableTransition?: boolean;
  transitionDuration?: number;
  persistKey?: string;
}

interface UseThemeReturn {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme, transition?: ThemeTransition) => void;
  isDark: boolean;
  isLight: boolean;
  isTransitioning: boolean;
  availableThemes: Theme[];
}

export const useTheme = (options: UseThemeOptions = {}): UseThemeReturn => {
  const {
    defaultTheme = 'dark',
    enableTransition = true,
    transitionDuration = 300,
    persistKey = 'space-theme',
  } = options;

  const [theme, setThemeState] = useState<Theme>(defaultTheme);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Get initial theme
  useEffect(() => {
    const storedTheme = localStorage.getItem(persistKey) as Theme | null;
    
    if (storedTheme && (storedTheme === 'light' || storedTheme === 'dark')) {
      setThemeState(storedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setThemeState('dark');
    } else {
      setThemeState(defaultTheme);
    }
  }, [defaultTheme, persistKey]);

  const applyTheme = useCallback((newTheme: Theme, transition?: ThemeTransition) => {
    const shouldTransition = enableTransition && transition !== 'instant';
    
    if (shouldTransition) {
      setIsTransitioning(true);
      
      // Add transition class
      document.documentElement.classList.add('theme-transition');
      
      // Set timeout to remove transition class after animation
      setTimeout(() => {
        document.documentElement.classList.remove('theme-transition');
        setIsTransitioning(false);
      }, transitionDuration);
    }

    // Update document classes
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }

    // Store in localStorage
    localStorage.setItem(persistKey, newTheme);
    
    // Dispatch custom event for other components to listen
    window.dispatchEvent(new CustomEvent('themeChange', { detail: { theme: newTheme } }));
  }, [enableTransition, transitionDuration, persistKey]);

  const setTheme = useCallback((newTheme: Theme, transition?: ThemeTransition) => {
    if (newTheme === theme) return;
    
    setThemeState(newTheme);
    applyTheme(newTheme, transition);
  }, [theme, applyTheme]);

  const toggleTheme = useCallback(() => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme, 'smooth');
  }, [theme, setTheme]);

  // Listen for system preference changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e: MediaQueryListEvent) => {
      // Only update if user hasn't manually set a theme
      if (!localStorage.getItem(persistKey)) {
        const newTheme = e.matches ? 'dark' : 'light';
        setThemeState(newTheme);
        applyTheme(newTheme, 'instant');
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [applyTheme, persistKey]);

  // Apply initial theme
  useEffect(() => {
    applyTheme(theme, 'instant');
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const availableThemes = useMemo(() => ['light', 'dark'] as Theme[], []);

  return {
    theme,
    toggleTheme,
    setTheme,
    isDark: theme === 'dark',
    isLight: theme === 'light',
    isTransitioning,
    availableThemes,
  };
};