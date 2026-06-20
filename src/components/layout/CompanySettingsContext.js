"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { fetchCompanyProfile, fetchSocialLinks } from "@/lib/api";

const CompanySettingsContext = createContext(null);

export function CompanySettingsProvider({ children }) {
  const [profile, setProfile] = useState(null);
  const [socialLinks, setSocialLinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadSettings() {
      try {
        const [profileData, socialLinksData] = await Promise.all([
          fetchCompanyProfile(),
          fetchSocialLinks(),
        ]);
        setProfile(profileData);
        setSocialLinks(socialLinksData);
      } catch (err) {
        console.error("Failed to load company global settings:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    loadSettings();
  }, []);

  return (
    <CompanySettingsContext.Provider value={{ profile, socialLinks, loading, error }}>
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
