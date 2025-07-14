/* eslint-disable no-unused-vars */
"use client";
import { slideIn, staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import { motionDelay } from "../api/axiosInstance";

const IntegratedServices = () => {
  const aboutSectionText = [
    {
      id: "01",
      title: "Global Reach",
      description:
        "Our services extend across borders, delivering consistent, high-quality security and automation solutions to clients worldwide—wherever safety and smart integration are needed.",
    },
    {
      id: "02",
      title: "Seamless IT Solutions",
      description:
        "We integrate advanced technology with your existing systems to ensure smooth, secure, and efficient operations—making your security and automation smarter and simpler.",
    },
    {
      id: "03",
      title: "Local Expertise",
      description:
        "With deep knowledge of local regulations, building codes, and environments, our team provides personalized solutions that meet the unique needs of your region and property.",
    },
    {
      id: "04",
      title: "Worldwide Success",
      description:
        "From residential homes to large commercial spaces, our proven track record of delivering smart, secure solutions spans the globe—trusted by clients across industries and continents.",
    },
  ];

  return (
    <motion.div
      className="overflow-hidden"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      <section className="bg-brand-ligthSecondaryDark dark:bg-gradienttbsmooth py-8 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="md:flex justify-center items-center">
            <motion.div
              className="w-full md:w-5/12"
              variants={slideIn("left", motionDelay, false)}
            >
              <div className="text-center mb-6 md:mb-12">
                <span className="text-brand-secondary text-sm kumbh_sans_medium mb-2 px-3 py-1 rounded-full bg-[#f5f5f5] dark:bg-[#2A1313]">
                  IT Solutions
                </span>
                <h2 className="text-3xl capitalize kumbh_sans_semibold text-brand-dark dark:text-white my-4">
                  Integrated Solution Services
                </h2>
              </div>

              <div className="w-full">
                <p className="mt-2 text-brand-muted text-base kumbh_sans_regular leading-6">
                  In today's interconnected world, our managed services stand
                  out by offering a unique blend of global reach and local
                  expertise. As your all-in-one partner for seamless IT
                  solutions, we provide comprehensive support that transcends
                  borders, tailored to meet the specific needs of businesses
                  worldwide.
                  <br />
                  Our commitment to innovation, reliability, and unparalleled
                  customer service ensures not just the optimization of your
                  current IT infrastructure but also paves the way for future
                  growth and success. Embrace the potential of a truly global
                  managed services provider, where cutting-edge technology meets
                  personalized care, empowering your business to thrive on the
                  global stage.
                </p>
                {/* <Image
                  src={integratedSectionImage}
                  className="w-full"
                  alt="About"
                /> */}
                <div className="w-[70%] mx-auto mt-6 rounded-lg overflow-hidden bg-transparent">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-auto object-cover rounded-lg"
                    style={{
                      display: "block",
                      backgroundColor: "transparent",
                    }}
                  >
                    <source
                      src="https://cdn.midjourney.com/video/df3afe3a-b553-4eae-8a56-f21dab66370e/1.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
            </motion.div>
            <div
              className="relative flex flex-col justify-center gap-4 ms-auto py-[2rem] md:py-[4rem] w-full md:w-5/12 rounded-[8px] bg-brand-ligthSecondary dark:bg-cardGradient p-5 my-3 md:my-0 shadow-lg
            "
            >
              {aboutSectionText.map((data, index) => (
                <motion.div
                  key={data.id}
                  className="flex items-center gap-4"
                  variants={slideIn("up", motionDelay * index, true)}
                >
                  {/* Left section with box */}
                  <div className="relative flex justify-center items-center lg:-ms-[4.5rem] w-[7rem] h-[7rem]">
                    <div
                      className="flex justify-center items-center bg-brand-secondary dark:border-[#EEEEEE] dark:border-1 rounded-[5px] w-[5rem] md:w-[6rem] xl:w-[6.5rem] h-[5rem] md:h-[6rem] xl:h-[6.5rem] text-[#1D1D1D] text-[1.5rem] md:text-[2rem] lg:text-[3rem] poppins_regular shadow-md"
                      style={{
                        color: "transparent",
                        WebkitTextStroke: "1px white",
                        textStroke: "1px white",
                      }}
                    >
                      {data.id}
                    </div>
                  </div>

                  {/* Right section with text */}
                  <div className="flex flex-col justify-center">
                    <h3 className="text-2xl text-brand-dark dark:text-white capitalize kumbh_sans_semibold">
                      {data.title}
                    </h3>
                    <p className="text-base kumbh_sans_regular text-brand-muted">
                      {data.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default IntegratedServices;
