import Link from "next/link";
import Image from "next/image";

export function ContactBanner() {
  return (
    <section className="w-full bg-[#FDC003] text-[#1C1B1B] border-2 border-[#1C1B1B] py-8 px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Block: Icon & Headline */}
        <div className="flex items-center gap-4 text-left w-full md:w-auto">
          
          {/* Boxed Message Bubble Icon (Using actual inbox_text.svg) */}
          <div className="flex items-center justify-center w-12 h-12 bg-white border-2 border-[#1C1B1B] text-[#1C1B1B] flex-shrink-0 relative shadow-[2px_2px_0px_0px_#1C1B1B]">
            <Image
              src="/icons/inbox_text.svg"
              alt="Inbox Icon"
              width={24}
              height={24}
              className="object-contain"
            />
          </div>
          
          <span className="font-title text-xl sm:text-2xl lg:text-3xl font-bold tracking-wide uppercase leading-none text-[#1C1B1B]">
            GET IN TOUCH, & WE&apos;LL RESPOND SOON!
          </span>

        </div>

        {/* Right Block: CTA Button */}
        <div className="flex-shrink-0 w-full md:w-auto flex justify-end md:justify-start">
          <Link 
            href="/contact" 
            className="w-full md:w-auto text-center bg-[#1C1B1B] text-[#FCF9F8] font-title text-sm lg:text-base font-bold tracking-widest uppercase px-6 py-4.5 border-2 border-[#1C1B1B] shadow-[4px_4px_0px_0px_#FFFFFF] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#FFFFFF] active:translate-x-0 active:translate-y-0 active:shadow-[4px_4px_0px_0px_#FFFFFF] transition-all duration-150 rounded-none cursor-pointer"
          >
            CONTACT NOW
          </Link>
        </div>

      </div>
    </section>
  );
}
