"use client";

import Image from "next/image";
import Link from "next/link";
import { ContactBanner } from "../layout/ContactBanner";

// 1. PRODUCTION MACHINERY SPECIFICATIONS DATA
const MACHINERY_CATALOG = [
  {
    id: "mach-1",
    subtitle: "CAPABILITY // HIGH SPEED MOULDING",
    title: "INJECTION MOULDING MACHINES",
    specs: [
      "MICROPROCESSOR PLC CONTROLLED SYSTEM",
      "CAPACITY TONNAGE: 100 TO 250 TONS",
      "INTEGRATED VACUUM ASSISTED SEALING",
      "COLD RUNNER SYSTEM COMPATIBILITY",
      "OPTIMIZED FOR CRITICAL TECHNICAL RUBBER MOULDED COMPONENTS"
    ],
    image: "/images/machineryCard  (1).png"
  },
  {
    id: "mach-2",
    subtitle: "CAPABILITY // DEFECT-FREE VULCANIZATION",
    title: "VACUUM COMPRESSION MOULDING MACHINES",
    specs: [
      "DUAL STATION SHUTTLE SYSTEMS",
      "PLC MICROPROCESSOR CONTROL BOARD",
      "CAPACITY TONNAGE: 150 TO 250 TONS",
      "FULL ENCLOSED VACUUM CHAMBER ENCLOSURES",
      "INTENDED EXCLUSIVELY FOR DEFECT-FREE HIGH DENSITY SEALS"
    ],
    image: "/images/machineryCard  (2).png"
  },
  {
    id: "mach-3",
    subtitle: "CAPABILITY // HIGH TONNAGE VULCANIZATION",
    title: "COMPRESSION MOULDING MACHINES",
    specs: [
      "MULTI-STATION DAYLIGHT PRESS CONFIGURATIONS",
      "PRESS TONNAGE: 50 TO 250 TONS",
      "MAX PLATEN WORKPLACE SIZE: UP TO 600X600 MM",
      "INTEGRATED MICROPROCESSOR TEMPERATURE CONTROLLER",
      "HEAVY-DUTY ARCHITECTURE BUILT FOR CONTINUOUS INDUSTRIAL RUNS"
    ],
    image: "/images/machineryCard  (3).png"
  },
  {
    id: "mach-4",
    subtitle: "CAPABILITY // HIGH SHEAR PREPARATION",
    title: "KNEADER (HYDRAULIC) FOR COLORED COMPOUND MIXING",
    specs: [
      "VESSEL NET CAPACITIES: 35 LITERS / 55 LITERS / 75 LITERS",
      "ENVIRONMENTALLY SEALED DUST-FREE BATCH SYSTEM",
      "HEAVY-DUTY STAINLESS STEEL WATER COOLED JACKET SYSTEM",
      "STRICTLY SEGREGATED EQUIPMENT STATIONS FOR BLACK & COLORED COMPOUNDS",
      "AUTOMATIC REAL-TIME TEMPERATURE MONITORING CONTROLS"
    ],
    image: "/images/machineryCard  (4).png"
  },
  {
    id: "mach-5",
    subtitle: "CAPABILITY // INTENSE HOMOGENIZATION",
    title: "MIXING MILL FOR COLORED COMPOUNDS",
    specs: [
      "DUAL-ROLL OPEN COLD FEED COMPOUND MIXING MILLS",
      "ROLL SIZES ACCESSED: 12X30 INCH / 14X36 INCH / 16X42 INCH",
      "HIGH CAPACITY CONTINUOUS-CIRCULATION WATER COOLED SYSTEM",
      "INTEGRATED BATCH OFF SYSTEM WITH CONVEYING REELS",
      "SPECIALLY ALLOCATED STATION ELIMINATING ANY RAW CROSS-CONTAMINATION"
    ],
    image: "/images/machineryCard  (5).png"
  },
  {
    id: "mach-6",
    subtitle: "CAPABILITY // UNIFORM SHEETING",
    title: "3 ROLL CALENDER MACHINE FOR RUBBER SHEETING & FABRIC FRICTIONING",
    specs: [
      "INTEGRATED HIGH PRECISION MICROMETRIC ROLL GAPPING GAUGE",
      "CAPACITY SHEETING WIDTH: UP TO 600 MM MAXIMUM",
      "INTEGRATED HOT-WATER / SATURATED STEAM HEATED ROLL SYSTEM",
      "FORMULATED TO SHIP CONTINUOUS CONCURRENT UNIFORM RUBBER SHEETS",
      "INTEGRATED CO-FRICTIONING DEVICE FOR HOSE REINFORCING FABRICS"
    ],
    image: "/images/machineryCard  (6).png"
  },
  {
    id: "mach-7",
    subtitle: "CAPABILITY // PROFILE EXTRUSION",
    title: "EXTRUDERS",
    specs: [
      "COEXISTING COLD FEED & HOT FEED TECHNOLOGY EXTRUSION HEADS",
      "CYLINDER / SCREW DIAMETERS DEPLOYED: 50 MM / 60 MM / 75 MM",
      "AUTOMATED MULTI-ZONE TEMPERATURE HEATING & COOLING JACKET PROCESSES",
      "DESIGNED EXCLUSIVELY FOR SHAPED STRIPS, SEALS, BEADING CORDS, & HOSE EXTRUSIONS",
      "INTEGRATED VARIABLE FREQUENCY RUN CONTROLLERS FOR GEOMETRIC STABILITY"
    ],
    image: "/images/machineryCard  (7).png"
  },
  {
    id: "mach-8",
    subtitle: "CAPABILITY // UNIFORM HEAT-SET",
    title: "STEAM VULCANIZERS",
    specs: [
      "DIRECT INJECTED STEAM AUTOCLAVES FOR ENCLOSED HEATING CURING",
      "VESSEL CHAMBER DIMENSIONS: DIAMETER UP TO 1000 MM, TOTAL LENGTH 3000 MM",
      "PROGRAMMABLE REPETITIVE STEPPING TEMPERATURE SCHEDULING SYSTEM",
      "SAFETY SECURED AUTOMATIC PRESSURE LOCK MECHANISMS",
      "CRITICAL PIECE APPARATUS RESERVED FOR LARGE EXTRUDED ENGINE HOSE REELS & COUPLINGS"
    ],
    image: "/images/machineryCard  (8).png"
  },
  {
    id: "mach-9",
    subtitle: "CAPABILITY // THERMAL UTILITIES",
    title: "STEAM BOILER",
    specs: [
      "CONTINUOUS SATURATED STEAM CAPACITY: 300 KG/HR TO 600 KG/HR",
      "WORKING SAFE STEAM PRESSURES: 7 TO 10.5 KG/CM2 RANGE",
      "COMPATIBILITY MODES: SOLID FUELS, INDUSTRIAL DIESEL & LIQUID GAS BOILERS",
      "AUTOMATIC ELECTRONIC FEED WATER FLOW REGULATOR CONTROL DEVICE",
      "HEAVY CAPACITY PRESSURE VENT SHUNTS AND HIGH SAFETY OVERPRESSURE VALVES"
    ],
    image: "/images/machineryCard  (9).png"
  }
];

