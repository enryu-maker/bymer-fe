import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-[#0a0a0a] text-[#f5f5f5] border-t border-[#111111] pt-16 pb-8 relative overflow-hidden">
      
      {/* Upper Footer Grid */}
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Column 1: Brand Info (Occupies 4 columns) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <span className="font-montserrat text-lg sm:text-xl font-black uppercase text-[#fbbd05] tracking-wide select-none">
              BYMER ELASTOMERS
            </span>
            <p className="font-body text-sm text-[#9ca3af] mt-1 leading-relaxed max-w-sm">
              Delivering precision-engineered elastomer solutions with uncompromising quality since 1999. IATF 16949:2016, ISO 9001:2015 and ISO 14001:2015 certified.
            </p>
            {/* Social Icons (Simple glyphs) */}
            <div className="flex items-center gap-5 mt-2">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                className="text-white/60 hover:text-[#C75550] transition-colors duration-150"
                aria-label="LinkedIn"
              >
                <i className="fa-brands fa-linkedin-in text-base"></i>
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noreferrer" 
                className="text-white/60 hover:text-[#C75550] transition-colors duration-150"
                aria-label="YouTube"
              >
                <i className="fa-brands fa-youtube text-base"></i>
              </a>
              <a 
                href="mailto:sales@bymer.com" 
                className="text-white/60 hover:text-[#C75550] transition-colors duration-150"
                aria-label="Email"
              >
                <i className="fa-regular fa-envelope text-base"></i>
              </a>
            </div>
          </div>

          {/* Column 2: Capabilities (Occupies 2 columns, lg:col-start-6) */}
          <div className="lg:col-span-2 lg:col-start-6 flex flex-col gap-6">
            <h3 className="font-title text-xs sm:text-sm font-bold tracking-wider text-white uppercase border-b border-[#111111] pb-2">
              CAPABILITIES
            </h3>
            <ul className="flex flex-col gap-3.5 font-body text-xs text-[#9ca3af] mt-2">
              <li>
                <Link href="/products?category=molded" className="hover:text-[#C75550] transition-colors duration-150">
                  Molded Rubber
                </Link>
              </li>
              <li>
                <Link href="/products?category=metal" className="hover:text-[#C75550] transition-colors duration-150">
                  Metal Bonding
                </Link>
              </li>
              <li>
                <Link href="/products?category=extruded" className="hover:text-[#C75550] transition-colors duration-150">
                  Extruded Profiles
                </Link>
              </li>
              <li>
                <Link href="/compounds" className="hover:text-[#C75550] transition-colors duration-150">
                  Rubber Compounds
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company (Occupies 2 columns) */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <h3 className="font-title text-xs sm:text-sm font-bold tracking-wider text-white uppercase border-b border-[#111111] pb-2">
              COMPANY
            </h3>
            <ul className="flex flex-col gap-3.5 font-body text-xs text-[#9ca3af] mt-2">
              <li>
                <Link href="/about" className="hover:text-[#C75550] transition-colors duration-150">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/about#certifications" className="hover:text-[#C75550] transition-colors duration-150">
                  ISO Certifications
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-[#C75550] transition-colors duration-150">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#C75550] transition-colors duration-150">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Get in Touch (Occupies 3 columns) */}
          <div className="lg:col-span-3 flex flex-col gap-6 pl-0 lg:pl-4">
            <h3 className="font-title text-xs sm:text-sm font-bold tracking-wider text-white uppercase border-b border-[#111111] pb-2">
              GET IN TOUCH
            </h3>
            <div className="flex flex-col gap-3.5 font-body text-xs text-[#9ca3af] mt-2">
              <a href="tel:+919822879699" className="hover:text-[#C75550] transition-colors">
                +91 98228 79699
              </a>
              <a href="mailto:sales@bymer.com" className="hover:text-[#C75550] transition-colors lowercase">
                sales@bymer.com
              </a>
              <p className="leading-relaxed">
                Plot No. J-46 & 47 MIDC Area,<br />
                Ambad, Nashik 422010,<br />
                Maharashtra, India.
              </p>
              <p className="text-[#fbbd05] font-montserrat font-bold mt-1 uppercase select-none">
                GSTIN: 27AADP8030173
              </p>
            </div>
          </div>

        </div>

        {/* Division Border Line between Upper and Lower Footer */}
        <div className="w-full border-t border-[#111111] mt-16 pt-8 z-10 relative">
          <div className="flex flex-col items-center justify-center text-center">
            <p className="font-montserrat text-[10px] sm:text-xs text-[#9ca3af] select-none uppercase tracking-wider">
              © 2026 BYMER ELASTOMERS. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
