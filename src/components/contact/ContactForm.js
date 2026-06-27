"use client";

import { QuoteRequestForm } from "../shared/QuoteRequestForm";

export function ContactForm() {
  return (
    <div className="w-full flex flex-col items-start">
      <span className="font-montserrat text-xs font-bold text-[#C75550] uppercase tracking-[0.15em] mb-2 text-left">
        GET IN TOUCH
      </span>
      <h2 className="font-title text-2xl sm:text-3xl font-black text-[#1c1b1b] uppercase tracking-wide mb-6 border-b border-[#e5e7eb] pb-4 text-left w-full">
        REQUEST A QUOTE
      </h2>

      <QuoteRequestForm sourcePage="contact-us" />
    </div>
  );
}
