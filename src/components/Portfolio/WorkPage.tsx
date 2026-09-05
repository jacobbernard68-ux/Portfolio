'use client';

import ThemeAwareProjectImage from './ThemeAwareProjectImage';
import Link from 'next/link';
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from 'react';
import type {
  KeyboardEvent as ReactKeyboardEvent,
  MouseEvent as ReactMouseEvent,
  PointerEvent as ReactPointerEvent,
} from 'react';
import { portfolioProjects, responsiveProjectOrder } from './projectData';
import { setWorkLayoutPreference } from './workLayoutPreference';

const classicOrder = [
  'furniture-landscapes',
  'beans-place',
  'backend-data-systems',
  'vintage-barbershop',
  'lumen-festival',
  'professional-cleaning',
];
const carouselViewportQuery = '(min-width: 48rem) and (max-width: 74.999rem)';
const subscribeToCarouselViewport = (onChange: () => void) => {
  const media = window.matchMedia(carouselViewportQuery);
  media.addEventListener('change', onChange);
  return () => media.removeEventListener('change', onChange);
};
const getCarouselViewportSnapshot = () =>
  window.matchMedia(carouselViewportQuery).matches;
const classicThemeBySlug: Record<string, 'dark' | 'light'> = {
  'furniture-landscapes': 'dark',
  'beans-place': 'light',
  'backend-data-systems': 'dark',
  'vintage-barbershop': 'light',
  'lumen-festival': 'dark',
  'professional-cleaning': 'light',
};
const responsiveThemeBySlug: Record<string, 'dark' | 'light'> = {
  'beans-place': 'light',
  'vintage-barbershop': 'dark',
  'backend-data-systems': 'light',
  'furniture-landscapes': 'dark',
  'professional-cleaning': 'light',
  'lumen-festival': 'dark',
};
const classicProjects = classicOrder
  .map((slug) => portfolioProjects.find((project) => project.slug === slug))
  .filter((project): project is (typeof portfolioProjects)[number] =>
    Boolean(project),
  )
  .map((project, index) => ({
    ...project,
    number: String(index + 1).padStart(2, '0'),
    dark: classicThemeBySlug[project.slug] === 'dark',
  }));
const responsiveProjects = responsiveProjectOrder
  .map((slug) => portfolioProjects.find((project) => project.slug === slug))
  .filter((project): project is (typeof portfolioProjects)[number] =>
    Boolean(project),
  )
  .map((project, index) => ({
    ...project,
    number: String(index + 1).padStart(2, '0'),
    dark: responsiveThemeBySlug[project.slug] === 'dark',
  }));

