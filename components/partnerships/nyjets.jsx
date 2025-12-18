"use client";
import {
  companySectionImage,
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

const NyJets = () => {
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
            src={jetPersonal}
            alt="Partnerships"
            className=" w-[200px] mx-auto"
          />
        </div>
        <motion.p
          variants={matrixGlitch(motionDelay)}
          className="dark:text-brand-muted text-brand-dark text-lg text-center mt-3 roboto_regular leading-relaxed"
        >
          Protection Technologies Celebrates 40 Year Anniversary with NY Jets
          Small Business Partnership
        </motion.p>
        {/* Main content */}
        <div className="relative z-10 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <motion.p
                  variants={matrixGlitch(motionDelay)}
                  className="dark:text-brand-muted text-brand-dark text-lg roboto_regular leading-relaxed"
                >
                  Integrated Security Technology Systems expert, Protection
                  Technologies is proud to announce that it has joined the New
                  York Jets Small Business Partnership. The collaboration, in
                  association with Eleven Sports Media, reinforces the company’s
                  commitment to community engagement as it marks its 40th
                  anniversary, celebrating four decades of excellence.
                  <br />
                  The Small Business Partnership reflects Protection
                  Technologies’ dedication to supporting local initiatives,
                  fostering meaningful connections and continuing its legacy of
                  innovation and service across the tri-state area.
                </motion.p>
              </div>
            </div>

            <motion.div
              variants={fadeIn("right", motionDelay)}
              className={`relative rounded-2xl overflow-hidden `}
            >
              <Image
                src={jet1}
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
                src={jet2}
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
                  Based in Pine Brook, NJ, Protection Technologies leads the
                  security industry, specializing in advanced intrusion sensors
                  for a diverse range of clients. With expertise in
                  multi-family, government, commercial and industrial sectors,
                  it offers top-tier security solutions. The company handles
                  every aspect of its services from the ground up, ensuring
                  meticulous attention to detail at every step. From start to
                  final delivery, its process is designed to meet the highest
                  standards.
                  <br />
                  Protection Technologies’ cutting-edge products include mobile
                  CCTV trailers with outdoor motion sensors, for perimeter
                  security, true day/night; IP/analog cameras, for clear
                  surveillance and high-security intrusion sensors, for both
                  indoor and hazardous environments.
                  <br />
                  Through the Small Business Partnership, Protection
                  Technologies looks forward to supporting local business
                  communities and NFL fans across the region with its tailored,
                  integrated technology solutions. President of Protection
                  Technologies, LLC. Mike Singer comments: “This year marks a
                  major milestone for Protection Technologies as we proudly
                  celebrate 40 years in the industry.
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
                  “Since last quarter, we’ve experienced substantial growth,
                  expanding our reach to serve Fortune 500 clients across
                  critical infrastructure sites along the East Coast.
                  <br />
                  “Joining the New York Jets Small Business Partnership is a
                  meaningful way for us to give back to the communities that
                  have supported our journey and to continue building strong,
                  local connections with the fans.”
                  <br />
                  The news of the Partnership follows other successes for
                  Protection Technologies as it recently announced its status as
                  an official Mosino One Channel Partner. The Mosino one Channel
                  Partnership allows it to offer its cutting-edge technology
                  solutions to members of Mosino One’s smart community platform,
                  helping them elevate the way communities and buildings
                  operate.
                  <br />
                </motion.p>
              </div>
            </div>
            <motion.div
              variants={fadeIn("right", motionDelay)}
              className={`relative rounded-2xl overflow-hidden `}
            >
              <Image
                src={jet3}
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
              The recent growth of the company has been recognized by Marquis
              Who’s Who, one of the world’s most respected biographical
              reference directories for over 125 years. In acknowledgment of his
              leadership and impact, President Mike Singer has been named a Top
              Business Owner for 2025 and featured as a subject of biographical
              record in Who’s Who in America 2025–2026. Under his leadership,
              Protection Technologies LLC has become one of the East Coast's
              most respected names in security and systems integration.
              <br />
              Protection Technologies is keen to reach out to those businesses
              that are ready to elevate their protection with tailored,
              integrated technology solutions, provided by a professional and
              knowledgeable security company that’s committed to delivering
              customised solutions designed to succeed.
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
              You can also keep-up-to-date with all the latest news from
              Protection Technologies by following its LinkedIn page -
              <a
                href="https://www.linkedin.com/company/protection-technologies-llc/"
                target="_blank"
                className="text-brand-secondary hover:text-brand-secondaryDark font-semibold transition-all duration-300"
              >
                LinkedIn
              </a>
            </motion.p>
          </div>
          {/* <div className="grid lg:grid-cols-2 gap-12 items-center mt-10">
            <motion.div
              variants={fadeIn("right", motionDelay)}
              className={`relative rounded-2xl overflow-hidden `}
            >
              <Image
                src={companySectionImage}
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
          </div> */}
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

export default NyJets;
