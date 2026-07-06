"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { fetchClients } from "@/lib/api";
import { STATIC_STATISTICS } from "@/lib/staticData";
import { QuoteRequestForm } from "../shared/QuoteRequestForm";
import { HeroImageCarousel } from "../shared/HeroImageCarousel";

// 1. HERO SECTION
function Hero() {
  return (
    <header className="relative w-full border-b border-[#e5e7eb] overflow-hidden bg-white">
      {/* Desktop map background */}
      <div className="absolute inset-0 z-0 bg-white hidden lg:block">
        <Image
          src="/images/hero-global-map.png"
          alt=""
          aria-hidden="true"
          fill
          unoptimized
          priority
          sizes="100vw"
          className="object-contain object-right"
        />
      </div>

      <div
        className="absolute inset-0 z-10 pointer-events-none hidden lg:block"
        style={{
          background:
            "linear-gradient(90deg, #ffffff 0%, #ffffff 30%, rgba(255,255,255,0.95) 42%, rgba(255,255,255,0.6) 55%, rgba(255,255,255,0.15) 70%, rgba(255,255,255,0) 82%)",
        }}
      />

      <div className="relative z-20 w-full max-w-7xl mx-auto">
        <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 lg:min-h-[540px] flex flex-col justify-center">
          <div className="flex flex-col items-start gap-4 sm:gap-5 w-full max-w-full lg:max-w-xl pl-4 sm:pl-5 border-l-4 border-[#C75550]">
            <h1 className="font-title text-[1.75rem] leading-[1.05] sm:text-4xl md:text-5xl lg:text-[3.75rem] font-black uppercase text-[#1c1b1b] tracking-tight max-w-full break-words">
              Bymer{" "}
              <span className="text-[#C75550]">Elastomers</span>
            </h1>
            <div className="w-12 sm:w-14 h-1 bg-[#fbbd05]" />
            <p className="font-body text-sm sm:text-lg lg:text-xl text-[#4b5563] leading-relaxed max-w-full pr-2">
              We engineer reliable Elastomer Solutions
            </p>
            <Link
              href="/about"
              className="btn-black font-montserrat py-3.5 sm:py-4 px-6 sm:px-8 text-xs font-bold tracking-[0.15em] uppercase self-start mt-1"
            >
              Discover More <span className="font-sans text-sm">→</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

// 2. CORE OPERATIONS METRICS SECTION
function TopStatsBar() {
  const stats = STATIC_STATISTICS.map((item) => ({
    value: item.value,
    label: item.label,
    icon: item.icon || "fa-solid fa-circle-check",
  }));

  return (
    <section className="w-full bg-[#0a0a0a] text-[#f5f5f5] py-10 sm:py-12 border-b border-[#111111] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6 sm:gap-y-8 sm:gap-x-6">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`flex items-start gap-2 sm:gap-4 py-1 sm:py-2 w-full min-w-0 ${
                idx > 0 ? "lg:border-l lg:border-[#1f2937] lg:pl-10 xl:pl-16" : ""
              } ${
                idx === 1 || idx === 3
                  ? "max-lg:border-l max-lg:border-[#1f2937] max-lg:pl-3 sm:max-lg:pl-4"
                  : ""
              }`}
            >
              <div className="shrink-0 pt-0.5">
                <i className={`${stat.icon} text-2xl sm:text-3xl lg:text-4xl text-[#fbbd05]`} />
              </div>
              <div className="flex flex-col items-start leading-tight min-w-0">
                <span className="font-title text-2xl sm:text-3xl lg:text-4xl font-black text-[#fbbd05] tracking-tight">
                  {stat.value}
                </span>
                <span className="font-montserrat text-[8px] sm:text-[9px] lg:text-[10px] font-bold text-[#9ca3af] tracking-wide uppercase mt-0.5 leading-snug">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 3. WHY CHOOSE BYMER SECTION
function Capabilities() {
  const cards = [
    {
      title: "ENGINEERING RELIABILITY",
      icon: "fa-solid fa-gears",
      description:
        "Precision-driven manufacturing processes, advanced tooling, and controlled production systems ensure consistent quality and dependable performance across every batch.",
    },
    {
      title: "ELASTOMER EXPERTISE",
      icon: "fa-solid fa-flask",
      description:
      "60 years of technical leadership in rubber technology. Deep material knowledge across NR, NBR, EPDM, Silicone, FKM, HNBR, ACM, AEM, Chloroprene, and speciality elastomer grades, with in-house compound development capability enabling formulations precisely matched to application requirements."
    },
    {
      title: "OEM & INDUSTRIAL PARTNERSHIP",
      icon: "fa-solid fa-handshake",
      description:
"We work closely with OEMs, Tier 1/ Tier 2 suppliers, and industrial manufacturers from concept to production, delivering responsive support, technical collaboration, and long-term manufacturing reliability."
    },
    {
      title: "CERTIFIED QUALITY SYSTEMS",
      icon: "fa-solid fa-certificate",
      description:
"Our ISO 9001:2015, ISO 14001:2015, ISO 45001:2018, and IATF 16949:2016 certified processes guarantee traceability, consistency, compliance, and manufacturing excellence in line with global standards."
    },
  ];

  return (
    <section id="capabilities" className="w-full py-24 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 border-b border-[#e5e7eb] pb-8">
          <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl font-black text-[#1c1b1b] tracking-tight max-w-4xl">
          Why OEMs & industrial manufacturers choose Bymer Elastomers?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {cards.map((card) => (
            <div
              key={card.title}
              className="group bg-white border border-[#e5e7eb] transition-all duration-300 p-8 flex flex-col items-start gap-6 min-h-[320px] hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-center gap-4 w-full">
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-[#f5f5f5] text-[#1c1b1b] transition-colors duration-200 group-hover:bg-[#C75550] group-hover:text-white">
                  <i className={`${card.icon} text-lg`} />
                </div>
                <h3 className="font-montserrat text-sm sm:text-base font-bold text-[#1c1b1b] uppercase tracking-wide leading-snug">
                  {card.title}
                </h3>
              </div>

              <p className="font-body text-xs sm:text-sm text-[#4b5563] leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 4. INSTITUTIONAL QUALITY SECTION
function InstitutionalQuality() {
  return (
    <section className="w-full bg-[#1c1b1b] text-[#f5f5f5] border-t-4 border-[#C75550] border-b border-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Content (6 cols) */}
        <div className="lg:col-span-6 flex flex-col gap-6 items-start justify-center">
          <h2 className="font-title text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-[1.0]">
          Precision-Engineered Elastomer Solutions 

          </h2>

          <p className="font-montserrat text-xs sm:text-sm font-bold text-[#fbbd05] tracking-wider uppercase leading-relaxed max-w-xl">
          Certified Rubber Components, Custom Rubber Compounds & Manufacturing Solutions for <span className="uppercase">OEMs , Tier 1 and Tier 2 </span>Industrial Applications
          </p>
          
          <div className="flex flex-col gap-4 font-body text-xs sm:text-sm text-[#9ca3af] leading-relaxed max-w-xl">
            <p>
            Bymer Elastomers is a certified elastomer manufacturer specializing in custom rubber components, rubber-to-metal bonded products, extruded rubber profiles, low-pressure industrial hoses, and custom rubber compounds.
            </p>
            <p>
            Bymer has two manufacturing units with a combined area of 45,000 sq. ft. at Nashik, India. We supply OEMs, Tier 1 and Tier 2 suppliers, automotive manufacturers, industrial equipment companies, electrical and switchgear companies, and engineering firms across domestic and international markets.
            </p>
            <p>
            Our IATF 16949:2016, ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018 certified manufacturing processes deliver consistent, reliable, and scalable production for performance-critical applications.
            </p>
          </div>
        </div>

        {/* Right Column: Image carousel (6 cols) */}
        <div className="lg:col-span-6 flex justify-center items-center py-4 w-full">
          <div className="relative w-full aspect-[3/4] max-w-[500px] border border-[#C75550] p-4 bg-transparent">
            <HeroImageCarousel priority />
          </div>
        </div>

      </div>
    </section>
  );
}

// 4.5. COMMITMENT BANNER
const COMMITMENT_VIDEO_ID = "hfFEZLSLuv4";

function CommitmentBanner() {
  return (
    <section className="w-full bg-[#1c1b1b] text-white py-16 sm:py-20 flex flex-col items-center justify-center text-center px-4">
      <div className="w-full max-w-4xl mx-auto mb-10 sm:mb-12">
        <div className="relative w-full aspect-video border border-[#fbbd05]/40 bg-black overflow-hidden">
          <iframe
            src={`https://www.youtube.com/embed/${COMMITMENT_VIDEO_ID}?autoplay=1&mute=1&rel=0&modestbranding=1&playsinline=1`}
            title="Bymer Elastomers — Delivering Reliable Elastomer Solutions"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
      </div>

      <h2 className="font-title text-3xl sm:text-3xl lg:text-4xl font-black uppercase text-white tracking-wide leading-tight max-w-4xl">
        Delivering Reliable Elastomer Solutions <br />{" "}
        <span className="text-[#fbbd05]">for Performance-Critical Applications Worldwide.</span>
      </h2>
    </section>
  );
}

// 4.6. BYMER AT A GLANCE
function JourneySection() {
  const glanceCards = [
    {
      title: "MANUFACTURING LEGACY",
      icon: "fa-solid fa-landmark",
      items: [
        "Established in 1978",
        "40+ Years of Manufacturing Excellence",
        "60+ Years of Combined Technical Leadership",
      ],
    },
    {
      title: "INFRASTRUCTURE & CAPACITY",
      icon: "fa-solid fa-industry",
      items: [
        "45,000 Sq. Ft. Manufacturing Infrastructure",
        "2 Manufacturing Units",
        "In-house Compound Development & Mixing Capability",
        "In-house testing capabilities",
      ],
    },
    {
      title: "CUSTOMER REACH",
      icon: "fa-solid fa-globe",
      items: [
        "150+ Customers Across India and Global Markets",
        "OEMs, Tier 1/Tier 2 Supplier Manufacturing Expertise",
        "Long-term Manufacturing Partnerships",
      ],
    },
    {
      title: "QUALITY & COMPLIANCE",
      icon: "fa-solid fa-certificate",
      items: [
        "IATF 16949:2016 Certified",
        "ISO 9001:2015 Certified",
        "ISO 14001:2015 Certified",
        "ISO 45001:2018 Certified",

      ],
    },
  ];

  const coreCapabilities = [
    "Custom Rubber Molding",
    "Rubber-to-Metal Bonded Components",
    "Precision Elastomer Components",
    "Automotive Rubber Parts",
    "Industrial Rubber Solutions",
    "Material Development & Compounding",
  ];

  return (
    <section className="w-full py-24 bg-white border-t border-b border-[#e5e7eb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#1c1b1b] mb-10">
          Bymer at a Glance
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {glanceCards.map((card) => (
            <div
              key={card.title}
              className="bg-white border border-[#e5e7eb] p-6 sm:p-8 flex flex-col items-start gap-5 hover:shadow-md transition-shadow duration-200 min-h-[220px]"
            >
              <div className="flex items-center gap-3 w-full">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-white border border-[#e5e7eb] text-[#C75550]">
                  <i className={`${card.icon} text-base`} />
                </div>
                <h3 className="font-montserrat text-xs sm:text-sm font-bold text-[#1c1b1b] uppercase tracking-wider leading-snug">
                  {card.title}
                </h3>
              </div>

              <ul className="flex flex-col gap-3 w-full">
                {card.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-left">
                    <i className="fa-solid fa-check text-[#C75550] text-xs mt-1 flex-shrink-0" />
                    <span className="font-body text-xs sm:text-sm text-[#4b5563] leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="sm:col-span-2 bg-white border border-[#e5e7eb] p-6 sm:p-8 flex flex-col items-start gap-5 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center gap-3 w-full">
              <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-white border border-[#e5e7eb] text-[#C75550]">
                <i className="fa-solid fa-gears text-base" />
              </div>
              <h3 className="font-montserrat text-xs sm:text-sm font-bold text-[#1c1b1b] uppercase tracking-wider leading-snug">
                Core Capabilities
              </h3>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full">
              {coreCapabilities.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-left">
                  <i className="fa-solid fa-check text-[#C75550] text-xs mt-1 flex-shrink-0" />
                  <span className="font-body text-xs sm:text-sm text-[#4b5563] leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// 5. B2B CONSULTATION RFP ENGINE
function QuoteSection() {
  return (
    <section className="w-full bg-white border-t border-b border-[#e5e7eb]">
      <div className="w-full grid grid-cols-1 lg:grid-cols-12">
        
        {/* Left Column: Callout (5 cols) */}
        <div className="lg:col-span-5 bg-[#f9fafb] px-6 sm:px-10 lg:px-16 py-16 lg:py-24 flex flex-col justify-between items-start gap-12 lg:border-r lg:border-[#e5e7eb]">
          <div className="flex flex-col gap-6 items-start">
            <span className="font-montserrat text-xs sm:text-sm font-bold text-[#C75550] uppercase tracking-[0.2em] mb-1">
            LET'S DISCUSS YOUR APPLICATION 
            </span>
            <h2 className="font-title text-4xl sm:text-5xl font-black uppercase text-[#1c1b1b] leading-[1.1] tracking-tight">
            Have a Component or Compound Requirement?
            </h2>
            <p className="font-body text-sm sm:text-base text-[#4b5563] leading-relaxed max-w-md mt-2 text-left">
            Every application is different. Tell us what your component needs to achieve, and we'll engineer a solution that performs.
            </p>
          </div>

          <div className="flex flex-col gap-4 text-left w-full">
            <Link 
              href="/contact" 
              className="btn-black font-montserrat py-4 px-8 text-xs font-bold tracking-[0.15em] text-center uppercase w-full sm:w-auto self-start"
            >
              Discuss Your Requirement <span className="font-sans text-sm">→</span>

            </Link>
          </div>
        </div>

        {/* Right Column: Quote Form (7 cols) */}
        <div className="lg:col-span-7 bg-white px-6 sm:px-10 lg:px-16 py-16 lg:py-24 w-full flex flex-col justify-center">
          <h3 className="font-title text-2xl font-black text-[#1c1b1b] uppercase tracking-wide mb-6 border-b border-[#e5e7eb] pb-4 text-left">
            REQUEST A QUOTE
          </h3>

          <QuoteRequestForm sourcePage="home-quote" />
        </div>

      </div>
    </section>
  );
}

// 6. CLIENT LOGOS
function ClientLogos() {
  const [logos, setLogos] = useState([]);

  useEffect(() => {
    async function loadClients() {
      const data = await fetchClients();
      if (data?.length > 0) {
        setLogos(
          data.map((client) => ({
            id: client.id,
            src: client.image,
            alt: client.name || `Client logo ${client.id}`,
          }))
        );
      }
    }
    loadClients();
  }, []);

  if (logos.length === 0) return null;

  const marqueeLogos = [...logos, ...logos];
  const marqueeDuration = Math.max(logos.length * 2.5, 30);

  return (
    <section className="w-full bg-white border-y border-black py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <p className="font-montserrat text-sm sm:text-base lg:text-base font-bold text-[#9ca3af] uppercase tracking-[0.15em] text-center">
          Trusted by leading OEMs, Tier-1 and Tier2 industrial partners worldwide
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        <div
          className="client-marquee-inner flex flex-row flex-nowrap items-center gap-12 sm:gap-16 w-max px-6 hover:[animation-play-state:paused]"
          style={{
            animation: `client-marquee ${marqueeDuration}s linear infinite`,
          }}
        >
          {marqueeLogos.map((logo, index) => (
            <div
              key={`${logo.id}-${index}`}
              className="relative h-24 w-36 sm:h-28 sm:w-44 lg:h-32 lg:w-52 shrink-0 opacity-90 hover:opacity-100 transition-opacity duration-200"
            >
              {logo.src ? (
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  sizes="280px"
                  className="object-contain"
                />
              ) : (
                <span className="font-montserrat text-[10px] font-bold text-gray-400">
                  {logo.alt}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


// MAIN HOME PAGE COMPONENT
export function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Hero */}
      <Hero />

      {/* Stats Bar */}
      <TopStatsBar />

      {/* Capabilities */}
      <Capabilities />

      {/* Institutional Quality Section */}
      <InstitutionalQuality />

      {/* Commitment Banner */}
      <CommitmentBanner />

      {/* Journey Section */}
      <JourneySection />

      {/* Client Logos Banner */}
      <ClientLogos />

      {/* Form & Quote section */}
      <QuoteSection />
    </div>
  );
}
