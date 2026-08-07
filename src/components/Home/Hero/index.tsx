import Link from 'next/link';
import Image from 'next/image';
import ResumeActions from './ResumeActions';

const capabilities = [
  'Product thinking',
  'Interface design',
  'Frontend development',
  'Design systems',
  'Enterprise experience',
];

const Hero = ({ embedded = false }: { embedded?: boolean }) => {
  return (
    <main
      id={embedded ? 'home' : undefined}
      className={`${embedded ? 'scroll-mt-[var(--site-header-height)] md:scroll-mt-[var(--site-header-height-wide)]' : 'mt-[var(--site-header-height)] md:mt-[var(--site-header-height-wide)]'} page-gutters min-h-[calc(100svh-var(--site-header-height)-var(--site-footer-height))] bg-[#e2e8f2]/80 py-[clamp(0.5rem,1.2vh,0.75rem)] md:min-h-[calc(100svh-var(--site-header-height-wide)-var(--site-footer-height))] lg:h-[calc(100svh-var(--site-header-height-wide)-var(--site-footer-height))]`}
    >
      <section className='mx-auto flex min-h-full w-full max-w-[82.5rem] flex-col rounded-[clamp(0.75rem,1.5vw,1rem)] border border-[#2f3e5c]/10 bg-[#f2f4f7] shadow-[0_18px_55px_rgba(31,41,55,0.10)] lg:h-full lg:min-h-0 lg:overflow-hidden'>
        <div className='grid min-h-0 flex-1 lg:grid-cols-[minmax(0,1fr)_minmax(19rem,0.42fr)]'>
          <div className='relative flex min-w-0 flex-col items-center justify-center px-[clamp(1rem,3vw,2rem)] py-[clamp(1rem,4vh,3rem)] text-center'>
            <div className='flex w-full flex-col items-center'>
              <p className='mb-[clamp(0.75rem,2vh,1.75rem)] flex items-center justify-center gap-[clamp(0.5rem,1vw,0.75rem)] text-center text-[clamp(0.6rem,0.75vw,0.7rem)] font-bold tracking-[0.2em] text-[#526985] uppercase lg:absolute lg:top-[clamp(6%,12vh,12%)] lg:left-1/2 lg:mb-0 lg:w-max lg:-translate-x-1/2'>
                <span className='inline-block h-px w-[clamp(1.5rem,3vw,2.5rem)] bg-[#607795]' />
                UX designer · Frontend developer
              </p>
              <h1 className='mt-[clamp(0.5rem,2vh,1.25rem)] max-w-[56.25rem] text-[clamp(2.5rem,9vw,6.5rem)] leading-[0.91] font-bold tracking-[-0.065em] text-[#111] lg:text-[clamp(3.25rem,5.8vw,6.5rem)]'>
                Making complex products{' '}
                <span className='text-[#607795]'>feel clear.</span>
              </h1>
            </div>

            <div className='mt-[clamp(1rem,3vh,2rem)] flex flex-wrap justify-center gap-2.5 sm:gap-3'>
              <Link
                href={embedded ? '#work' : '/work'}
                className='inline-flex items-center gap-[clamp(0.5rem,1vw,0.75rem)] rounded-lg bg-[#1f2937] px-[clamp(1rem,2vw,1.25rem)] py-[clamp(0.7rem,1.5vh,0.875rem)] text-[clamp(0.78rem,0.9vw,0.875rem)] font-semibold text-white shadow-[0_10px_24px_rgba(31,41,55,0.18)] transition hover:-translate-y-0.5 hover:bg-[#2f3e5c] focus-visible:ring-2 focus-visible:ring-[#1f2937] focus-visible:ring-offset-2 focus-visible:outline-none'
              >
                Explore Featured Work <span aria-hidden='true'>↗</span>
              </Link>
              <Link
                href={embedded ? '#about' : '/about'}
                className='inline-flex items-center rounded-lg border border-[#607795]/45 px-[clamp(1rem,2vw,1.25rem)] py-[clamp(0.7rem,1.5vh,0.875rem)] text-[clamp(0.78rem,0.9vw,0.875rem)] font-semibold text-[#405671] transition hover:border-[#2f3e5c] hover:bg-[#e2e8f2] hover:text-[#1f2937] focus-visible:ring-2 focus-visible:ring-[#607795] focus-visible:ring-offset-2 focus-visible:outline-none'
              >
                How I work
              </Link>
            </div>
          </div>

          <aside
            data-cursor-reactive='home-dark'
            className='no-scrollbar relative flex min-w-0 flex-col justify-between overflow-y-auto bg-[#1f2937] p-[clamp(0.875rem,2.2vw,2rem)] text-white lg:justify-center lg:gap-[clamp(1rem,5vh,3.5rem)]'
          >
            <div
              aria-hidden='true'
              className='absolute inset-y-0 left-0 w-px bg-[#b7c5dd]/45'
            />
            <div>
              <div className='flex flex-row items-center gap-[clamp(0.75rem,2vw,1.5rem)] text-left'>
                <div className='relative size-[clamp(4rem,9vw,8rem)] shrink-0 overflow-hidden rounded-[clamp(0.75rem,1.5vw,1rem)] ring-1 ring-white/15'>
                  <Image
                    src='/images/jacob-bernard-headshot.png'
                    alt='Professional headshot of Jacob Bernard'
                    fill
                    sizes='(max-width: 639px) 112px, 128px'
                    className='object-cover object-[50%_34%]'
                  />
                </div>
                <div className='flex min-w-0 flex-col justify-center'>
                  <p className='text-[clamp(0.58rem,0.72vw,0.68rem)] font-bold tracking-[0.16em] text-[#b8cadc] uppercase'>
                    A little about me
                  </p>
                  <p className='mt-[clamp(0.4rem,1.2vh,0.75rem)] max-w-[23rem] text-[clamp(0.75rem,1vw,1.05rem)] leading-[clamp(1.15rem,1.65vw,1.65rem)] font-medium tracking-[-0.02em] text-white/88'>
                    I combine product thinking, interface design, and enterprise
                    technical experience to turn complex systems into intuitive,
                    useful experiences.
                  </p>
                </div>
              </div>
              <ResumeActions compact />
            </div>

            <div className='mt-[clamp(0.75rem,2vh,1.25rem)] border-t border-white/12 pt-[clamp(0.75rem,1.8vh,1rem)] lg:mt-0'>
              <p className='text-[clamp(1.5rem,3vw,3rem)] leading-none font-bold tracking-[-0.06em] text-[#b8cadc]'>
                16 years
              </p>
              <p className='mt-[clamp(0.35rem,1vh,0.5rem)] text-[clamp(0.7rem,0.9vw,0.875rem)] text-white/55'>
                in technical systems
              </p>
            </div>
          </aside>
        </div>

        <div
          aria-label='Core capabilities'
          className='no-scrollbar grid auto-cols-[minmax(9rem,1fr)] grid-flow-col overflow-x-auto border-t border-[#2f3e5c]/15 bg-[#b7c5dd] sm:auto-cols-auto sm:grid-flow-row sm:grid-cols-2 sm:overflow-visible lg:grid-cols-5'
        >
          {capabilities.map((capability, index) => (
            <div
              key={capability}
              className='border-b border-[#2f3e5c]/12 px-[clamp(0.75rem,1.5vw,1.25rem)] py-[clamp(0.55rem,1.4vh,1rem)] last:border-b-0 lg:border-r lg:border-b-0 lg:last:border-r-0 sm:[&:nth-last-child(-n+2)]:border-b-0'
            >
              <span className='text-[clamp(0.58rem,0.7vw,0.68rem)] font-bold text-[#607795]'>
                0{index + 1}
              </span>
              <p className='mt-[clamp(0.25rem,0.8vh,0.5rem)] text-[clamp(0.72rem,0.9vw,0.875rem)] leading-[1.4] font-semibold text-[#1f2937]'>
                {capability}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Hero;
