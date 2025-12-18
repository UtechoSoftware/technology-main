"use client";
import { slideIn, staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { motionDelay } from "../api/axiosInstance";

// Brand image data
const brands = [
  {
    dark: "/assets/images/brooklyn.jpg",
    light: "/assets/images/brooklyn.jpg",
  },
  {
    dark: "/assets/images/njdevil.jpg",
    light: "/assets/images/njdevil.jpg",
  },
  {
    dark: "/assets/images/jets.png",
    light: "/assets/images/jets.png",
  },
  {
    dark: "/assets/images/dolphins.jpg",
    light: "/assets/images/dolphins.jpg",
  },
];

export default function Brands2() {
  const { theme } = useTheme();

  return (
    <motion.section
      className="px-4 pt-6 sm:pt-12 sm:px-12 dark:bg-brand-secondaryDark bg-brand-ligthSecondaryDark max-w-4xl mx-auto"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="xl:container mx-auto">
        {/* Grid layout: 4 columns until md, then 2 columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 items-center justify-items-center">
          {brands.map((brand, index) => (
            <motion.img
              key={`brand-${index}`}
              src={theme === "dark" ? brand.dark : brand.light}
              alt={`brand-${index}`}
              className="w-[150px] sm:w-[200px] h-[60px] sm:h-[70px] rounded-md"
              variants={slideIn(
                index % 2 === 0 ? "up" : "down",
                motionDelay * (index + 1),
                true
              )}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
