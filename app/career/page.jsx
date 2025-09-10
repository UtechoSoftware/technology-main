import CareerApplicationForm from "@/components/career/careerApplicationForm";
import PageSection from "@/components/common/pageSection";
import React from "react";

export default function Jobs() {
  return (
    <section className="overflow-hidden">
      <div className="bg-gradienttbsmooth">
        <PageSection
          title="Jobs"
          breadcrumb="Jobs"
          url="https://cdn.midjourney.com/video/f0dc4a0d-d757-42ae-a3fd-58a07f5d45d3/0.mp4"
        />
      </div>
      <CareerApplicationForm />
    </section>
  );
}
