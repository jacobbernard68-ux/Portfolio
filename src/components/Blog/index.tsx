import SectionTitle from '@/components/Common/SectionTitle';

export default function BlogSection() {
  return (
    <section className='py-20 lg:py-25'>
      <div className='mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0'>
        <SectionTitle
          subTitle='Blog is disabled'
          title='Blog content is currently unavailable'
          paragraph='The Sanity blog integration has been removed from this project.'
        />
      </div>
    </section>
  );
}
