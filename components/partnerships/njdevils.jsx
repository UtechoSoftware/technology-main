"use client";
import {
  companySectionImage,
  devil1,
  devil2,
  devil3,
  njdevil,
} from "@/public/assets/images";
import { fadeIn, matrixGlitch, staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { motionDelay } from "../api/axiosInstance";

const NjDevils = () => {
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
            src={njdevil}
            alt="Partnerships"
            className=" w-[200px] mx-auto"
          />
        </div>
        <motion.p
          variants={matrixGlitch(motionDelay)}
          className="dark:text-brand-muted text-brand-dark text-lg text-center mt-3 roboto_regular leading-relaxed"
        >
          Back for Another Season: Protection Technologies Extends Winning
          Affiliate Partnership with the New Jersey Devils
        </motion.p>
        {/* Main content */}
        <div className="relative z-10 pt-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <motion.p
                  variants={matrixGlitch(motionDelay)}
                  className="dark:text-brand-muted text-brand-dark text-lg roboto_regular leading-relaxed"
                >
                  Protection Technologies is proud to continue its Affiliate
                  Partnership with the New Jersey Devils for a second
                  consecutive season. In association with Eleven Sports Media,
                  the Affiliate Partnership with the Devils reinforces the
                  integrated security technology systems expert’s commitment to
                  community engagement.
                  <br />
                  As the company marks four successful decades of redefining
                  security, the Affiliate Partnership highlights Protection
                  Technologies’ dedication to supporting its local community,
                  building meaningful connections and continuing its legacy of
                  innovation and service across New Jersey.
                </motion.p>
              </div>
            </div>

            <motion.div
              variants={fadeIn("right", motionDelay)}
              className={`relative rounded-2xl overflow-hidden `}
            >
              <Image
                src={devil1}
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
                src={devil2}
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
                  Based in the heart of New Jersey, Protection Technologies
                  leads the security industry, specializing in advanced
                  intrusion sensors for a diverse range of clients. With
                  expertise in multi-family, government, commercial and
                  industrial sectors, it offers top-tier security solutions.
                  <br />
                  Protection Technologies handle every aspect of its services
                  from the ground up, ensuring meticulous attention to detail at
                  every step. From start to final delivery, its process is
                  designed to meet the highest standards.
                  <br />
                  Its cutting-edge products include mobile CCTV trailers, with
                  outdoor motion sensors for perimeter security, true day/night
                  IP/analog cameras, for clear surveillance and high-security
                  intrusion sensors, for both indoor and hazardous environments.
                  <br />
                  Through its Affiliate Partnership, Protection Technologies
                  looks forward to supporting local business communities and NHL
                  fans across the region with its tailored, integrated
                  technology solutions.President of Protection Technologies,
                  Mike Singer comments: “We’re delighted to continue our
                  Affiliate Partnership with the New Jersey Devils for a second
                  consecutive season as we celebrate a huge milestone of forty
                  years in business.
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
                  “Since last quarter, we’ve experienced a successful period of
                  growth, expanding our reach to serve Fortune 500 clients
                  across critical infrastructure sites along the East Coast.
                  Being part of the New Jersey Devils Affiliate Partnership
                  highlights the importance for us of giving back to the
                  communities that have backed us on our journey. It also
                  reflects our continued commitment to connect with the fans.
                  <br />
                  “We’re proud to support the Devils, both on and off the ice,
                  and we can’t wait for even more games, more excitement and
                  more unforgettable moments ahead.”
                  <br />
                  As the company builds on its recent success, Protection
                  Technologies is also proud to announce that its growth and
                  leadership excellence has been recognized by Marquis Who’s
                  Who, a prestigious biographical reference directory with over
                  125 years of history.
                  <br />
                  In recognition of his outstanding leadership and industry
                  impact, President Mike Singer has been honoured as a Top
                  Business Owner for 2025 and features in the upcoming edition
                  of Who’s Who in America 2025–2026.
                </motion.p>
              </div>
            </div>
            <motion.div
              variants={fadeIn("right", motionDelay)}
              className={`relative rounded-2xl overflow-hidden `}
            >
              <Image
                src={devil3}
                alt="Company Section"
                className="object-contain"
              />
            </motion.div>
          </div>
          <div className="mt-10">
            <div className="space-y-8">
              <div>
                <motion.p
                  variants={matrixGlitch(motionDelay)}
                  className="dark:text-brand-muted text-brand-dark text-lg roboto_regular leading-relaxed"
                >
                  Under Mike’s guidance, Protection Technologies has emerged as
                  one of the East Coast’s most trusted names in security and
                  systems integration, delivering tailored, technology-driven
                  solutions to clients across industries.
                  <br />
                  Protection Technologies aims to work with companies that are
                  hoping to enhance their security infrastructures or would like
                  to implement integrated protection systems. It offers expert
                  service and customized solutions designed to help any business
                  to thrive.
                  <br />
                  <br />
                  To learn more, visit{" "}
                  <a
                    href="http://www.protectllc.us/"
                    target="_blank"
                    className="text-brand-secondary hover:text-brand-secondaryDark font-semibold transition-all duration-300"
                  >
                    www.protectllc.us
                  </a>
                  <br />
                  Stay updated by following Protection Technologies on LinkedIn.
                  Visit{" "}
                  <a
                    href="https://www.linkedin.com/company/protection-technologies-llc"
                    target="_blank"
                    className="text-brand-secondary hover:text-brand-secondaryDark font-semibold transition-all duration-300"
                  >
                    https://www.linkedin.com/company/protection-technologies-llc
                  </a>
                </motion.p>
              </div>
            </div>
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
                  fans. Eleven’s fan engagement platforms, StadiumTV and
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
            <div className="">
              <div>
                <h2 className="text-2xl font-bold mb-3">Important</h2>
                <motion.p
                  variants={matrixGlitch(motionDelay)}
                  className="dark:text-brand-muted text-brand-dark text-lg roboto_regular leading-relaxed"
                >
                  As the recipient and intended publisher of this editorial, in
                  reading and publishing (or otherwise making use of it), you
                  agree to the terms and conditions of use set out in this
                  disclaimer. References to we, us and our in this disclaimer
                  refers to Eleven Sports Media Incorporated (company number
                  C4791113).
                  <br />
                  You understand that unless otherwise specified, the attached
                  form of editorial is in a form acceptable to the organization,
                  association, institution, club, company, or corporate body in
                  connection with which yours and our mutual client has
                  purchased a partnership package (Host). Where the attached
                  editorial has not been approved by the Host then its use is
                  subject to obtaining such written approval. Where you wish to
                  make any amendments to the editorial then you agree and
                  acknowledge that we may have to seek the prior written consent
                  of the Host in advance of it being made use of (via such media
                  as is permitted by us from time to time). Subject to the
                  above, you agree and acknowledge that you shall only make use
                  of the editorial in the form attached and that you shall not
                  (whether directly or indirectly, including in connection with
                  or through any third-party agency or publisher) make any
                  amendments to the editorial.
                  <br />
                  In consideration for granting you the right to make use of the
                  attached editorial, you agree that you shall indemnify us,
                  keep us indemnified and hold us harmless from and against any
                  and all actions, awards, charges, claims, compensation, costs,
                  damages, demands, expenses, fees, fines, interest,
                  liabilities, losses, penalties, proceedings and settlements
                  suffered or incurred by us, whether in contract, tort
                  (including negligence), breach of statutory duty or otherwise
                  arising out of or in connection with any breach of this
                  disclaimer.
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default NjDevils;
