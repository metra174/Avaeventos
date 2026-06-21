import { Package } from './types';

// Caso o seu types.ts não inclua 'color', estendemos localmente para garantir o deploy
export interface PackageWithColor extends Package {
  color?: string;
}

export const ANGOLA_PROVINCES = [
  'Bengo', 'Benguela', 'Bié', 'Cabinda', 'Cuando Cubango', 
  'Cuanza Norte', 'Cuanza Sul', 'Cunene', 'Huambo', 'Huíla', 
  'Luanda', 'Lunda Norte', 'Lunda Sul', 'Malanje', 'Moxico', 
  'Namibe', 'Uíge', 'Zaire'
];

export const PACKAGES: PackageWithColor[] = [
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
    tagline: 'Espaço Ideal para Grandes Eventos',
    image: 'https://i.imgur.com/ukMjTPt.png',
    location: 'Benfica – Rua da Oficina da Bosch',
    features: [
      'Aluguer do salão',
      'Música',
      'Luzes',
      'Dj',
      'Suíte para os noivos',
      'Cozinha equipada',
      'Estacionamento',
      'Cubas',
      'Louça de apoio ao buffet frio'
    ]
  },
  {
    id: 'salao_decor',
    name: 'PACOTE SALÃO COM DECORAÇÃO',
    price: '25.000,00',
    currency: 'AKZ',
    color: 'bg-blue-50/70',
    tagline: 'Salão com Decoração... 25.000 Kzs por pessoa',
    image: 'https://i.imgur.com/ukMjTPt.png',
    location: 'Benfica – Rua da Oficina da Bosch',
    features: [
      'Aluguer do salão',
      'Decoração completa premium',
      'Música, Luzes e DJ do Salão',
      'Suíte para os noivos',
      'Cozinha equipada',
      'Estacionamento',
      'Cubas',
      'Louça de apoio ao buffet frio'
    ]
  },
  {
    id: 'salao_buffet',
    name: 'PACOTE SALÃO, DECORAÇÃO & BUFFET',
    price: '45.000,00',
    currency: 'AKZ',
    color: 'bg-blue-100/40',
    tagline: 'Decoração & Buffet Sem Bebida... 45.000 Kzs por pessoa',
    image: 'https://i.imgur.com/ukMjTPt.png',
    location: 'Benfica – Rua da Oficina da Bosch',
    features: [
      'Aluguer do salão',
      'Decoração completa premium',
      'Buffet requintado de alta gastronomia (sem bebida)',
      'Música, Luzes e DJ do Salão',
      'Suíte para os noivos',
      'Cozinha equipada',
      'Estacionamento',
      'Cubas',
      'Louça de apoio ao buffet frio'
    ]
  },
  {
    id: 'salao_completo',
    name: 'PACOTE SALÃO COMPLETO (COM BEBIDA)',
    price: '65.000,00',
    currency: 'AKZ',
    color: 'bg-blue-100/70',
    tagline: 'Salão, Decoração, Buffet & Bebida... 65.000 Kzs por pessoa',
    image: 'https://i.imgur.com/ukMjTPt.png',
    location: 'Benfica – Rua da Oficina da Bosch',
    features: [
      'Aluguer do salão',
      'Decoração completa premium',
      'Buffet requintado de alta gastronomia',
      'Bar de bebidas completo (com bebida inclusa)',
      'Música, Luzes e DJ do Salão',
      'Suíte para os noivos',
      'Cozinha equipada',
      'Estacionamento',
      'Cubas',
      'Louça de apoio ao buffet frio'
    ]
  }
];

export const HERO_IMAGES = [
  'https://i.imgur.com/bUoyiWU.png',
  'https://i.imgur.com/3seNSZj.png',
  'https://i.imgur.com/Q2EJEbg.png'
];

