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

  // Duplicate brands array for seamless loop
  const duplicatedBrands = [
    ...brands,
    ...brands,
    ...brands,
    ...brands,
    ...brands,
    ...brands,
    ...brands,
    ...brands,
    ...brands,
    ...brands,
    ...brands,
    ...brands,
  ];

  return (
    <motion.section
      className="px-4 pt-6 sm:pt-12 sm:px-12 overflow-hidden dark:bg-brand-secondaryDark bg-brand-ligthSecondaryDark"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="relative xl:container mx-auto overflow-hidden">
        <motion.div
          className="flex items-center gap-12 whitespace-nowrap"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "linear",
          }}
        >
          {duplicatedBrands.map((brand, index) => (
            <motion.img
              key={`brand-${index}`}
              src={theme === "dark" ? brand.dark : brand.light}
              alt={`brand-${index}`}
              className="max-w-[120px] max-h-[100px] w-auto inline-block mb-0"
              variants={slideIn(
                index % 2 === 0 ? "up" : "down",
                motionDelay * (index + 1),
                true
              )}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
