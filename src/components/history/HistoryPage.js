"use client";

import { useState } from "react";
import Image from "next/image";

// 1. HISTORICAL MILESTONES DATA
const HISTORICAL_MILESTONES = [
  {
    year: "1992",
    shortTitle: "Founded",
    fullTitle: "FOUNDED WITH EXPERTISE",
    cardTitle: "FOUNDED WITH EXPERTISE",
    roadmapLabel: "FOUNDED",
    description: "Bymer Elastomers, led by CEO Mr. Yezdi B. Patel, was established in 1992 with over 60 years of experience in rubber technology and manufacturing. This laid down the manufacturing headquarters at Nashik, Ambad MIDC to process severe-duty mechanical isolators and custom compounds.",
    cardDescription: "Bymer Elastomers, led by CEO Mr. Yazdi B. Patel, was established in 1992 with over 60 years of experience in rubber technology and manufacturing.",
    image: "/images/section1.png"
  },
  {
    year: "2001",
    shortTitle: "Expansion",
    fullTitle: "STEADY GROWTH & EXPANSION",
    cardTitle: "STEADY GROWTH",
    roadmapLabel: "EXPANSION",
    description: "We have grown to supply high-quality rubber products to over 50 customers across various industries, both in India and overseas. Deployed high-efficiency automated mixing and testing infrastructure to meet growing demand scales.",
    cardDescription: "We have grown to supply high-quality rubber products to over 50 customers across various industries, both in India and overseas.",
    image: "/images/section3 homepage.png"
  },
  {
    year: "2007",
    shortTitle: "Leading Industry",
    fullTitle: "LEADING THE INDUSTRY IN COMPOUNDING",
    cardTitle: "LEADING THE INDUSTRY",
    roadmapLabel: "MARKET LEADER",
    description: "We are becoming a key player in manufacturing rubber compounds, molded products, and rubber-to-metal bonded solutions for the automotive, aerospace, and industrial sectors. Attained our key ISO and quality certification frameworks.",
    cardDescription: "We are becoming a key player in manufacturing rubber compounds, molded products, and rubber-to-metal bonded solutions for the automotive, aerospace, and industrial sectors.",
    image: "/images/section2 homepage.png"
  },
  {
    year: "2024",
    shortTitle: "Our Dream",
    fullTitle: "OUR DREAM OF EXCELLENCE",
    cardTitle: "OUR DREAM",
    roadmapLabel: "OUR DREAM",
    description: "To be a world-class rubber manufacturing company, achieving 100% customer satisfaction, ensuring a safe work environment, and continuously upgrading our technology directly within our plants.",
    cardDescription: "To be a world-class rubber manufacturing company, achieving 100% customer satisfaction, ensuring a safe work environment, and continuously upgrading our technology.",
    image: "/images/sectio2 aboutpage.png"
  }
];

// 2. LEADERSHIP GRID DATA
const LEADERSHIP_STAT_BOXES = [
  {
    num: "01",
    code: "TRACK",
    title: "RIGOROUS TESTING",
    desc: "We leverage high-frequency rheometry and tensile testing machinery to evaluate dynamic compound characteristics under continuous heat and solvent cycles."
  },
  {
    num: "02",
    code: "BASE",
    title: "STRATEGIC FORMULATIONS",
    desc: "Formulating high-performance EPDM, Nitrile, Viton (FKM), Neoprene, and VMQ Silicone bases aligned perfectly with ASTM D2000 code-callouts."
  },
  {
    num: "03",
    code: "MATRICES",
    title: "QUALITY CREDENTIALS",
    desc: "Fully compliant certification matrices (IATF 16949 / ISO 9001 / ISO 14001) ensuring a secure, standard-driven technical supply pipeline."
  },
  {
    num: "04",
    code: "EXPORTS",
    title: "GLOBAL EXPORTERS",
    desc: "Formulating and manufacturing custom automotive dampers and low-pressure hose profiles shipped to rigorous international markets directly."
  }
];

// 3. HERO COMPONENT
function HistoryHero() {
  return (
    <header className="relative w-full border-b border-[#e5e7eb] overflow-hidden bg-[#0a0a0a] min-h-[300px] sm:min-h-[350px] flex items-center justify-center">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/backgroundAbout.png" 
          alt="Bymer Elastomers History Background" 
          fill
          sizes="100vw"
          className="object-cover opacity-35 filter grayscale"
          priority
        />
      </div>

      {/* Dark semi-transparent overlay */}
      <div className="absolute inset-0 bg-[#0a0a0a]/70 z-10 pointer-events-none" />

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20 flex flex-col items-center gap-3">
        <span className="font-montserrat text-xs sm:text-sm font-bold tracking-[0.2em] text-[#9ca3af] uppercase leading-none">
          HOME <span className="text-[#C75550]">/</span> HISTORY
        </span>
        <h1 className="font-title text-4xl sm:text-6xl font-black uppercase text-white tracking-tight leading-none">
          OUR HISTORY
        </h1>
      </div>
    </header>
  );
}

