import PortfolioWorkPage from '@/components/Portfolio/WorkPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Projects | Jacob Bernard',
  description:
    'A broader curated collection demonstrating the range of Jacob Bernard’s design and development capabilities.',
};

export default function ClassicWorkPage() {
  return <PortfolioWorkPage rememberLayout />;
}
