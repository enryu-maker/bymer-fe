"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ContactBanner } from "../layout/ContactBanner";
import {
  fetchMachinery,
  getMachineryHref,
  getMachinerySpecLines,
} from "@/lib/api";

function MachineryHero({ plant }) {
  const isPlantII = plant === 2;
  return (
    <header className="relative w-full border-b border-[#e5e7eb] overflow-hidden min-h-[300px] sm:min-h-[350px] flex items-center justify-center">
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

      <div className="absolute inset-0 bg-[#0a0a0a]/90 z-10 pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20 flex flex-col items-center gap-3">
        <span className="font-montserrat text-xs sm:text-sm font-bold tracking-[0.2em] text-[#9ca3af] uppercase leading-none">
          HOME / {isPlantII ? "MACHINERY / PLANT II" : "MACHINERY / PLANT I"}
        </span>
        <h1 className="font-title text-4xl sm:text-6xl font-black uppercase text-white tracking-tight leading-none mb-1">
          {isPlantII ? "MACHINERY - PLANT II" : "MACHINERY - PLANT I"}
        </h1>
        <p className="font-body text-xs sm:text-sm text-[#9ca3af] max-w-xl leading-relaxed">
          Complete lineup of rubber mixing, moulding, vacuum-assisted presses, and material preparation
          assets used across our Nashik manufacturing footprint{isPlantII ? " - Plant II" : " - Plant I"}.
        </p>
      </div>
    </header>
  );
}

function MachineCard({ machine }) {
  const specLines = getMachinerySpecLines(machine);
  const subtitle = `MACHINERY // ${machine.plantName?.toUpperCase() || "PLANT"}`;

  return (
    <div className="w-full bg-white border border-[#e5e7eb] flex flex-col lg:flex-row items-stretch overflow-hidden rounded-none group transition-all duration-300 hover:border-[#C75550] hover:shadow-[0_10px_20px_rgba(0,0,0,0.05)]">
      <div className="w-full lg:w-[45%] relative min-h-[250px] lg:min-h-[320px] flex-shrink-0 overflow-hidden">
        {machine.image ? (
          <Image
            src={machine.image}
            alt={machine.name}
            fill
            sizes="(max-width: 1024px) 100vw, 500px"
            className="object-cover filter group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-500"
            unoptimized
          />
        ) : (
          <div className="w-full h-full min-h-[250px] bg-[#f3f4f6] flex items-center justify-center font-montserrat text-xs text-[#9ca3af]">
            NO IMAGE
          </div>
        )}
      </div>

      <div className="w-full lg:w-[55%] p-8 sm:p-10 lg:p-12 flex flex-col justify-between items-start text-left">
        <div className="w-full flex flex-col items-start gap-1">
          <span className="font-montserrat text-xs font-bold text-[#9ca3af] uppercase tracking-widest leading-none">
            {subtitle}
          </span>
          <h2 className="font-title text-2xl sm:text-3xl lg:text-4xl font-black text-[#1c1b1b] uppercase leading-tight tracking-tight mt-1">
            {machine.name}
          </h2>

          <div className="w-full border-t border-[#e5e7eb] my-4" />

          <ul className="flex flex-col gap-3 leading-relaxed text-left w-full">
            {specLines.map((spec) => (
              <li
                key={`${machine.id}-${spec.label}`}
                className="flex gap-3 items-start font-body text-sm sm:text-base text-[#4b5563]"
              >
                <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-[#C75550] text-white text-[9px] mt-0.5 select-none">
                  <i className="fa-solid fa-chevron-right" />
                </span>
                <span className="tracking-wide">
                  <span className="font-montserrat text-[10px] font-bold text-[#9ca3af] uppercase tracking-wider mr-2">
                    {spec.label}:
                  </span>
                  {spec.value}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <Link
          href={getMachineryHref(machine.id)}
          className="font-montserrat text-xs sm:text-sm font-bold tracking-[0.15em] text-[#C75550] hover:text-[#a53b36] transition-colors mt-8 flex items-center gap-1 uppercase self-start"
        >
          MORE MACHINE CAPACITY <span className="font-sans text-sm">→</span>
        </Link>
      </div>
    </div>
  );
}

export function MachineryPage({ plant = 1 }) {
  const [machinery, setMachinery] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMachinery() {
      try {
        const data = await fetchMachinery(plant);
        setMachinery(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Failed to load machinery:", err);
        setMachinery([]);
      } finally {
        setLoading(false);
      }
    }
    loadMachinery();
  }, [plant]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <MachineryHero plant={plant} />
        <main className="w-full py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white flex flex-col items-center justify-center min-h-[400px]">
          <div className="flex flex-col items-center gap-4 animate-pulse">
            <div className="w-12 h-12 border-t-4 border-b-4 border-[#C75550] rounded-full animate-spin" />
            <span className="font-montserrat text-xs font-bold tracking-widest text-[#1c1b1b] uppercase">
              LOADING HEAVY MACHINERY ASSETS...
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
      <MachineryHero plant={plant} />

      <main className="w-full py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
        <section className="flex flex-col gap-12">
          {machinery.length > 0 ? (
            machinery.map((machine) => <MachineCard key={machine.id} machine={machine} />)
          ) : (
            <div className="bg-[#f9fafb] border border-[#e5e7eb] py-16 px-6 text-center">
              <i className="fa-solid fa-industry text-3xl text-[#C75550] mb-4" />
              <p className="font-body text-sm sm:text-base text-[#4b5563] leading-relaxed max-w-md mx-auto">
                No machinery listings are available for this plant yet. Please check back soon or
                contact us for manufacturing capability details.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center mt-6 bg-[#C75550] text-white px-6 py-3 font-title text-xs font-bold uppercase tracking-wider transition-all duration-200 hover:bg-[#b54a46] rounded-none gap-2"
              >
                CONTACT US <span className="font-sans font-bold text-xs">&gt;</span>
              </Link>
            </div>
          )}
        </section>
      </main>

      <div className="w-full mt-16">
        <ContactBanner />
      </div>
    </div>
  );
}
