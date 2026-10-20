import { motion } from 'framer-motion';
import HeroSection from '../components/ui/HeroSection';
import ResponsiveImage from '../components/ui/ResponsiveImage';
import { programs, programHeroImage } from '../data/programs';

export default function Programs() {
  return (
    <>
      <HeroSection
        image={programHeroImage}
        title="Programok"
        subtitle="Élmények és kalandok a montenegrói tengerparton."
        height="hero-compact"
        overlay="dark"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {programs.map((program) => (
            <div
              key={program.name}
              className="group relative rounded-2xl overflow-hidden aspect-[16/9]"
            >
              <ResponsiveImage
                src={program.image}
                sizes="(min-width: 1280px) 600px, (min-width: 640px) 50vw, 100vw"
                maxWidth={1200}
                alt={program.name}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/70 via-midnight/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                <h3 className="font-display text-xl lg:text-2xl text-white font-semibold">
                  {program.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2 }}
          className="mt-12 bg-sea-50 rounded-2xl p-5 sm:p-8 text-center border border-sea-100"
        >
          <h3 className="font-display text-xl lg:text-2xl font-semibold text-midnight mb-2">
            Foglalás
          </h3>
          <p className="text-midnight/60 mb-6">
            Programokkal kapcsolatos érdeklődés és foglalás:
          </p>
          <a
            href="tel:+36306482016"
            className="inline-flex items-center gap-2 bg-sea-600 text-white px-7 py-3 rounded-full font-medium text-sm hover:bg-sea-700 transition-colors"
          >
            +36 30 648 2016
          </a>
        </motion.div>
      </section>
    </>
  );
}
