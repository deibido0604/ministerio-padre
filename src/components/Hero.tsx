import React from 'react';
import { ArrowDown, Heart, Users, BookOpen } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-20 overflow-hidden">
      {/* Fondo gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-blue-50 -z-10" />
      
      {/* Patrón decorativo */}
      <div className="absolute inset-0 opacity-5 -z-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-sky-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenido izquierdo */}
          <div className="text-center lg:text-left animate-slide-up">
            <div className="inline-block px-4 py-1 bg-sky-100 rounded-full mb-6">
              <span className="text-sky-700 text-sm font-medium">{t('hero.welcome')}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {t('hero.title')}
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {t('hero.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold rounded-xl hover:from-sky-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl"
              >
                {t('hero.visitUs')}
              </button>
              <button
                onClick={() => scrollToSection('donations')}
                className="px-6 py-3 border-2 border-sky-500 text-sky-600 font-semibold rounded-xl hover:bg-sky-50 transition-all"
              >
                {t('hero.support')}
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-gray-200">
              <div>
                <p className="text-2xl font-bold text-sky-600">10+</p>
                <p className="text-sm text-gray-500">{t('hero.growth')}</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-sky-600">500+</p>
                <p className="text-sm text-gray-500">{t('hero.community')}</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-sky-600">5</p>
                <p className="text-sm text-gray-500">{t('hero.teaching')}</p>
              </div>
            </div>
          </div>

          {/* Lado derecho - Placeholder de imagen */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-square bg-gradient-to-br from-sky-200 to-blue-200 flex items-center justify-center">
                <div className="text-center p-8">
                  <Heart className="w-20 h-20 text-sky-500 mx-auto mb-4 opacity-50" />
                  <p className="text-gray-500 font-medium">📸 {t('hero.title')}</p>
                  <p className="text-sm text-gray-400 mt-2">Ministerio Vida Eterna</p>
                </div>
              </div>
            </div>
            
            {/* Tarjetas flotantes */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 hidden lg:block">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-sky-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">+200 {t('hero.community')}</p>
                  <p className="text-xs text-gray-500">{t('hero.communityDesc')}</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4 hidden lg:block">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{t('hero.teaching')}</p>
                  <p className="text-xs text-gray-500">{t('hero.teachingDesc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Flecha para bajar */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button onClick={() => scrollToSection('history')} className="text-gray-400 hover:text-sky-500 transition-colors">
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;