"use client";
import React from "react";
import Link from "next/link";
import SliderLogoLeft from "../../assets/image/sliderlogo.svg";
import DetailIcon from "../../assets/image/detail.svg";
const Slider: React.FC = () => {
  return (
    <section className="slider mx-auto flex flex-col md:flex-row items-start py-12 px-4 md:px-8">
      <div className="w-full md:w-1/3 mb-8 md:mb-0">
        <SliderLogoLeft className="logo-left slide-in-left" />
        <div className="slider-content w-full pl-4 mx-auto">
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
          <div className="flex items-center mt-12 slider-footer">
            <span> We were created for</span>
            <Link href={"#"} className="hover:underline mr-3">
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
