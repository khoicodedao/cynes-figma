"use client";
import Slider from "@/app/components/home/slider";
import Partner from "@/app/components/home/partner";
import CardPromotion from "./components/home/card-promotion";
export default function Home() {
  return (
    <div>
      <Slider></Slider>
      <Partner></Partner>
      <CardPromotion></CardPromotion>
    </div>
  );
}