// 4. MAIN HISTORY PAGE COMPONENT
export function HistoryPage() {
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const [activeChronologyIdx, setActiveChronologyIdx] = useState(0);
  const activeMilestone = HISTORICAL_MILESTONES[activeTabIdx];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      
      {/* History Hero */}
      <HistoryHero />

      {/* SECTION 1: TABS SELECTOR & ACTIVE DETAIL */}
      <main className="w-full py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
        
        {/* Milestone tab selectors grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {HISTORICAL_MILESTONES.map((milestone, idx) => {
            const isSelected = activeTabIdx === idx;
            return (
              <button
                key={milestone.year}
                onClick={() => setActiveTabIdx(idx)}
                className={`w-full py-4 px-6 text-center font-montserrat text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors duration-150 rounded-none cursor-pointer flex items-center justify-center gap-2 ${
                  isSelected 
                    ? "bg-[#1c1b1b] text-white border border-[#1c1b1b]"
                    : "bg-white text-[#4b5563] hover:text-[#1c1b1b] hover:bg-[#f9fafb] border border-[#e5e7eb]"
                }`}
              >
                {isSelected && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#fbbd05] inline-block animate-pulse" />
                )}
                <span>{milestone.year} &mdash; {milestone.shortTitle}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Detail Card Box */}
        <div className="w-full bg-white transition-all duration-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            
            {/* Left side text detail (7 cols) */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              
              {/* Red year tag */}
              <div className="bg-[#C75550] text-white font-montserrat text-xs sm:text-sm font-bold px-3 py-1.5 uppercase leading-none rounded-none w-fit">
                {activeMilestone.year}
              </div>

              <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl font-black text-[#1c1b1b] uppercase leading-tight tracking-tight mt-6">
                {activeMilestone.fullTitle}
              </h2>

              {/* Short yellow divider line */}
              <div className="w-12 h-[4px] bg-[#fbbd05] mt-4 mb-6" />

              <p className="font-body text-sm sm:text-base text-[#4b5563] leading-relaxed text-left">
                {activeMilestone.description}
              </p>
            </div>

            {/* Right side plant facade image (5 cols) */}
            <div className="lg:col-span-5 w-full relative aspect-[4/3] border border-[#e5e7eb] bg-[#f9fafb] overflow-hidden">
              <Image 
                src={activeMilestone.image}
                alt={`${activeMilestone.year} Corporate Plant Facility`}
                fill
                sizes="(max-w-lg) 100vw, 500px"
                className="object-cover filter grayscale"
              />
            </div>

          </div>
        </div>

      </main>

      {/* SECTION 2: CHRONOLOGY ROADMAP TIMELINE */}
      <section className="w-full py-24 bg-white border-t border-b border-[#f3f4f6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          
          <span className="font-montserrat text-xs font-bold text-[#C75550] uppercase tracking-[0.22em] leading-none mb-3">
            HISTORICAL ROADMAP
          </span>
          <h2 className="font-title text-3xl sm:text-4xl lg:text-[40px] font-black uppercase text-[#1c1b1b] tracking-tight mb-2">
            THE CHRONOLOGY OF GROWTH
          </h2>

          {/* Horizontal Interactive Timeline Line (visible on md screens and above) */}
          <div className="hidden md:block w-full max-w-4xl mx-auto mt-14 mb-16 relative px-12">
            {/* Absolute centered track line that extends nicely past node edges */}
            <div className="absolute left-6 right-6 top-[22px] h-[1.5px] bg-[#e5e7eb] z-0" />

            <div className="flex justify-between relative z-10">
              {HISTORICAL_MILESTONES.map((milestone, idx) => {
                const isSelected = activeChronologyIdx === idx;
                const lastTwoDigits = milestone.year.slice(-2);
                return (
                  <div key={`node-${milestone.year}`} className="flex flex-col items-center select-none">
                    {/* Circle Node */}
                    <button
                      onClick={() => setActiveChronologyIdx(idx)}
                      className={`w-11 h-11 rounded-full flex items-center justify-center font-title text-base font-bold transition-all duration-250 cursor-pointer z-10 ${
                        isSelected 
                          ? "bg-[#1c1b1b] text-[#fbbd05] border-2 border-[#1c1b1b] shadow-sm scale-105"
                          : "bg-white text-[#cbd5e1] border border-[#cbd5e1] hover:border-[#1c1b1b] hover:text-[#1c1b1b]"
                      }`}
                    >
                      {lastTwoDigits}
                    </button>
                    {/* Label below circle */}
                    <span className={`font-montserrat text-[11px] tracking-wider mt-4 uppercase transition-colors duration-255 ${
                      isSelected ? "text-[#1c1b1b] font-bold" : "text-[#9ca3af] font-medium"
                    }`}>
                      {milestone.year} — {milestone.roadmapLabel}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Milestone Cards Grid (stacked on mobile, 2 columns on sm, 4 columns on md+) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full mt-10 md:mt-0">
            {HISTORICAL_MILESTONES.map((milestone, idx) => {
              const isSelected = activeChronologyIdx === idx;
              return (
                <div 
                  key={`card-${milestone.year}`}
                  onClick={() => setActiveChronologyIdx(idx)}
                  className={`bg-white border p-8 flex flex-col justify-start text-left min-h-[300px] transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer rounded-none ${
                    isSelected 
                      ? "border-[#e5e7eb] border-t-[3.5px] border-t-[#1c1b1b]"
                      : "border-[#e5e7eb] border-t border-t-[#e5e7eb]"
                  }`}
                >
                  <span className={`font-title text-[32px] font-black leading-none tracking-tight transition-colors duration-300 ${
                    isSelected ? "text-[#1c1b1b]" : "text-[#cbd5e1]"
                  }`}>
                    {milestone.year}
                  </span>
                  
                  <h3 className="font-title text-base font-black text-[#1c1b1b] uppercase tracking-tight mt-3 mb-4">
                    {milestone.cardTitle}
                  </h3>
                  
                  <p className="font-body text-xs sm:text-[13.5px] text-[#4b5563] leading-relaxed">
                    {milestone.cardDescription}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 3: MANAGERIAL LEADERSHIP GRID */}
      <section className="w-full py-24 bg-white border-b border-[#f3f4f6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          
          {/* Header Split Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end w-full mb-12">
            {/* Left Column: Subtitle & Title */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <span className="font-montserrat text-xs font-bold text-[#C75550] uppercase tracking-[0.22em] leading-none mb-3">
                MANAGERIAL LEADERSHIP
              </span>
              <h2 className="font-title text-3xl sm:text-4xl lg:text-[40px] font-black text-[#1c1b1b] uppercase leading-[1.1] tracking-tight">
                ENGINEERING GROUNDED IN <br className="hidden sm:inline" />EXCELLENCE
              </h2>
            </div>

            {/* Right Column: Description */}
            <div className="lg:col-span-5 text-left">
              <p className="font-body text-sm sm:text-[14.5px] text-[#4b5563] leading-relaxed">
                Our legacy is built on formulating customized chemical compounds that withstand aggressive environments. From specialized automotive subframes to aerospace gaskets, we engineer safety metrics directly into our elastomers.
              </p>
            </div>
          </div>

          {/* Approved Supplier Black Banner */}
          <div className="w-full bg-[#1c1b1b] border-l-[6px] border-l-[#C75550] py-4 px-6 flex items-center justify-center gap-3 mb-12 select-none rounded-none">
            <i className="fa-solid fa-earth-americas text-[#fbbd05] text-sm sm:text-base"></i>
            <span className="font-title text-xs sm:text-[13.5px] font-bold uppercase tracking-wider text-white">
              APPROVED SUPPLIER: LEADING GLOBAL TIER-1 COMPANIES
            </span>
          </div>

          {/* 4-Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {LEADERSHIP_STAT_BOXES.map((box) => (
              <div 
                key={box.num} 
                className="bg-white border border-[#e5e7eb] p-8 text-left flex flex-col items-start min-h-[260px] transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer rounded-none"
              >
                {/* Accent red code label */}
                <span className="font-montserrat text-xs font-bold text-[#C75550] uppercase tracking-wider mb-3">
                  {box.num} // {box.code}
                </span>
                
                {/* Oswald Card Title */}
                <h3 className="font-title text-lg font-black text-[#1c1b1b] uppercase tracking-tight mb-4">
                  {box.title}
                </h3>
                
                {/* Inter Description */}
                <p className="font-body text-xs sm:text-[13.5px] text-[#4b5563] leading-relaxed">
                  {box.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
