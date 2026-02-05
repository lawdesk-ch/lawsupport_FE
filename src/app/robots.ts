import { MetadataRoute } from 'next';
import { SITE_URL } from '@/const/constants';

export function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/'],
      disallow: ['/_next/', '/api/', '/*.json$', '/*?'],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
