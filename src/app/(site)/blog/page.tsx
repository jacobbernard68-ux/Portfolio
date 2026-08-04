import Breadcrumb from "@/components/Breadcrumb";
import SectionTitle from "@/components/Common/SectionTitle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | AI Tool - Next.js Template for AI Tools",
  description: "This is the Blog page for AI Tool.",
};

export default function BlogPage() {
  return (
    <>
      <Breadcrumb pageTitle='Blog Grid' />
      <section className='pt-20 pb-17.5 lg:pt-25 lg:pb-22.5 xl:pb-27.5'>
        <div className='mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0'>
          <SectionTitle
            subTitle='Blog disabled'
            title='Blog content is currently unavailable'
            paragraph='The blog integration has been removed from this project. Replace this section with a static blog or another content source if needed.'
          />
        </div>
      </section>
    </>
  );
}
