import React from "react";
import Image from "next/image";

const partners = [
  { id: 1, src: "/partner/image 1.svg", alt: "Partner 1" },
  { id: 2, src: "/partner/image 2.svg", alt: "Partner 2" },
  { id: 3, src: "/partner/image 3.svg", alt: "Partner 3" },
  { id: 4, src: "/partner/image 4.svg", alt: "Partner 4" },
  { id: 5, src: "/partner/image 5.svg", alt: "Partner 5" },
  { id: 6, src: "/partner/image 6.svg", alt: "Partner 6" },
  { id: 7, src: "/partner/image 7.svg", alt: "Partner 7" },

  // Add more partner logos as needed
];

const Partner: React.FC = () => {
  return (
    <div className="partner-container">
      <div className="hidden md:flex px-8 py-4 justify-between items-center">
        {partners.map((partner) => (
          <Image
            key={partner.id}
            src={partner.src}
            alt={partner.alt}
            width={100}
            height={50}
          />
        ))}
      </div>
      <div className="md:hidden overflow-x-scroll whitespace-nowrap">
        <div className="inline-flex animate-scroll">
          {[...partners, ...partners].map((partner, index) => (
            <Image
              key={`${partner.id}-${index}`}
              src={partner.src}
              alt={partner.alt}
              width={80}
              height={40}
              className="inline-block mx-4"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partner;
