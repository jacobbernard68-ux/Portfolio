'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
import menuData from './menuData';
import ResumePreviewModal from '@/components/Home/Hero/ResumePreviewModal';
import ThemeSelector from '@/components/ThemeSelector';
import {
  getWorkLayoutPreference,
  subscribeToWorkLayoutPreference,
} from '@/components/Portfolio/workLayoutPreference';

const Header = () => {
  const pathname = usePathname();
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [workLayout, setWorkLayout] = useState<'fan' | 'classic' | null>(null);
  const menuButton = useRef<HTMLButtonElement>(null);

  const closeNavigation = useCallback((restoreFocus = false) => {
    setNavigationOpen(false);
    if (restoreFocus)
      requestAnimationFrame(() =>
        menuButton.current?.focus({ preventScroll: true }),
      );
  }, []);

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 24);
    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
    return () => window.removeEventListener('scroll', updateHeader);
  }, []);

  useEffect(() => setNavigationOpen(false), [pathname]);

  useEffect(() => {
    const updatePreference = () => setWorkLayout(getWorkLayoutPreference());
    updatePreference();
    return subscribeToWorkLayoutPreference(updatePreference);
  }, []);

  useEffect(() => {
    if (!navigationOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeNavigation(true);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [navigationOpen, closeNavigation]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-1000 flex min-h-[var(--site-header-height)] items-center border-b transition-all duration-300 md:min-h-[var(--site-header-height-wide)] ${scrolled ? 'border-[#2f3e5c]/12 bg-[#b7c5dd]/92 shadow-[0_16px_45px_rgba(31,41,55,0.10)] backdrop-blur-xl' : 'border-transparent bg-[#b7c5dd]'}`}
    >
      <div className='content-shell page-gutters flex items-center justify-between'>
        <Link
          href='/'
          className='group flex min-w-0 items-center gap-[clamp(0.625rem,1vw,0.75rem)] rounded-lg focus-visible:ring-2 focus-visible:ring-[#2f3e5c] focus-visible:ring-offset-4 focus-visible:ring-offset-[#b7c5dd] focus-visible:outline-none'
        >
          <span className='site-logo-mark grid size-[clamp(2.5rem,4vw,3rem)] shrink-0 place-items-center rounded-[clamp(0.65rem,1vw,0.75rem)] bg-white/45 p-[clamp(0.3rem,0.6vw,0.375rem)] shadow-[0_8px_20px_rgba(31,41,55,0.10)] ring-1 ring-[#2f3e5c]/10 transition duration-300 group-hover:scale-105 group-hover:-rotate-2'>
            <Image
              src='/images/logo-jb-parallel.svg'
              alt=''
              width={48}
              height={48}
              priority
              className='size-full'
            />
          </span>
          <span>
            <span className='block truncate text-[clamp(1rem,1.7vw,1.25rem)] leading-[1.25] font-semibold tracking-[-0.025em] text-[#111]'>
              Jacob Bernard
            </span>
            <span className='mt-1 hidden text-[10px] font-semibold tracking-[0.18em] text-[#526985] uppercase sm:block'>
              UX · Frontend · Systems
            </span>
          </span>
        </Link>

        <button
          type='button'
          onClick={() => setResumeOpen(true)}
          aria-label='Preview Jacob Bernard Resume'
          aria-haspopup='dialog'
          className='relative ml-auto size-11 shrink-0 overflow-hidden rounded-full ring-1 ring-[#2f3e5c]/15 transition hover:scale-105 focus-visible:ring-2 focus-visible:ring-[#2f3e5c] focus-visible:ring-offset-2 focus-visible:outline-none min-[60rem]:hidden'
        >
          <Image
            src='/images/jacob-bernard-headshot.png'
            alt='Professional headshot of Jacob Bernard'
            fill
            sizes='44px'
            className='object-cover object-[50%_34%]'
          />
        </button>

        <button
          ref={menuButton}
          type='button'
          onClick={() => setNavigationOpen((open) => !open)}
          aria-label={navigationOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={navigationOpen}
          aria-controls='site-navigation'
          className='ml-3 grid size-11 shrink-0 place-items-center rounded-xl border border-[#2f3e5c]/15 bg-white/45 text-[#1f2937] transition hover:bg-white/70 focus-visible:ring-2 focus-visible:ring-[#2f3e5c] focus-visible:outline-none min-[60rem]:hidden'
        >
          <span className='sr-only'>Menu</span>
          <span className='relative block h-4 w-5'>
            <span
              className={`absolute top-0 left-0 h-0.5 w-5 rounded-full bg-current transition ${navigationOpen ? 'translate-y-[7px] rotate-45' : ''}`}
            />
            <span
              className={`absolute top-[7px] left-0 h-0.5 w-5 rounded-full bg-current transition ${navigationOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`absolute top-[14px] left-0 h-0.5 w-5 rounded-full bg-current transition ${navigationOpen ? '-translate-y-[7px] -rotate-45' : ''}`}
            />
          </span>
        </button>

        {navigationOpen && (
          <button
            type='button'
            aria-label='Close navigation'
            onClick={() => closeNavigation(true)}
            className='fixed inset-0 top-[var(--site-header-height)] z-[-1] bg-[#1f2937]/20 backdrop-blur-[2px] md:top-[var(--site-header-height-wide)] min-[60rem]:hidden'
          />
        )}
        <div className='contents min-w-0 min-[60rem]:ml-auto min-[60rem]:flex min-[60rem]:items-center min-[60rem]:gap-3 xl:gap-4'>
          <button
            type='button'
            onClick={() => setResumeOpen(true)}
            aria-label='Preview Jacob Bernard Resume'
            aria-haspopup='dialog'
            className='relative hidden size-11 shrink-0 overflow-hidden rounded-full ring-1 ring-[#2f3e5c]/15 transition hover:scale-105 focus-visible:ring-2 focus-visible:ring-[#2f3e5c] focus-visible:ring-offset-2 focus-visible:outline-none min-[60rem]:block'
            title='Jacob Bernard'
          >
            <Image
              src='/images/jacob-bernard-headshot.png'
              alt='Professional headshot of Jacob Bernard'
              fill
              sizes='44px'
              className='object-cover object-[50%_34%]'
            />
          </button>
          <nav
            id='site-navigation'
            aria-label='Primary navigation'
            className={`${navigationOpen ? 'flex' : 'hidden'} absolute top-[65px] right-4 left-4 max-h-[calc(100svh-81px)] flex-col gap-2 overflow-y-auto rounded-2xl border border-[#2f3e5c]/10 bg-[#edf2f7]/96 p-3 shadow-[0_22px_60px_rgba(31,41,55,0.18)] backdrop-blur-xl sm:right-8 sm:left-8 md:top-[89px] md:max-h-[calc(100svh-105px)] min-[60rem]:static min-[60rem]:flex min-[60rem]:max-h-none min-[60rem]:flex-row min-[60rem]:flex-nowrap min-[60rem]:items-center min-[60rem]:gap-1 min-[60rem]:overflow-visible min-[60rem]:border-0 min-[60rem]:bg-transparent min-[60rem]:p-0 min-[60rem]:shadow-none min-[60rem]:backdrop-blur-none`}
          >
            {menuData.map((item) => {
              if (!item.path) return null;
              const active =
                item.path === '/work'
                  ? pathname === '/work' || pathname.startsWith('/work/')
                  : pathname === item.path;
              const desktopHref =
                item.path === '/work' && workLayout === 'classic'
                  ? '/work/classic'
                  : item.path;
              const mobileHref =
                item.path === '/' ? '/#home' : `/#${item.path.slice(1)}`;
              const mobileTargetId = mobileHref.slice(2);
              return (
                <span key={item.id} className='contents'>
                  <Link
                    href={mobileHref}
                    aria-current={active ? 'page' : undefined}
                    onClick={(event) => {
                      const target = document.getElementById(mobileTargetId);
                      if (!target) {
                        closeNavigation(false);
                        return;
                      }
                      event.preventDefault();
                      closeNavigation(false);
                      window.history.pushState(null, '', `#${mobileTargetId}`);
                      target.scrollIntoView({ block: 'start' });
                      requestAnimationFrame(() =>
                        menuButton.current?.focus({ preventScroll: true }),
                      );
                    }}
                    className={`relative rounded-xl px-3 py-3 text-xs font-bold tracking-[0.12em] whitespace-nowrap transition hover:bg-white/45 hover:text-[#111] focus-visible:ring-2 focus-visible:ring-[#2f3e5c] focus-visible:outline-none min-[60rem]:hidden ${active ? 'bg-[#1f2937] text-white shadow-[0_8px_20px_rgba(31,41,55,0.16)] hover:bg-[#1f2937] hover:text-white' : 'text-[#34445c]'}`}
                  >
                    {item.title}
                  </Link>
                  <Link
                    href={desktopHref}
                    aria-current={active ? 'page' : undefined}
                    className={`relative hidden rounded-xl px-3 py-3 text-xs font-bold tracking-[0.12em] whitespace-nowrap transition focus-visible:ring-2 focus-visible:ring-[#2f3e5c] focus-visible:outline-none min-[60rem]:block min-[60rem]:py-2.5 xl:px-4 ${active ? 'bg-[#1f2937] text-white shadow-[0_8px_20px_rgba(31,41,55,0.16)]' : 'text-[#34445c] hover:bg-white/45 hover:text-[#111]'}`}
                  >
                    {item.title}
                  </Link>
                </span>
              );
            })}
            <div className='min-[60rem]:hidden'>
              <ThemeSelector mobile />
            </div>
          </nav>
          <ThemeSelector />
        </div>
      </div>
      <ResumePreviewModal
        open={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </header>
  );
};

export default Header;
