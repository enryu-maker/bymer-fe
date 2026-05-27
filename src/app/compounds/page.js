import { PageShell } from "@/components/layout/PageShell";
import { CompoundsPage } from "@/components/compounds/CompoundsPage";

export const metadata = {
  title: "Elastomer Formulations & Compounds | Bymer Elastomers",
  description: "Explore Bymer Elastomers' comprehensive library of high-performance elastomer compounds, including EPDM, NBR, Viton (FKM), Silicone, and Neoprene formulated for extreme industrial environments.",
};

export default function Compounds() {
  return (
    <PageShell>
      <CompoundsPage />
    </PageShell>
  );
}
