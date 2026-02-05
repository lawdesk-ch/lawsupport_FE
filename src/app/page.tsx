import Hero from '@/components/common/home/Hero';
import SwissBusinessOverview from '@/components/common/home/SwissBusinessOverview';
import ExpertiseAndServices from '@/components/common/home/ExpertiseAndServices';
import OurApproach from '@/components/common/home/OurApproach';

// import { SITE_URL, SITE_URL_IMAGES } from '@/const/constants';

export default async function Home() {
  return (
    <>
      <section className="container-mobile w-full mb-20">
        <Hero />
      </section>

      <section className="container-mobile w-full mb-[50px]">
        <SwissBusinessOverview />
      </section>

      <section className="container-mobile w-full mb-40">
        <ExpertiseAndServices />
      </section>

      <section className="container-mobile w-full mb-40">
        <OurApproach />
      </section>
    </>
  );
}

// export const metadata = {
//   title: 'Lawsupport — Corporate Services & Business Setup in Switzerland',
//   description:
//     'Lawsupport provides expert legal support and corporate services in Switzerland. From company formation, resident cards, Swiss bank accounts to accounting and company liquidation, we help entrepreneurs launch and grow their Swiss business efficiently.',
//   keywords: [
//     'Lawsupport',
//     'legal support Switzerland',
//     'corporate services Switzerland',
//     'company formation Switzerland',
//     'start a business in Switzerland',
//     'Swiss bank account',
//     'resident card Switzerland',
//     'accounting Switzerland',
//     'company liquidation Switzerland',
//     'shelf company Switzerland',
//     'migration to Switzerland',
//     'Swiss business consulting',
//     'corporate law firm Switzerland',
//     'business launch Switzerland',
//   ],

//   openGraph: {
//     type: 'website',
//     title: 'Lawsupport — Corporate Services & Business Setup in Switzerland',
//     description:
//       'Lawsupport provides expert legal support and corporate services in Switzerland. From company formation, resident cards, Swiss bank accounts to accounting and company liquidation, we help entrepreneurs launch and grow their Swiss business efficiently.',
//     url: SITE_URL,
//     images: [
//       {
//         url: SITE_URL,
//         width: 1200,
//         height: 630,
//         alt: 'Lawsupport — Legal and Corporate Services in Switzerland',
//       },
//     ],
//   },

//   twitter: {
//     card: 'summary_large_image',
//     title: 'Lawsupport — Corporate Services & Business Setup in Switzerland',
//     description:
//       'Lawsupport provides expert legal support and corporate services in Switzerland. From company formation, resident cards, Swiss bank accounts to accounting and company liquidation, we help entrepreneurs launch and grow their Swiss business efficiently.',
//     images: [SITE_URL_IMAGES],
//   },
// };
