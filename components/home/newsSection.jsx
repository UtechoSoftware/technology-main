"use client";
import {
  fadeIn,
  matrixGlitch,
  slideIn,
  staggerContainer,
} from "@/utils/motion";
import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import { motionDelay } from "../api/axiosInstance";
import SectionHeading from "../common/sectionHeading";
import { accesscontrol, news, remote } from "@/public/assets/images";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from 'next/navigation';

export default function NewsSection() {
  const router = useRouter();
  const pathname = usePathname();

  const newsData = [
    {
      id: 1,
      date: "December 26, 2025",
      slug: "latch-announces-first-building-wide-installation-of-works-with-latch-marks-usa-locks",
      title:
        "Latch Announces First Building-Wide Installation of ‘Works with Latch’ Marks USA Locks",
      image: news,
      readTime: "5 min read",
    },
    {
      id: 2,
      date: "March 05, 2025",
      slug: "why-247-remote-video-surveillance-is-essential-for-modern-businesses",
      title:
        "Why 24/7 Remote Video Surveillance Is Essential for Modern Businesses",
      image: remote,
      readTime: "3 min read",
    },
    {
      id: 3,
      date: "March 05, 2025",
      slug: "smart-access-control-security-meets-convenience",
      title: "Smart Access Control: Security Meets Convenience",
      image: accesscontrol,
      readTime: "7 min read",
    },
  ];

  return (
    <motion.section
      className="dark:bg-gradientcenterout bg-brand-ligthSecondary text-white py-16 px-4"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:mb-12">
          <div className="">
            <SectionHeading
              heading1="New Blog"
              heading2="Latest News and Insights"
              className="mb-6 flex items-center justify-center lg:items-start flex-col"
            />
            <motion.p
              variants={matrixGlitch(motionDelay)}
              className="dark:text-brand-muted max-w-[600px] mx-auto lg:mx-0 text-center lg:text-start text-brand-dark text-base roboto_regular mb-4 lg:mb-0 leading-relaxed"
            >
              Get the latest on security tech, compliance trends, and real-world
              solutions for multifamily, government, and commercial sectors—all
              from the experts at Protection Technologies, LLC.
            </motion.p>
          </div>
          <motion.div className="mt-6 lg:mt-0">
            {
              pathname !== '/all-news' ?
            
            <Button
              as={Link}
              className="bg-brand-secondary border border-brand-secondary hover:bg-brand-secondaryDark text-white px-6 py-3 rounded-full kumbh_sans_semibold duration-300 lg:flex items-center gap-2 hidden"
              href="/all-news"
              variants={fadeIn("up", motionDelay, true)}
              endContent={
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              }
            >
              See All
            </Button>
            :
            null
        }
          </motion.div>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsData.map((article, index) => (
            <motion.div
              key={article.id}
              className="bg-brand-ligthSecondaryDark shadow-lg dark:bg-neutral-800 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl group"
              variants={slideIn("up", motionDelay * index, true)}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 dark:bg-black/50 group-hover:bg-black/0 transition-opacity duration-300"></div>
              </div>

              <div className="p-3 lg:p-6">
                <div className="text-gray-400 text-sm mb-3 kumbh_sans_medium">
                  {article.date}
                </div>
                <h3 className="dark:text-white text-brand-black line-clamp-2 text-lg kumbh_sans_semibold mb-4 leading-snug  transition-colors duration-300">
                  {article.title}
                </h3>
                <div className="flex items-center justify-between">
                  <button
                    className="text-brand-secondary hover:text-brand-secondary kumbh_sans_medium text-sm transition-colors duration-300 hover:underline"
                    onClick={() => router.push(`/news/${article.slug}`)}
                  >
                    Read More
                  </button>
                  <span className="text-brand-muted text-xs">
                    {article.readTime}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-8 lg:hidden">
          <Button
            as={Link}
            href="/news"
            className="bg-brand-secondary border border-brand-secondary hover:bg-brand-secondaryDark text-white px-8 py-3 rounded-full kumbh_sans_semibold transition-colors duration-300 flex items-center gap-2"
          >
            See All Articles
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Button>
        </div>
      </div>
    </motion.section>
  );
}
