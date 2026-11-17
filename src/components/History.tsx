import React, { useState } from 'react';
import { History as HistoryIcon, Target, Eye, Shield, Camera } from 'lucide-react';
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
    <section id="history" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-sky-100 rounded-2xl mb-4">
            <HistoryIcon className="w-8 h-8 text-sky-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">{t('history.title')}</h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">{t('history.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Columna izquierda - Historia y Galería de Comunidad */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow-sm space-y-6">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg">
                <span className="font-bold text-sky-600">{t('footer.companyName')}</span> {t('history.paragraph1')}
              </p>
              <p>{t('history.paragraph2')}</p>
              <p>{t('history.paragraph3')}</p>
            </div>

            {/* Mosaico de fotos reales de la iglesia */}
            <div className="pt-4 border-t border-gray-200">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <Camera className="w-5 h-5 text-sky-600" />
                  <h3 className="font-bold text-gray-800 text-sm">{t('history.galleryTitle')}</h3>
                </div>
                <span className="text-xs text-sky-600 font-medium">{t('hero.expandImage')}</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {HISTORY_PREVIEW_PHOTOS.map((src, idx) => (
                  <div
                    key={idx}
                    onClick={() => openModal(idx)}
                    className="relative group cursor-pointer overflow-hidden rounded-xl bg-gray-900 aspect-[3/4] shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    {/* Fondo desenfocado */}
                    <img
                      src={src}
                      alt=""
                      aria-hidden="true"
                      className="absolute inset-0 w-full h-full object-cover filter blur-sm opacity-40 scale-110"
                    />
                    {/* Imagen contenida */}
                    <img
                      src={src}
                      alt={`Foto de la comunidad ${idx + 1}`}
                      className="relative z-10 w-full h-full object-contain p-1 group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity z-20" />
                  </div>
                ))}
              </div>
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
