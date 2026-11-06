import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ResponsiveImage from '../components/ui/ResponsiveImage';
import { aboutText } from '../data/contact';

// Copy from Ági's shared Drive document, reviewed 2026-11-06.
const services = [
  { title: 'Szállásközvetítés', text: "Évek óta foglalkozom montenegrói apartmanok és hotelek közvetítésével – elsősorban Sutomore, Petrovac, Utjeha és Budva településeken – magánszemélyeknek és utazási irodáknak egyaránt. Büszke vagyok rá, hogy minden egyes ajánlott szálláshelyet személyesen ismerem. Pontosan tudom, milyen a kilátás az erkélyről, milyen a felszereltsége, milyen messze van a tengerpart – így Ön garantáltan azt kapja, amit az igényei alapján elvár, és amire megérkezéskor számít." },
  { title: 'Programszervezés', text: "Emellett programszervezői szolgáltatásom a szálláshely közvetítéshez hasonlóan elérhető magánszemélyek, utazási irodák és nagyobb csoportok (20+ fős) számára is." },
  { title: 'Idegenvezetés', text: "2027 tavaszától pedig hivatalos idegenvezetőként is vállalom, hogy megmutatom a Montenegróba egyénileg, csoportosan vagy utazási irodákkal érkező turistáknak e csodás ország gyöngyszemeit." },
];
const benefits = [
  { title: 'Nyelvtudás', text: "Tökéletesen beszélek a helyi montenegrói nyelven, szerbül, angolul és oroszul." },
  { title: 'Helyismeret', text: "Kiváló helyismerettel rendelkezem. Az év nagy részét itt töltöm, így naprakész, hiteles információkkal és személyre szabott programajánlókkal tudom támogatni az Ön utazását." },
  { title: 'Művészettörténeti háttér', text: "Művészettörténészként a tények mellett lenyűgöző háttértörténetekkel teszem emlékezetessé a túráimat. Az általános tudnivalókon túl olyan kulturális érdekességeket és összefüggéseket osztok meg vendégeimmel, amelyek igazán életre keltik a látnivalókat." },
  { title: 'Megbízható szállások', text: "Célom, hogy teljesen levegyem a szervezés terhét a válláról: kipróbált, megbízható és kiváló ár-érték arányú szállásokat kínálok – rejtett költségek és kellemetlen meglepetések nélkül." },
];

const emphasisByTitle: Record<string, string> = {
  'Szállásközvetítés': 'minden egyes ajánlott szálláshelyet személyesen ismerem',
  'Programszervezés': 'programszervezői szolgáltatásom',
  'Idegenvezetés': 'hivatalos idegenvezető',
  'Nyelvtudás': 'Tökéletesen beszélek a helyi montenegrói nyelven,',
  'Helyismeret': 'Kiváló helyismerettel rendelkezem.',
  'Művészettörténeti háttér': 'Művészettörténészként a tények mellett lenyűgöző háttértörténetekkel teszem emlékezetessé a túráimat.',
  'Megbízható szállások': 'rejtett költségek és kellemetlen meglepetések nélkül.',
};

function EmphasizedText({ text, emphasis }: { text: string; emphasis: string }) {
  const start = text.indexOf(emphasis);
  if (start === -1) return text;

  return (
    <>
      {text.slice(0, start)}
      <strong className="font-semibold text-midnight">{emphasis}</strong>
      {text.slice(start + emphasis.length)}
    </>
  );
}

export default function About() {
  const reduceMotion = useReducedMotion();
  return (
    <div className="pt-26 md:pt-28 xl:pt-32 pb-16 sm:pb-20">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="max-w-5xl mx-auto px-4 sm:px-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr] gap-8 md:gap-12 items-center">
          <div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-[42px] lg:leading-tight font-semibold text-midnight mb-6">{aboutText.name}</h1>
            <div className="max-w-xl space-y-5 text-midnight/75 leading-relaxed">
              <p className="text-lg font-medium text-midnight">Üdvözlöm! Örülök, hogy rátalált az oldalamra.</p>
              <p>Montenegró csodálatos, de a tökéletes szállás megtalálása és a legérdekesebb látnivalók önálló felfedezése néha fejtörést okozhat. Én abban segítek Önnek, hogy a pihenés tényleg a feltöltődésről szóljon!</p>
            </div>
          </div>
          <div className="relative mx-auto w-[calc(100%-2rem)] max-w-[280px] md:max-w-[320px] my-2">
            <div className="absolute -inset-2 sm:-inset-4 bg-sea-100 rounded-3xl -rotate-3" />
            <ResponsiveImage src={aboutText.image} sizes="(min-width: 768px) 320px, 280px" maxWidth={800} alt={aboutText.name}
              className="relative w-full rounded-2xl h-[280px] md:h-[360px] object-cover object-[center_60%] shadow-lg" />
          </div>
        </div>

        <section aria-labelledby="about-services" className="max-w-3xl mt-10">
          <h2 id="about-services" className="font-display text-2xl sm:text-3xl font-semibold text-midnight leading-snug mb-8">A gondtalan montenegrói tengerparti nyaralás nálam kezdődik!</h2>
          <div className="space-y-6">
            {services.map(({ title, text }, index) => (
              <section key={title} aria-labelledby={`service-${index}`}>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-3">
                  <h3 id={`service-${index}`} className="text-lg font-semibold text-sea-800">{title}</h3>
                </div>
                <div className="space-y-4 text-midnight/75 leading-relaxed">
                  {(index === 0 ? text.split(/(?=Büszke vagyok)/) : [text]).map((paragraph) => (
                    <p key={paragraph}>
                      <EmphasizedText text={paragraph.trim()} emphasis={emphasisByTitle[title]} />
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>

        <section aria-labelledby="about-benefits" className="mt-12 sm:mt-16 rounded-3xl bg-sea-100 px-6 py-8 sm:p-10 lg:p-12">
          <h2 id="about-benefits" className="font-display text-2xl sm:text-3xl font-semibold text-midnight mb-7 sm:mb-8">Miért bízza rám a szervezést?</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-7 sm:gap-y-8">
            {benefits.map(({ title, text }) => (
              <li key={title}>
                <h3 className="font-display text-[22px] leading-snug font-semibold text-sea-800 mb-3">{title}</h3>
                <p className="text-midnight/75 leading-relaxed">
                  <EmphasizedText text={text} emphasis={emphasisByTitle[title]} />
                </p>
              </li>
            ))}
          </ul>
        </section>

        <div className="max-w-3xl mt-10 sm:mt-12 flex flex-col items-start gap-5">
          <p className="max-w-3xl text-lg text-midnight leading-relaxed">
            <strong className="block font-semibold">Kérdése van, vagy segíthetek a választásban?</strong>
            <span className="block">Keressen bizalommal, és találjuk meg együtt az Önnek tökéletes szállást!</span>
          </p>
          <Link to="/contact" className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 self-start max-w-full rounded-full bg-sea-600 px-7 py-3 text-white font-semibold hover:bg-sea-700 transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sea-700">
            Kapcsolatfelvétel <ArrowRight size={19} aria-hidden="true" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
