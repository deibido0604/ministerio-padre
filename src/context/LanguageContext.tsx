import React, { createContext, useState, useContext, useEffect } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('app_language') : null;
    if (saved === 'es' || saved === 'en') {
      return saved;
    }
    return 'en'; // Default in English
  });
  const [translations, setTranslations] = useState<Record<string, any>>({});

  const setLanguage = (lang: Language) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('app_language', lang);
    }
    setLanguageState(lang);
  };

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const basePath = process.env.PUBLIC_URL || '';
        const response = await fetch(`${basePath}/locales/${language}.json`);
        const data = await response.json();
        setTranslations(data);
      } catch (error) {
        console.error('Error loading translations:', error);
      }
    };

    loadTranslations();
  }, [language]);

  const t = (key: string): string => {
    const keys = key
      .replace(/\[(\d+)\]/g, '.$1')
      .split('.');
    let value = translations;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};