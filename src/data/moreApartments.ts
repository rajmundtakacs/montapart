import type { Apartment } from './apartments';
// Shared client description and studio-group sheet data, 2026-11-19.
// The studio source describes a category, not a verified inventory count.
export const moreApartments: Apartment[] = [
  {
    "slug": "adria",
    "name": "Adria Apartmanok",
    "thumbnail": "/images/apartmanok/adria/adria-01.jpg",
    "galleryNote": "A képek a szállás épületét és közös külső tereit mutatják.",
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
        "images": [
          "/images/apartmanok/adria/adria-01.jpg",
          "/images/apartmanok/adria/adria-02.jpg",
          "/images/apartmanok/adria/adria-03.jpg",
          "/images/apartmanok/adria/adria-04.jpg",
          "/images/apartmanok/adria/adria-05.jpg",
          "/images/apartmanok/adria/adria-06.jpg"
        ]
      },
      {
        "id": 2,
        "label": "Emeleti apartman",
        "capacity": 6,
        "bedrooms": 2,
        "bathrooms": 2,
        "seaDistance": "120 m",
        "amenities": [],
        "images": [
          "/images/apartmanok/adria/adria-01.jpg",
          "/images/apartmanok/adria/adria-02.jpg",
          "/images/apartmanok/adria/adria-03.jpg",
          "/images/apartmanok/adria/adria-04.jpg",
          "/images/apartmanok/adria/adria-05.jpg",
          "/images/apartmanok/adria/adria-06.jpg"
        ]
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
          "/images/apartmanok/studios/studios-07.jpg",
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
