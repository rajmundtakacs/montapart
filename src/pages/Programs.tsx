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

      <section className="max-w-site mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {programs.map((program) => (
            <div
              key={program.name}
              className="group relative rounded-2xl overflow-hidden aspect-[16/9]"
            >
              <ResponsiveImage
                src={program.image}
                sizes="(min-width: 1440px) 684px, (min-width: 640px) calc(50vw - 36px), calc(100vw - 32px)"
                maxWidth={1200}
                alt={program.name}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 motion-safe:group-hover:scale-105"
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

        <div
          className="mt-12 bg-sea-100 rounded-2xl p-5 sm:p-8 text-center border border-sea-200/60"
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
        </div>
      </section>
    </>
  );
}
