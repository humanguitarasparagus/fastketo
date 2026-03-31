import { Chain } from '@/lib/types';

export const starbucksData: Chain = {
  id: 'starbucks',
  name: 'Starbucks',
  slug: 'starbucks',
  logo: '/logos/starbucks.svg',
  description: "Starbucks UK is customization-first - the right order and wrong order are separated entirely by what you ask for. Most keto Starbucks advice is US-specific and doesn't work in UK stores. The good news: egg bites (under 6g carbs) make this a genuine breakfast stop, not just drinks.",
  ketoFriendly: 'good',
  chainType: 'cafes',
  website: 'https://www.starbucks.co.uk',
  brandColor: '#00704A',
  menuLastUpdated: '2025-03-01',
  categories: ['breakfast'],
  howToOrder: `⚠️ UK vs US DIFFERENCES (critical to know):
1. Heavy cream is NOT reliably available at UK counters (unlike US)
2. Only ONE sugar-free syrup in UK: vanilla (not caramel, hazelnut, etc)
3. Iced teas come SWEETENED by default - must say "no classic syrup"

🥛 MILK CHOICE:
1. Almond milk is lowest-carb option (~4-5g per 100ml)
2. Don't use oat milk - it's 9-10g carbs per 100ml
3. Soya is good alternative if almond unavailable
4. Always specify milk type - don't accept default

☕ ORDERING DRINKS:
1. Ask for "almond milk" explicitly
2. Request "1 pump sugar-free vanilla" (not 4 pumps - standard is too much)
3. For iced drinks: say "no classic syrup" or "unsweetened"
4. Smaller sizes minimize milk carbs (Short/Tall better than Grande/Venti)

🍳 FOOD:
1. Egg bites are the only keto food worth ordering
2. Check Starbucks app for availability - not all stores stock them
3. Both varieties (Ham & Cheese, or Egg White with Pepper) are under 6g carbs`,
  topPicks: ['egg-bites-ham-cheese', 'flat-white-almond', 'cappuccino-almond'],
  items: [
    {
      id: 'egg-bites-ham-cheese',
      chainId: 'starbucks',
      name: 'Egg Bites with Three Cheese & Ham',
      category: 'breakfast',
      description: 'THE keto food winner at Starbucks - whole eggs, three cheeses, ham',
      customization: 'Order heated. Available at most larger UK Starbucks stores - check app for availability before visiting.',
      nutrition: {
        servingSize: '2 bites',
        calories: 180,
        protein: 13,
        totalFat: 11,
        saturatedFat: 5,
        totalCarbs: 6,
        fiber: 0,
        netCarbs: 6,
        sugar: 2,
        sodium: 520,
      },
      ketoRating: 'excellent',
      allergens: ['eggs', 'milk'],
      tips: [
        'Only 5.7g carbs - genuinely excellent keto breakfast',
        'Around £4.60 per serving',
        'Not available at all stores - check app first',
      ],
      availability: 'breakfast',
      priceRange: '£4-5',
      verified: true,
      verifiedDate: '2025-03-01',
      source: 'Starbucks EMEA Spring 2025 nutritional data',
    },
    {
      id: 'egg-white-bites',
      chainId: 'starbucks',
      name: 'Egg White Bites with Three Cheese & Red Pepper',
      category: 'breakfast',
      description: 'Lighter egg bites - egg whites, spinach, red pepper, feta',
      customization: 'Order heated. Check app for store availability.',
      nutrition: {
        servingSize: '2 bites',
        calories: 160,
        protein: 13,
        totalFat: 10,
        saturatedFat: 4,
        totalCarbs: 6,
        fiber: 0,
        netCarbs: 6,
        sugar: 2,
        sodium: 480,
      },
      ketoRating: 'excellent',
      allergens: ['eggs', 'milk'],
      tips: [
        'About 6g carbs - excellent keto choice',
        'Lighter than Ham & Cheese version',
        'Both egg bite options are equally good for keto',
      ],
      availability: 'breakfast',
      priceRange: '£4-5',
      verified: true,
      verifiedDate: '2025-03-01',
      source: 'Starbucks EMEA Spring 2025 nutritional data',
    },
    {
      id: 'flat-white-almond',
      chainId: 'starbucks',
      name: 'Flat White (Almond Milk, Short)',
      category: 'breakfast',
      description: 'Best milky coffee option - almond milk in smallest size',
      customization: 'Order "Short Flat White with almond milk". Add 1 pump sugar-free vanilla if desired (~1g extra carbs).',
      nutrition: {
        servingSize: 'Short',
        calories: 60,
        protein: 2,
        totalFat: 4,
        saturatedFat: 0,
        totalCarbs: 4,
        fiber: 0,
        netCarbs: 4,
        sugar: 3,
        sodium: 50,
      },
      ketoRating: 'excellent',
      allergens: ['nuts'],
      tips: [
        'Just 3.5g carbs in Short size',
        'Almond milk is lowest-carb option at Starbucks UK',
        'Add 1 pump sugar-free vanilla (not 4!) for sweetness',
      ],
      availability: 'all-day',
      priceRange: '£3-4',
      verified: true,
      verifiedDate: '2025-03-01',
      source: 'Starbucks EMEA Spring 2025 nutritional data',
    },
    {
      id: 'cappuccino-almond',
      chainId: 'starbucks',
      name: 'Cappuccino (Almond Milk, Tall)',
      category: 'breakfast',
      description: 'Reliable everyday milky coffee - under 6g carbs',
      customization: 'Order "Tall Cappuccino with almond milk, 1 pump sugar-free vanilla".',
      nutrition: {
        servingSize: 'Tall',
        calories: 90,
        protein: 3,
        totalFat: 5,
        saturatedFat: 0,
        totalCarbs: 6,
        fiber: 1,
        netCarbs: 5,
        sugar: 4,
        sodium: 80,
      },
      ketoRating: 'excellent',
      allergens: ['nuts'],
      tips: [
        '5.8g carbs - excellent for daily coffee',
        'With 1 pump SF vanilla: ~7g carbs total',
        'Don\'t use oat milk - it adds 10g+ carbs',
      ],
      availability: 'all-day',
      priceRange: '£3-4',
      verified: true,
      verifiedDate: '2025-03-01',
      source: 'Starbucks EMEA Spring 2025 nutritional data',
    },
    {
      id: 'americano-black',
      chainId: 'starbucks',
      name: 'Americano (Black)',
      category: 'breakfast',
      description: 'The purest order - near-zero carbs',
      customization: 'Order any size black. Tall ~0.9g, Grande ~1.3g, Venti ~1.8g carbs.',
      nutrition: {
        servingSize: 'Grande',
        calories: 5,
        protein: 0,
        totalFat: 0,
        saturatedFat: 0,
        totalCarbs: 1,
        fiber: 0,
        netCarbs: 1,
        sugar: 0,
        sodium: 10,
      },
      ketoRating: 'excellent',
      allergens: [],
      tips: [
        'Just 1.3g carbs in Grande',
        'Zero compromises needed',
        'Add splash of almond milk for ~2-3g total',
      ],
      availability: 'all-day',
      priceRange: '£2-4',
      verified: true,
      verifiedDate: '2025-03-01',
      source: 'Starbucks EMEA Spring 2025 nutritional data',
    },
    {
      id: 'latte-almond',
      chainId: 'starbucks',
      name: 'Latte (Almond Milk, Tall)',
      category: 'breakfast',
      description: 'Classic latte with almond milk - under 7g carbs',
      customization: 'Order "Tall Latte with almond milk". Larger sizes add more milk carbs.',
      nutrition: {
        servingSize: 'Tall',
        calories: 110,
        protein: 3,
        totalFat: 6,
        saturatedFat: 0,
        totalCarbs: 7,
        fiber: 1,
        netCarbs: 6,
        sugar: 5,
        sodium: 90,
      },
      ketoRating: 'excellent',
      allergens: ['nuts'],
      tips: [
        '6.9g carbs in Tall size',
        'Don\'t upsize - Grande adds 3-4g more carbs',
        'Classic latte feel with keto macros',
      ],
      availability: 'all-day',
      priceRange: '£3-4',
      verified: true,
      verifiedDate: '2025-03-01',
      source: 'Starbucks EMEA Spring 2025 nutritional data',
    },
    {
      id: 'cappuccino-soya',
      chainId: 'starbucks',
      name: 'Cappuccino (Soya Milk, Tall)',
      category: 'breakfast',
      description: 'Good alternative if almond unavailable',
      customization: 'Order "Tall Cappuccino with soya milk". Similar carbs to almond.',
      nutrition: {
        servingSize: 'Tall',
        calories: 95,
        protein: 4,
        totalFat: 4,
        saturatedFat: 0,
        totalCarbs: 6,
        fiber: 0,
        netCarbs: 6,
        sugar: 5,
        sodium: 85,
      },
      ketoRating: 'excellent',
      allergens: ['soya'],
      tips: [
        '6.3g carbs - similar to almond milk option',
        'Good backup if almond unavailable',
        'Slightly higher protein than almond',
      ],
      availability: 'all-day',
      priceRange: '£3-4',
      verified: true,
      verifiedDate: '2025-03-01',
      source: 'Starbucks EMEA Spring 2025 nutritional data',
    },
  ],
  faqs: [
    {
      question: "What's different about Starbucks UK vs US for keto?",
      answer: "Three critical differences: (1) Heavy cream is NOT reliably available at UK counters, (2) Only ONE sugar-free syrup exists in UK stores (vanilla only - not caramel, hazelnut, etc), (3) Iced teas come sweetened by default - you MUST say 'no classic syrup' or you get 20g+ carbs."
    },
    {
      question: "What are the egg bites and where can I get them?",
      answer: "Starbucks UK has two egg bite varieties: Three Cheese & Ham (5.7g carbs) and Egg White with Red Pepper (6g carbs). Both are excellent keto breakfasts at ~£4.60. They're available at most larger UK stores but not all - check the Starbucks app for live food availability before visiting."
    },
    {
      question: "What milk should I order at Starbucks UK?",
      answer: "Almond milk is best (~4-5g carbs per 100ml). Soya is good alternative (~3-4g). AVOID oat milk - it's 9-10g per 100ml. Always specify your milk choice and choose smaller sizes (Short/Tall) to minimize carbs."
    },
    {
      question: "Can I get heavy cream in my coffee?",
      answer: "Not reliably. Unlike US Starbucks where heavy cream is standard, UK stores don't routinely stock it at the counter. It may occasionally be available, but don't build your order around it. Use almond milk instead."
    },
    {
      question: "What's the best keto breakfast at Starbucks?",
      answer: "Egg Bites with Three Cheese & Ham + Short Flat White with almond milk and 1 pump sugar-free vanilla = ~9-10g total carbs, ~17g protein. A genuinely satisfying breakfast that actually works for keto."
    },
  ],
};