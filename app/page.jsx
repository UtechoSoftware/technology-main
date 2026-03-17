"use client";

import dynamic from "next/dynamic";
import Hero from "@/components/home/hero";
import SpecialService from "@/components/home/specialService";

// Below-fold sections: load JS after initial paint to improve LCP and TTI
const FeatureDesign = dynamic(() => import("@/components/home/featureDesign"), { ssr: true });
const OfferSection = dynamic(() => import("@/components/home/offerSection"), { ssr: true });
const Brands = dynamic(() => import("@/components/home/brands"), { ssr: true });
const TeamExpertSection = dynamic(() => import("@/components/home/TeamExpertSection"), { ssr: true });
const ServicesSection = dynamic(() => import("@/components/home/servicesSection"), { ssr: true });
const WhyChooseUsSection = dynamic(() => import("@/components/home/whyChooseUsSection"), { ssr: true });
const GetInTouchSection = dynamic(() => import("@/components/home/getInTouchSection"), { ssr: true });
const NewsSection = dynamic(() => import("@/components/home/newsSection"), { ssr: true });
const ContactSection = dynamic(() => import("@/components/home/ContactSection"), { ssr: true });

export default function Home() {
  return (
    <main className="mx-auto relative overflow-hidden">
      <div className="relative">
        <Hero />
        <SpecialService />
      </div>
      <FeatureDesign />
      <OfferSection />
      <Brands />
      <TeamExpertSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <GetInTouchSection />
      <NewsSection isHome={true} />
      <ContactSection />
    </main>
  );
}
