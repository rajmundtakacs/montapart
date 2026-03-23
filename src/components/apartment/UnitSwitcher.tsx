import type { ApartmentUnit } from '../../data/apartments';

interface UnitSwitcherProps {
  units: ApartmentUnit[];
  activeUnitId: number;
  onSwitch: (id: number) => void;
}

export default function UnitSwitcher({ units, activeUnitId, onSwitch }: UnitSwitcherProps) {
  if (units.length <= 1) return null;

  return (
    <div className="flex gap-2 flex-wrap">
      {units.map((unit) => (
        <button
          key={unit.id}
          onClick={() => onSwitch(unit.id)}
          className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
            unit.id === activeUnitId
              ? 'bg-sea-600 text-white shadow-lg shadow-sea-600/25'
              : 'bg-white text-midnight/60 hover:bg-sea-50 hover:text-sea-700 border border-sand-200'
          }`}
        >
          {unit.label}
        </button>
      ))}
    </div>
  );
}
