import { slideIn, staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import { motionDelay } from "../api/axiosInstance";
import SectionHeading from "../common/sectionHeading";
import { Button } from "@heroui/react";

export default function OfferSection() {
  const offerData = [
    {
      number: "01",
      title: "Scalable Audio/Video Solutions",
      description:
        "We provide smart, scalable audio and video systems tailored to meet the specific needs of your entire property—from single rooms to multi-room integrations.",
    },
    {
      number: "02",
      title: "Seamless Media Across Rooms",
      description:
        "Our systems allow you to connect all your TVs, enabling synchronized or independent media playback in each room, offering a smooth and flexible viewing experience.",
    },
    {
      number: "03",
      title: "Create the Perfect Ambiance",
      description:
        "From your lobby to the gym, pool, or home office, our customizable control systems help you set the ideal mood and environment throughout your space.",
    },
    {
      number: "04",
      title: "Integrated Smart Systems",
      description:
        "Our solutions integrate with your smart home setup, giving you centralized control over audio, video, lighting, and ambiance to enhance every space.",
    },
    {
      number: "05",
      title: "Immersive Entertainment",
      description:
        "Whether you're enjoying a full home cinema or streaming music, our technology delivers immersive sound and visuals to elevate your entertainment experience.",
    },
    {
      number: "06",
      title: "Enhanced Lifestyle Experience",
      description:
        "Our advanced audio/video setups are designed to enrich your lifestyle with intuitive, user-friendly technology that enhances comfort, luxury, and convenience.",
    },
  ];

  return (
    <motion.section
      className="dark:bg-gradientcenterout bg-brand-ligthSecondary text-brand-white dark:text-brand-black relative px-4 py-8 md:py-16"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="max-w-7xl relative mx-auto">
        {/* Header */}
        <SectionHeading
          heading1="What We Offer"
          heading2="Connected Technology Solutions"
          className="mb-6 flex items-center justify-center lg:items-start flex-col"
          center
        />

        {/* Services List */}
        <div className="space-y-8 py-6">
          {offerData.map((item, index) => (
            <motion.div
              key={index}
              className="border-b dark:border-gray-700 border-gray-400 pb-8 last:border-b-0"
              variants={slideIn("up", motionDelay * index, true)}
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                {/* Left Side - Number and Content */}
                <div className="flex gap-4 md:gap-8 flex-1">
                  {/* Number */}
                  <div className="text-brand-secondary kumbh_sans_bold text-2xl lg:text-3xl flex-shrink-0">
                    {item.number}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl lg:text-3xl kumbh_sans_bold text-brand-black dark:text-brand-white mb-4">
                      {item.title}
                    </h3>
                    <p className="text-brand-muted kumbh_sans_medium text-base lg:text-lg leading-relaxed max-w-5xl">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Right Side - Learn More Button */}
                {/* <div className="lg:flex-shrink-0 flex items-center justify-end">
                  <Button className="bg-brand-secondary border border-brand-secondary hover:bg-brand-secondaryDark text-brand-white px-8 py-3 rounded-full kumbh_sans_semibold transition-colors duration-300 text-sm lg:text-base shadow">
                    Learn More
                  </Button>
                </div> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
