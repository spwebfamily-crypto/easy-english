import { createContext, useContext, useState, type ReactNode, useEffect } from "react";
import { translations, type Language } from "../constants/translations";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.pt;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("language");
    if (saved && (saved === "pt" || saved === "en" || saved === "ru" || saved === "es")) {
      return saved as Language;
    }
    
    // Detect browser language
    const browserLang = navigator.language.split("-")[0];
    if (browserLang === "en" || browserLang === "ru" || browserLang === "es") {
      return browserLang as Language;
    }
    
    return "pt";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
    document.documentElement.lang = lang === "pt" ? "pt-BR" : lang;
  };

  useEffect(() => {
    document.documentElement.lang = language === "pt" ? "pt-BR" : language;
  }, [language]);

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useTranslation must be used within a LanguageProvider");
  }
  return context;
}
