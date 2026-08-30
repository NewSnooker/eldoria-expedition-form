"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations, type Language, type Translations } from "./translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "th",
  setLanguage: () => {},
  t: translations.th,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("th");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("eldoria_lang") as Language;
      if (saved === "th" || saved === "en") {
        setLanguageState(saved);
      }
    } catch {
      // ignore
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("eldoria_lang", lang);
    } catch {
      // ignore
    }
  };

  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
