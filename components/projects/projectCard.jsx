import React from "react";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { slideIn } from "@/utils/motion";
import { motionDelay } from "../api/axiosInstance";
import { motion } from "framer-motion";
import Image from "next/image";

const ProjectCard = ({ project, index }) => {
  const router = useRouter();

  const handleViewDetails = () => {
    router.push(`/projects/${project?.id}`);
  };

  return (
    <motion.div
      className="group relative bg-gray-800 rounded-2xl overflow-hidden cursor-pointer"
      variants={slideIn("up", motionDelay * index)}
    >
      <div className="relative h-52 sm:h-64 md:h-96 overflow-hidden">
        <Image
          src={project?.image}
          alt={project?.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div> */}
      </div>
      {/* 
      <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6">
        <span className="bg-white backdrop-blur-sm text-black text-xs px-3 py-1 rounded-full kumbh_sans_medium border border-white/30">
          {project?.category}
        </span>
        <h3 className="text-white text-lg sm:text-xl kumbh_sans_semibold my-1 sm:my-2">
          {project?.title}
        </h3>
        <button
          onClick={handleViewDetails}
          className="flex items-center gap-2 text-white/80 hover:text-white text-sm kumbh_sans_semibold transition-colors duration-200"
        >
          <span>See Details</span>
          <div className="w-6 h-6 bg-white backdrop-blur-sm text-black rounded-full flex items-center justify-center">
            <ChevronRight size={14} />
          </div>
        </button>
      </div> */}
    </motion.div>
  );
};

export default ProjectCard;
