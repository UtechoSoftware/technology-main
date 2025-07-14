"use client";
import { companySectionImage } from "@/public/assets/images";
import {
  fadeIn,
  matrixGlitch,
  slideIn,
  staggerContainer,
} from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { MdDone } from "react-icons/md";
import { motionDelay } from "../api/axiosInstance";
import SectionHeading from "../common/sectionHeading";

const CompanySection = () => {
  const stats = [
    { number: "4K+", label: "Complete Project" },
    { number: "2K+", label: "Different Design" },
    { number: "16K", label: "Customers" },
  ];

  const features = [
    "Excellent work",
    "Modern & up to date",
    "Grade #1 materials",
    "Structures with long life",
  ];

  return (
    <motion.div
      className=" dark:bg-brand-secondaryDark bg-brand-ligthSecondaryDark relative overflow-hidden py-16 px-4 about"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: motionDelay }}
    >
      <div className="max-w-7xl relative mx-auto">
        {/* Main content */}
        <div className="relative z-10 py-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <SectionHeading
                  heading1="About Our Company"
                  heading2="Always dedicated and devoted"
                  className="mb-6 flex items-center justify-center lg:items-start flex-col"
                />
                <motion.p
                  variants={matrixGlitch(motionDelay)}
                  className="dark:text-brand-muted text-brand-dark text-base roboto_regular leading-relaxed"
                >
                  Protection Technologies, LLC. is a leading provider of
                  advanced security solutions for multi-family, government,
                  commercial, industrial, and critical infrastructure clients.
                  We offer cutting-edge products including mobile CCTV trailers
                  with outdoor motion sensors for perimeter security, true
                  day/night IP/analog cameras for clear surveillance, and
                  high-security intrusion sensors for both indoor and hazardous
                  environments.
                </motion.p>
              </div>

              <motion.div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    variants={slideIn("down", motionDelay * (index + 1))}
                    key={index}
                    className="flex items-center space-x-3"
                  >
                    <MdDone className="w-6 xs:w-7 h-6 xs:h-7 text-brand-secondary" />
                    <span className="text-brand-muted kumbh_sans_regular">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <div className="relative mt-16 ">
              {/* Main Image */}

              <motion.div
                variants={fadeIn("right", motionDelay)}
                className={`relative rounded-2xl overflow-hidden shadow-2xl`}
              >
                <Image
                  src={companySectionImage}
                  alt="Company Section"
                  className="object-contain"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
              </motion.div>
              {/* Stats Cards */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-serviceCardgradient2 rounded-xl p-4 md:p-6 border-2 shadow-xl border-white border-dotted w-2/3 md:w-[400px]">
                <div className="grid grid-cols-3 gap-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      variants={slideIn("down", motionDelay * (index + 1))}
                      key={index}
                      className="text-center w-full"
                    >
                      <div className="text-xl md:text-2xl kumbh_sans_semibold text-white mb-1">
                        {stat.number}
                      </div>
                      <div className="text-xs kumbh_sans_regular text-brand-muted leading-tight">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Growth Card */}
              <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 bg-serviceCardgradient2 rounded-xl py-3 px-6 border-2 shadow-xl border-white border-dotted w-1/2 md:w-[300px]">
                <div className="flex items-center justify-center flex-col">
                  <div className="text-2xl md:text-3xl kumbh_sans_semibold text-white mb-2">
                    68%
                  </div>
                  <div className="text-white kumbh_sans_semibold mb-1">
                    Extra Growth
                  </div>
                  <div className="text-gray-400 text-sm">For Your Company!</div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-dark/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CompanySection;
