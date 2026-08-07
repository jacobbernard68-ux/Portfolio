'use client';

import { useState } from 'react';
import type { PointerEvent as ReactPointerEvent } from 'react';
import ContactFormCard from './ContactFormCard';
import Modal from './Modal';
import ResumeSections from './ResumeSections';

export default function PortfolioAboutPage({
  embedded = false,
}: {
  embedded?: boolean;
}) {
  const [contactOpen, setContactOpen] = useState(false);
  const trackGlow = (event: ReactPointerEvent<HTMLElement>) => {
    const card = event.currentTarget;
    const bounds = card.getBoundingClientRect();
    const localX = event.clientX - bounds.left;
    const localY = event.clientY - bounds.top;
    const horizontal = (localX / bounds.width) * 2 - 1;
    const vertical = (localY / bounds.height) * 2 - 1;
    card.style.setProperty('--card-cursor-x', `${localX}px`);
    card.style.setProperty('--card-cursor-y', `${localY}px`);
    card.style.transform = `perspective(900px) rotateX(${-vertical * 2.5}deg) rotateY(${horizontal * 2.5}deg)`;
    card.style.scale = '1.003';
    card.style.boxShadow = `${-horizontal * 4}px ${-vertical * 4 + 8}px 26px rgba(15, 23, 42, 0.18)`;
    card.setAttribute('data-cursor-active', 'true');
  };

  const hideGlow = (event: ReactPointerEvent<HTMLElement>) => {
    const card = event.currentTarget;
    card.removeAttribute('data-cursor-active');
    card.style.removeProperty('transform');
    card.style.removeProperty('scale');
    card.style.removeProperty('box-shadow');
  };

  return (
    <main
      id={embedded ? 'about' : undefined}
      className={`${embedded ? 'scroll-mt-[var(--site-header-height)] md:scroll-mt-[var(--site-header-height-wide)] lg:h-auto' : 'viewport-page'} page-gutters bg-[#e2e8f2]/80 lg:overflow-hidden`}
    >
      <section className='mx-auto grid w-full gap-[var(--fluid-section-gap)] lg:h-full lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:grid-rows-1'>
        <header
          data-cursor-reactive
          data-scrollable-card
          onPointerMove={trackGlow}
          onPointerLeave={hideGlow}
          className='fluid-card-space no-scrollbar flex min-h-0 flex-col justify-between gap-[clamp(1.25rem,4vh,2rem)] overflow-y-auto rounded-[var(--fluid-radius)] bg-[#c5d0dd] shadow-[0_10px_26px_rgba(15,23,42,0.10)] ring-1 ring-[#1f2937]/10'
        >
          <div>
            <p className='text-xs font-semibold tracking-[0.2em] text-[#607795] uppercase'>
              Frontend developer · UI designer
            </p>
            <h1 className='mt-[clamp(0.75rem,2vh,1rem)] max-w-[40.625rem] text-[clamp(2rem,4.2vw,3rem)] leading-[1.08] font-bold tracking-[-0.045em] text-[#111]'>
              Designing intuitive interfaces backed by enterprise-level
              experience.
            </h1>
            <p className='mt-[clamp(1rem,2.5vh,1.5rem)] max-w-[35.625rem] text-[clamp(0.875rem,1.1vw,1rem)] leading-[1.65] text-slate-600'>
              I bring structure to complex problems, combining frontend
              development, UI design, and 16 years of technical experience to
              create clear, usable digital products.
            </p>
          </div>
          <nav
            aria-label='Professional profiles'
            className='flex flex-wrap gap-2 border-t border-slate-200 pt-5 text-sm'
          >
            <button
              type='button'
              onClick={() => setContactOpen(true)}
              className='rounded-lg bg-[#1f2937] px-4 py-2 font-medium text-white transition hover:bg-[#34445c] focus-visible:ring-2 focus-visible:ring-[#607795] focus-visible:outline-none'
            >
              Contact me
            </button>
            <a
              href='https://github.com/jacobbernard68-ux'
              target='_blank'
              rel='noreferrer'
              className='rounded-lg bg-[#e2e8f2] px-4 py-2 font-medium text-[#1f2937] transition hover:bg-[#b8cadc] focus-visible:ring-2 focus-visible:ring-[#607795] focus-visible:outline-none'
            >
              GitHub ↗
            </a>
            <a
              href='https://linkedin.com/in/jacobbernard159'
              target='_blank'
              rel='noreferrer'
              className='rounded-lg bg-[#e2e8f2] px-4 py-2 font-medium text-[#1f2937] transition hover:bg-[#b8cadc] focus-visible:ring-2 focus-visible:ring-[#607795] focus-visible:outline-none'
            >
              LinkedIn ↗
            </a>
          </nav>
        </header>
        <div
          data-internal-scroll
          className='no-scrollbar min-h-0 overflow-y-auto'
        >
          <ResumeSections />
        </div>
      </section>
      <Modal
        open={contactOpen}
        onClose={() => setContactOpen(false)}
        title='Contact Jacob Bernard'
      >
        <ContactFormCard compact />
      </Modal>
    </main>
  );
}
