import ResponsiveImage from '../components/ui/ResponsiveImage';
import { motion } from 'framer-motion';
import { aboutText } from '../data/contact';

export default function About() {
  return (
    <div className="pt-28 md:pt-36 pb-16 sm:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-midnight/40 mb-3">
              Rólam
            </p>
            <h1 className="font-display text-3xl md:text-4xl font-semibold text-midnight mb-6">
              {aboutText.name}
            </h1>
            <div className="space-y-5 text-midnight/70 leading-relaxed">
              <p>
                Üdvözlöm az oldalamon!
              </p>
              <p>
                Évek óta foglalkozom montenegrói apartmanok közvetítésével,
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="relative mx-auto w-[calc(100%-2rem)] max-w-[350px] my-4"
          >
            <div className="absolute -inset-2 sm:-inset-4 bg-sea-100 rounded-3xl -rotate-3" />
            <ResponsiveImage
              src={aboutText.image} sizes="350px" maxWidth={800}
              alt={aboutText.name}
              className="relative w-full rounded-2xl max-h-[500px] object-cover shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
