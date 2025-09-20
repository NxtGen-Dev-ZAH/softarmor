export interface Product {
  id: string;
  name: string;
  description: string;
  sizes: string[];
  category: string;
  images: string[];
  slug: string;
  isFeatured?: boolean;
  material?: string;
  origin?: string;
  minOrderQuantity?: number;
  customization?: boolean;
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
    id: "motorcycle",
    name: "Gants de Moto",
    slug: "gants-de-moto",
    image: "/images/categories/men-gloves.jpg",
    description: "Gants de motocycliste avec protection renforcée et ventilation",
  },
  {
    id: "sports", 
    slug: "gants-de-sport",
    name: "Gants de Sport",
    image: "/images/categories/winter-gloves.jpg",
    description: "Gants de sport haute performance pour tous types d'activités",
  },
  {
    id: "winter",
    name: "Gants d'Hiver",
    slug: "gants-d-hiver",
    image: "/images/categories/winter-gloves.jpg", 
    description: "Gants d'hiver doublés pour un confort optimal par temps froid",
  },
  {
    id: "driving",
    name: "Gants de Conduite",
    slug: "gants-de-conduite",
    image: "/images/categories/driving-gloves.jpg",
    description: "Gants de conduite professionnels pour une prise parfaite",
  },
];

export const products: Product[] = [
  {
    id: "glove-001",
    name: "Gants de Moto Premium",
    description: "Gants de motocycliste haut de gamme avec protection renforcée, ventilation et adhérence optimale. Idéal pour les professionnels et passionnés.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    category: "Gants de Moto",
    images: [
      "/images/products/classic-winter-1.jpg",
      "/images/products/classic-winter-2.jpg"
    ],
    slug: "gants-moto-premium",
    isFeatured: true,
    material: "Cuir pleine fleur renforcé",
    origin: "Fabriqué en France",
    minOrderQuantity: 50,
    customization: true
  },
  {
    id: "glove-002", 
    name: "Gants de Sport Performance",
    description: "Gants de sport haute performance avec technologie d'évacuation de l'humidité et adhérence optimale pour tous types d'activités sportives.",
    sizes: ["XS", "S", "M", "L", "XL"],
    category: "Gants de Sport",
    images: [
      "/images/products/elegant-women-1.png",
      "/images/products/elegant-women-2.jpg"
    ],
    slug: "gants-sport-performance",
    isFeatured: true,
    material: "Cuir technique et mesh",
    origin: "Innovation française",
    minOrderQuantity: 100,
    customization: true
  },
  {
    id: "glove-003",
    name: "Gants de Moto Racing",
    description: "Gants de moto racing avec protection renforcée aux articulations et matériaux techniques pour la compétition et la performance.",
    sizes: ["M", "L", "XL", "XXL"],
    category: "Gants de Moto",
    images: [
      "/images/products/business-men-2.jpg",
      "/images/products/business-men-1.jpg"
    ],
    slug: "gants-moto-racing",
    material: "Cuir perforé et kevlar",
    origin: "Performance française",
    minOrderQuantity: 75,
    customization: true
  },
  {
    id: "glove-004",
    name: "Gants d'Hiver Pro",
    description: "Gants d'hiver professionnels avec isolation thermique avancée et protection contre l'humidité pour les activités extérieures.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    category: "Gants d'Hiver", 
    images: [
      "/images/products/winter-pro-1.jpg",
      "/images/products/winter-pro-2.jpg"
    ],
    slug: "gants-hiver-pro",
    material: "Cuir et Gore-Tex",
    origin: "Technologie française",
    minOrderQuantity: 50,
    customization: true
  },
  {
    id: "glove-005",
    name: "Gants de Conduite Elite",
    description: "Gants de conduite élite avec adhérence parfaite et confort optimal pour les professionnels du transport et de la logistique.",
    sizes: ["M", "L", "XL", "XXL"],
    category: "Gants de Conduite",
    images: [
      "/images/products/business-men-2.jpg", 
      "/images/products/business-men-1.jpg"
    ],
    slug: "gants-conduite-elite",
    isFeatured: true,
    material: "Cuir italien premium",
    origin: "Design français",
    minOrderQuantity: 100,
    customization: true
  },
  {
    id: "glove-006",
    name: "Gants de Sport Tactiques",
    description: "Gants de sport tactiques avec protection renforcée et adhérence optimale pour les activités de sécurité et défense.",
    sizes: ["S", "M", "L", "XL"],
    category: "Gants de Sport",
    images: [
      "/images/products/sports-tactical-1.jpg",
      "/images/products/sports-tactical-2.jpg"
    ],
    slug: "gants-sport-tactiques",
    material: "Cuir renforcé et mesh",
    origin: "Sécurité française",
    minOrderQuantity: 150,
    customization: true
  },
  {
    id: "glove-007",
    name: "Gants de Moto Tourisme",
    description: "Gants de moto tourisme avec protection complète et confort maximal pour les longs trajets et voyages.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    category: "Gants de Moto",
    images: [
      "/images/products/ski-premium-1.jpg",
      "/images/products/ski-premium-2.jpg"
    ],
    slug: "gants-moto-tourisme",
    isFeatured: true,
    material: "Cuir et Gore-Tex",
    origin: "Comfort français",
    minOrderQuantity: 50,
    customization: true
  },
  {
    id: "glove-008",
    name: "Gants de Sport Fitness",
    description: "Gants de fitness avec protection des articulations et adhérence optimale pour les salles de sport et activités fitness.",
    sizes: ["S", "M", "L", "XL"],
    category: "Gants de Sport",
    images: [
      "/images/products/sports-fitness-1.jpg",
      "/images/products/sports-fitness-2.jpg"
    ],
    slug: "gants-sport-fitness",
    material: "Cuir et néoprène",
    origin: "Fitness français",
    minOrderQuantity: 200,
    customization: true
  },
  {
    id: "glove-009",
    name: "Gants de Conduite Urbaine",
    description: "Gants de conduite urbaine avec style moderne et confort quotidien pour les professionnels en ville.",
    sizes: ["S", "M", "L", "XL"],
    category: "Gants de Conduite",
    images: [
      "/images/products/driving-urban-1.jpg",
      "/images/products/driving-urban-2.jpg"
    ],
    slug: "gants-conduite-urbaine",
    material: "Cuir souple premium",
    origin: "Style français",
    minOrderQuantity: 75,
    customization: true
  },
  {
    id: "glove-010",
    name: "Gants de Sport Outdoor",
    description: "Gants de sport outdoor avec résistance aux intempéries et adhérence optimale pour les activités en extérieur.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    category: "Gants de Sport",
    images: [
      "/images/products/sports-outdoor-1.jpg",
      "/images/products/sports-outdoor-2.jpg"
    ],
    slug: "gants-sport-outdoor",
    material: "Cuir et membrane imperméable",
    origin: "Outdoor français",
    minOrderQuantity: 100,
    customization: true
  },
  {
    id: "glove-011",
    name: "Gants de Moto City",
    description: "Gants de moto city avec style urbain et protection essentielle pour la conduite en ville.",
    sizes: ["S", "M", "L", "XL"],
    category: "Gants de Moto",
    images: [
      "/images/products/motorcycle-city-1.jpg",
      "/images/products/motorcycle-city-2.jpg"
    ],
    slug: "gants-moto-city",
    material: "Cuir et mesh",
    origin: "Urban français",
    minOrderQuantity: 150,
    customization: true
  },
  {
    id: "glove-012",
    name: "Gants de Sport Indoor",
    description: "Gants de sport indoor avec adhérence optimale et respirabilité pour les activités en salle.",
    sizes: ["S", "M", "L", "XL"],
    category: "Gants de Sport",
    images: [
      "/images/products/sports-indoor-1.jpg",
      "/images/products/sports-indoor-2.jpg"
    ],
    slug: "gants-sport-indoor",
    material: "Cuir et mesh respirant",
    origin: "Indoor français",
    minOrderQuantity: 200,
    customization: true
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


export function getProductBySlug(slug: string): Product | undefined {
  return products.find(product => product.slug === slug);
}

export function getMotorcycleGloves(): Product[] {
  return products.filter(product => product.category === "Gants de Moto");
}

export function getCustomizableProducts(): Product[] {
  return products.filter(product => product.customization);
}