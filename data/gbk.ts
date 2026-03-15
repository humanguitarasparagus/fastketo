import { Chain } from '@/lib/types';

export const gbkData: Chain = {
  id: 'gbk',
  name: 'GBK (Gourmet Burger Kitchen)',
  slug: 'gbk',
  logo: '/logos/gbk.svg',
  description: "GBK has the best-branded bunless system in the UK - just say 'GO NAKED' and the kitchen knows exactly what to do. Premium British grass-fed, dry-aged beef. Classic Double GO NAKED = 74g protein, ~10-14g carbs. Note: Homeslaw has pomegranate seeds (~9-14g carbs) - it's not zero-carb but very manageable.",
  ketoFriendly: 'excellent',
  website: 'https://www.gbk.co.uk',
  brandColor: '#E31E24',
  menuLastUpdated: '2026-03-01',
  categories: ['burgers'],
  howToOrder: `🍔 THE GBK KETO FORMULA:

**JUST SAY "GO NAKED"**
This is official GBK terminology - the kitchen knows exactly what it means. No awkward explaining needed!

🔄 WHAT "GO NAKED" DOES:
- Removes the bun (~35-40g carbs)
- Replaces with: GBK Homeslaw + Simple Green Salad
- Net result: ~10-18g carbs for most burgers (vs 40g+ with bun)

⚠️ HOMESLAW IS NOT ZERO CARBS:
- Homeslaw = ~9-14g carbs (pomegranate seeds are main contributor)
- This is included in all GO NAKED estimates
- It's manageable, just not free

🏆 PERFECT KETO ORDER:
Classic Double GO NAKED
- Add: Cheddar, crispy bacon, jalapeños
- Sauce: House mayo (NOT relish)
- Total: ~10-13g carbs, 76g protein!

✅ SAFE SAUCES (fat-based, low-carb):
- House mayo (~1g)
- Chipotle mayo (~3g)
- Garlic mayo (~2g)
- Blue cheese mayo (~2g)
- Baconnaise (~2g)
- Sriracha mayo (~2g)

❌ SKIP THESE SAUCES (sugar-based):
- GBK relish (~8g)
- Habanero jam (~10g)
- BBQ sauce (~8g)
- Onion jam (~8g)
These come on some burgers by default - ask to remove!

🥩 THE BEEF QUALITY:
100% British grass-fed beef, hand-selected chuck/brisket/short rib, 30-day dry-aged steak. This is genuinely premium - not frozen patties.

✅ SAFE ADD-ONS:
- Crispy bacon (~1g)
- Cheese (~1g)
- Smashed avocado (~2g)
- Fried egg (~1g)
- Jalapeños (~0g)
- Dill pickle (~1g)`,
  topPicks: ['classic-double-naked', 'classic-cheese-naked', 'smashed-blue-naked'],
  items: [
    {
      id: 'classic-double-naked',
      chainId: 'gbk',
      name: 'Classic Double GO NAKED',
      category: 'burgers',
      description: '74g protein monster - one of the highest-protein single meals across ALL chains',
      customization: 'Say "Classic Double, GO NAKED". Add cheddar, bacon, jalapeños, house mayo. Skip relish.',
      nutrition: {
        servingSize: '1 burger',
        calories: 880,
        protein: 74,
        totalFat: 62,
        saturatedFat: 26,
        totalCarbs: 12,
        fiber: 3,
        netCarbs: 9,
        sugar: 8,
        sodium: 1480,
      },
      ketoRating: 'excellent',
      allergens: ['milk', 'eggs'],
      tips: [
        '~10-14g carbs (includes Homeslaw pomegranate seeds)',
        '74g protein - 12oz British grass-fed, dry-aged beef',
        'One of the best protein-to-carb ratios on FastKeto',
      ],
      availability: 'all-day',
      priceRange: '£12-14',
      verified: true,
      verifiedDate: '2026-03-01',
      source: 'GBK tenkites.com portal March 2026',
    },
    {
      id: 'classic-cheese-naked',
      chainId: 'gbk',
      name: 'Classic Cheese Single GO NAKED',
      category: 'burgers',
      description: 'Clean build with mature cheddar - best baseline option',
      customization: 'Say "Classic Cheese, GO NAKED". Clean build: relish, lettuce, onion, tomato, cheddar, house mayo.',
      nutrition: {
        servingSize: '1 burger',
        calories: 560,
        protein: 46,
        totalFat: 38,
        saturatedFat: 16,
        totalCarbs: 12,
        fiber: 3,
        netCarbs: 9,
        sugar: 7,
        sodium: 980,
      },
      ketoRating: 'excellent',
      allergens: ['milk', 'eggs'],
      tips: [
        '~10-13g carbs with Homeslaw',
        '46g protein from 6oz patty',
        'Clean, straightforward keto burger',
      ],
      availability: 'all-day',
      priceRange: '£10-12',
      verified: true,
      verifiedDate: '2026-03-01',
      source: 'GBK tenkites.com portal March 2026',
    },
    {
      id: 'smashed-blue-naked',
      chainId: 'gbk',
      name: 'Smashed Blue 2-Patty GO NAKED',
      category: 'burgers',
      description: 'Blue cheese sauce and crumb - lower sugar than relish builds',
      customization: 'Say "Smashed Blue, GO NAKED". Blue cheese sauce is lower-carb than standard relish.',
      nutrition: {
        servingSize: '1 burger',
        calories: 720,
        protein: 33,
        totalFat: 62,
        saturatedFat: 22,
        totalCarbs: 10,
        fiber: 2,
        netCarbs: 8,
        sugar: 6,
        sodium: 1180,
      },
      ketoRating: 'excellent',
      allergens: ['milk', 'eggs'],
      tips: [
        '~8-12g carbs - one of lowest at GBK',
        'Blue cheese sauce rich and keto-friendly',
        'Very high fat (62g) - perfect keto macros',
      ],
      availability: 'all-day',
      priceRange: '£11-13',
      verified: true,
      verifiedDate: '2026-03-01',
      source: 'GBK tenkites.com portal March 2026',
    },
    {
      id: 'classic-single-naked',
      chainId: 'gbk',
      name: 'Classic Single GO NAKED',
      category: 'burgers',
      description: 'Baseline 6oz burger - clean and simple',
      customization: 'Say "Classic, GO NAKED". Add preferred toppings and sauce.',
      nutrition: {
        servingSize: '1 burger',
        calories: 480,
        protein: 41,
        totalFat: 32,
        saturatedFat: 12,
        totalCarbs: 11,
        fiber: 3,
        netCarbs: 8,
        sugar: 7,
        sodium: 820,
      },
      ketoRating: 'excellent',
      allergens: ['eggs'],
      tips: [
        '~10-13g carbs',
        '41g protein - solid single burger',
        'Good starting point for customization',
      ],
      availability: 'all-day',
      priceRange: '£9-11',
      verified: true,
      verifiedDate: '2026-03-01',
      source: 'GBK tenkites.com portal March 2026',
    },
    {
      id: 'gbk-homeslaw',
      chainId: 'gbk',
      name: 'GBK Homeslaw',
      category: 'burgers',
      description: 'Included with GO NAKED - cabbage, spring onions, pomegranate seeds',
      customization: 'Automatically included with all GO NAKED burgers. Can order separately at £3.30.',
      nutrition: {
        servingSize: '1 portion',
        calories: 296,
        protein: 4,
        totalFat: 24,
        saturatedFat: 3,
        totalCarbs: 12,
        fiber: 3,
        netCarbs: 9,
        sugar: 8,
        sodium: 280,
      },
      ketoRating: 'good',
      allergens: [],
      tips: [
        '~9-14g carbs (pomegranate seeds are main contributor)',
        'NOT zero-carb but manageable',
        'Included automatically with GO NAKED',
      ],
      availability: 'all-day',
      priceRange: '£3.30 (free with GO NAKED)',
      verified: true,
      verifiedDate: '2026-03-01',
      source: 'GBK tenkites.com portal March 2026',
    },
    {
      id: 'simple-green-salad',
      chainId: 'gbk',
      name: 'Simple Green Salad',
      category: 'burgers',
      description: 'Mixed leaves, toasted seeds, vinaigrette - clean low-carb side',
      customization: 'Included with GO NAKED. Also orderable separately.',
      nutrition: {
        servingSize: '1 salad',
        calories: 87,
        protein: 2,
        totalFat: 7,
        saturatedFat: 1,
        totalCarbs: 4,
        fiber: 2,
        netCarbs: 2,
        sugar: 2,
        sodium: 120,
      },
      ketoRating: 'excellent',
      allergens: ['sesame'],
      tips: [
        'Just ~3-5g carbs',
        'Included with GO NAKED',
        'Clean, simple side',
      ],
      availability: 'all-day',
      priceRange: '£3-4 (free with GO NAKED)',
      verified: true,
      verifiedDate: '2026-03-01',
      source: 'GBK tenkites.com portal March 2026',
    },
    {
      id: 'chicken-grilled-naked',
      chainId: 'gbk',
      name: 'Classic Chicken Grilled GO NAKED',
      category: 'burgers',
      description: 'Chargrilled chicken option - skip the panko-crumbed version',
      customization: 'Say "Grilled Chicken, GO NAKED". NOT panko-crumbed (adds 12g carbs).',
      nutrition: {
        servingSize: '1 burger',
        calories: 520,
        protein: 38,
        totalFat: 31,
        saturatedFat: 8,
        totalCarbs: 14,
        fiber: 3,
        netCarbs: 11,
        sugar: 8,
        sodium: 920,
      },
      ketoRating: 'good',
      allergens: ['eggs'],
      tips: [
        '~12-16g carbs',
        'Grilled only - avoid panko-crumbed (+12g)',
        'Works on 50g budget',
      ],
      availability: 'all-day',
      priceRange: '£10-12',
      verified: true,
      verifiedDate: '2026-03-01',
      source: 'GBK tenkites.com portal March 2026',
    },
  ],
  faqs: [
    {
      question: "What does 'GO NAKED' mean at GBK?",
      answer: "It's GBK's official branding for bunless burgers. Just say 'GO NAKED' and the kitchen knows exactly what to do - they remove the bun (~35-40g carbs) and replace it with GBK Homeslaw + Simple Green Salad. No awkward explaining needed!"
    },
    {
      question: "Is the Homeslaw zero carbs?",
      answer: "No - this is important! Homeslaw is ~9-14g carbs because it contains pomegranate seeds (a genuine sugar source). It's manageable and included in all our GO NAKED carb estimates (~10-18g total), but it's not a free-carb item."
    },
    {
      question: "What's the best keto burger at GBK?",
      answer: "Classic Double GO NAKED with cheddar, bacon, jalapeños, and house mayo (NOT relish) = ~10-13g carbs, 76g protein. That's 12oz of British grass-fed, dry-aged beef - one of the highest-protein single meals on FastKeto."
    },
    {
      question: "Which sauces should I avoid?",
      answer: "SKIP: GBK relish (~8g), habanero jam (~10g), BBQ sauce (~8g), onion jam (~8g) - all sugar-based. CHOOSE: House mayo (~1g), chipotle mayo (~3g), garlic mayo (~2g), blue cheese mayo (~2g) - all fat-based and low-carb."
    },
    {
      question: "What makes GBK beef different?",
      answer: "100% British grass-fed beef, hand-selected chuck/brisket/short rib cuts, 30-day dry-aged steak. This is genuinely premium quality - not frozen patties like most chains. GBK is UK-founded (2001) and mid-market pricing (£10-13 per burger)."
    },
  ],
};