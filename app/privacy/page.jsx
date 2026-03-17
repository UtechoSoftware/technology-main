import PageSection from "@/components/common/pageSection";
import ContactSection from "@/components/home/ContactSection";
import { privacy } from "@/public/assets/images";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import React from "react";

export const metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${siteConfig.name}. How we collect, use, and protect your information when you use our website and services.`,
};

export default function Privacy() {
  return (
    <div className="bg-brand-ligthSecondary dark:bg-gradienttbsmooth ">
      <PageSection
        title="Privacy Policy"
        breadcrumb="Privacy Policy"
        url="https://cdn.midjourney.com/video/19844db8-1fc1-4f68-988b-3cbda48f6f87/0.mp4"
      />
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-16">
        <div className="relative">
          <Image
            src={privacy}
            alt="Privacy"
            className="w-full  object-cover rounded-2xl"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
        </div>
        <div className="my-6">
          <h2 className="text-2xl kumbh_sans_semibold text-brand-dark dark:text-white mb-6">
            Privacy Policy
          </h2>
          <h2 className="text-lg kumbh_sans_medium text-brand-dark dark:text-brand-secondary2 mb-6">
            Effective Date: July 28, 2025
          </h2>
          <p className="text-brand-muted text-base leading-relaxed mb-6">
            Protection Technologies LLC ("we," "our," or "us") respects your
            privacy and is committed to protecting the personal information you
            share with us through our website.
            <br />
            This Privacy Policy explains how we collect, use, disclose, and
            safeguard your information when you visit our website and interact
            with us online. By using our site, you consent to the practices
            described in this policy.
          </p>
          <h3 className="text-xl kumbh_sans_semibold text-brand-dark dark:text-white mb-2">
            Information We Collect
          </h3>
          <p className="text-brand-muted text-base leading-relaxed mb-4">
            We may collect the following types of personal and non-personal
            information:
            <br />
          </p>
          <ul className="list-disc ms-5 mb-4">
            <li>
              Personal Information: Name, email address, phone number, address,
              company name, job title, etc., when you voluntarily provide it
              through forms or account sign-ups.
            </li>
            <li>
              Automated Data: IP address, browser type, pages visited, and the
              time spent on our website, collected through cookies and similar
              technologies.
            </li>
            <li>
              Device Information: Type of device, operating system, and unique
              device identifiers.
            </li>
          </ul>
          <h3 className="text-xl kumbh_sans_semibold text-brand-dark dark:text-white mb-2">
            How We Share Your Information
          </h3>
          <p className="text-brand-muted text-base leading-relaxed mb-3">
            We do not sell your personal information. We may share your
            information in the following circumstances:
            <br />
          </p>
          <ul className="list-disc ms-5 mb-4">
            <li>
              With service providers and partners who help us operate our
              website and services
            </li>
            <li>When required by law or to comply with legal processes</li>
            <li>
              To protect the rights and safety of our company, employees, users,
              or the public
            </li>
            <li>
              As part of a business transfer such as a merger or acquisition
            </li>
          </ul>
          <h3 className="text-xl kumbh_sans_semibold text-brand-dark dark:text-white mb-2">
            Cookies and Tracking Technologies
          </h3>
          <p className="text-brand-muted text-base leading-relaxed mb-3">
            Our website may use cookies and similar technologies to enable
            essential site functionality, remember your preferences, and
            improve your experience. We do not sell your data or use
            third-party advertising cookies.
          </p>
          <p className="text-brand-muted text-base leading-relaxed mb-4">
            You can manage your cookie preferences through your browser
            settings. Disabling cookies may affect site performance or
            certain features.
          </p>
          <h3 className="text-xl kumbh_sans_semibold text-brand-dark dark:text-white mb-2">
            Data Security
          </h3>
          <p className="text-brand-muted text-base leading-relaxed mb-4">
            We use industry-standard security measures to protect the
            confidentiality and integrity of your information. While we strive
            to protect your data, no method of transmission over the Internet is
            100% secure.
          </p>

          <h3 className="text-xl kumbh_sans_semibold text-brand-dark dark:text-white mb-2">
            Your Rights and Choices
          </h3>
          <p className="text-brand-muted text-base leading-relaxed mb-4">
            Depending on your location, you may have the right to:
          </p>
          <ul className="list-disc ms-5 mb-4">
            <li>Access and review the personal data we have about you</li>
            <li>Request corrections to inaccurate data</li>
            <li>Request deletion of your personal information</li>
            <li>Opt out of marketing communications at any time</li>
          </ul>
          <p className="text-brand-muted text-base leading-relaxed mb-4">
            To exercise any of these rights, please contact us using the
            information below.
          </p>

          <h3 className="text-xl kumbh_sans_semibold text-brand-dark dark:text-white mb-2">
            Third-Party Links
          </h3>
          <p className="text-brand-muted text-base leading-relaxed mb-4">
            Our website may contain links to external websites. We are not
            responsible for the privacy practices or the content of those
            third-party sites. Please review their privacy policies before
            submitting information.
          </p>
          <h3 className="text-xl kumbh_sans_semibold text-brand-dark dark:text-white mb-2">
            Children's Privacy
          </h3>
          <p className="text-brand-muted text-base leading-relaxed mb-4">
            Our services are not intended for children under 13 years of age. We
            do not knowingly collect personal data from children without
            parental consent.
          </p>
          <h3 className="text-xl kumbh_sans_semibold text-brand-dark dark:text-white mb-4">
            Data Retention
          </h3>
          <p className="text-brand-muted text-base leading-relaxed mb-4">
            We retain personal data only as long as necessary to fulfill the
            purposes outlined in this policy unless a longer retention period is
            required by law.
          </p>
          <h3 className="text-xl kumbh_sans_semibold text-brand-dark dark:text-white mb-4">
            Updates to This Policy
          </h3>
          <p className="text-brand-muted text-base leading-relaxed mb-4">
            We may update this Privacy Policy periodically. When we do, we will
            revise the “Effective Date” at the top of this page. Continued use
            of our website following changes signifies your acceptance of the
            new policy.
          </p>
          <h3 className="text-xl kumbh_sans_semibold text-brand-dark dark:text-white mb-4">
            Contact Us
          </h3>
          <p className="text-brand-muted text-base leading-relaxed mb-4">
            If you have any questions about this Privacy Policy or our data
            practices, please contact us:
            <br />
            Protection Technologies LLC
            <br />
            <span className="kumbh_sans_semibold text-brand-dark dark:text-white me-2">
              HQ Location:{" "}
            </span>
            39 Route 46 East, Unit 801 Pine Brook, NJ 07058
            <br />
            <p className="kumbh_sans_semibold text-brand-dark dark:text-white me-2">
              Florida Locations:{" "}
            </p>
            <ul className="list-disc ms-5">
              <li>1990 Main Street, Unit 750 Sarasota, FL 34236</li>
              <li>
                Tower 101 Building, 17th Floor 101 NE 3rd Ave Fort Lauderdale,
                FL 33301
              </li>
            </ul>
            <span className="kumbh_sans_semibold text-brand-dark dark:text-white me-2">
              Phone:
            </span>
            <a className="hover:underline" href="tel:+12018918201">
              +1 (201) 891-8201
            </a>
            <br />
            <span className="kumbh_sans_semibold text-brand-dark dark:text-white me-2">
              Email:
            </span>
            <a className="hover:underline" href="mailto:info@protectllc.us">
              info@protectllc.us
            </a>
          </p>
        </div>
      </div>
      <ContactSection />
    </div>
  );
}
