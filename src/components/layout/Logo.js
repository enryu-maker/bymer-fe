import Image from "next/image";
import Link from "next/link";

const LOGO_SRC = "/images/bymer-logo.png";

export function Logo({ variant = "header" }) {
  const isFooter = variant === "footer";

  return (
    <Link href="/" className="flex items-center gap-3 group">
      <Image
        src={LOGO_SRC}
        alt="Bymer Elastomers"
        width={52}
        height={52}
        className="h-11 w-11 sm:h-12 sm:w-12 object-contain flex-shrink-0 transition-transform duration-200 group-hover:scale-[1.02]"
        priority
      />
      <div className="flex flex-col items-start leading-none">
        <div className="flex items-center gap-1.5">
          <span
            className={`font-montserrat text-xl sm:text-2xl font-black uppercase transition-transform duration-200 ${
              isFooter ? "text-[#f5f5f5]" : "text-[#1c1b1b]"
            }`}
          >
            BYMER
          </span>
          <span
            className={`font-montserrat text-xl sm:text-2xl font-black tracking-wide uppercase transition-transform duration-200 ${
              isFooter ? "text-[#f5f5f5]/90" : "text-[#C75550]"
            }`}
          >
            ELASTOMERS
          </span>
        </div>
        <span
          className={`font-montserrat text-[9px] sm:text-[10px] font-bold tracking-widest mt-1.5 uppercase ${
            isFooter ? "text-[#9ca3af]" : "text-[#1c1b1b]/60"
          }`}
        >
          EST 1983 | ISO 9001:2015
        </span>
      </div>
    </Link>
  );
}
