import React from "react";
import Image from "next/image";
import Right from "@/app/assets/image/trial-right.svg";
import LeftImage from "@/app/assets/image/left.svg";
import RightMobile from "@/app/assets/image/right-mobile.svg";
import { useIntersectionObserver } from "@/app/helper/custom-hook/intersection";

interface ColorCard {
  icon: string;
  title: string;
  description: string;
}

const colorCards: ColorCard[] = [
  // Add 8 color card objects here
  {
    icon: "/product/benefit-1.svg",
    title: "Comprehensive",
    description:
      "Real-time monitoring, detecting, and preventing malware before it infiltrates, minimizing attack risks.",
  },
  {
    icon: "/product/benefit-2.svg",
    title: "Deep, multi-layer monitoring",
    description:
      "Collecting data from the system to RAM, detecting threats missed by traditional methods.",
  },
  {
    icon: "/product/benefit-3.svg",
    title: "Information Security Monitoring",
    description:
      "Monitoring implementation and establishing information security policies, creating remote control channels to support user safety.",
  },
  {
    icon: "/product/benefit-4.svg",
    title: "Automatic and Timely Response",
    description:
      "Automatically implementing preventive measures to reduce damage and attack risks.",
  },
  {
    icon: "/product/benefit-5.svg",
    title: "Real-time Reporting",
    description:
      "Providing detailed reports to help the security team effectively monitor, identify, and handle cybersecurity incidents.",
  },
  {
    icon: "/product/benefit-6.svg",
    title: "Flexible Response",
    description:
      "Providing various response mechanisms, allowing security staff to define scenarios suited to the customer's network model.",
  },
  {
    icon: "/product/benefit-7.svg",
    title: "Centralized Analysis",
    description:
      "Analyzing data from multiple sources, detecting the smallest anomalies, and identifying potential threats.",
  },
  {
    icon: "/product/benefit-8.svg",
    title: "Flexible Integration",
    description:
      "Ready to integrate with SIEM and cyber intelligence systems, forming a comprehensive protection ecosystem.",
  },
];

const ColorCards: React.FC = () => {
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });
  return (
    <div
      ref={ref as React.LegacyRef<HTMLDivElement> | undefined}
      className="benefit mx-auto px-4 mt-8 relative"
    >
      <div className="absolute overflow-hidden top-0 left-0 z-[-1]">
        <LeftImage></LeftImage>
      </div>
      <div
        className={`${
          isIntersecting ? "slide-in-right" : "md:opacity-0"
        }  right-icon `}
      >
        <Right className="hidden md:block"></Right>
        <h2 className="text-[#2E3245] text-[32px] md:text-[48px]">
          Value benefits of using Cynes.edr
        </h2>
        <p className="text-sm w-1/2 text-[#818798] text-justify description">
          CYNES-EDR provides a range of key functions to monitor, detect, and
          respond to cybersecurity threats on connected devices (endpoints)
          within an organization's network.
        </p>
      </div>
      <RightMobile className="right-icon-mobile block md:hidden overflow-hidden"></RightMobile>
      <div className="pt-8 px-16 w-full grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {colorCards.slice(0, 4).map((card, index) => (
          <ColorCard key={index} {...card} />
        ))}
      </div>
      <div className="pt-8 px-16 grid grid-cols-1 md:grid-cols-4 gap-6">
        {colorCards.slice(4, 8).map((card, index) => (
          <ColorCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

const ColorCard: React.FC<ColorCard> = ({ icon, title, description }) => {
  return (
    <div className="transparent rounded-lg shadow-md p-6">
      <Image src={icon} alt={title} width={64} height={64} />
      <h3 className="text-xl font-semibold mt-4 mb-2">{title}</h3>
      <p className="text-sm text-[#818798]">{description}</p>
    </div>
  );
};

export default ColorCards;
