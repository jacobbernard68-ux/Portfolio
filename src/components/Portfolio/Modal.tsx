'use client';

import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import { createPortal } from 'react-dom';

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  wide?: boolean;
};

export default function Modal({
  open,
  onClose,
  title,
  children,
  wide = false,
}: ModalProps) {
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
        aria-label={title}
        className={`relative max-h-[calc(100svh-clamp(1.5rem,6vh,4rem))] w-full overflow-hidden rounded-[var(--fluid-radius)] border border-white/20 bg-[#e2e8f2] shadow-2xl ${wide ? 'max-w-[min(61.25rem,100%)]' : 'max-w-[min(45rem,100%)]'}`}
      >
        <button
          ref={closeButton}
          type='button'
          onClick={onClose}
          aria-label={`Close ${title}`}
          className='absolute top-3 right-3 z-20 grid size-10 place-items-center rounded-full bg-[#1f2937] text-[0] text-white shadow-lg transition hover:bg-black focus-visible:ring-2 focus-visible:ring-[#607795] focus-visible:ring-offset-2 focus-visible:outline-none'
        >
          <svg
            viewBox='0 0 24 24'
            fill='none'
            className='size-5'
            aria-hidden='true'
          >
            <path
              d='m7 7 10 10M17 7 7 17'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
            />
          </svg>
        </button>
        {children}
      </section>
    </div>,
    document.body,
  );
}
