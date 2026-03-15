import { Chain } from '@/lib/types';

export const pizzahutData: Chain = {
  id: 'pizzahut',
  name: 'Pizza Hut Restaurants',
  slug: 'pizzahut',
  logo: '/logos/pizzahut.svg',
  description: "Pizza Hut UK Restaurants is better for keto than any guide suggests - but ONLY dine-in, and ONLY because of one thing: the free unlimited salad bar that comes with every main. Order Roasted Chicken Wings (0g carbs) to unlock the salad bar, then build your meal there. This is restaurants-only, not delivery.",
  ketoFriendly: 'good',
  website: 'https://www.pizzahut.co.uk',
  brandColor: '#EE3124',
  menuLastUpdated: '2025-11-01',
  categories: ['chicken', 'salads'],
  howToOrder: `⚠️ CRITICAL: This is PIZZA HUT RESTAURANTS (dine-in) ONLY
Pizza Hut Delivery has no salad bar and no viable keto options. This page applies to sit-down restaurants only.

🔑 THE STRATEGY - Unlock the Free Salad Bar:
1. Order Roasted Chicken Wings as your main (~0g carbs)
2. This unlocks FREE UNLIMITED access to the salad bar
3. Build your actual meal at the salad bar
4. Wings are your protein vehicle, salad bar is your nutrition

🥗 HOW TO BUILD YOUR SALAD BAR PLATE:
✅ Load up on:
- Fresh leaves (lettuce, spinach, rocket)
- Cucumbers, peppers, cherry tomatoes
- Jalapeños, roquito chilli peppers, black olives
- BACON BITS (confirmed gluten-free, load these up!)
- Blue cheese, ranch, garlic mayo, or sour cream dressing

⚠️ Moderate/small amounts:
- Red onions, carrots (small amounts)
- Coleslaw (mayo base, reasonable)
- Beetroot (~8g per tbsp - go easy)

❌ Skip entirely:
- Sweetcorn (~5g per tbsp)
- Potato salad
- Croutons, tortilla chips, crispy onions

🍗 WING OPTIONS:
Best: Roasted Chicken Wings (~0g carbs per wing)
Good: BBQ Chicken Wings (~1.65g per wing)
Borderline: Hot Honey BBQ Wings (~2-2.5g per wing - honey adds sugar)`,
  topPicks: ['roasted-chicken-wings', 'salad-bar', 'bbq-chicken-wings'],
  items: [
    {
      id: 'roasted-chicken-wings',
      chainId: 'pizzahut',
      name: 'Roasted Chicken Wings',
      category: 'chicken',
      description: 'THE keto main - plain roasted bone-in wings, near-zero carbs, unlocks free salad bar',
      customization: 'Order as your main to unlock the free unlimited salad bar. Confirmed gluten-free.',
      nutrition: {
        servingSize: '1 wing',
        calories: 85,
        protein: 12,
        totalFat: 5,
        saturatedFat: 1,
        totalCarbs: 0,
        fiber: 0,
        netCarbs: 0,
        sugar: 0,
        sodium: 95,
      },
      ketoRating: 'excellent',
      allergens: [],
      tips: [
        'Near-zero carbs per wing',
        'Bone-in, no coating - plain roasted',
        'Unlocks FREE UNLIMITED salad bar access',
      ],
      availability: 'all-day',
      priceRange: '£8-12',
      verified: true,
      verifiedDate: '2025-11-01',
      source: 'Pizza Hut UK allergen booklet November 2025',
    },
    {
      id: 'salad-bar',
      chainId: 'pizzahut',
      name: 'Unlimited Salad Bar',
      category: 'salads',
      description: 'FREE with every main - this is where your actual keto meal comes from',
      customization: 'Build your plate: fresh leaves + bacon bits + jalapeños + olives + blue cheese dressing. Skip croutons, sweetcorn, potato salad.',
      nutrition: {
        servingSize: 'Self-serve',
        calories: 250,
        protein: 15,
        totalFat: 18,
        saturatedFat: 6,
        totalCarbs: 8,
        fiber: 3,
        netCarbs: 5,
        sugar: 4,
        sodium: 680,
      },
      ketoRating: 'excellent',
      allergens: ['milk', 'eggs'],
      tips: [
        'FREE and UNLIMITED with any dine-in main',
        'Load up on bacon bits - they\'re gluten-free',
        'Use generous amounts of blue cheese or ranch dressing',
      ],
      availability: 'all-day',
      priceRange: '£0 (free with main)',
      verified: true,
      verifiedDate: '2025-11-01',
      source: 'Pizza Hut UK allergen booklet November 2025',
    },
    {
      id: 'bbq-chicken-wings',
      chainId: 'pizzahut',
      name: 'BBQ Chicken Wings',
      category: 'chicken',
      description: 'BBQ glaze adds modest carbs - still viable keto option',
      customization: 'Confirmed gluten-free. BBQ glaze is ~1.65g carbs per wing.',
      nutrition: {
        servingSize: '4 wings',
        calories: 280,
        protein: 23,
        totalFat: 14,
        saturatedFat: 4,
        totalCarbs: 7,
        fiber: 0,
        netCarbs: 7,
        sugar: 6,
        sodium: 820,
      },
      ketoRating: 'excellent',
      allergens: [],
      tips: [
        '~1.65g carbs per wing - very manageable',
        'Confirmed gluten-free',
        'Fine for keto, BBQ glaze minimal impact',
      ],
      availability: 'all-day',
      priceRange: '£8-12',
      verified: true,
      verifiedDate: '2025-11-01',
      source: 'FatSecret UK November 2025',
    },
    {
      id: 'hot-honey-bbq-wings',
      chainId: 'pizzahut',
      name: 'Hot Honey BBQ Chicken Wings',
      category: 'chicken',
      description: 'Honey adds sugar - borderline option, workable on 50g budget',
      customization: 'Hot honey trend adds carbs. Estimate ~2-2.5g per wing. Monitor portion size on strict 20g.',
      nutrition: {
        servingSize: '4 wings',
        calories: 300,
        protein: 20,
        totalFat: 12,
        saturatedFat: 3,
        totalCarbs: 9,
        fiber: 0,
        netCarbs: 9,
        sugar: 8,
        sodium: 780,
      },
      ketoRating: 'good',
      allergens: [],
      tips: [
        '~2-2.5g carbs per wing due to honey',
        'Fine on 50g daily budget, tight on strict 20g',
        'Still gluten-free',
      ],
      availability: 'all-day',
      priceRange: '£8-12',
      verified: true,
      verifiedDate: '2025-11-01',
      source: 'Pizza Hut UK allergen booklet November 2025',
    },
  ],
  faqs: [
    {
      question: "Is this page for Pizza Hut Delivery or Restaurants?",
      answer: "RESTAURANTS ONLY (dine-in). Pizza Hut Delivery has no salad bar and no viable keto options. This entire page applies only to the sit-down restaurant experience with the salad bar."
    },
    {
      question: "How does the salad bar work?",
      answer: "Every dine-in main comes with FREE UNLIMITED access to the self-serve salad bar. Order Roasted Chicken Wings as your main (~0g carbs), then build your actual meal at the salad bar with fresh veg, bacon bits, olives, and blue cheese dressing."
    },
    {
      question: "Why don't US keto guides mention the salad bar?",
      answer: "US Pizza Hut locations rarely have salad bars anymore. UK Pizza Hut Restaurants have free unlimited salad bars as standard - this is the biggest difference and why UK keto strategy is completely different from US guides."
    },
    {
      question: "Can I get gluten-free pizza base instead?",
      answer: "No - gluten-free base is NOT low-carb. It uses rice flour and similar substitutes, still 30-35g carbs per slice. The pizza is off the table for keto, even with GF base."
    },
    {
      question: "What's the best complete keto meal at Pizza Hut?",
      answer: "Order Roasted Chicken Wings (6-8 wings, ~0g carbs) + build a generous salad bar plate with fresh leaves, bacon bits, jalapeños, black olives, and blue cheese dressing (~5-8g carbs). Total: ~8-10g carbs, ~40-50g protein. Genuinely satisfying."
    },
  ],
};