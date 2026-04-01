'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { chains, getTopPicks } from '@/data'
import { KetoRatingBadge } from '@/components/KetoRatingBadge'

// Generate JSON-LD structured data for homepage
function generateHomeSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'FastKeto UK',
    url: 'https://fastketo.co',
    description: 'The definitive UK guide to keto-friendly fast food. 20 major chains with exact nutrition data, ordering tips, and UK-specific advice.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://fastketo.co/chains?search={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };
}

// Search Bar Component with Autocomplete
function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)

  const filteredChains = searchTerm.length > 0
    ? chains.filter(chain =>
        chain.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : []

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
    setIsOpen(true)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && filteredChains.length > 0) {
      window.location.href = `/chains/${filteredChains[0].slug}`
    }
    if (e.key === 'Escape') {
      setIsOpen(false)
    }
  }

  return (
    <div className="max-w-md mx-auto mb-8" ref={searchRef}>
      <div className="relative">
        <input
          type="text"
          placeholder="Search chains... (e.g. McDonald's, KFC)"
          value={searchTerm}
          onChange={handleSearch}
          onKeyDown={handleKeyDown}
          className="w-full px-4 py-3 rounded-lg border border-white/30 bg-white/95 backdrop-blur focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
        />

        <div className="absolute right-3 top-3 text-neutral-400">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        {isOpen && filteredChains.length > 0 && (
          <div className="absolute z-50 w-full mt-2 bg-white rounded-lg shadow-lg border border-neutral-200 max-h-96 overflow-y-auto">
            {filteredChains.map((chain) => (
              <a
                key={chain.id}
                href={`/chains/${chain.slug}`}
                className="block px-4 py-3 hover:bg-neutral-50 border-b border-neutral-100 last:border-0 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-neutral-900">{chain.name}</div>
                    <div className="text-sm text-neutral-500 line-clamp-1">{chain.description.substring(0, 80)}...</div>
                  </div>
                  <div className={`px-2 py-1 rounded text-xs font-medium ${
                    chain.ketoFriendly === 'excellent' ? 'bg-green-100 text-green-800' :
                    chain.ketoFriendly === 'good' ? 'bg-blue-100 text-blue-800' :
                    chain.ketoFriendly === 'moderate' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {chain.ketoFriendly}
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}

        {isOpen && searchTerm.length > 0 && filteredChains.length === 0 && (
          <div className="absolute z-50 w-full mt-2 bg-white rounded-lg shadow-lg border border-neutral-200 px-4 py-6 text-center text-neutral-500">
            No chains found for "{searchTerm}"
          </div>
        )}
      </div>
    </div>
  )
}

export default function Home() {
  const topPicks = getTopPicks(6)
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredChains = activeFilter === 'all'
    ? chains
    : chains.filter(chain => chain.chainType === activeFilter)

  return (
    <div>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateHomeSchema()),
        }}
      />

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-bg.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/65 via-neutral-900/45 to-neutral-900/65"></div>
        </div>

        <div className="container-custom text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Keto Fast Food Made Simple
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Discover exactly what to order at your favourite UK fast food chains
            while staying in ketosis. No guesswork, just carb counts.
          </p>

          <SearchBar />

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
          {topPicks.map((item) => {
            const chain = chains.find((c) => c.id === item.chainId)
            return (
              <Link
                key={item.id}
                href={`/chains/${item.chainId}#${item.id}`}
                className="card hover:shadow-md transition-shadow duration-200 group"
              >
                {/* Chain identifier at the top */}
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                    style={{
                      backgroundColor: chain?.brandColor || '#f5f5f5',
                      color: chain?.brandColor ? '#fff' : '#333'
                    }}
                  >
                    {chain?.name.charAt(0)}
                  </div>
                  <span className="font-bold text-neutral-900 text-sm">
                    {chain?.name}
                  </span>
                </div>

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
                  <div className="text-primary-600 font-medium text-sm">
                    {item.priceRange}
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Browse by Chain */}
      <section className="container-custom py-12">
        <h2 className="text-3xl font-bold text-primary-900 mb-6">
          Browse by Chain
        </h2>

        {/* Category Filter Badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          {[
            { label: 'All', value: 'all' },
            { label: 'Fast Food', value: 'fast-food' },
            { label: 'Pub Chains', value: 'pub-chains' },
            { label: 'Cafés', value: 'cafes' },
            { label: 'Casual Dining', value: 'casual-dining' },
            { label: 'Sushi', value: 'sushi' },
          ].map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveFilter(cat.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                activeFilter === cat.value
                  ? 'bg-primary-600 text-white'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredChains.map((chain) => (
            <Link
              key={chain.id}
              href={`/chains/${chain.slug}`}
              className="card text-center hover:shadow-md transition-shadow duration-200 group"
            >
              <div className="mb-3">
                <div
                  className="w-16 h-16 mx-auto rounded-full flex items-center justify-center text-2xl font-bold shadow-sm"
                  style={{
                    backgroundColor: chain.brandColor || '#f5f5f5',
                    color: chain.brandColor ? '#fff' : '#333'
                  }}
                >
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
            More UK chains coming soon...
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
  )
}