import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useParams, Link } from 'react-router-dom';
import { getApartmentBySlug } from '../data/apartments';
import { contactInfo } from '../data/contact';
import NotFound from './NotFound';
import ImageGallery from '../components/apartment/ImageGallery';
import UnitSwitcher from '../components/apartment/UnitSwitcher';
import FeatureGrid from '../components/apartment/FeatureGrid';
import AmenityList from '../components/apartment/AmenityList';
import RichText from '../components/ui/RichText';

export default function ApartmentDetail() {
  const { slug } = useParams<{ slug: string }>();
  const apartment = getApartmentBySlug(slug || '');
  const [activeUnitId, setActiveUnitId] = useState<number>(apartment?.units[0]?.id ?? 1);

  if (!apartment) {
    return (
      <NotFound
        title="Ez az apartman nem található"
        description="Ez a szállás jelenleg nem szerepel a kínálatunkban. Válasszon a többi apartmanunk közül, vagy keressen bennünket a kapcsolatoldalon!"
      />
    );
  }

  const activeUnit = apartment.units.find((u) => u.id === activeUnitId) || apartment.units[0];
  const inquirySubject = `Érdeklődés: ${apartment.name} – ${activeUnit.label}`;
  const inquiryHref = `mailto:${contactInfo.email}?subject=${encodeURIComponent(inquirySubject)}`;

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-site mx-auto px-4 sm:px-6">
        <Link to="/apartments" className="inline-flex min-h-11 items-center gap-2 mb-6 text-sm font-medium text-sea-700 hover:text-sea-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sea-700">
          <ArrowLeft size={17} aria-hidden="true" /> Vissza az apartmanokhoz
        </Link>

        <div
          className="mb-10 max-w-4xl mx-auto text-left"
        >
          <h1 className="font-display text-3xl md:text-5xl font-semibold text-midnight mb-6 md:mb-8 text-center">
            {apartment.name}
          </h1>
          <div className="text-midnight/70 leading-relaxed md:text-lg space-y-4">
            {apartment.descriptionParagraphs
              ? apartment.descriptionParagraphs.map((paragraph, index) => <p key={index}><RichText runs={paragraph} /></p>)
              : <p>{apartment.description}</p>}
          </div>
        </div>

        <div className="mb-6 lg:hidden">
          <UnitSwitcher units={apartment.units} activeUnitId={activeUnitId} onSwitch={setActiveUnitId} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8">
          {/* Gallery - 3 cols */}
          <div
            className="min-w-0 lg:col-span-3"
          >
            <ImageGallery key={`${slug}-${activeUnit.id}`} images={activeUnit.images} name={apartment.name} />
            {apartment.galleryNote && <p className="mt-3 text-sm leading-relaxed text-midnight/60">{apartment.galleryNote}</p>}
          </div>

          {/* Details - 2 cols */}
          <div
            className="min-w-0 lg:col-span-2 space-y-6"
          >
            <div className="hidden lg:block">
              <UnitSwitcher
                units={apartment.units}
                activeUnitId={activeUnitId}
                onSwitch={setActiveUnitId}
              />
            </div>

            <FeatureGrid unit={activeUnit} />
            <AmenityList amenities={activeUnit.amenities} />

            {/* CTA */}
            <div className="bg-sea-100 rounded-xl p-5 border border-sea-200/60">
              <h4 className="font-semibold text-midnight mb-2">Érdeklődés</h4>
              <p className="text-sm text-midnight/60 mb-4">
                Foglaláshoz vagy kérdés esetén vegye fel velünk a kapcsolatot!
              </p>
              <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3">
                <a
                  href={inquiryHref}
                  className="flex-1 text-center bg-sea-600 text-white px-4 py-3 rounded-full text-sm font-medium hover:bg-sea-700 transition-colors"
                >
                  E-mail küldése
                </a>
                <a
                  href="tel:+36306482016"
                  className="flex-1 text-center bg-white text-sea-700 px-4 py-3 rounded-full text-sm font-medium border border-sea-200 hover:bg-sea-50 transition-colors"
                >
                  +36 30 648 2016
                </a>
              </div>
            </div>
          </div>
        </div>
        {apartment.photoSection && (
          <section className="mt-10 max-w-3xl sm:mt-14" aria-labelledby="apartment-extra-photos">
            <h2 id="apartment-extra-photos" className="mb-5 font-display text-2xl font-semibold text-midnight sm:text-3xl">
              {apartment.photoSection.title}
            </h2>
            <ImageGallery images={apartment.photoSection.images} name={`${apartment.name} – ${apartment.photoSection.title}`}
              imageSizes="(min-width: 820px) 768px, calc(100vw - 32px)" prioritize={false} />
          </section>
        )}
      </div>
    </div>
  );
}
