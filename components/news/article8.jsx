import { Mike, news } from "@/public/assets/images";
import Image from "next/image";
import React from "react";
import {
  FaCalendarAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaUserAlt,
} from "react-icons/fa";

export default function Article1() {
  return (
    <article className="bg-brand-ligthSecondary dark:bg-cardGradient rounded-3xl">
      <div className="max-h-[450px] flex items-center justify-center">
        <Image
          src={Mike}
          alt="Mike Singer"
          className="w-full max-h-[470px] object-cover object-top rounded-2xl"
        />
      </div>

      {/* Article Content */}
      <div className="p-4 md:p-8">
        <div className="flex items-center space-x-4 text-sm mb-4 kumbh_sans_regular">
          <div className="flex items-center space-x-2 text-brand-dark dark:text-brand-white">
            <FaUserAlt className="h-3 w-3 text-brand-secondary" />
            <span>BY MARQUIS WHO'S WHO</span>
          </div>
          <div className="flex items-center space-x-2 text-brand-dark dark:text-brand-white">
            <FaCalendarAlt className="h-3 w-3 text-brand-secondary" />
            <span>December 11, 2025</span>
          </div>
        </div>

        <h1 className="text-3xl kumbh_sans_semibold text-brand-dark dark:text-white mb-6 leading-tight">
          Marquis Who's Who Honors Mike Singer for Expertise in Security
          Services
        </h1>

        <div className="prose prose-invert max-w-none">
          <i className="">
            Mike Singer is an innovative leader in the security field
            specializing in sustainable security solutions and technology.
          </i>
          <p className="text-brand-dark dark:text-brand-white text-base leading-relaxed mb-6 mt-2">
            PINE BROOK, NJ, October 14, 2025, Mike Singer has been selected for inclusion in Marquis Who's Who. As in all Marquis Who's Who biographical volumes, individuals profiled are selected on the basis of current reference value. Factors such as position, noteworthy accomplishments, visibility, and prominence in a field are all taken into account during the selection process.
          </p>
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-brand-dark dark:text-brand-white text-base leading-relaxed mb-6">
            Mr. Singer has established a distinguished reputation as president of Protection Technologies LLC, a role he has held since 1999. Under his leadership, the company has become one of the East Coast’s most respected names in security and systems integration. Mr. Singer oversees all operations for the organization, guiding a team of nearly 30 employees and ensuring that every project upholds the highest standards of integrity and technical excellence. He is responsible for working with large multifamily developers such as AvalonBay, managing the installation of low-voltage infrastructure—including Wi-Fi, intercoms, access control, garage gate systems and fire systems—for apartment buildings. His commitment to maintaining and managing these systems ensures long-term security and functionality for clients.
          </p>
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-brand-dark dark:text-brand-white text-base leading-relaxed mb-6">
            A hallmark of Mr. Singer’s approach is his dedication to organic growth, achieved entirely through word-of-mouth referrals and without incurring debt. This strategy has provided Protection Technologies with unparalleled buying power and rapid product acquisition capabilities, critical advantages in the fast-evolving security technology sector. He has also established a new sales team to expand the customer base and is driving toward ambitious revenue goals. Notably, all management and leadership positions within the company are held by women, reflecting Mr. Singer’s strong commitment to diversity and female leadership.
          </p>
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-brand-dark dark:text-brand-white text-base leading-relaxed mb-6">
            His expertise in security integration and low-voltage security integration has been instrumental in positioning Protection Technologies as an industry leader. In a significant milestone, his company became the first platinum dealer with iLOQ Ltd. in the United States further validating his impact in the security technology industry. This achievement was recognized with the prestigious iLOQ Platinum Partner Award, underscoring both technical leadership and innovative vision. Mr. Singer played a pivotal role in facilitating iLOQ’s entry into the U.S. market, introducing their sustainable security solutions—an industry innovation that set new standards for access control technology.
          </p>
        </div>
        <div className="prose prose-invert max-w-none">
          <p className="text-brand-dark dark:text-brand-white text-base leading-relaxed mb-6">
            Prior to founding Protection Technologies LLC, Mr. Singer served as president of All Secure Locksmiths Inc. from 1985 to 1999. He launched this business at just 17 years old, drawing on his early experience as a teenage locksmith. The company quickly earned a reputation for reliability and technical skill in the locksmithing field. Eventually, Protection Technologies acquired All Secure Locksmiths Inc., consolidating his entrepreneurial ventures under one banner and enabling further expansion into advanced security integration.
          </p>
        </div>
        <div className="prose prose-invert max-w-none">
          <p className="text-brand-dark dark:text-brand-white text-base leading-relaxed mb-6">
            Mr. Singer’s educational background includes college coursework that contributed foundational knowledge to his professional journey. His academic experiences provided valuable insights that have supported his success in business management and technical innovation.
          </p>
        </div>
        <div className="prose prose-invert max-w-none">
          <p className="text-brand-dark dark:text-brand-white text-base leading-relaxed mb-6">
            Throughout his career, Mr. Singer has attributed his achievements to unwavering honesty and direct communication. He is known for always expressing what he truly believes rather than making promises he cannot keep, a philosophy that permeates every aspect of his business operations. His insistence on integrity means that no corners are cut; any deviation from this standard is met with immediate accountability.
          </p>
        </div>
        <div className="prose prose-invert max-w-none">
          <p className="text-brand-dark dark:text-brand-white text-base leading-relaxed mb-6">
            Throughout his career, Mr. Singer has attributed his achievements to unwavering honesty and direct communication. He is known for always expressing what he truly believes rather than making promises he cannot keep, a philosophy that permeates every aspect of his business operations. His insistence on integrity means that no corners are cut; any deviation from this standard is met with immediate accountability.
          </p>
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-brand-dark dark:text-brand-white text-lg leading-relaxed mb-3 font-semibold">
            About Marquis Who's Who®:
          </p>
          <p className="text-brand-dark dark:text-brand-white text-base leading-relaxed mb-6">
            Since 1899, when A. N. Marquis printed the First Edition of Who’s Who in America®, Marquis Who’s Who® has chronicled the lives of the most accomplished individuals and innovators from every significant field of endeavor, including politics, business, medicine, law, education, art, religion and entertainment. Who’s Who in America® remains an essential biographical source for thousands of researchers, journalists, librarians and executive search firms around the world.
            <br />
            The suite of Marquis® publications can be viewed at the official Marquis Who’s Who® website,{" "}
          </p>
          <div className="flex flex-col gap-2">
            <a
              href="https://marquiswhoswho.com/"
              target="_blank"
              className="text-brand-secondary hover:text-brand-secondaryDark font-semibold transition-all duration-300"
            >
              www.marquiswhoswho.com
            </a>
            <a
              href="https://www.24-7pressrelease.com/press-release/527685/marquis-whos-who-honors-mike-singer-for-expertise-in-security-services"
              target="_blank"
              className="text-brand-secondary hover:text-brand-secondaryDark font-semibold transition-all duration-300"
            >
              Read Full Article
            </a>
            <a href="/Mike Singer Marquis Whos Who.docx" className="text-brand-secondary hover:text-brand-secondaryDark font-semibold transition-all duration-300" target="_blank">
              Download Document
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mt-6">
          <div className="flex items-center space-x-2">
            <span className="text-brand-dark dark:text-brand-white text-lg kumbh_sans_semibold ">
              Tags:
            </span>
            <div className="flex flex-wrap gap-2">
              <span className="text-brand-dark dark:text-brand-white px-3 py-1 rounded-full text-sm border border-brand-secondary/30">
                Mike Singer
              </span>
              <span className="text-brand-dark dark:text-brand-white px-3 py-1 rounded-full text-sm border border-brand-secondary/30">
                Marquis Who's Who
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-brand-dark dark:text-brand-white text-lg kumbh_sans_semibold ">
              Share:
            </span>
            <div className="flex items-center space-x-2">
              <div className="h-10 w-10 flex items-center justify-center rounded-full bg-brand-secondary text-white hover:scale-110 hover:text-brand-secondary hover:bg-brand-white transition-all duration-300 cursor-pointer">
                <FaFacebookF />
              </div>
              <div className="h-10 w-10 flex items-center justify-center rounded-full bg-brand-secondary text-white hover:scale-110 hover:text-brand-secondary hover:bg-brand-white transition-all duration-300 cursor-pointer">
                <FaTwitter />
              </div>
              <div className="h-10 w-10 flex items-center justify-center rounded-full bg-brand-secondary text-white hover:scale-110 hover:text-brand-secondary hover:bg-brand-white transition-all duration-300 cursor-pointer">
                <FaLinkedinIn />
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
