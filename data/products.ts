export type AccentColor = "pandan" | "gula";

export interface Product {
  slug: string;
  name: string;
  subtitle: string;
  price: string;
  image: string;
  tag?: string;
  accentColor?: AccentColor;
}

export const bestSellers: Product[] = [
  {
    slug: "chin-chow-300g",
    name: "Chin Chow Dessert",
    subtitle: "Classic grass jelly · 300g",
    price: "$3.50",
    image: "/assets/Chin-Chow-Dessert-300g-313x313.jpg",
    tag: "Best Seller",
  },
  {
    slug: "sensoh-slurpup-200g",
    name: "SENSOH Slurp-Up",
    subtitle: "Healthier Choice · 200g",
    price: "$2.20",
    image: "/assets/Sensoh-Grass-Jelly-Slurpup-200g-313x313.jpg",
    tag: "Healthier Choice",
    accentColor: "pandan",
  },
  {
    slug: "chin-chow-nata-250g",
    name: "Chin Chow with Nata de Coco",
    subtitle: "Coconut jelly bits · 250g",
    price: "$3.80",
    image: "/assets/Chin-Chow-with-Nata-de-Coco-250g-313x313.jpg",
  },
  {
    slug: "senscafe-2in1",
    name: "SENSCAFE 2-in-1",
    subtitle: "Nanyang Kopi-O · 200g",
    price: "$6.80",
    image: "/assets/SENSCAFE-2-IN-1-313x313.jpg",
    accentColor: "gula",
  },
];

export interface Category {
  name: string;
  label: string;
  image: string;
  accent?: string;
}

export const categories: Category[] = [
  { name: "Grass Jelly", label: "Chin Chow", image: "/assets/Grass-Jelly.jpg" },
  { name: "Mini Cups", label: "Grab & Go", image: "/assets/80g.jpg" },
  { name: "SENSOH", label: "Slurp-Up Series", image: "/assets/Sensoh-1.jpg", accent: "pandan" },
  { name: "SENSCAFE", label: "Nanyang Coffee", image: "/assets/Senscafe.jpg", accent: "gula" },
  { name: "Herbal", label: "Tea & Tonics", image: "/assets/Herbal.jpg" },
  { name: "Seaweed Jelly", label: "Fruity Flavours", image: "/assets/Seaweed-1.jpg" },
  { name: "Special", label: "Seasonal Picks", image: "/assets/Special.jpg" },
  { name: "Mini Packs", label: "Party Sizes", image: "/assets/Mini-1.jpg" },
];

export interface Ingredient {
  name: string;
  romanized: string;
  tagline: string;
  description: string;
  attributes: string[];
  image: string;
}

export const ingredients: Ingredient[] = [
  {
    name: "仙草",
    romanized: "Mesona / Grass Jelly",
    tagline: "The heart of everything we make.",
    description:
      "Mesona chinensis — known locally as Chin Chow — is a medicinal herb from the mint family. TSMFood has been crafting it into smooth, cooling grass jelly since 1974, using a slow-boil extraction that preserves its natural earthy sweetness.",
    attributes: [
      "Naturally cooling",
      "No artificial colour",
      "Rich in antioxidants",
      "Traditional slow-boil method",
    ],
    image: "/assets/Grass-Jelly.jpg",
  },
  {
    name: "斑兰",
    romanized: "Pandan",
    tagline: "Southeast Asia's vanilla.",
    description:
      "Fragrant pandan leaves lend a distinctive green hue and delicate floral aroma. We use real pandan extract — never synthetic — in our chendol and flavoured jellies, keeping the flavour honest and the colour natural.",
    attributes: [
      "Real leaf extract",
      "No synthetic flavouring",
      "Vivid natural green",
      "Signature SEA fragrance",
    ],
    image: "/assets/Pandan-Chendol-1.jpg",
  },
  {
    name: "椰果",
    romanized: "Nata de Coco",
    tagline: "A pop of texture in every bite.",
    description:
      "Translucent coconut jelly cubes fermented from coconut water — chewy, refreshing, and naturally fat-free. Our Chin Chow with Nata de Coco pairs the earthiness of grass jelly with the tropical brightness of coconut in a single cup.",
    attributes: [
      "Fermented coconut water",
      "Chewy, low-calorie bite",
      "Fat-free & natural",
      "Pairs with grass jelly",
    ],
    image: "/assets/Chin-Chow-with-Nata-de-Coco-250g.jpg",
  },
  {
    name: "绿豆",
    romanized: "Green Bean",
    tagline: "A humble legume, a beloved dessert.",
    description:
      "Green beans have starred in Asian desserts for centuries — cooling, fibre-rich, and mildly sweet. TSMFood's green bean jelly takes a timeless pantry staple and turns it into a ready-to-eat treat with the same no-preservatives commitment.",
    attributes: [
      "High in fibre",
      "Naturally cooling",
      "No added preservatives",
      "Traditional recipe",
    ],
    image: "/assets/Green-Bean-Jelly-250g.jpg",
  },
];

export const testimonials = [
  {
    quote:
      "TSMFood's grass jelly is the real deal. My family has been buying it since I was a child — nothing from the supermarket comes close.",
    author: "Mei Lin T.",
    location: "Tampines",
  },
  {
    quote:
      "The SENSOH Slurp-Up is perfect for my kids — no guilt, no mess, and they finish every last drop. Will keep reordering.",
    author: "David K.",
    location: "Jurong West",
  },
  {
    quote:
      "50 years of tradition you can actually taste. I always keep a few packs of Chin Chow in the fridge — it's just part of home.",
    author: "Priya S.",
    location: "Bishan",
  },
];
