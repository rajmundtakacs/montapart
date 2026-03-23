import PageHeader from '../components/ui/PageHeader';
import PriceTable from '../components/transfer/PriceTable';

export default function Transfer() {
  return (
    <>
      <PageHeader
        title="Transzfer"
        subtitle="A transzfer és taxis szolgáltatás bármely városból kérhető és akárhány fő részére. Egyéni ajánlatokat kérem privát üzenetben kérni."
      />
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <PriceTable />
      </section>
    </>
  );
}
