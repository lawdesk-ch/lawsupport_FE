'use client';

import { useState } from 'react';
import { ourApproach } from '@/data/data';
import Image from 'next/image';

import InquiryForm from '@/components/common/InquiryForm';

const OurApproach = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full ">
      <div className="flex mb-[50px]">
        <h2 className="text-5xl w-1/2">Our approach</h2>
        <p className="color-silver max-w-[590px] text-lg w-1/2">
          At Lawsupport, we understand that every business is unique. The
          approach involves working closely with you to gain a deep
          understanding of your goals and challenges. This personalized approach
          allows us to provide the right solutions. Our process involves:
        </p>
      </div>

      <div className="flex justify-between items-start">
        <section className="flex flex-col rounded-lg gap-[15px] md:gap-[10px] lg:gap-[15px] lg:pr-20 lg:max-w-[453px] w-1/2 h-auto bg-[#fafafa] p-6 md:p-5 lg:p-[30px]">
          <h2 className="text-2xl md:text-[28px] lg:text-[32px]">Contact us</h2>
          <p className="color-silver md:max-w-[632px]  lg:max-w-[374px]">
            If you would like a personal meeting with a lawyer at one of our
            offices, please use the contact form to specify your case
          </p>

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
              <h3 className="text-xl leading-none mb-1">Alex Werner</h3>
              <p className="text-lg color-silver">Law Support analytic</p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="bg-[#f00] text-white rounded-lg text-xs w-[177px] cursor-pointer h-8 active:bg-[#d20000] hover:bg-[#d20000]"
          >
            Order a callback
          </button>
        </section>

        <div className="w-1/2">
          <ul className="grid md:grid-cols-2 gap-x-5 gap-y-[67px] mb-11">
            {ourApproach.map((service) => (
              <li
                key={service.title}
                className="flex flex-col gap-[15px] md:gap-4 lg:gap-5"
              >
                <Image
                  src={`/icons/ourApproach/${service.icon}.svg`}
                  className="w-12 h-12"
                  loading="lazy"
                  width={24}
                  height={24}
                  alt={service.icon}
                />
                <h3 className="text-xl font-medium">{service.title}</h3>
                <p className="text-lg leading-none color-silver">
                  {service.desc}
                </p>
              </li>
            ))}
          </ul>

          <p className="text-[32px] leading-none">
            Whether you&apos;re looking for company creation or liquidation,
            bookkeeping, audit, tax planning, we have experience and manpower to
            deliver! If you have already encountered the traditional local
            approach to doing business, then you can imagine why our services
            are popular.
          </p>
        </div>
      </div>

      <InquiryForm open={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default OurApproach;
