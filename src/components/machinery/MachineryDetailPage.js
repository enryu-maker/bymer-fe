"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ContactBanner } from "../layout/ContactBanner";
import { PageLoader } from "../shared/PageLoader";
import { getMachineryPlantListHref } from "@/lib/api";
import { useMachineDetail } from "./MachineryCatalogContext";

function SpecField({ label, value }) {
  if (!value) return null;

  return (
    <div className="bg-[#f9fafb] border border-[#e5e7eb] p-5">
      <span className="font-montserrat text-[10px] font-bold text-[#9ca3af] tracking-wider uppercase block mb-1">
        {label}
      </span>
      <p className="font-body text-sm text-[#1c1b1b] leading-relaxed">{value}</p>
    </div>
  );
}

export function MachineryDetailPage() {
  const params = useParams();
  const machineId = params?.id;
  const { machine, loading, ensureMachineDetail } = useMachineDetail(machineId);

  useEffect(() => {
    ensureMachineDetail();
  }, [ensureMachineDetail]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <main className="w-full py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-[400px]">
          <PageLoader className="min-h-[120px]" />
        </main>
        <ContactBanner />
      </div>
    );
  }

  if (!machine) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <main className="w-full py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center min-h-[400px]">
          <h1 className="font-title text-2xl font-black text-[#1c1b1b] uppercase">Machine Not Found</h1>
          <Link
            href="/machinery"
            className="mt-6 inline-flex items-center justify-center bg-[#C75550] text-white px-8 py-3.5 font-title text-sm font-bold uppercase tracking-wider hover:bg-[#b54a46] transition-colors"
          >
            BACK TO MACHINERY
          </Link>
        </main>
        <ContactBanner />
      </div>
    );
  }

  const plantHref = getMachineryPlantListHref(machine.plantId);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="w-full border-b border-[#e5e7eb] bg-[#f9fafb] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="font-montserrat text-xs font-bold text-[#9ca3af] tracking-[0.15em] uppercase">
            <Link href="/" className="hover:text-[#C75550] transition-colors">
              HOME
            </Link>
            {" / "}
            <Link href={plantHref} className="hover:text-[#C75550] transition-colors">
              MACHINERY
            </Link>
            {" / "}
            <span className="text-[#1c1b1b]">DETAIL</span>
          </span>
        </div>
      </header>

      <main className="w-full py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-6">
            <div className="relative w-full aspect-[4/3] bg-[#f9fafb] border border-[#e5e7eb]">
              {machine.image ? (
                <Image
                  src={machine.image}
                  alt={machine.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  unoptimized
                  priority
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

          <div className="lg:col-span-6 flex flex-col gap-6">
            <div>
              <span className="font-montserrat text-xs font-bold text-[#C75550] uppercase tracking-[0.2em]">
                MACHINERY // {machine.plantName?.toUpperCase() || "PLANT"}
              </span>
              <h1 className="font-title text-3xl sm:text-4xl lg:text-5xl font-black text-[#1c1b1b] uppercase tracking-tight leading-tight mt-2">
                {machine.name}
              </h1>
              <div className="w-16 h-[4px] bg-[#fbbd05] mt-4" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <SpecField label="Make" value={machine.make} />
              <SpecField
                label="Quantity"
                value={machine.qty != null ? `${machine.qty} Unit${machine.qty === 1 ? "" : "s"}` : null}
              />
              <SpecField label="Capacity" value={machine.capacity !== "-" ? machine.capacity : null} />
              <SpecField
                label="Platen Size"
                value={machine.platenSize !== "-" ? machine.platenSize : null}
              />
              <SpecField
                label="Year of Purchase"
                value={machine.year != null ? String(machine.year) : null}
              />
              <SpecField label="Plant" value={machine.plantName} />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[#C75550] text-white px-8 py-3.5 font-title text-sm font-bold uppercase tracking-wider transition-all duration-200 hover:bg-[#b54a46] rounded-none"
              >
                Discuss your application
              </Link>
              <Link
                href={plantHref}
                className="inline-flex items-center justify-center border border-[#e5e7eb] text-[#1c1b1b] px-8 py-3.5 font-title text-sm font-bold uppercase tracking-wider hover:border-[#1c1b1b] transition-colors rounded-none"
              >
                BACK TO PLANT LISTING
              </Link>
            </div>
          </div>
        </div>
      </main>

      <ContactBanner />
    </div>
  );
}
