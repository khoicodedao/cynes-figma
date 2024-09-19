"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import SliderLogoLeft from "../../assets/image/sliderlogo.svg";
import DetailIcon from "../../assets/image/detail.svg";
const Slider: React.FC = () => {
  return (
    <section className=" slide-container slider mx-auto flex flex-col md:flex-row pt-4 md:pt-8  items-start md:px-8">
      <div className="w-full md:w-1/3 mb-8 md:mb-0">
        <SliderLogoLeft className="hidden md:block logo-left slide-in-left" />
        <Image
          className="block md:hidden logo-left slide-in-right  md:slide-in-left "
          alt="Cynes EDR"
          src={"/slide-logo-left-mobile.svg"}
          width={370}
          height={66}
        ></Image>
        <div className="slider-content slide-in-right px-4 w-full mx-auto">
          <h2 className="text-3xl font-bold mt-6 mb-4">Partner Program</h2>
          <h3 className="text-xl text-gray-600 mb-6">
            A world-class partner program that can help you deliver
            comprehensive endpoint security solutions and expertise. Become the
            trusted advisor for your customers.
          </h3>
          <Image
            className="block mt-8 md:hidden logo-left slide-in-left"
            alt="Cynes EDR"
            src={"/partner/partner-page-slider.svg"}
            width={370}
            height={66}
          ></Image>
        </div>
      </div>
      <div className="w-full md:w-2/3">
        <Image
          className="hidden md:block mt-8 logo-right slide-in-right"
          alt="Cynes EDR"
          src={"/partner/partner-page-slider.svg"}
          width={250}
          height={66}
        ></Image>
      </div>
    </section>
  );
};

export default Slider;
