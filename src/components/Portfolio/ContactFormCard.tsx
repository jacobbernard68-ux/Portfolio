'use client';

import { useState } from 'react';
import type { FormEvent, PointerEvent as ReactPointerEvent } from 'react';
import { openDisclosure } from '@/components/DisclosureDialog';

type SubmissionState = 'idle' | 'sending' | 'success' | 'error';

export default function ContactFormCard({
  compact = false,
}: {
  compact?: boolean;
}) {
  const [submissionState, setSubmissionState] =
    useState<SubmissionState>('idle');
  const [statusMessage, setStatusMessage] = useState(
    'I respond within five business days.',
  );

  const submitContactForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setSubmissionState('sending');
    setStatusMessage('Sending your message…');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(form).entries())),
      });
      const result = (await response.json()) as { error?: string };
      if (!response.ok)
        throw new Error(result.error ?? 'Unable to send your message.');
      form.reset();
      setSubmissionState('success');
      setStatusMessage(
        'Thanks — your message has been sent. I’ll respond within five business days.',
      );
      openDisclosure();
    } catch (error) {
      setSubmissionState('error');
      setStatusMessage(
        error instanceof Error ? error.message : 'Unable to send your message.',
      );
    }
  };

  const tiltForm = (event: ReactPointerEvent<HTMLFormElement>) => {
    if (compact) return;
    const form = event.currentTarget;
    const bounds = form.getBoundingClientRect();
    const horizontal = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
    const vertical = ((event.clientY - bounds.top) / bounds.height) * 2 - 1;
    form.style.setProperty(
      '--card-cursor-x',
      `${event.clientX - bounds.left}px`,
    );
    form.style.setProperty(
      '--card-cursor-y',
      `${event.clientY - bounds.top}px`,
    );
    form.style.transform = `perspective(1200px) rotateX(${-vertical * 0.45}deg) rotateY(${horizontal * 0.45}deg)`;
    form.style.boxShadow = `${-horizontal * 2}px ${-vertical * 2 + 8}px 24px rgba(15, 23, 42, 0.12)`;
    form.setAttribute('data-cursor-active', 'true');
  };

  const resetForm = (event: ReactPointerEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    form.removeAttribute('data-cursor-active');
    form.style.removeProperty('transform');
    form.style.removeProperty('box-shadow');
  };

  return (
    <form
      data-cursor-reactive={compact ? undefined : 'form'}
      onPointerMove={compact ? undefined : tiltForm}
      onPointerLeave={compact ? undefined : resetForm}
      onSubmit={submitContactForm}
      aria-describedby='contact-status contact-notice'
      className={`contact-form-card relative grid min-w-0 content-start gap-[clamp(0.55rem,min(1.1vw,1.25svh),0.8rem)] bg-[#c7d2de] ${compact ? 'max-h-[calc(100svh-clamp(1.5rem,6vh,4rem))] overflow-y-auto p-[clamp(1.25rem,3vw,1.75rem)] pt-[clamp(3.5rem,8vh,4rem)]' : 'rounded-[var(--fluid-radius)] p-[clamp(0.75rem,min(1.4vw,1.7svh),1.15rem)] sm:grid-cols-2 lg:h-full lg:grid-rows-[auto_minmax(0,1fr)_auto]'}`}
    >
      {compact && (
        <div className='sm:col-span-2'>
          <p className='text-xs font-semibold tracking-[0.18em] text-slate-600 uppercase'>
            Direct contact
          </p>
          <h2 className='mt-2 text-3xl font-semibold text-[#111]'>
            Send me a message
          </h2>
        </div>
      )}
      <div>
        <div
          className='pointer-events-none absolute h-px w-px overflow-hidden opacity-0'
          aria-hidden='true'
        >
          <label htmlFor={compact ? 'modal-website' : 'website'}>Website</label>
          <input
            id={compact ? 'modal-website' : 'website'}
            name='website'
            type='text'
            tabIndex={-1}
            autoComplete='off'
          />
        </div>
        <label
          htmlFor={compact ? 'modal-name' : 'name'}
          className='mb-2 block text-sm font-medium text-[#111]'
        >
          Name
        </label>
        <input
          id={compact ? 'modal-name' : 'name'}
          name='name'
          required
          minLength={2}
          maxLength={80}
          autoComplete='name'
          className='w-full rounded-lg border border-slate-500/20 bg-white/85 px-[clamp(0.75rem,1vw,1rem)] py-[clamp(0.55rem,1.1svh,0.75rem)] text-[#111] transition outline-none focus:border-[#607795] focus:ring-2 focus:ring-[#607795]/25'
        />
      </div>
      <div>
        <label
          htmlFor={compact ? 'modal-email' : 'email'}
          className='mb-2 block text-sm font-medium text-[#111]'
        >
          Email
        </label>
        <input
          id={compact ? 'modal-email' : 'email'}
          name='email'
          type='email'
          required
          maxLength={254}
          autoComplete='email'
          className='w-full rounded-lg border border-slate-500/20 bg-white/85 px-[clamp(0.75rem,1vw,1rem)] py-[clamp(0.55rem,1.1svh,0.75rem)] text-[#111] transition outline-none focus:border-[#607795] focus:ring-2 focus:ring-[#607795]/25'
        />
      </div>
      <div
        className={`sm:col-span-2 ${compact ? '' : 'flex min-h-0 flex-col'}`}
      >
        <label
          htmlFor={compact ? 'modal-message' : 'message'}
          className='mb-2 block text-sm font-medium text-[#111]'
        >
          Message
        </label>
        <textarea
          id={compact ? 'modal-message' : 'message'}
          name='message'
          rows={compact ? 5 : 3}
          required
          minLength={10}
          maxLength={3000}
          className={`w-full resize-none rounded-lg border border-slate-500/20 bg-white/85 px-[clamp(0.75rem,1vw,1rem)] py-[clamp(0.55rem,1.1svh,0.75rem)] text-[#111] transition outline-none focus:border-[#607795] focus:ring-2 focus:ring-[#607795]/25 ${compact ? 'min-h-[clamp(8rem,22vh,11rem)]' : 'min-h-[clamp(4.75rem,12svh,6.5rem)] flex-1'}`}
        />
      </div>
      <div className='flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-end sm:justify-between'>
        <div className='max-w-[520px]'>
          <p
            id='contact-status'
            role='status'
            aria-live='polite'
            className={`mb-1 text-xs font-semibold ${submissionState === 'error' ? 'text-red-700' : submissionState === 'success' ? 'text-emerald-800' : 'text-[#26354a]'}`}
          >
            {statusMessage}
          </p>
          <p
            id='contact-notice'
            className='text-[11px] leading-[1.55] text-slate-600'
          >
            For general inquiries only. Please do not include sensitive
            information.
          </p>
        </div>
        <button
          type='submit'
          disabled={submissionState === 'sending'}
          className='shrink-0 rounded-lg bg-[#26354a] px-6 py-3 font-medium text-white transition hover:bg-[#34445c] disabled:cursor-wait disabled:opacity-60'
        >
          {submissionState === 'sending' ? 'Sending…' : 'Send message'}
        </button>
      </div>
    </form>
  );
}
