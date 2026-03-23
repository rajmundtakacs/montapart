export interface TransferRoute {
  destination: string;
  taxiPrice: number;
  minibusPrice: number;
}

export const taxiCapacity = '4 fő';
export const minibusCapacity = '8 fő';

export const transferRoutes: TransferRoute[] = [
  { destination: 'Sutomore', taxiPrice: 55, minibusPrice: 110 },
  { destination: 'Canj', taxiPrice: 55, minibusPrice: 110 },
  { destination: 'Petrovac', taxiPrice: 55, minibusPrice: 110 },
  { destination: 'Bar', taxiPrice: 55, minibusPrice: 110 },
  { destination: 'Sveti Stefan', taxiPrice: 55, minibusPrice: 110 },
  { destination: 'Herceg Novi', taxiPrice: 85, minibusPrice: 180 },
  { destination: 'Budva', taxiPrice: 60, minibusPrice: 120 },
];
