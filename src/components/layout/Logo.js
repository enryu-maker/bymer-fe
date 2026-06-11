import Link from "next/link";

export function Logo({ variant = "header" }) {
  const isFooter = variant === "footer";

  return (
    <Link href="/" className="flex flex-col items-start group">
      <div className="flex items-center gap-1.5 leading-none">
        <span className={`font-montserrat text-xl sm:text-2xl font-black uppercase transition-transform duration-200 group-hover:scale-[1.01] ${
          isFooter ? "text-[#f5f5f5]" : "text-[#1c1b1b]"
        }`}>
          BYMER
        </span>
        <span className={`font-montserrat text-xl sm:text-2xl font-black tracking-wide uppercase transition-transform duration-200 group-hover:scale-[1.01] ${
          isFooter ? "text-[#f5f5f5]/90" : "text-[#C75550]"
        }`}>
          ELASTOMERS
        </span>
      </div>
      <span className={`font-montserrat text-[9px] sm:text-[10px] font-bold tracking-widest mt-1.5 leading-none uppercase ${
        isFooter ? "text-[#9ca3af]" : "text-[#1c1b1b]/60"
      }`}>
        EST 1999 | ISO 9001:2015
      </span>
    </Link>
  );
}

