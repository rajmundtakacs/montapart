import { ArrowRight, Bird, ChevronDown, Fish, Landmark, Mountain, Plane, Utensils, Wallet, Waves, IdCard } from 'lucide-react';
import { Link } from 'react-router-dom';
import ResponsiveImage from '../components/ui/ResponsiveImage';
import RichText from '../components/ui/RichText';
import { montenegroContent } from '../data/montenegro';

const reasonPresentation = [
  { title: 'Könnyen elérhető', icon: Plane },
  { title: 'Beutazás személyivel is', icon: IdCard },
  { title: 'Fizetés euróval', icon: Wallet },
  { title: 'Tenger és hegyek', icon: Mountain },
  { title: 'Változatos tengerpart', icon: Waves },
  { title: 'Élmények a vízben', icon: Fish },
  { title: 'Érintetlen természet', icon: Bird },
  { title: 'Magyar emlékek', icon: Landmark },
  { title: 'Helyi ízek', icon: Utensils },
];

export default function Montenegro() {
  const content = montenegroContent;
  return (
    <div>
      <div className="max-w-site mx-auto px-4 sm:px-6 pt-[calc(4.5rem+env(safe-area-inset-top)+1.5rem)] xl:pt-[calc(5rem+env(safe-area-inset-top)+2rem)] pb-16 sm:pb-20">
        <h1 className="mb-7 sm:mb-9 font-display text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-midnight">Miért éppen Montenegró?</h1>
        <section aria-label="Montenegró bemutatása" className="grid lg:grid-cols-[1.1fr_1fr] gap-7 lg:gap-12 items-center">
          <div className="space-y-5 text-midnight/75 leading-relaxed">
            {content.intro.map((paragraph, index) => <p key={index} className={index === 0 ? 'text-lg' : undefined}><RichText runs={paragraph} /></p>)}
          </div>
          <figure className="order-first lg:order-last">
            <ResponsiveImage src="/images/attractions/varosok/sveti-stefan.jpg" alt="Sveti Stefan a montenegrói tengerparton"
              sizes="(min-width: 1440px) 640px, (min-width: 1024px) calc(47.62vw - 46px), (min-width: 640px) calc(100vw - 48px), calc(100vw - 32px)" loading="eager"
              className="w-full aspect-[4/3] object-cover rounded-2xl" />
            <figcaption className="mt-2 text-sm text-midnight/60">Sveti Stefan</figcaption>
          </figure>
        </section>

        <section aria-labelledby="montenegro-reasons" className="mt-12 sm:mt-16">
          <h2 id="montenegro-reasons" className="font-display text-3xl sm:text-4xl font-semibold text-midnight mb-7 sm:mb-9">Vakációzós érvek Montenegró mellett</h2>
          <ul className="grid md:grid-cols-2 gap-5 sm:gap-6">
            {content.reasons.map((paragraph, index) => {
              const presentation = reasonPresentation[index];
              const Icon = presentation?.icon ?? Waves;
              return (
                <li key={index} className={`rounded-2xl bg-sea-100 p-6 sm:p-7 ${index === content.reasons.length - 1 ? 'md:col-span-2' : ''}`}>
                  <div className="flex items-center gap-4 mb-5">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/75 text-sea-700">
                      <Icon size={25} strokeWidth={1.7} aria-hidden="true" />
                    </span>
                    {presentation && <h3 className="font-display text-xl sm:text-2xl font-semibold leading-snug text-midnight">{presentation.title}</h3>}
                  </div>
                  <p className="text-midnight/75 leading-relaxed"><RichText runs={paragraph} /></p>
                </li>
              );
            })}
          </ul>
        </section>

        <section aria-labelledby="montenegro-practical" className="mt-12 sm:mt-16 rounded-3xl bg-sea-100 px-5 py-7 sm:p-9 lg:p-10">
          <h2 id="montenegro-practical" className="font-display text-2xl sm:text-3xl font-semibold text-midnight mb-6">Hasznos tudnivalók az utazás tervezésekor</h2>
          <div className="divide-y divide-sea-200">
            {content.practical.map(section => (
              <details key={section.title} className="group py-1">
                <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 py-4 font-display text-[22px] font-semibold text-sea-800 [&::-webkit-details-marker]:hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sea-700">
                  {section.title}
                  <ChevronDown size={20} aria-hidden="true" className="shrink-0 transition-transform group-open:rotate-180" />
                </summary>
                <div className="max-w-4xl space-y-4 pb-6 text-midnight/75 leading-relaxed">
                  {section.paragraphs.map((paragraph, index) => <p key={index}><RichText runs={paragraph} /></p>)}
                  {section.orderedItems && (
                    <ol className="list-decimal pl-6 space-y-4 marker:font-semibold marker:text-sea-800">
                      {section.orderedItems.map((item, index) => (
                        <li key={index} className="pl-2"><RichText runs={item} /></li>
                      ))}
                    </ol>
                  )}
                </div>
              </details>
            ))}
          </div>
        </section>

        <div className="mt-10 sm:mt-12">
          <p className="text-lg leading-relaxed"><RichText runs={content.closing} /></p>
          <Link to="/contact" className="mt-5 inline-flex min-h-12 items-center gap-3 rounded-full bg-sea-600 px-7 py-3 font-semibold text-white hover:bg-sea-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sea-700">
            Kapcsolatfelvétel <ArrowRight size={19} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}
