import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Donations: React.FC = () => {
  const { t } = useLanguage();
  const paypalUrl = "https://www.paypal.com/donate";

  return (
    <section id="donations" className="py-20 bg-white text-center">
      <div className="container mx-auto px-4">
        {/* Encabezado centrado */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest block mb-2">
            {t('footer.companyName')}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3 tracking-tight">
            {t('donations.title')}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {t('donations.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-stretch max-w-5xl mx-auto">
          {/* Columna izquierda - Razones y Otras formas completamente centradas */}
          <div className="space-y-6 flex flex-col justify-between">
            <div className="bg-gray-50 rounded-2xl p-6 sm:p-7 border border-gray-100 flex flex-col items-center text-center shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-5">
                {t('donations.whyDonate')}
              </h3>
              <ul className="space-y-4 w-full">
                <li className="border-t-2 border-blue-600 pt-3 flex flex-col items-center text-center">
                  <p className="font-semibold text-gray-900 text-sm">{t('donations.missionHeading')}</p>
                  <p className="text-gray-600 text-xs sm:text-sm mt-0.5 max-w-sm">{t('donations.missionDesc')}</p>
                </li>
                <li className="border-t-2 border-emerald-600 pt-3 flex flex-col items-center text-center">
                  <p className="font-semibold text-gray-900 text-sm">{t('donations.socialHeading')}</p>
                  <p className="text-gray-600 text-xs sm:text-sm mt-0.5 max-w-sm">{t('donations.socialDesc')}</p>
                </li>
                <li className="border-t-2 border-amber-600 pt-3 flex flex-col items-center text-center">
                  <p className="font-semibold text-gray-900 text-sm">{t('donations.infraHeading')}</p>
                  <p className="text-gray-600 text-xs sm:text-sm mt-0.5 max-w-sm">{t('donations.infraDesc')}</p>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-col items-center text-center shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                {t('donations.otherWays')}
              </h3>
              <div className="space-y-3 w-full">
                <div className="p-4 bg-white rounded-xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
                  <p className="font-semibold text-gray-900 text-sm">{t('donations.bank.title')}</p>
                  <p className="text-xs text-gray-500 mt-0.5">Banco Ficohsa · Cuenta: 200018296887</p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
                  <p className="font-semibold text-gray-900 text-sm">{t('donations.inPerson')}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{t('donations.inPersonDesc')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Columna derecha - Donación en Línea completamente centrada */}
          <div className="bg-gradient-to-br from-blue-50/50 via-white to-sky-50/50 rounded-2xl p-8 sm:p-10 border border-blue-100 shadow-md flex flex-col items-center justify-center text-center">
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider block mb-2">
              {t('donations.onlineDonation')}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              {t('donations.onlineSubtitle')}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base mb-8 max-w-md mx-auto leading-relaxed">
              {t('donations.description')}
            </p>

            <a
              href={paypalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full max-w-xs px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all shadow-md hover:shadow-lg text-sm sm:text-base mx-auto"
            >
              {t('donations.donatePaypal')}
            </a>

            <p className="mt-4 text-xs text-gray-500">
              {t('donations.secure')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donations;
