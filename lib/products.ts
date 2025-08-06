export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  currency: string;
  description: string;
  sizes: string[];
  category: string;
  images: string[];
  slug: string;
  isOnSale?: boolean;
  isFeatured?: boolean;
  material?: string;
  origin?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  description: string;
}

export const categories: Category[] = [
  {
    id: "men",
    name: "Hommes",
    slug: "hommes",
    image: "/images/categories/men-gloves.jpg",
    description: "Gants élégants pour hommes, alliant style et fonctionnalité",
  },
  {
    id: "women",
    name: "Femmes", 
    slug: "femmes",
    image: "/images/categories/women-gloves.jpg",
    description: "Gants raffinés pour femmes, parfaits pour toutes occasions",
  },
  {
    id: "winter",
    name: "Hiver",
    slug: "hiver",
    image: "/images/categories/winter-gloves.jpg", 
    description: "Gants d'hiver doublés pour un confort optimal par temps froid",
  },
  {
    id: "driving",
    name: "Conduite",
    slug: "conduite",
    image: "/images/categories/driving-gloves.jpg",
    description: "Gants de conduite professionnels pour une prise parfaite",
  },
];

export const products: Product[] = [
  {
    id: "glove-001",
    name: "Gants Classiques Hiver",
    price: 89.99,
    originalPrice: 129.99,
    currency: "EUR",
    description: "Gants en cuir pleine fleur de première qualité, doublés de polaire douce pour les hivers français.",
    sizes: ["S", "M", "L", "XL"],
    category: "Hiver",
    images: [
      "/images/products/classic-winter-1.jpg",
      "/images/products/classic-winter-2.jpg"
    ],
    slug: "gants-classiques-hiver",
    isOnSale: true,
    isFeatured: true,
    material: "Cuir pleine fleur",
    origin: "Fabriqué en France"
  },
  {
    id: "glove-002", 
    name: "Gants Élégants Femme",
    price: 79.99,
    currency: "EUR",
    description: "Gants raffinés en cuir souple, parfaits pour compléter une tenue élégante.",
    sizes: ["XS", "S", "M", "L"],
    category: "Femmes",
    images: [
      "/images/products/elegant-women-1.png",
      "/images/products/elegant-women-2.jpg"
    ],
    slug: "gants-elegants-femme",
    isFeatured: true,
    material: "Cuir nappa",
    origin: "Artisanat français"
  },
  {
    id: "glove-003",
    name: "Gants de Conduite Homme",
    price: 95.99,
    currency: "EUR", 
    description: "Gants de conduite en cuir perforé pour une adhérence parfaite et un style intemporel.",
    sizes: ["M", "L", "XL"],
    category: "Conduite",
    images: [
      "/images/products/driving-men-1.jpg",
      "/images/products/driving-men-2.jpg"
    ],
    slug: "gants-conduite-homme",
    material: "Cuir perforé",
    origin: "Made in France"
  },
  {
    id: "glove-004",
    name: "Gants Chauds Doublés",
    price: 69.99,
    originalPrice: 99.99,
    currency: "EUR",
    description: "Gants d'hiver ultra-chauds avec doublure en cachemire pour un confort exceptionnel.",
    sizes: ["S", "M", "L", "XL"],
    category: "Hiver", 
    images: [
      "/images/products/warm-lined-1.jpg",
      "/images/products/warm-lined-2.jpg"
    ],
    slug: "gants-chauds-doubles",
    isOnSale: true,
    material: "Cuir et cachemire",
    origin: "Artisanat français"
  },
  {
    id: "glove-005",
    name: "Gants Business Homme",
    price: 109.99,
    currency: "EUR",
    description: "Gants business sophistiqués en cuir italien, parfaits pour le professionnel moderne.",
    sizes: ["M", "L", "XL"],
    category: "Hommes",
    images: [
      "/images/products/business-men-2.jpg", 
      "/images/products/business-men-3.jpg"
    ],
    slug: "gants-business-homme",
    isFeatured: true,
    material: "Cuir italien",
    origin: "Design français"
  },
  {
    id: "glove-006",
    name: "Gants Tactiles Femme",
    price: 59.99,
    currency: "EUR",
    description: "Gants tactiles élégants permettant l'utilisation d'écrans tout en gardant les mains au chaud.",
    sizes: ["XS", "S", "M", "L"],
    category: "Femmes",
    images: [
      "/images/products/touchscreen-women-1.jpg",
      "/images/products/touchscreen-women-2.jpg"
    ],
    slug: "gants-tactiles-femme",
    material: "Cuir avec fibres tactiles",
    origin: "Innovation française"
  },
  {
    id: "glove-007",
    name: "Gants de Ski Premium",
    price: 149.99,
    currency: "EUR",
    description: "Gants de ski haut de gamme avec isolation thermique et protection contre l'humidité.",
    sizes: ["S", "M", "L", "XL"],
    category: "Hiver",
    images: [
      "/images/products/ski-premium-1.jpg",
      "/images/products/ski-premium-2.jpg"
    ],
    slug: "gants-ski-premium",
    isFeatured: true,
    material: "Cuir et Gore-Tex",
    origin: "Technologie française"
  },
  {
    id: "glove-008",
    name: "Gants de Motocycliste",
    price: 129.99,
    originalPrice: 179.99,
    currency: "EUR",
    description: "Gants de moto avec protection renforcée et ventilation pour une conduite sécurisée.",
    sizes: ["M", "L", "XL", "XXL"],
    category: "Conduite",
    images: [
      "/images/products/motorcycle-1.jpg",
      "/images/products/motorcycle-2.jpg"
    ],
    slug: "gants-motocycliste",
    isOnSale: true,
    material: "Cuir renforcé",
    origin: "Sécurité française"
  },
  {
    id: "glove-009",
    name: "Gants de Soirée Femme",
    price: 89.99,
    currency: "EUR",
    description: "Gants longs de soirée en soie et cuir, parfaits pour les événements élégants.",
    sizes: ["XS", "S", "M"],
    category: "Femmes",
    images: [
      "/images/products/evening-women-1.jpg",
      "/images/products/evening-women-2.jpg"
    ],
    slug: "gants-soiree-femme",
    material: "Soie et cuir",
    origin: "Élégance française"
  },
  {
    id: "glove-010",
    name: "Gants de Golf Homme",
    price: 74.99,
    currency: "EUR",
    description: "Gants de golf en cuir souple avec adhérence optimale pour un swing parfait.",
    sizes: ["S", "M", "L", "XL"],
    category: "Hommes",
    images: [
      "/images/products/golf-men-1.jpg",
      "/images/products/golf-men-2.jpg"
    ],
    slug: "gants-golf-homme",
    material: "Cuir souple",
    origin: "Sport français"
  },
  {
    id: "glove-011",
    name: "Gants de Jardinage",
    price: 49.99,
    originalPrice: 69.99,
    currency: "EUR",
    description: "Gants de jardinage robustes avec protection renforcée pour tous types de travaux.",
    sizes: ["S", "M", "L", "XL"],
    category: "Hommes",
    images: [
      "/images/products/gardening-1.jpg",
      "/images/products/gardening-2.jpg"
    ],
    slug: "gants-jardinage",
    isOnSale: true,
    material: "Cuir épais",
    origin: "Robustesse française"
  },
  {
    id: "glove-012",
    name: "Gants de Cuisine",
    price: 39.99,
    currency: "EUR",
    description: "Gants de cuisine en cuir résistant à la chaleur pour une protection optimale.",
    sizes: ["S", "M", "L"],
    category: "Femmes",
    images: [
      "/images/products/cooking-1.jpg",
      "/images/products/cooking-2.jpg"
    ],
    slug: "gants-cuisine",
    material: "Cuir résistant",
    origin: "Culinaire français"
  }
];

export function getFeaturedProducts(): Product[] {
  return products.filter(product => product.isFeatured);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(product => 
    product.category.toLowerCase() === category.toLowerCase()
  );
}

export function getSaleProducts(): Product[] {
  return products.filter(product => product.isOnSale);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(product => product.slug === slug);
}