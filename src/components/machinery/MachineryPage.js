"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ContactBanner } from "../layout/ContactBanner";
import { fetchMachinery } from "@/lib/api";

// 1. PRODUCTION MACHINERY SPECIFICATIONS DATA
const MACHINERY_CATALOG = [
  {
    id: "mach-1",
    subtitle: "MACHINERY // HIGH SPEC MOULDING",
    title: "INJECTION MOULDING MACHINES",
    specs: [
      "Thermoplastic flow control systems",
      "Capacity range from 75T to 350T",
      "Dedicated mold accuracy tooling",
      "High-speed production capabilities",
      "Suitable for precision technical rubber mouldings"
    ],
    image: "/images/machineryCard1.png"
  },
  {
    id: "mach-2",
    subtitle: "MACHINERY // VACUUM VULCANIZATION",
    title: "VACUUM COMPRESSION MOULDING MACHINES",
    specs: [
      "Dual station shuttle systems",
      "PLC microprocessor control board",
      "Capacity range from 150T to 250T",
      "Fully enclosed vacuum chamber enclosures",
      "Intended for high density, defect-free seals"
    ],
    image: "/images/machineryCard2.png"
  },
  {
    id: "mach-3",
    subtitle: "MACHINERY // HIGH TONNAGE MOULDING",
    title: "COMPRESSION MOULDING MACHINES",
    specs: [
      "Multi-station daylight press configurations",
      "Press tonnage from 50T to 250T",
      "Max platen size up to 600 x 600 mm",
      "Integrated microprocessor temperature controller",
      "Heavy-duty architecture built for continuous runs"
    ],
    image: "/images/machineryCard3.png"
  },
  {
    id: "mach-4",
    subtitle: "MACHINERY // COMPOUND PREPARATION",
    title: "KNEADER (HYDRAULIC) FOR COLORED COMPOUND MIXING",
    specs: [
      "Vessel capacities of 35L, 55L, and 75L",
      "Environmentally sealed dust-free batch systems",
      "Heavy-duty stainless steel water cooled jackets",
      "Strictly segregated black & colored compound stations",
      "Automatic real-time temperature monitoring"
    ],
    image: "/images/machineryCard4.png"
  },
  {
    id: "mach-5",
    subtitle: "MACHINERY // MATERIAL PROCESSING",
    title: "MIXING MILL FOR COLORED COMPOUNDS",
    specs: [
      "Dual-roll open cold feed mixing mills",
      "Roll sizes: 12x30, 14x36, and 16x42 inches",
      "High capacity water cooling circulation",
      "Integrated batch off systems with conveying reels",
      "Dedicated stations eliminating cross-contamination"
    ],
    image: "/images/machineryCard5.png"
  },
  {
    id: "mach-6",
    subtitle: "MACHINERY // CALENDERING & SHEETING",
    title: "3 ROLL CALENDER MACHINE FOR RUBBER SHEETING",
    specs: [
      "High precision micrometric roll gapping gauge",
      "Maximum sheeting width up to 600 mm",
      "Integrated hot-water and steam heating systems",
      "Formulated for uniform rubber sheets",
      "Integrated co-frictioning for hose reinforcing fabrics"
    ],
    image: "/images/machineryCard6.png"
  },
  {
    id: "mach-7",
    subtitle: "MACHINERY // PROFILE EXTRUSION",
    title: "EXTRUDERS",
    specs: [
      "Coexisting cold feed and hot feed extruder heads",
      "Screw diameters: 50 mm, 60 mm, and 75 mm",
      "Automated multi-zone jacketed heating and cooling",
      "Designed for shaped strips, seals, and hose extrusions",
      "Variable frequency controllers for profile stability"
    ],
    image: "/images/machineryCard7.png"
  },
  {
    id: "mach-8",
    subtitle: "MACHINERY // DIRECT STEAM CURING",
    title: "STEAM VULCANIZERS",
    specs: [
      "Direct injected steam autoclaves for enclosed curing",
      "Vessel sizes: diameter up to 1000 mm, length 3000 mm",
      "Programmable stepping temperature schedules",
      "Safety secured automatic pressure lock mechanisms",
      "Reserved for large extruded hose reels & couplings"
    ],
    image: "/images/machineryCard8.png"
  },
  {
    id: "mach-9",
    subtitle: "MACHINERY // UTILITY SYSTEMS",
    title: "STEAM BOILER",
    specs: [
      "Saturated steam capacity: 300 to 600 kg/hr",
      "Working steam pressures: 7 to 10.5 kg/cm2",
      "Compatible with solid fuels, diesel, and liquid gas",
      "Automatic electronic feed water regulators",
      "High safety pressure vent shunts and valves"
    ],
    image: "/images/machineryCard9.png"
  }
];

