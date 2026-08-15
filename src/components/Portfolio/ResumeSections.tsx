'use client';

import Image from 'next/image';
import {
  type PointerEvent as ReactPointerEvent,
  useEffect,
  useRef,
  useState,
} from 'react';
import { createPortal } from 'react-dom';

type Section = {
  id: string;
  title: string;
  label: string;
  preview: string;
  content: { heading: string; meta?: string; body: string }[];
};

const badges = [
  {
    name: 'HTML and CSS Web Designer badge',
    image: '/images/badges/html-css.png',
    alignment: '',
  },
  {
    name: 'JavaScript Professional Developer badge',
    image: '/images/badges/javascript.png',
    alignment: 'translate-y-2',
  },
];

const modalSectionTopPadding = 8;

const sections: Section[] = [
  {
    id: 'summary',
    title: 'Professional summary',
    label: 'Profile',
    preview:
      'Frontend developer and UI designer combining enterprise systems experience with thoughtful, user-focused design.',
    content: [
      {
        heading: 'Frontend Developer · UI Designer',
        body: 'Frontend Developer and UI Designer with 15 years of enterprise IT experience and a passion for building responsive, user-focused web applications. Skilled in HTML, CSS, JavaScript, React, and Figma, with experience creating modern interfaces that emphasize usability, accessibility, and maintainable code. I combine technical problem-solving with thoughtful design to create intuitive digital experiences.',
      },
    ],
  },
  {
    id: 'experience',
    title: 'Experience',
    label: '16 years',
    preview:
      'Enterprise systems, web platforms, Linux operations, automation, and technical support across five progressive roles.',
    content: [
      {
        heading: 'Defense Intelligence Agency',
        meta: 'Data Systems & IT Operations Manager · May 2021–July 2026',
        body: 'Supported high-availability enterprise systems, improved workflows, managed hardware lifecycle processes, and translated complex technical issues across multidisciplinary teams.',
      },
      {
        heading: '1st Information Operations Battalion',
        meta: 'Senior IT Specialist · Oct 2018–May 2021',
        body: 'Supported Linux-based operational systems, created Python automation, coordinated maintenance, and maintained platform reliability.',
      },
      {
        heading: '21st Theater Sustainment Command',
        meta: 'IT Specialist, Web Platforms · Aug 2015–Oct 2018',
        body: 'Developed internal web platforms, improved navigation and information architecture, and created interface improvements adopted at higher organizational levels.',
      },
      {
        heading: '51st Expeditionary Signal Battalion',
        meta: 'Information Technology Specialist · Mar 2013–Aug 2015',
        body: 'Developed internal websites, strengthened organizational communication, and supported enterprise IT infrastructure.',
      },
      {
        heading: '716th Military Police Battalion',
        meta: 'IT Support Technician · Mar 2011–Mar 2013',
        body: 'Provided end-user support, maintained hardware and software, and resolved technical issues.',
      },
    ],
  },
  {
    id: 'skills',
    title: 'Technical skills',
    label: 'Toolkit',
    preview:
      'React, JavaScript, responsive CSS, Figma, accessibility, Git, Linux, Python, and enterprise troubleshooting.',
    content: [
      {
        heading: 'Frontend',
        body: 'HTML5, CSS3, JavaScript (ES6+), React, JSX, responsive web design, component-based architecture, Context API, state management, DOM manipulation, and Fetch API.',
      },
      {
        heading: 'UI / UX',
        body: 'Figma, wireframing, typography, visual hierarchy, accessibility (WCAG), and information architecture.',
      },
      { heading: 'Tools', body: 'Git, GitHub, VS Code, and Chrome DevTools.' },
      {
        heading: 'Additional',
        body: 'Linux, Python, enterprise IT, technical troubleshooting, and process improvement.',
      },
    ],
  },
  {
    id: 'projects',
    title: 'Projects',
    label: 'Selected work',
    preview:
      'A React coffee shop, JavaScript barbershop, personal portfolio, and a complete Figma interface concept.',
    content: [
      {
        heading: 'The Bean’s Place',
        meta: 'React',
        body: 'Responsive coffee shop application featuring reusable components, Context API shopping-cart state, interactive UI, and modern React practices.',
      },
      {
        heading: 'The Classic Cut',
        meta: 'HTML · CSS · JavaScript',
        body: 'Modern barbershop website demonstrating responsive layouts, DOM manipulation, event-driven interaction, semantic HTML, CSS Grid, Flexbox, and a mobile-first approach.',
      },
      {
        heading: 'Personal Portfolio',
        meta: 'React',
        body: 'A responsive portfolio showcasing frontend projects, UI case studies, and technical experience through a consistent design system.',
      },
      {
        heading: 'UI Design Concept',
        meta: 'Figma',
        body: 'A complete website interface emphasizing typography, layout systems, visual hierarchy, and responsive user experience.',
      },
    ],
  },
  {
    id: 'training',
    title: 'Technical training',
    label: 'Development',
    preview:
      'Hands-on study across semantic HTML, modern CSS, JavaScript, React, APIs, accessibility, and application architecture.',
    content: [
      {
        heading: 'HTML & CSS',
        body: 'Semantic HTML, responsive design, Flexbox, CSS Grid, accessibility, forms, and animations.',
      },
      {
        heading: 'JavaScript',
        body: 'ES6+, DOM manipulation, event handling, Fetch API, asynchronous programming, objects, and arrays.',
      },
      {
        heading: 'React',
        body: 'Components, JSX, props, state, hooks, Context API, routing, and component composition.',
      },
    ],
  },
  {
    id: 'strengths',
    title: 'Core strengths',
    label: 'Approach',
    preview:
      'Problem solving, technical communication, collaboration, continuous learning, and close attention to detail.',
    content: [
      {
        heading: 'How I work',
        body: 'Frontend development, UI design, problem solving, technical communication, cross-functional collaboration, continuous learning, and attention to detail. My approach brings structure to complexity and keeps the user’s path clear.',
      },
    ],
  },
];

