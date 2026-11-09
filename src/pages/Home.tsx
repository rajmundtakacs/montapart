import { Link } from 'react-router-dom';
import HeroSection from '../components/ui/HeroSection';
import ResponsiveImage from '../components/ui/ResponsiveImage';
import ApartmentCard from '../components/apartment/ApartmentCard';
import { apartments } from '../data/apartments';

const categories = [
  { to: '/montenegro', label: 'Miért éppen Montenegró?', image: '/images/attractions/varosok/sveti-stefan.jpg' },
  { to: '/apartments', label: 'Apartmanok', image: '/images/apartmanok/rusztikus/images/ap3/rusztikus_9.JPG' },
  { to: '/hotels', label: 'Hotelek', image: '/images/index/hotelek-budva.jpg' },
  { to: '/attractions', label: 'Látnivalók', image: '/images/attractions/nevezetessegek/san-giovanni-erod.jpg' },
];

export default function Home() {
  const featured = apartments.slice(0, 4);

  return (
    <div className="bg-sand-50">
      <HeroSection
        image="/images/index/hero-budva-open.webp"
        mobileImage="/images/index/hero-budva-open-mobile.webp"
        title={<>Tenger karnyújtásnyira,{' '}<span className="lg:block">elérhető áron.</span></>}
        subtitle="Válogatott apartmanok a montenegrói tengerparton, személyes ajánlással."
      >
        <div
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
        </div>
      </HeroSection>

      {/* Category Cards */}
      <section className="max-w-site mx-auto px-4 sm:px-6 pt-10 pb-20 md:pt-0 md:-mt-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat) => (
            <div
              key={cat.to}
            >
              <Link
                to={cat.to}
                className="group flex h-full flex-col bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover motion-safe:hover:-translate-y-1 transition-[box-shadow,transform] duration-300"
              >
                <div className="relative h-44 sm:h-56 md:h-64 shrink-0 overflow-hidden">
                  <ResponsiveImage
                    src={cat.image}
                    sizes="(min-width: 1440px) 330px, (min-width: 1280px) calc(25vw - 30px), (min-width: 768px) calc(50vw - 36px), (min-width: 640px) calc(100vw - 48px), calc(100vw - 32px)"
                    maxWidth={1200}
                    loading="lazy"
                    alt={cat.label}
                    className="w-full h-full object-cover transition-transform duration-700 motion-safe:group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight/25 to-transparent" />
                </div>
                <div className="px-5 py-4 md:py-5 flex flex-1 items-center justify-between gap-3">
                  <h3 className="font-display text-xl font-semibold">{cat.label}</h3>
                  <span className="w-9 h-9 shrink-0 rounded-full bg-sea-50 text-sea-600 flex items-center justify-center group-hover:bg-sea-600 group-hover:text-white transition-colors duration-300">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Featured apartments */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-site mx-auto px-4 sm:px-6">
          <div
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
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map(apt => (
              <ApartmentCard
                key={apt.slug}
                apartment={apt}
                imageSizes="(min-width: 1440px) 330px, (min-width: 1024px) calc(25vw - 30px), (min-width: 640px) calc(50vw - 36px), calc(100vw - 32px)"
              />
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
      <section className="relative overflow-hidden bg-sea-300 py-20">
        <div className="relative max-w-site mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-midnight font-semibold">
            Foglaljon közvetlenül!
          </h2>
          <p className="mt-4 text-midnight font-medium max-w-xl mx-auto leading-relaxed">
            Írjon nekünk e-mailben vagy hívjon telefonon, és segítünk megtalálni a tökéletes szállást.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-midnight px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-sea-50 transition-colors shadow-card"
            >
              Kapcsolatfelvétel
            </Link>
            <a
              href="tel:+36306482016"
              className="bg-white text-midnight px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-sea-50 transition-colors shadow-card"
            >
              +36 30 648 2016
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
