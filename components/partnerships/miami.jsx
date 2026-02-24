"use client";
import {
  miami0,
  miami1,
  miami2,
} from "@/public/assets/images";
import { fadeIn, matrixGlitch, staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { motionDelay } from "../api/axiosInstance";
import SbpPtSlider from "./sbpPtSlider";

const MiamiDolphins = () => {
  return (
    <motion.div
      className=" dark:bg-brand-secondaryDark bg-brand-ligthSecondaryDark relative overflow-hidden px-4 about"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: motionDelay }}
    >
      <div className="max-w-7xl relative mx-auto">
        <div className="">
          <Image
            src={miami0}
            alt="Partnerships"
            className=" w-[200px] mx-auto"
          />
        </div>
        <motion.p
          variants={matrixGlitch(motionDelay)}
          className="dark:text-brand-muted text-brand-dark text-lg text-center mt-3 roboto_regular leading-relaxed"
        >
          Protection Technologies Joins Miami Dolphins Small Business Partnership During Landmark Year of Growth
        </motion.p>
        {/* Main content */}
        <div className="relative z-10 pt-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <motion.p
                  variants={matrixGlitch(motionDelay)}
                  className="dark:text-brand-muted text-brand-dark text-lg roboto_regular leading-relaxed"
                >
                  Protection Technologies LLC has joined forces with the Miami Dolphins Small Business Partnership, in association with hyperlocal sports marketing expert, Eleven Sports Media.
                  <br />
                  This exciting collaboration comes during a landmark year for the integrated security technology systems specialist as it celebrates 40 years of redefining security and continued business growth.
                </motion.p>
              </div>
            </div>

            <motion.div
              variants={fadeIn("right", motionDelay)}
              className={`relative rounded-2xl overflow-hidden `}
            >
              <Image
                src={miami1}
                alt="Company Section"
                className="object-contain"
              />
            </motion.div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center mt-10">
            <motion.div
              variants={fadeIn("right", motionDelay)}
              className={`relative rounded-2xl overflow-hidden `}
            >
              <Image
                src={miami2}
                alt="Company Section"
                className="object-contain"
              />
            </motion.div>
            <div className="space-y-8">
              <div>
                <motion.p
                  variants={matrixGlitch(motionDelay)}
                  className="dark:text-brand-muted text-brand-dark text-lg roboto_regular leading-relaxed"
                >
                  As part of the Small Business Partnership, Protection Technologies will benefit from brand exposure across Hard Rock Stadium's digital platforms and premium, exclusive networking opportunities with other like-minded businesses.
                  <br />
                  The Small Business Partnership alongside the Miami Dolphins underscores Protection Technologies' commitment to community engagement and innovation. President of Protection Technologies, Mike Singer comments: "By joining forces with one of the NFL's most iconic franchises, Protection Technologies is not only elevating its brand presence but also reinforcing its dedication to supporting local businesses and connecting with fans across South Florida."
                  <br />
                  Protection Technologies leads the security industry with cutting-edge solutions including mobile CCTV trailers with outdoor motion sensors; true day/night IP/analog cameras; and high-security, intrusion sensors for multi-family, commercial and industrial clients. Its integrated approach ensures tailored solutions that meet the highest standards of safety and reliability.
                </motion.p>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <motion.p
              variants={matrixGlitch(motionDelay)}
              className="dark:text-brand-muted text-brand-dark text-lg roboto_regular leading-relaxed"
            >
              The recent growth of Protection Technologies has been recognized by Marquis Who's Who, one of the world's most respected biographical reference directories for over 125 years. In acknowledgment of his leadership and impact, Mike Singer has been named a Top Business Owner for 2025 and featured as a subject of biographical record in Who's Who in America 2025–2026.
              <br />
              Mike shares a message for future customers: "If you're ready to elevate your protection with tailored, integrated technology solutions, choose Protection Technologies. You can trust that you're partnering with a professional and knowledgeable security company, committed to delivering customised solutions designed to help you succeed."
              <br />
              To learn more, visit Protection Technologies' website -{" "}
              <a
                href="https://www.protectllc.us/"
                target="_blank"
                className="text-brand-secondary hover:text-brand-secondaryDark font-semibold transition-all duration-300"
              >
                www.protectllc.us
              </a>
              <br />
              You can also keep-up-to-date with all the latest news from Protection Technologies by following its LinkedIn page -{" "}
              <a
                href="https://www.linkedin.com/company/protection-technologies-llc/"
                target="_blank"
                className="text-brand-secondary hover:text-brand-secondaryDark font-semibold transition-all duration-300"
              >
                LinkedIn
              </a>
            </motion.p>
          </div>
          <div className="mt-10">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-3">EDITORS NOTES</h2>
                <motion.p
                  variants={matrixGlitch(motionDelay)}
                  className="dark:text-brand-muted text-brand-dark text-lg roboto_regular leading-relaxed"
                >
                  Eleven Sports Media operates Community Partnership programs at
                  Premier League, Championship, MLS, NFL, NBA, NHL and Cinch
                  Premiership Clubs, utilizing innovative technology-driven
                  content platforms to help regional businesses engage with
                  fans. Eleven's fan engagement platforms, StadiumTV and
                  StatZone can be found at more than 50 sports venues in the UK
                  and overseas.
                  <br />
                  For more information, please visit{" "}
                  <a
                    href="https://www.eleven.tv/"
                    target="_blank"
                    className="text-brand-secondary hover:text-brand-secondaryDark font-semibold transition-all duration-300"
                  >
                    www.eleven.tv
                  </a>
                </motion.p>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-3">IMPORTANT </h2>
                <motion.p
                  variants={matrixGlitch(motionDelay)}
                  className="dark:text-brand-muted text-brand-dark text-lg roboto_regular leading-relaxed"
                >
                  As the recipient and intended publisher of this editorial, in reading and publishing (or otherwise making use of it), you agree to the terms and conditions of use set out in this disclaimer. References to we, us and our in this disclaimer refers to Eleven Sports Media Incorporated (company number C4791113).
                  <br />
                  You understand that unless otherwise specified, the attached form of editorial is in a form acceptable to the organization, association, institution, club, company, or corporate body in connection with which yours and our mutual client has purchased a partnership package (Host).  Where the attached editorial has not been approved by the Host then its use is subject to obtaining such written approval.  Where you wish to make any amendments to the editorial then you agree and acknowledge that we may have to seek the prior written consent of the Host in advance of it being made use of (via such media as is permitted by us from time to time).  Subject to the above, you agree and acknowledge that you shall only make use of the editorial in the form attached and that you shall not (whether directly or indirectly, including in connection with or through any third-party agency or publisher) make any amendments to the editorial.
                  <br />
                  In consideration for granting you the right to make use of the attached editorial, you agree that you shall indemnify us, keep us indemnified and hold us harmless from and against any and all actions, awards, charges, claims, compensation, costs, damages, demands, expenses, fees, fines, interest, liabilities, losses, penalties, proceedings and settlements suffered or incurred by us, whether in contract, tort (including negligence), breach of statutory duty or otherwise arising out of or in connection with any breach of this disclaimer.
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <SbpPtSlider />
      </div>
    </motion.div>
  );
};

export default MiamiDolphins;