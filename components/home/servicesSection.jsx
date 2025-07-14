import { fadeIn, staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import { motionDelay } from "../api/axiosInstance";
import SectionHeading from "../common/sectionHeading";
import { useTheme } from "next-themes";

export default function ServicesSection() {
  const { theme } = useTheme();
  return (
    <motion.section
      className="dark:bg-gradientcenterin bg-brand-ligthSecondaryDark text-white relative py-5 lg:py-16 px-4 overflow-hidden"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="max-w-7xl relative mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <SectionHeading
            heading1="Our Services"
            heading2="Integrated Security System for Home Automation"
            className="mb-6 flex items-center justify-center flex-col"
            center
          />
          <motion.p
            className="text-gray-400 m-auto kumbh_sans_medium text-center text-base lg:text-lg leading-relaxed max-w-4xl"
            variants={fadeIn("up", motionDelay, true)}
          >
            Our integrated solutions combine advanced security with smart home
            automation, giving you full control over cameras, alarms, lighting,
            and access—right from your phone or tablet. Whether you're home or
            away, monitor your property in real time, receive instant alerts,
            and enjoy a safer, more connected lifestyle.
          </motion.p>
        </div>

        {/* Services List */}
        <div className="space-y-6 w-full flex justify-center">
          <motion.img
            src={
              theme === "dark"
                ? "/assets/images/tree.png"
                : "/assets/images/treelight.png"
            }
            style={{
              maxHeight: "600px",
              width: "auto",
            }}
            alt=""
            variants={fadeIn("up", motionDelay, true)}
          />
        </div>
      </div>
    </motion.section>
  );
}
