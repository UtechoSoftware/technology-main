"use client";
import {
  companySectionImage,
  falcons0,
  falcons1,
  falcons2,
  falcons3,
  jet1,
  jet2,
  jet3,
  jetPersonal,
  jets,
} from "@/public/assets/images";
import { fadeIn, matrixGlitch, staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { motionDelay } from "../api/axiosInstance";
import SbpPtSlider from "./sbpPtSlider";

const AltanaFalcons = () => {
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
            src={falcons0}
            alt="Partnerships"
            className=" w-[200px] mx-auto"
          />
        </div>
        <motion.p
          variants={matrixGlitch(motionDelay)}
          className="dark:text-brand-muted text-brand-dark text-lg text-center mt-3 roboto_regular leading-relaxed"
        >
          Protection Technologies 'Secures' Atlanta Falcons Associate Partnership to Expand US Presence
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
                  Protection Technologies is celebrating a landmark four decades in business by becoming an Atlanta Falcons Associate Partner, in association with leader in hyperlocal sports marketing, Eleven Sports Media.
                  <br />
                  This exciting partnership marks another major milestone for the integrated, security technology systems expert as it continues to celebrate over four decades in redefining security and expanding its footprint across the United States.
                </motion.p>
              </div>
            </div>

            <motion.div
              variants={fadeIn("right", motionDelay)}
              className={`relative rounded-2xl overflow-hidden `}
            >
              <Image
                src={falcons1}
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
                src={falcons2}
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
                  As an Associate Partner of the Atlanta Falcons, Protection Technologies will benefit from Mercedes-Benz Stadium branding on gamedays and digital exposure on non-gamedays, as well as experiential opportunities beyond the NFL regular season.
                  <br />
                  The Associate Partnership strengthens Protection Technologies' commitment to supporting local communities, enabling the company to engage with fans throughout Georgia and the Southeast.
                  <br />
                  President of Protection Technologies, Mike Singer comments: "This is a great opportunity for our company to join forces with a brand that unites many of our customers and potential customers while raising our profile in the State and beyond. We're excited to make the most of this partnership and to see where it takes us."
                  <br />
                  Protection Technologies leads the security industry with cutting edge, integrated security solutions including mobile CCTV trailers, with outdoor motion sensors; true day/night IP/analog cameras; and high security intrusion sensors for multi family, commercial and industrial clients. Its tailored approach ensures robust, reliable protection for businesses of all sizes.
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
                  The company's recent growth has been recognized by Marquis Who's Who, one of the world's most respected biographical reference directories for over 125 years. In acknowledgment of his leadership and contributions, President Mike Singer has been named a 'Top Business Owner' and will be featured in Who's Who in America 2025–2026.
                  <br />
                  Protection Technologies' offering is for those who want to elevate their protection with tailored, integrated technology solutions; partnering with an experienced security company, committed to delivering customized systems that help businesses succeed.
                  <br />
                  For over 40 years, Protection Technologies has partnered with clients to manage their security systems, allowing them to focus on what matters most. The team believes in long-term relationships, delivering tailored solutions that help companies to succeed.
                  <br />
                </motion.p>
              </div>
            </div>
            <motion.div
              variants={fadeIn("right", motionDelay)}
              className={`relative rounded-2xl overflow-hidden `}
            >
              <Image
                src={falcons3}
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
              To learn more, visit{" "}
              <a
                href="https://www.protectllc.us/"
                target="_blank"
                className="text-brand-secondary hover:text-brand-secondaryDark font-semibold transition-all duration-300"
              >
                www.protectllc.us
              </a>
              <br />
              Stay updated by following Protection Technologies on LinkedIn:{" "}
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

export default AltanaFalcons;