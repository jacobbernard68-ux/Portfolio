import ResponsiveWorkPage from '@/components/Portfolio/ResponsiveWorkPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Selected Work | Jacob Bernard',
  description: 'Selected UX and visual design work by Jacob Bernard.',
};

export default function WorkPageRoute() {
  return <ResponsiveWorkPage />;
}
