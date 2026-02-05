/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Article,
  CTABlock,
  StrapiMedia,
  AuthorPreview,
  ArticleMinimal,
  ArticleColorName,
} from '@/types/index';

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

interface StrapiCTABlock {
  id: number;
  idBlock: string;
  nameBlock: string;
  positionBlock: string;
  phoneBlock: string;
  imageBlock?: StrapiMedia;
}

interface StrapiArticleResponse {
  id: number;
  slug: string;
  title: string;
  description: string;
  date: string;
  author: AuthorPreview;
  imageArticle?: StrapiMedia;
  image?: string;
  video?: string;
  markdown_article: string;
  colorName: ArticleColorName;
  readingTime?: number;
  faqs?: any[];
  categories?: any[];
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
  schema?: any;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: StrapiMedia;
  updatedAt?: string;
  CTABlock?: StrapiCTABlock[];
}

export function mapMedia(media?: StrapiMedia) {
  if (!media) return undefined;

  return {
    url: media.url,
  };
}

function mapCTABlock(block: StrapiCTABlock): CTABlock {
  return {
    id: block.id,
    idBlock: block.idBlock,
    nameBlock: block.nameBlock,
    positionBlock: block.positionBlock,
    phoneBlock: block.phoneBlock,
    imageBlock: mapMedia(block.imageBlock),
  };
}

function mapAuthor(author: StrapiArticleResponse['author']) {
  if (!author) return null;
  return {
    id: author.id,
    fullNameAuthor: author.fullNameAuthor,
    slugAuthor: author.slugAuthor,
    position: author.position,
    imgAuthor: mapMedia(author.imgAuthor),
  };
}

function mapArticleMinimal(item: StrapiArticleResponse): ArticleMinimal {
  return {
    id: item.id,
    slug: item.slug,
    title: item.title,
    description: item.description,
    readingTime: item.readingTime,
    date: item.date,
    imageArticle: mapMedia(item.imageArticle),
    categories: item.categories || [],
  };
}

function mapArticle(item: StrapiArticleResponse): Article {
  return {
    id: item.id,
    slug: item.slug,
    title: item.title,
    description: item.description,
    date: item.date,
    author: mapAuthor(item.author) || undefined,
    imageArticle: mapMedia(item.imageArticle),
    image: item.image || '',
    video: item.video || '',
    markdown_article: item.markdown_article,
    readingTime: item.readingTime,
    colorName: item.colorName,
    faqs: item.faqs || [],
    categories: item.categories || [],
    metaTitle: item.metaTitle || '',
    metaDescription: item.metaDescription || '',
    metaKeywords: item.metaKeywords || '',
    schema: item.schema || null,
    ogTitle: item.ogTitle || '',
    ogDescription: item.ogDescription || '',
    ogImage: mapMedia(item.ogImage),
    updatedAt: item.updatedAt || item.date,
    CTABlock: item.CTABlock ? item.CTABlock.map(mapCTABlock) : [],
  };
}

export async function getArticlesByCategory(
  categorySlug?: string,
  limit: number = 500
): Promise<Article[]> {
  const query = categorySlug
    ? `?filters[categories][slug][$eq]=${categorySlug}`
    : '?';

  const params = new URLSearchParams({
    'fields[0]': 'title',
    'fields[1]': 'slug',
    'fields[2]': 'description',
    'fields[3]': 'date',
    'fields[4]': 'colorName',
    'fields[5]': 'readingTime',
    'populate[imageArticle][fields][0]': 'url',
    'populate[categories][fields][0]': 'slug',
    'populate[categories][fields][1]': 'title_category',
    'populate[author][fields][0]': 'fullNameAuthor',
    'pagination[limit]': limit.toString(),
    'sort[0]': 'date:desc',
  });

  const res = await fetch(
    `${STRAPI_URL}/articles${query}&${params.toString()}`,
    {
      headers: { 'Content-Type': 'application/json' },
      next: { revalidate: 1000 },
    }
  );
  if (!res.ok) {
    console.error('Fetch error', res.status, await res.text());
    return [];
  }

  const data = await res.json();
  return data.data.map(mapArticle);
}

export async function getAllArticleSlugs(): Promise<string[]> {
  const res = await fetch(
    `${STRAPI_URL}/articles?fields=slug&pagination[limit]=500`,
    { next: { revalidate: 1000 } }
  );

  if (!res.ok) return [];
  const data = await res.json();
  return data.data.map((a: any) => a.slug);
}

