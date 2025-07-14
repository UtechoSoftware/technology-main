import PageSection from "@/components/common/pageSection";
import ContactSection from "@/components/home/ContactSection";
import IntegratedServices from "@/components/itServices/integratedServices";
import PlatformServices from "@/components/itServices/platformServices";
import TimelineSection from "@/components/services/timelineSection";
import React from "react";

export default function ItServices() {
  return (
    <>
      <div className="bg-gradienttbsmooth">
        <PageSection
          title="IT Services"
          breadcrumb="IT Services"
          url="https://cdn.midjourney.com/video/f1a14688-672b-40b8-b145-bfe1f6d95da2/0.mp4"
        />
      </div>
      <PlatformServices />
      <IntegratedServices />
      <TimelineSection />
      <ContactSection />
    </>
  );
}
