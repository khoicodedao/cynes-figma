"use client";
import React from "react";
import Image from "next/image";
import { useIntersectionObserver } from "@/app/helper/custom-hook/intersection";
import LeftImage from "@/app/assets/image/left.svg";
import RightImage from "@/app/assets/image/right.svg";
import BottomImage from "@/app/assets/image/bottom.svg";
interface PromotionCard {
  Icon: string;
  title: string;
  description: string;
}

const promotionCards: PromotionCard[] = [
  {
    Icon: "/product/product-promotion-1.svg",
    title: "Multi-layer detection",
    description:
      "Combining multiple detection techniques to ensure accurate threat handling.",
  },
  {
    Icon: "/product/product-promotion-2.svg",
    title: "Flexible management",
    description: "Protect your system without impacting business operations.",
  },
  {
    Icon: "/product/product-promotion-3.svg",
    title: "Practical experience",
    description:
      "The product is developed based on real-world experience from security experts.",
  },
];

const CardPromotion: React.FC = () => {
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div className="home-card__promotion relative">
      <div className="absolute overflow-hidden top-0 left-0 w-full h-full z-[-1]">
        <LeftImage></LeftImage>
      </div>
      <div className="absolute overflow-hidden top-0 right-0 z-[-1]">
        <RightImage></RightImage>
      </div>
      <div className="absolute bottom-1/4 left-0 w-full h-full overflow-hidden z-[-1]">
        <BottomImage></BottomImage>
      </div>
      <div
        ref={ref as React.LegacyRef<HTMLDivElement> | undefined}
        className={`container mx-auto px-4 py-8 ${
          isIntersecting ? "fade-in" : "md:opacity-0"
        }`}
      >
        <h2 className="w-full mx-auto text-center text-[#2E3245] text-[32px] md:text-[48px]">
          Why choose Cynes <span className="text-[#19caff]">.edr?</span>
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
