import React from "react";
import BlogPostArrowMobile from "../../assets/image/arrow-mobile.svg";
import BlogPostArrow from "../../assets/image/blog-post.svg";

const SectionHeader: React.FC = () => {
  return (
    <div className="section-header mt-16">
      <div className="hidden md:block w-full overflow-hidden slide-in-left">
        <BlogPostArrow></BlogPostArrow>
      </div>
      <div
        className={`fade-in block md:hidden w-full overflow-hidden slide-in-left`}
      >
        <BlogPostArrowMobile></BlogPostArrowMobile>
      </div>
      <h2 className="title slide-in-left">
        Free Trial with Cynes
        <span className="highlight ">.edr</span>
      </h2>
      <p className="description slide-in-right">
        Are you looking for a comprehensive and effective security solution to
        protect your system and data? CYNES.EDR is the ideal choice for you. Try
        our product and experience the difference.
      </p>
    </div>
  );
};

export default SectionHeader;
