"use client";
import Slider from "../components/product/slider";
import CardPromotion from "../components/product/card-promotion";
export default function Product() {
  return (
    <div className="product-page">
      <Slider />
      <CardPromotion />
    </div>
  );
}
