import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import ImageModal from './ImageModal';

const HISTORY_PREVIEW_PHOTOS = [
  encodeURI(`${process.env.PUBLIC_URL || ''}/img/Culto General/Culto General 1.jpeg`),
  encodeURI(`${process.env.PUBLIC_URL || ''}/img/Culto General/Culto General 4.jpeg`),
  encodeURI(`${process.env.PUBLIC_URL || ''}/img/Estudio Biblico/Estudio Biblico 1.jpeg`),
  encodeURI(`${process.env.PUBLIC_URL || ''}/img/Estudio Biblico/Estudio Biblico 3.jpeg`),
];

const History: React.FC = () => {
  const { t } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openModal = (idx: number) => {
    setSelectedIndex(idx);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  return (
    <section id="history" className="py-20 bg-white text-center">
      <div className="container mx-auto px-4">
        {/* Encabezado de sección centrado */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest block mb-2">
            {t('footer.companyName')}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3 tracking-tight">
            {t('history.title')}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {t('history.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-stretch max-w-6xl mx-auto">
          {/* Columna izquierda - Historia y Galería completamente centradas */}
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-100 flex flex-col items-center justify-between text-center space-y-6">
            <div className="space-y-4 text-gray-700 leading-relaxed max-w-lg mx-auto">
              <p className="text-lg font-medium text-gray-900">
                <span className="text-blue-600 font-bold">{t('footer.companyName')}</span> {t('history.paragraph1')}
              </p>
              <p className="text-sm sm:text-base">{t('history.paragraph2')}</p>
              <p className="text-sm sm:text-base">{t('history.paragraph3')}</p>
            </div>

            {/* Mosaico de fotos centrado */}
            <div className="pt-6 border-t border-gray-200 w-full flex flex-col items-center">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-4 text-center">
                <h3 className="font-bold text-gray-900 text-sm">
                  {t('history.galleryTitle')}
                </h3>
                <span className="text-xs text-blue-600 font-medium">
                  ({t('hero.expandImage')})
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-lg justify-center">
                {HISTORY_PREVIEW_PHOTOS.map((src, idx) => (
                  <div
                    key={idx}
                    onClick={() => openModal(idx)}
                    className="relative group cursor-pointer overflow-hidden rounded-xl bg-gray-950 aspect-[3/4] shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    {/* Fondo desenfocado */}
                    <img
                      src={src}
                      alt=""
                      aria-hidden="true"
                      className="absolute inset-0 w-full h-full object-cover filter blur-sm opacity-35 scale-110 pointer-events-none"
                    />
                    {/* Imagen contenida completa */}
                    <img
                      src={src}
                      alt={`Foto de la comunidad ${idx + 1}`}
                      className="relative z-10 w-full h-full object-contain p-1 group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Columna derecha - Misión, Visión, Valores completamente centrados */}
          <div className="flex flex-col justify-between space-y-5 text-center">
            <div className="bg-gray-50 border-t-4 border-blue-600 rounded-2xl p-6 sm:p-7 border-x border-b border-gray-100 flex flex-col items-center text-center shadow-sm">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-1">
                01
              </span>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {t('history.mission')}
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base max-w-md mx-auto">
                {t('history.missionText')}
              </p>
            </div>

            <div className="bg-gray-50 border-t-4 border-emerald-600 rounded-2xl p-6 sm:p-7 border-x border-b border-gray-100 flex flex-col items-center text-center shadow-sm">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-1">
                02
              </span>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {t('history.vision')}
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base max-w-md mx-auto">
                {t('history.visionText')}
              </p>
            </div>

            <div className="bg-gray-50 border-t-4 border-amber-600 rounded-2xl p-6 sm:p-7 border-x border-b border-gray-100 flex flex-col items-center text-center shadow-sm">
              <span className="text-xs font-bold text-amber-600 uppercase tracking-widest mb-1">
                03
              </span>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {t('history.values')}
              </h3>
              <div className="flex flex-wrap justify-center gap-2 max-w-md mx-auto">
                {t('history.valuesList').split(', ').map((value: string) => (
                  <span
                    key={value}
                    className="px-3.5 py-1.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-800 font-medium shadow-sm"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <ImageModal
        isOpen={modalOpen}
        images={HISTORY_PREVIEW_PHOTOS}
        currentIndex={selectedIndex}
        onClose={closeModal}
        onNext={() => setSelectedIndex((prev) => (prev + 1) % HISTORY_PREVIEW_PHOTOS.length)}
        onPrev={() => setSelectedIndex((prev) => (prev - 1 + HISTORY_PREVIEW_PHOTOS.length) % HISTORY_PREVIEW_PHOTOS.length)}
        title={t('history.galleryTitle')}
      />
    </section>
  );
};

export default History;
