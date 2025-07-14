import { FaHeadphones, FaTools, FaUserTie } from "react-icons/fa";
import { HiOutlineVideoCamera } from "react-icons/hi";
import {
  MdOutlineDesignServices,
  MdSecurity,
  MdWifiTethering,
} from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";
import { SwiperSlide } from "swiper/react";
import CustomSwiper from "../swiper/customSwiper";
import ServiceCard from "./serviceCard";

export default function SpecialService() {
  const services = [
    {
      title: "Sales & Installation Team",
      description:
        "Our expert team provides end-to-end sales consultations and seamless installation services tailored to your specific needs.",
      icon: (
        <FaUserTie className="dark:text-brand-white text-brand-secondary text-[20px] sm:text-[24px] md:text-[35px]" />
      ),
    },
    {
      title: "Live Remote Video",
      description:
        "Monitor your property from anywhere with our secure, high-definition live remote video surveillance system.",
      icon: (
        <HiOutlineVideoCamera className="dark:text-brand-white text-brand-secondary text-[20px] sm:text-[24px] md:text-[35px]" />
      ),
    },
    {
      title: "Technology Support",
      description:
        "Get 24/7 expert technical support for all your system components, ensuring your technology runs smoothly at all times.",
      icon: (
        <RiCustomerService2Line className="dark:text-brand-white text-brand-secondary text-[20px] sm:text-[24px] md:text-[35px]" />
      ),
    },
    {
      title: "Blueprint to Completion",
      description:
        "From initial blueprints to final implementation, we provide full-service project management and execution.",
      icon: (
        <MdOutlineDesignServices className="dark:text-brand-white text-brand-secondary text-[20px] sm:text-[24px] md:text-[35px]" />
      ),
    },
    {
      title: "Expert 24/7 Monitoring",
      description:
        "Our professional monitoring team ensures 24/7 vigilance to detect, deter, and respond to any threats instantly.",
      icon: (
        <FaHeadphones className="dark:text-brand-white text-brand-secondary text-[20px] sm:text-[24px] md:text-[35px]" />
      ),
    },
    {
      title: "Dedicated Service Techs",
      description:
        "Our certified technicians provide prompt, professional support and maintenance to keep your systems at peak performance.",
      icon: (
        <FaTools className="dark:text-brand-white text-brand-secondary text-[20px] sm:text-[24px] md:text-[35px]" />
      ),
    },
    {
      title: "Connected Wi-Fi",
      description:
        "Ensure fast, secure, and seamless connectivity across your entire space with our advanced Wi-Fi networking solutions.",
      icon: (
        <MdWifiTethering className="dark:text-brand-white text-brand-secondary text-[20px] sm:text-[24px] md:text-[35px]" />
      ),
    },
    {
      title: "Security, Video Intercom",
      description:
        "Comprehensive protection with our integrated systems including security alarms, fire detection, CCTV, and intercom solutions.",
      icon: (
        <MdSecurity className="dark:text-brand-white text-brand-secondary text-[20px] sm:text-[24px] md:text-[35px]" />
      ),
    },
  ];

  return (
    <div className="absolute left-0 right-0 translate-y-[-50%] z-40 max-w-7xl mx-auto ">
      <CustomSwiper
        spaceBetween={30}
        slidePerView={3}
        pagination={false}
        loop={false}
      >
        <div className="grid sm:grid-cols-2 mb-5 md:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <ServiceCard plan={service} index={index} />
            </SwiperSlide>
          ))}
        </div>
      </CustomSwiper>
    </div>
  );
}
