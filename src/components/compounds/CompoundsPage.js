import Image from "next/image";
import Link from "next/link";
import { ContactBanner } from "../layout/ContactBanner";
import { PageHeroCarousel } from "../shared/PageHeroCarousel";

const TRUST_ITEMS = [
  { label: "In-House Compound Development", icon: "fa-solid fa-flask" },
  { label: "OEM Focused", icon: "fa-solid fa-industry" },
  { label: "IATF Certified Manufacturing", icon: "fa-solid fa-certificate" },
  { label: "Scalable Production Capability", icon: "fa-solid fa-chart-line" },
];

const ENGINEERING_FLOW = [
  "Application Challenge",
  "Performance Requirements",
  "Compound Engineering",
  "Reliable Product Performance",
];

const DEVELOPMENT_PROCESS = [
  { title: "Application Analysis", icon: "fa-solid fa-magnifying-glass" },
  { title: "Performance Requirements", icon: "fa-solid fa-bullseye" },
  { title: "Material Formulation", icon: "fa-solid fa-flask" },
  { title: "Laboratory Development", icon: "fa-solid fa-vial" },
  { title: "Testing & Validation", icon: "fa-solid fa-clipboard-check" },
  { title: "Production Approval", icon: "fa-solid fa-check-double" },
  { title: "Scalable Manufacturing", icon: "fa-solid fa-industry" },
];

const MATERIAL_FAMILIES = [
  "AEM",
  "ACM",
  "EPDM",
  "NBR",
  "Silicone",
  "HNBR",
  "FKM",
  "Chloroprene",
  "Natural Rubber",
  "Custom Elastomer Compounds",
];

const PERFORMANCE_REQUIREMENTS = [
  { name: "Temperature Resistance", icon: "fa-solid fa-temperature-high" },
  { name: "Chemical Resistance", icon: "fa-solid fa-flask" },
  { name: "Electrical Insulation", icon: "fa-solid fa-bolt" },
  { name: "Flame Retardancy", icon: "fa-solid fa-fire-extinguisher" },
  { name: "Weathering Resistance", icon: "fa-solid fa-cloud-sun" },
  { name: "Compression Set Performance", icon: "fa-solid fa-compress" },
  { name: "Abrasion Resistance", icon: "fa-solid fa-gear" },
  { name: "Conductive Properties", icon: "fa-solid fa-plug" },
  { name : "Oil resistance", icon: "fa-solid fa-oil-can" },
  { name : "Ozone Resistance", icon: "fa-solid fa-radiation" },
];

const TESTING_CAPABILITIES = [
  { name: "Hardness Testing", icon: "fa-solid fa-hammer" },
  { name: "Tensile Strength", icon: "fa-solid fa-weight-hanging" },
  { name: "Elongation", icon: "fa-solid fa-arrows-left-right" },
  { name: "Compression Set", icon: "fa-solid fa-compress" },
  { name: "Heat Aging", icon: "fa-solid fa-fire" },
  { name: "Specific Gravity", icon: "fa-solid fa-scale-balanced" },
  { name: "Electrical Properties", icon: "fa-solid fa-bolt" },
  { name: "Chemical Resistance", icon: "fa-solid fa-flask-vial" },
  {name : "Ozone Resistance Test", icon: "fa-solid fa-radiation" },
  { name : "Low-temperature testing (up to - 60 degrees C)", icon: "fa-solid fa-temperature-low" },
];

