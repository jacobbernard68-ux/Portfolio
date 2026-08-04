"use client";

import type { PointerEvent as ReactPointerEvent } from "react";

export default function PortfolioContactPage() {
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
    card.style.scale = "1.001";
    card.style.boxShadow = `${-horizontal * 3}px ${-vertical * 3 + 7}px 22px rgba(15, 23, 42, 0.14)`;
    card.setAttribute("data-cursor-active", "true");
  };

  const resetCard = (event: ReactPointerEvent<HTMLElement>) => {
    const card = event.currentTarget;
    card.removeAttribute("data-cursor-active");
    card.style.removeProperty("transform");
    card.style.removeProperty("scale");
    card.style.removeProperty("box-shadow");
  };

  const trackPanelGlow = (event: ReactPointerEvent<HTMLElement>) => {
    const panel = event.currentTarget;
    const bounds = panel.getBoundingClientRect();
    panel.style.setProperty("--card-cursor-x", `${event.clientX - bounds.left}px`);
    panel.style.setProperty("--card-cursor-y", `${event.clientY - bounds.top}px`);
    panel.setAttribute("data-cursor-active", "true");
  };

  const hidePanelGlow = (event: ReactPointerEvent<HTMLElement>) => {
    event.currentTarget.removeAttribute("data-cursor-active");
  };

  return (
    <main data-page-glow onPointerMove={trackPanelGlow} onPointerLeave={hidePanelGlow} className="mt-[88px] flex min-h-[calc(100svh-176px)] items-center bg-[#e2e8f2]/80 px-4 py-5 md:mt-[120px] md:h-[calc(100svh-208px)] md:min-h-0 md:overflow-hidden lg:px-[60px]">
      <section data-cursor-reactive onPointerMove={trackPanelGlow} onPointerLeave={hidePanelGlow} className="mx-auto w-full max-w-[1320px] rounded-xl bg-[#f2f4f7]/92 p-5 shadow-[0_8px_24px_rgba(15,23,42,0.08)] backdrop-blur-[2px] sm:p-8 lg:p-10">
        <div className="mb-6 grid gap-3 border-b border-slate-200 pb-5 md:grid-cols-2 md:items-end">
          <h1 className="text-4xl font-semibold tracking-[-0.035em] text-[#111] sm:text-5xl">Let’s Connect</h1>
          <p className="max-w-[480px] text-sm leading-6 text-slate-600 md:justify-self-end md:text-right">Have a project, opportunity, or knotty design problem? Tell me what you’re working through.</p>
        </div>
        <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <article data-cursor-reactive onPointerMove={trackCard} onPointerLeave={resetCard} className="rounded-xl bg-[#afc2d5] p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">Direct contact</p>
              <h2 className="mt-3 text-2xl font-semibold text-[#111]">Jacob Bernard</h2>
              <p className="mt-2 text-sm leading-6 text-slate-700">Email address available here once you confirm the preferred inbox.</p>
            </article>
            <article data-cursor-reactive onPointerMove={trackCard} onPointerLeave={resetCard} className="rounded-xl bg-[#afc2d5] p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">Consultation</p>
              <h2 className="mt-3 text-2xl font-semibold text-[#111]">Start with a conversation.</h2>
              <p className="mt-2 text-sm leading-6 text-slate-700">Share the challenge, timeline, and what a strong outcome would look like.</p>
            </article>
          </div>
          <form data-cursor-reactive onPointerMove={trackCard} onPointerLeave={resetCard} action="https://formbold.com/s/unique_form_id" method="POST" className="grid gap-4 rounded-xl bg-[#c7d2de] p-5 sm:grid-cols-2 sm:p-6">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-[#111]">Name</label>
              <input id="name" name="name" required autoComplete="name" className="w-full rounded-lg border border-slate-500/20 bg-white px-4 py-3 text-[#111] outline-none transition focus:border-slate-700 focus:ring-2 focus:ring-slate-700/15" />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#111]">Email</label>
              <input id="email" name="email" type="email" required autoComplete="email" className="w-full rounded-lg border border-slate-500/20 bg-white px-4 py-3 text-[#111] outline-none transition focus:border-slate-700 focus:ring-2 focus:ring-slate-700/15" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-[#111]">Message</label>
              <textarea id="message" name="message" rows={4} required className="w-full resize-none rounded-lg border border-slate-500/20 bg-white px-4 py-3 text-[#111] outline-none transition focus:border-slate-700 focus:ring-2 focus:ring-slate-700/15" />
            </div>
            <div className="sm:col-span-2 sm:text-right">
              <button type="submit" className="rounded-lg bg-[#26354a] px-6 py-3 font-medium text-white transition hover:bg-[#1d2a3c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#26354a] focus-visible:ring-offset-2">Send message</button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
