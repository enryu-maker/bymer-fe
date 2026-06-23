import { PageShell } from "@/components/layout/PageShell";
import { ProcessPage } from "@/components/process/ProcessPage";

export const metadata = {
  title: "Manufacturing Process | Bymer Elastomers",
  description:
    "From design to reliable production — explore Bymer Elastomers' six-stage engineering-led manufacturing process for quality, consistency, and performance.",
};

export default function Process() {
  return (
    <PageShell>
      <ProcessPage />
    </PageShell>
  );
}
