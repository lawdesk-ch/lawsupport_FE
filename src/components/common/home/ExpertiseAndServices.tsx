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
          className={`flex max-w-[700px] h-[350px] ${
            index % 4 >= 2 ? 'flex-row-reverse' : ''
          }`}
        >
          <Image
            src={`/images/expertiseAndServices/${item.img}.jpg`}
            className="w-[350px] h-[350px] object-cover"
            loading="lazy"
            width={350}
            height={350}
            alt={item.img}
          />
          <div className="w-[350px] h-[350px] bg-[#fafafa] p-6">
            <h3 className="text-xl font-medium text-black leading-none mb-5">
              {item.title}
            </h3>

            <p className="text-lg color-silver leading-tight">
              {item.description}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ExpertiseAndServices;
