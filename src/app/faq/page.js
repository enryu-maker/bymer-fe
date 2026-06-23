import { PageShell } from "@/components/layout/PageShell";
import { FaqPage } from "@/components/faq/FaqPage";

export const metadata = {
  title: "FAQs | Bymer Elastomers",
  description:
    "Frequently asked questions about Bymer Elastomers rubber products, materials, certifications, custom solutions, and global supply capabilities.",
};

export default function Faq() {
  return (
    <PageShell>
      <FaqPage />
    </PageShell>
  );
}
