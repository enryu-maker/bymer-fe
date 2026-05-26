"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Logo } from "./Logo";

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    { name: "PRODUCTS", href: "/#products" },
    { name: "COMPOUNDS", href: "/#compounds" },
    { name: "MACHINERY", href: "/#machinery" },
    { name: "TESTIMONIALS", href: "/#testimonials" },
  ];

  return (
    <header className="w-full sticky top-0 z-50 flex flex-col">
      {/* 1. TOP HEADER STRIP */}
      <div className="w-full bg-[#1C1B1B] text-[#FCF9F8] border-b border-[#313030] py-2.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-2 font-subtitle text-xs font-bold tracking-wider">
          {/* Left contact */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a href="tel:+919822079899" className="inline-flex items-center gap-2 hover:text-[#FDC003] transition-colors">
              <div className="relative w-3.5 h-3.5 flex items-center justify-center">
                <Image
                  src="/icons/phone.svg"
                  alt="Phone Icon"
                  fill
                  sizes="14px"
                  className="object-contain"
                />
              </div>
              +91 98220 79899
            </a>
            <a href="mailto:sales@bymer.com" className="inline-flex items-center gap-2 hover:text-[#FDC003] transition-colors">
              <div className="relative w-3.5 h-3.5 flex items-center justify-center">
                <Image
                  src="/icons/email.svg"
                  alt="Email Icon"
                  fill
                  sizes="14px"
                  className="object-contain"
                />
              </div>
              SALES@BYMER.COM
            </a>
          </div>
          {/* Right metadata */}
          <div className="flex items-center gap-2 text-[#DCD9D9]">
            <span>EST. 1998</span>
            <span className="text-[#313030]">|</span>
            <span className="text-[#FDC003]">ISO 9001:2015</span>
          </div>
        </div>
      </div>

      {/* 2. NAVBAR */}
      <nav className="w-full bg-[#FCF9F8] border-b-2 border-[#1C1B1B]">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
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
                    className={`font-title text-base font-bold tracking-wider transition-colors duration-150 relative py-2 ${
                      isActive
                        ? "text-[#B81312]"
                        : "text-[#1C1B1B] hover:text-[#B81312]"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#B81312]" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Action CTA Button */}
            <div className="hidden sm:block">
              <Link href="/contact" className="btn-brutal-yellow px-6 py-3 text-base tracking-wider">
                REQUEST A QUOTE
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 border-2 border-[#1C1B1B] text-[#1C1B1B] hover:bg-[#F0EDEC] focus:outline-none transition-colors duration-150"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {isOpen && (
          <div className="lg:hidden border-t-2 border-[#1C1B1B] bg-[#FCF9F8]">
            <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-3 font-title text-lg font-bold tracking-wide border-b border-[#F0EDEC] ${
                      isActive
                        ? "text-[#B81312] bg-[#F0EDEC]"
                        : "text-[#1C1B1B] hover:text-[#B81312] hover:bg-[#F0EDEC]"
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
                  className="w-full btn-brutal-yellow py-3 text-center block text-base tracking-wider"
                >
                  REQUEST A QUOTE
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
