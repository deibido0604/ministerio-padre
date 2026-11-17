import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageModalProps {
  isOpen: boolean;
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
  title?: string;
}

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
  title,
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight' && onNext) {
        onNext();
      } else if (e.key === 'ArrowLeft' && onPrev) {
        onPrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onNext, onPrev, onClose]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex] || images[0];

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-6 transition-all duration-300"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
    >
      {/* Botón de cerrar superior */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full backdrop-blur-md transition-all z-20 shadow-lg"
        aria-label="Cerrar modal"
      >
        <X className="h-6 w-6" />
      </button>

      {/* Contenedor principal de la imagen */}
      <div className="relative flex flex-col items-center justify-center max-w-5xl w-full h-full max-h-[92vh]">
        <div className="relative flex items-center justify-center w-full flex-1 min-h-0">
          <img
            src={currentImage}
            alt={title || `Imagen ${currentIndex + 1}`}
            className="max-h-[82vh] max-w-[90vw] md:max-w-[80vw] w-auto h-auto object-contain rounded-2xl shadow-2xl select-none transition-all duration-300 ring-1 ring-white/10"
          />

          {images.length > 1 && (
            <>
              {onPrev && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onPrev();
                  }}
                  className="absolute left-2 sm:-left-4 md:-left-8 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/90 text-white p-3 rounded-full backdrop-blur-md transition-all shadow-xl hover:scale-105 ring-1 ring-white/20 z-10"
                  aria-label="Imagen anterior"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
              )}

              {onNext && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onNext();
                  }}
                  className="absolute right-2 sm:-right-4 md:-right-8 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/90 text-white p-3 rounded-full backdrop-blur-md transition-all shadow-xl hover:scale-105 ring-1 ring-white/20 z-10"
                  aria-label="Siguiente imagen"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              )}
            </>
          )}
        </div>

        {/* Barra inferior con contador y título */}
        <div className="mt-3 flex items-center justify-center space-x-3 text-white text-sm select-none">
          <div className="bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full ring-1 ring-white/15">
            <span className="font-semibold">{currentIndex + 1}</span>
            <span className="text-white/60"> / {images.length}</span>
            {title && <span className="ml-2 text-white/80">· {title}</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
