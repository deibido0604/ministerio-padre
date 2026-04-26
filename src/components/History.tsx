import React from 'react';
import { History as HistoryIcon, Target, Eye, Shield } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const History: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="history" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-sky-100 rounded-2xl mb-4">
            <HistoryIcon className="w-8 h-8 text-sky-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">{t('history.title')}</h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">{t('history.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Columna izquierda - Historia */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                <span className="font-bold text-sky-600">{t('footer.companyName')}</span> {t('history.paragraph1')}
              </p>
              <p>
                {t('history.paragraph2')}
              </p>
              <p>
                {t('history.paragraph3')}
              </p>
            </div>
            
            {/* Placeholder de imagen */}
            <div className="mt-6 p-4 bg-gray-100 rounded-xl text-center">
              <p className="text-gray-500 text-sm">📸 Galería histórica - Próximamente</p>
            </div>
          </div>

          {/* Columna derecha - Misión, Visión, Valores */}
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-sky-50 to-blue-50 rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-3">
                <div className="p-2 bg-sky-500 rounded-xl">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">{t('history.mission')}</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {t('history.missionText')}
              </p>
            </div>

            <div className="bg-gradient-to-r from-sky-50 to-blue-50 rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-3">
                <div className="p-2 bg-sky-500 rounded-xl">
                  <Eye className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">{t('history.vision')}</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {t('history.visionText')}
              </p>
            </div>

            <div className="bg-gradient-to-r from-sky-50 to-blue-50 rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-3">
                <div className="p-2 bg-sky-500 rounded-xl">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">{t('history.values')}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {t('history.valuesList').split(', ').map((value: string) => (
                  <span key={value} className="px-3 py-1 bg-white rounded-full text-sm text-sky-600 font-medium shadow-sm">
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;