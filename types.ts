
export enum EventType {
  CASAMENTO = 'Casamento',
  FESTA = 'Festa',
  CORPORATIVO = 'Corporativo',
  OUTROS = 'Outros'
}

export interface Package {
  id: string;
  name: string;
  price: string;
  currency: string;
  features: string[];
  color: string;
  tagline: string;
  image?: string;
}

export interface CustomerOrder {
  packageId: string;
  date: string;
  name: string;
  email: string;
  phone: string;
  notes?: string;
}
