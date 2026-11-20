import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import ImageGallery from '../components/apartment/ImageGallery';
import { hotels } from '../data/hotels';
import NotFound from './NotFound';

export default function HotelDetail() {
  const { slug } = useParams<{ slug: string }>();
  const hotel = hotels.find(item => item.slug === slug);

  if (!hotel) return <NotFound />;
  const images = hotel.images?.length ? hotel.images : hotel.image ? [hotel.image] : [];
  const hasGallery = images.length > 0;

  return (
    <div className="max-w-site mx-auto px-4 sm:px-6 pt-[calc(4.5rem+env(safe-area-inset-top)+1.5rem)] xl:pt-[calc(5rem+env(safe-area-inset-top)+2rem)] pb-16 sm:pb-20">
      <Link to="/hotels" className="inline-flex min-h-11 items-center gap-2 mb-6 text-sm font-medium text-sea-700 hover:text-sea-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sea-700">
        <ArrowLeft size={17} aria-hidden="true" /> Vissza a hotelekhez
      </Link>
      <div className={hasGallery ? 'grid lg:grid-cols-2 gap-7 lg:gap-12 items-start' : 'max-w-3xl mx-auto'}>
        <div className={`min-w-0 ${hasGallery ? 'lg:order-2' : ''}`}>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold leading-tight text-midnight">{hotel.name}</h1>
          <p className="mt-2 text-midnight/65">{hotel.location}</p>
          <div className="mt-3 text-sand-400 text-xl" role="img" aria-label={`${hotel.stars} csillagos hotel`}>
            <span aria-hidden="true">{'★'.repeat(hotel.stars)}</span>
          </div>
          {hotel.description && (
            <div className="mt-6 space-y-5 text-base sm:text-lg text-midnight/75 leading-relaxed">
              {hotel.description.split('\n\n').map((paragraph, index) => <p key={index}>{paragraph}</p>)}
            </div>
          )}
        </div>
        {hasGallery && <div className="min-w-0 lg:order-1">
          <ImageGallery
            key={slug}
            images={images}
            name={`${hotel.name} – ${hotel.stars} csillagos hotel`}
            allowFullscreen={false}
            imageSizes="(min-width: 1440px) 672px, (min-width: 1024px) calc(50vw - 48px), (min-width: 640px) calc(100vw - 48px), calc(100vw - 32px)"
          />
        </div>}
      </div>
      <div className={hasGallery ? '' : 'max-w-3xl mx-auto'}><Link to="/contact" className="mt-10 inline-flex min-h-12 items-center gap-3 rounded-full bg-sea-600 px-7 py-3 text-white font-semibold hover:bg-sea-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sea-700">
        Kapcsolatfelvétel <ArrowRight size={19} aria-hidden="true" />
      </Link></div>
    </div>
  );
}
