import Image from 'next/image';
import type { PortfolioProject } from './projectData';
import ReturnToWork from './ReturnToWork';

const progression = [
  {
    title: 'ERA Academy',
    label: 'Foundation',
    copy: 'A student portal connecting a traditional HTML, CSS, and JavaScript frontend to Express routes and MySQL records.',
    technologies: ['JavaScript', 'Express', 'MySQL'],
  },
  {
    title: 'ERA Helpdesk',
    label: 'Hybrid data',
    copy: 'A React helpdesk pairing structured ticket data in MySQL with flexible technician notes and activity in MongoDB.',
    technologies: ['React', 'Express', 'MySQL + MongoDB'],
  },
  {
    title: 'ERA Commerce',
    label: 'Application systems',
    copy: 'A broader application introducing authentication, role-aware routes, transactions, inventory, orders, reviews, and reporting.',
    technologies: ['React', 'JWT + bcrypt', 'Transactions'],
  },
] as const;

const relationalConcepts = [
  'Tables and relationships',
  'Primary and foreign keys',
  'JOINs and aggregation',
  'Transactions',
] as const;

export default function BackendDataSystemsCaseStudy({
  project,
}: {
  project: PortfolioProject;
}) {
  return (
    <main className='viewport-page page-gutters bg-[var(--theme-page)] lg:overflow-hidden'>
      <article
        data-internal-scroll
        className='no-scrollbar relative mx-auto h-full max-w-[min(90rem,100%)] overflow-y-auto rounded-[var(--fluid-radius)] border border-[var(--theme-border)] bg-[var(--theme-surface)] text-[var(--theme-text)] shadow-[0_18px_55px_var(--theme-shadow)]'
      >
        <ReturnToWork originClassName='text-[var(--theme-muted)]' />

        <header className='border-b border-[var(--theme-border)] px-[clamp(1.25rem,4vw,4rem)] pt-16 pb-[clamp(2rem,5vw,4.5rem)]'>
          <div className='grid gap-7 lg:grid-cols-[1.1fr_0.9fr] lg:items-start'>
            <div>
              <p className='text-[10px] font-bold tracking-[0.2em] text-[var(--theme-muted)] uppercase'>
                {project.type}
              </p>
              <h1 className='mt-5 max-w-3xl text-[clamp(2.8rem,7vw,6.5rem)] leading-[0.9] font-semibold tracking-[-0.065em]'>
                Backend &amp;
                <br />
                Data Systems
              </h1>
              <p className='mt-7 max-w-2xl text-base leading-7 text-[var(--theme-muted)] sm:text-lg sm:leading-8'>
                A progression from database-connected pages to authenticated,
                data-driven React applications.
              </p>
            </div>
            <figure className='overflow-hidden rounded-2xl border border-[var(--theme-border)] bg-[#17212d] shadow-[0_12px_32px_var(--theme-shadow)]'>
              <div className='relative aspect-[30/19]'>
                <Image
                  src={project.heroImage ?? project.image}
                  alt={project.imageAlt}
                  fill
                  priority
                  sizes='(max-width: 1023px) 100vw, 42vw'
                  className='object-cover'
                />
              </div>
              <figcaption className='border-t border-white/10 bg-[#1b2633] px-4 py-3 text-[10px] font-bold tracking-[0.16em] text-[#afc0d2] uppercase'>
                Coursework architecture · interface to persistent data
              </figcaption>
            </figure>
          </div>
          <div className='mt-7 grid gap-4 md:grid-cols-2'>
            <aside className='rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-surface-strong)] p-5'>
              <p className='text-[10px] font-bold tracking-[0.18em] text-[var(--theme-muted)] uppercase'>
                Technical scope
              </p>
              <div className='mt-4 flex flex-wrap gap-2'>
                {[
                  'React',
                  'Express',
                  'REST APIs',
                  'MySQL',
                  'MongoDB',
                  'Authentication',
                ].map((skill) => (
                  <span
                    key={skill}
                    className='rounded-full border border-[var(--theme-border)] bg-[var(--theme-surface)] px-3 py-1.5 text-[10px] font-bold text-[var(--theme-text)]'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </aside>
            <aside className='rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-surface-alternate)] p-5 text-sm leading-6 text-[var(--theme-muted)]'>
              <p className='font-bold text-[var(--theme-text)]'>
                Educational context
              </p>
              <p className='mt-2'>
                Selected classroom applications presented as evidence of growth,
                not as production-ready systems or live demos.
              </p>
            </aside>
          </div>
        </header>

        <section className='px-[clamp(1.25rem,4vw,4rem)] py-[clamp(2rem,5vw,4.5rem)]'>
          <div className='relative grid gap-4 lg:grid-cols-3 lg:gap-6'>
            {progression.map((item, index) => (
              <article
                key={item.title}
                className={`relative rounded-2xl border border-[var(--theme-border)] p-5 text-[var(--theme-text)] ${index % 2 === 0 ? 'bg-[var(--theme-surface-strong)]' : 'bg-[var(--theme-surface-alternate)]'}`}
              >
                {index < progression.length - 1 && (
                  <span
                    aria-hidden='true'
                    className='absolute top-1/2 -right-[1.05rem] z-10 hidden size-8 -translate-y-1/2 place-items-center rounded-full border border-[var(--theme-border)] bg-[var(--theme-surface)] text-sm text-[var(--theme-muted)] lg:grid'
                  >
                    →
                  </span>
                )}
                <p className='text-[9px] font-bold tracking-[0.18em] text-[var(--theme-muted)] uppercase'>
                  0{index + 1} · {item.label}
                </p>
                <h2 className='mt-3 text-xl font-semibold tracking-[-0.035em] text-[var(--theme-text)]'>
                  {item.title}
                </h2>
                <p className='mt-3 text-sm leading-6 text-[var(--theme-muted)]'>
                  {item.copy}
                </p>
                <div
                  className='mt-5 flex flex-wrap gap-2'
                  role='group'
                  aria-label={`${item.title} technologies`}
                >
                  {item.technologies.map((technology) => (
                    <span
                      key={technology}
                      className='rounded-full border border-[var(--theme-border)] bg-[var(--theme-surface)] px-2.5 py-1 text-[9px] font-bold tracking-[0.08em] text-[var(--theme-text)] uppercase'
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className='mt-4 flex flex-col items-center justify-center gap-3 rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-header)] px-5 py-5 text-center text-xs font-bold tracking-[0.13em] uppercase sm:flex-row sm:gap-5'>
            <span>React interfaces</span>
            <span aria-hidden='true' className='text-[var(--theme-muted)]'>
              →
            </span>
            <span>Express REST APIs</span>
            <span aria-hidden='true' className='text-[var(--theme-muted)]'>
              →
            </span>
            <span>MySQL + MongoDB</span>
          </div>
        </section>

        <section className='grid gap-5 bg-[var(--theme-page-soft)] px-[clamp(1.25rem,4vw,4rem)] py-[clamp(2rem,5vw,4.5rem)] lg:grid-cols-2'>
          <div className='lg:col-span-2'>
            <p className='text-[10px] font-bold tracking-[0.2em] text-[var(--theme-muted)] uppercase'>
              Application evidence
            </p>
            <h2 className='mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.045em] text-[var(--theme-text)] sm:text-4xl'>
              Two applications, two different data stories
            </h2>
            <p className='mt-4 max-w-3xl text-sm leading-7 text-[var(--theme-muted)] sm:text-base'>
              Commerce demonstrates the broader application architecture, while
              Helpdesk provides the clearest example of relational and document
              data supporting one interface.
            </p>
          </div>
          <EvidenceCard
            eyebrow='ERA Commerce · reporting'
            title='The strongest overall application'
            copy='Commerce connected an authenticated React interface to Express controllers, MySQL transactions and reporting queries, and MongoDB-backed reviews.'
            image={project.gallery[0]}
            imageAlt='Editorial representation of aggregate sales and inventory reporting in ERA Commerce'
            evidence={[
              'JWT authentication and role-aware routes',
              'MySQL transactions, inventory, and orders',
              'Aggregate reporting and MongoDB-backed reviews',
            ]}
          />
          <EvidenceCard
            eyebrow='ERA Helpdesk · hybrid data'
            title='Two data models in one workflow'
            copy='Structured users and tickets remained relational, while technician notes and activity history demonstrated a document-oriented use case.'
            image={project.gallery[1]}
            imageAlt='Editorial representation of MySQL ticket data beside MongoDB notes and activity'
            evidence={[
              'Structured users and ticket relationships in MySQL',
              'Technician notes and activity history in MongoDB',
              'One React workflow joining both data models',
            ]}
          />
        </section>

        <section className='grid gap-5 px-[clamp(1.25rem,4vw,4rem)] py-[clamp(2rem,5vw,4.5rem)] lg:grid-cols-[1.15fr_0.85fr]'>
          <div className='lg:col-span-2'>
            <p className='text-[10px] font-bold tracking-[0.2em] text-[var(--theme-muted)] uppercase'>
              Foundations &amp; reflection
            </p>
            <h2 className='mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.045em] text-[var(--theme-text)] sm:text-4xl'>
              Building the system clarified what production readiness requires
            </h2>
          </div>
          <article className='rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-surface-alternate)] p-6'>
            <p className='text-[10px] font-bold tracking-[0.18em] text-[var(--theme-muted)] uppercase'>
              Relational data foundations
            </p>
            <h2 className='mt-3 text-2xl font-semibold tracking-[-0.04em] text-[var(--theme-text)]'>
              Structure before complexity
            </h2>
            <div className='mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4'>
              {relationalConcepts.map((concept) => (
                <div
                  key={concept}
                  className='rounded-xl border border-[var(--theme-border)] bg-[var(--theme-surface)] p-4 text-xs leading-5 font-semibold'
                >
                  {concept}
                </div>
              ))}
            </div>
            <p className='mt-5 text-sm leading-6 text-[var(--theme-muted)]'>
              Additional guided practice included indexes, EXPLAIN, views,
              procedures, functions, triggers, and events. These are presented
              as coursework exposure rather than inflated as advanced mastery.
            </p>
          </article>

          <article className='rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-surface-strong)] p-6'>
            <p className='text-[10px] font-bold tracking-[0.18em] text-[var(--theme-muted)] uppercase'>
              What I learned
            </p>
            <h2 className='mt-3 text-2xl font-semibold tracking-[-0.04em] text-[var(--theme-text)]'>
              Seeing the full application path
            </h2>
            <p className='mt-5 text-sm leading-7 text-[var(--theme-muted)]'>
              This work expanded my perspective from building interfaces to
              understanding how interfaces communicate with APIs and persistent
              data. Later exercises introduced bcrypt, JWT, role checks, and
              transactions while also making the remaining production-hardening
              work easier to recognize.
            </p>
          </article>
          <aside className='rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-header)] p-6 lg:col-span-2'>
            <div className='grid gap-5 lg:grid-cols-[0.72fr_1.28fr] lg:items-start'>
              <div>
                <p className='text-[10px] font-bold tracking-[0.18em] text-[var(--theme-muted)] uppercase'>
                  Production perspective
                </p>
                <h2 className='mt-3 text-2xl font-semibold tracking-[-0.04em] text-[var(--theme-text)]'>
                  The next layer of engineering
                </h2>
              </div>
              <div>
                <p className='text-sm leading-7 text-[var(--theme-muted)]'>
                  Reviewing the coursework afterward highlighted the controls a
                  public system would still need beyond the classroom scope. No
                  vulnerable application or credential is published with this
                  case study.
                </p>
                <ul className='mt-4 grid gap-2 text-xs leading-5 text-[var(--theme-text)] sm:grid-cols-3'>
                  {[
                    'Server-validated pricing and ownership',
                    'Stricter role assignment and authorization',
                    'Environment-based configuration and rotated credentials',
                  ].map((item) => (
                    <li
                      key={item}
                      className='rounded-xl border border-[var(--theme-border)] bg-[var(--theme-surface)] p-3'
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </section>
      </article>
    </main>
  );
}

function EvidenceCard({
  eyebrow,
  title,
  copy,
  image,
  imageAlt,
  evidence,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  image: string;
  imageAlt: string;
  evidence: readonly string[];
}) {
  return (
    <article className='overflow-hidden rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-surface)]'>
      <div className='relative aspect-[30/19] overflow-hidden bg-[#111923]'>
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes='(max-width: 1023px) 100vw, 50vw'
          className='object-cover'
        />
      </div>
      <div className='p-6'>
        <p className='text-[10px] font-bold tracking-[0.18em] text-[var(--theme-muted)] uppercase'>
          {eyebrow}
        </p>
        <h2 className='mt-3 text-2xl font-semibold tracking-[-0.04em] text-[var(--theme-text)]'>
          {title}
        </h2>
        <p className='mt-4 text-sm leading-6 text-[var(--theme-muted)]'>
          {copy}
        </p>
        <ul className='mt-5 grid gap-2 border-t border-[var(--theme-border)] pt-5'>
          {evidence.map((item) => (
            <li
              key={item}
              className='flex gap-3 text-xs leading-5 text-[var(--theme-muted)]'
            >
              <span
                aria-hidden='true'
                className='mt-1.5 size-1.5 shrink-0 rounded-full bg-[var(--theme-focus)]'
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
