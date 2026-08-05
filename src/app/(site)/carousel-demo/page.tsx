import CardFanCarousel from "@/components/ui/card-fan-carousel";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Card Fan Experiment | Jacob Bernard" };
const cards = [
  { imgUrl: "/images/portfolio/beans/home-preview-tall.png", alt: "The Bean's Place", label: "The Bean's Place", linkUrl: "/work/beans-place" },
  { imgUrl: "/images/portfolio/barber/site-preview-tall.png", alt: "Vintage Barbershop", label: "Vintage Barbershop", linkUrl: "/work/vintage-barbershop" },
  { imgUrl: "/images/portfolio/cleaning-a.png", alt: "Clearline precision", label: "Clearline Services", linkUrl: "/work/professional-cleaning" },
  { imgUrl: "/images/portfolio/festival-hero.png", alt: "Lumen Stage", label: "Lumen Stage", linkUrl: "/work/lumen-festival" },
];
export default function CarouselDemoPage() { return <main className="mt-[88px] flex h-[calc(100svh-88px)] flex-col overflow-hidden bg-[#e2e8f2]/80 px-4 py-5 md:mt-[120px] md:h-[calc(100svh-120px)]"><header className="mx-auto w-full max-w-5xl shrink-0 text-center"><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#607795]">Interaction study</p><h1 className="mt-2 text-3xl font-semibold tracking-[-0.045em] text-[#111] sm:text-4xl">From Concept to Experience</h1><p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-slate-600">Hover to explore the fan. Use the controls to cycle, or select a card to open its case study.</p></header><div className="flex min-h-0 flex-1 items-center"><CardFanCarousel cards={cards}/></div></main>; }
