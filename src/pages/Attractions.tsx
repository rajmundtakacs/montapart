import { beachPreviews } from '../data/beaches';
import { attractionPlaces } from '../data/attractionDetails';
import PlaceSection from '../components/attractions/PlaceSection';
import PageHeader from '../components/ui/PageHeader';
import { Link } from 'react-router-dom';

const categories = [
  { id: 'varosok', label: 'Városok' },
  { id: 'nevezetessegek', label: 'Nevezetességek' },
  { id: 'strandok', label: 'Strandok' },
];

export default function Attractions() {
  return (
    <>
      <PageHeader
        title="Látnivalók"
        actions={
          <nav aria-label="Látnivalók kategóriái">
            <ul className="flex flex-wrap gap-2 sm:gap-3">
              {categories.map(category => (
                <li key={category.id}>
                  <Link
                    to={{ hash: `#${category.id}` }}
                    preventScrollReset
                    className="flex min-h-11 items-center justify-center rounded-full border border-sea-200 bg-white px-3.5 py-2.5 text-sm font-medium text-sea-800 transition-colors hover:border-sea-400 hover:bg-sea-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sea-700 sm:px-5 sm:text-base"
                  >
                    {category.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        }
      />
      <section className="max-w-site mx-auto px-4 sm:px-6 pb-20">
        <PlaceSection id="varosok" title="Városok" description="A montenegrói tengerpart legbájosabb városai és falvai."
          places={attractionPlaces.filter(place => place.category === 'varosok')} />
        <PlaceSection id="nevezetessegek" title="Nevezetességek" description="Történelmi emlékek, várak és kulturális látnivalók a tengerparton és a hegyekben."
          places={attractionPlaces.filter(place => place.category === 'nevezetessegek')} />
        <PlaceSection id="strandok" title="Strandok"
          description="A montenegrói tengerpart legkedveltebb strandjai, kristálytiszta vízzel és lenyűgöző természeti környezetben."
          places={beachPreviews} detailLinks={false} />
      </section>
    </>
  );
}
