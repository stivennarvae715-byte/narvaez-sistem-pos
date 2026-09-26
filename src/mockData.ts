import { ProductItem, ClientProfile, StoreCreditVoucher } from './types';

export const LOGO_URL = "https://lh3.googleusercontent.com/aida/AEtjO1W3yGPzyZYtRvjZpCmeshXRhklPSbAGMXrvs7Ql9FLOqMWS40TAvxchd2bIXW5saNDld65amn_DhC-ijkgsEi34F-dbGSwSTibmLKMv0GU9fYRShKFH5Oz0IWjcSc6Authg3wd6ZCD2DmFrz5ZaHLJFNuzdjqNLIagfE5Jz6XXHBRVJ9jHSr7AoRYyJDWabtb63Mm1V1tSnMkrPl2MDVf_KIUIN0kKn4YU7V4fmpOnIhAphBfSow4vroWWJZL_SeVXNQ5xeA2ZGXPI";

export const INITIAL_PRODUCTS: ProductItem[] = [
  {
    id: 'prod-1',
    sku: '770992384',
    name: 'Pantalón Jean Slim Fit T32',
    category: 'Pantalones',
    cost: 38000,
    price: 65000,
    stock: 3,
    minStock: 5,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC45FVctIm9f8tN0zvld5KaEM6xmJlqJJ4XYspjzr_g6s16FYUgbVB5LZqChxcCQF_tBJEHg5zUOloTMVJeP_vJO4fLtY_HdoRLL6Ffq37b2FbbqDtRMw4m28nsWbQu_EeHdLDWYFZYwuFnl6sERN0mugp_4tQey1-Aw5m7MPakTKV0baOOljtXZXyhkhXWzi8A2yGwmHE-CNiW6erl29HdP8o5Sx8RFZfcDviQd5P25pcqXq4OohKvFA',
    status: 'low',
    isTopSeller: true
  },
  {
    id: 'prod-2',
    sku: '770881923',
    name: 'Camisa Oxford Azul M',
    category: 'Camisas',
    cost: 42000,
    price: 75000,
    stock: 28,
    minStock: 10,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDR8QawE883p5n95EO5oJPDNX3bZgkpwMR-RBVZLnCaHzqyVqS7KR-L2FGMaIqpX1gawfRlwdWhKezuzAonLlHnfPGF59bsxu10Zapt7s1SvSaBKxdtKkkZmh9PAMTLtcxlG84bECQb3va--u7EPod3UK_u7H_s9JeqrGoUaZ_z4_qTK0K9whXvY2NoYXG1C0YeqnBUY9JW2Jkyt-RZ-LiaBFol5GoulkYFwnTzsIJqNiU2AwKj_U7EYw',
    status: 'normal'
  },
  {
    id: 'prod-3',
    sku: '770451290',
    name: 'Chaqueta Cuero Café L',
    category: 'Chaquetas',
    cost: 140000,
    price: 240000,
    stock: 0,
    minStock: 2,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtOvnSCiVpaKJc1-t2Dw4i1dU-sHn_1dtxcbNgUzNBOUX-Mj5NTaZQ5A4M5U4AEFLE7tmpNAhU2D67bMLieY2Koc_YgQHur3k04n5oGEHrFoxvZwTKxVtMWUYKjxRfKvSOPRZTWXZStc3dFHsPYM8RiFS2bUEF8hdMYQ49Ia6oL-6bJ8kl-FoTEpxwUVU3GSKizvAerfU3kODmGdqoxxaYR6l1lxTk02KBQXUz6R4dkbN1VOtdXsrzcw',
    status: 'out'
  },
  {
    id: 'prod-4',
    sku: '770114529',
    name: 'Camiseta Básica Negra S',
    category: 'Camisetas',
    cost: 18500,
    price: 35000,
    stock: 52,
    minStock: 15,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAx5J6trS4SD9oFj1wO0KYUY-bIzT9tO0T3r64Zu9bB-BtqZ_D_-wbxVeQynDBwAsCqKpmXzAUOH8m8RqSvX4O2CFTYS65zNJlG3SwEfV1a4H22HXqRFVTSRUQTkbAXsZ0TATn9ZXFlakMRpGnT8mlT3nfzl3EFg3iflwFohBb-CzzcvSNFy1IQpmgmmAWgs2mm6qvFDZJ59MGTTSCbrVHaGU2iQLNDz79mggKYF5lo9WiYfHVyrg7lJw',
    status: 'normal',
    isTopSeller: true
  },
  {
    id: 'prod-5',
    sku: '770291039',
    name: 'Correa Cuero Genuino Café',
    category: 'Accesorios',
    cost: 15000,
    price: 30000,
    stock: 2,
    minStock: 8,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBS4aQ7V6fNX54Z4uI-O5jlDOnYnkhdzAHllSZvq6WOSQdDTJJ2CjuBW6Ruy8jNxhHOs0O0bIotaFWIuF9ZUgiuOVi-pKbyhMInmL6xedXEbR0SQCBf9M3N9ncyntDzQ4Qw-f38wVbx2ElNvOWe-rp5QQ0-ejow4MIOkNPiN2py0nc3s_gbYaVo591Q80gLfqabkwmX8RoHmUO3UW4dCZRjzNl63xAyG3jDYWAYkR_XePNtj1RmTJAPA',
    status: 'low'
  },
  {
    id: 'prod-6',
    sku: 'BLZ-LIN-40',
    name: 'Blazer Lino Italiano Azul Marino',
    category: 'Sastrería',
    cost: 95000,
    price: 185000,
    stock: 7,
    minStock: 4,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHVD9SjD5lhzhWF7SlGKUKi8VUm4EyjDleETh4II0gfaAL2Z2V-OYSyVLVuoO3wya-ttSPEaj_vuiQXr0-IiKAc0N-2HEOMBypM5flTRjLCvEfc1D6a1NwcF22RhwxhUI56tDkmKe-fNv1gr7YUiYX4r70H4nkpaOiG3-10KsBOkt18Ymi1objWwoUyr4tx7qkrXhiJr1sEdT8sNEyGCQNBG9wSEA18Ge2_x9yMQkPCel0NYuv5e6x6w',
    status: 'normal',
    isTopSeller: true
  },
  {
    id: 'prod-7',
    sku: 'CAM-FRN-02',
    name: 'Camisa Formal Cuello Francés Blanca',
    category: 'Sastrería',
    cost: 45000,
    price: 85000,
    stock: 14,
    minStock: 6,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBsDc0aKqiy_DU4bA3NsbuRdsP0xXBzNMNM1Edb_Iu2jlSr4pxvOjk21DsKy5Qbuh-4g-btN3MFiEmLPz30t6hcdWPaBeHxRyzyr52iAU_zqa2G8mgxkZ-du7NxLn6BDhy9_EEBLVn9iTjTSasjhs0hAXdAxZriO6bjmpSZJjvURz-A346nfNm8kC5dhVmNNKS5baB4q5uwUtf5x2gFf5Y5qwUlF6ZxquWxM_SjlySvOs95YS3UPGbxjQ',
    status: 'normal'
  }
];

