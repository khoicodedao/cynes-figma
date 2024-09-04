"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import SliderLogoLeft from "../../assets/image/sliderlogo.svg";
import DetailIcon from "../../assets/image/detail.svg";
const Slider: React.FC = () => {
  return (
    <section className="slider mx-auto flex flex-col md:flex-row pt-4 md:pt-8  items-start md:px-8">
      <div className="w-full md:w-1/3 mb-8 md:mb-0">
        <SliderLogoLeft className="hidden md:block logo-left slide-in-left" />
        <Image
          className="block md:hidden logo-left slide-in-left"
          alt="Cynes EDR"
          src={"/slide-logo-left-mobile.svg"}
          width={370}
          height={66}
        ></Image>
        <div className="slider-content px-4 w-full mx-auto">
          <h2 className="text-3xl font-bold mt-6 mb-4">
            Comprehensive Protection Solution for Your System
          </h2>
          <h3 className="text-xl text-gray-600 mb-6">
            Advanced Endpoint Detection and Response (EDR) solution that enables
            early detection and rapid response to cyberattacks. Provides
            comprehensive protection for your endpoints and network systems.
          </h3>
          <div className="flex items-center">
            <button className="slider-button">Explore the product</button>
            <div className="slider-button-detail ml-1">
              <span> Or watch a </span>
              <Link href={"#"} className="ml-2">
                {" "}
                full demo
              </Link>
            </div>
          </div>
          <Image
            className="block mt-8 md:hidden logo-left slide-in-left"
            alt="Cynes EDR"
            src={"/slide-right-logo-mobile.svg"}
            width={370}
            height={66}
          ></Image>
          <div className="flex items-center md:mt-12 slider-footer">
            <span> We were created for</span>
            <Link href={"#"} className="hover:underline pl-1">
              <DetailIcon />
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
