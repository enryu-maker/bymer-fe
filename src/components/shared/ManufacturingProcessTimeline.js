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

export function ManufacturingProcessTimeline({ className = "" }) {
  return (
    <div
      className={`w-full bg-[#f9f7f4] border border-[#ebe8e0] px-4 sm:px-6 lg:px-8 py-10 sm:py-12 ${className}`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="relative mb-8 sm:mb-10 hidden sm:block">
          <div className="absolute top-1/2 left-[8%] right-[8%] h-px bg-[#e5e2da] -translate-y-1/2" />
          <div className="relative grid grid-cols-6 gap-2">
            {MANUFACTURING_PROCESS_STEPS.map((step, index) => (
              <div key={step.id} className="flex justify-center">
                <span
                  className={`w-2.5 h-2.5 rounded-full ${
                    index === 0
                      ? "bg-[#C75550] ring-4 ring-[#C75550]/15"
                      : "bg-[#d1cdc4]"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-6 sm:gap-4 overflow-x-auto pb-2 snap-x snap-mandatory sm:grid sm:grid-cols-3 lg:grid-cols-6 sm:overflow-visible">
          {MANUFACTURING_PROCESS_STEPS.map((step) => (
            <div
              key={step.id}
              className="flex flex-col items-center text-center gap-3 min-w-[120px] sm:min-w-0 flex-shrink-0 snap-center px-1"
            >
              <span className="font-montserrat text-[11px] font-medium text-[#9ca3af] tracking-wider">
                {step.id}
              </span>

              <div className="w-14 h-14 sm:w-[3.75rem] sm:h-[3.75rem] rounded-full bg-[#fde8e8] flex items-center justify-center text-[#1c1b1b]">
                <i className={`${step.icon} text-base sm:text-lg`} />
              </div>

              <div className="flex flex-col gap-1">
                <h4 className="font-title text-xs sm:text-[13px] font-black text-[#1c1b1b] uppercase tracking-wide leading-snug">
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
