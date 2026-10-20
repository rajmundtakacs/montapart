import ResponsiveImage from '../components/ui/ResponsiveImage';
import PageHeader from '../components/ui/PageHeader';
import { hotels } from '../data/hotels';

export default function Hotels() {
  return (
    <>
      <PageHeader
        title="Hotelek"
        subtitle="Szállodák és hotelek a montenegrói tengerparton."
      />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels.map((hotel, i) => (
            <div
              key={`${hotel.name}-${i}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-500"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <ResponsiveImage
                  src={hotel.image}
                  sizes="(min-width: 1280px) 400px, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  maxWidth={1200}
                  alt={hotel.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl font-semibold text-midnight">
                  {hotel.name}
                </h3>
                <div className="mt-2 flex gap-0.5">
                  {Array.from({ length: hotel.stars }).map((_, s) => (
                    <span key={s} className="text-sand-400 text-lg">★</span>
                  ))}
                  {Array.from({ length: 5 - hotel.stars }).map((_, s) => (
                    <span key={s} className="text-sand-200 text-lg">★</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
