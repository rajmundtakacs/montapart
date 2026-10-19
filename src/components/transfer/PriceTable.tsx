import { motion } from 'framer-motion';
import { ArrowUpDown } from 'lucide-react';
import { transferRoutes, taxiCapacity, minibusCapacity } from '../../data/transfers';

export default function PriceTable() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm border border-sand-100">
      <table className="w-full table-fixed text-sm sm:text-base text-center">
        <caption className="sr-only">Repülőtéri transzfer árak euróban, úti cél és jármű szerint</caption>
        <colgroup><col className="w-[40%]" /><col className="w-[30%]" /><col className="w-[30%]" /></colgroup>
        <thead className="bg-sea-600 text-white">
          <tr>
            <th scope="col" className="px-2 py-4 font-semibold">Repülőtér<ArrowUpDown aria-hidden="true" className="w-4 h-4 text-sea-100 mt-1 mx-auto" /></th>
            <th scope="col" className="px-2 py-4 font-semibold">Taxi<span className="block text-sea-100 text-xs sm:text-sm font-normal">{taxiCapacity}</span></th>
            <th scope="col" className="px-2 py-4 font-semibold">Kisbusz<span className="block text-sea-100 text-xs sm:text-sm font-normal">{minibusCapacity}</span></th>
          </tr>
        </thead>
        <tbody>
          {transferRoutes.map((route) => (
            <tr key={route.destination} className="border-t border-sand-100 hover:bg-sea-50/50 transition-colors">
              <th scope="row" className="px-2 py-4 font-medium text-midnight break-words">{route.destination}</th>
              <td className="px-2 py-4 text-sea-700 font-semibold">{route.taxiPrice} €</td>
              <td className="px-2 py-4 text-sea-700 font-semibold">{route.minibusPrice} €</td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
}
