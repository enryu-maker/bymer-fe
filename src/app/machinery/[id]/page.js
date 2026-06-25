import { PageShell } from "@/components/layout/PageShell";
import { MachineryDetailPage } from "@/components/machinery/MachineryDetailPage";

export const metadata = {
  title: "Machine Detail | Bymer Elastomers",
  description: "View detailed specifications and information for Bymer Elastomers manufacturing machinery.",
};

export default function MachineryDetail() {
  return (
    <PageShell>
      <MachineryDetailPage />
    </PageShell>
  );
}
