import { ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { AttractionPlace } from '../../data/attractionDetails';
import ResponsiveImage from '../ui/ResponsiveImage';

interface Props {
  id: string;
  title: string;
  description: string;
  places: PlacePreview[];
  detailLinks?: boolean;
}

export type PlacePreview = Pick<AttractionPlace, 'slug' | 'name' | 'images' | 'description'> & {
  imagePosition?: string;
};

function excerpt(place: PlacePreview) {
  const text = place.description.map(run => run.text).join('').replace(/^[^:]{1,65}:\s*/, '');
  return text.length > 210 ? `${text.slice(0, 210).replace(/\s+\S*$/, '')}…` : text;
}

function PlaceCard({ place, detailLink }: { place: PlacePreview; detailLink: boolean }) {
  const text = excerpt(place);
  const content = (
    <>
      <div className="aspect-[4/3] overflow-hidden bg-sea-100 flex items-center justify-center">
        {place.images[0] ? (
          <ResponsiveImage src={place.images[0]} alt="" maxWidth={800} loading="lazy"
            sizes="(min-width: 1440px) 448px, (min-width: 1024px) calc(33.333vw - 32px), (min-width: 640px) calc(50vw - 36px), calc(100vw - 32px)"
            className={`w-full h-full object-cover ${place.imagePosition ?? ''} ${detailLink ? 'transition-transform duration-500 motion-safe:group-hover:scale-105' : ''}`} />
        ) : <MapPin size={48} strokeWidth={1} aria-hidden="true" className="text-sea-500" />}
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-display text-[22px] leading-snug font-semibold text-midnight">{place.name}</h3>
        {text && <p className="mt-3 mb-5 text-sm leading-relaxed text-midnight/70">{text}</p>}
        {detailLink && (
          <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-sea-700">
            Felfedezem <ArrowRight size={17} aria-hidden="true" />
          </span>
        )}
      </div>
    </>
  );
  const classes = 'flex flex-col overflow-hidden rounded-2xl bg-white shadow-card';
  return detailLink ? (
    <Link to={`/attractions/${place.slug}`}
      className={`group ${classes} transition-shadow hover:shadow-card-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sea-600`}>
      {content}
    </Link>
  ) : <article className={classes}>{content}</article>;
}

export default function PlaceSection({ id, title, description, places, detailLinks = true }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="mb-16 border-t border-sea-200/60 pt-6 sm:pt-8 scroll-mt-[env(safe-area-inset-top)]">
      <h2 id={`${id}-heading`} className="font-display text-2xl sm:text-3xl font-semibold text-sea-800">{title}</h2>
      <p className="mt-3 mb-7 max-w-3xl text-midnight/70 leading-relaxed">{description}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {places.map(place => <PlaceCard key={place.slug} place={place} detailLink={detailLinks} />)}
      </div>
    </section>
  );
}
