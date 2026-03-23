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
        className="group block rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
      >
        {/* Full card is the image - overlay text approach handles mixed aspect ratios better */}
        <div className="relative aspect-[3/4] sm:aspect-[4/5] overflow-hidden">
          <img
            src={apartment.thumbnail}
            alt={apartment.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Permanent gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-midnight/20 to-transparent" />

          {/* Badges top-left */}
          <div className="absolute top-3 left-3 flex gap-2">
            {apartment.units[0]?.seaDistance && (
              <span className="bg-white/90 backdrop-blur-sm text-sea-700 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                {apartment.units[0].seaDistance}
              </span>
            )}
          </div>

          {/* Content pinned to bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <h3 className="font-display text-xl font-semibold text-white leading-snug drop-shadow-md">
              {apartment.name}
            </h3>
            <p className="mt-1.5 text-sm text-white/70 line-clamp-2 leading-relaxed">
              {apartment.description}
            </p>
            <div className="mt-3 flex items-center gap-3 text-white/60 text-xs font-medium">
              <span className="flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                max. {totalCapacity} fő
              </span>
              <span>·</span>
              <span>{apartment.units.length} apartman</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
