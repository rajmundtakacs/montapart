import PageHeader from '../components/ui/PageHeader';
import PriceTable from '../components/transfer/PriceTable';
import { transfers } from '../data/transfers';

export default function Transfer() {
  return (
    <>
      <PageHeader
        title="Transzfer"
        subtitle="A transzfer és taxis szolgáltatás bármely városból kérhető és akárhány fő részére. Egyéni ajánlatokat kérem privát üzenetben kérni."
      />
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {transfers.map((cat, i) => (
            <PriceTable key={cat.name} category={cat} index={i} />
          ))}
        </div>
      </section>
    </>
  );
}
