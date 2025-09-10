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

            {/* <div className="my-6 dark:bg-cardGradient bg-brand-ligthSecondary rounded-3xl p-4 md:p-8">
              <div className="flex items-center space-x-3 mb-8">
                <IoChatbubblesSharp className="h-7 w-7 text-brand-secondary" />
                <h2 className="text-2xl kumbh_sans_semibold text-brand-dark dark:text-white">
                  Comments{" "}
                  <span className="text-brand-dark dark:text-white">(03)</span>
                </h2>
              </div>

              <div className="space-y-4 md:space-y-6">
                {comments.map((comment, key) => (
                  <motion.div
                    key={key}
                    className=""
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.15 }}
                    variants={slideIn("up", motionDelay * key, true)}
                  >
                    <div
                      className={`flex items-start ml-auto gap-4 border-[0.5px] border-brand-muted p-4 md:p-5 rounded-3xl ${
                        key % 2 === 0 ? "w-full" : "md:w-11/12"
                      }`}
                    >
                      <div className="flex-shrink-0">
                        <Image
                          src={comment.avatar}
                          alt={comment.name}
                          className="w-16 h-16 md:w-20 md:h-20 rounded-xl"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <div className="mb-2 md:mb-4">
                            <h3 className="text-xl kumbh_sans_semibold text-brand-dark dark:text-white mb-1">
                              {comment.name}
                            </h3>
                            <p className="text-brand-dark dark:text-brand-white kumbh_sans_regular text-sm">
                              {comment.date}
                            </p>
                          </div>

                          <button className="flex items-center space-x-1 text-brand-secondary transition-colors group">
                            <MdReply className="h-5 w-5 transform group-hover:scale-110 transition-transform" />
                            <span className="kumbh_sans_regular text-sm uppercase tracking-wider">
                              REPLY
                            </span>
                          </button>
                        </div>

                        <p className="text-brand-dark dark:text-brand-white kumbh_sans_regular leading-relaxed text-base">
                          {comment.comment}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div> */}
            {/* <CommentSection /> */}
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
