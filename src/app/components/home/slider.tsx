"use client";
import React from "react";
import Link from "next/link";
import SliderLogoLeft from "../../assets/image/sliderlogo.svg";

const Slider: React.FC = () => {
  return (
    <section className="mx-auto flex flex-col md:flex-row items-start py-12 px-4 md:px-8">
      <div className="w-full md:w-1/3 mb-8 md:mb-0">
        <SliderLogoLeft className="logo-left slide-in-left" />
        <div className="slider-content fade w-full pl-4 mx-auto">
          <h2 className="text-3xl font-bold mt-6 mb-4">
            Comprehensive Protection Solution for Your System
          </h2>
          <h3 className="text-xl text-gray-600 mb-6">
            Advanced Endpoint Detection and Response (EDR) solution that enables
            early detection and rapid response to cyberattacks. Provides
            comprehensive protection for your endpoints and network systems.
          </h3>
          <div className="flex items-center">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-md mr-4 hover:bg-blue-600 transition duration-300">
              Get Started
            </button>
            <Link href="#" className="text-blue-500 hover:underline">
              Learn More
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full md:w-2/3 slide-in-top">
        <div className="hidden slider-right md:block w-full"></div>
      </div>
    </section>
  );
};

export default Slider;
