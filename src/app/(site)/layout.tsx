import '@/styles/animate.css';
import '@/styles/prism-vsc-dark-plus.css';
import '@/styles/star.css';
import '@/styles/tailwind.css';

import Header from '@/components/Header';
import CursorBubble from '@/components/CursorBubble';
import ScrollToTop from '@/components/ScrollToTop';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import NextTopLoader from 'nextjs-toploader';
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
    <html lang='en' className={inter.className}>
      <body>
        <CursorBubble />
        <div className='relative z-10 isolate'>
          <NextTopLoader
            color='#2F3E5C'
            crawlSpeed={300}
            showSpinner={false}
            shadow='none'
          />

          <AuthProvider>
            <Header />
            {children}

            <ToasterContext />
          </AuthProvider>
        </div>

        <ScrollToTop />
      </body>
    </html>
  );
}
