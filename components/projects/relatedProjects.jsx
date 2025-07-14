"use client";
import { Button } from "@heroui/react";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionHeading from "../common/sectionHeading";
import ProjectCard from "./projectCard";

export default function RelatedProjects() {
  const projectsData = [
    {
      id: 1,
      title: "Modern Villa Complex",
      category: "Residential",
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop",
      type: "villa",
    },
    {
      id: 2,
      title: "Luxury Apartment Tower",
      category: "Multi Family",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      type: "apartment",
    },
    {
      id: 3,
      title: "Contemporary Office Building",
      category: "Commercial",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop",
      type: "office",
    },
    {
      id: 4,
      title: "Smart Home Design",
      category: "Single Family",
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&h=300&fit=crop",
      type: "smart-home",
    },
    {
      id: 5,
      title: "Urban Townhouse",
      category: "Multi Family",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop",
      type: "townhouse",
    },
    {
      id: 6,
      title: "Eco-Friendly Complex",
      category: "Green Building",
      image:
        "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=400&h=300&fit=crop",
      type: "eco-friendly",
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
    <section className="py-8 sm:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
          <div className="lg:w-[35%] mt-8">
            <div className="flex flex-col gap-3 md:gap-4">
              <h2 className="text-base capitalize kumbh_sans_regular text-brand-dark">
                <span className="text-brand-secondary">Our Projects</span>
              </h2>
              <p className="text-brand-dark dark:text-brand-white max-w-3xl m-auto kumbh_sans_semibold text-3xl">
                A Showcase of security technologyExcellence
              </p>
              <p className="text-brand-muted text-sm m-auto kumbh_sans_regular">
                Explore our diverse range of tech security solutions and
                services. Discover how our innovative approach safeguards
                digital assets.
              </p>
            </div>
            <div className="mt-8">
              <Button className="bg-brand-secondary hover:bg-brand-secondaryDark text-white px-6 py-3 rounded-full kumbh_sans_medium transition-colors duration-300 flex items-center gap-2">
                View more Projects
              </Button>
            </div>
          </div>
          <div className="lg:w-[65%] mt-8 lg:mt-0">
            <div className="flex justify-end mb-6 gap-2">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all duration-300 projects-swiper-button-prev"
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
                className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all duration-300 projects-swiper-button-next"
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

            <div className="relative">
              <Swiper
                ref={swiperRef}
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={24}
                slidesPerView={1}
                navigation={{
                  prevEl: ".projects-swiper-button-prev",
                  nextEl: ".projects-swiper-button-next",
                }}
                pagination={false}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  380: {
                    slidesPerView: 1.2,
                  },
                  768: {
                    slidesPerView: 1.8,
                  },
                  1024: {
                    slidesPerView: 2.2,
                  },
                }}
                className="projects-swiper"
              >
                {projectsData.map((project) => (
                  <SwiperSlide key={project.id}>
                    <div className="h-full">
                      <ProjectCard project={project} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="projects-swiper-pagination flex justify-center mt-6"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
