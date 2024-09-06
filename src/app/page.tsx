"use client";
import Slider from "@/app/components/home/slider";
import Partner from "@/app/components/home/partner";
export default function Home() {
  return (
    <div className="slider-container">
      <Slider></Slider>
      <Partner></Partner>
    </div>
  );
}
