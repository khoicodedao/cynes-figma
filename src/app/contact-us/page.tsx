"use client";
import ContactSection from "@/app/components/home/contact-us";
import SliderLogoLeft from "@/app/assets/image/sliderlogo.svg";
export default function ContactUs() {
  return (
    <div className="contact-us-page">
      <SliderLogoLeft className="hidden md:block logo-left slide-in-left" />
      <ContactSection></ContactSection>
    </div>
  );
}
