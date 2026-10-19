import { Link } from 'react-router-dom';

interface NotFoundProps {
  title?: string;
  description?: string;
}

export default function NotFound({
  title = 'Ez az oldal nem található',
  description = 'Lehet, hogy elírás került a címbe, vagy az oldal már nem érhető el. Nézzen körül apartmanjaink között!',
}: NotFoundProps) {
  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 pt-32 pb-20 text-center">
      <p className="text-sm font-semibold tracking-widest text-sea-600 mb-4">404</p>
      <h1 className="font-display text-3xl sm:text-4xl font-semibold text-midnight">{title}</h1>
      <p className="max-w-xl mx-auto mt-4 text-midnight/60 leading-relaxed">{description}</p>
      <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
        <Link to="/apartments" className="inline-flex items-center justify-center min-h-12 bg-sea-600 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-sea-700 transition-colors">
          Apartmanok megtekintése
        </Link>
        <Link to="/" className="inline-flex items-center justify-center min-h-12 bg-white text-sea-700 border border-sea-200 px-6 py-3 rounded-full text-sm font-medium hover:bg-sea-50 transition-colors">
          Vissza a főoldalra
        </Link>
      </div>
    </section>
  );
}
