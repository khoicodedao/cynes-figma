"use client";
import LeftIcon from "@/app/assets/image/contact-us-left.svg";
import RightIcon1 from "@/app/assets/image/contact-icon-right-1.svg";
import RightIcon2 from "@/app/assets/image/contact-icon-right-2.svg";
import RightIcon3 from "@/app/assets/image/contact-icon-right-3.svg";
import React, { useState } from "react";
import { useIntersectionObserver } from "@/app/helper/custom-hook/intersection";

const ContactSection: React.FC = () => {
  const [agreeToComms, setAgreeToComms] = useState(false);
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });
  return (
    <section
      ref={ref as React.LegacyRef<HTMLDivElement> | undefined}
      className="contact-section py-16 bg-white relative"
    >
      <LeftIcon
        className={`hidden md:block left-icon absolute ${
          isIntersecting ? "animate-left-icon" : "scale-0"
        }`}
      ></LeftIcon>
      <RightIcon1
        className={`hidden md:block right-icon1 absolute ${
          isIntersecting ? "animate-right-icon1" : "scale-0"
        } `}
      ></RightIcon1>
      <RightIcon2
        className={`hidden md:block right-icon2 absolute ${
          isIntersecting ? "animate-right-icon2" : "scale-0"
        }`}
      ></RightIcon2>
      <RightIcon3
        className={`hidden md:block right-icon3 absolute  ${
          isIntersecting ? "animate-right-icon3" : "scale-0"
        } `}
      ></RightIcon3>
      <div className="container mx-auto px-4">
        <div className="contact-left flex flex-col md:flex-row items-start relative">
          {/* Left Column */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="title md:ml-12  text-3xl font-bold mb-4">
              Let us protect your system
            </h2>
            <p className="md:ml-12 description mb-6">
              Describe the cybersecurity issue you are concerned about!
            </p>
          </div>

          {/* Right Column - Contact Form */}
          <div className="contact-right md:w-1/2 md:pl-8 ">
            <form className="">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="your@email.com"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={agreeToComms}
                    onChange={(e) => setAgreeToComms(e.target.checked)}
                  />
                  <span className="text-sm text-gray-700">
                    I agree to receive other communications from{" "}
                    <span className="logo-name"> Cynes.ed</span>
                  </span>
                </label>
              </div>

              <button className="slider-button">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
