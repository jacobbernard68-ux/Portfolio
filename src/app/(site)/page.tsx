import ResponsiveHomePage from '@/components/Home/ResponsiveHomePage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jacob Bernard | UX Designer',
  description:
    'UX designer building structured, scalable experiences and intuitive product systems.',
};

export default function Home() {
  return <ResponsiveHomePage />;
}
