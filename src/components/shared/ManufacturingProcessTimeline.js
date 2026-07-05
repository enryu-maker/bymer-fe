"use client";

import { useEffect, useState } from "react";

const MANUFACTURING_PROCESS_STEPS = [
  {
    id: "01",
    title: "Application Assessment",
    subtitle: "Specs & requirements",
    icon: "fa-solid fa-magnifying-glass",
  },
  {
    id: "02",
    title: "Compound & Engineering",
    subtitle: "Custom formulation",
    icon: "fa-solid fa-gears",
  },
  {
    id: "03",
    title: "Process & Tooling",
    subtitle: "Precision tooling",
    icon: "fa-solid fa-flask",
  },
  {
    id: "04",
    title: "Precision Manufacturing",
    subtitle: "Certified production",
    icon: "fa-solid fa-industry",
  },
  {
    id: "05",
    title: "Testing & Validation",
    subtitle: "IATF 16949",
    icon: "fa-solid fa-clipboard-check",
  },
  {
    id: "06",
    title: "Supply & Support",
    subtitle: "Long-term partnership",
    icon: "fa-solid fa-handshake",
  },
];

const STEP_COUNT = MANUFACTURING_PROCESS_STEPS.length;
const CYCLE_MS = 3500;

function getDotLeftPercent(index) {
  const trackStart = 8;
  const trackWidth = 84;
  if (STEP_COUNT <= 1) return trackStart;
  return trackStart + (trackWidth / (STEP_COUNT - 1)) * index;
}

export function ManufacturingProcessTimeline({ className = "" }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % STEP_COUNT);
    }, CYCLE_MS);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className={`w-full bg-[#f9f7f4] border border-[#ebe8e0] px-4 sm:px-6 lg:px-8 py-10 sm:py-12 ${className}`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="relative mb-8 sm:mb-10 hidden sm:block h-6">
          <div className="absolute top-1/2 left-[8%] right-[8%] h-px bg-[#e5e2da] -translate-y-1/2" />

          <div
            className="absolute top-1/2 w-2.5 h-2.5 rounded-full bg-[#C75550] ring-4 ring-[#C75550]/15 -translate-x-1/2 -translate-y-1/2 transition-[left] duration-700 ease-in-out z-10"
            style={{ left: `${getDotLeftPercent(activeIndex)}%` }}
            aria-hidden="true"
          />

          <div className="relative grid grid-cols-6 gap-2 h-full items-center">
            {MANUFACTURING_PROCESS_STEPS.map((step, index) => (
              <div key={step.id} className="flex justify-center">
                <span
                  className={`w-2 h-2 rounded-full transition-colors duration-500 ${
                    index === activeIndex ? "bg-transparent" : "bg-[#d1cdc4]"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-6 sm:gap-4 overflow-x-auto pb-2 snap-x snap-mandatory sm:grid sm:grid-cols-3 lg:grid-cols-6 sm:overflow-visible">
          {MANUFACTURING_PROCESS_STEPS.map((step, index) => (
            <div
              key={step.id}
              className="flex flex-col items-center text-center gap-3 min-w-[120px] sm:min-w-0 flex-shrink-0 snap-center px-1"
            >
              <span
                className={`font-montserrat text-[11px] font-medium tracking-wider transition-colors duration-500 ${
                  index === activeIndex ? "text-[#C75550] font-bold" : "text-[#9ca3af]"
                }`}
              >
                {step.id}
              </span>

              <div
                className={`w-14 h-14 sm:w-[3.75rem] sm:h-[3.75rem] rounded-full flex items-center justify-center text-[#1c1b1b] transition-colors duration-500 ${
                  index === activeIndex ? "bg-[#fde8e8] ring-2 ring-[#C75550]/25" : "bg-[#fde8e8]"
                }`}
              >
                <i className={`${step.icon} text-base sm:text-lg`} />
              </div>

              <div className="flex flex-col gap-1">
                <h4
                  className={`font-title text-xs sm:text-[13px] font-black uppercase tracking-wide leading-snug transition-colors duration-500 ${
                    index === activeIndex ? "text-[#C75550]" : "text-[#1c1b1b]"
                  }`}
                >
                  {step.title}
                </h4>
                <p className="font-body text-[11px] text-[#6b7280] leading-snug">{step.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
