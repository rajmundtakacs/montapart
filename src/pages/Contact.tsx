import { motion } from 'framer-motion';
import { contactInfo } from '../data/contact';

const channels = [
  { name: 'Messenger', icon: contactInfo.messengerIcon },
  { name: 'Viber', icon: contactInfo.viberIcon },
  { name: 'WhatsApp', icon: contactInfo.whatsappIcon },
  { name: 'Telegram', icon: contactInfo.telegramIcon },
];

export default function Contact() {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-midnight">
            Kapcsolat
          </h1>
          <p className="mt-3 text-midnight/60 font-light text-lg">
            Bármilyen kérdéssel forduljon hozzánk bizalommal!
          </p>
        </motion.div>

        <div className="space-y-6">
          {/* Email & Phone */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl p-8 shadow-sm border border-sand-100 flex flex-col sm:flex-row justify-center gap-6"
          >
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex flex-col items-center gap-3 p-6 rounded-xl hover:bg-sea-50 transition-colors group flex-1"
            >
              <div className="w-14 h-14 bg-sea-100 rounded-full flex items-center justify-center text-sea-600 flex-shrink-0">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-xs text-midnight/40 uppercase tracking-wider font-medium">E-mail</p>
              <p className="text-midnight font-semibold text-lg group-hover:text-sea-700 transition-colors">
                {contactInfo.email}
              </p>
            </a>

            <a
              href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
              className="flex flex-col items-center gap-3 p-6 rounded-xl hover:bg-sea-50 transition-colors group flex-1"
            >
              <div className="w-14 h-14 bg-sea-100 rounded-full flex items-center justify-center text-sea-600 flex-shrink-0">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <p className="text-xs text-midnight/40 uppercase tracking-wider font-medium">Telefon</p>
              <p className="text-midnight font-semibold text-lg group-hover:text-sea-700 transition-colors">
                {contactInfo.phone}
              </p>
            </a>
          </motion.div>

          {/* Messaging channels */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-sm border border-sand-100"
          >
            <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-midnight/40 mb-6 text-center">
              Üzenetküldés
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {channels.map((ch) => (
                <button
                  key={ch.name}
                  className="flex flex-col items-center gap-3 p-5 rounded-xl hover:bg-sea-50 transition-colors border border-sand-100 hover:border-sea-200"
                >
                  <img src={ch.icon} alt={ch.name} className="w-10 h-10 object-contain" />
                  <span className="text-sm font-medium text-midnight/70">{ch.name}</span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-2xl p-8 shadow-sm border border-sand-100"
          >
            <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-midnight/40 mb-6 text-center">
              Közösségi média
            </h3>
            <div className="flex justify-center gap-4">
              <a
                href={contactInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-5 rounded-xl hover:bg-sea-50 transition-colors border border-sand-100 hover:border-sea-200 flex-1 max-w-[200px]"
              >
                <img src="/images/facebook.png" alt="Facebook" className="w-10 h-10 object-contain" />
                <span className="text-sm font-medium text-midnight/70">Facebook</span>
              </a>
              <a
                href={contactInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-5 rounded-xl hover:bg-sea-50 transition-colors border border-sand-100 hover:border-sea-200 flex-1 max-w-[200px]"
              >
                <img src="/images/instagram.png" alt="Instagram" className="w-10 h-10 object-contain" />
                <span className="text-sm font-medium text-midnight/70">Instagram</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
