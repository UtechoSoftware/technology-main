"use client";

/* eslint-disable @next/next/no-img-element */
import {
  darkLogo,
  footerBg,
  lightLogo,
  lightlogo2,
  logo2,
} from "@/public/assets/images";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { useTheme } from "next-themes";

const Footer = () => {
  const { theme } = useTheme();
  const itSolutions = [
    { title: "Multi Family", href: "/services/multi-family" },
    { title: "Data Center", href: "/services/data-center" },
    { title: "Houses/Estates", href: "/services/houses-estates" },
    {
      title: "College Housing Solutions",
      href: "/services/college-housing-solutions",
    },
    { title: "Office Buildings", href: "/services/office-buildings" },
  ];

  const quickLinks = [
    { title: "About us", href: "/about" },
    { title: "Our Services", href: "/services" },
    { title: "In The News", href: "/news" },
    { title: "Our Projects", href: "/projects" },
    { title: "Contact Us", href: "/contact-us" },
  ];

  return (
    <footer>
      <section className="dark:bg-brand-secondaryDark bg-white text-gray-800 dark:text-white relative overflow-hidden footer">
        <Image
          src={footerBg}
          alt="Overlay"
          fill
          className="object-cover  dark:block opacity-50 dark:opacity-50 z-0"
          // className="object-cover  dark:block opacity-30 dark:opacity-50 z-0"

        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-16 dark:border-t dark:border-gray-800 border-t border-gray-200">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div>
                <Image
                  src={theme === "dark" ? logo2 : lightlogo2}
                  alt="LLC Protection Technologies"
                  className="mb-4 object-contain w-[114px] md:w-[200px]"
                />
                <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed max-w-xs">
                  Since 1999, LLC has been a trusted leader in integrated
                  solution systems
                </p>
              </div>

              {/* Social Icons */}
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/company/protection-technologies-llc/"
                  target="_blank"
                  className="w-10 h-10 bg-gray-100 dark:bg-brand-secondary rounded-full flex items-center justify-center cursor-pointer group transition-colors duration-300 hover:scale-105"
                >
                  <FaLinkedinIn
                    size={16}
                    className="text-brand-secondary dark:text-white"
                  />
                </a>
              </div>
            </div>

            {/* IT Solution */}
            <div>
              <h3 className="text-xl kumbh_sans_semibold text-brand-secondary dark:text-white mb-6">
                IT Solution
              </h3>
              <ul className="space-y-3">
                {itSolutions.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 group cursor-pointer"
                  >
                    <div className="text-brand-secondary group-hover:translate-x-1 transition-transform duration-300">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <Link
                      href={item.href}
                      className="text-gray-500 dark:text-gray-400 hover:text-brand-secondary dark:hover:text-white transition-colors duration-300 text-base"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Link */}
            <div>
              <h3 className="text-xl kumbh_sans_semibold text-brand-secondary dark:text-white mb-6">
                Quick Link
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 group cursor-pointer"
                  >
                    <div className="text-brand-secondary group-hover:translate-x-1 transition-transform duration-300">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <Link
                      href={item.href}
                      className="text-gray-500 dark:text-gray-400 hover:text-brand-secondary dark:hover:text-white transition-colors duration-300 text-base"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="text-xl kumbh_sans_semibold text-brand-secondary dark:text-white mb-6">
                Contact Us
              </h3>
              <div className="space-y-6">
                {/* Location */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-brand-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <MdLocationOn size={18} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-brand-secondary kumbh_sans_semibold text-lg mb-1">
                      Other Locations
                    </h4>
                    <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed">
                      <p className="kumbh_sans_regular text-brand-secondary dark:text-brand-white">
                        HQ Location :
                      </p>
                      39 Route 46 East Unit 801 Pine Brook, NJ 07058
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed">
                      <p className="kumbh_sans_regular text-brand-secondary dark:text-brand-white">
                        Florida Locations :
                      </p>
                      1990 Main Street Unit 750 Sarasota, FL 34236
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed">
                      Tower 101 building 17th Floor 101 NE 3rd Ave, Fort
                      Lauderdale, FL 33301.
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-brand-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <FiPhone size={16} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-brand-secondary kumbh_sans_semibold text-lg mb-1">
                      Phone
                    </h4>
                    <div className="text-gray-500 dark:text-gray-400 text-base space-y-1">
                      <a href="tel:+2018918201">+201-891-8201</a>
                    </div>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-brand-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <MdEmail size={16} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-brand-secondary kumbh_sans_semibold text-lg mb-1">
                      Email
                    </h4>
                    <p className="text-gray-500 dark:text-gray-400 text-base">
                      <a href="mailto:ptservice@protectllc.us">
                        ptservice@protectllc.us
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-brand-ligthSecondary dark:bg-[#341514]">
        <div className="max-w-7xl mx-auto py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-600 dark:text-gray-400 text-base">
            &copy; Copyright {new Date().getFullYear()} . All Rights Reserved.
          </div>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-gray-600 dark:text-gray-400 hover:text-brand-secondary dark:hover:text-white text-base transition-colors duration-300"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
