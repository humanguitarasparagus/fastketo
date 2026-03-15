export type KetoRating = 'excellent' | 'good' | 'moderate' | 'avoid';

export type MenuCategory = 'breakfast' | 'burgers' | 'chicken' | 'salads' | 'sides' | 'drinks' | 'desserts';

export type Availability = 'all-day' | 'breakfast' | 'lunch' | 'dinner';

export interface Nutrition {
  servingSize: string;
  calories: number;
  protein: number;
  totalFat: number;
  saturatedFat?: number;
  totalCarbs: number;
  fiber: number;
  netCarbs: number;
  sugar: number;
  sodium: number;
}

export interface MenuItem {
  id: string;
  chainId: string;
  name: string;
  category: MenuCategory;
  description: string;
  customization: string;
  nutrition: Nutrition;
  ketoRating: KetoRating;
  allergens: string[];
  tips: string[];
  availability: Availability;
  priceRange: string;
  verified: boolean;
  verifiedDate: string;
  source: string;
}

export interface Chain {
  id: string;
  name: string;
  slug: string;
  logo: string;
  description: string;
  ketoFriendly: 'excellent' | 'good' | 'moderate' | 'poor';
  website: string;
  brandColor?: string;
  menuLastUpdated: string;
  categories: MenuCategory[];
  topPicks: string[]; // Array of item IDs
  items: MenuItem[];
}

export interface FAQ {
  question: string;
  answer: string;
}
