"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ContactBanner } from "../layout/ContactBanner";
import { getProductCategoryHref } from "@/lib/api";
import { useProductDetail } from "./ProductsCatalogContext";

export function ProductDetailPage() {
  const params = useParams();
  const productId = params?.id;
  const { product, loading, ensureProductDetail } = useProductDetail(productId);

  useEffect(() => {
    ensureProductDetail();
  }, [ensureProductDetail]);

  const categoryHref = product?.category?.name
    ? getProductCategoryHref(product.category.name)
    : "/products";

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <main className="w-full py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-[400px]">
          <div className="w-12 h-12 border-t-4 border-b-4 border-[#C75550] rounded-full animate-spin mb-4" />
          <span className="font-montserrat text-xs font-bold tracking-widest text-[#4b5563] uppercase">
            LOADING PRODUCT...
          </span>
        </main>
        <ContactBanner />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <main className="w-full py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center min-h-[400px]">
          <h1 className="font-title text-2xl font-black text-[#1c1b1b] uppercase">Product Not Found</h1>
          <Link
            href="/products"
            className="mt-6 inline-flex items-center justify-center bg-[#C75550] text-white px-8 py-3.5 font-title text-sm font-bold uppercase tracking-wider hover:bg-[#b54a46] transition-colors"
          >
            BACK TO CATALOG
          </Link>
        </main>
        <ContactBanner />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="w-full border-b border-[#e5e7eb] bg-[#f9fafb] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="font-montserrat text-xs font-bold text-[#9ca3af] tracking-[0.15em] uppercase">
            <Link href="/products" className="hover:text-[#C75550] transition-colors">
              PRODUCTS
            </Link>
            {" / "}
            <Link href={categoryHref} className="hover:text-[#C75550] transition-colors">
              {product.category?.name || "CATALOG"}
            </Link>
            {" / "}
            <span className="text-[#1c1b1b]">DETAIL</span>
          </span>
        </div>
      </header>

      <main className="w-full py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-6">
            <div className="relative w-full aspect-square bg-[#f9fafb] border border-[#e5e7eb] p-6">
              {product.image ? (
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain p-4"
                  unoptimized
                  priority
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center border border-dashed border-[#cbd5e1] bg-white m-6">
                  <span className="text-gray-300 text-xs uppercase font-montserrat tracking-wider">
                    NO IMAGE
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col gap-6">
            <div>
              <span className="font-montserrat text-xs font-bold text-[#C75550] uppercase tracking-[0.2em]">
                PRODUCT DETAIL
              </span>
              <h1 className="font-title text-3xl sm:text-4xl lg:text-5xl font-black text-[#1c1b1b] uppercase tracking-tight leading-tight mt-2">
                {product.name}
              </h1>
              <div className="w-16 h-[4px] bg-[#fbbd05] mt-4" />
            </div>

            {product.customer?.name && (
              <div className="bg-[#f9fafb] border border-[#e5e7eb] p-5">
                <span className="font-montserrat text-[10px] font-bold text-[#9ca3af] tracking-wider uppercase block mb-1">
                  CUSTOMER
                </span>
                <p className="font-body text-sm text-[#1c1b1b] leading-relaxed">{product.customer.name}</p>
              </div>
            )}

            {product.category?.name && (
              <div className="bg-[#f9fafb] border border-[#e5e7eb] p-5">
                <span className="font-montserrat text-[10px] font-bold text-[#9ca3af] tracking-wider uppercase block mb-1">
                  CATEGORY
                </span>
                <p className="font-body text-sm text-[#1c1b1b] leading-relaxed">{product.category.name}</p>
              </div>
            )}

            {product.specification && (
              <div className="bg-[#f9fafb] border-l-4 border-[#fbbd05] p-5">
                <span className="font-montserrat text-[10px] font-bold text-[#9ca3af] tracking-wider uppercase block mb-1">
                  SPECIFICATION
                </span>
                <p className="font-body text-sm text-[#4b5563] leading-relaxed">{product.specification}</p>
              </div>
            )}

            {product.description && (
              <div>
                <span className="font-montserrat text-[10px] font-bold text-[#9ca3af] tracking-wider uppercase block mb-2">
                  DESCRIPTION
                </span>
                <p className="font-body text-sm text-[#4b5563] leading-relaxed">{product.description}</p>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[#C75550] text-white px-8 py-3.5 font-title text-sm font-bold uppercase tracking-wider transition-all duration-200 hover:bg-[#b54a46] rounded-none"
              >
                REQUEST A QUOTE
              </Link>
              <Link
                href={categoryHref}
                className="inline-flex items-center justify-center border border-[#e5e7eb] text-[#1c1b1b] px-8 py-3.5 font-title text-sm font-bold uppercase tracking-wider hover:border-[#1c1b1b] transition-colors rounded-none"
              >
                BACK TO CATALOG
              </Link>
            </div>
          </div>
        </div>
      </main>

      <ContactBanner />
    </div>
  );
}
