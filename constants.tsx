
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
    features: [
      'Cadeiras almofadas baixas',
      'Mesas com toalhas (duas familiares especiais)',
      'Loiça branca',
      'Senhoras para lavar a loiça',
      'Cenário para os noivos',
      'Cenário para entrada',
      'Cenário da foto',
      'Cenário do bolo'
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
    features: [
      'Cadeiras brancas almofadas ripadas ou algodão doce',
      'Mesas especiais',
      'Loiça',
      'Cenário dos noivos',
      'Cenário do bolo',
      'Cenário para entrada',
      'Cenário para foto',
      'Senhoras para lavar a loiça',
      'Vinil 5/5'
    ]
  },
  {
    id: 'rubi',
    name: 'PACOTE RUBI',
    price: '18.000,00',
    currency: 'AKZ',
    color: 'bg-red-50',
    tagline: 'A Experiência Premium Definitiva',
    image: 'https://i.imgur.com/E7KmVmg.png',
    features: [
      'Cadeiras brancas poltronas',
      'Mesas especiais',
      'Loiça especial',
      'Cenário para os noivos',
      'Cenário para fotos',
      'Cenário para o bolo',
      'Cenário para entrada',
      'Decoração da estrutura de luzes (5/5)',
      'Vinil 5/5',
      'Luz ambiente',
      'Senhoras para lavar a loiça'
    ]
  },
  {
    id: 'buffet',
    name: 'PACOTE BUFFET',
    price: '20.000,00',
    currency: 'AKZ',
    color: 'bg-amber-50',
    tagline: 'Gastronomia & Banquete',
    image: 'https://i.imgur.com/hCRpZcq.png',
    features: [
      'Pratos quentes e frios',
      'Doces e salgados',
      'Entradas e Quitutes',
      'Rodízio ou boi no espeto'
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
  { url: 'https://i.imgur.com/LfzqD2U.png', category: 'Festas', title: 'Ambiente Festivo Ava' },
  { url: 'https://i.imgur.com/mrkRvmo.png', category: 'Especiais', title: 'Curadoria de Cenários' },
  { url: 'https://i.imgur.com/51XbGRs.png', category: 'Casamentos', title: 'Altar Monumental' },
  { url: 'https://i.imgur.com/ukMjTPt.png', category: 'Corporativo', title: 'Recepção Executiva' },
  { url: 'https://i.imgur.com/wY7xj4F.png', category: 'Festas', title: 'Noite de Gala Ava' },
  
  { url: 'https://i.imgur.com/hCRpZcq.png', category: 'Gastronomia', title: 'Apresentação de Pratos Quentes' },
  { url: 'https://i.imgur.com/ilVfZFK.png', category: 'Gastronomia', title: 'Buffet de Doces & Sobremesas' },
  { url: 'https://i.imgur.com/VYPtZXG.png', category: 'Gastronomia', title: 'Entradas Gourmet Ava' },
  { url: 'https://i.imgur.com/xo2cSQz.png', category: 'Gastronomia', title: 'Serviço de Banquetes Luxo' },
  { url: 'https://i.imgur.com/tZNLdZc.png', category: 'Gastronomia', title: 'Experiência Gastronômica Ava' },

  { url: 'https://i.imgur.com/scHAorL.png', category: 'Especiais', title: 'Arte Visual Ava' },
  { url: 'https://i.imgur.com/HLBViFX.png', category: 'Corporativo', title: 'Espaço de Eventos' }
];

export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/avaeventos.s',
  facebook: 'https://www.facebook.com/share/1FdLjBMALU/',
  whatsapp: 'https://wa.me/244948757808'
};
