import { PageShell } from "@/components/layout/PageShell";
import { AwardsPage } from "@/components/awards/AwardsPage";
import { fetchAwards } from "@/lib/api";

export const metadata = {
  title: "Awards & Achievements | Bymer Elastomers",
  description:
    "Explore awards and achievements earned by Bymer Elastomers for manufacturing excellence, quality leadership, and customer partnership.",
};

export default async function Awards() {
  const awards = await fetchAwards();

  return (
    <PageShell>
      <AwardsPage awards={awards} />
    </PageShell>
  );
}
