"use client";
import ContactSection from "@/components/home/ContactSection";
import WhyChooseUsSection from "@/components/home/whyChooseUsSection";
import Detail from "@/components/services/serviceDetail/detail";
import React from "react";
import PageSection from "@/components/common/pageSection";
import { useParams } from "next/navigation";

export default function ServiceDetailPage() {
  const { id } = useParams();
  return (
    <>
      <div className="bg-gradienttbsmooth">
        <PageSection title="Services" breadcrumb="Services" />
      </div>
      <Detail id={id} />
      <WhyChooseUsSection />
      <ContactSection />
    </>
  );
}
