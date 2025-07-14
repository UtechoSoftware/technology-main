"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideIn, staggerContainer } from "@/utils/motion";
import { motionDelay } from "../api/axiosInstance";

export default function SectionHeading({
  heading1,
  heading2,
  className,
  center,
}) {
  return (
    <>
      <motion.div
        className={className}
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        {heading1 && (
          <motion.h2
            className={
              center
                ? "text-lg capitalize kumbh_sans_regular text-brand-dark mt-4 lg:mt-0 mb-4 text-center m-auto"
                : "text-lg capitalize kumbh_sans_regular text-brand-dark mt-4 lg:mt-0 mb-4 text-center lg:text-start"
            }
            variants={slideIn("down", motionDelay, true)}
          >
            <span className="dark:text-[#f5f5f5] text-brand-secondary underline text-2xl">
              {heading1}
            </span>
          </motion.h2>
        )}
        <motion.p
          className={
            center
              ? "dark:text-brand-white text-brand-dark max-w-3xl kumbh_sans_semibold text-3xl md:text-4xl text-center m-auto"
              : "dark:text-brand-white text-brand-dark max-w-3xl kumbh_sans_semibold text-3xl md:text-4xl text-center lg:text-start"
          }
          variants={slideIn("down", motionDelay * 1.1, true)}
        >
          {heading2}
        </motion.p>
      </motion.div>
    </>
  );
}
