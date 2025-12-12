export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  type: 'BASKET3X3' | 'PADEL';
  image: string;
  status: 'UPCOMING' | 'COMPLETED';
  description: string;
  results?: string; // For completed events
}

export interface User {
  id: string;
  name: string;
  email: string;
  membershipId: string; // Numero tessera
  avatar: string;
}

export interface Registration {
  id: string;
  eventId: string;
  status: 'CONFIRMED' | 'PENDING' | 'WAITLIST';
  teamName: string;
}

export enum Page {
  HOME = 'home',
  ABOUT = 'about',
  EVENTS = 'events',
  MEMBER_AREA = 'member_area'
}