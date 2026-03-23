import {
  Car,
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
  'Parkoló': Car,
  'Klíma': Snowflake,
  'Légkondi': Snowflake,
  'TV': Tv,
  'Internet': Wifi,
  'Vízforraló': Coffee,
  'Mikro': Microwave,
  'Mikrohullámú sütő': Microwave,
  'Mosógép': WashingMachine,
  'Mosogatógép': UtensilsCrossed,
};

export default function AmenityList({ amenities }: AmenityListProps) {
  return (
    <div className="bg-white rounded-xl p-5 border border-sand-100">
      <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-midnight/40 mb-4">
        Felszereltség
      </h4>
      <div className="flex flex-wrap gap-2">
        {amenities.map((amenity) => {
          const Icon = amenityIcons[amenity] || Check;
          return (
            <span
              key={amenity}
              className="inline-flex items-center gap-1.5 bg-sea-50 text-sea-800 px-3 py-1.5 rounded-full text-sm"
            >
              <Icon className="w-3.5 h-3.5" strokeWidth={1.5} />
              {amenity}
            </span>
          );
        })}
      </div>
    </div>
  );
}
