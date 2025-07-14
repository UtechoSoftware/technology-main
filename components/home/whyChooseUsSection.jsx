"use client";
import { staggerContainer, zoomIn } from "@/utils/motion";
import SectionHeading from "../common/sectionHeading";
import { motion } from "framer-motion";
import { motionDelay } from "../api/axiosInstance";

export default function WhyChooseUsSection() {
  const statsData = [
    {
      number: "5k+",
      label: "Projects Completed",
      color: "text-green-500",
      bg: "bg-green-500/20",
    },
    {
      number: "150k+",
      label: "Customers",
      color: "text-pink-500",
      bg: "bg-pink-500/20",
    },
    {
      number: "40+",
      label: "Years Of Experience",
      color: "text-purple-500",
      bg: "bg-purple-500/20",
    },
    {
      number: "95%",
      label: "Client Retention Rate",
      color: "text-orange-500",
      bg: "bg-orange-500/20",
    },
  ];

  return (
    <motion.section
      className="dark:text-white dark:bg-brand-secondaryDark text-brand-white bg-brand-ligthSecondary px-4 py-8 xs:py-16"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          heading1="Why Choose Us"
          heading2="Forging A Path To Integrated Technology"
          className="mb-16 flex items-center justify-center flex-col"
          center
        />
        <div className="grid dark:bg-gradientcenterout bg-brand-ligthSecondaryDark grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 lg:gap-12 py-16">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group hover:transform transition-all duration-300"
              variants={zoomIn(motionDelay, "smooth")}
            >
              <div className="text-3xl xs:text-4xl kumbh_sans_bold text-brand-black dark:text-brand-white mb-4 group-hover:text-opacity-90 transition-all duration-300">
                {stat.number}
              </div>
              <div
                className={`${stat.color} text-xs ${stat.bg} px-3 py-1 w-fit m-auto rounded-full lg:text-xs kumbh_sans_medium uppercase tracking-wide`}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
