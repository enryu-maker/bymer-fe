"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { ContactBanner } from "../layout/ContactBanner";

const FILTER_OPTIONS = [
  { value: "all", label: "All Testimonials" },
  { value: "customer", label: "Customer" },
  { value: "supplier", label: "Supplier" },
];

function TestimonialsHero() {
  return (
    <header className="relative w-full border-b border-[#e5e7eb] overflow-hidden bg-[#0a0a0a] min-h-[280px] sm:min-h-[320px] flex items-center justify-center">
      <div className="absolute inset-0 bg-[#0a0a0a]/90 z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20 flex flex-col items-center gap-3">
        <span className="font-montserrat text-xs sm:text-sm font-bold tracking-[0.2em] text-[#9ca3af] uppercase leading-none">
          Insights
        </span>
        <h1 className="font-title text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight leading-none">
          Testimonials
        </h1>
        <div className="w-16 h-[4px] bg-[#fbbd05] mt-1" />
        <p className="font-body text-xs sm:text-sm text-[#9ca3af] max-w-xl leading-relaxed mt-1">
          Letters and appreciation from customers and suppliers who partner with Bymer Elastomers.
        </p>
      </div>
    </header>
  );
}

function TestimonialLightbox({ testimonial, onClose }) {
  useEffect(() => {
    if (!testimonial) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [testimonial, onClose]);

  if (!testimonial) return null;

  const badgeLabel = testimonial.by_whom_display || testimonial.by_whom || "Partner";
  const isCustomer = testimonial.by_whom === "customer";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/80"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`View testimonial from ${testimonial.name}`}
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
          {testimonial.image ? (
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              fill
              unoptimized
              sizes="100vw"
              className="object-contain p-4 sm:p-6"
              priority
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-[#9ca3af]">
              <i className="fa-solid fa-file-lines text-5xl" />
            </div>
          )}
        </div>

        <div className="border-t border-[#e5e7eb] p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <h2 className="font-montserrat text-sm sm:text-base font-bold text-[#1c1b1b] tracking-wide uppercase leading-snug">
            {testimonial.name}
          </h2>
          <span
            className={`font-montserrat text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 w-fit ${
              isCustomer ? "bg-[#C75550] text-white" : "bg-[#1c1b1b] text-white"
            }`}
          >
            {badgeLabel}
          </span>
        </div>
      </div>
    </div>
  );
}

function TestimonialCard({ testimonial, onView }) {
  const badgeLabel = testimonial.by_whom_display || testimonial.by_whom || "Partner";
  const isCustomer = testimonial.by_whom === "customer";

  return (
    <article className="bg-white border border-[#e5e7eb] p-4 sm:p-5 flex flex-col items-stretch gap-4 shadow-[0_1px_3px_rgba(0,0,0,0.05)] border-t-[3px] border-t-[#C75550] h-full">
      <div className="relative w-full aspect-[4/3] bg-[#f9fafb] border border-[#e5e7eb] group">
        {testimonial.image ? (
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            unoptimized
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
            className="object-contain p-3"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-[#9ca3af]">
            <i className="fa-solid fa-file-lines text-4xl" />
          </div>
        )}

        {testimonial.image && (
          <button
            type="button"
            onClick={() => onView(testimonial)}
            className="absolute top-3 right-3 z-10 w-10 h-10 flex items-center justify-center bg-white/95 border border-[#e5e7eb] text-[#C75550] shadow-sm hover:bg-[#C75550] hover:text-white hover:border-[#C75550] transition-colors duration-200"
            aria-label={`View larger image for ${testimonial.name}`}
          >
            <i className="fa-solid fa-eye text-base" />
          </button>
        )}
      </div>

      <div className="flex flex-col items-start gap-2 flex-1">
        <span
          className={`font-montserrat text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 ${
            isCustomer ? "bg-[#C75550] text-white" : "bg-[#1c1b1b] text-white"
          }`}
        >
          {badgeLabel}
        </span>
        <h2 className="font-montserrat text-xs sm:text-sm font-bold text-[#1c1b1b] tracking-wide uppercase leading-snug">
          {testimonial.name}
        </h2>
      </div>
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
      <TestimonialsHero />

      <section className="w-full py-20 sm:py-24 bg-[#f5f5f5] border-b border-[#e5e7eb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-12 sm:mb-14">
            <div className="flex flex-col items-start sm:items-start text-left">
              <span className="font-montserrat text-xs sm:text-sm font-bold text-[#C75550] uppercase tracking-[0.2em] mb-2">
                Partnership
              </span>
              <h2 className="font-title text-2xl sm:text-3xl lg:text-4xl font-black text-[#1c1b1b] uppercase tracking-tight">
                What Partners Say
              </h2>
              <div className="w-16 h-[4px] bg-[#fbbd05] mt-4" />
            </div>

            <div className="flex flex-col gap-2 w-full sm:w-auto sm:min-w-[240px]">
              <label
                htmlFor="testimonial-filter"
                className="font-montserrat text-[10px] font-bold text-[#9ca3af] tracking-wider uppercase"
              >
                Filter By
              </label>
              <div className="relative">
                <select
                  id="testimonial-filter"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="w-full appearance-none bg-white border border-[#e5e7eb] rounded-none py-3 pl-4 pr-10 font-montserrat text-xs font-bold tracking-wider uppercase text-[#1c1b1b] focus:border-[#C75550] focus:outline-none transition-colors duration-150 cursor-pointer"
                >
                  {FILTER_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <i className="fa-solid fa-chevron-down pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#9ca3af] text-xs" />
              </div>
            </div>
          </div>

          {filteredTestimonials.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTestimonials.map((testimonial) => (
                <TestimonialCard
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

      <TestimonialLightbox
        testimonial={previewTestimonial}
        onClose={() => setPreviewTestimonial(null)}
      />

      <ContactBanner />
    </div>
  );
}
