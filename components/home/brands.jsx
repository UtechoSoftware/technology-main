"use client";
import { slideIn, staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { motionDelay } from "../api/axiosInstance";

// Brand image data
const brands = [
  {
    dark: "/assets/images/brand1.png",
    light: "/assets/images/brand1light.png",
  },
  {
    dark: "/assets/images/brand2.png",
    light: "/assets/images/brand2light.png",
  },
  {
    dark: "/assets/images/brand3.png",
    light: "/assets/images/brand3light.png",
  },
  {
    dark: "/assets/images/brand4.png",
    light: "/assets/images/brand4light.png",
  },
  {
    dark: "/assets/images/brand5.png",
    light: "/assets/images/brand5light.png",
  },
  {
    dark: "/assets/images/brandlight6.png",
    light: "/assets/images/brandlight6.png",
  },
  {
    dark: "/assets/images/brandlight7.png",
    light: "/assets/images/brandlight7.png",
  },
  {
    dark: "/assets/images/brandlight8.avif",
    light: "/assets/images/brandlight8.avif",
  },
  {
    dark: "/assets/images/brandlight9.avif",
    light: "/assets/images/brandlight9.avif",
  },
  {
    dark: "/assets/images/brandlight11.png",
    light: "/assets/images/brandlight11.png",
  },
  {
    dark: "/assets/images/brandlight12.avif",
    light: "/assets/images/brandlight12.avif",
  },
];

export default function Brands() {
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
      className="px-4 py-6 sm:p-12 overflow-hidden dark:bg-brand-secondaryDark bg-brand-ligthSecondaryDark"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="relative xl:container mx-auto overflow-hidden">
        <motion.div
          className="flex items-center gap-12 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
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
              className="max-w-[120px] w-auto inline-block mb-0"
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
