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
        description="Stories, updates, and technical insights from our manufacturing and engineering teams."
      />
    </PageShell>
  );
}
