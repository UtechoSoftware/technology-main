"use client";
import React from "react";
import SectionHeading from "../common/sectionHeading";
import { slideIn, staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import { motionDelay } from "../api/axiosInstance";

const TimelineSection = () => {
  const timelineItems = [
    {
      number: "01",
      title: "Relationships",
      description:
        "Security is a continuous process, built on exceptional design, powerful systems, and expert oversight. For over 35 years, Protection Technologies has partnered with clients to manage their security systems, allowing them to focus on what matters most. We believe in long-term relationships, delivering tailored solutions that help you succeed.",
      side: "right",
      color: "bg-[#011E1D]",
      border: "border-[#069343]",
    },
    {
      number: "02",
      title: "Experience",
      description:
        "With over 35 years of unwavering commitment to safety and security, our company stands as a beacon of reliability and expertise in the industry. Throughout the years, we have established ourselves as a trusted partner, providing unparalleled knowledge and cutting-edge solutions to our clients. Our team, composed of highly skilled professionals, is second to none, equipped with a deep understanding of security practices and a passion for safeguarding our clients' assets. When you choose our company, you can trust that you are partnering with a dependable and knowledgeable security provider that consistently exceeds expectations.",
      side: "left",
      color: "bg-[#24201A]",
      border: "border-[#CA892B]",
    },
    {
      number: "03",
      title: "Accountability",
      description:
        "At our company, accountability is not just a buzzword; it is the foundation upon which we build our success. We firmly believe that maintaining and demonstrating accountability is crucial in the realm of protecting businesses on a global scale. As leaders in the industry, we have implemented robust systems and processes that ensure accountability at every level of our operations. From our dedicated team members to our cutting-edge technologies, we consistently strive for excellence in delivering reliable and effective security solutions.",
      side: "right",
      color: "bg-[#22082A]",
      border: "border-[#E0009B]",
    },
    // {
    //   number: "04",
    //   title: "Worldwide Success",
    //   description:
    //     "Amet minim mollit non deserunt ullamco est sit dolor do amet sint.Velit officia consequat duis Amet minim mollit non deserunt ullamco est sit dolor do amet sint.Velit officia consequat duis Velit officia consequat duis Amet minim mollit",
    //   side: "left",
    //   color: "bg-[#151439]",
    //   border: "border-[#804CE6]",
    // },
  ];

  return (
    <motion.div
      className="bg-brand-ligthSecondary dark:bg-gradientcenterout py-8 md:py-16 px-4 overflow-hidden"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="text-center mb-12">
        <span className="text-brand-secondary text-sm kumbh_sans_medium mb-2 p-2 rounded-full dark:bg-[#2A1313]">
          How it works
        </span>
        <h2 className="text-3xl capitalize kumbh_sans_semibold text-black dark:text-white my-4">
          Securing Your Future, Step by Step
        </h2>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l border-dashed border-gray-700"></div>

          {timelineItems.map((item, index) => (
            <motion.div key={index} className="relative mb-16 last:mb-0">
              <div
                className={`absolute left-1/2 transform -translate-x-1/2 w-12 h-12 border-2 rounded-full flex items-center justify-center z-10 ${item.color} ${item.border}`}
              >
                <span className="text-teal-400 font-bold text-sm">
                  {item.number}
                </span>
              </div>

              {/* Content */}
              <motion.div
                className={`flex items-center ${
                  item.side === "right" ? "justify-end" : "justify-start"
                }`}
                variants={slideIn(
                  index % 2 === 0 ? "up" : "down",
                  motionDelay * (index + 1),
                  false
                )}
              >
                <div
                  className={`w-5/12 ${
                    item.side === "right" ? "pl-0" : "pr-0 text-right"
                  }`}
                >
                  <div className="">
                    <h3 className="text-black dark:text-white text-xl kumbh_sans_semibold mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 text-base roboto_medium leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TimelineSection;
