import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { attractionPlaces } from '../data/attractionDetails';
import type { TextRun } from '../data/richText';
import ResponsiveImage from '../components/ui/ResponsiveImage';
import RichText from '../components/ui/RichText';
import NotFound from './NotFound';

function withoutRepeatedLabel(runs: TextRun[], label: string) {
  const prefix = `${label}:`;
  if (!runs[0]?.text.startsWith(prefix)) return runs;
  return [{ ...runs[0], text: runs[0].text.slice(prefix.length).trimStart() }, ...runs.slice(1)];
}

function introduction(runs: TextRun[], explicitTitle?: string) {
  const text = runs.map(run => run.text).join('');
  const prefix = explicitTitle && text.startsWith(explicitTitle)
    ? explicitTitle
    : text.match(/^[^:]{1,100}:/)?.[0] ?? '';
  let remaining = prefix.length;
  const paragraphs: TextRun[][] = [[]];
  for (const run of runs) {
    const body = run.text.slice(remaining);
    remaining = Math.max(0, remaining - run.text.length);
    body.split('\n\n').forEach((part, index) => {
      if (index > 0) paragraphs.push([]);
      if (part) paragraphs[paragraphs.length - 1].push({ ...run, text: part });
    });
  }
  return { title: prefix.replace(/:$/, ''), paragraphs };
}

export default function AttractionDetail() {
  const { slug } = useParams();
  const place = attractionPlaces.find(item => item.slug === slug);
  const [selectedImage, setSelectedImage] = useState(0);
  if (!place) return <NotFound />;
  const imageIndex = Math.min(selectedImage, Math.max(0, place.images.length - 1));
  const intro = introduction(place.description, place.descriptionTitle);

  return (
    <>
      <div className="max-w-site mx-auto px-4 sm:px-6 pt-[calc(4.5rem+env(safe-area-inset-top)+1.5rem)] xl:pt-[calc(5rem+env(safe-area-inset-top)+2rem)] pb-16 sm:pb-20">
        <Link to={`/attractions#${place.category}`} className="inline-flex min-h-11 items-center gap-2 mb-6 text-sm font-medium text-sea-700 hover:text-sea-900">
          <ArrowLeft size={17} aria-hidden="true" /> Vissza a látnivalókhoz
        </Link>
        <div className={place.images.length ? 'grid lg:grid-cols-2 gap-7 lg:gap-12 items-start' : 'max-w-3xl'}>
          {place.images.length > 0 && (
            <div>
              <ResponsiveImage src={place.images[imageIndex]} alt={`${place.name}${place.images.length > 1 ? ` – ${imageIndex + 1}. kép` : ''}`}
                sizes="(min-width: 1440px) 672px, (min-width: 1024px) calc(50vw - 48px), (min-width: 640px) calc(100vw - 48px), calc(100vw - 32px)" loading="eager"
                className="w-full h-auto max-h-[600px] object-contain rounded-2xl bg-sea-100" />
              {place.images.length > 1 && (
                <div className="mt-3 flex gap-3" role="group" aria-label="Képválasztó">
                  {place.images.map((src, index) => (
                    <button key={src} type="button" onClick={() => setSelectedImage(index)}
                      aria-label={`${place.name} – ${index + 1}. kép megtekintése`} aria-pressed={index === imageIndex}
                      className={`w-20 h-16 rounded-lg overflow-hidden border-2 ${index === imageIndex ? 'border-sea-600' : 'border-transparent'} focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sea-700`}>
                      <ResponsiveImage src={src} alt="" sizes="80px" maxWidth={160} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
          <div>
            <h1 className="mb-5 font-display text-2xl sm:text-3xl font-semibold leading-tight text-midnight">{intro.title || place.name}</h1>
            <div className="space-y-5 text-base sm:text-lg text-midnight/75 leading-relaxed">
              {intro.paragraphs.map((paragraph, index) => <p key={index}><RichText runs={paragraph} /></p>)}
            </div>
          </div>
        </div>
        {place.details.length > 0 && (
          <section aria-label="Hasznos tudnivalók a látogatáshoz" className="mt-10 sm:mt-14 rounded-3xl bg-sea-100 p-6 sm:p-9 lg:p-10">
            <div className="grid md:grid-cols-3 gap-8">
              {place.details.map(detail => (
                <div key={detail.label}>
                  <h2 className="font-display text-[22px] leading-snug font-semibold text-sea-800 mb-4">{detail.label}</h2>
                  {detail.ordered ? (
                    <ol className="list-decimal pl-6 space-y-4 text-sm sm:text-base leading-relaxed text-midnight/75 marker:font-semibold marker:text-sea-800">
                      {detail.paragraphs.map((paragraph, index) => (
                        <li key={index} className="pl-2"><RichText runs={paragraph} /></li>
                      ))}
                    </ol>
                  ) : <div className="space-y-3 text-sm sm:text-base leading-relaxed text-midnight/75">
                    {detail.paragraphs.map((paragraph, index) => (
                      <p key={index}><RichText runs={withoutRepeatedLabel(paragraph, detail.label)} /></p>
                    ))}
                  </div>}
                </div>
              ))}
            </div>
          </section>
        )}
        <Link to="/contact" className="mt-10 inline-flex min-h-12 items-center gap-3 rounded-full bg-sea-600 px-7 py-3 text-white font-semibold hover:bg-sea-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sea-700">
          Kapcsolatfelvétel <ArrowRight size={19} aria-hidden="true" />
        </Link>
      </div>
    </>
  );
}
