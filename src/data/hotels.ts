export interface Hotel {
  name: string;
  stars: number;
  image: string;
}

export const hotels: Hotel[] = [
  { name: 'Canj', stars: 4, image: '/images/hotel1.jpg' },
  { name: 'Buljarica', stars: 3, image: '/images/hotel2.jpg' },
  { name: 'Bar', stars: 3, image: '/images/hotel3.jpg' },
  { name: 'Sutomore', stars: 4, image: '/images/hotel2.jpg' },
  { name: 'Buljarica', stars: 4, image: '/images/hotel2.jpg' },
];
