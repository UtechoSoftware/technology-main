"use client";
import { recentPost1, recentPost2, recentPost3 } from "@/public/assets/images";
import { fadeIn, slideIn, staggerContainer, zoomIn } from "@/utils/motion";
import { Input } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { FaArrowRightLong, FaMagnifyingGlass } from "react-icons/fa6";
import { motionDelay } from "../api/axiosInstance";
import { motion } from "framer-motion";

export default function NewSidebar() {
  const categories = [
    "Threat Assessment & Risk Management",
    "24/7 Command Center Monitoring",
    "Comprehensive Protection Solutions",
    "Client-Focused Security Support",
    "Intelligent Surveillance Integration",
  ];

  const recentPosts = [
    {
      title: "How Real-Time Monitoring Prevents Threat Escalation",
      date: "June 2, 2025",
      image: recentPost3,
    },
    {
      title: "The Role of AI in Modern Security Infrastructure",
      date: "May 28, 2025",
      image: recentPost2,
    },
    {
      title: "Why Risk Assessment is Critical for Corporate Security",
      date: "May 20, 2025",
      image: recentPost1,
    },
  ];

  const popularTags = [
    "Security",
    "Surveillance",
    "Risk Management",
    "Threat Response",
    "Command Center",
    "AI Security",
    "Physical Security",
    "Incident Management",
  ];

  return (
    <>
      <div className="lg:col-span-1 space-y-8">
        {/* Search */}
        {/* <div className="dark:bg-cardGradient bg-brand-ligthSecondary rounded-3xl p-6">
          <h3 className="text-xl kumbh_sans_semibold dark:text-white text-brand-dark mb-4">
            Search Now
          </h3>
          <div className="space-y-3">
            <Input
              type="text"
              placeholder="Search Here..."
              variant="faded"
              size="lg"
              endContent={
                <FaMagnifyingGlass className="w-5 h-5 text-brand-secondary" />
              }
              classNames={{
                input: "text-white placeholder:text-gray-500",
                inputWrapper:
                  "dark:bg-[#000916] bg-brand-ligthSecondaryDark border-[#000916] dark:hover:border-brand-secondary dark:focus-within:border-brand-secondary h-10",
              }}
            />
          </div>
        </div> */}

        {/* Categories */}
        <div className="dark:bg-cardGradient bg-brand-ligthSecondary rounded-3xl p-6">
          <h3 className="text-xl kumbh_sans_semibold dark:text-white text-brand-dark mb-4">
            Categories
          </h3>
          <motion.div
            className="space-y-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
          >
            {categories.map((category, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-2 text-brand-muted dark:bg-[#000916] bg-brand-ligthSecondaryDark rounded-2xl p-3 text-sm"
                variants={slideIn("right", motionDelay * index, true)}
              >
                <span className="flex-1 capitalize kumbh_sans_regular">
                  {category}
                </span>
                {/* <FaArrowRightLong className="h-4 w-4 text-brand-secondary" /> */}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Recent Posts */}
        <div className="dark:bg-cardGradient bg-brand-ligthSecondary rounded-3xl p-6">
          <h3 className="text-xl kumbh_sans_semibold dark:text-white text-brand-dark mb-4">
            Recent Posts
          </h3>
          <motion.div
            className="space-y-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
          >
            {recentPosts.map((post, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-2 text-brand-muted rounded-2xl text-sm"
                variants={slideIn("up", motionDelay * index, true)}
              >
                <div className="flex-shrink-0">
                  <Image
                    src={post.image}
                    alt={post.title}
                    className="rounded-xl w-16 h-16 object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2 capitalize kumbh_sans_regular text-sm">
                    <FaCalendarAlt className="h-4 w-4 text-brand-secondary" />
                    {post.date}
                  </div>
                  <p className="flex-1 capitalize kumbh_sans_medium text-base">
                    {post.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Popular Tags */}
        <div className="dark:bg-cardGradient bg-brand-ligthSecondary rounded-3xl p-6">
          <h3 className="text-xl kumbh_sans_semibold dark:text-white text-brand-dark mb-4">
            Popular Tags
          </h3>
          <motion.div
            className="flex flex-wrap gap-2"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
          >
            {popularTags.map((tag, index) => (
              <motion.span
                key={index}
                className="dark:bg-[#000916] bg-brand-ligthSecondaryDark text-brand-muted px-3 py-1 rounded-full text-sm border dark:border-gray-700 border-brand-ligthSecondary dark:hover:border-brand-secondary transition-all cursor-pointer"
                variants={fadeIn("up", motionDelay * index, "medium")}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}
