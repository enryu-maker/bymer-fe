import Image from "next/image";
import Link from "next/link";
import { ContactBanner } from "../layout/ContactBanner";

const TESTING_EQUIPMENT = [
  { name: "Rheometers", icon: "fa-solid fa-chart-line" },
  { name: "Viscometer", icon: "fa-solid fa-gauge-high" },
  { name: "Universal Testing Machine", icon: "fa-solid fa-weight-hanging" },
  { name: "Ozone Chamber", icon: "fa-solid fa-cloud" },
  { name: "0 to -60°C Cold Chamber", icon: "fa-solid fa-snowflake" },
  { name: "Ageing Ovens", icon: "fa-solid fa-fire" },
  { name: "Muffle Furnace", icon: "fa-solid fa-temperature-high" },
  { name: "Abrasion Testing", icon: "fa-solid fa-gear" },
  { name: "Specific Gravity Balances", icon: "fa-solid fa-scale-balanced" },
  { name: "Hardness Testers", icon: "fa-solid fa-hammer" },
];

function QualityHero() {
  return (
    <header className="relative w-full border-b border-[#e5e7eb] overflow-hidden bg-[#0a0a0a] min-h-[320px] sm:min-h-[380px] flex items-center justify-center">
      <div className="absolute inset-0 bg-[#0a0a0a]/90 z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20 flex flex-col items-center gap-4">
        <span className="font-montserrat text-xs sm:text-sm font-bold tracking-[0.2em] text-[#9ca3af] uppercase leading-none">
          PRECISION &amp; RELIABILITY
        </span>
        <h1 className="font-title text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight leading-[1.1] max-w-4xl">
          TESTED AND PROVEN AT EVERY STEP.
        </h1>
        <div className="w-16 h-[4px] bg-[#fbbd05] mt-1" />
        <p className="font-montserrat text-sm sm:text-base font-bold text-[#fbbd05] uppercase tracking-wider mt-1">
          Quality Assurance at Bymer Elastomers
        </p>
      </div>
    </header>
  );
}

function QualityIntro() {
  return (
    <section className="w-full py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <span className="font-montserrat text-xs sm:text-sm font-bold text-[#C75550] uppercase tracking-[0.2em] mb-2">
              OUR APPROACH
            </span>
            <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl font-black text-[#1c1b1b] uppercase tracking-tight leading-[1.05]">
              QUALITY AT EVERY STAGE OF PRODUCTION
            </h2>
            <div className="w-16 h-[4px] bg-[#fbbd05] mt-4" />
          </div>

          <div className="lg:col-span-7 flex flex-col gap-6">
            <p className="font-body text-sm sm:text-base text-[#4b5563] leading-relaxed">
              At Bymer Elastomers, we prioritize quality at every stage of production, from raw
              material inspection to the final product. Our commitment of Doing Things Right the
              First Time ensures that every step is monitored and tested rigorously, preventing
              rejections and maintaining our focus on customer satisfaction.
            </p>

            <div className="bg-[#111111] py-6 px-8 border-l-[6px] border-[#C75550] w-full">
              <p className="font-title text-sm sm:text-base font-bold tracking-wider text-white uppercase leading-snug">
                &ldquo; Doing Things Right the First Time &rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TechnologySection() {
  return (
    <section className="w-full py-20 sm:py-24 bg-[#f5f5f5] border-y border-[#e5e7eb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white border border-[#e5e7eb] p-8 sm:p-10 flex flex-col gap-4 border-t-[4px] border-t-[#C75550]">
            <div className="w-10 h-10 bg-[#C75550]/10 flex items-center justify-center text-[#C75550]">
              <i className="fa-solid fa-industry text-base" />
            </div>
            <h3 className="font-title text-xl sm:text-2xl font-black text-[#1c1b1b] uppercase tracking-tight">
              ADVANCED MANUFACTURING TECHNOLOGY
            </h3>
            <p className="font-body text-sm sm:text-base text-[#4b5563] leading-relaxed">
              To meet the demands of international markets and ensure the highest quality rubber
              products, we continuously invest in advanced technology, such as our DESMA rubber
              injection molding machines and K4 intermix.
            </p>
          </div>

          <div className="bg-white border border-[#e5e7eb] p-8 sm:p-10 flex flex-col gap-4 border-t-[4px] border-t-[#fbbd05]">
            <div className="w-10 h-10 bg-[#fbbd05]/10 flex items-center justify-center text-[#fbbd05]">
              <i className="fa-solid fa-flask text-base" />
            </div>
            <h3 className="font-title text-xl sm:text-2xl font-black text-[#1c1b1b] uppercase tracking-tight">
              IN-HOUSE RUBBER TESTING
            </h3>
            <p className="font-body text-sm sm:text-base text-[#4b5563] leading-relaxed">
              We maintain a fully equipped laboratory for comprehensive rubber testing, wherein 90%
              of rubber testing is done in house. This allows us to ensure that our products meet
              stringent quality standards and perform reliably under various conditions.
            </p>
            <span className="inline-flex self-start bg-[#C75550] text-white px-3 py-1 font-montserrat text-[10px] font-bold tracking-wider uppercase">
              90% IN-HOUSE TESTING
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function LaboratorySection() {
  return (
    <section className="w-full py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center mb-14">
          <span className="font-montserrat text-xs sm:text-sm font-bold text-[#C75550] uppercase tracking-[0.2em] mb-2">
            TESTING FACILITIES
          </span>
          <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl font-black text-[#1c1b1b] uppercase tracking-tight">
            SPECIALIZED LABORATORY EQUIPMENT
          </h2>
          <div className="w-16 h-[4px] bg-[#fbbd05] mt-4" />
          <p className="font-body text-sm sm:text-base text-[#4b5563] leading-relaxed max-w-2xl mt-6">
            Our specialized testing facilities include the following equipment to validate material
            performance, durability, and compliance at every stage.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {TESTING_EQUIPMENT.map((item) => (
            <div
              key={item.name}
              className="bg-[#f9fafb] border border-[#e5e7eb] p-5 flex flex-col items-start gap-3 min-h-[120px] border-l-[3px] border-l-[#C75550]"
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
            DISCUSS YOUR REQUIREMENTS <span className="font-sans font-bold text-xs">&gt;</span>
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
      <TechnologySection />
      <LaboratorySection />
      <CertificationsSection certifications={certifications} />
      <ContactBanner />
    </div>
  );
}
