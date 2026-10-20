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
        image="/images/index/hero-budva-open.webp"
        mobileImage="/images/index/hero-budva-open-mobile.webp"
        title={<>Tenger karnyújtásnyira,{' '}<span className="lg:block">elérhető áron.</span></>}
        subtitle="Válogatott apartmanok a montenegrói tengerparton, személyes ajánlással."
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 sm:mt-12 flex flex-col sm:items-start lg:items-center"
        >
          <Link
            to="/apartments"
            className="inline-flex w-full sm:w-[22rem] items-center justify-center gap-2 bg-white text-midnight px-5 sm:px-9 py-4 rounded-full font-semibold text-sm sm:text-base whitespace-nowrap hover:bg-sea-50 transition-colors shadow-lg"
          >
            Apartmanok megtekintése
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            to="/contact"
            className="mt-3 sm:mt-4 inline-flex w-full sm:w-[22rem] items-center justify-center gap-3 bg-white/15 text-white px-5 sm:px-9 py-4 rounded-full font-semibold text-sm sm:text-base tracking-wide hover:bg-white/25 transition-colors backdrop-blur-sm border border-white/20"
          >
            Kapcsolat
          </Link>
        </motion.div>
      </HeroSection>

      {/* Category Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 pb-20 md:pt-0 md:-mt-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
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
                className="group block bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-500"
              >
                <div className="relative h-44 sm:h-56 md:h-64 overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.label}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight/25 to-transparent" />
                </div>
                <div className="px-5 py-4 md:py-5 flex items-center justify-between">
                  <h3 className="font-display text-xl font-semibold">{cat.label}</h3>
                  <span className="w-9 h-9 rounded-full bg-sea-50 text-sea-600 flex items-center justify-center group-hover:bg-sea-600 group-hover:text-white transition-colors duration-300">
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
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
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
              <p className="mt-2 text-midnight/60">
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
                  className="group block rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-500"
                >
                  <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                    <img
                      src={apt.thumbnail}
                      alt={apt.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-midnight/15 via-40% to-transparent" />
                    <div className="absolute bottom-5 left-5 right-5">
                      <h3 className="font-display text-lg text-white font-semibold leading-snug">
                        {apt.name}
                      </h3>
                      {apt.units[0]?.seaDistance && (
                        <p className="text-white/80 text-xs font-medium mt-1.5">
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
      <section className="relative overflow-hidden bg-gradient-to-br from-sea-700 via-sea-600 to-sea-700 py-20">
        <div aria-hidden="true" className="absolute -top-32 left-1/2 -translate-x-1/2 w-[48rem] h-64 rounded-full bg-sea-400/25 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-white font-semibold">
            Foglaljon közvetlenül!
          </h2>
          <p className="mt-4 text-sea-50/85 max-w-xl mx-auto leading-relaxed">
            Írjon nekünk e-mailben vagy hívjon telefonon, és segítünk megtalálni a tökéletes szállást.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-sea-700 px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-sea-50 transition-colors shadow-card"
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
