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
      className={`${embedded ? 'scroll-mt-[var(--site-header-height)] md:scroll-mt-[var(--site-header-height-wide)]' : 'home-viewport-page min-h-[calc(100svh-var(--site-header-height)-var(--site-footer-height))] md:min-h-[calc(100svh-var(--site-header-height-wide)-var(--site-footer-height))]'} adaptive-hero page-gutters mt-[var(--site-header-height)] bg-[#e2e8f2]/80 py-[clamp(0.5rem,1.2vh,0.75rem)] md:mt-[var(--site-header-height-wide)]`}
    >
      <section className='mx-auto flex min-h-full min-w-0 w-full max-w-[82.5rem] flex-col overflow-hidden rounded-[clamp(1rem,1.6vw,1.25rem)] border border-[#2f3e5c]/10 bg-[#f2f4f7] shadow-[0_18px_55px_rgba(31,41,55,0.10)] min-[60rem]:h-full min-[60rem]:min-h-0'>
        <div className='grid min-h-0 min-w-0 flex-1 grid-cols-[minmax(0,1fr)] min-[60rem]:grid-cols-[minmax(0,1fr)_minmax(19rem,0.42fr)]'>
          <div className='home-primary-panel relative flex min-w-0 flex-col items-center justify-center px-[clamp(1rem,3vw,2rem)] py-[clamp(1rem,4vh,3rem)] text-center'>
            <div className='flex w-full flex-col items-center'>
              <h1 className='mt-[clamp(0.5rem,2vh,1.25rem)] max-w-[56.25rem] text-[clamp(2.5rem,9vw,6.5rem)] leading-[1.05] font-bold tracking-[-0.065em] text-[#111] min-[60rem]:text-[clamp(3.25rem,5.8vw,6.5rem)]'>
                Thoughtful design.{' '}
                <span className='text-[#607795]'>Built to work.</span>
              </h1>
              <p className='mt-[clamp(1rem,2.5vh,1.5rem)] max-w-[42rem] text-center text-[clamp(0.875rem,1.25vw,1.125rem)] leading-[1.65] text-[#526985]'>
                I turn ideas into responsive digital experiences through
                intentional UI design and practical front-end development.
              </p>
            </div>

            <div className='mt-[clamp(1rem,3vh,2rem)] grid w-full max-w-[31rem] grid-cols-[repeat(2,minmax(0,1fr))] gap-[clamp(0.4rem,1vw,0.75rem)]'>
              <Link
                href={embedded ? '#work' : '/work'}
                className='inline-flex min-h-11 w-full min-w-0 items-center justify-center gap-[clamp(0.15rem,0.8vw,0.5rem)] overflow-hidden rounded-lg border border-[#526985]/20 bg-[#607795] px-[clamp(0.5rem,1.5vw,1rem)] py-[clamp(0.65rem,1.5vh,0.8rem)] text-[clamp(0.75rem,2.1vw,0.875rem)] font-semibold whitespace-nowrap text-white shadow-[0_7px_18px_rgba(64,86,113,0.14)] transition hover:-translate-y-0.5 hover:bg-[#526985] focus-visible:ring-2 focus-visible:ring-[#607795] focus-visible:ring-offset-2 focus-visible:outline-none'
              >
                Explore Featured Work <span aria-hidden='true'>↗</span>
              </Link>
              <Link
                href={embedded ? '#about' : '/about'}
                className='inline-flex min-h-11 w-full min-w-0 items-center justify-center overflow-hidden rounded-lg border border-[#405671]/25 bg-[#c7d2de] px-[clamp(0.5rem,1.5vw,1rem)] py-[clamp(0.65rem,1.5vh,0.8rem)] text-[clamp(0.75rem,2.1vw,0.875rem)] font-semibold whitespace-nowrap text-[#2f3e5c] shadow-[0_7px_18px_rgba(64,86,113,0.08)] transition hover:-translate-y-0.5 hover:bg-[#b8cadc] focus-visible:ring-2 focus-visible:ring-[#607795] focus-visible:ring-offset-2 focus-visible:outline-none'
              >
                How I work
              </Link>
            </div>
          </div>

          <aside
            data-cursor-reactive='home-dark'
            className='home-about-panel no-scrollbar relative flex min-w-0 flex-col justify-between overflow-y-auto bg-[#1f2937] p-[clamp(0.875rem,2.2vw,2rem)] text-white min-[60rem]:justify-center min-[60rem]:gap-[clamp(1rem,5vh,3.5rem)]'
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
                    sizes='(max-width: 711px) 64px, (max-width: 1422px) 9vw, 128px'
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

            <div className='mt-[clamp(0.75rem,2vh,1.25rem)] border-t border-white/12 pt-[clamp(0.75rem,1.8vh,1rem)] min-[60rem]:mt-0'>
              <p className='flex items-baseline gap-2 whitespace-nowrap min-[60rem]:block'>
                <span className='text-[clamp(1.5rem,3vw,3rem)] leading-none font-bold tracking-[-0.06em] text-[#b8cadc]'>
                  16 years
                </span>
                <span className='text-[clamp(0.7rem,0.9vw,0.875rem)] text-white/55 min-[60rem]:mt-[clamp(0.35rem,1vh,0.5rem)] min-[60rem]:block'>
                  in technical systems
                </span>
              </p>
            </div>
          </aside>
        </div>

        <div
          aria-label='Core capabilities'
          className='home-capabilities grid grid-cols-1 border-t border-[#2f3e5c]/15 bg-[#b7c5dd] sm:grid-cols-2 md:grid-cols-5'
        >
          {capabilities.map((capability, index) => (
            <div
              key={capability}
              className='home-capability flex items-center gap-2 border-b border-[#2f3e5c]/12 px-[clamp(0.65rem,1.5vw,1.25rem)] py-[clamp(0.5rem,1.4vh,1rem)] whitespace-nowrap last:border-b-0 sm:block sm:whitespace-normal md:border-r md:border-b-0 md:whitespace-nowrap md:last:border-r-0 sm:[&:nth-child(odd)]:border-r'
            >
              <span className='text-[clamp(0.58rem,0.7vw,0.68rem)] font-bold text-[#607795]'>
                0{index + 1}
              </span>
              <p className='text-[clamp(0.72rem,0.9vw,0.875rem)] leading-[1.4] font-semibold text-[#1f2937] sm:mt-[clamp(0.25rem,0.8vh,0.5rem)]'>
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
