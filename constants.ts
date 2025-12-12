import { Event, User, Registration } from './types';

export const MOCK_EVENTS: Event[] = [
  {
    id: '1',
    title: 'Sunset 3x3 Cagliari',
    date: '2024-07-15',
    location: 'Poetto, Cagliari',
    type: 'BASKET3X3',
    image: 'https://picsum.photos/id/158/800/600',
    status: 'UPCOMING',
    description: 'Il torneo 3x3 più caldo dell\'estate sarda. Categoria Open e Under 18.',
  },
  {
    id: '2',
    title: 'Padel Cup Costa Smeralda',
    date: '2024-08-01',
    location: 'Porto Cervo',
    type: 'PADEL',
    image: 'https://picsum.photos/id/1055/800/600',
    status: 'UPCOMING',
    description: 'Torneo di Padel amatoriale in una location esclusiva.',
  },
  {
    id: '3',
    title: 'Spring Basket Oristano',
    date: '2024-04-10',
    location: 'Oristano',
    type: 'BASKET3X3',
    image: 'https://picsum.photos/id/452/800/600',
    status: 'COMPLETED',
    description: 'Prima tappa del circuito regionale.',
    results: '1° Posto: I Giganti, 2° Posto: Team Nuraghe',
  },
  {
    id: '4',
    title: 'Winter Padel Sassari',
    date: '2023-12-15',
    location: 'Sassari Indoor',
    type: 'PADEL',
    image: 'https://picsum.photos/id/192/800/600',
    status: 'COMPLETED',
    description: 'Torneo di chiusura anno.',
    results: 'Vincitori: Rossi/Bianchi',
  }
];

export const MOCK_USER: User = {
  id: 'u1',
  name: 'Marco Spissu',
  email: 'marco@example.com',
  membershipId: 'BDL-2024-0042',
  avatar: 'https://picsum.photos/id/64/100/100'
};

export const MOCK_REGISTRATIONS: Registration[] = [
  {
    id: 'r1',
    eventId: '1',
    status: 'CONFIRMED',
    teamName: 'I Quattro Mori'
  },
  {
    id: 'r2',
    eventId: '3',
    status: 'CONFIRMED',
    teamName: 'Dinamo Friends'
  }
];