import PageHeader from '../components/ui/PageHeader';
import CategorySection from '../components/attractions/CategorySection';
import { attractionCategories } from '../data/attractions';

export default function Attractions() {
  return (
    <>
      <PageHeader
        title="Látnivalók"
        subtitle="Strandok, nevezetességek és városok a montenegrói tengerparton."
      />
      <section className="max-w-7xl mx-auto px-6 pb-20">
        {attractionCategories.map((cat, i) => (
          <CategorySection key={cat.slug} category={cat} index={i} />
        ))}
      </section>
    </>
  );
}
