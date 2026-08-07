'use client';

import { useSyncExternalStore } from 'react';

const mobileQuery = '(max-width: 59.999rem)';

function subscribe(callback: () => void) {
  const query = window.matchMedia(mobileQuery);
  query.addEventListener('change', callback);
  return () => query.removeEventListener('change', callback);
}

export default function ScrollToTop() {
  const isMobile = useSyncExternalStore(
    subscribe,
    () => window.matchMedia(mobileQuery).matches,
    () => false,
  );

  if (!isMobile) return null;

  const scrollToTop = () => {
    const behavior = window.matchMedia('(prefers-reduced-motion: reduce)')
      .matches
      ? 'auto'
      : 'smooth';
    document.scrollingElement?.scrollTo({
      top: 0,
      left: 0,
      behavior,
    });
  };

  return (
    <button
      type='button'
      onClick={scrollToTop}
      aria-label='Scroll to top of site'
      className='scroll-to-top grid place-items-center rounded-full border border-white/60 bg-[#405671] text-white shadow-[0_8px_22px_rgba(31,41,55,0.32)] transition hover:bg-[#2f3e5c] focus-visible:ring-2 focus-visible:ring-[#2f3e5c] focus-visible:ring-offset-2 focus-visible:outline-none'
      style={{
        position: 'fixed',
        right: 'max(12px, env(safe-area-inset-right))',
        left: 'auto',
        bottom:
          'calc(var(--site-footer-height) + max(12px, env(safe-area-inset-bottom)))',
        zIndex: 2147483647,
        width: 38,
        height: 38,
        display: 'grid',
      }}
    >
      <span className='sr-only'>Scroll to top of site</span>

      <svg
        className='size-5 fill-white'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 512 512'
      >
        <path d='M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z' />
      </svg>
    </button>
  );
}
