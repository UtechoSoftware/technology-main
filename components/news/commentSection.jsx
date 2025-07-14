"use client";
import { slideIn, staggerContainer } from "@/utils/motion";
import { Button, Input, Textarea } from "@heroui/react";
import { Mail, MessageSquare, User } from "lucide-react";
import { motion } from "framer-motion";
import { motionDelay } from "../api/axiosInstance";

export default function CommentSection() {
  return (
    <motion.div
      className="my-6 dark:bg-cardGradient bg-brand-ligthSecondary rounded-3xl p-4 md:p-8"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      {/* Comments Header */}
      <h2 className="text-2xl kumbh_sans_semibold text-brand-black dark:text-white">
        Leave Reply
      </h2>
      <p className="text-brand-muted text-sm kumbh_sans_regular mb-6">
        Email won't be shared. Required fields are marked *.
      </p>

      <div className="space-y-6">
        {/* Name and Email Row */}
        <div className="grid md:grid-cols-2 gap-4">
          <motion.div className="" variants={slideIn("up", motionDelay, true)}>
            <Input
              type="text"
              placeholder="Name"
              variant="bordered"
              size="lg"
              endContent={<User className="w-5 h-5 text-gray-400" />}
              classNames={{
                input:
                  "text-brand-black dark:text-white placeholder:text-gray-500",
                inputWrapper:
                  "border-brand-secondary hover:border-brand-secondaryDark/50 focus-within:!border-brand-secondary rounded-2xl h-14",
              }}
            />
          </motion.div>
          <motion.div className="" variants={slideIn("up", motionDelay, true)}>
            <Input
              type="email"
              placeholder="Email"
              variant="bordered"
              size="lg"
              endContent={<Mail className="w-5 h-5 text-gray-400" />}
              classNames={{
                input: "text-white placeholder:text-gray-500",
                inputWrapper:
                  "border-brand-secondary hover:border-brand-secondaryDark/50 focus-within:!border-brand-secondary rounded-ful2xll h-14",
              }}
            />
          </motion.div>
        </div>

        {/* Message */}
        <motion.div className="" variants={slideIn("up", motionDelay, true)}>
          <Textarea
            placeholder="Write Message"
            variant="bordered"
            size="lg"
            minRows={4}
            maxRows={6}
            endContent={
              <MessageSquare className="w-5 h-5 text-gray-400 mt-1" />
            }
            classNames={{
              input: "text-white placeholder:text-gray-500",
              inputWrapper:
                "border-brand-secondary hover:border-brand-secondaryDark/50 focus-within:!border-brand-secondary rounded-2xl h-14",
            }}
          />
        </motion.div>

        {/* Submit Button */}
        <div>
          <Button
            size="lg"
            className="w-full bg-brand-secondary border border-brand-secondary hover:bg-brand-secondaryDark text-white font-semibold py-4 rounded-2xl transition-all duration-300 shadow-lg"
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
        </div>
      </div>
    </motion.div>
  );
}
