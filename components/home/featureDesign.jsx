import { fadeIn, slideIn, staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import { motionDelay } from "../api/axiosInstance";
import SectionHeading from "../common/sectionHeading";
import { useRouter } from "next/navigation";

export default function FeatureDesign() {
  const router = useRouter();
  const companyFeatures = [
    "Direct and Efficient",
    "Trusted Expertise",
    "Integrated Systems",
    "Tailored Connections",
    "Worldwide Success",
    "Customized Security Solutions",
  ];

  return (
    <section className="dark:bg-gradientbrtlsmooth bg-brand-white relative text-brand-white dark:text-brand-black flex items-center justify-center pb-8 md:pb-12 md:pt-[200px] pt-[130px]">
      <div className="max-w-7xl mx-auto px-6 md:px-32 pb-16">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 justify-center w-full items-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.div className="relative flex lg:justify-end">
            <div className="relative max-h-[30rem] h-full max-w-[35rem] w-full">
              <div className="hidden md:block absolute bottom-16 -left-24 z-10 bg-serviceCardgradient2 text-black rounded-lg px-8 py-3 text-center border-2 border-dashed border-gray-400">
                <div className="flex items-center justify-center mb-2">
                  <motion.img
                    src="/assets/images/badge.png"
                    alt=""
                    variants={fadeIn("up", motionDelay, true)}
                  />
                </div>
                <motion.div
                  className="kumbh_sans_bold text-brand-white text-lg"
                  variants={slideIn("up", motionDelay, true)}
                >
                  Trusted By 5k
                </motion.div>
                <motion.div
                  className="text-sm kumbh_sans_bold text-brand-white"
                  variants={slideIn("left", motionDelay, true)}
                >
                  Clients
                </motion.div>
              </div>
              <div className=" max-h-[30rem] h-full max-w-[35rem] w-full bg-brand-secondary absolute rounded-3xl -left-6 -bottom-10"></div>
              <motion.img
                src="/assets/images/featureimg.jpg"
                alt="Smart Home Technology"
                className="w-full relative h-[30rem] object-cover rounded-3xl"
                variants={slideIn("left", motionDelay, false)}
              />
              <div className="absolute bottom-0 left-0 w-full h-full bg-brand-black rounded-3xl opacity-30"></div>
            </div>
          </motion.div>
          <div className="space-y-4">
            {/* Section Label */}
            <SectionHeading
              heading1="About Our Company"
              heading2="Core: Driving The Future Of Security"
              className="mb-6 flex items-center justify-center lg:items-start flex-col"
            />

            {/* Description */}
            <motion.p
              className="text-brand-muted text-base lg:text-lg kumbh_sans_medium leading-relaxed text-center lg:text-start"
              variants={fadeIn("up", motionDelay, true)}
            >
              Protection Technologies, LLC. provides Intrusion Sensors, Fire
              Alarm Systems, Video Intercom Systems, Commercial Tag Readers for
              garage door openings and gates, Access Control, Wi-Fi Systems,
              Internally and Externally day/night IP/analog cameras, and more
              for all Multifamily, Government, Commercial, Residential and
              Industrial Applications.
            </motion.p>

            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {companyFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 text-brand-muted"
                  variants={slideIn("up", motionDelay * index, true)}
                >
                  <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                  <span className="kumbh_sans_medium">{feature}</span>
                </motion.div>
              ))}
            </motion.div>
            <div className="flex items-center lg:justify-center space-x-6 pt-8">
              <motion.button
                className="bg-brand-secondary border border-brand-secondary hover:bg-brand-secondaryDark text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-3 group hover:shadow-lg"
                onClick={() => router.push("/about")}
                variants={slideIn("up", 0.6, true)}
              >
                <span>More About Us</span>
                <svg
                  className="hidden sm:block w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </motion.button>

              {/* <motion.div
                className="flex items-center space-x-2"
                variants={slideIn("bottom", 0.6, true)}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white kumbh_sans_bold text-lg">AD</span>
                </div>
                <div>
                  <div className="kumbh_sans_semibold text-brand-dark dark:text-brand-white">
                    Mike Singer
                  </div>
                  <div className="text-brand-muted text-sm">CEO, Founder</div>
                </div>
              </motion.div> */}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
