import Link from "next/link";
import { ContactBanner } from "../layout/ContactBanner";

const FAQ_ITEMS = [
  {
    id: "I",
    question: "What types of rubber products does Bymer Elastomers manufacture?",
    answer:
      "Bymer Elastomers manufactures custom molded rubber parts, rubber bonded to metal products, rubber extrusion profiles, low pressure hoses and formulated rubber compounds for OEM and industrial applications.",
  },
  {
    id: "II",
    question: "Which rubber materials does Bymer work with?",
    answer:
      "We manufacture products from Natural Rubber and a wide range of synthetic elastomers like Nitrile (NBR), Neoprene (CR), EPDM, Silicone (VMQ), FKM, Polyacrylate (ACM), Ethylene Acrylic (AEM), HNBR, Butyl (IIR) and ECO, as per the requirements of the application.",
  },
  {
    id: "III",
    question: "Does Bymer Elastomers develop custom rubber solutions?",
    answer:
      "Yes. We specialize in application-specific elastomer solutions, developing products and compounds tailored to customer specifications, performance requirements, and operating environments.",
  },
  {
    id: "IV",
    question: "What industries does Bymer Elastomers serve?",
    answer:
      "We support customers in the automotive, electrical & switchgear, industrial equipment, oil & chemical processing, home appliances, defense, aerospace, and other engineering-driven industries.",
  },
  {
    id: "V",
    question: "Does Bymer supply customers outside India?",
    answer:
      "Yes. Bymer Elastomers serves customers across India and international markets, supporting global supply requirements through certified manufacturing systems and quality-focused processes.",
  },
  {
    id: "VI",
    question: "What certifications does Bymer Elastomers hold?",
    answer: "Bymer Elastomers operates under internationally recognized management systems and is certified to:",
    list: ["IATF 16949:2016", "ISO 9001:2015", "ISO 14001:2015"],
  },
  {
    id: "VII",
    question: "Does Bymer offer in-house compound development?",
    answer:
      "Yes. We can create elastomer compounds that are suited to particular application, performance, and environmental requirements thanks to our in-house compound development and mixing capabilities.",
  },
  {
    id: "VIII",
    question: "How is product quality guaranteed by Bymer?",
    answer:
      "Through material verification, process controls, internal testing, product validation, and certified quality management systems, quality is integrated throughout our manufacturing process.",
  },
  {
    id: "IX",
    question: "Can Bymer support both low-volume and high-volume production requirements?",
    answer:
      "Yes. Our manufacturing infrastructure and process capabilities support product development, specialized production runs and scalable manufacturing programs.",
  },
  {
    id: "X",
    question: "How can I discuss my application requirements with Bymer?",
    answer:
      "Our team works with customers to understand technical needs and recommend suitable elastomer solutions.",
    footerLink: {
      before: "Please feel free to ",
      linkText: "leave a query on our website or contact us directly",
      after: ".",
    },
  },
];

function FaqHero() {
  return (
    <header className="relative w-full border-b border-[#e5e7eb] overflow-hidden bg-[#0a0a0a] min-h-[280px] sm:min-h-[320px] flex items-center justify-center">
      <div className="absolute inset-0 bg-[#0a0a0a]/90 z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20 flex flex-col items-center gap-3">
        <span className="font-montserrat text-xs sm:text-sm font-bold tracking-[0.2em] text-[#9ca3af] uppercase leading-none">
          SUPPORT
        </span>
        <h1 className="font-title text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight leading-none">
          FREQUENTLY ASKED QUESTIONS
        </h1>
        <p className="font-body text-xs sm:text-sm text-[#9ca3af] max-w-xl leading-relaxed mt-1">
          Find answers about our products, materials, certifications, and how we support OEM and industrial customers.
        </p>
      </div>
    </header>
  );
}

function FaqItem({ item }) {
  return (
    <details className="group border border-[#e5e7eb] bg-white open:border-[#C75550]/30 open:shadow-[0_4px_12px_rgba(0,0,0,0.04)] transition-all duration-200">
      <summary className="flex items-start justify-between gap-4 cursor-pointer list-none px-5 sm:px-6 py-5 sm:py-6 [&::-webkit-details-marker]:hidden">
        <div className="flex items-start gap-4 text-left">
          <span className="font-montserrat text-xs font-bold text-[#C75550] tracking-wider uppercase flex-shrink-0 pt-0.5">
            {item.id}.
          </span>
          <h2 className="font-title text-sm sm:text-base font-bold text-[#1c1b1b] uppercase tracking-wide leading-snug">
            {item.question}
          </h2>
        </div>
        <span className="flex-shrink-0 w-7 h-7 border border-[#e5e7eb] flex items-center justify-center text-[#9ca3af] group-open:bg-[#C75550] group-open:border-[#C75550] group-open:text-white transition-colors duration-200 mt-0.5">
          <i className="fa-solid fa-plus text-[10px] group-open:hidden" />
          <i className="fa-solid fa-minus text-[10px] hidden group-open:block" />
        </span>
      </summary>

      <div className="px-5 sm:px-6 pb-5 sm:pb-6 pl-14 sm:pl-[4.25rem] border-t border-[#f3f4f6]">
        <p className="font-body text-sm sm:text-base text-[#4b5563] leading-relaxed">
          {item.answer}
          {item.footerLink && (
            <>
              {" "}
              {item.footerLink.before}
              <Link href="/contact" className="text-[#C75550] font-semibold hover:underline">
                {item.footerLink.linkText}
              </Link>
              {item.footerLink.after}
            </>
          )}
        </p>
        {item.list && (
          <ul className="list-disc pl-5 mt-3 flex flex-col gap-2 font-body text-sm sm:text-base text-[#4b5563] leading-relaxed">
            {item.list.map((entry) => (
              <li key={entry}>{entry}</li>
            ))}
          </ul>
        )}
      </div>
    </details>
  );
}

function FaqContent() {
  return (
    <section className="w-full py-16 sm:py-20 bg-[#f9fafb]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-4">
        {FAQ_ITEMS.map((item) => (
          <FaqItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

export function FaqPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <FaqHero />
      <FaqContent />
      <ContactBanner />
    </div>
  );
}
