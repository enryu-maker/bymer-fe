import Link from "next/link";

export function ContactBanner() {
  return (
    <section className="w-full bg-[#fbbd05] text-[#1c1b1b] py-8 border-t border-b border-[#1c1b1b] flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 px-4">
      <h2 className="font-title text-xl sm:text-2xl font-black tracking-tight uppercase text-center sm:text-left leading-none">
        GET IN TOUCH, & WE&apos;LL RESPOND SOON!
      </h2>
      
      <Link 
        href="/contact" 
        className="bg-[#1c1b1b] hover:bg-[#2d3748] text-white font-montserrat px-8 py-3.5 text-xs font-bold tracking-[0.15em] transition-colors duration-200 uppercase rounded-none cursor-pointer flex-shrink-0"
      >
        CONTACT NOW
      </Link>
    </section>
  );
}

