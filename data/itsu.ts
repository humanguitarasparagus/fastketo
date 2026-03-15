import { Chain } from '@/lib/types';

export const itsuData: Chain = {
  id: 'itsu',
  name: 'itsu',
  slug: 'itsu',
  logo: '/logos/itsu.svg',
  description: "itsu is excellent for keto if you know what to order. Skip the rice, noodles, and sushi - head straight to the miso soups and sashimi. Loaded Chicken Miso Soup (3.7g carbs, 23g protein) + Salmon Sashimi (0.9g carbs, 20g protein) = 4.6g total carbs, 43g protein. Pro tip: 5pm half-price makes sashimi £3-4 - best-value keto in the UK.",
  ketoFriendly: 'good',
  website: 'https://www.itsu.com',
  brandColor: '#E31E24',
  menuLastUpdated: '2026-03-01',
  categories: ['salads', 'chicken'],
  howToOrder: `🍜 THE itsu KETO STRATEGY:

**GO STRAIGHT TO:**
1. Soups section → Loaded Chicken Miso Soup (best choice)
2. Sushi section → Salmon Sashimi (raw fish, no rice)
3. Optional: Edamame (small pot as side)

🏆 PERFECT KETO MEAL:
- Loaded Chicken Miso Soup (3.7g carbs, 23g protein)
- Salmon Sashimi (0.9g carbs, 20g protein)
- Total: ~4.6g carbs, 43g protein, ~£10

💰 PRO TIP - 5PM HALF-PRICE RULE:
itsu discounts unsold food by 50% after 5pm (the "righteous" deal). Salmon Sashimi becomes £3-4 for 0.9g carbs and 20g protein - best-value keto meal in the UK!

✅ SAFE SOUPS:
- Miso Soup (3.7g)
- Loaded Chicken Miso (3.7g) ⭐
- King Prawn Miso (4.7g)

✅ SAFE SASHIMI:
- Salmon Sashimi (0.9g) ⭐⭐

❌ SKIP EVERYTHING WITH:
- Rice (all bowls, sushi, poké = 55-80g carbs)
- Noodles (all noodle soups/bowls = 50-70g)
- Gyoza wrappers (20-25g)
- Bao buns (35g+)

⚠️ "HEALTH HALO" TRAP:
itsu positions as healthy eating, but "healthy" at itsu usually means brown rice or noodles (high carb). The miso soups and sashimi are where the keto case actually lies.`,
  topPicks: ['loaded-chicken-miso', 'salmon-sashimi', 'king-prawn-miso'],
  items: [
    {
      id: 'loaded-chicken-miso',
      chainId: 'itsu',
      name: 'Loaded Chicken Miso Soup',
      category: 'chicken',
      description: 'THE best keto item at itsu - chargrilled chicken in miso broth',
      customization: 'Order as-is. Perfect standalone or with sashimi.',
      nutrition: {
        servingSize: '1 soup',
        calories: 137,
        protein: 23,
        totalFat: 4,
        saturatedFat: 1,
        totalCarbs: 4,
        fiber: 0,
        netCarbs: 4,
        sugar: 2,
        sodium: 1280,
      },
      ketoRating: 'excellent',
      allergens: ['soya', 'fish'],
      tips: [
        'Just 3.7g carbs with 23g protein - exceptional macros',
        'Only 137 calories but very filling',
        'Chargrilled chicken + Nagano Valley miso + wakame seaweed',
      ],
      availability: 'all-day',
      priceRange: '£4-5',
      verified: true,
      verifiedDate: '2026-03-01',
      source: 'itsu.com product pages March 2026',
    },
    {
      id: 'salmon-sashimi',
      chainId: 'itsu',
      name: 'Salmon Sashimi',
      category: 'salads',
      description: 'Most keto-pure item - sashimi-grade salmon, no rice, incredibly clean',
      customization: 'Order as-is. Half-price after 5pm (£3-4) - best-value keto in UK!',
      nutrition: {
        servingSize: '1 portion',
        calories: 178,
        protein: 20,
        totalFat: 9,
        saturatedFat: 2,
        totalCarbs: 1,
        fiber: 0,
        netCarbs: 1,
        sugar: 1,
        sodium: 420,
      },
      ketoRating: 'excellent',
      allergens: ['fish'],
      tips: [
        'Just 0.9g carbs - incredibly clean protein',
        'Omega-3 rich Atlantic salmon',
        '50% off after 5pm - becomes £3-4 for this quality!',
      ],
      availability: 'all-day',
      priceRange: '£6-8 (£3-4 after 5pm)',
      verified: true,
      verifiedDate: '2026-03-01',
      source: 'itsu.com product pages March 2026',
    },
    {
      id: 'king-prawn-miso',
      chainId: 'itsu',
      name: 'King Prawn Miso Soup',
      category: 'chicken',
      description: '10 king prawns in miso broth - excellent lean protein',
      customization: 'Order as-is. Good alternative to chicken miso.',
      nutrition: {
        servingSize: '1 soup',
        calories: 101,
        protein: 18,
        totalFat: 2,
        saturatedFat: 0,
        totalCarbs: 5,
        fiber: 0,
        netCarbs: 5,
        sugar: 2,
        sodium: 1180,
      },
      ketoRating: 'excellent',
      allergens: ['crustaceans', 'soya', 'fish'],
      tips: [
        'Just 4.7g carbs with 18g protein',
        'Only 101 calories - very light',
        '10 king prawns included',
      ],
      availability: 'all-day',
      priceRange: '£4-5',
      verified: true,
      verifiedDate: '2026-03-01',
      source: 'itsu.com product pages March 2026',
    },
    {
      id: 'miso-soup',
      chainId: 'itsu',
      name: 'Miso Soup',
      category: 'salads',
      description: 'Classic miso - near-zero carbs, deeply satisfying',
      customization: 'Order as starter or with other items.',
      nutrition: {
        servingSize: '1 soup',
        calories: 32,
        protein: 3,
        totalFat: 1,
        saturatedFat: 0,
        totalCarbs: 4,
        fiber: 0,
        netCarbs: 4,
        sugar: 1,
        sodium: 980,
      },
      ketoRating: 'excellent',
      allergens: ['soya'],
      tips: [
        'Just 3.7g carbs',
        'Only 32 calories',
        'Nagano Valley miso, wakame seaweed, tofu',
      ],
      availability: 'all-day',
      priceRange: '£2-3',
      verified: true,
      verifiedDate: '2026-03-01',
      source: 'itsu.com product pages March 2026',
    },
    {
      id: 'edamame-small',
      chainId: 'itsu',
      name: 'Edamame (Small Pot)',
      category: 'salads',
      description: 'Young soybeans - good keto snack or side',
      customization: 'Add to any order as side.',
      nutrition: {
        servingSize: 'Small pot',
        calories: 43,
        protein: 4,
        totalFat: 2,
        saturatedFat: 0,
        totalCarbs: 2,
        fiber: 1,
        netCarbs: 1,
        sugar: 1,
        sodium: 120,
      },
      ketoRating: 'excellent',
      allergens: ['soya'],
      tips: [
        'Just 1.9g carbs in small pot',
        'Plant protein boost',
        'Good accompaniment to soups/sashimi',
      ],
      availability: 'all-day',
      priceRange: '£2-3',
      verified: true,
      verifiedDate: '2026-03-01',
      source: 'itsu.com product pages March 2026',
    },
    {
      id: 'crispy-seaweed-thins',
      chainId: 'itsu',
      name: 'Crispy Seaweed Thins',
      category: 'salads',
      description: 'Low-carb snack - sea salt or wasabi flavor',
      customization: 'Good snack or accompaniment.',
      nutrition: {
        servingSize: '1 pack',
        calories: 24,
        protein: 1,
        totalFat: 1,
        saturatedFat: 0,
        totalCarbs: 2,
        fiber: 1,
        netCarbs: 1,
        sugar: 0,
        sodium: 180,
      },
      ketoRating: 'excellent',
      allergens: ['fish'],
      tips: [
        '~1-2g carbs per pack',
        'Only 24 calories',
        'Good texture/crunch addition',
      ],
      availability: 'all-day',
      priceRange: '£1-2',
      verified: true,
      verifiedDate: '2026-03-01',
      source: 'itsu.com product pages March 2026',
    },
    {
      id: 'spicy-miso-soup',
      chainId: 'itsu',
      name: 'Spicy Miso Soup',
      category: 'salads',
      description: 'Miso with chilli - borderline but workable on 50g',
      customization: 'Chilli adds carbs vs plain miso. Fine on 50g budget.',
      nutrition: {
        servingSize: '1 soup',
        calories: 68,
        protein: 4,
        totalFat: 2,
        saturatedFat: 0,
        totalCarbs: 9,
        fiber: 1,
        netCarbs: 8,
        sugar: 3,
        sodium: 1120,
      },
      ketoRating: 'good',
      allergens: ['soya'],
      tips: [
        '9.3g carbs - higher than plain miso',
        'Fine on 50g daily budget',
        'Tight on strict 20g - stick to plain miso instead',
      ],
      availability: 'all-day',
      priceRange: '£3-4',
      verified: true,
      verifiedDate: '2026-03-01',
      source: 'itsu.com product pages March 2026',
    },
  ],
  faqs: [
    {
      question: "What's the best keto order at itsu?",
      answer: "Loaded Chicken Miso Soup (3.7g carbs, 23g protein) + Salmon Sashimi (0.9g carbs, 20g protein) = 4.6g total carbs, 43g protein for around £10. One of the best keto meals across all chains on FastKeto."
    },
    {
      question: "What's the 5pm half-price rule?",
      answer: "itsu discounts unsold food by 50% after 5pm (the 'righteous' deal). Salmon Sashimi becomes £3-4 for 0.9g carbs and 20g protein - genuinely the best-value keto meal in the UK. This is UK-specific and worth planning around!"
    },
    {
      question: "Can I have sushi or rice bowls at itsu?",
      answer: "No - all sushi, rice bowls, and poké bowls are 55-80g carbs from the rice. Even though itsu is known for sushi, the keto play is miso soups and sashimi (raw fish without rice)."
    },
    {
      question: "What about the 'Detox' soups?",
      answer: "Health halo trap! 'Detox Miso Noodle Soup' sounds keto but it's 32g carbs from glass noodles. At itsu, 'healthy' usually means brown rice or noodles (high carb). Stick to plain Miso, Loaded Chicken Miso, or King Prawn Miso."
    },
    {
      question: "Where is itsu available?",
      answer: "Primarily London with some locations in Bristol, Edinburgh, Manchester, Birmingham, and Cambridge. Well-represented in office districts, train stations, and shopping centres but not nationwide. Check itsu.com for your nearest location."
    },
  ],
};