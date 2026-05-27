import { PageShell } from "@/components/layout/PageShell";
import { HistoryPage } from "@/components/history/HistoryPage";

export const metadata = {
  title: "Our Corporate History & Chronology | Bymer Elastomers",
  description: "Explore Bymer Elastomers' timeline of growth since 1992, engineering milestones, high-tonnage moulding expansions, and legacy of industrial rubber manufacturing excellence.",
};

export default function History() {
  return (
    <PageShell>
      <HistoryPage />
    </PageShell>
  );
}
