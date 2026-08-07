import CardFanCarousel from '@/components/ui/card-fan-carousel';
import Link from 'next/link';
import { portfolioProjects } from './projectData';

const fanOrder = [
  'furniture-landscapes',
  'vintage-barbershop',
  'beans-place',
  'professional-cleaning',
  'lumen-festival',
];
const fanDescriptions: Record<string, string> = {
  'furniture-landscapes':
    'An immersive media landing page demonstrating atmospheric storytelling and responsive service discovery.',
  'vintage-barbershop':
    'A character-rich booking site demonstrating practical interaction within a distinctive local brand.',
  'beans-place':
    'A conservation-led coffee storefront demonstrating clear product discovery and persistent cart behavior.',
  'professional-cleaning':
    'A focused service experience demonstrating how a restrained visual system can guide conversion.',
  'lumen-festival':
    'An editorial festival experience demonstrating responsive pacing, controlled color, and narrative energy.',
};
const fanCards = fanOrder
  .map((slug) => portfolioProjects.find((project) => project.slug === slug))
  .filter((project): project is (typeof portfolioProjects)[number] =>
    Boolean(project),
  )
  .map((project) => ({
    imgUrl: project.image,
    alt: project.imageAlt,
    label: project.title,
    linkUrl: `/work/${project.slug}?from=fan&project=${project.slug}`,
    description: fanDescriptions[project.slug],
    imageFit: 'cover' as const,
  }));

export default function PortfolioWorkFanPage() {
  return (
    <main className='viewport-page page-gutters flex flex-col bg-[#e2e8f2]/80 lg:h-auto'>
      <header className='mx-auto flex w-full max-w-[var(--content-max)] shrink-0 flex-wrap items-center justify-between gap-[var(--fluid-section-gap)] rounded-[var(--fluid-radius)] border border-[#405671]/10 bg-white/45 px-[clamp(1rem,2vw,1.5rem)] py-[clamp(0.65rem,1.4vh,0.75rem)]'>
        <div>
          <p className='text-[10px] font-bold tracking-[0.2em] text-[#607795] uppercase'>
            Portfolio · 2026
          </p>
          <h1 className='mt-1 text-[clamp(1.7rem,3.5vw,2.5rem)] font-semibold tracking-[-0.04em] text-[#111]'>
            From Concept to Experience
          </h1>
          <p className='mt-1 max-w-xl text-sm leading-5 text-slate-600'>
            This fan brings the portfolio into one visual collection: choose a
            card to see how each concept became a working experience.
          </p>
        </div>
        <div className='flex items-center gap-4'>
          <Link
            href='/work/classic'
            className='shrink-0 rounded-full border border-[#405671]/20 bg-white/65 px-4 py-2 text-[10px] font-bold tracking-[0.14em] text-[#405671] uppercase transition hover:bg-white'
          >
            Classic layout
          </Link>
        </div>
      </header>
      <div className='fan-header-docked flex min-h-0 items-start'>
        <CardFanCarousel cards={fanCards} />
      </div>
    </main>
  );
}
