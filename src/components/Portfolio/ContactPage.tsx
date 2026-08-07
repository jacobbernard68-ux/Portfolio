'use client';

import { useState } from 'react';
import type { PointerEvent as ReactPointerEvent } from 'react';
import ContactFormCard from './ContactFormCard';
import Modal from './Modal';

const schedulingUrl =
  process.env.NEXT_PUBLIC_CALCOM_URL ?? process.env.NEXT_PUBLIC_CALENDLY_URL;

export default function PortfolioContactPage({
  embedded = false,
}: {
  embedded?: boolean;
}) {
  const [calendarOpen, setCalendarOpen] = useState(false);

  const openScheduler = () => {
    if (!schedulingUrl) return;
    setCalendarOpen(true);
  };

  const trackCard = (event: ReactPointerEvent<HTMLElement>) => {
    const card = event.currentTarget;
    const bounds = card.getBoundingClientRect();
    const localX = event.clientX - bounds.left;
    const localY = event.clientY - bounds.top;
    const horizontal = (localX / bounds.width) * 2 - 1;
    const vertical = (localY / bounds.height) * 2 - 1;
    card.style.setProperty('--card-cursor-x', `${localX}px`);
    card.style.setProperty('--card-cursor-y', `${localY}px`);
    card.style.transform = `perspective(1000px) rotateX(${-vertical * 1.25}deg) rotateY(${horizontal * 1.25}deg)`;
    card.style.boxShadow = `${-horizontal * 3}px ${-vertical * 3 + 7}px 22px rgba(15, 23, 42, 0.14)`;
    card.setAttribute('data-cursor-active', 'true');
  };

  const resetCard = (event: ReactPointerEvent<HTMLElement>) => {
    const card = event.currentTarget;
    card.removeAttribute('data-cursor-active');
    card.style.removeProperty('transform');
    card.style.removeProperty('box-shadow');
  };

  return (
    <main
      id={embedded ? 'contact' : undefined}
      className={`${embedded ? 'scroll-mt-[var(--site-header-height)] md:scroll-mt-[var(--site-header-height-wide)]' : 'viewport-page'} page-gutters flex flex-col bg-[#e2e8f2]/80`}
    >
      <section className='mx-auto flex w-full max-w-[var(--content-max)] flex-1 flex-col rounded-[var(--fluid-radius)] bg-[#f2f4f7]/92 p-[clamp(0.625rem,min(1.25vw,1.4svh),1rem)] shadow-[0_8px_24px_rgba(15,23,42,0.08)]'>
        <div className='mb-[clamp(0.45rem,1svh,0.7rem)] grid gap-2 border-b border-slate-200 pb-[clamp(0.45rem,1svh,0.7rem)] md:grid-cols-2 md:items-end'>
          <h1 className='text-[clamp(1.65rem,min(3.25vw,4.5svh),2.4rem)] font-semibold tracking-[-0.035em] text-[#111]'>
            Let’s Connect
          </h1>
          <p className='max-w-[480px] text-sm leading-6 text-slate-600 md:justify-self-end md:text-right'>
            Have a project, opportunity, or knotty design problem? Tell me what
            you’re working through.
          </p>
        </div>

        <div className='contact-layout grid min-w-0 flex-1 gap-[clamp(0.625rem,min(1.5vw,1.5svh),1.25rem)] lg:grid-cols-[minmax(16rem,0.72fr)_minmax(0,1.28fr)]'>
          <div className='grid content-start gap-[clamp(0.625rem,min(1.5vw,1.5svh),1.25rem)] sm:grid-cols-2 lg:grid-cols-1 lg:grid-rows-2'>
            <article
              data-cursor-reactive
              onPointerMove={trackCard}
              onPointerLeave={resetCard}
              className='flex min-h-0 flex-col justify-center rounded-[var(--fluid-radius)] bg-[#afc2d5] p-[clamp(0.75rem,min(1.5vw,1.8svh),1.35rem)]'
            >
              <p className='text-[clamp(0.65rem,0.8vw,0.78rem)] font-semibold tracking-[0.18em] text-slate-600 uppercase'>
                Direct contact
              </p>
              <h2 className='mt-[clamp(0.4rem,1vh,0.65rem)] text-[clamp(1.3rem,1.9vw,1.65rem)] leading-[1.1] font-semibold text-[#111]'>
                Jacob Bernard
              </h2>
              <p className='mt-[clamp(0.35rem,0.9vh,0.55rem)] text-[clamp(0.78rem,0.9vw,0.9rem)] leading-[1.5] text-slate-700'>
                Send a note with the form and it will go directly to my inbox. I
                respond within five business days.
              </p>
            </article>

            <article
              data-cursor-reactive
              onPointerMove={trackCard}
              onPointerLeave={resetCard}
              className='flex min-h-0 flex-col justify-center rounded-[var(--fluid-radius)] bg-[#1f2937] p-[clamp(0.75rem,min(1.5vw,1.8svh),1.35rem)] text-[#b8cadc] lg:bg-[#afc2d5] lg:text-[#111]'
            >
              <p className='text-[clamp(0.65rem,0.8vw,0.78rem)] font-semibold tracking-[0.18em] text-[#b8cadc] uppercase lg:text-slate-600'>
                15 or 30-minute consultation
              </p>
              <h2 className='mt-[clamp(0.4rem,1vh,0.65rem)] text-[clamp(1.3rem,1.9vw,1.65rem)] leading-[1.1] font-semibold text-[#b8cadc] lg:text-[#111]'>
                Start with a conversation.
              </h2>
              <p className='mt-[clamp(0.35rem,0.9vh,0.55rem)] text-[clamp(0.78rem,0.9vw,0.9rem)] leading-[1.5] text-[#b8cadc] lg:text-slate-700'>
                Available Monday–Friday, 9:00 AM–5:00 PM with both 15 and
                30-minute appointment options.
              </p>
              <button
                type='button'
                onClick={openScheduler}
                disabled={!schedulingUrl}
                className='mt-[clamp(0.55rem,1.2vh,0.8rem)] min-h-11 self-start rounded-lg bg-[#b8cadc] px-[clamp(0.875rem,1.3vw,1rem)] py-[clamp(0.625rem,0.9vh,0.75rem)] text-[clamp(0.8125rem,0.85vw,0.875rem)] font-semibold whitespace-nowrap text-[#1f2937] transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-50 lg:bg-[#26354a] lg:text-white lg:hover:bg-[#34445c]'
              >
                {schedulingUrl
                  ? 'View available times'
                  : 'Scheduling link coming soon'}
              </button>
            </article>
          </div>

          <ContactFormCard />
        </div>
      </section>

      <Modal
        open={calendarOpen}
        onClose={() => setCalendarOpen(false)}
        title='Schedule a 15 or 30-minute consultation'
        wide
      >
        <div className='border-b border-slate-200 bg-[#f2f4f7] px-5 py-4 pr-16 sm:px-7'>
          <p className='text-xs font-semibold tracking-[0.18em] text-[#607795] uppercase'>
            15 or 30-minute consultation
          </p>
          <p className='mt-1 text-sm text-slate-600'>
            Monday–Friday · 9:00 AM–5:00 PM
          </p>
        </div>
        {schedulingUrl && (
          <iframe
            src={schedulingUrl}
            title='Cal.com appointment scheduler'
            className='h-[min(75svh,720px)] w-full bg-white'
          />
        )}
      </Modal>
    </main>
  );
}
