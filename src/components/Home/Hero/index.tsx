import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="home"
      className="mt-[88px] flex min-h-[calc(100svh-176px)] items-center overflow-hidden bg-transparent py-16 md:mt-[120px] md:h-[calc(100svh-208px)] md:min-h-0 md:py-12"
    >
      <div className="mx-auto grid w-full max-w-[1200px] items-center gap-14 px-6 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-0 xl:px-0">
        <div className="relative z-10 max-w-[690px]">
          <h1 className="max-w-[660px] text-[42px] font-bold leading-[1.08] tracking-[-0.035em] text-[#111] sm:text-5xl md:text-[56px] md:leading-[64px]">
            UX Designer building structured, scalable experiences
          </h1>
          <p className="mt-8 text-base leading-6 text-[#333]">
            Designing systems that stay intuitive as products evolve.
          </p>
          <Link
            href="/work"
            className="mt-8 inline-flex rounded-lg bg-[#2f3e5c] px-6 py-4 text-base font-normal leading-6 text-white shadow-[0_8px_24px_rgba(47,62,92,0.18)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#253149] hover:shadow-lg"
          >
            View Work
          </Link>
        </div>

        <Link
          href="/beans-place/index.html"
          target="_blank"
          rel="noreferrer"
          aria-label="View selected work"
          className="relative aspect-[55/37] w-full overflow-hidden rounded-2xl bg-white shadow-[0_12px_40px_rgba(0,0,0,0.1)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(0,0,0,0.14)] lg:-ml-6 lg:max-w-[590px]"
        >
          <Image
            src="/images/portfolio/beans/home-preview-tall.png"
            alt="The Bean's Place coffee shop website home page"
            fill
            priority
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 590px"
          />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
