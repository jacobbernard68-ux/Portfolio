"use client";

import CloseIcon from '@/components/Portfolio/CloseIcon';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const festivalSections = [
  { id: "opening-pulse", day: "Day One", title: "Opening Pulse", description: "The Lumen Stage begins in quiet preparation. Sound checks, lighting rigs, and open air before the first pulse of Neon Current.", image: "/images/portfolio/festival-pulse.png", imageAlt: "Festival stage prepared in daylight before performances begin", reverse: false, featured: false },
  { id: "neon-current", day: "Day Two", title: "Neon Current", description: "As night falls, Neon Current ignites the festival. Performances, synchronized lighting, and immersive stage visuals transform the Lumen Stage.", image: "/images/portfolio/festival-current.png", imageAlt: "Nighttime festival performance with stage lighting and a large crowd", reverse: true, featured: true },
  { id: "lumen-finale", day: "Day Three", title: "Lumen Finale", description: "As the lights fade, the Lumen Stage returns to quiet. The echoes of Neon Current linger as the festival winds down.", image: "/images/portfolio/festival-finale.png", imageAlt: "Festival grounds gradually clearing as the event winds down", reverse: false, featured: false },
];

const navItems = [["Overview", "#overview"], ["Lineup", "#opening-pulse"], ["Stages", "#neon-current"], ["Experience", "#lumen-finale"], ["Tickets", "#tickets"]];

export default function LumenStagePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [ticketNote, setTicketNote] = useState(false);

  return <main className="min-h-screen bg-[#11171b] text-[#e8eef0] selection:bg-[#aacbd5] selection:text-[#12161b]">
    <header className="sticky top-0 z-50 border-b border-[#839195] bg-[#475c61]">
      <div className="mx-auto flex min-h-[72px] max-w-[1250px] items-center justify-between pl-6 pr-20 sm:pr-24">
        <Link href="#overview" className="text-xl font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f5f7f8]">Lumen Stage</Link>
        <nav aria-label="Festival navigation" className="hidden items-center gap-6 text-base md:flex">{navItems.map(([label, href]) => <a key={label} href={href} className="transition hover:text-white hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">{label}</a>)}</nav>
        <div className="flex items-center gap-3 md:hidden"><Link href="/work/lumen-festival" className="text-[10px] font-bold uppercase tracking-[0.14em]">Case study</Link><button type="button" aria-expanded={menuOpen} aria-controls="festival-mobile-nav" onClick={() => setMenuOpen((open) => !open)} className="grid size-11 shrink-0 place-items-center rounded-full border border-white/30 text-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-white">{menuOpen ? <CloseIcon /> : "≡"}<span className="sr-only">Toggle menu</span></button></div>
      </div>
      {menuOpen && <nav id="festival-mobile-nav" aria-label="Mobile festival navigation" className="grid border-t border-[#839195] bg-[#3a4a50] px-6 py-3 md:hidden">{navItems.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)} className="border-b border-white/10 py-3 text-sm last:border-0">{label}</a>)}</nav>}
    </header>

    <div className="bg-[linear-gradient(180deg,#475c61_0%,#3a4a50_35%,#12161b_55%,#263136_100%)]">
      <section id="overview" className="mx-auto grid max-w-[1250px] gap-8 px-6 py-10 md:grid-cols-[2fr_3fr] md:gap-6 lg:gap-10 lg:py-14">
        <div className="pt-1"><p className="text-xs font-medium uppercase tracking-[0.16em] text-[#d7e0e3]">July 18–20 · Seattle</p><h1 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#f5f7f8] lg:text-[36px]">Neon Current Festival</h1><p className="mt-4 text-base text-[#d7e0e3]">Seattle Waterfront District</p><p className="mt-8 max-w-md text-sm leading-6 text-[#d7e0e3]/80">Three days told through anticipation, preparation, intensity, and a final quiet afterglow.</p></div>
        <figure className="group relative aspect-[726/360] min-h-[280px] overflow-hidden rounded-3xl"><Image src="/images/portfolio/festival-hero.png" alt="Concert lighting rig glowing before a performance" fill priority sizes="(max-width: 767px) 100vw, 60vw" className="object-cover transition duration-300 motion-reduce:transition-none group-hover:scale-[1.02]"/></figure>
      </section>

      <div className="mx-auto flex max-w-[1250px] flex-col gap-16 px-6 pb-16 md:gap-20 md:pb-20">
        {festivalSections.map((section) => <FestivalModule key={section.id} {...section}/>) }
      </div>

      <footer id="tickets" className="border-t border-[#839195]/45 px-6 py-10 text-center"><p className="text-base text-[#d7e0e3]">Three days of light, sound, and immersive performance.</p><div className="mt-6 flex flex-wrap justify-center gap-3"><button onClick={() => setTicketNote(true)} className="rounded-full border border-[#d7e0e3]/60 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.12em] transition hover:bg-[#e8eef0] hover:text-[#263136] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Ticket information</button><Link href="/work/lumen-festival" className="rounded-full px-5 py-2.5 text-xs font-medium uppercase tracking-[0.12em] text-[#d7e0e3] hover:text-white">Portfolio case study</Link></div>{ticketNote && <p role="status" className="mx-auto mt-5 max-w-lg text-sm text-[#d7e0e3]/75">This is a local portfolio prototype. No tickets are currently offered or sold through this experience.</p>}</footer>
    </div>
  </main>;
}

function FestivalModule({ id, day, title, description, image, imageAlt, reverse, featured }: (typeof festivalSections)[number]) {
  return <section id={id} className={`grid items-start gap-7 md:grid-cols-[3fr_2fr] md:gap-6 lg:gap-10 ${reverse ? "md:grid-cols-[2fr_3fr]" : ""}`}>
    <figure className={`group relative overflow-hidden rounded-xl ${featured ? "min-h-[360px]" : "min-h-[320px]"} ${reverse ? "order-2 md:order-2" : ""}`}><Image src={image} alt={imageAlt} fill sizes="(max-width: 767px) 100vw, 60vw" className="object-cover transition duration-300 motion-reduce:transition-none group-hover:scale-[1.02]"/></figure>
    <div className={`${reverse ? "order-1 md:order-1" : ""} py-1`}><p className="text-sm font-medium text-[#d7e0e3]">{day}</p><h2 className={`mt-[18px] font-semibold tracking-[-0.035em] text-[#f5f7f8] ${featured ? "text-4xl" : "text-3xl"}`}>{title}</h2><p className={`mt-5 max-w-lg text-[#d7e0e3] ${featured ? "text-lg leading-8 lg:text-xl" : "text-base leading-7"}`}>{description}</p></div>
  </section>;
}
