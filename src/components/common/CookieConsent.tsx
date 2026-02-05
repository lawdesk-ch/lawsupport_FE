'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const COOKIE_KEY = 'cookie_consent';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem(
      COOKIE_KEY,
      JSON.stringify({
        analytics: true,
        functional: true,
        marketing: true,
        acceptedAt: new Date().toISOString(),
      })
    );
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-2 lg:bottom-4 lg:right-4 z-50 mx-4 text-sm md:text-base lg:max-w-3xl rounded-xl bg-neutral-900 p-3 md:p-4 lg:p-5 text-white shadow-xl">
      <h3 className="mb-2 lg:mb-4 text-2xl md:text-3xl font-medium">
        Cookies Preferences
      </h3>

      <p className="mb-1 text-neutral-300">
        We use cookies to enhance your browsing experience, analyze site usage,
        remember your preferences, and support our services. Strictly necessary
        cookies are always active to ensure the website functions properly.
      </p>
      <p className="mb-4 lg:mb-6 text-neutral-300">
        By clicking <strong>Accept All</strong>, you consent to our use of
        analytics, functional, and marketing cookies. You can customize your
        preferences or learn more in our{' '}
        <Link
          href="/cookies-policy"
          className="underline text-neutral-200 hover:text-white"
        >
          Cookie Policy
        </Link>
        .
      </p>

      <div className="flex flex-wrap md:flex-nowrap gap-2">
        <button
          onClick={acceptAll}
          className="flex-1 rounded-lg bg-white px-3 py-2 font-semibold text-black hover:bg-neutral-300 transition"
        >
          Accept All
        </button>

        <Link
          href="/cookies-policy"
          className="flex-1 rounded-lg border border-neutral-600 px-3 py-2 text-center hover:bg-neutral-700 transition"
        >
          Cookie Settings
        </Link>
      </div>
    </div>
  );
}
