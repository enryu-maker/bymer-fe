import Link from "next/link";
import { ContactBanner } from "../layout/ContactBanner";
import { ProcessStepsFlow } from "./ProcessStepsFlow";

function ProcessHero() {
  return (
    <header className="relative w-full border-b border-[#e5e7eb] overflow-hidden bg-[#0a0a0a] min-h-[300px] sm:min-h-[340px] flex items-center justify-center">
      <div className="absolute inset-0 bg-[#0a0a0a]/90 z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20 flex flex-col items-center gap-3">
        <span className="font-montserrat text-xs sm:text-sm font-bold tracking-[0.2em] text-[#9ca3af] uppercase leading-none">
          Manufacturing Process
        </span>
        <h1 className="font-title text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight leading-[1.1] max-w-4xl">
          From Design to Reliable Production
        </h1>
        <div className="w-16 h-[4px] bg-[#fbbd05] mt-1" />
      </div>
    </header>
  );
}

function ProcessIntro() {
  return (
    <section className="w-full py-16 sm:py-20 bg-white border-b border-[#e5e7eb]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="font-body text-sm sm:text-base lg:text-lg text-[#4b5563] leading-relaxed">
          A disciplined, engineering-based approach that guarantees quality, consistency, and
          reliable performance throughout all levels of manufacturing.
        </p>
      </div>
    </section>
  );
}

function ProcessFlowSection() {
  return (
    <section className="w-full py-20 sm:py-24 bg-[#f5f5f5] border-y border-[#e5e7eb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center mb-12 sm:mb-14">
          <span className="font-montserrat text-xs sm:text-sm font-bold text-[#C75550] uppercase tracking-[0.2em] mb-2">
            Our Approach
          </span>
          <h2 className="font-title text-2xl sm:text-3xl lg:text-4xl font-black text-[#1c1b1b] uppercase tracking-tight max-w-3xl">
            Six Stages of Engineering-Led Manufacturing
          </h2>
          <div className="w-16 h-[4px] bg-[#fbbd05] mt-4" />
          <p className="font-body text-sm sm:text-base text-[#4b5563] leading-relaxed max-w-2xl mt-6">
            Select a stage below to explore how we move from application assessment through
            production, validation, and long-term customer support.
          </p>
        </div>

        <ProcessStepsFlow />
      </div>
    </section>
  );
}

function ProcessCta() {
  return (
    <section className="w-full py-16 sm:py-20 bg-white border-t border-[#e5e7eb]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6">
        <h2 className="font-title text-2xl sm:text-3xl font-black text-[#1c1b1b] uppercase tracking-tight">
          Ready to Start Your Application?
        </h2>
        <p className="font-body text-sm sm:text-base text-[#4b5563] leading-relaxed">
          Our engineering team can assess your requirements and recommend the right elastomer
          solution for your application.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center bg-[#C75550] text-white px-8 py-3.5 font-title text-sm font-bold uppercase tracking-wider transition-all duration-200 hover:bg-[#b54a46] rounded-none gap-2"
        >
          DISCUSS YOUR REQUIREMENTS <span className="font-sans text-sm">→</span>
        </Link>
      </div>
    </section>
  );
}

export function ProcessPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ProcessHero />
      <ProcessIntro />
      <ProcessFlowSection />
      <ProcessCta />
      <ContactBanner />
    </div>
  );
}
