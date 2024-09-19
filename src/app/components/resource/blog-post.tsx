import React from "react";
import Image from "next/image";
import Link from "next/link";

interface BlogPostProps {
  post: {
    id: number;
    title: string;
    excerpt: string;
    imageUrl: string;
    link: string;
  };
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Image
        src={post.imageUrl}
        alt={post.title}
        width={400}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-[20px] text-[#2B2B32] font-semibold mb-2">
          {post.title}
        </h3>

        <Link
          href={post.link}
          className="flex items-end justify-end mt-4 text-[#717EA0] hover:text-[#19caff] transition-colors duration-300"
        >
          Read More
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default BlogPost;
