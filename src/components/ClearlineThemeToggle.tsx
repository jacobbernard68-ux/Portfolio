'use client';

import { useEffect, useState } from 'react';

type ResolvedTheme = 'light' | 'dark';

const themeKey = 'clearline-color-theme';
const mediaQuery = '(prefers-color-scheme: dark)';

const resolveInitialTheme = (): ResolvedTheme => {
  const previewTheme = new URLSearchParams(window.location.search).get(
    'previewTheme',
  );
  if (previewTheme === 'light' || previewTheme === 'dark') return previewTheme;
  const saved = localStorage.getItem(themeKey);
  if (saved === 'light' || saved === 'dark') return saved;
  return window.matchMedia(mediaQuery).matches ? 'dark' : 'light';
};

const applyTheme = (theme: ResolvedTheme) => {
  document.documentElement.dataset.clearlineTheme = theme;
  document.documentElement.style.colorScheme = theme;
};

export default function ClearlineThemeToggle() {
  const [theme, setTheme] = useState<ResolvedTheme>('light');

  useEffect(() => {
    const media = window.matchMedia(mediaQuery);
    const initial = resolveInitialTheme();
    setTheme(initial);
    applyTheme(initial);
    const followSystem = () => {
      if (localStorage.getItem(themeKey)) return;
      const next = media.matches ? 'dark' : 'light';
      setTheme(next);
      applyTheme(next);
    };
    media.addEventListener('change', followSystem);
    return () => media.removeEventListener('change', followSystem);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem(themeKey, next);
    setTheme(next);
    applyTheme(next);
  };

  return (
    <button
      type='button'
      aria-label={`Use ${theme === 'dark' ? 'light' : 'dark'} theme`}
      aria-pressed={theme === 'dark'}
      onClick={toggleTheme}
      className='clearline-theme-toggle grid size-11 shrink-0 place-items-center rounded-full border transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
    >
      {theme === 'dark' ? (
        <svg
          viewBox='0 0 24 24'
          aria-hidden='true'
          className='size-5'
          fill='none'
          stroke='currentColor'
          strokeWidth='1.8'
        >
          <circle cx='12' cy='12' r='4' />
          <path d='M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42' />
        </svg>
      ) : (
        <svg
          viewBox='0 0 24 24'
          aria-hidden='true'
          className='size-5'
          fill='none'
          stroke='currentColor'
          strokeWidth='1.8'
        >
          <path d='M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z' />
        </svg>
      )}
      <span className='sr-only'>
        {theme === 'dark' ? 'Dark' : 'Light'} theme active
      </span>
    </button>
  );
}
