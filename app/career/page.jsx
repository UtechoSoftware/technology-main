import CareerApplicationForm from "@/components/career/careerApplicationForm";
import PageSection from "@/components/common/pageSection";
import { careerBanner } from "@/public/assets/images";
import React from "react";

export default function Jobs() {
  return (
    <section className="overflow-hidden">
      <div className="bg-gradienttbsmooth">
        <PageSection
          title="Career"
          breadcrumb="Career"
          url={careerBanner}
          isImage={true}
        />
      </div>
      <CareerApplicationForm />
    </section>
  );
}