export default function PortfolioWorkPage({
  embedded = false,
  showFanOption = true,
  rememberLayout = false,
}: {
  embedded?: boolean;
  showFanOption?: boolean;
  rememberLayout?: boolean;
}) {
  const carouselViewport = useSyncExternalStore(
    subscribeToCarouselViewport,
    getCarouselViewportSnapshot,
    () => false,
  );
  const carouselRef = useRef<HTMLElement>(null);
  const carouselAnimationRef = useRef<number | null>(null);
  const holdDelayRef = useRef<number | null>(null);
  const holdAnimationRef = useRef<number | null>(null);
  const pressWasHoldRef = useRef(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    if (rememberLayout) setWorkLayoutPreference('classic');
  }, [rememberLayout]);

  const updateCarouselControls = useCallback(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const edgeTolerance = 2;
    setCanScrollLeft(carousel.scrollLeft > edgeTolerance);
    setCanScrollRight(
      carousel.scrollLeft + carousel.clientWidth <
        carousel.scrollWidth - edgeTolerance,
    );
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const handleWheel = (event: WheelEvent) => {
      const compactCarousel = window.matchMedia(
        '(min-width: 48rem) and (max-width: 74.999rem)',
      ).matches;
      if (!compactCarousel || Math.abs(event.deltaX) >= Math.abs(event.deltaY))
        return;

      const movingRight = event.deltaY > 0;
      const atLeft = carousel.scrollLeft <= 2;
      const atRight =
        carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 2;
      if ((movingRight && atRight) || (!movingRight && atLeft)) return;

      event.preventDefault();
      if (carouselAnimationRef.current !== null) {
        window.cancelAnimationFrame(carouselAnimationRef.current);
        carouselAnimationRef.current = null;
      }
      const wheelAmount =
        Math.abs(event.deltaY) < 40
          ? event.deltaY * 0.9
          : Math.sign(event.deltaY) *
            Math.min(Math.abs(event.deltaY) * 0.65, 80);
      const maximum = carousel.scrollWidth - carousel.clientWidth;
      carousel.scrollLeft = Math.max(
        0,
        Math.min(carousel.scrollLeft + wheelAmount, maximum),
      );
    };

    updateCarouselControls();
    const layoutFrame = window.requestAnimationFrame(updateCarouselControls);
    carousel.addEventListener('scroll', updateCarouselControls, {
      passive: true,
    });
    carousel.addEventListener('wheel', handleWheel, { passive: false });
    const observer = new ResizeObserver(updateCarouselControls);
    observer.observe(carousel);
    window.addEventListener('resize', updateCarouselControls, {
      passive: true,
    });
    return () => {
      window.cancelAnimationFrame(layoutFrame);
      carousel.removeEventListener('scroll', updateCarouselControls);
      carousel.removeEventListener('wheel', handleWheel);
      observer.disconnect();
      window.removeEventListener('resize', updateCarouselControls);
      if (carouselAnimationRef.current !== null)
        window.cancelAnimationFrame(carouselAnimationRef.current);
      if (holdDelayRef.current !== null)
        window.clearTimeout(holdDelayRef.current);
      if (holdAnimationRef.current !== null)
        window.cancelAnimationFrame(holdAnimationRef.current);
    };
  }, [embedded, updateCarouselControls]);

  const scrollCarousel = (direction: -1 | 1) => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    if (carouselAnimationRef.current !== null)
      window.cancelAnimationFrame(carouselAnimationRef.current);

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    const start = carousel.scrollLeft;
    const cards = carousel.querySelectorAll<HTMLElement>(':scope > article');
    const cardStep =
      cards.length > 1
        ? Math.abs(cards[1].offsetLeft - cards[0].offsetLeft)
        : carousel.clientWidth * 0.82;
    const target = Math.max(
      0,
      Math.min(
        start + direction * cardStep,
        carousel.scrollWidth - carousel.clientWidth,
      ),
    );
    if (reduceMotion) {
      carousel.scrollLeft = target;
      return;
    }

    const startedAt = performance.now();
    const duration = 480;
    const animate = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      carousel.scrollLeft = start + (target - start) * eased;
      if (progress < 1) {
        carouselAnimationRef.current = window.requestAnimationFrame(animate);
      } else {
        carouselAnimationRef.current = null;
      }
    };
    carouselAnimationRef.current = window.requestAnimationFrame(animate);
  };

  const startHoldingCarousel = (direction: -1 | 1) => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    pressWasHoldRef.current = false;
    holdDelayRef.current = window.setTimeout(() => {
      pressWasHoldRef.current = true;
      if (carouselAnimationRef.current !== null) {
        window.cancelAnimationFrame(carouselAnimationRef.current);
        carouselAnimationRef.current = null;
      }
      let previousTime = performance.now();
      const moveContinuously = (now: number) => {
        const elapsed = Math.min(now - previousTime, 32);
        previousTime = now;
        const nextPosition = Math.max(
          0,
          Math.min(
            carousel.scrollLeft + direction * elapsed * 0.34,
            carousel.scrollWidth - carousel.clientWidth,
          ),
        );
        if (Math.abs(nextPosition - carousel.scrollLeft) < 0.1) {
          holdAnimationRef.current = null;
          return;
        }
        carousel.scrollLeft = nextPosition;
        holdAnimationRef.current =
          window.requestAnimationFrame(moveContinuously);
      };
      holdAnimationRef.current = window.requestAnimationFrame(moveContinuously);
    }, 220);
  };

  const stopHoldingCarousel = () => {
    if (holdDelayRef.current !== null) {
      window.clearTimeout(holdDelayRef.current);
      holdDelayRef.current = null;
    }
    if (holdAnimationRef.current !== null) {
      window.cancelAnimationFrame(holdAnimationRef.current);
      holdAnimationRef.current = null;
    }
  };

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
      data-mobile-section-theme={embedded ? 'light' : undefined}
      className={`${embedded ? 'scroll-mt-[var(--site-header-height)] md:scroll-mt-[var(--site-header-height-wide)] lg:h-auto' : 'work-viewport-page work-classic-page viewport-page'} page-gutters flex flex-col bg-[#e2e8f2]/80 lg:overflow-hidden`}
    >
      <header className='relative z-[100] mx-auto mb-[clamp(0.625rem,1.5svh,1rem)] flex w-full max-w-[var(--content-max)] shrink-0 items-center justify-between gap-[var(--fluid-section-gap)] overflow-visible rounded-[var(--fluid-radius)] border border-[#405671]/10 bg-white/45 px-[clamp(1rem,2vw,1.5rem)] py-[clamp(0.65rem,1.4vh,0.75rem)]'>
        <div>
          <p className='text-[10px] font-bold tracking-[0.2em] text-[#607795] uppercase'>
            Broader portfolio · 2026
          </p>
          <h1 className='mt-1 text-[clamp(1.05rem,5.25vw,1.5rem)] font-semibold tracking-[-0.04em] whitespace-nowrap text-[#111] sm:text-[clamp(1.875rem,3.5vw,2.5rem)] sm:whitespace-normal md:text-[clamp(1.25rem,2.5vw,1.75rem)] md:whitespace-nowrap xl:text-[clamp(1.875rem,3.5vw,2.5rem)] xl:whitespace-normal'>
            All Projects
          </h1>
        </div>
        {!embedded && showFanOption && (
          <div className='flex items-center gap-4'>
            <p className='hidden max-w-[360px] text-right text-sm leading-6 text-slate-600 md:block xl:max-w-[480px]'>
              Explore a broader curated collection of portfolio-worthy work
              across design and development.
            </p>
            <span className='relative hidden shrink-0 lg:inline-flex'>
              <Link
                href='/work?layout=fan'
                onClick={() => setWorkLayoutPreference('fan')}
                className='inline-flex rounded-full border border-[#405671]/25 bg-[#c7d2de] px-4 py-2 text-[10px] font-bold tracking-[0.14em] text-[#2f3e5c] uppercase transition hover:bg-[#b8cadc] focus-visible:ring-2 focus-visible:ring-[#607795] focus-visible:ring-offset-2 focus-visible:outline-none'
              >
                View Featured Work
              </Link>
            </span>
          </div>
        )}
      </header>
      <div
        className={`work-classic-stage relative min-h-0 w-full flex-1 ${embedded ? 'work-classic-stage--embedded' : 'mx-auto max-w-[var(--content-max)]'}`}
      >
        <section
          ref={carouselRef}
          aria-label='Broader selected project collection'
          className={`${embedded ? 'grid-cols-1 sm:grid-cols-2' : 'h-full grid-cols-1'} work-classic-grid grid min-h-0 gap-[clamp(0.625rem,min(1.25vw,1.5svh),1rem)]`}
        >
          {(embedded || carouselViewport
            ? responsiveProjects
            : classicProjects
          ).map((project) => (
            <article
              id={`project-${project.slug}`}
              key={project.title}
              role='link'
              tabIndex={0}
              aria-label={`Open ${project.title} case study`}
              data-card-theme={project.dark ? 'dark' : 'light'}
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
              <div className='work-card-preview relative min-h-[clamp(8.75rem,18vw,11.25rem)] shrink-0 overflow-hidden bg-[#afc2d5] xl:aspect-square'>
                <ThemeAwareProjectImage
                  lightSrc={project.image}
                  darkSrc={project.darkImage}
                  alt={project.imageAlt}
                  fill
                  sizes='(max-width: 767px) 88vw, (max-width: 1279px) 50vw, 25vw'
                  className={`object-cover object-top transition duration-700 ${project.slug === 'professional-cleaning' ? 'scale-[1.025] group-hover:scale-[1.045]' : 'group-hover:scale-[1.025]'}`}
                />
                <span className='absolute top-4 left-4 rounded-full border border-white/15 bg-[#1f2937]/90 px-3 py-1.5 text-[10px] font-bold tracking-[0.15em] text-white shadow-[0_5px_16px_rgba(15,23,42,0.22)] backdrop-blur-md'>
                  {project.number}
                </span>
              </div>
              <div
                data-internal-scroll
                className='work-card-body no-scrollbar min-h-0 p-4'
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
                      className={`rounded-full px-[clamp(0.45rem,1vw,0.625rem)] py-[clamp(0.2rem,0.6vh,0.25rem)] [font-size:clamp(0.5rem,1.5vw,0.625rem)]! leading-[1.25] font-semibold whitespace-nowrap ${project.dark ? 'bg-white/8 text-white/65' : 'bg-[#e2e8f2] text-[#405671]'}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div
                className={`pointer-events-none relative z-20 mt-auto grid shrink-0 grid-cols-1 items-center gap-1.5 border-t px-4 py-3 2xl:grid-cols-[auto_auto] 2xl:justify-between 2xl:gap-3 ${project.dark ? 'border-white/10 bg-[#1f2937]' : 'border-[#405671]/10 bg-[#f2f4f7]'}`}
              >
                <Link
                  href={`/work/${project.slug}?from=${embedded ? 'mobile' : 'classic'}&project=${project.slug}`}
                  className={`work-card-case-link pointer-events-auto inline-flex items-center gap-1.5 text-[9px] font-bold tracking-[0.12em] whitespace-nowrap uppercase ${project.dark ? 'text-[#b8cadc] hover:text-white' : 'text-[#405671] hover:text-[#111]'}`}
                >
                  Case study <span aria-hidden='true'>→</span>
                </Link>
                {project.liveHref && (
                  <Link
                    href={
                      embedded
                        ? `${project.liveHref}${project.liveHref.includes('?') ? '&' : '?'}portfolioReturn=mobile&project=${project.slug}`
                        : project.liveHref
                    }
                    className={`work-card-live-link pointer-events-auto inline-flex items-center gap-1.5 justify-self-start text-left text-[9px] font-bold tracking-[0.12em] whitespace-nowrap uppercase 2xl:justify-self-end 2xl:text-right ${project.dark ? 'text-white hover:text-[#b8cadc]' : 'text-[#111] hover:text-[#405671]'}`}
                  >
                    {project.liveLabel ?? 'Open project'}{' '}
                    <span aria-hidden='true'>↗</span>
                  </Link>
                )}
              </div>
            </article>
          ))}
        </section>
        {canScrollLeft && (
          <button
            type='button'
            onClick={(event) => {
              if (pressWasHoldRef.current && event.detail > 0) {
                pressWasHoldRef.current = false;
                return;
              }
              pressWasHoldRef.current = false;
              scrollCarousel(-1);
            }}
            onPointerDown={() => startHoldingCarousel(-1)}
            onPointerUp={stopHoldingCarousel}
            onPointerCancel={stopHoldingCarousel}
            onPointerLeave={stopHoldingCarousel}
            aria-label='Scroll projects left'
            className='work-carousel-control absolute top-1/2 left-2 z-[300] size-11 -translate-y-1/2 place-items-center rounded-full border border-[#405671]/15 bg-white text-xl text-[#2f3e5c] shadow-[0_12px_35px_rgba(31,41,55,0.28)] transition hover:scale-105 hover:bg-[#f2f4f7] focus-visible:ring-2 focus-visible:ring-[#607795] focus-visible:ring-offset-2 focus-visible:outline-none'
          >
            <span aria-hidden='true'>←</span>
          </button>
        )}
        {canScrollRight && (
          <button
            type='button'
            onClick={(event) => {
              if (pressWasHoldRef.current && event.detail > 0) {
                pressWasHoldRef.current = false;
                return;
              }
              pressWasHoldRef.current = false;
              scrollCarousel(1);
            }}
            onPointerDown={() => startHoldingCarousel(1)}
            onPointerUp={stopHoldingCarousel}
            onPointerCancel={stopHoldingCarousel}
            onPointerLeave={stopHoldingCarousel}
            aria-label='Scroll projects right'
            className='work-carousel-control absolute top-1/2 right-2 z-[300] size-11 -translate-y-1/2 place-items-center rounded-full border border-[#405671]/15 bg-white text-xl text-[#2f3e5c] shadow-[0_12px_35px_rgba(31,41,55,0.28)] transition hover:scale-105 hover:bg-[#f2f4f7] focus-visible:ring-2 focus-visible:ring-[#607795] focus-visible:ring-offset-2 focus-visible:outline-none'
          >
            <span aria-hidden='true'>→</span>
          </button>
        )}
      </div>
    </main>
  );
}
