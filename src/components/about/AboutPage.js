import Image from "next/image";
import Link from "next/link";

// 1. ABOUT HERO
function AboutHero() {
  return (
    <header className="relative w-full border-b border-[#e5e7eb] overflow-hidden bg-white min-h-[400px] sm:min-h-[450px] flex items-center">
      {/* Background Image Container */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[65%] z-0">
        <Image 
          src="/images/backgroundAbout.png" 
          alt="About Bymer Elastomers" 
          fill
          sizes="100vw"
          className="object-cover object-center filter grayscale opacity-45"
          priority
        />
      </div>

      {/* Linear Gradient Overlay */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none" 
        style={{
          background: "linear-gradient(90deg, #ffffff 0%, #ffffff 35%, rgba(255, 255, 255, 0.7) 50%, rgba(255, 255, 255, 0) 80%)"
        }}
      />

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-20 w-full flex flex-col items-start gap-4">
        <span className="font-montserrat text-xs sm:text-sm font-bold text-[#C75550] uppercase tracking-[0.2em]">
          ABOUT US
        </span>

        <h1 className="font-title text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-[#1c1b1b] leading-[1.1] max-w-3xl tracking-tight">
          YOUR PARTNER FOR <br />
          <span className="text-[#C75550]">QUALITY RUBBER PRODUCTS</span>
        </h1>

        <p className="font-body text-sm sm:text-base text-[#4b5563] max-w-2xl leading-relaxed mt-1">
          Delivering reliable, cost-effective quality rubber products across industries worldwide.
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
              Bymer Elastomers is one of the leading rubber products manufacturing company, having two plants and working space of approx. 45,000 sq.ft. situated in the premium industrial area of Ambad, Nashik, Maharashtra, India.
            </p>
            
            <p className="font-body text-sm sm:text-base text-[#4b5563] leading-relaxed mb-6">
              We specialize in manufacturing high-end Rubber Compounds, Molded Rubber and Rubber To Metal Bonded Products, Extruded Rubber Profiles, and Low Pressure Rubber Hoses, meticulously engineered to cater to both Automotive and Non-Automotive Industries.
            </p>

            <p className="font-body text-sm sm:text-base text-[#4b5563] leading-relaxed mb-10">
              With an extensive international footprint, we reliably supply high-grade elastomer solutions to around 50 plus customers globally across domestic and overseas markets.
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
                Our Vision is to be a world-class Rubber Products manufacturing company, recognized for our excellence in quality, innovation, sustainability, and committed to 100% customer satisfaction.
              </p>
              <p>
                We aim to set new industry standards while fostering a safe and dynamic work environment, ensuring long-term success for our customers, employees, and partners.
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
                Our Mission at Bymer Elastomers is to deliver high-quality, innovative rubber solutions that exceed customer expectations. We are committed to continuous improvement, customer satisfaction, and continuous improvement in technology to provide reliable and cost-effective rubber products.
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
          
          {/* Pillar 1: Yezdi Patel */}
          <div className="bg-[#f9fafb] p-8 sm:p-10 flex flex-col justify-between items-start min-h-[320px] border border-gray-200/40">
            <div className="flex justify-between items-start w-full gap-4 pb-6 border-b border-gray-200/60">
              <div className="flex flex-col items-start gap-1">
                <h3 className="font-title text-2xl sm:text-3xl font-black text-[#1c1b1b] uppercase tracking-tight leading-none">
                  YEZDI PATEL
                </h3>
                <span className="font-montserrat text-xs font-bold text-[#C75550] tracking-wider uppercase">
                  PARTNER / CEO
                </span>
              </div>
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 border border-gray-200 bg-white">
                <Image
                  src="/images/Yezdi Patel.png"
                  alt="YEZDI PATEL"
                  fill
                  sizes="112px"
                  className="object-cover object-top filter grayscale"
                  priority
                />
              </div>
            </div>
            
            <div className="flex flex-col items-start text-left w-full mt-6 gap-2">
              <span className="font-montserrat text-[10px] sm:text-xs font-bold text-[#9ca3af] tracking-wider uppercase">
                EXPERTISE & BACKGROUND:
              </span>
              <p className="font-body text-xs sm:text-sm text-[#4b5563] leading-relaxed">
                Mr. Yezdi Patel is a highly qualified rubber technologist from Mumbai University and holds a degree from the prestigious Plastics and Rubber Institute, London. He brings over 50 plus years of deep domain experience in the technical manufacturing of rubber products. All developmental activities within our plants are initiated and overseen by him.
              </p>
            </div>
          </div>

          {/* Pillar 2: Ruzbeh Patel */}
          <div className="bg-[#f9fafb] p-8 sm:p-10 flex flex-col justify-between items-start min-h-[320px] border border-gray-200/40">
            <div className="flex justify-between items-start w-full gap-4 pb-6 border-b border-gray-200/60">
              <div className="flex flex-col items-start gap-1">
                <h3 className="font-title text-2xl sm:text-3xl font-black text-[#1c1b1b] uppercase tracking-tight leading-none">
                  RUZBEH PATEL
                </h3>
                <span className="font-montserrat text-xs font-bold text-[#C75550] tracking-wider uppercase">
                  PARTNER / CFO
                </span>
              </div>
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 border border-gray-200 bg-white">
                <Image
                  src="/images/Ruzbeh Patel.png"
                  alt="RUZBEH PATEL"
                  fill
                  sizes="112px"
                  className="object-cover object-top filter grayscale"
                  priority
                />
              </div>
            </div>
            
            <div className="flex flex-col items-start text-left w-full mt-6 gap-2">
              <span className="font-montserrat text-[10px] sm:text-xs font-bold text-[#9ca3af] tracking-wider uppercase">
                EXPERTISE & BACKGROUND:
              </span>
              <p className="font-body text-xs sm:text-sm text-[#4b5563] leading-relaxed">
                Our CFO Mr. Ruzbeh Patel is a Graduate in Science from Pune University. He possesses around 40 plus years of core execution and financial manufacturing track record in high-end Rubber Products. He manages business capitalization strategy while structural marketing and product developments are actively overseen by him.
              </p>
            </div>
          </div>

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

// 6. COMMITMENT BANNER
function CommitmentBanner() {
  return (
    <section className="w-full bg-[#fbbd05] py-16 sm:py-20 border-b border-black text-center flex flex-col items-center justify-center px-4">
      <span className="font-montserrat text-[10px] sm:text-xs font-bold text-[#1c1b1b] tracking-[0.2em] mb-4 uppercase">
        COMMITMENT STATEMENT
      </span>
      <h2 className="font-title text-2xl sm:text-3xl lg:text-4xl font-black text-[#1c1b1b] uppercase tracking-wide leading-tight max-w-5xl">
        WE ARE COMMITTED TO SUPPLY QUALITY RUBBER PRODUCTS TO OUR CUSTOMERS.
      </h2>
    </section>
  );
}

// 7. CONTACT CTA BANNER
function AboutContactCTA() {
  return (
    <section className="w-full py-20 bg-white border-t border-b border-[#f3f4f6] text-center flex flex-col items-center justify-center px-4">
      <h2 className="font-title text-3xl sm:text-4xl lg:text-[38px] font-black text-[#1c1b1b] uppercase tracking-tight leading-tight max-w-3xl mb-4">
        GET IN TOUCH, & WE'LL RESPOND SOON!
      </h2>
      <p className="font-body text-sm sm:text-base text-[#4b5563] max-w-xl leading-relaxed mb-8">
        Reach out to our engineering production management desks to consult on design frameworks, timeline metrics, or custom rubber profile compositions.
      </p>
      <Link 
        href="/contact" 
        className="inline-flex items-center justify-center bg-[#C75550] text-white px-8 py-3.5 font-title text-sm font-bold uppercase tracking-wider transition-all duration-200 hover:bg-[#b54a46] rounded-none cursor-pointer gap-2"
      >
        CONTACT NOW <span className="font-sans font-bold text-xs">&gt;</span>
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

      {/* Commitment Banner */}
      <CommitmentBanner />

      {/* About Contact CTA */}
      <AboutContactCTA />
    </div>
  );
}
