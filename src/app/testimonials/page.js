import { PageShell } from "@/components/layout/PageShell";
import { InsightsPlaceholderPage } from "@/components/insights/InsightsPlaceholderPage";

export const metadata = {
  title: "Testimonials | Bymer Elastomers",
  description:
    "Read what OEM and industrial customers say about partnering with Bymer Elastomers for elastomer solutions.",
};

export default function Testimonials() {
  return (
    <PageShell>
      <InsightsPlaceholderPage
        title="Testimonials"
        description="Customer experiences and feedback on quality, reliability, and partnership with Bymer Elastomers."
      />
    </PageShell>
  );
}