function SectionHeader({ eyebrow, title, description, light = false }) {
  return (
    <div className="flex flex-col items-center justify-center text-center mb-12 sm:mb-14">
      <span
        className={`font-montserrat text-xs sm:text-sm font-bold uppercase tracking-[0.2em] mb-2 ${
          light ? "text-[#fbbd05]" : "text-[#C75550]"
        }`}
      >
        {eyebrow}
      </span>
      <h2
        className={`font-title text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight max-w-4xl ${
          light ? "text-white" : "text-[#1c1b1b]"
        }`}
      >
        {title}
      </h2>
      <div className={`w-16 h-[4px] mt-4 ${light ? "bg-[#fbbd05]" : "bg-[#fbbd05]"}`} />
      {description && (
        <p
          className={`font-body text-sm sm:text-base leading-relaxed max-w-3xl mt-6 ${
            light ? "text-[#9ca3af]" : "text-[#4b5563]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

function TrustBar() {
  return (
    <section className="w-full bg-[#0a0a0a] border-b border-[#111111] py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {TRUST_ITEMS.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-4 border border-[#1f2937] bg-[#111111] px-5 py-4"
            >
              <span className="w-10 h-10 flex items-center justify-center bg-[#C75550]/10 text-[#C75550] flex-shrink-0">
                <i className={`${item.icon} text-base`} />
              </span>
              <span className="font-montserrat text-[10px] sm:text-[11px] font-bold text-white tracking-wider uppercase leading-snug">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EngineeringFoundation() {
  return (
    <section className="w-full py-20 sm:py-24 bg-white border-b border-[#e5e7eb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <p className="font-body text-sm sm:text-base text-[#4b5563] leading-relaxed">
              Material engineering is the starting point of performance. Most elastomer component failures trace back to the compound not the component geometry. A seal that hardens under thermal cycling. A bushing that loses stiffness in oil exposure. A profile that cracks under ozone. Each failure is a formulation decision that didn’t match the application conditions.
            </p>
            <p className="font-body text-sm sm:text-base text-[#4b5563] leading-relaxed">
              The way the compound is formulated has an effect on how an elastomer part performs in
              service. The material design has a direct effect on sealing effectiveness, durability,
              electrical insulation, chemical resistance, weathering performance, and lifecycle
              expectancy.
            </p>
            <p className="font-body text-sm sm:text-base text-[#4b5563] leading-relaxed">
              Designing compounds to meet specific application requirements enables manufacturers to
              achieve predictable performance, improved operational reliability, and increased
              confidence in demanding environments.
            </p>
            <p className="font-body text-sm sm:text-base text-[#4b5563] leading-relaxed">Bymer’s in-house compound development capability means customers receive formulations engineered specifically for their operating environment—temperature range, fluid exposure, mechanical loading, electrical requirements, and service life. Not adapted from a general-purpose catalogue grade. Engineered for the application.
</p>
            <div className="bg-[#111111] py-6 px-8 border-l-[6px] border-[#C75550] w-full">
              <p className="font-title text-sm sm:text-base font-bold tracking-wider text-white uppercase leading-snug">
                This is why compound engineering is the basis of every successful elastomer solution.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-[#f5f5f5] border border-[#e5e7eb] p-6 sm:p-8">
              <span className="font-montserrat text-[10px] font-bold text-[#C75550] tracking-[0.2em] uppercase mb-6 block">
                Engineering Flow
              </span>
              <div className="flex flex-col items-stretch gap-0">
                {ENGINEERING_FLOW.map((step, index) => (
                  <div key={step} className="flex flex-col items-center">
                    <div className="w-full bg-white border border-[#e5e7eb] border-l-[4px] border-l-[#C75550] px-5 py-4 text-center">
                      <span className="font-title text-xs sm:text-sm font-bold text-[#1c1b1b] uppercase tracking-wide leading-snug">
                        {step}
                      </span>
                    </div>
                    {index < ENGINEERING_FLOW.length - 1 && (
                      <i className="fa-solid fa-chevron-down text-[#C75550] text-sm my-2" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DevelopmentProcessSection() {
  return (
    <section className="w-full py-20 sm:py-24 bg-[#f5f5f5] border-y border-[#e5e7eb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="How We Develop"
          title="Our Compound Development Process"
          description="A structured approach from application analysis through laboratory development, validation, and scalable manufacturing."
        />

        <div className="relative">
          <div className="hidden xl:block absolute top-[4.75rem] left-[4%] right-[4%] h-px bg-[#e5e7eb] z-0" />
          <div className="flex gap-3 sm:gap-4 overflow-x-auto pb-2 snap-x snap-mandatory xl:overflow-visible xl:grid xl:grid-cols-7 xl:gap-3 relative z-10">
            {DEVELOPMENT_PROCESS.map((step, index) => (
              <div key={step.title} className="flex items-center gap-2 flex-shrink-0 xl:flex-shrink xl:min-w-0">
                <div className="bg-white border border-[#e5e7eb] p-4 flex flex-col items-center text-center gap-3 min-w-[130px] xl:min-w-0 w-full border-t-[3px] border-t-[#C75550] snap-center">
                  <span className="w-10 h-10 flex items-center justify-center bg-[#C75550]/10 text-[#C75550]">
                    <i className={`${step.icon} text-sm`} />
                  </span>
                  <span className="font-montserrat text-[9px] sm:text-[10px] font-bold text-[#1c1b1b] tracking-wider uppercase leading-snug">
                    {step.title}
                  </span>
                </div>
                {index < DEVELOPMENT_PROCESS.length - 1 && (
                  <i className="fa-solid fa-chevron-right text-[#d1d5db] text-xs flex-shrink-0 xl:hidden" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MaterialFamiliesSection() {
  return (
    <section className="w-full py-20 sm:py-24 bg-white border-b border-[#e5e7eb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Material Families"
          title="Elastomer Materials & Compound Expertise"
          description={"We formulate and manufacture application-specific elastomer compounds using EPDM, NBR, silicone, HNBR, FKM, AEM, ACM, chloroprene, natural rubber, and other specialty materials—engineered to meet the performance requirements of OEMs, Tier-1 and Tier-2 industrial applications"}
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {MATERIAL_FAMILIES.map((material) => (
            <div
              key={material}
              className="group bg-[#f9fafb] border border-[#e5e7eb] p-6 sm:p-8 flex items-center justify-center text-center min-h-[120px] border-t-[3px] border-t-[#fbbd05] hover:border-[#C75550]/30 hover:shadow-[0_4px_12px_rgba(0,0,0,0.04)] transition-all duration-200"
            >
              <span className="font-title text-lg sm:text-xl lg:text-2xl font-black text-[#1c1b1b] uppercase tracking-tight leading-snug transition-colors duration-200 group-hover:text-[#C75550]">
                {material}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PerformanceRequirementsSection() {
  return (
    <section className="w-full py-20 sm:py-24 bg-[#f5f5f5] border-y border-[#e5e7eb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Customer Needs"
          title="Engineered to meet the performance demands of every application. "
          description="We focus on what your application must deliver — not just the polymer family, but the performance outcome your product depends on."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PERFORMANCE_REQUIREMENTS.map((item) => (
            <div
              key={item.name}
              className="bg-white border border-[#e5e7eb] p-5 flex items-start gap-4 border-l-[3px] border-l-[#C75550] min-h-[100px]"
            >
              <i className={`${item.icon} text-[#C75550] text-lg flex-shrink-0 mt-0.5`} />
              <span className="font-montserrat text-xs sm:text-sm font-bold text-[#1c1b1b] tracking-wider uppercase leading-snug">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestingValidationSection() {
  return (
    <section className="w-full py-16 sm:py-20 bg-[#0a0a0a] border-b border-[#111111]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Laboratory"
          title="Validating Material Performance"
          description="In-house testing capabilities support compound development, process consistency, and confidence in material performance before production approval."
          light
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            {TESTING_CAPABILITIES.map((item) => (
              <div
                key={item.name}
                className="bg-[#111111] border border-[#1f2937] px-3 py-2.5 sm:px-3.5 sm:py-3 flex items-center gap-2 border-l-2 border-l-[#fbbd05]"
              >
                <i className={`${item.icon} text-[#fbbd05] text-xs shrink-0`} />
                <span className="font-montserrat text-[9px] sm:text-[10px] font-bold text-white tracking-wider uppercase leading-tight">
                  {item.name}
                </span>
              </div>
            ))}
          </div>

          <div className="relative min-h-[220px] sm:min-h-[260px] lg:min-h-0 lg:h-full bg-[#111111] border border-[#1f2937] overflow-hidden">
            <Image
              src="/images/backgroundCompound.png"
              alt="Bymer Elastomers laboratory and compound testing"
              fill
              sizes="(max-width: 1024px) 100vw, 480px"
              className="object-cover opacity-50 filter grayscale"
            />
            <div className="absolute inset-0 bg-[#0a0a0a]/50 flex items-center justify-center">
              <div className="text-center px-4">
                <i className="fa-solid fa-microscope text-2xl text-[#fbbd05] mb-2" />
                <p className="font-montserrat text-[9px] sm:text-[10px] font-bold text-white tracking-wider uppercase">
                  In-House Laboratory
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CompoundsCta() {
  return (
    <section className="w-full py-16 sm:py-20 bg-white border-b border-[#e5e7eb]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6">
        <span className="font-montserrat text-xs font-bold text-[#C75550] uppercase tracking-[0.2em]">
        CUSTOM COMPOUND DEVELOPMENT
        </span>
        <h2 className="font-title text-2xl sm:text-3xl lg:text-4xl font-black text-[#1c1b1b] uppercase tracking-tight leading-tight">
        Need a Custom Elastomer Compound for Your Application?
        </h2>
        <p className="font-body text-sm sm:text-base text-[#4b5563] leading-relaxed max-w-2xl">
        Develop application-specific elastomer compounds engineered to meet your performance, processing, and manufacturing requirements.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center bg-[#C75550] text-white px-8 py-3.5 font-title text-sm font-bold uppercase tracking-wider transition-all duration-200 hover:bg-[#b54a46] rounded-none gap-2"
        >
         DISCUSS YOUR COMPOUND REQUIREMENTS <span className="font-sans text-sm">→</span>
        </Link>
      </div>
    </section>
  );
}

export function CompoundsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <PageHeroCarousel
        eyebrow="Compound Engineering"
        eyebrowMuted
        title="Custom Elastomer Compounds Engineered Around Application Performance"
        titleClassName="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl"
        showDivider
      />
      <TrustBar />
      <EngineeringFoundation />
      <DevelopmentProcessSection />
      <MaterialFamiliesSection />
      <PerformanceRequirementsSection />
      <TestingValidationSection />
      <CompoundsCta />
      <ContactBanner />
    </div>
  );
}
