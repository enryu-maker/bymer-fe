import { PageShell } from "@/components/layout/PageShell";
import { QualityPage } from "@/components/quality/QualityPage";
import { fetchCertifications } from "@/lib/api";

export const metadata = {
  title: "Quality Assurance | Bymer Elastomers",
  description:
    "Precision, consistency, and reliability at every step. Learn how Bymer Elastomers builds quality into manufacturing, testing, and validation for OEM and industrial applications.",
};

export default async function QualityAssurance() {
  const certifications = await fetchCertifications();

  return (
    <PageShell>
      <QualityPage certifications={certifications} />
    </PageShell>
  );
}
