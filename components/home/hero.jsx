"use client";
import {
  dimensionalShift,
  fadeIn,
  slideIn,
  staggerContainer,
} from "@/utils/motion";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { FaArrowRightLong } from "react-icons/fa6";
import { motionDelay } from "../api/axiosInstance";

export default function Hero() {
  const router = useRouter();
  return (
    <section className="w-full relative bg-brand-secondaryDark md:min-h-[700px] xl:min-h-[875px] pb-[100px] md:pb-[200px]">
      {/* <div className="">
        <Image
          src={circle1}
          alt="circle"
          className="absolute top-0 left-0 z-30 w-[500px] h-[500px] lg:w-[700px] lg:h-[700px]"
        />
        <Image
          src={circle2}
          alt="circle"
          className="absolute top-96 right-0 z-30 w-[500px] h-[500px] lg:w-[1000px] lg:h-[1000px]"
        />
        <Image
          src={circle3}
          alt="circle"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 w-[600px] h-[600px] md:w-[1000px] md:h-[1000px]"
        />
      </div> */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover absolute top-0 left-0 z-0"
        // style={{ mixBlendMode: "luminosity" }}
      >
        <source src="/assets/images/pageVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <motion.div
        className="min-h-[500px] sm:min-h-[700px] pt-[5rem] flex flex-col lg:container mx-auto z-30 relative"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: motionDelay }}
      >
        <div className="mx-auto px-4 flex-1 flex items-center">
          <div className="mx-auto max-w-5xl text-center">
            <motion.h1
              className="text-white text-[30px] md:text-[48px] z-20 lg:text-[60px] kumbh_sans_semibold capitalize mb-4 sm:mb-6"
              variants={slideIn("down", motionDelay, true)}
            >
              Integrated Security Technology Systems
            </motion.h1>

            <motion.p
              className="capitalize kumbh_sans_medium max-w-4xl mx-auto text-lg text-white"
              variants={fadeIn("up", motionDelay, true)}
            >
              A new property involves careful planning, design, and seamless
              execution. our managed services stand out by offering a unique
              blend of National reach and local expertise
            </motion.p>
            <motion.button
              onClick={() => router.push("/services")}
              className="max-w-[12rem] w-full py-[1rem] mt-5 border m-auto border-brand-secondary flex justify-center gap-3 items-center bg-brand-secondary text-white rounded-full text-sm kumbh_sans_semibold hover:bg-brand-secondaryDark transition-colors duration-300"
              variants={dimensionalShift(motionDelay, "x")}
            >
              Learn More
              <FaArrowRightLong />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
