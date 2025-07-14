"use client";
import { contactUsImage } from "@/public/assets/images";
import { Button } from "@heroui/react";
import Image from "next/image";
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.number.trim()) newErrors.number = "Number is required";
    if (!formData.service.trim()) newErrors.service = "Service is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Handle form submission
      console.log("Form submitted:", formData);
      // Reset form
      setFormData({
        name: "",
        email: "",
        number: "",
        service: "",
        message: "",
      });
      setErrors({});
    }
  };

  return (
    <div className="dark:bg-brand-secondaryDark bg-brand-ligthSecondaryDark py-8 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-brand-secondary text-sm kumbh_sans_medium mb-2 px-3 py-1 rounded-full bg-[#f5f5f5] dark:bg-[#2A1313]">
            Get In Touch
          </span>
          <h2 className="text-3xl capitalize kumbh_sans_semibold  text-brand-dark dark:text-white my-4">
            Ready to discuss your security technology needs?
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-12">
          {/* Map Section */}
          <div className="dark:bg-brand-secondaryDark bg-brand-ligthSecondaryDark rounded-3xl overflow-hidden h-[300px] md:h-[400px] lg:h-auto">
            <div className="relative h-full">
              <Image
                src={contactUsImage}
                alt="map"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 "></div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="dark:bg-cardGradient bg-brand-ligthSecondary h-full rounded-3xl px-4 py-8 md:px-8">
            <h3 className="text-brand-dark dark:text-white text-3xl text-center kumbh_sans_semibold mb-4 md:mb-8 order-1 md:order-2">
              How May We Help You!
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full bg-transparent text-white placeholder-gray-400 px-4 py-3 rounded-3xl border border-gray-600 ${
                      errors.name ? "border-brand-secondary" : "border-gray-600"
                    } focus:border-brand-secondary focus:outline-none transition-colors`}
                  />
                  {errors.name && (
                    <span className="text-brand-secondary text-xs mt-1 flex items-center">
                      <span className="mr-1">*</span>
                      {errors.name}
                    </span>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full bg-transparent text-white placeholder-gray-400 px-4 py-3 rounded-3xl border border-gray-600 ${
                      errors.email
                        ? "border-brand-secondary"
                        : "border-gray-600"
                    } focus:border-brand-secondary focus:outline-none transition-colors`}
                  />
                  {errors.email && (
                    <span className="text-brand-secondary text-xs mt-1 flex items-center">
                      <span className="mr-1">*</span>
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              {/* Number and Service Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="tel"
                    name="number"
                    placeholder="Number"
                    value={formData.number}
                    onChange={handleInputChange}
                    className={`w-full bg-transparent text-white placeholder-gray-400 px-4 py-3 rounded-3xl border border-gray-600 ${
                      errors.number
                        ? "border-brand-secondary"
                        : "border-gray-600"
                    } focus:border-brand-secondary focus:outline-none transition-colors`}
                  />
                  {errors.number && (
                    <span className="text-brand-secondary text-xs mt-1 flex items-center">
                      <span className="mr-1">*</span>
                      {errors.number}
                    </span>
                  )}
                </div>

                <div>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className={`w-full bg-transparent text-white px-4 py-3 rounded-3xl border border-gray-600 ${
                      errors.service
                        ? "border-brand-secondary"
                        : "border-gray-600"
                    } focus:border-brand-secondary focus:outline-none transition-colors`}
                  >
                    <option value="" className="text-black">
                      Service
                    </option>
                    <option value="security-consulting" className="text-black">
                      Security Consulting
                    </option>
                    <option value="threat-detection" className="text-black">
                      Threat Detection
                    </option>
                    <option value="penetration-testing" className="text-black">
                      Penetration Testing
                    </option>
                    <option value="incident-response" className="text-black">
                      Incident Response
                    </option>
                    <option value="employee-training" className="text-black">
                      Employee Training
                    </option>
                    <option value="data-protection" className="text-black">
                      Data Protection
                    </option>
                  </select>
                  {errors.service && (
                    <span className="text-brand-secondary text-xs mt-1 flex items-center">
                      <span className="mr-1">*</span>
                      {errors.service}
                    </span>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  placeholder="Write Message"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full bg-transparent text-white placeholder-gray-400 px-4 py-3 rounded-3xl border border-gray-600 ${
                    errors.message
                      ? "border-brand-secondary"
                      : "border-gray-600"
                  } focus:border-brand-secondary focus:outline-none transition-colors resize-none`}
                ></textarea>
                {errors.message && (
                  <span className="text-brand-secondary text-xs mt-1 flex items-center">
                    <span className="mr-1">*</span>
                    {errors.message}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-brand-secondary border border-brand-secondary hover:bg-brand-secondaryDark text-white font-semibold py-5 text-base rounded-2xl transition-all duration-300 shadow-lg"
                endContent={
                  <svg
                    className="ml-2 w-4 h-4"
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
