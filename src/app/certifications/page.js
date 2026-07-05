import { PageShell } from "@/components/layout/PageShell";
import { CertificationsPage } from "@/components/certifications/CertificationsPage";
import { fetchCertifications } from "@/lib/api";

export const metadata = {
  title: "Certifications | Bymer Elastomers",
  description:
    "View Bymer Elastomers' IATF 16949, ISO 9001, ISO 14001, ISO 45001, and other quality and compliance certifications.",
};

export default async function Certifications() {
  const certifications = await fetchCertifications();

  return (
    <PageShell>
      <CertificationsPage certifications={certifications} />
    </PageShell>
  );
}
