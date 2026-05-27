"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ContactBanner } from "../layout/ContactBanner";

// 1. HISTORICAL MILESTONES DATA
const HISTORICAL_MILESTONES = [
  {
    year: "1992",
    shortTitle: "FOUNDED WITH EX...",
    fullTitle: "FOUNDED WITH EXPERTISE",
    description: "Bymer Elastomers, led by CEO Mr. Yezdi B. Patel, was established in 1992 with over 60 years of experience in rubber technology and manufacturing. This laid down the manufacturing headquarters at Nashik, Ambad MIDC to process severe-duty mechanical isolators and custom compounds.",
    image: "/images/section1.png"
  },
  {
    year: "2001",
    shortTitle: "STEADY EXPANSIO...",
    fullTitle: "STEADY GROWTH & EXPANSION",
    description: "We have grown to supply high-quality rubber products to over 50 customers across various industries, both in India and overseas. Deployed high-efficiency automated mixing and testing infrastructure to meet growing demand scales.",
    image: "/images/section3 homepage.png"
  },
  {
    year: "2007",
    shortTitle: "LEADING THE IND...",
    fullTitle: "LEADING THE INDUSTRY IN COMPOUNDING",
    description: "We are becoming a key player in manufacturing rubber compounds, molded products, and rubber-to-metal bonded solutions for the automotive, aerospace, and industrial sectors. Attained our key ISO and quality certification frameworks.",
    image: "/images/section2 homepage.png"
  },
  {
    year: "2024",
    shortTitle: "OUR DREAM",
    fullTitle: "OUR DREAM OF EXCELLENCE",
    description: "To be a world-class rubber manufacturing company, achieving 100% customer satisfaction, ensuring a safe work environment, and continuously upgrading our technology directly within our plants.",
    image: "/images/sectio2 aboutpage.png"
  }
];

// 2. LEADERSHIP GRID DATA
const LEADERSHIP_STAT_BOXES = [
  {
    num: "01",
    title: "RIGOROUS TESTING",
    desc: "We leverage high-frequency rheometry and tensile testing machinery to evaluate dynamic compound characteristics under continuous heat and solvent cycles."
  },
  {
    num: "02",
    title: "STRATEGIC FORMULATIONS",
    desc: "Formulating high-performance EPDM, Nitrile, Viton (FKM), Neoprene, and VMQ Silicone bases aligned perfectly with ASTM D2000 code-callouts."
  },
  {
    num: "03",
    title: "QUALITY CREDENTIALS",
    desc: "Fully compliant certification matrices (IATF 16949 / ISO 9001 / ISO 14001) ensuring a secure, standard-driven technical supply pipeline."
  },
  {
    num: "04",
    title: "GLOBAL EXPORTERS",
    desc: "Formulating and manufacturing custom automotive dampers and low-pressure hose profiles shipped to rigorous international markets directly."
  }
];

