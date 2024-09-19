import React from "react";
import Image from "next/image";
import Link from "next/link";

interface FeaturedPostProps {
  post: {
    id: number;
    title: string;
    excerpt: string;
    imageUrl: string;
    link: string;
  };
}

const FeaturedPost: React.FC<FeaturedPostProps> = ({ post }) => {
  return (
    <div className="relative h-64 rounded-lg overflow-hidden">
      <Image
        src={post.imageUrl}
        alt={post.title}
        fill
        style={{ objectFit: "cover" }}
        className="transition-transform duration-300 hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-4 text-white">
        <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
        <Link
          href={post.link}
          className="inline-block bg-[#19CAFF] text-white px-4 py-2 rounded hover:bg-[#2693F5] transition-colors duration-300"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};
export default FeaturedPost;
