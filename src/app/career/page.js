import { PageShell } from "@/components/layout/PageShell";
import { CareerPage } from "@/components/career/CareerPage";

export const metadata = {
  title: "Careers | Bymer Elastomers",
  description:
    "Build the future with Bymer. Join a team committed to engineering excellence, manufacturing innovation, and continuous growth.",
};

export default function Career() {
  return (
    <PageShell>
      <CareerPage />
    </PageShell>
  );
}
