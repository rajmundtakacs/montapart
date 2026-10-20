import { motion } from 'framer-motion';
import { ArrowLeftRight } from 'lucide-react';
import { transferRoutes, taxiCapacity, minibusCapacity } from '../../data/transfers';

export default function PriceTable() {
  return (
    <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.2 }}>
      <p id="transfer-direction-note" className="mb-4 text-sm sm:text-base text-midnight/70">
        Minden útvonal mindkét irányban kérhető.
      </p>
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-sand-100">
        <table aria-describedby="transfer-direction-note" className="w-full table-fixed text-sm sm:text-base text-center">
          <caption className="sr-only">Repülőtéri transzfer árak euróban, úti cél és jármű szerint</caption>
          <colgroup><col className="w-[60%] sm:w-1/2" /><col className="w-[20%] sm:w-1/4" /><col className="w-[20%] sm:w-1/4" /></colgroup>
          <thead className="bg-sea-600 text-white">
            <tr>
              <th scope="col" className="px-2 py-4 font-semibold">Útvonal</th>
              <th scope="col" className="px-2 py-4 font-semibold">Taxi<span className="block text-sea-100 text-xs sm:text-sm font-normal">{taxiCapacity}</span></th>
              <th scope="col" className="px-2 py-4 font-semibold">Kisbusz<span className="block text-sea-100 text-xs sm:text-sm font-normal">{minibusCapacity}</span></th>
            </tr>
          </thead>
          <tbody>
            {transferRoutes.map((route) => (
              <tr key={route.destination} className="border-t border-sand-100 hover:bg-sea-50/50 transition-colors">
                <th scope="row" className="px-2 py-4 text-xs sm:text-base font-medium text-midnight">
                  <span className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-1.5 sm:gap-2">
                    <span className="text-right text-midnight/65 font-normal">Repülőtér</span>
                    <ArrowLeftRight aria-hidden="true" className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 text-sea-600" />
                    <span className="sr-only"> és </span>
                    <span className="min-w-0 text-left break-words">{route.destination}</span>
                  </span>
                </th>
                <td className="px-2 py-4 text-sea-700 font-semibold">{route.taxiPrice} €</td>
                <td className="px-2 py-4 text-sea-700 font-semibold">{route.minibusPrice} €</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
