import React from "react";
import ContactAddress from "@/components/contact/contactAddress";
import ContactForm from "@/components/contact/contactForm";
import ContactFooter from "@/components/contact/contactFooter";
import PageSection from "@/components/common/pageSection";

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
