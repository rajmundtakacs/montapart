export interface AttractionCategory {
  slug: string;
  name: string;
  heroImage: string;
  description: string;
  items: AttractionItem[];
}

export interface AttractionItem {
  name: string;
  image: string;
}

export const attractionCategories: AttractionCategory[] = [
  {
    slug: 'strandok',
    name: 'Strandok',
    heroImage: '/images/strand.jpg',
    description: 'Montenegró legszebb strandjai, kristálytiszta vízzel és lenyűgöző természeti környezetben.',
    items: [
      { name: 'Strand', image: '/images/strand2.jpg' },
      { name: 'Strand', image: '/images/strand3.jpg' },
      { name: 'Strand', image: '/images/strand4.jpg' },
      { name: 'Strand', image: '/images/strand5.jpg' },
    ],
  },
  {
    slug: 'nevezetessegek',
    name: 'Nevezetességek',
    heroImage: '/images/nevezetesseg.jpg',
    description: 'Történelmi emlékek, várak és kulturális látnivalók a tengerparton és a hegyekben.',
    items: [
      { name: 'Nevezetesség', image: '/images/nevezetesseg2.jpg' },
      { name: 'Nevezetesség', image: '/images/nevezetesseg3.jpg' },
      { name: 'Nevezetesség', image: '/images/nevezetesseg4.jpg' },
      { name: 'Nevezetesség', image: '/images/nevezetesseg5.jpg' },
    ],
  },
  {
    slug: 'varosok',
    name: 'Városok',
    heroImage: '/images/varosok.jpg',
    description: 'A montenegrói tengerpart legbájosabb városai és falvai.',
    items: [
      { name: 'Város', image: '/images/varosok2.jpg' },
      { name: 'Város', image: '/images/varosok3.jpg' },
      { name: 'Város', image: '/images/varosok4.jpg' },
      { name: 'Város', image: '/images/varosok5.jpg' },
    ],
  },
];
