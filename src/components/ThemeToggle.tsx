import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white dark:hover:bg-slate-700 transition-all shadow-sm hover:shadow active:scale-95 border border-transparent hover:border-slate-200 dark:hover:border-slate-600 group"
      aria-label="Toggle Theme"
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5 group-hover:-rotate-12 transition-transform" />
      ) : (
        <Sun className="w-5 h-5 group-hover:rotate-45 transition-transform" />
      )}
    </button>
  );
};
