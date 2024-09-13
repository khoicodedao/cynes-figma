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
        <div className="slider-content px-4 w-full mx-auto">
          <h2 className="text-3xl font-bold mt-6 mb-4">
            Prevent attacks before they can cause damage
          </h2>
          <h3 className="text-xl text-gray-600 mb-6">
            Comprehensively protect your system and data from increasingly
            sophisticated cyber attacks, minimizing risks and costs, ensuring
            information security compliance, continuous monitoring, early
            detection, and effectively preventing threats that traditional
            solutions cannot handle.
          </h3>
          <div className="flex items-center">
            <button className="slider-button">Request a trial</button>
          </div>
        </div>
      </div>
      <div className="w-full md:w-2/3 slide-in-top flex items-center justify-center">
        <div className="hidden slider-right-1 md:block w-full"></div>
        <div className="hidden slider-right-2 md:block w-full"></div>
      </div>
    </section>
  );
};

export default Slider;
