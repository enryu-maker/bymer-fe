"use client";

import dynamic from "next/dynamic";
import { PageLoader } from "../shared/PageLoader";

const OrganizationChart = dynamic(
  () => import("./OrganizationChart").then((mod) => mod.OrganizationChart),
  {
    ssr: false,
    loading: () => (
      <section className="w-full py-20 sm:py-24 bg-white border-t border-[#e5e7eb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PageLoader className="min-h-[320px]" />
        </div>
      </section>
    ),
  }
);

export function OrganizationChartSection() {
  return <OrganizationChart />;
}
