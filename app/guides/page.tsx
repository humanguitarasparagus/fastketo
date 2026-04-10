import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Keto Guides | FastKeto UK',
  description: 'Guides to eating keto in the UK - road trips, airports and more.',
}

export default function GuidesPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-primary-50 py-12">
        <div className="container-custom">
          <h1 className="text-4xl font-bold text-primary-900 mb-4">Keto Guides</h1>
          <p className="text-lg text-neutral-700 max-w-2xl">
            Guides to eating keto in the UK - road trips, airports and more.
          </p>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Live guide */}
          <Link
            href="/guides/keto-motorway-services"
            className="card hover:shadow-md transition-shadow duration-200 group overflow-hidden p-0"
          >
            <div className="h-48 overflow-hidden">
              <img
                src="/images/servicestation-hero.png"
                alt="Keto at UK motorway services"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <div className="text-xs font-medium text-primary-600 mb-2 uppercase tracking-wide">
                Travel
              </div>
              <h2 className="text-xl font-bold text-neutral-900 group-hover:text-primary-600 transition-colors mb-2">
                Keto at UK Motorway Services
              </h2>
              <p className="text-neutral-600 text-sm">
                What to order at Moto, Welcome Break, Roadchef and Extra - including a quick-reference operator ranking for when you need to decide fast.
              </p>
              <p className="text-primary-600 text-sm font-medium mt-4">
                Read guide →
              </p>
            </div>
          </Link>

          {/* Coming soon placeholders */}
          <div className="card opacity-50 cursor-not-allowed p-0 overflow-hidden">
            <div className="h-48 bg-neutral-100 flex items-center justify-center">
              <span className="text-neutral-400 text-sm font-medium">Coming soon</span>
            </div>
            <div className="p-6">
              <div className="text-xs font-medium text-neutral-400 mb-2 uppercase tracking-wide">
                Travel
              </div>
              <h2 className="text-xl font-bold text-neutral-400 mb-2">
                Keto at UK Airports
              </h2>
              <p className="text-neutral-400 text-sm">
                Heathrow, Gatwick, Manchester and more — what to eat before your flight.
              </p>
            </div>
          </div>

          <div className="card opacity-50 cursor-not-allowed p-0 overflow-hidden">
            <div className="h-48 bg-neutral-100 flex items-center justify-center">
              <span className="text-neutral-400 text-sm font-medium">Coming soon</span>
            </div>
            <div className="p-6">
              <div className="text-xs font-medium text-neutral-400 mb-2 uppercase tracking-wide">
                Travel
              </div>
              <h2 className="text-xl font-bold text-neutral-400 mb-2">
                Keto Road Trip UK
              </h2>
              <p className="text-neutral-400 text-sm">
                London to Edinburgh, M6 corridor and more — planning a keto-friendly long journey.
              </p>
            </div>
          </div>

          <div className="card opacity-50 cursor-not-allowed p-0 overflow-hidden">
            <div className="h-48 bg-neutral-100 flex items-center justify-center">
              <span className="text-neutral-400 text-sm font-medium">Coming soon</span>
            </div>
            <div className="p-6">
              <div className="text-xs font-medium text-neutral-400 mb-2 uppercase tracking-wide">
                Advice
              </div>
              <h2 className="text-xl font-bold text-neutral-400 mb-2">
                Eating Out on Keto in the UK
              </h2>
              <p className="text-neutral-400 text-sm">
                General strategies for any restaurant, any occasion.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}