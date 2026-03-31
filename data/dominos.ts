import { Chain } from '@/lib/types';

export const dominosData: Chain = {
  id: 'dominos',
  name: "Domino's",
  slug: 'dominos',
  logo: '/logos/dominos.svg',
  description: "Domino's is delivery/collection only - no salad bar, no modifications. The honest keto answer: order wings, ignore pizza. 7 Chicken Wings + Garlic & Herb Dip = 7.7g carbs, 38g protein - a genuinely good keto meal delivered to your door. The Garlic & Herb dip (0.5g carbs) is one of the best condiment finds on FastKeto.",
  ketoFriendly: 'moderate',
  chainType: 'fast-food',
  website: 'https://www.dominos.co.uk',
  brandColor: '#0B648F',
  menuLastUpdated: '2026-02-01',
  categories: ['chicken'],
  howToOrder: `🔑 THE SIMPLE STRATEGY: Order wings, ignore pizza

📦 PERFECT KETO DOMINO'S ORDER:
1. Order: 7 Chicken Wings (plain or Frank's Red Hot)
2. Dip: Garlic & Herb Dip (NOT BBQ or Sweet Chilli)
3. Optional side: Coleslaw
4. Total: ~7.7g carbs, 38g protein, 48g fat
5. Complete, satisfying keto meal delivered

🍗 WING OPTIONS (ranked):
✅ Best: Plain Chicken Wings (7) = 7.2g carbs
✅ Great: Frank's Red Hot Wings (7) = 7.8g carbs (hot sauce adds 0.6g)
⚠️ Borderline: Spicy BBQ Wings (7) = 19.6g carbs (BBQ glaze adds sugar)
❌ Skip: Chicken Kickers = 27g carbs (breaded coating)

🥫 DIP CHOICE IS CRITICAL:
✅ ALWAYS: Garlic & Herb Dip = 0.5g carbs, 18.5g fat ⭐⭐
✅ Good: Frank's Hot Dip = 1g carbs
⚠️ Moderate: Honey & Mustard = 2.4g carbs
❌ NEVER: BBQ Dip = 11.2g carbs (pure sugar)
❌ NEVER: Sweet Chilli = 12.9g carbs (pure sugar)

🍕 ABOUT THE PIZZA:
Even Thin & Crispy is ~10g carbs PER SLICE. 2 slices = your entire strict daily budget on just crust. Pizza is off the table for keto, even gluten-free base.

🎯 "Scrape toppings" strategy exists (order pizza, eat only toppings/cheese, bin crust = ~5-8g per slice worth) but it's wasteful. Only use in group orders where others eat the crust.`,
  topPicks: ['chicken-wings-7', 'garlic-herb-dip', 'franks-wings-7'],
  items: [
    {
      id: 'chicken-wings-7',
      chainId: 'dominos',
      name: 'Chicken Wings (7)',
      category: 'chicken',
      description: 'Best keto main - plain bone-in wings, no coating',
      customization: 'Order 7 wings with Garlic & Herb dip. This is your complete keto meal.',
      nutrition: {
        servingSize: '7 wings',
        calories: 420,
        protein: 38,
        totalFat: 30,
        saturatedFat: 9,
        totalCarbs: 7,
        fiber: 0,
        netCarbs: 7,
        sugar: 3,
        sodium: 1180,
      },
      ketoRating: 'excellent',
      allergens: [],
      tips: [
        'Only 7.2g carbs for 7 wings - excellent',
        '38g protein, 30g fat - complete keto meal',
        'Add Garlic & Herb dip for just 0.5g extra carbs',
      ],
      availability: 'all-day',
      priceRange: '£6-8',
      verified: true,
      verifiedDate: '2026-02-01',
      source: 'Domino\'s UK Nutrition Guide February 2026',
    },
    {
      id: 'garlic-herb-dip',
      chainId: 'dominos',
      name: 'Garlic & Herb Dip',
      category: 'chicken',
      description: 'THE keto dip - 0.5g carbs, 18.5g fat, perfect with wings',
      customization: 'Always order this instead of BBQ or Sweet Chilli (which are 11-13g carbs).',
      nutrition: {
        servingSize: '25g pot',
        calories: 170,
        protein: 0,
        totalFat: 19,
        saturatedFat: 3,
        totalCarbs: 1,
        fiber: 0,
        netCarbs: 1,
        sugar: 0,
        sodium: 220,
      },
      ketoRating: 'excellent',
      allergens: ['milk', 'eggs'],
      tips: [
        'Just 0.5g carbs - one of the best dips across ALL chains',
        'High fat (18.5g) - perfect keto addition',
        'Switching from BBQ dip saves 10.7g carbs!',
      ],
      availability: 'all-day',
      priceRange: '£1',
      verified: true,
      verifiedDate: '2026-02-01',
      source: 'Domino\'s UK Nutrition Guide February 2026',
    },
    {
      id: 'franks-wings-7',
      chainId: 'dominos',
      name: "Frank's Red Hot Wings (7)",
      category: 'chicken',
      description: 'Plain wings with hot sauce - negligible extra carbs',
      customization: 'Hot sauce adds just 0.6g carbs vs plain wings. Great if you want heat.',
      nutrition: {
        servingSize: '7 wings',
        calories: 425,
        protein: 38,
        totalFat: 30,
        saturatedFat: 9,
        totalCarbs: 8,
        fiber: 0,
        netCarbs: 8,
        sugar: 3,
        sodium: 1280,
      },
      ketoRating: 'excellent',
      allergens: [],
      tips: [
        '7.8g carbs - only 0.6g more than plain',
        'Same excellent protein/fat as plain',
        'Perfect if you like spicy wings',
      ],
      availability: 'all-day',
      priceRange: '£6-8',
      verified: true,
      verifiedDate: '2026-02-01',
      source: 'Domino\'s UK Nutrition Guide February 2026',
    },
    {
      id: 'chicken-wings-4',
      chainId: 'dominos',
      name: 'Chicken Wings (4)',
      category: 'chicken',
      description: 'Smaller portion - good as add-on or light meal',
      customization: 'Order with Garlic & Herb dip.',
      nutrition: {
        servingSize: '4 wings',
        calories: 240,
        protein: 22,
        totalFat: 17,
        saturatedFat: 5,
        totalCarbs: 4,
        fiber: 0,
        netCarbs: 4,
        sugar: 2,
        sodium: 680,
      },
      ketoRating: 'excellent',
      allergens: [],
      tips: [
        'Just 4.1g carbs',
        'Good lighter option or add-on',
        '22g protein still substantial',
      ],
      availability: 'all-day',
      priceRange: '£4-5',
      verified: true,
      verifiedDate: '2026-02-01',
      source: 'Domino\'s UK Nutrition Guide February 2026',
    },
    {
      id: 'spicy-bbq-wings-7',
      chainId: 'dominos',
      name: 'Spicy BBQ Wings (7)',
      category: 'chicken',
      description: 'BBQ glaze adds sugar - borderline on strict 20g budget',
      customization: 'Fine on 50g daily budget, tight on strict 20g. BBQ glaze adds significant carbs.',
      nutrition: {
        servingSize: '7 wings',
        calories: 440,
        protein: 39,
        totalFat: 30,
        saturatedFat: 9,
        totalCarbs: 20,
        fiber: 0,
        netCarbs: 20,
        sugar: 14,
        sodium: 1380,
      },
      ketoRating: 'moderate',
      allergens: [],
      tips: [
        '19.6g carbs - uses most of strict 20g budget',
        'Fine on 50g daily limit',
        'Plain or Frank\'s wings are better keto choices',
      ],
      availability: 'all-day',
      priceRange: '£6-8',
      verified: true,
      verifiedDate: '2026-02-01',
      source: 'Domino\'s UK Nutrition Guide February 2026',
    },
    {
      id: 'franks-hot-dip',
      chainId: 'dominos',
      name: "Frank's Hot Dip",
      category: 'chicken',
      description: 'Hot sauce-based dip - almost no carbs',
      customization: 'Good alternative to Garlic & Herb if you want heat.',
      nutrition: {
        servingSize: '25g pot',
        calories: 10,
        protein: 0,
        totalFat: 0,
        saturatedFat: 0,
        totalCarbs: 1,
        fiber: 0,
        netCarbs: 1,
        sugar: 1,
        sodium: 380,
      },
      ketoRating: 'excellent',
      allergens: [],
      tips: [
        'Just 1g carbs',
        'Hot sauce based - adds heat',
        'Lower fat than Garlic & Herb but equally low carb',
      ],
      availability: 'all-day',
      priceRange: '£1',
      verified: true,
      verifiedDate: '2026-02-01',
      source: 'Domino\'s UK Nutrition Guide February 2026',
    },
    {
      id: 'coleslaw',
      chainId: 'dominos',
      name: 'Coleslaw',
      category: 'chicken',
      description: 'Only side worth ordering - pairs well with wings',
      customization: 'Optional add-on to wings order for variety.',
      nutrition: {
        servingSize: '1 portion',
        calories: 120,
        protein: 2,
        totalFat: 8,
        saturatedFat: 1,
        totalCarbs: 6,
        fiber: 2,
        netCarbs: 4,
        sugar: 5,
        sodium: 220,
      },
      ketoRating: 'excellent',
      allergens: ['eggs'],
      tips: [
        '6.3g carbs - manageable',
        'Only side that works for keto',
        'Pairs naturally with wings',
      ],
      availability: 'all-day',
      priceRange: '£2-3',
      verified: true,
      verifiedDate: '2026-02-01',
      source: 'Domino\'s UK Nutrition Guide February 2026',
    },
  ],
  faqs: [
    {
      question: "What's the best keto order at Domino's?",
      answer: "7 Chicken Wings (plain or Frank's Red Hot) + Garlic & Herb Dip = 7.7g total carbs, 38g protein, 48g fat. This is a complete, genuinely satisfying keto meal delivered to your door. Skip the pizza."
    },
    {
      question: "Why is Garlic & Herb dip so important?",
      answer: "It's 0.5g carbs and 18.5g fat - one of the best keto dips across ALL chains on FastKeto. BBQ dip is 11.2g carbs (pure sugar), Sweet Chilli is 12.9g. Switching dip alone saves ~11g carbs on your wings order!"
    },
    {
      question: "Can I eat Domino's pizza on keto?",
      answer: "Realistically, no. Even Thin & Crispy is ~10g carbs per slice. 2 slices = your entire strict 20g daily budget on just crust. The 'scrape toppings' approach works (~5-8g per slice worth) but it's wasteful. Order wings instead."
    },
    {
      question: "What about gluten-free base?",
      answer: "Gluten-free does NOT mean low-carb. GF base is still ~20g carbs per slice. It's made with rice flour and similar substitutes - same carb count as regular pizza."
    },
    {
      question: "Are Chicken Kickers or Strippers better than wings?",
      answer: "No - they're breaded. Chicken Kickers (7) = 27g carbs, Strippers (7) = 20.8g carbs. Plain wings (7) = just 7.2g carbs. Always choose plain bone-in wings."
    },
  ],
};