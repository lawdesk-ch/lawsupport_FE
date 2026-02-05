'use client';

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
  useRef,
} from 'react';
import { Article } from '@/types/index';
import { getArticlesByCategory } from '@/lib/strapi';

interface NewsContextType {
  activeCategory: string;
  articles: Article[];
  loading: boolean;
  setCategory: (slug: string) => void;
  loadMore: () => Promise<void>;
}

const NewsContext = createContext<NewsContextType | undefined>(undefined);

export function NewsProvider({
  children,
  initialArticles,
}: {
  children: ReactNode;
  initialArticles: Article[];
}) {
  const sortByDateDesc = (articles: Article[]) =>
    [...articles].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

  const [activeCategory, setActiveCategoryState] = useState('all');
  const [articles, setArticles] = useState(sortByDateDesc(initialArticles));
  const [loading, setLoading] = useState(false);

  const requestIdRef = useRef(0);

  const loadMore = useCallback(async () => {
    setLoading(true);
    try {
      const moreArticles = await getArticlesByCategory(
        activeCategory === 'all' ? undefined : activeCategory,
        500
      );
      setArticles(sortByDateDesc(moreArticles));
    } finally {
      setLoading(false);
    }
  }, [activeCategory]);

  const setCategory = useCallback(
    (slug: string) => {
      if (slug === activeCategory) return;
      setActiveCategoryState(slug);
      setArticles([]);
      setLoading(true);

      const currentRequestId = ++requestIdRef.current;

      getArticlesByCategory(slug === 'all' ? undefined : slug, 500)
        .then((newArticles) => {
          if (currentRequestId === requestIdRef.current) {
            setArticles(sortByDateDesc(newArticles));
          }
        })
        .finally(() => {
          if (currentRequestId === requestIdRef.current) {
            setLoading(false);
          }
        });
    },
    [activeCategory]
  );

  return (
    <NewsContext.Provider
      value={{ activeCategory, articles, loading, setCategory, loadMore }}
    >
      {children}
    </NewsContext.Provider>
  );
}

export function useNews() {
  const context = useContext(NewsContext);
  if (!context) throw new Error('useNews must be used within NewsProvider');
  return context;
}
