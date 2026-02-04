'use client';

import React from 'react';
import Link from 'next/link';

export default function Error() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#fafafa]">
      <p className="text-[70px] md:text-[96px] color-red">404 Error</p>
      <p className="text-[16px] md:text-[20px] text-center">
        An unexpected error occurred. <br />
        Please try again or return to the home page.
      </p>
      <Link
        href="/"
        className="flex items-center justify-center min-w-[120px] max-w-[177px] h-8 mt-4 md:mt-6 text-white rounded-2xl text-sm bg-black"
      >
        Go to Home
      </Link>
    </div>
  );
}
