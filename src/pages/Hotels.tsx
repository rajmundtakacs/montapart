import { motion } from 'framer-motion';
import PageHeader from '../components/ui/PageHeader';
import { hotels } from '../data/hotels';

export default function Hotels() {
  return (
    <>
      <PageHeader
        title="Hotelek"
        subtitle="Szállodák és hotelek a montenegrói tengerparton."
      />
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels.map((hotel, i) => (
            <motion.div
              key={`${hotel.name}-${i}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-500"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl font-semibold text-midnight">
                  {hotel.name}
                </h3>
                <div className="mt-2 flex gap-0.5">
                  {Array.from({ length: hotel.stars }).map((_, s) => (
                    <span key={s} className="text-sand-400 text-lg">★</span>
                  ))}
                  {Array.from({ length: 5 - hotel.stars }).map((_, s) => (
                    <span key={s} className="text-sand-200 text-lg">★</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
