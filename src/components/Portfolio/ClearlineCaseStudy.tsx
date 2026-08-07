import type { PortfolioProject } from './projectData';
import Image from 'next/image';
import Link from 'next/link';
import ReturnToWork from './ReturnToWork';

const principles = [
  {
    number: '01',
    title: 'Precision',
    copy: 'Attention stays on the details people notice.',
    image: '/images/portfolio/cleaning-a.png',
    position: 'center',
  },
  {
    number: '02',
    title: 'Order',
    copy: 'Calm spaces communicate dependable service.',
    image: '/images/portfolio/cleaning-b.png',
    position: 'center',
  },
  {
    number: '03',
    title: 'Environment',
    copy: 'The finished space remains the central outcome.',
    image: '/images/portfolio/cleaning-c.png',
    position: 'center',
  },
  {
    number: '04',
    title: 'Care',
    copy: 'Every interaction feels deliberate and respectful.',
    image: '/images/portfolio/cleaning-d.png',
    position: 'center',
  },
];

export default function ClearlineCaseStudy({
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
    <main className='viewport-page page-gutters bg-[#e2e8f2]/80 lg:overflow-hidden'>
      <article
        data-internal-scroll
        className='no-scrollbar relative mx-auto max-w-[min(90rem,100%)] overflow-hidden rounded-[var(--fluid-radius)] shadow-[0_12px_35px_rgba(31,41,55,0.1)] ring-1 ring-[#2f3e5c]/8 lg:h-full lg:overflow-y-auto'
        style={{ backgroundColor: '#f6f8f9' }}
      >
        <ReturnToWork originClassName='text-[#526777]' />
        <div className='grid lg:grid-cols-[0.9fr_1.1fr]'>
          <div className='fluid-card-space flex min-h-[clamp(24rem,55svh,35rem)] flex-col justify-between'>
            <div>
              <p
                className='mt-10 text-xs font-bold tracking-[0.18em] uppercase'
                style={{ color: '#526777' }}
              >
                {project.number} · {project.type}
              </p>
              <h1
                className='mt-4 max-w-xl text-4xl font-semibold tracking-[-0.05em] sm:text-6xl'
                style={{ color: '#1f1f1f' }}
              >
                {project.title}
              </h1>
              <p
                className='mt-6 max-w-xl text-base leading-7'
                style={{ color: '#5f6368' }}
              >
                {project.summary}
              </p>
              <div className='mt-7 flex flex-wrap gap-2'>
                {[
                  'Service selection',
                  'Responsive layout',
                  'Safe prototype flow',
                ].map((item) => (
                  <span
                    key={item}
                    className='rounded-full border bg-white/70 px-3 py-1.5 text-[10px] font-semibold'
                    style={{
                      borderColor: 'rgba(82,103,119,.16)',
                      color: '#526777',
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className='mt-10 flex flex-wrap items-center gap-3'>
              <span
                className='rounded-full px-4 py-2 text-xs font-semibold'
                style={{ backgroundColor: '#dfeaf5', color: '#43596a' }}
              >
                {project.status}
              </span>
              {project.liveHref && (
                <Link
                  href={project.liveHref}
                  target='_blank'
                  className='rounded-full px-5 py-2.5 text-xs font-bold tracking-[0.12em] text-white uppercase transition'
                  style={{ backgroundColor: '#1f1f1f' }}
                >
                  {project.liveLabel} ↗
                </Link>
              )}
              {project.conceptHref && (
                <Link
                  href={project.conceptHref}
                  target='_blank'
                  className='rounded-full border px-5 py-2.5 text-xs font-bold tracking-[0.12em] uppercase'
                  style={{
                    borderColor: 'rgba(31,31,31,.18)',
                    color: '#1f1f1f',
                  }}
                >
                  {project.conceptLabel} ↗
                </Link>
              )}
            </div>
          </div>

          <div
            className='grid min-h-[clamp(22rem,55svh,35rem)] place-items-center p-[clamp(1.25rem,3vw,2.5rem)]'
            style={{ backgroundColor: '#dfeaf5' }}
          >
            <div
              data-glow-card
              className='relative aspect-[16/10] w-full overflow-hidden rounded-xl border bg-white shadow-[0_22px_55px_rgba(31,41,55,0.2)]'
              style={{ borderColor: 'rgba(31,31,31,.12)' }}
            >
              <div
                className='absolute inset-x-0 top-0 z-20 flex h-7 items-center gap-1.5 border-b px-3'
                style={{
                  backgroundColor: '#edf2f5',
                  borderColor: 'rgba(31,31,31,.1)',
                }}
                aria-hidden='true'
              >
                <span className='size-2 rounded-full bg-[#91a6b5]' />
                <span className='size-2 rounded-full bg-[#b9c9d4]' />
                <span className='size-2 rounded-full bg-[#6f8798]' />
              </div>
              <Image
                src={project.heroImage ?? project.image}
                alt='Clearline Services landing page without the portfolio close control'
                fill
                priority
                sizes='(max-width: 1023px) 90vw, 50vw'
                className='object-contain object-center pt-7'
              />
            </div>
          </div>
        </div>

        <section
          className='grid gap-px md:grid-cols-3'
          style={{ backgroundColor: '#c8d5df' }}
        >
          {story.map(([label, copy]) => (
            <div
              key={label}
              className='p-7 sm:p-9'
              style={{ backgroundColor: '#ffffff' }}
            >
              <p
                className='text-[10px] font-bold tracking-[0.18em] uppercase'
                style={{ color: '#526777' }}
              >
                {label}
              </p>
              <p
                className='mt-4 text-sm leading-6'
                style={{ color: '#5f6368' }}
              >
                {copy}
              </p>
            </div>
          ))}
        </section>

        <section className='p-4 sm:p-8' style={{ backgroundColor: '#edf2f5' }}>
          <div className='mb-5 flex flex-wrap items-end justify-between gap-4'>
            <div>
              <p
                className='text-[9px] font-bold tracking-[0.18em] uppercase'
                style={{ color: '#526777' }}
              >
                Visual system
              </p>
              <h2
                className='mt-2 text-2xl font-semibold'
                style={{ color: '#1f1f1f' }}
              >
                Four ideas shape the experience.
              </h2>
            </div>
            <p
              className='max-w-md text-sm leading-6'
              style={{ color: '#5f6368' }}
            >
              The original Figma direction becomes a repeatable content system
              across the coded site.
            </p>
          </div>

          <div className='clearline-principle-strip'>
            {principles.map((item) => (
              <figure
                key={item.title}
                className='relative overflow-hidden rounded-xl'
                style={{ minHeight: '220px', backgroundColor: '#d9e2e7' }}
              >
                <Image
                  src={item.image}
                  alt={`${item.title} within the Clearline visual direction`}
                  fill
                  priority
                  sizes='(max-width: 639px) 100vw, 25vw'
                  className='object-cover'
                />
                <div className='absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#17222a]/75 to-transparent' />
                <figcaption className='absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 text-white'>
                  <div>
                    <p
                      className='text-[8px] font-bold tracking-[0.16em] uppercase'
                      style={{ color: '#d7e3ea' }}
                    >
                      {item.number}
                    </p>
                    <h3 className='mt-1 text-base font-semibold'>
                      {item.title}
                    </h3>
                  </div>
                  <span
                    className='size-1.5 rounded-full'
                    style={{ backgroundColor: '#9eb7ca' }}
                    aria-hidden='true'
                  />
                </figcaption>
              </figure>
            ))}
          </div>

          <div className='mt-7 mb-4 flex items-center justify-between gap-4'>
            <p
              className='text-[9px] font-bold tracking-[0.18em] uppercase'
              style={{ color: '#526777' }}
            >
              From visual direction to working interface
            </p>
            <span
              className='h-px flex-1'
              style={{ backgroundColor: 'rgba(82,103,119,.18)' }}
              aria-hidden='true'
            />
          </div>
          <div className='clearline-case-grid'>
            <article className='overflow-hidden rounded-xl bg-white p-5'>
              <div className='flex items-end justify-between gap-4 pb-4'>
                <div>
                  <p
                    className='text-[9px] font-bold tracking-[0.18em] uppercase'
                    style={{ color: '#526777' }}
                  >
                    Hero collage
                  </p>
                  <h3
                    className='mt-2 text-xl font-semibold'
                    style={{ color: '#1f1f1f' }}
                  >
                    Professional Cleaning
                  </h3>
                </div>
                <p
                  className='text-right text-[10px] leading-4'
                  style={{ color: '#5f6368' }}
                >
                  Precision care for
                  <br />
                  everyday environments.
                </p>
              </div>
              <div
                className='gap-2'
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                }}
              >
                <div className='flex flex-col gap-2'>
                  {principles.slice(0, 2).map((item, index) => (
                    <figure
                      key={item.title}
                      className='relative overflow-hidden rounded-lg'
                      style={{ height: index === 0 ? '130px' : '174px' }}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        priority
                        sizes='25vw'
                        className='object-cover'
                      />
                      <div className='absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/50 to-transparent' />
                      <figcaption className='absolute bottom-3 left-3 text-[11px] font-semibold text-white'>
                        {item.title}
                      </figcaption>
                    </figure>
                  ))}
                </div>
                <div className='flex flex-col gap-2'>
                  {principles.slice(2).map((item, index) => (
                    <figure
                      key={item.title}
                      className='relative overflow-hidden rounded-lg'
                      style={{ height: index === 0 ? '174px' : '130px' }}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        priority
                        sizes='25vw'
                        className='object-cover'
                      />
                      <div className='absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/50 to-transparent' />
                      <figcaption className='absolute bottom-3 left-3 text-[11px] font-semibold text-white'>
                        {item.title}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            </article>

            <article
              className='overflow-hidden rounded-xl border'
              style={{
                backgroundColor: '#ffffff',
                borderColor: 'rgba(31,31,31,.1)',
              }}
            >
              <div className='p-5'>
                <p
                  className='text-[9px] font-bold tracking-[0.18em] uppercase'
                  style={{ color: '#526777' }}
                >
                  Services, kept simple
                </p>
                <h3
                  className='mt-2 max-w-md text-2xl leading-tight font-semibold'
                  style={{ color: '#1f1f1f' }}
                >
                  The right care for the way you use your space.
                </h3>
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                  gap: '1px',
                  backgroundColor: 'rgba(31,31,31,.1)',
                }}
              >
                {[
                  'Workspace Cleaning',
                  'Residential Cleaning',
                  'Routine Maintenance',
                  'Detail Cleaning',
                ].map((service, index) => (
                  <div
                    key={service}
                    className='p-4'
                    style={{
                      backgroundColor: index === 1 ? '#dfeaf5' : '#f8f9f9',
                    }}
                  >
                    <span
                      className='text-[8px] font-bold tracking-[0.16em]'
                      style={{ color: '#738493' }}
                    >
                      0{index + 1}
                    </span>
                    <h4
                      className='mt-4 text-sm font-semibold'
                      style={{ color: '#1f1f1f' }}
                    >
                      {service}
                    </h4>
                    <p
                      className='mt-2 text-[9px] leading-4'
                      style={{ color: '#5f6368' }}
                    >
                      {
                        [
                          'Offices, studios, and small businesses.',
                          'Thoughtful care for everyday living.',
                          'Flexible recurring service schedules.',
                          'Focused attention for overlooked areas.',
                        ][index]
                      }
                    </p>
                    <span
                      className='mt-4 inline-block text-[8px] font-bold tracking-[0.1em] uppercase'
                      style={{ color: '#354854' }}
                    >
                      Choose service →
                    </span>
                  </div>
                ))}
              </div>
            </article>

            <article
              className='rounded-xl p-6 sm:p-8'
              style={{ backgroundColor: '#ffffff' }}
            >
              <p
                className='text-[9px] font-bold tracking-[0.18em] uppercase'
                style={{ color: '#526777' }}
              >
                About Clearline
              </p>
              <h3
                className='mt-5 text-3xl leading-[1.04] font-semibold tracking-[-0.045em]'
                style={{ color: '#1f1f1f' }}
              >
                Remove clutter.
                <br />
                Create order.
                <br />
                Improve the environment.
                <br />
                Handle every detail with care.
              </h3>
              <p
                className='mt-5 max-w-lg text-xs leading-5'
                style={{ color: '#5f6368' }}
              >
                A clear, editorial statement turns the original four-image
                concept into a practical promise customers can understand.
              </p>
              <div className='mt-5 flex flex-wrap gap-2'>
                {[
                  'Small local team',
                  'Flexible scheduling',
                  'Consistent checklists',
                  'Respectful care',
                ].map((item) => (
                  <span
                    key={item}
                    className='rounded-full border px-3 py-1.5 text-[8px] font-semibold'
                    style={{
                      borderColor: 'rgba(31,31,31,.1)',
                      color: '#4f5d62',
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>

            <article
              className='rounded-xl p-5'
              style={{ backgroundColor: '#dfeaf5' }}
            >
              <div className='mb-4'>
                <p
                  className='text-[9px] font-bold tracking-[0.18em] uppercase'
                  style={{ color: '#526777' }}
                >
                  Quote prototype
                </p>
                <h3
                  className='mt-2 text-2xl font-semibold'
                  style={{ color: '#1f1f1f' }}
                >
                  A cleaner space starts here.
                </h3>
              </div>
              <div className='rounded-xl bg-white p-4 shadow-[0_12px_35px_rgba(31,41,55,.08)]'>
                <p
                  className='text-[9px] font-bold tracking-[0.12em] uppercase'
                  style={{ color: '#1f1f1f' }}
                >
                  What can we help with?
                </p>
                <div className='mt-3 flex flex-wrap gap-1.5'>
                  {['Workspace', 'Residential', 'Routine', 'Detail'].map(
                    (item, index) => (
                      <span
                        key={item}
                        className='rounded-full px-2.5 py-1.5 text-[8px] font-semibold'
                        style={{
                          backgroundColor: index === 0 ? '#1f1f1f' : '#eef1f2',
                          color: index === 0 ? '#ffffff' : '#4f5d62',
                        }}
                      >
                        {item}
                      </span>
                    ),
                  )}
                </div>
                <div className='mt-4 grid grid-cols-2 gap-2'>
                  <div
                    className='rounded-lg border px-3 py-2 text-[9px]'
                    style={{
                      borderColor: 'rgba(31,31,31,.15)',
                      color: '#7b8287',
                    }}
                  >
                    Your name
                  </div>
                  <div
                    className='rounded-lg border px-3 py-2 text-[9px]'
                    style={{
                      borderColor: 'rgba(31,31,31,.15)',
                      color: '#7b8287',
                    }}
                  >
                    you@example.com
                  </div>
                </div>
                <div
                  className='mt-2 rounded-lg border px-3 py-3 text-[9px]'
                  style={{
                    borderColor: 'rgba(31,31,31,.15)',
                    color: '#7b8287',
                  }}
                >
                  Home, office, preferred schedule…
                </div>
                <div
                  className='mt-3 rounded-lg py-2.5 text-center text-[8px] font-bold tracking-[0.12em] text-white uppercase'
                  style={{ backgroundColor: '#1f1f1f' }}
                >
                  Request a quote
                </div>
              </div>
              <p
                className='mt-3 text-[9px] leading-4'
                style={{ color: '#526777' }}
              >
                <strong>Prototype safeguard:</strong> no information is
                collected, stored, or transmitted.
              </p>
            </article>
          </div>
        </section>
      </article>
    </main>
  );
}
