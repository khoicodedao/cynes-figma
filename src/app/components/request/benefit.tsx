import React from "react";
import { useIntersectionObserver } from "@/app/helper/custom-hook/intersection";

const cynesEdrBenefits = [
  {
    title: "Threat Detection and Prevention",
    description:
      "Continuous monitoring, early detection, and timely prevention of cybersecurity threats.",
  },
  {
    title: "Detailed reporting",
    description:
      "Secure all your endpoints, from workstations to mobile devices, with a single, unified solution.",
  },
  {
    title: "In-depth analysis",
    description:
      "Utilizes advanced techniques like MITRE ATT&CK and Sandbox Analysis to identify sophisticated threats.",
  },
];

const BenefitsList: React.FC = () => {
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref as React.LegacyRef<HTMLDivElement> | undefined}
      className={`benefits-list container mx-auto px-4  ${
        isIntersecting ? "fade-in" : "md:opacity-0"
      }`}
    >
      <h2 className="text-[#2E3245] text-[32px] md:text-[48px] text-center">
        Benefits of trying Cynes<span className="text-[#19caff]">.edr</span>
      </h2>
      <ul className="space-y-6">
        {cynesEdrBenefits.map((benefit, index) => (
          <li key={index} className="benefit-item bg-white rounded-lg p-1">
            <h3 className="text-[20px] text-[#2B2B32] font-semibold">
              {benefit.title}
            </h3>
            <p className="text-[16px] text-[#818798]">{benefit.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BenefitsList;
