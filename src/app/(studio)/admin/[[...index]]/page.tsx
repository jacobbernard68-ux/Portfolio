import Breadcrumb from '@/components/Breadcrumb';

export default function AdminPage() {
  return (
    <div className='min-h-screen bg-slate-950 text-white'>
      <Breadcrumb pageTitle='Admin' />
      <section className='mx-auto max-w-[900px] px-4 py-20'>
        <div className='rounded-3xl border border-white/10 bg-slate-900/80 p-10'>
          <h1 className='text-3xl font-semibold'>Studio disabled</h1>
          <p className='mt-4 text-sm text-slate-300'>
            The Sanity Studio admin page is disabled because the Sanity integration has been removed.
          </p>
        </div>
      </section>
    </div>
  );
}
