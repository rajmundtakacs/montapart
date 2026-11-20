import { ArrowRight, Phone, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/ui/PageHeader';
import ResponsiveImage from '../components/ui/ResponsiveImage';
import RichText from '../components/ui/RichText';
import { boatTour } from '../data/programs';
import { contactInfo } from '../data/contact';

export default function Programs() {
  return (
    <>
      <PageHeader title="Programok" subtitle="Élmények és kalandok a montenegrói tengerparton." />
      <div className="max-w-site mx-auto px-4 sm:px-6 pb-16 sm:pb-20">
        <section aria-labelledby="boat-tour" className="grid lg:grid-cols-2 items-start gap-7 lg:gap-12">
          <ResponsiveImage src={boatTour.image} alt="Hajókirándulás a Skadar-tavon"
            sizes="(min-width: 1440px) 672px, (min-width: 1024px) calc(50vw - 48px), (min-width: 640px) calc(100vw - 48px), calc(100vw - 32px)"
            loading="eager" className="w-full aspect-[4/3] object-cover rounded-2xl" />
          <div>
            <h2 id="boat-tour" className="mb-5 font-display text-2xl sm:text-3xl font-semibold text-midnight">{boatTour.title}</h2>
            <div className="space-y-5 text-midnight/75 leading-relaxed">
              {boatTour.paragraphs.map((paragraph, index) => <p key={index}><RichText runs={paragraph} /></p>)}
            </div>
          </div>
        </section>
        <section aria-labelledby="guided-tours" className="mt-12 sm:mt-16 rounded-3xl bg-white p-6 sm:p-9 shadow-card">
          <h2 id="guided-tours" className="mb-6 font-display text-2xl sm:text-3xl font-semibold text-midnight">További választható túrák idegenvezetéssel</h2>
          <ul className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {boatTour.tours.map(tour => (
              <li key={tour} className="flex items-start gap-3 rounded-2xl bg-sea-50 p-5 text-midnight/80">
                <Compass size={22} aria-hidden="true" className="mt-0.5 shrink-0 text-sea-700" /><span>{tour}</span>
              </li>
            ))}
          </ul>
        </section>
        <section aria-labelledby="program-contact" className="mt-10 sm:mt-12 rounded-3xl bg-sea-100 p-6 sm:p-9">
          <h2 id="program-contact" className="mb-3 font-display text-2xl font-semibold text-midnight">Érdeklődés és foglalás</h2>
          <p className="text-midnight/75 leading-relaxed">Bővebb információért, kérem, vegye fel velem a kapcsolatot.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link to="/contact" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-sea-600 px-7 py-3 font-semibold text-white hover:bg-sea-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sea-700">Kapcsolatfelvétel <ArrowRight size={19} aria-hidden="true" /></Link>
            <a href="tel:+36306482016" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-white px-7 py-3 font-semibold text-midnight focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sea-700"><Phone size={19} aria-hidden="true" />{contactInfo.phone}</a>
          </div>
        </section>
      </div>
    </>
  );
}
