import CompanySection from "@/components/about/companySection";
import OurOffer from "@/components/about/ourOffer";
import PromiseSection from "@/components/about/promiseSection";
import PageSection from "@/components/common/pageSection";
import Brands from "@/components/home/brands";
import ContactSection from "@/components/home/ContactSection";
import TeamExpertSection from "@/components/home/TeamExpertSection";
import WhyChooseUsSection from "@/components/home/whyChooseUsSection";
import { siteConfig } from "@/config/site";
import React from "react";

export const metadata = {
  title: "About Us",
  description: `Learn about ${siteConfig.name} — security systems integration since 1985. Founded by Mike Singer, we deliver alarm, access control, and CCTV for multifamily, commercial, and government.`,
};

export default function About() {
  return (
    <section className="overflow-hidden">
      <div className="bg-gradienttbsmooth">
        <PageSection
          title="About Us"
          breadcrumb="About Us"
          url="https://cdn.midjourney.com/video/f0dc4a0d-d757-42ae-a3fd-58a07f5d45d3/0.mp4"
        />
      </div>
      <CompanySection />
      <OurOffer />
      <WhyChooseUsSection />
      <TeamExpertSection />
      <PromiseSection />
      <Brands />
      <ContactSection />
    </section>
  );
}
