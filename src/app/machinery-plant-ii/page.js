import { PageShell } from "@/components/layout/PageShell";
import { MachineryPage } from "@/components/machinery/MachineryPage";

export const metadata = {
  title: "Manufacturing Machinery & Plant II Infrastructure | Bymer Elastomers",
  description: "Discover Bymer Elastomers' high-tonnage moulding lines, vacuum-assisted compression presses, and material preparation assets deployed across our Nashik manufacturing Plant II.",
};

export default function MachineryPlantII() {
  return (
    <PageShell>
      <MachineryPage plant={2} />
    </PageShell>
  );
}
