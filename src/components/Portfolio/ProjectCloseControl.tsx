'use client';

import { useEffect, useState } from 'react';
import CloseIcon from './CloseIcon';

export default function ProjectCloseControl() {
  const [href, setHref] = useState('/work');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const project =
      params.get('project') ||
      sessionStorage.getItem('portfolio-mobile-project');
    if (params.get('portfolioReturn') === 'mobile' && project) {
      setHref(`/#project-${encodeURIComponent(project)}`);
    }
  }, []);

  return (
    <a
      href={href}
      aria-label='Close project and return to selected work'
      title='Back to selected work'
      className='fixed top-4 right-4 z-[1000] grid size-11 place-items-center rounded-full border border-white/35 bg-[#182331]/80 text-2xl leading-none font-light text-white shadow-[0_8px_28px_rgba(0,0,0,0.22)] backdrop-blur-md transition hover:scale-105 hover:bg-[#182331] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:top-6 sm:right-6'
    >
      <CloseIcon />
    </a>
  );
}
