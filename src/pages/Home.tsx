import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import HeroSection from '../components/ui/HeroSection';
import { apartments } from '../data/apartments';

const categories = [
  { to: '/apartments', label: 'Apartmanok', image: '/images/index/apartmanok.png' },
  { to: '/hotels', label: 'Hotelek', image: '/images/index/hotelek.png' },
  { to: '/attractions', label: 'Látnivalók', image: '/images/index/latnivalok.png' },
];

export default function Home() {
  const featured = apartments.slice(0, 4);

  return (
    <>
      <HeroSection
        image="/images/index/main3.png"
        title="Tenger karnyújtásnyira, elérhető áron."
        subtitle="Válogatott apartmanok a montenegrói tengerparton, személyes ajánlással."
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <Link
            to="/apartments"
            className="inline-flex items-center gap-2 bg-white text-midnight px-7 py-3.5 rounded-full font-medium text-sm tracking-wide hover:bg-sea-50 transition-colors shadow-lg"
          >
            Apartmanok megtekintése
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white/15 text-white px-7 py-3.5 rounded-full font-medium text-sm tracking-wide hover:bg-white/25 transition-colors backdrop-blur-sm border border-white/20"
          >
            Kapcsolat
          </Link>
        </motion.div>
      </HeroSection>

      {/* Category Cards */}
      <section className="max-w-7xl mx-auto px-6 -mt-16 relative z-20 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.to}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                to={cat.to}
                className="group block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.label}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight/40 to-transparent" />
                </div>
                <div className="p-5 flex items-center justify-between">
                  <h3 className="font-display text-xl font-semibold">{cat.label}</h3>
                  <span className="text-sea-600 group-hover:translate-x-1 transition-transform duration-300">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured apartments */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-end justify-between mb-10"
          >
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-midnight">
                Kiemelt apartmanok
              </h2>
              <p className="mt-2 text-midnight/50 font-light">
                A legkedveltebb szállásaink
              </p>
            </div>
            <Link
              to="/apartments"
              className="hidden md:inline-flex items-center gap-2 text-sea-600 font-medium text-sm hover:text-sea-800 transition-colors"
            >
              Összes apartman
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((apt, i) => (
              <motion.div
                key={apt.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  to={`/apartments/${apt.slug}`}
                  className="group block rounded-2xl overflow-hidden"
                >
                  <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                    <img
                      src={apt.thumbnail}
                      alt={apt.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-midnight/70 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="font-display text-lg text-white font-semibold leading-snug">
                        {apt.name}
                      </h3>
                      {apt.units[0]?.seaDistance && (
                        <p className="text-white/70 text-xs mt-1">
                          {apt.units[0].seaDistance} a tengertől
                        </p>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link
              to="/apartments"
              className="inline-flex items-center gap-2 text-sea-600 font-medium text-sm"
            >
              Összes apartman
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-sea-600 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-white font-semibold">
            Foglaljon közvetlenül!
          </h2>
          <p className="mt-3 text-sea-100 font-light max-w-xl mx-auto">
            Írjon nekünk e-mailben vagy hívjon telefonon, és segítünk megtalálni a tökéletes szállást.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-sea-700 px-7 py-3.5 rounded-full font-medium text-sm hover:bg-sea-50 transition-colors shadow-lg"
            >
              Kapcsolatfelvétel
            </Link>
            <a
              href="tel:+36306482016"
              className="bg-white/15 text-white px-7 py-3.5 rounded-full font-medium text-sm hover:bg-white/25 transition-colors border border-white/20"
            >
              +36 30 648 2016
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
