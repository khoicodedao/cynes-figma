"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import RightArrow from "../../assets/image/fi-sr-arrow-small-right.svg";
import BlogPostArrow from "../../assets/image/blog-post.svg";
import BlogPostArrowMobile from "../../assets/image/arrow-mobile.svg";
import { useIntersectionObserver } from "@/app/helper/custom-hook/intersection";
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  imageUrl: string;
  link: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Blog",
    excerpt: "Good Day’s Victim Portals and Their Ties to Cloak and Dagger...",
    imageUrl: "/home-blog/blog1.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "Solution Brief",
    excerpt:
      "Cynet.EDR: Prevention detection, IT & Security Operations Center...",
    imageUrl: "/home-blog/blog2.jpg",
    link: "#",
  },
  {
    id: 3,
    title: "News",
    excerpt:
      "Aston Martin Aramco F1 team extends cybersecurity partnership with...",
    imageUrl: "/home-blog/blog3.jpg",
    link: "#",
  },
  // Add more blog posts as needed
];

const Blogs: React.FC = () => {
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref as React.LegacyRef<HTMLDivElement> | undefined}
      className="blog-post py-12 bg-white"
    >
      <div
        className={` hidden md:block w-full overflow-hidden ${
          isIntersecting ? "slide-in-right" : "md:opacity-0"
        }`}
      >
        <BlogPostArrow></BlogPostArrow>
      </div>
      <div
        className={`fade-in block md:hidden w-full overflow-hidden ${
          isIntersecting ? "slide-in-right" : "md:opacity-0"
        }`}
      >
        <BlogPostArrowMobile></BlogPostArrowMobile>
      </div>
      <div
        className={`container mx-auto mt-3 px-4 ${
          isIntersecting ? "slide-in-left" : "md:opacity-0"
        }`}
      >
        <h2 className="text-2xl font-bold text-left mb-8">
          Resources for Security Leaders
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <Image
                src={post.imageUrl}
                alt={post.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-sm font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link
                  href={post.link}
                  className="flex items-end justify-end mt-12"
                >
                  <RightArrow />{" "}
                  <span className="text-[#717EA0]">Read More</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
