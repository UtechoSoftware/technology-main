"use client";
import { offer1, offer2, offer3 } from "@/public/assets/images";
import Image from "next/image";
import SectionHeading from "../common/sectionHeading";
import { motion } from "framer-motion";
import { slideIn, staggerContainer } from "@/utils/motion";
import { motionDelay } from "../api/axiosInstance";

const PlatformServices = () => {
  const services = [
    {
      id: 1,
      image: offer1,
      title: "Comprehensive Cybersecurity Management",
      description:
        "Our managed IT services deliver an all-encompassing cybersecurity solution, safeguarding your digital landscape against the full spectrum of cyber threats without hidden costs. Continuous monitoring, advanced threat detection, and proactive response strategies are integral parts of our offering, ensuring your data's integrity and compliance without additional charges for essential security enhancements.",
    },
    {
      id: 2,
      image: offer2,
      title: "Cloud Services and Infrastructure Management",
      description:
        "Experience the full potential of the cloud with our inclusive cloud services and infrastructure management. We provide end-to-end support from migration to ongoing optimization, offering scalable and flexible cloud solutions tailored to your needs. Our approach eliminates the complexity of additional fees, ensuring transparent, efficient cloud management that grows with your business.",
    },
    {
      id: 3,
      image: offer3,
      title: "Technical Support and Helpdesk Services",
      description:
        "Our technical support and helpdesk services are designed to offer you peace of mind without the worry of extra charges. We provide continuous, comprehensive support for all your IT needs, from routine queries to urgent troubleshooting. Our commitment to minimizing downtime and enhancing your operations comes with the assurance of no hidden costs, ensuring seamless and efficient IT system performance around the clock.",
    },
  ];

  return (
    <motion.div
      className="dark:bg-gradienttbsmooth bg-brand-ligthSecondary py-8 md:py-16 px-4"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          heading1="IT Solutions"
          heading2="Why Choose Our Platform for Your Services"
          className="text-center mb-6"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-4 md:my-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="dark:bg-cardGradient bg-brand-ligthSecondaryDark shadow-lg rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group p-5"
              variants={slideIn("up", motionDelay * index)}
            >
              {/* Image Container */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  className="w-full relative h-full object-cover group-hover:scale-110 rounded-lg transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black group-hover:opacity-0 opacity-35 dark:opacity-50 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="mt-4">
                <h4 className="dark:text-white text-brand-black text-xl kumbh_sans_semibold mb-4 leading-tight">
                  {service.title}
                </h4>
                <p className="text-brand-muted text-base md:text-sm kumbh_sans_regular leading-relaxed mb-5">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default PlatformServices;
