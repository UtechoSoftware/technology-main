import React from "react";
import Image from "next/image";
import { december, november } from "@/public/assets/images";

export default function Calender() {
  return (
    <div className="grid  gap-4">
      <div className="rounded-2xl bg-brand-primary p-4 shadow-light ">
        <Image
          src={november}
          alt="Activation calendar for November"
          className="h-full w-full object-contain"
          loading="lazy"
        />
      </div>
      <div className="rounded-2xl bg-brand-primary p-4 shadow-light">
        <Image
          src={december}
          alt="Activation calendar for December"
          className="h-full w-full object-contain"
          loading="lazy"
        />
      </div>
    </div>
  );
}
