import Link from "next/link";
import { ContactBanner } from "../layout/ContactBanner";

const FAQ_ITEMS = [
  {
    id: "I",
    question: "What types of rubber products does Bymer Elastomers manufacture?",
    answer:
      "Bymer Elastomers manufactures five main product categories: custom molded rubber components (by compression, transfer, and injection molding), rubber-to-metal bonded products, extruded rubber profiles, industrial hoses, and custom rubber compounds. Products are manufactured for automotive OEMs, industrial equipment manufacturers, electrical system integrators, and engineering companies across domestic and international markets.",
  },
  {
    id: "II",
    question: "Which rubber materials does Bymer work with?",
    answer:
      "Bymer formulates and manufactures compounds in Natural Rubber (NR), Nitrile (NBR), Neoprene (CR), EPDM, Silicone (VMQ), FKM/Viton, Polyacrylate (ACM), Ethylene Acrylic (AEM), HNBR, Butyl (IIR), and Epichlorohydrin (ECO). Material selection is based on the application's operating temperature, fluid exposure, mechanical requirements, and regulatory constraints — not substituted from general-purpose grades.",
  },
  {
    id: "III",
    question: "Can Bymer support both low-volume and high-volume production?",
    answer:
      "Yes. Our manufacturing infrastructure supports prototype and development programs, specialized small-volume production runs, and scalable high-volume manufacturing programs. We work with customers at every lifecycle stage — from initial compound development through long-term series production supply.",
  },
  {
    id: "IV",
    question: "What is Bymer Elastomers?",
    answer:
      "Bymer Elastomers is a certified precision manufacturer of rubber and elastomer products based in Nashik, Maharashtra, India. Established in 1978, the company manufactures custom molded rubber components, rubber-to-metal bonded products, extruded rubber profiles, industrial hoses, and custom elastomer compounds for automotive OEMs, industrial equipment manufacturers, and engineering companies across India and international markets. Manufacturing processes are certified to IATF 16949:2016, ISO 9001:2015, and ISO 14001:2015.",
  },
  {
    id: "V",
    question: "Where is Bymer Elastomers located?",
    answer:
      "Bymer Elastomers operates two manufacturing facilities in Nashik, Maharashtra, India — with a combined manufacturing area of 45,000 sq. ft. Nashik is an established industrial manufacturing centre in Maharashtra. The company was founded in 1978 and supplies customers across India and international markets from its Nashik manufacturing base.",
  },
  {
    id: "VI",
    question: "Is Bymer Elastomers IATF 16949 certified?",
    answer:
      "Yes. Bymer Elastomers is certified to IATF 16949:2016 — the international quality management system standard for automotive production and service parts suppliers. Bymer also holds ISO 9001:2015 and ISO 14001:2015 certification. IATF 16949 confirms that Bymer's manufacturing processes, documentation, and quality controls meet automotive OEM supply chain requirements globally.",
  },
  {
    id: "VII",
    question: "What rubber materials does Bymer Elastomers work with?",
    answer:
      "Bymer Elastomers formulates compounds in Natural Rubber (NR), Nitrile (NBR), EPDM, Silicone (VMQ), FKM/Viton, HNBR, Neoprene (CR), Polyacrylate (ACM), Ethylene Acrylic (AEM), Butyl (IIR), and Epichlorohydrin (ECO). All compounds are developed in-house, with material selection determined by the application's operating temperature, fluid exposure, mechanical loading, and regulatory requirements — not substituted from general-purpose grades.",
  },
  {
    id: "VIII",
    question: "What is the difference between EPDM and NBR rubber?",
    answer:
      "EPDM (Ethylene Propylene Diene Monomer) offers excellent resistance to ozone, weathering, steam, and hot water — but is not compatible with petroleum oils or fuels. NBR (Nitrile Butadiene Rubber) provides excellent resistance to petroleum oils, fuels, and hydraulic fluids — but degrades under ozone and outdoor weathering. EPDM is used in automotive weatherseals, cooling hoses, and outdoor infrastructure. NBR is used in engine oil seals, fuel system components, and hydraulic seals.",
  },
  {
    id: "IX",
    question: "What rubber material is used for EV busbar seals?",
    answer:
      "Silicone rubber (VMQ) is the primary material for EV busbar seals due to its wide operating temperature range (−60°C to +200°C), high dielectric strength, high volume resistivity, long service life, and compatibility with thermal management fluids in EV battery systems. EPDM is an alternative for lower-voltage applications at moderate operating temperatures.",
  },
  {
    id: "X",
    question: "What is rubber-to-metal bonding?",
    answer:
      "Rubber-to-metal bonding is a manufacturing process where rubber compound is chemically bonded to a metal insert during vulcanization in a mold. Metal inserts are surface-treated and coated with bonding adhesive before being positioned in the mold. Under heat and pressure, the rubber vulcanizes and simultaneously forms a chemical bond with the metal. The result is a structural composite combining the load-bearing rigidity of metal with the vibration-isolating, elastic, or sealing properties of rubber. Engine mounts, suspension bushings, and industrial vibration isolators are common applications.",
  },
  {
    id: "XI",
    question: "What is the difference between compression molding and injection molding for rubber?",
    answer:
      "In compression molding, a preformed rubber charge is placed in an open mold cavity, which is then closed and heated to vulcanize the rubber. In injection molding, heated compound is injected under pressure into closed mold cavities. Injection molding produces tighter dimensional tolerances, minimal flash, shorter cycle times, and better cavity-to-cavity consistency — but requires higher tooling investment. Compression molding is more economical for lower volumes and simpler geometries. Transfer molding sits between the two in precision and complexity.",
  },
  {
    id: "XII",
    question: "What manufacturing processes does Bymer Elastomers operate?",
    answer:
      "Bymer Elastomers operates compression molding, transfer molding, injection molding, rubber extrusion, rubber-to-metal bonding, industrial hose production, and in-house elastomer compound development and mixing — all within IATF 16949:2016 certified manufacturing systems at two facilities in Nashik, India, with a combined area of 45,000 sq. ft.",
  },
  {
    id: "XIII",
    question: "What does IATF 16949 certification mean for a rubber manufacturer?",
    answer:
      "IATF 16949:2016 is the international QMS standard for automotive production and service parts suppliers. For a rubber manufacturer, it confirms documented process controls, production planning, non-conformance management, traceability systems, and continuous improvement programs meeting automotive OEM requirements. It is required or strongly preferred by most automotive OEM procurement teams globally and provides deeper manufacturing system assurance than ISO 9001 alone.",
  },
  {
    id: "XIV",
    question: "What in-house rubber testing does Bymer perform?",
    answer:
      "Bymer Elastomers conducts in-house testing covering: rheological analysis (Moving Die Rheometer) for cure characteristics; Mooney viscosity for processability; Universal Testing Machine for tensile strength and elongation; Shore A hardness; compression set; accelerated heat ageing; ozone resistance; low-temperature performance to −60°C; abrasion resistance (DIN 53516); specific gravity; and electrical properties for EV and high-voltage applications.",
  },
  {
    id: "XV",
    question: "What is compression set in rubber and why does it matter?",
    answer:
      "Compression set is the permanent deformation a rubber component retains after being compressed under a defined load, temperature, and time. Expressed as a percentage of the original deflection not recovered after load removal. For sealing applications, low compression set is critical — a seal with high compression set loses contact force over time, leading to leakage. Compression set testing (ISO 815 / ASTM D395) validates long-term sealing performance of compounds for static and dynamic seal applications.",
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
          <i className="fa-solid fa-chevron-down text-[10px] transition-transform duration-200 group-open:rotate-180" />
        </span>
      </summary>

      <div className="px-5 sm:px-6 pb-5 sm:pb-6 pl-14 sm:pl-[4.25rem] border-t border-[#f3f4f6]">
        <p className="font-body text-sm sm:text-base text-[#4b5563] leading-relaxed">{item.answer}</p>
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

        <div className="mt-4 border border-[#e5e7eb] bg-white p-6 sm:p-8 text-center">
          <p className="font-body text-sm sm:text-base text-[#4b5563] leading-relaxed">
            Have more questions about your application?{" "}
            <Link href="/contact" className="text-[#C75550] font-semibold hover:underline">
              Contact our team
            </Link>{" "}
            to discuss technical requirements and elastomer solutions.
          </p>
        </div>
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
