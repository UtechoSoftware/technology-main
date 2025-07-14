"use client";
import { motion } from "framer-motion";
import { Input, Textarea, Button, Select, SelectItem } from "@heroui/react";
import { User, Mail, Phone, Briefcase, MessageSquare } from "lucide-react";
import SectionHeading from "../common/sectionHeading";
import { matrixGlitch, slideIn, staggerContainer } from "@/utils/motion";
import { motionDelay } from "../api/axiosInstance";

export default function ContactSection() {
  const services = [
    { key: "audio-video", label: "Audio/Video Solutions" },
    { key: "media-rooms", label: "Media Across Rooms" },
    { key: "ambiance", label: "Perfect Ambiance" },
    { key: "integrated", label: "Integrated Systems" },
    { key: "other", label: "Other" },
  ];

  return (
    <motion.section
      className="dark:bg-gradienttrblsmooth bg-brand-ligthSecondaryDark dark:text-white text-brand-dark py-8 md:py-16 px-4 relative overflow-hidden"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-16 items-start">
          {/* Left Side - Content */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <SectionHeading
                heading1="Contact Us"
                heading2="Ready to elevate your protection with tailored integrated technology solutions?"
                className="mb-6 flex items-center justify-center lg:items-start flex-col"
              />
              <motion.p
                className="dark:text-gray-400 text-center lg:text-start text-brand-muted text-lg leading-relaxed max-w-3xl mx-auto"
                variants={matrixGlitch(motionDelay)}
              >
                We're here to help with any questions, concerns, or support you
                may need. Whether you're looking for more information about our
                services or need assistance with a specific request, our team is
                ready to assist. Reach out to us anytime — your protection and
                peace of mind are our top priorities.
              </motion.p>
            </div>

            {/* Contact Info */}
            <motion.div
              className="flex items-center gap-4"
              variants={slideIn("left", motionDelay, false)}
            >
              <div className="p-3 dark:bg-brand-secondary/20 bg-brand-ligthSecondary rounded-xl">
                <Mail className="w-6 h-6 text-brand-secondary" />
              </div>
              <div>
                <h3 className="dark:text-white text-brand-dark poppins_semibold text-lg mb-1">
                  Email
                </h3>
                <a
                  href="mailto:ptservice@protectllc.us"
                  className="dark:text-gray-400 text-brand-muted hover:text-brand-secondary transition-colors"
                >
                  ptservice@protectllc.us
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="sm:p-8 rounded-3xl"
            variants={slideIn("up", motionDelay, true)}
          >
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  type="text"
                  placeholder="Name"
                  variant="bordered"
                  size="lg"
                  endContent={
                    <User className="w-5 h-5 dark:text-gray-400 text-brand-muted" />
                  }
                  classNames={{
                    input:
                      "dark:text-white text-brand-dark dark:placeholder:text-gray-500 placeholder:text-brand-muted",
                    inputWrapper:
                      "dark:bg-gray-800/50 bg-brand-white dark:border-gray-700 border-brand-secondary2/30 hover:border-brand-secondary/50 focus-within:!border-brand-secondary h-14",
                  }}
                />
                <Input
                  type="email"
                  placeholder="Email"
                  variant="bordered"
                  size="lg"
                  endContent={
                    <Mail className="w-5 h-5 dark:text-gray-400 text-brand-muted" />
                  }
                  classNames={{
                    input:
                      "dark:text-white text-brand-dark dark:placeholder:text-gray-500 placeholder:text-brand-muted",
                    inputWrapper:
                      "dark:bg-gray-800/50 bg-brand-white dark:border-gray-700 border-brand-secondary2/30 hover:border-brand-secondary/50 focus-within:!border-brand-secondary h-14",
                  }}
                />
              </div>

              {/* Phone and Service Row */}
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  type="tel"
                  placeholder="Number"
                  variant="bordered"
                  size="lg"
                  endContent={
                    <Phone className="w-5 h-5 dark:text-gray-400 text-brand-muted" />
                  }
                  classNames={{
                    input:
                      "dark:text-white text-brand-dark dark:placeholder:text-gray-500 placeholder:text-brand-muted",
                    inputWrapper:
                      "dark:bg-gray-800/50 bg-brand-white dark:border-gray-700 border-brand-secondary2/30 hover:border-brand-secondary/50 focus-within:!border-brand-secondary h-14",
                  }}
                />
                <Select
                  placeholder="Service"
                  variant="bordered"
                  size="lg"
                  endContent={
                    <Briefcase className="w-5 h-5 dark:text-gray-400 text-brand-muted" />
                  }
                  classNames={{
                    trigger:
                      "dark:bg-gray-800/50 bg-brand-white dark:border-gray-700 border-brand-secondary2/30 hover:border-brand-secondary/50 data-[open=true]:border-brand-secondary h-14",
                    value: "dark:text-white text-brand-dark",
                    popoverContent:
                      "dark:bg-gray-800 bg-brand-white dark:text-white text-brand-dark dark:border-gray-700 border-brand-secondary2/30",
                    listboxWrapper: "max-h-[400px]",
                  }}
                >
                  {services.map((service) => (
                    <SelectItem
                      key={service.key}
                      value={service.key}
                      classNames={{
                        base: "dark:text-white text-brand-dark dark:hover:bg-gray-700 hover:bg-brand-ligthSecondary data-[selected=true]:bg-brand-secondary/20 dark:data-[selected=true]:text-red-400 data-[selected=true]:text-brand-secondary",
                      }}
                    >
                      {service.label}
                    </SelectItem>
                  ))}
                </Select>
              </div>

              {/* Message */}
              <Textarea
                placeholder="Write Message"
                variant="bordered"
                size="lg"
                minRows={4}
                maxRows={6}
                endContent={
                  <MessageSquare className="w-5 h-5 dark:text-gray-400 text-brand-muted mt-1" />
                }
                classNames={{
                  input:
                    "dark:text-white text-brand-dark dark:placeholder:text-gray-500 placeholder:text-brand-muted",
                  inputWrapper:
                    "dark:bg-gray-800/50 bg-brand-white dark:border-gray-700 border-brand-secondary2/30 hover:border-brand-secondary/50 focus-within:!border-brand-secondary min-h-[120px]",
                }}
              />

              {/* Submit Button */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size="lg"
                  className="w-full bg-brand-secondary border border-brand-secondary hover:bg-brand-secondaryDark text-white poppins_semibold py-4 rounded-2xl transition-all duration-300 shadow-lg"
                  endContent={
                    <svg
                      className="w-5 h-5 ml-2"
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
                  }
                >
                  Submit Now
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
