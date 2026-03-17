import React from "react";
import PageSection from "@/components/common/pageSection";
import BlogSection from "@/components/news/blogSection";
import { getArticleBySlug } from "@/data/pressArticles";
import { siteConfig } from "@/config/site";

export async function generateMetadata({ params }) {
  const resolvedParams = typeof params.then === "function" ? await params : params;
  const slug = resolvedParams?.slug;
  const article = slug ? getArticleBySlug(slug) : null;
  if (!article) {
    return {
      title: "Press",
      description: `Latest press and insights from ${siteConfig.name}—security technology, access control, and integrated security solutions.`,
    };
  }
  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
    },
  };
}

export default function NewsSlugPage() {
  return (
    <>
      <PageSection
        title="Press"
        breadcrumb="Press"
        url="https://cdn.midjourney.com/video/c40af9ca-c15f-44f2-b537-3d1836bae6d9/0.mp4"
      />
      <BlogSection />
    </>
  );
}
