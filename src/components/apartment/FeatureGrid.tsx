import { Users, BedDouble, CookingPot, Sun, Sofa, ShowerHead, Waves, Car } from 'lucide-react';
import type { ApartmentUnit } from '../../data/apartments';

interface FeatureGridProps {
  unit: ApartmentUnit;
}

export default function FeatureGrid({ unit }: FeatureGridProps) {
  const features = [
    { icon: Users, label: 'Kapacitás', value: `${unit.capacity} fő` },
    { icon: BedDouble, label: 'Hálószoba', value: `${unit.bedrooms}` },
    { icon: ShowerHead, label: 'Fürdőszoba', value: `${unit.bathrooms}` },
    { icon: Sofa, label: 'Nappali', value: unit.hasLivingRoom ? 'igen' : 'nem' },
    { icon: CookingPot, label: 'Konyha', value: unit.hasKitchen ? 'igen' : 'nem' },
    { icon: Sun, label: 'Terasz', value: unit.hasTerrace ? 'igen' : 'nem' },
    ...(unit.seaDistance
      ? [{ icon: Waves, label: 'Tenger', value: unit.seaDistance }]
      : []),
    { icon: Car, label: 'Parkoló', value: unit.amenities.includes('Parkoló') ? 'igen' : 'nem' },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {features.map((f) => (
        <div
          key={f.label}
          className="bg-white rounded-xl px-3 py-3.5 text-center border border-sand-100 hover:border-sea-200 transition-colors min-w-0"
        >
          <f.icon className="w-5 h-5 mx-auto mb-2 text-sea-600 shrink-0" strokeWidth={1.5} />
          <div className="text-[11px] text-midnight/40 uppercase tracking-wider font-medium">{f.label}</div>
          <div className="text-sm font-semibold text-midnight mt-1">{f.value}</div>
        </div>
      ))}
    </div>
  );
}
