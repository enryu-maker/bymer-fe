"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ContactBanner } from "../layout/ContactBanner";
import { PageLoader } from "../shared/PageLoader";
import { getMachineryHref } from "@/lib/api";
import { useMachineryCatalog } from "./MachineryCatalogContext";

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
          HOME / MANUFACTURING / {isPlantII ? "PLANT II" : "PLANT I"}
        </span>
        <h1 className="font-title text-4xl sm:text-6xl font-black uppercase text-white tracking-tight leading-none mb-1">
          OUR MANUFACTURING CAPABILITIES
        </h1>
        <p className="font-montserrat text-xs sm:text-sm font-bold text-[#fbbd05] uppercase tracking-wider">
          {isPlantII ? "Plant II" : "Plant I"} — Advanced Technology for Precision Engineering
        </p>
        <p className="font-body text-xs sm:text-sm text-[#9ca3af] max-w-xl leading-relaxed">
          We leverage sophisticated machinery to ensure the highest quality and consistency across
          rubber mixing, moulding, vacuum-assisted presses, and material preparation at our Nashik
          manufacturing footprint.
        </p>
      </div>
    </header>
  );
}

function MachineTile({ machine }) {
  return (
    <Link
      href={getMachineryHref(machine.id)}
      className="group relative block w-full aspect-[4/3] overflow-hidden border border-[#e5e7eb] bg-[#f3f4f6] transition-all duration-300 hover:border-[#C75550] hover:shadow-[0_12px_24px_rgba(0,0,0,0.08)]"
    >
      {machine.image ? (
        <Image
          src={machine.image}
          alt={machine.name}
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          unoptimized
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center font-montserrat text-xs text-[#9ca3af]">
          NO IMAGE
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-[#0a0a0a]/35 to-transparent transition-opacity duration-300 group-hover:from-[#0a0a0a]/95" />

      <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6">
        <h2 className="font-title text-base sm:text-lg lg:text-xl font-black text-white uppercase leading-snug tracking-tight">
          {machine.name}
        </h2>
        <span className="inline-flex items-center gap-1.5 mt-3 font-montserrat text-[10px] sm:text-xs font-bold text-white/90 uppercase tracking-[0.15em] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          View machine details <i className="fa-solid fa-arrow-right text-[10px]" />
        </span>
      </div>
    </Link>
  );
}

export function MachineryPage({ plant = 1 }) {
  const { machinery, loading, ensureMachineryList } = useMachineryCatalog(plant);

  useEffect(() => {
    ensureMachineryList();
  }, [ensureMachineryList]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <MachineryHero plant={plant} />
        <main className="w-full py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white flex flex-col items-center justify-center min-h-[400px]">
          <PageLoader className="min-h-[120px]" />
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
        <section>
          {machinery.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {machinery.map((machine) => (
                <MachineTile key={machine.id} machine={machine} />
              ))}
            </div>
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
                CONTACT US <span className="font-sans text-sm">→</span>
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
