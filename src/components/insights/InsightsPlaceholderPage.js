import Link from "next/link";
import { ContactBanner } from "../layout/ContactBanner";

export function InsightsPlaceholderPage({
  title,
  description,
  comingSoonTitle = "Content for this section will be published soon.",
  comingSoonBody = "Please check back or contact us for updates.",
  ctaLabel = "CONTACT US",
}) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="relative w-full border-b border-[#e5e7eb] overflow-hidden bg-[#0a0a0a] min-h-[280px] sm:min-h-[320px] flex items-center justify-center">
        <div className="absolute inset-0 bg-[#0a0a0a]/90 z-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20 flex flex-col items-center gap-3">
          <span className="font-montserrat text-xs sm:text-sm font-bold tracking-[0.2em] text-[#9ca3af] uppercase leading-none">
            Insights
          </span>
          <h1 className="font-title text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight leading-none">
            {title}
          </h1>
          <div className="w-16 h-[4px] bg-[#fbbd05] mt-1" />
          <p className="font-body text-xs sm:text-sm text-[#9ca3af] max-w-xl leading-relaxed mt-1">
            {description}
          </p>
        </div>
      </header>

      <section className="w-full py-20 sm:py-24 bg-[#f5f5f5] border-b border-[#e5e7eb]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-4">
          <h2 className="font-title text-xl sm:text-2xl font-black text-[#1c1b1b] uppercase tracking-wide leading-snug">
            {comingSoonTitle}
          </h2>
          <p className="font-body text-sm sm:text-base text-[#4b5563] leading-relaxed max-w-2xl">
            {comingSoonBody}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center mt-4 bg-[#C75550] text-white px-8 py-3.5 font-title text-sm font-bold uppercase tracking-wider transition-all duration-200 hover:bg-[#b54a46] rounded-none gap-2"
          >
            {ctaLabel} <span className="font-sans text-sm">→</span>
          </Link>
        </div>
      </section>

      <ContactBanner />
    </div>
  );
}
