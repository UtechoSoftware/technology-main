import { remote } from "@/public/assets/images";
import { Quote } from "lucide-react";
import Image from "next/image";
import {
  FaCalendarAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaUserAlt,
} from "react-icons/fa";

export default function Article2() {
  return (
    <article className="bg-brand-ligthSecondary dark:bg-cardGradient rounded-3xl">
      <div className="max-h-[450px] flex items-center justify-center">
        <Image
          src={remote}
          alt="Article"
          className="w-full max-h-[450px] object-cover rounded-2xl"
        />
      </div>

      {/* Article Content */}
      <div className="p-4 md:p-8">
        <div className="flex items-center space-x-4 text-sm mb-4 kumbh_sans_regular">
          <div className="flex items-center space-x-2 text-brand-dark dark:text-brand-white">
            <FaUserAlt className="h-3 w-3 text-brand-secondary" />
            <span>BY Tech</span>
          </div>
          <div className="flex items-center space-x-2 text-brand-dark dark:text-brand-white">
            <FaCalendarAlt className="h-3 w-3 text-brand-secondary" />
            <span>January 15, 2024</span>
          </div>
        </div>

        <h1 className="text-3xl kumbh_sans_semibold text-brand-dark dark:text-white mb-6 leading-tight">
          Why 24/7 Remote Video Surveillance Is Essential for Modern Businesses
        </h1>

        <div className="prose prose-invert max-w-none">
          <p className="text-brand-dark dark:text-brand-white text-base leading-relaxed mb-6">
            In today’s fast-paced world, businesses face evolving security
            challenges. 24/7 remote video surveillance not only deters
            unauthorized access but also provides real-time monitoring and rapid
            response to incidents. With advanced video analytics and live
            monitoring, companies can ensure the safety of their assets and
            personnel around the clock.
          </p>
          <ul className="text-brand-dark dark:text-brand-white text-base leading-relaxed mb-6 list-disc pl-6">
            <li>
              Crime Deterrence: Visible cameras discourage theft, vandalism, and
              trespassing.
            </li>
            <li>
              Incident Documentation: High-definition footage provides crucial
              evidence for investigations and insurance claims.
            </li>
            <li>
              Remote Access: Business owners and managers can monitor premises
              from anywhere using smartphones or computers.
            </li>
            <li>
              Integration with Alarms: Automated alerts trigger immediate
              response to suspicious activity.
            </li>
            <li>
              Employee Safety: Surveillance helps ensure a safe environment for
              staff, especially during late hours.
            </li>
            <li>
              Operational Oversight: Managers can review footage to improve
              workflows and resolve disputes.
            </li>
          </ul>
        </div>

        <div className="dark:bg-cardGradient bg-brand-ligthSecondaryDark p-4 md:p-8 rounded-2xl my-4">
          <blockquote className="prose prose-invert max-w-none">
            <p className="text-brand-muted kumbh_sans_medium text-base leading-relaxed mb-6">
              “Our expert 24/7 monitoring and live remote video surveillance
              services deliver peace of mind to business owners, ensuring their
              premises are always protected.”
            </p>
          </blockquote>
          <div className="flex items-center justify-between space-x-2 text-brand-dark dark:text-brand-white">
            <div className="flex flex-col flex-1">
              <h3 className="text-brand-secondary text-lg kumbh_sans_semibold">
                Protection Technologies Team
              </h3>
              <p className="text-brand-dark dark:text-brand-white text-sm mb-0">
                Security Experts
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <Quote className="h-9 w-9 text-brand-secondary" />
            </div>
          </div>
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-brand-dark dark:text-brand-white text-base leading-relaxed mb-6">
            With scalable solutions and expert technical support, businesses can
            customize surveillance to fit their unique needs, from single
            offices to large industrial complexes. This proactive approach not
            only prevents incidents but also provides valuable evidence if
            needed.
          </p>
          <p className="text-brand-dark dark:text-brand-white text-base leading-relaxed mb-6">
            <b>Popular Features Offered:</b>
            <ul className="list-disc pl-6">
              <li>Motion detection and AI-based threat recognition</li>
              <li>Cloud-based video storage for secure, easy access</li>
              <li>Integration with access control and alarm systems</li>
              <li>Customizable alert settings for specific zones or times</li>
            </ul>
          </p>
          <p className="text-brand-dark dark:text-brand-white text-base leading-relaxed mb-6">
            Investing in 24/7 surveillance is not just about security—it's about
            peace of mind, compliance, and operational excellence.
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mt-6">
          <div className="flex items-center space-x-2">
            <span className="text-brand-dark dark:text-brand-white text-lg kumbh_sans_semibold ">
              Tags:
            </span>
            <div className="flex flex-wrap gap-2">
              <span className="text-brand-dark dark:text-brand-white px-3 py-1 rounded-full text-sm border border-brand-secondary/30">
                Real Estate
              </span>
              <span className="text-brand-dark dark:text-brand-white px-3 py-1 rounded-full text-sm border border-brand-secondary/30">
                Security
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
