'use client';

import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle({ className = '' }: { className?: string }) {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const hasDarkClass = document.documentElement.classList.contains('dark');
    setIsDark(hasDarkClass);
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('iab-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('iab-theme', 'light');
    }
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`relative inline-flex items-center justify-center w-10 h-10 rounded-xl border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/40 ${
        isDark
          ? 'bg-gray-900 border-gray-800 text-amber-400 hover:bg-gray-800 hover:text-amber-300'
          : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-100 hover:text-gray-900'
      } ${className}`}
    >
      {mounted ? (
        isDark ? (
          <Sun className="w-5 h-5 transition-transform duration-300 rotate-0" />
        ) : (
          <Moon className="w-5 h-5 transition-transform duration-300 rotate-0" />
        )
      ) : (
        <span className="w-5 h-5 block" />
      )}
    </button>
  );
}
