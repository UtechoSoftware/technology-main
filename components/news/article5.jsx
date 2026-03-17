import {
  press1,
  press1Sub1,
  press1Sub2,
  press1Sub3,
  press2,
  press2Sub1,
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

export default function Article5() {
  return (
    <article className="bg-brand-ligthSecondary dark:bg-cardGradient rounded-3xl">
      <div className="max-h-[450px] flex items-center justify-center">
        <Image
          src={press2}
          alt="Protection Technologies LLC leadership and business philosophy"
          className="w-full max-h-[450px] object-top object-cover rounded-2xl"
        />
      </div>

      {/* Article Content */}
      <div className="p-4 md:p-8">
        <div className="flex items-center space-x-4 text-sm mb-4 kumbh_sans_regular">
          <div className="flex items-center space-x-2 text-brand-dark dark:text-brand-white">
            <FaUserAlt className="h-3 w-3 text-brand-secondary" />
            <span>BY Medium</span>
          </div>
          <div className="flex items-center space-x-2 text-brand-dark dark:text-brand-white">
            <FaCalendarAlt className="h-3 w-3 text-brand-secondary" />
            <span>06 September 2025</span>
          </div>
        </div>

        <h1 className="text-3xl kumbh_sans_semibold text-brand-dark dark:text-white mb-6 leading-tight">
          Leading with Integrity: The Business Philosophy Behind Protection
          Technologies LLC
        </h1>

        <div className="prose prose-invert max-w-none">
          <p className="text-brand-dark dark:text-brand-white text-base leading-relaxed mb-6">
            For Mike Singer, leadership has always been about more than numbers
            and growth. From the earliest days of Protection Technologies LLC,
            he built the company on a foundation of loyalty, fairness, and
            trust. Those values became the compass that guided every decision,
            from the way the company interacts with clients to how it treats its
            employees.
          </p>
        </div>
        <div className="prose prose-invert max-w-none">
          <p className="text-brand-dark dark:text-brand-white text-base leading-relaxed mb-6">
            One of the most striking aspects of Protection Technologies LLC is
            its leadership structure — every key leadership role is held by
            women. Singer believes that diverse leadership brings a broader
            range of perspectives, fosters more creative problem-solving, and
            results in solutions that truly reflect the needs of clients. The
            workforce itself represents over a dozen nationalities, a deliberate
            choice to create an environment where inclusion drives innovation.
          </p>
        </div>

        <div className="max-h-[450px] flex items-center mb-4 justify-center">
          <Image
            src={press2Sub1}
            alt="Protection Technologies LLC leadership and business philosophy"
            className="w-full max-h-[450px] object-contain rounded-2xl"
          />
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-brand-dark dark:text-brand-white text-base leading-relaxed mb-6">
            Singer’s philosophy is simple but powerful: keep your word, even
            when it doesn’t benefit you. Be direct. Do what you say. These
            guiding principles have not only helped him build lasting
            relationships with clients but have also inspired loyalty among his
            team. Employees know that when the company makes a promise, it will
            be kept. This culture of accountability has become part of the
            company’s identity, setting it apart in an industry where trust is
            everything.
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
