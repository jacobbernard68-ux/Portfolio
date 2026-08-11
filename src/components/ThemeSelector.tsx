'use client';

import { useEffect, useRef, useState } from 'react';

type ThemePreference = 'system' | 'light' | 'dark';
type ResolvedTheme = 'light' | 'dark';

const THEME_KEY = 'portfolio-color-theme';
const THEME_EVENT = 'portfolio-theme-change';

const options: Array<{
  value: ThemePreference;
  label: string;
  description: string;
}> = [
  { value: 'system', label: 'System', description: 'Follow your device' },
  { value: 'light', label: 'Light', description: 'Use light colors' },
  { value: 'dark', label: 'Dark', description: 'Use dark colors' },
];

function resolveTheme(preference: ThemePreference): ResolvedTheme {
  if (preference !== 'system') return preference;
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

function ThemeIcon({ theme }: { theme: ThemePreference }) {
  if (theme === 'system') {
    return (
      <svg viewBox='0 0 24 24' aria-hidden='true' className='size-[1.1rem]' fill='none' stroke='currentColor' strokeWidth='1.8'>
        <rect x='3' y='4' width='18' height='13' rx='2' />
        <path d='M8 21h8M12 17v4' />
      </svg>
    );
  }
  if (theme === 'light') {
    return (
      <svg viewBox='0 0 24 24' aria-hidden='true' className='size-[1.1rem]' fill='none' stroke='currentColor' strokeWidth='1.8'>
        <circle cx='12' cy='12' r='4' />
        <path d='M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42' />
      </svg>
    );
  }
  return (
    <svg viewBox='0 0 24 24' aria-hidden='true' className='size-[1.1rem]' fill='none' stroke='currentColor' strokeWidth='1.8'>
      <path d='M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z' />
    </svg>
  );
}

export default function ThemeSelector({ mobile = false }: { mobile?: boolean }) {
  const [preference, setPreference] = useState<ThemePreference>('system');
  const [resolved, setResolved] = useState<ResolvedTheme>('light');
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem(THEME_KEY);
    const initial: ThemePreference =
      saved === 'light' || saved === 'dark' || saved === 'system'
        ? saved
        : 'system';
    setPreference(initial);
    setResolved(resolveTheme(initial));
    const sync = (event: Event) => {
      const next = (event as CustomEvent<ThemePreference>).detail;
      setPreference(next);
    };
    window.addEventListener(THEME_EVENT, sync);
    return () => window.removeEventListener(THEME_EVENT, sync);
  }, []);

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const apply = () => {
      const next = resolveTheme(preference);
      setResolved(next);
      document.documentElement.dataset.theme = next;
      document.documentElement.style.colorScheme = next;
    };
    apply();
    if (preference === 'system') media.addEventListener('change', apply);
    return () => media.removeEventListener('change', apply);
  }, [preference]);

  useEffect(() => {
    if (!open) return;
    const close = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', close);
    window.addEventListener('keydown', escape);
    return () => {
      document.removeEventListener('mousedown', close);
      window.removeEventListener('keydown', escape);
    };
  }, [open]);

  const choose = (next: ThemePreference) => {
    localStorage.setItem(THEME_KEY, next);
    setPreference(next);
    window.dispatchEvent(new CustomEvent(THEME_EVENT, { detail: next }));
    setOpen(false);
  };

  if (mobile) {
    return (
      <fieldset className='theme-mobile mt-1 border-t border-[var(--theme-border)] px-2 pt-3'>
        <legend className='px-1 text-[10px] font-bold tracking-[0.16em] text-[var(--theme-muted)] uppercase'>Color theme</legend>
        <div className='mt-2 grid grid-cols-3 overflow-hidden rounded-xl border border-[var(--theme-border)] bg-[var(--theme-control)]'>
          {options.map((option) => (
            <button key={option.value} type='button' onClick={() => choose(option.value)} aria-pressed={preference === option.value} aria-label={`${option.label} theme: ${option.description}`} className={`grid min-h-11 place-items-center border-r border-[var(--theme-border)] text-[var(--theme-text)] transition last:border-r-0 focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-[var(--theme-focus)] focus-visible:outline-none ${preference === option.value ? 'bg-[var(--theme-selected)] text-[var(--theme-selected-text)]' : 'hover:bg-[var(--theme-control-hover)]'}`}>
              <ThemeIcon theme={option.value} />
            </button>
          ))}
        </div>
        <p className='mt-2 px-1 text-[10px] text-[var(--theme-muted)]'>{preference === 'system' ? `Following your device (${resolved})` : `${options.find((item) => item.value === preference)?.label} mode selected`}</p>
      </fieldset>
    );
  }

  const current = options.find((option) => option.value === preference)!;
  return (
    <div ref={rootRef} className='theme-selector relative hidden shrink-0 min-[60rem]:block'>
      <button type='button' onClick={() => setOpen((value) => !value)} aria-label={`Color theme: ${current.label}`} aria-haspopup='menu' aria-expanded={open} className='theme-selector-button flex min-h-11 items-center gap-2 rounded-xl border border-[var(--theme-border)] bg-[var(--theme-control)] px-3 text-xs font-bold text-[var(--theme-text)] shadow-sm transition hover:bg-[var(--theme-control-hover)] focus-visible:ring-2 focus-visible:ring-[var(--theme-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--theme-header)] focus-visible:outline-none'>
        <ThemeIcon theme={preference} />
        <span>{current.label}</span>
        <svg viewBox='0 0 20 20' aria-hidden='true' className={`size-3.5 transition ${open ? 'rotate-180' : ''}`} fill='none' stroke='currentColor' strokeWidth='2'><path d='m5 7.5 5 5 5-5' /></svg>
      </button>
      {open && (
        <div role='menu' aria-label='Color theme' className='theme-menu absolute top-[calc(100%+0.5rem)] right-0 z-50 w-48 rounded-xl border border-[var(--theme-border)] bg-[var(--theme-popover)] p-2 text-[var(--theme-text)] shadow-[0_18px_50px_var(--theme-shadow)]'>
          <p className='px-2 py-1 text-[9px] font-bold tracking-[0.16em] text-[var(--theme-muted)] uppercase'>Color theme</p>
          {options.map((option) => (
            <button key={option.value} role='menuitemradio' aria-checked={preference === option.value} type='button' onClick={() => choose(option.value)} className={`flex min-h-10 w-full items-center gap-3 rounded-lg px-2 text-left text-xs font-semibold transition focus-visible:ring-2 focus-visible:ring-[var(--theme-focus)] focus-visible:outline-none ${preference === option.value ? 'bg-[var(--theme-selected)] text-[var(--theme-selected-text)]' : 'hover:bg-[var(--theme-control-hover)]'}`}>
              <ThemeIcon theme={option.value} />
              <span>{option.label}</span>
              {preference === option.value && <span aria-hidden='true' className='ml-auto'>✓</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
