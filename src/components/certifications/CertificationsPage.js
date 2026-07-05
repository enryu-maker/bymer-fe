import Image from "next/image";
import Link from "next/link";
import { ContactBanner } from "../layout/ContactBanner";
import { PageHeroCarousel } from "../shared/PageHeroCarousel";

function CertificationsGrid({ certifications }) {
  return (
    <section className="w-full py-20 sm:py-24 bg-[#f5f5f5] border-b border-[#e5e7eb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center mb-10 sm:mb-12">
          <span className="font-montserrat text-xs sm:text-sm font-bold text-[#C75550] uppercase tracking-[0.2em] mb-2">
            Certified Systems
          </span>
          <h2 className="font-title text-2xl sm:text-3xl font-black text-[#1c1b1b] uppercase tracking-tight">
            Internationally Recognized Quality Management
          </h2>
          <div className="w-16 h-[4px] bg-[#fbbd05] mt-4" />
        </div>

        {certifications.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="bg-white border border-[#e5e7eb] p-3 sm:p-4 flex flex-col items-center gap-3 sm:gap-4"
              >
                <div className="relative w-full aspect-[3/4] bg-[#f9fafb] border border-[#e5e7eb]">
                  {cert.image ? (
                    <Image
                      src={cert.image}
                      alt={cert.name}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 280px"
                      className="object-contain p-2 sm:p-3"
                      unoptimized
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-[#9ca3af]">
                      <i className="fa-solid fa-certificate text-3xl" />
                    </div>
                  )}
                </div>
                <span className="font-montserrat text-[10px] sm:text-[11px] font-bold text-[#1c1b1b] tracking-wider uppercase text-center leading-snug">
                  {cert.name}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white border border-[#e5e7eb] py-16 px-6 text-center">
            <i className="fa-solid fa-certificate text-3xl text-[#C75550] mb-4" />
            <p className="font-body text-sm sm:text-base text-[#4b5563] leading-relaxed max-w-md mx-auto">
              Certifications will be displayed here once they are published.
            </p>
          </div>
        )}

        <div className="flex justify-center mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-[#C75550] text-white px-8 py-3.5 font-title text-sm font-bold uppercase tracking-wider transition-all duration-200 hover:bg-[#b54a46] rounded-none gap-2"
          >
            Discuss your application <span className="font-sans text-sm">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export function CertificationsPage({ certifications = [] }) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <PageHeroCarousel
        eyebrow="Insights"
        eyebrowMuted
        title="Certifications"
        showDivider
        description="Internationally recognized quality, environmental, and occupational health management systems that govern our manufacturing operations."
      />
      <CertificationsGrid certifications={certifications} />
      <ContactBanner />
    </div>
  );
}
