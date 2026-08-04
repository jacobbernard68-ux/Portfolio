import type { Blog } from '@/types/blog';
import SingleBlog from './SingleBlog';

const BlogGridContainer = ({ blogs }: { blogs: Blog[] }) => {
  return (
    <div className='mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0'>
      <div className='grid grid-cols-1 gap-x-7.5 gap-y-12.5 sm:grid-cols-2 lg:grid-cols-3'>
        {blogs?.map((blog, i) => (
          <SingleBlog key={blog._id || i} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogGridContainer;
