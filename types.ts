export interface Package {
  id: string;
  name: string;
  price: string;
  currency: string;
  color: string;
  tagline: string;
  image: string;
  images?: string[]; // O "?" torna as imagens adicionais opcionais para pacotes que não têm
  location: string;
  features: string[];
}
