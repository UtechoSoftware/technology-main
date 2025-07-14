"use client";

import React, { useState } from "react";
import {
  ChevronRight,
  ArrowLeft,
  Play,
  MapPin,
  Calendar,
  Building,
  DollarSign,
  User,
} from "lucide-react";
import PageSection from "@/components/common/pageSection";
import RelatedProjects from "@/components/projects/relatedProjects";

const Page = () => {
  const [showProjectList, setShowProjectList] = useState(false);
  const [selectedProject, setSelectedProject] = useState(1);

  const projects = [
    {
      id: 1,
      title: "Electronic Locking Systems In Offices",
      category: "Office Buildings",
      client: "ABC office security",
      location: "Chapel Hill Street stamford",
      date: "10 January, 2025",
      cost: "12,30,00",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
      description:
        "Our range of electronic locking systems are bound to fit the needs of your company. As the very first United States partner of iLOQ, the first sustainable, battery-free solution in the world. As well as many others, we can help guide you to the best solution for your company. Each of these systems has their own strengths in limiting individuals' access to buildings, limiting what times the building is open overall (or for specific individuals), and providing control to management to decide what other restrictions they see fit.",
      videoThumbnail:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
      features: [
        "Strengths in Limiting Individuals'",
        "Access To Buildings",
        "What Times The Building Is Open Overall",
        "Providing Control To Management",
      ],
    },
    {
      id: 2,
      title: "Modern Kitchen Security Systems",
      category: "Multi Family",
      client: "Residential Complex Ltd",
      location: "Downtown Manhattan",
      date: "15 February, 2025",
      cost: "18,50,00",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      description:
        "Comprehensive security solution for modern kitchen facilities in multi-family residential buildings. Our CCTV systems solution is another one of our popular additions for many buildings. If you provide us with the floorplan of your building/office, we can provide the best places for cameras for both the interior and exterior.",
      videoThumbnail:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
      features: [
        "24/7 Monitoring Systems",
        "Smart Access Control",
        "Emergency Response Integration",
        "Remote Management Capabilities",
      ],
    },
  ];

  const currentProject =
    projects.find((p) => p.id === selectedProject) || projects[0];

  if (showProjectList) {
    return (
      <div className="min-h-screen bg-brand-ligthSecondary dark:bg-brand-secondary text-white">
        {/* Header with back button */}
        <div className="bg-brand-ligthSecondaryDark dark:bg-brand-secondary p-4">
          <div className="max-w-7xl mx-auto flex items-center gap-4">
            <button
              onClick={() => setShowProjectList(false)}
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Back to Details</span>
            </button>
            <h1 className="text-xl kumbh_sans_bold">All Projects</h1>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="max-w-7xl mx-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => {
                  setSelectedProject(project.id);
                  setShowProjectList(false);
                }}
                className="group relative bg-brand-ligthSecondary dark:bg-brand-secondaryDark rounded-2xl overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full border border-white/30">
                    {project.category}
                  </span>
                  <h3 className="text-white text-lg kumbh_sans_semibold my-2">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 text-white/80 text-sm">
                    <span>View Details</span>
                    <ChevronRight size={14} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-ligthSecondaryDark dark:bg-gradienttbsmooth text-white">
      <PageSection title="Projects" breadcrumb="Project Detail" />
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8 p-5 rounded-3xl bg-brand-ligthSecondary dark:bg-cardGradient">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={currentProject.image}
                alt={currentProject.title}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>

            <div className="space-y-6">
              <h1 className="text-3xl kumbh_sans_semibold dark:text-white text-brand-dark">
                {currentProject.title}
              </h1>

              <p className="text-brand-muted text-lg leading-relaxed">
                {currentProject.description}
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl kumbh_sans_semibold dark:text-white text-brand-dark">
                Project Details
              </h2>

              <p className="text-brand-muted leading-relaxed">
                Our CCTV systems solution is another one of our popular
                additions for many buildings. If you provide us with the
                floorplan of your building/office, we can provide the best
                places for cameras for both the interior and exterior.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative group cursor-pointer">
                <img
                  src={currentProject.videoThumbnail}
                  alt="Video thumbnail"
                  className="w-full h-64 object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-black/40 rounded-xl flex items-center justify-center group-hover:bg-black/60 transition-colors">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Play className="text-white ml-1" size={24} />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl kumbh_sans_semibold dark:text-white text-brand-dark">
                  Secur Preventing the World
                </h3>
                <p className="text-brand-muted">
                  We are a one stop shop for all your security and internet
                  office system needs installing CCTV cameras in offices.
                </p>

                <div className="space-y-3">
                  {currentProject.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-brand-secondary rounded-full"></div>
                      <span className="text-brand-dark dark:text-brand-muted">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Project Information Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-brand-ligthSecondary dark:bg-cardGradient rounded-2xl p-6">
              <h3 className="text-xl kumbh_sans_bold text-brand-dark dark:text-white mb-6">
                Project Information
              </h3>

              <div className="space-y-4">
                <div className="bg-brand-ligthSecondaryDark shadow-medium dark:bg-[#000916] rounded-full p-4">
                  <div className="flex items-center gap-3">
                    <div className="min-w-10">
                      <div className="w-10 h-10 bg-[#f5f5f5] shadow-md dark:bg-[#311414] rounded-full flex items-center justify-center">
                        <User size={16} className="text-brand-secondary" />
                      </div>
                    </div>
                    <div className="flex flex-col w-full">
                      <span className="text-brand-black dark:text-white text-base lg:text-lg kumbh_sans_semibold">
                        Client:
                      </span>
                      <span className="text-brand-muted text-sm">
                        {currentProject.client}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-brand-ligthSecondaryDark shadow-medium dark:bg-[#000916] rounded-full p-4">
                  <div className="flex items-center gap-3">
                    <div className="min-w-10">
                      <div className="w-10 h-10 bg-[#f5f5f5] shadow-md dark:bg-[#311414] rounded-full flex items-center justify-center">
                        <MapPin size={16} className="text-brand-secondary" />
                      </div>
                    </div>
                    <div className="flex flex-col w-full">
                      <span className="text-brand-black dark:text-white text-base lg:text-lg kumbh_sans_semibold">
                        Location:
                      </span>
                      <span className="text-brand-muted text-sm">
                        {currentProject.location}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-brand-ligthSecondaryDark shadow-medium dark:bg-[#000916] rounded-full p-4">
                  <div className="flex items-center gap-3">
                    <div className="min-w-10">
                      <div className="w-10 h-10 bg-[#f5f5f5] shadow-md dark:bg-[#311414] rounded-full flex items-center justify-center">
                        <Calendar size={16} className="text-brand-secondary" />
                      </div>
                    </div>
                    <div className="flex flex-col w-full">
                      <span className="dark:text-white text-brand-black text-base lg:text-lg kumbh_sans_semibold">
                        Project Date:
                      </span>
                      <span className="text-brand-muted text-sm">
                        {currentProject.date}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-brand-ligthSecondaryDark shadow-medium dark:bg-[#000916] rounded-full p-4">
                  <div className="flex items-center gap-3">
                    <div className="min-w-10">
                      <div className="w-10 h-10 bg-[#f5f5f5] shadow-md dark:bg-[#311414] rounded-full flex items-center justify-center">
                        <Building size={16} className="text-brand-secondary" />
                      </div>
                    </div>
                    <div className="flex flex-col w-full">
                      <span className="dark:text-white text-brand-black text-base lg:text-lg kumbh_sans_semibold">
                        Category:
                      </span>
                      <span className="text-brand-muted text-sm">
                        {currentProject.category}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-brand-ligthSecondaryDark shadow-medium dark:bg-[#000916] rounded-full p-4">
                  <div className="flex items-center gap-3">
                    <div className="min-w-10">
                      <div className="w-10 h-10 bg-[#f5f5f5] shadow-md dark:bg-[#311414] rounded-full flex items-center justify-center">
                        <DollarSign
                          size={16}
                          className="text-brand-secondary"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col w-full">
                      <span className="dark:text-white text-brand-black text-base lg:text-lg kumbh_sans_semibold">
                        Cost:
                      </span>
                      <span className="text-brand-muted text-sm">
                        {currentProject.cost}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <RelatedProjects />
      </div>
    </div>
  );
};

export default Page;
