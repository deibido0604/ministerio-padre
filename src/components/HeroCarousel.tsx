import React, { useState, useEffect, useMemo } from 'react';
import { ChevronLeft, ChevronRight, Calendar, ArrowRight } from 'lucide-react';
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
    <section id="home" className="relative bg-gradient-to-b from-sky-50/50 via-white to-gray-50 pt-8 pb-16 md:py-20 text-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Columna Izquierda: Galería interactiva con visor optimizado */}
          <div className="lg:col-span-6 w-full flex flex-col items-center">
            {/* Filtros de categoría centrados */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-3 w-full">
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
                className="hidden sm:inline-block text-xs font-medium text-gray-500 hover:text-blue-600 transition-colors bg-white px-3 py-1.5 rounded-lg border border-gray-200 shadow-sm"
              >
                {fitMode === 'contain' ? t('hero.fit') : t('hero.fill')}
              </button>
            </div>

            {/* Contenedor del Carrusel con fondo difuminado y preservación de aspecto */}
            <div
              className="relative w-full max-w-lg lg:max-w-none h-80 sm:h-[420px] md:h-[460px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl bg-gray-950 ring-1 ring-black/10 select-none group mx-auto"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Capa 1: Fondo difuminado que llena el espacio armónicamente */}
              <img
                src={currentPhoto.src}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover filter blur-2xl scale-125 opacity-35 brightness-75 transition-opacity duration-700 pointer-events-none"
              />

              {/* Capa 2: Foto nítida completa */}
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
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-black/60 backdrop-blur-md text-white ring-1 ring-white/15 shadow-sm">
                  {t(currentPhoto.titleKey)}
                </span>
              </div>

              {/* Botón superior derecho: Ampliar a pantalla completa */}
              <button
                onClick={openModal}
                className="absolute top-3 right-3 z-20 px-3 py-1 rounded-full text-xs font-medium bg-black/60 hover:bg-black/80 backdrop-blur-md text-white transition-all ring-1 ring-white/15 shadow-sm"
                aria-label={t('hero.expandImage')}
              >
                {t('hero.expandImage')}
              </button>

              {/* Flechas de navegación lateral funcionales */}
              {filteredPhotos.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      prevSlide();
                    }}
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/70 text-white p-2.5 rounded-full backdrop-blur-md transition-all shadow-md ring-1 ring-white/20 hover:scale-105"
                    aria-label="Slide anterior"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextSlide();
                    }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/70 text-white p-2.5 rounded-full backdrop-blur-md transition-all shadow-md ring-1 ring-white/20 hover:scale-105"
                    aria-label="Siguiente slide"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}

              {/* Barra inferior: Indicadores de puntos y contador centrados */}
              <div className="absolute bottom-0 inset-x-0 z-20 bg-gradient-to-t from-black/70 via-black/25 to-transparent pt-6 pb-3 px-4 flex items-center justify-between">
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

                <div className="text-white text-xs font-medium bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full ring-1 ring-white/10">
                  <span>{currentSlide + 1}</span>
                  <span className="text-white/60"> / {filteredPhotos.length}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Contenido y presentación editorial completamente centrada */}
          <div className="lg:col-span-6 flex flex-col items-center text-center">
            <span className="inline-block px-3.5 py-1 bg-blue-50 text-blue-700 text-xs font-semibold tracking-wide uppercase rounded-full mb-3 border border-blue-100 mx-auto">
              {t('hero.welcome')}
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4 tracking-tight text-center">
              {t('hero.title')}
            </h1>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto text-center">
              {t('hero.description')}
            </p>

            {/* Botones de acción centrados con icono sutil en versión móvil */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 w-full">
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2"
              >
                <Calendar className="w-4 h-4 sm:hidden flex-shrink-0" />
                <span>{t('hero.visitUs')}</span>
              </button>
              <button
                onClick={() => scrollToSection('donations')}
                className="w-full sm:w-auto px-6 py-3.5 border border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 font-semibold rounded-xl transition-all bg-white flex items-center justify-center space-x-2"
              >
                <span>{t('hero.support')}</span>
                <ArrowRight className="w-4 h-4 sm:hidden flex-shrink-0" />
              </button>
            </div>

            {/* 3 Tarjetas de pilares - completamente centradas */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 w-full">
              <div className="bg-white p-4 rounded-xl shadow-sm border-t-2 border-blue-600 border-x border-b border-gray-100 flex flex-col items-center text-center">
                <span className="text-xs font-bold text-blue-600 tracking-wider">01</span>
                <h2 className="font-bold text-gray-900 text-sm mt-1 mb-1">{t('hero.community')}</h2>
                <p className="text-xs text-gray-600 leading-relaxed">{t('hero.communityDesc')}</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border-t-2 border-emerald-600 border-x border-b border-gray-100 flex flex-col items-center text-center">
                <span className="text-xs font-bold text-emerald-600 tracking-wider">02</span>
                <h2 className="font-bold text-gray-900 text-sm mt-1 mb-1">{t('hero.growth')}</h2>
                <p className="text-xs text-gray-600 leading-relaxed">{t('hero.growthDesc')}</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border-t-2 border-amber-600 border-x border-b border-gray-100 flex flex-col items-center text-center">
                <span className="text-xs font-bold text-amber-600 tracking-wider">03</span>
                <h2 className="font-bold text-gray-900 text-sm mt-1 mb-1">{t('hero.teaching')}</h2>
                <p className="text-xs text-gray-600 leading-relaxed">{t('hero.teachingDesc')}</p>
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
