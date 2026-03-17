import React from "react";
import ContactAddress from "@/components/contact/contactAddress";
import ContactForm from "@/components/contact/contactForm";
import PageSection from "@/components/common/pageSection";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Contact Us",
  description: `Contact ${siteConfig.name} for security systems integration. HQ Pine Brook NJ; Florida and Georgia locations. Phone, email, and support.`,
};

export default function Contact() {
  return (
    <>
      <PageSection
        title="Contact Us"
        breadcrumb="Contact Us"
        url="https://cdn.midjourney.com/video/6baa6447-7e84-47ea-90ae-d361ba05b949/0.mp4"
      />
      <ContactAddress />
      <ContactForm />
      {/* <ContactFooter /> */}
    </>
  );
}
