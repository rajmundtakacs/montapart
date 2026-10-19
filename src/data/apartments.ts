export interface ApartmentUnit {
  id: number;
  label: string;
  capacity: number | `${number}-${number}`;
  bedrooms: number;
  hasKitchen: boolean;
  hasTerrace: boolean;
  hasLivingRoom: boolean;
  bathrooms?: number;
  parking?: string;
  terraceCount?: number;
  seaDistance: string;
  amenities: string[];
  images: string[];
}

export interface Apartment {
  slug: string;
  name: string;
  description: string;
  thumbnail: string;
  units: ApartmentUnit[];
}

function generateImages(base: string, prefix: string, count: number, ext = 'jpg'): string[] {
  return Array.from({ length: count }, (_, i) => `${base}/${prefix}_${i + 1}.${ext}`);
}

// Apartment facts follow the shared Montapart accommodation sheet.
// Missing source values stay unspecified; conditional facilities retain their conditions.
export const apartments: Apartment[] = [
  {
    slug: 'sajat-strandos',
    name: 'Saját strandos apartmanház',
    description:
      'A három szintes házban két apartman található, maximum 9 fő fér el, így akár baráti társaságok, vagy nagyobb családok számára is kényelmes. Az apartmanok nagy kerttel és saját stranddal, tengerparttal rendelkeznek. A kertben grillező, kinti zuhany, nyugágyak biztosítják a pihenést, és nem mellesleg csodálatos a naplemente. A szállás állatbarát, lehet kutyával érkezni.',
    thumbnail: '/images/apartmanok/sajatstrandos/thumbnail.jpg',
    units: [
      {
        id: 1,
        label: 'Apartman 1',
        capacity: 5,
        bedrooms: 2,
        hasKitchen: true,
        hasTerrace: true,
        hasLivingRoom: false,
        bathrooms: 2,
        parking: 'igen',
        seaDistance: '0 m',
        amenities: ['Internet', 'Klíma', 'TV', 'Mikró', 'Vízforraló'],
        images: generateImages('/images/apartmanok/sajatstrandos/ap1', 'sajatstrand', 11),
      },
      {
        id: 2,
        label: 'Apartman 2',
        capacity: 4,
        bedrooms: 2,
        hasKitchen: true,
        hasTerrace: true,
        hasLivingRoom: false,
        parking: 'igen',
        seaDistance: '0 m',
        amenities: ['Internet', 'Klíma', 'TV', 'Mikró', 'Vízforraló'],
        images: generateImages('/images/apartmanok/sajatstrandos/ap2', 'sajatstrand', 7),
      },
    ],
  },
  {
    slug: 'lugas',
    name: 'Lugas apartmanház',
    description:
      'Csendes környezetben lévő, zárt szép zöld kerttel rendelkező teljesen felszerelt apartmanház várja a vendégeit, maximum 16 fős kapacitással. Az apartman nagy udvarral rendelkezik amiben napozóágyak, grill található. Minden apartmanhoz egy parkoló tartozik. A tenger és a városi strand kb. 500 m-re. Gyerek és állatbarát szállás.',
    thumbnail: '/images/apartmanok/lugas/thumbnail.JPG',
    units: [
      {
        id: 1,
        label: 'Apartman 1',
        capacity: 6,
        bedrooms: 2,
        hasKitchen: true,
        hasTerrace: true,
        hasLivingRoom: true,
        parking: 'igen',
        seaDistance: '500 m',
        amenities: ['Internet', 'Klíma', 'TV', 'Mosógép', 'Mosogatógép', 'Mikró', 'Vízforraló'],
        images: generateImages('/images/apartmanok/lugas/ap1', 'lugas', 9),
      },
      {
        id: 2,
        label: 'Apartman 2',
        capacity: 4,
        bedrooms: 1,
        hasKitchen: true,
        hasTerrace: true,
        hasLivingRoom: true,
        parking: 'igen',
        seaDistance: '500 m',
        amenities: ['Internet', 'Klíma', 'TV', 'Mosógép', 'Mikró', 'Vízforraló'],
        images: generateImages('/images/apartmanok/lugas/ap2', 'lugas', 8),
      },
      {
        id: 3,
        label: 'Apartman 3',
        capacity: 6,
        bedrooms: 3,
        hasKitchen: true,
        hasTerrace: true,
        hasLivingRoom: true,
        parking: 'igen',
        seaDistance: '500 m',
        amenities: ['Internet', 'Klíma', 'TV', 'Mosógép', 'Mikró', 'Vízforraló'],
        images: generateImages('/images/apartmanok/lugas/ap4', 'lugas', 16),
      },
    ],
  },
  {
    slug: 'branka',
    name: 'Branka néni apartmanháza',
    description:
      'Sutomoréban 110 m-re a homokos partszakasztól kiadó egy tágas, teljesen felszerelt, modern két külön nyíló hálószobás, nappali konyhás apartman (max. 5 fő). Az itt bemutatott másik apartman 3 fő számára alkalmas. Wi-fi, klíma, terasz is tartozik.',
    thumbnail: '/images/apartmanok/brankaneni/thumbnail.JPG',
    units: [
      {
        id: 1,
        label: 'Apartman 1',
        capacity: 5,
        bedrooms: 2,
        hasKitchen: true,
        hasTerrace: true,
        hasLivingRoom: true,
        parking: 'utcán',
        seaDistance: '110 m',
        amenities: ['Internet', 'Klíma', 'TV', 'Mosogatógép', 'Mikró', 'Vízforraló'],
        images: generateImages('/images/apartmanok/brankaneni/ap1', 'branka', 12),
      },
      {
        id: 2,
        label: 'Apartman 2',
        capacity: 3,
        bedrooms: 1,
        hasKitchen: true,
        hasTerrace: true,
        hasLivingRoom: false,
        parking: 'utcán',
        seaDistance: '110 m',
        amenities: ['Internet', 'Klíma', 'TV', 'Mikró', 'Vízforraló'],
        images: generateImages('/images/apartmanok/brankaneni/ap2', 'branka', 12),
      },
    ],
  },
  {
    slug: 'kek',
    name: 'Kék apartmanház',
    description:
      'Ezekben a csodálatos kilátással rendelkező apartmanokban jól lehet kikapcsolódni. Az itt bemutatott apartmanok 5, 4 és 3 fő számára alkalmasak; az első két hálószobával és nappalival rendelkezik. Mindegyik tengerre néz, wi-fi, klíma, strand az apartmanok alatt.',
    thumbnail: '/images/apartmanok/kek/thumbnail.png',
    units: [
      {
        id: 1,
        label: 'Apartman 1',
        capacity: 5,
        bedrooms: 2,
        hasKitchen: true,
        hasTerrace: true,
        hasLivingRoom: true,
        parking: 'igen',
        seaDistance: '5 m',
        amenities: ['Internet', 'Klíma', 'TV', 'Mosogatógép', 'Mikró', 'Vízforraló'],
        images: generateImages('/images/apartmanok/kek/images/ap1', 'kek', 20, 'JPG'),
      },
      {
        id: 2,
        label: 'Apartman 2',
        capacity: 4,
        bedrooms: 1,
        hasKitchen: true,
        hasTerrace: true,
        hasLivingRoom: true,
        parking: 'igen',
        seaDistance: '5 m',
        amenities: ['Internet', 'Klíma', 'TV', 'Mikró', 'Vízforraló'],
        images: generateImages('/images/apartmanok/kek/images/ap2', 'kek', 18, 'JPG'),
      },
      {
        id: 3,
        label: 'Apartman 3',
        capacity: 3,
        bedrooms: 1,
        hasKitchen: true,
        hasTerrace: true,
        hasLivingRoom: false,
        parking: 'igen',
        seaDistance: '5 m',
        amenities: ['Internet', 'Klíma', 'TV', 'Mikró', 'Vízforraló'],
        images: generateImages('/images/apartmanok/kek/images/ap3', 'kek', 13, 'JPG'),
      },
    ],
  },
  {
    slug: 'rusztikus',
    name: 'Rusztikus apartmanház',
    description:
      'Rusztikus stílusú apartmanok tengeri panorámával. Sutomoréban, a strandtól gyalog kb. 80 m-re tengerre néző terasszal rendelkező apartmanok várják a vendégeket. Az itt bemutatott két hálószobás apartmanok 5 és 4 fősek, az egy hálószobás apartmanok 3 és 2 fő befogadására alkalmasak. Az apartmanok teljesen felszereltek. Garantáltan csodálatos innen a naplemente!',
    thumbnail: '/images/apartmanok/rusztikus/thumbnail.png',
    units: [
      {
        id: 1,
        label: 'Apartman 1',
        capacity: 5,
        bedrooms: 2,
        hasKitchen: true,
        hasTerrace: true,
        hasLivingRoom: false,
        parking: 'igen',
        seaDistance: '80 m',
        amenities: ['Internet', 'Klíma', 'TV', 'Mikró', 'Vízforraló'],
        images: generateImages('/images/apartmanok/rusztikus/images/ap1', 'rusztikus', 16, 'JPG'),
      },
      {
        id: 2,
        label: 'Apartman 2',
        capacity: 4,
        bedrooms: 2,
        hasKitchen: true,
        hasTerrace: true,
        hasLivingRoom: false,
        parking: 'igen',
        seaDistance: '80 m',
        amenities: ['Internet', 'Klíma', 'TV', 'Mosógép', 'Mikró', 'Vízforraló'],
        images: generateImages('/images/apartmanok/rusztikus/images/ap2', 'rusztikus', 20, 'JPG'),
      },
      {
        id: 3,
        label: 'Apartman 3',
        capacity: 3,
        bedrooms: 1,
        hasKitchen: true,
        hasTerrace: true,
        hasLivingRoom: false,
        parking: 'igen',
        seaDistance: '80 m',
        amenities: ['Internet', 'Klíma', 'TV', 'Mikró', 'Vízforraló'],
        images: generateImages('/images/apartmanok/rusztikus/images/ap3', 'rusztikus', 12, 'JPG'),
      },
      {
        id: 4,
        label: 'Apartman 4',
        capacity: 2,
        bedrooms: 1,
        hasKitchen: true,
        hasTerrace: true,
        hasLivingRoom: false,
        parking: 'igen',
        seaDistance: '80 m',
        amenities: ['Internet', 'Klíma', 'TV', 'Mikró', 'Vízforraló'],
        images: generateImages('/images/apartmanok/rusztikus/images/ap4', 'rusztikus', 8, 'JPG'),
      },
    ],
  },
  {
    slug: 'viragos',
    name: 'Virágos apartmanház',
    description:
      'Növényekkel és mediterrán növényzettel körülvett, a tengertől gyalog 120 méterre igényes apartmanok várják a nyaralókat. Felár ellenében, teljesen zárt garázs.',
    thumbnail: '/images/apartmanok/viragos/thumbnail.JPG',
    units: [
      {
        id: 1,
        label: 'Apartman 1',
        capacity: 4,
        bedrooms: 1,
        hasKitchen: true,
        hasTerrace: true,
        hasLivingRoom: true,
        parking: 'garázs: 8 EUR',
        seaDistance: '120 m',
        amenities: ['Internet', 'Klíma', 'TV', 'Mosógép', 'Mikró', 'Vízforraló'],
        images: generateImages('/images/apartmanok/viragos/ap1', 'viragos', 11, 'JPG'),
      },
      {
        id: 2,
        label: 'Apartman 2',
        capacity: 5,
        bedrooms: 1,
        hasKitchen: true,
        hasTerrace: true,
        hasLivingRoom: true,
        parking: '2 hely',
        seaDistance: '120 m',
        amenities: ['Internet', 'Klíma', 'TV', 'Mosógép (kérésre)', 'Mikró', 'Vízforraló'],
        images: generateImages('/images/apartmanok/viragos/ap2', 'viragos', 9, 'JPG'),
      },
      {
        id: 3,
        label: 'Apartman 3',
        capacity: 3,
        bedrooms: 1,
        hasKitchen: true,
        hasTerrace: true,
        hasLivingRoom: false,
        seaDistance: '120 m',
        amenities: ['Internet', 'Klíma', 'TV', 'Mosógép (kérésre)', 'Mikró', 'Vízforraló'],
        images: generateImages('/images/apartmanok/viragos/ap3', 'viragos', 11, 'JPG'),
      },
      {
        id: 4,
        label: 'Apartman 4 (LUX)',
        capacity: 5,
        bedrooms: 2,
        hasKitchen: true,
        hasTerrace: true,
        hasLivingRoom: true,
        seaDistance: '120 m',
        amenities: ['Internet', 'Klíma', 'TV', 'Mosógép (kérésre)', 'Mosogatógép', 'Mikró', 'Vízforraló'],
        images: generateImages('/images/apartmanok/viragos/ap4', 'viragos', 13, 'JPG'),
      },
    ],
  },
  {
    slug: 'sarga',
    name: 'Sárga apartmanház',
    description:
      'Kényelmes, teljesen felszerelt apartmanok a tengerparttól pár percre. Modern berendezés, légkondicionálás és minden, amire szükséged lehet a tökéletes nyaraláshoz.',
    thumbnail: '/images/apartmanok/sarga/thumbnail.png',
    units: [
      {
        id: 1,
        label: 'Apartman 1',
        capacity: 4,
        bedrooms: 1,
        hasKitchen: true,
        hasTerrace: true,
        hasLivingRoom: true,
        parking: 'igen',
        seaDistance: '150 m',
        amenities: ['Internet', 'Klíma', 'TV', 'Mosógép (van lehetőség)', 'Mikró', 'Vízforraló'],
        images: generateImages('/images/apartmanok/sarga/ap1', 'sarga', 9, 'JPG'),
      },
      {
        id: 2,
        label: 'Apartman 2',
        capacity: 4,
        bedrooms: 1,
        hasKitchen: true,
        hasTerrace: true,
        hasLivingRoom: true,
        parking: 'igen',
        seaDistance: '150 m',
        amenities: ['Internet', 'Klíma', 'TV', 'Mosógép (van lehetőség)', 'Mikró', 'Vízforraló'],
        images: generateImages('/images/apartmanok/sarga/ap2', 'sarga', 7, 'JPG'),
      },
    ],
  },
  {
    slug: 'szololugas',
    name: 'Szőlőlugas apartman',
    description:
      'Az apartman kb. 50 m² egy hálószoba és egy nappali konyhából áll, kb. 400 m-re van a nagy strand. Az apartman nagyon jó áron várja vendégeit, maximum 4 fő befogadására alkalmas, egy kis kiülő is tartozik az apartmanhoz.',
    thumbnail: '/images/apartmanok/szololugas/thumbnail.jpg',
    units: [
      {
        id: 1,
        label: 'Apartman',
        capacity: 4,
        bedrooms: 1,
        hasKitchen: true,
        hasTerrace: true,
        hasLivingRoom: true,
        parking: 'nem',
        seaDistance: '400 m',
        amenities: ['Internet', 'Klíma', 'Mosógép', 'Mikró', 'Vízforraló'],
        images: generateImages('/images/apartmanok/szololugas/images', 'szololugas', 20),
      },
    ],
  },
  {
    slug: 'petrovac',
    name: 'Petrovac apartman',
    description:
      'Petrovac egy nagyon szép kis halászfalu úgynevezett vörös homokos stranddal, már a 3. században lakott volt. Igazi településsé a 14. század során vált. Nagyon hangulatossá teszi a helyet a sziklaszirtre épült olasz erőd, Kastel és a homokos-aprókavicsos strand.',
    thumbnail: '/images/apartmanok/petrovac/thumbnail.jpg',
    units: [
      {
        id: 1,
        label: 'Apartman',
        capacity: 5,
        bedrooms: 1,
        hasKitchen: true,
        hasTerrace: true,
        terraceCount: 2,
        hasLivingRoom: true,
        parking: 'utcán',
        seaDistance: '200 m',
        amenities: ['Internet', 'Klíma', 'TV', 'Mosógép', 'Mosogatógép', 'Mikró', 'Vízforraló'],
        images: generateImages('/images/apartmanok/petrovac/images', 'petrovac', 22),
      },
    ],
  },
  {
    slug: 'natasa',
    name: 'Natasa apartman',
    description:
      'Kényelmes apartman csodálatos tengerparti környezetben. A tengertől 100 méterre található, 2–3 fős apartman egy hálószobával, konyhával és terasszal várja vendégeit.',
    thumbnail: '/images/apartmanok/natasa/thumbnail.JPG',
    units: [
      {
        id: 1,
        label: 'Apartman',
        capacity: '2-3',
        bedrooms: 1,
        hasKitchen: true,
        hasTerrace: true,
        hasLivingRoom: false,
        parking: 'utcán',
        seaDistance: '100 m',
        amenities: ['Internet', 'Klíma', 'TV', 'Mikró', 'Vízforraló'],
        images: generateImages('/images/apartmanok/natasa/images', 'natasa', 11, 'JPG'),
      },
    ],
  },
];

export function getApartmentBySlug(slug: string): Apartment | undefined {
  return apartments.find((a) => a.slug === slug);
}
