import { Users, BedDouble, CookingPot, Sun, Sofa, ShowerHead, Waves } from 'lucide-react';
import type { ApartmentUnit } from '../../data/apartments';

interface FeatureGridProps {
  unit: ApartmentUnit;
}

export default function FeatureGrid({ unit }: FeatureGridProps) {
  const features = [
    { icon: Users, label: 'Kapacitás', value: `${unit.capacity} fő` },
    { icon: BedDouble, label: 'Hálószoba', value: `${unit.bedrooms}` },
    { icon: CookingPot, label: 'Konyha', value: unit.hasKitchen ? 'igen' : 'nem' },
    { icon: Sun, label: 'Terasz', value: unit.hasTerrace ? 'igen' : 'nem' },
    ...(unit.hasLivingRoom
      ? [{ icon: Sofa, label: 'Nappali', value: 'igen' }]
      : []),
    { icon: ShowerHead, label: 'Fürdőszoba', value: `${unit.bathrooms}` },
    ...(unit.seaDistance
      ? [{ icon: Waves, label: 'Tenger', value: unit.seaDistance }]
      : []),
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
      {features.map((f) => (
        <div
          key={f.label}
          className="bg-white rounded-xl px-3 py-4 text-center border border-sand-100 hover:border-sea-200 transition-colors min-w-0"
        >
          <f.icon className="w-5 h-5 mx-auto mb-1.5 text-sea-600 shrink-0" strokeWidth={1.5} />
          <div className="text-[10px] text-midnight/40 uppercase tracking-wider font-medium truncate">{f.label}</div>
          <div className="text-sm font-semibold text-midnight mt-0.5 truncate">{f.value}</div>
        </div>
      ))}
    </div>
  );
}
