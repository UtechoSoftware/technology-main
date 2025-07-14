"use client";
import React, { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import SectionHeading from "../common/sectionHeading";
import { motion } from "framer-motion";
import { slideIn, staggerContainer } from "@/utils/motion";
import {
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  project7,
  project8,
  project9,
  project10,
  project11,
  project12,
  project13,
  project14,
  project15,
  project16,
  project17,
  project18,
  project19,
  project20,
  project21,
  project22,
  project23,
  project24,
  project25,
  project26,
  project27,
  project28,
} from "@/public/assets/images";
import Image from "next/image";
import { motionDelay } from "../api/axiosInstance";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const ProjectCardsWithPagination = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const projects = [
    {
      id: 1,
      title: "Project Big House",
      category: "Multi Family",
      image: project1,
      type: "kitchen",
    },
    {
      id: 2,
      title: "Project Big House",
      category: "Multi Family",
      image: project2,
      type: "living",
    },
    {
      id: 3,
      title: "Project Big House",
      category: "Multi Family",
      image: project3,
      type: "modern",
    },
    {
      id: 4,
      title: "Project Big House",
      category: "Multi Family",
      image: project4,
      type: "futuristic",
    },
    {
      id: 5,
      title: "Project Big House",
      category: "Multi Family",
      image: project5,
      type: "luxury",
    },
    {
      id: 6,
      title: "Project Big House",
      category: "Multi Family",
      image: project6,
      type: "office",
    },
    {
      id: 7,
      title: "Project Big House",
      category: "Multi Family",
      image: project7,
      type: "kitchen2",
    },
    {
      id: 8,
      title: "Project Big House",
      category: "Multi Family",
      image: project8,
      type: "complex",
    },
    {
      id: 9,
      title: "Project Big House",
      category: "Multi Family",
      image: project9,
      type: "villa",
    },
    {
      id: 10,
      title: "Project Big House",
      category: "Multi Family",
      image: project10,
      type: "townhouse",
    },
    {
      id: 11,
      title: "Project Big House",
      category: "Multi Family",
      image: project11,
      type: "apartment",
    },
    {
      id: 12,
      title: "Project Big House",
      category: "Multi Family",
      image: project12,
      type: "exterior",
    },
    {
      id: 13,
      title: "Project Big House",
      category: "Multi Family",
      image: project13,
      type: "kitchen",
    },
    {
      id: 14,
      title: "Project Big House",
      category: "Multi Family",
      image: project14,
      type: "living",
    },
    {
      id: 15,
      title: "Project Big House",
      category: "Multi Family",
      image: project15,
      type: "modern",
    },
    {
      id: 16,
      title: "Project Big House",
      category: "Multi Family",
      image: project16,
      type: "futuristic",
    },
    {
      id: 17,
      title: "Project Big House",
      category: "Multi Family",
      image: project17,
      type: "luxury",
    },
    {
      id: 18,
      title: "Project Big House",
      category: "Multi Family",
      image: project18,
      type: "office",
    },
    {
      id: 19,
      title: "Project Big House",
      category: "Multi Family",
      image: project19,
      type: "kitchen2",
    },
    {
      id: 20,
      title: "Project Big House",
      category: "Multi Family",
      image: project20,
      type: "complex",
    },
    {
      id: 21,
      title: "Project Big House",
      category: "Multi Family",
      image: project21,
      type: "villa",
    },
    {
      id: 23,
      title: "Project Big House",
      category: "Multi Family",
      image: project23,
      type: "apartment",
    },
    {
      id: 24,
      title: "Project Big House",
      category: "Multi Family",
      image: project24,
      type: "exterior",
    },
    {
      id: 25,
      title: "Project Big House",
      category: "Multi Family",
      image: project25,
      type: "kitchen",
    },
    {
      id: 26,
      title: "Project Big House",
      category: "Multi Family",
      image: project26,
      type: "living",
    },
    {
      id: 27,
      title: "Project Big House",
      category: "Multi Family",
      image: project27,
      type: "modern",
    },
    {
      id: 28,
      title: "Project Big House",
      category: "Multi Family",
      image: project28,
      type: "futuristic",
    },
  ];

  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProjects = projects.slice(startIndex, startIndex + itemsPerPage);

  // Fixed: Handle image click properly
  const handleImageClick = (globalIndex) => {
    setActiveImageIndex(globalIndex);
    setLightboxOpen(true);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Force re-render of animations by scrolling to top
    // window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      // window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      // window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Convert all projects to lightbox format
  const lightboxImages = projects.map((project) => ({
    src: project.image.src || project.image, // Handle both Next.js Image imports and direct URLs
    alt: project.title,
    caption: `${project.title} - ${project.category}`,
  }));

  return (
    <motion.div
      className="dark:bg-gradienttbsmooth bg-brand-ligthSecondary py-8 md:py-16 px-4"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          heading1="All Projects"
          heading2="We Design, Build, and Manage Security & Low Voltage Infrastructure Solutions"
          className="text-center mb-6"
        />

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12">
          {currentProjects.map((project, index) => {
            // Calculate the global index for the lightbox
            const globalIndex = startIndex + index;

            return (
              <motion.div
                key={`${project.id}-${currentPage}`} // Unique key for each page
                className="group relative bg-gray-800 rounded-2xl overflow-hidden cursor-pointer"
                variants={slideIn("up", motionDelay * index)}
                initial="hidden"
                animate="show"
                onClick={() => handleImageClick(globalIndex)} // Fixed: Added click handler
              >
                <div className="relative h-52 sm:h-64 md:h-96 overflow-hidden">
                  <Image
                    src={project?.image}
                    alt={project?.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="flex justify-center items-center gap-4">
          {/* Previous Button */}
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 ${
              currentPage === 1
                ? "bg-gray-700 text-gray-500 cursor-not-allowed"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white"
            }`}
          >
            <ChevronLeft size={20} />
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`w-12 h-12 rounded-full flex items-center justify-center kumbh_sans_semibold transition-all duration-200 ${
                currentPage === index + 1
                  ? "bg-brand-secondary text-white shadow-lg transform scale-110"
                  : "bg-brand-ligthSecondaryDark dark:bg-brand-secondary/10 text-brand-black dark:text-brand-muted hover:bg-brand-secondary hover:text-white"
              }`}
            >
              {index + 1}
            </button>
          ))}

          {/* Next Button */}
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 ${
              currentPage === totalPages
                ? "bg-gray-700 text-gray-500 cursor-not-allowed"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white"
            }`}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Fixed: Image Lightbox with proper slides */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={lightboxImages}
        index={activeImageIndex}
        on={{
          view: ({ index }) => setActiveImageIndex(index),
        }}
      />
    </motion.div>
  );
};

export default ProjectCardsWithPagination;
