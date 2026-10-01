import type { PortfolioProject } from './projectData';
import Image from 'next/image';
import Link from 'next/link';
import ReturnToWork from './ReturnToWork';
import ProjectWebsiteLink from './ProjectWebsiteLink';
import ThemeAwareProjectImage from './ThemeAwareProjectImage';

const principles = [
  {
    number: '01',
    title: 'Precision',
    copy: 'Attention stays on the details people notice.',
    image: '/images/portfolio/cleaning-a.png',
    position: 'center 42%',
    labelPosition: 'left',
  },
  {
    number: '02',
    title: 'Order',
    copy: 'Calm spaces communicate dependable service.',
    image: '/images/portfolio/cleaning-b.png',
    position: 'center 38%',
    labelPosition: 'quarter',
  },
  {
    number: '03',
    title: 'Environment',
    copy: 'The finished space remains the central outcome.',
    image: '/images/portfolio/cleaning-c.png',
    position: 'center',
    labelPosition: 'center',
  },
  {
    number: '04',
    title: 'Care',
    copy: 'Every interaction feels deliberate and respectful.',
    image: '/images/portfolio/cleaning-d.png',
    position: 'center 35%',
    labelPosition: 'right',
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
    <main data-internal-scroll className='case-study-viewport viewport-page page-gutters bg-[#e2e8f2]/80 lg:overflow-y-auto'>
      <article
        data-internal-scroll
        data-case-theme='clearline'
        className='no-scrollbar relative mx-auto max-w-[min(90rem,100%)] overflow-hidden rounded-[var(--fluid-radius)] shadow-[0_12px_35px_rgba(31,41,55,0.1)] ring-1 ring-[#2f3e5c]/8'
        style={{ backgroundColor: '#c8d5e3' }}
      >
        <ReturnToWork originClassName='text-[#526777]' />
        <div className='grid lg:grid-cols-[0.9fr_1.1fr]'>
          <div
            data-case-intro
            className='fluid-card-space flex min-h-[clamp(24rem,55svh,35rem)] flex-col justify-between'
          >
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
                <ProjectWebsiteLink
                  href={project.liveHref}
                  project={project.slug}
                  className='case-study-action case-study-action--primary rounded-full px-5 py-2.5 text-xs font-bold tracking-[0.12em] text-white uppercase transition'
                  style={{ backgroundColor: '#1f1f1f' }}
                >
                  {project.liveLabel} ↗
                </ProjectWebsiteLink>
              )}
              {project.conceptHref && (
                <Link
                  href={project.conceptHref}
                  className='case-study-action case-study-action--secondary rounded-full border px-5 py-2.5 text-xs font-bold tracking-[0.12em] uppercase'
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
            data-clearline-hero-preview
            className='grid min-h-[clamp(22rem,55svh,35rem)] place-items-center p-[clamp(1.25rem,3vw,2.5rem)]'
            style={{ backgroundColor: '#dfeaf5' }}
          >
            <div
              data-glow-card
              data-clearline-browser-preview
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
              <ThemeAwareProjectImage
                lightSrc={project.heroImage ?? project.image}
                darkSrc={project.darkHeroImage ?? project.darkImage}
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
          data-case-story
          className='grid gap-px md:grid-cols-3'
          style={{ backgroundColor: '#c8d5df' }}
        >
          {story.map(([label, copy]) => (
            <div
              data-case-story-card
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

        <section
          data-clearline-system
          className='border-t p-4 sm:p-8'
          style={{
            backgroundColor: '#dbe5ec',
            borderColor: 'rgba(82,103,119,.16)',
          }}
        >
          <div className='mb-5 flex flex-wrap items-end justify-between gap-4'>
            <div data-clearline-system-heading>
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
                  style={{ objectPosition: item.position }}
                />
                <div className='absolute inset-0 bg-gradient-to-t from-[#0b141c]/92 via-transparent to-black/10' />
                <figcaption className='absolute inset-0 text-white'>
                  <div
                    className={`absolute bottom-4 ${item.labelPosition === 'quarter' ? 'left-1/4' : item.labelPosition === 'center' ? 'left-1/2 -translate-x-1/2 text-center' : item.labelPosition === 'right' ? 'right-10 text-right' : 'left-4'}`}
                  >
                    <p
                      className={`inline-flex rounded-full border border-white/20 bg-[#17222a]/82 px-2 py-1 text-[8px] font-bold tracking-[0.16em] text-white uppercase shadow-[0_5px_14px_rgba(0,0,0,.28)] backdrop-blur-sm ${item.number === '02' ? 'ring-1 ring-white/35' : ''}`}
                    >
                      {item.number}
                    </p>
                    <h3 className='mt-2 text-base font-semibold whitespace-nowrap text-white! [text-shadow:0_2px_10px_rgba(0,0,0,.9)]'>
                      {item.title}
                    </h3>
                  </div>
                  <span
                    className='absolute right-4 bottom-4 size-1.5 rounded-full ring-2 ring-[#17222a]/30'
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
          <div className='clearline-case-grid items-start'>
            <article
              data-clearline-mockup-card='collage'
              className='overflow-hidden rounded-xl border border-[#526777]/12 bg-white p-5 shadow-[0_14px_34px_rgba(31,41,55,.12)]'
            >
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
              data-clearline-mockup-card='services'
              className='overflow-hidden rounded-xl border shadow-[0_14px_34px_rgba(31,41,55,.12)]'
              style={{
                backgroundColor: '#ffffff',
                borderColor: 'rgba(31,31,31,.1)',
              }}
            >
              <div className='p-4 sm:p-5'>
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
                    className='p-3.5 sm:p-4'
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
                      className='mt-3 text-sm font-semibold'
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
                      className='mt-3 inline-block text-[8px] font-bold tracking-[0.1em] uppercase'
                      style={{ color: '#354854' }}
                    >
                      Choose service →
                    </span>
                  </div>
                ))}
              </div>
            </article>

            <article
              data-clearline-mockup-card='about'
              className='flex flex-col self-stretch rounded-xl p-5 sm:p-6'
              style={{ backgroundColor: '#ffffff' }}
            >
              <p
                className='text-[9px] font-bold tracking-[0.18em] uppercase'
                style={{ color: '#526777' }}
              >
                About Clearline
              </p>
              <div className='flex flex-1 flex-col justify-center py-5'>
                <h3
                  className='text-[clamp(1.5rem,2.2vw,1.875rem)] leading-[1.04] font-semibold tracking-[-0.045em]'
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
                  className='mt-4 max-w-lg text-xs leading-5'
                  style={{ color: '#5f6368' }}
                >
                  A clear, editorial statement turns the original four-image
                  concept into a practical promise customers can understand.
                </p>
              </div>
              <div className='flex flex-wrap gap-2'>
                {[
                  'Small local team',
                  'Flexible scheduling',
                  'Consistent checklists',
                  'Respectful care',
                ].map((item) => (
                  <span
                    key={item}
                    className='rounded-full border bg-[#dce7ed] px-3 py-1.5 text-[8px] font-semibold shadow-[inset_0_1px_rgba(255,255,255,.55)]'
                    style={{
                      borderColor: 'rgba(82,103,119,.24)',
                      color: '#344b5a',
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>

            <article
              data-clearline-mockup-card='quote'
              className='self-stretch rounded-xl border p-4 shadow-[0_14px_34px_rgba(31,41,55,.12)] sm:p-5'
              style={{
                backgroundColor: '#ffffff',
                borderColor: 'rgba(82,103,119,.12)',
              }}
            >
              <div className='mb-3'>
                <p
                  className='text-[9px] font-bold tracking-[0.18em] uppercase'
                  style={{ color: '#526777' }}
                >
                  Quote prototype
                </p>
                <h3
                  className='mt-1.5 text-xl font-semibold sm:text-2xl'
                  style={{ color: '#1f1f1f' }}
                >
                  A cleaner space starts here.
                </h3>
              </div>
              <div
                data-clearline-quote-panel
                className='rounded-xl border border-[#526777]/20 bg-[#e4edf3] p-3.5 shadow-[0_12px_30px_rgba(31,41,55,.14)] sm:p-4'
              >
                <p
                  className='text-[9px] font-bold tracking-[0.12em] uppercase'
                  style={{ color: '#1f1f1f' }}
                >
                  What can we help with?
                </p>
                <div className='mt-2.5 flex flex-wrap gap-1.5'>
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
                <div className='mt-3 grid grid-cols-2 gap-2'>
                  <div
                    data-clearline-input
                    className='min-h-8 rounded-lg border bg-white px-3 py-2 text-[9px] shadow-[inset_0_1px_2px_rgba(31,41,55,.06)]'
                    style={{
                      borderColor: 'rgba(82,103,119,.28)',
                      color: '#526777',
                    }}
                  >
                    Your name
                  </div>
                  <div
                    data-clearline-input
                    className='min-h-8 rounded-lg border bg-white px-3 py-2 text-[9px] shadow-[inset_0_1px_2px_rgba(31,41,55,.06)]'
                    style={{
                      borderColor: 'rgba(82,103,119,.28)',
                      color: '#526777',
                    }}
                  >
                    you@example.com
                  </div>
                </div>
                <div
                  data-clearline-input
                  className='mt-2 min-h-10 rounded-lg border bg-white px-3 py-2.5 text-[9px] shadow-[inset_0_1px_2px_rgba(31,41,55,.06)]'
                  style={{
                    borderColor: 'rgba(82,103,119,.28)',
                    color: '#526777',
                  }}
                >
                  Home, office, preferred schedule…
                </div>
                <div
                  className='mt-2.5 rounded-lg py-2 text-center text-[8px] font-bold tracking-[0.12em] text-white uppercase'
                  style={{ backgroundColor: '#1f1f1f' }}
                >
                  Request a quote
                </div>
              </div>
              <p
                className='mt-2.5 text-[9px] leading-4'
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
