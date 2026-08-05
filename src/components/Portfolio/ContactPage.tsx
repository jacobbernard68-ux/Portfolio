"use client";

import { useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import ContactFormCard from "./ContactFormCard";
import Modal from "./Modal";

const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;

export default function PortfolioContactPage() {
  const [calendarOpen, setCalendarOpen] = useState(false);

  const trackCard = (event: ReactPointerEvent<HTMLElement>) => {
    const card = event.currentTarget;
    const bounds = card.getBoundingClientRect();
    const localX = event.clientX - bounds.left;
    const localY = event.clientY - bounds.top;
    const horizontal = (localX / bounds.width) * 2 - 1;
    const vertical = (localY / bounds.height) * 2 - 1;
    card.style.setProperty("--card-cursor-x", `${localX}px`);
    card.style.setProperty("--card-cursor-y", `${localY}px`);
    card.style.transform = `perspective(1000px) rotateX(${-vertical * 1.25}deg) rotateY(${horizontal * 1.25}deg)`;
    card.style.boxShadow = `${-horizontal * 3}px ${-vertical * 3 + 7}px 22px rgba(15, 23, 42, 0.14)`;
    card.setAttribute("data-cursor-active", "true");
  };

  const resetCard = (event: ReactPointerEvent<HTMLElement>) => {
    const card = event.currentTarget;
    card.removeAttribute("data-cursor-active");
    card.style.removeProperty("transform");
    card.style.removeProperty("box-shadow");
  };

  return (
    <main className="mt-[88px] min-h-[calc(100svh-88px)] overflow-x-hidden bg-[#e2e8f2]/80 px-3 py-2 sm:px-8 sm:py-4 md:mt-[120px] md:min-h-[calc(100svh-120px)] lg:px-[60px]">
      <section className="mx-auto w-full max-w-[1320px] rounded-xl bg-[#f2f4f7]/92 p-4 shadow-[0_8px_24px_rgba(15,23,42,0.08)] sm:p-7 lg:p-9">
        <div className="mb-4 grid gap-2 border-b border-slate-200 pb-4 sm:mb-6 sm:gap-3 sm:pb-5 md:grid-cols-2 md:items-end">
          <h1 className="text-3xl font-semibold tracking-[-0.035em] text-[#111] sm:text-5xl">Let’s Connect</h1>
          <p className="max-w-[480px] text-sm leading-6 text-slate-600 md:justify-self-end md:text-right">Have a project, opportunity, or knotty design problem? Tell me what you’re working through.</p>
        </div>

        <div className="grid min-w-0 items-start gap-4 lg:grid-cols-[minmax(16rem,0.72fr)_minmax(0,1.28fr)]">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <article data-cursor-reactive onPointerMove={trackCard} onPointerLeave={resetCard} className="rounded-xl bg-[#afc2d5] p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">Direct contact</p>
              <h2 className="mt-3 text-2xl font-semibold text-[#111]">Jacob Bernard</h2>
              <p className="mt-2 text-sm leading-6 text-slate-700">Send a note with the form and it will go directly to my inbox. I respond within five business days.</p>
            </article>

            <article data-cursor-reactive onPointerMove={trackCard} onPointerLeave={resetCard} className="rounded-xl bg-[#afc2d5] p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">30-minute consultation</p>
              <h2 className="mt-3 text-2xl font-semibold text-[#111]">Start with a conversation.</h2>
              <p className="mt-2 text-sm leading-6 text-slate-700">Available Monday–Friday, 9:00 AM–5:00 PM in 30-minute appointment blocks.</p>
              <button type="button" onClick={() => setCalendarOpen(true)} disabled={!calendlyUrl} className="mt-4 rounded-lg bg-[#26354a] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#34445c] disabled:cursor-not-allowed disabled:opacity-50">{calendlyUrl ? "View available times" : "Scheduling link coming soon"}</button>
            </article>
          </div>

          <ContactFormCard />
        </div>
      </section>

      <Modal open={calendarOpen} onClose={() => setCalendarOpen(false)} title="Schedule a 30-minute consultation" wide>
        <div className="border-b border-slate-200 bg-[#f2f4f7] px-5 py-4 pr-16 sm:px-7">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#607795]">30-minute consultation</p>
          <p className="mt-1 text-sm text-slate-600">Monday–Friday · 9:00 AM–5:00 PM</p>
        </div>
        {calendlyUrl && <iframe src={calendlyUrl} title="Calendly appointment scheduler" className="h-[min(75svh,720px)] w-full bg-white" />}
      </Modal>
    </main>
  );
}
