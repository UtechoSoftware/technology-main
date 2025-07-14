import React from "react";
import { motion } from "framer-motion";
import { flipCard } from "@/utils/motion";
import { motionDelay } from "../api/axiosInstance";

export default function ServiceCard({ index, plan }) {
  return (
    <motion.div
      className="flex flex-col justify-center relative bg-[#f5f5f5] dark:bg-cardGradient rounded-3xl px-8  shadow-[0px_7.42px_10px_0px_#24334414] min-h-[18rem] gap-3 flex-shrink-0 h-full"
      key={index}
      variants={flipCard(motionDelay * index)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="w-[4rem] sm:w-[4.5rem] h-[4rem] sm:h-[4.5rem] rounded-full bg-brand-ligthSecondaryDark dark:bg-brand-secondary flex justify-center items-center shadow-medium">
        {plan.icon}
      </div>
      <h6 className=" kumbh_sans_semibold text-xl sm:text-[22px] dark:text-white text-brand-dark capitalize">
        {plan.title}
      </h6>
      <p className="mb-0 text-brand-secondary2 kumbh_sans_medium text-base">
        {plan.description}
      </p>
    </motion.div>
  );
}
