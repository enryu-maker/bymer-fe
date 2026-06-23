import { PageShell } from "@/components/layout/PageShell";
import { TermsPage } from "@/components/legal/TermsPage";

export const metadata = {
  title: "Terms & Conditions | Bymer Elastomers",
  description:
    "Read the Terms and Conditions for using Bymer Elastomers website, mobile application, and services.",
};

export default function Terms() {
  return (
    <PageShell>
      <TermsPage />
    </PageShell>
  );
}
