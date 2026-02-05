'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useNews } from '@/context/NewsContext';
import { useRouter } from 'next/navigation';

interface BreadcrumbsProps {
  articleTitle?: string;
  articleCategory?: string;
}

export default function Breadcrumbs({
  articleTitle,
  articleCategory,
}: BreadcrumbsProps) {
  const pathname = usePathname();
  const router = useRouter();
  const { setCategory } = useNews();

  const excludedSegments = ['authors'];
  const segments = !articleTitle
    ? pathname
        .split('/')
        .filter(Boolean)
        .filter((segment) => !excludedSegments.includes(segment))
    : [];

  const handleCategoryClick = (category: string) => {
    const slug = category.toLowerCase().replace(/\s+/g, '-');
    setCategory(slug);

    router.push(`/all-news?category=${slug}`);
  };

  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap space-x-2 max-w-[1440px] mx-auto w-full px-[10px] lg:px-5 text-lg lg:text-xl mb-5">
        <li>
          <Link href="/" className="hover:underline text-black">
            Home
          </Link>
        </li>

        {articleCategory && (
          <>
            <span className="mx-2">/</span>
            <button
              onClick={() => handleCategoryClick(articleCategory)}
              className="hover:underline cursor-pointer"
            >
              {articleCategory}
            </button>
          </>
        )}

        {articleTitle && (
          <>
            <span className="mx-2">/</span>
            <span className="color-red">
              {articleTitle.replace(/:/g, '').split(' ').slice(0, 3).join(' ')}
              {articleTitle.split(' ').length > 3 ? '…' : ''}
            </span>
          </>
        )}

        {!articleTitle &&
          segments.map((segment, index) => {
            const href = '/' + segments.slice(0, index + 1).join('/');
            const isLast = index === segments.length - 1;
            const name = segment
              .replace(/-/g, ' ')
              .replace(/\b\w/g, (l) => l.toUpperCase());

            return (
              <li key={href} className="flex items-center">
                <span className="mx-2">/</span>
                {isLast ? (
                  <span className="color-red">{name}</span>
                ) : (
                  <Link href={href} className="hover:underline">
                    {name}
                  </Link>
                )}
              </li>
            );
          })}
      </ol>
    </nav>
  );
}
