"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { motionDelay } from "../api/axiosInstance";

// Import CSS modules
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SbpPtSlider = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of all images from sbp-pt folder
  const images = [
    {
      src: "/sbp-pt/Devils PT Jumbotron Branding.jpg",
      alt: "Devils PT Jumbotron Branding",
    },
    {
      src: "/sbp-pt/Devils PT TV Branding.jpg",
      alt: "Devils PT TV Branding",
    },
    {
      src: "/sbp-pt/Dolphins PT Outside Videoboard Branding.jpg",
      alt: "Dolphins PT Outside Videoboard Branding",
    },
    {
      src: "/sbp-pt/Dolphins PT Ribbon Branding.jpg",
      alt: "Dolphins PT Ribbon Branding",
    },
    {
      src: "/sbp-pt/Dophins PT Videoboard Branding.jpg",
      alt: "Dolphins PT Videoboard Branding",
    },
    {
      src: "/sbp-pt/Jets PT Outside Branding.jpg",
      alt: "Jets PT Outside Branding",
    },
    {
      src: "/sbp-pt/Jets PT Ribbon Branding Closeup.jpg",
      alt: "Jets PT Ribbon Branding Closeup",
    },
    {
      src: "/sbp-pt/Nets PT Jumbotron Branding.jpg",
      alt: "Nets PT Jumbotron Branding",
    },
    {
      src: "/sbp-pt/Nets PT Outside Branding.jpg",
      alt: "Nets PT Outside Branding",
    },
  ];

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    document.body.style.overflow = "unset";
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") goToNext();
    if (e.key === "ArrowLeft") goToPrevious();
  };

  return (
    <>
      <motion.div
        className="dark:bg-brand-secondaryDark bg-brand-ligthSecondaryDark relative overflow-hidden px-4 py-16"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: motionDelay }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={fadeIn("up", motionDelay)} className="relative">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              loop={true}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 1.5,
                  spaceBetween: 20,
                },
              }}
              className="rounded-2xl swiper-container"
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] bg-gray-900 rounded-lg overflow-hidden cursor-pointer group"
                    onClick={() => openLightbox(index)}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-contain transition-transform duration-300 group-hover:scale-105"
                      priority={index < 2}
                      quality={90}
                    />
                    {/* Overlay hint */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                      <svg
                        className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                        />
                      </svg>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>

        {/* Custom Swiper Styles */}
        <style jsx global>{`
          .swiper-container {
            padding: 20px 0 50px 0;
          }

          .swiper-button-next,
          .swiper-button-prev {
            color: #fff;
            background: rgba(0, 0, 0, 0.6);
            width: 45px;
            height: 45px;
            border-radius: 50%;
            transition: all 0.3s ease;
          }

          .swiper-button-next:after,
          .swiper-button-prev:after {
            font-size: 18px;
            font-weight: bold;
          }

          .swiper-button-next:hover,
          .swiper-button-prev:hover {
            background: rgba(0, 0, 0, 0.9);
            transform: scale(1.1);
          }

          .swiper-pagination {
            bottom: 10px !important;
          }

          .swiper-pagination-bullet {
            background: #fff;
            opacity: 0.5;
            width: 10px;
            height: 10px;
            transition: all 0.3s ease;
          }

          .swiper-pagination-bullet-active {
            opacity: 1;
            background: #932724;
            width: 30px;
            border-radius: 5px;
          }

          @media (max-width: 768px) {
            .swiper-button-next,
            .swiper-button-prev {
              width: 35px;
              height: 35px;
            }

            .swiper-button-next:after,
            .swiper-button-prev:after {
              font-size: 14px;
            }
          }
        `}</style>
      </motion.div>

      {/* Fullscreen Lightbox */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black bg-opacity-95 flex items-center justify-center"
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-[10000] text-white hover:text-gray-300 transition-colors"
              aria-label="Close lightbox"
            >
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Image counter */}
            <div className="absolute top-4 left-4 z-[10000] text-white text-lg font-semibold">
              {currentImageIndex + 1} / {images.length}
            </div>

            {/* Previous button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 z-[10000] text-white hover:text-gray-300 transition-colors p-2 bg-black bg-opacity-50 rounded-full"
              aria-label="Previous image"
            >
              <svg
                className="w-8 h-8"
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

            {/* Image container */}
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative w-[90vw] h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[currentImageIndex].src}
                alt={images[currentImageIndex].alt}
                fill
                className="object-contain"
                quality={100}
                priority
              />
            </motion.div>

            {/* Next button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 z-[10000] text-white hover:text-gray-300 transition-colors p-2 bg-black bg-opacity-50 rounded-full"
              aria-label="Next image"
            >
              <svg
                className="w-8 h-8"
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

            {/* Image caption */}
            <div className="absolute bottom-4 left-0 right-0 text-center text-white text-lg px-4">
              {images[currentImageIndex].alt}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SbpPtSlider;