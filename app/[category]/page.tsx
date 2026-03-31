import Link from 'next/link'
import { chains } from '@/data'
import { ChainType } from '@/lib/types'

const categoryConfig: Record<ChainType, { label: string; description: string; metaDescription: string }> = {
  'fast-food': {
    label: 'Fast Food',
    description: 'The best keto options at UK fast food chains. Exact carb counts, verified from official UK nutrition data.',
    metaDescription: 'Keto fast food UK — exact carb counts for McDonald\'s, KFC, Burger King, Five Guys and more. Verified UK nutrition data.',
  },
  'pub-chains': {
    label: 'Pub Chains',
    description: 'Keto-friendly options at UK pub chains. From Wetherspoons steaks to Harvester salad bars — staying keto at the pub is easier than you think.',
    metaDescription: 'Keto pub food UK — best low carb options at Wetherspoons, Harvester and more UK pub chains. Verified nutrition data.',
  },
  'cafes': {
    label: 'Cafés',
    description: 'Keto options at UK coffee shops and cafés. Navigate Costa, Pret and Starbucks without breaking ketosis.',
    metaDescription: 'Keto café options UK — low carb choices at Costa, Pret a Manger, Starbucks and more. UK-specific advice.',
  },
  'casual-dining': {
    label: 'Casual Dining',
    description: 'Keto options at UK casual dining restaurants. From Nando\'s to Wagamama — eating out on keto made simple.',
    metaDescription: 'Keto casual dining UK — low carb options at Nando\'s, Wagamama, Leon, GBK and more UK restaurants.',
  },
  'sushi': {
    label: 'Sushi',
    description: 'Keto sushi options in the UK. Not all sushi is keto-friendly — here\'s exactly what to order at itsu and YO! Sushi.',
    metaDescription: 'Keto sushi UK — what to order at itsu and YO! Sushi. Sashimi vs nigiri, exact carb counts, UK-specific advice.',
  },
}

const validCategories = ['fast-food', 'pub-chains', 'cafes', 'casual-dining', 'sushi']

export function generateStaticParams() {
  return validCategories.map((category) => ({ category }))
}

export function generateMetadata({ params }: { params: { category: string } }) {
  const config = categoryConfig[params.category as ChainType]
  if (!config) return { title: 'Not Found' }
  return {
    title: `${config.label} | FastKeto UK`,
    description: config.metaDescription,
  }
}

export default async function CategoryPage({ params }: { params: { category: string } }) {
  const resolvedParams = await Promise.resolve(params)
  const category = resolvedParams.category

  if (!validCategories.includes(category)) {
    return (
      <div className="container-custom py-12 text-center">
        <h1 className="text-3xl font-bold text-neutral-900 mb-4">Category Not Found</h1>
        <Link href="/chains" className="text-primary-600 hover:underline">
          Browse all chains
        </Link>
      </div>
    )
  }

  const config = categoryConfig[category as ChainType]
  const categoryChains = chains.filter(chain => chain.chainType === category)

  return (
    <div>
      <section className="bg-primary-50 py-12">
        <div className="container-custom">
          <div className="mb-2">
            <Link href="/chains" className="text-primary-600 hover:underline text-sm">
              ← All Chains
            </Link>
          </div>
          <h1 className="text-4xl font-bold text-primary-900 mb-4">
            Keto {config.label} UK
          </h1>
          <p className="text-lg text-neutral-700 max-w-2xl">
            {config.description}
          </p>
          <p className="text-sm text-neutral-500 mt-3">
            {categoryChains.length} chain{categoryChains.length !== 1 ? 's' : ''} in this category
          </p>
        </div>
      </section>

      <section className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryChains.map((chain) => (
            <Link
              key={chain.id}
              href={`/chains/${chain.slug}`}
              className="card hover:shadow-md transition-shadow duration-200 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold shadow-sm flex-shrink-0"
                  style={{
                    backgroundColor: chain.brandColor || '#f5f5f5',
                    color: chain.brandColor ? '#fff' : '#333'
                  }}
                >
                  {chain.name.charAt(0)}
                </div>
                <div>
                  <h2 className="font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors">
                    {chain.name}
                  </h2>
                  <div className={`text-xs font-medium mt-1 ${
                    chain.ketoFriendly === 'excellent' ? 'text-green-700' :
                    chain.ketoFriendly === 'good' ? 'text-blue-700' :
                    chain.ketoFriendly === 'moderate' ? 'text-yellow-700' :
                    'text-red-700'
                  }`}>
                    {chain.ketoFriendly.charAt(0).toUpperCase() + chain.ketoFriendly.slice(1)} for keto
                  </div>
                </div>
              </div>

              <p className="text-neutral-600 text-sm mb-4 line-clamp-2">
                {chain.description}
              </p>

              <div className="flex items-center justify-between text-sm">
                <span className="text-neutral-500">{chain.items.length} keto options</span>
                <span className="text-neutral-500">
                  Best: {Math.min(...chain.items.map(i => i.nutrition.netCarbs))}g net carbs
                </span>
              </div>
            </Link>
          ))}
        </div>

        {categoryChains.length === 0 && (
          <div className="text-center py-12 text-neutral-500">
            <p className="text-lg mb-4">No chains in this category yet.</p>
            <Link href="/chains" className="text-primary-600 hover:underline">
              Browse all chains
            </Link>
          </div>
        )}
      </section>
    </div>
  )
}
