import { motion } from 'framer-motion';

interface HeroSectionProps {
  image: string;
  title: string;
  subtitle?: string;
  height?: string;
  overlay?: 'dark' | 'gradient';
  children?: React.ReactNode;
}

export default function HeroSection({
  image,
  title,
  subtitle,
  height = 'h-[85vh]',
  overlay = 'gradient',
  children,
}: HeroSectionProps) {
  return (
    <section
      className={`relative ${height} flex items-end overflow-hidden`}
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div
        className={`absolute inset-0 ${
          overlay === 'gradient'
            ? 'bg-gradient-to-t from-midnight/80 via-midnight/20 to-transparent'
            : 'bg-midnight/40'
        }`}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 w-full">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl text-white font-semibold leading-tight max-w-3xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4 text-lg md:text-xl text-white/80 max-w-xl font-light"
          >
            {subtitle}
          </motion.p>
        )}
        {children}
      </div>
    </section>
  );
}