export default function ResumeSections({
  compact = false,
  alternating = false,
}: {
  compact?: boolean;
  alternating?: boolean;
}) {
  const [active, setActive] = useState<Section | null>(null);
  const [visibleSectionId, setVisibleSectionId] = useState(sections[0].id);
  const closeButton = useRef<HTMLButtonElement>(null);
  const modalScroll = useRef<HTMLDivElement>(null);
  const modalNav = useRef<HTMLElement>(null);
  const sectionElements = useRef<Record<string, HTMLElement | null>>({});

  const trackGlow = (event: ReactPointerEvent<HTMLElement>) => {
    const card = event.currentTarget;
    const bounds = card.getBoundingClientRect();
    const localX = event.clientX - bounds.left;
    const localY = event.clientY - bounds.top;
    const horizontal = (localX / bounds.width) * 2 - 1;
    const vertical = (localY / bounds.height) * 2 - 1;
    card.style.setProperty('--card-cursor-x', `${localX}px`);
    card.style.setProperty('--card-cursor-y', `${localY}px`);
    card.style.transform = `perspective(900px) rotateX(${-vertical * 2.5}deg) rotateY(${horizontal * 2.5}deg)`;
    card.style.scale = '1.003';
    card.style.boxShadow = `${-horizontal * 4}px ${-vertical * 4 + 8}px 26px rgba(15, 23, 42, 0.18)`;
    card.setAttribute('data-cursor-active', 'true');
  };

  const hideGlow = (event: ReactPointerEvent<HTMLElement>) => {
    const card = event.currentTarget;
    card.removeAttribute('data-cursor-active');
    card.style.removeProperty('transform');
    card.style.removeProperty('scale');
    card.style.removeProperty('box-shadow');
  };

  useEffect(() => {
    if (!active) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButton.current?.focus();
    const positionFrame = window.requestAnimationFrame(() => {
      const container = modalScroll.current;
      const section = sectionElements.current[active.id];
      if (!container || !section) return;
      container.scrollTop = Math.max(
        0,
        section.offsetTop -
          (modalNav.current?.offsetHeight ?? 0) -
          modalSectionTopPadding,
      );
    });
    const close = (event: KeyboardEvent) =>
      event.key === 'Escape' && setActive(null);
    window.addEventListener('keydown', close);
    return () => {
      window.cancelAnimationFrame(positionFrame);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', close);
    };
  }, [active]);

  const scrollToSection = (sectionId: string) => {
    const container = modalScroll.current;
    const section = sectionElements.current[sectionId];
    if (!container || !section) return;
    setVisibleSectionId(sectionId);
    container.scrollTo({
      top: Math.max(
        0,
        section.offsetTop -
          (modalNav.current?.offsetHeight ?? 0) -
          modalSectionTopPadding,
      ),
      behavior: 'smooth',
    });
  };

  const trackVisibleSection = () => {
    const container = modalScroll.current;
    if (!container) return;
    const threshold =
      container.getBoundingClientRect().top +
      (modalNav.current?.offsetHeight ?? 0) +
      28;
    let nextSection = sections[0].id;
    for (const section of sections) {
      const element = sectionElements.current[section.id];
      if (element && element.getBoundingClientRect().top <= threshold)
        nextSection = section.id;
    }
    setVisibleSectionId(nextSection);
  };

  return (
    <>
      <div className='grid h-full min-h-0 gap-3 sm:grid-cols-2'>
        {sections.map((section, index) => {
          const cardIsDark = alternating
            ? [0, 3, 4].includes(index)
            : compact
              ? [1, 3, 5].includes(index)
              : [1, 2, 5].includes(index);

          return (
            <button
              key={section.id}
              data-mobile-theme={cardIsDark ? 'dark' : 'light'}
              data-cursor-reactive={cardIsDark ? 'dark' : 'light'}
              onPointerMove={trackGlow}
              onPointerLeave={hideGlow}
              type='button'
              onClick={() => {
                setVisibleSectionId(section.id);
                setActive(section);
              }}
              aria-haspopup='dialog'
              style={compact ? { minHeight: 0, padding: '0.75rem' } : undefined}
              className={`resume-card group relative min-h-[clamp(8rem,18svh,10rem)] overflow-hidden rounded-[var(--fluid-radius)] p-[clamp(0.875rem,min(1.75vw,2svh),1.35rem)] text-left transition hover:shadow-[0_10px_24px_rgba(15,23,42,0.13)] focus-visible:ring-2 focus-visible:ring-[#1f2937] focus-visible:ring-offset-2 focus-visible:outline-none ${cardIsDark ? 'bg-[#1f2937] text-white' : 'bg-[#b8cadc] text-[#111]'}`}
            >
              <div className='flex items-center justify-between gap-3'>
                <span
                  className={`text-[10px] font-semibold tracking-[0.18em] uppercase ${cardIsDark ? 'text-white/55' : 'text-slate-600'}`}
                >
                  {section.label}
                </span>
                <span className='text-xs font-semibold opacity-65'>Open ↗</span>
              </div>
              <h2
                style={
                  compact
                    ? {
                        marginTop: '0.35rem',
                        fontSize: '1rem',
                        lineHeight: 1.2,
                      }
                    : undefined
                }
                className={`mt-3 text-xl font-semibold tracking-[-0.025em] ${cardIsDark ? 'text-[#b8cadc]' : ''}`}
              >
                {section.title}
              </h2>
              <p
                style={
                  compact
                    ? {
                        marginTop: '0.3rem',
                        fontSize: '0.75rem',
                        lineHeight: 1.4,
                      }
                    : undefined
                }
                className={`mt-2 text-xs leading-5 ${cardIsDark ? 'text-white/65' : 'text-slate-700'}`}
              >
                {section.preview}
              </p>
            </button>
          );
        })}
      </div>

      {active &&
        createPortal(
          <div
            data-resume-modal-backdrop
            className='fixed inset-0 z-[10000] flex items-center justify-center bg-[#111827]/65 p-6 backdrop-blur-sm'
            role='presentation'
            onMouseDown={(event) =>
              event.target === event.currentTarget && setActive(null)
            }
          >
            <section
              data-resume-modal
              role='dialog'
              aria-modal='true'
              aria-label='Professional Resume details'
              className='relative max-h-[calc(100svh-clamp(1.5rem,6vh,3rem))] w-full max-w-[min(52.5rem,100%)] overflow-hidden rounded-[var(--fluid-radius)] bg-[#e2e8f2] shadow-2xl'
            >
              <button
                data-resume-modal-close
                ref={closeButton}
                type='button'
                onClick={() => setActive(null)}
                aria-label={`Close ${active.title}`}
                className='absolute top-3 right-3 z-30 grid size-11 place-items-center rounded-full bg-[#1f2937] text-[0] text-white shadow-lg transition hover:bg-black focus-visible:ring-2 focus-visible:ring-[#1f2937] focus-visible:ring-offset-2 focus-visible:outline-none'
              >
                <svg
                  viewBox='0 0 24 24'
                  fill='none'
                  className='size-5'
                  aria-hidden='true'
                >
                  <path
                    d='m7 7 10 10M17 7 7 17'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                  />
                </svg>
              </button>
              <div
                ref={modalScroll}
                onScroll={trackVisibleSection}
                className='max-h-[calc(100svh-clamp(1.5rem,6vh,3rem))] overflow-y-auto'
              >
                <nav
                  ref={modalNav}
                  data-resume-modal-nav
                  aria-label='Resume sections'
                  className='sticky top-0 z-20 border-b border-slate-400/25 bg-[#e2e8f2]/95 px-5 py-3 pr-16 backdrop-blur-md sm:px-8 sm:pr-20'
                >
                  <div className='flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'>
                    {sections.map((section) => (
                      <button
                        key={section.id}
                        type='button'
                        onClick={() => scrollToSection(section.id)}
                        aria-current={
                          visibleSectionId === section.id
                            ? 'location'
                            : undefined
                        }
                        className={`shrink-0 rounded-full px-3 py-2 text-xs font-semibold transition focus-visible:ring-2 focus-visible:ring-[#607795] focus-visible:ring-offset-2 focus-visible:outline-none ${visibleSectionId === section.id ? 'bg-[#1f2937] text-white' : 'bg-[#b8cadc] text-[#1f2937] hover:bg-[#afc2d5]'}`}
                      >
                        {section.title}
                      </button>
                    ))}
                  </div>
                </nav>
                <div
                  data-resume-modal-content
                  className='space-y-6 p-5 sm:space-y-8 sm:p-8'
                >
                  {sections.map((section, sectionIndex) => (
                    <section
                      key={section.id}
                      ref={(element) => {
                        sectionElements.current[section.id] = element;
                      }}
                      data-resume-modal-section={section.id}
                      className='scroll-mt-20 overflow-hidden rounded-2xl border border-[#405671]/15 bg-white/40 shadow-[0_8px_24px_rgba(15,23,42,0.07)]'
                    >
                      <header className='border-b border-[#405671]/15 bg-[#c7d2de] px-5 py-5 sm:px-6'>
                        <p className='text-xs font-bold tracking-[0.2em] text-[#526985] uppercase'>
                          {section.label}
                        </p>
                        <h2 className='mt-2 text-2xl font-semibold tracking-[-0.035em] text-[#111] sm:text-3xl'>
                          {section.title}
                        </h2>
                        <p className='mt-2 max-w-2xl text-sm leading-6 text-slate-700'>
                          {section.preview}
                        </p>
                      </header>
                      <div className='space-y-3 p-4 sm:p-5'>
                        {section.content.map((item, index) => {
                          const cardIsDark = [1, 2, 5].includes(sectionIndex);
                          const isDark =
                            index % 2 === 0 ? !cardIsDark : cardIsDark;

                          return (
                            <article
                              key={`${item.heading}-${item.meta ?? ''}`}
                              data-cursor-reactive={isDark ? 'dark' : 'light'}
                              onPointerMove={trackGlow}
                              onPointerLeave={hideGlow}
                              className={`rounded-xl p-5 shadow-[0_5px_18px_rgba(15,23,42,0.06)] ${isDark ? 'bg-[#1f2937] text-white' : 'bg-[#b8cadc] text-[#111]'}`}
                            >
                              <h3
                                className={`text-lg font-semibold ${isDark ? 'text-[#b8cadc]' : ''}`}
                              >
                                {item.heading}
                              </h3>
                              {item.meta && (
                                <p
                                  className={`mt-1 text-xs font-semibold ${isDark ? 'text-[#b8cadc]' : 'text-[#526985]'}`}
                                >
                                  {item.meta}
                                </p>
                              )}
                              <p
                                className={`mt-3 text-sm leading-6 ${isDark ? 'text-white/70' : 'text-slate-700'}`}
                              >
                                {item.body}
                              </p>
                            </article>
                          );
                        })}
                      </div>
                    </section>
                  ))}
                  <section
                    data-resume-modal-section='badges'
                    aria-labelledby='professional-badges-title'
                    className='overflow-hidden rounded-2xl border border-[#405671]/15 bg-white/40 shadow-[0_8px_24px_rgba(15,23,42,0.07)]'
                  >
                    <header className='border-b border-[#405671]/15 bg-[#c7d2de] px-5 py-4 text-center sm:px-6'>
                      <p className='text-xs font-bold tracking-[0.2em] text-[#526985] uppercase'>
                        Credentials
                      </p>
                      <h2
                        id='professional-badges-title'
                        className='mt-1 text-xl font-semibold tracking-[-0.03em] text-[#111] sm:text-2xl'
                      >
                        Professional badges
                      </h2>
                    </header>
                    <ul className='grid grid-cols-[repeat(auto-fit,minmax(min(9rem,100%),11rem))] justify-center gap-4 p-5 sm:gap-5 sm:p-6'>
                      {badges.map((badge) => (
                        <li key={badge.image} className='flex justify-center'>
                          <Image
                            src={badge.image}
                            alt={badge.name}
                            width={1600}
                            height={1600}
                            sizes='(max-width: 640px) 144px, 176px'
                            className={`h-auto w-full object-contain ${badge.alignment}`}
                          />
                        </li>
                      ))}
                    </ul>
                  </section>
                </div>
              </div>
            </section>
          </div>,
          document.body,
        )}
    </>
  );
}
