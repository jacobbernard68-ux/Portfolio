import { Blog } from '@/types/blog';
import Image from 'next/image';
import Link from 'next/link';

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, mainImage, slug, metadata, author, tags, publishedAt } = blog;
  const imageUrl = typeof mainImage === 'string' ? mainImage : mainImage?.url || '/images/blur/blur-1.png';

  return (
    <div className='wow fadeInUp group relative isolate'>
      <div className='relative mb-6 h-[222px] w-full overflow-hidden rounded-xl'>
        <Image
          src={imageUrl}
          alt={title}
          fill
          className='w-full scale-100 duration-500 ease-linear group-hover:scale-125'
        />
      </div>

      <div className='mb-4.5 flex flex-wrap items-center gap-2.5'>
        {tags?.map((tag) => (
          <span
            key={tag}
            className='cursor-pointer rounded-full border border-white/10 bg-white/[0.07] px-2.5 py-[3px] text-xs font-medium duration-300 ease-out hover:border-white/25 hover:text-white'
          >
            {tag}
          </span>
        ))}
      </div>

      <h3>
        <Link
          href={`/blog/${typeof slug === 'object' ? slug?.current || '' : slug || ''}`}
          className='line-clamp-2 text-xl font-semibold text-white duration-300 ease-in hover:opacity-80'
        >
          <span className='absolute inset-0' aria-hidden></span>
          {title}
        </Link>
      </h3>
      <p className='mt-4 line-clamp-3 font-medium'>{metadata}</p>

      <div className='relative mt-6 flex flex-wrap items-center gap-4.5'>
        <div className='text-sm font-medium text-white'>{author?.name}</div>
        <div className='text-sm font-medium text-white'>
          {publishedAt && new Date(publishedAt).toDateString().split(' ').slice(1).join(' ')}
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
