import { Outlet, useLocation } from 'react-router-dom';
import { useLayoutEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const reduceMotion = useReducedMotion();
  const previousPath = useRef<string | null>(null);

  useLayoutEffect(() => {
    const isSectionNavigation = previousPath.current === location.pathname;
    previousPath.current = location.pathname;
    const section = location.hash && document.getElementById(location.hash.slice(1));
    if (section) {
      const allowMotion = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      section.scrollIntoView({ behavior: isSectionNavigation && allowMotion ? 'smooth' : 'instant' });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [location.pathname, location.hash, location.key]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header variant={isHome ? 'light' : 'dark'} />
      {/* Path changes reveal one complete page; hash navigation keeps it mounted. */}
      <motion.main
        key={location.pathname}
        className="flex-1"
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      >
        <Outlet />
      </motion.main>
      <Footer />
    </div>
  );
}