// 2. HERO BANNER COMPONENT
function MachineryHero() {
  return (
    <header className="relative w-full border-b-2 border-[#1C1B1B] overflow-hidden bg-[#1C1B1B] py-20 sm:py-24 lg:py-28">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/backgroundMachinery .png" 
          alt="Bymer Elastomers Factory Production Infrastructure Background" 
          fill
          sizes="100vw"
          className="object-cover filter grayscale"
          priority
        />
        {/* Technical Grid Overlay */}
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
          BYMER // INFRASTRUCTURE & HEAVY PRODUCTION DIVISION
        </span>
        <h1 className="font-title text-5xl sm:text-7xl font-black uppercase text-[#FCF9F8] leading-[0.95] tracking-tighter">
          MACHINERY USED (PLANT I)
        </h1>
        <p className="font-body text-base sm:text-lg text-[#DCD9D9] max-w-xl leading-relaxed mt-2 border-l-2 border-[#B81312] pl-4">
          Complete listing of our high-tonnage moulding lines, vacuum-assisted presses, and material preparation assets deployed across our Nashik manufacturing footprint.
        </p>
      </div>
    </header>
  );
}

// 3. MAIN MACHINERY CATALOG COMPONENT
export function MachineryPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FCF9F8]">
      
      {/* Hero Banner */}
      <MachineryHero />

      {/* Main Listing Section */}
      <main className="w-full py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Active Heavy Assets Stripe Banner */}
        <div className="w-full bg-[#FCF9F8] border-2 border-[#1C1B1B] py-4.5 px-6 font-subtitle text-xs sm:text-sm font-bold tracking-widest uppercase flex flex-col sm:flex-row items-center justify-between shadow-[4px_4px_0px_0px_#1C1B1B] mb-16 gap-3">
          <span className="text-[#1C1B1B]">■ ACTIVE HEAVY ASSETS // PROCESS TIMELINES & CAPABILITIES</span>
          <span className="text-[#B81312]">SYSTEM ID: BYM-PLANT-1-DECK</span>
        </div>

        {/* Vertical Stack of Machinery Cards (Alternating Left/Right Layout) */}
        <section className="flex flex-col gap-16">
          {MACHINERY_CATALOG.map((machine, index) => {
            // Check if index is odd for layout alternation
            const isOdd = index % 2 === 0;

            return (
              <div 
                key={machine.id}
                className="w-full bg-white border-4 border-[#1C1B1B] shadow-[8px_8px_0px_0px_#1C1B1B] hover:shadow-[10px_10px_0px_0px_#1C1B1B] transition-all duration-200 p-8 sm:p-10 lg:p-12 overflow-hidden"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center`}>
                  
                  {/* Left-aligned block vs Right-aligned block based on isOdd */}
                  {/* 1. IMAGE CONTAINER */}
                  <div className={`lg:col-span-5 w-full relative aspect-[4/3] border-2 border-[#1C1B1B] bg-[#FCF9F8] overflow-hidden ${
                    isOdd ? "lg:order-1" : "lg:order-2"
                  }`}>
                    <Image 
                      src={machine.image}
                      alt={machine.title}
                      fill
                      sizes="(max-w-lg) 100vw, 500px"
                      className="object-cover filter grayscale contrast-110 hover:grayscale-0 transition-all duration-300"
                    />
                    {/* Technical grid mask overlay */}
                    <div 
                      className="absolute inset-0 bg-transparent opacity-10 pointer-events-none" 
                      style={{
                        backgroundImage: "radial-gradient(#1C1B1B 1px, transparent 1px)",
                        backgroundSize: "16px 16px"
                      }} 
                    />
                  </div>

                  {/* 2. SPEC DETAILS AND INQUIRE BUTTON CONTAINER */}
                  <div className={`lg:col-span-7 w-full flex flex-col gap-6 items-start ${
                    isOdd ? "lg:order-2" : "lg:order-1"
                  }`}>
                    
                    {/* Headers */}
                    <div className="flex flex-col items-start gap-1">
                      <span className="font-subtitle text-xs sm:text-sm font-bold text-[#B81312] uppercase tracking-wider leading-none">
                        {machine.subtitle}
                      </span>
                      <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl font-black text-[#1C1B1B] uppercase leading-[1.05] tracking-tight mt-1">
                        {machine.title}
                      </h2>
                    </div>

                    {/* Hard solid line divider */}
                    <div className="w-full border-t border-[#1C1B1B] my-1" />

                    {/* Specification list using custom lightning bolt icons */}
                    <ul className="flex flex-col gap-3 font-subtitle text-xs sm:text-sm font-medium text-[#1C1B1B]/80 leading-relaxed uppercase pl-1 text-left">
                      {machine.specs.map((spec, specIdx) => (
                        <li key={specIdx} className="flex gap-3.5 items-start">
                          <span className="text-[#FDC003] font-bold text-sm leading-none mt-0.5 select-none">⚡</span>
                          <span className="tracking-wide">{spec}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Inquire CTA Button */}
                    <Link 
                      href="/contact" 
                      className="btn-brutal-red w-full py-4 text-base tracking-widest text-center mt-3 border-2 border-[#1C1B1B]"
                    >
                      INQUIRE MACHINE CAPACITY →
                    </Link>

                  </div>

                </div>
              </div>
            );
          })}
        </section>

      </main>

      {/* Contact Banner at the bottom */}
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-0 mb-24">
        <div className="w-full mx-auto border-y-2 border-r-2 lg:border-r-0 border-[#1C1B1B] shadow-[8px_8px_0px_0px_#1C1B1B] overflow-hidden">
          <ContactBanner />
        </div>
      </div>

    </div>
  );
}
