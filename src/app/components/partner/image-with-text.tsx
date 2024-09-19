import React from "react";
import Image from "next/image";

interface BlockProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  isImageLeft: boolean;
}

const Block: React.FC<BlockProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  isImageLeft,
}) => (
  <div
    className={`flex flex-col md:flex-row ${
      isImageLeft ? "md:flex-row-reverse" : ""
    } items-center`}
  >
    <div className="md:w-1/2">
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={438}
        height={438}
        className="rounded-lg"
      />
    </div>
    <div className="md:w-1/2 p-4">
      <h3 className="text-2xl font-bold mb-8">{title}</h3>
      <p className="text-gray-600 mb-8 text-justify">{description}</p>
      <button className="slider-button">Learn more</button>
    </div>
  </div>
);

const ImageWithText: React.FC = () => {
  const blocks: BlockProps[] = [
    {
      title: "Singularity Marketplace",
      description:
        "Extend the visibility and power of the Singularity platform to the rest of your trusted security & IT solutions, and maximize the value of your threat intelligence sources, CASB, SIEM, ticketing systems, and more.",
      imageSrc: "/partner/partner-2.png",
      imageAlt: "Image 1",
      isImageLeft: true,
    },
    {
      title: "Technology Alliance Partners",
      description:
        "Integrations with best-in-class security vendors power greater visibility, endpoint protection, and SOC efficiency. SentinelOne built an ecosystem of integrations and business partnerships with software providers that customers can leverage for better solutions and business growth.",
      imageSrc: "/partner/partner-1.svg",
      imageAlt: "Image 2",
      isImageLeft: false,
    },
  ];

  return (
    <section className="container mx-auto px-4 py-4">
      <div className="slide-in-right grid grid-cols-1 gap-8">
        {blocks.map((block, index) => (
          <Block key={index} {...block} />
        ))}
      </div>
    </section>
  );
};

export default ImageWithText;
