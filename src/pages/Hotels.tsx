import { Link } from 'react-router-dom';
import { ArrowRight, Images } from 'lucide-react';
import ResponsiveImage from '../components/ui/ResponsiveImage';
import PageHeader from '../components/ui/PageHeader';
import { hotels } from '../data/hotels';

export default function Hotels() {
  return (
    <>
      <PageHeader title="Hotelek" subtitle="Szállodák és hotelek a montenegrói tengerparton." />
      <section className="max-w-site mx-auto px-4 sm:px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels.map((hotel, i) => {
            const content = (
              <>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <ResponsiveImage
                    src={hotel.image}
                    sizes="(min-width: 1440px) 448px, (min-width: 1024px) calc(33.333vw - 32px), (min-width: 640px) calc(50vw - 36px), calc(100vw - 32px)"
                    maxWidth={1200}
                    alt={hotel.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 motion-safe:group-hover:scale-105"
                  />
                  {hotel.images && hotel.images.length > 0 && (
                    <span className="absolute bottom-3 right-3 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-2 text-sm font-medium text-midnight shadow-sm">
                      <Images size={17} aria-hidden="true" /> {hotel.images.length} kép
                    </span>
                  )}
                </div>
                <div className={`relative p-5 ${hotel.slug ? 'pr-16' : ''}`}>
                  <h2 className="font-display text-xl font-semibold text-midnight">{hotel.name}</h2>
                  <div className="mt-2 flex gap-0.5" role="img" aria-label={`${hotel.stars} csillagos hotel`}>
                    {Array.from({ length: hotel.stars }).map((_, s) => (
                      <span key={s} aria-hidden="true" className="text-sand-400 text-lg">★</span>
                    ))}
                    {Array.from({ length: 5 - hotel.stars }).map((_, s) => (
                      <span key={s} aria-hidden="true" className="text-sand-200 text-lg">★</span>
                    ))}
                  </div>
                  {hotel.slug && (
                    <span aria-hidden="true" className="absolute right-5 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-sea-50 text-sea-600 transition-colors group-hover:bg-sea-600 group-hover:text-white">
                      <ArrowRight size={19} />
                    </span>
                  )}
                </div>
              </>
            );
            return hotel.slug ? (
              <Link key={hotel.slug} to={`/hotels/${hotel.slug}`} aria-label={`${hotel.name} – ${hotel.stars} csillagos hotel megtekintése`}
                className="group block bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sea-700">
                {content}
              </Link>
            ) : (
              <article key={`${hotel.name}-${i}`} className="bg-white rounded-2xl overflow-hidden shadow-card">
                {content}
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
