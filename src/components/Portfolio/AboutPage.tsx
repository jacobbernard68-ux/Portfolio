"use client";

import type { PointerEvent as ReactPointerEvent } from "react";
import ResumeSections from "./ResumeSections";

export default function PortfolioAboutPage() {
  const trackGlow = (event: ReactPointerEvent<HTMLElement>) => {
    const card = event.currentTarget;
    const bounds = card.getBoundingClientRect();
    const localX = event.clientX - bounds.left;
    const localY = event.clientY - bounds.top;
    const horizontal = (localX / bounds.width) * 2 - 1;
    const vertical = (localY / bounds.height) * 2 - 1;
    card.style.setProperty("--card-cursor-x", `${localX}px`);
    card.style.setProperty("--card-cursor-y", `${localY}px`);
    card.style.transform = `perspective(900px) rotateX(${-vertical * 2.5}deg) rotateY(${horizontal * 2.5}deg)`;
    card.style.scale = "1.003";
    card.style.boxShadow = `${-horizontal * 4}px ${-vertical * 4 + 8}px 26px rgba(15, 23, 42, 0.18)`;
    card.setAttribute("data-cursor-active", "true");
  };

  const hideGlow = (event: ReactPointerEvent<HTMLElement>) => {
    const card = event.currentTarget;
    card.removeAttribute("data-cursor-active");
    card.style.removeProperty("transform");
    card.style.removeProperty("scale");
    card.style.removeProperty("box-shadow");
  };

  return (
    <main className="mt-[88px] min-h-[calc(100svh-176px)] bg-[#e2e8f2]/80 px-4 py-5 md:mt-[120px] md:h-[calc(100svh-208px)] md:min-h-0 md:overflow-hidden lg:px-[60px]">
      <section className="mx-auto grid h-full w-full max-w-[1320px] gap-4 lg:grid-cols-[0.92fr_1.08fr] lg:gap-[22px]">
        <header data-cursor-reactive onPointerMove={trackGlow} onPointerLeave={hideGlow} className="flex flex-col justify-between gap-8 rounded-xl bg-[#c5d0dd] p-6 shadow-[0_10px_26px_rgba(15,23,42,0.10)] ring-1 ring-[#1f2937]/10 sm:p-8 lg:relative lg:-top-[7px] lg:p-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#607795]">Frontend developer · UI designer</p>
            <h1 className="mt-4 max-w-[650px] text-4xl font-bold leading-[1.08] tracking-[-0.045em] text-[#111] sm:text-5xl">Designing intuitive interfaces backed by enterprise-level experience.</h1>
            <p className="mt-6 max-w-[570px] text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">I bring structure to complex problems, combining frontend development, UI design, and 15 years of technical experience to create clear, usable digital products.</p>
          </div>
          <nav aria-label="Professional profiles" className="flex flex-wrap gap-2 border-t border-slate-200 pt-5 text-sm">
            <a href="mailto:jacob.bernard68@gmail.com" className="rounded-lg bg-[#e2e8f2] px-4 py-2 font-medium text-[#1f2937] transition hover:bg-[#b8cadc] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#607795]">Email</a>
            <a href="https://github.com/jacobbernard68-ux" target="_blank" rel="noreferrer" className="rounded-lg bg-[#e2e8f2] px-4 py-2 font-medium text-[#1f2937] transition hover:bg-[#b8cadc] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#607795]">GitHub ↗</a>
            <a href="https://linkedin.com/in/jacobbernard159" target="_blank" rel="noreferrer" className="rounded-lg bg-[#e2e8f2] px-4 py-2 font-medium text-[#1f2937] transition hover:bg-[#b8cadc] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#607795]">LinkedIn ↗</a>
          </nav>
        </header>
        <div className="h-full min-h-0 lg:-translate-y-[7px]">
          <ResumeSections />
        </div>
      </section>
    </main>
  );
}
