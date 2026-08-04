import Image from "next/image";

const AboutSection = () => {
  return (
    <section id="about" className="scroll-mt-28 overflow-hidden">
      <div className="relative mx-auto max-w-[1170px] px-4 py-20 sm:px-8 lg:py-25 xl:px-0">
        <div className="about-divider-gradient absolute bottom-0 left-0 h-[1px] w-full"></div>

        <div className="brand-surface flex flex-wrap justify-between gap-11 rounded-2xl p-8 md:p-12 xl:flex-nowrap">
          <div className="wow fadeInLeft w-full max-w-[570px]">
            <span className="mb-5 block font-semibold text-[#2f3e5c]">
              About Our App
            </span>

            <h2 className="mb-5 text-2xl font-bold text-[#111] sm:text-4xl xl:text-[48px] xl:leading-[1.15]">
              10,000+ Writers, Marketers, & Business owners Love AI Tool.
            </h2>
            <p className="mb-9 font-medium">
              Build SaaS AI applications using OpenAI and Next.js, this kit
              comes with pre-configured and pre-built examples, making it easier
              to quickly kickstart your AI startup.
            </p>

            <a
              href="/ai-examples"
              className="hero-button-gradient inline-flex rounded-lg px-7 py-3 font-medium text-white duration-300 ease-in hover:opacity-80"
            >
              Start Writing - It{`'`}s Free
            </a>
          </div>

          <div className="wow fadeInRight relative hidden aspect-556/401 w-full xl:block">
            <Image src="/images/about/about.svg" alt="about" fill />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
