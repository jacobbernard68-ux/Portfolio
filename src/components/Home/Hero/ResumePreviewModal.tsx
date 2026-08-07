'use client';

import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export const resumePath = '/Jacob_Bernard_Resume.pdf';

export default function ResumePreviewModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const closeButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) =>
      event.key === 'Escape' && onClose();
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeOnEscape);
    closeButton.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [open, onClose]);

  if (!open) return null;
  return createPortal(
    <div
      className='fixed inset-0 z-[10000] flex items-center justify-center bg-[#111827]/75 p-3 backdrop-blur-sm sm:p-6'
      role='presentation'
      onMouseDown={(event) => event.target === event.currentTarget && onClose()}
    >
      <section
        role='dialog'
        aria-modal='true'
        aria-labelledby='resume-preview-title'
        className='relative flex h-[min(92svh,56.25rem)] w-full max-w-[min(57.5rem,100%)] flex-col overflow-hidden rounded-[var(--fluid-radius)] border border-white/20 bg-[#e2e8f2] shadow-2xl'
      >
        <header className='grid shrink-0 grid-cols-[minmax(0,1fr)_auto] items-center gap-3 border-b border-[#2f3e5c]/15 px-[clamp(1rem,2.5vw,1.5rem)] py-3 pr-[clamp(3.75rem,8vw,4.5rem)]'>
          <div className='min-w-0'>
            <p className='text-[9px] font-bold tracking-[0.18em] text-[#607795] uppercase'>
              PDF preview
            </p>
            <h2
              id='resume-preview-title'
              className='mt-1 truncate text-[clamp(1rem,2vw,1.125rem)] font-semibold text-[#111]'
            >
              Jacob Bernard résumé
            </h2>
          </div>
          <a
            href={resumePath}
            download='Jacob_Bernard_Resume.pdf'
            className='rounded-lg bg-[#1f2937] px-[clamp(0.65rem,1.5vw,0.9rem)] py-2 text-[clamp(0.65rem,1vw,0.75rem)] font-semibold whitespace-nowrap text-white transition hover:bg-[#2f3e5c] focus-visible:ring-2 focus-visible:ring-[#607795] focus-visible:ring-offset-2 focus-visible:outline-none'
          >
            Download PDF
          </a>
        </header>
        <iframe
          src={`${resumePath}#view=FitH`}
          title='Jacob Bernard résumé PDF preview'
          className='min-h-0 flex-1 bg-white'
        />
        <p className='sr-only'>
          If the embedded PDF does not load, use the Download PDF link above.
        </p>
        <button
          ref={closeButton}
          type='button'
          onClick={onClose}
          aria-label='Close résumé preview'
          className='absolute top-2.5 right-2.5 z-10 grid size-10 place-items-center rounded-full bg-[#1f2937] text-xl text-white shadow-lg transition hover:bg-black focus-visible:ring-2 focus-visible:ring-[#607795] focus-visible:ring-offset-2 focus-visible:outline-none'
        >
          ×
        </button>
      </section>
    </div>,
    document.body,
  );
}