export async function getSlugArticle(
  slug: string
): Promise<{ slug: string; categories: { slug: string }[] } | null> {
  const res = await fetch(
    `${STRAPI_URL}/articles?filters[slug][$eq]=${slug}` +
      `&fields[0]=slug` +
      `&populate[categories][fields]=slug`,
    { next: { revalidate: 1000 } }
  );

  if (!res.ok) return null;

  const data = await res.json();

  if (!data.data[0]) return null;

  return {
    slug: data.data[0].slug,
    categories: data.data[0].categories || [],
  };
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const basePromise = fetch(
    `${STRAPI_URL}/articles?filters[slug][$eq]=${slug}` +
      `&fields[0]=title&fields[1]=slug&fields[2]=description&fields[3]=date&fields[4]=readingTime&fields[5]=colorName` +
      `&populate[categories][fields]=title_category,slug` +
      `&populate[imageArticle][fields]=url`,
    { next: { revalidate: 600 } }
  ).then((res) => res.json());

  const heavyPromise = fetch(
    `${STRAPI_URL}/articles?filters[slug][$eq]=${slug}` +
      `&populate[faqs][fields]=question,markdown_answer` +
      `&populate[author][fields]=fullNameAuthor,slugAuthor,position` +
      `&populate[author][populate][imgAuthor][fields]=url` +
      `&populate[CTABlock][populate]=imageBlock` +
      `&populate[ogImage][fields]=url` +
      `&fields[0]=markdown_article`,
    { next: { revalidate: 1000 } }
  ).then((res) => res.json());

  const [baseData, heavyData] = await Promise.all([basePromise, heavyPromise]);

  if (!baseData.data[0]) return null;

  const articleBase = baseData.data[0];
  const articleHeavy = heavyData.data[0];

  const article: Article = {
    ...mapArticle(articleBase),
    markdown_article: articleHeavy?.markdown_article || '',
    faqs: articleHeavy?.faqs || [],
    author: mapAuthor(articleHeavy?.author) || undefined,
    CTABlock: articleHeavy?.CTABlock?.map(mapCTABlock) || [],
    ogImage: mapMedia(articleHeavy?.ogImage),
  };

  return article;
}

export async function getArticlesByAuthor(
  slugAuthor: string,
  limit: number = 3
): Promise<ArticleMinimal[]> {
  const params = new URLSearchParams({
    'filters[author][slugAuthor][$eq]': slugAuthor,
    'fields[0]': 'title',
    'fields[1]': 'slug',
    'fields[2]': 'description',
    'fields[3]': 'date',
    'populate[imageArticle][fields][0]': 'url',
    'pagination[limit]': limit.toString(),
    'sort[0]': 'date:desc',
  });

  const res = await fetch(`${STRAPI_URL}/articles?${params.toString()}`, {
    next: { revalidate: 600 },
  });

  if (!res.ok) return [];
  const data = await res.json();
  return data.data.map(mapArticleMinimal);
}

export async function getAllArticlesForSitemap(): Promise<ArticleMinimal[]> {
  const res = await fetch(
    `${STRAPI_URL}/articles?fields=slug,updatedAt,date&pagination[limit]=1000`,
    { next: { revalidate: 1000 } }
  );
  if (!res.ok) return [];
  const data = await res.json();
  return data.data.map((a: any) => ({
    slug: a.slug,
    date: a.date,
    updatedAt: a.updatedAt,
  }));
}

export async function getArticleForMetadata(
  slug: string
): Promise<Article | null> {
  const params = new URLSearchParams({
    'filters[slug][$eq]': slug,
    'fields[0]': 'title',
    'fields[1]': 'slug',
    'fields[2]': 'metaTitle',
    'fields[3]': 'description',
    'fields[4]': 'metaDescription',
    'fields[5]': 'metaKeywords',
    'fields[6]': 'ogTitle',
    'fields[7]': 'ogDescription',
    'fields[8]': 'date',
    'fields[9]': 'updatedAt',
    'populate[author][fields][0]': 'fullNameAuthor',
    'populate[ogImage][fields][0]': 'url',
    'populate[imageArticle][fields][0]': 'url',
  });

  const res = await fetch(`${STRAPI_URL}/articles?${params.toString()}`, {
    headers: { 'Content-Type': 'application/json' },
    next: { revalidate: 1000 },
  });

  if (!res.ok) return null;
  const data = await res.json();

  return data.data[0] ? mapArticle(data.data[0]) : null;
}
