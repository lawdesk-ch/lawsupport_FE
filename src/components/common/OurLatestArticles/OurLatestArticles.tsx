'use client';

import { useState, useMemo } from 'react';
import { Article } from '@/types/index';
import { menuItemsArticles } from '@/data/data';
import ProgressLink from '@/components/ui/ProgressLink';

type Props = { articles: Article[] };

export default function OurLatestArticles({ articles }: Props) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredArticles = useMemo(() => {
    if (activeCategory === 'all') return articles;

    return articles.filter((article) =>
      article.categories?.some((c) => c.slug === activeCategory)
    );
  }, [articles, activeCategory]);

  return (
    <section className="flex flex-col items-center px-[10px] max-w-[1440px] mx-auto w-full">
      <h2 className="text-[32px] md:text-[40px] mb-[30px] md:mb-[50px] leading-none lg:text-5xl">
        Insight
      </h2>

      <nav className="mb-[30px]">
        <ul className="flex gap-5 lg:gap-10 lg:text-sm">
          {menuItemsArticles.map((item, index) => (
            <li
              key={index}
              className={`cursor-pointer text-[#110000] transition-colors leading-none duration-300 ${
                activeCategory === item.slug
                  ? 'color-red'
                  : 'active:text-[#6a6a6a] hover:text-[#6a6a6a]'
              }`}
              onClick={() => {
                setActiveCategory(item.slug);
              }}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </nav>

      <ul
        className="grid pb-5 md:flex-wrap md:gap-y-6 md:gap-x-10 w-full md:min-h-[246px] lg:min-h-[260px]
      md:overflow-y-hidden md:overflow-x-auto scrollbar-custom"
        style={{
          gridAutoFlow: 'column',
          gridTemplateRows: 'repeat(4, minmax(0, 1fr))',
        }}
      >
        {filteredArticles.map((article) => (
          <li key={article.id} className="md:w-[340px] lg:w-[434px]">
            <p className="text-xs font-geologica text-black/70">
              {article.date}
            </p>

            <ProgressLink
              href={`/${article.slug}/`}
              className="font-medium lg:text-xl active:text-[#6a6a6a] hover:text-[#6a6a6a] line-clamp-2 transition-colors duration-300 mt-1"
            >
              {article.title}
            </ProgressLink>
          </li>
        ))}
      </ul>
    </section>
  );
}
