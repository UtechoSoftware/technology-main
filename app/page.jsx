"use client";

// Import components with dynamic loading for better performance
import Brands from "@/components/home/brands";
import ContactSection from "@/components/home/ContactSection";
import FeatureDesign from "@/components/home/featureDesign";
import GetInTouchSection from "@/components/home/getInTouchSection";
import Hero from "@/components/home/hero";
import NewsSection from "@/components/home/newsSection";
import OfferSection from "@/components/home/offerSection";
import ServicesSection from "@/components/home/servicesSection";
import SpecialService from "@/components/home/specialService";
import TeamExpertSection from "@/components/home/TeamExpertSection";
import WhyChooseUsSection from "@/components/home/whyChooseUsSection";

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
      <NewsSection />
      <ContactSection />
    </main>
  );
}
