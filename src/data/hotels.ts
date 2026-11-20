import { hotelImages } from './hotelImages.ts';

export interface Hotel {
  name: string;
  slug?: string;
  stars: number;
  image: string;
  images?: string[];
  description?: string;
}

export const hotels: Hotel[] = [
  { name: 'Canj', slug: 'canj-4-csillag', stars: 4, image: '/images/hotelek/canj-client.jpg', images: hotelImages.canj },
  { name: 'Buljarica', stars: 3, image: '/images/hotel2.jpg' },
  { name: 'Bar', stars: 3, image: '/images/hotel3.jpg' },
  { name: 'Sutomore', slug: 'sutomore-4-csillag', stars: 4, image: '/images/hotelek/sutomore-client.jpg', images: hotelImages.sutomore },
  { name: 'Buljarica', stars: 4, image: '/images/hotel2.jpg' },
];
