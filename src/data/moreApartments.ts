import type { Apartment } from './apartments';
// Shared client description and studio-group sheet data, 2026-11-19.
// The studio source describes a category, not a verified inventory count.
const adriaImages = [
  '/images/apartmanok/adria/adria-01.jpg',
  '/images/apartmanok/adria/adria-haloszoba.jpg',
  '/images/apartmanok/adria/adria-img-1609.jpg',
  '/images/apartmanok/adria/adria-img-1640.jpg',
  '/images/apartmanok/adria/adria-img-1637.jpg',
  '/images/apartmanok/adria/adria-konyha.jpg',
  '/images/apartmanok/adria/adria-furdoszoba.jpg',
  '/images/apartmanok/adria/adria-img-1632.jpg',
  '/images/apartmanok/adria/adria-img-1643.jpg',
  '/images/apartmanok/adria/adria-02.jpg',
  '/images/apartmanok/adria/adria-03.jpg',
  '/images/apartmanok/adria/adria-04.jpg',
  '/images/apartmanok/adria/adria-05.jpg',
  '/images/apartmanok/adria/adria-06.jpg',
];

export const moreApartments: Apartment[] = [
  {
    slug: 'utjeha-villa',
    name: 'Privát villa (Utjeha)',
    thumbnail: '/images/apartmanok/utjeha-villa/utjeha-01.jpg',
    unitCountLabel: 'Teljes villa',
    description: 'Bartól délre, Utjeha partján egy teljesen elszeparált, medencével és saját partszakasszal rendelkező villa kínál exkluzív kikapcsolódást. A két épületből álló ingatlan kiváló elrendezéssel rendelkezik: a tágas főépületben három hálószoba, három fürdőszoba, egy nagyméretű konyha és egy tágas terasz található, a kisebb vendégházban pedig egy hálószoba, fürdőszoba és konyha bérelhető. A vendégek kényelmét és aktív pihenését klíma, Wi-Fi, saját parkoló, grillezési lehetőség (elektromos grillel), valamint SUP-deszka is biztosítja.',
    units: [{
      id: 1,
      label: 'Teljes villa',
      bedrooms: 4,
      seaDistance: '0 m',
      amenities: [],
      images: [
        '/images/apartmanok/utjeha-villa/utjeha-01.jpg',
        '/images/apartmanok/utjeha-villa/utjeha-02.jpg',
        '/images/apartmanok/utjeha-villa/utjeha-03.jpg',
        '/images/apartmanok/utjeha-villa/utjeha-04.jpg',
        '/images/apartmanok/utjeha-villa/utjeha-05.jpg',
        '/images/apartmanok/utjeha-villa/utjeha-06.jpg',
        '/images/apartmanok/utjeha-villa/utjeha-07.jpg',
        '/images/apartmanok/utjeha-villa/utjeha-08.jpg',
        '/images/apartmanok/utjeha-villa/utjeha-09.jpg',
        '/images/apartmanok/utjeha-villa/utjeha-10.jpg',
        '/images/apartmanok/utjeha-villa/utjeha-11.jpg',
        '/images/apartmanok/utjeha-villa/utjeha-12.jpg',
      ],
    }],
  },
  {
    slug: 'barna',
    name: 'Barna Apartman',
    thumbnail: '/images/apartmanok/barna/epulet-es-apartman/barna-01.jpg',
    unitCountLabel: 'Apartman és stúdiók',
    description: 'A modern bútorokkal felszerelt apartmanház mindössze kétszáz méterre található a helyiek által kedvelt és megközelítése miatt különlegesnek számító Alagutas Strand bejáratától. Sutomore nagy strandjáig 600 métert kell sétálni. A villában több két-három fő elszállásolására alkalmas stúdió is található. A családok körében kedvelt a nappali-konyhás és hálószobás apartman. Nagyobb társaságok számára a teljes villa is bérelhető.',
    units: [
      {
        id: 1,
        label: 'Apartman',
        bedrooms: 1,
        seaDistance: '',
        amenities: [],
        images: [
          '/images/apartmanok/barna/epulet-es-apartman/barna-03.jpg',
          '/images/apartmanok/barna/epulet-es-apartman/barna-01.jpg',
          '/images/apartmanok/barna/epulet-es-apartman/barna-02.jpg',
        ],
      },
      {
        id: 2,
        label: 'Stúdiók',
        bedrooms: 1,
        seaDistance: '',
        amenities: [],
        images: [
          '/images/apartmanok/barna/studiok/barna-eredeti-06.jpg',
          '/images/apartmanok/barna/studiok/barna-eredeti-03.jpg',
          '/images/apartmanok/barna/epulet-es-apartman/barna-01.jpg',
        ],
      },
    ],
  },
  {
    "slug": "adria",
    "name": "Adria Apartmanok",
    "thumbnail": "/images/apartmanok/adria/adria-01.jpg",
    "galleryNote": "A közös galéria az apartmanház külső és belső tereit mutatja, szintenkénti bontás nélkül.",
    "description": "A kétemeletes villában egy földszinti és egy emeleti hatfős szálláshely található. Mindkét tágas apartman két hálószobával és két fürdőszobával várja a vendégeit. Sutomore központi nagy strandja mindössze 120 méteres sétával elérhető. Adottságai és felszereltsége mellett barátságos autentikus montenegrói házigazdája miatt is kedvelt szálláshely.",
    "descriptionParagraphs": [
      [
        {
          "text": "A kétemeletes villában egy földszinti és egy emeleti hatfős szálláshely található. Mindkét tágas apartman két hálószobával és két fürdőszobával várja a vendégeit. Sutomore központi nagy strandja mindössze 120 méteres sétával elérhető. Adottságai és felszereltsége mellett barátságos autentikus montenegrói házigazdája miatt is kedvelt szálláshely."
        }
      ]
    ],
    "units": [
      {
        "id": 1,
        "label": "Földszinti apartman",
        "capacity": 6,
        "bedrooms": 2,
        "bathrooms": 2,
        "seaDistance": "120 m",
        "amenities": [],
        "images": adriaImages
      },
      {
        "id": 2,
        "label": "Emeleti apartman",
        "capacity": 6,
        "bedrooms": 2,
        "bathrooms": 2,
        "seaDistance": "120 m",
        "amenities": [],
        "images": adriaImages
      }
    ]
  },
  {
    "slug": "studio-sajat-part",
    "name": "Stúdió apartmanok saját parttal",
    "thumbnail": "/images/apartmanok/studios/studios-01.jpg",
    "capacityLabel": "2–3 fő / stúdió",
    "unitCountLabel": "Stúdiók",
    "galleryNote": "A képek a szálláshelyet és a stúdiók egy részét mutatják.",
    "description": "A vendégek körében saját strandja miatt is népszerű apartmanház két- és háromfős stúdiókkal várja a vakációzókat. Így nagyobb társaságok számára is ideális szálláshely. Strandján ingyenesen biztosítja a napozóágyakat. A privát partjáról pedig minden nap gyönyörködhetnek a vendégek a naplementék látványában.",
    "descriptionParagraphs": [
      [
        {
          "text": "A vendégek körében saját strandja miatt is népszerű apartmanház két- és háromfős stúdiókkal várja a vakációzókat. Így nagyobb társaságok számára is ideális szálláshely. Strandján ingyenesen biztosítja a napozóágyakat. A privát partjáról pedig minden nap gyönyörködhetnek a vendégek a naplementék látványában."
        }
      ]
    ],
    "units": [
      {
        "id": 1,
        "label": "Stúdiók",
        "capacity": "2-3",
        "bedrooms": 1,
        "hasKitchen": true,
        "hasTerrace": true,
        "hasLivingRoom": false,
        "seaDistance": "0 m",
        "parking": "fizetős",
        "amenities": [
          "Internet",
          "Klíma",
          "TV",
          "Vízforraló"
        ],
        "images": [
          "/images/apartmanok/studios/studios-01.jpg",
          "/images/apartmanok/studios/studios-02.jpg",
          "/images/apartmanok/studios/studios-03.jpg",
          "/images/apartmanok/studios/studios-04.jpg",
          "/images/apartmanok/studios/studios-05.jpg",
          "/images/apartmanok/studios/studios-06.jpg",
          "/images/apartmanok/studios/studios-szoba-terasz.jpg",
          "/images/apartmanok/studios/studios-08.jpg"
        ]
      }
    ]
  },
  {
    "slug": "medences-sajat-strandos",
    "name": "Medencés és saját strandos apartmanház",
    "thumbnail": "/images/apartmanok/medences/pool-garden/pool-garden-01.jpg",
    "capacityLabel": "2–5 fő / egység",
    "unitCountLabel": "Apartmanok és stúdiók",
    "galleryNote": "A galériák a választott szállástípushoz tartozó képeket mutatják.",
    "description": "A Bar Riviérán (Barska rivijera), Sutomore déli részén exkluzív villa teremt tökéletes környezetet a felejthetetlen tengerparti pihenéshez: saját partszakasszal, ingyenes napozóágyakkal és medencével hívogat. A szálláshely kínálatában a prémium kényelmet kedvelők számára egy hatalmas teraszos, két hálószobás és két fürdőszobás penthouse apartman, valamint további magas színvonalú lakóegységek érhetők el. Bérelhető ugyanis további két apartman, amelyeket nappalival és egy hálószobával vehetnek igénybe a vakációzók, valamint két teljes panorámás, két-három vendég elszállásolására alkalmas stúdió, illetve négy olyan oldalerkélyes kis stúdió, amelyek két fő számára biztosítják a feltöltődést.  ",
    "descriptionParagraphs": [
      [
        {
          "text": "A Bar Riviérán (Barska rivijera), Sutomore déli részén exkluzív villa teremt tökéletes környezetet a felejthetetlen tengerparti pihenéshez: saját partszakasszal, ingyenes napozóágyakkal és medencével hívogat. A szálláshely kínálatában a prémium kényelmet kedvelők számára egy hatalmas teraszos, két hálószobás és két fürdőszobás penthouse apartman, valamint további magas színvonalú lakóegységek érhetők el. Bérelhető ugyanis további két apartman, amelyeket nappalival és egy hálószobával vehetnek igénybe a vakációzók, valamint két teljes panorámás, két-három vendég elszállásolására alkalmas stúdió, illetve négy olyan oldalerkélyes kis stúdió, amelyek két fő számára biztosítják a feltöltődést.  "
        }
      ]
    ],
    "units": [
      {
        "id": 1,
        "label": "Kis stúdió",
        "capacity": 2,
        "bedrooms": 1,
        "hasKitchen": true,
        "hasTerrace": true,
        "hasLivingRoom": false,
        "seaDistance": "0 m",
        "parking": "udvar",
        "amenities": [
          "Klíma",
          "TV",
          "Internet",
          "Vízforraló",
          "Mikró"
        ],
        "images": [
          "/images/apartmanok/medences/pool-small/pool-small-01.jpg",
          "/images/apartmanok/medences/pool-small/pool-small-02.jpg",
          "/images/apartmanok/medences/pool-small/pool-small-03.jpg",
          "/images/apartmanok/medences/pool-small/pool-small-04.jpg",
          "/images/apartmanok/medences/pool-garden/pool-garden-01.jpg",
          "/images/apartmanok/medences/pool-garden/pool-garden-02.jpg",
          "/images/apartmanok/medences/pool-garden/pool-garden-03.jpg",
          "/images/apartmanok/medences/pool-garden/pool-garden-04.jpg"
        ]
      },
      {
        "id": 2,
        "label": "Nagy stúdió",
        "capacity": 3,
        "bedrooms": 1,
        "hasKitchen": true,
        "hasTerrace": true,
        "hasLivingRoom": false,
        "seaDistance": "0 m",
        "parking": "udvar",
        "amenities": [
          "Klíma",
          "TV",
          "Internet",
          "Vízforraló",
          "Mikró"
        ],
        "images": [
          "/images/apartmanok/medences/pool-large/pool-large-01.jpg",
          "/images/apartmanok/medences/pool-large/pool-large-02.jpg",
          "/images/apartmanok/medences/pool-large/pool-large-03.jpg",
          "/images/apartmanok/medences/pool-large/pool-large-04.jpg",
          "/images/apartmanok/medences/pool-garden/pool-garden-01.jpg",
          "/images/apartmanok/medences/pool-garden/pool-garden-02.jpg",
          "/images/apartmanok/medences/pool-garden/pool-garden-03.jpg",
          "/images/apartmanok/medences/pool-garden/pool-garden-04.jpg"
        ]
      },
      {
        "id": 3,
        "label": "Apartman",
        "capacity": 4,
        "bedrooms": 1,
        "hasKitchen": true,
        "hasTerrace": true,
        "hasLivingRoom": true,
        "seaDistance": "0 m",
        "parking": "udvar",
        "amenities": [
          "Klíma",
          "TV",
          "Internet",
          "Vízforraló",
          "Mikró"
        ],
        "images": [
          "/images/apartmanok/medences/pool-apartment/pool-apartment-01.jpg",
          "/images/apartmanok/medences/pool-apartment/pool-apartment-02.jpg",
          "/images/apartmanok/medences/pool-apartment/pool-apartment-03.jpg",
          "/images/apartmanok/medences/pool-apartment/pool-apartment-04.jpg",
          "/images/apartmanok/medences/pool-apartment/pool-apartment-05.jpg",
          "/images/apartmanok/medences/pool-apartment/pool-apartment-06.jpg",
          "/images/apartmanok/medences/pool-garden/pool-garden-01.jpg",
          "/images/apartmanok/medences/pool-garden/pool-garden-02.jpg",
          "/images/apartmanok/medences/pool-garden/pool-garden-03.jpg",
          "/images/apartmanok/medences/pool-garden/pool-garden-04.jpg"
        ]
      },
      {
        "id": 4,
        "label": "Penthouse apartman",
        "capacity": 5,
        "bedrooms": 2,
        "hasKitchen": true,
        "hasTerrace": true,
        "hasLivingRoom": true,
        "seaDistance": "0 m",
        "parking": "udvar",
        "amenities": [
          "Klíma",
          "TV",
          "Internet",
          "Vízforraló",
          "Mikró"
        ],
        "images": [
          "/images/apartmanok/medences/pool-penthouse/pool-penthouse-01.jpg",
          "/images/apartmanok/medences/pool-penthouse/pool-penthouse-02.jpg",
          "/images/apartmanok/medences/pool-penthouse/pool-penthouse-03.jpg",
          "/images/apartmanok/medences/pool-penthouse/pool-penthouse-04.jpg",
          "/images/apartmanok/medences/pool-penthouse/pool-penthouse-05.jpg",
          "/images/apartmanok/medences/pool-penthouse/pool-penthouse-06.jpg",
          "/images/apartmanok/medences/pool-penthouse/pool-penthouse-07.jpg",
          "/images/apartmanok/medences/pool-garden/pool-garden-01.jpg",
          "/images/apartmanok/medences/pool-garden/pool-garden-02.jpg",
          "/images/apartmanok/medences/pool-garden/pool-garden-03.jpg",
          "/images/apartmanok/medences/pool-garden/pool-garden-04.jpg"
        ],
        "bathrooms": 2
      }
    ]
  }
];
