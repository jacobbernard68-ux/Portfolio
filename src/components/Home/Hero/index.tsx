import Link from "next/link";
import ResumeActions from "./ResumeActions";

const capabilities = [
  "Product thinking",
  "Interface design",
  "Frontend development",
  "Design systems",
  "Enterprise experience",
];

const Hero = () => {
  return (
    <main className="mt-[88px] min-h-[calc(100svh-88px)] overflow-x-hidden bg-[#e2e8f2]/80 px-3 py-2 sm:px-8 sm:py-3 md:mt-[120px] md:min-h-[calc(100svh-120px)] lg:px-[60px]">
      <section className="mx-auto flex min-h-[calc(100svh-104px)] w-full max-w-[1320px] flex-col overflow-hidden rounded-2xl border border-[#2f3e5c]/10 bg-[#f2f4f7] shadow-[0_18px_55px_rgba(31,41,55,0.10)] sm:min-h-[calc(100svh-112px)] md:min-h-[calc(100svh-144px)]">
        <div className="grid flex-1 lg:grid-cols-[minmax(0,1fr)_minmax(19rem,0.42fr)]">
          <div className="relative flex min-w-0 flex-col items-center justify-center px-4 py-8 text-center sm:px-7 sm:py-16 lg:p-8">
            <div className="flex w-full flex-col items-center">
              <p className="mb-4 flex items-center justify-center gap-3 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-[#526985] sm:mb-7 lg:absolute lg:left-1/2 lg:top-[12%] lg:mb-0 lg:w-max lg:-translate-x-1/2">
                <span className="inline-block h-px w-10 bg-[#607795]" />
                UX designer · Frontend developer
              </p>
              <h1 className="mt-2 max-w-[900px] text-[clamp(2.6rem,11vw,6.5rem)] font-bold leading-[0.91] tracking-[-0.065em] text-[#111] sm:mt-5 sm:text-[clamp(3.5rem,8vw,6.5rem)] lg:text-[clamp(3.75rem,6.2vw,6.5rem)]">
                Making complex products <span className="text-[#607795]">feel clear.</span>
              </h1>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-2.5 sm:mt-8 sm:gap-3">
              <Link href="/work" className="inline-flex items-center gap-3 rounded-lg bg-[#1f2937] px-5 py-3.5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(31,41,55,0.18)] transition hover:-translate-y-0.5 hover:bg-[#2f3e5c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1f2937] focus-visible:ring-offset-2">
                Explore selected work <span aria-hidden="true">↗</span>
              </Link>
              <Link href="/about" className="inline-flex items-center rounded-lg border border-[#607795]/45 px-5 py-3.5 text-sm font-semibold text-[#405671] transition hover:border-[#2f3e5c] hover:bg-[#e2e8f2] hover:text-[#1f2937] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#607795] focus-visible:ring-offset-2">
                How I work
              </Link>
            </div>
          </div>

          <aside data-cursor-reactive="home-dark" className="relative flex min-w-0 flex-col justify-between bg-[#1f2937] p-4 text-white sm:p-7 lg:justify-center lg:gap-[clamp(1.75rem,8vh,5rem)] lg:p-8">
            <div aria-hidden="true" className="absolute inset-y-0 left-0 w-px bg-[#b7c5dd]/45" />
            <div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#b8cadc]">A little about me</p>
                <ResumeActions />
              </div>
              <p className="mt-5 max-w-[370px] text-base font-medium leading-7 tracking-[-0.02em] text-white/88 sm:mt-7 xl:text-lg">
                I combine product thinking, interface design, and enterprise technical experience to turn complex systems into intuitive, useful experiences.
              </p>
            </div>

            <div className="mt-5 border-t border-white/12 pt-4 sm:mt-8 sm:pt-5 lg:mt-0">
              <p className="text-4xl font-bold leading-none tracking-[-0.06em] text-[#b8cadc] xl:text-5xl">16 years</p>
              <p className="mt-2 text-sm text-white/55">in technical systems</p>
            </div>
          </aside>
        </div>

        <div aria-label="Core capabilities" className="grid border-t border-[#2f3e5c]/15 bg-[#b7c5dd] sm:grid-cols-2 lg:grid-cols-5">
          {capabilities.map((capability, index) => (
            <div key={capability} className="border-b border-[#2f3e5c]/12 px-4 py-2.5 last:border-b-0 sm:py-3 sm:[&:nth-last-child(-n+2)]:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0 xl:px-5 xl:py-4">
              <span className="text-[10px] font-bold text-[#607795]">0{index + 1}</span>
              <p className="mt-1 text-sm font-semibold leading-5 text-[#1f2937] sm:mt-2">{capability}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Hero;
