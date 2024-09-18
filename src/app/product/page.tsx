"use client";
import Slider from "../components/product/slider";
import CardPromotion from "../components/product/card-promotion";
import Flow from "../components/product/flow";
import Benefit from "../components/product/benefit";
import Price from "../components/product/price";
import FAQSection from "../components/product/q_and_a";
export default function Product() {
  return (
    <div className="product-page">
      <Slider />
      <CardPromotion />
      <Flow />
      <Benefit />
      <Price />
      <FAQSection />
    </div>
  );
}
