import Link from "next/link";
import Image from "next/image";

export function Logo({ variant = "header" }) {
  if (variant === "footer") {
    return (
      <Link href="/" className="flex items-center gap-3 group">
        <div className="relative w-12 h-12">
          <Image
            src="/icons/Logo.png"
            alt="Bymer Elastomers Logo"
            fill
            sizes="48px"
            className="object-contain transition-transform duration-200 group-hover:scale-105"
            priority
          />
        </div>
        <div className="flex flex-col">
          <span className="font-title text-2xl font-bold tracking-tight text-white leading-none">
            BYMER
          </span>
          <span className="font-subtitle text-xs font-bold tracking-widest text-[#FDC003] mt-0.5 leading-none">
            ELASTOMERS
          </span>
        </div>
      </Link>
    );
  }

  return (
    <Link href="/" className="flex items-center gap-3 group">
      <div className="flex-shrink-0 relative w-10 h-10">
        <Image
          src="/icons/Logo.png"
          alt="Bymer Elastomers Logo"
          fill
          sizes="40px"
          className="object-contain transition-transform duration-200 group-hover:scale-105"
          priority
        />
      </div>
      <div className="flex gap-2">
        <span className="font-title text-2xl font-bold tracking-tight text-[#1C1B1B] leading-none">
          BYMER
        </span>
        <span className="font-title text-2xl font-bold tracking-tight text-[#1C1B1B] leading-none">
          ELASTOMERS
        </span>
      </div>
    </Link>
  );
}
