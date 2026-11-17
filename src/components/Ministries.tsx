import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Ministries: React.FC = () => {
  const { t } = useLanguage();

  const ministries = [
    {
      num: '01',
      title: t('ministries.music.title'),
      description: t('ministries.music.description'),
      accent: 'border-rose-500 text-rose-600',
    },
    {
      num: '02',
      title: t('ministries.education.title'),
      description: t('ministries.education.description'),
      accent: 'border-blue-500 text-blue-600',
    },
    {
      num: '03',
      title: t('ministries.community.title'),
      description: t('ministries.community.description'),
      accent: 'border-emerald-500 text-emerald-600',
    },
    {
      num: '04',
      title: t('ministries.youth.title'),
      description: t('ministries.youth.description'),
      accent: 'border-amber-500 text-amber-600',
    },
    {
      num: '05',
      title: t('ministries.missions.title'),
      description: t('ministries.missions.description'),
      accent: 'border-violet-500 text-violet-600',
    },
    {
      num: '06',
      title: t('ministries.children.title'),
      description: t('ministries.children.description'),
      accent: 'border-pink-500 text-pink-600',
    },
  ];

  return (
    <section id="ministries" className="py-20 bg-gray-50 text-center">
      <div className="container mx-auto px-4">
        {/* Encabezado centrado */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest block mb-2">
            {t('footer.companyName')}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3 tracking-tight">
            {t('ministries.title')}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {t('ministries.subtitle')}
          </p>
        </div>

        {/* Tarjetas de ministerios completamente centradas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {ministries.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-6 sm:p-7 border-t-4 ${item.accent.split(' ')[0]} border-x border-b border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center justify-between text-center`}
            >
              <div className="flex flex-col items-center text-center w-full">
                <span className={`text-xs font-bold tracking-wider ${item.accent.split(' ')[1]} mb-1 block`}>
                  {item.num}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mt-1 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm max-w-xs mx-auto">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-50 w-full flex justify-center">
                <a
                  href="#contact"
                  className="text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                >
                  {t('ministries.learnMore')}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ministries;
