import Hero from '@/components/Home/Hero';
import PortfolioWorkPage from '@/components/Portfolio/WorkPage';
import PortfolioAboutPage from '@/components/Portfolio/AboutPage';
import PortfolioContactPage from '@/components/Portfolio/ContactPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jacob Bernard | UX Designer',
  description:
    'UX designer building structured, scalable experiences and intuitive product systems.',
};

export default function Home() {
  return (
    <>
      <div className='lg:hidden'>
        <Hero embedded />
        <PortfolioWorkPage embedded />
        <PortfolioAboutPage embedded />
        <PortfolioContactPage embedded />
      </div>
      <div className='hidden lg:block'>
        <Hero />
      </div>
    </>
  );
}
