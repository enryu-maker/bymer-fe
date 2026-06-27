"use client";

import Image from "next/image";
import { ContactForm } from "./ContactForm";
import { useCompanySettings } from "../layout/CompanySettingsContext";

// 1. CONTACT HERO
function ContactHero() {
  return (
    <header className="relative w-full border-b border-[#e5e7eb] overflow-hidden bg-[#0a0a0a] min-h-[300px] sm:min-h-[350px] flex items-center justify-center">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/backgroundContact.png" 
          alt="Contact Bymer Elastomers" 
          fill
          sizes="100vw"
          className="object-cover filter grayscale"
          priority
        />
      </div>

      {/* Dark semi-transparent overlay */}
      <div className="absolute inset-0 bg-[#0a0a0a]/70 z-10 pointer-events-none" />

      {/* Banner Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20 flex flex-col items-center gap-3">
        <span className="font-montserrat text-xs sm:text-sm font-bold tracking-[0.2em] text-[#9ca3af] uppercase leading-none">
          HOME / CONTACT
        </span>
        <h1 className="font-title text-4xl sm:text-6xl font-black uppercase text-white tracking-tight leading-none">
          CONTACT US
        </h1>
      </div>
    </header>
  );
}

// 2. CONTACT DETAILS (INFO CARDS)
function ContactDetails() {
  const { profile } = useCompanySettings();

  const email = profile?.email || "sales@bymer.com";
  const altEmail = profile?.alternate_phone ? "info@bymer.com" : null;
  const phone = profile?.phone || "+91 253 2381123";
  const altPhone = profile?.alternate_phone || "+91 98220 79859";
  const address = profile?.address || "Plot No. J-52 and J-42, MIDC Industrial Area, Ambad, Nashik - 422 010, Maharashtra, India.";

  return (
    <section className="w-full py-20 sm:py-24 bg-[#f5f5f5] border-b border-[#e5e7eb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <span className="font-montserrat text-xs sm:text-sm font-bold text-[#C75550] uppercase tracking-[0.2em] mb-2">
            GET IN TOUCH
          </span>
          <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl font-black text-[#1c1b1b] uppercase tracking-tight">
            CALL NOW OR WRITE A MESSAGE
          </h2>
          <div className="w-16 h-[4px] bg-[#fbbd05] mt-4" />
        </div>

        {/* 3 Columns Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Email Address */}
          <div className="bg-white border border-[#e5e7eb] p-8 sm:p-10 flex flex-col items-center justify-center text-center min-h-[260px] shadow-[0_1px_3px_rgba(0,0,0,0.05)] rounded-none">
            <div className="w-12 h-12 rounded-full bg-[#C75550]/10 flex items-center justify-center text-[#C75550]">
              <i className="fa-solid fa-envelope text-lg" />
            </div>
            <h3 className="font-title text-xl font-bold text-[#1c1b1b] uppercase tracking-wider mt-5 mb-3">
              EMAIL ADDRESS
            </h3>
            <div className="flex flex-col gap-1.5 font-body text-sm text-[#4b5563]">
              <a href={`mailto:${email}`} className="hover:text-[#C75550] transition-colors font-medium">
                {email}
              </a>
              {altEmail ? (
                <a href={`mailto:${altEmail}`} className="hover:text-[#C75550] transition-colors font-medium">
                  {altEmail}
                </a>
              ) : (
                <a href="mailto:info@bymer.com" className="hover:text-[#C75550] transition-colors font-medium">
                  info@bymer.com
                </a>
              )}
            </div>
          </div>

          {/* Card 2: Phone Numbers */}
          <div className="bg-white border border-[#e5e7eb] p-8 sm:p-10 flex flex-col items-center justify-center text-center min-h-[260px] shadow-[0_1px_3px_rgba(0,0,0,0.05)] rounded-none">
            <div className="w-12 h-12 rounded-full bg-[#fbbd05]/10 flex items-center justify-center text-[#fbbd05]">
              <i className="fa-solid fa-phone text-lg" />
            </div>
            <h3 className="font-title text-xl font-bold text-[#1c1b1b] uppercase tracking-wider mt-5 mb-3">
              CONTACT NUMBERS
            </h3>
            <div className="flex flex-col gap-1.5 font-body text-sm text-[#4b5563] font-medium">
              <a href={`tel:${phone}`} className="hover:text-[#C75550] transition-colors">
                {phone}
              </a>
              <a href={`tel:${altPhone}`} className="hover:text-[#C75550] transition-colors">
                {altPhone}
              </a>
            </div>
          </div>

          {/* Card 3: Visit Factory */}
          <div className="bg-white border border-[#e5e7eb] p-8 sm:p-10 flex flex-col items-center justify-center text-center min-h-[260px] shadow-[0_1px_3px_rgba(0,0,0,0.05)] rounded-none">
            <div className="w-12 h-12 rounded-full bg-[#1c1b1b]/10 flex items-center justify-center text-[#1c1b1b]">
              <i className="fa-solid fa-location-dot text-lg" />
            </div>
            <h3 className="font-title text-xl font-bold text-[#1c1b1b] uppercase tracking-wider mt-5 mb-1.5">
              VISIT FACTORY
            </h3>
            <span className="font-montserrat text-[10px] font-bold text-[#1c1b1b] tracking-wider uppercase mb-2">
              BYMER ELASTOMERS
            </span>
            <p className="font-body text-xs sm:text-sm text-[#4b5563] leading-relaxed max-w-[260px] whitespace-pre-line">
              {address}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Contact Hero */}
      <ContactHero />

      {/* Contact Details (Info Cards) */}
      <ContactDetails />

      {/* Main Grid Section for Form and Map */}
      <main className="w-full py-20 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Form (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Right Column: Map (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start text-left w-full h-full justify-between">
            <div className="w-full">
              <span className="font-montserrat text-xs font-bold text-[#C75550] uppercase tracking-[0.15em]">
                GEOLOCATION METRICS
              </span>
              <h2 className="font-title text-3xl sm:text-4xl font-black text-[#1c1b1b] uppercase tracking-tight mb-8 mt-1">
                FACTORY COORDINATES
              </h2>
              
              {/* Boxed Google Map Iframe */}
              <div className="w-full border border-[#e5e7eb] bg-[#f9fafb] h-[380px] relative shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.446463426043!2d73.71827277549234!3d19.947717824028437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeccaca3438f1%3A0x7218d22a36753acf!2sBymer%20Elastomers!5e0!3m2!1sen!2sin!4v1782546918497!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="Bymer Elastomers — Nashik Factory Location"
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
