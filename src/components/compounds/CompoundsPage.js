"use client";

import Image from "next/image";
import Link from "next/link";

// 1. FORMULATION PRODUCTS DATA (THE MASTER 19 ENTRIES IN Dense Format)
const COMPOUNDS_CATALOG = [
  {
    id: "comp-1",
    spec: "SPEC: ASTM D2000 M3BA610",
    compound: "EPDM",
    title: "STEERING COLUMN RUBBER GROMMETS / BELLOWS",
    material: "MAT // EPDM / SBR",
    image: "/images/product card images (1).png",
  },
  {
    id: "comp-2",
    spec: "SPEC: SAE J200 3CH715",
    compound: "NBR",
    title: "RUBBER REBOUND SLIDER",
    material: "MAT // NBR / WEAR RESI...",
    image: "/images/product card images (2).png",
  },
  {
    id: "comp-3",
    spec: "SPEC: ASTM D2000 M2AA508",
    compound: "NATURAL RUBBER (NR)",
    title: "AUTOMOTIVE RUBBER MOUNTINGS FOR AIR PRESSURE TANK SEAT...",
    material: "MAT // NATURAL RUBBER ...",
    image: "/images/product card images (3).png",
  },
  {
    id: "comp-4",
    spec: "SPEC: ASTM D2000 M4CH614",
    compound: "EPICHLOROHYDRIN (ECO)",
    title: "DIESEL FILTER RUBBER AIR DUCT AIR CLEANER PIPES & ELBOWS",
    material: "MAT // EPICHLOROHYDRIN...",
    image: "/images/product card images (4).png",
  },
  {
    id: "comp-5",
    spec: "SPEC: ASTM D2000 M2BC510",
    compound: "NEOPRENE (CR)",
    title: "PROTECTIVE SLEEVES, DUST BOOTS, BELLOWS & WEATHER PROTECTIVE...",
    material: "MAT // NEOPRENE (CR)",
    image: "/images/product card images (5).png",
  },
  {
    id: "comp-6",
    spec: "SPEC: SAE J200 2AA815",
    compound: "HEAVY-DUTY NR COMPOUND",
    title: "RUBBER PAD FOR LEAF SPRING SEAT ENDS",
    material: "MAT // HEAVY-DUTY NR C...",
    image: "/images/product card images (1).png",
  },
  {
    id: "comp-7",
    spec: "SPEC: ASTM D2000 MULTI-SPEC",
    compound: "EPDM",
    title: "DIFFERENT TYPES OF RUBBER MOUNTINGS",
    material: "MAT // EPDM / NBR CUST...",
    image: "/images/product card images (2).png",
  },
  {
    id: "comp-8",
    spec: "SPEC: ASTM D2000 M1BG610",
    compound: "NBR WITH FABRIC INLAY (NYLON",
    title: "RUBBER DIAPHRAGMS",
    material: "MAT // NBR WITH FABRIC...",
    image: "/images/product card images (3).png",
  },
  {
    id: "comp-9",
    spec: "SPEC: ASTM D2000 M5GE408",
    compound: "ULTRA-SOFT SILICONE (VMQ)",
    title: "RUBBER DAMPER ASSEMBLY FOR TACHOMETER MOUNTINGS",
    material: "MAT // ULTRA-SOFT SILI...",
    image: "/images/product card images (4).png",
  },
  {
    id: "comp-10",
    spec: "SPEC: SAE J200 3BA714",
    compound: "WEATHER RESISTANT EPDM",
    title: "RUBBER STRAPS & STRIPS FOR AIR FILTER MOUNTINGS WITH S.S. HOOKS",
    material: "MAT // WEATHER RESISTA...",
    image: "/images/product card images (5).png",
  },
  {
    id: "comp-11",
    spec: "SPEC: SAE J200 CLASS EE/EG",
    compound: "KEVLAR",
    title: "REINFORCED SILICON RUBBER SLEEVES / ELBOWS FOR TURBO CHARGER...",
    material: "MAT // KEVLAR/POLYESTE...",
    image: "/images/product card images (1).png",
  },
  {
    id: "comp-12",
    spec: "SPEC: OEM DYNAMIC GRADE SPEC",
    compound: "PREMIUM NR",
    title: "ENGINE MOUNTING PARTS FOR EXPORT CARS",
    material: "MAT // PREMIUM NR / CA...",
    image: "/images/product card images (2).png",
  },
  {
    id: "comp-13",
    spec: "SPEC: ASTM D2000 AA SPEC",
    compound: "SBR",
    title: "RUBBER MOUNTINGS & BUMPERS FOR EXPORT CARS",
    material: "MAT // SBR / NBR BLEND",
    image: "/images/product card images (3).png",
  },
  {
    id: "comp-14",
    spec: "SPEC: SAE J903",
    compound: "CHLORINATED NATURAL RUBBER",
    title: "RUBBER WIPER BLADES",
    material: "MAT // CHLORINATED NAT...",
    image: "/images/product card images (4).png",
  },
  {
    id: "comp-15",
    spec: "SPEC: SAE J200 5DA712",
    compound: "TRIPLE COMPOSITE: EPDM",
    title: "RUBBER/PLASTIC & ALUMINIUM CO-EXTRUDED PROFILES FOR AUTOMOTIVE",
    material: "MAT // TRIPLE COMPOSIT...",
    image: "/images/product card images (5).png",
  },
  {
    id: "comp-16",
    spec: "SPEC: ASTM D2000 M2HK810",
    compound: "FLUOROCARBON (FKM - VITON)",
    title: "RUBBER SEALS FOR RADIAL PISTON ACTUATORS & SOLENOID VALVES",
    material: "MAT // FLUOROCARBON (F...",
    image: "/images/product card images (1).png",
  },
  {
    id: "comp-17",
    spec: "SPEC: UL94-V0 FIRE RETARDANT",
    compound: "FLAME RETARDANT NEOPRENE (CR)",
    title: "RUBBER SLEEVES FOR CABLES AND WIRING HARNESSES",
    material: "MAT // FLAME RETARDANT...",
    image: "/images/product card images (2).png",
  },
  {
    id: "comp-18",
    spec: "SPEC: ASTM D2000 BG GRADE",
    compound: "NBR WITH HEAVY DUTY FABRIC CORE",
    title: "RUBBER DIAPHRAGMS FOR ACTUATORS",
    material: "MAT // NBR WITH HEAVY ...",
    image: "/images/product card images (3).png",
  },
  {
    id: "comp-19",
    spec: "SPEC: ASTM D2000 STANDARDS",
    compound: "CUSTOM CALENDERED RAW COMPOUNDS (EPDM",
    title: "RUBBER COMPOUND FOR AUTOMOTIVE RUBBER HOSE",
    material: "MAT // CUSTOM CALENDER...",
    image: "/images/product card images (4).png",
  },
];

