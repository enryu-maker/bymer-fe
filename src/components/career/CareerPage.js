import Link from "next/link";
import { CareerForm } from "./CareerForm";
import { ContactBanner } from "../layout/ContactBanner";

function CareerHero() {
  return (
    <header className="relative w-full border-b border-[#e5e7eb] overflow-hidden bg-[#0a0a0a] min-h-[300px] sm:min-h-[360px] flex items-center justify-center">
      <div className="absolute inset-0 bg-[#0a0a0a]/90 z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20 flex flex-col items-center gap-4">
        <span className="font-montserrat text-xs sm:text-sm font-bold tracking-[0.2em] text-[#9ca3af] uppercase leading-none">
          Careers
        </span>
        <h1 className="font-title text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight leading-[1.1] max-w-4xl">
          Build the Future with Bymer
        </h1>
        <div className="w-16 h-[4px] bg-[#fbbd05] mt-1" />
        <p className="font-body text-sm sm:text-base text-[#9ca3af] max-w-2xl leading-relaxed">
          Join a team committed to engineering excellence, manufacturing innovation, and continuous
          growth.
        </p>
        <Link
          href="#career-form"
          className="inline-flex items-center justify-center bg-[#C75550] text-white px-8 py-3.5 font-title text-sm font-bold uppercase tracking-wider transition-all duration-200 hover:bg-[#b54a46] rounded-none gap-2 mt-2"
        >
          Apply Now <span className="font-sans text-sm">→</span>
        </Link>
      </div>
    </header>
  );
}

function CareerFormSection() {
  return (
    <section
      id="career-form"
      className="w-full py-20 sm:py-24 bg-[#f5f5f5] border-b border-[#e5e7eb] scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center mb-12 sm:mb-14">
          <span className="font-montserrat text-xs sm:text-sm font-bold text-[#C75550] uppercase tracking-[0.2em] mb-2">
            Application
          </span>
          <h2 className="font-title text-2xl sm:text-3xl lg:text-4xl font-black text-[#1c1b1b] uppercase tracking-tight">
            Career Application Form
          </h2>
          <div className="w-16 h-[4px] bg-[#fbbd05] mt-4" />
          <p className="font-body text-sm sm:text-base text-[#4b5563] leading-relaxed max-w-2xl mt-6">
            Complete the form below with your details, qualifications, and preferred contact
            information. Fields marked as required must be filled before submission.
          </p>
        </div>

        <div className="max-w-6xl mx-auto bg-white border border-[#e5e7eb] p-6 sm:p-8 lg:p-10 shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
          <CareerForm />
        </div>
      </div>
    </section>
  );
}

export function CareerPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <CareerHero />
      <CareerFormSection />
      <ContactBanner />
    </div>
  );
}
