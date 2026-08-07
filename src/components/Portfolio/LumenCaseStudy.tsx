import Image from 'next/image';
import Link from 'next/link';
import type { PortfolioProject } from './projectData';
import ReturnToWork from './ReturnToWork';

const chapters = [
  {
    day: 'Day One',
    title: 'Opening Pulse',
    role: 'Anticipation',
    image: '/images/portfolio/festival-pulse.png',
    copy: 'A quiet stage and visible rigging establish scale before the audience arrives.',
  },
  {
    day: 'Day Two',
    title: 'Neon Current',
    role: 'Climax',
    image: '/images/portfolio/festival-current.png',
    copy: 'The darkest background and largest type turn the central performance into the visual peak.',
  },
  {
    day: 'Day Three',
    title: 'Lumen Finale',
    role: 'Afterglow',
    image: '/images/portfolio/festival-finale.png',
    copy: 'Daylight and open space release the tension without breaking the visual system.',
  },
];

export default function LumenCaseStudy({
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
    <main className='viewport-page page-gutters bg-[#dce4ed] lg:overflow-hidden'>
      <article
        data-internal-scroll
        className='no-scrollbar relative mx-auto max-w-[min(90rem,100%)] overflow-hidden rounded-[var(--fluid-radius)] bg-[#11171b] text-[#f5f7f8] shadow-[0_14px_42px_rgba(16,24,32,.22)] ring-1 ring-white/10 lg:h-full lg:overflow-y-auto'
      >
        <ReturnToWork tone='dark' originClassName='text-[#d7e0e3]' />
        <div className='grid lg:grid-cols-[0.88fr_1.12fr]'>
          <div className='fluid-card-space flex min-h-[clamp(25rem,58svh,36.875rem)] flex-col justify-between bg-[linear-gradient(155deg,#475c61_0%,#263136_72%,#151b20_100%)]'>
            <div>
              <p className='mt-10 text-xs font-bold tracking-[0.18em] text-[#aacbd5] uppercase'>
                {project.number} · {project.type}
              </p>
              <h1 className='mt-4 max-w-xl text-5xl font-semibold tracking-[-0.055em] sm:text-6xl'>
                {project.title}
              </h1>
              <p className='mt-6 max-w-xl text-base leading-7 text-[#d7e0e3]'>
                {project.summary}
              </p>
              <div className='mt-7 flex flex-wrap gap-2'>
                {[
                  'Narrative pacing',
                  'Responsive editorial grid',
                  'Controlled color',
                ].map((item) => (
                  <span
                    key={item}
                    className='rounded-full border border-white/15 bg-white/[.06] px-3 py-1.5 text-[10px] font-semibold text-[#d7e0e3]'
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className='mt-10 flex flex-wrap items-center gap-3'>
              <span className='rounded-full bg-[#aacbd5] px-4 py-2 text-xs font-semibold text-[#1b272d]'>
                {project.status}
              </span>
              {project.liveHref && (
                <Link
                  href={project.liveHref}
                  target='_blank'
                  className='rounded-full bg-[#f5f7f8] px-5 py-2.5 text-xs font-bold tracking-[0.12em] text-[#182126] uppercase transition hover:bg-[#d7e0e3]'
                >
                  {project.liveLabel} ↗
                </Link>
              )}
              {project.conceptHref && (
                <Link
                  href={project.conceptHref}
                  target='_blank'
                  className='rounded-full border border-white/25 px-5 py-2.5 text-xs font-bold tracking-[0.12em] text-[#e8eef0] uppercase hover:bg-white/10'
                >
                  Original concept ↗
                </Link>
              )}
            </div>
          </div>

          <div className='grid min-h-[clamp(23rem,58svh,36.875rem)] place-items-center bg-[#1b242a] p-[clamp(1.25rem,3vw,2.5rem)]'>
            <div
              data-glow-card
              className='relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/15 bg-[#263136] shadow-[0_24px_65px_rgba(0,0,0,.42)]'
            >
              <div
                className='absolute inset-x-0 top-0 z-20 flex h-7 items-center gap-1.5 border-b border-white/10 bg-[#33434a] px-3'
                aria-hidden='true'
              >
                <span className='size-2 rounded-full bg-[#8ea6ad]' />
                <span className='size-2 rounded-full bg-[#647c83]' />
                <span className='size-2 rounded-full bg-[#d7e0e3]' />
              </div>
              <Image
                src={project.heroImage ?? project.image}
                alt='Lumen Stage festival landing page without portfolio controls'
                fill
                priority
                sizes='(max-width: 1023px) 90vw, 55vw'
                className='object-cover object-top pt-7'
              />
            </div>
          </div>
        </div>

        <section className='grid gap-px bg-[#52666d] md:grid-cols-3'>
          {story.map(([label, copy]) => (
            <div key={label} className='bg-[#202a30] p-7 sm:p-9'>
              <p className='text-[10px] font-bold tracking-[0.18em] text-[#aacbd5] uppercase'>
                {label}
              </p>
              <p className='mt-4 text-sm leading-6 text-[#d7e0e3]'>{copy}</p>
            </div>
          ))}
        </section>

        <section className='bg-[linear-gradient(180deg,#263136_0%,#12161b_58%,#263136_100%)] p-4 sm:p-8'>
          <div className='mb-6 flex flex-wrap items-end justify-between gap-5'>
            <div>
              <p className='text-[9px] font-bold tracking-[0.2em] text-[#aacbd5] uppercase'>
                Experience architecture
              </p>
              <h2 className='mt-2 text-3xl font-semibold tracking-[-0.04em]'>
                Three days. One controlled crescendo.
              </h2>
            </div>
            <p className='max-w-md text-sm leading-6 text-[#d7e0e3]'>
              The coded experience turns the original still composition into a
              paced editorial scroll.
            </p>
          </div>

          <div className='grid gap-4 lg:grid-cols-3'>
            {chapters.map((chapter, index) => (
              <article
                key={chapter.day}
                className={`overflow-hidden rounded-xl border border-white/10 ${index === 1 ? 'bg-[#1a2025] lg:-translate-y-2' : 'bg-[#34444a]'}`}
              >
                <figure
                  className={`relative ${index === 1 ? 'aspect-[4/3]' : 'aspect-[16/11]'}`}
                >
                  <Image
                    src={chapter.image}
                    alt={`${chapter.title} festival scene`}
                    fill
                    sizes='(max-width: 1023px) 100vw, 33vw'
                    className='object-cover'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10' />
                  <figcaption
                    className={`absolute border-white/15 bg-[#172229]/80 px-3 py-2 shadow-[0_10px_28px_rgba(0,0,0,.24)] backdrop-blur-[2px] ${index === 0 ? 'inset-x-0 bottom-0 border-t border-l-4 border-l-[#aacbd5]' : index === 1 ? 'top-0 left-0 max-w-[68%] rounded-br-lg border-r border-b border-l-4 border-l-[#aacbd5]' : 'top-0 right-0 max-w-[68%] rounded-bl-lg border-r-4 border-b border-l border-r-[#aacbd5] text-right'}`}
                  >
                    <div
                      className={`flex items-center gap-3 ${index === 2 ? 'flex-row-reverse' : ''}`}
                    >
                      <span
                        className='block size-1 shrink-0 rounded-full bg-[#aacbd5] shadow-[0_0_12px_rgba(170,203,213,.85)]'
                        aria-hidden='true'
                      />
                      <div
                        className={
                          index === 0 ? 'flex items-baseline gap-3' : ''
                        }
                      >
                        <p className='text-[6px] font-bold tracking-[0.2em] text-[#aacbd5] uppercase'>
                          {chapter.day} · {chapter.role}
                        </p>
                        <h3
                          className={`${index === 0 ? '' : 'mt-0.5'} text-xs leading-none font-semibold whitespace-nowrap text-[#f5f7f8]`}
                        >
                          {chapter.title}
                        </h3>
                      </div>
                    </div>
                  </figcaption>
                </figure>
                <p className='p-5 text-xs leading-5 text-[#d7e0e3]'>
                  {chapter.copy}
                </p>
              </article>
            ))}
          </div>

          <div className='mt-6 grid gap-4 lg:grid-cols-[1.05fr_.95fr]'>
            <article className='overflow-hidden rounded-xl border border-white/10 bg-[#182126]'>
              <div className='grid min-h-[clamp(18rem,40svh,20.625rem)] md:grid-cols-[minmax(0,.75fr)_minmax(0,1.25fr)]'>
                <div className='flex flex-col justify-between p-6'>
                  <div>
                    <p className='text-[9px] font-bold tracking-[0.18em] text-[#aacbd5] uppercase'>
                      Responsive system
                    </p>
                    <h3 className='mt-3 text-2xl leading-tight font-semibold'>
                      Alternation creates energy without adding noise.
                    </h3>
                  </div>
                  <div className='mt-8 grid grid-cols-2 gap-2 text-[9px] font-semibold tracking-[0.12em] text-[#d7e0e3] uppercase'>
                    <span className='border-t border-white/20 pt-3'>
                      40 / 60 grid
                    </span>
                    <span className='border-t border-white/20 pt-3'>
                      Mobile reflow
                    </span>
                    <span className='border-t border-white/20 pt-3'>
                      Clear hierarchy
                    </span>
                    <span className='border-t border-white/20 pt-3'>
                      Reduced motion
                    </span>
                  </div>
                </div>
                <figure className='relative min-h-[clamp(17rem,36svh,18.75rem)]'>
                  <Image
                    src='/images/portfolio/lumen-card-tall.png'
                    alt='Full Lumen Stage page sequence'
                    fill
                    sizes='(max-width: 767px) 100vw, 45vw'
                    className='object-cover object-top'
                  />
                  <div className='absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#182126] to-transparent' />
                </figure>
              </div>
            </article>

            <article className='rounded-xl bg-[#d7e0e3] p-6 text-[#182126]'>
              <p className='text-[9px] font-bold tracking-[0.18em] text-[#52666d] uppercase'>
                Color as narrative
              </p>
              <h3 className='mt-3 text-2xl font-semibold tracking-[-0.035em]'>
                The gradient carries the emotional timeline.
              </h3>
              <div className='mt-6 overflow-hidden rounded-xl border border-[#182126]/10'>
                {[
                  ['Anticipation', '#475C61', '0%'],
                  ['Momentum', '#3A4A50', '35%'],
                  ['Climax', '#12161B', '55%'],
                  ['Afterglow', '#263136', '100%'],
                ].map(([label, color, stop]) => (
                  <div
                    key={label}
                    className='flex items-center justify-between px-4 py-4 text-white'
                    style={{ backgroundColor: color }}
                  >
                    <span className='text-xs font-semibold'>{label}</span>
                    <span className='text-[9px] tracking-[0.16em] text-white/70 uppercase'>
                      {color} · {stop}
                    </span>
                  </div>
                ))}
              </div>
              <p className='mt-5 text-xs leading-5 text-[#52666d]'>
                The darkest point lands at Day Two—the performance climax—then
                lifts into a quieter closing tone.
              </p>
            </article>
          </div>
        </section>
      </article>
    </main>
  );
}
