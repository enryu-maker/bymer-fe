"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { HERO_CAROUSEL_IMAGES, HERO_CAROUSEL_INTERVAL_MS } from "@/lib/heroCarouselImages";

export function HeroImageCarousel({
  className = "",
  imageSizes = "(max-width: 768px) 100vw, 500px",
  priority = false,
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % HERO_CAROUSEL_IMAGES.length);
    }, HERO_CAROUSEL_INTERVAL_MS);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`relative w-full h-full min-h-[350px] ${className}`}>
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
            sizes={imageSizes}
            className="object-cover"
            priority={priority && index === 0}
          />
        </div>
      ))}
    </div>
  );
}
