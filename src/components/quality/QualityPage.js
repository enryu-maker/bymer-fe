import Image from "next/image";
import Link from "next/link";
import { ContactBanner } from "../layout/ContactBanner";
import { PageHeroCarousel } from "../shared/PageHeroCarousel";
import { getMachineryHref } from "@/lib/api";

const TESTING_CAPABILITIES = [
  { name: "Rheological Analysis", icon: "fa-solid fa-chart-line" },
  { name: "Viscosity Testing", icon: "fa-solid fa-gauge-high" },
  { name: "Tensile & Mechanical Property Testing", icon: "fa-solid fa-weight-hanging" },
  { name: "Ozone Resistance Testing", icon: "fa-solid fa-cloud" },
  { name: "Low-Temperature Performance Testing (-60°C)", icon: "fa-solid fa-snowflake" },
  { name: "Accelerated Ageing Evaluation", icon: "fa-solid fa-fire" },
  { name: "Abrasion Resistance Testing", icon: "fa-solid fa-gear" },
  { name: "Specific Gravity Analysis", icon: "fa-solid fa-scale-balanced" },
  { name: "Hardness Testing", icon: "fa-solid fa-hammer" },
  { name: "Material Characterization & Validation", icon: "fa-solid fa-flask" },
];

function QualityIntro() {
  return (
    <section className="w-full py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex flex-col gap-6">
        <div className="bg-[#111111] py-6 px-8 border-l-[6px] border-[#C75550] w-full">
            <p className="font-title text-sm sm:text-base font-bold tracking-wider text-white uppercase leading-snug">
              &ldquo;Quality Built into Every Component&rdquo;
            </p>
          </div>
          <p className="font-body text-sm sm:text-base text-[#4b5563] leading-relaxed">
          Quality at Bymer Elastomers is integrated into every stage of the manufacturing process—not inspected only at the end. From raw material verification and in-house compound development to precision manufacturing, testing, and final inspection, every process is governed by certified quality systems to ensure consistent performance, traceability, and product reliability.
          </p>

          <div className="bg-[#111111] py-6 px-8 border-l-[6px] border-[#C75550] w-full">
            <p className="font-title text-sm sm:text-base font-bold tracking-wider text-white uppercase leading-snug">
              &ldquo;Doing Things Right the First Time&rdquo;
            </p>
          </div>

          <p className="font-body text-sm sm:text-base text-[#4b5563] leading-relaxed">
          Our philosophy of "Doing Things Right the First Time" drives a culture of engineering discipline, process consistency, and continuous improvement. Every component is manufactured with a focus on precision, repeatability, and compliance with customer specifications.
          </p>
        </div>
      </div>
    </section>
  );
}

