"use client";
import { contactUsImage } from "@/public/assets/images";
import { Button, Input, Textarea, Select, SelectItem } from "@heroui/react";
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
                  <Input
                    type="text"
                    name="name"
                    label="Name"
                    labelPlacement="outside"
                    placeholder="Enter your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    variant="bordered"
                    size="lg"
                    isInvalid={!!errors.name}
                    errorMessage={errors.name}
                    classNames={{
                      input:
                        "dark:text-white text-brand-dark dark:placeholder:text-gray-500 placeholder:text-brand-muted",
                      inputWrapper:
                        "dark:bg-gray-800/50 bg-brand-white dark:border-gray-700 border-brand-secondary2/30 hover:border-brand-secondary/50 focus-within:!border-brand-secondary h-14",
                    }}
                  />
                </div>

                <div>
                  <Input
                    type="email"
                    name="email"
                    label="Email"
                    labelPlacement="outside"
                    placeholder="Enter your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    variant="bordered"
                    size="lg"
                    isInvalid={!!errors.email}
                    errorMessage={errors.email}
                    classNames={{
                      input:
                        "dark:text-white text-brand-dark dark:placeholder:text-gray-500 placeholder:text-brand-muted",
                      inputWrapper:
                        "dark:bg-gray-800/50 bg-brand-white dark:border-gray-700 border-brand-secondary2/30 hover:border-brand-secondary/50 focus-within:!border-brand-secondary h-14",
                    }}
                  />
                </div>
              </div>

              {/* Number and Service Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Input
                    type="tel"
                    name="number"
                    label="Number"
                    labelPlacement="outside"
                    placeholder="Enter your Number"
                    value={formData.number}
                    onChange={handleInputChange}
                    variant="bordered"
                    size="lg"
                    isInvalid={!!errors.number}
                    errorMessage={errors.number}
                    classNames={{
                      input:
                        "dark:text-white text-brand-dark dark:placeholder:text-gray-500 placeholder:text-brand-muted",
                      inputWrapper:
                        "dark:bg-gray-800/50 bg-brand-white dark:border-gray-700 border-brand-secondary2/30 hover:border-brand-secondary/50 focus-within:!border-brand-secondary h-14",
                    }}
                  />
                </div>

                <div>
                  <Select
                    placeholder="Service"
                    label="Service"
                    labelPlacement="outside"
                    variant="bordered"
                    size="lg"
                    selectedKeys={formData.service ? [formData.service] : []}
                    onSelectionChange={(keys) => {
                      const selectedValue = Array.from(keys)[0];
                      setFormData((prev) => ({
                        ...prev,
                        service: selectedValue || "",
                      }));
                      if (errors.service) {
                        setErrors((prev) => ({ ...prev, service: "" }));
                      }
                    }}
                    isInvalid={!!errors.service}
                    errorMessage={errors.service}
                    classNames={{
                      trigger:
                        "dark:bg-gray-800/50 bg-brand-white dark:border-gray-700 border-brand-secondary2/30 hover:border-brand-secondary/50 data-[open=true]:border-brand-secondary h-14",
                      value: "dark:text-white text-brand-dark",
                      popoverContent:
                        "dark:bg-gray-800 bg-brand-white dark:text-white text-brand-dark dark:border-gray-700 border-brand-secondary2/30",
                      listboxWrapper: "max-h-[400px]",
                    }}
                  >
                    <SelectItem
                      key="security-consulting"
                      value="security-consulting"
                    >
                      Security Consulting
                    </SelectItem>
                    <SelectItem key="threat-detection" value="threat-detection">
                      Threat Detection
                    </SelectItem>
                    <SelectItem
                      key="penetration-testing"
                      value="penetration-testing"
                    >
                      Penetration Testing
                    </SelectItem>
                    <SelectItem
                      key="incident-response"
                      value="incident-response"
                    >
                      Incident Response
                    </SelectItem>
                    <SelectItem
                      key="employee-training"
                      value="employee-training"
                    >
                      Employee Training
                    </SelectItem>
                    <SelectItem key="data-protection" value="data-protection">
                      Data Protection
                    </SelectItem>
                  </Select>
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
                <Textarea
                  name="message"
                  label="Message"
                  labelPlacement="outside"
                  placeholder="Write Message"
                  minRows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  variant="bordered"
                  size="lg"
                  isInvalid={!!errors.message}
                  errorMessage={errors.message}
                  classNames={{
                    input:
                      "dark:text-white text-brand-dark dark:placeholder:text-gray-500 placeholder:text-brand-muted",
                    inputWrapper:
                      "dark:bg-gray-800/50 bg-brand-white dark:border-gray-700 border-brand-secondary2/30 hover:border-brand-secondary/50 focus-within:!border-brand-secondary min-h-[120px]",
                  }}
                />
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
