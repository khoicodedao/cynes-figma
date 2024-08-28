import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SliderLogo from '../../assets/image/logo.svg';
const Slider: React.FC = () => {
  return (
    <section className=" container mx-auto flex flex-col md:flex-row items-center justify-between py-12 px-4 md:px-8">
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
      <Image src={SliderLogo}  alt="Slider Logo" width={985} height={84} />
        <h2 className="text-3xl font-bold mt-6 mb-4">Your Main Heading</h2>
        <h3 className="text-xl text-gray-600 mb-6">Your subheading description goes here</h3>
        <div className="flex items-center">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-md mr-4 hover:bg-blue-600 transition duration-300">
            Get Started
          </button>
          <Link href="#" className="text-blue-500 hover:underline">
            Learn More
          </Link>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <Image
          src="/path-to-your-svg/image2.svg"
          alt="Descriptive alt text for second image"
          width={500}
          height={300}
        />
      </div>
    </section>
  );
};

export default Slider;
