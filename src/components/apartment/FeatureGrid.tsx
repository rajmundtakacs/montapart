import type { ApartmentUnit } from '../../data/apartments';

interface FeatureGridProps {
  unit: ApartmentUnit;
}

const featureIcons: Record<string, string> = {
  capacity: '👥',
  bedrooms: '🛏️',
  kitchen: '🍳',
  terrace: '☀️',
  livingRoom: '🛋️',
  bathrooms: '🚿',
  sea: '🌊',
};

export default function FeatureGrid({ unit }: FeatureGridProps) {
  const features = [
    { icon: featureIcons.capacity, label: 'Kapacitás', value: `${unit.capacity} fő` },
    { icon: featureIcons.bedrooms, label: 'Hálószoba', value: `${unit.bedrooms}` },
    { icon: featureIcons.kitchen, label: 'Konyha', value: unit.hasKitchen ? 'van' : 'nincs' },
    { icon: featureIcons.terrace, label: 'Terasz', value: unit.hasTerrace ? 'van' : 'nincs' },
    ...(unit.hasLivingRoom
      ? [{ icon: featureIcons.livingRoom, label: 'Nappali', value: 'van' }]
      : []),
    { icon: featureIcons.bathrooms, label: 'Fürdőszoba', value: `${unit.bathrooms}` },
    ...(unit.seaDistance
      ? [{ icon: featureIcons.sea, label: 'Tenger', value: unit.seaDistance }]
      : []),
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
      {features.map((f) => (
        <div
          key={f.label}
          className="bg-white rounded-xl p-4 text-center border border-sand-100 hover:border-sea-200 transition-colors"
        >
          <div className="text-2xl mb-1">{f.icon}</div>
          <div className="text-xs text-midnight/50 uppercase tracking-wider">{f.label}</div>
          <div className="text-sm font-semibold text-midnight mt-0.5">{f.value}</div>
        </div>
      ))}
    </div>
  );
}
