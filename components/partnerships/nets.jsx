"use client";
import {
  nets0,
  nets1,
  nets2,
  nets3,
} from "@/public/assets/images";
import { fadeIn, matrixGlitch, staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { motionDelay } from "../api/axiosInstance";
import SbpPtSlider from "./sbpPtSlider";

const BrooklynNets = () => {
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
            src={nets0}
            alt="Partnerships"
            className=" w-[200px] mx-auto"
          />
        </div>
        <motion.p
          variants={matrixGlitch(motionDelay)}
          className="dark:text-brand-muted text-brand-dark text-lg text-center mt-3 roboto_regular leading-relaxed"
        >
          Protection Technologies Makes History as Brooklyn Nets' Inaugural Small Business Partner
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
                  Integrated, security technology systems expert, Protection Technologies is celebrating a landmark four decades in business by becoming the inaugural Small Business Partner of the Brooklyn Nets, in association with leader in hyperlocal sports marketing, Eleven Sports Media.
                  <br />
                  The Small Business Partnership with the Brooklyn Nets underscores Protection Technologies' commitment to community engagement and innovation as the company celebrates 40 years of excellence in 2025.
                  <br />
                  By joining forces with the Brooklyn Nets, through the Small Business Partner Program, Protection Technologies is not only elevating its brand presence but also reinforcing its dedication to supporting local businesses and connecting with fans across the region.
                </motion.p>
              </div>
            </div>

            <motion.div
              variants={fadeIn("right", motionDelay)}
              className={`relative rounded-2xl overflow-hidden `}
            >
              <Image
                src={nets1}
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
                src={nets2}
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
                  As a Small Business Partner of the Brooklyn Nets, Protection Technologies will be given access to promote its brand messaging across multiple digital displays at the Barclays Center, benefitting from connecting with the fans throughout the arena every gameday. As a proud Nets Small Business Partner, the company will also be invited to exclusive, premium partner events, where it has the chance to connect with fellow, like-minded businesses.
                  <br />
                  Protection Technologies leads the security industry, specializing in advanced intrusion sensors for multi-family, government, commercial and industrial clients. Its cutting-edge solutions include mobile CCTV trailers, with outdoor motion sensors for perimeter security, true day/night IP/analog cameras, for clear surveillance, and high-security intrusion sensors, for both indoor and hazardous environments.
                  <br />
                  President of Protection Technologies, Mike Singer comments: "Becoming the inaugural Small Business Partner of the Brooklyn Nets is an exciting opportunity for us to connect with local communities and fans while celebrating 40 years of innovation."
                </motion.p>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center mt-10">
            <div className="space-y-8">
              <div>
                <motion.p
                  variants={matrixGlitch(motionDelay)}
                  className="dark:text-brand-muted text-brand-dark text-lg roboto_regular leading-relaxed"
                >
                  "Over the past year, we've expanded our reach to serve Fortune 500 clients across critical infrastructure sites along the East Coast. This partnership reflects our dedication to giving back and building strong relationships in the region."
                  <br />
                  This announcement follows a period of significant growth for Protection Technologies as it celebrates four decades of excellence in the security industry. This includes recognition by Marquis Who's Who, where Mike Singer was honored as a Top Business Owner for 2025. Under his leadership, the company has become one of the East Coast's most trusted names in security and systems integration.
                  <br />
                </motion.p>
              </div>
            </div>
            <motion.div
              variants={fadeIn("right", motionDelay)}
              className={`relative rounded-2xl overflow-hidden `}
            >
              <Image
                src={nets3}
                alt="Company Section"
                className="object-contain"
              />
            </motion.div>
          </div>
          <div className="mt-10">
            <motion.p
              variants={matrixGlitch(motionDelay)}
              className="dark:text-brand-muted text-brand-dark text-lg roboto_regular leading-relaxed"
            >
              If you want your business to elevate its protection with tailored, integrated technology solutions, visit{" "}
              <a
                href="https://www.protectllc.us/"
                target="_blank"
                className="text-brand-secondary hover:text-brand-secondaryDark font-semibold transition-all duration-300"
              >
                www.protectllc.us
              </a>
              <br />
              You can also keep up to date with the latest news and updates from Protection Technologies by following us on LinkedIn -{" "}
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
                  Eleven Sports Media helps local businesses partner with elite teams through in-venue media, content and community programmes, working with some of the biggest names in sport across the UK, Europe and the US.
                  <br />
                  Founded in the north-west of England, UK, in 2009, the company moved into new headquarters in Manchester in 2025, following a multimillion-pound investment from growth capital investors BGF (
                  <a
                    href="https://www.bgf.co.uk/"
                    target="_blank"
                    className="text-brand-secondary hover:text-brand-secondaryDark font-semibold transition-all duration-300"
                  >
                    https://www.bgf.co.uk/
                  </a>
                  ).
                  <br />
                  For more information, please visit{" "}
                  <a
                    href="https://www.elevensportsmedia.com/"
                    target="_blank"
                    className="text-brand-secondary hover:text-brand-secondaryDark font-semibold transition-all duration-300"
                  >
                    www.elevensportsmedia.com
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

export default BrooklynNets;