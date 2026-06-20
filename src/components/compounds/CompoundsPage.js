"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { fetchProducts } from "@/lib/api";
import { ContactBanner } from "../layout/ContactBanner";

// 1. FORMULATION PRODUCTS DATA (THE MASTER 19 ENTRIES IN Dense Format)
const COMPOUNDS_CATALOG = [
  {
    id: "comp-1",
    spec: "SPEC: ASTM D2000 M3BA610",
    compound: "EPDM",
    title: "STEERING COLUMN RUBBER GROMMETS / BELLOWS",
    material: "MAT // EPDM / SBR",
    image: "/images/product_card_1.png",
  },
  {
    id: "comp-2",
    spec: "SPEC: SAE J200 3CH715",
    compound: "NBR",
    title: "RUBBER REBOUND SLIDER",
    material: "MAT // NBR / WEAR RESI...",
    image: "/images/product_card_2.png",
  },
  {
    id: "comp-3",
    spec: "SPEC: ASTM D2000 M2AA508",
    compound: "NATURAL RUBBER (NR)",
    title: "AUTOMOTIVE RUBBER MOUNTINGS FOR AIR PRESSURE TANK SEAT...",
    material: "MAT // NATURAL RUBBER ...",
    image: "/images/product_card_3.png",
  },
  {
    id: "comp-4",
    spec: "SPEC: ASTM D2000 M4CH614",
    compound: "EPICHLOROHYDRIN (ECO)",
    title: "DIESEL FILTER RUBBER AIR DUCT AIR CLEANER PIPES & ELBOWS",
    material: "MAT // EPICHLOROHYDRIN...",
    image: "/images/product_card_4.png",
  },
  {
    id: "comp-5",
    spec: "SPEC: ASTM D2000 M2BC510",
    compound: "NEOPRENE (CR)",
    title: "PROTECTIVE SLEEVES, DUST BOOTS, BELLOWS & WEATHER PROTECTIVE...",
    material: "MAT // NEOPRENE (CR)",
    image: "/images/product_card_5.png",
  },
  {
    id: "comp-6",
    spec: "SPEC: SAE J200 2AA815",
    compound: "HEAVY-DUTY NR COMPOUND",
    title: "RUBBER PAD FOR LEAF SPRING SEAT ENDS",
    material: "MAT // HEAVY-DUTY NR C...",
    image: "/images/product_card_1.png",
  },
  {
    id: "comp-7",
    spec: "SPEC: ASTM D2000 MULTI-SPEC",
    compound: "EPDM",
    title: "DIFFERENT TYPES OF RUBBER MOUNTINGS",
    material: "MAT // EPDM / NBR CUST...",
    image: "/images/product_card_2.png",
  },
  {
    id: "comp-8",
    spec: "SPEC: ASTM D2000 M1BG610",
    compound: "NBR WITH FABRIC INLAY (NYLON",
    title: "RUBBER DIAPHRAGMS",
    material: "MAT // NBR WITH FABRIC...",
    image: "/images/product_card_3.png",
  },
  {
    id: "comp-9",
    spec: "SPEC: ASTM D2000 M5GE408",
    compound: "ULTRA-SOFT SILICONE (VMQ)",
    title: "RUBBER DAMPER ASSEMBLY FOR TACHOMETER MOUNTINGS",
    material: "MAT // ULTRA-SOFT SILI...",
    image: "/images/product_card_4.png",
  },
  {
    id: "comp-10",
    spec: "SPEC: SAE J200 3BA714",
    compound: "WEATHER RESISTANT EPDM",
    title: "RUBBER STRAPS & STRIPS FOR AIR FILTER MOUNTINGS WITH S.S. HOOKS",
    material: "MAT // WEATHER RESISTA...",
    image: "/images/product_card_5.png",
  },
  {
    id: "comp-11",
    spec: "SPEC: SAE J200 CLASS EE/EG",
    compound: "KEVLAR",
    title: "REINFORCED SILICON RUBBER SLEEVES / ELBOWS FOR TURBO CHARGER...",
    material: "MAT // KEVLAR/POLYESTE...",
    image: "/images/product_card_1.png",
  },
  {
    id: "comp-12",
    spec: "SPEC: OEM DYNAMIC GRADE SPEC",
    compound: "PREMIUM NR",
    title: "ENGINE MOUNTING PARTS FOR EXPORT CARS",
    material: "MAT // PREMIUM NR / CA...",
    image: "/images/product_card_2.png",
  },
  {
    id: "comp-13",
    spec: "SPEC: ASTM D2000 AA SPEC",
    compound: "SBR",
    title: "RUBBER MOUNTINGS & BUMPERS FOR EXPORT CARS",
    material: "MAT // SBR / NBR BLEND",
    image: "/images/product_card_3.png",
  },
  {
    id: "comp-14",
    spec: "SPEC: SAE J903",
    compound: "CHLORINATED NATURAL RUBBER",
    title: "RUBBER WIPER BLADES",
    material: "MAT // CHLORINATED NAT...",
    image: "/images/product_card_4.png",
  },
  {
    id: "comp-15",
    spec: "SPEC: SAE J200 5DA712",
    compound: "TRIPLE COMPOSITE: EPDM",
    title: "RUBBER/PLASTIC & ALUMINIUM CO-EXTRUDED PROFILES FOR AUTOMOTIVE",
    material: "MAT // TRIPLE COMPOSIT...",
    image: "/images/product_card_5.png",
  },
  {
    id: "comp-16",
    spec: "SPEC: ASTM D2000 M2HK810",
    compound: "FLUOROCARBON (FKM - VITON)",
    title: "RUBBER SEALS FOR RADIAL PISTON ACTUATORS & SOLENOID VALVES",
    material: "MAT // FLUOROCARBON (F...",
    image: "/images/product_card_1.png",
  },
  {
    id: "comp-17",
    spec: "SPEC: UL94-V0 FIRE RETARDANT",
    compound: "FLAME RETARDANT NEOPRENE (CR)",
    title: "RUBBER SLEEVES FOR CABLES AND WIRING HARNESSES",
    material: "MAT // FLAME RETARDANT...",
    image: "/images/product_card_2.png",
  },
  {
    id: "comp-18",
    spec: "SPEC: ASTM D2000 BG GRADE",
    compound: "NBR WITH HEAVY DUTY FABRIC CORE",
    title: "RUBBER DIAPHRAGMS FOR ACTUATORS",
    material: "MAT // NBR WITH HEAVY ...",
    image: "/images/product_card_3.png",
  },
  {
    id: "comp-19",
    spec: "SPEC: ASTM D2000 STANDARDS",
    compound: "CUSTOM CALENDERED RAW COMPOUNDS (EPDM",
    title: "RUBBER COMPOUND FOR AUTOMOTIVE RUBBER HOSE",
    material: "MAT // CUSTOM CALENDER...",
    image: "/images/product_card_4.png",
  },
];

