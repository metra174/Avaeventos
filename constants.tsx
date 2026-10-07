
import { Package } from './types';

export const ANGOLA_PROVINCES = [
  'Bengo', 'Benguela', 'Bié', 'Cabinda', 'Cuando Cubango',
  'Cuanza Norte', 'Cuanza Sul', 'Cunene', 'Huambo', 'Huíla',
  'Luanda', 'Lunda Norte', 'Lunda Sul', 'Malanje', 'Moxico',
  'Namibe', 'Uíge', 'Zaire'
];

export const PACKAGES: Package[] = [
  {
    id: 'rótulo',
    Nome: 'ETIQUETA PACOTE',
    Preço: '18.000,00',
    moeda: 'AKZ',
    cor: 'bg-âmbar-50',
    slogan: 'Sofisticação & Conforto',
    Imagem: 'https://i.imgur.com/N9i13N5.png',
    imagens: [
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
    localização: 'Projeto do Nando, por detrás do Banco BIC',
    características: [
      'Realização de eventos com toda a estrutura necessária para festas e celebrações especiais',
      'Cadeiras brancas almofadas ripadas ou algodão doce',
      'Mesas especiais',
      'Loiça',
      'Luz ambiente',
      'Cartões de boas-vindas',
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
    Nome: 'PACOTE RUBI',
    Preço: '35.000,00',
    moeda: 'AKZ',
    cor: 'bg-red-50',
    slogan: 'A Experiência Premium Definitiva',
    Imagem: 'https://i.imgur.com/E7KmVmg.png',
    localização: 'Projeto do Nando, por detrás do Banco BIC',
    características: [
      'Realização de eventos com toda a estrutura necessária para festas e celebrações especiais',
      'Cadeiras brancas poltronas',
      'Mesas especiais',
      'Loiças especiais',
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
    Nome: 'PACOTE BUFFET',
    Preço: '25.000,00',
    moeda: 'AKZ',
    cor: 'bg-âmbar-50',
    slogan: 'Gastronomia & Banquete',
    Imagem: 'https://i.imgur.com/cjPUAe5.png',
    localização: 'Projeto do Nando, por detrás do Banco BIC',
    características: [
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
    Nome: 'ALUGUER DO SALÃO',
    Preço: '1.200.000,00',
    moeda: 'AKZ',
    cor: 'bg-azul-50/40',
    slogan: 'Espaço Luxury & Configurações sob Medida',
    Imagem: 'https://i.imgur.com/ukMjTPt.png',
    localização: 'Benfica – Rua da Oficina da Bosch',
    características: [
      'Aluguer do salão base inclui: Música, Luzes de pista, DJ exclusivo, Suíte para os noivos, Cozinha equipada e Estacionamento privativo seguro',
      'Opção com Decoração: + 25.000,00 AKZ por pessoa',
      'Opção com Decoração & Buffet (sem bebida): + 45.000,00 AKZ por pessoa',
      'Opção com Decoração, Buffet e Bebida: + 65.000,00 AKZ por pessoa'
    ]
  }
];

export const HERO_IMAGES = [
  'https://i.imgur.com/bUoyiWU.png',
  'https://i.imgur.com/3seNSZj.png',
  'https://i.imgur.com/Q2EJEbg.png'
];

export const GALLERY_IMAGES = [
  { url: 'https://i.imgur.com/N9i13N5.png', categoria: 'Casamentos', título: 'Decoração Pacote Label - Luxo Clássico' },
  { url: 'https://i.imgur.com/3NKWiT8.png', categoria: 'Casamentos', título: 'Decoração Pacote Label - Mesa Principal' },
  { url: 'https://i.imgur.com/UUcSNVV.png', categoria: 'Casamentos', título: 'Decoração Pacote Label - Cenário de Entrada' },
  { url: 'https://i.imgur.com/frvFT54.png', categoria: 'Festas', título: 'Decoração Pacote Label - Ambientação' },
  { url: 'https://i.imgur.com/tpUXVl9.png', categoria: 'Festas', título: 'Decoração Pacote Label - Iluminação Cênica' },
  { url: 'https://i.imgur.com/3n3gaTp.png', categoria: 'Especial', título: 'Decoração Pacote Label - Passarela de Cristal' },
  { url: 'https://i.imgur.com/voamzPN.png', categoria: 'Casamentos', título: 'Decoração Pacote Label - Detalhes Florais' },
  { url: 'https://i.imgur.com/0qSPOOO.png', categoria: 'Casamentos', título: 'Decoração Pacote Label - Cerimônia Premium' },
  { url: 'https://i.imgur.com/KerTmNA.png', categoria: 'Especial', título: 'Decoração Pacote Label - Lounge Clássico' },
  { url: 'https://i.imgur.com/rMAVKle.png', categoria: 'Festas', título: 'Decoração Pacote Label - Detalhes de Brilho' },
  { url: 'https://i.imgur.com/cGXKynd.png', categoria: 'Casamentos', título: 'Decoração Pacote Label - Gazebo dos Noivos' },
  { url: 'https://i.imgur.com/FtlEMV2.png', categoria: 'Especial', título: 'Decoração Pacote Label - Mesa Redonda' },
  { url: 'https://i.imgur.com/1Wn9Pot.png', categoria: 'Festas', título: 'Decoração Pacote Label - Lounge Minimalista' },
  { url: 'https://i.imgur.com/cjPUAe5.png', categoria: 'Gastronomia', título: 'Banquete & Buffet Estilo Ava' },

  { url: 'https://i.imgur.com/XMykzEf.png', categoria: 'Casamentos', título: 'Decoração Clássica de Casamento' },
  { url: 'https://i.imgur.com/nLxHquT.png', categoria: 'Especial', título: 'Cenário de Entrada Monumental' },
  { url: 'https://i.imgur.com/LmutJhO.png', categoria: 'Corporativo', título: 'Detalhes em Cristais e Ouro' },
  { url: 'https://i.imgur.com/uqMWmbx.png', categoria: 'Casamentos', título: 'Ambiente de Recepção Premium' },
  { url: 'https://i.imgur.com/qM3JIw0.png', categoria: 'Corporativo', título: 'Banquete de Gala' },
  { url: 'https://i.imgur.com/U1FRqX5.png', categoria: 'Casamentos', título: 'Teto Floral de Luxo' },
  
  { url: 'https://i.imgur.com/kWySv7R.png', categoria: 'Especial', título: 'Arte em Detalhes' },
  { url: 'https://i.imgur.com/sinppBQ.png', categoria: 'Casamentos', título: 'Cerimonial de Luxo' },
  {url: 'https://i.imgur.com/LfzqD2U.png', categoria: 'Festas', título: 'Ambiente Festivo Ava' },
  { url: 'https://i.imgur.com/mrkRvmo.png', categoria: 'Especiais', título: 'Curadoria de Cenários' },
  { url: 'https://i.imgur.com/51XbGRs.png', categoria: 'Casamentos', título: 'Altar Monumental' },
  { url: 'https://i.imgur.com/ukMjTPt.png', categoria: 'Corporativo', título: 'Recepção Executiva' },
  {url: 'https://i.imgur.com/wY7xj4F.png', categoria: 'Festas', título: 'Noite de Gala Ava' },
  
  { url: 'https://i.imgur.com/tZNLdZc.png', categoria: 'Gastronomia', título: 'Apresentação de Pratos Quentes' },
  { url: 'https://i.imgur.com/ilVfZFK.png', categoria: 'Gastronomia', título: 'Buffet de Doces & Sobremesas' },
  { url: 'https://i.imgur.com/VYPtZXG.png', categoria: 'Gastronomia', título: 'Entradas Gourmet Ava' },
  { url: 'https://i.imgur.com/xo2cSQz.png', categoria: 'Gastronomia', título: 'Serviço de Banquetes Luxo' },
  { url: 'https://i.imgur.com/xo2cSQz.png', categoria: 'Gastronomia', título: 'Experiência Gastronômica Ava' },

  { url: 'https://i.imgur.com/scHAorL.png', categoria: 'Especial', título: 'Arte Visual Ava' },
  { url: 'https://i.imgur.com/HLBViFX.png', categoria: 'Corporativo', título: 'Espaço de Eventos' }
];

export const SOCIAL_LINKS = {
  Instagram: 'https://www.instagram.com/avaeventos.s'
  Facebook: 'https://www.facebook.com/share/1FdLjBMALU/',
  WhatsApp: 'https://wa.me/244948757808'
};

