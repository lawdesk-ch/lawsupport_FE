import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import NProgressProvider from '@/components/ui/nprogress-provider';
import ScrollToTop from '@/components/ui/ScrollToTop';
import CookieConsent from '@/components/common/CookieConsent';

import { getArticlesByCategory } from '@/lib/strapi';
import { NewsProvider } from '@/context/NewsContext';
import { SITE_URL, SITE_URL_IMAGES } from '@/const/constants';

import type { Metadata } from 'next';
import { Geologica } from 'next/font/google';
import localFont from 'next/font/local';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Lawsupport — Corporate Services & Legal Support in Switzerland',
    template: '%s | Lawsupport',
  },
  description:
    'Lawsupport is a Swiss corporate law firm providing company formation, legal support, Swiss bank account setup, resident cards, accounting and business consulting in Switzerland.',
  keywords: [
    'Lawsupport',
    'corporate services Switzerland',
    'Swiss corporate law firm',
    'company formation Switzerland',
    'business legal support Switzerland',
    'Swiss bank account',
    'resident card Switzerland',
    'accounting services Switzerland',
    'company liquidation Switzerland',
    'shelf company Switzerland',
    'migration to Switzerland',
  ],
  authors: [{ name: 'Lawsupport' }],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Lawsupport',
    title: 'Lawsupport — Corporate Services & Legal Support in Switzerland',
    description:
      'Swiss corporate services made easy. Company formation, Swiss bank accounts, resident cards, accounting and legal support for your business.',
    url: SITE_URL,
    images: [
      {
        url: SITE_URL_IMAGES,
        width: 1200,
        height: 630,
        alt: 'Lawsupport — Swiss Corporate Legal Services',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Lawsupport — Corporate Services in Switzerland',
    description:
      'Company formation, Swiss bank accounts, resident cards, accounting and legal support for businesses in Switzerland.',
    images: [SITE_URL_IMAGES],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

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
