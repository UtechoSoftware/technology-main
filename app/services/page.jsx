import GetInTouchSection from "@/components/home/getInTouchSection";
import ServicesCards from "@/components/services/servicesCards";
import React from "react";
import { avatar3, avatar4 } from "@/public/assets/images";
import TimelineSection from "@/components/services/timelineSection";
import ContactSection from "@/components/home/ContactSection";
import PageSection from "@/components/common/pageSection";

export default function Services() {
  return (
    <main className="mx-auto relative">
      <div className="bg-gradienttbsmooth">
        <PageSection
          title="Services"
          breadcrumb="Services"
          url="https://cdn.midjourney.com/video/d2619775-95b5-4a44-af1a-07da3bf3ddf7/0.mp4"
        />
      </div>
      <ServicesCards />
      <GetInTouchSection contactImage={avatar4} />
      <TimelineSection />
      <ContactSection />
    </main>
  );
}
