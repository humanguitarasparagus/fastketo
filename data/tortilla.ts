import { Chain } from '@/lib/types';

export const tortillaData: Chain = {
  id: 'tortilla',
  name: 'Tortilla',
  slug: 'tortilla',
  logo: '/logos/tortilla.svg',
  description: "Tortilla is the best keto fast food chain in the UK. Build-your-own Chipotle-style format means you skip the wrap, skip the rice, and build a bowl or salad from fresh, low-carb ingredients. The Protein Pot (7.1g carbs, 41.6g protein) is the single best keto item across ALL chains on FastKeto.",
  ketoFriendly: 'excellent',
  chainType: 'fast-food',
  website: 'https://www.tortilla.co.uk',
  brandColor: '#E94E1B',
  menuLastUpdated: '2025-09-01',
  categories: ['chicken', 'salads'],
  howToOrder: `🌮 THE TORTILLA KETO FORMULA:

**ASK FOR:**
1. Bowl or Salad (NOT burrito or wrap)
2. Say "no rice, no beans"
3. Choose your protein (Chicken Asado or Pork Carnitas best)
4. Stack toppings freely - nearly all are keto-friendly!

🏆 THE PROTEIN POT (hidden gem - ask for it!):
- Double protein portion + 2 toppings of your choice
- Chicken Asado Protein Pot = 3.1g carbs, 41.6g protein
- Add guacamole (1.6g) + pico de gallo (2.4g)
- Total: ~7.1g carbs, 41.6g protein
- BEST keto item across ALL chains on FastKeto!

✅ KETO-FRIENDLY TOPPINGS (stack these freely):
- Monterey Jack Cheese (0g)
- Guacamole (1.6g) - hand-smashed daily ⭐
- Sour Cream (1.6g)
- Pico de Gallo (2.4g)
- Salsa Verde (2.0g)
- Chipotle Cheese Sauce (1.4g)
- Lettuce, onion & coriander, pickled onions (0.4-1.3g)

❌ SKIP:
- All wraps (36-52g carbs)
- Rice (24-34g carbs)
- Beans (15-18g - borderline on 50g, skip on 20g)
- Tortilla chips (31g)

💡 STAFF ARE USED TO CUSTOM BUILDS:
This isn't unusual ordering at Tortilla - the format is designed for customization. Just say "bowl, no rice, no beans" and build from there.`,
  topPicks: ['protein-pot-chicken', 'chicken-asado-salad', 'carnitas-bowl'],
  items: [
    {
      id: 'protein-pot-chicken',
      chainId: 'tortilla',
      name: 'Chicken Asado Protein Pot',
      category: 'chicken',
      description: 'THE WINNER - double protein portion, best keto item across ALL chains on FastKeto',
      customization: 'Ask for "Chicken Asado Protein Pot" + guacamole + pico de gallo. Total: ~7.1g carbs, 41.6g protein.',
      nutrition: {
        servingSize: 'Double protein + 2 toppings',
        calories: 380,
        protein: 42,
        totalFat: 14,
        saturatedFat: 3,
        totalCarbs: 7,
        fiber: 3,
        netCarbs: 4,
        sugar: 4,
        sodium: 980,
      },
      ketoRating: 'excellent',
      allergens: [],
      tips: [
        'Just 7.1g carbs with guac + pico de gallo',
        '41.6g protein - highest on FastKeto!',
        'Hidden gem - most people don\'t know to ask for it',
      ],
      availability: 'all-day',
      priceRange: '£8-10',
      verified: true,
      verifiedDate: '2025-09-01',
      source: 'Tortilla UK Nutrition Guide September 2025',
    },
    {
      id: 'chicken-asado-salad',
      chainId: 'tortilla',
      name: 'Chicken Asado Salad (Custom Build)',
      category: 'salads',
      description: 'Fresh salad base with chicken, guac, cheese, salsas - complete keto meal',
      customization: 'Order: Salad + Chicken Asado + guacamole + pico de gallo + salsa verde + cheese + sour cream.',
      nutrition: {
        servingSize: '1 salad',
        calories: 420,
        protein: 28,
        totalFat: 24,
        saturatedFat: 8,
        totalCarbs: 11,
        fiber: 5,
        netCarbs: 6,
        sugar: 5,
        sodium: 880,
      },
      ketoRating: 'excellent',
      allergens: ['milk'],
      tips: [
        '~10.5g total carbs with full build',
        'Salad mix is cos, spinach, kale',
        'Stack toppings freely - all low-carb',
      ],
      availability: 'all-day',
      priceRange: '£8-10',
      verified: true,
      verifiedDate: '2025-09-01',
      source: 'Tortilla UK Nutrition Guide September 2025',
    },
    {
      id: 'carnitas-bowl',
      chainId: 'tortilla',
      name: 'Pork Carnitas Bowl (No Rice, No Beans)',
      category: 'chicken',
      description: 'Slow-cooked pork - lowest carb protein option',
      customization: 'Order: Bowl, no rice, no beans + Pork Carnitas + grilled veg + guac + chipotle cheese sauce + salsa verde.',
      nutrition: {
        servingSize: '1 bowl',
        calories: 380,
        protein: 24,
        totalFat: 22,
        saturatedFat: 7,
        totalCarbs: 13,
        fiber: 6,
        netCarbs: 7,
        sugar: 6,
        sodium: 820,
      },
      ketoRating: 'excellent',
      allergens: ['milk'],
      tips: [
        'Carnitas is 0.7g carbs - lowest carb protein',
        '~14g total carbs with full build',
        'Grilled veg adds 6.2g but good fiber',
      ],
      availability: 'all-day',
      priceRange: '£8-10',
      verified: true,
      verifiedDate: '2025-09-01',
      source: 'Tortilla UK Nutrition Guide September 2025',
    },
    {
      id: 'protein-pot-carnitas',
      chainId: 'tortilla',
      name: 'Pork Carnitas Protein Pot',
      category: 'chicken',
      description: 'Double carnitas portion - even lower carbs than chicken',
      customization: 'Ask for "Pork Carnitas Protein Pot" + guacamole + cheese.',
      nutrition: {
        servingSize: 'Double protein + 2 toppings',
        calories: 340,
        protein: 35,
        totalFat: 18,
        saturatedFat: 6,
        totalCarbs: 3,
        fiber: 2,
        netCarbs: 1,
        sugar: 2,
        sodium: 920,
      },
      ketoRating: 'excellent',
      allergens: ['milk'],
      tips: [
        'Just 1.4g carbs base - incredibly low',
        '35g protein',
        'Even lower carb than chicken pot',
      ],
      availability: 'all-day',
      priceRange: '£8-10',
      verified: true,
      verifiedDate: '2025-09-01',
      source: 'Tortilla UK Nutrition Guide September 2025',
    },
    {
      id: 'barbacoa-salad',
      chainId: 'tortilla',
      name: 'Beef Barbacoa Salad',
      category: 'salads',
      description: 'Richest flavor protein - slightly higher fat',
      customization: 'Order: Salad + Beef Barbacoa + guac + sour cream + salsa verde + cheese.',
      nutrition: {
        servingSize: '1 salad',
        calories: 440,
        protein: 25,
        totalFat: 26,
        saturatedFat: 9,
        totalCarbs: 12,
        fiber: 5,
        netCarbs: 7,
        sugar: 5,
        sodium: 920,
      },
      ketoRating: 'excellent',
      allergens: ['milk'],
      tips: [
        '~12g total carbs',
        'Richest, most flavorful protein',
        'Higher fat (26g) than chicken',
      ],
      availability: 'all-day',
      priceRange: '£8-10',
      verified: true,
      verifiedDate: '2025-09-01',
      source: 'Tortilla UK Nutrition Guide September 2025',
    },
    {
      id: 'guacamole',
      chainId: 'tortilla',
      name: 'Guacamole',
      category: 'salads',
      description: 'Hand-smashed daily from Hass avocados - perfect keto fat',
      customization: 'Add to any bowl or salad. Essential keto topping.',
      nutrition: {
        servingSize: '1 portion',
        calories: 80,
        protein: 1,
        totalFat: 7,
        saturatedFat: 1,
        totalCarbs: 2,
        fiber: 2,
        netCarbs: 0,
        sugar: 0,
        sodium: 120,
      },
      ketoRating: 'excellent',
      allergens: [],
      tips: [
        'Just 1.6g carbs',
        'Hand-smashed fresh daily',
        'Perfect healthy fat addition',
      ],
      availability: 'all-day',
      priceRange: '£1-2',
      verified: true,
      verifiedDate: '2025-09-01',
      source: 'Tortilla UK Nutrition Guide September 2025',
    },
    {
      id: 'monterey-jack-cheese',
      chainId: 'tortilla',
      name: 'Monterey Jack Cheese',
      category: 'salads',
      description: 'Zero carbs - add freely to any bowl',
      customization: 'Free carbs, adds protein and fat.',
      nutrition: {
        servingSize: '1 portion',
        calories: 90,
        protein: 7,
        totalFat: 7,
        saturatedFat: 4,
        totalCarbs: 0,
        fiber: 0,
        netCarbs: 0,
        sugar: 0,
        sodium: 180,
      },
      ketoRating: 'excellent',
      allergens: ['milk'],
      tips: [
        '0g carbs - completely free',
        'Adds protein and fat',
        'Stack it on generously',
      ],
      availability: 'all-day',
      priceRange: 'Included',
      verified: true,
      verifiedDate: '2025-09-01',
      source: 'Tortilla UK Nutrition Guide September 2025',
    },
    {
      id: 'chipotle-cheese-sauce',
      chainId: 'tortilla',
      name: 'Chipotle Cheese Sauce',
      category: 'salads',
      description: 'Hot and creamy - adds fat and flavor',
      customization: 'Great on bowls for extra richness.',
      nutrition: {
        servingSize: '1 portion',
        calories: 110,
        protein: 3,
        totalFat: 9,
        saturatedFat: 5,
        totalCarbs: 1,
        fiber: 0,
        netCarbs: 1,
        sugar: 1,
        sodium: 220,
      },
      ketoRating: 'excellent',
      allergens: ['milk'],
      tips: [
        'Just 1.4g carbs',
        'Adds creamy richness',
        'Good fat boost',
      ],
      availability: 'all-day',
      priceRange: 'Included',
      verified: true,
      verifiedDate: '2025-09-01',
      source: 'Tortilla UK Nutrition Guide September 2025',
    },
  ],
  faqs: [
    {
      question: "What's the best keto order at Tortilla?",
      answer: "The Protein Pot - ask for 'Chicken Asado Protein Pot' with guacamole and pico de gallo. Total: 7.1g carbs, 41.6g protein. This is the single best keto item across ALL chains on FastKeto - better macros than anything else we've researched."
    },
    {
      question: "How do I order keto at Tortilla?",
      answer: "Say 'Bowl (or Salad), no rice, no beans' then build from proteins and toppings. Nearly every topping is keto-friendly. Staff are used to custom builds - this is how the format works. Stack guacamole, cheese, sour cream, and salsas freely."
    },
    {
      question: "Is Tortilla the UK's Chipotle?",
      answer: "Yes! Tortilla (UK-founded, 2007) operates on the same build-your-own Mexican format as Chipotle. Chipotle only has a handful of UK locations (central London), while Tortilla has 75+ sites across the UK. This is the widely available UK equivalent."
    },
    {
      question: "Can I have beans on keto at Tortilla?",
      answer: "Borderline - black beans (15.8g) and pinto beans (18.6g) use most of a strict 20g budget. They're high in fiber (6-8g) which brings net carbs down. Fine on 50g daily limit if everything else is stripped back, skip on strict 20g."
    },
    {
      question: "Where is Tortilla available?",
      answer: "75+ UK locations, predominantly London but growing in Birmingham, Manchester, Bristol, plus motorway services and airports. It's UK-founded and more widely available than Leon, though not nationwide like McDonald's. Check tortilla.co.uk for your nearest location."
    },
  ],
};