export const GALLERY_IMAGES = [
  { url: 'https://i.imgur.com/N9i13N5.png', category: 'Casamentos', title: 'Decoração Pacote Label - Luxo Clássico' },
  { url: 'https://i.imgur.com/3NKWiT8.png', category: 'Casamentos', title: 'Decoração Pacote Label - Mesa Principal' },
  { url: 'https://i.imgur.com/UUcSNVV.png', category: 'Casamentos', title: 'Decoração Pacote Label - Cenário de Entrada' },
  { url: 'https://i.imgur.com/frvFT54.png', category: 'Festas', title: 'Decoração Pacote Label - Ambientação' },
  { url: 'https://i.imgur.com/tpUXVl9.png', category: 'Festas', title: 'Decoração Pacote Label - Iluminação Cênica' },
  { url: 'https://i.imgur.com/3n3gaTp.png', category: 'Especiais', title: 'Decoração Pacote Label - Passarela de Cristal' },
  { url: 'https://i.imgur.com/voamzPN.png', category: 'Casamentos', title: 'Decoração Pacote Label - Detalhes Florais' },
  { url: 'https://i.imgur.com/0qSPOOO.png', category: 'Casamentos', title: 'Decoração Pacote Label - Cerimônia Premium' },
  { url: 'https://i.imgur.com/KerTmNA.png', category: 'Especiais', title: 'Decoração Pacote Label - Lounge Clássico' },
  { url: 'https://i.imgur.com/rMAVKle.png', category: 'Festas', title: 'Decoração Pacote Label - Detalhes de Brilho' },
  { url: 'https://i.imgur.com/cGXKynd.png', category: 'Casamentos', title: 'Decoração Pacote Label - Gazebo dos Noivos' },
  { url: 'https://i.imgur.com/FtlEMV2.png', category: 'Especiais', title: 'Decoração Pacote Label - Mesa Redonda' },
  { url: 'https://i.imgur.com/1Wn9Pot.png', category: 'Festas', title: 'Decoração Pacote Label - Lounge Minimalista' },
  { url: 'https://i.imgur.com/cjPUAe5.png', category: 'Gastronomia', title: 'Banquete & Buffet Estilo Ava' },
  { url: 'https://i.imgur.com/XMykzEf.png', category: 'Casamentos', title: 'Decoração Clássica de Casamento' },
  { url: 'https://i.imgur.com/nLxHquT.png', category: 'Especiais', title: 'Cenário de Entrada Monumental' },
  { url: 'https://i.imgur.com/LmutJhO.png', category: 'Corporativo', title: 'Detalhes em Cristais e Ouro' },
  { url: 'https://i.imgur.com/uqMWmbx.png', category: 'Casamentos', title: 'Ambiente de Recepção Premium' },
  { url: 'https://i.imgur.com/qM3JIw0.png', category: 'Corporativo', title: 'Banquete de Gala' },
  { url: 'https://i.imgur.com/U1FRqX5.png', category: 'Casamentos', title: 'Teto Floral de Luxo' },
  { url: 'https://i.imgur.com/kWySv7R.png', category: 'Especiais', title: 'Arte em Detalhes' },
  { url: 'https://i.imgur.com/sinppBQ.png', category: 'Casamentos', title: 'Cerimonial de Luxo' },
  { url: 'https://i.imgur.com/LfzqD2U.png', category: 'Festas', title: 'Ambiente Festivo Ava' },
  { url: 'https://i.imgur.com/mrkRvmo.png', category: 'Especiais', title: 'Curadoria de Cenários' },
  { url: 'https://i.imgur.com/51XbGRs.png', category: 'Casamentos', title: 'Altar Monumental' },
  { url: 'https://i.imgur.com/ukMjTPt.png', category: 'Corporativo', title: 'Recepção Executiva' },
  { url: 'https://i.imgur.com/wY7xj4F.png', category: 'Festas', title: 'Noite de Gala Ava' },
  { url: 'https://i.imgur.com/tZNLdZc.png', category: 'Gastronomia', title: 'Apresentação de Pratos Quentes' },
  { url: 'https://i.imgur.com/ilVfZFK.png', category: 'Gastronomia', title: 'Buffet de Doces & Sobremesas' },
  { url: 'https://i.imgur.com/VYPtZXG.png', category: 'Gastronomia', title: 'Entradas Gourmet Ava' },
  { url: 'https://i.imgur.com/xo2cSQz.png', category: 'Gastronomia', title: 'Serviço de Banquetes Luxo' },
  { url: 'https://i.imgur.com/scHAorL.png', category: 'Especiais', title: 'Arte Visual Ava' },
  { url: 'https://i.imgur.com/HLBViFX.png', category: 'Corporativo', title: 'Espaço de Eventos' }
];

export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/avaeventos.s',
  facebook: 'https://www.facebook.com/share/1FdLjBMALU/',
  whatsapp: 'https://wa.me/244948757808'
};
