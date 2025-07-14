"use client";
import { Button } from "@heroui/react";
import React from "react";

const ContactFooter = () => {
  return (
    <div className="bg-brand-ligthSecondaryDark dark:bg-brand-secondaryDark py-4 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="h-full dark:bg-cardGradient bg-brand-ligthSecondary shadow-medium  rounded-3xl p-8 md:p-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 md:gap-8">
            {/* Heading */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-brand-dark dark:text-white text-2xl md:text-3xl font-bold kumbh_sans_semibold leading-tight">
                Discover How We Can{" "}
                <span className="text-brand-secondary">Support</span> Your
                Secure Advancement.
              </h2>
            </div>
            {/* Button */}
            <div className="flex-shrink-0">
              <Button
                className="w-full bg-brand-secondary border border-brand-secondary hover:bg-brand-secondaryDark text-white font-semibold py-5 text-base rounded-2xl transition-all duration-300 shadow-lg"
                endContent={
                  <svg
                    className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200"
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
                Let's Start
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFooter;
