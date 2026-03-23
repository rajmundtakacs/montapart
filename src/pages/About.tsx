import { motion } from 'framer-motion';
import { aboutText } from '../data/contact';

export default function About() {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-midnight mb-3">
              Rólam
            </h1>
            <h2 className="text-sea-600 text-xl font-light mb-6">
              {aboutText.name}
            </h2>
            <div className="space-y-4 text-midnight/70 leading-relaxed">
              <p>
                Üdvözlöm az oldalamon! Évek óta foglalkozom montenegrói apartmanok közvetítésével,
                és személyesen ismerem az összes szálláshelyet amit ajánlok.
              </p>
              <p>
                Célom, hogy a magyar vendégek számára megkönnyítsem a nyaralás szervezését,
                és megbízható, kipróbált szállásokat ajánljak elérhető áron.
              </p>
              <p>
                Bármilyen kérdése van, keressen bizalommal!
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-sea-100 rounded-3xl -rotate-3" />
            <img
              src={aboutText.image}
              alt={aboutText.name}
              className="relative rounded-2xl w-full object-cover shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
