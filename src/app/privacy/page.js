import { PageShell } from "@/components/layout/PageShell";
import { PrivacyPage } from "@/components/legal/PrivacyPage";

export const metadata = {
  title: "Privacy Policy | Bymer Elastomers",
  description:
    "Learn how Bymer Elastomers collects, uses, and protects your personal information.",
};

export default function Privacy() {
  return (
    <PageShell>
      <PrivacyPage />
    </PageShell>
  );
}
