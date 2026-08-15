'use client';

import { useState } from 'react';
import ResumePreviewModal, { resumePath } from './ResumePreviewModal';

const actionClass =
  'resume-action inline-flex min-w-0 flex-1 items-center justify-center gap-1 whitespace-nowrap rounded-lg border border-[#b8cadc]/30 bg-white/5 px-[clamp(0.65rem,1.2vw,1rem)] py-[clamp(0.6rem,1vh,0.75rem)] text-center font-bold text-[#b8cadc] transition hover:border-[#b8cadc]/60 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b8cadc] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1f2937]';

export default function ResumeActions({
  compact = false,
}: {
  compact?: boolean;
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className={`mt-[clamp(0.75rem,2vh,1rem)] flex items-stretch gap-[clamp(0.4rem,1vw,0.5rem)] border-y border-white/12 bg-white/[0.025] py-[clamp(0.6rem,1.5vh,0.75rem)] sm:flex-row sm:items-center ${compact ? 'flex-row' : 'flex-col'}`}
      >
        <button
          type='button'
          onClick={() => setOpen(true)}
          aria-haspopup='dialog'
          className={actionClass}
        >
          <span className='min-[60rem]:hidden'>Preview PDF</span>
          <span className='hidden min-[60rem]:inline'>Preview Resume</span>{' '}
          <span aria-hidden='true'>↗</span>
        </button>
        <a
          href={resumePath}
          download='Jacob_Bernard_Resume.pdf'
          aria-label='Download Resume PDF'
          className={actionClass}
        >
          <span className='min-[60rem]:hidden'>Download PDF</span>
          <span className='hidden min-[60rem]:inline'>
            Download Resume
          </span>{' '}
          <span aria-hidden='true'>↓</span>
        </a>
      </div>
      <ResumePreviewModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
