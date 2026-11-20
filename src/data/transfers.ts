export interface TransferRoute {
  destination: string;
  taxiPrice: number;
  minibusPrice: number;
}

export const taxiCapacity = '4 fő';
export const minibusCapacity = '8 fő';

export const transferRoutes: TransferRoute[] = [
  { destination: 'Sutomore', taxiPrice: 60, minibusPrice: 110 },
  { destination: 'Canj', taxiPrice: 60, minibusPrice: 110 },
  { destination: 'Petrovac', taxiPrice: 60, minibusPrice: 110 },
  { destination: 'Bar', taxiPrice: 60, minibusPrice: 110 },
  { destination: 'Sveti Stefan', taxiPrice: 60, minibusPrice: 110 },
  { destination: 'Herceg Novi', taxiPrice: 95, minibusPrice: 185 },
  { destination: 'Budva', taxiPrice: 65, minibusPrice: 125 },
];
