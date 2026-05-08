export type DishCategory =
  | "entradas"
  | "carnes"
  | "pastas"
  | "mariscos"
  | "acompanantes"
  | "postres"
  | "bebidas";

export type DishBadge = "especialidad" | "picante" | "recomendado" | "nuevo";

export type Dish = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: DishCategory;
  badges?: DishBadge[];
  image?: string;
};

export const categoryLabels: Record<DishCategory, string> = {
  entradas: "Entradas",
  carnes: "Carnes",
  pastas: "Pastas",
  mariscos: "Mariscos",
  acompanantes: "Acompañantes",
  postres: "Postres",
  bebidas: "Bebidas",
};

export const categoryOrder: DishCategory[] = [
  "entradas",
  "carnes",
  "pastas",
  "mariscos",
  "acompanantes",
  "postres",
  "bebidas",
];

export const dishes: Dish[] = [
  // Entradas
  {
    id: "carpaccio",
    name: "Carpaccio de res",
    description:
      "Finas láminas de res curadas, alcaparras, rúcula y lascas de parmesano con aceite de oliva.",
    price: 12,
    category: "entradas",
  },
  {
    id: "champinones-rellenos",
    name: "Champiñones rellenos",
    description:
      "Champiñones gratinados con queso de cabra, ajo confitado y hierbas frescas.",
    price: 9,
    category: "entradas",
    badges: ["recomendado"],
  },
  {
    id: "tabla-quesos",
    name: "Tabla de quesos y embutidos",
    description:
      "Selección de quesos artesanales, jamón serrano, salami y panes rústicos.",
    price: 18,
    category: "entradas",
  },
  {
    id: "sopa-cebolla",
    name: "Sopa de cebolla gratinada",
    description:
      "Cebolla caramelizada, caldo de carne reducido, costrones y queso gruyère.",
    price: 8,
    category: "entradas",
  },

  // Carnes
  {
    id: "lomo-cerdo",
    name: "Lomo de cerdo a la brasa",
    description:
      "Medallones de lomo madurado a la parrilla a leña, costra dorada y centro jugoso. Acompañado de papas rústicas.",
    price: 22,
    category: "carnes",
    badges: ["especialidad"],
  },
  {
    id: "ribeye",
    name: "Ribeye 350g",
    description:
      "Corte premium con marmoleo perfecto, sellado a la leña y reposado en mantequilla de hierbas.",
    price: 32,
    category: "carnes",
    badges: ["especialidad"],
  },
  {
    id: "punta-trasero",
    name: "Punta trasera",
    description:
      "Corte tradicional de la parrilla, ahumado lento y terminado a fuego vivo.",
    price: 26,
    category: "carnes",
    badges: ["recomendado"],
  },
  {
    id: "milanesa-pollo",
    name: "Milanesa de pollo",
    description:
      "Pechuga empanizada crujiente, papas rústicas y ensalada césar.",
    price: 15,
    category: "carnes",
  },
  {
    id: "costillas-bbq",
    name: "Costillas BBQ a la leña",
    description:
      "Costillas de cerdo cocción lenta 6 horas, glaseadas con salsa BBQ ahumada de la casa.",
    price: 24,
    category: "carnes",
    badges: ["picante"],
  },
  {
    id: "lomito-champinones",
    name: "Lomito en salsa de champiñones",
    description:
      "Medallones de lomito con salsa cremosa de champiñones, puré de papas y vegetales salteados.",
    price: 25,
    category: "carnes",
  },

  // Pastas
  {
    id: "pasta-lomito",
    name: "Pasta con lomito",
    description:
      "Fettuccine fresco con lomito en tiras, salsa blanca o roja, terminado al sartén.",
    price: 17,
    category: "pastas",
  },
  {
    id: "fettuccine-marinera",
    name: "Fettuccine marinera",
    description:
      "Pasta al dente con camarones, calamares y mejillones en salsa de tomate y vino blanco.",
    price: 19,
    category: "pastas",
    badges: ["recomendado"],
  },
  {
    id: "ravioli-ricota",
    name: "Ravioli de ricota y espinaca",
    description:
      "Pasta rellena artesanal en mantequilla de salvia y nueces tostadas.",
    price: 16,
    category: "pastas",
  },

  // Mariscos
  {
    id: "salmon-grille",
    name: "Salmón a la parrilla",
    description:
      "Filete de salmón a la leña, costra de hierbas, vegetales asados y reducción cítrica.",
    price: 28,
    category: "mariscos",
    badges: ["especialidad"],
  },
  {
    id: "salpicon",
    name: "Salpicón de mariscos",
    description:
      "Camarones, pulpo, calamar y langostinos en limón, cilantro fresco y aguacate.",
    price: 21,
    category: "mariscos",
    badges: ["nuevo"],
  },
  {
    id: "camarones-ajillo",
    name: "Camarones al ajillo",
    description:
      "Camarones salteados en aceite de oliva, ajo, guindilla y pan rústico.",
    price: 22,
    category: "mariscos",
    badges: ["picante"],
  },

  // Acompañantes
  {
    id: "papas-rusticas",
    name: "Papas rústicas",
    description: "Papas al horno con piel, romero y sal en escamas.",
    price: 5,
    category: "acompanantes",
  },
  {
    id: "vegetales-leña",
    name: "Vegetales a la leña",
    description: "Calabacín, berenjena, pimentón y cebolla asados en parrilla.",
    price: 6,
    category: "acompanantes",
  },
  {
    id: "ensalada-cesar",
    name: "Ensalada césar",
    description: "Lechuga romana, costrones, parmesano y aderezo de la casa.",
    price: 7,
    category: "acompanantes",
  },
  {
    id: "pure-papas",
    name: "Puré de papas",
    description: "Cremoso con mantequilla y un toque de nuez moscada.",
    price: 5,
    category: "acompanantes",
  },

  // Postres
  {
    id: "tres-leches",
    name: "Tres leches",
    description: "Bizcocho esponjoso bañado en tres leches y canela.",
    price: 7,
    category: "postres",
    badges: ["recomendado"],
  },
  {
    id: "cheesecake",
    name: "Cheesecake de frutos rojos",
    description: "Base de galleta, queso crema y coulis de frutos rojos.",
    price: 8,
    category: "postres",
  },
  {
    id: "brownie",
    name: "Brownie con helado",
    description: "Brownie tibio de chocolate amargo con helado de vainilla.",
    price: 7,
    category: "postres",
  },

  // Bebidas
  {
    id: "vino-malbec",
    name: "Malbec — copa",
    description: "Tinto argentino de cuerpo medio, notas a frutos rojos.",
    price: 7,
    category: "bebidas",
  },
  {
    id: "vino-cabernet",
    name: "Cabernet Sauvignon — copa",
    description: "Tinto estructurado, taninos firmes, ideal para cortes rojos.",
    price: 8,
    category: "bebidas",
  },
  {
    id: "sangria",
    name: "Sangría de la casa",
    description: "Vino tinto, frutas frescas y un toque de canela.",
    price: 6,
    category: "bebidas",
  },
  {
    id: "limonada-frontera",
    name: "Limonada de frontera",
    description: "Limonada con menta, jengibre y un toque de papelón.",
    price: 4,
    category: "bebidas",
  },
];

export const featuredDishIds = [
  "lomo-cerdo",
  "ribeye",
  "salmon-grille",
  "salpicon",
];
