"use client";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function PageSection({
  title,
  breadcrumb,
  url = "/assets/images/pageVideo.mp4",
  isImage,
}) {
  const router = useRouter();
  return (
    <div className="pageSection relative min-h-[400px] lg:min-h-[700px] flex items-center justify-center overflow-hidden pt-20">
      {/* <div className="gif_overlay1"></div>
      <div className="gif_overlay2"></div>
      <div className="gif_overlay3"></div> */}
      {/* Main Content */}
      {isImage ? (
        <Image
          src={url}
          className="w-full h-full object-cover absolute top-0 left-0 z-0"
          alt="Banner Image"
        />
      ) : (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover absolute top-0 left-0 z-0"
          // style={{ mixBlendMode: "luminosity" }}
        >
          <source src={url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
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
