"use client";

import Image from "next/image";
import type { PointerEvent as ReactPointerEvent } from "react";

const cleaningImages = [
  ["/images/portfolio/cleaning-a.png", "Professional cleaning website shown on desktop and mobile"],
  ["/images/portfolio/cleaning-c.png", "Professional cleaning service page"],
  ["/images/portfolio/cleaning-b.png", "Professional cleaning mobile interface"],
  ["/images/portfolio/cleaning-d.png", "Professional cleaning booking experience"],
] as const;

const festivalModules = [
  {
    eyebrow: "Opening pulse",
    title: "The first signal",
    copy: "A bold introduction gives the festival an immediate visual rhythm and a clear place to begin.",
    image: "/images/portfolio/festival-pulse.png",
  },
  {
    eyebrow: "Neon current",
    title: "Energy in motion",
    copy: "Layered color, strong contrast, and modular content keep the experience expressive without losing structure.",
    image: "/images/portfolio/festival-current.png",
  },
  {
    eyebrow: "Lumen finale",
    title: "A lasting impression",
    copy: "The closing sequence carries the same system through to the final detail, creating one cohesive identity.",
    image: "/images/portfolio/festival-finale.png",
  },
] as const;

export default function PortfolioWorkPage() {
  const trackCard = (event: ReactPointerEvent<HTMLElement>) => {
    const card = event.currentTarget;
    const bounds = card.getBoundingClientRect();
    const localX = event.clientX - bounds.left;
    const localY = event.clientY - bounds.top;
    const horizontal = (localX / bounds.width) * 2 - 1;
    const vertical = (localY / bounds.height) * 2 - 1;
    card.style.setProperty("--card-cursor-x", `${localX}px`);
    card.style.setProperty("--card-cursor-y", `${localY}px`);
    card.style.transform = `perspective(1100px) rotateX(${-vertical * 0.75}deg) rotateY(${horizontal * 0.75}deg)`;
    card.style.scale = "1.001";
    card.style.boxShadow = `${-horizontal * 2}px ${-vertical * 2 + 7}px 22px rgba(15, 23, 42, 0.14)`;
    card.setAttribute("data-cursor-active", "true");
  };

  const resetCard = (event: ReactPointerEvent<HTMLElement>) => {
    const card = event.currentTarget;
    card.removeAttribute("data-cursor-active");
    card.style.removeProperty("transform");
    card.style.removeProperty("scale");
    card.style.removeProperty("box-shadow");
  };

  const trackGlow = (event: ReactPointerEvent<HTMLElement>) => {
    const card = event.currentTarget;
    const bounds = card.getBoundingClientRect();
    card.style.setProperty("--card-cursor-x", `${event.clientX - bounds.left}px`);
    card.style.setProperty("--card-cursor-y", `${event.clientY - bounds.top}px`);
    card.setAttribute("data-cursor-active", "true");
  };

  const resetGlow = (event: ReactPointerEvent<HTMLElement>) => {
    event.currentTarget.removeAttribute("data-cursor-active");
  };

  return (
    <main className="mt-[88px] bg-[#e2e8f2]/80 px-4 py-5 sm:px-8 md:mt-[120px] lg:px-[60px]">
      <section data-cursor-reactive onPointerMove={trackGlow} onPointerLeave={resetGlow} className="mx-auto max-w-[1320px] overflow-hidden rounded-xl bg-[#afc2d5] shadow-[0_8px_24px_rgba(15,23,42,0.08)]">
        <div className="flex flex-col gap-4 px-6 py-8 md:flex-row md:items-end md:justify-between md:px-12">
          <h1 className="text-4xl font-semibold tracking-[-0.03em] text-[#111]">Selected Work</h1>
          <p className="max-w-[420px] text-sm leading-6 text-slate-600 md:text-right">
            Digital products shaped through clear systems, thoughtful interaction, and scalable visual direction.
          </p>
        </div>
      </section>

      <section data-cursor-reactive onPointerMove={trackCard} onPointerLeave={resetCard} className="mx-auto mt-5 max-w-[1128px] overflow-hidden rounded-xl bg-white shadow-[0_8px_24px_rgba(15,23,42,0.08)]">
        <div className="p-3 sm:p-6 md:p-10">
          <div className="mb-8 md:flex md:items-end md:justify-between">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Web design · Service platform</p>
              <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#111] md:text-5xl">Professional Cleaning</h2>
            </div>
            <p className="mt-3 max-w-[380px] text-sm leading-6 text-slate-600 md:mt-0 md:text-right">A trustworthy, conversion-focused experience that makes finding and booking help feel simple.</p>
          </div>
          <div className="relative">
            <div className="grid gap-3 md:max-h-[590px] md:grid-cols-2 md:overflow-hidden md:pr-4">
              {cleaningImages.map(([src, alt]) => (
                <div key={src} className="relative aspect-[1.35/1] overflow-hidden rounded-lg bg-slate-100">
                  <Image src={src} alt={alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
                </div>
              ))}
            </div>
            <div aria-hidden="true" className="absolute bottom-0 right-0 top-0 hidden w-2 rounded-full bg-[#e2e8f2] md:block">
              <span className="absolute left-0 top-3 h-[34%] w-full rounded-full border-2 border-[#e2e8f2] bg-[#607795]" />
            </div>
          </div>
        </div>
      </section>

      <section data-cursor-reactive="dark" onPointerMove={trackCard} onPointerLeave={resetCard} className="relative mx-auto mt-5 max-w-[1128px] overflow-hidden rounded-xl bg-[#3a2d28] text-white shadow-[0_8px_24px_rgba(15,23,42,0.14)]">
        <div className="flex h-[76px] items-center justify-between border-b border-black/20 bg-[#3a2d28] px-6 md:px-12">
          <Image src="/images/portfolio/barber/logo.png" alt="Vintage Barbershop" width={54} height={54} className="size-[54px] object-cover" />
          <nav aria-label="Vintage Barbershop preview navigation" className="flex items-center gap-5 text-sm font-semibold text-[#d8c1a1] sm:gap-8">
            <span>Home</span>
            <span>Services</span>
            <span>Book</span>
            <span>Contact</span>
          </nav>
        </div>
        <div className="relative">
          <div className="relative aspect-[1.65/1] overflow-hidden md:mr-4 md:h-[900px] md:aspect-auto">
            <Image src="/images/portfolio/barber/site-preview-tall.png" alt="Preview of the original Vintage Barbershop website" fill sizes="(min-width: 1024px) 1128px, 100vw" className="object-cover object-[center_56%]" />
          </div>
          <div aria-hidden="true" className="absolute bottom-3 right-1.5 top-3 hidden w-2 rounded-full bg-white/15 md:block">
            <span className="absolute left-0 top-[38%] h-[34%] w-full rounded-full border-2 border-white/10 bg-[#d8c1a1]" />
          </div>
        </div>
      </section>

      <section data-cursor-reactive="dark" onPointerMove={trackCard} onPointerLeave={resetCard} className="relative mx-auto mt-5 max-w-[1128px] overflow-hidden rounded-xl bg-[linear-gradient(145deg,#475c61_0%,#3a4a50_30%,#12161b_70%,#263136_100%)] text-white shadow-[0_8px_24px_rgba(15,23,42,0.14)] md:max-h-[1720px]">
        <div className="flex items-center justify-between border-b border-white/15 px-6 py-5 md:px-12">
          <p className="font-semibold tracking-[0.08em]">LUMEN FESTIVAL</p>
          <p className="text-xs uppercase tracking-[0.18em] text-white/60">Brand · Digital experience</p>
        </div>
        <div className="px-6 pb-8 pt-10 md:px-12 md:pb-16 md:pt-16">
          <div className="mb-10 grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <h2 className="text-5xl font-semibold leading-[0.95] tracking-[-0.045em] sm:text-6xl lg:text-8xl">Light becomes language.</h2>
            <p className="max-w-[480px] text-base leading-7 text-white/70 md:justify-self-end">A visual system for an immersive festival—designed to move between atmosphere, information, and live energy.</p>
          </div>
          <div className="relative aspect-[16/8.5] min-h-[260px] overflow-hidden rounded-lg bg-black/20">
            <Image src="/images/portfolio/festival-hero.png" alt="Lumen Festival visual identity" fill sizes="(min-width: 1024px) 1200px, 100vw" className="object-cover" />
          </div>
          <div className="mt-16 space-y-16 md:mt-24 md:space-y-24">
            {festivalModules.map((item, index) => (
              <article key={item.title} className="grid items-center gap-8 md:grid-cols-2 md:gap-16">
                <div className={index % 2 ? "md:order-2" : ""}>
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#b7c5dd]">{item.eyebrow}</p>
                  <h3 className="text-4xl font-semibold tracking-[-0.035em] md:text-5xl">{item.title}</h3>
                  <p className="mt-5 max-w-[460px] leading-7 text-white/65">{item.copy}</p>
                </div>
                <div className={`relative aspect-[4/3] overflow-hidden rounded-lg bg-black/20 ${index % 2 ? "md:order-1" : ""}`}>
                  <Image src={item.image} alt={`${item.title} visual`} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
                </div>
              </article>
            ))}
          </div>
        </div>
        <div aria-hidden="true" style={{ position: "absolute", zIndex: 30 }} className="bottom-4 right-1.5 top-[76px] hidden w-2.5 rounded-full bg-white/25 shadow-[0_0_0_1px_rgba(255,255,255,0.08)] md:block">
          <span className="absolute left-0 top-3 h-[28%] w-full rounded-full border-2 border-white/20 bg-[#b8cadc] shadow-sm" />
        </div>
      </section>
    </main>
  );
}
