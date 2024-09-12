// components/Testimonial.js
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import BgTesimonial from "@/app/assets/image/bg-testimonial.svg";
import IconCard from "@/app/assets/image/icon-card-testimonial.svg";
import { useIntersectionObserver } from "@/app/helper/custom-hook/intersection";
const testimonials = [
  {
    id: 1,
    content: "The service was exceptional, and the staff was super friendly!",
    author: "John Doe",
    job: "Marketing Manager",
    avatar: "/home/avatar1.png",
  },
  {
    id: 2,
    content:
      "I am so happy with my purchase! The product quality is outstanding!",
    author: "Jane Smith",
    job: "Software Engineer",
    avatar: "/home/avatar2.png",
  },
  {
    id: 3,
    content: "Highly recommend! Customer support was quick and helpful.",
    author: "Michael Lee",
    job: "Graphic Designer",
    avatar: "/home/avatar3.png",
  },
  {
    id: 4,
    content: "This company exceeded my expectations with their fast service!",
    author: "Sara Connor",
    job: "Product Manager",
    avatar: "/home/avatar3.png",
  },
  {
    id: 5,
    content: "Quality products and a seamless experience!",
    author: "Chris Evans",
    job: "Sales Manager",
    avatar: "/home/avatar3.png",
  },
];

const Testimonial = () => {
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });
  return (
    <section className="testimonial mt-16 md:mt-1 py-16 px-4 relative">
      <h2
        ref={ref as React.LegacyRef<HTMLDivElement> | undefined}
        className="title text-4xl font-bold text-center mb-12 text-gray-800"
      >
        What our customers say about us?
      </h2>
      <BgTesimonial
        className={`hidden md:block bg-testimonial ${
          isIntersecting ? "zoom-in" : "scale-0"
        }`}
      />
      <Swiper
        spaceBetween={30}
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        breakpoints={{
          // When window width is >= 1024px (desktop), show 3 cards
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          // When window width is < 1024px (tablet & mobile), show only 1 card (slide)
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        }}
        className={`max-w-7xl mx-auto`}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="bg-transparent p-8 rounded-lg shadow-md text-left w-full h-full flex flex-col justify-left">
              <p className="text-lg italic mb-12 text-gray-700">
                <IconCard className="icon-card" />
                {testimonial.content}
              </p>
              <div className="flex items-start justify-start">
                <Image
                  src={testimonial.avatar}
                  alt={`${testimonial.author} avatar`}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div className="text-left">
                  <p className="font-semibold text-gray-900">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-600">{testimonial.job}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
