"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ContactBanner } from "../layout/ContactBanner";
import { PageHeroCarousel } from "../shared/PageHeroCarousel";
import { PageLoader } from "../shared/PageLoader";
import { getMachineryHref } from "@/lib/api";
import { useMachineryCatalog } from "./MachineryCatalogContext";

function MachineryHero({ plant }) {
  const isPlantII = plant === 2;

  return (
    <PageHeroCarousel
      eyebrow={`HOME / MANUFACTURING / ${isPlantII ? "PLANT II" : "PLANT I"}`}
      eyebrowMuted
      title="OUR MANUFACTURING CAPABILITIES"
      subheading={
        isPlantII
          ? "Plant II - In-House Compound Development & Material Engineering "
          : "Plant I - Precision Manufacturing for Elastomer Components"
      }
      description={
        isPlantII
          ? "Our dedicated compounding facility develops and processes custom elastomer compounds using advanced mixing technologies and controlled manufacturing processes. This enables us to deliver application-specific materials with consistent quality, reliable performance, and complete traceability for OEMs, Tier-1, Tier-2, and industrial applications."
          : "Our integrated manufacturing facility combines advanced molding technologies, precision production systems, and certified quality processes to manufacture custom rubber components, rubber-to-metal bonded parts, and elastomer solutions for OEM, Tier-1, Tier-2, and industrial applications. "
      }
    />
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
