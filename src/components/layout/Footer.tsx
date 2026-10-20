import { Link } from 'react-router-dom';
import { contactInfo } from '../../data/contact';

export default function Footer() {
  return (
    <footer className="bg-midnight text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src="/images/logowhite.png"
              alt="MONTAPART"
              className="h-10 w-auto mb-4"
            />
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              Tenger karnyújtásnyira, elérhető áron.
              <br />
              Montenegrói apartmanok magyar vendégeknek.
            </p>
          </div>

          {/* Links */}
          <div className="text-center sm:text-left">
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-white/40 mb-4">
              Oldalak
            </h4>
            <nav className="flex flex-col items-center sm:items-start">
              {[
                { to: '/apartments', label: 'Apartmanok' },
                { to: '/hotels', label: 'Hotelek' },
                { to: '/programs', label: 'Programok' },
                { to: '/attractions', label: 'Látnivalók' },
                { to: '/transfer', label: 'Transzfer' },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="inline-flex min-h-11 items-center text-sm text-white/60 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="text-center sm:text-left">
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-white/40 mb-4">
              Kapcsolat
            </h4>
            <div className="space-y-1">
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex min-h-11 items-center justify-center sm:justify-start break-all text-sm text-white/60 hover:text-white transition-colors"
              >
                {contactInfo.email}
              </a>
              <a
                href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                className="flex min-h-11 items-center justify-center sm:justify-start break-all text-sm text-white/60 hover:text-white transition-colors"
              >
                {contactInfo.phone}
              </a>
              <div className="flex gap-4 pt-2 justify-center sm:justify-start">
                <a
                  href={contactInfo.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <img src="/images/facebook.png" alt="Facebook" className="h-7 w-7" />
                </a>
                <a
                  href={contactInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <img src="/images/instagram.png" alt="Instagram" className="h-7 w-7" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-center">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} MONTAPART. Minden jog fenntartva.
          </p>
          <p className="text-xs text-white/60">
            Készítette:{' '}
            <a
              href="https://ri-webstudio.eu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center rounded-sm font-semibold underline underline-offset-4 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              RI Web Studio
              <span className="sr-only"> — új lapon nyílik meg</span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
