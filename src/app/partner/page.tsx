"use client";
import Slider from "../components/partner/slider";
import ImageWithText from "../components/partner/image-with-text";
import Trial from "../components/home/trial";
export default function Partner() {
  return (
    <div className="partner-page">
      <Slider />
      <ImageWithText />
      <Trial />
    </div>
  );
}