export const CLIENT_CARLOS: ClientProfile = {
  id: 'cli-carlos',
  name: 'Carlos Mario Restrepo',
  docType: 'Cédula',
  docNumber: '1.020.455.890',
  city: 'Medellín, Ant.',
  email: 'carlos.restrepo@email.com',
  phone: '+57 312 849 2011',
  isVip: true,
  vipDiscountPercent: 5,
  totalSpent: 2840000,
  ordersCount: 14,
  lastPurchaseDays: 3,
  avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0z1511-GlibzLMg5n74LW-ZJexh1y3Kz_UDJjz_YOqqmNlmljaoDPgOqSfawNBAyHEZKn14hyE865fagiTiP5gGaI3gdEUAyGVb2NpBdYziKoVqGfTvGUv5L_CIZ-CemFSYXQ6b3Q5CWM8SQ32j451x2Uk0S9kFlfgPFOkyR9qi0z09VZmushqtytznJ7mmC5fKsLd4lr_I5j3p1VM-myBTR44HwKUE6ICuqty4YG4RZi2ZwvGL1wvg'
};

export const OTHER_CLIENTS: ClientProfile[] = [
  CLIENT_CARLOS,
  {
    id: 'cli-mariana',
    name: 'Mariana Gómez V.',
    docType: 'Cédula',
    docNumber: '52.840.112',
    city: 'Envigado, Ant.',
    email: 'mariana.gomez@email.com',
    phone: '+57 301 555 7890',
    isVip: true,
    vipDiscountPercent: 5,
    totalSpent: 1420000,
    ordersCount: 8,
    lastPurchaseDays: 6,
    initials: 'MG'
  },
  {
    id: 'cli-andres',
    name: 'Andrés Felipe Morales',
    docType: 'Cédula',
    docNumber: '79.912.440',
    city: 'Medellín, Ant.',
    email: 'andres.morales@email.com',
    phone: '+57 310 998 1122',
    isVip: false,
    vipDiscountPercent: 0,
    totalSpent: 890000,
    ordersCount: 5,
    lastPurchaseDays: 12,
    initials: 'AM'
  },
  {
    id: 'cli-textiles',
    name: 'Textiles & Confecciones SAS',
    docType: 'NIT',
    docNumber: '900.542.119-1',
    city: 'Itagüí, Ant.',
    email: 'compras@textilesconfecciones.co',
    phone: '+57 (604) 448 3320',
    isVip: true,
    vipDiscountPercent: 8,
    totalSpent: 6120000,
    ordersCount: 12,
    lastPurchaseDays: 2,
    initials: 'TC'
  }
];

export const INITIAL_VOUCHER: StoreCreditVoucher = {
  code: 'BN-2024-8849',
  amount: 110000,
  creditNote: 'NC-0042',
  originalInvoice: '#F-1049 (Orden #00284)',
  clientName: 'Carlos Mario Restrepo',
  clientDoc: '1.020.455.890',
  isRedeemed: true,
  expirationDate: '23 Dic 2024'
};
