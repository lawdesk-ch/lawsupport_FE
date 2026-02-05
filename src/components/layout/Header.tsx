'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import {
  XIcon,
  InstagramIcon,
  FacebookIcon,
} from '@/components/assets/IconsSocial';
// import { useNews } from '@/context/NewsContext';
import { menuItemsHeader } from '@/data/data';
import NavMenuHeader from '@/components/ui/NavMenuHeader';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  // const { setCategory } = useNews();
  const router = useRouter();
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen((prev) => {
      document.body.classList.toggle('overflow-hidden', !prev);
      return !prev;
    });
  };

  // const handleCategoryClick = (slug: string) => {
  //   setCategory(slug);

  //   if (pathname === '/all-news/') {
  //     router.push(`/all-news/?category=${slug}`);
  //   } else {
  //     router.push(`/all-news/?category=${slug}`);
  //   }

  //   setIsOpen(false);
  //   document.body.classList.remove('overflow-hidden');
  // };

  return (
    <header className="sticky top-0 z-50 bg-white w-full">
      <div className="flex flex-col lg:flex-row max-w-[1440px] lg:gap-[38px] py-[18px] px-[10px] lg:px-5 items-center justify-between mx-auto w-full">
        <div className="flex items-center justify-between lg:max-w-[552px] w-full lg:gap-[27px]">
          {pathname === '/' ? (
            <div className="flex items-center gap-2 w-[234px]">
              <Image
                src="/images/logo.png"
                className="w-14 h-7"
                loading="lazy"
                width={56}
                height={28}
                alt="logo"
              />
              <div className="flex flex-col">
                <span className="text-xl font-medium uppercase color-red">
                  Law support
                </span>
                <span className="text-[10px]">
                  Corporate services in Switzerland
                </span>
              </div>
            </div>
          ) : (
            <Link href="/" className="flex items-center w-[234px]">
              <Image
                src="/images/logo.png"
                className="w-14 h-7"
                loading="lazy"
                width={56}
                height={28}
                alt="logo"
              />
              <div className="flex flex-col">
                <span className="text-xl font-medium uppercase color-red">
                  Law support
                </span>
                <span className="text-[10px]">
                  Corporate services in Switzerland
                </span>
              </div>
            </Link>
          )}

          <nav className="hidden lg:flex ">
            <NavMenuHeader
              items={menuItemsHeader}
              className="text-[#100] lg:text-sm"
            />
          </nav>

          <button
            type="button"
            className="block lg:hidden"
            onClick={toggleMenu}
          >
            <Image
              src={isOpen ? '/icons/close.svg' : '/icons/burger-menu.svg'}
              className="w-6 h-6"
              loading="lazy"
              width={24}
              height={24}
              alt="burger-menu_close"
            />
          </button>
        </div>

        <div
          className={`
            ${isOpen ? 'flex' : 'hidden'}
            lg:flex flex-col items-center justify-between lg:h-auto fixed inset-0 lg:static w-full lg:max-w-[564px]
            bg-white lg:bg-transparent mt-12 pt-[46px] md:mt-[46px] md:pt-[154px] lg:mt-0 p-5 lg:p-0 z-49
          `}
        >
          {/* <nav className="flex text-center flex-col lg:hidden">
            <NavMenuHeader
              items={menuItemsHeader.map((i) => ({
                ...i,
                onClick: () => {
                  handleCategoryClick(i.slug);
                  setIsOpen(false);
                },
              }))}
              className="flex flex-col text-[#100] gap-5 text-2xl md:text-3xl"
            />
          </nav> */}

          <div className="flex flex-col lg:flex-row lg:w-full lg:flex-wrap gap-5 lg:justify-end items-center">
            <address className="">
              <a
                className="text-2xl md:text-3xl lg:text-sm lg:w-[103px] not-italic active:text-[#6a6a6a] hover:text-[#6a6a6a] transition-colors duration-300"
                href="tel:+41445152590"
              >
                +41 44 51 52 590
              </a>
            </address>

            <div className="flex flex-col lg:flex-row lg:max-w-[260px] lg:w-full lg:justify-between gap-5 lg:gap-0 items-center">
              <ul className="lg:grid lg:grid-cols-3 flex justify-between items-center w-full max-w-[108px] md:min-w-[148px] lg:min-w-0 lg:max-w-[108px]">
                <li className="flex group items-center justify-center rounded-full w-7 h-7 md:w-9 md:h-9 lg:w-7 lg:h-7 border border-black/15 hover:border-[#0866ff] active:border-[#0866ff]">
                  <a
                    className=""
                    rel="nofollow noopener noreferrer"
                    href="https://www.facebook.com/goldblum.and.partners"
                    target="_blank"
                    aria-label="Visit our Facebook page"
                  >
                    <FacebookIcon className="w-4 h-4 md:w-5 md:h-5 lg:w-4 lg:h-4 fill-black/50 group-hover:fill-[#0866ff] block group-active:fill-[#0866ff]" />
                  </a>
                </li>

                <li className="flex group items-center justify-center rounded-full w-7 h-7 md:w-9 md:h-9 lg:w-7 lg:h-7 border border-black/15 hover:border-[#fe7201] active:border-[#fe7201]">
                  <a
                    className=""
                    rel="nofollow noopener noreferrer"
                    href="https://www.instagram.com/law_support.switzerland"
                    target="_blank"
                    aria-label="Visit our Instagram page"
                  >
                    <InstagramIcon className="w-4 h-4 md:w-5 md:h-5 lg:w-4 lg:h-4 text-black/50 group-hover:text-[#fe7201] block group-active:text-[#fe7201]" />
                  </a>
                </li>

                <li className="flex group items-center justify-center rounded-full w-7 h-7 md:w-9 md:h-9 lg:w-7 lg:h-7 border border-black/15 hover:border-[#000000] active:border-[#000000]">
                  <a
                    className=""
                    rel="nofollow noopener noreferrer"
                    href="https://x.com/Law_Switzerland"
                    target="_blank"
                    aria-label="Visit our X page"
                  >
                    <XIcon className="w-4 h-3 md:w-5 md:h-4 lg:w-4 lg:h-3 text-black/50 group-hover:text-[#000000] block group-active:text-[#000000]" />
                  </a>
                </li>
              </ul>

              <Link
                className="text-xs flex items-center justify-center text-white bg-[#f00] border border-black/15 rounded-lg w-30 h-8 transition-opacity duration-250 active:bg-[#d20000] hover:bg-[#d20000]"
                href="/about-us/#contacts"
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(false);
                  document.body.classList.remove('overflow-hidden');

                  router.push('/about-us/#contacts');
                }}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
