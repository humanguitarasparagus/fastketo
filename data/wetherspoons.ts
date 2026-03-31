import { Chain } from '@/lib/types';

export const wetherspoonsData: Chain = {
  id: 'wetherspoons',
  name: 'Wetherspoons',
  slug: 'wetherspoons',
  logo: '/logos/wetherspoons.svg',
  description: "Wetherspoons is excellent for keto if you know one rule: swap chips for side salad. 800+ pubs nationwide. 14oz Rump Steak = 90g protein (best single-dish protein across ALL chains). Cheap sit-down option with proper grill section. Tuesday Steak Night, Wednesday Chicken Club = keto wins.",
  ketoFriendly: 'excellent',
  chainType: 'pub-chains',
  website: 'https://www.jdwetherspoon.com',
  brandColor: '#C8102E',
  menuLastUpdated: '2026-03-01',
  categories: ['burgers', 'chicken'],
  howToOrder: `🍺 THE WETHERSPOONS KETO RULE:

**ONE SIMPLE SWAP:**
Always say: "Side salad instead of chips, please"
- Menu explicitly notes this option
- Staff are used to it
- Costs nothing extra
- Saves ~75g carbs!

🏆 BEST KETO MEALS:

**14oz Aberdeen Angus Rump Steak**
- Side salad instead of chips
- Garlic & parsley butter
- Total: ~22g carbs, 90g protein
- Best protein hit in this entire series!
- ~£12-13 on Tuesday Steak Night

**10oz Gammon with Eggs**
- Side salad instead of chips
- Peppercorn sauce
- Total: ~20g carbs, 71g protein

**Grilled Chicken Breast**
- Side salad instead of chips
- Peri-peri sauce
- Total: ~8g carbs, 40g protein
- Wednesday Chicken Club pricing

✅ GRILL SECTION (always swap chips for salad):
- All steaks (8oz sirloin, 8oz/14oz rump)
- Gammon with eggs (5oz or 10oz)
- Grilled chicken breast
- Mixed grill (remove onion rings)

✅ BREAKFAST BUILD (skip toast, hash browns, beans):
- 2 fried eggs + 2 bacon + sausage + mushrooms + tomato
- ~12-15g carbs, ~35g protein, ~£5-7

✅ SAFE SAUCES:
- Garlic & parsley butter (~1g) ⭐⭐
- Peppercorn sauce (~4g)
- Peri-peri sauce (~2g)

❌ SKIP SAUCES:
- Gravy (thickened - ~8-12g)
- BBQ sauce (~8g)

⚠️ MEDITERRANEAN SALAD TRAP:
Sounds healthy but has 45g carbs (pearl barley, quinoa, wheat berries, butternut squash). Always choose plain side salad (5g) or coleslaw (3g) instead!

📅 CLUB NIGHTS:
- ✅ Tuesday: Steak Night (discounted steaks - perfect!)
- ✅ Wednesday: Chicken Club (discounted chicken - perfect!)
- ❌ Thursday: Curry Club (all served with rice & naan - skip entirely)

🎯 THE CORE RULE:
Chips are the default side (~75g carbs). Side salad is always available. Master this swap and Wetherspoons becomes one of the best keto pubs in the UK.`,
  topPicks: ['14oz-rump-steak', '10oz-gammon-eggs', 'grilled-chicken-breast'],
  items: [
    {
      id: '14oz-rump-steak',
      chainId: 'wetherspoons',
      name: '14oz Aberdeen Angus Rump Steak (side salad)',
      category: 'burgers',
      description: 'THE protein champion - 90g protein in one meal, best across ALL chains',
      customization: 'Say "side salad instead of chips". Add garlic & parsley butter. Remove onion rings if included.',
      nutrition: {
        servingSize: '1 steak + salad',
        calories: 720,
        protein: 90,
        totalFat: 47,
        saturatedFat: 18,
        totalCarbs: 22,
        fiber: 3,
        netCarbs: 19,
        sugar: 6,
        sodium: 1280,
      },
      ketoRating: 'excellent',
      allergens: ['milk'],
      tips: [
        '90g protein - highest single-dish protein in this entire series!',
        'Tuesday Steak Night: ~£12-13 (usually ~£15)',
        'Garlic & parsley butter adds just ~1g carbs',
        'Always swap chips for side salad (saves 75g carbs)',
      ],
      availability: 'all-day',
      priceRange: '£12-15 (cheaper Tuesday)',
      verified: true,
      verifiedDate: '2026-03-01',
      source: 'Wetherspoons allergens.jdwetherspoon.com March 2026',
    },
    {
      id: '10oz-gammon-eggs',
      chainId: 'wetherspoons',
      name: '10oz Gammon with Eggs (side salad)',
      category: 'burgers',
      description: 'Classic pub grill - massive protein, works on Tuesday Steak Night deal',
      customization: 'Say "side salad instead of chips". Add peppercorn sauce.',
      nutrition: {
        servingSize: '1 meal',
        calories: 650,
        protein: 71,
        totalFat: 42,
        saturatedFat: 14,
        totalCarbs: 20,
        fiber: 3,
        netCarbs: 17,
        sugar: 5,
        sodium: 2180,
      },
      ketoRating: 'excellent',
      allergens: ['eggs', 'milk'],
      tips: [
        '71g protein - exceptional value',
        'Available Tuesday Steak Night pricing',
        '14.8g carbs for gammon+eggs alone, +5g for salad',
        'Peppercorn sauce adds just 4g carbs',
      ],
      availability: 'all-day',
      priceRange: '£8-10',
      verified: true,
      verifiedDate: '2026-03-01',
      source: 'Wetherspoons allergens.jdwetherspoon.com March 2026',
    },
    {
      id: 'grilled-chicken-breast',
      chainId: 'wetherspoons',
      name: 'Grilled Chicken Breast (side salad)',
      category: 'chicken',
      description: 'Cleanest keto option - just 3g carbs for chicken alone',
      customization: 'Say "side salad instead of chips". Add peri-peri sauce. Wednesday Chicken Club pricing.',
      nutrition: {
        servingSize: '1 chicken + salad',
        calories: 280,
        protein: 40,
        totalFat: 8,
        saturatedFat: 2,
        totalCarbs: 8,
        fiber: 2,
        netCarbs: 6,
        sugar: 4,
        sodium: 680,
      },
      ketoRating: 'excellent',
      allergens: [],
      tips: [
        'Just 3g carbs for chicken alone',
        'Wednesday Chicken Club: exceptional value',
        'Lowest-calorie grill option (280kcal)',
        'Peri-peri sauce adds just 2g carbs',
      ],
      availability: 'all-day',
      priceRange: '£6-8 (cheaper Wednesday)',
      verified: true,
      verifiedDate: '2026-03-01',
      source: 'Wetherspoons allergens.jdwetherspoon.com March 2026',
    },
    {
      id: '8oz-sirloin-steak',
      chainId: 'wetherspoons',
      name: '8oz Sirloin Steak (side salad)',
      category: 'burgers',
      description: 'Classic pub steak - clean keto meal',
      customization: 'Say "side salad instead of chips". Add garlic & parsley butter.',
      nutrition: {
        servingSize: '1 steak + salad',
        calories: 520,
        protein: 57,
        totalFat: 36,
        saturatedFat: 14,
        totalCarbs: 20,
        fiber: 3,
        netCarbs: 17,
        sugar: 5,
        sodium: 980,
      },
      ketoRating: 'excellent',
      allergens: ['milk'],
      tips: [
        '15g carbs for steak alone + 5g salad',
        'Tuesday Steak Night pricing applies',
        'Garlic & parsley butter is best sauce choice',
      ],
      availability: 'all-day',
      priceRange: '£10-12',
      verified: true,
      verifiedDate: '2026-03-01',
      source: 'Wetherspoons allergens.jdwetherspoon.com March 2026',
    },
    {
      id: '5oz-gammon-eggs',
      chainId: 'wetherspoons',
      name: '5oz Gammon with Eggs (side salad)',
      category: 'burgers',
      description: 'Lighter gammon option - lowest-calorie grill item',
      customization: 'Say "side salad instead of chips".',
      nutrition: {
        servingSize: '1 meal',
        calories: 380,
        protein: 40,
        totalFat: 25,
        saturatedFat: 8,
        totalCarbs: 15,
        fiber: 2,
        netCarbs: 13,
        sugar: 4,
        sodium: 1480,
      },
      ketoRating: 'excellent',
      allergens: ['eggs'],
      tips: [
        'Lightest grill option (380kcal)',
        '~15g carbs total',
        'Good portion control choice',
      ],
      availability: 'all-day',
      priceRange: '£6-8',
      verified: true,
      verifiedDate: '2026-03-01',
      source: 'Wetherspoons allergens.jdwetherspoon.com March 2026',
    },
    {
      id: 'mixed-grill',
      chainId: 'wetherspoons',
      name: 'Mixed Grill (side salad, no onion rings)',
      category: 'burgers',
      description: 'Rump steak, chicken breast, gammon, sausages, fried eggs - remove onion rings',
      customization: 'Say "side salad instead of chips, no onion rings please".',
      nutrition: {
        servingSize: '1 grill',
        calories: 880,
        protein: 70,
        totalFat: 60,
        saturatedFat: 22,
        totalCarbs: 23,
        fiber: 3,
        netCarbs: 20,
        sugar: 6,
        sodium: 2180,
      },
      ketoRating: 'good',
      allergens: ['eggs', 'milk'],
      tips: [
        'Massive protein variety (70g)',
        'Always remove onion rings (~30-35g carbs)',
        'Good if you want variety in one meal',
      ],
      availability: 'all-day',
      priceRange: '£12-14',
      verified: true,
      verifiedDate: '2026-03-01',
      source: 'Wetherspoons allergens.jdwetherspoon.com March 2026',
    },
    {
      id: 'keto-breakfast-build',
      chainId: 'wetherspoons',
      name: 'Keto Breakfast Build',
      category: 'burgers',
      description: '2 fried eggs + 2 bacon + sausage + mushrooms + tomato (no toast, hash browns, beans)',
      customization: 'Order breakfast extras: "2 fried eggs, 2 bacon, 1 sausage, grilled mushrooms, grilled tomato - no toast, no hash browns, no beans"',
      nutrition: {
        servingSize: '1 breakfast',
        calories: 520,
        protein: 35,
        totalFat: 38,
        saturatedFat: 13,
        totalCarbs: 14,
        fiber: 2,
        netCarbs: 12,
        sugar: 5,
        sodium: 1680,
      },
      ketoRating: 'excellent',
      allergens: ['eggs'],
      tips: [
        '~12-15g carbs total',
        'Costs ~£5-7 in extras',
        'Skip black pudding (15g carbs - oatmeal filler)',
        'Lincolnshire sausage has ~5g carbs (contains rusk)',
      ],
      availability: 'all-day',
      priceRange: '£5-7',
      verified: true,
      verifiedDate: '2026-03-01',
      source: 'Wetherspoons allergens.jdwetherspoon.com March 2026',
    },
  ],
  faqs: [
    {
      question: "What's the one rule for keto at Wetherspoons?",
      answer: "Always say 'side salad instead of chips, please'. Chips are the default side (~75g carbs) but the menu explicitly notes you can swap for side salad (5g carbs). Staff are used to this request and it costs nothing extra. This one swap makes the entire grill section keto-friendly."
    },
    {
      question: "What's the best keto meal at Wetherspoons?",
      answer: "14oz Aberdeen Angus Rump Steak with side salad (instead of chips) and garlic & parsley butter = ~22g carbs, 90g protein. This is the highest single-dish protein across ALL chains on FastKeto. Tuesday Steak Night makes it ~£12-13 instead of ~£15."
    },
    {
      question: "What's the Mediterranean Salad trap?",
      answer: "The Mediterranean Salad sounds healthy but contains 45g carbs from pearl barley, quinoa, wheat berries, and butternut squash. It's the biggest keto gotcha on the menu. Always choose plain side salad (5g) or coleslaw (3g) instead!"
    },
    {
      question: "Which club nights are keto-friendly?",
      answer: "Tuesday Steak Night ✅ (discounted steaks - perfect for keto). Wednesday Chicken Club ✅ (discounted chicken - perfect). Thursday Curry Club ❌ (all curries served with rice & naan - skip entirely)."
    },
    {
      question: "Can I have breakfast at Wetherspoons on keto?",
      answer: "Yes! Build your own from breakfast extras: 2 fried eggs + 2 bacon + sausage + mushrooms + tomato = ~12-15g carbs, ~35g protein for ~£5-7. Skip toast, hash browns, and baked beans. The pre-built breakfasts (Traditional, Large) are loaded with carbs."
    },
    {
      question: "What sauces are safe at Wetherspoons?",
      answer: "Best: Garlic & parsley butter (~1g). Good: Peppercorn sauce (~4g), peri-peri sauce (~2g). Skip: Gravy (thickened with cornstarch ~8-12g), BBQ sauce (~8g), ketchup (~4g per serving)."
    },
  ],
};