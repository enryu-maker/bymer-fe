import Image from "next/image";
import Link from "next/link";
import { ContactBanner } from "../layout/ContactBanner";

// 1. ABOUT HERO
function AboutHero() {
  return (
    <header className="relative w-full border-b-2 border-[#1C1B1B] overflow-hidden bg-[#1C1B1B] py-20 sm:py-24 lg:py-28">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/backgroundAbout.png" 
          alt="About Bymer Elastomers" 
          fill
          sizes="100vw"
          className="object-cover opacity-40 filter grayscale"
          priority
        />
      </div>

      {/* Banner Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center gap-2.5">
        <h1 
          className="font-title text-5xl sm:text-7xl font-black uppercase text-[#FCF9F8] tracking-tight relative inline-block"
          style={{
            textShadow: "4px 4px 0px #1C1B1B"
          }}
        >
          ABOUT US
        </h1>
        <div className="w-24 h-[5px] bg-[#B81312]" />
      </div>
    </header>
  );
}

// 2. ABOUT PARTNER
function AboutPartner() {
  return (
    <section className="w-full py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white border-4 border-[#1C1B1B] shadow-[8px_8px_0px_0px_#1C1B1B] overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          
          {/* Left Column: Text Blocks (White background) */}
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

          {/* Right Column: Image Container Box (Light Gray background bg-[#F0EDEC]) */}
          <div className="bg-[#F0EDEC] p-8 sm:p-10 lg:p-12 flex items-center justify-center w-full">
            <div className="relative w-full max-w-sm aspect-[4/5] border-2 border-[#1C1B1B] bg-white shadow-[6px_6px_0px_0px_#1C1B1B] overflow-hidden">
              <Image
                src="/images/section2 homepage.png"
                alt="Bymer Elastomers Machinery"
                fill
                sizes="(max-w-md) 384px"
                className="object-cover filter grayscale"
              />
              {/* Rigid Brutalist Red Diagonal Corner Flag overlay on the Bottom-Left corner */}
              <div 
                className="absolute left-0 bottom-0 w-[75%] h-[40%] bg-[#B81312] z-10 pointer-events-none"
                style={{
                  clipPath: "polygon(0 0, 100% 100%, 0 100%)"
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// 3. MISSION & VISION
function MissionVision() {
  return (
    <section className="w-full py-24 bg-[#FCF9F8] border-y-2 border-[#1C1B1B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Title & Vision text with left vertical border */}
          <div className="flex flex-col gap-10 items-start w-full">
            
            {/* Stacked Brutalist Heading */}
            <div className="flex flex-col">
              <span className="font-title text-5xl sm:text-6xl font-black uppercase text-[#1C1B1B] leading-none">
                OUR
              </span>
              <span className="font-title text-6xl sm:text-7xl font-black uppercase text-[#007EA7] leading-none my-1.5 tracking-tight">
                MISSION
              </span>
              <span className="font-title text-5xl sm:text-6xl font-black uppercase text-[#1C1B1B] leading-none">
                VISION
              </span>
            </div>

            {/* Vision Text Block with Left Vertical Line Indicator */}
            <div className="flex flex-col gap-6 font-body text-base text-[#1C1B1B] leading-relaxed border-l-[3px] border-[#1C1B1B] pl-6 w-full text-left">
              <p>
                <span className="text-[#B81312] font-semibold">Our Vision</span> is to be a world-class Rubber Products manufacturing company , recognized for our excellence in quality, innovation, sustainability, and committed to 100% customer satisfaction.
              </p>
              <p>
                We aim to set new industry standards while fostering a safe and dynamic work environment, ensuring long-term success for our customers, employees, and partners.
              </p>
            </div>

          </div>

          {/* Right Column: Signboard Image & Mission text with right vertical border */}
          <div className="flex flex-col gap-10 items-end w-full">
            
            {/* Plant Image Sign (Right-aligned at the top-right in column) */}
            <div className="relative w-full max-w-[450px] aspect-[16/9] border-2 border-[#1C1B1B] shadow-[8px_8px_0px_0px_#1C1B1B]">
              <Image
                src="/images/sectio2 aboutpage.png"
                alt="Bymer Elastomers Plant Signboard"
                fill
                sizes="(max-w-lg) 450px"
                className="object-cover filter grayscale"
              />
            </div>

            {/* Mission Text Block with Right Vertical Line Indicator */}
            <div className="flex flex-col gap-6 font-body text-base text-[#1C1B1B] leading-relaxed border-r-[3px] border-[#1C1B1B] pr-6 w-full text-left">
              <p>
                <span className="text-[#B81312] font-semibold">Our Mission</span> at Bymer Elastomers is to deliver high-quality, innovative rubber solutions that exceed customer expectations. We are committed to continuous improvement, customer satisfaction, and continuous improvement in technology to provide reliable and cost-effective rubber products
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

// 4. STATS COUNTER
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

// 5. PILLARS OF BYMER ELASTOMERS
function PillarsSection() {
  return (
    <section className="w-full py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#FCF9F8]">
      
      {/* Leadership Header */}
      <div className="text-center mb-16">
        <h2 className="font-title text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-none text-[#1C1B1B]">
          PILLARS OF <br />
          <span className="text-[#B81312]">BYMER</span> <br />
          ELASTOMERS
        </h2>
      </div>

      {/* Staggered Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 max-w-4xl mx-auto items-start mt-12">
        
        {/* Pillar 1: Yezdi Patel */}
        <div className="flex flex-col items-start gap-5">
          <div className="relative w-full max-w-[340px] aspect-[4/5] border-2 border-[#1C1B1B] bg-white shadow-[8px_8px_0px_0px_#1C1B1B]">
            <Image
              src="/images/Yezdi Patel.png"
              alt="YEZDI PATEL"
              fill
              sizes="(max-w-md) 340px"
              className="object-cover object-top filter grayscale"
              priority
            />
          </div>
          
          <div className="mt-2 flex flex-col gap-1">
            <h3 className="font-title text-3xl font-black tracking-tight text-[#1C1B1B] uppercase leading-none">
              YEZDI PATEL
            </h3>
            <span className="font-subtitle text-xs font-bold text-[#B81312] tracking-widest uppercase">
              PARTNER/ CEO
            </span>
          </div>

          <p className="font-body text-sm text-[#1C1B1B] leading-relaxed max-w-sm mt-1">
            Our CEO, Mr. Yezdi Patel is a qualified rubber technologist from Mumbai University and degree from Plastics and Rubber Institute, London. He has over 60 plus years of experience in the manufacturing of rubber products. All development activities are initiated and overseen by him.
          </p>

          <div className="w-full max-w-sm border-t border-[#1C1B1B] my-2" />

          <span className="font-title text-xl font-bold tracking-wider text-[#1C1B1B] uppercase leading-tight max-w-sm">
            DEDICATED TO FLAWLESS <br />
            PRODUCTION AND RELIABLE <br />
            PERFORMANCE
          </span>
        </div>

        {/* Pillar 2: Ruzbeh Patel */}
        <div className="flex flex-col items-start gap-5 md:mt-40">
          <div className="relative w-full max-w-[340px] aspect-[4/5] border-2 border-[#1C1B1B] bg-white shadow-[8px_8px_0px_0px_#1C1B1B]">
            <Image
              src="/images/Ruzbeh Patel.png"
              alt="RUZBEH PATEL"
              fill
              sizes="(max-w-md) 340px"
              className="object-cover object-top filter grayscale"
              priority
            />
          </div>
          
          <div className="mt-2 flex flex-col gap-1">
            <h3 className="font-title text-3xl font-black tracking-tight text-[#1C1B1B] uppercase leading-none">
              RUZBEH PATEL
            </h3>
            <span className="font-subtitle text-xs font-bold text-[#B81312] tracking-widest uppercase">
              PARTNER/ CFO
            </span>
          </div>

          <p className="font-body text-sm text-[#1C1B1B] leading-relaxed max-w-sm mt-1">
            Our CFO Mr. Ruzbeh Patel, is a Graduate in Science from Pune University. He has around 40 plus years of Experience in the Manufacturing of Rubber Products. All new development activities and marketing is overseen by him.
          </p>
        </div>

      </div>
    </section>
  );
}

// 6. COMMITMENT BANNER
function CommitmentBanner() {
  return (
    <section className="w-full bg-[#1C1B1B] text-[#FCF9F8] py-20 relative overflow-hidden">
      <div 
        className="absolute top-0 left-0 w-40 h-40 bg-[#FDC003] z-10 pointer-events-none" 
        style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
      />
      <div 
        className="absolute bottom-0 right-0 w-40 h-40 bg-[#FDC003] z-10 pointer-events-none" 
        style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}
      />
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none" 
        style={{
          backgroundImage: "radial-gradient(#FCF9F8 1px, transparent 1px)",
          backgroundSize: "20px 20px"
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center justify-center bg-[#1C1B1B] mb-8 group cursor-pointer transition-transform duration-200 hover:scale-105">
          <Image 
            src="/icons/play.svg" 
            alt="Play Icon" 
            width={60}  
            height={60}
            style={{ width: "auto", height: "auto" }}
            className="text-[#FDC003] fill-current transform translate-x-0.5 group-hover:text-[#B81312] transition-colors" />
        </div>

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

// 7. CLIENT LOGOS
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

// MAIN ABOUT PAGE COMPONENT

// MAIN ABOUT PAGE COMPONENT
export function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FCF9F8]">
      {/* About Hero */}
      <AboutHero />

      {/* About Partner */}
      <AboutPartner />

      {/* Mission & Vision */}
      <MissionVision />

      {/* Stats Counter */}
      <StatsBanner />

      {/* Pillars Section */}
      <PillarsSection />

      {/* Commitment Banner */}
      <CommitmentBanner />

      {/* Spacing Container */}
      <div className="w-full h-12 bg-transparent" />

      {/* Client Logos */}
      <ClientLogos />

      {/* Get In Touch Banner Card */}
      <div className="w-full mx-auto px-4 sm:px-0 lg:px-0 mb-24 mt-16">
        <div className="border-y-2 border-[#1C1B1B] shadow-[8px_8px_0px_0px_#1C1B1B] overflow-hidden">
          <ContactBanner />
        </div>
      </div>
    </div>
  );
}
