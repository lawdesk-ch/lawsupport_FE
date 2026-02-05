import Image from 'next/image';
import Link from 'next/link';
import { services } from '@/data/data';

function Hero() {
  return (
    <div className="relative w-full">
      <div className="flex flex-col md:flex-row bg-[#f00] w-full h-[560px] md:h-[387px] lg:h-[531px] max-w-[768px] md:max-w-[1024px] lg:max-w-[1440px]">
        <div className="mt-[222px] order-2 md:order-1 h-1/3 text-white md:h-auto md:min-w-[479px] lg:min-w-[612px] p-4 md:p-6">
          <h1 className="text-[32px] md:text-[42px] lg:text-5xl leading-none mb-3">
            Business In Switzerland
          </h1>

          <p className="md:text-[26px] lg:text-[32px] leading-none max-w-[410px]">
            And company registration in Switzerland
          </p>
        </div>

        <div className="relative order-1 md:order-2 h-full md:h-auto md:w-full">
          <Image
            src="/images/lawsupport.jpg"
            alt="lawsupport"
            fetchPriority="high"
            quality={75}
            fill
            sizes="(max-width: 768px) 100vw, 
                          (max-width: 1024px) 768px, 
                          (max-width: 1440px) 1024px, 
                          1440px"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <ul className="absolute flex flex-wrap w-full z-10 bottom-0">
        {services.map((service, i) => (
          <li key={i} className="">
            <Link
              href={`/${service.slug}`}
              className={`flex items-center w-[350px] h-[72px] px-6 text-xl bg-${service.bg} text-${service.color} hover:text-[#6a6a6a] transition-colors`}
            >
              {service.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Hero;
