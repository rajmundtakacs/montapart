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
  const isHome = overlay === 'gradient';

  return (
    <section
      className={`relative ${height} flex items-end overflow-hidden`}
    >
      {/* Background image with slight blur to mask low resolution */}
      <div
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat scale-110 ${
          isHome ? 'blur-[2px]' : ''
        }`}
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Color-graded overlay: teal tint + gradient for cinematic feel */}
      {isHome && (
        <div className="absolute inset-0 bg-sea-800/25 mix-blend-multiply" />
      )}
      <div
        className={`absolute inset-0 ${
          isHome
            ? 'bg-gradient-to-t from-midnight/90 via-midnight/30 to-midnight/10'
            : 'bg-midnight/40'
        }`}
      />

      {/* Subtle grain texture to add perceived detail */}
      {isHome && (
        <div
          className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl text-white font-semibold leading-tight max-w-3xl drop-shadow-lg"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4 text-lg md:text-xl text-white/80 max-w-xl font-light drop-shadow-md"
          >
            {subtitle}
          </motion.p>
        )}
        {children}
      </div>
    </section>
  );
}
