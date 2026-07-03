import Image from "next/image";
import Link from "next/link";
import { OrganizationChartSection } from "./OrganizationChartSection";

// 1. ABOUT HERO
function AboutHero() {
  return (
    <header className="relative w-full border-b border-[#e5e7eb] overflow-hidden bg-[#0a0a0a] min-h-[400px] sm:min-h-[450px] flex items-center">
      {/* Background Image Container */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[58%] z-0">
        <Image
          src="/images/backgroundAbout.png"
          alt="Precision-engineered elastomer components and manufacturing"
          fill
          sizes="(max-width: 1024px) 100vw, 58vw"
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 border-l-4 border-[#C75550]/80 pointer-events-none" />
      </div>

      {/* Linear Gradient Overlay */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, #0a0a0a 0%, #0a0a0a 38%, rgba(10,10,10,0.92) 52%, rgba(10,10,10,0.55) 68%, rgba(10,10,10,0.15) 85%, rgba(10,10,10,0) 100%)",
        }}
      />

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-20 w-full flex flex-col items-start gap-4">
        <span className="font-montserrat text-xs sm:text-sm font-bold text-[#C75550] uppercase tracking-[0.2em]">
          ABOUT US
        </span>

        <h1 className="font-title text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-white leading-[1.1] max-w-3xl tracking-tight">
          Precision-Engineered Elastomer Solutions
        </h1>

        <p className="font-montserrat text-xs sm:text-sm font-bold text-[#fbbd05] uppercase tracking-[0.15em] max-w-2xl leading-relaxed">
          Certified rubber components, custom compounds & manufacturing solutions for OEMs and
          industrial applications
        </p>

        <p className="font-body text-sm sm:text-base text-[#9ca3af] max-w-2xl leading-relaxed mt-1">
          Delivering precision elastomer solutions through decades of manufacturing expertise,
          certified quality, and engineering-driven innovation.
        </p>
      </div>
    </header>
  );
}

// 2. WHO WE ARE
function WhoWeAre() {
  return (
    <section className="w-full py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Title Block (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <span className="font-montserrat text-xs sm:text-sm font-bold text-[#C75550] uppercase tracking-[0.2em] mb-2">
              CORPORATE PROFILE
            </span>
            <h2 className="font-title text-4xl sm:text-5xl lg:text-6xl font-black text-[#1c1b1b] uppercase tracking-tight leading-[1.0]">
              WHO WE ARE
            </h2>
            <div className="w-16 h-[4px] bg-[#fbbd05] mt-4" />
          </div>

          {/* Right Column: Paragraphs & Certificates (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <p className="font-body text-base sm:text-lg font-semibold text-[#1c1b1b] leading-relaxed mb-6">
            Certified Rubber Components, Custom Compounds & Manufacturing Solutions for OEMs and Industrial Applications.
            </p>
            
            <p className="font-body text-sm sm:text-base text-[#4b5563] leading-relaxed mb-6">
            Bymer Elastomers is a certified elastomer manufacturer specializing in custom rubber components, rubber-to-metal bonded products, extruded rubber profiles, industrial hoses, and custom rubber compound formulations. We serve OEMs, automotive manufacturers, industrial equipment companies, and engineering organizations in domestic and international markets.
            </p>

            <p className="font-body text-sm sm:text-base text-[#4b5563] leading-relaxed mb-10">
            We operate two manufacturing facilities in Nashik, Maharashtra—with a combined area of 45,000 sq. ft.—housing component manufacturing and in-house compound development under a single certified production system. This integration gives us direct control over material formulation, process execution, and quality verification at every stage of production.
            </p>

            {/* Certification Badges Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
              {/* Badge 1 */}
              <div className="flex items-center gap-3 bg-[#f9fafb] p-4 border-l-[3px] border-[#C75550]">
                <i className="fa-solid fa-certificate text-[#C75550] text-lg flex-shrink-0" />
                <span className="font-montserrat text-[11px] font-bold text-[#1c1b1b] tracking-wider uppercase">
                  IATF 16949:2016
                </span>
              </div>

              {/* Badge 2 */}
              <div className="flex items-center gap-3 bg-[#f9fafb] p-4 border-l-[3px] border-[#1c1b1b]">
                <i className="fa-solid fa-shield-halved text-[#1c1b1b] text-lg flex-shrink-0" />
                <span className="font-montserrat text-[11px] font-bold text-[#1c1b1b] tracking-wider uppercase">
                  ISO 9001:2015
                </span>
              </div>

              {/* Badge 3 */}
              <div className="flex items-center gap-3 bg-[#f9fafb] p-4 border-l-[3px] border-[#1c1b1b]">
                <i className="fa-solid fa-leaf text-[#2e7d32] text-lg flex-shrink-0" />
                <span className="font-montserrat text-[11px] font-bold text-[#1c1b1b] tracking-wider uppercase">
                  ISO 14001:2015
                </span>
              </div>
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
    <section className="w-full py-20 sm:py-24 bg-[#f5f5f5] border-y border-[#e5e7eb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Left Card: Vision */}
          <div className="flex flex-col items-start text-left bg-white p-8 sm:p-10 shadow-[0_1px_3px_rgba(0,0,0,0.05)] border-t-[4px] border-[#fbbd05] gap-4">
            <div className="w-10 h-10 bg-[#fbbd05]/10 flex items-center justify-center text-[#fbbd05]">
              <i className="fa-solid fa-eye text-base"></i>
            </div>
            <h3 className="font-title text-2xl sm:text-3xl font-black text-[#1c1b1b] uppercase tracking-tight">
              OUR VISION
            </h3>
            <div className="flex flex-col gap-4 font-body text-xs sm:text-sm text-[#4b5563] leading-relaxed">
              <p>
              To be a globally trusted elastomer manufacturing partner, recognized for engineering excellence, manufacturing reliability, innovation, and sustainable growth. We aspire to set industry benchmarks in quality, process excellence, and customer partnership while creating lasting value for our customers, employees, and stakeholders across India and international markets.

              </p>
            </div>
          </div>

          {/* Right Card: Mission */}
          <div className="flex flex-col items-start text-left bg-white p-8 sm:p-10 shadow-[0_1px_3px_rgba(0,0,0,0.05)] border-t-[4px] border-[#C75550] gap-4">
            <div className="w-10 h-10 bg-[#C75550]/10 flex items-center justify-center text-[#C75550]">
              <i className="fa-solid fa-bullseye text-base"></i>
            </div>
            <h3 className="font-title text-2xl sm:text-3xl font-black text-[#1c1b1b] uppercase tracking-tight">
              OUR MISSION
            </h3>
            <div className="flex flex-col gap-4 font-body text-xs sm:text-sm text-[#4b5563] leading-relaxed">
              <p>
              To deliver reliable elastomer solutions through engineering expertise, certified manufacturing systems, and continuous innovation. We are committed to helping OEMs and industrial manufacturers achieve consistent performance, operational reliability, and long-term value through custom rubber components, advanced compounds, and scalable production capabilities.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// 4. OUR OPERATIONAL STATISTICS
function OurOperationalStatistics() {
  return (
    <section className="w-full bg-[#0a0a0a] py-20 sm:py-24 border-b border-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <span className="font-montserrat text-xs sm:text-sm font-bold text-[#fbbd05] uppercase tracking-[0.2em] mb-2">
            BYMER IN NUMBERS
          </span>
          <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
            OUR OPERATIONAL STATISTICS
          </h2>
        </div>

        {/* Stats Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full">
          
          {/* Card 1: 1150+ Projects Completed (6 cols) */}
          <div className="lg:col-span-6 bg-[#111111] border border-[#1f2937] p-8 flex flex-col justify-between min-h-[190px]">
            <div className="flex items-center justify-between w-full">
              <i className="fa-solid fa-list-check text-2xl text-[#fbbd05]" />
              <span className="text-[#10b981] bg-[#10b981]/10 px-2 py-0.5 text-[9px] font-bold tracking-wider uppercase rounded-sm border border-[#10b981]/20">
                MILESTONE
              </span>
            </div>
            <div className="flex flex-col items-start mt-6 text-left">
              <span className="font-title text-4xl sm:text-5xl font-black text-white tracking-tight leading-none">
                1150+
              </span>
              <span className="font-montserrat text-[10px] sm:text-xs font-bold text-[#9ca3af] tracking-wider uppercase mt-2">
                PROJECTS COMPLETED
              </span>
            </div>
          </div>

          {/* Card 2: 760+ Projects Running (6 cols) */}
          <div className="lg:col-span-6 bg-[#111111] border border-[#1f2937] p-8 flex flex-col justify-between min-h-[190px]">
            <div className="flex items-center justify-between w-full">
              <i className="fa-solid fa-spinner text-2xl text-[#C75550] fa-spin" />
              <span className="text-[#3b82f6] bg-[#3b82f6]/10 px-2 py-0.5 text-[9px] font-bold tracking-wider uppercase rounded-sm border border-[#3b82f6]/20">
                ACTIVE
              </span>
            </div>
            <div className="flex flex-col items-start mt-6 text-left">
              <span className="font-title text-4xl sm:text-5xl font-black text-white tracking-tight leading-none">
                760+
              </span>
              <span className="font-montserrat text-[10px] sm:text-xs font-bold text-[#9ca3af] tracking-wider uppercase mt-2">
                PROJECTS RUNNING
              </span>
            </div>
          </div>

          {/* Card 3: 70+ Industries Served (5 cols) */}
          <div className="lg:col-span-5 bg-[#111111] border border-[#1f2937] p-8 flex flex-col justify-between min-h-[190px]">
            <div className="flex items-center justify-between w-full">
              <i className="fa-solid fa-layer-group text-2xl text-[#9ca3af]" />
            </div>
            <div className="flex flex-col items-start mt-6 text-left">
              <span className="font-title text-4xl sm:text-5xl font-black text-white tracking-tight leading-none">
                70+
              </span>
              <span className="font-montserrat text-[10px] sm:text-xs font-bold text-[#9ca3af] tracking-wider uppercase mt-2">
                INDUSTRIES SERVED
              </span>
            </div>
          </div>

          {/* Card 4: 150+ Satisfied Global Clients (7 cols) */}
          <div className="lg:col-span-7 bg-[#111111] border border-[#1f2937] p-8 flex flex-col justify-between min-h-[190px]">
            <div className="flex items-center justify-between w-full">
              <i className="fa-solid fa-face-smile text-2xl text-[#fbbd05]" />
              
              {/* Overlapping Avatar Circles */}
              <div className="flex items-center -space-x-2.5">
                <div className="w-6 h-6 rounded-full bg-neutral-700 border-2 border-[#111111]" />
                <div className="w-6 h-6 rounded-full bg-neutral-500 border-2 border-[#111111]" />
                <div className="w-6 h-6 rounded-full bg-neutral-300 border-2 border-[#111111]" />
              </div>
            </div>
            <div className="flex flex-col items-start mt-6 text-left">
              <span className="font-title text-4xl sm:text-5xl font-black text-white tracking-tight leading-none">
                150+
              </span>
              <span className="font-montserrat text-[10px] sm:text-xs font-bold text-[#9ca3af] tracking-wider uppercase mt-2">
                SATISFIED GLOBAL CLIENTS
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// 5. PILLARS OF BYMER ELASTOMERS
function LeadershipCard({ name, title, imageSrc, imageAlt, bio }) {
  return (
    <div className="bg-[#f9fafb] p-8 sm:p-10 flex flex-col items-start border border-gray-200/40 h-full">
      <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between w-full gap-5 sm:gap-6 pb-6 border-b border-gray-200/60">
        <div className="flex flex-col items-center sm:items-start gap-1.5 flex-1 min-w-0">
          <h3 className="font-title text-2xl sm:text-3xl font-black text-[#1c1b1b] uppercase tracking-tight leading-none text-center sm:text-left">
            {name}
          </h3>
          <span className="font-montserrat text-xs font-bold text-[#C75550] tracking-wider uppercase">
            {title}
          </span>
        </div>

        <div className="relative w-32 h-40 sm:w-36 sm:h-44 shrink-0 overflow-hidden border border-gray-200 bg-white mx-auto sm:mx-0">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 640px) 128px, 144px"
            className="object-cover object-top grayscale"
            priority
          />
        </div>
      </div>

      <div className="flex flex-col items-start text-left w-full mt-6 gap-2">
        <span className="font-montserrat text-[10px] sm:text-xs font-bold text-[#9ca3af] tracking-wider uppercase">
          EXPERTISE & BACKGROUND:
        </span>
        <p className="font-body text-xs sm:text-sm text-[#4b5563] leading-relaxed">{bio}</p>
      </div>
    </div>
  );
}

function PillarsSection() {
  return (
    <section className="w-full py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Leadership Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <span className="font-montserrat text-xs sm:text-sm font-bold text-[#C75550] uppercase tracking-[0.2em] mb-2">
            LEADERSHIP
          </span>
          <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl font-black text-[#1c1b1b] uppercase tracking-tight">
            PILLARS OF BYMER ELASTOMERS
          </h2>
          <div className="w-16 h-[4px] bg-[#fbbd05] mt-4" />
        </div>

        {/* Leadership Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto w-full">
          <LeadershipCard
            name="YEZDI PATEL"
            title="PARTNER / CEO"
            imageSrc="/images/Yezdi Patel.png"
            imageAlt="YEZDI PATEL"
            bio="Mr. Yezdi Patel has more than 60 years of experience in rubber technology and manufacturing to his expertise in elastomer engineering, product development, and process excellence. A qualified rubber technologist from the University of Mumbai and a graduate of the Plastics and Rubber Institute, London, he continues to lead the technical development and strategic growth of Bymer Elastomers, driving the company's commitment to reliability, innovation and manufacturing excellence."
          />
          <LeadershipCard
            name="RUZBEH PATEL"
            title="PARTNER / CFO"
            imageSrc="/images/Ruzbeh Patel.png"
            imageAlt="RUZBEH PATEL"
            bio="Mr. Ruzbeh Patel, with over 40 years of experience in the rubber manufacturing industry, plays a pivotal role in spearheading business growth, customer engagement, and strategic development at Bymer Elastomers. He is a Science graduate from Savitribai Phule Pune University and is responsible for new business initiatives and market development, helping to strengthen Bymer's position as a trusted elastomer manufacturing partner for OEMs and industrial customers."
          />
        </div>

        {/* Bottom Banner */}
        <div className="max-w-6xl mx-auto mt-8 w-full">
          <div className="bg-[#111111] py-6 px-8 border-l-[6px] border-[#C75550] shadow-sm w-full flex items-center justify-center text-center">
            <p className="font-title text-sm sm:text-base lg:text-lg font-bold tracking-wider text-white uppercase leading-snug">
              " DEDICATED TO FLAWLESS PRODUCTION AND RELIABLE PERFORMANCE. "
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

// 6. TEAM SECTION
function TeamSection() {
  return (
    <section className="w-full py-20 sm:py-24 bg-[#f5f5f5] border-y border-[#e5e7eb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Title & Copy */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <span className="font-montserrat text-xs sm:text-sm font-bold text-[#C75550] uppercase tracking-[0.2em] mb-2">
              OUR TEAM
            </span>
            <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl font-black text-[#1c1b1b] uppercase tracking-tight leading-[1.1]">
            Engineering Expertise. <br />  Manufacturing Precision. <br /> Shared Commitment.
            </h2>
            <div className="w-16 h-[4px] bg-[#fbbd05] mt-4" />
          </div>

          {/* Right Column: Body Text */}
          <div className="lg:col-span-7 flex flex-col items-start text-left gap-6">
            <p className="font-body text-sm sm:text-base text-[#4b5563] leading-relaxed">
              Behind every component, compound, and customer partnership is a team driven by manufacturing excellence. Our engineers, manufacturing specialists, quality professionals and support teams work together to deliver consistent quality, dependable delivery and responsive customer support.
            </p>
            <p className="font-body text-sm sm:text-base text-[#4b5563] leading-relaxed">
              Our team uses our technical expertise, a culture of accountability and a constant desire to improve to help turn customer needs into dependable elastomer solutions for a variety of industrial applications.
            </p>
          </div>
        </div>

        {/* Team Photo */}
        <div className="mt-12 sm:mt-16 w-full border border-[#e5e7eb] bg-white p-2 sm:p-3 shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
          <div className="relative w-full aspect-[16/7] sm:aspect-[21/9] overflow-hidden">
            <Image
              src="/images/team-photo.png"
              alt="Bymer Elastomers team at Nashik manufacturing plant"
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// 7. COMMITMENT BANNER
function CommitmentBanner() {
  return (
    <section className="w-full bg-[#fbbd05] py-16 sm:py-20 border-b border-black text-center flex flex-col items-center justify-center px-4">
      <span className="font-montserrat text-[10px] sm:text-xs font-bold text-[#1c1b1b] tracking-[0.2em] mb-4 uppercase">
        COMMITMENT STATEMENT
      </span>
      <h2 className="font-title text-2xl sm:text-3xl lg:text-4xl font-black text-[#1c1b1b] uppercase tracking-wide leading-tight max-w-5xl">
      We are committed to Manufacturing High-Quality
      Rubber Components and Custom Elastomer Solutions for OEMs and industrial manufacturers 
      </h2>
    </section>
  );
}

// 8. CONTACT CTA BANNER
function AboutContactCTA() {
  return (
    <section className="w-full py-20 bg-white border-t border-b border-[#f3f4f6] text-center flex flex-col items-center justify-center px-4">
      <h2 className="font-title text-3xl sm:text-4xl lg:text-[38px] font-black text-[#1c1b1b] uppercase tracking-tight leading-tight max-w-3xl mb-4">
      Let's Discuss Your Requirement
      </h2>
      <p className="font-body text-sm sm:text-base text-[#4b5563] max-w-xl leading-relaxed mb-8">
      Share your application, technical drawings, or product specifications. Our engineering team will review your requirements and recommend the right elastomer solution.
      </p>
      <Link 
        href="/contact" 
        className="inline-flex items-center justify-center bg-[#C75550] text-white px-8 py-3.5 font-title text-sm font-bold uppercase tracking-wider transition-all duration-200 hover:bg-[#b54a46] rounded-none cursor-pointer gap-2"
      >
        CONTACT NOW <span className="font-sans text-sm">→</span>
      </Link>
    </section>
  );
}

// MAIN ABOUT PAGE COMPONENT
export function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* About Hero */}
      <AboutHero />

      {/* Who We Are */}
      <WhoWeAre />

      {/* Stats Counter */}
      <OurOperationalStatistics />

      {/* Mission & Vision */}
      <MissionVision />

      {/* Pillars Section */}
      <PillarsSection />

      {/* Team Section */}
      <TeamSection />

      {/* Organization Chart */}
      <OrganizationChartSection />

      {/* Commitment Banner */}
      {/* <CommitmentBanner /> */}

      {/* About Contact CTA */}
      <AboutContactCTA />
    </div>
  );
}
