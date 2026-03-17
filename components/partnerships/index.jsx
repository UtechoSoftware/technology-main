"use client";

import React, { useMemo, useState } from "react";
import clsx from "clsx";
import Calender from "./calender";
import NjDevils from "./njdevils";
import NyJets from "./nyjets";
import Brands2 from "../home/brands2";
import AltanaFalcons from "./falcon";
import MiamiDolphins from "./miami";
import BrooklynNets from "./nets";

const tabs = [
  // { id: "calendar", label: "Activation Calender", Component: Calender },
  { id: "nj-devils", label: "NJ Devils", Component: NjDevils },
  { id: "ny-jets", label: "NY Jets", Component: NyJets },
  { id: "atlanta-falcons", label: "Atlanta Falcons", Component: AltanaFalcons },
  { id: "Brooklyn-Nets", label: "Brooklyn Nets", Component: BrooklynNets },
  { id: "Miami-Dolphins", label: "Miami Dolphins", Component: MiamiDolphins },
];

export default function Partnerships() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const ActiveComponent = useMemo(() => {
    const found = tabs.find((tab) => tab.id === activeTab);
    return found ? found.Component : '';
  }, [activeTab]);

  return (
    <section className="bg-brand-ligthSecondaryDark py-12 px-4 dark:bg-brand-secondaryDark" aria-label="Partnerships">
      <div className="mx-auto max-w-7xl">
        <header className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl md:text-3xl kumbh_sans_semibold text-brand-dark dark:text-white mb-3">
            Security & Technology Partnerships
          </h2>
          <p className="text-brand-dark dark:text-brand-muted text-base leading-relaxed">
            Protection Technologies, LLC partners with premier sports and venue organizations—including the NJ Devils, NY Jets, Atlanta Falcons, Brooklyn Nets, and Miami Dolphins—to deliver integrated security technology, access control, and surveillance solutions for their facilities and events.
          </p>
        </header>
        <div
          className="flex flex-wrap gap-3 mt-0 md:mt-8 justify-center pb-6"
          role="tablist"
          aria-label="Partnership tabs"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              id={`${tab.id}-tab`}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`${tab.id}-panel`}
              className={clsx(
                "rounded-full border px-5 py-2 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-brand-secondaryDark",
                activeTab === tab.id
                  ? "bg-brand-secondary text-brand-white border-brand-secondary shadow-md"
                  : "bg-transparent text-brand-dark border-brand-secondary/30 hover:bg-brand-primary/80 dark:text-brand-muted dark:hover:text-brand-white"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div
          id={`${activeTab}-panel`}
          role="tabpanel"
          aria-labelledby={`${activeTab}-tab`}
          className="pt-8"
        >
          <ActiveComponent />
        </div>
      </div>
      <Brands2 />
    </section>
  );
}
