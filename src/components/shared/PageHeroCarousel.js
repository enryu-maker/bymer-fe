"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { HERO_CAROUSEL_IMAGES, HERO_CAROUSEL_INTERVAL_MS } from "@/lib/heroCarouselImages";

export function PageHeroCarousel({
  eyebrow,
  eyebrowMuted = false,
  title,
  subheading,
  description,
  showDivider = false,
  titleClassName = "text-4xl sm:text-5xl lg:text-6xl",
  children,
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % HERO_CAROUSEL_IMAGES.length);
    }, HERO_CAROUSEL_INTERVAL_MS);

    return () => clearInterval(timer);
  }, []);

  return (
    <header className="relative w-full border-b border-[#e5e7eb] overflow-hidden bg-[#0a0a0a] min-h-[400px] sm:min-h-[450px] flex items-center">
      <div className="absolute inset-y-0 right-0 w-full lg:w-[58%] z-0">
        {HERO_CAROUSEL_IMAGES.map((image, index) => (
          <div
            key={image.src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={index !== activeIndex}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover object-center"
              priority={index === 0}
            />
          </div>
        ))}
        <div className="absolute inset-0 border-l-4 border-[#C75550]/80 pointer-events-none z-10" />
      </div>

      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, #0a0a0a 0%, #0a0a0a 38%, rgba(10,10,10,0.92) 52%, rgba(10,10,10,0.55) 68%, rgba(10,10,10,0.15) 85%, rgba(10,10,10,0) 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-20 w-full flex flex-col items-start gap-4">
        {eyebrow ? (
          <span
            className={`font-montserrat text-xs sm:text-sm font-bold uppercase ${
              eyebrowMuted
                ? "tracking-[0.2em] text-[#9ca3af] leading-none"
                : "text-[#C75550] tracking-[0.2em]"
            }`}
          >
            {eyebrow}
          </span>
        ) : null}

        <h1
          className={`font-title ${titleClassName} font-black uppercase text-white leading-[1.1] max-w-3xl tracking-tight`}
        >
          {title}
        </h1>

        {subheading ? (
          <p className="font-montserrat text-xs sm:text-sm font-bold text-[#fbbd05] uppercase tracking-[0.15em] max-w-2xl leading-relaxed">
            {subheading}
          </p>
        ) : null}

        {showDivider ? <div className="w-16 h-[4px] bg-[#fbbd05]" /> : null}

        {description ? (
          <p className="font-body text-sm sm:text-base text-[#9ca3af] max-w-2xl leading-relaxed mt-1">
            {description}
          </p>
        ) : null}

        {children}
      </div>
    </header>
  );
}
