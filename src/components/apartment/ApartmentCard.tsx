import { Link } from 'react-router-dom';
import { ArrowRight, Users } from 'lucide-react';
import ResponsiveImage from '../ui/ResponsiveImage';
import type { Apartment } from '../../data/apartments';

interface ApartmentCardProps {
  apartment: Apartment;
  imageSizes?: string;
  stackedTitle?: boolean;
}

export default function ApartmentCard({
  apartment,
  stackedTitle = false,
  imageSizes = '(min-width: 1440px) 448px, (min-width: 1024px) calc(33.333vw - 32px), (min-width: 640px) calc(50vw - 36px), calc(100vw - 32px)',
}: ApartmentCardProps) {
  const titleBreak = stackedTitle ? apartment.name.lastIndexOf(' ') : -1;
  const totalCapacity = apartment.units.reduce((sum, unit) => {
    const maximum = typeof unit.capacity === 'number'
      ? unit.capacity
      : Number(unit.capacity.split('-')[1]);
    return sum + maximum;
  }, 0);

  return (
    <Link
      to={`/apartments/${apartment.slug}`}
      className="group flex h-full flex-col rounded-2xl overflow-hidden bg-white shadow-card hover:shadow-card-hover motion-safe:hover:-translate-y-1 transition-[box-shadow,transform] duration-300"
    >
      <div className="relative aspect-[4/3] shrink-0 overflow-hidden bg-sea-100">
        <ResponsiveImage
          src={apartment.thumbnail}
          sizes={imageSizes}
          maxWidth={800}
          alt={apartment.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 motion-safe:group-hover:scale-105"
        />
        {/* Badges top-left */}
        <div className="absolute top-3 left-3 flex gap-2">
          {apartment.units[0]?.seaDistance && (
            <span className="bg-white/90 backdrop-blur-sm text-sea-700 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
              {apartment.units[0].seaDistance}
            </span>
          )}
        </div>

      </div>
      <div className="relative flex flex-1 p-5 pr-18 sm:p-6 sm:pr-19">
        <div className="flex min-w-0 flex-1 flex-col">
          <h3 className="font-display text-[22px] font-semibold text-midnight leading-snug">
            {titleBreak > 0 ? (
              <>
                {apartment.name.slice(0, titleBreak)}{' '}
                <span className="block">{apartment.name.slice(titleBreak + 1)}</span>
              </>
            ) : apartment.name}
          </h3>
          <div className="mt-auto flex flex-wrap items-center gap-x-3 gap-y-1 pt-3 text-midnight/65 text-sm font-medium">
            <span className="flex items-center gap-1">
              <Users size={16} aria-hidden="true" className="shrink-0" />
              max. {totalCapacity} fő
            </span>
            <span aria-hidden="true">·</span>
            <span>{apartment.units.length} apartman</span>
          </div>
        </div>
        <span aria-hidden="true" className="absolute right-5 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-sea-50 text-sea-600 transition-colors group-hover:bg-sea-600 group-hover:text-white sm:right-6">
          <ArrowRight size={19} />
        </span>
      </div>
    </Link>
  );
}
