'use client';

import { useSyncExternalStore } from 'react';
import PortfolioAboutPage from '@/components/Portfolio/AboutPage';
import PortfolioContactPage from '@/components/Portfolio/ContactPage';
import PortfolioWorkPage from '@/components/Portfolio/WorkPage';
import Hero from './Hero';

const desktopHomeQuery = '(min-width: 60rem)';

const subscribe = (onChange: () => void) => {
  const media = window.matchMedia(desktopHomeQuery);
  media.addEventListener('change', onChange);
  return () => media.removeEventListener('change', onChange);
};

const getSnapshot = () => window.matchMedia(desktopHomeQuery).matches;

export default function ResponsiveHomePage() {
  const desktopHome = useSyncExternalStore(subscribe, getSnapshot, () => false);

  if (desktopHome) return <Hero />;

  return (
    <div className='continuous-page-stack'>
      <Hero embedded />
      <PortfolioWorkPage embedded />
      <PortfolioAboutPage embedded />
      <PortfolioContactPage embedded />
    </div>
  );
}
