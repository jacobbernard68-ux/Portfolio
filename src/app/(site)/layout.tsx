import '@/styles/animate.css';
import '@/styles/prism-vsc-dark-plus.css';
import '@/styles/star.css';
import '@/styles/tailwind.css';

import Header from '@/components/Header';
import CursorBubble from '@/components/CursorBubble';
import ScrollToTop from '@/components/ScrollToTop';
import SiteFooter from '@/components/SiteFooter';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import NextTopLoader from 'nextjs-toploader';
import Script from 'next/script';
import AuthProvider from '../context/AuthContext';
import ToasterContext from '../context/ToastContext';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  icons: {
    icon: [{ url: '/jb-tab-icon.svg', type: 'image/svg+xml', sizes: 'any' }],
    shortcut: ['/jb-tab-icon.svg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={inter.className} suppressHydrationWarning>
      <body>
        <Script
          id='portfolio-theme'
          strategy='beforeInteractive'
        >{`(function(){try{var p=localStorage.getItem('portfolio-color-theme')||'system';var d=p==='dark'||(p==='system'&&matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.dataset.theme=d?'dark':'light';document.documentElement.style.colorScheme=d?'dark':'light'}catch(e){}})();`}</Script>
        <CursorBubble />
        <div className='relative isolate z-10 flex min-h-screen flex-col supports-[height:100dvh]:min-h-dvh'>
          <NextTopLoader
            color='#2F3E5C'
            crawlSpeed={300}
            showSpinner={false}
            shadow='none'
          />

          <AuthProvider>
            <Header />
            <div className='site-content flex min-h-0 flex-1 flex-col'>
              {children}
            </div>
            <SiteFooter />

            <ToasterContext />
          </AuthProvider>
        </div>

        <ScrollToTop />
      </body>
    </html>
  );
}
