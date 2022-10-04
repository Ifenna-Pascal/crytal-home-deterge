import Head from 'next/head';
import Link from 'next/link';
import Hero from '../layout/hero/Hero';
import BlockQuote from '../section/home/BlockQuote';
import ClientReview from '../section/home/ClientReview';
import OurServices from '../section/home/OurServices';
import Process from '../section/home/Process';
import Remark from '../section/home/Remark';
import WhyChooseUs from '../section/home/WhyChooseUs';
import Images from '../util/images';
import { services } from '../util/services';
const serviceObject = [
  {
    image: Images.imageEight,
    icon: 'ri-home-4-fill',
  },
  {
    image: Images.imageSeven,
    icon: 'ri-home-4-fill',
  },
  {
    image: Images.imageNine,
    icon: 'ri-home-4-fill',
  },
  {
    image: Images.imageTen,
    icon: 'ri-user-fill',
  },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>Crystal Home Deterget</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero bg="bg-homeHero">
        <div className="flex items-center lg:items-start pt-[100px]  lg:py-[50px]  mt-[3em] w-full lg:max-w-[700px]   justify-center h-full flex-col">
          <h1 className="text-white leading-[1.5em] lg:leading-[1.2em] font-poppins tracking-wide text-center lg:text-left font-bold text-[2.3em] lg:text-[2.8em]">
            {' '}
            <span className="md:block inline">
              {' '}
              Residential & Commercial
            </span>{' '}
            <span className="md:block inline"> Cleaning Service that</span>{' '}
            <span className="md:block inline"> you can trust. </span>
          </h1>
          <p className=" px-3 md:px-0 text-lg text-center lg:text-left text-[#ebe7e7] leading-8 mt-4 font-poppins">
            We are committed to the best quality in industrial cleaning, <br />{' '}
            residential cleaning, and garden cleaning.
          </p>
          <div className="mt-4">
            <Link href="/services">
              <button className="bg-primary justify-self-end self-end border-none flex items-center py-3 px-12 font-outfit cursor-pointer  hover:cursor-pointer hover:opacity-100 hover:-translate-x-[6px] hover:text-gray-100 duration-300 text-white font-semibold rounded-md justify-center">
                Our Services
              </button>
            </Link>
          </div>
        </div>
      </Hero>
      <WhyChooseUs />
      <ClientReview />
      <OurServices
        services={services.slice(1, 5)}
        serviceObject={serviceObject}
        show
      />
      <BlockQuote />
      <Process />
      <Remark />
    </div>
  );
}
