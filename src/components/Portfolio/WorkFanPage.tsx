import CardFanCarousel from "@/components/ui/card-fan-carousel";
import Link from "next/link";
import { portfolioProjects } from "./projectData";

const fanOrder = ["furniture-landscapes", "vintage-barbershop", "beans-place", "professional-cleaning", "lumen-festival"];
const fanCards = fanOrder.map((slug) => portfolioProjects.find((project) => project.slug === slug)).filter((project): project is (typeof portfolioProjects)[number] => Boolean(project)).map((project) => ({
  imgUrl: project.image,
  alt: project.imageAlt,
  label: project.title,
  linkUrl: `/work/${project.slug}`,
  imageFit: "cover" as const,
}));

export default function PortfolioWorkFanPage() {
  return <main className="mt-[88px] flex h-[calc(100svh-88px)] flex-col overflow-hidden bg-[#e2e8f2]/80 px-4 py-4 sm:px-8 md:mt-[120px] md:h-[calc(100svh-120px)] lg:px-[60px]">
    <header className="mx-auto flex w-full max-w-[1320px] shrink-0 items-end justify-between gap-5 pb-2">
      <div><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#607795]">Portfolio · 2026</p><h1 className="mt-1 text-3xl font-semibold tracking-[-0.04em] text-[#111] sm:text-4xl">From Concept to Experience</h1></div>
      <div className="flex items-center gap-4"><p className="hidden max-w-md text-right text-sm leading-6 text-slate-600 lg:block">Explore each project through the interactive collection, or switch views for more detail at a glance.</p><Link href="/work/classic" className="shrink-0 rounded-full border border-[#405671]/20 bg-white/65 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#405671] transition hover:bg-white">Classic layout</Link></div>
    </header>
    <div className="flex min-h-0 flex-1 items-center"><CardFanCarousel cards={fanCards}/></div>
  </main>;
}
