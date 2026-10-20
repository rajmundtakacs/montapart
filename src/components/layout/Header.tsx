import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import FullscreenDialog from '../ui/FullscreenDialog';

const navLinks = [
  { to: '/apartments', label: 'Apartmanok' },
  { to: '/hotels', label: 'Hotelek' },
  { to: '/programs', label: 'Programok' },
  { to: '/attractions', label: 'Látnivalók' },
  { to: '/transfer', label: 'Transzfer' },
  { to: '/about', label: 'Rólam' },
  { to: '/contact', label: 'Kapcsolat' },
];

interface HeaderProps { variant?: 'light' | 'dark' }

export default function Header(props: HeaderProps) {
  const { pathname } = useLocation();
  return <SiteHeader key={pathname} {...props} />;
}

function SiteHeader({ variant = 'dark' }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(() => window.scrollY > 40);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    const desktop = window.matchMedia('(min-width: 1280px)');
    const handleResize = () => { if (desktop.matches) setMenuOpen(false); };
    window.addEventListener('scroll', handleScroll, { passive: true });
    desktop.addEventListener('change', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      desktop.removeEventListener('change', handleResize);
    };
  }, []);

  const isTransparent = variant === 'light' && !scrolled && !menuOpen;
  const isActive = (to: string) => pathname.startsWith(to);

  return (
    <>
      <header className={`site-header fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        isTransparent ? 'bg-transparent' : 'bg-sand-50/90 backdrop-blur-md border-b border-sand-200/70'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-18 xl:h-20 gap-6">
          <Link to="/" aria-label="Montapart – főoldal" className="shrink-0">
            <img src={isTransparent ? '/images/logowhite.png' : '/images/logoblack.png'} alt="MONTAPART" className="h-10 xl:h-12 w-auto" />
          </Link>
          <nav aria-label="Fő navigáció" className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to} aria-current={isActive(link.to) ? 'page' : undefined}
                className={`px-4 py-3 text-sm font-medium tracking-wide uppercase rounded-full transition-colors ${
                  isActive(link.to)
                    ? isTransparent ? 'bg-white/20 text-white' : 'bg-sea-100 text-sea-700'
                    : isTransparent ? 'text-white/90 hover:bg-white/10' : 'text-midnight/70 hover:bg-sand-100'
                }`}>
                {link.label}
              </Link>
            ))}
          </nav>
          <button type="button" onClick={() => setMenuOpen(true)} aria-label="Menü megnyitása" aria-expanded={menuOpen} aria-haspopup="dialog" aria-controls={menuOpen ? 'mobile-navigation' : undefined}
            className={`xl:hidden w-12 h-12 rounded-full flex items-center justify-center ${isTransparent ? 'text-white hover:bg-white/10' : 'text-midnight hover:bg-sand-100'}`}>
            <Menu aria-hidden="true" className="w-6 h-6" />
          </button>
        </div>
      </header>
      {menuOpen && (
        <FullscreenDialog label="Navigáció" onClose={() => setMenuOpen(false)} className="bg-sand-50 text-midnight">
          <div className="menu-heading max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 h-18">
            <Link to="/" onClick={() => setMenuOpen(false)} aria-label="Montapart – főoldal">
              <img src="/images/logoblack.png" alt="MONTAPART" className="h-10 w-auto" />
            </Link>
            <button type="button" data-dialog-focus onClick={() => setMenuOpen(false)} aria-label="Menü bezárása" className="w-12 h-12 rounded-full flex items-center justify-center hover:bg-sand-100">
              <X aria-hidden="true" className="w-6 h-6" />
            </button>
          </div>
          <nav id="mobile-navigation" aria-label="Mobil navigáció" className="mobile-navigation flex flex-col items-center gap-1 px-4 py-6">
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to} onClick={() => setMenuOpen(false)} aria-current={isActive(link.to) ? 'page' : undefined}
                className={`w-full max-w-sm text-center text-xl sm:text-2xl tracking-widest uppercase px-4 py-3 rounded-xl transition-colors ${isActive(link.to) ? 'bg-sea-100 text-sea-700' : 'text-midnight/70 hover:bg-sand-100'}`}>
                {link.label}
              </Link>
            ))}
          </nav>
        </FullscreenDialog>
      )}
    </>
  );
}
