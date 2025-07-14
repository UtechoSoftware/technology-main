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
        url="https://cdn.midjourney.com/video/d2619775-95b5-4a44-af1a-07da3bf3ddf7/0.mp4"
      />
      <ContactAddress />
      <ContactForm />
      {/* <ContactFooter /> */}
    </>
  );
}
