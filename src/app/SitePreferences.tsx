"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Language = "en" | "pt";

type SitePreferences = {
  language: Language;
  bubblesEnabled: boolean;
  setLanguage: (language: Language) => void;
  setBubblesEnabled: (enabled: boolean) => void;
};

const SitePreferencesContext = createContext<SitePreferences | null>(null);

export function SitePreferencesProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");
  const [bubblesEnabled, setBubblesEnabled] = useState(true);

  useEffect(() => {
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
  }, [language]);

  return (
    <SitePreferencesContext.Provider
      value={{ language, bubblesEnabled, setLanguage, setBubblesEnabled }}
    >
      {children}
    </SitePreferencesContext.Provider>
  );
}

export function useSitePreferences() {
  const preferences = useContext(SitePreferencesContext);

  if (!preferences) {
    throw new Error("useSitePreferences must be used inside SitePreferencesProvider");
  }

  return preferences;
}
