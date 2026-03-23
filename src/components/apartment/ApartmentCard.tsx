import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Apartment } from '../../data/apartments';

interface ApartmentCardProps {
  apartment: Apartment;
  index: number;
}

export default function ApartmentCard({ apartment, index }: ApartmentCardProps) {
  const totalCapacity = apartment.units.reduce((sum, u) => sum + u.capacity, 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Link
        to={`/apartments/${apartment.slug}`}
        className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={apartment.thumbnail}
            alt={apartment.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute bottom-3 left-3 flex gap-2">
            <span className="bg-white/90 backdrop-blur-sm text-midnight text-xs font-medium px-3 py-1 rounded-full">
              {apartment.units.length} {apartment.units.length === 1 ? 'apartman' : 'apartman'}
            </span>
            <span className="bg-white/90 backdrop-blur-sm text-midnight text-xs font-medium px-3 py-1 rounded-full">
              max. {totalCapacity} fő
            </span>
          </div>
        </div>
        <div className="p-5">
          <h3 className="font-display text-xl font-semibold text-midnight group-hover:text-sea-700 transition-colors">
            {apartment.name}
          </h3>
          <p className="mt-2 text-sm text-midnight/50 line-clamp-2 leading-relaxed">
            {apartment.description}
          </p>
          {apartment.units[0]?.seaDistance && (
            <div className="mt-3 flex items-center gap-1.5 text-sea-600">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-xs font-medium">{apartment.units[0].seaDistance} a tengertől</span>
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
