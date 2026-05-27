import { PageShell } from "@/components/layout/PageShell";
import { ProductsPage } from "@/components/products/ProductsPage";

export const metadata = {
  title: "Automotive Rubber Products Catalog | Bymer Elastomers",
  description: "Explore Bymer Elastomers' high-end custom molded and extruded rubber automotive products, specifications, and polymers, engineered for premium performance under ISO 9001 and IATF standards.",
};

export default function Products() {
  return (
    <PageShell>
      <ProductsPage />
    </PageShell>
  );
}
