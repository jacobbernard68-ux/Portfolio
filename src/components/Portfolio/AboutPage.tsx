'use client';

import { useState, useSyncExternalStore } from 'react';
import type { PointerEvent as ReactPointerEvent } from 'react';
import ContactFormCard from './ContactFormCard';
import Modal from './Modal';
import ResumeSections from './ResumeSections';

const profileAction =
  'inline-flex min-w-0 items-center justify-center whitespace-nowrap rounded-lg px-[clamp(0.45rem,1.3vw,1rem)] py-[clamp(0.5rem,1.2vh,0.625rem)] text-[clamp(0.65rem,1.6vw,0.875rem)] font-medium transition focus-visible:ring-2 focus-visible:ring-[#607795] focus-visible:outline-none';

const midSizeQuery =
  '(min-width: 60rem) and (max-width: 79.999rem) and (min-height: 35rem)';

function subscribeMidSize(callback: () => void) {
  const query = window.matchMedia(midSizeQuery);
  query.addEventListener('change', callback);
  return () => query.removeEventListener('change', callback);
}

export default function PortfolioAboutPage({
  embedded = false,
}: {
  embedded?: boolean;
}) {
  const [contactOpen, setContactOpen] = useState(false);
  const isMidSize = useSyncExternalStore(
    subscribeMidSize,
    () => window.matchMedia(midSizeQuery).matches,
    () => false,
  );
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
      className={`${embedded ? 'scroll-mt-[var(--site-header-height)] md:scroll-mt-[var(--site-header-height-wide)] min-[60rem]:h-auto' : 'about-viewport-page viewport-page'} page-gutters flex flex-col bg-[#e2e8f2]/80 min-[60rem]:overflow-hidden`}
    >
      <section className='about-layout mx-auto grid w-full flex-1 gap-[clamp(0.625rem,min(1.5vw,1.5svh),1.25rem)] min-[60rem]:min-h-0 min-[60rem]:grid-rows-[auto_minmax(0,1fr)] xl:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] xl:grid-rows-1'>
        <header
          data-cursor-reactive
          data-scrollable-card
          onPointerMove={trackGlow}
          onPointerLeave={hideGlow}
          className={`no-scrollbar flex min-h-0 flex-col justify-between gap-[clamp(0.875rem,min(2vw,2.5svh),1.5rem)] rounded-[var(--fluid-radius)] bg-[#c5d0dd] p-[clamp(0.875rem,min(2.25vw,2.5svh),2rem)] shadow-[0_10px_26px_rgba(15,23,42,0.10)] ring-1 ring-[#1f2937]/10 ${embedded ? 'overflow-visible' : 'overflow-y-auto'}`}
        >
          <div
            data-about-intro
            style={
              isMidSize
                ? {
                    alignItems: 'center',
                    gridTemplateColumns:
                      'minmax(0, 1fr) minmax(17rem, 0.9fr)',
                  }
                : undefined
            }
            className={
              embedded
                ? 'sm:grid sm:grid-cols-[minmax(0,1.08fr)_minmax(15rem,0.92fr)] sm:items-end sm:gap-[var(--fluid-section-gap)]'
                : 'about-intro min-[60rem]:grid min-[60rem]:grid-cols-[minmax(0,1.08fr)_minmax(15rem,0.92fr)] min-[60rem]:items-end min-[60rem]:gap-[var(--fluid-section-gap)] xl:block'
            }
          >
            <div>
              <p className='text-xs font-semibold tracking-[0.2em] text-[#607795] uppercase'>
                Frontend developer · UI designer
              </p>
              <h1
                className='mt-[clamp(0.75rem,2vh,1rem)] max-w-[40.625rem] text-[clamp(2rem,4.2vw,3rem)] leading-[1.08] font-bold tracking-[-0.045em] text-[#111]'
                style={
                  isMidSize
                    ? {
                        maxWidth: '34rem',
                        fontSize: 'clamp(1.35rem, 2.35vw, 1.65rem)',
                        lineHeight: 1.05,
                      }
                    : undefined
                }
              >
                Designing intuitive interfaces backed by enterprise-level
                experience.
              </h1>
            </div>
            <p
              className={`about-description ${embedded ? 'sm:mt-0' : 'min-[60rem]:mt-0 xl:mt-[clamp(1rem,2.5vh,1.5rem)]'} mt-[clamp(1rem,2.5vh,1.5rem)] max-w-[35.625rem] text-[clamp(0.875rem,1.1vw,1rem)] leading-[1.65] text-slate-600`}
              style={
                isMidSize
                  ? {
                      maxWidth: '31rem',
                      fontSize: 'clamp(0.75rem, 1.1vw, 0.86rem)',
                      lineHeight: 1.45,
                    }
                  : undefined
              }
            >
              I bring structure to complex problems, combining frontend
              development, UI design, and 16 years of technical experience to
              create clear, usable digital products.
            </p>
          </div>
          <nav
            aria-label='Professional profiles'
            className='grid grid-cols-3 gap-[clamp(0.35rem,1vw,0.5rem)] border-t border-slate-200 pt-[clamp(0.75rem,2vh,1.25rem)]'
          >
            <button
              type='button'
              onClick={() => setContactOpen(true)}
              className={`${profileAction} bg-[#1f2937] text-white hover:bg-[#34445c]`}
            >
              Contact me
            </button>
            <a
              href='https://github.com/jacobbernard68-ux'
              target='_blank'
              rel='noreferrer'
              className={`${profileAction} bg-[#e2e8f2] text-[#1f2937] hover:bg-[#b8cadc]`}
            >
              GitHub ↗
            </a>
            <a
              href='https://linkedin.com/in/jacobbernard159'
              target='_blank'
              rel='noreferrer'
              className={`${profileAction} bg-[#e2e8f2] text-[#1f2937] hover:bg-[#b8cadc]`}
            >
              LinkedIn ↗
            </a>
          </nav>
        </header>
        <div
          data-internal-scroll
          className={`no-scrollbar min-h-0 ${embedded ? 'overflow-visible' : 'overflow-y-auto'}`}
        >
          <ResumeSections compact={isMidSize} />
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