// 2. HERO COMPONENT
function CompoundsHero() {
  return (
    <header className="relative w-full border-b-2 border-[#1C1B1B] overflow-hidden bg-[#1C1B1B] py-20 sm:py-24 lg:py-28">
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
        {/* Technical grid overlay */}
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
          ELASTOMER & POLYMER LIBRARY
        </span>
        <h1 className="font-title text-5xl sm:text-7xl font-black uppercase text-[#FCF9F8] leading-[0.95] tracking-tighter">
          COMPOUNDS
        </h1>
        <p className="font-body text-base sm:text-lg text-[#DCD9D9] max-w-xl leading-relaxed mt-2 border-l-2 border-[#B81312] pl-4">
          Formulating high-performance polymers tailored for aggressive solvents, dynamic mechanical shear, and high-temperature thermal cycling.
        </p>
      </div>
    </header>
  );
}

// 3. SINGLE COMPOUND CARD COMPONENT
function CompoundCard({ product }) {
  return (
    <div className="group relative bg-white border-2 border-[#1C1B1B] shadow-[4px_4px_0px_0px_#1C1B1B] hover:translate-y-[-4px] hover:shadow-[6px_6px_0px_0px_#1C1B1B] active:translate-y-0 active:shadow-[4px_4px_0px_0px_#1C1B1B] transition-all duration-200 flex flex-col justify-between overflow-hidden h-full">
      
      {/* Absolute Spec Tag */}
      <div className="absolute top-3 left-3 bg-[#1C1B1B] text-[#FCF9F8] border border-[#313030] py-1.5 px-3 font-subtitle text-[10px] sm:text-[11px] font-bold uppercase tracking-wider z-10 shadow-[2px_2px_0px_0px_#B81312]">
        {product.spec}
      </div>

      {/* Grayscale product photo */}
      <div className="relative w-full aspect-[279/154] border-b-2 border-[#1C1B1B] bg-[#FCF9F8] overflow-hidden flex-shrink-0">
        <Image 
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-w-7xl) 25vw, (max-w-md) 100vw, 400px"
          className="object-cover filter grayscale brightness-95 contrast-105 group-hover:grayscale-0 group-hover:scale-102 transition-all duration-300"
        />
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-transparent opacity-10 pointer-events-none" 
             style={{
               backgroundImage: "radial-gradient(#1C1B1B 1px, transparent 1px)",
               backgroundSize: "16px 16px"
             }} 
        />
      </div>

      {/* Title Details */}
      <div className="p-5 flex flex-col items-start gap-2 flex-grow">
        <span className="font-subtitle text-xs font-bold text-[#B81312] uppercase tracking-wider leading-none">
          COMPOUND: {product.compound}
        </span>
        <h3 className="font-title text-xl font-black text-[#1C1B1B] uppercase leading-[1.1] tracking-tight group-hover:text-[#B81312] transition-colors mt-1.5 truncate-3-lines">
          {product.title}
        </h3>
      </div>

      {/* Bottom Material row */}
      <div className="w-full border-t-2 border-[#1C1B1B] flex items-stretch h-12 bg-[#F0EDEC] flex-shrink-0">
        <div className="flex-grow px-4 flex items-center font-subtitle text-[11px] sm:text-xs font-bold text-[#1C1B1B]/70 tracking-wider uppercase truncate">
          {product.material}
        </div>
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

// 4. MAIN COMPOUNDS PAGE COMPONENT
export function CompoundsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FCF9F8]">
      
      {/* Hero Banner */}
      <CompoundsHero />

      {/* Main Content Area */}
      <main className="max-w-7xl py-20  mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Stripe Banner (Full Width) */}
        <div className="w-full bg-[#1C1B1B] text-[#FCF9F8] border-2 border-[#1C1B1B] py-4 px-6 font-subtitle text-xs font-bold tracking-widest uppercase flex items-center justify-between shadow-[4px_4px_0px_0px_#1C1B1B] mb-12">
          <span>■ CATALOG // COMPOUNDS</span>
          <span className="text-[#FDC003] font-bold text-[11px]">{COMPOUNDS_CATALOG.length} STABLE SPECIFICATIONS</span>
        </div>

        {/* Dense 4-Column Responsive Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {COMPOUNDS_CATALOG.map((prod) => (
            <div key={prod.id} className="w-full">
              <CompoundCard product={prod} />
            </div>
          ))}
        </section>

      </main>

    </div>
  );
}
