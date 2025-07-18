import React from "react";
import { FaRegClock } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { RiContactsBookLine } from "react-icons/ri";
import { MdEmail, MdLocationOn } from "react-icons/md";

const ContactAddress = () => {
  return (
    <div className="bg-brand-ligthSecondary dark:bg-brand-secondaryDark py-8 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {/* Our Address */}
          <div className="flex items-start space-x-4 p-3 lg:p-6 dark:bg-cardGradient bg-brand-ligthSecondaryDark shadow-medium rounded-2xl">
            <div className="bg-brand-secondary p-3 rounded-lg flex-shrink-0 mt-2">
              <IoLocationOutline className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-brand-dark dark:text-white kumbh_sans_semibold text-lg mb-1">
                Other Locations
              </h3>

                <p className="text-brand-muted text-base leading-relaxed">
                    <p className="kumbh_sans_regular text-brand-secondary dark:text-brand-white">
                      HQ Location :
                    </p>
                    39 Route 46 East Unit 801 Pine Brook, NJ 07058
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mt-3">
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

          {/* Contact Us */}
          <div className="flex items-center space-x-4 p-3 lg:p-6 dark:bg-cardGradient bg-brand-ligthSecondaryDark shadow-medium rounded-2xl" style={{height:150}}>
            <div className="bg-brand-secondary p-3 rounded-lg flex-shrink-0">
              <RiContactsBookLine className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-brand-dark dark:text-white kumbh_sans_semibold text-lg mb-1">
                Contact Us
              </h3>
              <p className="text-brand-muted text-base leading-relaxed">
                Phone No.: <a href="tel:+2018918201">+201-891-8201</a>
                <br />
                Mail:{" "}
                <a href="mailto:ptservice@protectllc.us">
                  ptservice@protectllc.us
                </a>
              </p>
            </div>
          </div>

          {/* Opening Hour */}

          <div className="flex items-center space-x-4 p-3 lg:p-6 dark:bg-cardGradient bg-brand-ligthSecondaryDark shadow-medium rounded-2xl" style={{height:150}}>
            <div className="bg-brand-secondary p-3 rounded-lg flex-shrink-0">
              <FaRegClock className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-brand-dark dark:text-white kumbh_sans_semibold text-lg mb-1">
                Business Hours
              </h3>
              <p className="text-brand-muted text-base leading-relaxed">
                Mon - Fri: 9:00 AM - 5:00 PM
                <br />
                Sat, Sun: Closed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactAddress;
