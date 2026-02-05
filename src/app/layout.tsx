import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import NProgressProvider from '@/components/ui/nprogress-provider';
import ScrollToTop from '@/components/ui/ScrollToTop';
import CookieConsent from '@/components/common/CookieConsent';

import { getArticlesByCategory } from '@/lib/strapi';
import { NewsProvider } from '@/context/NewsContext';

import { Geologica } from 'next/font/google';
import localFont from 'next/font/local';

const guton = localFont({
  src: [
    {
      path: '../../public/fonts/Guton/Guton-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Guton/Guton-Medium.otf',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-guton',
  display: 'swap',
  fallback: ['Arial', 'Helvetica', 'sans-serif'],
});

const geologica = Geologica({
  subsets: ['latin', 'latin-ext', 'cyrillic'],
  weight: ['300', '400', '500'],
  variable: '--font-montserrat',
  display: 'swap',
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const articles = await getArticlesByCategory(undefined, 500);
  return (
    <html lang="en" className={`${guton.variable} ${geologica.variable}`}>
      <head></head>

      <body className="flex flex-col min-h-screen">
        <NProgressProvider />

        <NewsProvider initialArticles={articles}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer articles={articles} />
          <ScrollToTop />
        </NewsProvider>

        <CookieConsent />
      </body>
    </html>
  );
}

// export const metadata = {};
