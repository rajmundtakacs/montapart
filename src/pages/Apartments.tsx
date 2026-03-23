import PageHeader from '../components/ui/PageHeader';
import ApartmentCard from '../components/apartment/ApartmentCard';
import { apartments } from '../data/apartments';

export default function Apartments() {
  return (
    <>
      <PageHeader
        title="Apartmanok"
        subtitle="Válogatott szálláshelyek a montenegrói tengerparton, személyes ajánlással."
      />
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {apartments.map((apt, i) => (
            <ApartmentCard key={apt.slug} apartment={apt} index={i} />
          ))}
        </div>
      </section>
    </>
  );
}
