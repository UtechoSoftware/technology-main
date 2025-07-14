import React from "react";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const CustomSwiper = ({
  spaceBetween = 5, // Reduced default spacing
  pagination = true,
  loop = true,
  navigation = true,
  children,
}) => {
  return (
    <section className="px-3">
      <div className="relative flex items-center gap-4">
        <div className="hidden sm:flex custom-prev bg-[#236A7638] w-[30px] h-[30px] rounded-full items-center justify-center cursor-pointer p-1">
          <IoChevronBack className="text-white text-[25px]" />
        </div>
        <Swiper
          spaceBetween={spaceBetween}
          loop={loop}
          navigation={
            navigation
              ? {
                  nextEl: ".custom-next",
                  prevEl: ".custom-prev",
                }
              : false
          }
          pagination={pagination}
          modules={[Navigation, Pagination]}
          className="mySwiper mx-3 h-full"
          breakpoints={{
            // Small screens - minimal spacing
            0: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            // Medium screens - small spacing
            768: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            // Large screens - moderate spacing
            1024: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1200: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1440: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          {children}
        </Swiper>
        <div className="hidden sm:flex custom-next bg-[#236A7638] w-[30px] h-[30px] rounded-full items-center justify-center cursor-pointer p-1">
          <IoChevronForward className="text-white text-[25px]" />
        </div>
      </div>
    </section>
  );
};

export default CustomSwiper;
