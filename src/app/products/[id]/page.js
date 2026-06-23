import { PageShell } from "@/components/layout/PageShell";
import { ProductDetailPage } from "@/components/products/ProductDetailPage";

export const metadata = {
  title: "Product Detail | Bymer Elastomers",
  description: "View detailed specifications and information for Bymer Elastomers rubber products.",
};

export default function ProductDetail() {
  return (
    <PageShell>
      <ProductDetailPage />
    </PageShell>
  );
}
