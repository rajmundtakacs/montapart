import { ArrowRight } from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';
import PriceTable from '../components/transfer/PriceTable';
import { contactInfo } from '../data/contact';

export default function Transfer() {
  return (
    <>
      <PageHeader
        title="Transzfer"
        contentWidth="narrow"
        subtitle="Reptéri transzfer és taxi szolgáltatás minimum létszámkorlát nélkül kérhető az alábbi montenegrói városok és a podgoricai repülőtér között."
      >
        <p id="transfer-direction-note" className="text-sm sm:text-base leading-relaxed text-midnight/70">
          Minden útvonal mindkét irányban kérhető.
        </p>
      </PageHeader>
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-20">
        <PriceTable />
        <div className="mt-10 sm:mt-12 flex flex-col items-start gap-5">
          <p className="text-lg font-medium leading-relaxed text-midnight">
            Egyéni ajánlatért írjon e-mailt részemre.
          </p>
          <a
            href={`mailto:${contactInfo.email}?subject=${encodeURIComponent('Transzfer ajánlatkérés')}`}
            className="inline-flex min-h-12 max-w-full items-center justify-center gap-3 rounded-full bg-sea-600 px-7 py-3 font-semibold text-white transition-colors hover:bg-sea-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sea-700"
          >
            Ajánlatot kérek
            <ArrowRight size={19} aria-hidden="true" />
          </a>
        </div>
      </section>
    </>
  );
}
