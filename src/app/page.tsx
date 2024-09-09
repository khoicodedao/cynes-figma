"use client";
import Slider from "@/app/components/home/slider";
import Partner from "@/app/components/home/partner";
import CardPromotion from "./components/home/card-promotion";
import BlogPost from "./components/home/blog-post";
export default function Home() {
  return (
    <div>
      <Slider></Slider>
      <Partner></Partner>
      <CardPromotion></CardPromotion>
      <BlogPost></BlogPost>
    </div>
  );
}
