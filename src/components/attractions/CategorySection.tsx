import { motion } from 'framer-motion';
import type { AttractionCategory } from '../../data/attractions';

interface CategorySectionProps {
  category: AttractionCategory;
  index: number;
}

export default function CategorySection({ category, index }: CategorySectionProps) {
  return (
    <section className="mb-16">
      {/* Hero banner */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-8"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${category.heroImage})` }}
        />
        <div className="absolute inset-0 bg-midnight/40" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <h2 className="font-display text-4xl md:text-5xl text-white font-semibold tracking-wide">
            {category.name}
          </h2>
        </div>
      </motion.div>

      <p className="text-midnight/60 text-lg mb-6 font-light">{category.description}</p>

      {/* Items grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {category.items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="group rounded-xl overflow-hidden aspect-square relative"
          >
            <img
              src={item.image}
              alt={item.name}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-midnight/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
