"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { fetchStatistics, fetchClients, submitContactInquiry } from "@/lib/api";

// 1. HERO SECTION
function Hero() {
  return (
    <header className="relative w-full border-b border-[#e5e7eb] overflow-hidden bg-white min-h-[600px] flex items-center">
      {/* Background Image Container */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[65%] z-0">
        <Image 
          src="/images/backgroundHome.png" 
          alt="Bymer Elastomers Automation Facility" 
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Linear Gradient Overlay */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none" 
        style={{
          background: "linear-gradient(90deg, #ffffff 0%, #ffffff 35%, rgba(255, 255, 255, 0.7) 50%, rgba(255, 255, 255, 0) 100%)"
        }}
      />

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-20 w-full flex flex-col items-start gap-6">
        <h1 className="font-title text-4xl sm:text-6xl lg:text-7xl font-black uppercase text-[#1c1b1b] leading-[1.0] max-w-2xl tracking-tight">
          ENGINEERING <br />
          <span className="text-[#C75550]">TRUST</span> IN EVERY <br />
          ELASTOMER
        </h1>

        <p className="font-body text-sm sm:text-base text-[#4b5563] max-w-xl leading-relaxed mt-2">
          Bymer Elastomers is one of the leading rubber products manufacturing company, having two plants and working space of approx. 45000 sq ft. situated in industrial area of Ambad, Nashik.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
          <Link 
            href="/contact" 
            className="btn-black font-montserrat px-8 py-4 text-xs font-bold tracking-[0.15em] text-center flex items-center justify-center gap-2"
          >
            REQUEST A QUOTE <span className="font-sans text-sm">→</span>
          </Link>
          <Link 
            href="#capabilities" 
            className="btn-outline font-montserrat bg-white border-[#d1d5db] px-8 py-4 text-xs font-bold tracking-[0.15em] text-center flex items-center justify-center gap-2 text-[#1c1b1b]"
          >
            VIEW CAPABILITIES <span className="font-sans text-sm">→</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

// 2. CORE OPERATIONS METRICS SECTION
// 2. CORE OPERATIONS METRICS SECTION
function TopStatsBar() {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    async function loadStats() {
      const data = await fetchStatistics();
      const iconMap = {
        experience: "fa-solid fa-circle-check",
        clients: "fa-solid fa-globe",
        projects: "fa-solid fa-industry",
        satisfied: "fa-solid fa-award",
      };

      const mapped = data.map((item) => {
        const label = item.label.toLowerCase();
        let icon = "fa-solid fa-circle-check";
        if (label.includes("experience") || label.includes("years")) icon = iconMap.experience;
        else if (label.includes("global") || label.includes("client")) icon = iconMap.clients;
        else if (label.includes("project")) icon = iconMap.projects;
        else if (label.includes("satisfied") || label.includes("award")) icon = iconMap.satisfied;

        return {
          value: item.value,
          label: item.label.toUpperCase(),
          icon,
        };
      });

      setStats(mapped.length > 0 ? mapped : [
        { value: "30+", label: "YEARS EXPERIENCE", icon: "fa-solid fa-circle-check" },
        { value: "50+", label: "GLOBAL CLIENTS", icon: "fa-solid fa-globe" },
        { value: "1150+", label: "PROJECTS COMPLETED", icon: "fa-solid fa-industry" },
        { value: "150+", label: "SATISFIED CLIENTS", icon: "fa-solid fa-award" },
      ]);
    }
    loadStats();
  }, []);

  if (stats.length === 0) return null;

  return (
    <section className="w-full bg-[#0a0a0a] text-[#f5f5f5] py-12 border-b border-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-6">
          {stats.map((stat, idx) => (
            <div 
              key={stat.label} 
              className={`flex items-center gap-4 py-2 w-full justify-start pl-6 sm:pl-10 lg:pl-16 ${
                idx > 0 ? "lg:border-l lg:border-[#1f2937] lg:pl-16" : ""
              } ${
                idx === 1 || idx === 3 ? "sm:border-l sm:border-[#1f2937] sm:pl-10 lg:border-l lg:border-[#1f2937]" : ""
              } ${
                idx === 2 ? "sm:border-l-0 lg:border-l lg:border-[#1f2937]" : ""
              }`}
            >
              <div className="flex-shrink-0">
                <i className={`${stat.icon} text-3xl sm:text-4xl text-[#fbbd05]`} />
              </div>
              <div className="flex flex-col items-start leading-tight">
                <span className="font-title text-3xl sm:text-4xl font-black text-[#fbbd05] tracking-tight">
                  {stat.value}
                </span>
                <span className="font-montserrat text-[9px] sm:text-[10px] font-bold text-[#9ca3af] tracking-wider uppercase mt-0.5">
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

// 3. PRODUCTION CAPABILITIES SECTION
function Capabilities() {
  const cards = [
    {
      title: "MOLDED RUBBER",
      icon: "fa-solid fa-gears",
      bullets: [
        "Custom Molded Components",
        "Rubber To Metal Bonded",
        "Custom Tooling Design",
        "Complex Geometry Solutions"
      ]
    },
    {
      title: "COMPOUNDS & HOSES",
      icon: "fa-solid fa-layer-group",
      bullets: [
        "High End Rubber Compounds",
        "Low Pressure Rubber Hoses",
        "Automotive Applications",
        "Non-automotive Industries"
      ]
    },
    {
      title: "EXTRUDED PROFILES",
      icon: "fa-solid fa-ruler-combined",
      bullets: [
        "Custom Seal Profiles",
        "Continuous Vulcanization",
        "Tight Tolerance Controls",
        "Tailored Specifications"
      ]
    }
  ];

  return (
    <section id="capabilities" className="w-full py-24 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Capabilities Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 border-b border-[#e5e7eb] pb-8">
          <div className="flex flex-col items-start">
            <span className="font-montserrat text-xs sm:text-sm font-bold text-[#C75550] uppercase tracking-[0.2em] mb-2">
              OUR
            </span>
            <h2 className="font-title text-4xl sm:text-5xl font-black text-[#1c1b1b] uppercase tracking-tight">
              CAPABILITIES
            </h2>
          </div>
          <div className="flex flex-col items-start lg:items-end gap-3 max-w-xl text-left lg:text-right">
            <p className="font-body text-sm sm:text-base text-[#4b5563] leading-relaxed">
              We manufacture High end Rubber Compounds, Molded Rubber and Rubber To Metal Bonded Products, Extruded Rubber Profiles and Low pressure Rubber Hoses.
            </p>
            <Link 
              href="/products" 
              className="font-montserrat text-[11px] font-bold text-[#C75550] hover:text-[#1c1b1b] transition-colors tracking-[0.15em] flex items-center gap-1.5 uppercase mt-1"
            >
              VIEW ALL CAPABILITIES <span className="font-sans text-sm">→</span>
            </Link>
          </div>
        </div>

        {/* Capabilities Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <div 
              key={idx}
              className="group bg-white border border-[#e5e7eb] transition-all duration-300 p-8 sm:p-10 flex flex-col justify-between items-start gap-8 min-h-[380px]"
            >
              <div className="flex flex-col gap-8 w-full items-start">
                
                {/* Header: Icon + Title side by side */}
                <div className="flex items-center gap-4 w-full">
                  {/* Icon Container */}
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-[#f5f5f5] text-[#1c1b1b] transition-colors duration-200 group-hover:bg-[#C75550] group-hover:text-white">
                    <i className={`${card.icon} text-lg`} />
                  </div>

                  {/* Card Title */}
                  <h3 className="font-montserrat text-lg sm:text-xl font-bold text-[#1c1b1b] uppercase tracking-wide">
                    {card.title}
                  </h3>
                </div>

                {/* Bullets List */}
                <ul className="flex flex-col gap-3.5 font-body text-sm text-[#4b5563] leading-relaxed w-full">
                  {card.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex gap-1 items-start text-left">
                      <span className="text-[#9ca3af] group-hover:text-[#C75550] transition-colors duration-200 font-bold select-none mr-2 font-mono">
                        &gt;
                      </span>
                      <span className="font-medium text-[#4b5563]">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Link */}
              <Link 
                href="/products"
                className="font-montserrat text-[11px] font-bold text-[#C75550] hover:text-[#1c1b1b] transition-colors tracking-[0.15em] flex items-center gap-1.5 uppercase mt-4"
              >
                DETAILS <span className="font-sans text-sm">→</span>
              </Link>
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
            YOUR PARTNER <br />
            FOR QUALITY <br />
            RUBBER <br />
            PRODUCTS
          </h2>

          <p className="font-montserrat text-xs sm:text-sm font-bold text-[#fbbd05] uppercase tracking-wider leading-relaxed max-w-xl">
            DELIVERING RELIABLE, COST-EFFECTIVE QUALITY RUBBER PRODUCTS ACROSS INDUSTRIES.
          </p>
          
          <div className="flex flex-col gap-4 font-body text-xs sm:text-sm text-[#9ca3af] leading-relaxed max-w-xl">
            <p>
              Bymer Elastomers is one of the leading rubber products manufacturing company, having two plants and working space of approx. 45000 sq ft. situated in industrial area of Ambad, Nashik, Maharashtra, India.
            </p>
            <p>
              Bymer Elastomers is an IATF 16949:2016, ISO 9001:2015 and ISO 14001:2015 certified company.
            </p>
            <p>
              We manufacture High end Rubber Compounds, Molded Rubber and Rubber To Metal Bonded Products, Extruded Rubber Profiles and Low pressure Rubber Hoses, catering to Automotive and Non automotive Industries.
            </p>
            <p>
              We supply to around 50 plus customers in India and Overseas.
            </p>
          </div>

          <div className="border-l-4 border-white bg-[#C75550] p-6 max-w-xl select-none w-full">
            <p className="font-montserrat text-xs sm:text-sm font-bold text-white uppercase tracking-wider leading-relaxed">
              WE ARE COMMITTED TO SUPPLY QUALITY RUBBER PRODUCTS TO OUR CUSTOMERS.
            </p>
          </div>
        </div>

        {/* Right Column: Image (6 cols) */}
        <div className="lg:col-span-6 flex justify-center items-center py-4 w-full">
          <div className="relative w-full aspect-[3/4] max-w-[500px] border border-[#C75550] p-4 bg-transparent">
            <div className="relative w-full h-full min-h-[350px]">
              <Image
                src="/images/HomeCard.png"
                alt="Bymer Elastomers Production"
                fill
                sizes="(max-w-md) 100vw, 500px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

// 4.5. COMMITMENT BANNER
function CommitmentBanner() {
  return (
    <section className="w-full bg-[#1c1b1b] text-white py-20 flex flex-col items-center justify-center text-center px-4 select-none">
      <div className="w-10 h-10 bg-white flex items-center justify-center border-r-[3px] border-b-[3px] border-[#fbbd05]">
        <i className="fa-solid fa-play text-[#1c1b1b] text-sm ml-0.5"></i>
      </div>
      <h2 className="font-title text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-wide leading-tight max-w-4xl mt-6">
        WE ARE COMMITTED TO SUPPLY <br />
        <span className="text-[#fbbd05]">QUALITY RUBBER PRODUCTS</span> <br />
        TO OUR CUSTOMERS.
      </h2>
    </section>
  );
}

// 4.6. JOURNEY TO EXCELLENCE SECTION
function JourneySection() {
  const journeyItems = [
    {
      title: "ESTABLISHED LEGACY",
      description: "Founded in 1992 as Blaze Enterprises, evolving into Bymer Elastomers with over 30 years of industry expertise."
    },
    {
      title: "EXPANDING CLIENT REACH",
      description: "Proudly serving 50+ clients across India and overseas, delivering reliable rubber solutions."
    },
    {
      title: "CUSTOMER-CENTRIC PRODUCTION",
      description: "Specializing in custom made rubber products tailored to meet unique client specifications and needs."
    }
  ];

  const stats = [
    { number: "1150+", label: "PROJECTS COMPLETED", icon: "fa-solid fa-chart-line" },
    { number: "760+", label: "PROJECTS RUNNING", icon: "fa-solid fa-gears" },
    { number: "70+", label: "INDUSTRIES SERVED", icon: "fa-solid fa-industry" },
    { number: "150+", label: "SATISFIED CLIENTS", icon: "fa-solid fa-face-smile" }
  ];

  return (
    <section className="w-full py-24 bg-white border-t border-b border-[#e5e7eb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Column: Timeline */}
        <div className="lg:col-span-6 flex flex-col items-start justify-center">
          <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#1c1b1b] mb-12">
            OUR JOURNEY TO <br /> EXCELLENCE
          </h2>

          <div className="flex flex-col w-full">
            {journeyItems.map((item, idx) => (
              <div key={idx} className="flex gap-6 relative pb-10 last:pb-0">
                {/* Vertical line connecting bullets */}
                {idx < journeyItems.length - 1 && (
                  <div className="absolute left-[9px] top-[26px] bottom-0 w-0.5 bg-gray-200" />
                )}
                
                {/* Timeline Bullet */}
                <div className="relative z-10 flex-shrink-0 w-5 h-5 rounded-full bg-[#C75550] border-4 border-white shadow-sm mt-1" />
                
                {/* Content */}
                <div className="flex flex-col gap-1 items-start text-left">
                  <h3 className="font-montserrat text-sm sm:text-base font-bold text-[#1c1b1b] uppercase tracking-wider">
                    {item.title}
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-[#4b5563] leading-relaxed max-w-md">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Grid Cards */}
        <div className="lg:col-span-6 w-full">
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, idx) => (
              <div 
                key={idx}
                className="bg-white border border-[#e5e7eb] p-6 sm:p-8 flex flex-col items-center justify-center text-center gap-3 hover:shadow-md transition-shadow duration-200"
              >
                <i className={`${stat.icon} text-2xl text-[#C75550]`} />
                <span className="font-title text-2xl sm:text-3xl font-black text-[#1c1b1b]">
                  {stat.number}
                </span>
                <span className="font-montserrat text-[9px] sm:text-[10px] font-bold text-[#6b7280] tracking-wider uppercase leading-snug">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

// 5. B2B CONSULTATION RFP ENGINE
function QuoteSection() {
  const [formState, setFormState] = useState({ 
    companyName: "", 
    fullName: "", 
    email: "", 
    phone: "", 
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await submitContactInquiry({
        name: formState.fullName,
        email: formState.email,
        phone: formState.phone,
        subject: `Request a Free Quote - ${formState.companyName}`,
        message: formState.message,
        source_page: "home-quote",
      });
      setSubmitted(true);
      setFormState({ 
        companyName: "", 
        fullName: "", 
        email: "", 
        phone: "", 
        message: ""
      });
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (err) {
      console.error(err);
      setError("Failed to submit request. Please verify connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full bg-white border-t border-b border-[#e5e7eb]">
      <div className="w-full grid grid-cols-1 lg:grid-cols-12">
        
        {/* Left Column: Callout (5 cols) */}
        <div className="lg:col-span-5 bg-[#f9fafb] px-6 sm:px-10 lg:px-16 py-16 lg:py-24 flex flex-col justify-between items-start gap-12 lg:border-r lg:border-[#e5e7eb]">
          <div className="flex flex-col gap-6 items-start">
            <span className="font-montserrat text-xs sm:text-sm font-bold text-[#C75550] uppercase tracking-[0.2em] mb-1">
              GET A FREE QUOTE
            </span>
            <h2 className="font-title text-4xl sm:text-5xl font-black uppercase text-[#1c1b1b] leading-[1.1] tracking-tight">
              LET'S BUILD YOUR <br /> FUTURE TODAY
            </h2>
            <p className="font-body text-sm sm:text-base text-[#4b5563] leading-relaxed max-w-md mt-2 text-left">
              Partner with an engineering powerhouse. From prototype to mass production, we ensure your components meet the highest industrial standards globally.
            </p>
          </div>

          <div className="flex flex-col gap-4 text-left w-full">
            <span className="font-montserrat text-xs font-bold text-[#1c1b1b] tracking-wider uppercase">
              GET IN TOUCH, & WE'LL RESPOND SOON!
            </span>
            <Link 
              href="/contact" 
              className="btn-black font-montserrat py-4 px-8 text-xs font-bold tracking-[0.15em] text-center uppercase w-full sm:w-auto self-start"
            >
              CONTACT NOW
            </Link>
          </div>
        </div>

        {/* Right Column: Quote Form (7 cols) */}
        <div className="lg:col-span-7 bg-white px-6 sm:px-10 lg:px-16 py-16 lg:py-24 w-full flex flex-col justify-center">
          <h3 className="font-title text-2xl font-black text-[#1c1b1b] uppercase tracking-wide mb-6 border-b border-[#e5e7eb] pb-4 text-left">
            REQUEST A FREE QUOTE
          </h3>

          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            {submitted ? (
              <div className="bg-[#C75550] text-white p-6 font-body font-bold text-center uppercase tracking-wider animate-pulse">
                ✓ Quote request sent successfully! We will contact you soon.
              </div>
            ) : (
              <>
                {error && (
                  <div className="bg-red-600 text-white p-4 font-body text-xs font-bold text-center uppercase tracking-wider">
                    ⚠ {error}
                  </div>
                )}
                {/* Full Name & Company Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
                  <div className="flex flex-col gap-2 w-full text-left">
                    <label className="font-montserrat text-[10px] sm:text-xs text-[#64748B] font-bold tracking-widest uppercase">NAME</label>
                    <input 
                      type="text" 
                      placeholder="JOHN DOE" 
                      required
                      value={formState.fullName}
                      onChange={(e) => setFormState({ ...formState, fullName: e.target.value })}
                      className="border-b border-gray-300 focus:border-[#C75550] bg-transparent outline-none py-2 w-full font-body text-sm text-[#1c1b1b] placeholder-gray-400/70 transition-colors duration-150 rounded-none"
                    />
                  </div>
                  
                  <div className="flex flex-col gap-2 w-full text-left">
                    <label className="font-montserrat text-[10px] sm:text-xs text-[#64748B] font-bold tracking-widest uppercase">COMPANY</label>
                    <input 
                      type="text" 
                      placeholder="ENGINEERING COMPANY" 
                      required
                      value={formState.companyName}
                      onChange={(e) => setFormState({ ...formState, companyName: e.target.value })}
                      className="border-b border-gray-300 focus:border-[#C75550] bg-transparent outline-none py-2 w-full font-body text-sm text-[#1c1b1b] placeholder-gray-400/70 transition-colors duration-150 rounded-none"
                    />
                  </div>
                </div>

                {/* Email Address & Phone Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
                  <div className="flex flex-col gap-2 w-full text-left">
                    <label className="font-montserrat text-[10px] sm:text-xs text-[#64748B] font-bold tracking-widest uppercase">EMAIL ADDRESS</label>
                    <input 
                      type="email" 
                      placeholder="email@example.com" 
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="border-b border-gray-300 focus:border-[#C75550] bg-transparent outline-none py-2 w-full font-body text-sm text-[#1c1b1b] placeholder-gray-400/70 transition-colors duration-150 rounded-none"
                    />
                  </div>
                  
                  <div className="flex flex-col gap-2 w-full text-left">
                    <label className="font-montserrat text-[10px] sm:text-xs text-[#64748B] font-bold tracking-widest uppercase">PHONE NUMBER</label>
                    <input 
                      type="text" 
                      placeholder="+91..." 
                      required
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="border-b border-gray-300 focus:border-[#C75550] bg-transparent outline-none py-2 w-full font-body text-sm text-[#1c1b1b] placeholder-gray-400/70 transition-colors duration-150 rounded-none"
                    />
                  </div>
                </div>

                {/* Project Description */}
                <div className="flex flex-col gap-2 w-full text-left">
                  <label className="font-montserrat text-[10px] sm:text-xs text-[#64748B] font-bold tracking-widest uppercase">PROJECT DESCRIPTION</label>
                  <input 
                    type="text" 
                    placeholder="Tell us about your requirements..." 
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="border-b border-gray-300 focus:border-[#C75550] bg-transparent outline-none py-2 w-full font-body text-sm text-[#1c1b1b] placeholder-gray-400/70 transition-colors duration-150 rounded-none"
                  />
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  disabled={loading}
                  className="bg-[#C75550] hover:bg-[#a53b36] text-white font-montserrat px-10 py-4 text-xs font-bold tracking-[0.15em] mt-4 flex items-center justify-center gap-2 w-fit cursor-pointer transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "SUBMITTING..." : "START A PROJECT"} <span className="font-sans text-sm">→</span>
                </button>
              </>
            )}
          </form>
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
      if (data && data.length > 0) {
        setLogos(data.map((c) => ({ src: c.logo_url, alt: c.name })));
      } else {
        setLogos([
          { src: "/images/L14 2.png", alt: "Liljas Plastic" },
          { src: "/images/L15 2.png", alt: "HL Automotive Suzhou" },
          { src: "/images/L16 2.png", alt: "Hindustan Hardy Ltd" },
          { src: "/images/1728122557.png", alt: "Air Force" },
          { src: "/images/L18 2.png", alt: "MSL" },
          { src: "/images/L19 2.png", alt: "Innova Rubbers" }
        ]);
      }
    }
    loadClients();
  }, []);

  if (logos.length === 0) return null;

  return (
    <section className="w-full bg-white border-y border-black py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-8 md:gap-12">
          {logos.map((logo, index) => (
            <div 
              key={index} 
              className="h-12 w-28 sm:w-36 relative flex items-center justify-center opacity-95 hover:opacity-100 transition-opacity duration-200"
            >
              {logo.src ? (
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  sizes="(max-w-7xl) 144px"
                  className="object-contain"
                  priority
                />
              ) : (
                <span className="font-montserrat text-[10px] font-bold text-gray-400">{logo.alt}</span>
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
