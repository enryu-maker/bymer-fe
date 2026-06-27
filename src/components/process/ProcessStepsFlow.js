"use client";

import { useState } from "react";

const PROCESS_STEPS = [
  {
    id: "01",
    title: "Application Assessment",
    shortTitle: "Application Assessment",
    icon: "fa-solid fa-magnifying-glass",
    description:
      "We assess product specifications, operating conditions and performance requirements to develop the most appropriate elastomer solution for each application.",
  },
  {
    id: "02",
    title: "Compound & Product Engineering",
    shortTitle: "Compound & Engineering",
    icon: "fa-solid fa-gears",
    description:
      "Custom rubber compounds and component designs are developed to meet requirements for durability, sealing, vibration control, environmental and performance.",
  },
  {
    id: "03",
    title: "Process & Tooling Development",
    shortTitle: "Process & Tooling",
    icon: "fa-solid fa-flask",
    description:
      "Manufacturing processes, tooling requirements and quality parameters are defined to ensure production consistency, scalability and repeatability.",
  },
  {
    id: "04",
    title: "Precision Manufacturing",
    shortTitle: "Precision Manufacturing",
    icon: "fa-solid fa-industry",
    description:
      "Components are produced through controlled molding, bonding, extrusion, and compound mixing processes supported by certified manufacturing systems.",
  },
  {
    id: "05",
    title: "Quality Testing & Validation",
    shortTitle: "Testing & Validation",
    icon: "fa-solid fa-clipboard-check",
    description:
      "Material verification, dimensional inspection and performance testing are carried out on the products to ensure compliance with customer specifications and quality standards.",
  },
  {
    id: "06",
    title: "Supply & Technical Support",
    shortTitle: "Supply & Support",
    icon: "fa-solid fa-handshake",
    description:
      "Long term customer success and uninterrupted production is built upon reliable delivery, technical collaboration and continuous improvement initiatives.",
  },
];

function ProcessStepCard({ step, isActive, onSelect }) {
  return (
    <button
      type="button"
      onClick={() => onSelect(step.id)}
      aria-expanded={isActive}
      className={`group flex flex-col items-center text-center gap-3 p-4 sm:p-5 w-full min-w-[140px] sm:min-w-[160px] flex-shrink-0 snap-center border transition-all duration-200 cursor-pointer ${
        isActive
          ? "bg-[#C75550] border-[#C75550] text-white shadow-[0_8px_24px_rgba(199,85,80,0.25)]"
          : "bg-white border-[#e5e7eb] text-[#1c1b1b] hover:border-[#C75550]/40 hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)]"
      }`}
    >
      <span
        className={`font-montserrat text-[10px] font-bold tracking-wider uppercase ${
          isActive ? "text-white/80" : "text-[#C75550]"
        }`}
      >
        {step.id}
      </span>
      <span
        className={`w-11 h-11 flex items-center justify-center text-lg ${
          isActive ? "bg-white/15 text-white" : "bg-[#C75550]/10 text-[#C75550]"
        }`}
      >
        <i className={step.icon} />
      </span>
      <span className="font-montserrat text-[10px] sm:text-[11px] font-bold tracking-wider uppercase leading-snug">
        {step.shortTitle}
      </span>
    </button>
  );
}

function ProcessStepDetail({ step, isOpen, onToggle }) {
  return (
    <details
      open={isOpen}
      className="group border border-[#e5e7eb] bg-white open:border-[#C75550]/30 open:shadow-[0_4px_12px_rgba(0,0,0,0.04)] transition-all duration-200"
    >
      <summary
        onClick={(event) => {
          event.preventDefault();
          onToggle(step.id);
        }}
        className="flex items-start justify-between gap-4 cursor-pointer list-none px-5 sm:px-6 py-5 sm:py-6 [&::-webkit-details-marker]:hidden"
      >
        <div className="flex items-start gap-4 text-left">
          <span className="font-montserrat text-xs font-bold text-[#C75550] tracking-wider uppercase flex-shrink-0 pt-0.5">
            {step.id}.
          </span>
          <h3 className="font-title text-sm sm:text-base font-bold text-[#1c1b1b] uppercase tracking-wide leading-snug">
            {step.title}
          </h3>
        </div>
        <span className="flex-shrink-0 w-7 h-7 border border-[#e5e7eb] flex items-center justify-center text-[#9ca3af] group-open:bg-[#C75550] group-open:border-[#C75550] group-open:text-white transition-colors duration-200 mt-0.5">
          <i className="fa-solid fa-chevron-down text-[10px] transition-transform duration-200 group-open:rotate-180" />
        </span>
      </summary>

      <div className="px-5 sm:px-6 pb-5 sm:pb-6 pl-14 sm:pl-[4.25rem] border-t border-[#f3f4f6]">
        <p className="font-body text-sm sm:text-base text-[#4b5563] leading-relaxed">
          {step.description}
        </p>
      </div>
    </details>
  );
}

export function ProcessStepsFlow() {
  const [activeStep, setActiveStep] = useState("01");

  const handleSelect = (stepId) => {
    setActiveStep((current) => (current === stepId ? "" : stepId));
  };

  return (
    <div className="flex flex-col gap-10 sm:gap-12">
      <div className="relative">
        <div className="hidden lg:block absolute top-[4.75rem] left-[6%] right-[6%] h-px bg-[#e5e7eb] z-0" />

        <div className="flex gap-3 sm:gap-4 overflow-x-auto pb-2 snap-x snap-mandatory lg:overflow-visible lg:grid lg:grid-cols-6 lg:gap-4 relative z-10">
          {PROCESS_STEPS.map((step) => (
            <ProcessStepCard
              key={step.id}
              step={step}
              isActive={activeStep === step.id}
              onSelect={handleSelect}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {PROCESS_STEPS.map((step) => (
          <ProcessStepDetail
            key={step.id}
            step={step}
            isOpen={activeStep === step.id}
            onToggle={handleSelect}
          />
        ))}
      </div>
    </div>
  );
}
