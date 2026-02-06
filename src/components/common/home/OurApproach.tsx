'use client';

import { useState } from 'react';
import { ourApproach } from '@/data/data';
import Image from 'next/image';

import InquiryForm from '@/components/common/InquiryForm';

const OurApproach = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 mb-[30px] md:mb-[26px] lg:mb-[50px]">
        <h2 className="text-[32px] md:text-[42px] lg:text-5xl">Our approach</h2>
        <p className="color-silver lg:max-w-[590px] lg:text-lg">
          At Lawsupport, we understand that every business is unique. The
          approach involves working closely with you to gain a deep
          understanding of your goals and challenges. This personalized approach
          allows us to provide the right solutions. Our process involves:
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-start">
        <section
          className="rounded-lg space-y-[28px] lg:space-y-[15px] lg:pr-20 lg:max-w-[453px] 
            lg:w-1/2 w-full h-auto bg-[#fafafa] p-6 md:p-5 lg:p-[30px] order-2 lg:order-1"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-[15px] md:gap-[15px] lg:gap-[15px]">
            <div className="space-y-[15px]">
              <h2 className="text-2xl md:text-[26px] lg:text-[32px]">
                Contact us
              </h2>
              <p className="color-silver md:max-w-[632px] lg:max-w-[374px]">
                If you would like a personal meeting with a lawyer at one of our
                offices, please use the contact form to specify your case
              </p>
            </div>

            <div className="flex gap-6 items-center">
              <Image
                src="/images/man.jpg"
                alt="image-man"
                loading="lazy"
                width={98}
                height={98}
                className="w-[98px] h-[98px] rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg lg:text-xl leading-none mb-1">
                  Alex Werner
                </h3>
                <p className="lg:text-lg color-silver">Law Support analytic</p>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="bg-[#f00] text-white rounded-lg text-xs w-full lg:w-[177px] cursor-pointer h-8 active:bg-[#d20000] hover:bg-[#d20000]"
          >
            Order a callback
          </button>
        </section>

        <div className="lg:w-1/2 order-1 lg:order-2 mb-[28px] lg:mb-0">
          <ul className="grid md:grid-cols-2 md:gap-x-10 lg:gap-x-5 gap-y-10 lg:gap-y-[65px] mb-[30px] md:mb-11">
            {ourApproach.map((service) => (
              <li
                key={service.title}
                className="flex flex-col gap-[15px] md:gap-4 lg:gap-5"
              >
                <Image
                  src={`/icons/ourApproach/${service.icon}.svg`}
                  className="w-12 h-12"
                  loading="lazy"
                  width={48}
                  height={48}
                  alt={service.icon}
                />
                <h3 className="text-xl md:text-[26px] lg:text-xl font-medium">
                  {service.title}
                </h3>
                <p className="lg:text-lg leading-none color-silver">
                  {service.desc}
                </p>
              </li>
            ))}
          </ul>

          <p className="text-2xl md::text-[26px] lg:text-[32px] leading-none">
            Whether you&apos;re looking for company creation or liquidation,
            bookkeeping, audit, tax planning, we have experience and manpower to
            deliver! If you have already encountered the traditional local
            approach to doing business, then you can imagine why our services
            are popular.
          </p>
        </div>
      </div>

      <InquiryForm open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default OurApproach;
