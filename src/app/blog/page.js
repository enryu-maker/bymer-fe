import { PageShell } from "@/components/layout/PageShell";
import { InsightsPlaceholderPage } from "@/components/insights/InsightsPlaceholderPage";

export const metadata = {
  title: "Blogs | Bymer Elastomers",
  description:
    "Read insights, updates, and technical perspectives from Bymer Elastomers on elastomer manufacturing and engineering.",
};

export default function Blog() {
  return (
    <PageShell>
      <InsightsPlaceholderPage
        title="Blogs"
        description="Expert resources on elastomer materials, rubber component design, and manufacturing processes."
        comingSoonTitle="Technical content is coming soon."
        comingSoonBody="We're preparing expert resources covering elastomer materials, rubber component design, manufacturing processes, and industry applications."
        ctaLabel="Discuss Your Requirement"
      />
    </PageShell>
  );
}
