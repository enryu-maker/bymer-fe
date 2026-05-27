import Image from "next/image";
import Link from "next/link";
import { FaqAccordion } from "./FaqAccordion";
import { QuoteForm } from "./QuoteForm";
import { ContactBanner } from "../layout/ContactBanner";

// 1. HERO SECTION
function Hero() {
  return (
    <header className="relative w-full border-b-2 border-[#1C1B1B] overflow-hidden bg-[#FCF9F8]">
      
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/backgroundHome.png" 
          alt="Bymer Elastomers Factory Facility" 
          fill
          sizes="100vw"
          className="object-cover opacity-35 filter grayscale"
          priority
        />
        {/* Heavy grid overlay for industrial theme */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.03]" 
          style={{
            backgroundImage: "linear-gradient(#1C1B1B 2px, transparent 2px), linear-gradient(90deg, #1C1B1B 2px, transparent 2px)",
            backgroundSize: "40px 40px"
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-40 sm:pt-36 sm:pb-52 lg:pt-20 lg:pb-60 relative z-10 flex flex-col items-start gap-8">
        
        <span className="font-subtitle text-xs sm:text-sm font-bold tracking-[0.25em] text-[#B81312] uppercase leading-none bg-[#FCF9F8] px-3 py-1.5 border border-[#1C1B1B] shadow-[2px_2px_0px_0px_#1C1B1B]">
          WELCOME TO FACTORY & INDUSTRY BUSINESS
        </span>

        <h1 className="font-title text-5xl sm:text-7xl lg:text-8xl font-black uppercase text-[#1C1B1B] leading-[0.95] max-w-4xl tracking-tighter">
          WE BUILD <br />
          EVERYTHING <br />
          <span className="text-[#B81312] relative inline-block">
            WITH PASSION
            <span className="absolute left-0 bottom-1 w-full h-[6px] bg-[#FDC003] -z-10" />
          </span>
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
          <Link 
            href="/contact" 
            className="btn-brutal-black px-8 py-4 text-base tracking-widest text-center"
          >
            REQUEST A QUOTE
          </Link>
          <Link 
            href="/#capabilities" 
            className="btn-brutal-outline bg-[#FCF9F8] px-8 py-4 text-base tracking-widest text-center"
          >
            OUR CAPABILITIES
          </Link>
        </div>

      </div>
    </header>
  );
}

// 2. FEATURE CARDS
function FeatureCards() {
  return (
    <section id="capabilities" className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 sm:-mt-24 lg:-mt-28">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Card 1 */}
        <div className="bg-[#FCF9F8] border-2 border-[#1C1B1B] p-8 flex flex-col justify-between items-start gap-8 shadow-[4px_4px_0px_0px_#1C1B1B] hover:translate-y-[-4px] hover:shadow-[6px_6px_0px_0px_#1C1B1B] transition-all duration-200">
          <div className="flex flex-col gap-5 items-start">
            <div className="p-3 bg-[#FCF9F8] border border-[#1C1B1B] text-[#1C1B1B] flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012-2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="font-title text-xl font-bold tracking-wider text-[#1C1B1B] uppercase leading-tight">
              INNOVATIVE <br />TECHNOLOGY
            </h3>
            <p className="font-body text-sm text-[#1C1B1B]/80 leading-relaxed">
              Continuous upgrades to our manufacturing facilities ensure maximum precision.
            </p>
          </div>
          <Link href="/about" className="font-subtitle text-xs font-bold text-[#1C1B1B] hover:text-[#B81312] transition-colors tracking-widest inline-flex items-center gap-1.5 mt-2">
            READ MORE <span className="text-sm">→</span>
          </Link>
        </div>

        {/* Card 2 */}
        <div className="bg-[#FCF9F8] border-2 border-[#1C1B1B] p-8 flex flex-col justify-between items-start gap-8 shadow-[4px_4px_0px_0px_#1C1B1B] hover:translate-y-[-4px] hover:shadow-[6px_6px_0px_0px_#1C1B1B] transition-all duration-200">
          <div className="flex flex-col gap-5 items-start">
            <div className="p-3 bg-[#FCF9F8] border border-[#1C1B1B] text-[#1C1B1B] flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="font-title text-xl font-bold tracking-wider text-[#1C1B1B] uppercase leading-tight">
              EXPERIENCED <br />TEAM
            </h3>
            <p className="font-body text-sm text-[#1C1B1B]/80 leading-relaxed">
              Our engineers have experience optimizing elastomer solutions.
            </p>
          </div>
          <Link href="/about" className="font-subtitle text-xs font-bold text-[#1C1B1B] hover:text-[#B81312] transition-colors tracking-widest inline-flex items-center gap-1.5 mt-2">
            READ MORE <span className="text-sm">→</span>
          </Link>
        </div>

        {/* Card 3 */}
        <div className="bg-[#FCF9F8] border-2 border-[#1C1B1B] p-8 flex flex-col justify-between items-start gap-8 shadow-[4px_4px_0px_0px_#1C1B1B] hover:translate-y-[-4px] hover:shadow-[6px_6px_0px_0px_#1C1B1B] transition-all duration-200">
          <div className="flex flex-col gap-5 items-start">
            <div className="p-3 bg-[#FCF9F8] border border-[#1C1B1B] text-[#1C1B1B] flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <h3 className="font-title text-xl font-bold tracking-wider text-[#1C1B1B] uppercase leading-tight">
              CUSTOMER-CENTRIC <br />APPROACH
            </h3>
            <p className="font-body text-sm text-[#1C1B1B]/80 leading-relaxed">
              Reliable partnerships from initial design through to final deployment.
            </p>
          </div>
          <Link href="/about" className="font-subtitle text-xs font-bold text-[#1C1B1B] hover:text-[#B81312] transition-colors tracking-widest inline-flex items-center gap-1.5 mt-2">
            READ MORE <span className="text-sm">→</span>
          </Link>
        </div>

        {/* Card 4 */}
        <div className="bg-[#FCF9F8] border-2 border-[#1C1B1B] p-8 flex flex-col justify-between items-start gap-8 shadow-[4px_4px_0px_0px_#1C1B1B] hover:translate-y-[-4px] hover:shadow-[6px_6px_0px_0px_#1C1B1B] transition-all duration-200">
          <div className="flex flex-col gap-5 items-start">
            <div className="p-3 bg-[#FCF9F8] border border-[#1C1B1B] text-[#1C1B1B] flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="font-title text-xl font-bold tracking-wider text-[#1C1B1B] uppercase leading-tight">
              IATF 16949:2016, ISO 9001:2015 AND ISO 14001:2015
            </h3>
            <p className="font-body text-sm text-[#1C1B1B]/80 leading-relaxed">
              Manufactured components complying to global quality standards.
            </p>
          </div>
          <Link href="/about" className="font-subtitle text-xs font-bold text-[#1C1B1B] hover:text-[#B81312] transition-colors tracking-widest inline-flex items-center gap-1.5 mt-2">
            READ MORE <span className="text-sm">→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}

// 3. ABOUT SECTION
function AboutSection() {
  return (
    <section className="w-full py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white border-4 border-[#1C1B1B] shadow-[8px_8px_0px_0px_#1C1B1B] overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          
          {/* Left Column: Image Container Box (Light Gray background bg-[#F0EDEC], Positioned first) */}
          <div className="bg-[#F0EDEC] p-8 sm:p-10 lg:p-12 flex items-center justify-center w-full">
            <div className="relative w-full max-w-sm aspect-[4/5] border-2 border-[#1C1B1B] bg-white shadow-[6px_6px_0px_0px_#1C1B1B] overflow-hidden">
              <Image
                src="/images/section2 homepage.png"
                alt="Bymer Elastomers Heavy Machinery"
                fill
                sizes="(max-w-md) 384px"
                className="object-cover filter grayscale"
              />
              {/* Rigid Brutalist Red Diagonal Corner Flag overlay on the Bottom-Left corner */}
              <div 
                className="absolute left-0 bottom-0 w-full h-[45%] bg-[#B81312] z-10 pointer-events-none"
                style={{
                  clipPath: "polygon(0 0, 100% 100%, 0 100%)"
                }}
              />
            </div>
          </div>

          {/* Right Column: Text Blocks (White background, Positioned second) */}
          <div className="bg-white p-8 sm:p-10 lg:p-12 flex flex-col gap-6 items-start justify-center w-full">
            <h2 className="font-title text-4xl sm:text-5xl font-bold tracking-tight text-[#1C1B1B] uppercase leading-none">
              YOUR PARTNER FOR <br />
              QUALITY RUBBER <br />
              PRODUCTS
            </h2>
            <span className="font-subtitle text-sm sm:text-base font-bold tracking-wider text-[#B81312] uppercase leading-snug">
              DELIVERING RELIABLE, COST-EFFECTIVE QUALITY RUBBER PRODUCTS ACROSS INDUSTRIES.
            </span>
            
            <div className="flex flex-col gap-4 font-body text-base text-[#1C1B1B]/80 leading-relaxed">
              <p>
                <span className="text-[#007EA7] font-semibold">Bymer Elastomers</span> is one of the leading rubber products manufacturing company, having two plants and working space of approx. 45000 sq.ft. situated in industrial area of Ambad, Nashik, Maharashtra, India.
              </p>
              <p>
                <span className="text-[#007EA7] font-semibold">Bymer Elastomers</span> is an IATF 16949:2016, ISO 9001:2015 and ISO 14001:2015 certified company.
              </p>
              <p>
                We manufacture High end Rubber Compounds, Molded Rubber and Rubber To Metal Bonded Products, Extruded Rubber Profiles and Low pressure Rubber Hoses, catering to Automotive and Non automotive Industries.
              </p>
              <p>
                We supply to around 50 plus customers (India and Overseas).
              </p>
              <p>
                <span className="text-[#007EA7] font-bold">We at Bymer Elastomers</span> <span className="font-bold text-[#1C1B1B]">are committed to supply Quality Rubber Products.</span>
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// 4. COMMITMENT BANNER
function CommitmentBanner() {
  return (
    <section className="w-full bg-[#1C1B1B] text-[#FCF9F8] py-20 relative overflow-hidden">
      
      {/* Top-Left Diagonal Yellow Triangle */}
      <div 
        className="absolute top-0 left-0 w-40 h-40 bg-[#FDC003] z-10 pointer-events-none" 
        style={{
          clipPath: "polygon(0 0, 100% 0, 0 100%)"
        }}
      />

      {/* Bottom-Right Diagonal Yellow Triangle */}
      <div 
        className="absolute bottom-0 right-0 w-40 h-40 bg-[#FDC003] z-10 pointer-events-none" 
        style={{
          clipPath: "polygon(100% 0, 100% 100%, 0 100%)"
        }}
      />

      {/* Background Subtle Tech Grid */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none" 
        style={{
          backgroundImage: "radial-gradient(#FCF9F8 1px, transparent 1px)",
          backgroundSize: "20px 20px"
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Play Accent Icon */}
        <div className="inline-flex items-center justify-center bg-[#1C1B1B] mb-8 group cursor-pointer transition-transform duration-200 hover:scale-105">
          <Image 
            src="/icons/play.svg" 
            alt="Play Icon" 
            width={56}  
            height={56}
            className="text-[#FDC003] fill-current transform translate-x-0.5 group-hover:text-[#B81312] transition-colors" />
        </div>

        {/* Commitment Statement */}
        <div className="flex flex-col gap-2">
          <span className="font-title text-4xl sm:text-6xl lg:text-7xl font-bold text-[#DCD9D9] uppercase ">
            WE ARE COMMITTED TO SUPPLY
          </span>
          <h2 className="font-title text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#FDC003] uppercase ">
            QUALITY RUBBER PRODUCTS
          </h2>
          <span className="font-title text-4xl sm:text-6xl lg:text-7xl font-bold text-[#DCD9D9] uppercase ">
            TO OUR CUSTOMERS.
          </span>
        </div>

      </div>

    </section>
  );
}

// 5. JOURNEY SECTION
function JourneySection() {
  return (
    <section className="w-full py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#FCF9F8] border-4 border-[#1C1B1B] p-8 sm:p-10 lg:p-12 shadow-[8px_8px_0px_0px_#1C1B1B]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Vertical Image Box (Positioned first) */}
          <div className="lg:col-span-5 relative w-full aspect-[4/5] max-w-md mx-auto border-4 border-[#1C1B1B]">
            <Image
              src="/images/section3 homepage.png"
              alt="Bymer Elastomers Rheometer Lab Equipment"
              fill
              sizes="(max-w-md) 100vw, 400px"
              className="object-cover filter grayscale"
            />
            {/* Boxed Icon at Bottom-Right */}
            <div className="absolute right-0 bottom-0 w-16 h-16 bg-[#B81312] border-l-2 border-t-2 border-[#1C1B1B] flex items-center justify-center text-white">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.122a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
          </div>

          {/* Right Text Block (Positioned second) */}
          <div className="lg:col-span-7 flex flex-col gap-6 items-start">
            <h2 className="font-title text-4xl sm:text-5xl font-bold tracking-tight text-[#1C1B1B] uppercase leading-none">
              OUR JOURNEY TO EXCELLENCE
            </h2>
            
            <div className="flex flex-col gap-6 w-full mt-4">
              
              {/* Step 1 */}
              <div className="bg-[#FCF9F8] border-2 border-[#1C1B1B] p-6 flex gap-5 items-start shadow-[3px_3px_0px_0px_#1C1B1B]">
                <div className="flex-shrink-0 w-8 h-8 bg-[#1C1B1B] text-[#FCF9F8] flex items-center justify-center font-subtitle font-bold text-sm">
                  ✓
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="font-title text-lg font-bold tracking-wider text-[#1C1B1B] uppercase leading-none">
                    ESTABLISHED LEGACY
                  </h4>
                  <p className="font-body text-sm text-[#1C1B1B]/80 leading-relaxed">
                    Founded in 1992 as Blaze Enterprises, evolving into Bymer Elastomers with over 30 years of industry expertise.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-[#FCF9F8] border-2 border-[#1C1B1B] p-6 flex gap-5 items-start shadow-[3px_3px_0px_0px_#1C1B1B]">
                <div className="flex-shrink-0 w-8 h-8 bg-[#1C1B1B] text-[#FCF9F8] flex items-center justify-center font-subtitle font-bold text-sm">
                  ✓
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="font-title text-lg font-bold tracking-wider text-[#1C1B1B] uppercase leading-none">
                    EXPANDING CLIENT REACH
                  </h4>
                  <p className="font-body text-sm text-[#1C1B1B]/80 leading-relaxed">
                    Proudly serving 50+ clients across India and overseas, delivering reliable rubber solutions.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-[#FCF9F8] border-2 border-[#1C1B1B] p-6 flex gap-5 items-start shadow-[3px_3px_0px_0px_#1C1B1B]">
                <div className="flex-shrink-0 w-8 h-8 bg-[#1C1B1B] text-[#FCF9F8] flex items-center justify-center font-subtitle font-bold text-sm">
                  ✓
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="font-title text-lg font-bold tracking-wider text-[#1C1B1B] uppercase leading-none">
                    CUSTOMER-CENTRIC PRODUCTION
                  </h4>
                  <p className="font-body text-sm text-[#1C1B1B]/80 leading-relaxed">
                    Specializing in custom-made rubber products tailored to meet unique client specifications and needs.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// 6. CLIENT LOGOS
function ClientLogos() {
  const logos = [
    { src: "/images/L14 2.png", alt: "Client Logo 1" },
    { src: "/images/L15 2.png", alt: "Client Logo 2" },
    { src: "/images/L16 2.png", alt: "Client Logo 3" },
    { src: "/images/L18 2.png", alt: "Client Logo 4" },
    { src: "/images/L19 2.png", alt: "Client Logo 5" },
  ];

  return (
    <section className="w-full bg-white border-y-2 border-[#1C1B1B] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-around gap-8 md:gap-12">
          {logos.map((logo, index) => (
            <div 
              key={index} 
              className="h-16 w-36 relative flex items-center justify-center opacity-90 hover:opacity-100 transition-opacity duration-200"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                sizes="(max-w-7xl) 144px"
                className="object-contain"
                priority={index < 3}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 7. STATS BANNER
function StatsBanner() {
  const stats = [
    { value: "1150+", label: "PROJECTS COMPLETED" },
    { value: "760+", label: "PROJECTS RUNNING" },
    { value: "70+", label: "INDUSTRIES SERVED" },
    { value: "150+", label: "SATISFIED CLIENTS" },
  ];

  return (
    <section className="w-full bg-[#1C1B1B] text-[#FCF9F8] border-y-2 border-[#1C1B1B]">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 relative">
          {stats.map((stat, index) => (
            <div 
              key={stat.label} 
              className={`flex flex-col items-center text-center justify-center relative ${
                index > 0 ? "md:border-l border-[#313030]" : ""
              }`}
            >
              <span className="font-title text-5xl sm:text-6xl font-bold text-[#FDC003] leading-none tracking-tight">
                {stat.value}
              </span>
              <span className="font-subtitle text-xs sm:text-sm font-bold text-[#DCD9D9] mt-3 tracking-widest leading-none">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 8. BUILD SECTION
function BuildSection() {
  return (
    <section className="w-full pb-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#FCF9F8] border-4 border-[#1C1B1B] p-8 sm:p-10 lg:p-12 shadow-[8px_8px_0px_0px_#1C1B1B]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Plant Image with EST Banner */}
          <div className="relative w-full aspect-[4/3] max-w-lg mx-auto border-4 border-[#1C1B1B]">
            <Image
              src="/images/section1.png"
              alt="Bymer Elastomers Corporate Plant Building"
              fill
              sizes="(max-w-lg) 100vw, 500px"
              className="object-cover filter grayscale"
            />
            {/* Absolute EST banner top-left */}
            <div className="absolute top-0 left-0 bg-[#B81312] text-[#FCF9F8] border-r-4 border-b-4 border-[#1C1B1B] py-3 px-5 text-center flex flex-col justify-center">
              <span className="font-subtitle text-xs font-bold leading-none">EST.</span>
              <span className="font-title text-2xl font-black tracking-tight leading-none mt-1">1998</span>
            </div>
          </div>

          {/* Right Info blocks */}
          <div className="flex flex-col gap-6 items-start">
            <h2 className="font-title text-4xl sm:text-5xl font-bold tracking-tight text-[#1C1B1B] uppercase leading-none">
              LET&apos;S BUILD YOUR FUTURE TODAY
            </h2>
            <p className="font-body text-base text-[#1C1B1B]/80 leading-relaxed">
              Partner with an engineering powerhouse. From prototype to mass production, we ensure your components meet the highest industrial standards globally.
            </p>
            <Link 
              href="/contact" 
              className="btn-brutal-yellow px-8 py-4 text-base tracking-widest mt-2 border-2 border-[#1C1B1B]"
            >
              START A PROJECT
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}

// MAIN HOME PAGE COMPONENT

// MAIN HOME PAGE COMPONENT
export function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FCF9F8]">
      {/* Hero */}
      <Hero />

      {/* Feature Cards */}
      <FeatureCards />

      {/* About Section */}
      <AboutSection />

      {/* Commitment Banner */}
      <CommitmentBanner />

      {/* Journey Section */}
      <JourneySection />

      {/* Client Logos */}
      <ClientLogos />

      {/* Spacing Gap */}
      <div className="w-full h-16 bg-transparent" />

      {/* Stats Counter */}
      <StatsBanner />

      {/* FAQ & Quote Section */}
      <section className="w-full py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FCF9F8] border-4 border-[#1C1B1B] shadow-[8px_8px_0px_0px_#1C1B1B] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <FaqAccordion />
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* Build Section */}
      <BuildSection />

      {/* Get In Touch Banner */}
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-0 mb-24 mt-12">
        <div className="border-y-2 border-[#1C1B1B] shadow-[8px_8px_0px_0px_#1C1B1B] overflow-hidden">
          <ContactBanner />
        </div>
      </div>
    </div>
  );
}
