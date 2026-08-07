'use client';

import Image from 'next/image';
import Link from 'next/link';
import type {
  KeyboardEvent as ReactKeyboardEvent,
  MouseEvent as ReactMouseEvent,
  PointerEvent as ReactPointerEvent,
} from 'react';
import { portfolioProjects } from './projectData';

const classicOrder = [
  'furniture-landscapes',
  'vintage-barbershop',
  'beans-place',
  'professional-cleaning',
  'lumen-festival',
];
const classicProjects = classicOrder
  .map((slug) => portfolioProjects.find((project) => project.slug === slug))
  .filter((project): project is (typeof portfolioProjects)[number] =>
    Boolean(project),
  )
  .map((project, index) => ({
    ...project,
    number: String(index + 1).padStart(2, '0'),
    dark: index % 2 === 0,
  }));

export default function PortfolioWorkPage({
  embedded = false,
}: {
  embedded?: boolean;
}) {
  const trackCard = (event: ReactPointerEvent<HTMLElement>) => {
    const card = event.currentTarget;
    const bounds = card.getBoundingClientRect();
    card.style.setProperty(
      '--card-cursor-x',
      `${event.clientX - bounds.left}px`,
    );
    card.style.setProperty(
      '--card-cursor-y',
      `${event.clientY - bounds.top}px`,
    );
    card.setAttribute('data-cursor-active', 'true');
  };

  const openConcept = (event: ReactMouseEvent<HTMLElement>, href?: string) => {
    if (!href || (event.target as HTMLElement).closest('a')) return;
    window.location.assign(href);
  };

  const openConceptWithKeyboard = (
    event: ReactKeyboardEvent<HTMLElement>,
    href?: string,
  ) => {
    if (!href || (event.key !== 'Enter' && event.key !== ' ')) return;
    event.preventDefault();
    window.location.assign(href);
  };

  return (
    <main
      id={embedded ? 'work' : undefined}
      className={`${embedded ? 'scroll-mt-[var(--site-header-height)] md:scroll-mt-[var(--site-header-height-wide)] lg:h-auto' : 'viewport-page'} page-gutters flex flex-col bg-[#e2e8f2]/80 lg:overflow-hidden`}
    >
      <header className='flex shrink-0 items-end justify-between gap-6 pb-4'>
        <div>
          <p className='text-[10px] font-bold tracking-[0.2em] text-[#607795] uppercase'>
            Portfolio · 2026
          </p>
          <h1 className='mt-1 text-[clamp(1.875rem,3.5vw,2.5rem)] font-semibold tracking-[-0.04em] text-[#111]'>
            From Concept to Experience
          </h1>
        </div>
        {!embedded && (
          <div className='flex items-center gap-4'>
            <p className='hidden max-w-[480px] text-right text-sm leading-6 text-slate-600 md:block'>
              Review the project details here, or switch to the interactive
              collection for a more visual experience.
            </p>
            <Link
              href='/work'
              className='shrink-0 rounded-full border border-[#405671]/20 bg-white/65 px-4 py-2 text-[10px] font-bold tracking-[0.14em] text-[#405671] uppercase transition hover:bg-white'
            >
              Fan layout
            </Link>
          </div>
        )}
      </header>
      <section
        aria-label='Selected projects'
        className='grid min-h-0 flex-1 grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-rows-2 lg:overflow-hidden xl:grid-cols-5 xl:grid-rows-1'
      >
        {classicProjects.map((project) => (
          <article
            id={`project-${project.slug}`}
            key={project.title}
            role='link'
            tabIndex={0}
            aria-label={`Open ${project.title} case study`}
            data-cursor-reactive={project.dark ? 'dark' : 'light'}
            onClick={(event) =>
              openConcept(
                event,
                `/work/${project.slug}?from=${embedded ? 'mobile' : 'classic'}&project=${project.slug}`,
              )
            }
            onKeyDown={(event) =>
              openConceptWithKeyboard(
                event,
                `/work/${project.slug}?from=${embedded ? 'mobile' : 'classic'}&project=${project.slug}`,
              )
            }
            onPointerMove={trackCard}
            onPointerLeave={(event) =>
              event.currentTarget.removeAttribute('data-cursor-active')
            }
            className={`group relative flex min-h-0 cursor-pointer snap-center flex-col overflow-hidden rounded-2xl shadow-[0_12px_35px_rgba(31,41,55,0.10)] ring-1 ring-[#2f3e5c]/8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#86a6c8] ${project.dark ? 'bg-[#1f2937] text-white' : 'bg-[#f2f4f7] text-[#111]'}`}
          >
            <div className='relative aspect-[16/10] min-h-[clamp(8.75rem,18vw,11.25rem)] shrink-0 overflow-hidden bg-[#afc2d5] xl:aspect-square'>
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                sizes='(max-width: 767px) 88vw, (max-width: 1279px) 50vw, 25vw'
                className='object-cover object-top transition duration-700 group-hover:scale-[1.025]'
              />
              <span
                className={`absolute top-4 left-4 rounded-full px-3 py-1.5 text-[10px] font-bold tracking-[0.15em] backdrop-blur-md ${project.dark ? 'bg-[#1f2937]/85 text-white' : 'bg-white/85 text-[#1f2937]'}`}
              >
                {project.number}
              </span>
            </div>
            <div
              data-internal-scroll
              className='no-scrollbar min-h-0 flex-1 overflow-y-auto p-4 xl:overflow-hidden'
            >
              <p
                className={`text-[8px] font-bold tracking-[0.15em] uppercase ${project.dark ? 'text-[#b8cadc]' : 'text-[#607795]'}`}
              >
                {project.type}
              </p>
              <h2
                className={`mt-2 text-xl leading-[1.08] font-semibold tracking-[-0.035em] ${project.dark ? 'text-[#b8cadc]' : 'text-[#111]'}`}
              >
                {project.title}
              </h2>
              <p
                className={`mt-2 text-[11px] leading-[1.55] ${project.dark ? 'text-white/65' : 'text-slate-600'}`}
              >
                {project.summary}
              </p>
              <div className='mt-3 flex flex-wrap gap-1.5'>
                {project.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`rounded-full px-2.5 py-1 text-[8px] font-semibold ${project.dark ? 'bg-white/8 text-white/65' : 'bg-[#e2e8f2] text-[#405671]'}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div
              className={`pointer-events-none relative z-20 flex shrink-0 flex-wrap gap-x-4 gap-y-1.5 border-t px-4 py-3 ${project.dark ? 'border-white/10 bg-[#1f2937]' : 'border-[#405671]/10 bg-[#f2f4f7]'}`}
            >
              <Link
                href={`/work/${project.slug}?from=${embedded ? 'mobile' : 'classic'}&project=${project.slug}`}
                className={`pointer-events-auto inline-flex items-center gap-1.5 text-[9px] font-bold tracking-[0.12em] uppercase ${project.dark ? 'text-[#b8cadc] hover:text-white' : 'text-[#405671] hover:text-[#111]'}`}
              >
                Case study <span aria-hidden='true'>→</span>
              </Link>
              <span
                className={`inline-flex items-center gap-1.5 text-[9px] font-bold tracking-[0.12em] uppercase ${project.dark ? 'text-white' : 'text-[#111]'}`}
              >
                {project.liveLabel ?? 'Open project'}{' '}
                <span aria-hidden='true'>↗</span>
              </span>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
