import React, { useState, useEffect, useMemo } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import ImageModal from './ImageModal';

interface GalleryPhoto {
  src: string;
  category: 'general' | 'bibleStudy';
  titleKey: string;
}

const RAW_PHOTOS: GalleryPhoto[] = [
  { src: `${process.env.PUBLIC_URL || ''}/img/Culto General/Culto General 1.jpeg`, category: 'general', titleKey: 'hero.generalService' },
  { src: `${process.env.PUBLIC_URL || ''}/img/Culto General/Culto General 2.jpeg`, category: 'general', titleKey: 'hero.generalService' },
  { src: `${process.env.PUBLIC_URL || ''}/img/Culto General/Culto General 3.jpeg`, category: 'general', titleKey: 'hero.generalService' },
  { src: `${process.env.PUBLIC_URL || ''}/img/Culto General/Culto General 4.jpeg`, category: 'general', titleKey: 'hero.generalService' },
  { src: `${process.env.PUBLIC_URL || ''}/img/Culto General/Culto General 5.jpeg`, category: 'general', titleKey: 'hero.generalService' },
  { src: `${process.env.PUBLIC_URL || ''}/img/Estudio Biblico/Estudio Biblico 1.jpeg`, category: 'bibleStudy', titleKey: 'hero.bibleStudy' },
  { src: `${process.env.PUBLIC_URL || ''}/img/Estudio Biblico/Estudio Biblico 2.jpeg`, category: 'bibleStudy', titleKey: 'hero.bibleStudy' },
  { src: `${process.env.PUBLIC_URL || ''}/img/Estudio Biblico/Estudio Biblico 3.jpeg`, category: 'bibleStudy', titleKey: 'hero.bibleStudy' },
  { src: `${process.env.PUBLIC_URL || ''}/img/Estudio Biblico/Estudio Biblico 4.jpeg`, category: 'bibleStudy', titleKey: 'hero.bibleStudy' },
  { src: `${process.env.PUBLIC_URL || ''}/img/Estudio Biblico/Estudio Biblico 5.jpeg`, category: 'bibleStudy', titleKey: 'hero.bibleStudy' },
];

const CAROUSEL_PHOTOS: GalleryPhoto[] = RAW_PHOTOS.map((p) => ({
  ...p,
  src: encodeURI(p.src),
}));

