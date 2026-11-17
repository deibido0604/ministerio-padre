import React, { useState } from "react";
import { Menu, X, MapPin, Phone } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const menuItems = [
    { label: t('header.home'), href: "#home" },
    { label: t('header.history'), href: "#history" },
    { label: t('header.ministries'), href: "#ministries" },
    { label: t('header.donations'), href: "#donations" },
    { label: t('header.contact'), href: "#contact" },
  ];

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 py-3.5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-3 group">
            <div className="h-10 w-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-sm shadow-sm group-hover:bg-blue-700 transition-colors">
              VE
            </div>

            <div>
              <span className="text-lg sm:text-xl font-bold text-gray-900 block leading-tight">
                {t('footer.companyName')}
              </span>
              <span className="text-xs text-gray-500 hidden sm:block">
                {t('footer.tagline')}
              </span>
            </div>
          </a>

          {/* Desktop Navigation - Centrada */}
          <nav className="hidden md:flex items-center justify-center space-x-7 flex-1 mx-6">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Controls */}
          <div className="hidden lg:flex items-center space-x-5">
            <button
              onClick={toggleLanguage}
              className="px-2.5 py-1 rounded-md text-xs font-bold text-gray-700 hover:text-blue-600 border border-gray-200 hover:border-blue-600 transition-colors uppercase tracking-wider"
              aria-label={t('header.language')}
            >
              {language === 'es' ? 'EN' : 'ES'}
            </button>

            <a
              href="tel:+50496337658"
              className="text-xs font-semibold text-gray-700 hover:text-blue-600 transition-colors"
            >
              +504 9633-7658
            </a>
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleLanguage}
              className="px-2 py-1 rounded text-xs font-bold text-gray-700 border border-gray-200 uppercase"
              aria-label={t('header.language')}
            >
              {language === 'es' ? 'EN' : 'ES'}
            </button>

            <button
              className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-700 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown - Completamente centrado y con iconos útiles */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-gray-100 text-center animate-fadeIn">
            <div className="flex flex-col space-y-1 py-2 items-center justify-center">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="w-full text-center py-2.5 rounded-lg text-sm font-semibold text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="pt-3 pb-2 border-t border-gray-100 text-xs text-gray-600 flex flex-col items-center justify-center space-y-2 text-center">
              <a
                href="https://maps.google.com/?q=78-80+W+Elm+St,+Brockton,+MA+02301"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-1.5 hover:text-blue-600 text-center"
              >
                <MapPin className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                <span>78-80 W Elm St, Brockton, MA 02301</span>
              </a>
              <a
                href="tel:+50496337658"
                className="flex items-center justify-center space-x-1.5 hover:text-blue-600 font-semibold text-center"
              >
                <Phone className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                <span>+504 9633-7658</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
