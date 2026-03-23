import { Package } from './types';

export const ANGOLA_PROVINCES = [
  'Bengo', 'Benguela', 'Bié', 'Cabinda', 'Cuando Cubango', 
  'Cuanza Norte', 'Cuanza Sul', 'Cunene', 'Huambo', 'Huíla', 
  'Luanda', 'Lunda Norte', 'Lunda Sul', 'Malanje', 'Moxico', 
  'Namibe', 'Uíge', 'Zaire'
] as const;

export const WHATSAPP_CONTACT = "244948757808";

// Centralizando locais repetidos para facilitar manutenção
const LOCATION_NANDO = 'Projeto do Nando, por detrás do Banco BIC';
const LOCATION_BENFICA = 'Benfica – Rua da Oficina da Bosch';

export const PACKAGES: Package[] = [
  {
    id: 'damasco',
    name: 'PACOTE DAMASCO',
    price: '10.000,00',
    currency: 'AKZ',
    color: 'bg-stone-100',
    tagline: 'Essencial & Elegante',
    image: 'https://i.imgur.com/Q8RBZGK.png',
    location: LOCATION_NANDO,
    features: [
      'Estrutura completa para festas e celebrações especiais',
      'Cadeiras almofadadas baixas',
      'Mesas com toalhas (inclui duas familiares especiais)',
      'Loiça branca premium',
      'Equipa para lavagem de loiça',
      'Cenários: Noivos, Entrada, Foto e Bolo'
    ]
  },
  {
    id: 'label',
    name: 'PACOTE LABEL',
    price: '15.000,00',
    currency: 'AKZ',
    color: 'bg-orange-50',
    tagline: 'Sofisticação & Conforto',
    image: 'https://i.imgur.com/Jjok3Pi.png',
    location: LOCATION_NANDO,
    features: [
      'Estrutura completa para festas e celebrações especiais',
      'Cadeiras brancas (ripadas ou algodão doce)',
      'Mesas especiais decoradas',
      'Serviço de loiça completo',
      'Cenários: Noivos, Bolo, Entrada e Foto',
      'Equipa para lavagem de loiça',
      'Painel de vinil (5x5m)'
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
    location: LOCATION_NANDO,
    features: [
      'Estrutura premium para eventos de alto padrão',
      'Cadeiras brancas modelo poltrona',
      'Mesas e loiças especiais',
      'Cenários completos: Noivos, Foto, Bolo e Entrada',
      'Estrutura com cristais (10x10m)',
      'Painel de vinil (10x10m)',
      'Iluminação ambiente e de pista',
      'Equipa para lavagem de loiça'
    ]
  },
  {
    id: 'buffet',
    name: 'PACOTE BUFFET',
    price: '20.000,00',
    currency: 'AKZ',
    color: 'bg-amber-50',
    tagline: 'Gastronomia & Banquete',
    image: 'https://i.imgur.com/xo2cSQz.png',
    location: LOCATION_NANDO,
    features: [
      'Serviço gastronómico completo para eventos',
      'Seleção de pratos quentes e frios',
      'Variedade de doces e salgados',
      'Entradas e quitutes tradicionais',
      'Rodízio ou boi no espeto'
    ]
  },
  {
    id: 'salao',
    name: 'PACOTE SALÃO',
    price: '4.000.000,00',
    currency: 'AKZ',
    color: 'bg-blue-50',
    tagline: 'Espaço & Infraestrutura Completa',
    image: 'https://i.imgur.com/ukMjTPt.png',
    location: LOCATION_BENFICA,
    features: [
      'Iluminação profissional completa',
      'Serviço de DJ e sonorização',
      'Suíte privativa para os noivos',
      'Cozinha equipada para catering',
      'Pista de dança em vinil (5x5m)',
      'Decoração para até 200 convidados',
      'Equipa de 8 garçons profissionais'
    ]
  }
];

export const HERO_IMAGES = [
  'https://i.imgur.com/bUoyiWU.png',
  'https://i.imgur.com/3seNSZj.png',
  'https://i.imgur.com/Q2EJEbg.png'
];

export const GALLERY_IMAGES = [
  { url: 'https://i.imgur.com/XMykzEf.png', category: 'Casamentos', title: 'Decoração Clássica' },
  { url: 'https://i.imgur.com/nLxHquT.png', category: 'Especiais', title: 'Cenário de Entrada' },
  { url: 'https://i.imgur.com/LmutJhO.png', category: 'Corporativo', title: 'Detalhes em Cristais' },
  { url: 'https://i.imgur.com/uqMWmbx.png', category: 'Casamentos', title: 'Recepção Premium' },
  { url: 'https://i.imgur.com/qM3JIw0.png', category: 'Corporativo', title: 'Banquete de Gala' },
  { url: 'https://i.imgur.com/U1FRqX5.png', category: 'Casamentos', title: 'Teto Floral de Luxo' },
  { url: 'https://i.imgur.com/kWySv7R.png', category: 'Especiais', title: 'Arte em Detalhes' },
  { url: 'https://i.imgur.com/sinppBQ.png', category: 'Casamentos', title: 'Cerimonial AVA' },
  { url: 'https://i.imgur.com/LfzqD2U.png', category: 'Festas', title: 'Ambiente Festivo' },
  { url: 'https://i.imgur.com/mrkRvmo.png', category: 'Especiais', title: 'Curadoria de Cenários' },
  { url: 'https://i.imgur.com/51XbGRs.png', category: 'Casamentos', title: 'Altar Monumental' },
  { url: 'https://i.imgur.com/ukMjTPt.png', category: 'Corporativo', title: 'Recepção Executiva' },
  { url: 'https://i.imgur.com/wY7xj4F.png', category: 'Festas', title: 'Noite de Gala' },
  { url: 'https://i.imgur.com/tZNLdZc.png', category: 'Gastronomia', title: 'Pratos Quentes' },
  { url: 'https://i.imgur.com/ilVfZFK.png', category: 'Gastronomia', title: 'Buffet de Doces' },
  { url: 'https://i.imgur.com/VYPtZXG.png', category: 'Gastronomia', title: 'Entradas Gourmet' },
  { url: 'https://i.imgur.com/xo2cSQz.png', category: 'Gastronomia', title: 'Serviço de Banquetes' },
  { url: 'https://i.imgur.com/scHAorL.png', category: 'Especiais', title: 'Arte Visual' },
  { url: 'https://i.imgur.com/HLBViFX.png', category: 'Corporativo', title: 'Espaço de Eventos' }
];

export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/avaeventos.s',
  facebook: 'https://www.facebook.com/share/1FdLjBMALU/',
  whatsapp: `https://wa.me/${WHATSAPP_CONTACT}`
} as const;
