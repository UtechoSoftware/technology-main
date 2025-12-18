"use client";
import { person1, person2, person3 } from "@/public/assets/images";
import { Drawer, DrawerBody, DrawerContent, DrawerHeader } from "@heroui/react";
import { Filter } from "lucide-react";
import { useParams } from "next/navigation";
import { useState } from "react";
import Article1 from "./article1";
import Article2 from "./article2";
import Article3 from "./article3";
import NewsSidebar from "./newsSidebar";
import Article4 from "./article4";
import Article5 from "./article5";
import Article6 from "./article6";
import Article7 from "./article7";
import Article8 from "./article8";

export default function BlogSection() {
  const [open, setOpen] = useState(false);
  const params = useParams();
  const { slug } = params;

  return (
    <div className="bg-brand-ligthSecondaryDark dark:bg-gradienttbsmooth overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-16">
        <div
          className="lg:hidden flex items-center justify-end mb-4 gap-3 text-white kumbh_sans_semibold text-xl cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          Filter <Filter className="h-5 w-5 text-brand-secondary" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {slug ===
              "marquis-whos-who-honors-mike-singer-for-expertise-in-security-services" && (
              <Article8 />
            )}
            {slug ===
              "latch-announces-first-building-wide-installation-of-works-with-latch-marks-usa-locks" && (
              <Article1 />
            )}
            {slug ===
              "why-247-remote-video-surveillance-is-essential-for-modern-businesses" && (
              <Article2 />
            )}
            {slug === "smart-access-control-security-meets-convenience" && (
              <Article3 />
            )}
            {slug ===
              "how-protection-technologies-llc-delivers-security-you-can-trust" && (
              <Article4 />
            )}
            {slug ===
              "leading-with-integrity-the-business-philosophy-behind-protection-technologies-llc" && (
              <Article5 />
            )}
            {slug ===
              "security-meets-vision-how-mike-singers-principles-drive-protection-technologies-llcs-cutting-edge-solutions" && (
              <Article6 />
            )}
            {slug ===
              "from-east-coast-leader-to-national-contender-how-protection-technologies-llc-is-redefining-modern-security" && (
              <Article7 />
            )}
          </div>

          {/* Desktop Sidebar */}
          <div className="hidden lg:block overflow-hidden">
            <NewsSidebar />
          </div>
        </div>
      </div>
      {/* Drawer open at small screen */}
      <Drawer
        backdrop="blur"
        isOpen={open}
        onOpenChange={setOpen}
        className="dark:bg-brand-secondaryDark bg-brand-ligthSecondaryDark z-50"
      >
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="flex flex-col gap-1 text-brand-dark dark:text-white kumbh_sans_semibold">
                Filter
              </DrawerHeader>
              <DrawerBody className="mb-8">
                <NewsSidebar />
              </DrawerBody>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </div>
  );
}
