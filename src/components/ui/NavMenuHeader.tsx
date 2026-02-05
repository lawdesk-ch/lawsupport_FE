'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CheckIcon } from '@/components/assets/icons';

interface NavItem {
  label: string;
  slug?: string;
  children?: NavItem[];
}

interface NavMenuProps {
  items: NavItem[];
  className?: string;
}

export default function NavMenuHeader({ items, className = '' }: NavMenuProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <ul className={`flex gap-[23px] ${className}`}>
      {items.map((item, index) => {
        const hasChildren = !!item.children;

        return (
          <li key={index} className="relative">
            <button
              type="button"
              onClick={() =>
                hasChildren
                  ? setOpenIndex(openIndex === index ? null : index)
                  : null
              }
              className="flex items-center gap-1 hover:text-[#6a6a6a] transition-colors"
            >
              {item.slug ? (
                <Link href={`/${item.slug}`}>{item.label}</Link>
              ) : (
                <span>{item.label}</span>
              )}

              {hasChildren && (
                <CheckIcon
                  className={`w-4 h-4 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              )}
            </button>

            {hasChildren && openIndex === index && (
              <ul className="absolute top-full left-0 mt-2 w-[231px] space-y-2 rounded-lg border border-black/15 bg-white shadow-lg p-4 z-50">
                {item.children?.map((child, i) => (
                  <li key={i}>
                    <Link
                      href={`/${child.slug}`}
                      className="block hover:text-[#6a6a6a] transition"
                    >
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
}
