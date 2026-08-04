import Breadcrumb from '@/components/Breadcrumb';

export async function generateMetadata() {
  return {
    title: 'Blog content disabled',
    description: 'Blog content is currently unavailable because the Sanity integration has been removed.',
  };
}

export default function BlogDetails() {
  return (
    <>
      <Breadcrumb pageTitle='Blog Details' />
      <section className='pt-20 pb-17.5 lg:pt-25 lg:pb-22.5 xl:pb-27.5'>
        <div className='mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0'>
          <div className='rounded-3xl border border-white/10 bg-white/5 p-10 text-center text-white'>
            <h1 className='mb-4 text-3xl font-semibold'>Blog content unavailable</h1>
            <p className='max-w-2xl mx-auto text-sm leading-6 text-white/70'>
              The blog post page is disabled because the Sanity blog integration has been removed.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
