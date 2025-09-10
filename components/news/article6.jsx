import {
  press1,
  press1Sub1,
  press1Sub2,
  press1Sub3,
  press2Sub1,
  press3,
  press3Sub1,
  press3Sub2,
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

export default function Article6() {
  return (
    <article className="bg-brand-ligthSecondary dark:bg-cardGradient rounded-3xl">
      <div className="max-h-[450px] flex items-center justify-center">
        <Image
          src={press3}
          alt="Article"
          className="w-full max-h-[450px] object-top object-cover rounded-2xl"
        />
      </div>

      {/* Article Content */}
      <div className="p-4 md:p-8">
        <div className="flex items-center space-x-4 text-sm mb-4 kumbh_sans_regular">
          <div className="flex items-center space-x-2 text-brand-dark dark:text-brand-white">
            <FaUserAlt className="h-3 w-3 text-brand-secondary" />
            <span>BY IBN</span>
          </div>
          <div className="flex items-center space-x-2 text-brand-dark dark:text-brand-white">
            <FaCalendarAlt className="h-3 w-3 text-brand-secondary" />
            <span>06 September 2025</span>
          </div>
        </div>

        <h1 className="text-3xl kumbh_sans_semibold text-brand-dark dark:text-white mb-6 leading-tight">
          Security Meets Vision: How Mike Singer’s Principles Drive Protection
          Technologies LLC’s Cutting-Edge Solutions
        </h1>

        <div className="prose prose-invert max-w-none">
          <p className="text-brand-dark dark:text-brand-white text-base leading-relaxed mb-6">
            The story of Protection Technologies LLC is as much about people and
            principles as it is about advanced technology. Founded by Mike
            Singer in 1999, the company has grown from a vision born out of his
            teenage locksmithing days into one of the East Coast’s most
            respected names in systems integration. What makes the company stand
            out is not only its technical expertise but the philosophy behind
            it—an approach that blends innovation with integrity.
          </p>
        </div>

        <div className="max-h-[450px] flex items-center mb-4 justify-center">
          <Image
            src={press3Sub1}
            alt="Article"
            className="w-full max-h-[450px] object-contain rounded-2xl"
          />
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-brand-dark dark:text-brand-white text-base leading-relaxed mb-6">
            Singer has always believed that success comes from doing things the
            right way. His values—keep your word, be upfront, and never
            compromise on integrity—have shaped the business just as much as the
            Low Voltage alarms, access control, and CCTV systems it delivers.
            From the beginning, he invested his personal resources into building
            a company that could sustain itself long-term. Operating without
            debt gave Protection Technologies LLC the freedom to innovate,
            develop its own branded security platforms, and partner with leading
            manufacturers like Iloq, Assa Abloy, PDK, and Amazon on pilot
            programs that influence the industry’s future.
          </p>
        </div>
        <div className="max-h-[450px] flex items-center mb-4 justify-center">
          <Image
            src={press2Sub1}
            alt="Article"
            className="w-full max-h-[450px] object-contain rounded-2xl"
          />
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-brand-dark dark:text-brand-white text-base leading-relaxed mb-6">
            The company’s achievements are a reflection of this dual commitment
            to vision and execution. Winning the Iloq Award as the world’s first
            Global Platinum Dealer and Partner is evidence of its technical
            leadership, while a steady stream of referrals from satisfied
            clients and vendors speaks to the trust Singer and his team have
            earned. From large corporations and federal agencies to residential
            customers, the company has built a reputation for reliability that
            comes from both cutting-edge technology and the honesty behind its
            delivery.
          </p>
        </div>

        <div className="max-h-[450px] flex items-center mb-4 justify-center">
          <Image
            src={press3Sub2}
            alt="Article"
            className="w-full max-h-[450px] object-contain rounded-2xl"
          />
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-brand-dark dark:text-brand-white text-base leading-relaxed mb-6">
            Singer’s leadership style is also part of the equation. By ensuring
            that all key leadership roles are held by women and cultivating a
            workforce that represents more than a dozen nationalities, he has
            built a culture where diversity drives creative solutions. Employees
            are treated with the same respect and comfort he expects for
            himself, whether that means investing in their professional growth
            or simply ensuring they’re cared for while working on long projects.
            The result is a team that brings passion, innovation, and loyalty to
            every client relationship.
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
