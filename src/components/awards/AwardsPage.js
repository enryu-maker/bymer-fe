"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ContactBanner } from "../layout/ContactBanner";

function AwardsHero() {
  return (
    <header className="relative w-full border-b border-[#e5e7eb] overflow-hidden bg-[#0a0a0a] min-h-[280px] sm:min-h-[320px] flex items-center justify-center">
      <div className="absolute inset-0 bg-[#0a0a0a]/90 z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20 flex flex-col items-center gap-3">
        <span className="font-montserrat text-xs sm:text-sm font-bold tracking-[0.2em] text-[#9ca3af] uppercase leading-none">
          Recognition
        </span>
        <h1 className="font-title text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight leading-none">
          Awards &amp; Achievements
        </h1>
        <div className="w-16 h-[4px] bg-[#fbbd05] mt-1" />
        <p className="font-body text-xs sm:text-sm text-[#9ca3af] max-w-xl leading-relaxed mt-1">
          Celebrating milestones in manufacturing excellence, quality leadership, and customer
          partnership.
        </p>
      </div>
    </header>
  );
}

function AwardsIntro() {
  return (
    <section className="w-full py-16 sm:py-20 bg-white border-b border-[#e5e7eb]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="font-body text-sm sm:text-base lg:text-lg text-[#4b5563] leading-relaxed">
          Our awards reflect the commitment of our teams to engineering discipline, certified
          manufacturing systems, and consistent delivery of reliable elastomer solutions for OEM and
          industrial customers.
        </p>
      </div>
    </section>
  );
}

function AwardLightbox({ award, onClose }) {
  useEffect(() => {
    if (!award) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [award, onClose]);

  if (!award) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/80"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`View award ${award.name}`}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-white text-[#1c1b1b] hover:bg-[#C75550] hover:text-white transition-colors"
        aria-label="Close preview"
      >
        <i className="fa-solid fa-xmark text-lg" />
      </button>

      <div
        className="relative w-full max-w-5xl max-h-[90vh] bg-white border border-[#e5e7eb] flex flex-col overflow-hidden"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative w-full min-h-[50vh] max-h-[75vh] bg-[#f9fafb]">
          {award.image ? (
            <Image
              src={award.image}
              alt={award.name}
              fill
              unoptimized
              sizes="100vw"
              className="object-contain p-4 sm:p-6"
              priority
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-[#9ca3af]">
              <i className="fa-solid fa-award text-5xl" />
            </div>
          )}
        </div>

        <div className="border-t border-[#e5e7eb] p-5 sm:p-6">
          <h2 className="font-montserrat text-sm sm:text-base font-bold text-[#1c1b1b] tracking-wide uppercase leading-snug text-center">
            {award.name}
          </h2>
        </div>
      </div>
    </div>
  );
}

function AwardCard({ award, onView }) {
  return (
    <article className="bg-white border border-[#e5e7eb] p-4 sm:p-5 flex flex-col items-center gap-4 shadow-[0_1px_3px_rgba(0,0,0,0.05)] border-t-[3px] border-t-[#C75550] h-full">
      <div className="relative w-full aspect-[4/3] bg-[#f9fafb] border border-[#e5e7eb]">
        {award.image ? (
          <Image
            src={award.image}
            alt={award.name}
            fill
            unoptimized
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
            className="object-contain p-4"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-[#9ca3af]">
            <i className="fa-solid fa-award text-4xl" />
          </div>
        )}

        {award.image && (
          <button
            type="button"
            onClick={() => onView(award)}
            className="absolute top-3 right-3 z-10 w-10 h-10 flex items-center justify-center bg-white/95 border border-[#e5e7eb] text-[#C75550] shadow-sm hover:bg-[#C75550] hover:text-white hover:border-[#C75550] transition-colors duration-200"
            aria-label={`View larger image for ${award.name}`}
          >
            <i className="fa-solid fa-eye text-base" />
          </button>
        )}
      </div>
      <h2 className="font-montserrat text-[11px] sm:text-xs font-bold text-[#1c1b1b] tracking-wider uppercase text-center leading-snug">
        {award.name}
      </h2>
    </article>
  );
}

function AwardsGrid({ awards }) {
  const [previewAward, setPreviewAward] = useState(null);

  return (
    <>
      <section className="w-full py-20 sm:py-24 bg-[#f5f5f5] border-b border-[#e5e7eb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center text-center mb-12 sm:mb-14">
            <span className="font-montserrat text-xs sm:text-sm font-bold text-[#C75550] uppercase tracking-[0.2em] mb-2">
              Honors
            </span>
            <h2 className="font-title text-2xl sm:text-3xl lg:text-4xl font-black text-[#1c1b1b] uppercase tracking-tight">
              Our Awards
            </h2>
            <div className="w-16 h-[4px] bg-[#fbbd05] mt-4" />
          </div>

          {awards.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {awards.map((award) => (
                <AwardCard
                  key={award.id ?? award.name}
                  award={award}
                  onView={setPreviewAward}
                />
              ))}
            </div>
          ) : (
            <div className="bg-white border border-[#e5e7eb] py-16 px-6 text-center">
              <i className="fa-solid fa-award text-3xl text-[#C75550] mb-4" />
              <p className="font-body text-sm sm:text-base text-[#4b5563] leading-relaxed max-w-md mx-auto">
                Awards will be displayed here once they are published. Please check back soon.
              </p>
            </div>
          )}
        </div>
      </section>

      <AwardLightbox award={previewAward} onClose={() => setPreviewAward(null)} />
    </>
  );
}

export function AwardsPage({ awards = [] }) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <AwardsHero />
      <AwardsIntro />
      <AwardsGrid awards={awards} />
      <ContactBanner />
    </div>
  );
}
