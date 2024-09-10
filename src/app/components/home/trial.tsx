"use client";
import React from "react";
import Link from "next/link";
import MacIcon from "@/app/assets/image/mac.svg";
import Elipse28 from "@/app/assets/image/elipse28.svg";
import Elipse30 from "@/app/assets/image/elipse30.svg";
import Right from "@/app/assets/image/trial-right.svg";
import RightMobile from "@/app/assets/image/right-mobile.svg";
import RightBackground from "@/app/assets/image/ellipse29.svg";
import { useIntersectionObserver } from "@/app/helper/custom-hook/intersection";
const Trial: React.FC = () => {
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });
  return (
    <section className="trial py-16">
      <div className="mx-auto px-4">
        <div
          ref={ref as React.LegacyRef<HTMLDivElement> | undefined}
          className="flex flex-col md:flex-row items-center"
        >
          <div
            className={`${
              isIntersecting ? "slide-in-left" : "md:opacity-0"
            } hidden md:block md:w-1/2 mb-8 md:mb-0`}
          >
            <ul className="space-y-4 icon">
              <div className=" left relative">
                <MacIcon className="macbook" />
                <div className="left-icon">
                  <Elipse28 className="elipse28" />
                  <Elipse30 className="elipse30" />
                </div>
              </div>
            </ul>
          </div>
          <div
            className={`${
              isIntersecting ? "slide-in-right" : "md:opacity-0"
            } md:w-1/2 md:pl-8 relative`}
            style={{ height: "300px" }}
          >
            <Right className="right-icon w-full hidden md:block"></Right>
            <RightMobile className="right-icon-mobile block md:hidden overflow-hidden"></RightMobile>
            <h2 className="title text-3xl font-bold my-4 ">
              A solution for every organization
            </h2>
            <p className="description text-lg mb-6">
              CYNES-EDR is designed for organizations, businesses, and
              government agencies that need to protect their network systems and
              data from cybersecurity threats.
            </p>
            <button className="slider-button">Explore the product</button>
            <RightBackground className="background-right"></RightBackground>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trial;
