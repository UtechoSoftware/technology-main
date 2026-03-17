"use client";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { useRouter } from "next/navigation";
import Image from "next/image";
import LazyVideo from "@/components/ui/LazyVideo";

export default function PageSection({
  title,
  breadcrumb,
  url = "/assets/images/pageVideo.mp4",
  isImage,
}) {
  const router = useRouter();
  return (
    <div className="pageSection relative min-h-[400px] lg:min-h-[700px] flex items-center justify-center overflow-hidden pt-20">
      {isImage ? (
        <Image
          src={url}
          className="w-full h-full object-cover absolute top-0 left-0 z-0"
          alt="Banner Image"
        />
      ) : (
        <LazyVideo
          src={url}
          autoPlay
          muted
          loop
          className="w-full h-full object-cover absolute top-0 left-0 z-0"
          aria-hidden
        />
      )}

      <div className="relative z-20 text-center text-white">
        <h1 className="text-4xl md:text-5xl kumbh_sans_semibold mb-4">
          {title}
        </h1>
        <div className="flex items-center justify-center gap-2 text-lg">
          <span
            className="kumbh_sans_medium text-white text-2xl cursor-pointer"
            onClick={() => router.push("/")}
          >
            Home
          </span>
          <MdOutlineKeyboardDoubleArrowRight />
          <span className="kumbh_sans_medium text-white text-2xl">
            {breadcrumb}
          </span>
        </div>
      </div>
    </div>
  );
}
