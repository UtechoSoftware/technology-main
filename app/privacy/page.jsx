import PageSection from "@/components/common/pageSection";
import ContactSection from "@/components/home/ContactSection";
import { privacy } from "@/public/assets/images";
import Image from "next/image";
import React from "react";

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
          <p className="text-brand-muted text-base leading-relaxed mb-6">
            This Privacy Policy describes how Protection Technologies LLC
            ("we", "us", "our") collects, uses, and discloses information when
            you use our website and mobile application (collectively, the
            "Services").
          </p>
          <h3 className="text-xl kumbh_sans_semibold text-brand-dark dark:text-white mb-2">
            Information We Collect
          </h3>
          <p className="text-brand-muted text-base leading-relaxed mb-4">
            We do not collect any personal data or sensitive information through
            our website or mobile application. Our CCTV app is designed solely
            to provide access to CCTV systems installed at various sites to our
            customers. We do not capture, store, or process any data from these
            systems.
          </p>
          <h3 className="text-xl kumbh_sans_semibold text-brand-dark dark:text-white mb-2">
            How We Use Your Information
          </h3>
          <p className="text-brand-muted text-base leading-relaxed mb-4">
            Since we do not collect any personal data or sensitive information,
            we do not use any information for any purpose.
          </p>
          <h3 className="text-xl kumbh_sans_semibold text-brand-dark dark:text-white mb-2">
            ​Cookies
          </h3>
          <p className="text-brand-muted text-base leading-relaxed mb-4">
            We do not use cookies or any tracking mechanisms on our website or
            mobile application.
          </p>
          <h3 className="text-xl kumbh_sans_semibold text-brand-dark dark:text-white mb-2">
            ​Third-Party Links
          </h3>
          <p className="text-brand-muted text-base leading-relaxed mb-4">
            Our website and mobile application may contain links to third-party
            websites or services. We are not responsible for the privacy
            practices or content of these third-party sites. We encourage you to
            review the privacy policies of those sites.
          </p>
          <h3 className="text-xl kumbh_sans_semibold text-brand-dark dark:text-white mb-2">
            Data Security
          </h3>
          <p className="text-brand-muted text-base leading-relaxed mb-4">
            We take appropriate measures to protect the security of your
            information. However, since we do not collect any personal data or
            sensitive information, there is no information to secure.
          </p>
          <h3 className="text-xl kumbh_sans_semibold text-brand-dark dark:text-white mb-2">
            Changes to This Privacy Policy
          </h3>
          <p className="text-brand-muted text-base leading-relaxed mb-4">
            We reserve the right to update or change our Privacy Policy at any
            time. Any changes will be posted on this page with an updated
            revision date.
          </p>
          <h3 className="text-xl kumbh_sans_semibold text-brand-dark dark:text-white mb-2">
            ​Contact Us
          </h3>
          <p className="text-brand-muted text-base leading-relaxed mb-4">
            If you have any questions or concerns about our Privacy Policy,
            please contact us at using the below form.
          </p>
          <h3 className="text-xl kumbh_sans_semibold text-brand-dark dark:text-white mb-4">
            ​Texting Opt In
          </h3>
          <p className="text-brand-muted text-base leading-relaxed mb-4">
            Information is not shared with any third parties.
          </p>
        </div>
      </div>
      <ContactSection />
    </div>
  );
}
