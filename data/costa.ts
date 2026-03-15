import { Chain } from '@/lib/types';

export const costaData: Chain = {
  id: 'costa',
  name: 'Costa Coffee',
  slug: 'costa',
  logo: '/logos/costa.svg',
  description: "Costa is a drinks-first chain for keto. Food is almost entirely off the table, but the drinks are excellent with two UK-specific wins: the pouring cream Americano (ask for a pot of pouring cream with your black Americano - Costa's best-kept keto secret) and Monin sugar-free syrups.",
  ketoFriendly: 'moderate',
  website: 'https://www.costa.co.uk',
  brandColor: '#6F263D',
  menuLastUpdated: '2026-03-01',
  categories: ['breakfast'],
  howToOrder: `☕ THE POURING CREAM HACK (Costa's best keto secret):
1. Order a black Americano (any size)
2. Ask for "a pot of pouring cream on the side"
3. Costa keeps pouring cream behind the counter (used for desserts)
4. Most stores provide it at no extra charge
5. Cream is ~3g carbs per 100ml vs 5-10g for milk
6. This is the go-to Costa order in UK keto communities

🥛 FOR MILKY DRINKS:
1. Choose coconut milk (lowest carb at ~2.5g per 100ml)
2. Costa does NOT stock almond milk (unlike Starbucks)
3. Soya is second-best option (~3-4g per 100ml)
4. Skip oat milk (6-7g per 100ml)
5. Order smallest size (Primo) to minimize carbs

🍯 SUGAR-FREE SYRUPS:
1. Ask for sugar-free vanilla, caramel, or hazelnut
2. Not all stores stock all flavours - always ask first
3. Sugar-free adds ~1-2g carbs vs 4-6g for regular syrups
4. Never assume it's available - verify at counter`,
  topPicks: ['americano-black', 'americano-cream', 'cappuccino-coconut'],
  items: [
    {
      id: 'americano-black',
      chainId: 'costa',
      name: 'Americano (Black)',
      category: 'breakfast',
      description: 'The safest order at Costa - zero compromises',
      customization: 'Order any size black. Primo ~0.8g, Massimo ~1.6g carbs.',
      nutrition: {
        servingSize: 'Primo',
        calories: 5,
        protein: 0,
        totalFat: 0,
        saturatedFat: 0,
        totalCarbs: 1,
        fiber: 0,
        netCarbs: 1,
        sugar: 0,
        sodium: 5,
      },
      ketoRating: 'excellent',
      allergens: [],
      tips: [
        'Just ~1g carbs - cleanest option',
        'Add pouring cream for the ultimate keto hack',
        'No faff, always available',
      ],
      availability: 'all-day',
      priceRange: '£2-4',
      verified: true,
      verifiedDate: '2026-03-01',
      source: 'Costa UK allergen guide March 2026',
    },
    {
      id: 'americano-cream',
      chainId: 'costa',
      name: 'Americano with Pouring Cream',
      category: 'breakfast',
      description: 'THE Costa keto hack - ask for pouring cream on the side',
      customization: 'Order "Black Americano with a pot of pouring cream on the side". Most stores provide it free. This is a well-known UK keto community trick.',
      nutrition: {
        servingSize: 'Primo + cream',
        calories: 120,
        protein: 1,
        totalFat: 12,
        saturatedFat: 7,
        totalCarbs: 4,
        fiber: 0,
        netCarbs: 4,
        sugar: 3,
        sodium: 20,
      },
      ketoRating: 'excellent',
      allergens: ['milk'],
      tips: [
        'UK-specific Costa hack - pouring cream is kept behind counter',
        '~3-4g carbs total vs 11g+ for latte with milk',
        'Rich, satisfying, and keto-friendly',
      ],
      availability: 'all-day',
      priceRange: '£2-4',
      verified: true,
      verifiedDate: '2026-03-01',
      source: 'Costa UK allergen guide March 2026',
    },
    {
      id: 'cappuccino-coconut',
      chainId: 'costa',
      name: 'Cappuccino (Coconut Milk, Primo)',
      category: 'breakfast',
      description: 'Lowest-carb milky option - coconut milk is best choice at Costa',
      customization: 'Order "Primo Cappuccino with coconut milk". Add sugar-free vanilla syrup if available.',
      nutrition: {
        servingSize: 'Primo',
        calories: 80,
        protein: 2,
        totalFat: 4,
        saturatedFat: 3,
        totalCarbs: 5,
        fiber: 0,
        netCarbs: 5,
        sugar: 4,
        sodium: 60,
      },
      ketoRating: 'excellent',
      allergens: [],
      tips: [
        'Coconut milk is Costa\'s lowest-carb milk (~2.5g per 100ml)',
        'Costa does NOT stock almond milk',
        'Keep to Primo size to minimize carbs',
      ],
      availability: 'all-day',
      priceRange: '£3-4',
      verified: true,
      verifiedDate: '2026-03-01',
      source: 'Costa UK allergen guide March 2026',
    },
    {
      id: 'flat-white-soya',
      chainId: 'costa',
      name: 'Flat White (Soya Milk, Primo)',
      category: 'breakfast',
      description: 'Second-best milk option after coconut',
      customization: 'Order "Primo Flat White with soya milk". Soya runs slightly higher carbs than coconut.',
      nutrition: {
        servingSize: 'Primo',
        calories: 95,
        protein: 4,
        totalFat: 4,
        saturatedFat: 1,
        totalCarbs: 6,
        fiber: 0,
        netCarbs: 6,
        sugar: 5,
        sodium: 70,
      },
      ketoRating: 'excellent',
      allergens: ['soya'],
      tips: [
        'Soya is ~3-4g carbs per 100ml',
        'Good if coconut unavailable',
        'Still under 7g carbs in Primo size',
      ],
      availability: 'all-day',
      priceRange: '£3-4',
      verified: true,
      verifiedDate: '2026-03-01',
      source: 'Costa UK allergen guide March 2026',
    },
    {
      id: 'espresso',
      chainId: 'costa',
      name: 'Espresso',
      category: 'breakfast',
      description: 'Pure coffee - near-zero carbs',
      customization: 'Single or double shot. Smallest carb count at Costa.',
      nutrition: {
        servingSize: 'Single shot',
        calories: 3,
        protein: 0,
        totalFat: 0,
        saturatedFat: 0,
        totalCarbs: 1,
        fiber: 0,
        netCarbs: 1,
        sugar: 0,
        sodium: 3,
      },
      ketoRating: 'excellent',
      allergens: [],
      tips: [
        '~0.5g carbs - effectively zero',
        'Small but potent',
        'Perfect quick coffee stop',
      ],
      availability: 'all-day',
      priceRange: '£2-3',
      verified: true,
      verifiedDate: '2026-03-01',
      source: 'Costa UK allergen guide March 2026',
    },
    {
      id: 'flat-black',
      chainId: 'costa',
      name: 'Flat Black',
      category: 'breakfast',
      description: 'Espresso with hot water - zero effective carbs',
      customization: 'Similar to Americano but smaller. Pure black coffee.',
      nutrition: {
        servingSize: '1 drink',
        calories: 3,
        protein: 0,
        totalFat: 0,
        saturatedFat: 0,
        totalCarbs: 0,
        fiber: 0,
        netCarbs: 0,
        sugar: 0,
        sodium: 5,
      },
      ketoRating: 'excellent',
      allergens: [],
      tips: [
        'Literally 0g carbs',
        'Smaller than Americano',
        'Perfect if avoiding all carbs',
      ],
      availability: 'all-day',
      priceRange: '£2-3',
      verified: true,
      verifiedDate: '2026-03-01',
      source: 'Costa UK allergen guide March 2026',
    },
  ],
  faqs: [
    {
      question: "What's the best keto order at Costa?",
      answer: "The pouring cream Americano - order a black Americano and ask for 'a pot of pouring cream on the side'. Costa keeps it behind the counter and most stores provide it free. It's ~3-4g carbs total vs 11g+ for a latte. This is a well-known UK keto community hack."
    },
    {
      question: "Does Costa have almond milk?",
      answer: "No - Costa UK does NOT stock almond milk. Use coconut milk instead (~2.5g carbs per 100ml) - it's the lowest-carb option. Soya is second-best (~3-4g per 100ml). Oat milk is higher (~6-7g per 100ml)."
    },
    {
      question: "What about sugar-free syrups at Costa?",
      answer: "Costa stocks Monin sugar-free syrups (vanilla, caramel, hazelnut) which add ~1-2g carbs per pump vs 4-6g for regular. BUT not all stores stock all flavours - always ask at the counter before assuming it's available."
    },
    {
      question: "Can I eat food at Costa on keto?",
      answer: "Honestly, no. Almost everything is bread-based with no workarounds. Even the lightest items (Cheese Bites at 17g) barely fit a full day's allowance. Treat Costa as a drinks stop - eat before you go."
    },
    {
      question: "What about the Sugar Free Caramel Latte?",
      answer: "It's on the menu but even a medio is ~15-17g carbs because the base milk carbs still add up. Workable on a 50g budget but not on strict 20g keto. Better to get the pouring cream Americano instead."
    },
  ],
};