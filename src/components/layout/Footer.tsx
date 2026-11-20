import ResponsiveImage from '../ui/ResponsiveImage';
import { Link } from 'react-router-dom';
import { contactInfo } from '../../data/contact';

export default function Footer() {
  return (
    <footer className="bg-midnight text-white/80 text-center sm:text-left">
      <div className="max-w-site mx-auto px-4 sm:px-6 py-10 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <ResponsiveImage
              src="/images/logowhite.png" sizes="160px" maxWidth={480}
              alt="MONTAPART"
              className="h-10 w-auto mb-4 mx-auto sm:mx-0"
            />
            <p className="text-sm text-white/65 leading-relaxed max-w-xs mx-auto sm:mx-0">
              Tenger karnyújtásnyira, elérhető áron.
              <br />
              Montenegrói apartmanok magyar vendégeknek.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-white/60 mb-2 sm:mb-4">
              Oldalak
            </h4>
            <nav aria-label="Lábléc navigáció" className="grid grid-cols-2 gap-x-4 sm:flex sm:flex-col sm:items-start">
              {[
                { to: '/montenegro', label: 'Miért éppen Montenegró?' },
                { to: '/apartments', label: 'Apartmanok' },
                { to: '/hotels', label: 'Hotelek' },
                { to: '/programs', label: 'Programok' },
                { to: '/attractions', label: 'Látnivalók' },
                { to: '/transfer', label: 'Transzfer' },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="inline-flex min-h-11 items-center justify-center sm:justify-start py-1 text-sm text-white/75 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-white/60 mb-2 sm:mb-4">
              Kapcsolat
            </h4>
            <div className="space-y-1">
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex min-h-11 items-center justify-center sm:justify-start break-all text-sm text-white/75 hover:text-white transition-colors"
              >
                {contactInfo.email}
              </a>
              <a
                href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                className="flex min-h-11 items-center justify-center sm:justify-start break-all text-sm text-white/75 hover:text-white transition-colors"
              >
                {contactInfo.phone}
              </a>
              <div className="flex justify-center sm:justify-start gap-3 sm:gap-4 pt-2">
                <a
                  href={contactInfo.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <ResponsiveImage src="/images/facebook.png" sizes="28px" maxWidth={160} loading="lazy" alt="Facebook" className="h-7 w-7" />
                </a>
                <a
                  href={contactInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <ResponsiveImage src="/images/instagram.png" sizes="28px" maxWidth={160} loading="lazy" alt="Instagram" className="h-7 w-7" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-7 pt-5 sm:mt-10 sm:pt-6 lg:mt-12 flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-2">
          <p className="text-xs text-white/60">
            &copy; {new Date().getFullYear()} MONTAPART. Minden jog fenntartva.
          </p>
          <p className="flex min-h-11 items-center gap-1 text-xs text-white/70">
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
