import React from "react";
import { Collapse } from "antd";
import Image from "next/image";
import { useIntersectionObserver } from "@/app/helper/custom-hook/intersection";
import Plus from "@/app/assets/image/add-circle.svg";
import QA from "@/app/assets/image/qa.svg";

const { Panel } = Collapse;

const FAQSection: React.FC = () => {
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  const faqItems = [
    {
      question: "What is Cynes EDR?",
      answer:
        "Cynes EDR is a comprehensive protection solution for your system that enables early detection and rapid response to cyberattacks.",
    },
    {
      question: "How does Cynes EDR work?",
      answer:
        "Cynes EDR works by continuously monitoring endpoints and network systems, using advanced algorithms to detect and respond to potential threats in real-time.",
    },
    {
      question: "What are the key features of Cynes EDR?",
      answer:
        "Key features include real-time threat detection, automated response capabilities, comprehensive system protection, and advanced analytics for threat intelligence.",
    },
    {
      question: "Is Cynes EDR suitable for my organization?",
      answer:
        "Cynes EDR is designed for organizations, businesses, and government agencies of all sizes that need to protect their network systems and data from cybersecurity threats.",
    },
  ];

  return (
    <section
      ref={ref as React.LegacyRef<HTMLDivElement> | undefined}
      className="faq-section py-16  relative"
    >
      <div
        className={`container mx-auto px-4 ${
          isIntersecting ? "fade-in" : "md:opacity-0"
        }`}
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-6 text-[#2E3245]">
              Frequently Asked Questions
            </h2>
            <Collapse expandIcon={Plus} accordion>
              {faqItems.map((item, index) => (
                <Panel header={item.question} key={index}>
                  <p>{item.answer}</p>
                </Panel>
              ))}
            </Collapse>
          </div>
          <div className="md:w-1/2 md:pl-8 flex items-center justify-center">
            <Image
              src="/product/qa.svg"
              alt="FAQ Illustration"
              width={500}
              height={500}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default FAQSection;
