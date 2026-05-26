import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="w-full bg-[#1C1B1B] text-[#FCF9F8] border-t-2 border-[#1C1B1B] pt-16 relative overflow-hidden">
      
      {/* Upper Footer Grid */}
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Section: Brand Info & Official Logo & ISO (Occupies 5 columns) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <Logo variant="footer" />
            <div className="font-body text-sm text-[#DCD9D9] mt-2 leading-relaxed">
              IATF 16949:2016, ISO 9001:2015 <br />
              and <br />
              ISO 14001:2015 certified.
            </div>
          </div>

          {/* Right Section: Explore Navigation & Contact Info side-by-side (Occupies 7 columns) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-8">
            
            {/* Column 2: Explore Navigation (Red Arrow items) */}
            <div className="flex flex-col gap-6">
              <h3 className="font-title text-lg font-bold tracking-wider text-white uppercase border-b border-[#313030] pb-2">
                EXPLORE
              </h3>
              <ul className="flex flex-col gap-3 font-subtitle text-sm mt-2">
                <li>
                  <Link href="/about" className="hover:text-[#B81312] transition-colors duration-150 flex items-center gap-2">
                    <span className="text-[#B81312] font-bold">&gt;</span> ABOUT US
                  </Link>
                </li>
                <li>
                  <Link href="/#certifications" className="hover:text-[#B81312] transition-colors duration-150 flex items-center gap-2">
                    <span className="text-[#B81312] font-bold">&gt;</span> CERTIFICATIONS
                  </Link>
                </li>
                <li>
                  <Link href="/#careers" className="hover:text-[#B81312] transition-colors duration-150 flex items-center gap-2">
                    <span className="text-[#B81312] font-bold">&gt;</span> CAREERS
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#B81312] transition-colors duration-150 flex items-center gap-2">
                    <span className="text-[#B81312] font-bold">&gt;</span> CONTACT US
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact Info (Red Arrow items with underlines) */}
            <div className="flex flex-col gap-6">
              <h3 className="font-title text-lg font-bold tracking-wider text-white uppercase border-b border-[#313030] pb-2">
                CONTACT
              </h3>
              <ul className="flex flex-col gap-4 font-body text-sm text-[#DCD9D9] mt-2">
                
                {/* Address */}
                <li className="flex gap-2.5 items-start">
                  <span className="text-[#B81312] font-bold mt-0.5">&gt;</span>
                  <span className="leading-relaxed">
                    Plot No. J-52 and J-42 MIDC Area, <br />
                    Ambad, <br />
                    Nashik - 422 010, Maharashtra, India <br />
                    GSTIN - 27AADFB1803D1Z5
                  </span>
                </li>

                {/* Phone */}
                <li className="flex gap-2.5 items-center">
                  <span className="text-[#B81312] font-bold">&gt;</span>
                  <a href="tel:+919822079899" className="underline hover:text-[#B81312] transition-colors font-subtitle text-sm">
                    +91 98220 79899
                  </a>
                </li>

                {/* Email */}
                <li className="flex gap-2.5 items-center">
                  <span className="text-[#B81312] font-bold">&gt;</span>
                  <a href="mailto:sales@bymer.com" className="underline hover:text-[#B81312] transition-colors font-subtitle text-sm">
                    sales@bymer.com
                  </a>
                </li>

              </ul>
            </div>

          </div>
        </div>
        {/* Division Border Line between Upper and Lower Footer */}
        <div className="w-full border-t border-[#313030] mt-16 pt-8 z-10 relative">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="font-subtitle text-xs text-[#DCD9D9]">
              © 2024 BYMER ELASTOMERS. ALL RIGHTS RESERVED.
            </p>
            <div className="flex gap-8 font-subtitle text-xs text-[#DCD9D9] tracking-wider">
              <Link href="/privacy" className="hover:text-[#B81312] transition-colors duration-150">
                PRIVACY POLICY
              </Link>
              <Link href="/terms" className="hover:text-[#B81312] transition-colors duration-150">
                TERMS OF SERVICE
              </Link>
            </div>
          </div>
        </div>

      </div>

      {/* Angled Red Branding Wedge */}
      <div 
        className="absolute right-0 bottom-0 w-[45%] h-[50%] bg-[#B81312] hidden md:block pointer-events-none" 
        style={{
          clipPath: "polygon(100% 0, 100% 100%, 40% 100%)",
          opacity: 0.95
        }}
      />
    </footer>
  );
}
