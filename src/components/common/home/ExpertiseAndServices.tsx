import Image from 'next/image';

export const expertiseAndServices = [
  {
    img: 'write',
    title: 'Expertise in Swiss Corporate Law',
    description: (
      <>
        Our team of experienced Swiss lawyers specializes in corporate law,
        ensuring that your{' '}
        <span className="text-[#f00]">company formation</span> in Switzerland
        and business operations are fully compliant with local regulations.
      </>
    ),
  },
  {
    img: 'show',
    title: 'Tailored Solutions',
    description: (
      <>
        <span className="text-[#f00]">Lawsupport</span> provides custom-tailored
        company formation solutions to meet your specific business needs,
        whether you&apos;re starting a business in Switzerland or expanding an
        existing one.
      </>
    ),
  },
  {
    img: 'flag',
    title: 'Efficient Company Formation',
    description: (
      <>
        We offer seamless company formation in Switzerland services, helping you
        get your business up and running quickly and smoothly.
      </>
    ),
  },
  {
    img: 'citi',
    title: 'Shelf Companies',
    description: (
      <>
        Explore our <span className="text-[#f00]">shelf company</span> options,
        designed for those seeking an expedited start to their Swiss business
        journey.
      </>
    ),
  },
  {
    img: 'notebook',
    title: 'Resident Card Assistance',
    description: (
      <>
        We assist you in obtaining{' '}
        <span className="text-[#f00]">resident cards in Switzerland</span>,
        simplifying the process of establishing a physical presence in the
        country.
      </>
    ),
  },
  {
    img: 'build',
    title: 'Swiss Bank Account Setup',
    description: (
      <>
        Banking experts will assist you in navigating the process of{' '}
        <span className="text-[#f00]">opening a Swiss bank account</span>,
        essential for efficiently managing your financial affairs.
      </>
    ),
  },
  {
    img: 'bark',
    title: 'Comprehensive Accounting Services',
    description: (
      <>
        Stay on top of your financial records with our professional{' '}
        <span className="text-[#f00]">accounting services</span> tailored to
        your business.
      </>
    ),
  },
  {
    img: 'speack',
    title: 'Effortless Company Liquidation',
    description: (
      <>
        When the time comes to dissolve your Swiss company,{' '}
        <span className="text-[#f00]">Lawsupport</span> provides efficient
        company liquidation services.
      </>
    ),
  },
];

const ExpertiseAndServices = () => {
  return (
    <ul className="grid grid-cols-1 lg:grid-cols-2">
      {expertiseAndServices.map((item, index) => (
        <li
          key={item.title}
          className={`flex flex-col md:flex-row w-full 
            ${index % 2 === 1 ? 'md:flex-row-reverse lg:flex-row' : ''}
            ${index % 4 >= 2 ? 'lg:flex-row-reverse' : ''}`}
        >
          <div className="relative w-full md:w-1/2 h-[365px] lg:h-[350px]">
            <Image
              src={`/images/expertiseAndServices/${item.img}.jpg`}
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
              loading="lazy"
              fill
              alt={item.img}
            />
          </div>
          <div className="flex flex-col justify-center md:justify-start w-full md:w-1/2 h-[365px] lg:h-[350px] bg-[#fafafa] p-4 md:p-6">
            <h3 className="text-xl font-medium text-black leading-none mb-5">
              {item.title}
            </h3>

            <p className="lg:text-lg color-silver leading-tight">
              {item.description}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ExpertiseAndServices;
