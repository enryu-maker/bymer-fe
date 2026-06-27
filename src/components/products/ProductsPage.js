"use client";

import { useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ContactBanner } from "../layout/ContactBanner";
import { useProductsCatalog } from "./ProductsCatalogContext";

// 1. PRODUCTS HERO COMPONENT
function ProductsHero() {
  return (
    <header className="relative w-full border-b border-[#e5e7eb] overflow-hidden min-h-[300px] sm:min-h-[350px] flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/backgroundProduct.png"
          alt="Products Catalog Bymer Elastomers"
          fill
          sizes="100vw"
          className="object-cover filter grayscale"
          priority
        />
      </div>

      <div className="absolute inset-0 bg-[#0a0a0a]/70 z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20 flex flex-col items-center gap-3">
        <span className="font-montserrat text-xs sm:text-sm font-bold tracking-[0.2em] text-[#9ca3af] uppercase leading-none">
          HOME / PRODUCTS
        </span>
        <h1 className="font-title text-4xl sm:text-6xl font-black uppercase text-white tracking-tight leading-none">
          PRODUCT CATALOG
        </h1>
        <p className="font-body text-xs sm:text-sm text-[#9ca3af] max-w-xl leading-relaxed">
        Browse precision-engineered rubber and elastomer components by Product or Customer. Discover custom manufacturing solutions developed for OEMs and industrial manufacturers across automotive, electrical, EV, infrastructure, and industrial applications.
        </p>
      </div>
    </header>
  );
}

