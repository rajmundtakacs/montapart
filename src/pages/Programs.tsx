import { motion } from 'framer-motion';
import HeroSection from '../components/ui/HeroSection';
import { programs, programHeroImage } from '../data/programs';

export default function Programs() {
  return (
    <>
      <HeroSection
        image={programHeroImage}
        title="Programok"
        subtitle="Élmények és kalandok a montenegrói tengerparton."
        height="h-[50vh]"
        overlay="dark"
      />

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {programs.map((program, i) => (
            <motion.div
              key={program.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden aspect-[16/9]"
            >
              <img
                src={program.image}
                alt={program.name}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/70 via-midnight/20 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h3 className="font-display text-2xl text-white font-semibold">
                  {program.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-sea-50 rounded-2xl p-8 text-center border border-sea-100"
        >
          <h3 className="font-display text-2xl font-semibold text-midnight mb-2">
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
