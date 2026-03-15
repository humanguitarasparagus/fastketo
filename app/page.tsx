import Link from 'next/link';
import { chains, getTopPicks } from '@/data';
import { KetoRating } from '@/lib/types';

function KetoRatingBadge({ rating }: { rating: KetoRating }) {
  const badgeClass = {
    excellent: 'badge-excellent',
    good: 'badge-good',
    moderate: 'badge-moderate',
    avoid: 'badge-avoid',
  }[rating];

  const stars = {
    excellent: '⭐⭐⭐⭐⭐',
    good: '⭐⭐⭐⭐',
    moderate: '⭐⭐⭐',
    avoid: '⭐',
  }[rating];

  return (
    <span className={`badge ${badgeClass}`}>
      {stars} {rating.charAt(0).toUpperCase() + rating.slice(1)}
    </span>
  );
}

export default function Home() {
  const topPicks = getTopPicks(6);

  return (
    <div>
      {/* Hero Section */}
<section className="relative py-16 sm:py-24 overflow-hidden">
  {/* Background Image */}
  <div className="absolute inset-0 z-0">
    <img 
      src="/hero-bg.jpg" 
      alt="" 
      className="w-full h-full object-cover"
    />
    {/* Dark overlay for text readability */}
    <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/65 via-neutral-900/45 to-neutral-900/65"></div>
  </div>

  {/* Content (on top of background) */}
  <div className="container-custom text-center relative z-10">
    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
      Keto Fast Food Made Simple
    </h1>
    <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-8">
      Discover exactly what to order at your favourite UK fast food chains 
      while staying in ketosis. No guesswork, just carb counts.
    </p>

    {/* Search Coming Soon */}
    <div className="max-w-md mx-auto mb-8">
      <div className="relative">
        <input
          type="text"
          placeholder="Find keto options at..."
          className="w-full px-4 py-3 rounded-lg border border-white/30 bg-white/95 backdrop-blur focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
          disabled
        />
        <div className="absolute right-3 top-3 text-neutral-400 text-sm">
          Coming soon
        </div>
      </div>
    </div>

    {/* Quick Stats */}
    <div className="flex justify-center space-x-8 text-sm">
      <div>
        <span className="text-white font-semibold">{chains.length}+</span>
        <span className="text-white/80"> UK chains</span>
      </div>
      <div>
        <span className="text-white font-semibold">
          {chains.reduce((sum, chain) => sum + chain.items.length, 0)}+
        </span>
        <span className="text-white/80"> verified options</span>
      </div>
      <div>
        <span className="text-white font-semibold">Updated</span>
        <span className="text-white/80"> monthly</span>
      </div>
    </div>
  </div>
</section>

      {/* Top Keto Picks */}
      <section className="container-custom py-12">
        <h2 className="text-3xl font-bold text-primary-900 mb-6">
          Top Keto Picks This Week
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topPicks.map((item) => (
            <Link
              key={item.id}
              href={`/chains/${item.chainId}#${item.id}`}
              className="card hover:shadow-md transition-shadow duration-200 group"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors">
                  {item.name}
                </h3>
                <KetoRatingBadge rating={item.ketoRating} />
              </div>

              <p className="text-neutral-600 text-sm mb-4 line-clamp-2">
                {item.description}
              </p>

              <div className="flex items-center justify-between text-sm">
                <div className="space-y-1">
                  <div className="flex items-center space-x-3">
                    <span className="font-mono font-semibold text-primary-600">
                      {item.nutrition.netCarbs}g
                    </span>
                    <span className="text-neutral-500">net carbs</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="font-mono font-semibold text-neutral-700">
                      {item.nutrition.protein}g
                    </span>
                    <span className="text-neutral-500">protein</span>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-neutral-500 text-xs mb-1">
                    {chains.find((c) => c.id === item.chainId)?.name}
                  </div>
                  <div className="text-primary-600 font-medium">
                    {item.priceRange}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Browse by Chain */}
      <section className="container-custom py-12">
        <h2 className="text-3xl font-bold text-primary-900 mb-6">
          Browse by Chain
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {chains.map((chain) => (
            <Link
              key={chain.id}
              href={`/chains/${chain.slug}`}
              className="card text-center hover:shadow-md transition-shadow duration-200 group"
            >
              <div className="mb-3">
                {/* Logo placeholder - you'll add actual logos later */}
                <div className="w-16 h-16 mx-auto bg-neutral-100 rounded-full flex items-center justify-center text-2xl">
                  {chain.name.charAt(0)}
                </div>
              </div>

              <h3 className="font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors mb-1">
                {chain.name}
              </h3>

              <p className="text-sm text-neutral-600 mb-2">
                {chain.items.length} keto options
              </p>

              <p className="text-xs text-neutral-500">
                Best: {Math.min(...chain.items.map((i) => i.nutrition.netCarbs))}g net carbs
              </p>
            </Link>
          ))}
        </div>

        {/* Coming Soon Chains */}
        <div className="mt-6 p-6 bg-neutral-100 rounded-xl">
          <h3 className="font-semibold text-neutral-700 mb-2">Coming Soon</h3>
          <p className="text-sm text-neutral-600">
            KFC, Burger King, Nando's, Five Guys, Subway, Starbucks, and more...
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-50 py-12">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-bold text-primary-900 mb-4">
            New to Keto?
          </h2>
          <p className="text-neutral-700 mb-6 max-w-xl mx-auto">
            Learn the basics of keto eating and how to make smart choices at fast food restaurants.
          </p>
          <Link
            href="/guides/keto-basics"
            className="btn-primary inline-block"
          >
            Read Our Keto Guide
          </Link>
        </div>
      </section>
    </div>
  );
}
