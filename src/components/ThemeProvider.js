import React from 'react';
import { useTheme } from '../hooks/useTheme';

export function ThemeProvider({ children }) {
  const { theme } = useTheme();

  return (
    <div className={`${theme} min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-all duration-300`}>
      {children}
    </div>
  );
}
