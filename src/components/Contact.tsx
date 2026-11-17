import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Formulario enviado:', formData);
    setSubmitted(true);
    setLoading(false);
    setFormData({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const whatsappNumber = "50496337658";
  const whatsappMessage = encodeURIComponent("Hola, me gustaría obtener más información sobre el ministerio");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">{t('contact.title')}</h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">{t('contact.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Columna izquierda - Información */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-6">{t('footer.contactInfo')}</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-sky-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{t('contact.address')}</p>
                    <a
                      href="https://maps.google.com/?q=78-80+W+Elm+St,+Brockton,+MA+02301"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-sky-600 transition-colors"
                    >
                      78-80 W Elm St<br />Brockton, MA 02301
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-sky-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{t('contact.phone')}</p>
                    <a href="tel:+50496337658" className="text-gray-600 hover:text-sky-600">+504 9633-7658</a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-sky-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{t('contact.email')}</p>
                    <a href="mailto:info@ministeriovidaeterna.org" className="text-gray-600 hover:text-sky-600">info@ministeriovidaeterna.org</a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-sky-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{t('contact.schedule')}</p>
                    <p className="text-gray-600">
                      {t('contact.scheduleSundays')}<br />
                      {t('contact.scheduleWednesdays')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 w-full py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Columna derecha - Formulario */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">{t('contact.formTitle')}</h3>
            
            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-gray-800 mb-2">{t('contact.sentSuccess')}</h4>
                <p className="text-gray-600">{t('contact.sentSuccessDesc')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">{t('contact.fullName')}</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition"
                    placeholder={t('contact.placeholderName')}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">{t('contact.email')}</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition"
                      placeholder={t('contact.placeholderEmail')}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">{t('contact.phone')}</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition"
                      placeholder={t('contact.placeholderPhone')}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">{t('contact.message')}</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition resize-none"
                    placeholder={t('contact.placeholderMessage')}
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold rounded-xl hover:from-sky-600 hover:to-blue-700 transition-all disabled:opacity-50 flex items-center justify-center space-x-2"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>{t('contact.sending')}</span>
                    </>
                  ) : (
                    <>
                      <span>{t('contact.sendMessage')}</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* WhatsApp flotante */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all z-50 animate-bounce"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </section>
  );
};

export default Contact;