function EngineeringConfidenceSection() {
  return (
    <section className="w-full py-20 sm:py-24 bg-[#f5f5f5] border-y border-[#e5e7eb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <span className="font-montserrat text-xs sm:text-sm font-bold text-[#C75550] uppercase tracking-[0.2em] mb-2">
              Manufacturing Excellence
            </span>
            <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl font-black text-[#1c1b1b] uppercase tracking-tight leading-[1.05]">
              Engineering Confidence Through Quality
            </h2>
            <div className="w-16 h-[4px] bg-[#fbbd05] mt-4" />
          </div>

          <div className="lg:col-span-7 flex flex-col gap-6">
            <p className="font-body text-sm sm:text-base text-[#4b5563] leading-relaxed">
            Operating under IATF 16949:2016, ISO 9001:2015, and ISO 14001:2015 certified management systems, we combine advanced manufacturing technologies, controlled production environments, and robust process controls to deliver elastomer components that meet the demanding requirements of OEM and industrial applications.
            </p>
            <p className="font-body text-sm sm:text-base text-[#4b5563] leading-relaxed">
            Every product is manufactured with emphasis on dimensional accuracy, material integrity, and long-term operational reliability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function AdvancedTestingSection() {
  return (
    <section className="w-full py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-[#f9fafb] border border-[#e5e7eb] p-8 sm:p-10 flex flex-col gap-4 border-t-[4px] border-t-[#C75550]">
            <div className="w-10 h-10 bg-[#C75550]/10 flex items-center justify-center text-[#C75550]">
              <i className="fa-solid fa-flask text-base" />
            </div>
            <h3 className="font-title text-xl sm:text-2xl font-black text-[#1c1b1b] uppercase tracking-tight">
              Advanced Testing &amp; Validation
            </h3>
            <p className="font-body text-sm sm:text-base text-[#4b5563] leading-relaxed">
            Our in-house quality laboratory is equipped to perform comprehensive material and product testing, enabling us to validate compound performance, verify product specifications, and maintain consistent manufacturing quality throughout production.
            </p>
          </div>

          <div className="bg-[#f9fafb] border border-[#e5e7eb] p-8 sm:p-10 flex flex-col gap-4 border-t-[4px] border-t-[#fbbd05]">
            <div className="w-10 h-10 bg-[#fbbd05]/10 flex items-center justify-center text-[#fbbd05]">
              <i className="fa-solid fa-microscope text-base" />
            </div>
            <h3 className="font-title text-xl sm:text-2xl font-black text-[#1c1b1b] uppercase tracking-tight">
              In-House Validation
            </h3>
            <p className="font-body text-sm sm:text-base text-[#4b5563] leading-relaxed">
            Most testing and validation activities are carried out in-house, enabling faster product approval, improved process control, and greater confidence in product performance before delivery.
            </p>
            <span className="inline-flex self-start bg-[#C75550] text-white px-3 py-1 font-montserrat text-[10px] font-bold tracking-wider uppercase">
              Majority In-House Testing
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestingCapabilitiesSection() {
  return (
    <section className="w-full py-20 sm:py-24 bg-[#f5f5f5] border-y border-[#e5e7eb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center mb-14">
          <span className="font-montserrat text-xs sm:text-sm font-bold text-[#C75550] uppercase tracking-[0.2em] mb-2">
            Laboratory
          </span>
          <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl font-black text-[#1c1b1b] uppercase tracking-tight">
            Testing Capabilities
          </h2>
          <div className="w-16 h-[4px] bg-[#fbbd05] mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {TESTING_CAPABILITIES.map((item) => (
            <div
              key={item.name}
              className="bg-white border border-[#e5e7eb] p-5 flex flex-col items-start gap-3 min-h-[120px] border-l-[3px] border-l-[#C75550]"
            >
              <i className={`${item.icon} text-[#C75550] text-lg`} />
              <span className="font-montserrat text-[11px] font-bold text-[#1c1b1b] tracking-wider uppercase leading-snug">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function QAMachinerySection({ machinery }) {
  return (
    <section className="w-full py-16 sm:py-20 bg-[#0a0a0a] border-t border-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center mb-10">
          <span className="font-montserrat text-xs sm:text-sm font-bold text-[#fbbd05] uppercase tracking-[0.2em] mb-2">
            Quality Laboratory
          </span>
          <h2 className="font-title text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
            QA Plant — Testing &amp; Validation Equipment
          </h2>
          <p className="font-body text-xs sm:text-sm text-[#9ca3af] max-w-2xl mt-3 leading-relaxed">
            Laboratory and testing machinery from our dedicated QA plant, sorted by display sequence.
          </p>
        </div>

        {machinery.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {machinery.map((machine) => (
              <Link
                key={machine.id}
                href={getMachineryHref(machine.id)}
                className="group relative block w-full aspect-[4/3] overflow-hidden border border-[#e5e7eb] bg-[#f3f4f6] transition-all duration-300 hover:border-[#C75550]"
              >
                {machine.image ? (
                  <Image
                    src={machine.image}
                    alt={machine.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    unoptimized
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center font-montserrat text-xs text-[#9ca3af]">
                    NO IMAGE
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-[#0a0a0a]/35 to-transparent" />

                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  <h3 className="font-title text-sm sm:text-base font-black text-white uppercase leading-snug tracking-tight">
                    {machine.name}
                  </h3>
                  {machine.plantName && (
                    <span className="font-montserrat text-[10px] font-bold text-[#fbbd05] uppercase tracking-wider mt-2">
                      {machine.plantName}
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="bg-white border border-[#e5e7eb] py-16 px-6 text-center">
            <i className="fa-solid fa-microscope text-3xl text-[#C75550] mb-4" />
            <p className="font-body text-sm sm:text-base text-[#4b5563] leading-relaxed max-w-md mx-auto">
              Quality assurance equipment will be displayed here once published.
            </p>
          </div>
        )}

        <div className="flex justify-center mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-[#C75550] text-white px-8 py-3.5 font-title text-sm font-bold uppercase tracking-wider transition-all duration-200 hover:bg-[#b54a46] rounded-none gap-2"
          >
            Discuss your application <span className="font-sans text-sm">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export function QualityPage({ machinery = [] }) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <PageHeroCarousel
        eyebrow="Quality Assurance at Bymer Elastomers"
        eyebrowMuted
        title="Precision. Consistency. Reliability."
        showDivider
      />
      <QualityIntro />
      <EngineeringConfidenceSection />
      <AdvancedTestingSection />
      <TestingCapabilitiesSection />
      <QAMachinerySection machinery={machinery} />
      <ContactBanner />
    </div>
  );
}
