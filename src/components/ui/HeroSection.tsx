import { motion } from 'framer-motion';
import ResponsiveImage from './ResponsiveImage';

interface HeroSectionProps {
  image: string;
  mobileImage?: string;
  title: React.ReactNode;
  subtitle?: string;
  height?: string;
  overlay?: 'dark' | 'gradient';
  children?: React.ReactNode;
}

export default function HeroSection({
  image,
  mobileImage,
  title,
  subtitle,
  height = 'hero-home',
  overlay = 'gradient',
  children,
}: HeroSectionProps) {
  const isHome = overlay === 'gradient';

  return (
    <section
      className={`relative ${height} flex ${isHome ? 'items-center' : 'items-end'} overflow-hidden`}
    >
      {/* Decorative hero photo; serve a smaller source on phones. */}
      <picture
        className={`absolute inset-0 ${
          isHome ? '' : 'scale-110'
        }`}
      >
        {mobileImage && <source media="(max-width: 639px)" srcSet={mobileImage} />}
        <ResponsiveImage
          src={image}
          sizes="100vw"
          alt=""
          fetchPriority={isHome ? 'high' : undefined}
          className={`w-full h-full object-cover ${isHome ? 'object-[20%_center] sm:object-center' : 'object-center'}`}
        />
      </picture>

      {/* Soften detail behind the copy, fading into the sharp open sea. */}
      {isHome && (
        <div className="absolute inset-0 backdrop-blur-[1px] [mask-image:linear-gradient(90deg,black_15%,transparent_75%)] lg:[mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)] pointer-events-none" />
      )}

      {/* Shade the text side while preserving the coast's daylight colors. */}
      <div
        className={`absolute inset-0 ${
          isHome
            ? 'bg-gradient-to-r from-midnight/40 via-midnight/10 to-transparent lg:bg-radial lg:from-midnight/30 lg:via-midnight/15'
            : 'bg-midnight/40'
        }`}
      />

      {isHome && (
        <div className="absolute inset-0 bg-gradient-to-t from-midnight/33 via-transparent to-midnight/10 pointer-events-none" />
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-10 sm:pt-36 sm:pb-16 w-full">
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className={`font-display ${isHome ? 'text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5rem] max-w-3xl lg:max-w-none lg:leading-[1.15] lg:text-center' : 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-3xl'} text-white font-semibold leading-tight drop-shadow-lg break-words`}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: 0.05 }}
            className={`mt-4 text-base sm:text-lg md:text-xl text-white/95 max-w-xl font-normal drop-shadow-md ${isHome ? 'lg:mx-auto lg:text-center' : ''}`}
          >
            {subtitle}
          </motion.p>
        )}
        {children}
      </div>
    </section>
  );
}
