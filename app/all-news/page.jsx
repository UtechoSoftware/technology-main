import React from "react";
import PageSection from "@/components/common/pageSection";
import BlogSection from "@/components/news/blogSection";
import NewsSection from "@/components/home/newsSection";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Press & Insights",
  description: `Latest press, articles, and insights from ${siteConfig.name}—security systems integration, access control, CCTV, 24/7 surveillance, and industry recognition.`,
  openGraph: {
    title: `Press & Insights | ${siteConfig.shortName}`,
    description: `Latest press and insights from Protection Technologies, LLC on security technology and integrated security solutions.`,
  },
};

export default function AllNewsPage() {
  return (
    <>
      <PageSection
        title="Press"
        breadcrumb="Press"
        url="https://cdn.midjourney.com/video/c40af9ca-c15f-44f2-b537-3d1836bae6d9/0.mp4"
      />
      <NewsSection />
    </>
  );
}
