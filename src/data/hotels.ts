import { hotelImages } from './hotelImages.ts';

export interface Hotel {
  name: string;
  location: string;
  slug: string;
  stars: number;
  image?: string;
  images?: string[];
  description: string;
}

// Current hotel selection and copy from the shared client document, 2026-11-20.
export const hotels: Hotel[] = [
  {
    "name": "Canj Hotel",
    "location": "Canj",
    "slug": "canj-4-csillag",
    "stars": 4,
    "image": "/images/hotelek/canj-client.jpg",
    "description": "Ideális választás a gondtalan tengerparti pihenéshez ez a négycsillagos szálloda, amelytől az aprókavicsos strand csak pár száz méter, mégis felkínálja a medencézés lehetőségét is. A több száz fő befogadására alkalmas hotel modern kialakítású 2–3 fős, teakonyhával felszerelt szobákkal várja a kikapcsolódni vágyókat, ötvözve a szállodai kényelmet az önellátás szabadságával. A vendégek kényelmét a szálloda saját medencéje, valamint a bőséges félpanziós ellátása teszi teljessé, így minden adott a felhőtlen nyaraláshoz a strand közvetlen közelében.",
    "images": hotelImages.canj
  },
  {
    "name": "Budva Hotel",
    "location": "Budva",
    "slug": "budva-3-csillag",
    "stars": 3,
    "description": "Reggelivel vagy félpanzióval várja a vendégeket Budvában ez a szálloda, amely felszereltsége alapján három csillagos besorolású, és ennek megfelelő áron szerepel itt a kínálatban. Az ide foglaló visszatérő vendégek a város hangulata mellett a hotel előnyének tartják, hogy mindössze 400 méter sétával elérhető Budva kedvelt és leghosszabb strandszakasza, a Slovenska plaza."
  },
  {
    "name": "Csillag Hotel",
    "location": "Sutomore",
    "slug": "sutomore-4-csillag",
    "stars": 4,
    "image": "/images/hotelek/sutomore-client.jpg",
    "description": "Sutomore kedvelt központi strandja és korzója mellett található ez a modern, kényelmes és medencés hotel, amely ideális választás egy gondtalan adriai pihenéshez. Tengeri panorámás apartmanjai igénytől függően 30 m²-től 120 m²-ig várják a vendégeket. Így akár 2 felnőtt, vagy akár egy öt-hat fős családi baráti társaság is kellemes vakációt tölthet el itt együtt. A hotel az étkezések közül csak a reggelit biztosítja, de azt bőségesen.",
    "images": hotelImages.sutomore
  },
  {
    "name": "Fehér Hotel",
    "location": "Sutomore",
    "slug": "feher-hotel-sutomore",
    "stars": 4,
    "description": "A hegyek és az Adria találkozásánál kínál 4 csillagos, élményekben gazdag pihenést a saját tengerpartos hotel, amelynek 2-3 vagy 4 fős szobái a tengerre és a Rumija-hegységre is lenyűgöző kilátást nyújtanak. A wellness- és spa-részleg (medencével, jakuzzival, szaunákkal, gőzfürdővel, masszázsokkal és edzőteremmel), valamint változatos gasztronómiai kínálat mellett egy tizedik emeleti Sky Barral várja a vendégeket. A szállás félpanziós ellátással foglalható."
  },
];
