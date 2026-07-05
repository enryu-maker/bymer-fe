"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ContactBanner } from "../layout/ContactBanner";
import { ImageLightbox } from "../shared/ImageLightbox";
import { PageHeroCarousel } from "../shared/PageHeroCarousel";

const FILTER_OPTIONS = [
  { value: "all", label: "All" },
  { value: "customer", label: "Customers" },
  { value: "supplier", label: "Suppliers" },
];

function TestimonialRow({ testimonial, onView }) {
  const badgeLabel = testimonial.by_whom_display || testimonial.by_whom || "Partner";
  const isCustomer = testimonial.by_whom === "customer";

  return (
    <article className="bg-white border border-[#e5e7eb] p-4 sm:p-5 flex items-center gap-4 sm:gap-6 shadow-[0_1px_3px_rgba(0,0,0,0.05)] border-l-[3px] border-l-[#C75550]">
      <div className="relative w-20 h-20 sm:w-24 sm:h-24 shrink-0 bg-[#f9fafb] border border-[#e5e7eb]">
        {testimonial.image ? (
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            unoptimized
            sizes="96px"
            className="object-contain p-2"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-[#9ca3af]">
            <i className="fa-solid fa-file-lines text-xl" />
          </div>
        )}
      </div>

      <div className="flex-1 min-w-0 text-left">
        <span
          className={`font-montserrat text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 inline-block mb-2 ${
            isCustomer ? "bg-[#C75550] text-white" : "bg-[#1c1b1b] text-white"
          }`}
        >
          {badgeLabel}
        </span>
        <h2 className="font-montserrat text-xs sm:text-sm font-bold text-[#1c1b1b] tracking-wide uppercase leading-snug">
          {testimonial.name}
        </h2>
      </div>

      {testimonial.image && (
        <button
          type="button"
          onClick={() => onView(testimonial)}
          className="shrink-0 w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center bg-white border border-[#e5e7eb] text-[#C75550] hover:bg-[#C75550] hover:text-white hover:border-[#C75550] transition-colors duration-200"
          aria-label={`View larger image for ${testimonial.name}`}
        >
          <i className="fa-solid fa-eye text-base" />
        </button>
      )}
    </article>
  );
}

export function TestimonialsPage({ testimonials = [] }) {
  const [filter, setFilter] = useState("all");
  const [previewTestimonial, setPreviewTestimonial] = useState(null);

  const filteredTestimonials = useMemo(() => {
    if (filter === "all") return testimonials;
    return testimonials.filter((item) => item.by_whom === filter);
  }, [testimonials, filter]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <PageHeroCarousel
        eyebrow="Insights"
        eyebrowMuted
        title="Our Clients"
        showDivider
        description="Letters and appreciation from customers and suppliers who partner with Bymer Elastomers."
      />

      <section className="w-full py-20 sm:py-24 bg-[#f5f5f5] border-b border-[#e5e7eb]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
            <div>
              <span className="font-montserrat text-xs sm:text-sm font-bold text-[#C75550] uppercase tracking-[0.2em] mb-2 block">
                Partnership
              </span>
              <h2 className="font-title text-2xl sm:text-3xl font-black text-[#1c1b1b] uppercase tracking-tight">
                What Partners Say
              </h2>
              <div className="w-16 h-[4px] bg-[#fbbd05] mt-4" />
            </div>

            <div className="flex flex-col gap-2 w-full sm:w-auto">
              <span className="font-montserrat text-[10px] font-bold text-[#9ca3af] tracking-wider uppercase">
                Filter By
              </span>
              <div className="flex flex-wrap gap-2">
                {FILTER_OPTIONS.map((option) => {
                  const isActive = filter === option.value;
                  return (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => setFilter(option.value)}
                      className={`font-montserrat text-[10px] sm:text-xs font-bold tracking-wider uppercase px-4 py-2.5 border transition-colors duration-150 ${
                        isActive
                          ? "bg-[#C75550] border-[#C75550] text-white"
                          : "bg-white border-[#e5e7eb] text-[#1c1b1b] hover:border-[#C75550] hover:text-[#C75550]"
                      }`}
                    >
                      {option.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {filteredTestimonials.length > 0 ? (
            <div className="flex flex-col gap-4">
              {filteredTestimonials.map((testimonial) => (
                <TestimonialRow
                  key={testimonial.id}
                  testimonial={testimonial}
                  onView={setPreviewTestimonial}
                />
              ))}
            </div>
          ) : (
            <div className="bg-white border border-[#e5e7eb] py-16 px-6 text-center">
              <i className="fa-solid fa-file-lines text-3xl text-[#C75550] mb-4" />
              <p className="font-body text-sm sm:text-base text-[#4b5563] leading-relaxed max-w-md mx-auto">
                {testimonials.length === 0
                  ? "Testimonials will be displayed here once they are published. Please check back soon."
                  : `No ${filter === "customer" ? "customer" : "supplier"} testimonials are available right now.`}
              </p>
            </div>
          )}
        </div>
      </section>

      <ImageLightbox
        item={
          previewTestimonial
            ? {
                image: previewTestimonial.image,
                title: previewTestimonial.name,
                subtitle: previewTestimonial.by_whom_display || previewTestimonial.by_whom,
              }
            : null
        }
        onClose={() => setPreviewTestimonial(null)}
        ariaLabel={
          previewTestimonial
            ? `View testimonial from ${previewTestimonial.name}`
            : undefined
        }
      />

      <ContactBanner />
    </div>
  );
}
