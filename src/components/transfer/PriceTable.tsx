import { motion } from 'framer-motion';
import { ArrowUpDown } from 'lucide-react';
import { transferRoutes, taxiCapacity, minibusCapacity } from '../../data/transfers';

export default function PriceTable() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm border border-sand-100"
    >
      <div className="grid grid-cols-3">
        {/* Header */}
        <div className="bg-sea-600 text-white py-4 flex justify-center">
          <div className="w-28 text-center">
            <h3 className="text-lg font-semibold">Repülőtér</h3>
            <ArrowUpDown className="w-4 h-4 text-sea-100 mt-1 mx-auto" strokeWidth={2} />
          </div>
        </div>
        <div className="bg-sea-600 text-white px-6 py-4 text-center">
          <h3 className="text-lg font-semibold">Taxi</h3>
          <p className="text-sea-100 text-sm">{taxiCapacity}</p>
        </div>
        <div className="bg-sea-600 text-white px-6 py-4 text-center">
          <h3 className="text-lg font-semibold">Kisbusz</h3>
          <p className="text-sea-100 text-sm">{minibusCapacity}</p>
        </div>

        {/* Rows */}
        {transferRoutes.map((route, i) => (
          <>
            <span key={`d-${i}`} className="py-4 text-center font-medium text-midnight border-t border-sand-100 hover:bg-sea-50/50 transition-colors">{route.destination}</span>
            <span key={`t-${i}`} className="px-6 py-4 text-center text-sea-700 font-semibold border-t border-sand-100 hover:bg-sea-50/50 transition-colors">{route.taxiPrice} €</span>
            <span key={`m-${i}`} className="px-6 py-4 text-center text-sea-700 font-semibold border-t border-sand-100 hover:bg-sea-50/50 transition-colors">{route.minibusPrice} €</span>
          </>
        ))}
      </div>
    </motion.div>
  );
}
