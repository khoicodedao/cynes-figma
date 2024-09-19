"use client";
import React from "react";
import Link from "next/link";

// You'll need to create these components
import FeaturedPost from "@/app/components/resource/feature-post";
import BlogPost from "@/app/components/resource/blog-post";
import Header from "@/app/components/resource/header";
const posts = [
  {
    id: 1,
    title: "How AI is Changing Managed Detection & Response",
    excerpt:
      "An in-depth analysis of Good Day's victim portals and their connections to covert operations.",
    imageUrl: "/resource/blog-1.svg",
    link: "/resource/blog-1.svg",
  },
  {
    id: 2,
    title: "Singularity Cloud Workload Security for Server/VM",
    excerpt:
      "Exploring the capabilities of Cynet.EDR in preventing and detecting threats, and its role in IT and Security Operations Centers.",
    imageUrl: "/resource/blog-2.svg",
    link: "/blog/cynet-edr-prevention-detection",
  },
  {
    id: 3,
    title: "Defense Day 2024: AWS Defending the Cloud...",
    excerpt:
      "The latest developments in the cybersecurity partnership between Aston Martin Aramco F1 team and their security provider.",
    imageUrl: "/resource/blog-3.svg",
    link: "/blog/aston-martin-cybersecurity-partnership",
  },
  {
    id: 4,
    title: "Autonomous Detection Engines in Real-Time CWPP",
    excerpt:
      "A comprehensive guide to the latest advanced threat detection techniques in cybersecurity.",
    imageUrl: "/resource/blog-4.svg",
    link: "/blog/advanced-threat-detection",
  },
  {
    id: 5,
    title: "2024 Cloud Security Report",
    excerpt:
      "Exploring the increasing role of artificial intelligence in modern cybersecurity practices.",
    imageUrl: "/resource/blog-5.svg",
    link: "/blog/ai-in-cybersecurity",
  },
  {
    id: 6,
    title: "5 Best Practices for Implementing XDR",
    excerpt:
      "Essential best practices for maintaining security in cloud computing environments.",
    imageUrl: "/resource/blog-6.svg",
    link: "/blog/securing-cloud-environments",
  },
];

const tags = [
  "Cybersecurity",
  "EDR",
  "Threat Detection",
  "AI",
  "Cloud Security",
  "Incident Response",
  "Network Security",
  "Data Protection",
  "Compliance",
  "Risk Management",
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4">
      <Header />
      <section className="featured-posts my-8">
        <h2 className="text-3xl font-bold mb-4">Featured Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.slice(0, 3).map((post, index) => (
            <FeaturedPost key={index} post={post} />
          ))}
        </div>
      </section>

      <section className="all-posts my-8">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/4 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Collections</h3>
            <ul>
              {tags.map((tag, index) => (
                <li key={index} className="mb-1">
                  <Link
                    href={`/tag/${tag}`}
                    className="text-[#717EA0] hover:text-[#19caff] transition-colors duration-300"
                  >
                    {tag}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-3/4 md:pl-8">
            <h2 className="text-3xl font-bold mb-4">All Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {posts.slice(0, 6).map((post, index) => (
                <BlogPost key={index} post={post} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
