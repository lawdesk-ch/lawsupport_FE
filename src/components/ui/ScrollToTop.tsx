'use client';

import { useEffect, useState } from 'react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-8 right-4 z-50 rounded-full px-3 py-2 md:px-4 md:py-3 bg-black text-white shadow-xl
      hover:bg-gray-800 hover:scale-110 hover:-translate-y-1 active:scale-95 transition-all duration-300 ease-out"
    >
      ↑
    </button>
  );
}
