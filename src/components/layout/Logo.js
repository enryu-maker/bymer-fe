import Image from "next/image";
import Link from "next/link";

const LOGO_SRC = "/images/bymer-logo.png";

export function Logo({ variant = "header" }) {
  const isFooter = variant === "footer";

  return (
    <Link href="/" className="flex items-center gap-2 sm:gap-3 group min-w-0">
      <Image
        src={LOGO_SRC}
        alt="Bymer Elastomers"
        width={52}
        height={52}
        className="h-9 w-9 sm:h-12 sm:w-12 object-contain shrink-0 transition-transform duration-200 group-hover:scale-[1.02]"
        priority
      />
      <div className="flex flex-col items-start leading-none min-w-0">
        <div className="flex flex-wrap items-center gap-x-1.5 gap-y-0">
          <span
            className={`font-montserrat text-base sm:text-2xl font-black uppercase transition-transform duration-200 ${
              isFooter ? "text-[#f5f5f5]" : "text-[#1c1b1b]"
            }`}
          >
            BYMER
          </span>
          <span
            className={`font-montserrat text-base sm:text-2xl font-black tracking-wide uppercase transition-transform duration-200 ${
              isFooter ? "text-[#f5f5f5]/90" : "text-[#C75550]"
            }`}
          >
            ELASTOMERS
          </span>
        </div>
        <span
          className={`font-montserrat text-[8px] sm:text-[10px] font-bold tracking-widest mt-1 sm:mt-1.5 uppercase ${
            isFooter ? "text-[#9ca3af]" : "text-[#1c1b1b]/60"
          }`}
        >
          EST 1978 | ISO 9001:2015
        </span>
      </div>
    </Link>
  );
}
