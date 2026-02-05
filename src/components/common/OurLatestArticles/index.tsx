'use client';

import dynamic from 'next/dynamic';

const OurLatestArticles = dynamic(() => import('./OurLatestArticles'), {
  ssr: false,
});

export default OurLatestArticles;
