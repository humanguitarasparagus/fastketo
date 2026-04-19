'use client'

import Link from 'next/link'

const airports = [
  {
    name: 'Heathrow',
    code: 'LHR',
    slug: 'heathrow',
    live: true,
  },
  {
    name: 'Gatwick',
    code: 'LGW',
    slug: 'gatwick',
    live: false,
  },
  {
    name: 'Manchester',
    code: 'MAN',
    slug: 'manchester',
    live: false,
  },
]

export default function KetoAirportsPage() {
  return (
    <div>
        {/* Hero Image */}
      <div className="w-full h-64 sm:h-80 overflow-hidden">
        <img
          src="/images/airport-hero.png"
          alt="Keto options at UK airports"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Header */}
      <section className="bg-primary-50 py-12">
        <div className="container-custom">
          <div className="mb-2">
            <Link href="/guides" className="text-primary-600 hover:underline text-sm">
              ← Guides
            </Link>
          </div>
          <h1 className="text-4xl font-bold text-primary-900 mb-4">
            Keto at UK Airports
          </h1>
          <p className="text-lg text-neutral-700 max-w-2xl">
            Terminal-by-terminal guides to eating keto at UK airports. Select your airport below.
          </p>
          <p className="text-sm text-neutral-500 mt-3">Updated April 2026</p>
        </div>
      </section>

      {/* Airport grid */}
      <section className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl">
          {airports.map((airport) => (
            airport.live ? (
              <Link
                key={airport.slug}
                href={`/guides/keto-airports/${airport.slug}`}
                className="bg-primary-600 hover:bg-primary-700 transition-colors duration-200 rounded-xl p-8 text-center group"
              >
                <div className="text-white/70 text-sm font-medium mb-1">
                  {airport.code}
                </div>
                <div className="text-white text-2xl font-bold">
                  {airport.name}
                </div>
              </Link>
            ) : (
              <div
                key={airport.slug}
                className="bg-neutral-200 rounded-xl p-8 text-center cursor-not-allowed"
              >
                <div className="text-neutral-400 text-sm font-medium mb-1">
                  {airport.code}
                </div>
                <div className="text-neutral-400 text-2xl font-bold">
                  {airport.name}
                </div>
              </div>
            )
          ))}
        </div>
      </section>
    </div>
  )
}