import Link from "next/link";
import { ContactBanner } from "../layout/ContactBanner";
import { PageHeroCarousel } from "../shared/PageHeroCarousel";
import { ProcessStepsFlow } from "./ProcessStepsFlow";

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
        Let's engineer the right solution together!
        </h2>
        <p className="font-body text-sm sm:text-base text-[#4b5563] leading-relaxed">
        From material selection to production, our engineering team is ready to support your next project with precision-manufactured elastomer solutions.
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
      <PageHeroCarousel
        eyebrow="Manufacturing Process"
        eyebrowMuted
        title="From Design to Reliable Production"
        showDivider
      />
      <ProcessIntro />
      <ProcessFlowSection />
      <ProcessCta />
      <ContactBanner />
    </div>
  );
}
