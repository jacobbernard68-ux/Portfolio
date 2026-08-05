import Image from "next/image";

export default function ProfessionalCleaningFigmaPage() {
  return <main className="min-h-screen bg-[#e4ebf5] p-4 text-black sm:p-8 lg:grid lg:place-items-center lg:p-12">
    <section className="relative mx-auto w-full max-w-[1320px] overflow-hidden rounded-xl bg-white p-5 shadow-[0_18px_60px_rgba(0,0,0,0.08)] sm:p-8 lg:p-10">
      <header className="flex flex-col gap-4 pr-28 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-medium tracking-[0.01em] sm:text-3xl">Professional Cleaning</h1>
        <p className="max-w-xl text-sm leading-6 sm:text-right sm:text-lg sm:leading-8">Precision care for workspaces, studios,<br className="hidden sm:block"/> and everyday environments.</p>
      </header>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <div className="grid gap-4 md:grid-rows-[0.8fr_1fr]">
          <figure className="relative min-h-[240px] overflow-hidden"><Image src="/images/portfolio/cleaning-a.png" alt="A surface being cleaned with precision" fill priority sizes="(max-width: 767px) 100vw, 50vw" className="object-cover"/><figcaption className="absolute bottom-5 left-5 text-lg font-medium text-white">Precision</figcaption></figure>
          <figure className="relative min-h-[300px] overflow-hidden"><Image src="/images/portfolio/cleaning-c.png" alt="Orderly commercial meeting room" fill sizes="(max-width: 767px) 100vw, 50vw" className="object-cover"/><figcaption className="absolute bottom-5 left-5 text-lg font-medium text-white drop-shadow-sm">Environment</figcaption></figure>
        </div>
        <div className="grid gap-4 md:grid-rows-[1fr_0.87fr]">
          <figure className="relative min-h-[300px] overflow-hidden"><Image src="/images/portfolio/cleaning-b.png" alt="Minimal and orderly home workspace" fill priority sizes="(max-width: 767px) 100vw, 50vw" className="object-cover"/><figcaption className="absolute bottom-4 right-[18%] text-lg font-medium">Order</figcaption></figure>
          <figure className="relative min-h-[260px] overflow-hidden"><Image src="/images/portfolio/cleaning-d.png" alt="Professional sanitation detail" fill sizes="(max-width: 767px) 100vw, 50vw" className="object-cover"/><figcaption className="absolute bottom-5 right-5 text-lg font-medium text-white drop-shadow-sm">Care</figcaption></figure>
        </div>
      </div>
    </section>
  </main>;
}
