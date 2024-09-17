import React from "react";
import LeftIcon from "@/app/assets/image/contact-us-left.svg";
import RightIcon1 from "@/app/assets/image/contact-icon-right-1.svg";
import RightIcon2 from "@/app/assets/image/contact-icon-right-2.svg";
import RightIcon3 from "@/app/assets/image/contact-icon-right-3.svg";
import { useIntersectionObserver } from "@/app/helper/custom-hook/intersection";

interface PriceCard {
  title: React.ReactNode;
  description: string;
  price: string;
  features: string[];
}

const PriceCard: React.FC<PriceCard> = ({
  title,
  description,
  price,
  features,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-2xl text-[#2E3245] font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <p className="text-3xl text-[#2693F5] font-bold mb-4">{price}</p>
      <ul className="mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center mb-2">
            <svg
              className="w-6 h-6 mr-2 text-[#19CAFF]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <button className="slider-button">Get Started</button>
    </div>
  );
};

const PriceSection: React.FC = () => {
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });
  const priceCards: PriceCard[] = [
    {
      title: "Basic Package",
      description:
        "Suitable for small and medium-sized enterprises with basic monitoring and protection needs.",
      price: "$399/month",
      features: [
        "Performance monitoring and early threat detection.",
        "Threat alerting and classification using Signature and YARA Rule.",
        "Threat alerting and classification using Signature and YARA Rule.",
        "Unified and flexible management interface.",
      ],
    },
    {
      title: <span className="text-[#2693F5]">Pro packet</span>,
      description:
        "Ideal for large organizations needing advanced threat protection.",
      price: "Contact us",
      features: [
        "All Basic package features plus enhancements.",
        "All Basic package features plus enhancements.",
        "Malware prevention, firewall setup, and peripheral management.",
        "International standard reporting and flexible automatic responses.",
      ],
    },
  ];

  return (
    <section
      ref={ref as React.LegacyRef<HTMLDivElement> | undefined}
      className="product-price bg-gray-100 py-16 relative"
    >
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
        <h2 className="text-4xl font-bold text-center mb-12">
          Cynes
          <span className="text-[#19caff]">.edr</span>
          <span> product pricing table</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <h3 className="text-4xl text-[#007597]">
            Try out all pro features with our free trial.
          </h3>
          {priceCards.map((card, index) => (
            <PriceCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PriceSection;
