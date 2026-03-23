import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getApartmentBySlug } from '../data/apartments';
import ImageGallery from '../components/apartment/ImageGallery';
import UnitSwitcher from '../components/apartment/UnitSwitcher';
import FeatureGrid from '../components/apartment/FeatureGrid';
import AmenityList from '../components/apartment/AmenityList';

export default function ApartmentDetail() {
  const { slug } = useParams<{ slug: string }>();
  const apartment = getApartmentBySlug(slug || '');
  const [activeUnitId, setActiveUnitId] = useState<number>(apartment?.units[0]?.id ?? 1);

  if (!apartment) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="font-display text-3xl text-midnight">Apartman nem található</h1>
        <Link to="/apartments" className="mt-4 inline-block text-sea-600 hover:underline">
          Vissza az apartmanokhoz
        </Link>
      </div>
    );
  }

  const activeUnit = apartment.units.find((u) => u.id === activeUnitId) || apartment.units[0];

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-midnight/40 mb-6">
          <Link to="/apartments" className="hover:text-sea-600 transition-colors">
            Apartmanok
          </Link>
          <span>/</span>
          <span className="text-midnight/70">{apartment.name}</span>
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-display text-3xl md:text-4xl font-semibold text-midnight mb-3">
            {apartment.name}
          </h1>
          <p className="text-midnight/60 max-w-3xl leading-relaxed mb-8">
            {apartment.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Gallery - 3 cols */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <ImageGallery images={activeUnit.images} name={apartment.name} />
          </motion.div>

          {/* Details - 2 cols */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <UnitSwitcher
              units={apartment.units}
              activeUnitId={activeUnitId}
              onSwitch={setActiveUnitId}
            />

            <FeatureGrid unit={activeUnit} />
            <AmenityList amenities={activeUnit.amenities} />

            {/* CTA */}
            <div className="bg-sea-50 rounded-xl p-5 border border-sea-100">
              <h4 className="font-semibold text-midnight mb-2">Érdeklődés</h4>
              <p className="text-sm text-midnight/60 mb-4">
                Foglaláshoz vagy kérdés esetén vegye fel velünk a kapcsolatot!
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="mailto:montapartman@gmail.com"
                  className="flex-1 text-center bg-sea-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-sea-700 transition-colors"
                >
                  E-mail küldése
                </a>
                <a
                  href="tel:+36306482016"
                  className="flex-1 text-center bg-white text-sea-700 px-5 py-2.5 rounded-full text-sm font-medium border border-sea-200 hover:bg-sea-50 transition-colors"
                >
                  +36 30 648 2016
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
