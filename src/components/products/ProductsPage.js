"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ContactBanner } from "../layout/ContactBanner";

// 1. DYNAMIC CATALOG PRODUCT DATA
const ALL_CATALOG_PRODUCTS = [
  // --- CATEGORY 1: AUTOMOTIVE PRODUCTS ---
  {
    id: "auto-1",
    category: "AUTOMOTIVE PRODUCTS",
    spec: "SPEC: ASTM D2000 M3BA610",
    compound: "EPDM",
    title: "STEERING COLUMN RUBBER GROMMETS / BELLOWS",
    material: "MAT // EPDM / SBR",
    image: "/images/product card images (1).png",
  },
  {
    id: "auto-2",
    category: "AUTOMOTIVE PRODUCTS",
    spec: "SPEC: SAE J200 3CH715",
    compound: "NBR",
    title: "RUBBER REBOUND SLIDER",
    material: "MAT // NBR / WEAR RESI...",
    image: "/images/product card images (2).png",
  },
  {
    id: "auto-3",
    category: "AUTOMOTIVE PRODUCTS",
    spec: "SPEC: ASTM D2000 M2AA508",
    compound: "NATURAL RUBBER (NR)",
    title: "AUTOMOTIVE RUBBER MOUNTINGS FOR AIR PRESSURE TANK SEAT...",
    material: "MAT // NATURAL RUBBER ...",
    image: "/images/product card images (3).png",
  },
  {
    id: "auto-4",
    category: "AUTOMOTIVE PRODUCTS",
    spec: "SPEC: ASTM D2000 M4CH614",
    compound: "EPICHLOROHYDRIN (ECO)",
    title: "DIESEL FILTER RUBBER AIR DUCT AIR CLEANER PIPES & ELBOWS",
    material: "MAT // EPICHLOROHYDRIN...",
    image: "/images/product card images (4).png",
  },
  {
    id: "auto-5",
    category: "AUTOMOTIVE PRODUCTS",
    spec: "SPEC: ASTM D2000 M2BC510",
    compound: "NEOPRENE (CR)",
    title: "PROTECTIVE SLEEVES, DUST BOOTS, BELLOWS & WEATHER PROTECTIVE...",
    material: "MAT // NEOPRENE (CR)",
    image: "/images/product card images (5).png",
  },
  {
    id: "auto-6",
    category: "AUTOMOTIVE PRODUCTS",
    spec: "SPEC: SAE J200 2AA815",
    compound: "HEAVY-DUTY NR COMPOUND",
    title: "RUBBER PAD FOR LEAF SPRING SEAT ENDS",
    material: "MAT // HEAVY-DUTY NR C...",
    image: "/images/product card images (1).png",
  },
  {
    id: "auto-7",
    category: "AUTOMOTIVE PRODUCTS",
    spec: "SPEC: ASTM D2000 MULTI-SPEC",
    compound: "EPDM",
    title: "DIFFERENT TYPES OF RUBBER MOUNTINGS",
    material: "MAT // EPDM / NBR CUST...",
    image: "/images/product card images (2).png",
  },
  {
    id: "auto-8",
    category: "AUTOMOTIVE PRODUCTS",
    spec: "SPEC: ASTM D2000 M1BG610",
    compound: "NBR WITH FABRIC INLAY (NYLON",
    title: "RUBBER DIAPHRAGMS",
    material: "MAT // NBR WITH FABRIC...",
    image: "/images/product card images (3).png",
  },
  {
    id: "auto-9",
    category: "AUTOMOTIVE PRODUCTS",
    spec: "SPEC: ASTM D2000 M5GE408",
    compound: "ULTRA-SOFT SILICONE (VMQ)",
    title: "RUBBER DAMPER ASSEMBLY FOR TACHOMETER MOUNTINGS",
    material: "MAT // ULTRA-SOFT SILI...",
    image: "/images/product card images (4).png",
  },
  {
    id: "auto-10",
    category: "AUTOMOTIVE PRODUCTS",
    spec: "SPEC: SAE J200 3BA714",
    compound: "WEATHER RESISTANT EPDM",
    title: "RUBBER STRAPS & STRIPS FOR AIR FILTER MOUNTINGS WITH S.S. HOOKS",
    material: "MAT // WEATHER RESISTA...",
    image: "/images/product card images (5).png",
  },
  {
    id: "auto-11",
    category: "AUTOMOTIVE PRODUCTS",
    spec: "SPEC: SAE J200 CLASS EE/EG",
    compound: "KEVLAR",
    title: "REINFORCED SILICON RUBBER SLEEVES / ELBOWS FOR TURBO CHARGER...",
    material: "MAT // KEVLAR/POLYESTE...",
    image: "/images/product card images (1).png",
  },
  {
    id: "auto-12",
    category: "AUTOMOTIVE PRODUCTS",
    spec: "SPEC: OEM DYNAMIC GRADE SPEC",
    compound: "PREMIUM NR",
    title: "ENGINE MOUNTING PARTS FOR EXPORT CARS",
    material: "MAT // PREMIUM NR / CA...",
    image: "/images/product card images (2).png",
  },
  {
    id: "auto-13",
    category: "AUTOMOTIVE PRODUCTS",
    spec: "SPEC: ASTM D2000 AA SPEC",
    compound: "SBR",
    title: "RUBBER MOUNTINGS & BUMPERS FOR EXPORT CARS",
    material: "MAT // SBR / NBR BLEND",
    image: "/images/product card images (3).png",
  },
  {
    id: "auto-14",
    category: "AUTOMOTIVE PRODUCTS",
    spec: "SPEC: SAE J903",
    compound: "CHLORINATED NATURAL RUBBER",
    title: "RUBBER WIPER BLADES",
    material: "MAT // CHLORINATED NAT...",
    image: "/images/product card images (4).png",
  },
  {
    id: "auto-15",
    category: "AUTOMOTIVE PRODUCTS",
    spec: "SPEC: SAE J200 5DA712",
    compound: "TRIPLE COMPOSITE: EPDM",
    title: "RUBBER/PLASTIC & ALUMINIUM CO-EXTRUDED PROFILES FOR AUTOMOTIVE",
    material: "MAT // TRIPLE COMPOSIT...",
    image: "/images/product card images (5).png",
  },
  {
    id: "auto-16",
    category: "AUTOMOTIVE PRODUCTS",
    spec: "SPEC: ASTM D2000 M2HK810",
    compound: "FLUOROCARBON (FKM - VITON)",
    title: "RUBBER SEALS FOR RADIAL PISTON ACTUATORS & SOLENOID VALVES",
    material: "MAT // FLUOROCARBON (F...",
    image: "/images/product card images (1).png",
  },
  {
    id: "auto-17",
    category: "AUTOMOTIVE PRODUCTS",
    spec: "SPEC: UL94-V0 FIRE RETARDANT",
    compound: "FLAME RETARDANT NEOPRENE (CR)",
    title: "RUBBER SLEEVES FOR CABLES AND WIRING HARNESSES",
    material: "MAT // FLAME RETARDANT...",
    image: "/images/product card images (2).png",
  },
  {
    id: "auto-18",
    category: "AUTOMOTIVE PRODUCTS",
    spec: "SPEC: ASTM D2000 BG GRADE",
    compound: "NBR WITH HEAVY DUTY FABRIC CORE",
    title: "RUBBER DIAPHRAGMS FOR ACTUATORS",
    material: "MAT // NBR WITH HEAVY ...",
    image: "/images/product card images (3).png",
  },
  {
    id: "auto-19",
    category: "AUTOMOTIVE PRODUCTS",
    spec: "SPEC: ASTM D2000 STANDARDS",
    compound: "CUSTOM CALENDERED RAW COMPOUNDS (EPDM",
    title: "RUBBER COMPOUND FOR AUTOMOTIVE RUBBER HOSE",
    material: "MAT // CUSTOM CALENDER...",
    image: "/images/product card images (4).png",
  },

  // --- CATEGORY 2: LOW PRESSURE HOSES ---
  {
    id: "hose-1",
    category: "LOW PRESSURE HOSES",
    spec: "SPEC: SAE J30 R7",
    compound: "NBR / CR DUAL EXTRUSION",
    title: "LOW PRESSURE FUEL & OIL DELIVERY RUBBER HOSE",
    material: "MAT // NBR CORE / CR OUT...",
    image: "/images/product card images (5).png",
  },
  {
    id: "hose-2",
    category: "LOW PRESSURE HOSES",
    spec: "SPEC: DIN 73379",
    compound: "EPDM",
    title: "RADIATOR & COOLANT BENT RUBBER HOSE FOR DIESEL ENGINES",
    material: "MAT // EPDM WITH POLYESTER...",
    image: "/images/product card images (1).png",
  },
  {
    id: "hose-3",
    category: "LOW PRESSURE HOSES",
    spec: "SPEC: ISO 4079",
    compound: "SBR / EPDM BLENDS",
    title: "TEXTILE REINFORCED WATER DISCHARGE FLUID HOSE",
    material: "MAT // SBR BRAID REINFOR...",
    image: "/images/product card images (2).png",
  },

  // --- CATEGORY 3: INDUSTRIAL & CRITICAL RUBBER ---
  {
    id: "ind-1",
    category: "INDUSTRIAL & CRITICAL RUBBER",
    spec: "SPEC: ASTM D2000 M3GE710",
    compound: "SILICONE (VMQ)",
    title: "HIGH TEMPERATURE SILICONE GASKETS FOR INDUSTRIAL OVENS",
    material: "MAT // HIGH TEMPERATURE VMQ",
    image: "/images/product card images (3).png",
  },
  {
    id: "ind-2",
    category: "INDUSTRIAL & CRITICAL RUBBER",
    spec: "SPEC: SAE J200 2BG715",
    compound: "NBR / BR COMPOSITE",
    title: "HEAVY DUTY ANTI-VIBRATION INDUSTRIAL MOUNTINGS",
    material: "MAT // NITRILE / METAL IN...",
    image: "/images/product card images (4).png",
  },
  {
    id: "ind-3",
    category: "INDUSTRIAL & CRITICAL RUBBER",
    spec: "SPEC: ASTM D2000 M1AA810",
    compound: "NATURAL RUBBER (NR)",
    title: "CRITICAL RUBBER TO METAL BONDED SUSPENSION PADS",
    material: "MAT // NR TO STEEL SHELL",
    image: "/images/product card images (5).png",
  },

  // --- CATEGORY 4: AIR FILTER & TURBO CHARGER ---
  {
    id: "turbo-1",
    category: "AIR FILTER & TURBO CHARGER",
    spec: "SPEC: SAE J200 CLASS EE",
    compound: "SILICONE / ARAMID (KEVLAR)",
    title: "TURBOCHARGER CONVOLUTED HOSE FOR HIGH PRESSURE DUCTS",
    material: "MAT // ARAMID BRAID SILI...",
    image: "/images/product card images (1).png",
  },
  {
    id: "turbo-2",
    category: "AIR FILTER & TURBO CHARGER",
    spec: "SPEC: ASTM D2000 M2BC614",
    compound: "CHLOROPRENE (CR)",
    title: "FLEXIBLE AIR CLEANER INTAKE BELLOWS",
    material: "MAT // HEAVY DUTY CR",
    image: "/images/product card images (2).png",
  },

  // --- CATEGORY 5: EXTRUDED RUBBER PROFILES ---
  {
    id: "prof-1",
    category: "EXTRUDED RUBBER PROFILES",
    spec: "SPEC: ASTM D2000 M3BA712",
    compound: "EPICHLOROHYDRIN / SPONGE",
    title: "AUTOMOTIVE DOOR AND BOOT WEATHERSTRIP EXTRUSIONS",
    material: "MAT // DUAL DENSITY EPDM",
    image: "/images/product card images (3).png",
  },
  {
    id: "prof-2",
    category: "EXTRUDED RUBBER PROFILES",
    spec: "SPEC: SAE J200 3CH810",
    compound: "NBR EXTRUDED",
    title: "OIL RESISTANT EXTRUDED SQUARE CHANNEL PROFILE",
    material: "MAT // HIGH ACRYLONITRILE...",
    image: "/images/product card images (4).png",
  },

  // --- CATEGORY 6: SPECIAL DAMPER MOUNTINGS ---
  {
    id: "damp-1",
    category: "SPECIAL DAMPER MOUNTINGS",
    spec: "SPEC: OEM DYNAMIC GRADE",
    compound: "NATURAL RUBBER (NR)",
    title: "TUNED TORSIONAL VIBRATION DAMPER FOR ENGINE CRANKSHAFTS",
    material: "MAT // SHEAR DAMPING NR",
    image: "/images/product card images (5).png",
  },
  {
    id: "damp-2",
    category: "SPECIAL DAMPER MOUNTINGS",
    spec: "SPEC: ASTM D2000 M2BC710",
    compound: "NEOPRENE (CR)",
    title: "SPECIALIZED SHOCK ABSORBING MOUNTS FOR INDUSTRIAL UNITS",
    material: "MAT // CR / STEEL INSERTS",
    image: "/images/product card images (1).png",
  },
];

