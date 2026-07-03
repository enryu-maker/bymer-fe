"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { fetchProductCategories, getProductCategoryHref } from "@/lib/api";
import {
  DEFAULT_PRODUCT_SUBMENU,
  INDUSTRIES_LINK,
  INSIGHTS_SUBMENU,
  MANUFACTURING_SUBMENU,
} from "@/lib/navConfig";

function NavDropdown({ label, submenu, pathname, align = "left" }) {
  const isActive =
    submenu.some((sub) => pathname === sub.href) ||
    submenu.some((sub) => pathname.startsWith(`${sub.href}/`));

  return (
    <div className="relative group flex items-center h-full">
      <button
        type="button"
        className={`font-montserrat text-xs font-bold tracking-wider uppercase transition-colors duration-200 flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
          isActive ? "text-[#C75550]" : "text-[#4b5563] hover:text-[#C75550]"
        }`}
      >
        {label}
        <i className="fa-solid fa-chevron-down text-[8px] transition-transform duration-200 group-hover:rotate-180" />
      </button>

      <div
        className={`absolute top-full mt-0 min-w-[12rem] bg-white border border-[#cbd5e1]/30 shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 flex flex-col py-1 ${
          align === "right" ? "right-0" : "left-0"
        }`}
      >
        {submenu.map((sublink) => {
          const isSubActive = pathname === sublink.href;
          return (
            <Link
              key={sublink.href}
              href={sublink.href}
              className={`font-montserrat text-[10px] font-bold tracking-wider uppercase px-4 py-3 border-b border-[#f9fafb] last:border-b-0 transition-colors duration-155 ${
                isSubActive
                  ? "text-[#C75550] bg-[#f9fafb]"
                  : "text-[#4b5563] hover:text-[#C75550] hover:bg-[#f9fafb]"
              }`}
            >
              {sublink.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function NavLink({ link, pathname }) {
  const isActive = link.submenu
    ? link.submenu.some((sub) => pathname === sub.href) || pathname === link.href
    : pathname === link.href;

  if (link.submenu) {
    return <NavDropdown label={link.name} submenu={link.submenu} pathname={pathname} />;
  }

  return (
    <Link
      href={link.href}
      className={`flex items-center h-full font-montserrat text-xs font-bold tracking-wider uppercase transition-colors duration-200 whitespace-nowrap ${
        isActive ? "text-[#C75550]" : "text-[#4b5563] hover:text-[#C75550]"
      }`}
    >
      {link.name}
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [productSubmenu, setProductSubmenu] = useState(DEFAULT_PRODUCT_SUBMENU);

  useEffect(() => {
    async function loadNavData() {
      const categories = await fetchProductCategories();

      if (categories?.length > 0) {
        setProductSubmenu(
          categories.map((category) => ({
            name: category.name.toUpperCase(),
            href: getProductCategoryHref(category.name),
          }))
        );
      }
    }
    loadNavData();
  }, []);

  const navLinks = useMemo(
    () => [
      { name: "ABOUT", href: "/about" },
      { name: INDUSTRIES_LINK.name, href: INDUSTRIES_LINK.href },
      {
        name: "PRODUCTS",
        href: "/products",
        submenu: productSubmenu,
      },
      { name: "COMPOUNDS", href: "/compounds" },
      {
        name: "MANUFACTURING",
        href: "/machinery",
        submenu: MANUFACTURING_SUBMENU,
      },
      {
        name: "INSIGHTS",
        href: "/faq",
        submenu: INSIGHTS_SUBMENU,
      },
    ],
    [productSubmenu]
  );

  return (
    <header className="w-full sticky top-0 z-50 flex flex-col bg-white border-b border-[#e5e7eb]">
      {/* NAVBAR */}
      <nav className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 sm:h-20 items-center justify-between lg:grid lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:items-center lg:gap-8">
            <div className="flex min-w-0 shrink items-center">
              <Logo variant="header" />
            </div>

            <nav className="hidden lg:flex items-center justify-center gap-5 xl:gap-7 h-full min-w-0">
              {navLinks.map((link) => (
                <NavLink key={link.name} link={link} pathname={pathname} />
              ))}
            </nav>

            <div className="flex shrink-0 items-center justify-end gap-2 sm:gap-3">
              <Link
                href="/contact"
                className="hidden md:inline-flex btn-yellow font-montserrat text-[10px] xl:text-[12px] font-bold tracking-[0.15em] py-2.5 px-3 xl:py-3.5 xl:px-6 items-center gap-2 border border-[#111111] whitespace-nowrap"
              >
                CONTACT US <span className="font-sans text-sm">→</span>
              </Link>

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
        </div>

        {/* Mobile Menu Drawer */}
        {isOpen && (
          <div className="lg:hidden border-t border-[#e5e7eb] bg-white">
            <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
              {navLinks.map((link) => {
                if (link.submenu) {
                  return (
                    <div key={link.name} className="flex flex-col border-b border-[#f5f5f5] pb-2">
                      <span className="block px-3 pt-3 pb-1 font-montserrat text-[10px] font-bold tracking-[0.15em] text-[#9ca3af] uppercase select-none">
                        {link.name}
                      </span>
                      {link.submenu.map((sublink) => {
                        const isSubActive = pathname === sublink.href;
                        return (
                          <Link
                            key={sublink.href}
                            href={sublink.href}
                            onClick={() => setIsOpen(false)}
                            className={`block pl-6 pr-3 py-2.5 font-montserrat text-xs font-bold tracking-[0.15em] ${
                              isSubActive
                                ? "text-[#C75550] bg-[#f5f5f5]"
                                : "text-[#111111] hover:text-[#C75550] hover:bg-[#f5f5f5]"
                            }`}
                          >
                            {sublink.name}
                          </Link>
                        );
                      })}
                    </div>
                  );
                }

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
              <div className="pt-4 pb-2 px-3 md:hidden">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full btn-yellow font-montserrat py-3 text-center block text-xs tracking-[0.15em] font-bold"
                >
                  CONTACT US <span className="font-sans text-sm">→</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
