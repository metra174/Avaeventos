export interface Package {
  id: string;
  name: string;
  price: string;
  currency: string;
  color: string;
  tagline: string;
  image: string;
  images?: string[]; // O "?" previne erros nos pacotes que têm apenas uma imagem
  location: string;
  features: string[];
}
