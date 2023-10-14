import { assets } from "./assets";

export const collaborators = [
  {
    id: '5',
    name: 'Ari',
    roles: [
      'Repartidor',
    ],
  },
  {
    id: '4',
    image: {
      src: assets.imageJavi.src,
      alt: assets.imageJavi.alt,
    },
    name: 'Javi',
    roles: [
      'Repartidor',
    ],
  },
  {
    id: '3',
    name: 'Álvaro',
    roles: [
      'Repartidor',
    ],
  },
  {
    id: '2',
    image: {
      src: assets.imageCami.src,
      alt: assets.imageCami.alt,
    },
    name: 'Cami',
    roles: [
      'Atención al cliente',
      'Coordinadora de envíos',
      'Administradora de registros',
    ],
  },
  {
    id: '1',
    href: 'https://www.linkedin.com/in/leonardogerbacioromero/',
    image: {
      src: assets.imageLeo.src,
      alt: assets.imageLeo.alt,
    },
    name: 'Leo',
    roles: [
      'Fundador',
      'Diseñador',
      'Community Manager',
      'Analista de finanzas',
      'Desarrollador de Software',
    ],
  },
];
