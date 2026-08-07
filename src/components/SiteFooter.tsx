'use client';

import { useState } from 'react';
import ContactFormCard from '@/components/Portfolio/ContactFormCard';
import Modal from '@/components/Portfolio/Modal';

const profileLink =
  'rounded-md px-2 py-1 font-medium text-[#405671] transition hover:bg-white/55 hover:text-[#111] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#607795]';

export default function SiteFooter() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <footer className='page-gutters fixed inset-x-0 bottom-0 z-[10010] h-[var(--site-footer-height)] border-t border-[#405671]/10 bg-[#e2e8f2]/95 backdrop-blur-md'>
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
