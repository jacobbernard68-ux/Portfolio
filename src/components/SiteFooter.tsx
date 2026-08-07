'use client';

import { useState, useSyncExternalStore } from 'react';
import ContactFormCard from '@/components/Portfolio/ContactFormCard';
import Modal from '@/components/Portfolio/Modal';

const profileLink =
  'rounded-md px-2 py-1 font-medium text-[#405671] transition hover:bg-white/55 hover:text-[#111] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#607795]';

const mobileQuery = '(max-width: 59.999rem)';

function subscribe(callback: () => void) {
  const query = window.matchMedia(mobileQuery);
  query.addEventListener('change', callback);
  return () => query.removeEventListener('change', callback);
}

export default function SiteFooter() {
  const [contactOpen, setContactOpen] = useState(false);
  const isMobile = useSyncExternalStore(
    subscribe,
    () => window.matchMedia(mobileQuery).matches,
    () => false,
  );

  return (
    <>
      <footer
        className='site-footer page-gutters fixed inset-x-0 bottom-0 z-40 h-[var(--site-footer-height)] shrink-0 border-t border-[#405671]/10 bg-[#cfd9e5]/95 backdrop-blur-md'
        style={
          isMobile
            ? { zIndex: 9000, backgroundColor: '#c3cfdd', opacity: 1 }
            : undefined
        }
      >
        <div className='mx-auto flex h-full w-full max-w-[1320px] items-center justify-center'>
          <nav
            aria-label='Contact and professional profiles'
            className='flex min-w-0 items-center justify-center gap-0.5 text-[11px] sm:gap-1 sm:text-xs'
          >
            <button
              type='button'
              onClick={() => setContactOpen(true)}
              className={profileLink}
            >
              Contact me
            </button>
            <span aria-hidden='true' className='text-[#607795]/45'>
              ·
            </span>
            <a
              href='https://github.com/jacobbernard68-ux'
              target='_blank'
              rel='noreferrer'
              className={profileLink}
            >
              GitHub ↗
            </a>
            <span aria-hidden='true' className='text-[#607795]/45'>
              ·
            </span>
            <a
              href='https://linkedin.com/in/jacobbernard159'
              target='_blank'
              rel='noreferrer'
              className={profileLink}
            >
              LinkedIn ↗
            </a>
          </nav>
        </div>
      </footer>
      <Modal
        open={contactOpen}
        onClose={() => setContactOpen(false)}
        title='Contact Jacob Bernard'
      >
        <ContactFormCard compact />
      </Modal>
    </>
  );
}
