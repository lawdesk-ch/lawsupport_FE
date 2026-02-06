import Image from 'next/image';
import { unlockSwiss } from '@/data/data';

const UnlockSwissAdvantage = () => {
  return (
    <>
      <div className="flex mb-[50px]">
        <h2 className="text-5xl w-1/2">Unlock the Swiss Advantage</h2>
        <p className="color-silver max-w-[540px] text-lg w-1/2">
          Switzerland&apos;s reputation for stability, innovation, and a
          business-friendly environment is renowned worldwide. By choosing{' '}
          <span className="text-[#f00]">Lawsupport</span> as your partner, you
          gain access to this advantageous Swiss landscape. Here&apos;s how:
        </p>
      </div>

      <ul className="flex flex-col">
        {unlockSwiss.map((item, index) => (
          <li
            key={item.title}
            className={`flex flex-col md:flex-row w-full ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
          >
            <div className="relative w-full md:w-1/2 h-[232px] md:h-[250px] lg:h-[209px]">
              <Image
                src={`/images/unlockSwissAdvantage/${item.img}.jpg`}
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
                loading="lazy"
                fill
                alt={item.img}
              />
            </div>
            <div className="w-full md:w-1/2 h-[232px] md:h-[250px] lg:h-[209px] bg-[#fafafa] p-4 md:p-6">
              <Image
                src={`/icons/unlockSwissAdvantage/${item.icon}.svg`}
                className="w-6 h-6 mb-4"
                loading="lazy"
                width={24}
                height={24}
                alt={item.icon}
              />
              <h3 className="text-2xl md:text-[26px] lg:text-[32px] font-medium text-black leading-none mb-4">
                {item.title}
              </h3>

              <p className="text-lg color-silver leading-tight">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UnlockSwissAdvantage;
