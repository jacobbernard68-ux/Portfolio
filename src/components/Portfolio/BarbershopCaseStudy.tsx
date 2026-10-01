import type { PortfolioProject } from './projectData';
import Image from 'next/image';
import ReturnToWork from './ReturnToWork';
import ProjectWebsiteLink from './ProjectWebsiteLink';

export default function BarbershopCaseStudy({
  project,
}: {
  project: PortfolioProject;
}) {
  const story = [
    ['Challenge', project.challenge],
    ['Approach', project.approach],
    ['Outcome', project.outcome],
  ];

  return (
    <main data-internal-scroll className='case-study-viewport viewport-page page-gutters bg-[#e2e8f2]/80 lg:overflow-y-auto'>
      <article
        data-internal-scroll
        data-case-theme='barber'
        className='no-scrollbar relative mx-auto max-w-[min(90rem,100%)] overflow-hidden rounded-[var(--fluid-radius)] bg-[#f2ece4] shadow-[0_12px_35px_rgba(31,41,55,0.1)] ring-1 ring-[#2f3e5c]/8'
      >
        <ReturnToWork originClassName='text-[#8a2f2f]' />
        <div className='grid lg:grid-cols-[0.9fr_1.1fr]'>
          <div
            data-case-intro
            className='fluid-card-space flex min-h-[clamp(24rem,55svh,35rem)] flex-col justify-between'
          >
            <div>
              <p className='mt-10 text-xs font-bold tracking-[0.18em] text-[#8a2f2f] uppercase'>
                {project.number} · {project.type}
              </p>
              <h1 className='mt-4 max-w-xl text-4xl font-semibold tracking-[-0.05em] text-[#211914] sm:text-6xl'>
                {project.title}
              </h1>
              <p className='mt-6 max-w-xl text-base leading-7 text-[#685b52]'>
                {project.summary}
              </p>
              <div className='mt-7 flex flex-wrap gap-2'>
                {[
                  'Service discovery',
                  'Booking calendar',
                  'Responsive navigation',
                ].map((item) => (
                  <span
                    key={item}
                    className='rounded-full border border-[#5a382e]/15 bg-white/55 px-3 py-1.5 text-[10px] font-semibold text-[#5a382e]'
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className='mt-10 flex flex-wrap items-center gap-3'>
              <span className='rounded-full bg-[#dfcfbb] px-4 py-2 text-xs font-semibold text-[#51372e]'>
                {project.status}
              </span>
              {project.liveHref && (
                <ProjectWebsiteLink
                  href={project.liveHref}
                  project={project.slug}
                  className='case-study-action case-study-action--primary rounded-full bg-[#8f2228] px-5 py-2.5 text-xs font-bold tracking-[0.12em] text-white uppercase transition hover:bg-[#6f171c]'
                >
                  {project.liveLabel} ↗
                </ProjectWebsiteLink>
              )}
            </div>
          </div>
          <div className='grid min-h-[clamp(22rem,55svh,35rem)] place-items-center bg-[#33251f] p-[clamp(1.25rem,3vw,2.5rem)]'>
            <div
              data-glow-card
              className='relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/15 bg-[#392b25] shadow-[0_22px_55px_rgba(0,0,0,0.32)]'
            >
              <div
                className='absolute inset-x-0 top-0 z-10 flex h-7 items-center gap-1.5 border-b border-black/10 bg-[#d9c5a8] px-3'
                aria-hidden='true'
              >
                <span className='size-2 rounded-full bg-[#a95252]' />
                <span className='size-2 rounded-full bg-[#c99a62]' />
                <span className='size-2 rounded-full bg-[#78906f]' />
              </div>
              <Image
                src={project.heroImage ?? project.image}
                alt={project.imageAlt}
                fill
                priority
                sizes='(max-width: 1023px) 90vw, 50vw'
                className='object-contain object-center pt-7'
              />
            </div>
          </div>
        </div>

        <section
          data-case-story
          className='grid gap-px bg-[#cdbba5] md:grid-cols-3'
        >
          {story.map(([label, copy]) => (
            <div
              data-case-story-card
              key={label}
              className='bg-[#faf5ed] p-7 sm:p-9'
            >
              <p className='text-[10px] font-bold tracking-[0.18em] text-[#8a2f2f] uppercase'>
                {label}
              </p>
              <p className='mt-4 text-sm leading-6 text-[#685b52]'>{copy}</p>
            </div>
          ))}
        </section>

        <section
          data-barber-showcase
          className='grid gap-5 p-4 sm:grid-cols-2 sm:p-8'
          style={{ backgroundColor: '#f2ece4' }}
        >
          <article
            className='relative min-h-[clamp(18rem,38svh,20rem)] overflow-hidden rounded-xl'
            style={{ backgroundColor: '#2f231e' }}
          >
            <Image
              src='/vintage-barbershop/assets/images/hero.jpg'
              alt='Vintage Barbershop interior'
              fill
              priority
              sizes='(max-width: 639px) 100vw, 50vw'
              className='object-cover'
            />
            <div
              className='absolute border border-[#fff0da]/55'
              style={{
                left: 0,
                top: 0,
                maxWidth: '78%',
                padding: '14px 18px 15px 13px',
                backgroundColor: 'rgba(216, 195, 165, 0.35)',
                borderRadius: '0 0 14px 0',
                borderLeft: '5px solid rgba(143, 34, 40, 0.82)',
                boxShadow: '0 10px 30px rgba(30, 18, 11, 0.18)',
                backdropFilter: 'blur(1px)',
                color: '#2e1d14',
              }}
            >
              <p
                className='text-[9px] font-bold tracking-[0.18em] uppercase'
                style={{ color: '#3f291d' }}
              >
                Landing experience
              </p>
              <h2
                className='mt-2 leading-[1.08] font-semibold'
                style={{
                  color: '#2e1d14',
                  fontFamily: 'Georgia, serif',
                  fontSize: 'clamp(12px, 1.35vw, 16px)',
                }}
              >
                <span className='block whitespace-nowrap'>
                  Classic character
                </span>
                <span className='block whitespace-nowrap'>
                  with a direct path to booking.
                </span>
              </h2>
            </div>
          </article>

          <article
            className='relative min-h-[clamp(18rem,38svh,20rem)] overflow-hidden rounded-xl'
            style={{ backgroundColor: '#161817' }}
          >
            <Image
              src='/vintage-barbershop/assets/images/beard-trim-v2.png'
              alt="Barber shaping a client's beard"
              fill
              priority
              sizes='(max-width: 639px) 100vw, 50vw'
              className='object-cover'
            />
            <div
              className='absolute max-w-[62%] border border-[#fff0da]/55 p-5'
              style={{
                right: 0,
                top: 0,
                backgroundColor: 'rgba(216, 195, 165, 0.35)',
                borderRadius: '0 0 0 14px',
                borderRight: '5px solid rgba(143, 34, 40, 0.82)',
                boxShadow: '0 10px 30px rgba(30, 18, 11, 0.18)',
                backdropFilter: 'blur(1px)',
                color: '#2e1d14',
              }}
            >
              <p
                className='text-[9px] font-bold tracking-[0.18em] uppercase'
                style={{ color: '#3f291d' }}
              >
                Service detail
              </p>
              <h2
                className='mt-2 text-[24px] leading-[1.08] font-semibold'
                style={{ color: '#2e1d14', fontFamily: 'Georgia, serif' }}
              >
                The craft stays at the center.
              </h2>
            </div>
          </article>

          <article
            data-barber-light-preview='services'
            className='relative overflow-hidden rounded-xl p-5'
            style={{ alignSelf: 'start', backgroundColor: '#dcc8aa' }}
          >
            <div
              className='absolute inset-x-0 top-0 h-1'
              style={{
                background:
                  'repeating-linear-gradient(90deg,#b22222 0 18px,#f4efe8 18px 36px,#3a2d28 36px 54px,#f4efe8 54px 72px)',
              }}
              aria-hidden='true'
            />
            <div className='flex items-start justify-between gap-4 pt-1'>
              <div>
                <p
                  className='text-[9px] font-bold tracking-[0.18em] uppercase'
                  style={{ color: '#7a2c2c' }}
                >
                  Style · Service discovery
                </p>
                <h2
                  className='mt-2 text-xl font-semibold'
                  style={{ color: '#2e211b' }}
                >
                  A visual menu built around the result
                </h2>
              </div>
              <span
                className='grid size-10 shrink-0 place-items-center rounded-full border text-lg'
                style={{
                  borderColor: 'rgba(58,45,40,.2)',
                  backgroundColor: 'rgba(244,239,232,.55)',
                  color: '#8f2228',
                }}
                aria-hidden='true'
              >
                ✂
              </span>
            </div>
            <div
              className='mt-4 gap-3'
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
              }}
            >
              {[
                [
                  '/vintage-barbershop/assets/images/classic-cut-v2.png',
                  'Classic cut',
                  'Clean finish',
                  '$25',
                ],
                [
                  '/vintage-barbershop/assets/images/beard-trim-v2.png',
                  'Beard trim',
                  'Sharp detail',
                  '$15',
                ],
                [
                  '/vintage-barbershop/assets/images/straight-razor-v2.png',
                  'Straight razor',
                  'Traditional care',
                  '$30',
                ],
                [
                  '/vintage-barbershop/assets/images/fade-style-v2.png',
                  'Fade + style',
                  'Precision blend',
                  '$35',
                ],
                [
                  '/vintage-barbershop/assets/images/kids-cut-v2.png',
                  'Kids cut',
                  'Comfort first',
                  '$20',
                ],
                [
                  '/vintage-barbershop/assets/images/head-shave-v2.png',
                  'Head shave',
                  'Smooth finish',
                  '$28',
                ],
              ].map(([src, label, detail, price], index) => (
                <div
                  data-barber-preview-cell
                  key={`${label}-${index}`}
                  className='overflow-hidden rounded-lg border'
                  style={{
                    backgroundColor: '#f4e9da',
                    borderColor: 'rgba(58,45,40,.14)',
                  }}
                >
                  <div className='relative aspect-[4/3]'>
                    <Image
                      src={src}
                      alt={label}
                      fill
                      priority
                      sizes='18vw'
                      className='object-cover'
                    />
                    <span
                      className='absolute top-2 right-2 grid size-6 place-items-center rounded-full text-[9px] font-bold text-white'
                      style={{ backgroundColor: 'rgba(58,45,40,.82)' }}
                    >
                      0{index + 1}
                    </span>
                  </div>
                  <div className='px-2.5 py-2'>
                    <div className='flex items-start justify-between gap-1.5'>
                      <p
                        className='text-[9px] leading-tight font-bold'
                        style={{ color: '#3a2d28' }}
                      >
                        {label}
                      </p>
                      <span
                        className='text-[10px] font-bold'
                        style={{ color: '#b22222' }}
                      >
                        {price}
                      </span>
                    </div>
                    <p
                      className='mt-1 text-[7px] tracking-[0.1em] uppercase'
                      style={{ color: '#806f61' }}
                    >
                      {detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div
              className='mt-4 flex items-center justify-between border-t pt-3'
              style={{ borderColor: 'rgba(58,45,40,.16)' }}
            >
              <p
                className='text-[9px] font-semibold tracking-[0.12em] uppercase'
                style={{ color: '#675247' }}
              >
                Details open without leaving the service list
              </p>
              <span
                className='rounded-full px-2.5 py-1 text-[8px] font-bold tracking-[0.12em] text-white uppercase'
                style={{ backgroundColor: '#3a2d28' }}
              >
                View service
              </span>
            </div>
          </article>

          <div className='flex h-full flex-col gap-4'>
            <article
              className='flex min-h-[clamp(28rem,65svh,40.625rem)] overflow-hidden rounded-xl p-[clamp(1.25rem,2.5vw,2rem)] text-white lg:flex-col lg:justify-center'
              style={{ backgroundColor: '#b22222' }}
            >
              <div className='w-full'>
                <div className='flex items-start justify-between gap-4'>
                  <div>
                    <p
                      className='text-[9px] font-bold tracking-[0.18em] uppercase'
                      style={{ color: '#d8c3a5' }}
                    >
                      Appointment flow
                    </p>
                    <h2
                      className='mt-2 text-xl font-semibold'
                      style={{ color: '#ffffff' }}
                    >
                      Pick a service, date, and time.
                    </h2>
                  </div>
                  <span
                    className='rounded-full px-3 py-1.5 text-[9px] font-bold tracking-[0.12em] uppercase'
                    style={{ backgroundColor: '#951b1f', color: '#ffffff' }}
                  >
                    Interactive
                  </span>
                </div>
                <div
                  className='mt-4 rounded-[18px] p-4 shadow-inner'
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    border: '1px solid rgba(255,255,255,0.18)',
                    color: '#ffffff',
                    backdropFilter: 'blur(6px)',
                  }}
                >
                  <div
                    className='flex items-center justify-between border-b pb-3'
                    style={{ borderColor: 'rgba(255,255,255,0.18)' }}
                  >
                    <span className='text-sm font-bold'>August 2026</span>
                    <span
                      className='text-[10px] font-semibold'
                      style={{ color: '#d8c3a5' }}
                    >
                      Choose a date
                    </span>
                  </div>
                  <div
                    className='mt-3 text-center text-[9px]'
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(7, minmax(0, 1fr))',
                      gap: '5px',
                    }}
                  >
                    {[
                      'S',
                      'M',
                      'T',
                      'W',
                      'T',
                      'F',
                      'S',
                      ...Array.from({ length: 6 }, (_, i) => `J${i + 26}`),
                      ...Array.from({ length: 31 }, (_, i) => `A${i + 1}`),
                      ...Array.from({ length: 5 }, (_, i) => `P${i + 1}`),
                    ].map((day, index) => {
                      const weekday = index < 7;
                      const adjacent =
                        day.startsWith('J') || day.startsWith('P');
                      const today = day === 'A4';
                      const disabled =
                        adjacent ||
                        ['A1', 'A2', 'A3', 'A9', 'A16', 'A23', 'A30'].includes(
                          day,
                        );
                      const label = weekday ? day : day.slice(1);
                      return (
                        <span
                          key={`${day}-${index}`}
                          className='grid place-items-center rounded-lg font-bold'
                          style={
                            weekday
                              ? {
                                  height: '28px',
                                  color: 'rgba(255,255,255,0.85)',
                                }
                              : {
                                  height: '44px',
                                  backgroundColor: adjacent
                                    ? 'rgba(255,255,255,0.035)'
                                    : 'rgba(255,255,255,0.08)',
                                  color: disabled
                                    ? 'rgba(216,195,165,0.42)'
                                    : '#ffffff',
                                  border: today
                                    ? '2px solid #d8c3a5'
                                    : '1px solid rgba(255,255,255,0.14)',
                                }
                          }
                        >
                          {label}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </article>
            <aside
              data-barber-light-preview='visit'
              className='relative flex min-h-[clamp(10rem,22svh,12rem)] flex-1 flex-col justify-center overflow-hidden rounded-xl border p-[clamp(1rem,2vw,1.25rem)]'
              style={{
                backgroundColor: '#f4e9da',
                borderColor: 'rgba(58,45,40,.14)',
              }}
            >
              <div
                className='absolute inset-y-0 left-0 w-1.5'
                style={{ backgroundColor: '#b22222' }}
                aria-hidden='true'
              />
              <div className='flex flex-wrap items-end justify-between gap-3'>
                <div>
                  <p
                    className='text-[9px] font-bold tracking-[0.18em] uppercase'
                    style={{ color: '#8f2228' }}
                  >
                    Before you arrive
                  </p>
                  <h3
                    className='mt-2 text-xl font-semibold'
                    style={{ color: '#2e211b' }}
                  >
                    A smoother visit starts here.
                  </h3>
                </div>
                <span
                  className='rounded-full border px-3 py-1 text-[8px] font-bold tracking-[0.12em] uppercase'
                  style={{
                    borderColor: 'rgba(58,45,40,.16)',
                    color: '#675247',
                  }}
                >
                  Good to know
                </span>
              </div>
              <div
                className='mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-lg border'
                style={{
                  backgroundColor: 'rgba(58,45,40,.12)',
                  borderColor: 'rgba(58,45,40,.12)',
                }}
              >
                {[
                  ['Walk-ins', 'Welcome'],
                  ['Appointment', '30–45 minutes'],
                  ['Arrival', '5 minutes early'],
                  ['Payment', 'Cash + cards'],
                ].map(([label, value]) => (
                  <div
                    data-barber-preview-cell
                    key={label}
                    className='p-3'
                    style={{ backgroundColor: '#fffaf3' }}
                  >
                    <p
                      className='text-[7px] font-bold tracking-[0.16em] uppercase'
                      style={{ color: '#9a7663' }}
                    >
                      {label}
                    </p>
                    <p
                      className='mt-1 text-[11px] font-semibold'
                      style={{ color: '#3a2d28' }}
                    >
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </section>
      </article>
    </main>
  );
}
