import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Facebook', href: 'https://facebook.com', label: 'FB' },
    { name: 'Instagram', href: 'https://instagram.com', label: 'IG' },
    { name: 'YouTube', href: 'https://youtube.com', label: 'YT' },
    { name: 'WhatsApp', href: 'https://wa.me/50496337658', label: 'WA' },
  ];

  return (
    <footer className="bg-gray-900 text-white text-center">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12 max-w-6xl mx-auto">
          {/* Columna 1: Información centrada */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-xl font-bold mb-3">{t('footer.companyName')}</h3>
            <p className="text-gray-400 text-sm mb-3 leading-relaxed max-w-xs">{t('footer.tagline')}</p>
            <p className="text-gray-400 text-xs leading-relaxed max-w-xs">{t('footer.description')}</p>
          </div>

          {/* Columna 2: Enlaces Rápidos centrados */}
          <div className="flex flex-col items-center text-center">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-gray-300 mb-4">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-2.5 text-sm flex flex-col items-center">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">{t('header.home')}</a></li>
              <li><a href="#history" className="text-gray-400 hover:text-white transition-colors">{t('header.history')}</a></li>
              <li><a href="#ministries" className="text-gray-400 hover:text-white transition-colors">{t('header.ministries')}</a></li>
              <li><a href="#donations" className="text-gray-400 hover:text-white transition-colors">{t('header.donations')}</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">{t('header.contact')}</a></li>
            </ul>
          </div>

          {/* Columna 3: Contacto centrado */}
          <div className="flex flex-col items-center text-center">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-gray-300 mb-4">
              {t('footer.contactInfo')}
            </h4>
            <ul className="space-y-3 text-sm text-gray-400 flex flex-col items-center">
              <li>
                <a
                  href="https://maps.google.com/?q=78-80+W+Elm+St,+Brockton,+MA+02301"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors leading-relaxed block text-center max-w-xs"
                >
                  {t('footer.address')}
                </a>
              </li>
              <li>
                <a href="tel:+50496337658" className="hover:text-white transition-colors">
                  {t('footer.phone')}
                </a>
              </li>
              <li>
                <a href="mailto:info@ministeriovidaeterna.org" className="hover:text-white transition-colors break-all">
                  {t('footer.email')}
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 4: Redes sociales centradas */}
          <div className="flex flex-col items-center text-center">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-gray-300 mb-4">
              {t('footer.socialMedia')}
            </h4>
            <div className="flex flex-wrap justify-center gap-2 max-w-xs">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 bg-gray-800 hover:bg-blue-600 text-xs font-semibold rounded-lg transition-colors text-gray-300 hover:text-white"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-xs space-y-1">
          <p>
            © {currentYear} {t('footer.companyName')}. {t('footer.copyright')}
          </p>
          <p>
            {t('footer.madeWith')} · {t('footer.for')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
