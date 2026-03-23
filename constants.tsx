import { Package } from './types';

export const ANGOLA_PROVINCES = [
  'Bengo', 'Benguela', 'Bié', 'Cabinda', 'Cuando Cubango', 
  'Cuanza Norte', 'Cuanza Sul', 'Cunene', 'Huambo', 'Huíla', 
  'Luanda', 'Lunda Norte', 'Lunda Sul', 'Malanje', 'Moxico', 
  'Namibe', 'Uíge', 'Zaire'
] as const;

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
      'Estrutura completa para festas e celebrações',
      'Cadeiras almofadadas baixas',
      'Mesas com toalhas (inclui duas familiares especiais)',
      'Loiça branca premium',
      'Equipa de limpeza de loiça inclusa',
      'Cenário para os noivos',
      'Cenário de entrada e receção',
      'Cenário para fotografias',
      'Cenário para o bolo'
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
    location: 'Projeto do Nando, por detrás do Banco BIC',
    features: [
      'Estrutura completa para eventos especiais',
      'Cadeiras brancas (modelos ripada ou algodão doce)',
      'Mesas especiais decoradas',
      'Serviço de loiça completo',
      'Cenário para noivos e bolo',
      'Cenário para entrada e fotos',
      'Equipa de limpeza de loiça inclusa',
      'Painel de vinil personalizado (5x5m)'
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
      'Estrutura de luxo para celebrações especiais',
      'Cadeiras brancas modelo poltrona',
      'Mesas especiais de gala',
      'Loiças especiais de luxo',
      'Cenários completos: Noivos, Bolo, Entrada e Fotos',
      'Estrutura com cristais (10x10m)',
      'Painel de vinil personalizado (10x10m)',
      'Iluminação de ambiente e pista de dança',
      'Equipa de limpeza de loiça inclusa'
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
    location: 'Projeto do Nando, por detrás do Banco BIC',
    features: [
      'Serviço completo de buffet para eventos',
      'Seleção de pratos quentes e frios',
      'Variedade de doces e salgados',
      'Entradas e quitutes tradicionais',
      'Opção de rodízio ou boi no espeto'
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
    location: 'Benfica – Rua da Oficina da Bosch',
    features: [
      'Iluminação profissional completa',
      'Serviço de DJ e sonorização',
      'Suíte privativa para os noivos',
      'Cozinha industrial equipada',
      'Pista de dança em vinil (5x5m)',
      'Decoração completa para até 200 convidados',
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
  { url: 'https://i.imgur.com/XMykzEf.png', category: 'Casamentos', title: 'Decoração Clássica de Casamento' },
  { url: 'https://i.imgur.com/nLxHquT.png', category: 'Especiais', title: 'Cenário de Entrada Monumental' },
  { url: 'https://i.imgur.com/LmutJhO.png', category: 'Corporativo', title: 'Detalhes em Cristais e Ouro' },
  { url: 'https://i.imgur.com/uqMWmbx.png', category: 'Casamentos', title: 'Ambiente de Recepção Premium' },
  { url: 'https://i.imgur.com/qM3JIw0.png', category: 'Corporativo', title: 'Banquete de Gala' },
  { url: 'https://i.imgur.com/U1FRqX5.png', category: 'Casamentos', title: 'Teto Floral de Luxo' },
  { url: 'https://i.imgur.com/kWySv7R.png', category: 'Especiais', title: 'Arte em Detalhes' },
  { url: 'https://i.imgur.com/sinppBQ.png', category: 'Casamentos', title: 'Cerimonial de Luxo' },
  { url: 'https://i.imgur.com/LfzqD2U.png', category: 'Festas', title: 'Ambiente Festivo AVA' },
  { url: 'https://i.imgur.com/mrkRvmo.png', category: 'Especiais', title: 'Curadoria de Cenários' },
  { url: 'https://i.imgur.com/51XbGRs.png', category: 'Casamentos', title: 'Altar Monumental' },
  { url: 'https://i.imgur.com/ukMjTPt.png', category: 'Corporativo', title: 'Recepção Executiva' },
  { url: 'https://i.imgur.com/wY7xj4F.png', category: 'Festas', title: 'Noite de Gala AVA' },
  { url: 'https://i.imgur.com/tZNLdZc.png', category: 'Gastronomia', title: 'Apresentação de Pratos Quentes' },
  { url: 'https://i.imgur.com/ilVfZFK.png', category: 'Gastronomia', title: 'Buffet de Doces & Sobremesas' },
  { url: 'https://i.imgur.com/VYPtZXG.png', category: 'Gastronomia', title: 'Entradas Gourmet AVA' },
  { url: 'https://i.imgur.com/xo2cSQz.png', category: 'Gastronomia', title: 'Serviço de Banquetes Luxo' },
  { url: 'https://i.imgur.com/scHAorL.png', category: 'Especiais', title: 'Arte Visual AVA' },
  { url: 'https://i.imgur.com/HLBViFX.png', category: 'Corporativo', title: 'Espaço de Eventos' }
];

export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/avaeventos.s',
  facebook: 'https://www.facebook.com/share/1FdLjBMALU/',
  whatsapp: 'https://wa.me/244948757808'
};
