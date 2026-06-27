import { PageShell } from "@/components/layout/PageShell";
import { IndustriesPage } from "@/components/industries/IndustriesPage";

export const metadata = {
  title: "Industries We Serve | Bymer Elastomers",
  description:
    "Engineering elastomer solutions for automotive, industrial equipment, electrical systems, aerospace, defence, oil & chemical, HVAC, safety equipment, and infrastructure sectors.",
};

export default function Industries() {
  return (
    <PageShell>
      <IndustriesPage />
    </PageShell>
  );
}