// 2. HERO COMPONENT
function CompoundsHero() {
  return (
    <header className="relative w-full border-b border-[#e5e7eb] overflow-hidden] min-h-[300px] sm:min-h-[350px] flex items-center justify-center">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/backgroundCompound.png" 
          alt="Bymer Elastomers Factory Facility background" 
          fill
          sizes="100vw"
          className="object-cover filter grayscale"
          priority
        />
      </div>

      {/* Dark semi-transparent overlay */}
      <div className="absolute inset-0 bg-[#0a0a0a]/90 z-10 pointer-events-none" />

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20 flex flex-col items-center gap-3">
        <span className="font-montserrat text-xs sm:text-sm font-bold tracking-[0.2em] text-[#9ca3af] uppercase leading-none">
          HOME / COMPOUNDS
        </span>
        <h1 className="font-title text-4xl sm:text-6xl font-black uppercase text-white tracking-tight leading-none mb-1">
          COMPOUNDS
        </h1>
        <p className="font-body text-xs sm:text-sm text-[#9ca3af] max-w-xl leading-relaxed">
          Formulating high-performance polymers tailored for aggressive solvents, dynamic mechanical shear, and high-temperature thermal cycling.
        </p>
      </div>
    </header>
  );
}

// 3. SINGLE COMPOUND CARD COMPONENT
function CompoundCard({ product }) {
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
        
        {/* Top Section: Image, Spec Metadata & Title */}
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

          {/* Spec Metadata */}
          <span className="font-montserrat text-[10px] font-bold text-[#9ca3af] tracking-widest uppercase mb-1.5 leading-none">
            {product.spec}
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

// 4. MAIN COMPOUNDS PAGE COMPONENT
export function CompoundsPage() {
  const [compounds, setCompounds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCompounds() {
      try {
        const data = await fetchProducts("compounds");
        if (data && data.length > 0) {
          const mapped = data.map((prod) => ({
            id: prod.id || prod.slug,
            spec: prod.specification || "SPEC: ASTM D2000 STANDARD",
            compound: prod.customer || "RUBBER",
            title: prod.name,
            material: prod.description || "MAT // CUSTOM FORMULATION",
            image: prod.image_url || "/images/product_card_1.png",
          }));
          setCompounds(mapped);
        } else {
          setCompounds(COMPOUNDS_CATALOG);
        }
      } catch (err) {
        console.error("Failed to load compounds:", err);
        setCompounds(COMPOUNDS_CATALOG);
      } finally {
        setLoading(false);
      }
    }
    loadCompounds();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <CompoundsHero />
        <main className="max-w-7xl py-20 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-[400px]">
          <div className="flex flex-col items-center gap-4 animate-pulse">
            <div className="w-12 h-12 border-t-4 border-b-4 border-[#C75550] rounded-full animate-spin"></div>
            <span className="font-montserrat text-xs font-bold tracking-widest text-[#1c1b1b] uppercase">LOADING POLYMER FORMULATIONS...</span>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      
      {/* Hero Banner */}
      <CompoundsHero />

      {/* Main Content Area */}
      <main className="max-w-7xl py-16 sm:py-20 mx-auto px-4 sm:px-6 lg:px-8 bg-white">
        
        {/* Breadcrumb Stripe Banner (Full Width) */}
        <div className="w-full bg-[#f5f5f5] border border-[#e5e7eb] py-4.5 px-6 font-montserrat text-xs font-bold tracking-widest uppercase flex flex-col sm:flex-row items-center justify-between mb-12 gap-3">
          <span className="text-[#1c1b1b]">■ CATALOG // COMPOUNDS</span>
          <span className="text-[#C75550]">{compounds.length} STABLE SPECIFICATIONS</span>
        </div>

        {/* Dense 4-Column Responsive Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {compounds.map((prod) => (
            <div key={prod.id} className="w-full">
              <CompoundCard product={prod} />
            </div>
          ))}
        </section>

      </main>

      {/* Contact Banner at the bottom */}
      <div className="w-full mt-16">
        <ContactBanner />
      </div>

    </div>
  );
}
