import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Keto at Heathrow Airport: Terminal-by-Terminal Guide | FastKeto',
  description: 'Eating keto at Heathrow? Here\'s exactly what to order in every terminal — T2, T3, T4 and T5.',
}

export default function HeathrowGuide() {
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
          <div className="mb-2 flex items-center gap-2 text-sm">
            <Link href="/guides" className="text-primary-600 hover:underline">
              Guides
            </Link>
            <span className="text-neutral-400">/</span>
            <Link href="/guides/keto-airports" className="text-primary-600 hover:underline">
              Airports
            </Link>
            <span className="text-neutral-400">/</span>
            <span className="text-neutral-600">Heathrow</span>
          </div>
          <h1 className="text-4xl font-bold text-primary-900 mb-4">
            Keto at Heathrow Airport
          </h1>
          <p className="text-lg text-neutral-700 max-w-2xl">
            A practical terminal-by-terminal guide to eating keto at Heathrow — T2, T3, T4 and T5.
          </p>
          <p className="text-sm text-neutral-500 mt-3">Updated April 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="container-custom py-12">
        <div className="max-w-3xl">

          {/* Intro */}
          <p className="text-neutral-700 mb-6 text-lg leading-relaxed">
            Airport food has the same reputation as motorway services, and for similar reasons - expensive, rushed, and not designed with anyone's macros in mind. The difference is that airports, particularly larger ones, have more sit-down options and a wider range of chains than most service stations. If you know which outlets to head for and what to order, eating keto at Heathrow is genuinely manageable.
          </p>

    
          {/* T2 */}
          <h2 className="text-2xl font-bold text-primary-900 mt-10 mb-3">
            Terminal 2 - The Queen's Terminal
          </h2>
          <p className="text-neutral-700 mb-4">
            T2 is one of the better terminals for keto. Airside you have Leon, Yo! Sushi, Pret, Caffè Nero, Starbucks, and the Big Smoke Taphouse & Kitchen.
          </p>
          <div className="space-y-3 mb-6">
            <div className="card">
              <p className="text-neutral-700">
                <span className="font-bold text-neutral-900"><Link href="/chains/leon" className="text-primary-600 hover:underline">Leon</Link> -</span> the Chargrilled Chicken Mezze Box is one of the best keto options in any UK airport. Just 0.6g carbs and genuinely filling.
              </p>
            </div>
            <div className="card">
              <p className="text-neutral-700">
                <span className="font-bold text-neutral-900"><Link href="/chains/yosushi" className="text-primary-600 hover:underline">Yo! Sushi</Link> -</span> sashimi and edamame are genuinely excellent keto. Avoid anything with rice or tempura batter.
              </p>
            </div>
            <div className="card">
              <p className="text-neutral-700">
                <span className="font-bold text-neutral-900">Big Smoke Taphouse & Kitchen -</span> order any burger bunless. A good sit-down option if you have time before your flight.
              </p>
            </div>
            <div className="card">
              <p className="text-neutral-700">
                <span className="font-bold text-neutral-900"><Link href="/chains/pret" className="text-primary-600 hover:underline">Pret</Link> -</span> protein pots and black coffee for a quick grab.
              </p>
            </div>
            <div className="card">
              <p className="text-neutral-700">
                <span className="font-bold text-neutral-900">Caffè Nero / Starbucks -</span> black coffee, ask for pouring cream. See our <Link href="/chains/costa" className="text-primary-600 hover:underline">Costa guide</Link> for the full coffee ordering strategy - it applies across all coffee chains.
              </p>
            </div>
          </div>

          {/* T3 */}
          <h2 className="text-2xl font-bold text-primary-900 mt-10 mb-3">
            Terminal 3
          </h2>
          <p className="text-neutral-700 mb-4">
            T3 has a strong lineup for keto, anchored by Wagamama and Yo! Sushi airside, with one standout splurge option most people walk straight past.
          </p>
          <div className="space-y-3 mb-6">
            <div className="card">
              <p className="text-neutral-700">
                <span className="font-bold text-neutral-900">Caviar House & Prunier Seafood Bar -</span> oysters and seafood are about as keto as airport food gets. Expensive, but if you want to eat well before a long-haul flight this is the move.
              </p>
            </div>
            <div className="card">
              <p className="text-neutral-700">
                <span className="font-bold text-neutral-900"><Link href="/chains/wagamama" className="text-primary-600 hover:underline">Wagamama</Link> -</span> order grilled chicken or prawn dishes and ask for no rice or noodles. The Chilli Chicken is a solid option.
              </p>
            </div>
            <div className="card">
              <p className="text-neutral-700">
                <span className="font-bold text-neutral-900"><Link href="/chains/yosushi" className="text-primary-600 hover:underline">Yo! Sushi</Link> -</span> same approach as T2. Sashimi, edamame, miso soup.
              </p>
            </div>
            <div className="card">
              <p className="text-neutral-700">
                <span className="font-bold text-neutral-900">The Curator -</span> sit-down bar and restaurant, bunless burgers available.
              </p>
            </div>
            <div className="card">
              <p className="text-neutral-700">
                <span className="font-bold text-neutral-900"><Link href="/chains/pret" className="text-primary-600 hover:underline">Pret</Link> -</span> protein pots and black coffee.
              </p>
            </div>
          </div>

          {/* T4 */}
          <h2 className="text-2xl font-bold text-primary-900 mt-10 mb-3">
            Terminal 4
          </h2>
          <p className="text-neutral-700 mb-4">
            T4 is the thinnest terminal for keto options - but two outlets make it work, one of which most travellers overlook entirely.
          </p>
          <div className="space-y-3 mb-4">
            <div className="card">
              <p className="text-neutral-700">
                <span className="font-bold text-neutral-900">Comptoir Libanais -</span> the best-kept secret in T4. Middle Eastern mezze and grilled meats are naturally keto-aligned. Go for the grilled chicken or lamb, halloumi, and any of the vegetable sides. Avoid the flatbreads and rice.
              </p>
            </div>
            <div className="card">
              <p className="text-neutral-700">
                <span className="font-bold text-neutral-900"><Link href="/chains/wetherspoons" className="text-primary-600 hover:underline">Wetherspoons</Link> (Star Light) -</span> reliable fallback. Any burger bunless with a black coffee. Cheap and consistent.
              </p>
            </div>
            <div className="card">
              <p className="text-neutral-700">
                <span className="font-bold text-neutral-900"><Link href="/chains/pret" className="text-primary-600 hover:underline">Pret</Link> -</span> protein pots if you just need something quick.
              </p>
            </div>
            <div className="card">
              <p className="text-neutral-700">
                <span className="font-bold text-neutral-900"><Link href="/chains/costa" className="text-primary-600 hover:underline">Costa</Link> -</span> black coffee, ask for pouring cream.
              </p>
            </div>
          </div>
          <p className="text-neutral-600 text-sm italic mb-6">
            T4 is genuinely limited compared to other Heathrow terminals. If you know you're flying from T4, eating before you arrive or bringing something from home is worth considering.
          </p>

          {/* T5 */}
          <h2 className="text-2xl font-bold text-primary-900 mt-10 mb-3">
            Terminal 5
          </h2>
          <p className="text-neutral-700 mb-4">
            T5 is the best terminal at Heathrow for keto, and it's not particularly close. The combination of Itsu, Wagamama, Wetherspoons, and Gordon Ramsay's Street Burger gives you more genuinely good options than most UK airports manage in their entirety.
          </p>
          <div className="space-y-3 mb-6">
            <div className="card">
              <p className="text-neutral-700">
                <span className="font-bold text-neutral-900"><Link href="/chains/itsu" className="text-primary-600 hover:underline">Itsu</Link> -</span> the standout option. Sashimi, edamame, and miso soup are all excellent keto. The Salmon Sashimi is the top pick.
              </p>
            </div>
            <div className="card">
              <p className="text-neutral-700">
                <span className="font-bold text-neutral-900"><Link href="/chains/wagamama" className="text-primary-600 hover:underline">Wagamama</Link> -</span> grilled proteins, no rice or noodles.
              </p>
            </div>
            <div className="card">
              <p className="text-neutral-700">
                <span className="font-bold text-neutral-900">Gordon Ramsay Street Burger (Plane Food Market) -</span> order any burger bunless. More premium than Wetherspoons if you want to treat yourself before a long flight.
              </p>
            </div>
            <div className="card">
              <p className="text-neutral-700">
                <span className="font-bold text-neutral-900"><Link href="/chains/wetherspoons" className="text-primary-600 hover:underline">Wetherspoons</Link> (The Crown Rivers) -</span> budget bunless burger and black coffee. Consistent and cheap.
              </p>
            </div>
            <div className="card">
              <p className="text-neutral-700">
                <span className="font-bold text-neutral-900">Fortnum & Mason Bar -</span> oysters and champagne if you're celebrating or just want to eat well before a long flight. Similar logic to Caviar House in T3.
              </p>
            </div>
            <div className="card">
              <p className="text-neutral-700">
                <span className="font-bold text-neutral-900">Pret / Costa / Caffè Nero / Starbucks -</span> coffee and protein pots across the terminal. See our <Link href="/chains/pret" className="text-primary-600 hover:underline">Pret</Link> and <Link href="/chains/costa" className="text-primary-600 hover:underline">Costa</Link> guides for the full ordering strategy.
              </p>
            </div>
          </div>

          {/* Bottom line */}
          <h2 className="text-2xl font-bold text-primary-900 mt-10 mb-4">
            The bottom line
          </h2>
          <p className="text-neutral-700 mb-6">
            You can eat well on keto at Heathrow if you know where to look. T5 gives you the most options, T4 the fewest - but even T4 has Comptoir Libanais if you know to look for it. The pattern across all terminals is the same: find the Japanese option for sashimi, find the burger option and go bunless, find the coffee chain and ask for cream. Most Heathrow outlets list their menus online, so if you have time before you travel it's worth checking what's airside in your terminal.
          </p>

          {/* Back links */}
          <div className="mt-12 pt-8 border-t border-neutral-200 flex items-center gap-6">
            <Link href="/guides/keto-airports" className="text-primary-600 hover:underline">
              ← All airports
            </Link>
            <Link href="/guides" className="text-primary-600 hover:underline">
              ← All guides
            </Link>
          </div>

        </div>
      </section>
    </div>
  )
}