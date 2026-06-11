"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "ABOUT", href: "/about" },
    { name: "PRODUCTS", href: "/products" },
    { name: "COMPOUNDS", href: "/compounds" },
    { name: "MACHINERY", href: "/machinery" },
  ];

  return (
    <header className="w-full sticky top-0 z-50 flex flex-col bg-white border-b border-[#e5e7eb]">
      {/* NAVBAR */}
      <nav className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <Logo variant="header" />

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`font-montserrat text-xs font-bold tracking-wider uppercase transition-colors duration-200 py-2 ${
                      isActive
                        ? "text-[#C75550]"
                        : "text-[#4b5563] hover:text-[#C75550]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* Request Quote CTA & Contacts */}
            <div className="hidden sm:flex items-center gap-6">
              <div className="hidden md:flex flex-col items-end leading-tight text-right select-none">
                <a 
                  href="tel:+919822079899" 
                  className="flex items-center text-xs font-bold text-[#1c1b1b] font-montserrat hover:text-[#C75550] transition-colors"
                >
                  <i className="fa-solid fa-phone text-[#C75550] text-[10px] mr-1.5"></i>
                  +919822079899
                </a>
                <a 
                  href="mailto:sales@bymer.com" 
                  className="text-[10px] font-bold text-[#6b7280] tracking-wider uppercase font-montserrat hover:text-[#C75550] transition-colors"
                >
                  SALES@BYMER.COM
                </a>
              </div>
              <Link 
                href="/contact" 
                className="btn-yellow font-montserrat text-[12px] font-bold tracking-[0.15em] py-3.5 px-6 flex items-center gap-2 border border-[#111111]"
              >
                REQUEST A QUOTE <span className="font-sans text-sm">→</span>
              </Link>
            </div>

            {/* Mobile Menu Button Trigger */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 border border-[#111111] text-[#111111] hover:bg-[#f5f5f5] focus:outline-none transition-colors duration-150"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <svg className="block h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="block h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {isOpen && (
          <div className="lg:hidden border-t border-[#e5e7eb] bg-white">
            <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
               {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-3 font-montserrat text-xs font-bold tracking-[0.15em] border-b border-[#f5f5f5] ${
                      isActive
                        ? "text-[#C75550] bg-[#f5f5f5]"
                        : "text-[#111111] hover:text-[#C75550] hover:bg-[#f5f5f5]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-4 pb-2 px-3 sm:hidden">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full btn-yellow font-montserrat py-3 text-center block text-xs tracking-[0.15em] font-bold"
                >
                  REQUEST A QUOTE <span className="font-sans text-sm">→</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
