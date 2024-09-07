"use client";
import React from "react";
import Image from "next/image";
import { useIntersectionObserver } from "@/app/helper/custom-hook/intersection";
import LeftImage from "@/app/assets/image/left.svg";
import RightImage from "@/app/assets/image/right.svg";
interface PromotionCard {
  Icon: string;
  title: string;
  description: string;
}

const promotionCards: PromotionCard[] = [
  {
    Icon: "/home-card-promotion/Icon_1.svg",
    title: "Comprehensive monitoring of endpoints",
    description:
      "Continuously monitor activities on all devices, detect early signs of intrusion, and promptly prevent damage.",
  },
  {
    Icon: "/home-card-promotion/Icon_2.svg",
    title: "Monitor information security policy compliance",
    description:
      "Ensure all endpoints comply with security regulations for peripherals, storage, network, and software.",
  },
  {
    Icon: "/home-card-promotion/Icon_3.svg",
    title: "Detect and block MITRE ATT&CK-based attacks",
    description:
      "Use advanced techniques to detect and prevent cyberattacks, analyze attacker behavior, and respond appropriately",
  },
  {
    Icon: "/home-card-promotion/Icon_4.svg",
    title: "Proactively protect your computer",
    description:
      "Continuously monitor and proactively block malicious activities without consuming system resources like other antivirus software.",
  },
  {
    Icon: "/home-card-promotion/Icon_5.svg",
    title: "Quick and automatic response",
    description:
      "Automatically respond to threats by isolating devices, disconnecting the network, and removing malware, saving incident handling time.",
  },
  {
    Icon: "/home-card-promotion/Icon_6.svg",
    title: "High performance and resource-efficient",
    description:
      "Efficient resource use, non-disruptive to other applications, and deployable on various systems from laptops to enterprise servers.",
  },
];

const CardPromotion: React.FC = () => {
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div className="home-card__promotion relative">
      <div className="absolute top-0 left-0 w-full h-full z-[-1]">
        <LeftImage></LeftImage>
      </div>
      <div className="absolute top-0 right-0 z-[-1]">
        <RightImage></RightImage>
      </div>
      <div
        ref={ref as React.LegacyRef<HTMLDivElement> | undefined}
        className={` container mx-auto px-4 py-8 ${
          isIntersecting ? "slide-in-right" : "opacity-0"
        }`}
      >
        <h2 className="w-full mx-auto text-center text-[#2E3245] text-[32px] md:text-[48px]">
          Why choose us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 md:my-12 ">
          {promotionCards.map((card, index) => (
            <div
              key={index}
              className="border flex flex-col justify-center items-center p-4 bg-white shadow-lg rounded-lg"
            >
              <Image src={card.Icon} alt={card.title} width={64} height={64} />
              <h3 className=" text-[20px] text-[#2B2B32] text-center mt-4 text-xl font-semibold">
                {card.title}
              </h3>
              <p className="text-[16px] text-[#818798] mt-2 text-center">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardPromotion;
