"use client";

import React, { createContext, useContext } from "react";
import { STATIC_COMPANY_PROFILE, STATIC_SOCIAL_LINKS } from "@/lib/staticData";

const CompanySettingsContext = createContext(null);

export function CompanySettingsProvider({ children }) {
  return (
    <CompanySettingsContext.Provider
      value={{
        profile: STATIC_COMPANY_PROFILE,
        socialLinks: STATIC_SOCIAL_LINKS,
        loading: false,
        error: null,
      }}
    >
      {children}
    </CompanySettingsContext.Provider>
  );
}

export function useCompanySettings() {
  const context = useContext(CompanySettingsContext);
  if (!context) {
    throw new Error("useCompanySettings must be used within a CompanySettingsProvider");
  }
  return context;
}
