import {
  getPortfolioProject,
  portfolioProjects,
} from '@/components/Portfolio/projectData';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import BarbershopCaseStudy from '@/components/Portfolio/BarbershopCaseStudy';
import ClearlineCaseStudy from '@/components/Portfolio/ClearlineCaseStudy';
import LumenCaseStudy from '@/components/Portfolio/LumenCaseStudy';
import ReturnToWork from '@/components/Portfolio/ReturnToWork';
import ProjectWebsiteLink from '@/components/Portfolio/ProjectWebsiteLink';
import BackendDataSystemsCaseStudy from '@/components/Portfolio/BackendDataSystemsCaseStudy';

type Props = { params: Promise<{ slug: string }> };
export const generateStaticParams = () =>
  portfolioProjects.map(({ slug }) => ({ slug }));
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getPortfolioProject((await params).slug);
  return project
    ? {
        title: `${project.title} | Jacob Bernard`,
        description: project.summary,
      }
    : {};
}

export default async function ProjectPage({ params }: Props) {
  const project = getPortfolioProject((await params).slug);
  if (!project) notFound();
  if (project.slug === 'backend-data-systems')
    return <BackendDataSystemsCaseStudy project={project} />;
  if (project.slug === 'vintage-barbershop')
    return <BarbershopCaseStudy project={project} />;
  if (project.slug === 'professional-cleaning')
    return <ClearlineCaseStudy project={project} />;
  if (project.slug === 'lumen-festival')
    return <LumenCaseStudy project={project} />;
  const isBeansPlace = project.slug === 'beans-place';
  const story = [
    ['Challenge', project.challenge],
    ['Approach', project.approach],
    ['Outcome', project.outcome],
  ];
  return (
    <main data-internal-scroll className='case-study-viewport viewport-page page-gutters bg-[#e2e8f2]/80 lg:overflow-y-auto'>
      <article
        data-internal-scroll
        data-case-theme={isBeansPlace ? 'coffee' : 'cool'}
        className={`no-scrollbar relative mx-auto max-w-[min(90rem,100%)] overflow-hidden rounded-[var(--fluid-radius)] shadow-[0_12px_35px_rgba(31,41,55,0.1)] ring-1 ring-[#2f3e5c]/8 ${isBeansPlace ? 'bg-[#f7f1e7]' : 'bg-[#f7f8fa]'}`}
      >
        <ReturnToWork
          originClassName={isBeansPlace ? 'text-[#806648]' : 'text-[#607795]'}
        />
        <div className='grid lg:grid-cols-[0.9fr_1.1fr]'>
          <div
            data-case-intro
            className='fluid-card-space flex min-h-[clamp(24rem,55svh,35rem)] flex-col justify-between'
          >
            <div>
              <p
                className={`mt-10 text-xs font-bold tracking-[0.18em] uppercase ${isBeansPlace ? 'text-[#806648]' : 'text-[#607795]'}`}
              >
                {project.number} · {project.type}
              </p>
              <h1 className='mt-4 max-w-xl text-4xl font-semibold tracking-[-0.05em] text-[#111] sm:text-6xl'>
                {project.title}
              </h1>
              <p className='mt-6 max-w-xl text-base leading-7 text-slate-600'>
                {project.summary}
              </p>
              {isBeansPlace && (
                <div className='mt-7 flex flex-wrap gap-2'>
                  {[
                    'Catalog browsing',
                    'Persistent cart',
                    'Conservation story',
                  ].map((item) => (
                    <span
                      key={item}
                      className='rounded-full border border-[#806648]/15 bg-white/55 px-3 py-1.5 text-[10px] font-semibold text-[#6d553d]'
                    >
                      {item}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <div className='mt-10 flex flex-wrap items-center gap-3'>
              <span
                className={`rounded-full px-4 py-2 text-xs font-semibold ${isBeansPlace ? 'bg-[#eadcc7] text-[#6d553d]' : 'bg-[#e2e8f2] text-[#405671]'}`}
              >
                {project.status}
              </span>
              {project.liveHref && (
                <ProjectWebsiteLink
                  href={project.liveHref}
                  project={project.slug}
                  className={`case-study-action case-study-action--primary rounded-full px-5 py-2.5 text-xs font-bold tracking-[0.12em] text-white uppercase ${isBeansPlace ? 'bg-[#5b3d28] hover:bg-[#3e291b]' : 'bg-[#26364f] hover:bg-[#111a28]'}`}
                >
                  {project.liveLabel} ↗
                </ProjectWebsiteLink>
              )}
              {project.conceptHref && (
                <Link
                  href={project.conceptHref}
                  className='case-study-action case-study-action--secondary rounded-full border border-[#26364f]/20 px-5 py-2.5 text-xs font-bold tracking-[0.12em] text-[#26364f] uppercase hover:bg-[#e2e8f2]'
                >
                  {project.conceptLabel} ↗
                </Link>
              )}
            </div>
          </div>
          <div
            className={`relative min-h-[clamp(22rem,55svh,35rem)] ${isBeansPlace ? 'grid place-items-center bg-[#3f2b20] p-[clamp(1.25rem,3vw,2.5rem)]' : 'bg-[#b7c7d8]'}`}
          >
            {isBeansPlace ? (
              <div className='relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/15 bg-[#f7f1e7] shadow-[0_22px_55px_rgba(0,0,0,0.32)]'>
                <div
                  className='absolute inset-x-0 top-0 z-10 flex h-7 items-center gap-1.5 border-b border-black/10 bg-[#eadcc7] px-3'
                  aria-hidden='true'
                >
                  <span className='size-2 rounded-full bg-[#a56a52]' />
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
            ) : (
              <Image
                src={project.heroImage ?? project.image}
                alt={project.imageAlt}
                fill
                priority
                sizes='(max-width: 1023px) 100vw, 55vw'
                className='object-cover object-top'
              />
            )}
          </div>
        </div>
        <section
          data-case-story
          className={`grid gap-px md:grid-cols-3 ${isBeansPlace ? 'bg-[#d8c5aa]' : 'bg-[#ced7e2]'}`}
        >
          {story.map(([label, copy]) => (
            <div
              data-case-story-card
              key={label}
              className={`p-7 sm:p-9 ${isBeansPlace ? 'bg-[#fffaf2]' : 'bg-white'}`}
            >
              <p
                className={`text-[10px] font-bold tracking-[0.18em] uppercase ${isBeansPlace ? 'text-[#806648]' : 'text-[#607795]'}`}
              >
                {label}
              </p>
              <p className='mt-4 text-sm leading-6 text-slate-600'>{copy}</p>
            </div>
          ))}
        </section>
        {isBeansPlace ? (
          <section className='grid gap-5 p-4 sm:grid-cols-2 sm:p-8'>
            <article className='overflow-hidden rounded-xl bg-[#1f1711] text-white'>
              <div className='relative aspect-[16/10]'>
                <Image
                  src='/beans-place/assets/hero-beans-CZ7hnvdk.png'
                  alt="Coffee beans and The Bean's Place hero presentation"
                  fill
                  sizes='(max-width: 639px) 100vw, 50vw'
                  className='object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-r from-black/85 via-black/30 to-transparent' />
                <div className='absolute top-0 left-0 flex max-w-[58%] flex-col p-6 text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.8)]'>
                  <p className='text-[9px] font-bold tracking-[0.18em] text-white uppercase'>
                    Landing experience
                  </p>
                  <h2 className='mt-3 text-2xl leading-tight font-semibold text-white'>
                    Coffee with a story behind every origin.
                  </h2>
                </div>
              </div>
            </article>
            <article
              data-beans-product-preview
              className='overflow-hidden rounded-xl bg-[#f3e5ce] p-5'
            >
              <p className='text-[9px] font-bold tracking-[0.18em] text-[#806648] uppercase'>
                Shop · Product discovery
              </p>
              <h2 className='mt-2 text-xl font-semibold text-[#37261b]'>
                Explore the roast collection
              </h2>
              <div className='mt-4 grid grid-cols-3 gap-3'>
                {[
                  [
                    '/beans-place/assets/Colombian-Supremo-Bag-BbW_6Nqy.png',
                    'Colombia',
                  ],
                  [
                    '/beans-place/assets/Ethiopian-Harrar-Bag-CkINGDNn.png',
                    'Ethiopia',
                  ],
                  [
                    '/beans-place/assets/Sumatra-Mandheling-Bag-ZJsGOy8N.png',
                    'Sumatra',
                  ],
                ].map(([src, label]) => (
                  <div
                    key={src}
                    className='rounded-lg bg-white/65 p-2 text-center'
                  >
                    <div className='relative aspect-[3/4]'>
                      <Image
                        src={src}
                        alt={`${label} coffee bag`}
                        fill
                        sizes='15vw'
                        className='object-contain'
                      />
                    </div>
                    <p className='mt-1 text-[10px] font-semibold text-[#5b3d28]'>
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </article>
            <article className='overflow-hidden rounded-xl bg-[#20372d] p-5 text-white'>
              <p className='text-[9px] font-bold tracking-[0.18em] text-[#cbd8bd] uppercase'>
                Conservation collection
              </p>
              <h2 className='mt-2 text-xl font-semibold'>
                Origins connected to wildlife
              </h2>
              <div className='mt-4 grid grid-cols-3 gap-3'>
                {[
                  [
                    '/beans-place/assets/spectacled-bear-colombia-DyWOUePH.png',
                    'Spectacled bear',
                  ],
                  [
                    '/beans-place/assets/gelada-ethiopia-DoBEb34t.png',
                    'Gelada',
                  ],
                  [
                    '/beans-place/assets/orangutan-sumatra-CKEv4U8d.png',
                    'Orangutan',
                  ],
                ].map(([src, label]) => (
                  <div key={src}>
                    <div className='relative aspect-square overflow-hidden rounded-lg bg-white/10'>
                      <Image
                        src={src}
                        alt={label}
                        fill
                        sizes='15vw'
                        className='object-contain'
                      />
                    </div>
                    <p className='mt-2 text-center text-[10px] text-white/75'>
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </article>
            <article className='relative min-h-[clamp(17rem,36svh,18.75rem)] overflow-hidden rounded-xl bg-[#5b3d28]'>
              <Image
                src='/beans-place/assets/store_barista-CXpfH14n.jpeg'
                alt="Barista preparing coffee inside The Bean's Place"
                fill
                sizes='(max-width: 639px) 100vw, 50vw'
                className='object-cover'
              />
              <div
                className='absolute top-[22px] left-[22px] max-w-[62%] border border-[#fff0da]/55 p-5 text-[#2e1d14]'
                style={{
                  backgroundColor: 'rgba(245, 223, 195, 0.35)',
                  borderRadius: '6px 14px 14px 6px',
                  borderLeft: '5px solid rgba(201, 135, 34, 0.8)',
                  boxShadow: '0 10px 30px rgba(30, 18, 11, 0.14)',
                  backdropFilter: 'blur(1px)',
                }}
              >
                <p className='text-[9px] font-bold tracking-[0.18em] text-[#3f291d] uppercase'>
                  Brand story · In store
                </p>
                <h2
                  className='mt-2 text-[26px] leading-[1.06] font-semibold text-[#2e1d14]'
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  <span className='block'>A warm experience</span>
                  <span className='block'>beyond the</span>
                  <span className='block'>catalog.</span>
                </h2>
              </div>
            </article>
          </section>
        ) : (
          <section className='grid gap-4 p-4 sm:grid-cols-2 sm:p-8'>
            {project.gallery.map((image, index) => (
              <div
                data-glow-card
                key={image}
                data-furniture-gallery-fallback
                className='relative aspect-[16/10] overflow-hidden rounded-xl bg-[#dce4ed]'
              >
                <Image
                  src={image}
                  alt={`${project.title} project view ${index + 1}`}
                  fill
                  sizes='(max-width: 639px) 100vw, 50vw'
                  className='object-cover object-top'
                />
              </div>
            ))}
          </section>
        )}
      </article>
    </main>
  );
}
