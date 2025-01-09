import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export const ThemeToggle = () => {
  const { setTheme } = useTheme();

  return (
    <div className="relative">
      <button
        className="relative flex items-center justify-center p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-all"
        aria-label="Toggle theme"
      >
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </button>

      {/* Dropdown menu for theme options */}
      <div className="absolute right-0 mt-2 bg-white dark:bg-gray-800 rounded-md shadow-lg w-32">
        <div
          onClick={() => setTheme('light')}
          className="px-4 py-2 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
        >
          Light
        </div>
        <div
          onClick={() => setTheme('dark')}
          className="px-4 py-2 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
        >
          Dark
        </div>
        <div
          onClick={() => setTheme('system')}
          className="px-4 py-2 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
        >
          System
        </div>
      </div>
    </div>
  );
};
