'use client';

import { useNews } from '@/context/NewsContext';
import { usePathname } from 'next/navigation';

interface NavItem {
  slug?: string;
  label: string;
  onClick?: () => void;
}

interface NavMenuProps {
  items: NavItem[];
  className?: string;
}

export default function NavMenu({ items, className = '' }: NavMenuProps) {
  const { activeCategory, setCategory } = useNews();
  const pathname = usePathname();
  const canHighlight = pathname === '/' || pathname === '/all-news/';

  return (
    <ul className={`${className}`}>
      {items.map((item, index) => (
        <li
          key={index}
          className={`cursor-pointer transition-colors duration-300 ${
            canHighlight && activeCategory === item.slug
              ? 'text-red-500'
              : 'hover:text-[#6a6a6a]'
          }`}
          onClick={() => {
            if (item.slug) setCategory(item.slug);
            if (item.onClick) item.onClick();
          }}
        >
          {item.label}
        </li>
      ))}
    </ul>
  );
}
