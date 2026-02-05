import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import NProgressProvider from '@/components/ui/nprogress-provider';
import ScrollToTop from '@/components/ui/ScrollToTop';
import CookieConsent from '@/components/common/CookieConsent';

import { getArticlesByCategory } from '@/lib/strapi';
import { NewsProvider } from '@/context/NewsContext';
import { SITE_URL, SITE_URL_IMAGES } from '@/const/constants';

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

export const metadata = {
  title: 'Lawsupport — Corporate Services & Business Setup in Switzerland',
  description:
    'Lawsupport provides expert legal support and corporate services in Switzerland. From company formation, resident cards, Swiss bank accounts to accounting and company liquidation, we help entrepreneurs launch and grow their Swiss business efficiently.',
  keywords: [
    'Lawsupport',
    'legal support Switzerland',
    'corporate services Switzerland',
    'company formation Switzerland',
    'start a business in Switzerland',
    'Swiss bank account',
    'resident card Switzerland',
    'accounting Switzerland',
    'company liquidation Switzerland',
    'shelf company Switzerland',
    'migration to Switzerland',
    'Swiss business consulting',
    'corporate law firm Switzerland',
    'business launch Switzerland',
  ],

  openGraph: {
    type: 'website',
    title: 'Lawsupport — Corporate Services & Business Setup in Switzerland',
    description:
      'Lawsupport provides expert legal support and corporate services in Switzerland. From company formation, resident cards, Swiss bank accounts to accounting and company liquidation, we help entrepreneurs launch and grow their Swiss business efficiently.',
    url: SITE_URL,
    images: [
      {
        url: SITE_URL,
        width: 1200,
        height: 630,
        alt: 'Lawsupport — Legal and Corporate Services in Switzerland',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Lawsupport — Corporate Services & Business Setup in Switzerland',
    description:
      'Lawsupport provides expert legal support and corporate services in Switzerland. From company formation, resident cards, Swiss bank accounts to accounting and company liquidation, we help entrepreneurs launch and grow their Swiss business efficiently.',
    images: [SITE_URL_IMAGES],
  },
};
