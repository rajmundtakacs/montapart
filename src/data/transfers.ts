export interface TransferRoute {
  destination: string;
  capacity: string;
  price: number;
}

export interface TransferCategory {
  name: string;
  routes: TransferRoute[];
}

export const transfers: TransferCategory[] = [
  {
    name: 'Taxi',
    routes: [
      { destination: 'Sutomore', capacity: '4 fő', price: 55 },
      { destination: 'Canj', capacity: '4 fő', price: 55 },
      { destination: 'Petrovac', capacity: '4 fő', price: 55 },
      { destination: 'Bar', capacity: '4 fő', price: 55 },
      { destination: 'Sveti Stefan', capacity: '4 fő', price: 55 },
      { destination: 'Herceg Novi', capacity: '4 fő', price: 85 },
      { destination: 'Budva', capacity: '4 fő', price: 60 },
    ],
  },
  {
    name: 'Kisbusz',
    routes: [
      { destination: 'Sutomore', capacity: '8 fő', price: 110 },
      { destination: 'Canj', capacity: '8 fő', price: 110 },
      { destination: 'Petrovac', capacity: '8 fő', price: 110 },
      { destination: 'Bar', capacity: '8 fő', price: 110 },
      { destination: 'Sveti Stefan', capacity: '8 fő', price: 110 },
      { destination: 'Herceg Novi', capacity: '8 fő', price: 180 },
      { destination: 'Budva', capacity: '8 fő', price: 120 },
    ],
  },
];
