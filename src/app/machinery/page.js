import { PageShell } from "@/components/layout/PageShell";
import { MachineryPage } from "@/components/machinery/MachineryPage";

export const metadata = {
  title: "Manufacturing Capabilities & Plant I Infrastructure | Bymer Elastomers",
  description:
    "Explore Bymer Elastomers manufacturing capabilities, including rubber mixing, moulding, vacuum-assisted presses, and material preparation assets at Plant I, Nashik.",
};

export default function Machinery() {
  return (
    <PageShell>
      <MachineryPage plant={1} />
    </PageShell>
  );
}
