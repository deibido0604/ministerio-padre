import React from 'react';
import { Heart, Shield, Gift, CreditCard } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Donations: React.FC = () => {
  const { t } = useLanguage();
  const paypalUrl = "https://www.paypal.com/donate";

  return (
    <section id="donations" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-rose-100 rounded-2xl mb-4">
            <Heart className="w-8 h-8 text-rose-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">{t('donations.title')}</h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">{t('donations.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Columna izquierda - Información */}
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-rose-50 to-orange-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Gift className="w-5 h-5 text-rose-500 mr-2" />
                ¿Por qué donar?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-rose-500 rounded-full mt-2"></div>
                  <p className="text-gray-700"><span className="font-semibold">Misión y Evangelismo:</span> Apoya la expansión del evangelio en nuestra región.</p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-rose-500 rounded-full mt-2"></div>
                  <p className="text-gray-700"><span className="font-semibold">Ayuda Social:</span> Programas de alimentación y apoyo a familias vulnerables.</p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-rose-500 rounded-full mt-2"></div>
                  <p className="text-gray-700"><span className="font-semibold">Infraestructura:</span> Mejora de nuestras instalaciones para servir mejor.</p>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Otras formas de donar</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold">🏦</span>
                    </div>
                    <div>
                      <p className="font-semibold">Transferencia Bancaria</p>
                      <p className="text-sm text-gray-500">Banco Ficohsa - Cuenta: 200018296887</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-bold">⛪</span>
                    </div>
                    <div>
                      <p className="font-semibold">En persona</p>
                      <p className="text-sm text-gray-500">Domingos durante nuestros servicios</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Columna derecha - Botón de donación */}
          <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-6">
              <CreditCard className="w-12 h-12 text-sky-500 mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-gray-800">Donación en Línea</h3>
              <p className="text-gray-600 mt-2">Seguro, rápido y sencillo</p>
            </div>

            <a
              href={paypalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full px-6 py-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold rounded-xl hover:from-sky-600 hover:to-blue-700 transition-all shadow-lg"
            >
              <span>Donar con PayPal</span>
            </a>

            <div className="mt-6 flex items-center justify-center space-x-2 text-sm text-gray-500">
              <Shield className="w-4 h-4 text-green-500" />
              <span>100% seguro y protegido</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donations;