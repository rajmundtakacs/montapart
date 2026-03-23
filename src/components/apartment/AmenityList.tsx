interface AmenityListProps {
  amenities: string[];
}

const amenityIcons: Record<string, string> = {
  'Parkoló': '🅿️',
  'Klíma': '❄️',
  'Légkondi': '❄️',
  'TV': '📺',
  'Internet': '📶',
  'Vízforraló': '☕',
  'Mikro': '🔲',
  'Mikrohullámú sütő': '🔲',
  'Mosógép': '🫧',
  'Mosogatógép': '🍽️',
};

export default function AmenityList({ amenities }: AmenityListProps) {
  return (
    <div className="bg-white rounded-xl p-5 border border-sand-100">
      <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-midnight/40 mb-4">
        Felszereltség
      </h4>
      <div className="flex flex-wrap gap-2">
        {amenities.map((amenity) => (
          <span
            key={amenity}
            className="inline-flex items-center gap-1.5 bg-sea-50 text-sea-800 px-3 py-1.5 rounded-full text-sm"
          >
            <span>{amenityIcons[amenity] || '✓'}</span>
            {amenity}
          </span>
        ))}
      </div>
    </div>
  );
}