// CATEGORIES STATIC LIST
const CATEGORIES = [
  "AUTOMOTIVE PRODUCTS",
  "LOW PRESSURE HOSES",
  "INDUSTRIAL & CRITICAL RUBBER",
  "AIR FILTER & TURBO CHARGER",
  "EXTRUDED RUBBER PROFILES",
  "SPECIAL DAMPER MOUNTINGS",
];

// 2. PRODUCTS HERO COMPONENT
function ProductsHero() {
  return (
    <header className="relative w-full border-b-2 border-[#1C1B1B] overflow-hidden bg-[#1C1B1B] py-20 sm:py-24 lg:py-28">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/backgroundProduct.png" 
          alt="Bymer Elastomers Factory Facility background" 
          fill
          sizes="100vw"
          className="object-cover  filter grayscale"
          priority
        />
        {/* Rigid brutalist tech grid overlay */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.03]" 
          style={{
            backgroundImage: "linear-gradient(#FCF9F8 2px, transparent 2px), linear-gradient(90deg, #FCF9F8 2px, transparent 2px)",
            backgroundSize: "30px 30px"
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-start gap-4">
        <span className="font-subtitle text-xs sm:text-sm font-bold tracking-[0.25em] text-[#FDC003] uppercase leading-none bg-[#1C1B1B] px-3 py-1.5 border border-[#313030] shadow-[2px_2px_0px_0px_#B81312]">
          INDUSTRIAL SOLUTIONS & ENGINEERING
        </span>
        <h1 className="font-title text-5xl sm:text-7xl font-black uppercase text-[#FCF9F8] leading-[0.95] tracking-tighter">
          AUTOMOTIVE PRODUCTS
        </h1>
        <p className="font-body text-base sm:text-lg text-[#DCD9D9] max-w-xl leading-relaxed mt-2 border-l-2 border-[#B81312] pl-4">
          Premium rubber-to-metal components, seals, and technical suspension mounts.
        </p>
      </div>
    </header>
  );
}

// 3. SINGLE PRODUCT CARD COMPONENT
function ProductCard({ product }) {
  return (
    <div className="group relative bg-white border-2 border-[#1C1B1B] shadow-[4px_4px_0px_0px_#1C1B1B] hover:translate-y-[-4px] hover:shadow-[6px_6px_0px_0px_#1C1B1B] active:translate-y-0 active:shadow-[4px_4px_0px_0px_#1C1B1B] transition-all duration-200 flex flex-col justify-between overflow-hidden h-full">
      
      {/* Absolute Spec Tag on top of image */}
      <div className="absolute top-3 left-3 bg-[#1C1B1B] text-[#FCF9F8] border border-[#313030] py-1.5 px-3 font-subtitle text-[10px] sm:text-[11px] font-bold uppercase tracking-wider z-10 shadow-[2px_2px_0px_0px_#B81312]">
        {product.spec}
      </div>

      {/* Top Section: Grayscale Image */}
      <div className="relative w-full aspect-[279/154] border-b-2 border-[#1C1B1B] bg-[#FCF9F8] overflow-hidden flex-shrink-0">
        <Image 
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-w-7xl) 33vw, (max-w-md) 100vw, 500px"
          className="object-cover filter grayscale brightness-95 contrast-105 group-hover:grayscale-0 group-hover:scale-102 transition-all duration-300"
        />
        {/* Subtle grid pattern inside image box to reinforce schematic feel */}
        <div className="absolute inset-0 bg-transparent opacity-10 pointer-events-none" 
             style={{
               backgroundImage: "radial-gradient(#1C1B1B 1px, transparent 1px)",
               backgroundSize: "16px 16px"
             }} 
        />
      </div>

      {/* Middle Section: Details */}
      <div className="p-6 flex flex-col items-start gap-2 flex-grow">
        <span className="font-subtitle text-xs font-bold text-[#B81312] uppercase tracking-wider leading-none">
          COMPOUND: {product.compound}
        </span>
        <h3 className="font-title text-xl sm:text-2xl font-black text-[#1C1B1B] uppercase leading-[1.1] tracking-tight group-hover:text-[#B81312] transition-colors mt-1.5 truncate-3-lines">
          {product.title}
        </h3>
      </div>

      {/* Bottom Row: Material & Action block */}
      <div className="w-full border-t-2 border-[#1C1B1B] flex items-stretch h-12 bg-[#F0EDEC] flex-shrink-0">
        {/* Material text */}
        <div className="flex-grow px-4 flex items-center font-subtitle text-[11px] sm:text-xs font-bold text-[#1C1B1B]/70 tracking-wider uppercase truncate">
          {product.material}
        </div>
        {/* Red block with arrow */}
        <Link 
          href="/contact"
          className="w-12 border-l-2 border-[#1C1B1B] bg-[#B81312] hover:bg-[#DC3228] active:bg-[#B81312] text-[#FCF9F8] flex items-center justify-center font-black transition-colors duration-100 flex-shrink-0 cursor-pointer"
        >
          <span className="text-lg leading-none transform translate-y-[-1px] group-hover:translate-x-0.5 transition-transform">→</span>
        </Link>
      </div>

    </div>
  );
}

// 4. MAIN DYNAMIC PRODUCTS CATALOG COMPONENT
export function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("AUTOMOTIVE PRODUCTS");
  const [searchQuery, setSearchQuery] = useState("");

  // Memoized filtered products list based on category & search terms
  const filteredProducts = useMemo(() => {
    return ALL_CATALOG_PRODUCTS.filter((product) => {
      // 1. Matches Category
      const matchesCategory = product.category === activeCategory;
      
      // 2. Matches Search term
      const query = searchQuery.trim().toLowerCase();
      if (!query) return matchesCategory;

      const matchesSearch = 
        product.title.toLowerCase().includes(query) ||
        product.compound.toLowerCase().includes(query) ||
        product.spec.toLowerCase().includes(query) ||
        product.material.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FCF9F8]">
      
      {/* Hero Banner Section */}
      <ProductsHero />

      {/* Layout Content Wrapper */}
      <main className="w-full py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Search Bar Section */}
        <div className="w-full flex flex-col md:flex-row gap-6 items-stretch justify-between mb-16">
          {/* Search Box input wrapper */}
          <div className="flex-grow max-w-2xl relative border-2 border-[#1C1B1B] bg-white shadow-[4px_4px_0px_0px_#1C1B1B] focus-within:translate-x-[-2px] focus-within:translate-y-[-2px] focus-within:shadow-[6px_6px_0px_0px_#1C1B1B] transition-all duration-150">
            {/* Search Icon */}
            <div className="absolute left-4.5 top-1/2 -translate-y-1/2 flex items-center pointer-events-none text-[#1C1B1B]">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            {/* Real input */}
            <input 
              type="text"
              placeholder="SEARCH COMPONENTS, SPECIFICATIONS, OR POLYMERS ..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent border-none text-[#1C1B1B] placeholder-[#1C1B1B]/40 py-4.5 pl-12 pr-6 font-title text-base sm:text-lg font-bold tracking-wider uppercase focus:outline-none rounded-none"
            />
          </div>

          {/* Active Count Badge */}
          <div className="flex-shrink-0 px-2 flex items-center border-2 border-[#1C1B1B] bg-white font-subtitle text-xs sm:text-sm font-bold tracking-wider uppercase overflow-hidden">
            <span className="px-5 text-[#1C1B1B]">
              ACTIVE COUNT:
            </span>
            <span className="bg-[#B81312] text-white px-5 py-4.5  flex items-center justify-center min-w-[3.5rem] text-center font-bold">
              {filteredProducts.length}
            </span>
          </div>
        </div>

        {/* Categories Sidebar & Products Grid container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT SIDEBAR: BROWSE CATEGORIES */}
          <aside className="lg:col-span-3 flex flex-col gap-6 w-full">
            <span className="font-subtitle text-xs font-bold text-[#1C1B1B]/50 tracking-[0.2em] uppercase leading-none pl-1">
              BROWSE CATEGORIES
            </span>
            <div className="flex flex-col gap-3">
              {CATEGORIES.map((category) => {
                const isSelected = activeCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => {
                      setActiveCategory(category);
                      setSearchQuery(""); // Reset search on category change
                    }}
                    className={`w-full text-left font-title text-base font-bold tracking-wide uppercase px-5 py-4.5 border-2 border-[#1C1B1B] transition-all duration-100 flex items-center justify-between group rounded-none cursor-pointer ${
                      isSelected
                        ? "bg-[#FDC003] text-[#1C1B1B] shadow-[4px_4px_0px_0px_#1C1B1B] translate-x-[-2px] translate-y-[-2px]"
                        : "bg-[#FCF9F8] text-[#1C1B1B] hover:bg-[#F0EDEC] active:translate-x-0 active:translate-y-0"
                    }`}
                  >
                    <span>{category}</span>
                    {isSelected ? (
                      <span className="font-bold text-lg leading-none transform translate-x-0.5">→</span>
                    ) : (
                      <span className="font-bold text-lg leading-none opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-[#B81312]">→</span>
                    )}
                  </button>
                );
              })}
            </div>
          </aside>

          {/* RIGHT GRID: PRODUCTS LISTING */}
          <section className="lg:col-span-9 flex flex-col gap-8 w-full">
            
            {/* Breadcrumb Stripe Banner */}
            <div className="w-full bg-[#1C1B1B] text-[#FCF9F8] border-2 border-[#1C1B1B] py-3.5 px-6 font-subtitle text-xs font-bold tracking-widest uppercase flex items-center justify-between shadow-[4px_4px_0px_0px_#1C1B1B]">
              <span>■ CATALOG // {activeCategory}</span>
              {searchQuery && (
                <span className="text-[#FDC003] font-bold text-[10px]">FILTERED BY SEARCH</span>
              )}
            </div>

            {/* Grid List or Fallback Empty message */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((prod) => (
                  <div key={prod.id} className="w-full">
                    <ProductCard product={prod} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="w-full border-4 border-dashed border-[#1C1B1B] py-24 px-8 flex flex-col items-center justify-center text-center bg-white shadow-[4px_4px_0px_0px_#1C1B1B]">
                <div className="w-16 h-16 border-2 border-[#1C1B1B] bg-[#F0EDEC] flex items-center justify-center text-[#B81312] mb-6 shadow-[2px_2px_0px_0px_#1C1B1B]">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-title text-2xl font-black text-[#1C1B1B] uppercase tracking-wide leading-none">
                  NO COMPONENTS FOUND
                </h4>
                <p className="font-body text-sm text-[#1C1B1B]/70 max-w-sm mt-3 leading-relaxed">
                  We couldn&apos;t find any rubber parts matching &quot;{searchQuery}&quot; under {activeCategory}. Double-check your spelling or clear filters.
                </p>
                <button 
                  onClick={() => setSearchQuery("")}
                  className="btn-brutal-outline bg-[#FCF9F8] px-6 py-2.5 text-xs tracking-widest mt-6 border-2 border-[#1C1B1B]"
                >
                  CLEAR SEARCH FILTER
                </button>
              </div>
            )}
          </section>

        </div>

      </main>

      {/* Get In Touch Banner Banner bottom section */}
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-0 mb-24">
        <div className="w-full mx-auto border-y-2 border-r-2 lg:border-r-0 border-[#1C1B1B] shadow-[8px_8px_0px_0px_#1C1B1B] overflow-hidden">
          <ContactBanner />
        </div>
      </div>

    </div>
  );
}
