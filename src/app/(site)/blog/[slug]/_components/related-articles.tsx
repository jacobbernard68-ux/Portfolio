import SectionTitle from '@/components/Common/SectionTitle';

export function RelatedArticles() {
  return (
    <section className='mt-25 mb-10'>
      <SectionTitle
        subTitle='Related articles disabled'
        title='Blog content is currently unavailable'
        paragraph='The related articles section has been disabled because the Sanity integration was removed.'
      />
    </section>
  );
}