function ProductCard({ product, index }) {
  const partNumber = String(index + 1).padStart(2, "0");

  return (
    <Link href={`/products/${product.id}`} className="group block h-full">
      <div className="bg-white border border-[#e5e7eb] p-6 flex flex-col h-full justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.05)] hover:border-[#C75550] rounded-none">
        <div className="flex flex-col items-start w-full">
          <div className="relative w-full aspect-[4/3] mb-5 bg-[#f9fafb] border border-[#e5e7eb] p-3">
            {product.image ? (
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                unoptimized
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center border border-dashed border-[#cbd5e1] bg-white m-3">
                <span className="text-gray-300 text-[10px] uppercase font-montserrat tracking-wider">
                  NO IMAGE
                </span>
              </div>
            )}
          </div>

          <span className="font-montserrat text-[10px] font-bold text-[#9ca3af] tracking-widest uppercase mb-1.5 leading-none">
            PART {partNumber} // COMPONENT
          </span>

          <h3 className="font-title text-lg sm:text-xl font-black text-[#1c1b1b] uppercase tracking-tight leading-snug group-hover:text-[#C75550] transition-colors duration-200 text-left">
            {product.name}
          </h3>
        </div>

        {(product.specification || product.description) && (
          <div className="w-full mt-4">
            {product.specification && (
              <div className="bg-[#f9fafb] border-l-4 border-[#fbbd05] py-2 px-3 text-left w-full">
                <span className="font-montserrat text-xs text-[#4b5563] tracking-wide">
                  <span className="font-bold text-[#1c1b1b]">Specification:</span>{" "}
                  {product.specification}
                </span>
              </div>
            )}
            {product.description && (
              <p className="font-body text-xs text-[#4b5563] leading-relaxed mt-3 text-left">
                {product.description}
              </p>
            )}
          </div>
        )}
      </div>
    </Link>
  );
}

function ProductDetailPanel({ product }) {
  if (!product) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-start w-full">
      <div className="w-full">
        <div className="relative w-full aspect-square bg-[#f9fafb] border border-[#e5e7eb] p-4 sm:p-6">
          {product.image ? (
            <Image
              key={product.id}
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-contain p-4"
              unoptimized
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

      <div className="flex flex-col gap-5 sm:gap-6">
        <div>
          <span className="font-montserrat text-xs font-bold text-[#C75550] uppercase tracking-[0.2em]">
            PRODUCT DETAIL
          </span>
          <h2 className="font-title text-2xl sm:text-3xl font-black text-[#1c1b1b] uppercase tracking-tight leading-tight mt-2">
            {product.name}
          </h2>
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
      </div>
    </div>
  );
}

function BlankCatalogState() {
  return (
    <div className="w-full border border-dashed border-[#e5e7eb] py-24 px-8 flex flex-col items-center justify-center text-center bg-[#f9fafb] min-h-[420px]">
      <div className="w-14 h-14 rounded-full bg-[#C75550]/10 flex items-center justify-center text-[#C75550] mb-5">
        <i className="fa-solid fa-filter text-xl" />
      </div>
      <h4 className="font-title text-xl font-bold text-[#1c1b1b] uppercase tracking-wide">
        SELECT A FILTER TO BEGIN
      </h4>
      <p className="font-body text-xs text-[#4b5563] max-w-md mt-2 leading-relaxed">
        Choose By Customer or By Product above to browse the catalog.
      </p>
    </div>
  );
}

const CATALOG_FILTER_OPTIONS = [
  { value: "customer", label: "BY CUSTOMER" },
  { value: "product", label: "BY PRODUCT" },
];

function CatalogFilterButtons({ filterMode, onChange }) {
  return (
    <div className="flex flex-wrap gap-2 w-full sm:w-auto">
      {CATALOG_FILTER_OPTIONS.map((option) => {
        const isActive = filterMode === option.value;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={`font-montserrat text-xs font-bold tracking-wider uppercase px-6 py-3 border transition-colors duration-150 ${
              isActive
                ? "bg-[#C75550] border-[#C75550] text-white"
                : "bg-white border-[#e5e7eb] text-[#1c1b1b] hover:border-[#C75550] hover:text-[#C75550]"
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}

function SidebarListItem({ label, isSelected, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left font-montserrat text-[11px] sm:text-xs font-bold tracking-wide uppercase px-4 py-3.5 flex items-center justify-between border transition-all duration-200 cursor-pointer rounded-none ${
        isSelected
          ? "bg-[#C75550] border-[#C75550] text-white shadow-sm"
          : "bg-white border-[#e5e7eb] text-[#1c1b1b] hover:border-[#cbd5e1] hover:bg-gray-50 hover:text-[#C75550]"
      }`}
    >
      <span className="pr-3 leading-snug normal-case">{label}</span>
      <i
        className={`fa-solid fa-chevron-right text-[10px] flex-shrink-0 ${
          isSelected ? "text-white" : "text-[#cbd5e1]"
        }`}
      />
    </button>
  );
}

// 3. MAIN PRODUCTS CATALOG COMPONENT
export function ProductsPage({ segment } = {}) {
  const {
    isSegmentPage,
    categoryId,
    categoryName,
    customers,
    products,
    categoryProducts,
    filterMode,
    activeCustomerId,
    activeProductId,
    searchQuery,
    categoryLoading,
    productsLoading,
    categoryProductsLoading,
    setFilterMode,
    setActiveCustomerId,
    setActiveProductId,
    setSearchQuery,
    ensureCategory,
    ensureCustomerProducts,
    ensureCategoryProducts,
  } = useProductsCatalog(segment);

  useEffect(() => {
    ensureCategory();
  }, [ensureCategory]);

  useEffect(() => {
    if (filterMode !== "customer" || !activeCustomerId) return;
    ensureCustomerProducts(activeCustomerId);
  }, [filterMode, activeCustomerId, ensureCustomerProducts]);

  useEffect(() => {
    if (filterMode !== "product" || !categoryId) return;
    ensureCategoryProducts(categoryId);
  }, [filterMode, categoryId, ensureCategoryProducts]);

  const filteredCustomers = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return customers;
    return customers.filter((customer) =>
      (customer.name || "").toLowerCase().includes(query)
    );
  }, [customers, searchQuery]);

  const filteredProducts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return categoryProducts;
    return categoryProducts.filter((product) =>
      (product.name || "").toLowerCase().includes(query)
    );
  }, [categoryProducts, searchQuery]);

  const activeCustomer = useMemo(
    () => customers.find((customer) => customer.id === activeCustomerId) || null,
    [customers, activeCustomerId]
  );

  const activeProduct = useMemo(
    () =>
      categoryProducts.find(
        (product) => String(product.id) === String(activeProductId)
      ) || null,
    [categoryProducts, activeProductId]
  );

  function handleFilterModeChange(mode) {
    if (filterMode === mode) return;
    setFilterMode(mode);
  }

  const showCatalog = !isSegmentPage || filterMode !== null;
  const isCustomerMode = filterMode === "customer";
  const isProductMode = filterMode === "product";
  const sidebarLabel = isProductMode ? "PRODUCT" : "CUSTOMER";
  const searchPlaceholder = isProductMode ? "SEARCH PRODUCTS..." : "SEARCH CUSTOMERS...";
  const sidebarItems = isProductMode ? filteredProducts : filteredCustomers;
  const sidebarLoading = isProductMode ? categoryProductsLoading : false;

  if (categoryLoading) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <ProductsHero />
        <main className="w-full py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white flex flex-col items-center justify-center min-h-[400px]">
          <div className="flex flex-col items-center gap-4 animate-pulse">
            <div className="w-12 h-12 border-t-4 border-b-4 border-[#C75550] rounded-full animate-spin" />
            <span className="font-montserrat text-xs font-bold tracking-widest text-[#4b5563] uppercase">
              LOADING CATALOG...
            </span>
          </div>
        </main>
        <div className="w-full mt-16">
          <ContactBanner />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ProductsHero />

      <main className="w-full py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
        <div className="w-full flex flex-col sm:flex-row gap-4 items-center justify-between mb-10 border-b border-[#e5e7eb] pb-8">
          {isSegmentPage && (
            <CatalogFilterButtons
              filterMode={filterMode}
              onChange={handleFilterModeChange}
            />
          )}

          {showCatalog && (
            <>
              <div className="w-full sm:max-w-md relative flex items-center">
                <span className="absolute left-4 text-[#9ca3af] flex items-center pointer-events-none">
                  <i className="fa-solid fa-magnifying-glass text-sm" />
                </span>
                <input
                  type="text"
                  placeholder={searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#f9fafb] border border-[#e5e7eb] rounded-none py-3 pl-10 pr-4 font-montserrat text-xs font-bold tracking-wider text-[#1c1b1b] placeholder-gray-400 focus:bg-white focus:border-[#9ca3af] focus:outline-none transition-colors duration-150"
                />
              </div>
            </>
          )}
        </div>

        {!showCatalog ? (
          <BlankCatalogState />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <aside className="lg:col-span-3 flex flex-col gap-6 w-full">
              <div className="bg-[#f9fafb] border border-[#e5e7eb] p-6 flex flex-col gap-5 w-full">
                <span className="font-montserrat text-xs font-bold text-[#9ca3af] tracking-[0.2em] uppercase leading-none block text-left">
                  {sidebarLabel}
                </span>

                <div className="flex flex-col gap-3 max-h-[520px] overflow-y-auto pr-1">
                  {sidebarLoading ? (
                    <div className="py-8 flex flex-col items-center gap-3">
                      <div className="w-8 h-8 border-t-4 border-b-4 border-[#C75550] rounded-full animate-spin" />
                      <span className="font-montserrat text-[10px] font-bold tracking-widest text-[#4b5563] uppercase">
                        LOADING...
                      </span>
                    </div>
                  ) : sidebarItems.length > 0 ? (
                    isProductMode ? (
                      filteredProducts.map((product) => (
                        <SidebarListItem
                          key={product.id}
                          label={product.name}
                          isSelected={String(activeProductId) === String(product.id)}
                          onClick={() => setActiveProductId(product.id)}
                        />
                      ))
                    ) : (
                      filteredCustomers.map((customer) => (
                        <SidebarListItem
                          key={customer.id}
                          label={customer.name}
                          isSelected={activeCustomerId === customer.id}
                          onClick={() => setActiveCustomerId(customer.id)}
                        />
                      ))
                    )
                  ) : (
                    <p className="font-body text-xs text-[#4b5563] leading-relaxed">
                      {isProductMode
                        ? "No products found for this category."
                        : "No customers found for this category."}
                    </p>
                  )}
                </div>
              </div>

              <div className="bg-[#1c1b1b] p-6 flex flex-col gap-3 text-left border border-[#e5e7eb]/10">
                <div className="flex items-center gap-2 text-[#fbbd05]">
                  <i className="fa-solid fa-flask-vial text-base" />
                  <h3 className="font-title text-base font-bold tracking-wider uppercase">
                    CUSTOM COMPOUNDS
                  </h3>
                </div>
                <p className="font-body text-[11px] sm:text-xs text-[#d1d5db] leading-relaxed">
                  All products can be altered or calendered to specialized physical tolerances on technical drawing submission.
                </p>
              </div>
            </aside>

            <section className="lg:col-span-9 flex flex-col gap-6 w-full">
              <div className="w-full border-b border-[#e5e7eb] pb-3">
                <span className="font-montserrat text-xs font-bold text-[#1c1b1b] tracking-wider uppercase line-clamp-2">
                  CATALOG / {categoryName.toUpperCase()}
                  {isCustomerMode && activeCustomer ? ` / ${activeCustomer.name}` : ""}
                  {isProductMode && activeProduct ? ` / ${activeProduct.name}` : ""}
                </span>
              </div>

              {isCustomerMode ? (
                productsLoading ? (
                  <div className="w-full border border-dashed border-[#e5e7eb] py-20 px-8 flex flex-col items-center justify-center text-center bg-[#f9fafb] min-h-[360px]">
                    <div className="w-12 h-12 border-t-4 border-b-4 border-[#C75550] rounded-full animate-spin mb-4" />
                    <span className="font-montserrat text-xs font-bold tracking-widest text-[#4b5563] uppercase">
                      LOADING PRODUCTS...
                    </span>
                  </div>
                ) : products.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product, index) => (
                      <ProductCard key={product.id} product={product} index={index} />
                    ))}
                  </div>
                ) : (
                  <div className="w-full border border-dashed border-[#e5e7eb] py-20 px-8 flex flex-col items-center justify-center text-center bg-[#f9fafb] min-h-[360px]">
                    <div className="w-12 h-12 rounded-full bg-[#C75550]/10 flex items-center justify-center text-[#C75550] mb-4">
                      <i className="fa-solid fa-box-open text-lg" />
                    </div>
                    <h4 className="font-title text-xl font-bold text-[#1c1b1b] uppercase tracking-wide">
                      NO PRODUCTS FOUND
                    </h4>
                    <p className="font-body text-xs text-[#4b5563] max-w-md mt-2 leading-relaxed">
                      {activeCustomer
                        ? `No products are listed for ${activeCustomer.name} yet.`
                        : "Select a customer from the list to view their product catalog."}
                    </p>
                  </div>
                )
              ) : categoryProductsLoading ? (
                <div className="w-full border border-dashed border-[#e5e7eb] py-20 px-8 flex flex-col items-center justify-center text-center bg-[#f9fafb] min-h-[360px]">
                  <div className="w-12 h-12 border-t-4 border-b-4 border-[#C75550] rounded-full animate-spin mb-4" />
                  <span className="font-montserrat text-xs font-bold tracking-widest text-[#4b5563] uppercase">
                    LOADING PRODUCTS...
                  </span>
                </div>
              ) : activeProduct ? (
                <ProductDetailPanel product={activeProduct} />
              ) : (
                <div className="w-full border border-dashed border-[#e5e7eb] py-20 px-8 flex flex-col items-center justify-center text-center bg-[#f9fafb] min-h-[360px]">
                  <div className="w-12 h-12 rounded-full bg-[#C75550]/10 flex items-center justify-center text-[#C75550] mb-4">
                    <i className="fa-solid fa-box-open text-lg" />
                  </div>
                  <h4 className="font-title text-xl font-bold text-[#1c1b1b] uppercase tracking-wide">
                    SELECT A PRODUCT
                  </h4>
                  <p className="font-body text-xs text-[#4b5563] max-w-md mt-2 leading-relaxed">
                    Select a product from the list to view its details.
                  </p>
                </div>
              )}
            </section>
          </div>
        )}
      </main>

      <div className="w-full mt-16">
        <ContactBanner />
      </div>
    </div>
  );
}
