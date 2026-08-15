'use client';

import type { CSSProperties, MouseEvent, ReactNode } from 'react';
import Link from 'next/link';

function withMobileReturnContext(href: string, project: string) {
  const url = new URL(href, window.location.origin);
  url.searchParams.set('portfolioReturn', 'mobile');
  url.searchParams.set('project', project);
  return `${url.pathname}${url.search}${url.hash}`;
}

export default function ProjectWebsiteLink({
  href,
  project,
  className,
  style,
  children,
}: {
  href: string;
  project: string;
  className: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  const openWebsite = (event: MouseEvent<HTMLAnchorElement>) => {
    const params = new URLSearchParams(window.location.search);
    const fromMobileStack =
      params.get('from') === 'mobile' ||
      window.matchMedia('(max-width: 959px)').matches;
    if (!fromMobileStack) return;

    event.preventDefault();
    sessionStorage.setItem('portfolio-mobile-project', project);
    window.location.assign(withMobileReturnContext(href, project));
  };

  return (
    <Link href={href} onClick={openWebsite} className={className} style={style}>
      {children}
    </Link>
  );
}
