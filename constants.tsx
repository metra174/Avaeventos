import { Package } from './types';

export const ANGOLA_PROVINCES = [
  'Bengo', 'Benguela', 'Bié', 'Cabinda', 'Cuando Cubango', 
  'Cuanza Norte', 'Cuanza Sul', 'Cunene', 'Huambo', 'Huíla', 
  'Luanda', 'Lunda Norte', 'Lunda Sul', 'Malanje', 'Moxico', 
  'Namibe', 'Uíge', 'Zaire'
];

export const PACKAGES: Package[] = [
  {
    id: 'damasco',
    name: 'PACOTE DAMASCO',
    price: '10.000,00',
    currency: 'AKZ',
    color: 'bg-stone-100',
    tagline: 'Essencial & Elegante',
    image: 'https://i.imgur.com/Q8RBZGK.png',
    location: 'Projeto do Nando, por detrás do Banco BIC',
    features: [
      'Realização de eventos com toda a estrutura necessária para festas e celebrações especiais',
      'Cadeiras almofadas baixas',
      'Mesas com toalhas apenas duas familiares especiais',
      'Loiça branca',
      'Senhoras para lavarem a loiça',
      'Cenário para os noivos',
      'Cenário para entrada',
      'Cenário da foto',
      'Cenário do bolo',
      'Cubas',
      'Louça de apoio ao buffet frio'
    ]
  },
  {
    id: 'label',
    name: 'PACOTE LABEL',
    price: '15.000,00',
    currency: 'AKZ',
    color: 'bg-orange-50',
    tagline: 'Sofisticação & Conforto',
    image: 'https://i.imgur.com/N9i13N5.png',
    // NOTA: Certifique-se de que "images?: string[]" esteja na sua interface Package em ./types.ts se for usar esta propriedade
    images: [
      'https://i.imgur.com/N9i13N5.png',
      'https://i.imgur.com/3NKWiT8.png',
      'https://i.imgur.com/UUcSNVV.png',
      'https://i.imgur.com/frvFT54.png',
      'https://i.imgur.com/tpUXVl9.png',
      'https://i.imgur.com/3n3gaTp.png',
      'https://i.imgur.com/voamzPN.png',
      'https://i.imgur.com/0qSPOOO.png',
      'https://i.imgur.com/KerTmNA.png',
      'https://i.imgur.com/rMAVKle.png',
      'https://i.imgur.com/cGXKynd.png',
      'https://i.imgur.com/FtlEMV2.png',
      'https://i.imgur.com/1Wn9Pot.png'
    ],
    location: 'Projeto do Nando, por detrás do Banco BIC',
    features: [
      'Realização de eventos com toda a estrutura necessária para festas e celebrações especiais',
      'Cadeiras brancas almofadas ripadas ou algodão doce',
      'Mesas especiais',
      'Loiça',
      'Cenário dos noivos',
      'Cenário do Bolo',
      'Cenário para Entrada',
      'Cenário para foto',
      'Senhoras para lavarem a loiça',
      'Um vinil de 5/5',
      'Cubas',
      'Louça de apoio ao buffet frio'
    ]
  },
  {
    id: 'rubi',
    name: 'PACOTE RUBI',
    price: '35.000,00',
    currency: 'AKZ',
    color: 'bg-red-50',
    tagline: 'A Experiência Premium Definitiva',
    image: 'https://i.imgur.com/E7KmVmg.png',
    location: 'Projeto do Nando, por detrás do Banco BIC',
    features: [
      'Realização de eventos com toda a estrutura necessária para festas e celebrações especiais',
      'Cadeiras brancas poltronas',
      'Mesas especiais',
      'Loiça especiais',
      'Cenário para os noivos',
      'Cenário para foto',
      'Cenário para o bolo',
      'Cenário para entrada',
      'Estrutura com cristais de 10/10',
      'Vinil de 10/10',
      'Luzes ambiente',
      'Luzes pista',
      'Senhoras para lavarem a loiça',
      'Cubas',
      'Louça de apoio ao buffet frio'
    ]
  },
  {
    id: 'buffet',
    name: 'PACOTE BUFFET',
    price: '25.000,00',
    currency: 'AKZ',
    color: 'bg-amber-50',
    tagline: 'Gastronomia & Banquete',
    image: 'https://i.imgur.com/cjPUAe5.png',
    location: 'Projeto do Nando, por detrás do Banco BIC',
    features: [
      'Realização de eventos com toda a estrutura necessária para festas e celebrações especiais',
      'Pratos quentes e frios',
      'Doces e salgados',
      'Entradas e Quitutes',
      'Rodízio ou boi no espeto',
      'Cubas',
      'Louça de apoio ao buffet frio'
    ]
  },
  {
    id: 'salao',
    name: 'ALUGUER DO SALÃO',
    price: '1.200.000,00',
    currency: 'AKZ',
    color: 'bg-blue-50/40',
    tagline: 'Espaço Luxury & Configurações sob Medida',
    image: 'https://i.imgur.com/ukMjTPt.png',
    location: 'Benfica – Rua da Oficina da Bosch',
    features: [
      'Aluguer do salão base inclúe: Música, Luzes, DJ, Suíte para os noivos, Cozinha equipada, Estacionamento, Cubas, Louça de apoio ao buffet frio',
      'Especificação opcional (com Decoração): 25.000,00 AKZ por pessoa',
      'Especificação opcional (com Decoração & Buffet sem bebida): 45.000,00 AKZ por pessoa',
      'Especificação opcional (com Decoração, Buffet, Bebida com álcool e sem álcool): 65.000,00 AKZ por pessoa'
    ]
  }
];

export const HERO_IMAGES =
