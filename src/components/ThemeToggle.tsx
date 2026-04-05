import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2.5 rounded-xl bg-bg-secondary text-muted-premium hover:text-accent-premium hover:bg-bg-tertiary transition-all active:scale-95 border border-border-premium shadow-sm hover:shadow-md group"
      aria-label="Toggle Theme"
    >
      {theme === 'light' ? (
        <Moon className="w-4.5 h-4.5 group-hover:-rotate-12 transition-transform" />
      ) : (
        <Sun className="w-4.5 h-4.5 group-hover:rotate-45 transition-transform" />
      )}
    </button>
  );
};
