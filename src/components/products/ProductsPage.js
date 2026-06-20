"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ContactBanner } from "../layout/ContactBanner";
import { fetchCategories, fetchProducts } from "@/lib/api";

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
    image: "/images/product_card_1.png",
  },
  {
    id: "auto-2",
    category: "AUTOMOTIVE PRODUCTS",
    spec: "SPEC: SAE J200 3CH715",
    compound: "NBR",
    title: "RUBBER REBOUND SLIDER",
    material: "MAT // NBR / WEAR RESISTANT",
    image: "/images/product_card_2.png",
  },
  {
    id: "auto-3",
    category: "AUTOMOTIVE PRODUCTS",
    spec: "SPEC: ASTM D2000 M2AA508",
    compound: "Natural Rubber (NR)",
    title: "AUTOMOTIVE RUBBER MOUNTINGS FOR AIR PRESSURE TANK SEAT",
    material: "MAT // NATURAL RUBBER",
    image: "/images/product_card_3.png",
  },
  {
    id: "auto-4",
    category: "AUTOMOTIVE PRODUCTS",
    spec: "SPEC: ASTM D2000 M4CH614",
    compound: "Epichlorohydrin (ECO)",
    title: "DIESEL FILTER RUBBER AIR DUCT AIR CLEANER PIPES & ELBOWS",
    material: "MAT // EPICHLOROHYDRIN",
    image: "/images/product_card_4.png",
  },
  {
    id: "auto-5",
    category: "AUTOMOTIVE PRODUCTS",
    spec: "SPEC: ASTM D2000 M2BC510",
    compound: "Neoprene (CR)",
    title: "PROTECTIVE SLEEVES, DUST BOOTS, BELLOWS & WEATHER PROTECTIVE COVERS",
    material: "MAT // NEOPRENE (CR)",
    image: "/images/product_card_5.png",
  },
  {
    id: "auto-6",
    category: "AUTOMOTIVE PRODUCTS",
    spec: "SPEC: SAE J200 2AA815",
    compound: "Heavy Duty NR Compound",
    title: "RUBBER PAD FOR LEAF SPRING SEAT ENDS",
    material: "MAT // HEAVY DUTY NR",
    image: "/images/product_card_1.png",
  },
  {
    id: "auto-7",
    category: "AUTOMOTIVE PRODUCTS",
    spec: "SPEC: ASTM D2000 MULTI-SPEC",
    compound: "EPDM",
    title: "DIFFERENT TYPES OF RUBBER MOUNTINGS",
    material: "MAT // EPDM / NR BLEND",
    image: "/images/product_card_2.png",
  },
  {
    id: "auto-8",
    category: "AUTOMOTIVE PRODUCTS",
    spec: "SPEC: ASTM D2000 M1BG610",
    compound: "NBR with Fabric Insert",
    title: "RUBBER DIAPHRAGMS",
    material: "MAT // NBR / FABRIC REINFORCED",
    image: "/images/product_card_3.png",
  },
  {
    id: "auto-9",
    category: "AUTOMOTIVE PRODUCTS",
    spec: "SPEC: ASTM D2000 M5GE408",
    compound: "LVI-Soft Silicon (VMQ)",
    title: "RUBBER DAMPER ASSEMBLY FOR TACHOMETER MOUNTINGS",
    material: "MAT // SILICON RUBBER",
    image: "/images/product_card_4.png",
  },
  {
    id: "auto-10",
    category: "AUTOMOTIVE PRODUCTS",
    spec: "SPEC: SAE J200 3BA714",
    compound: "Weather Resistant EPDM",
    title: "RUBBER STRAPS & STRIPS FOR AIR FILTER MOUNTINGS WITH S.S. HOOKS",
    material: "MAT // WEATHER RESISTANT",
    image: "/images/product_card_5.png",
  },
  {
    id: "auto-11",
    category: "AUTOMOTIVE PRODUCTS",
    spec: "SPEC: SAE J200 CLASS EE/EG",
    compound: "Silicon",
    title: "REINFORCED SILICON RUBBER SLEEVES / ELBOWS FOR TURBO CHARGER HOSES",
    material: "MAT // ARAMID / POLYESTER REINFORCEMENT",
    image: "/images/product_card_1.png",
  },
  {
    id: "auto-12",
    category: "AUTOMOTIVE PRODUCTS",
    spec: "SPEC: OEM DYNAMIC GRADE SPEC",
    compound: "Premium NR",
    title: "ENGINE MOUNTING PARTS FOR EXPORT CARS",
    material: "MAT // PREMIUM NR",
    image: "/images/product_card_2.png",
  },
  {
    id: "auto-13",
    category: "AUTOMOTIVE PRODUCTS",
    spec: "SPEC: ASTM D2000 AA SPEC",
    compound: "SBR",
    title: "RUBBER MOUNTINGS & BUMPERS FOR EXPORT CARS",
    material: "MAT // SBR / NR BLEND",
    image: "/images/product_card_3.png",
  },
  {
    id: "auto-14",
    category: "AUTOMOTIVE PRODUCTS",
    spec: "SPEC: SAE J903",
    compound: "Epichlorohydrin Natural Blend",
    title: "RUBBER WIPER BLADES",
    material: "MAT // EPICHLOROHYDRIN",
    image: "/images/product_card_4.png",
  },
  {
    id: "auto-15",
    category: "AUTOMOTIVE PRODUCTS",
    spec: "SPEC: SAE J200 5DA712",
    compound: "Triple Composite EPDM",
    title: "RUBBER/PLASTIC & ALUMINIUM CO-EXTRUDED PROFILES FOR AUTOMOTIVE",
    material: "MAT // TRIPLE COMPOSITE",
    image: "/images/product_card_5.png",
  },
  {
    id: "auto-16",
    category: "AUTOMOTIVE PRODUCTS",
    spec: "SPEC: ASTM D2000 M2HK810",
    compound: "Fluorocarbon (FKM / Viton)",
    title: "RUBBER SEALS FOR RADIAL PISTON ACTUATORS & SOLENOID VALVES",
    material: "MAT // FLUOROCARBON",
    image: "/images/product_card_1.png",
  },
  {
    id: "auto-17",
    category: "AUTOMOTIVE PRODUCTS",
    spec: "SPEC: UL94-V0 FIRE RETARDANT",
    compound: "Flame Retardant Neoprene (CR)",
    title: "RUBBER SLEEVES FOR CABLES AND WIRING HARNESSES",
    material: "MAT // FLAME RETARDANT",
    image: "/images/product_card_2.png",
  },
  {
    id: "auto-18",
    category: "AUTOMOTIVE PRODUCTS",
    spec: "SPEC: ASTM D2000 BG GRADE",
    compound: "High Heat Heavy Duty Fabric",
    title: "RUBBER DIAPHRAGMS FOR ACTUATORS",
    material: "MAT // HEAT RESISTANT",
    image: "/images/product_card_3.png",
  },
  {
    id: "auto-19",
    category: "AUTOMOTIVE PRODUCTS",
    spec: "SPEC: ASTM D2000 STANDARDS",
    compound: "Custom Calendered Raw Compound",
    title: "RUBBER COMPOUND FOR AUTOMOTIVE RUBBER HOSE",
    material: "MAT // CUSTOM COMPOUND",
    image: "/images/product_card_4.png",
  },

  // --- CATEGORY 2: LOW PRESSURE HOSES ---
  {
    id: "hose-1",
    category: "LOW PRESSURE HOSES",
    spec: "SPEC: SAE J30 R7",
    compound: "NBR / CR DUAL EXTRUSION",
    title: "LOW PRESSURE FUEL & OIL DELIVERY RUBBER HOSE",
    material: "MAT // NBR CORE / CR OUTER",
    image: "/images/product_card_5.png",
  },
  {
    id: "hose-2",
    category: "LOW PRESSURE HOSES",
    spec: "SPEC: DIN 73379",
    compound: "EPDM",
    title: "RADIATOR & COOLANT BENT RUBBER HOSE FOR DIESEL ENGINES",
    material: "MAT // EPDM WITH POLYESTER",
    image: "/images/product_card_1.png",
  },
  {
    id: "hose-3",
    category: "LOW PRESSURE HOSES",
    spec: "SPEC: ISO 4079",
    compound: "SBR / EPDM BLENDS",
    title: "TEXTILE REINFORCED WATER DISCHARGE FLUID HOSE",
    material: "MAT // SBR BRAID REINFORCED",
    image: "/images/product_card_2.png",
  },

  // --- CATEGORY 3: INDUSTRIAL & CRITICAL RUBBER ---
  {
    id: "ind-1",
    category: "INDUSTRIAL & CRITICAL RUBBER",
    spec: "SPEC: ASTM D2000 M3GE710",
    compound: "SILICONE (VMQ)",
    title: "HIGH TEMPERATURE SILICONE GASKETS FOR INDUSTRIAL OVENS",
    material: "MAT // HIGH TEMPERATURE VMQ",
    image: "/images/product_card_3.png",
  },
  {
    id: "ind-2",
    category: "INDUSTRIAL & CRITICAL RUBBER",
    spec: "SPEC: SAE J200 2BG715",
    compound: "NBR / BR COMPOSITE",
    title: "HEAVY DUTY ANTI-VIBRATION INDUSTRIAL MOUNTINGS",
    material: "MAT // NITRILE / METAL INSERT",
    image: "/images/product_card_4.png",
  },
  {
    id: "ind-3",
    category: "INDUSTRIAL & CRITICAL RUBBER",
    spec: "SPEC: ASTM D2000 M1AA810",
    compound: "NATURAL RUBBER (NR)",
    title: "CRITICAL RUBBER TO METAL BONDED SUSPENSION PADS",
    material: "MAT // NR TO STEEL SHELL",
    image: "/images/product_card_5.png",
  },

  // --- CATEGORY 4: AIR FILTER & TURBO CHARGER ---
  {
    id: "turbo-1",
    category: "AIR FILTER & TURBO CHARGER",
    spec: "SPEC: SAE J200 CLASS EE",
    compound: "SILICONE / ARAMID (KEVLAR)",
    title: "TURBOCHARGER CONVOLUTED HOSE FOR HIGH PRESSURE DUCTS",
    material: "MAT // ARAMID BRAID SILICONE",
    image: "/images/product_card_1.png",
  },
  {
    id: "turbo-2",
    category: "AIR FILTER & TURBO CHARGER",
    spec: "SPEC: ASTM D2000 M2BC614",
    compound: "CHLOROPRENE (CR)",
    title: "FLEXIBLE AIR CLEANER INTAKE BELLOWS",
    material: "MAT // HEAVY DUTY CR",
    image: "/images/product_card_2.png",
  },

  // --- CATEGORY 5: EXTRUDED RUBBER PROFILES ---
  {
    id: "prof-1",
    category: "EXTRUDED RUBBER PROFILES",
    spec: "SPEC: ASTM D2000 M3BA712",
    compound: "EPICHLOROHYDRIN / SPONGE",
    title: "AUTOMOTIVE DOOR AND BOOT WEATHERSTRIP EXTRUSIONS",
    material: "MAT // DUAL DENSITY EPDM",
    image: "/images/product_card_3.png",
  },
  {
    id: "prof-2",
    category: "EXTRUDED RUBBER PROFILES",
    spec: "SPEC: SAE J200 3CH810",
    compound: "NBR EXTRUDED",
    title: "OIL RESISTANT EXTRUDED SQUARE CHANNEL PROFILE",
    material: "MAT // HIGH ACRYLONITRILE",
    image: "/images/product_card_4.png",
  },

  // --- CATEGORY 6: SPECIAL DAMPER MOUNTINGS ---
  {
    id: "damp-1",
    category: "SPECIAL DAMPER MOUNTINGS",
    spec: "SPEC: OEM DYNAMIC GRADE",
    compound: "NATURAL RUBBER (NR)",
    title: "TUNED TORSIONAL VIBRATION DAMPER FOR ENGINE CRANKSHAFTS",
    material: "MAT // SHEAR DAMPING NR",
    image: "/images/product_card_5.png",
  },
  {
    id: "damp-2",
    category: "SPECIAL DAMPER MOUNTINGS",
    spec: "SPEC: ASTM D2000 M2BC710",
    compound: "NEOPRENE (CR)",
    title: "SPECIALIZED SHOCK ABSORBING MOUNTS FOR INDUSTRIAL UNITS",
    material: "MAT // CR / STEEL INSERTS",
    image: "/images/product_card_1.png",
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
    <header className="relative w-full border-b border-[#e5e7eb] overflow-hidden min-h-[300px] sm:min-h-[350px] flex items-center justify-center">
      {/* Background Image Container */}
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

      {/* Dark semi-transparent overlay */}
      <div className="absolute inset-0 bg-[#0a0a0a]/70 z-10 pointer-events-none" />

      {/* Banner Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20 flex flex-col items-center gap-3">
        <span className="font-montserrat text-xs sm:text-sm font-bold tracking-[0.2em] text-[#9ca3af] uppercase leading-none">
          HOME / PRODUCTS
        </span>
        <h1 className="font-title text-4xl sm:text-6xl font-black uppercase text-white tracking-tight leading-none">
          PRODUCT CATALOG
        </h1>
        <p className="font-body text-xs sm:text-sm text-[#9ca3af] max-w-xl leading-relaxed">
          Complete lineup of rubber mixing, moulding, vacuum-assisted presses, and material preparation assets used across our Nashik manufacturing footprint.
        </p>
      </div>
    </header>
  );
}

// 3. SINGLE PRODUCT CARD COMPONENT
function ProductCard({ product, index }) {
  // Pad the index to 2 digits
  const partNumber = String(index + 1).padStart(2, "0");

  // Parse the material tags
  const getMaterialTags = (materialStr) => {
    if (!materialStr) return [];
    // Remove "MAT // " prefix if present
    let cleanStr = materialStr.replace(/^MAT\s*\/\/\s*/i, "");
    // Split by "/" or ","
    return cleanStr.split(/[\/,]/).map(t => t.trim()).filter(t => t.length > 0);
  };

  const tags = getMaterialTags(product.material);

  return (
    <Link href="/contact" className="group block h-full">
      <div className="bg-white border border-[#e5e7eb] p-6 flex flex-col h-full justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.05)] hover:border-[#C75550] rounded-none">
        
        {/* Top Section: Image, Part Metadata & Title */}
        <div className="flex flex-col items-start w-full">
          {/* Image Container Block */}
          <div className="w-full bg-[#f9fafb] border border-[#e5e7eb] p-3 aspect-[4/3] mb-5 relative flex-shrink-0">
            <div className="w-full h-full border border-dashed border-[#cbd5e1] relative bg-white flex items-center justify-center overflow-hidden">
              {product.image ? (
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-w-sm) 100vw, 300px"
                  className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <span className="text-gray-300 text-[10px] uppercase font-montserrat tracking-wider">NO IMAGE</span>
              )}
            </div>
          </div>

          {/* Part Metadata */}
          <span className="font-montserrat text-[10px] font-bold text-[#9ca3af] tracking-widest uppercase mb-1.5 leading-none">
            PART {partNumber} // COMPONENT
          </span>
          
          {/* Product Title */}
          <h3 className="font-title text-lg sm:text-xl font-black text-[#1c1b1b] uppercase tracking-tight leading-snug group-hover:text-[#C75550] transition-colors duration-200 text-left">
            {product.title}
          </h3>
        </div>

        {/* Bottom Section: Compound Block & Material Tags */}
        <div className="w-full">
          {/* Shaded Compound Block */}
          <div className="bg-[#f9fafb] border-l-4 border-[#fbbd05] py-2 px-3 my-4 text-left w-full">
            <span className="font-montserrat text-xs text-[#4b5563] tracking-wide">
              <span className="font-bold text-[#1c1b1b]">Compound:</span> {product.compound}
            </span>
          </div>

          {/* Hard divider line */}
          <div className="w-full border-t border-[#e5e7eb] my-4" />

          {/* Bottom Material Tags Row */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span 
                key={tag} 
                className="bg-[#f3f4f6] border border-[#e5e7eb] text-[#4b5563] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-none"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </Link>
  );
}

