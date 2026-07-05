import { PageShell } from "@/components/layout/PageShell";
import { QualityPage } from "@/components/quality/QualityPage";
import { fetchQAMachinery } from "@/lib/api";

export const metadata = {
  title: "Quality Assurance | Bymer Elastomers",
  description:
    "Precision, consistency, and reliability at every step. Learn how Bymer Elastomers builds quality into manufacturing, testing, and validation for OEM and industrial applications.",
};

export default async function QualityAssurance() {
  const machinery = await fetchQAMachinery();

  return (
    <PageShell>
      <QualityPage machinery={machinery} />
    </PageShell>
  );
}
