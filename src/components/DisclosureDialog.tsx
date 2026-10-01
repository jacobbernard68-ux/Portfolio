'use client';

import CloseIcon from '@/components/Portfolio/CloseIcon';

import { useCallback, useEffect, useRef, useState } from 'react';

export const disclosureEvent = 'portfolio:open-disclosure';

export function openDisclosure() {
  window.dispatchEvent(new Event(disclosureEvent));
}

export const disclosureCopy = {
  title: 'How submitted information is used',
  main: 'Information you submit is used to respond to your request or provide the feature you selected. Contact-form details are sent through Resend to Jacob’s email. Please do not submit sensitive, financial, or confidential information. Submitted information is not intentionally used for unrelated marketing.',
};

export default function DisclosureDialog() {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);

  const close = useCallback(() => {
    setOpen(false);
    requestAnimationFrame(() => openerRef.current?.focus());
  }, []);

  useEffect(() => {
    const show = () => {
      openerRef.current =
        document.activeElement instanceof HTMLElement
          ? document.activeElement
          : null;
      setOpen(true);
    };
    window.addEventListener(disclosureEvent, show);
    return () => window.removeEventListener(disclosureEvent, show);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const keydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        close();
        return;
      }
      if (event.key !== 'Tab' || !dialogRef.current) return;
      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), a[href], input:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable.at(-1)!;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', keydown);
    return () => {
      document.removeEventListener('keydown', keydown);
      document.body.style.overflow = previousOverflow;
    };
  }, [close, open]);

  if (!open) return null;

  return (
    <div
      className='fixed inset-0 z-[11000] grid place-items-center bg-[#111827]/55 p-4 backdrop-blur-sm sm:p-6'
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) close();
      }}
    >
      <section
        ref={dialogRef}
        role='dialog'
        aria-modal='true'
        aria-labelledby='disclosure-title'
        aria-describedby='disclosure-copy'
        className='max-h-[calc(100svh-2rem)] w-full max-w-[33.75rem] overflow-y-auto rounded-[var(--fluid-radius)] border border-[var(--theme-border)] bg-[var(--theme-popover)] p-[clamp(1.35rem,4vw,2.125rem)] text-[var(--theme-text)] shadow-[0_24px_80px_var(--theme-shadow)] sm:max-h-[calc(100svh-3rem)]'
      >
        <div className='flex items-start justify-between gap-5'>
          <div>
            <p className='text-[10px] font-bold tracking-[0.18em] text-[var(--theme-muted)] uppercase'>
              Information disclosure
            </p>
            <h2 id='disclosure-title' className='mt-3 text-2xl font-semibold tracking-[-0.035em] text-[var(--theme-text)] sm:text-3xl'>
              {disclosureCopy.title}
            </h2>
          </div>
          <button ref={closeRef} type='button' onClick={close} aria-label='Close disclosure' className='grid size-11 shrink-0 place-items-center rounded-full border border-[var(--theme-border)] bg-[var(--theme-surface)] text-xl text-[var(--theme-text)] transition hover:bg-[var(--theme-control-hover)] focus-visible:ring-2 focus-visible:ring-[var(--theme-focus)] focus-visible:ring-offset-2 focus-visible:outline-none'>
            <CloseIcon />
          </button>
        </div>
        <p id='disclosure-copy' className='mt-5 text-sm leading-6 text-[var(--theme-text)] sm:text-base sm:leading-7'>
          {disclosureCopy.main}
        </p>
        <button type='button' onClick={close} className='mt-6 min-h-11 rounded-lg bg-[var(--theme-selected)] px-5 py-3 text-sm font-semibold text-[var(--theme-selected-text)] transition hover:bg-[var(--theme-hover)] focus-visible:ring-2 focus-visible:ring-[var(--theme-focus)] focus-visible:ring-offset-2 focus-visible:outline-none'>
          Done
        </button>
      </section>
    </div>
  );
}