// 4. MAIN DYNAMIC PRODUCTS CATALOG COMPONENT
export function ProductsPage() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("AUTOMOTIVE PRODUCTS");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [catsData, prodsData] = await Promise.all([
          fetchCategories(),
          fetchProducts(),
        ]);
        
        if (catsData && catsData.length > 0) {
          const catNames = catsData.map(c => c.name.toUpperCase());
          setCategories(catNames);
          // Default to first category if available
          if (catNames.length > 0) {
            setActiveCategory(catNames[0]);
          }
        } else {
          setCategories([
            "AUTOMOTIVE PRODUCTS",
            "LOW PRESSURE HOSES",
            "INDUSTRIAL & CRITICAL RUBBER",
            "AIR FILTER & TURBO CHARGER",
            "EXTRUDED RUBBER PROFILES",
            "SPECIAL DAMPER MOUNTINGS",
          ]);
        }

        if (prodsData && prodsData.length > 0) {
          const mapped = prodsData.map(prod => ({
            id: prod.id || prod.slug,
            category: (prod.category_name || "").toUpperCase(),
            category_slug: prod.category_slug,
            title: prod.name,
            spec: prod.specification || "",
            compound: prod.customer || "",
            material: prod.description || "",
            image: prod.image_url
          }));
          setProducts(mapped);
        } else {
          setProducts(ALL_CATALOG_PRODUCTS);
        }
      } catch (err) {
        console.error("Failed to load products page data", err);
        setCategories([
          "AUTOMOTIVE PRODUCTS",
          "LOW PRESSURE HOSES",
          "INDUSTRIAL & CRITICAL RUBBER",
          "AIR FILTER & TURBO CHARGER",
          "EXTRUDED RUBBER PROFILES",
          "SPECIAL DAMPER MOUNTINGS",
        ]);
        setProducts(ALL_CATALOG_PRODUCTS);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  // Memoized filtered products list based on category & search terms
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // 1. Matches Category
      const matchesCategory = product.category === activeCategory;
      
      // 2. Matches Search term
      const query = searchQuery.trim().toLowerCase();
      if (!query) return matchesCategory;

      const matchesSearch = 
        (product.title || "").toLowerCase().includes(query) ||
        (product.compound || "").toLowerCase().includes(query) ||
        (product.spec || "").toLowerCase().includes(query) ||
        (product.material || "").toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [products, activeCategory, searchQuery]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <ProductsHero />
        <main className="w-full py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white flex flex-col items-center justify-center min-h-[400px]">
          <div className="flex flex-col items-center gap-4 animate-pulse">
            <div className="w-12 h-12 border-t-4 border-b-4 border-[#C75550] rounded-full animate-spin"></div>
            <span className="font-montserrat text-xs font-bold tracking-widest text-[#4b5563] uppercase">LOADING PRODUCTS CATALOG...</span>
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
      
      {/* Hero Banner Section */}
      <ProductsHero />

      {/* Layout Content Wrapper */}
      <main className="w-full py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
        
        {/* Search Bar Section */}
        <div className="w-full flex flex-col sm:flex-row gap-4 items-center justify-between mb-10 border-b border-[#e5e7eb] pb-8">
          {/* Search Box input wrapper */}
          <div className="w-full sm:max-w-md relative flex items-center">
            {/* Search Icon */}
            <span className="absolute left-4 text-[#9ca3af] flex items-center pointer-events-none">
              <i className="fa-solid fa-magnifying-glass text-sm" />
            </span>
            {/* Real input */}
            <input 
              type="text"
              placeholder="SEARCH PRODUCTS, POLYMERS..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#f9fafb] border border-[#e5e7eb] rounded-none py-3 pl-10 pr-4 font-montserrat text-xs font-bold tracking-wider text-[#1c1b1b] placeholder-gray-400 focus:bg-white focus:border-[#9ca3af] focus:outline-none transition-colors duration-150"
            />
          </div>

          {/* Active Count Badge */}
          <div className="flex-shrink-0 border border-[#e5e7eb] bg-white px-4 py-2.5 font-montserrat text-xs font-bold tracking-wider uppercase text-[#4b5563] flex items-center gap-2">
            <span>ACTIVE COUNT:</span>
            <span className="bg-[#C75550] text-white px-2 py-0.5 text-xs font-bold">
              {filteredProducts.length}
            </span>
          </div>
        </div>

        {/* Categories Sidebar & Products Grid container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT SIDEBAR: BROWSE CATEGORIES */}
          <aside className="lg:col-span-3 flex flex-col gap-6 w-full">
            
            {/* Categories Selector Card */}
            <div className="bg-[#f9fafb] border border-[#e5e7eb] p-6 flex flex-col gap-5 w-full">
              <span className="font-montserrat text-xs font-bold text-[#9ca3af] tracking-[0.2em] uppercase leading-none block text-left">
                BROWSE CATEGORIES
              </span>
              
              <div className="flex flex-col gap-3">
                {categories.map((category) => {
                  const isSelected = activeCategory === category;
                  return (
                    <button
                      key={category}
                      onClick={() => {
                        setActiveCategory(category);
                        setSearchQuery(""); // Reset search on category change
                      }}
                      className={`w-full text-left font-montserrat text-xs sm:text-[13px] font-bold tracking-wider uppercase px-4 py-3.5 flex items-center justify-between border transition-all duration-200 cursor-pointer rounded-none ${
                        isSelected
                          ? "bg-[#C75550] border-[#C75550] text-white shadow-sm"
                          : "bg-white border-[#e5e7eb] text-[#1c1b1b] hover:border-[#cbd5e1] hover:bg-gray-50 hover:text-[#C75550]"
                      }`}
                    >
                      <span className="pr-4">{category}</span>
                      <i className={`fa-solid fa-chevron-right text-[10px] flex-shrink-0 ${isSelected ? "text-white" : "text-[#cbd5e1]"}`} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Custom Compounds callout card */}
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

          {/* RIGHT GRID: PRODUCTS LISTING */}
          <section className="lg:col-span-9 flex flex-col gap-6 w-full">
            
            {/* Breadcrumb Stripe Banner */}
            <div className="w-full flex items-center justify-between border-b border-[#e5e7eb] pb-3">
              <span className="font-montserrat text-xs font-bold text-[#1c1b1b] tracking-wider uppercase">
                CATALOG / {activeCategory}
              </span>
              <span className="font-montserrat text-xs font-bold text-[#9ca3af] tracking-wider uppercase">
                {filteredProducts.length} PRODUCTS
              </span>
            </div>

            {/* Grid List or Fallback Empty message */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((prod, index) => (
                  <ProductCard key={prod.id} product={prod} index={index} />
                ))}
              </div>
            ) : (
              <div className="w-full border border-dashed border-[#e5e7eb] py-20 px-8 flex flex-col items-center justify-center text-center bg-[#f9fafb]">
                <div className="w-12 h-12 rounded-full bg-[#C75550]/10 flex items-center justify-center text-[#C75550] mb-4">
                  <i className="fa-solid fa-magnifying-glass text-lg" />
                </div>
                <h4 className="font-title text-xl font-bold text-[#1c1b1b] uppercase tracking-wide">
                  NO COMPONENTS FOUND
                </h4>
                <p className="font-body text-xs text-[#4b5563] max-w-xs mt-2 leading-relaxed">
                  We couldn&apos;t find any rubber parts matching &quot;{searchQuery}&quot; under {activeCategory}.
                </p>
                <button 
                  onClick={() => setSearchQuery("")}
                  className="mt-4 border border-[#e5e7eb] hover:border-[#1c1b1b] bg-white text-[#1c1b1b] font-montserrat text-[10px] font-bold tracking-widest px-4 py-2 uppercase transition-colors"
                >
                  CLEAR SEARCH FILTER
                </button>
              </div>
            )}
          </section>

        </div>

      </main>

      {/* Contact Banner at the bottom */}
      <div className="w-full mt-16">
        <ContactBanner />
      </div>

    </div>
  );
}
