import { motion } from 'framer-motion';
import type { TransferCategory } from '../../data/transfers';

interface PriceTableProps {
  category: TransferCategory;
  index: number;
}

export default function PriceTable({ category, index }: PriceTableProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm border border-sand-100"
    >
      <div className="bg-sea-600 px-6 py-4">
        <h3 className="text-white text-lg font-semibold">{category.name}</h3>
        <p className="text-sea-100 text-sm">
          {category.routes[0]?.capacity}
        </p>
      </div>
      <div className="divide-y divide-sand-100">
        {category.routes.map((route) => (
          <div
            key={route.destination}
            className="flex items-center justify-between px-6 py-4 hover:bg-sea-50/50 transition-colors"
          >
            <div>
              <span className="font-medium text-midnight">{route.destination}</span>
              <span className="ml-2 text-xs text-midnight/40">{route.capacity}</span>
            </div>
            <span className="text-sea-700 font-semibold">{route.price} €</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
