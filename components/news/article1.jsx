import { news } from "@/public/assets/images";
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

export default function Article1() {
  return (
    <article className="bg-brand-ligthSecondary dark:bg-cardGradient rounded-3xl">
      <div className="max-h-[450px] flex items-center justify-center">
        <Image
          src={news}
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
          Latch Announces First Building-Wide Installation of ‘Works with Latch’
          Marks USA Locks
        </h1>

        <div className="prose prose-invert max-w-none">
          <p className="text-brand-dark dark:text-brand-white text-base leading-relaxed mb-6">
            NEW YORK & SOUTH ORANGE, N.J.--(BUSINESS WIRE)--Latch, Inc. (NASDAQ:
            LTCH), maker of LatchOS, the full-building enterprise
            software-as-a-service (SaaS) platform, today announced the
            completion of the first installation of Latch-powered Marks USA
            ArchiTech Series Networx Locks at Meridia Living’s Meridia Village
            Commons in South Orange, NJ. Residents of the new construction
            building of 106 units will benefit from Latch’s full-building smart
            access, flexible unlock methods, and concierge capabilities,
            delivering a seamless resident and property management experience.
          </p>
        </div>

        <div className="dark:bg-cardGradient bg-brand-ligthSecondaryDark p-4 md:p-8 rounded-2xl my-4">
          <blockquote className="prose prose-invert max-w-none">
            <p className="text-brand-muted kumbh_sans_medium text-base leading-relaxed mb-6">
              “This first installation with Marks USA is a milestone in
              accelerating Latch’s vision to make it easier for customers to
              deliver the best resident experience. Marks USA locks integrated
              with Latch’s technology should streamline new and retrofit
              installations moving forward and help expand Latch’s footprint in
              new market segments. This installation serves as a proof of
              concept for similar opportunities in the future.”
            </p>
          </blockquote>
          <div className="flex items-center justify-between space-x-2 text-brand-dark dark:text-brand-white">
            <div className="flex flex-col flex-1">
              <h3 className="text-brand-secondary text-lg kumbh_sans_semibold">
                Jamie Siminoff, Latch’s
              </h3>
              <p className="text-brand-dark dark:text-brand-white text-sm mb-0">
                incoming CEO
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <Quote className="h-9 w-9 text-brand-secondary" />
            </div>
          </div>
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-brand-dark dark:text-brand-white text-base leading-relaxed mb-6">
            This integration merges Latch’s app experience and Latch Lens with a
            vast array of customizable architectural door hardware from Marks
            USA, a division of NAPCO Security Technologies. The Latch app
            enables authorized users and residents to unlock the door in
            whatever manner they choose, such as with an iOS or Android device,
            Apple Watch, keycard, or door code, for unparalleled convenience and
            flexibility.
          </p>
        </div>

        <div className="dark:bg-cardGradient bg-brand-ligthSecondaryDark p-4 md:p-8 rounded-2xl my-4">
          <blockquote className="prose prose-invert max-w-none">
            <p className="text-brand-muted kumbh_sans_medium text-base leading-relaxed mb-6">
              “Working with Latch, we are able to deliver a modern, elevated
              access control experience to our customers and their end users,
              aesthetically matching Marks door locks inside and outside the
              building, We are thrilled to complete our first installation
              together and look forward to bringing this more fluid user
              experience to more spaces and residents, teaming the considerable
              strengths of Latch’s access control and property management
              technology with Marks USA Custom Locking.”
            </p>
          </blockquote>
          <div className="flex items-center justify-between space-x-2 text-brand-dark dark:text-brand-white">
            <div className="flex flex-col flex-1">
              <h3 className="text-brand-secondary text-lg kumbh_sans_semibold">
                Stephen Spinelli
              </h3>
              <p className="text-brand-dark dark:text-brand-white text-sm mb-0">
                SVP of Sales at NAPCO
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <Quote className="h-9 w-9 text-brand-secondary" />
            </div>
          </div>
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-brand-dark dark:text-brand-white text-base leading-relaxed mb-6">
            Meridia Living, along with Latch’s installation partner Protection
            Technologies, helped make this project possible. In addition to
            managing the installation process, Protection Technologies was
            instrumental in the design, servicing, and support for this project.
          </p>
        </div>

        <div className="dark:bg-cardGradient bg-brand-ligthSecondaryDark p-4 md:p-8 rounded-2xl my-4">
          <blockquote className="prose prose-invert max-w-none">
            <p className="text-brand-muted kumbh_sans_medium text-base leading-relaxed mb-6">
              “Delivering the best possible living experience is always our
              primary goal, By partnering with Latch and Marks USA on this
              project, we were able to do just that, offering the latest
              technology and increased flexibility to suit the needs and
              lifestyle of each individual resident.”
            </p>
          </blockquote>
          <div className="flex items-center justify-between space-x-2 text-brand-dark dark:text-brand-white">
            <div className="flex flex-col flex-1">
              <h3 className="text-brand-secondary text-lg kumbh_sans_semibold">
                Brian J. Pfistner
              </h3>
              <p className="text-brand-dark dark:text-brand-white text-sm mb-0">
                Chief Asset Officer at Meridia Living
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <Quote className="h-9 w-9 text-brand-secondary" />
            </div>
          </div>
        </div>

        <div className="dark:bg-cardGradient bg-brand-ligthSecondaryDark p-4 md:p-8 rounded-2xl my-4">
          <blockquote className="prose prose-invert max-w-none">
            <p className="text-brand-muted kumbh_sans_medium text-base leading-relaxed mb-6">
              “We are honored to support Latch and Marks USA on this
              installation to provide high-quality, reliable access control to
              the residents of Meridia Village Commons, We look forward to
              continuing our relationship with Latch to help provide a superior
              living and property management experience to more developments in
              the future.”
            </p>
          </blockquote>
          <div className="flex items-center justify-between space-x-2 text-brand-dark dark:text-brand-white">
            <div className="flex flex-col flex-1">
              <h3 className="text-brand-secondary text-lg kumbh_sans_semibold">
                Mike Singer
              </h3>
              <p className="text-brand-dark dark:text-brand-white text-sm mb-0">
                President at Protection Technologies
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <Quote className="h-9 w-9 text-brand-secondary" />
            </div>
          </div>
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-brand-dark dark:text-brand-white text-base leading-relaxed mb-6">
            To learn more about Latch or to partner with Latch, visit
            www.latch.com or email incoming CEO Jamie Siminoff directly at
            j@latch.com.
          </p>
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-brand-dark dark:text-brand-white text-base leading-relaxed mb-6">
            About Latch, Inc.
          </p>
          <p className="text-brand-dark dark:text-brand-white text-base leading-relaxed mb-6">
            Latch makes spaces better places to live, work, and visit through a
            system of software, devices, and services. For more information,
            please visit www.latch.com.
          </p>
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-brand-dark dark:text-brand-white text-base leading-relaxed mb-6">
            This release contains certain forward-looking statements within the
            meaning of the federal securities laws with respect to Latch and/or
            Honest Day’s Work, which is expected to merge with Latch in the
            third quarter of 2023 (the “Merger”). These forward-looking
            statements generally are identified by the words "believe,"
            "project," "expect," "anticipate," "estimate," "intend," "strategy,"
            "future," "opportunity," "plan," "may," "should," "would," "will
            continue," "will likely result," and similar expressions.
            Forward-looking statements are predictions, projections, and other
            statements about future events that are based on current
            expectations and assumptions and, as a result, are subject to risks
            and uncertainties. Forward-looking information includes, but is not
            limited to, statements regarding: Latch’s and Honest Day’s Work’s
            current and future products, integrations, pricing, financial
            performance, strategies, and operations, and the related benefits to
            stockholders, customers, and residents; expected growth of demand
            for Latch’s and Honest Day’s Work’s current and future products and
            their adoption by customers; Latch and Honest Day’s Work industry
            positions; the ability of Latch to successfully integrate Honest
            Day’s Work post-acquisition and realize the benefits of such
            acquisition, including the expected performance of the combined
            company’s management team; and the transition in Latch’s CEO
            position. Many factors could cause actual future events to differ
            materially from the forward-looking statements in this document,
            including: (i) whether the Merger is completed in a timely manner or
            at all; (ii) the risk that the Merger may involve unexpected costs
            or liabilities; (iii) the effect of the announcement or completion
            of the Merger on Latch’s and Honest Day’s Work’s operations and
            relationships with customers, suppliers, and personnel; (iv) the
            outcome of legal proceedings, if any, related to the Merger; (v)
            Latch’s ability to implement business plans; (vi) changes and
            developments in the industry in which Latch competes; (vii) Latch’s
            ability to regain and maintain compliance with the listing standards
            of The Nasdaq Stock Market LLC, and the impact of the Merger
            thereon; and (viii) Latch’s ability to timely complete the ongoing
            restatement of its consolidated financial statements for 2019, 2020,
            2021, and the first quarter of 2022, and the impact of the Merger
            thereon. The foregoing list of factors is not exhaustive. You should
            carefully consider the foregoing factors and the other risks and
            uncertainties described in the "Risk Factors" section of our Annual
            Report on Form 10-K filed with the SEC on March 1, 2022, and other
            documents subsequently filed by Latch from time to time with the
            Securities and Exchange Commission (the “SEC”). These filings
            identify and address other important risks and uncertainties that
            could cause actual events and results to differ materially from
            those contained in the forward-looking statements. Forward-looking
            statements speak only as of the date they are made. Readers are
            cautioned not to put undue reliance on forward-looking statements,
            and Latch assumes no obligation to update or revise these
            forward-looking statements, whether as a result of new information,
            future events, or otherwise, except as required by law, including
            the securities laws of the United States and the rules and
            regulations of the SEC. Latch does not give any assurance that it
            will achieve its expectations.
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
