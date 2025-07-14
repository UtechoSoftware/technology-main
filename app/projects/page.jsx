import PageSection from "@/components/common/pageSection";
import ContactSection from "@/components/home/ContactSection";
import ProjectSection from "@/components/projects/ProjectSection";

export default function Page() {
  return (
    <>
      <div className="bg-gradienttbsmooth">
        <PageSection
          title="Projects"
          breadcrumb="Projects"
          url="https://cdn.midjourney.com/video/635af1ca-746d-4d2f-8bd6-6223ffe41254/0.mp4"
        />
      </div>
      <ProjectSection />
      <ContactSection />
    </>
  );
}
