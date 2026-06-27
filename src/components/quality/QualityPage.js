import Image from "next/image";
import Link from "next/link";
import { ContactBanner } from "../layout/ContactBanner";

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

function QualityHero() {
  return (
    <header className="relative w-full border-b border-[#e5e7eb] overflow-hidden bg-[#0a0a0a] min-h-[320px] sm:min-h-[380px] flex items-center justify-center">
      <div className="absolute inset-0 bg-[#0a0a0a]/90 z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20 flex flex-col items-center gap-4">
        <span className="font-montserrat text-xs sm:text-sm font-bold tracking-[0.2em] text-[#9ca3af] uppercase leading-none">
          Quality Assurance at Bymer Elastomers
        </span>
        <h1 className="font-title text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight leading-[1.1] max-w-4xl">
          Precision. Consistency. Reliability.
        </h1>
        <div className="w-16 h-[4px] bg-[#fbbd05] mt-1" />
      </div>
    </header>
  );
}

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

function CertificationsSection({ certifications }) {
  return (
    <section className="w-full py-16 sm:py-20 bg-[#0a0a0a] border-t border-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center mb-10">
          <span className="font-montserrat text-xs sm:text-sm font-bold text-[#fbbd05] uppercase tracking-[0.2em] mb-2">
            CERTIFIED SYSTEMS
          </span>
          <h2 className="font-title text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
            INTERNATIONALLY RECOGNIZED QUALITY MANAGEMENT
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-white border border-[#e5e7eb] p-4 flex flex-col items-center gap-4"
            >
              <div className="relative w-full aspect-[3/4] bg-[#f9fafb] border border-[#e5e7eb]">
                {cert.image ? (
                  <Image
                    src={cert.image}
                    alt={cert.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 280px"
                    className="object-contain p-3"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-[#9ca3af]">
                    <i className="fa-solid fa-certificate text-3xl" />
                  </div>
                )}
              </div>
              <span className="font-montserrat text-[11px] sm:text-xs font-bold text-[#1c1b1b] tracking-wider uppercase text-center leading-snug">
                {cert.name}
              </span>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-[#C75550] text-white px-8 py-3.5 font-title text-sm font-bold uppercase tracking-wider transition-all duration-200 hover:bg-[#b54a46] rounded-none gap-2"
          >
            Discuss your application  <span className="font-sans text-sm">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export function QualityPage({ certifications = [] }) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <QualityHero />
      <QualityIntro />
      <EngineeringConfidenceSection />
      <AdvancedTestingSection />
      <TestingCapabilitiesSection />
      <CertificationsSection certifications={certifications} />
      <ContactBanner />
    </div>
  );
}
