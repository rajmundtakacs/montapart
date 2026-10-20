import ResponsiveImage from '../ui/ResponsiveImage';
import type { AttractionCategory } from '../../data/attractions';

interface CategorySectionProps {
  category: AttractionCategory;
}

export default function CategorySection({ category }: CategorySectionProps) {
  return (
    <section className="mb-16">
      {/* Hero banner */}
      <div
        className="relative h-48 sm:h-64 md:h-80 rounded-2xl overflow-hidden mb-8"
      >
        <ResponsiveImage
          src={category.heroImage}
          sizes="(min-width: 1280px) 1232px, 100vw"
          alt=""
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-midnight/40" />
        <div className="relative z-10 flex items-center justify-center h-full px-4 text-center">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white font-semibold tracking-wide">
            {category.name}
          </h2>
        </div>
      </div>

      <p className="text-midnight/60 text-lg mb-6 font-light">{category.description}</p>

      {/* Items grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {category.items.map((item, i) => (
          <div
            key={i}
            className="group rounded-xl overflow-hidden aspect-square relative"
          >
            <ResponsiveImage
              src={item.image}
              sizes="(min-width: 1280px) 296px, (min-width: 1024px) 25vw, 50vw"
              maxWidth={800}
              alt={item.name}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-midnight/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </section>
  );
}
