"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { fetchProductCategories, getProductCategoryHref } from "@/lib/api";
import {
  DEFAULT_PRODUCT_SUBMENU,
  INDUSTRIES_LINK,
  INSIGHTS_SUBMENU,
  LEGAL_LINKS,
  MANUFACTURING_SUBMENU,
} from "@/lib/navConfig";
import { useCompanySettings } from "./CompanySettingsContext";

function FooterColumn({ title, links }) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-title text-xs sm:text-sm font-bold tracking-wider text-white uppercase border-b border-[#111111] pb-2">
        {title}
      </h3>
      <ul className="flex flex-col gap-3 font-body text-xs text-[#9ca3af]">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="hover:text-[#C75550] transition-colors duration-150">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const { profile, socialLinks } = useCompanySettings();
  const [productLinks, setProductLinks] = useState(
    DEFAULT_PRODUCT_SUBMENU.map((item) => ({ label: item.name, href: item.href }))
  );

  useEffect(() => {
    async function loadProductCategories() {
      const categories = await fetchProductCategories();
      if (categories?.length > 0) {
        setProductLinks(
          categories.map((category) => ({
            label: category.name.toUpperCase(),
            href: getProductCategoryHref(category.name),
          }))
        );
      }
    }
    loadProductCategories();
  }, []);

  const tagline =
    profile?.tagline ||
    "Bymer Elastomers engineers precision rubber and elastomer components for automotive, industrial and OEM applications. We are IATF 16949:2016, ISO 9001:2015 and ISO 14001:2015 certified and have been providing reliable solutions since 1999.";
  const email = profile?.email || "sales@bymer.com";
  const phone = profile?.phone || "+91 98220 79899";
  const alternatePhone = profile?.alternate_phone || "+91 253 2381123";
  const address =
    profile?.address ||
    "Plot No. J-46 & 47 MIDC Area,\nAmbad, Nashik 422010,\nMaharashtra, India.";

  const getSocialIcon = (platform) => {
    const p = platform.toLowerCase();
    if (p.includes("linkedin")) return "fa-brands fa-linkedin-in";
    if (p.includes("youtube")) return "fa-brands fa-youtube";
    if (p.includes("email") || p.includes("mail")) return "fa-regular fa-envelope";
    if (p.includes("facebook")) return "fa-brands fa-facebook-f";
    if (p.includes("twitter") || p.includes("x.com")) return "fa-brands fa-x-twitter";
    if (p.includes("instagram")) return "fa-brands fa-instagram";
    return "fa-solid fa-link";
  };

  const productsColumnLinks = [
    { label: "ALL PRODUCTS", href: "/products" },
    ...productLinks,
    { label: "COMPOUNDS", href: "/compounds" },
    { label: INDUSTRIES_LINK.footerName, href: INDUSTRIES_LINK.href },
  ];

  const manufacturingColumnLinks = MANUFACTURING_SUBMENU.map((item) => ({
    label: item.name,
    href: item.href,
  }));

  const insightsColumnLinks = [
    ...INSIGHTS_SUBMENU.map((item) => ({ label: item.name, href: item.href })),
    ...LEGAL_LINKS.map((item) => ({ label: item.name, href: item.href })),
  ];

  return (
    <footer className="w-full bg-[#0a0a0a] text-[#f5f5f5] border-t border-[#111111] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start pb-12">
          <div className="sm:col-span-2 lg:col-span-4 flex flex-col gap-5">
            <Logo variant="footer" />
            <p className="font-body text-sm text-[#9ca3af] leading-relaxed max-w-md">
              {tagline}
            </p>
            <div className="flex items-center gap-5 pt-1">
              {socialLinks && socialLinks.length > 0 ? (
                socialLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white/60 hover:text-[#C75550] transition-colors duration-150"
                    aria-label={link.platform}
                  >
                    <i className={`${getSocialIcon(link.platform)} text-base`} />
                  </a>
                ))
              ) : (
                <>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white/60 hover:text-[#C75550] transition-colors duration-150"
                    aria-label="LinkedIn"
                  >
                    <i className="fa-brands fa-linkedin-in text-base" />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white/60 hover:text-[#C75550] transition-colors duration-150"
                    aria-label="YouTube"
                  >
                    <i className="fa-brands fa-youtube text-base" />
                  </a>
                  <a
                    href={`mailto:${email}`}
                    className="text-white/60 hover:text-[#C75550] transition-colors duration-150"
                    aria-label="Email"
                  >
                    <i className="fa-regular fa-envelope text-base" />
                  </a>
                </>
              )}
            </div>
          </div>

          <div className="lg:col-span-2">
            <FooterColumn title="Products" links={productsColumnLinks} />
          </div>

          <div className="lg:col-span-2">
            <FooterColumn title="Manufacturing" links={manufacturingColumnLinks} />
          </div>

          <div className="lg:col-span-2">
            <FooterColumn title="Insights" links={insightsColumnLinks} />
          </div>

          <div className="sm:col-span-2 lg:col-span-2 flex flex-col gap-4">
            <h3 className="font-title text-xs sm:text-sm font-bold tracking-wider text-white uppercase border-b border-[#111111] pb-2">
              Get in Touch
            </h3>
            <div className="flex flex-col gap-3 font-body text-xs text-[#9ca3af]">
              <a href={`tel:${phone}`} className="hover:text-[#C75550] transition-colors duration-150">
                {phone}
              </a>
              <a
                href={`tel:${alternatePhone}`}
                className="hover:text-[#C75550] transition-colors duration-150"
              >
                {alternatePhone}
              </a>
              <a
                href={`mailto:${email}`}
                className="hover:text-[#C75550] transition-colors duration-150 lowercase"
              >
                {email}
              </a>
              <address className="not-italic leading-relaxed whitespace-pre-line">
                {address}
              </address>
              <p className="font-montserrat text-xs uppercase tracking-wider pt-1">
                <span className="text-white font-bold">GSTIN: </span>
                <span className="text-[#fbbd05] font-bold">27AADP8030173</span>
              </p>
              <Link
                href="/contact"
                className="inline-flex w-fit items-center justify-center mt-1 bg-[#fbbd05] text-[#1c1b1b] px-5 py-2.5 font-montserrat text-[10px] font-bold tracking-[0.15em] uppercase border border-[#111111] hover:bg-[#e5a804] transition-colors duration-150"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-[#111111] pt-8">
          <p className="font-montserrat text-[10px] sm:text-xs text-[#9ca3af] text-center uppercase tracking-wider select-none">
            © 2026 BYMER ELASTOMERS. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
