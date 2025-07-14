import React from "react";
import PageSection from "@/components/common/pageSection";
import BlogSection from "@/components/news/blogSection";
import ContactSection from "@/components/home/ContactSection";
import NewsSection from "@/components/home/newsSection";

export default function page() {
  return (
    <>
      <PageSection
        title="News"
        breadcrumb="News"
        url="https://cdn.midjourney.com/video/c40af9ca-c15f-44f2-b537-3d1836bae6d9/0.mp4"
      />
            {/* <NewsSection /> */}
      
      <BlogSection />
      {/* <ContactSection /> */}
    </>
  );
}
