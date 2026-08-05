"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const resumePath = "/Jacob_Bernard_Resume.pdf";

const actionClass = "inline-flex flex-1 items-center justify-center gap-1 whitespace-nowrap rounded-md border border-[#b8cadc]/30 bg-white/5 px-2 py-2 text-[8px] font-bold uppercase tracking-[0.06em] text-[#b8cadc] transition hover:border-[#b8cadc]/60 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b8cadc] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1f2937] sm:text-[9px]";

export default function ResumeActions() {
  const [open, setOpen] = useState(false);
  const closeButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    closeButton.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return (
    <>
      <div className="mt-4 flex flex-col items-stretch gap-2 border-y border-white/12 bg-white/[0.025] py-3 sm:flex-row sm:items-center">
        <button type="button" onClick={() => setOpen(true)} aria-haspopup="dialog" className={actionClass}>
          Preview résumé <span aria-hidden="true">↗</span>
        </button>
        <a href={resumePath} download="Jacob_Bernard_Resume.pdf" aria-label="Download résumé PDF" className={actionClass}>
          Download résumé <span aria-hidden="true">↓</span>
        </a>
      </div>

      {open && createPortal(
        <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#111827]/75 p-3 backdrop-blur-sm sm:p-6" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && setOpen(false)}>
          <section role="dialog" aria-modal="true" aria-labelledby="resume-preview-title" className="relative flex h-[min(92svh,900px)] w-full max-w-[920px] flex-col overflow-hidden rounded-2xl border border-white/20 bg-[#e2e8f2] shadow-2xl">
            <header className="flex shrink-0 items-center justify-between gap-4 border-b border-[#2f3e5c]/15 px-4 py-3 pr-16 sm:px-6">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#607795]">PDF preview</p>
                <h2 id="resume-preview-title" className="mt-1 text-lg font-semibold text-[#111]">Jacob Bernard résumé</h2>
              </div>
              <a href={resumePath} download="Jacob_Bernard_Resume.pdf" className="rounded-lg bg-[#1f2937] px-3 py-2 text-xs font-semibold text-white transition hover:bg-[#2f3e5c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#607795] focus-visible:ring-offset-2">
                Download PDF
              </a>
            </header>
            <iframe src={`${resumePath}#view=FitH`} title="Jacob Bernard résumé PDF preview" className="min-h-0 flex-1 bg-white" />
            <p className="sr-only">If the embedded PDF does not load, use the Download PDF link above.</p>
            <button ref={closeButton} type="button" onClick={() => setOpen(false)} aria-label="Close résumé preview" className="absolute right-3 top-3 z-10 grid size-10 place-items-center rounded-full bg-[#1f2937] text-xl text-white shadow-lg transition hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#607795] focus-visible:ring-offset-2">
              ×
            </button>
          </section>
        </div>,
        document.body,
      )}
    </>
  );
}
