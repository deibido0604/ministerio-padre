import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const whatsappNumber = "50496337658";
  const whatsappMessage = encodeURIComponent("Hello, I would like more information about the ministry");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section id="contact" className="py-20 bg-gray-50 text-center">
      <div className="container mx-auto px-4">
        {/* Encabezado centrado */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest block mb-2">
            {t('footer.companyName')}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3 tracking-tight">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-5xl mx-auto items-start">
          {/* Columna izquierda - Datos de Contacto centrados */}
          <div className="lg:col-span-5 space-y-4 flex flex-col items-center w-full">
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-200/80 shadow-md space-y-5 w-full flex flex-col items-center text-center">
              {/* Dirección */}
              <div className="flex flex-col items-center text-center w-full">
                <div className="sm:hidden w-7 h-7 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <p className="text-xs uppercase tracking-wider font-semibold text-blue-600 mb-1">
                  {t('contact.address')}
                </p>
                <a
                  href="https://maps.google.com/?q=78-80+W+Elm+St,+Brockton,+MA+02301"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 hover:text-blue-600 font-medium transition-colors leading-relaxed block text-center"
                >
                  78-80 W Elm St<br />Brockton, MA 02301
                </a>
              </div>

              {/* Teléfono */}
              <div className="border-t border-gray-100 pt-4 flex flex-col items-center text-center w-full">
                <div className="sm:hidden w-7 h-7 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-1.5">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <p className="text-xs uppercase tracking-wider font-semibold text-blue-600 mb-1">
                  {t('contact.phone')}
                </p>
                <a
                  href="tel:+50496337658"
                  className="text-gray-900 hover:text-blue-600 font-medium transition-colors text-center"
                >
                  +504 9633-7658
                </a>
              </div>

              {/* Email */}
              <div className="border-t border-gray-100 pt-4 flex flex-col items-center text-center w-full">
                <div className="sm:hidden w-7 h-7 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-1.5">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <p className="text-xs uppercase tracking-wider font-semibold text-blue-600 mb-1">
                  Email
                </p>
                <a
                  href="mailto:info@ministeriovidaeterna.org"
                  className="text-gray-900 hover:text-blue-600 font-medium transition-colors text-center text-sm sm:text-base break-all sm:break-normal"
                >
                  info@ministeriovidaeterna.org
                </a>
              </div>

              {/* Horarios */}
              <div className="border-t border-gray-100 pt-4 flex flex-col items-center text-center w-full">
                <div className="sm:hidden w-7 h-7 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-1.5">
                  <Clock className="w-3.5 h-3.5" />
                </div>
                <p className="text-xs uppercase tracking-wider font-semibold text-blue-600 mb-1">
                  {t('contact.schedule')}
                </p>
                <p className="text-gray-800 font-medium text-sm leading-relaxed text-center">
                  {t('contact.scheduleSundays')}<br />
                  {t('contact.scheduleWednesdays')}
                </p>
              </div>
            </div>

            {/* Botón WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-all shadow-md text-center text-sm"
            >
              <MessageSquare className="w-4 h-4 sm:hidden flex-shrink-0" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Columna derecha - Formulario claramente distinguible */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 md:p-9 border border-gray-200 shadow-xl ring-1 ring-black/5 flex flex-col items-center w-full">
            {/* Cabecera del formulario */}
            <div className="text-center mb-6 w-full pb-4 border-b border-gray-100">
              <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider rounded-md mb-2 border border-blue-100">
                {t('contact.formBadge')}
              </span>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">
                {t('contact.formTitle')}
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm">
                {t('contact.formSubtitle')}
              </p>
            </div>
            
            {submitted ? (
              <div className="text-center py-10 w-full bg-emerald-50 rounded-xl border border-emerald-200 p-6">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xl">
                  ✓
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-1">{t('contact.sentSuccess')}</h4>
                <p className="text-gray-600 text-sm">{t('contact.sentSuccessDesc')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 w-full">
                {/* Nombre */}
                <div>
                  <label className="block text-gray-800 text-xs sm:text-sm font-semibold mb-1.5 text-left">
                    {t('contact.fullName')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50/80 border border-gray-300 rounded-xl focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition text-sm text-gray-900 placeholder-gray-400 shadow-sm"
                    placeholder={t('contact.placeholderName')}
                  />
                </div>

                {/* Email y Teléfono */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-800 text-xs sm:text-sm font-semibold mb-1.5 text-left">
                      {t('contact.email')} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50/80 border border-gray-300 rounded-xl focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition text-sm text-gray-900 placeholder-gray-400 shadow-sm"
                      placeholder={t('contact.placeholderEmail')}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-800 text-xs sm:text-sm font-semibold mb-1.5 text-left">
                      {t('contact.phone')}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50/80 border border-gray-300 rounded-xl focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition text-sm text-gray-900 placeholder-gray-400 shadow-sm"
                      placeholder={t('contact.placeholderPhone')}
                    />
                  </div>
                </div>

                {/* Mensaje */}
                <div>
                  <label className="block text-gray-800 text-xs sm:text-sm font-semibold mb-1.5 text-left">
                    {t('contact.message')} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-50/80 border border-gray-300 rounded-xl focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition text-sm text-gray-900 placeholder-gray-400 shadow-sm resize-none"
                    placeholder={t('contact.placeholderMessage')}
                  />
                </div>

                {/* Botón de Enviar Formulario */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold rounded-xl transition-all disabled:opacity-50 flex items-center justify-center text-sm shadow-md hover:shadow-lg tracking-wide uppercase cursor-pointer"
                  >
                    {loading ? t('contact.sending') : t('contact.sendMessage')}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
