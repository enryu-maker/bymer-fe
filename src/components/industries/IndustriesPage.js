import Link from "next/link";
import { ContactBanner } from "../layout/ContactBanner";
import { PageHeroCarousel } from "../shared/PageHeroCarousel";

const INDUSTRIES = [
  {
    id: "automotive",
    name: "Automotive",
    tagline: "Driving Performance and Reliability",
    icon: "fa-solid fa-car",
    description:
      "Automotive systems require components with stable performance under varying operating conditions. Bymer develops elastomer solutions to improve durability, sealing, vibration control and long term reliability for conventional and electric vehicle applications.",
  },
  {
    id: "industrial-equipment",
    name: "Industrial Equipment",
    tagline: "Enabling Operational Reliability",
    icon: "fa-solid fa-industry",
    description:
      "Industrial machinery depends on components that can withstand demanding use, repetitive cycles and harsh environments. We develop solutions to improve the performance of the equipment and reduce maintenance and operations interruption.",
  },
  {
    id: "electrical-power",
    name: "Electrical & Power Systems",
    tagline: "Protecting Critical Infrastructure",
    icon: "fa-solid fa-bolt",
    description:
      "The materials and components used in electrical and power applications must provide reliable sealing, insulation and environmental protection. Bymer manufactures elastomer solutions that enhance safety, reliability and equipment life.",
  },
  {
    id: "aerospace",
    name: "Aerospace",
    tagline: "Precision for Special Applications",
    icon: "fa-solid fa-plane",
    description:
      "Aerospace applications need a disciplined approach to quality, consistency and technical performance. Our manufacturing expertise enables us to support specialized elastomer requirements where reliability is a must.",
  },
  {
    id: "defence",
    name: "Defence",
    tagline: "Trusted Solutions for Critical Environments",
    icon: "fa-solid fa-shield-halved",
    description:
      "Defence-related applications require manufacturing partners capable of delivering dependable quality, process control, and consistent performance. Bymer's experience and technical capabilities enable support for demanding operational requirements.",
  },
  {
    id: "oil-chemical-steel",
    name: "Oil, Chemical, Cement & Steel",
    tagline: "Built for Demanding Industrial Conditions",
    icon: "fa-solid fa-oil-well",
    description:
      "Industrial processing environments require components that perform reliably under exposure to chemicals, abrasion, temperature variations, and continuous operation. Our elastomer solutions are engineered to support durability, safety, and operational efficiency.",
  },
  {
    id: "air-handling-hvac",
    name: "Air Handling & HVAC",
    tagline: "Enhancing System Performance",
    icon: "fa-solid fa-wind",
    description:
      "Effective sealing, vibration control and protection of components are important for air handling and ventilation systems. Bymer produces elastomer solutions helping to secure system efficiency, reliability and long term performance.",
  },
  {
    id: "technical-textiles",
    name: "Technical Textiles & Safety Equipment",
    tagline: "Performance Support and Protection",
    icon: "fa-solid fa-vest",
    description:
      "For safety-critical applications, there are requirements for materials that have durability, flexibility and consistent performance. Our elastomer solutions are helping manufacturers of industrial safety products, technical textiles and protective equipment.",
  },
  {
    id: "infrastructure",
    name: "Infrastructure & Engineering",
    tagline: "Designed for Long-Term Performance",
    icon: "fa-solid fa-bridge",
    description:
      "Durable parts of infrastructure projects and engineering systems shall operate under different operating conditions. Our elastomer solutions are designed for dependability, longevity and application specific performance.",
  },
];

function IndustryCard({ industry }) {
  return (
    <article
      id={industry.id}
      className="bg-white border border-[#e5e7eb] p-6 sm:p-8 flex flex-col gap-4 h-full border-t-[3px] border-t-[#fbbd05] hover:border-[#C75550]/30 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-200"
    >
      <div className="flex items-start gap-4">
        <span className="w-11 h-11 flex-shrink-0 flex items-center justify-center bg-[#C75550]/10 text-[#C75550] text-lg">
          <i className={industry.icon} />
        </span>
        <div className="flex flex-col gap-1 text-left min-w-0">
          <h2 className="font-title text-lg sm:text-xl font-black text-[#1c1b1b] uppercase tracking-tight leading-snug">
            {industry.name}
          </h2>
          <span className="font-montserrat text-[10px] sm:text-xs font-bold text-[#C75550] tracking-wider uppercase">
            {industry.tagline}
          </span>
        </div>
      </div>
      <p className="font-body text-sm text-[#4b5563] leading-relaxed text-left">
        {industry.description}
      </p>
    </article>
  );
}

export function IndustriesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <PageHeroCarousel
        eyebrow="Industries We Serve"
        eyebrowMuted
        title="Engineering Elastomer Solutions for Industries That Demand Reliability"
        titleClassName="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl"
        showDivider
      />

      <section className="w-full py-16 sm:py-20 bg-white border-b border-[#e5e7eb]">
        <div className="max-w-4xl text-center mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-6">
          <p className="font-body text-sm sm:text-base text-[#4b5563] leading-relaxed">
          Every industry has unique performance requirements, operating conditions, and quality expectations. Bymer Elastomers partners with OEMs, Tier-1 and Tier-2 industrial manufacturers to develop elastomer solutions that address application-specific challenges while ensuring consistency, durability, and manufacturing reliability.
          </p>
          <p className="font-body text-sm sm:text-base text-[#4b5563] leading-relaxed">
          The industries may be different, but the expectations are the same: consistent quality, reliable delivery, technical know-how, and manufacturing capability.

          </p>
          <p className="font-body text-sm sm:text-base text-[#4b5563] leading-relaxed">
          We have decades of elastomer manufacturing experience and certified processes, in-house compound development, in-house testing capabilities and scalable production capabilities. We support customers across a wide range of sectors and changing application requirements.

          </p>
        </div>
      </section>

      <section className="w-full py-16 sm:py-24 bg-[#f5f5f5] border-b border-[#e5e7eb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {INDUSTRIES.map((industry) => (
              <IndustryCard key={industry.id} industry={industry} />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-16 sm:py-20 bg-[#0a0a0a] border-b border-[#111111]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6">
          <span className="font-montserrat text-xs font-bold text-[#fbbd05] uppercase tracking-[0.2em]">
            Partner With Us
          </span>
          <h2 className="font-title text-2xl sm:text-3xl lg:text-4xl font-black text-white uppercase tracking-tight leading-tight">
            Ready to Engineer Your Application?
          </h2>
          <p className="font-body text-sm sm:text-base text-[#9ca3af] leading-relaxed max-w-2xl">
            Share your application requirements and our engineering team will work with you to
            develop a reliable elastomer solution built for your industry.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-[#C75550] text-white px-8 py-3.5 font-title text-sm font-bold uppercase tracking-wider transition-all duration-200 hover:bg-[#b54a46] rounded-none gap-2"
          >
            Discuss Your Application <span className="font-sans font-bold text-xs">→</span>
          </Link>
        </div>
      </section>

      <ContactBanner />
    </div>
  );
}
