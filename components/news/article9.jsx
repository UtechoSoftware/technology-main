import { marquis, Mike, news } from "@/public/assets/images";
import Image from "next/image";
import React from "react";
import {
  FaCalendarAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaUserAlt,
} from "react-icons/fa";

export default function Article9() {
  return (
    <article className="bg-brand-ligthSecondary dark:bg-cardGradient rounded-3xl">
      <div className="max-h-[450px] flex items-center justify-center">
        <Image
          src={marquis}
          alt="Mike Singer"
          className="w-full max-h-[470px] object-cover object-top rounded-2xl"
        />
      </div>

      {/* Article Content */}
      <div className="p-4 md:p-8">
        <div className="flex items-center space-x-4 text-sm mb-4 kumbh_sans_regular">
          <div className="flex items-center space-x-2 text-brand-dark dark:text-brand-white">
            <FaUserAlt className="h-3 w-3 text-brand-secondary" />
            <span>Byline: Lyssanoel Frater</span>
          </div>
          <div className="flex items-center space-x-2 text-brand-dark dark:text-brand-white">
            <FaCalendarAlt className="h-3 w-3 text-brand-secondary" />
            <span>February 19, 2026</span>
          </div>
        </div>

        <h1 className="text-3xl kumbh_sans_semibold text-brand-dark dark:text-white mb-6 leading-tight">
          Marquis Who's Who Honors Mike Singer as a Top Entrepreneur
        </h1>

        <div className="prose prose-invert max-w-none">
          <p className="text-brand-dark dark:text-brand-white text-base leading-relaxed mb-6">
            <strong>UNIONDALE, NY / ACCESS Newswire / February 19, 2026 /</strong> Marquis Who's Who honors{" "}
            <a
              href="https://pr.report/iv3x"
              target="_blank"
              className="text-brand-secondary hover:text-brand-secondaryDark font-semibold transition-all duration-300"
            >
              Mike Singer
            </a>{" "}
            as a top entrepreneur. Mr. Singer is the president of{" "}
            <a
              href="https://pr.report/iv3y"
              target="_blank"
              className="text-brand-secondary hover:text-brand-secondaryDark font-semibold transition-all duration-300"
            >
              Protection Technologies LLC
            </a>
            , a security systems integration company. For his expertise in security services, Mr. Singer was honored with inclusion in Marquis Who's Who in September 2025.
          </p>
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-brand-dark dark:text-brand-white text-lg leading-relaxed mb-3 font-semibold">
            About Mr. Mike Singer
          </p>
          <p className="text-brand-dark dark:text-brand-white text-base leading-relaxed mb-6">
            When Mr. Singer was a boy living in Chicago, his uncle was the owner of a locksmith company, which he would often visit. During his time with his uncle, he learned the locksmith trade. This experience set the foundation for his future and proved to be valuable when he moved to New Jersey and opened his own business, All Secure Locksmiths Inc., at the age of 17.
          </p>
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-brand-dark dark:text-brand-white text-lg leading-relaxed mb-3 font-semibold">
            Protection Technologies
          </p>
          <p className="text-brand-dark dark:text-brand-white text-base leading-relaxed mb-6">
            In 1999, Mr. Singer started Protection Technologies LLC, which later acquired his original company. Though the company first started in New Jersey, its service area eventually grew to encompass the entire East Coast. The company is experiencing rapid growth, and Mr. Singer anticipates that its reach will be nationwide by 2030.
            <br />
            Mr. Singer has been in the security industry for four decades. His company works with many well-known businesses, though non-disclosure agreements prevent him from saying much more.
          </p>
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-brand-dark dark:text-brand-white text-lg leading-relaxed mb-3 font-semibold">
            Women in Protection
          </p>
          <p className="text-brand-dark dark:text-brand-white text-base leading-relaxed mb-6">
            Mr. Singer is proud that Protection Technologies LLC is run by women. There are very few women in the security industry, and he decided to give women applying for jobs the opportunity to work for him. They performed well and, in turn, those employees hired more women.
            <br />
            "Our company is run by women, except for me. They run everything. I oversee it, but I have an administrative director who is my second in command and oversees all the operations. We also have a director of system operations who controls all the systems we install, builds the back end, handles remote access, and does repairs. Even that is done by women. It's basically a women-run enterprise except for me," Mr. Singer says.
          </p>
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-brand-dark dark:text-brand-white text-lg leading-relaxed mb-3 font-semibold">
            Employee Respect
          </p>
          <p className="text-brand-dark dark:text-brand-white text-base leading-relaxed mb-6">
            It is important to Mr. Singer that his employees feel respected and benefit from the success of the company. He knows that they can earn a paycheck from any business, so Mr. Singer goes the extra mile to show his appreciation.
            <br />
            "What I try to do is give them experiences they'll never forget, like going to a Daytona 500, an Indy 500 or trips to ISC West, the largest security conference in the world, where they stay in penthouse suites at the top of the Bellagio overlooking the fountain. We do nice things that people will remember."
          </p>
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-brand-dark dark:text-brand-white text-lg leading-relaxed mb-3 font-semibold">
            Roots of Success
          </p>
          <p className="text-brand-dark dark:text-brand-white text-base leading-relaxed mb-6">
            Mr. Singer attributes his success over the span of his career to a deep-rooted sense of integrity. He believes in being direct and honest in his communication with clients. He does not make promises he can't keep and expects those working for him to live up to the high standards he has set for the company.
            <br />
            "We do not cut corners. We make sure it's done correctly and can last. We try to future-proof the building, making sure that the parts we use and the direction we go are still current five or 10 years down the line. I go by my word, so if I say I'm going to do it, it will get done," Mr. Singer says.
          </p>
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-brand-dark dark:text-brand-white text-lg leading-relaxed mb-3 font-semibold">
            About Marquis Who's Who®:
          </p>
          <p className="text-brand-dark dark:text-brand-white text-base leading-relaxed mb-6">
            Since 1899, when A. N. Marquis printed the First Edition of Who's Who in America®, Marquis Who's Who® has chronicled the lives of the most accomplished individuals and innovators from every significant field, including politics, business, medicine, law, education, art, religion and entertainment. Who's Who in America® remains an essential biographical source for thousands of researchers, journalists, librarians and executive search firms worldwide. The suite of Marquis® publications can be viewed at the official Marquis Who's Who® website,{" "}
            <a
              href="https://marquiswhoswho.com/"
              target="_blank"
              className="text-brand-secondary hover:text-brand-secondaryDark font-semibold transition-all duration-300"
            >
              www.marquiswhoswho.com
            </a>
            .
          </p>
          <p className="text-brand-dark dark:text-brand-white text-base leading-relaxed mb-6">
            Marquis Who's Who<br />
            Uniondale, NY<br />
            <strong>(844) 394 - 6946</strong><br />
            <a
              href="mailto:info@marquiswhoswho.com"
              className="text-brand-secondary hover:text-brand-secondaryDark font-semibold transition-all duration-300"
            >
              info@marquiswhoswho.com
            </a>
          </p>
          <div className="flex flex-col gap-2">
            <a
              href="https://marquiswhoswho.com/"
              target="_blank"
              className="text-brand-secondary hover:text-brand-secondaryDark font-semibold transition-all duration-300"
            >
              www.marquiswhoswho.com
            </a>
            <a
              href="https://www.24-7pressrelease.com/press-release/527685/marquis-whos-who-honors-mike-singer-for-expertise-in-security-services"
              target="_blank"
              className="text-brand-secondary hover:text-brand-secondaryDark font-semibold transition-all duration-300"
            >
              Read Full Article
            </a>
            <a
              href="/Mike Singer Marquis Whos Who.docx"
              className="text-brand-secondary hover:text-brand-secondaryDark font-semibold transition-all duration-300"
              target="_blank"
            >
              Download Document
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mt-6">
          <div className="flex items-center space-x-2">
            <span className="text-brand-dark dark:text-brand-white text-lg kumbh_sans_semibold ">
              Tags:
            </span>
            <div className="flex flex-wrap gap-2">
              <span className="text-brand-dark dark:text-brand-white px-3 py-1 rounded-full text-sm border border-brand-secondary/30">
                Mike Singer
              </span>
              <span className="text-brand-dark dark:text-brand-white px-3 py-1 rounded-full text-sm border border-brand-secondary/30">
                Marquis Who's Who
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