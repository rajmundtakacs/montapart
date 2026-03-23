import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { to: '/apartments', label: 'Apartmanok' },
  { to: '/hotels', label: 'Hotelek' },
  { to: '/programs', label: 'Programok' },
  { to: '/attractions', label: 'Látnivalók' },
  { to: '/transfer', label: 'Transzfer' },
  { to: '/about', label: 'Rólam' },
  { to: '/contact', label: 'Kapcsolat' },
];

interface HeaderProps {
  variant?: 'light' | 'dark';
}

export default function Header({ variant = 'dark' }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isTransparent = variant === 'light' && !scrolled && !menuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isTransparent
          ? 'bg-transparent'
          : 'bg-sand-50/95 backdrop-blur-md shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        <Link to="/" className="relative z-50">
          <img
            src={isTransparent ? '/images/logowhite.png' : '/images/logoblack.png'}
            alt="MONTAPART"
            className="h-12 w-auto transition-all duration-300"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-4 py-2 text-sm font-medium tracking-wide uppercase transition-all duration-300 rounded-full ${
                location.pathname.startsWith(link.to)
                  ? isTransparent
                    ? 'bg-white/20 text-white'
                    : 'bg-sea-100 text-sea-700'
                  : isTransparent
                    ? 'text-white/90 hover:text-white hover:bg-white/10'
                    : 'text-midnight/70 hover:text-midnight hover:bg-sand-100'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          aria-label="Menu"
        >
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              menuOpen
                ? 'rotate-45 translate-y-2 bg-midnight'
                : isTransparent
                  ? 'bg-white'
                  : 'bg-midnight'
            }`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              menuOpen
                ? 'opacity-0'
                : isTransparent
                  ? 'bg-white'
                  : 'bg-midnight'
            }`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              menuOpen
                ? '-rotate-45 -translate-y-2 bg-midnight'
                : isTransparent
                  ? 'bg-white'
                  : 'bg-midnight'
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden fixed inset-0 top-0 bg-sand-50/98 backdrop-blur-lg z-40 flex flex-col items-center justify-center gap-2"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={link.to}
                  className={`block text-2xl font-light tracking-widest uppercase py-3 transition-colors ${
                    location.pathname.startsWith(link.to)
                      ? 'text-sea-600'
                      : 'text-midnight/70 hover:text-sea-600'
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