// 3. HERO COMPONENT
function HistoryHero() {
  return (
    <header className="relative w-full border-b-2 border-[#1C1B1B] overflow-hidden bg-[#1C1B1B] py-20 sm:py-24 lg:py-28">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/backgroundAbout.png" 
          alt="Bymer Elastomers Factory Facility background" 
          fill
          sizes="100vw"
          className="object-cover opacity-25 filter grayscale"
          priority
        />
        {/* Technical grid overlay */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.04]" 
          style={{
            backgroundImage: "linear-gradient(#FCF9F8 2px, transparent 2px), linear-gradient(90deg, #FCF9F8 2px, transparent 2px)",
            backgroundSize: "30px 30px"
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center gap-2.5 text-center">
        <span className="font-subtitle text-xs sm:text-sm font-bold tracking-[0.25em] text-[#DCD9D9] uppercase leading-none">
          HOME / HISTORY
        </span>
        <h1 
          className="font-title text-5xl sm:text-7xl font-black uppercase text-[#FCF9F8] tracking-tight relative inline-block"
          style={{
            textShadow: "4px 4px 0px #1C1B1B"
          }}
        >
          OUR HISTORY
        </h1>
        <div className="w-24 h-[5px] bg-[#B81312] mt-1" />
      </div>
    </header>
  );
}

// 4. MAIN HISTORY PAGE COMPONENT
export function HistoryPage() {
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const activeMilestone = HISTORICAL_MILESTONES[activeTabIdx];

  return (
    <div className="min-h-screen flex flex-col bg-[#FCF9F8]">
      
      {/* History Hero */}
      <HistoryHero />

      {/* SECTION 1: SYSTEM LEDGER & TABS SELECTOR */}
      <main className="w-full py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Monospaced Stripe Header */}
        <div className="w-full bg-[#FCF9F8] border-2 border-[#1C1B1B] py-4.5 px-6 font-subtitle text-xs sm:text-sm font-bold tracking-widest uppercase flex items-center justify-between shadow-[4px_4px_0px_0px_#1C1B1B] mb-10">
          <span className="text-[#1C1B1B]">■ SYSTEM LEDGER // RECORDED MILESTONES (1992 - 2026)</span>
        </div>

        {/* Milestone tab selectors grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {HISTORICAL_MILESTONES.map((milestone, idx) => {
            const isSelected = activeTabIdx === idx;
            return (
              <button
                key={milestone.year}
                onClick={() => setActiveTabIdx(idx)}
                className={`w-full border-2 border-[#1C1B1B] p-6 text-center transition-all duration-100 uppercase rounded-none cursor-pointer ${
                  isSelected 
                    ? "bg-[#FDC003] text-[#1C1B1B] shadow-[4px_4px_0px_0px_#1C1B1B] translate-x-[-2px] translate-y-[-2px] font-bold"
                    : "bg-white text-[#1C1B1B]/70 hover:bg-[#F0EDEC]"
                }`}
              >
                <div className="font-title text-xl sm:text-2xl font-black">{milestone.year}</div>
                <div className="font-subtitle text-[10px] tracking-wider mt-1 truncate">{milestone.shortTitle}</div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Detail Card Box */}
        <div className="bg-white border-4 border-[#1C1B1B] shadow-[8px_8px_0px_0px_#1C1B1B] p-8 sm:p-10 lg:p-12 overflow-hidden w-full transition-all duration-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left side text detail */}
            <div className="lg:col-span-7 flex flex-col items-start gap-5">
              
              {/* Massive red outline year tag */}
              <div className="border-2 border-[#B81312] px-4 py-2 text-[#B81312] font-title text-2xl sm:text-3xl font-black tracking-wider leading-none select-none shadow-[2px_2px_0px_0px_#1C1B1B]">
                {activeMilestone.year}
              </div>

              <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl font-black text-[#1C1B1B] uppercase leading-none tracking-tight">
                {activeMilestone.fullTitle}
              </h2>

              <div className="w-full border-t border-[#1C1B1B] my-1" />

              <p className="font-body text-base text-[#1C1B1B]/80 leading-relaxed text-left">
                {activeMilestone.description}
              </p>
            </div>

            {/* Right side plant facade image */}
            <div className="lg:col-span-5 w-full relative aspect-[4/3] border-2 border-[#1C1B1B] bg-[#FCF9F8] overflow-hidden">
              <Image 
                src={activeMilestone.image}
                alt={`${activeMilestone.year} Corporate Plant Facility`}
                fill
                sizes="(max-w-lg) 100vw, 500px"
                className="object-cover filter grayscale"
              />
              {/* Technical drawing mesh mask overlay */}
              <div 
                className="absolute inset-0 bg-transparent opacity-10 pointer-events-none" 
                style={{
                  backgroundImage: "radial-gradient(#1C1B1B 1px, transparent 1px)",
                  backgroundSize: "16px 16px"
                }} 
              />
            </div>

          </div>
        </div>

      </main>

      {/* SECTION 2: CHRONOLOGY ROADMAP TIMELINE */}
      <section className="w-full py-24 bg-[#F0EDEC] border-y-2 border-[#1C1B1B]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          
          <span className="font-subtitle text-xs font-bold text-[#B81312] uppercase tracking-[0.2em] leading-none mb-2">
            // HISTORICAL ROADMAP
          </span>
          <h2 className="font-title text-4xl sm:text-5xl font-black uppercase text-[#1C1B1B] tracking-tight relative inline-block mb-16">
            THE CHRONOLOGY OF GROWTH
            <span className="absolute left-1/4 bottom-[-6px] w-1/2 h-[5px] bg-[#B81312]" />
          </h2>

          {/* Vertical Timeline Wrapper with Left-Aligned Track Line */}
          <div className="relative w-full max-w-4xl mx-auto pl-10 sm:pl-16">
            
            {/* Timeline Vertical Track Line */}
            <div className="absolute left-[36px] sm:left-[48px] top-0 bottom-0 w-[4px] bg-[#1C1B1B]" />

            <div className="flex flex-col gap-12 w-full relative py-4">
              {HISTORICAL_MILESTONES.map((milestone) => (
                <div 
                  key={`timeline-${milestone.year}`}
                  className="relative pl-16 sm:pl-12 flex items-center justify-start w-full min-h-[5.5rem]"
                >
                  
                  {/* Timeline Node Block (Year tag) Absolute-positioned on the Track Line */}
                  <div className="absolute left-[-34px] sm:left-[-54px] top-1/2 -translate-y-1/2 z-20 flex items-center justify-center">
                    <div className="relative bg-[#FDC003] text-[#1C1B1B] font-title text-base sm:text-lg lg:text-2xl font-black border-2 border-[#1C1B1B] py-2 px-3 sm:px-4 leading-none text-center shadow-[3px_3px_0px_0px_#1C1B1B] select-none rounded-none w-16 sm:w-20">
                      {milestone.year}
                      {/* Industrial Tag Top-Right Notch */}
                      <span className="absolute right-1.5 -top-[8px] w-2.5 h-2 bg-[#FDC003] border-t-2 border-x-2 border-[#1C1B1B]" />
                    </div>
                  </div>

                  {/* Aligned Card details block */}
                  <div className="w-full">
                    <div className="bg-[#FCF9F8] border-2 border-[#1C1B1B] shadow-[4px_4px_0px_0px_#1C1B1B] p-6 sm:p-8 text-left w-full hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#1C1B1B] active:translate-y-0 active:shadow-[4px_4px_0px_0px_#1C1B1B] transition-all duration-150">
                      <h4 className="font-title text-xl sm:text-2xl font-black text-[#1C1B1B] uppercase leading-none">
                        {milestone.fullTitle}
                      </h4>
                      <p className="font-body text-xs sm:text-sm text-[#1C1B1B]/70 leading-relaxed mt-3">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 3: MANAGERIAL LEADERSHIP GRID */}
      <section className="w-full py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#FCF9F8]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left information banner details */}
          <div className="lg:col-span-4 flex flex-col items-start gap-6 text-left">
            <span className="font-subtitle text-xs font-bold text-[#B81312] uppercase tracking-[0.2em] leading-none pl-0.5">
              // MANAGERIAL LEADERSHIP
            </span>
            <h2 className="font-title text-4xl sm:text-5xl font-black text-[#1C1B1B] uppercase leading-[1.05] tracking-tight">
              ENGINEERING <br />GROUNDED IN <br />EXCELLENCE
            </h2>
            <p className="font-body text-base text-[#1C1B1B]/80 leading-relaxed mt-2">
              Our legacy is built on formulating customized chemical compounds that withstand aggressive environments. From specialized automotive subframes to aerospace gaskets, we engineer safety metrics directly into our elastomers.
            </p>
            
            {/* Approved yellow block banner */}
            <div className="w-full bg-[#FDC003] border-2 border-[#1C1B1B] p-5 font-title text-sm lg:text-base font-bold uppercase tracking-wider text-[#1C1B1B] flex items-center gap-3 shadow-[4px_4px_0px_0px_#1C1B1B] select-none mt-4 rounded-none">
              <span>🛠️</span>
              <span>APPROVED SUPPLIER: LEADING GLOBAL TIER-1 COMPANIES</span>
            </div>
          </div>

          {/* Right 2x2 grid stats/philosophies */}
          <div className="lg:col-span-8 w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
            {LEADERSHIP_STAT_BOXES.map((box) => (
              <div 
                key={box.num} 
                className="bg-white border-2 border-[#1C1B1B] p-8 text-left flex flex-col items-start gap-4 shadow-[4px_4px_0px_0px_#1C1B1B] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_#1C1B1B] transition-all rounded-none"
              >
                {/* Accent red number */}
                <div className="font-title text-4xl font-black text-[#B81312] leading-none tracking-tight">
                  {box.num}
                </div>
                <h3 className="font-title text-xl font-bold tracking-tight text-[#1C1B1B] uppercase leading-none mt-1">
                  {box.title}
                </h3>
                <div className="w-12 border-t-2 border-[#B81312] my-1" />
                <p className="font-body text-sm text-[#1C1B1B]/70 leading-relaxed">
                  {box.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Get in touch banner at the bottom */}
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-0 mb-24">
        <div className="w-full mx-auto border-y-2 border-r-2 lg:border-r-0 border-[#1C1B1B] shadow-[8px_8px_0px_0px_#1C1B1B] overflow-hidden">
          <ContactBanner />
        </div>
      </div>

    </div>
  );
}
