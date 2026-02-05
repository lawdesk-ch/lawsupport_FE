'use client';
import Link, { LinkProps } from 'next/link';
import NProgress from 'nprogress';
import React, { AnchorHTMLAttributes } from 'react';

interface ProgressLinkProps
  extends LinkProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  children: React.ReactNode;
  className?: string;
}

export default function ProgressLink({
  href,
  children,
  className,
  ...props
}: ProgressLinkProps) {
  const handleClick = () => {
    NProgress.start();
  };

  return (
    <Link
      href={href}
      prefetch={false}
      {...props}
      onClick={handleClick}
      className={className}
    >
      {children}
    </Link>
  );
}
