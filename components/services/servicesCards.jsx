"use client";

import {
  Service1,
  Service2,
  Service3,
  Service4,
  Service5,
  Service6,
  Service7,
  Service8,
} from "@/public/assets/svg";
import { slideIn, staggerContainer } from "@/utils/motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motionDelay } from "../api/axiosInstance";
import { motion } from "framer-motion";

const ServicesCards = () => {
  const { theme } = useTheme();
  const services = [
    {
      icon: Service2,
      title: "Commercial Warehouse",
      description:
        "Warehouse security camera systems are essential for securing industrial spaces.",
      link: "Read More",
      id: "commercial-warehouse",
    },
    {
      icon: Service1,
      title: "Multi Family",
      description:
        "Apartment complexes want to keep their tenants safe. Residents’ safety and security are key factors in the residential market.",
      link: "Read More",
      id: "multi-family",
    },
    {
      icon: Service4,
      title: "Critical Infrastructure ",
      description:
        "Ensure the safety and reliability of your critical assets with our expert services in inspection, compliance, and infrastructure integrity.",
      link: "Read More",
      id: "critical-infrastructure",
    },
    {
      icon: Service3,
      title: "Data Center",
      description:
        "We can work to plan and install a system that works best for your unique set of needs.",
      link: "Read More",
      id: "data-center",
    },
    {
      icon: Service4,
      title: "Assisted Living Facilities",
      description:
        "Your security measures for your entire building should match your care levels for patients. ",
      link: "Read More",
      id: "assisted-living-facilities",
    },
    {
      icon: Service5,
      title: "Office Buildings",
      description:
        "Failing to plan is planning to fail. The office is a place that requires many people to have access. ",
      link: "Read More",
      id: "office-buildings",
    },
    {
      icon: Service6,
      title: "Houses/Estates",
      description:
        "Our advanced threat detection systems monitor your network 24/7 and more facilities identifying and responding.",
      link: "Read More",
      id: "houses-estates",
    },
    {
      icon: Service8,
      title: "College Housing Solutions",
      description:
        "The most important part of college housing is ensuring that students can feel safe in their placements.",
      link: "Read More",
      id: "college-housing-solutions",
    },
    {
      icon: Service7,
      title: "Multi Location Business",
      description:
        "Due to our electronic locking systems, we have the capability to connect multiple properties under one portfolio online.",
      link: "Read More",
      id: "multi-location-business",
    },
  ];

  return (
    <motion.div
      className={`bg-brand-ligthSecondary dark:bg-serviceCardgradient2 py-8 md:py-16 px-4 overflow-hidden ${
        theme === "dark" ? "service" : "service2"
      } `}
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: motionDelay }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="card shadow-medium p-6 rounded-2xl transition-all duration-300 group"
              variants={slideIn("up", motionDelay * index)}
            >
              <div className="flex items-start flex-col">
                <Image
                  src={service.icon}
                  alt={service.title}
                  className="h-12 w-12 md:h-16 md:w-16"
                />
                <h3 className="text-black capitalize dark:text-white text-lg my-3 kumbh_sans_semibold">
                  {service.title}
                </h3>
              </div>
              <p className="text-[#A9A9A9] text-lg md:text-base roboto_regular leading-relaxed mb-4">
                {service.description}
              </p>
              <div className="flex justify-end">
                <Link
                  href={`/services/${service.id}`}
                  className="text-brand-secondary transition-colors duration-200 underline"
                >
                  {service.link}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesCards;
