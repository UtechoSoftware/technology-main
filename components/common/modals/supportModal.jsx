"use client";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
} from "@heroui/react";
import axios from "axios";
import { X } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

const SupportModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    TicketTitle: "",
    Description: "",
    EndUserFirstName: "",
    EndUserLastName: "",
    EndUserEmail: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  // Form reset function
  const resetForm = () => {
    setFormData({
      TicketTitle: "",
      Description: "",
      EndUserFirstName: "",
      EndUserLastName: "",
      EndUserEmail: "",
    });
    setErrors({});
    setTouched({});
  };

  // Modified onClose handler to reset form
  const handleClose = () => {
    resetForm();
    onClose();
  };

  // Real-time validation function
  const validateField = (name, value) => {
    switch (name) {
      case "TicketTitle":
        if (!value.trim()) return "Ticket Title is required";
        if (value.trim().length < 3)
          return "Ticket Title must be at least 3 characters";
        return "";

      case "Description":
        if (!value.trim()) return "Description is required";
        if (value.trim().length < 10)
          return "Description must be at least 10 characters";
        return "";

      case "EndUserFirstName":
        if (!value.trim()) return "First Name is required";
        if (value.trim().length < 2)
          return "First Name must be at least 2 characters";
        if (!/^[a-zA-Z\s]+$/.test(value.trim()))
          return "First Name should only contain letters";
        return "";

      case "EndUserLastName":
        if (!value.trim()) return "Last Name is required";
        if (value.trim().length < 2)
          return "Last Name must be at least 2 characters";
        if (!/^[a-zA-Z\s]+$/.test(value.trim()))
          return "Last Name should only contain letters";
        return "";

      case "EndUserEmail":
        if (!value.trim()) return "Email is required";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value.trim()))
          return "Please enter a valid email address";
        return "";

      default:
        return "";
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Update form data
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Mark field as touched
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    // Real-time validation
    const error = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    // Mark field as touched on blur
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    // Validate on blur
    const error = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mark all fields as touched
    const allTouched = Object.keys(formData).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {});
    setTouched(allTouched);

    const newErrors = validateForm();
    const headers = {
      "Content-Type": "application/json",
      "X-API-Key": "4b0bff97f4ca448b83aee43125d8eac8",
    };

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error("Please fill all the fields correctly");
    } else {
      axios
        .post("https://app.atera.com/api/v3/tickets", formData, { headers })
        .then((response) => {
          console.log(response);
          if (response?.data?.ActionID) {
            handleClose(); // Use handleClose instead of onClose to reset form
            toast.success("Ticket created successfully");
          }
        })
        .catch((error) => {
          toast.error(error.response?.data?.message || "Something went wrong");
        });
    }
  };

  // Helper function to get input border color
  const getBorderColor = (fieldName) => {
    if (!touched[fieldName]) return "border-gray-600";
    if (errors[fieldName]) return "border-red-500";
    if (formData[fieldName].trim()) return "border-green-500";
    return "border-gray-600";
  };

  // Helper function to show success icon
  const showSuccessIcon = (fieldName) => {
    return (
      touched[fieldName] && !errors[fieldName] && formData[fieldName].trim()
    );
  };

  return (
    <Modal
      backdrop="blur"
      className="py-2"
      isOpen={isOpen}
      onClose={handleClose} // Use handleClose instead of onClose
      placement="center"
      hideCloseButton={true}
    >
      <ModalContent className="">
        {(onClose) => (
          <>
            <ModalHeader className="flex items-center justify-between">
              <h2 className="text-xl capitalize kumbh_sans_semibold text-brand-dark dark:text-white mb-0">
                Support Ticket
              </h2>
              <button
                onClick={handleClose} // Use handleClose instead of onClose
                className="text-gray-600 hover:text-gray-800 dark:hover:text-gray-400"
              >
                <X className="w-6 h-6" />
              </button>
            </ModalHeader>

            <ModalBody className="grid grid-cols-1 gap-4 mb-4">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Ticket Title */}
                <div className="relative">
                  <input
                    type="text"
                    name="TicketTitle"
                    placeholder="Ticket Title"
                    value={formData.TicketTitle}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    className={`w-full bg-transparent dark:text-white text-black placeholder-gray-400  px-4 py-3 pr-12 rounded-3xl border ${getBorderColor(
                      "TicketTitle"
                    )} focus:border-brand-secondary focus:outline-none transition-colors`}
                  />
                  {showSuccessIcon("TicketTitle") && (
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                      <svg
                        className="w-5 h-5 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  )}
                  {touched.TicketTitle && errors.TicketTitle && (
                    <div className="flex items-center mt-2">
                      <svg
                        className="w-4 h-4 text-red-500 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-red-500 text-xs">
                        {errors.TicketTitle}
                      </span>
                    </div>
                  )}
                </div>

                {/* First Name */}
                <div className="relative">
                  <input
                    type="text"
                    name="EndUserFirstName"
                    placeholder="First Name"
                    value={formData.EndUserFirstName}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    className={`w-full bg-transparent dark:text-white text-black placeholder-gray-400 px-4 py-3 pr-12 rounded-3xl border ${getBorderColor(
                      "EndUserFirstName"
                    )} focus:border-brand-secondary focus:outline-none transition-colors`}
                  />
                  {showSuccessIcon("EndUserFirstName") && (
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                      <svg
                        className="w-5 h-5 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  )}
                  {touched.EndUserFirstName && errors.EndUserFirstName && (
                    <div className="flex items-center mt-2">
                      <svg
                        className="w-4 h-4 text-red-500 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-red-500 text-xs">
                        {errors.EndUserFirstName}
                      </span>
                    </div>
                  )}
                </div>

                {/* Last Name */}
                <div className="relative">
                  <input
                    type="text"
                    name="EndUserLastName"
                    placeholder="Last Name"
                    value={formData.EndUserLastName}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    className={`w-full bg-transparent dark:text-white text-black  placeholder-gray-400 px-4 py-3 pr-12 rounded-3xl border ${getBorderColor(
                      "EndUserLastName"
                    )} focus:border-brand-secondary focus:outline-none transition-colors`}
                  />
                  {showSuccessIcon("EndUserLastName") && (
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                      <svg
                        className="w-5 h-5 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  )}
                  {touched.EndUserLastName && errors.EndUserLastName && (
                    <div className="flex items-center mt-2">
                      <svg
                        className="w-4 h-4 text-red-500 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-red-500 text-xs">
                        {errors.EndUserLastName}
                      </span>
                    </div>
                  )}
                </div>

                {/* Email */}
                <div className="relative">
                  <input
                    type="email"
                    name="EndUserEmail"
                    placeholder="Email Address"
                    value={formData.EndUserEmail}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    className={`w-full bg-transparent dark:text-white text-black placeholder-gray-400 px-4 py-3 pr-12 rounded-3xl border ${getBorderColor(
                      "EndUserEmail"
                    )} focus:border-brand-secondary focus:outline-none transition-colors`}
                  />
                  {showSuccessIcon("EndUserEmail") && (
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                      <svg
                        className="w-5 h-5 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  )}
                  {touched.EndUserEmail && errors.EndUserEmail && (
                    <div className="flex items-center mt-2">
                      <svg
                        className="w-4 h-4 text-red-500 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-red-500 text-xs">
                        {errors.EndUserEmail}
                      </span>
                    </div>
                  )}
                </div>

                {/* Description */}
                <div className="relative">
                  <textarea
                    name="Description"
                    placeholder="Describe your issue in detail..."
                    rows="4"
                    value={formData.Description}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    className={`w-full bg-transparent dark:text-white text-black placeholder-gray-400 px-4 py-3 pr-12 rounded-3xl border ${getBorderColor(
                      "Description"
                    )} focus:border-brand-secondary focus:outline-none transition-colors resize-none`}
                  ></textarea>
                  {showSuccessIcon("Description") && (
                    <div className="absolute right-4 top-4">
                      <svg
                        className="w-5 h-5 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  )}
                  {touched.Description && errors.Description && (
                    <div className="flex items-center mt-2">
                      <svg
                        className="w-4 h-4 text-red-500 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-red-500 text-xs">
                        {errors.Description}
                      </span>
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <div className="">
                  <Button
                    type="submit"
                    className="w-full bg-brand-secondary border border-brand-secondary hover:bg-brand-secondaryDark text-white kumbh_sans_semibold text-base rounded-2xl transition-all duration-300 shadow-lg"
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
                    Submit Ticket
                  </Button>
                </div>
              </form>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default SupportModal;
