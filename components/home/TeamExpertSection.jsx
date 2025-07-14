"use client";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motionDelay } from "../api/axiosInstance";
import SectionHeading from "../common/sectionHeading";
import Image from "next/image";
import {
  Cathleen,
  Diana,
  Mike,
  Nerizza,
  Nicole,
  Patricia,
  Placeholder,
  Rosemery,
  Todd,
  Tobie,
  Marichelle,
  Hernan
} from "@/public/assets/images";

export default function TeamExpertSection() {
  const teamData = [
    {
      id: 1,
      name: "Mike Singer",
      role: "President",
      image: Mike,
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "https://www.linkedin.com/in/mike-singer-497ab824/",
        instagram: "#",
      },
    },
    {
      id: 2,
      name: "Patricia Otero",
      role: "Administrative Director",
      image: Patricia,
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "https://www.linkedin.com/in/patricia-o-406892258/",
        instagram: "#",
      },
    },
    {
      id: 3,
      name: "Nerizza Flores",
      role: "Director of System Operations",
      image: Nerizza,
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "https://www.linkedin.com/in/nerizza-flores-867339116/",
        instagram: "#",
      },
    },
    {
      id: 4,
      name: "Todd Galinus",
      role: "Director of Field Operations",
      image: Todd,
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "http://linkedin.com/in/todd-galinus-37b33b149/",
        instagram: "#",
      },
    },
    {
      id: 5,
      name: "Nicole Lazic",
      role: "Business Development Manager",
      image: Nicole,
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "https://www.linkedin.com/in/nicole-lazic-b09b4b231/",
        instagram: "#",
      },
    },
    {
      id: 6,
      name: "Rosemery Mejia",
      role: "Manager of System Operations",
      image: Rosemery,
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "https://www.linkedin.com/in/rosemery-mejia-11b29013b/",
        instagram: "#",
      },
    },
    {
      id: 7,
      name: "Diana Ordonez",
      role: "Operations and Purchasing Coordinator",
      image: Diana,
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "https://www.linkedin.com/in/diana-ordonez1/",
        instagram: "#",
      },
    },
    {
      id: 8,
      name: "Cathleen Catalan",
      role: "Executive Assistant to the President",
      image: Cathleen,
      social: {
        facebook: "#",
        twitter: "#",
        linkedin:
          "https://www.linkedin.com/in/cathleen-catalan-chra-31a798233/",
        instagram: "#",
      },
    },
    {
      id: 9,
      name: "Marichelle Caballero",
      role: "Warehouse Manager",
      image: Marichelle,
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "https://www.linkedin.com/in/marichelle-caballero-07a786307/",
        instagram: "#",
      },
    },
    {
      id: 10,
      name: "Hernan Corrales",
      role: "Scheduling, Inventory and Compliance Coordinator",
      image: Hernan,
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "https://www.linkedin.com/in/herman-corrales-57a51212/",
        instagram: "#",
      },
    },
    {
      id: 11,
      name: "Thomas Earl Benedict Consing",
      role: "Executive Assistant to the Director of Field Operations",
      image: Tobie,
      social: {
        facebook: "#",
        twitter: "#",
        linkedin:
          "https://www.linkedin.com/in/thomas-earl-benedict-consing-a85432230/",
        instagram: "#",
      },
    },
  ];

  const swiperRef = useRef(null);

  const nextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const prevSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <motion.section
      className="dark:bg-gradientlrsmooth bg-brand-ligthSecondary text-white py-8 sm:py-16 px-4"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="lg:w-1/3 lg:pr-8">
            <SectionHeading
              heading1="Our Expert Team"
              heading2="Our Dedicated Team Is Committed To Safeguarding Your Home Future."
              className={
                "mb-6 flex items-center justify-center lg:items-start flex-col"
              }
            />
            {/* <motion.div
              className="mt-6 flex items-center justify-center lg:justify-start"
              variants={fadeIn("up", motionDelay, true)}
            >
              <Button
                className="bg-brand-secondary border border-brand-secondary hover:bg-brand-secondaryDark text-white px-6 py-3 rounded-full kumbh_sans_semibold transition-colors duration-300 flex items-center gap-2"
                endContent={
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                }
              >
                More Team
              </Button>
            </motion.div> */}
          </div>

          <div className="lg:w-2/3 mt-8 lg:mt-0">
            <div className="flex justify-end mb-6 gap-2 md:order-1 order-2">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full border border-brand-secondary flex items-center justify-center text-brand-secondary hover:text-white hover:bg-brand-secondary hover:border-white transition-all duration-300 team-swiper-button-prev"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full border border-brand-secondary flex items-center justify-center text-brand-secondary hover:text-white hover:bg-brand-secondary hover:border-white transition-all duration-300 team-swiper-button-next"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
            <div className="relative order-2 md:order-1">
              <Swiper
                ref={swiperRef}
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={24}
                slidesPerView={1}
                navigation={{
                  prevEl: ".team-swiper-button-prev",
                  nextEl: ".team-swiper-button-next",
                }}
                pagination={false}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  380: {
                    slidesPerView: 1.5,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 2.5,
                  },
                }}
                className="team-swiper"
              >
                {teamData.map((member) => (
                  <SwiperSlide key={member.id}>
                    <div className="bg-neutral-800 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl group h-full">
                      <div className="relative overflow-hidden">
                        <Image
                          src={member.image}
                          alt={member.name}
                          className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                          draggable={false}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                        <div className="absolute bottom-6 left-6 right-6">
                          <div className="flex justify-center flex-col items-center gap-2">
                            <h3 className="text-white text-xl kumbh_sans_bold mb-0">
                              {member.name}
                            </h3>
                            <p className="text-[#f4f4f4] mb-0 text-sm kumbh_sans_medium">
                              {member.role}
                            </p>
                            <div className="flex justify-center gap-4">
                              {/* <a
                                href={member.social.facebook}
                                className="p-2 hover:bg-brand-secondary rounded-full bg-transparent border-brand-secondary border flex items-center justify-center transition-colors duration-300"
                              >
                                <FaFacebook size={14} />
                              </a>
                              <a
                                href={member.social.twitter}
                                className="p-2 hover:bg-brand-secondary rounded-full bg-transparent border-brand-secondary border flex items-center justify-center transition-colors duration-300"
                              >
                                <BsTwitter size={14} />
                              </a> */}
                              <a
                                target="_blank"
                                href={member.social.linkedin}
                                className="p-2 hover:scale-110 rounded-full text-brand-secondary bg-white flex items-center justify-center transition-all duration-300"
                              >
                                <BsLinkedin
                                  size={14}
                                  className="text-brand-secondary"
                                />
                              </a>
                              {/* <a
                                href={member.social.instagram}
                                className="p-2 hover:bg-brand-secondary rounded-full bg-transparent border-brand-secondary border flex items-center justify-center transition-colors duration-300"
                              >
                                <BsInstagram size={14} />
                              </a> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="team-swiper-pagination flex justify-center mt-6"></div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
