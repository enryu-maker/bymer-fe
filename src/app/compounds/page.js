import { PageShell } from "@/components/layout/PageShell";
import { CompoundsPage } from "@/components/compounds/CompoundsPage";

export const metadata = {
  title: "Custom Elastomer Compounds | Bymer Elastomers",
  description:
    "Custom elastomer compounds engineered around application performance. In-house compound development, material formulation, testing, and scalable manufacturing for OEM applications.",
};

export default function Compounds() {
  return (
    <PageShell>
      <CompoundsPage />
    </PageShell>
  );
}