// 2. HERO BANNER COMPONENT
function MachineryHero({ plant }) {
  const isPlantII = plant === 2;
  return (
    <header className="relative w-full border-b border-[#e5e7eb] overflow-hidden min-h-[300px] sm:min-h-[350px] flex items-center justify-center">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/backgroundMachinery.png" 
          alt="Bymer Elastomers Factory Production Infrastructure Background" 
          fill
          sizes="100vw"
          className="object-cover filter grayscale"
          priority
        />
      </div>

      {/* Dark semi-transparent overlay */}
      <div className="absolute inset-0 bg-[#0a0a0a]/90 z-10 pointer-events-none" />

      {/* Hero Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20 flex flex-col items-center gap-3">
        <span className="font-montserrat text-xs sm:text-sm font-bold tracking-[0.2em] text-[#9ca3af] uppercase leading-none">
          HOME / {isPlantII ? "MACHINERY / PLANT II" : "MACHINERY / PLANT I"}
        </span>
        <h1 className="font-title text-4xl sm:text-6xl font-black uppercase text-white tracking-tight leading-none mb-1">
          {isPlantII ? "MACHINERY - PLANT II" : "MACHINERY - PLANT I"}
        </h1>
        <p className="font-body text-xs sm:text-sm text-[#9ca3af] max-w-xl leading-relaxed">
          Complete lineup of rubber mixing, moulding, vacuum-assisted presses, and material preparation assets used across our Nashik manufacturing footprint{isPlantII ? " - Plant II" : " - Plant I"}.
        </p>
      </div>
    </header>
  );
}

// 3. MAIN MACHINERY CATALOG COMPONENT
export function MachineryPage({ plant = 1 }) {
  const isPlantII = plant === 2;
  const [machinery, setMachinery] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMachinery() {
      const plantParam = isPlantII ? "plant_2" : "plant_1";
      try {
        const data = await fetchMachinery(plantParam);
        if (data && data.length > 0) {
          const mapped = data.map((mach) => {
            // Build specifications list from model properties
            const specs = [];
            if (mach.tonnage_or_capacity) specs.push(`Capacity: ${mach.tonnage_or_capacity}`);
            if (mach.platen_size_or_dimensions) specs.push(`Platen Size: ${mach.platen_size_or_dimensions}`);
            if (mach.make) specs.push(`Make: ${mach.make}`);
            if (mach.year_of_purchase) specs.push(`Year: ${mach.year_of_purchase}`);
            if (mach.total_machines) specs.push(`Active Count: ${mach.total_machines} Units`);
            
            if (specs.length === 0) {
              specs.push("High performance manufacturing unit");
              specs.push("Quality assurance tested");
            }

            return {
              id: mach.id,
              subtitle: `MACHINERY // ${mach.plant_display || (isPlantII ? "PLANT II" : "PLANT I")}`,
              title: mach.name,
              specs,
              image: mach.image_url || "/images/machineryCard1.png",
            };
          });
          setMachinery(mapped);
        } else {
          setMachinery(MACHINERY_CATALOG);
        }
      } catch (err) {
        console.error("Failed to load machinery:", err);
        setMachinery(MACHINERY_CATALOG);
      } finally {
        setLoading(false);
      }
    }
    loadMachinery();
  }, [isPlantII]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <MachineryHero plant={plant} />
        <main className="w-full py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white flex flex-col items-center justify-center min-h-[400px]">
          <div className="flex flex-col items-center gap-4 animate-pulse">
            <div className="w-12 h-12 border-t-4 border-b-4 border-[#C75550] rounded-full animate-spin"></div>
            <span className="font-montserrat text-xs font-bold tracking-widest text-[#1c1b1b] uppercase">LOADING HEAVY MACHINERY ASSETS...</span>
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
      
      {/* Hero Banner */}
      <MachineryHero plant={plant} />

      {/* Main Listing Section */}
      <main className="w-full py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
        
        {/* Active Heavy Assets Stripe Banner */}
        <div className="w-full bg-[#f5f5f5] border border-[#e5e7eb] py-4.5 px-6 font-montserrat text-xs font-bold tracking-widest uppercase flex flex-col sm:flex-row items-center justify-between mb-16 gap-3">
          <span className="text-[#1c1b1b]">■ ACTIVE HEAVY ASSETS // PROCESS TIMELINES & CAPABILITIES</span>
          <span className="text-[#C75550]">SYSTEM ID: {isPlantII ? "BYM-PLANT-2-DECK" : "BYM-PLANT-1-DECK"}</span>
        </div>

        {/* Vertical Stack of Machinery Cards (Alternating Left/Right Layout) */}
        <section className="flex flex-col gap-12">
          {machinery.map((machine) => {
            return (
              <div 
                key={machine.id}
                className="w-full bg-white border border-[#e5e7eb] flex flex-col lg:flex-row items-stretch overflow-hidden rounded-none group transition-all duration-300 hover:border-[#C75550] hover:shadow-[0_10px_20px_rgba(0,0,0,0.05)]"
              >
                {/* 1. IMAGE CONTAINER */}
                <div className="w-full lg:w-[45%] relative min-h-[250px] lg:min-h-full flex-shrink-0 overflow-hidden">
                  {machine.image ? (
                    <Image 
                      src={machine.image}
                      alt={machine.title}
                      fill
                      sizes="(max-w-lg) 100vw, 500px"
                      className="object-cover filter group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#f3f4f6] flex items-center justify-center font-montserrat text-xs text-[#9ca3af]">NO IMAGE</div>
                  )}
                </div>

                {/* 2. SPEC DETAILS AND INQUIRE LINK CONTAINER */}
                <div className="w-full lg:w-[55%] p-8 sm:p-10 lg:p-12 flex flex-col justify-between items-start text-left">
                  <div className="w-full flex flex-col items-start gap-1">
                    <span className="font-montserrat text-xs font-bold text-[#9ca3af] uppercase tracking-widest leading-none">
                      {machine.subtitle}
                    </span>
                    <h2 className="font-title text-2xl sm:text-3xl lg:text-4xl font-black text-[#1c1b1b] uppercase leading-tight tracking-tight mt-1">
                      {machine.title}
                    </h2>
                    
                    {/* Hard divider line */}
                    <div className="w-full border-t border-[#e5e7eb] my-4" />

                    {/* Specification list using custom circular chevron bullet points */}
                    <ul className="flex flex-col gap-3 leading-relaxed text-left w-full">
                      {machine.specs.map((spec, specIdx) => (
                        <li key={specIdx} className="flex gap-3 items-start font-body text-sm sm:text-base text-[#4b5563]">
                          <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-[#C75550] text-white text-[9px] mt-0.5 select-none">
                            <i className="fa-solid fa-chevron-right" />
                          </span>
                          <span className="tracking-wide">{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Inquire capacity text link */}
                  <Link 
                    href="/contact" 
                    className="font-montserrat text-xs sm:text-sm font-bold tracking-[0.15em] text-[#C75550] hover:text-[#a53b36] transition-colors mt-8 flex items-center gap-1 uppercase self-start"
                  >
                    MORE MACHINE CAPACITY <span className="font-sans text-sm">→</span>
                  </Link>

                </div>
              </div>
            );
          })}
        </section>

      </main>

      {/* Contact Banner at the bottom */}
      <div className="w-full mt-16">
        <ContactBanner />
      </div>

    </div>
  );
}
