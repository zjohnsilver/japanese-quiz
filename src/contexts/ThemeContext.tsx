import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { ThemeMode, Theme, themes } from '../config/theme';

interface ThemeContextType {
  theme: Theme;
  themeMode: ThemeMode;
  toggleTheme: () => void;
  setThemeMode: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_STORAGE_KEY = 'japanese-quiz-theme';

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [themeMode, setThemeModeState] = useState<ThemeMode>('light');

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) as ThemeMode;
    if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
      setThemeModeState(savedTheme);
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setThemeModeState(prefersDark ? 'dark' : 'light');
    }
  }, []);

  // Update CSS custom properties when theme changes
  useEffect(() => {
    const root = document.documentElement;
    const currentTheme = themes[themeMode];
    
    // Set CSS custom properties
    Object.entries(currentTheme.colors).forEach(([key, value]) => {
      if (typeof value === 'string') {
        root.style.setProperty(`--color-${key}`, value);
      } else if (typeof value === 'object') {
        // Handle nested objects like categoryColors
        Object.entries(value).forEach(([nestedKey, nestedValue]) => {
          root.style.setProperty(`--color-${key}-${nestedKey}`, nestedValue);
        });
      }
    });

    Object.entries(currentTheme.spacing).forEach(([key, value]) => {
      root.style.setProperty(`--spacing-${key}`, value);
    });

    Object.entries(currentTheme.borderRadius).forEach(([key, value]) => {
      root.style.setProperty(`--border-radius-${key}`, value);
    });

    Object.entries(currentTheme.fontSize).forEach(([key, value]) => {
      root.style.setProperty(`--font-size-${key}`, value);
    });

    Object.entries(currentTheme.shadows).forEach(([key, value]) => {
      root.style.setProperty(`--shadow-${key}`, value);
    });

    // Set theme mode class on body
    document.body.className = `theme-${themeMode}`;
  }, [themeMode]);

  const setThemeMode = (mode: ThemeMode) => {
    setThemeModeState(mode);
    localStorage.setItem(THEME_STORAGE_KEY, mode);
  };

  const toggleTheme = () => {
    const newMode = themeMode === 'light' ? 'dark' : 'light';
    setThemeMode(newMode);
  };

  const value: ThemeContextType = {
    theme: themes[themeMode],
    themeMode,
    toggleTheme,
    setThemeMode,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}; 