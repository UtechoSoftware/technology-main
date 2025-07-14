"use client";
import offer1 from "@/public/assets/images/offer1.png";
import offer3 from "@/public/assets/images/offer3.png";
import offer4 from "@/public/assets/images/offer4.png";
import Image from "next/image";
import SectionHeading from "@/components/common/sectionHeading";
import { useState } from "react";
import { motion } from "framer-motion";
import { slideIn, staggerContainer } from "@/utils/motion";
import { motionDelay } from "../api/axiosInstance";

export default function OurOffer() {
  const [readMore, setReadMore] = useState({
    1: false,
    2: false,
    3: false,
  });
  const newsData = [
    {
      id: 1,
      date: "December 26, 2025",
      title: "Relationship",
      description:
        "Security is a continuous process, built on exceptional design, powerful systems, and expert oversight. For over 35 years, Protection Technologies has partnered with clients to manage their security systems, allowing them to focus on what matters most. We believe in long-term relationships, delivering tailored solutions that help you succeed.",
      image: offer1,
      readTime: "5 min read",
    },
    {
      id: 2,
      date: "March 05, 2025",
      title: "Experience",
      description:
        "With over 35 years of unwavering commitment to safety and security, our company stands as a beacon of reliability and expertise in the industry. Throughout the years, we have established ourselves as a trusted partner, providing unparalleled knowledge and cutting-edge solutions to our clients. Our team, composed of highly skilled professionals, is second to none, equipped with a deep understanding of security practices and a passion for safeguarding our clients' assets. When you choose our company, you can trust that you are partnering with a dependable and knowledgeable security provider that consistently exceeds expectations.",
      image: offer3,
      readTime: "7 min read",
    },
    {
      id: 3,
      date: "March 05, 2025",
      title: "Accountability",
      description:
        "At our company, accountability is not just a buzzword; it is the foundation upon which we build our success. We firmly believe that maintaining and demonstrating accountability is crucial in the realm of protecting businesses on a global scale. As leaders in the industry, we have implemented robust systems and processes that ensure accountability at every level of our operations. From our dedicated team members to our cutting-edge technologies, we consistently strive for excellence in delivering reliable and effective security solutions.",
      image: offer4,
      readTime: "7 min read",
    },
  ];

  return (
    <>
      <motion.section
        className="dark:bg-gradienttlbrsmooth bg-brand-ligthSecondary text-white py-8 sm:py-16 px-4"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: motionDelay }}
      >
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            heading2="What We Offer"
            className="mb-12 flex items-center justify-center flex-col"
          />

          <motion.div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsData.map((article, index) => (
              <motion.div
                key={article.id}
                className="dark:bg-neutral-800 bg-brand-ligthSecondaryDark rounded-xl overflow-hidden transition-all duration-300 shadow-lg hover:shadow-xl group"
                variants={slideIn(
                  index === 0 ? "left" : index === 1 ? "up" : "right",
                  motionDelay * article.id
                )}
              >
                <div className="relative overflow-hidden group">
                  <Image
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/5 dark:bg-black/50 opacity-100 group-hover:opacity-0 transition-opacity duration-300"></div>
                </div>

                <div className="p-3 lg:p-6 dark:bg-cardGradient  h-full">
                  <div className="text-brand-secondary dark:text-brand-white transition-all duration-300 text-lg mb-3 kumbh_sans_bold">
                    {article.title}
                  </div>
                  <p className="dark:text-white text-brand-dark text-base kumbh_sans_regular mb-4 leading-snug transition-colors duration-300">
                    {readMore[article.id] || article.description.length <= 200
                      ? article.description
                      : article.description.slice(0, 200) + "..."}
                  </p>
                  <div className="flex items-center justify-between">
                    <button
                      className="text-brand-secondary kumbh_sans_medium text-sm transition-colors duration-300 underline"
                      onClick={() =>
                        setReadMore({
                          ...readMore,
                          [article.id]: !readMore[article.id],
                        })
                      }
                    >
                      {readMore[article.id] ? "Read Less" : "Read More"}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
