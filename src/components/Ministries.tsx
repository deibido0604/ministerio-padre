import React from 'react';
import { Music, BookOpen, Heart, Users, Globe, Baby, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Ministries: React.FC = () => {
  const { t } = useLanguage();

  const ministries = [
    { icon: Music, title: t('ministries.music.title'), description: t('ministries.music.description'), color: 'from-rose-500 to-rose-600' },
    { icon: BookOpen, title: t('ministries.education.title'), description: t('ministries.education.description'), color: 'from-sky-500 to-blue-600' },
    { icon: Heart, title: t('ministries.community.title'), description: t('ministries.community.description'), color: 'from-emerald-500 to-teal-600' },
    { icon: Users, title: t('ministries.youth.title'), description: t('ministries.youth.description'), color: 'from-amber-500 to-orange-600' },
    { icon: Globe, title: t('ministries.missions.title'), description: t('ministries.missions.description'), color: 'from-violet-500 to-purple-600' },
    { icon: Baby, title: t('ministries.children.title'), description: t('ministries.children.description'), color: 'from-pink-500 to-rose-600' },
  ];

  return (
    <section id="ministries" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">{t('ministries.title')}</h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">{t('ministries.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ministries.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">{item.description}</p>
              <button className="text-sky-600 font-medium flex items-center space-x-1 group-hover:space-x-2 transition-all">
                <span>{t('ministries.learnMore')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ministries;