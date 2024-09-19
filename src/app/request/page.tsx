"use client";
import SectionHeader from "@/app/components/request/header";
import ContactSection from "@/app/components/request/contact-us";
import Testimonial from "../components/home/testimonial";
export default function Request() {
  return (
    <div className="request-page">
      <SectionHeader />
      <ContactSection />
      <Testimonial />
    </div>
  );
}
