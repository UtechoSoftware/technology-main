import CareerApplicationForm from "@/components/career/careerApplicationForm";
import PageSection from "@/components/common/pageSection";

export default function Jobs() {
  return (
    <section className="overflow-hidden">
      <div className="bg-gradienttbsmooth">
        <PageSection
          title="Career"
          breadcrumb="Career"
          url="https://cdn.midjourney.com/video/e3f8bf9b-ed46-45da-906c-555c0c4a3442/0.mp4"
        />
      </div>
      <CareerApplicationForm />
    </section>
  );
}
