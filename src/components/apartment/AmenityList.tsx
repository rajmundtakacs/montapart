import {
  Snowflake,
  Tv,
  Wifi,
  Coffee,
  Microwave,
  WashingMachine,
  UtensilsCrossed,
  Check,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface AmenityListProps {
  amenities: string[];
}

const amenityIcons: Record<string, LucideIcon> = {
  'Internet': Wifi,
  'Klíma': Snowflake,
  'TV': Tv,
  'Mosógép': WashingMachine,
  'Mosogatógép': UtensilsCrossed,
  'Mikró': Microwave,
  'Vízforraló': Coffee,
};

const HIDDEN_AMENITIES = ['Parkoló'];

export default function AmenityList({ amenities }: AmenityListProps) {
  const filtered = amenities.filter((a) => !HIDDEN_AMENITIES.includes(a));

  if (filtered.length === 0) return null;

  return (
    <div className="bg-white rounded-xl p-5 border border-sand-100">
      <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-midnight/40 mb-4 text-center">
        Felszereltség
      </h4>
      <div className="flex flex-wrap justify-center gap-1.5">
        {filtered.map((amenity) => {
          const Icon = amenityIcons[amenity] || Check;
          return (
            <span
              key={amenity}
              className="inline-flex items-center gap-2 bg-sea-50 text-sea-800 px-4 py-2.5 rounded-full text-sm"
            >
              <Icon className="w-3.5 h-3.5 shrink-0" strokeWidth={1.5} />
              {amenity}
            </span>
          );
        })}
      </div>
    </div>
  );
}
