import { PageShell } from "@/components/layout/PageShell";
import { ProductsPage } from "@/components/products/ProductsPage";

export const metadata = {
  title: "Non Automotive Rubber Products | Bymer Elastomers",
  description:
    "Explore Bymer Elastomers' non-automotive rubber products, including industrial hoses, profiles, dampers, and critical rubber components.",
};

export default function NonAutomotiveProducts() {
  return (
    <PageShell>
      <ProductsPage segment="non-automotive" />
    </PageShell>
  );
}
