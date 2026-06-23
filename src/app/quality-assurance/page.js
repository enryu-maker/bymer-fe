import { PageShell } from "@/components/layout/PageShell";
import { QualityPage } from "@/components/quality/QualityPage";
import { fetchCertifications } from "@/lib/api";

export const metadata = {
  title: "Quality Assurance | Bymer Elastomers",
  description:
    "Learn how Bymer Elastomers ensures precision and reliability through rigorous quality assurance, advanced manufacturing technology, and in-house rubber testing.",
};

export default async function QualityAssurance() {
  const certifications = await fetchCertifications();

  return (
    <PageShell>
      <QualityPage certifications={certifications} />
    </PageShell>
  );
}
