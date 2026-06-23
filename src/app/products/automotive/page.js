import { PageShell } from "@/components/layout/PageShell";
import { ProductsPage } from "@/components/products/ProductsPage";

export const metadata = {
  title: "Automotive Rubber Products | Bymer Elastomers",
  description:
    "Explore Bymer Elastomers' automotive rubber products, including molded components, mountings, and extruded profiles for OEM applications.",
};

export default function AutomotiveProducts() {
  return (
    <PageShell>
      <ProductsPage segment="automotive" />
    </PageShell>
  );
}
