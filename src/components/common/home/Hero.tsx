import Image from 'next/image';
import Link from 'next/link';
import { services } from '@/data/data';

function Hero() {
  return (
    <div className="relative w-full">
      <div
        className="flex flex-col md:flex-row bg-[#f00] w-full h-[350px] md:h-[387px] lg:h-[531px] max-w-[768px] 
          md:max-w-[1024px] lg:max-w-[1440px]"
      >
        <div
          className="text-white md:mt-[197px] lg:mt-[222px] h-[121px] md:h-auto md:min-w-[479px] lg:min-w-[612px] 
            order-2 md:order-1 p-3 md:p-6"
        >
          <h1 className="text-[30px] md:text-[42px] lg:text-5xl leading-none mb-3">
            Business In Switzerland
          </h1>

          <p className="text-xl md:text-[26px] lg:text-[32px] leading-tight md:leading-none max-w-[323px] lg:max-w-[410px]">
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

      <ul className="lg:absolute lg:bottom-0 grid grid-cols-2 lg:grid-cols-4 z-10">
        {services.map((service, i) => (
          <li key={i} className="">
            <Link
              href={`/${service.slug}`}
              className={`flex items-center h-[72px] px-3 md:px-6 text-lg leading-tight md:text-xl 
              ${service.bg} ${service.bgLg} ${service.color} ${service.colorLg} hover:text-[#6a6a6a] transition-colors`}
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
