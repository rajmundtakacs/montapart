export interface ApartmentUnit {
  id: number;
  label: string;
  capacity: number;
  bedrooms: number;
  hasKitchen: boolean;
  hasTerrace: boolean;
  hasLivingRoom: boolean;
  bathrooms: number;
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
        seaDistance: 'Saját strand',
        amenities: ['Parkoló', 'Klíma', 'TV', 'Internet', 'Vízforraló', 'Mikro'],
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
        bathrooms: 1,
        seaDistance: 'Saját strand',
        amenities: ['Parkoló', 'Klíma', 'TV', 'Internet', 'Vízforraló', 'Mikro'],
        images: generateImages('/images/apartmanok/sajatstrandos/ap2', 'sajatstrand', 7),
      },
    ],
  },
  {
    slug: 'lugas',
    name: 'Lugas apartmanház',
    description:
      'Csendes környezetben lévő, zárt szép zöld kerttel rendelkező teljesen felszerelt apartmanház várja a vendégeit, maximum 16 fős kapacitással. Az apartman nagy udvarral rendelkezik amiben napozóágyak, grill található. Minden apartmanhoz egy parkoló tartozik. A tenger és a városi strand kb. 400 m-re. Gyerek és állatbarát szállás.',
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
        bathrooms: 1,
        seaDistance: '500 m',
        amenities: ['Parkoló', 'Klíma', 'Mosógép', 'Mosogatógép', 'TV', 'Internet', 'Vízforraló', 'Mikro'],
        images: generateImages('/images/apartmanok/lugas/ap1', 'lugas', 9),
      },
      {
        id: 3,
        label: 'Apartman 3',
        capacity: 4,
        bedrooms: 1,
        hasKitchen: true,
        hasTerrace: true,
        hasLivingRoom: true,
        bathrooms: 1,
        seaDistance: '500 m',
        amenities: ['Parkoló', 'Klíma', 'Mosógép', 'TV', 'Internet', 'Vízforraló', 'Mikro'],
        images: generateImages('/images/apartmanok/lugas/ap2', 'lugas', 8),
      },
      {
        id: 4,
        label: 'Apartman 4',
        capacity: 6,
        bedrooms: 3,
        hasKitchen: true,
        hasTerrace: true,
        hasLivingRoom: true,
        bathrooms: 1,
        seaDistance: '500 m',
        amenities: ['Parkoló', 'Klíma', 'Mosogatógép', 'TV', 'Internet', 'Vízforraló', 'Mikro'],
        images: generateImages('/images/apartmanok/lugas/ap4', 'lugas', 16),
      },
    ],
  },
  {
    slug: 'branka',
    name: 'Branka néni apartmanháza',
    description:
      'Sutomoréban 100 m-re a homokos partszakasztól kiadó egy tágas, teljesen felszerelt, modern két külön nyíló hálószobás, nappali konyhás apartman (max. 5 fő). Az apartmanházban kiadó még két 3 fős stúdió apartman is. Wi-fi, klíma, terasz is tartozik.',
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
        bathrooms: 1,
        seaDistance: '110 m',
        amenities: ['Klíma', 'Mosogatógép', 'TV', 'Internet', 'Vízforraló', 'Mikro'],
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
        bathrooms: 1,
        seaDistance: '110 m',
        amenities: ['Klíma', 'TV', 'Internet', 'Vízforraló', 'Mikro'],
        images: generateImages('/images/apartmanok/brankaneni/ap2', 'branka', 12),
      },
    ],
  },
  {
    slug: 'kek',
    name: 'Kék apartmanház',
    description:
      'Ezekben a csodálatos kilátással rendelkező apartmanokban jól lehet kikapcsolódni. Van egy két helyiséges apartman külön háló és nappali konyha (max. 5 fő). Egy galériás 4 fős stúdió apartman és három 2 fős stúdió apartman. Mindegyik tengerre néz, wi-fi, klíma, strand az apartmanok alatt.',
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
        bathrooms: 1,
        seaDistance: '5 m',
        amenities: ['Parkoló', 'Klíma', 'Mosogatógép', 'TV', 'Internet', 'Vízforraló', 'Mikro'],
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
        bathrooms: 1,
        seaDistance: '5 m',
        amenities: ['Parkoló', 'Klíma', 'TV', 'Internet', 'Vízforraló', 'Mikro'],
        images: generateImages('/images/apartmanok/kek/images/ap2', 'kek', 18, 'JPG'),
      },
      {
        id: 3,
        label: 'Apartman 3',
        capacity: 3,
        bedrooms: 1,
        hasKitchen: true,
        hasTerrace: true,
        hasLivingRoom: true,
        bathrooms: 1,
        seaDistance: '5 m',
        amenities: ['Parkoló', 'Klíma', 'TV', 'Internet', 'Vízforraló', 'Mikro'],
        images: generateImages('/images/apartmanok/kek/images/ap3', 'kek', 13, 'JPG'),
      },
    ],
  },
  {
    slug: 'rusztikus',
    name: 'Rusztikus apartmanház',
    description:
      'Rusztikus stílusú apartmanok tengeri panorámával. Sutomoréban, a strandtól gyalog kb. 80 m-re tengerre néző terasszal rendelkező apartmanok várják a vendégeket. Két 2 helyiséges apartman: a nagyobb 5 fős és mellette egy 4 fős, valamint két 2 fős stúdió apartman. Az apartmanok teljesen felszereltek. Garantáltan csodálatos innen a naplemente!',
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
        bathrooms: 1,
        seaDistance: '80 m',
        amenities: ['Mikrohullámú sütő', 'Vízforraló', 'Internet', 'Légkondi', 'TV'],
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
        bathrooms: 1,
        seaDistance: '80 m',
        amenities: ['Mosógép', 'Mikrohullámú sütő', 'Vízforraló', 'Internet', 'Légkondi', 'TV'],
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
        bathrooms: 1,
        seaDistance: '80 m',
        amenities: ['Mikrohullámú sütő', 'Vízforraló', 'Internet', 'Légkondi', 'TV'],
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
        bathrooms: 1,
        seaDistance: '80 m',
        amenities: ['Mikrohullámú sütő', 'Vízforraló', 'Internet', 'Légkondi', 'TV'],
        images: generateImages('/images/apartmanok/rusztikus/images/ap4', 'rusztikus', 8, 'JPG'),
      },
    ],
  },
  {
    slug: 'viragos',
    name: 'Virágos apartmanház',
    description:
      'Növényekkel és mediterrán növényzettel körülvett, a tengertől gyalog 100 méterre igényes apartmanok várják a nyaralókat. Felár ellenében, teljesen zárt garázs.',
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
        bathrooms: 1,
        seaDistance: '120 m',
        amenities: ['Légkondi', 'Mosógép', 'TV', 'Internet', 'Vízforraló', 'Mikrohullámú sütő'],
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
        bathrooms: 1,
        seaDistance: '120 m',
        amenities: ['Légkondi', 'TV', 'Internet', 'Vízforraló', 'Mikrohullámú sütő'],
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
        bathrooms: 1,
        seaDistance: '120 m',
        amenities: ['Légkondi', 'TV', 'Internet', 'Vízforraló', 'Mikrohullámú sütő'],
        images: generateImages('/images/apartmanok/viragos/ap3', 'viragos', 11, 'JPG'),
      },
      {
        id: 4,
        label: 'Apartman 4',
        capacity: 3,
        bedrooms: 1,
        hasKitchen: true,
        hasTerrace: true,
        hasLivingRoom: false,
        bathrooms: 1,
        seaDistance: '120 m',
        amenities: ['Légkondi', 'TV', 'Internet', 'Vízforraló', 'Mikrohullámú sütő'],
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
        bedrooms: 2,
        hasKitchen: true,
        hasTerrace: true,
        hasLivingRoom: false,
        bathrooms: 1,
        seaDistance: '',
        amenities: ['Mosógép', 'Mikrohullámú sütő', 'Internet', 'Légkondi', 'TV'],
        images: generateImages('/images/apartmanok/sarga/ap1', 'sarga', 9, 'JPG'),
      },
      {
        id: 2,
        label: 'Apartman 2',
        capacity: 3,
        bedrooms: 2,
        hasKitchen: true,
        hasTerrace: true,
        hasLivingRoom: false,
        bathrooms: 1,
        seaDistance: '',
        amenities: ['Mosógép', 'Mikrohullámú sütő', 'Internet', 'Légkondi', 'TV'],
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
        bathrooms: 1,
        seaDistance: '400 m',
        amenities: ['Mosógép', 'Mikrohullámú sütő', 'Internet', 'Légkondi', 'Vízforraló'],
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
        bedrooms: 2,
        hasKitchen: true,
        hasTerrace: true,
        hasLivingRoom: false,
        bathrooms: 1,
        seaDistance: '150 m',
        amenities: ['Mosógép', 'Mikrohullámú sütő', 'Internet', 'Légkondi', 'TV'],
        images: generateImages('/images/apartmanok/petrovac/images', 'petrovac', 22),
      },
    ],
  },
  {
    slug: 'natasa',
    name: 'Natasa apartman',
    description:
      'Kényelmes apartman csodálatos tengerparti környezetben. Két hálószoba, étkező, két terasz és minden felszereltség a tökéletes pihenéshez.',
    thumbnail: '/images/apartmanok/natasa/thumbnail.JPG',
    units: [
      {
        id: 1,
        label: 'Apartman',
        capacity: 5,
        bedrooms: 2,
        hasKitchen: true,
        hasTerrace: true,
        hasLivingRoom: false,
        bathrooms: 1,
        seaDistance: '150 m',
        amenities: ['Mosógép', 'Mikrohullámú sütő', 'Internet', 'Légkondi', 'TV'],
        images: generateImages('/images/apartmanok/natasa/images', 'natasa', 11, 'JPG'),
      },
    ],
  },
];

export function getApartmentBySlug(slug: string): Apartment | undefined {
  return apartments.find((a) => a.slug === slug);
}
