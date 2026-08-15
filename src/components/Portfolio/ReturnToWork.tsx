'use client';

import { useEffect, useRef, useState } from 'react';

function getReturnHref() {
  const params = new URLSearchParams(window.location.search);
  const source = params.get('from');
  const project = params.get('project');
  const anchor = project ? `#project-${encodeURIComponent(project)}` : '';

  // The compact site is a single continuous document. Even when a case study
  // was reached from a standalone Work URL (or loaded directly), its return
  // control must restore that document instead of a Work-only route.
  if (window.matchMedia('(max-width: 959px)').matches)
    return `/${anchor || '#work'}`;
  if (source === 'classic') return `/work/classic${anchor}`;
  if (source === 'fan') return `/work?layout=fan${anchor}`;
  if (source === 'mobile') return `/${anchor || '#work'}`;
  return '/work';
}

export default function ReturnToWork({
  tone = 'light',
  originClassName,
}: {
  tone?: 'light' | 'dark';
  originClassName?: string;
}) {
  const originRef = useRef<HTMLAnchorElement>(null);
  const [visible, setVisible] = useState(false);
  const [href, setHref] = useState('/work');

  useEffect(() => {
    const destination = getReturnHref();
    setHref(destination);
    const origin = originRef.current;
    if (!origin) return;
    const scrollContainer = origin.closest<HTMLElement>(
      '[data-internal-scroll]',
    );
    const usesInternalScroll = scrollContainer
      ? scrollContainer.scrollHeight > scrollContainer.clientHeight &&
        ['auto', 'scroll'].includes(getComputedStyle(scrollContainer).overflowY)
      : false;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { root: usesInternalScroll ? scrollContainer : null, threshold: 0 },
    );
    observer.observe(origin);
    return () => observer.disconnect();
  }, []);

  const inlineTone = tone === 'dark' ? 'text-[#d7e0e3]' : 'text-[#405671]';

  return (
    <>
      <div className='absolute top-4 left-6 z-40 sm:top-5 sm:left-9 lg:top-6 lg:left-12'>
        <a
          ref={originRef}
          data-case-return-origin
          href={href}
          className={`case-return-link case-return-link--inline inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.18em] uppercase ${originClassName ?? inlineTone}`}
        >
          <span aria-hidden='true'>&larr;</span> Back to From Concept to Experience
        </a>
      </div>

      <a
        href={href}
        aria-hidden={!visible}
        tabIndex={visible ? 0 : -1}
        className={`case-return-link case-return-link--inline case-return-link--floating floating-gutter floating-return-top fixed z-50 inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.18em] uppercase transition-[opacity,transform] motion-reduce:transition-none ${visible ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-2 opacity-0'} ${tone === 'dark' ? 'text-[#d7e0e3]' : 'text-[#405671]'}`}
      >
        <span aria-hidden='true'>&larr;</span> Back to From Concept to Experience
      </a>
    </>
  );
}
