"use client";
import { Button, Input, Select, SelectItem } from "@heroui/react";
import { GraduationCap, Mail, Phone, Star, User } from "lucide-react";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import toast from "react-hot-toast";
import { IoCloudUploadSharp } from "react-icons/io5";
import ApiFunction, { GOOGLE_RECAPTCHA_SITE_KEY } from "../api/apiFunction";

const CareerApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    email: "",
    phone: "",
    education: "",
    experience: "",
    resume: null,
  });
  // const [captchaToken, setCaptchaToken] = useState(null);

  const [errors, setErrors] = useState({});

  const jobPositions = [
    {
      title: "Operations Administrative Assistant",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      ),
    },
    {
      title: "Project Manager",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H17c-.8 0-1.54.37-2.01.99L12 12l-2.99-3.01A2.5 2.5 0 0 0 7 8H5.46c-.8 0-1.54.37-2.01.99L.95 16.37 3.5 22H6v-6h2v6h2v-6h2v6h2v-6h2v6h2z" />
        </svg>
      ),
    },
    {
      title: "Estimator",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
        </svg>
      ),
    },
    {
      title: "Low Voltage Technicians",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
    },
    {
      title: "Fire Installer",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
        </svg>
      ),
    },
  ];

  const experienceRanges = ["0-1 year", "2-5 years", "5-10 years", "10+ years"];

  const educationLevels = [
    "High School",
    "Some College",
    "College Graduate",
    "Advanced Degree",
    "Certifications",
  ];

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

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({
      ...prev,
      resume: file,
    }));

    // Clear error when file is selected
    if (errors.resume) {
      setErrors((prev) => ({
        ...prev,
        resume: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.position.trim()) newErrors.position = "Position is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.education.trim())
      newErrors.education = "Education level is required";
    if (!formData.experience.trim())
      newErrors.experience = "Experience range is required";
    if (!formData.resume) newErrors.resume = "Resume upload is required";

    // Email validation
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone validation (basic)
    if (formData.phone && !/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (!captchaToken) {
    //   toast.error("Please verify ReCAPTCHA!");
    //   return;
    // }
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Handle form submission - all data will be in console
      console.log("Job Application Form submitted:", {
        ...formData,
        resumeFileName: formData.resume?.name,
        resumeSize: formData.resume?.size,
        resumeType: formData.resume?.type,
      });

      toast.success("Career Application Form submitted successfully!");

      // Reset form
      setFormData({
        name: "",
        position: "",
        email: "",
        phone: "",
        education: "",
        experience: "",
        resume: null,
      });
      setErrors({});

      // Reset file input
      const fileInput = document.getElementById("resume");
      if (fileInput) fileInput.value = "";
    }
  };

  return (
    <div className="dark:bg-brand-secondaryDark bg-brand-ligthSecondaryDark py-8 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <span className="text-brand-secondary text-sm kumbh_sans_medium mb-2 px-3 py-1 rounded-full bg-[#f5f5f5] dark:bg-[#2A1313]">
            Hiring
          </span>
          <h2 className="text-3xl capitalize kumbh_sans_semibold text-brand-dark dark:text-white my-4">
            We Are Hiring
          </h2>
          <p className="text-gray-600 dark:text-gray-400 kumbh_sans_medium text-lg">
            Job Type:{" "}
            <span className="ms-2 text-brand-secondary kumbh_sans_medium">
              Full-time
            </span>
          </p>
        </div>

        {/* Available Positions */}
        <div className="mb-8">
          <h3 className="text-xl kumbh_sans_medium text-brand-dark dark:text-white mb-4">
            Available Positions
          </h3>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 !justify-center">
            {jobPositions.map((position, index) => (
              <div
                key={index}
                className="bg-brand-ligthSecondary dark:bg-cardGradient p-4 rounded-xl shadow-medium hover:shadow-lg transition-all duration-300 hover:scale-105 group"
              >
                <div className="flex items-center gap-3">
                  <div className="text-brand-secondary transition-colors duration-300 flex-shrink-0">
                    {position.icon}
                  </div>
                  <span className="text-brand-dark dark:text-white kumbh_sans_medium text-sm group-hover:text-brand-secondary transition-colors duration-300">
                    {position.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Job Application Form */}
        <div className="dark:bg-cardGradient bg-brand-ligthSecondary rounded-3xl px-6 py-8 md:px-8">
          <h3 className="text-brand-dark dark:text-white text-2xl text-center kumbh_sans_medium mb-4 md:mb-8">
            Job Application
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name and Position Row */}
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
                  endContent={
                    <User className="w-5 h-5 dark:text-gray-400 text-brand-muted" />
                  }
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
                <Select
                  placeholder="Select Position *"
                  variant="bordered"
                  label="Position"
                  labelPlacement="outside"
                  size="lg"
                  selectedKeys={formData.position ? [formData.position] : []}
                  onSelectionChange={(keys) => {
                    const selectedValue = Array.from(keys)[0];
                    setFormData((prev) => ({
                      ...prev,
                      position: selectedValue || "",
                    }));
                    if (errors.position) {
                      setErrors((prev) => ({ ...prev, position: "" }));
                    }
                  }}
                  endContent={
                    <Star className="w-5 h-5 dark:text-gray-400 text-brand-muted" />
                  }
                  isInvalid={!!errors.position}
                  errorMessage={errors.position}
                  classNames={{
                    trigger:
                      "dark:bg-gray-800/50 bg-brand-white dark:border-gray-700 border-brand-secondary2/30 hover:border-brand-secondary/50 data-[open=true]:border-brand-secondary h-14",
                    value: "dark:text-white text-brand-dark",
                    popoverContent:
                      "dark:bg-gray-800 bg-brand-white dark:text-white text-brand-dark dark:border-gray-700 border-brand-secondary2/30",
                    listboxWrapper: "max-h-[400px]",
                  }}
                >
                  {jobPositions.map((position, index) => (
                    <SelectItem
                      key={position.title}
                      value={position.title}
                      classNames={{
                        base: "dark:text-white text-brand-dark dark:hover:bg-gray-700 hover:bg-brand-ligthSecondary data-[selected=true]:bg-brand-secondary/20 dark:data-[selected=true]:text-red-400 data-[selected=true]:text-brand-secondary",
                      }}
                    >
                      {position.title}
                    </SelectItem>
                  ))}
                </Select>
              </div>
            </div>

            {/* Email and Phone Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Input
                  type="email"
                  name="email"
                  label="Email"
                  labelPlacement="outside"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={handleInputChange}
                  variant="bordered"
                  size="lg"
                  endContent={
                    <Mail className="w-5 h-5 dark:text-gray-400 text-brand-muted" />
                  }
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

              <div>
                <Input
                  type="tel"
                  name="phone"
                  label="Phone"
                  labelPlacement="outside"
                  placeholder="Enter your Phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  variant="bordered"
                  size="lg"
                  endContent={
                    <Phone className="w-5 h-5 dark:text-gray-400 text-brand-muted" />
                  }
                  isInvalid={!!errors.phone}
                  errorMessage={errors.phone}
                  classNames={{
                    input:
                      "dark:text-white text-brand-dark dark:placeholder:text-gray-500 placeholder:text-brand-muted",
                    inputWrapper:
                      "dark:bg-gray-800/50 bg-brand-white dark:border-gray-700 border-brand-secondary2/30 hover:border-brand-secondary/50 focus-within:!border-brand-secondary h-14",
                  }}
                />
              </div>
            </div>

            {/* Education and Experience Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Select
                  placeholder="Select Your Education Level"
                  variant="bordered"
                  size="lg"
                  label="Education"
                  labelPlacement="outside"
                  selectedKeys={formData.education ? [formData.education] : []}
                  onSelectionChange={(keys) => {
                    const selectedValue = Array.from(keys)[0];
                    setFormData((prev) => ({
                      ...prev,
                      education: selectedValue || "",
                    }));
                    if (errors.education) {
                      setErrors((prev) => ({ ...prev, education: "" }));
                    }
                  }}
                  endContent={
                    <GraduationCap className="w-5 h-5 dark:text-gray-400 text-brand-muted" />
                  }
                  isInvalid={!!errors.education}
                  errorMessage={errors.education}
                  classNames={{
                    trigger:
                      "dark:bg-gray-800/50 bg-brand-white dark:border-gray-700 border-brand-secondary2/30 hover:border-brand-secondary/50 data-[open=true]:border-brand-secondary h-14",
                    value: "dark:text-white text-brand-dark",
                    popoverContent:
                      "dark:bg-gray-800 bg-brand-white dark:text-white text-brand-dark dark:border-gray-700 border-brand-secondary2/30",
                    listboxWrapper: "max-h-[400px]",
                  }}
                >
                  {educationLevels.map((level, index) => (
                    <SelectItem
                      key={level}
                      value={level}
                      classNames={{
                        base: "dark:text-white text-brand-dark dark:hover:bg-gray-700 hover:bg-brand-ligthSecondary data-[selected=true]:bg-brand-secondary/20 dark:data-[selected=true]:text-red-400 data-[selected=true]:text-brand-secondary",
                      }}
                    >
                      {level}
                    </SelectItem>
                  ))}
                </Select>
              </div>

              <div>
                <Select
                  placeholder="Select Experience Range"
                  variant="bordered"
                  size="lg"
                  label="Exprience"
                  labelPlacement="outside"
                  selectedKeys={
                    formData.experience ? [formData.experience] : []
                  }
                  onSelectionChange={(keys) => {
                    const selectedValue = Array.from(keys)[0];
                    setFormData((prev) => ({
                      ...prev,
                      experience: selectedValue || "",
                    }));
                    if (errors.experience) {
                      setErrors((prev) => ({ ...prev, experience: "" }));
                    }
                  }}
                  endContent={
                    <Star className="w-5 h-5 dark:text-gray-400 text-brand-muted" />
                  }
                  isInvalid={!!errors.experience}
                  errorMessage={errors.experience}
                  classNames={{
                    trigger:
                      "dark:bg-gray-800/50 bg-brand-white dark:border-gray-700 border-brand-secondary2/30 hover:border-brand-secondary/50 data-[open=true]:border-brand-secondary h-14",
                    value: "dark:text-white text-brand-dark",
                    popoverContent:
                      "dark:bg-gray-800 bg-brand-white dark:text-white text-brand-dark dark:border-gray-700 border-brand-secondary2/30",
                    listboxWrapper: "max-h-[400px]",
                  }}
                >
                  {experienceRanges.map((range, index) => (
                    <SelectItem
                      key={range}
                      value={range}
                      classNames={{
                        base: "dark:text-white text-brand-dark dark:hover:bg-gray-700 hover:bg-brand-ligthSecondary data-[selected=true]:bg-brand-secondary/20 dark:data-[selected=true]:text-red-400 data-[selected=true]:text-brand-secondary",
                      }}
                    >
                      {range}
                    </SelectItem>
                  ))}
                </Select>
              </div>
            </div>

            {/* Resume Upload */}
            <div>
              <div className="relative kumbh_sans_regular">
                <label
                  htmlFor="resume"
                  className={`${errors.resume && "text-red-400"} text-[15px]`}
                >
                  {" "}
                  Upload Resume{" "}
                </label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                />
                <div
                  className={`w-full h-14 mt-1 px-4 py-3 rounded-xl flex items-center justify-between border-2 transition-all duration-200 dark:bg-gray-800/30 bg-brand-white ${
                    errors.resume
                      ? "border-red-500"
                      : " dark:border-gray-700 border-brand-secondary2/30 hover:border-brand-secondary/50 focus-within:border-brand-secondary"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <IoCloudUploadSharp className="w-5 h-5 dark:text-gray-400 text-brand-muted" />
                    <span
                      className={`text-sm ${
                        formData.resume
                          ? "dark:text-white text-brand-dark"
                          : "dark:text-gray-500 text-brand-muted"
                      }`}
                    >
                      {formData.resume
                        ? formData.resume.name
                        : "Upload Resume * (PDF, DOC, DOCX)"}
                    </span>
                  </div>
                </div>
                {errors.resume && (
                  <p className="text-red-400 text-[11.5px] mt-1 flex items-center">
                    {errors.resume}
                  </p>
                )}
                {formData.resume && !errors.resume && (
                  <p className="text-green-500 text-xs mt-1 flex items-center kumbh_sans_medium">
                    File selected successfully
                  </p>
                )}
              </div>
            </div>

            {/* <ReCAPTCHA
              sitekey={GOOGLE_RECAPTCHA_SITE_KEY}
              onChange={(token) => setCaptchaToken(token)}
            /> */}

            {/* Submit Button */}
            <div className="text-center">
              <Button
                type="submit"
                size="lg"
                className="w-full sm:w-[50%] mx-auto bg-brand-secondary border border-brand-secondary hover:bg-brand-secondaryDark text-white kumbh_sans_semibold py-4 rounded-2xl transition-all duration-300 shadow-lg"
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
                Submit Application
              </Button>
            </div>
          </form>

          {/* Protection Technologies General Responsibilities */}
        </div>
        <section className="mt-12 space-y-3 dark:bg-cardGradient bg-brand-ligthSecondary rounded-3xl px-6 py-8 md:px-8">
          <h3 className="text-brand-dark dark:text-white text-2xl kumbh_sans_semibold">
            Protection Technologies General Responsibilities
          </h3>
          <p className="text-brand-dark dark:text-gray-400 text-base leading-relaxed kumbh_sans_regular">
            System Integration Solutions: Protection Technologies is a leading
            provider of advanced security solutions for Multi-Family,
            Government, Commercial, Industrial, and Critical Infrastructure. We
            offer cutting-edge service such as Access Control, CCTV, Audio/Video
            Solutions, Intercom, Garage Access and more...
          </p>
          <p className="text-brand-dark dark:text-gray-400 text-base leading-relaxed kumbh_sans_regular">
            Project Execution: Coordinate and oversee the installation,
            integration, and commissioning of Low Voltage Systems. Ensure
            projects meet timelines, budgets, and quality standards, while
            performing system testing and troubleshooting as needed.
          </p>
          <p className="text-brand-dark dark:text-gray-400 text-base leading-relaxed kumbh_sans_regular">
            Client Engagement: Partner with clients to understand their specific
            security and communication needs. Provide expert guidance on low
            voltage system integrations, including access control, intercom,
            garage door systems, and CCTV. Educate clients on system
            capabilities and best practices, ensuring solutions meet
            performance, safety, and compliance standards.
          </p>
          <p className="text-brand-dark dark:text-gray-400 text-base leading-relaxed kumbh_sans_regular">
            Documentation and Reporting: Maintain detailed project documentation
            for low voltage system integrations, including configurations,
            schematics, and test reports for access control, CCTV, intercom, and
            garage systems. Prepare regular progress updates, system performance
            analyses, and provide recommendations for improvements or upgrades.
          </p>
          <p className="text-brand-dark dark:text-gray-400 text-base leading-relaxed kumbh_sans_regular">
            Join Protection Technologies: Join Protection Technologies LLC’s low
            voltage team to work on cutting-edge access control, CCTV, Intercom,
            and Garage Systems. Collaborate with a skilled, innovative team,
            gain hands-on experience with advanced integrations, and help
            deliver reliable, high-quality solutions that make a real impact.
          </p>
        </section>
      </div>
    </div>
  );
};

export default CareerApplicationForm;
