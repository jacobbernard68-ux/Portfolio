import Image from "next/image";
import Link from "next/link";

const modules = [
  { day: "Day One", title: "Opening Pulse", copy: "The Lumen Stage begins in quiet preparation. Sound checks, lighting rigs, and open air before the first pulse of Neon Current.", image: "/images/portfolio/festival-pulse.png", reverse: false },
  { day: "Day Two", title: "Neon Current", copy: "As night falls, Neon Current ignites the festival. Performances, synchronized lighting, and immersive stage visuals transform the Lumen Stage.", image: "/images/portfolio/festival-current.png", reverse: true },
  { day: "Day Three", title: "Lumen Finale", copy: "As the lights fade, the Lumen Stage returns to quiet. The echoes of Neon Current linger as the festival winds down.", image: "/images/portfolio/festival-finale.png", reverse: false },
];

export default function LumenFestivalFigmaPage() {
  return <main className="min-h-screen bg-[#e4ebf5] p-4 text-[#e8eef0] sm:p-8 lg:p-10">
    <section className="mx-auto max-w-[1320px] overflow-hidden rounded-xl bg-gradient-to-b from-[#475c61] via-[#12161b] to-[#263136] p-5 shadow-[0_18px_60px_rgba(0,0,0,0.25)] sm:p-8 lg:p-10">
      <header className="flex items-center justify-between border-b border-[#d9d9d9]/70 pb-6 pr-14 sm:pr-16"><strong className="text-lg font-medium">Lumen Stage</strong><nav className="hidden gap-6 text-sm md:flex"><a href="#overview">Overview</a><a href="#lineup">Lineup</a><a href="#stages">Stages</a><a href="#experience">Experience</a><Link href="/work/lumen-festival">Case study</Link></nav></header>
      <section id="overview" className="grid gap-7 py-5 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10"><div><h1 className="text-3xl font-semibold text-[#f5f7f8] sm:text-4xl">Neon Current Festival</h1><p className="mt-3 text-sm text-[#d7e0e3]">July 18–20 | Seattle Waterfront District</p></div><figure className="relative min-h-[300px] overflow-hidden rounded-3xl lg:min-h-[360px]"><Image src="/images/portfolio/festival-hero.png" alt="Festival stage lights" fill priority sizes="(max-width: 1023px) 100vw, 60vw" className="object-cover"/></figure></section>
      <div id="lineup" className="space-y-5 pt-4">{modules.map((module) => <article id={module.day === "Day Two" ? "stages" : module.day === "Day Three" ? "experience" : undefined} key={module.day} className="grid items-start gap-7 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10"><figure className={`relative min-h-[300px] overflow-hidden rounded-xl lg:min-h-[320px] ${module.reverse ? "lg:order-2" : ""}`}><Image src={module.image} alt={`${module.title} festival scene`} fill sizes="(max-width: 1023px) 100vw, 60vw" className="object-cover"/></figure><div className={`py-3 ${module.reverse ? "lg:order-1" : ""}`}><p className="text-sm font-medium text-[#d7e0e3]">{module.day}</p><h2 className="mt-5 text-3xl font-semibold text-[#f5f7f8] sm:text-4xl">{module.title}</h2><p className="mt-5 max-w-lg text-base leading-7 text-[#d7e0e3]">{module.copy}</p></div></article>)}</div>
      <p className="py-10 text-center text-lg text-white">Three days of light, sound, and immersive performance.</p>
    </section>
  </main>;
}
