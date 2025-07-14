"use client";
import React from "react";
import SectionHeading from "../common/sectionHeading";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { FaServicestack } from "react-icons/fa";
import { promiseImage } from "@/public/assets/images";
import Image from "next/image";
import { fadeIn, flipCard, slideIn, staggerContainer } from "@/utils/motion";
import { motionDelay } from "../api/axiosInstance";
import { motion } from "framer-motion";

const PromiseSection = () => {
  return (
    <motion.div
      className="dark:bg-brand-secondaryDark bg-brand-ligthSecondary text-white py-8 sm:py-16 px-4"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: motionDelay }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-4 md:gap-12 items-start">
          {/* Left Column */}
          <div>
            <SectionHeading
              heading1="Our differences"
              heading2="Our Value Promises"
              className="mb-6 flex items-center justify-center lg:items-start flex-col"
            />
            <motion.p
              variants={slideIn("up", motionDelay)}
              className="text-brand-muted mb-8 leading-relaxed"
            >
              With Over 35 Years Of Unwavering Commitment To Safety And
              Security, Our Company Stands As A Beacon Of Reliability And
              Expertise In The Industry. Throughout The Years, We Have
              Established Ourselves As A Trusted Partner, Providing Unparalleled
              Knowledge And Expertise To Our Clients
            </motion.p>

            {/* Service Cards */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {/* Security Solutions Card */}
              <motion.div
                className="dark:bg-[#312828] bg-brand-ligthSecondaryDark shadow-medium p-6 rounded-lg"
                variants={flipCard(motionDelay)}
              >
                <div className="flex gap-2 items-center mb-3">
                  <IoShieldCheckmarkSharp className="text-brand-secondary text-2xl" />
                  <h3 className="text-brand-secondary kumbh_sans_medium text-xl">
                    Our Mission
                  </h3>
                </div>
                <p className="text-brand-muted text-base leading-relaxed kumbh_sans_regular">
                  Our mission is to provide unparalleled security solutions,
                  ensuring peace of mind and assurance of protection to our
                  clients, their customers, and the public. We deliver a higher
                  standard of security services by deploying the latest
                  innovations.
                </p>
              </motion.div>

              <motion.div
                className="dark:bg-[#312828] bg-brand-ligthSecondaryDark shadow-medium p-6 rounded-lg"
                variants={flipCard(motionDelay)}
              >
                <div className="flex gap-2 items-center mb-3">
                  <FaServicestack className="text-brand-secondary text-2xl" />
                  <h3 className="text-brand-secondary kumbh_sans_medium text-xl">
                    Our Vision
                  </h3>
                </div>
                <p className="text-brand-muted text-base leading-relaxed kumbh_sans_regular">
                  Our vision is to cultivate thriving habitats where residents,
                  businesses, and organizations grow confidently, knowing they
                  are protected by technology that adapts naturally to their
                  evolving needs while preserving the harmny between innovation
                  and human wellbeing.
                </p>
              </motion.div>
            </div>

            {/* Statistics */}
            <div className="space-y-6 w-2/3">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <motion.span
                    variants={slideIn("left", motionDelay)}
                    className="text-brand-black dark:text-brand-white text-lg kumbh_sans_semibold"
                  >
                    Clients Happy From Us
                  </motion.span>
                  <span className="text-brand-black dark:text-white text-base kumbh_sans_semibold">
                    75%
                  </span>
                </div>
                <div className="w-full bg-[#f5f5f5] dark:bg-[#271212] rounded-full h-2">
                  <div
                    className="bg-brand-secondary h-2 rounded-full"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <motion.span
                    variants={slideIn("left", motionDelay)}
                    className="dark:text-white text-brand-black text-lg kumbh_sans_semibold"
                  >
                    Success Rate
                  </motion.span>
                  <span className="text-brand-black dark:text-white text-base kumbh_sans_semibold">
                    90%
                  </span>
                </div>
                <div className="w-full bg-[#f5f5f5] dark:bg-[#271212] rounded-full h-2">
                  <div
                    className="bg-brand-secondary h-2 rounded-full"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative">
            {/* Building Image */}
            <motion.div
              className="relative rounded-lg overflow-hidden mb-6"
              variants={slideIn("right", motionDelay)}
            >
              <Image
                src={promiseImage}
                alt="promiseImage"
                className="w-full max-h-[492px] object-contain"
              />
            </motion.div>

            {/* Info Card */}
            <div className="hidden lg:block lg:absolute bottom-[-80px] right-0 dark:bg-[#312828] bg-brand-ligthSecondaryDark p-6 rounded-lg kumbh_sans_regular max-w-[340px]">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="w-1 h-1 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-brand-dark dark:text-brand-white text-sm">
                    Together, We Uphold Professionalism, Unity Innovation, And
                    Integrity
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-1 h-1 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-brand-dark dark:text-brand-white text-sm">
                    Enriching Communities And Setting New Benchmarks In The
                    Realm Of Technology And Security
                  </span>
                </li>

                <li className="flex items-start">
                  <div className="w-1 h-1 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-brand-dark dark:text-brand-white text-sm">
                    Provide Unparalleled Security Solutions, Everything
                    Outstanding Performance
                  </span>
                </li>

                <li className="flex items-start">
                  <div className="w-1 h-1 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-brand-dark dark:text-brand-white text-sm">
                    You Can Trust That You Are Partnering With A Professional
                    And Knowledgeable Security Company That Is Committed To
                    Delivering Tailored Solutions That Help You Succeed
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PromiseSection;
