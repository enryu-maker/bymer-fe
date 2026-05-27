import Image from "next/image";
import { ContactForm } from "./ContactForm";

// 1. CONTACT HERO
function ContactHero() {
  return (
    <header className="relative w-full border-b-2 border-[#1C1B1B] overflow-hidden bg-[#1C1B1B] py-20 sm:py-24 lg:py-28">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/backgroundContact.png" 
          alt="Contact Bymer Elastomers" 
          fill
          sizes="100vw"
          className="object-cover opacity-25 filter grayscale"
          priority
        />
      </div>

      {/* Banner Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center gap-2.5">
        <span className="font-subtitle text-xs sm:text-sm font-bold tracking-[0.2em] text-[#DCD9D9] uppercase leading-none mb-1">
          HOME / CONTACT
        </span>
        <h1 
          className="font-title text-5xl sm:text-7xl font-black uppercase text-[#FCF9F8] tracking-tight relative inline-block"
          style={{
            textShadow: "4px 4px 0px #1C1B1B"
          }}
        >
          CONTACT US
        </h1>
        <div className="w-24 h-[5px] bg-[#B81312] mt-1" />
      </div>
    </header>
  );
}

// 2. CONTACT DETAILS
function ContactDetails() {
  return (
    <div className="lg:col-span-6 flex flex-col gap-8">
      <div className="flex flex-col">
        <h2 className="font-title text-4xl sm:text-5xl font-black tracking-tight text-[#1C1B1B] uppercase leading-none">
          CALL NOW OR
        </h2>
        <span className="font-title text-4xl sm:text-5xl font-black tracking-tight text-[#1C1B1B] uppercase leading-none mt-1">
          WRITE A MESSAGE
        </span>
      </div>

      <div className="flex flex-col mt-4">
        {/* Box 1: Email */}
        <div className="flex gap-5 items-start py-6">
          <div className="flex-shrink-0 w-12 h-12 border-2 border-[#1C1B1B] bg-white flex items-center justify-center relative shadow-[3px_3px_0px_0px_#1C1B1B]">
            <svg className="w-5 h-5 text-[#B81312]" fill="none" viewBox="0 0 14 11" stroke="currentColor" strokeWidth="1.33333">
              <path d="M0.924805 2.66675L6.18481 6.17342C6.40391 6.3196 6.66141 6.39761 6.9248 6.39761C7.1882 6.39761 7.4457 6.3196 7.6648 6.17342L12.9248 2.66675M2.25814 10.0001H11.5915C11.9451 10.0001 12.2842 9.85961 12.5343 9.60956C12.7843 9.35951 12.9248 9.02037 12.9248 8.66675V2.00008C12.9248 1.64646 12.7843 1.30732 12.5343 1.05727C12.2842 0.807224 11.9451 0.666748 11.5915 0.666748H2.25814C1.90452 0.666748 1.56538 0.807224 1.31533 1.05727C1.06528 1.30732 0.924805 1.64646 0.924805 2.00008V8.66675C0.924805 9.02037 1.06528 9.35951 1.31533 9.60956C1.56538 9.85961 1.90452 10.0001 2.25814 10.0001Z" strokeLinecap="square"/>
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-subtitle text-xs font-bold text-[#1C1B1B]/50 tracking-wider uppercase leading-none">
              EMAIL
            </span>
            <a href="mailto:sales@bymer.com" className="font-body text-base font-bold text-[#B81312] hover:underline leading-none mt-1">
              sales@bymer.com
            </a>
            <a href="mailto:info@bymer.com" className="font-body text-base font-bold text-[#B81312] hover:underline leading-none mt-1">
              info@bymer.com
            </a>
          </div>
        </div>

        {/* Divider 1 */}
        <div className="w-full border-t border-[#1C1B1B]/10" />

        {/* Box 2: Phone */}
        <div className="flex gap-5 items-start py-6">
          <div className="flex-shrink-0 w-12 h-12 border-2 border-[#1C1B1B] bg-white flex items-center justify-center relative shadow-[3px_3px_0px_0px_#1C1B1B]">
            <svg className="w-5 h-5 text-[#B81312]" fill="none" viewBox="0 0 14 14" stroke="currentColor" strokeWidth="1.33333">
              <path d="M0.666992 2.00008C0.666992 1.64646 0.807468 1.30732 1.05752 1.05727C1.30756 0.807224 1.6467 0.666748 2.00033 0.666748H4.18699C4.32685 0.666854 4.46314 0.710946 4.57656 0.792781C4.68998 0.874617 4.7748 0.990052 4.81899 1.12275L5.81766 4.11808C5.86826 4.27031 5.86228 4.43567 5.8008 4.58384C5.73933 4.73201 5.62649 4.85305 5.48299 4.92475L3.97833 5.67808C4.71587 7.31044 6.0233 8.61787 7.65566 9.35542L8.40899 7.85075C8.48069 7.70725 8.60173 7.59441 8.7499 7.53294C8.89807 7.47146 9.06343 7.46548 9.21566 7.51608L12.211 8.51475C12.3438 8.55898 12.4593 8.64389 12.5412 8.75745C12.623 8.871 12.667 9.00744 12.667 9.14741V11.3334C12.667 11.687 12.5265 12.0262 12.2765 12.2762C12.0264 12.5263 11.6873 12.6667 11.3337 12.6667H10.667C5.14433 12.6667 0.666992 8.18942 0.666992 2.66675V2.00008Z" strokeLinecap="square"/>
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-subtitle text-xs font-bold text-[#1C1B1B]/50 tracking-wider uppercase leading-none">
              PHONE
            </span>
            <div className="font-body text-base font-bold text-[#1C1B1B] flex flex-wrap gap-2 items-center leading-none mt-2">
              <a href="tel:+912532381123" className="hover:text-[#B81312] transition-colors leading-none">+91 253 2381123</a>
              <span>,</span>
              <a href="tel:+919822079859" className="hover:text-[#B81312] transition-colors leading-none">+91 9822079859</a>
            </div>
          </div>
        </div>

        {/* Divider 2 */}
        <div className="w-full border-t border-[#1C1B1B]/10" />

        {/* Box 3: Visit */}
        <div className="flex gap-5 items-start py-6">
          <div className="flex-shrink-0 w-12 h-12 border-2 border-[#1C1B1B] bg-white flex items-center justify-center relative shadow-[3px_3px_0px_0px_#1C1B1B]">
            <svg className="w-5 h-5 text-[#B81312]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path d="M17.657 16.657L13.414 20.9C13.2284 21.0857 13.0081 21.233 12.7656 21.3336C12.523 21.4341 12.2631 21.4859 12.0005 21.4859C11.738 21.4859 11.478 21.4341 11.2354 21.3336C10.9929 21.233 10.7726 21.0857 10.587 20.9L6.343 16.657C5.22422 15.5381 4.46234 14.1127 4.15369 12.5608C3.84504 11.009 4.00349 9.40047 4.60901 7.93868C5.21452 6.4769 6.2399 5.22749 7.55548 4.34846C8.87107 3.46943 10.4178 3.00024 12 3.00024C13.5822 3.00024 15.1289 3.46943 16.4445 4.34846C17.7601 5.22749 18.7855 6.4769 19.391 7.93868C19.9965 9.40047 20.155 11.009 19.8463 12.5608C19.5377 14.1127 18.7758 15.5381 17.657 16.657Z" strokeLinecap="square"/>
              <path d="M15 11C15 11.7956 14.6839 12.5587 14.1213 13.1213C13.5587 13.6839 12.7956 14 12 14C11.2044 14 10.4413 13.6839 9.87868 13.1213C9.31607 12.5587 9 11.7956 9 11C9 10.2044 9.31607 9.44129 9.87868 8.87868C10.4413 8.31607 11.2044 8 12 8C12.7956 8 13.5587 8.31607 14.1213 8.87868C14.6839 9.44129 15 10.2044 15 11Z" strokeLinecap="square"/>
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-subtitle text-xs font-bold text-[#1C1B1B]/50 tracking-wider uppercase leading-none">
              VISIT
            </span>
            <span className="font-body text-base font-bold text-[#B81312] uppercase leading-none mt-1">
              BYMER ELASTOMERS
            </span>
            <p className="font-body text-sm text-[#1C1B1B]/80 leading-relaxed mt-1">
              Plot No. J-52 and J-42, MIDC Industrial Area, Ambad, Nashik-422 010. Maharashtra, India.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// MAIN CONTACT PAGE COMPONENT
export function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FCF9F8]">
      {/* Contact Hero */}
      <ContactHero />

      {/* Main Grid Section */}
      <main className="w-full py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <ContactDetails />
          <ContactForm />
        </div>
      </main>

      {/* Google Maps Iframe Section */}
      <section className="w-full border-t-2 border-b-4 border-[#1C1B1B] bg-white h-[450px] relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.6583997092147!2d73.7196024153724!3d19.980860586574317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddec011d619985%3A0xe10283c749eb40!2sBymer%20Elastomers%20-%20Plant%201!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0, filter: "grayscale(100%) contrast(1.1) invert(0)" }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Bymer Elastomers Ambad Nashik Plant Map Location"
        />
      </section>
    </div>
  );
}