const HeroCarousel: React.FC = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<'all' | 'general' | 'bibleStudy'>('all');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [fitMode, setFitMode] = useState<'contain' | 'cover'>('contain');

  const filteredPhotos = useMemo(() => {
    if (activeCategory === 'all') return CAROUSEL_PHOTOS;
    return CAROUSEL_PHOTOS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  useEffect(() => {
    setCurrentSlide(0);
  }, [activeCategory]);

  useEffect(() => {
    if (currentSlide >= filteredPhotos.length) {
      setCurrentSlide(0);
    }
  }, [filteredPhotos.length, currentSlide]);

  useEffect(() => {
    if (!isHovered && filteredPhotos.length > 1) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % filteredPhotos.length);
      }, 4500);
      return () => clearInterval(interval);
    }
  }, [filteredPhotos.length, isHovered]);

  const nextSlide = () => {
    if (filteredPhotos.length === 0) return;
    setCurrentSlide((prev) => (prev + 1) % filteredPhotos.length);
  };

  const prevSlide = () => {
    if (filteredPhotos.length === 0) return;
    setCurrentSlide((prev) => (prev - 1 + filteredPhotos.length) % filteredPhotos.length);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const currentPhoto = filteredPhotos[currentSlide] || CAROUSEL_PHOTOS[0];
  const allImagesForModal = filteredPhotos.map((p) => p.src);

  return (
    <section id="home" className="relative bg-gradient-to-b from-sky-50/60 via-white to-gray-50 pt-6 pb-16 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Columna Izquierda: Galería interactiva con visor optimizado */}
          <div className="lg:col-span-6 w-full">
            {/* Filtros de categoría */}
            <div className="flex items-center justify-between mb-3">
              <div className="inline-flex p-1 bg-gray-100 rounded-xl space-x-1 text-xs sm:text-sm">
                <button
                  onClick={() => setActiveCategory('all')}
                  className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                    activeCategory === 'all'
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {t('hero.allPhotos')} ({CAROUSEL_PHOTOS.length})
                </button>
                <button
                  onClick={() => setActiveCategory('general')}
                  className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                    activeCategory === 'general'
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {t('hero.generalService')}
                </button>
                <button
                  onClick={() => setActiveCategory('bibleStudy')}
                  className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                    activeCategory === 'bibleStudy'
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {t('hero.bibleStudy')}
                </button>
              </div>

              {/* Botón para alternar Ajustar / Llenar */}
              <button
                onClick={() => setFitMode((m) => (m === 'contain' ? 'cover' : 'contain'))}
                className="hidden sm:inline-flex items-center space-x-1 text-xs text-gray-500 hover:text-blue-600 transition-colors bg-white px-2.5 py-1.5 rounded-lg border border-gray-200 shadow-sm"
                title={t('hero.fit') + ' / ' + t('hero.fill')}
              >
                <span>{fitMode === 'contain' ? t('hero.fit') : t('hero.fill')}</span>
              </button>
            </div>

            {/* Contenedor del Carrusel con fondo difuminado y preservación de aspecto */}
            <div
              className="relative h-80 sm:h-[420px] md:h-[460px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-gray-950 ring-1 ring-black/10 select-none group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Capa 1: Fondo difuminado que llena el espacio armónicamente con los colores de la foto */}
              <img
                src={currentPhoto.src}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover filter blur-2xl scale-125 opacity-40 brightness-75 transition-opacity duration-700 pointer-events-none"
              />

              {/* Capa 2: Foto nítida completa (sin recortar personas ni rostros) */}
              <div className="relative z-10 w-full h-full flex items-center justify-center p-2 sm:p-4">
                <img
                  src={currentPhoto.src}
                  alt={t(currentPhoto.titleKey)}
                  className={`max-w-full max-h-full rounded-xl drop-shadow-2xl cursor-zoom-in transition-all duration-500 ${
                    fitMode === 'cover' ? 'w-full h-full object-cover' : 'w-auto h-auto object-contain'
                  }`}
                  onClick={openModal}
                />
              </div>

              {/* Badge superior izquierdo: Categoría */}
              <div className="absolute top-3 left-3 z-20 pointer-events-none">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-black/50 backdrop-blur-md text-white ring-1 ring-white/20 shadow-md">
                  <Sparkles className="w-3.5 h-3.5 mr-1.5 text-blue-300" />
                  {t(currentPhoto.titleKey)}
                </span>
              </div>

              {/* Botón superior derecho: Ampliar a pantalla completa */}
              <button
                onClick={openModal}
                className="absolute top-3 right-3 z-20 flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium bg-black/50 hover:bg-black/75 backdrop-blur-md text-white transition-all ring-1 ring-white/20 shadow-md"
                aria-label={t('hero.expandImage')}
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{t('hero.expandImage')}</span>
              </button>

              {/* Flechas de navegación lateral */}
              {filteredPhotos.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      prevSlide();
                    }}
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/70 text-white p-2.5 rounded-full backdrop-blur-md transition-all shadow-lg ring-1 ring-white/20 hover:scale-105"
                    aria-label="Slide anterior"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextSlide();
                    }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/70 text-white p-2.5 rounded-full backdrop-blur-md transition-all shadow-lg ring-1 ring-white/20 hover:scale-105"
                    aria-label="Siguiente slide"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}

              {/* Barra inferior: Indicadores de puntos y contador */}
              <div className="absolute bottom-0 inset-x-0 z-20 bg-gradient-to-t from-black/70 via-black/30 to-transparent pt-6 pb-3 px-4 flex items-center justify-between">
                {/* Dots */}
                <div className="flex items-center space-x-1.5 overflow-x-auto max-w-[70%] py-1">
                  {filteredPhotos.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-2 rounded-full transition-all ${
                        idx === currentSlide
                          ? 'w-6 bg-blue-400'
                          : 'w-2 bg-white/50 hover:bg-white/80'
                      }`}
                      aria-label={`Ir a foto ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Contador */}
                <div className="text-white text-xs font-medium bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full ring-1 ring-white/10">
                  <span>{currentSlide + 1}</span>
                  <span className="text-white/60"> / {filteredPhotos.length}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Contenido y presentación */}
          <div className="lg:col-span-6 text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 font-semibold text-sm rounded-full mb-4">
              {t('hero.welcome')}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
              <span className="text-blue-600">{t('hero.title')}</span>
            </h1>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 max-w-2xl mx-auto lg:mx-0">
              {t('hero.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3.5 bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
              >
                {t('hero.visitUs')}
              </button>
              <button
                onClick={() => scrollToSection('donations')}
                className="px-6 py-3.5 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold rounded-xl transition-all"
              >
                {t('hero.support')}
              </button>
            </div>

            {/* 3 Tarjetas de pilares */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-left">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-2 text-blue-600 font-bold">
                  👥
                </div>
                <h2 className="font-bold text-gray-800 text-sm mb-1">{t('hero.community')}</h2>
                <p className="text-xs text-gray-600">{t('hero.communityDesc')}</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mb-2 text-emerald-600 font-bold">
                  🌱
                </div>
                <h2 className="font-bold text-gray-800 text-sm mb-1">{t('hero.growth')}</h2>
                <p className="text-xs text-gray-600">{t('hero.growthDesc')}</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mb-2 text-amber-600 font-bold">
                  📖
                </div>
                <h2 className="font-bold text-gray-800 text-sm mb-1">{t('hero.teaching')}</h2>
                <p className="text-xs text-gray-600">{t('hero.teachingDesc')}</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Modal visor de alta resolución */}
      <ImageModal
        isOpen={modalOpen}
        images={allImagesForModal}
        currentIndex={currentSlide}
        onClose={closeModal}
        onNext={nextSlide}
        onPrev={prevSlide}
        title={t(currentPhoto.titleKey)}
      />
    </section>
  );
};

export default HeroCarousel;
