import { PageShell } from "@/components/layout/PageShell";
import { MachineryPage } from "@/components/machinery/MachineryPage";

export const metadata = {
  title: "Manufacturing Machinery & Plant Infrastructure | Bymer Elastomers",
  description: "Discover Bymer Elastomers' high-tonnage moulding lines, vacuum-assisted compression presses, and material preparation assets deployed across our Nashik manufacturing plants.",
};

export default function Machinery() {
  return (
    <PageShell>
      <MachineryPage />
    </PageShell>
  );
}
