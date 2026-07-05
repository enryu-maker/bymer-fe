"use client";

import { useState } from "react";
import Image from "next/image";
import { ContactBanner } from "../layout/ContactBanner";
import { ImageLightbox } from "../shared/ImageLightbox";
import { PageHeroCarousel } from "../shared/PageHeroCarousel";

function AwardsIntro() {
  return (
    <section className="w-full py-16 sm:py-20 bg-white border-b border-[#e5e7eb]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="font-body text-sm sm:text-base lg:text-lg text-[#4b5563] leading-relaxed">
        Our awards reflect the commitment of our teams to engineering discipline, certified manufacturing systems, and consistent delivery of reliable elastomer solutions for OEMs, Tier-1, Tier-2, and industrial customers.
        </p>
      </div>
    </section>
  );
}

function AwardLightbox({ award, onClose }) {
  return (
    <ImageLightbox
      item={
        award
          ? {
              image: award.image,
              title: award.name,
            }
          : null
      }
      onClose={onClose}
      ariaLabel={award ? `View award ${award.name}` : undefined}
    />
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
      <PageHeroCarousel
        eyebrow="Recognition"
        eyebrowMuted
        title="Awards & Achievements"
        showDivider
        description="Celebrating milestones in manufacturing excellence, quality leadership, and customer partnership."
      />
      <AwardsIntro />
      <AwardsGrid awards={awards} />
      <ContactBanner />
    </div>
  );
}
