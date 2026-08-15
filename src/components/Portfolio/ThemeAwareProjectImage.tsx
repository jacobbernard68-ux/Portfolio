'use client';

import Image, { type ImageProps } from 'next/image';
import { useSyncExternalStore } from 'react';

const subscribe = (onChange: () => void) => {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme'],
  });
  return () => observer.disconnect();
};

const isDark = () => document.documentElement.dataset.theme === 'dark';

export default function ThemeAwareProjectImage({
  lightSrc,
  darkSrc,
  alt,
  ...props
}: Omit<ImageProps, 'src'> & { lightSrc: string; darkSrc?: string }) {
  const dark = useSyncExternalStore(subscribe, isDark, () => false);
  return (
    <Image {...props} alt={alt} src={dark && darkSrc ? darkSrc : lightSrc} />
  );
}
