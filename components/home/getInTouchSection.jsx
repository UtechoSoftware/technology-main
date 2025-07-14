"use client";

import { avatar3 } from "@/public/assets/images";
import { fadeIn, slideIn, staggerContainer } from "@/utils/motion";
import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { motionDelay } from "../api/axiosInstance";
import SectionHeading from "../common/sectionHeading";
import Link from "next/link";

export default function GetInTouchSection({ contactImage }) {
  return (
    <motion.section
      className="dark:bg-gradientlrsmooth bg-brand-ligthSecondaryDark text-white overflow-hidden pt-8 md:pt-16 pb-4 lg:pb-0 px-4"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="max-w-7xl relative mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <SectionHeading
              heading1="Get In Touch"
              heading2="Technology Evolved Living For Your Security Solutions"
              className="mb-6 flex items-center justify-center lg:items-start flex-col"
            />

            <motion.p
              className="text-center lg:text-start text-brand-muted text-base lg:text-lg leading-relaxed mb-8 max-w-3xl m-auto"
              variants={fadeIn("up", motionDelay, true)}
            >
              Launching a new residential property requires strategic planning,
              thoughtful design, and flawless execution. With Protection
              Technologies, LLC by your side, you'll not only meet modern
              demands but also elevate the living experience for residents well
              into the future.
            </motion.p>
            <motion.div
              className="text-center flex justify-center lg:justify-start items-center"
              variants={fadeIn("up", motionDelay, true)}
            >
              <Button
                as={Link}
                href="/contact-us"
                className="bg-brand-secondary border border-brand-secondary hover:bg-brand-secondaryDark text-white px-8 py-4 rounded-full kumbh_sans_semibold transition-all duration-300 flex items-center gap-3 group hover:shadow-lg"
                endContent={
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
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
                Contact Us
              </Button>
            </motion.div>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <motion.div
              className="relative"
              variants={slideIn("right", motionDelay, true)}
            >
              <Image
                src={contactImage || avatar3}
                alt="Professional woman with tablet"
                className="w-full max-w-sm min-h-[400px] object-contain rounded-2xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
