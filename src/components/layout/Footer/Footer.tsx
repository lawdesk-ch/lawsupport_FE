'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useNews } from '@/context/NewsContext';
import { Article } from '@/types/index';
import InquiryForm from '@/components/common/InquiryForm';
import OurLatestArticles from '@/components/common/OurLatestArticles';
import NavMenu from '@/components/ui/NavMenu';
import { menuItemsFooter } from '@/data/data';

type Props = { articles: Article[] };

export default function Footer({ articles }: Props) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { activeCategory, setCategory } = useNews();
  const pathname = usePathname();

  const handleNavigation = (slug?: string, href?: string) => {
    if (slug) {
      router.push(`/all-news/?category=${slug}`);
    } else if (href) {
      router.push(href);
    }
  };

  const isActive = pathname === '/all-news/' && activeCategory === 'all';

  return (
    <footer className="bg-[#fafafa] mt-20 lg:mt-25">
      <section className="hidden md:flex flex-col w-full bg-white pt-20 lg:pt-25 pb-20 lg:pb-25">
        <OurLatestArticles articles={articles} />
      </section>

      <div className="container-mobile pb-5 lg:pb-13 pt-20 lg:pt-10 w-full">
        <section className="hidden md:flex lg:hidden md:gap-40 w-full justify-center md:mb-20">
          <nav className="flex flex-col items-center gap-2">
            <h3 className="text-xs color-red">menu</h3>
            <ul className="text-sm flex flex-col items-center gap-2">
              <li className="active:text-[#6a6a6a] hover:text-[#6a6a6a] transition-colors duration-300">
                <Link href="/">Main</Link>
              </li>
              <li className="active:text-[#6a6a6a] hover:text-[#6a6a6a] transition-colors duration-300">
                <Link href="/about-us">About us</Link>
              </li>
              <li className="active:text-[#6a6a6a] hover:text-[#6a6a6a] transition-colors duration-300">
                <Link href="/about-us/#contacts">Contact</Link>
              </li>
            </ul>
          </nav>

          <nav className="flex flex-col items-center md:w-[200px] gap-2">
            <h3 className="text-xs color-red">our services</h3>
            <NavMenu
              items={menuItemsFooter.map((i) => ({
                label: i.label,
                slug: i.slug ?? '',
                onClick: () => handleNavigation(i.slug),
              }))}
              className="flex flex-col text-center gap-2 text-sm md:text-sm"
            />
          </nav>

          <nav className="flex flex-col items-center gap-2">
            <h3 className="text-xs color-red">news</h3>

            <button
              type="button"
              onClick={() => {
                setCategory('all');
                router.push('/all-news/');
              }}
              className={`text-sm text-left p-0 transition-colors duration-300 ${
                isActive ? 'text-red-500' : 'hover:text-[#6a6a6a]'
              }`}
            >
              Insight
            </button>
          </nav>
        </section>

        <div className="flex flex-col md:flex-row w-full md:justify-between">
          <div className="lg:flex md:w-auto lg:w-full lg:gap-0 lg:max-w-[907px] lg:justify-between mb-10 lg:mb-0">
            <section className="mb-10 lg:mb-0">
              <h3 className="text-xs md:max-w-[354px] lg:max-w-[429px] mb-[30px] md:mb-[35px] lg:mb-[125px] color-silver">
                All content on this website is provided for information purposes
                only and does not constitute legal, tax, or financial advice. We
                accept no responsibility for any loss or damage arising from
                reliance on this information.
              </h3>

              <div className="flex flex-col gap-2 md:gap-9 lg:gap-2">
                <p className="text-xs color-silver order-1 md:order-2 lg:order-1">
                  &copy; 2007 - 2026 Goldblum and Partners. All Rights Reserved
                </p>

                {pathname === '/' ? (
                  <div className="flex items-center gap-4 w-[443px] order-2 md:order-1 lg:order-2">
                    <Image
                      src="/images/logo.png"
                      alt="logo"
                      loading="lazy"
                      width={106}
                      height={53}
                      className="w-[84px] h-[42px] md:w-[84px] md:h-[42px] lg:w-[106px] lg:h-[53px]"
                    />

                    <div className="flex flex-col">
                      <span className="text-[30px] lg:text-4xl font-medium uppercase leading-none color-red">
                        Law support
                      </span>
                      <span className="lg:text-lg leading-none">
                        Corporate services in Switzerland
                      </span>
                    </div>
                  </div>
                ) : (
                  <Link
                    href="/"
                    className="text-6xl md:text-[77px] m-0 p-0 color-red"
                  >
                    <div className="flex items-center gap-4 w-[443px] order-2 md:order-1 lg:order-2">
                      <Image
                        src="/images/logo.png"
                        alt="logo"
                        loading="lazy"
                        width={106}
                        height={53}
                        className="w-[84px] h-[42px] md:w-[84px] md:h-[42px] lg:w-[106px] lg:h-[53px]"
                      />

                      <div className="flex flex-col">
                        <span className="text-[30px] lg:text-4xl font-medium uppercase leading-none color-red">
                          Law support
                        </span>
                        <span className="lg:text-lg leading-none">
                          Corporate services in Switzerland
                        </span>
                      </div>
                    </div>
                  </Link>
                )}
              </div>
            </section>

            <section className="flex md:hidden lg:flex md:gap-6 lg:gap-0 lg:w-full md:max-w-[364px] lg:max-w-[409px] justify-between">
              <div className="space-y-10">
                <nav className="flex flex-col gap-[14px]">
                  <h3 className="text-xs color-red">menu</h3>
                  <ul className="text-sm flex flex-col gap-[9px]">
                    <li className="active:text-[#6a6a6a] hover:text-[#6a6a6a] transition-colors duration-300">
                      <Link href="/">Main</Link>
                    </li>
                    <li className="active:text-[#6a6a6a] hover:text-[#6a6a6a] transition-colors duration-300">
                      <Link href="/about-us">Aboit us</Link>
                    </li>
                    <li className="active:text-[#6a6a6a] hover:text-[#6a6a6a] transition-colors duration-300">
                      <Link href="/about-us/#contacts">Contact</Link>
                    </li>
                  </ul>
                </nav>

                <nav className="flex md:hidden lg:hidden flex-col gap-[14px]">
                  <h3 className="text-xs color-red">news</h3>

                  <button
                    type="button"
                    onClick={() => {
                      setCategory('all');
                      router.push('/all-news/');
                    }}
                    className={`text-sm text-left p-0 transition-colors duration-300 ${
                      isActive ? 'text-red-500' : 'hover:text-[#6a6a6a]'
                    }`}
                  >
                    Insight
                  </button>
                </nav>
              </div>

              <nav className="flex flex-col max-w-[167px] lg:max-w-[200px] gap-[14px]">
                <h3 className="text-xs color-red">our services</h3>
                <NavMenu
                  items={menuItemsFooter.map((i) => ({
                    label: i.label,
                    slug: i.slug ?? '',
                    onClick: () => handleNavigation(i.slug),
                  }))}
                  className="flex flex-col gap-[8px] text-sm md:text-sm"
                />
              </nav>

              <nav className="hidden md:flex lg:flex flex-col gap-[14px]">
                <h3 className="text-xs color-red">news</h3>

                <button
                  type="button"
                  onClick={() => {
                    setCategory('all');
                    router.push('/all-news/');
                  }}
                  className={`text-sm text-left p-0 transition-colors duration-300 ${
                    isActive ? 'text-red-500' : 'hover:text-[#6a6a6a]'
                  }`}
                >
                  Insight
                </button>
              </nav>
            </section>
          </div>

          <section className="flex flex-col lg:flex-row lg:justify-between gap-7 lg:gap-[11px] w-full lg:w-auto lg:flex-1 lg:max-w-[432px] items-end ml-auto md:ml-0 lg:mb-1">
            <div className="flex flex-col gap-5 lg:gap-[30px] flex-end w-full">
              <address className="not-italic ml-auto lg:ml-0">
                <p className="text-xs text-right lg:text-left color-silver">
                  Switzerland
                  <br />
                  Stockerstrasse 45, 8002 Zürich
                  <br />
                  Baarerstrasse 25, Zug
                </p>
              </address>

              <ul className="flex justify-between w-full lg:w-auto lg:flex-1 max-w-[176px] text-xs color-red ml-auto lg:ml-0 lg:mb-2">
                <li className="active:text-red-300 hover:text-red-300 transition-colors duration-300">
                  <a
                    href="https://www.facebook.com/goldblum.and.partners"
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                    aria-label="Visit our Facebook page"
                  >
                    facebook
                  </a>
                </li>

                <li className="active:text-red-300 hover:text-red-300 transition-colors duration-300">
                  <a
                    href="https://x.com/Law_Switzerland"
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                    aria-label="Visit our X page"
                  >
                    x.com
                  </a>
                </li>

                <li className="active:text-red-300 hover:text-red-300 transition-colors duration-300">
                  <a
                    href="https://www.instagram.com/law_support.switzerland"
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                    aria-label="Visit our Instagram page"
                  >
                    instagram
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3 lg:gap-5 w-full">
              <address className="w-[236px] ml-auto">
                <a
                  className="text-[32px] not-italic text-[#100] leading-none active:text-[#6a6a6a] hover:text-[#6a6a6a] transition-colors duration-300"
                  href="tel:+41445152590"
                >
                  +41 44 51 52 590
                </a>
              </address>

              <button
                type="button"
                onClick={() => setOpen(true)}
                className="bg-black text-white ml-auto rounded-lg text-xs min-w-[177px] max-w-[177px] min-h-8 cursor-pointer active:bg-[#6a6a6a] hover:bg-[#6a6a6a]"
              >
                Order a callback
              </button>
            </div>
          </section>
        </div>

        <nav className="mt-6 lg:mt-5 lg:max-w-[460px]">
          <ul className="text-xs flex w-full justify-between">
            <li className="active:text-[#6a6a6a] hover:text-[#6a6a6a] transition-colors duration-300">
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li className="active:text-[#6a6a6a] hover:text-[#6a6a6a] transition-colors duration-300">
              <Link href="/terms-and-conditions">Terms and Conditions</Link>
            </li>
            <li className="active:text-[#6a6a6a] hover:text-[#6a6a6a] transition-colors duration-300">
              <Link href="/cookies-policy">Cookies Policy</Link>
            </li>
          </ul>
        </nav>
      </div>

      <InquiryForm open={open} onClose={() => setOpen(false)} />
    </footer>
  );
}
