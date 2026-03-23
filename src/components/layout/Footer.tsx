import { Link } from 'react-router-dom';
import { contactInfo } from '../../data/contact';

export default function Footer() {
  return (
    <footer className="bg-midnight text-white/80">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
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
          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-white/40 mb-4">
              Oldalak
            </h4>
            <nav className="flex flex-col gap-2">
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
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-white/40 mb-4">
              Kapcsolat
            </h4>
            <div className="space-y-3">
              <a
                href={`mailto:${contactInfo.email}`}
                className="block text-sm text-white/60 hover:text-white transition-colors"
              >
                {contactInfo.email}
              </a>
              <a
                href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                className="block text-sm text-white/60 hover:text-white transition-colors"
              >
                {contactInfo.phone}
              </a>
              <div className="flex gap-4 pt-2">
                <a
                  href={contactInfo.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-60 hover:opacity-100 transition-opacity"
                >
                  <img src="/images/facebook.png" alt="Facebook" className="h-6 w-6 invert" />
                </a>
                <a
                  href={contactInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-60 hover:opacity-100 transition-opacity"
                >
                  <img src="/images/instagram.png" alt="Instagram" className="h-6 w-6 invert" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 text-center">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} MONTAPART. Minden jog fenntartva.
          </p>
        </div>
      </div>
    </footer>
  );
}
