import {
  press1,
  press1Sub1,
  press1Sub2,
  press1Sub3,
} from "@/public/assets/images";
import { Quote } from "lucide-react";
import Image from "next/image";
import React from "react";
import {
  FaCalendarAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaUserAlt,
} from "react-icons/fa";

export default function Article4() {
  return (
    <article className="bg-brand-ligthSecondary dark:bg-cardGradient rounded-3xl">
      <div className="max-h-[450px] flex items-center justify-center">
        <Image
          src={press1}
          alt="Protection Technologies LLC security systems integration and technology"
          className="w-full max-h-[450px] object-cover rounded-2xl"
        />
      </div>

      {/* Article Content */}
      <div className="p-4 md:p-8">
        <div className="flex items-center space-x-4 text-sm mb-4 kumbh_sans_regular">
          <div className="flex items-center space-x-2 text-brand-dark dark:text-brand-white">
            <FaUserAlt className="h-3 w-3 text-brand-secondary" />
            <span>BY NEWYORK WEEKLY TIMES</span>
          </div>
          <div className="flex items-center space-x-2 text-brand-dark dark:text-brand-white">
            <FaCalendarAlt className="h-3 w-3 text-brand-secondary" />
            <span>04 September 2025</span>
          </div>
        </div>

        <h1 className="text-3xl kumbh_sans_semibold text-brand-dark dark:text-white mb-6 leading-tight">
          Inside the Technology: How Protection Technologies LLC Delivers
          Security You Can Trust
        </h1>

        <div className="prose prose-invert max-w-none">
          <p className="text-brand-dark dark:text-brand-white text-base leading-relaxed mb-6">
            Protection Technologies LLC has built its reputation on more than
            three decades of delivering reliable, future-ready security
            solutions. Founded by Mike Singer in 1999, the company has become
            synonymous with innovation in alarm, access control, and CCTV
            systems. What sets the business apart is not just the range of
            technologies it provides, but the way those solutions are integrated
            seamlessly into the daily lives of clients across residential,
            commercial, industrial, and government sectors.
          </p>
        </div>

        <div className="max-h-[450px] flex items-center mb-4 justify-center">
          <Image
            src={press1Sub1}
            alt="Protection Technologies LLC security systems integration and technology"
            className="w-full max-h-[450px] object-contain rounded-2xl"
          />
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-brand-dark dark:text-brand-white text-base leading-relaxed mb-6">
            Rather than relying on one-size-fits-all products, the company takes
            a systems integration approach, carefully designing solutions that
            anticipate both current and future needs. Over the years, Protection
            Technologies LLC has gone beyond simply implementing available
            tools, developing and branding its own CCTV and entry systems along
            with a mobile app that allows clients to manage their security with
            ease. The company’s partnerships with leading manufacturers such as
            Iloq, Assa Abloy, PDK, Speco, DW, Latch, Butterfly, and Amazon
            ensure access to the latest technologies, while its participation in
            pilot programs helps shape the innovations that enter the market.
          </p>
        </div>
        <div className="max-h-[450px] flex items-center mb-4 justify-center">
          <Image
            src={press1Sub2}
            alt="Protection Technologies LLC security systems integration and technology"
            className="w-full max-h-[450px] object-contain rounded-2xl"
          />
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-brand-dark dark:text-brand-white text-base leading-relaxed mb-6">
            This dedication to technology has earned industry recognition,
            including the Iloq Award as the world’s first Global Platinum Dealer
            and Partner. More importantly, it has built trust among some of the
            largest companies in the world, as well as with federal agencies
            that require uncompromising security standards. Operating with zero
            debt has also allowed Protection Technologies LLC to maintain strong
            buying power, move quickly to source new products, and provide a
            level of agility that larger, slower-moving competitors often
            struggle to match.
          </p>
        </div>

        <div className="max-h-[450px] flex items-center mb-4 justify-center">
          <Image
            src={press1Sub3}
            alt="Protection Technologies LLC security systems integration and technology"
            className="w-full max-h-[450px] object-contain rounded-2xl"
          />
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-brand-dark dark:text-brand-white text-base leading-relaxed mb-6">
            At the heart of it all is a philosophy that security should be more
            than protection—it should be peace of mind. Clients know that the
            systems installed by Protection Technologies LLC are built not just
            to work today, but to grow with them tomorrow. That combination of
            foresight, innovation, and reliability has made the company a leader
            on the East Coast and is now fueling its ambition to expand
            nationwide. For businesses and homeowners alike, it’s not just about
            technology—it’s about having a trusted partner who ensures safety is
            never compromised.
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mt-6">
          <div className="flex items-center space-x-2">
            <span className="text-brand-dark dark:text-brand-white text-lg kumbh_sans_semibold ">
              Tags:
            </span>
            <div className="flex flex-wrap gap-2">
              <span className="text-brand-dark dark:text-brand-white px-3 py-1 rounded-full text-sm border border-brand-secondary/30">
                Technology
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
