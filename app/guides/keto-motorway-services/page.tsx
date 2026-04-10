import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Keto at UK Motorway Services: What to Order | FastKeto',
  description: 'The complete guide to eating keto at UK motorway services. Covers Moto, Welcome Break, Roadchef and Extra - what to order at each operator and which chains to look for.',
}

export default function MotorwayServicesGuide() {
  return (
    <div>
 {/* Hero Image */}
      <div className="w-full h-64 sm:h-80 overflow-hidden">
        <img
          src="/images/servicestation-hero.png"
          alt="UK motorway service station keto options"
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
            Keto at UK Motorway Services: What to Order
          </h1>
          <p className="text-lg text-neutral-700 max-w-2xl">
            A practical guide to eating keto at Moto, Welcome Break, Roadchef and Extra - including a quick-reference operator ranking for when you need to decide fast.
          </p>
          <p className="text-sm text-neutral-500 mt-3">Updated April 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="container-custom py-12">
        <div className="max-w-3xl">

          {/* Intro */}
          <p className="text-neutral-700 mb-6 text-lg leading-relaxed">
            Motorway services have a bad reputation, and a lot of it is deserved. The food is expensive, the queues are long, and the default options are not designed with anyone's macros in mind. But if you know what you're looking for, most UK service stations have at least two or three genuinely solid keto options. This guide covers all four major operators and tells you exactly what to order at each one.
          </p>

          {/* If you only have seconds */}
          <h2 className="text-2xl font-bold text-primary-900 mt-10 mb-4">
            If you only have seconds to decide
          </h2>
          <p className="text-neutral-700 mb-4">
            Spotting the operator sign as you approach gives you just enough time to know your best move before you pull in.
          </p>
          <div className="space-y-4 mb-8">
            <div className="card">
              <p className="text-neutral-700">
                <span className="font-bold text-neutral-900">If you see Moto,</span> head for Costa first, then Burger King or KFC if it's a larger site. Moto is the most consistent operator for keto - Costa at every location, Burger King at almost all of them.
              </p>
            </div>
            <div className="card">
              <p className="text-neutral-700">
                <span className="font-bold text-neutral-900">If you see Welcome Break,</span> go straight to Starbucks or KFC. Welcome Break has Starbucks at most sites, often in a separate drive-through, and KFC at around 24 locations. Burger King fills the gap where KFC isn't available.
              </p>
            </div>
            <div className="card">
              <p className="text-neutral-700">
                <span className="font-bold text-neutral-900">If you see Roadchef,</span> McDonald's is your anchor. They have it at most locations, and a bunless Double Quarter Pounder with black coffee is one of the better motorway keto meals. Check for Leon too - Roadchef is expanding it across more sites and it's often quieter than the main food court.
              </p>
            </div>
            <div className="card">
              <p className="text-neutral-700">
                <span className="font-bold text-neutral-900">If you see Extra,</span> you're in luck. Extra runs some of the best-stocked sites on the network. Cobham on the M25 has McDonald's, KFC, Greggs, Starbucks, Pret, Leon, and Nando's. If you can wait for an Extra site, it's usually worth it.
              </p>
            </div>
          </div>

          {/* Quick reference table */}
          <h2 className="text-2xl font-bold text-primary-900 mt-10 mb-4">
            Quick reference: operators ranked for keto
          </h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary-50">
                  <th className="text-left p-3 border border-neutral-200 font-semibold text-neutral-900">Operator</th>
                  <th className="text-left p-3 border border-neutral-200 font-semibold text-neutral-900">Sites</th>
                  <th className="text-left p-3 border border-neutral-200 font-semibold text-neutral-900">Best keto option</th>
                  <th className="text-left p-3 border border-neutral-200 font-semibold text-neutral-900">Key chains</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-green-50">
                  <td className="p-3 border border-neutral-200 font-semibold">Extra</td>
                  <td className="p-3 border border-neutral-200">Varies</td>
                  <td className="p-3 border border-neutral-200">Most choice, best-stocked sites</td>
                  <td className="p-3 border border-neutral-200">McDonald's, KFC, Leon, Pret, Nando's, Starbucks</td>
                </tr>
                <tr>
                  <td className="p-3 border border-neutral-200 font-semibold">Moto</td>
                  <td className="p-3 border border-neutral-200">~70</td>
                  <td className="p-3 border border-neutral-200">Costa + Burger King or KFC</td>
                  <td className="p-3 border border-neutral-200">Costa, Burger King, KFC (select), Greggs, Pret, M&S Food</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="p-3 border border-neutral-200 font-semibold">Roadchef</td>
                  <td className="p-3 border border-neutral-200">31</td>
                  <td className="p-3 border border-neutral-200">McDonald's + Leon</td>
                  <td className="p-3 border border-neutral-200">McDonald's, Costa, Leon, Pret (some sites)</td>
                </tr>
                <tr>
                  <td className="p-3 border border-neutral-200 font-semibold">Welcome Break</td>
                  <td className="p-3 border border-neutral-200">61</td>
                  <td className="p-3 border border-neutral-200">Starbucks + KFC</td>
                  <td className="p-3 border border-neutral-200">Starbucks, KFC, Burger King, Subway, Waitrose</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Best bets by chain */}
          <h2 className="text-2xl font-bold text-primary-900 mt-10 mb-4">
            Your best bets, by chain
          </h2>

          <div className="space-y-6 mb-8">
            <div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2">Costa</h3>
              <p className="text-neutral-700">
                Your most reliable option across all operators. Order any Americano or espresso drink and ask for pouring cream instead of milk - Costa stocks it for porridge and most staff will add it without any fuss. The only sugar-free syrup is vanilla. For food, the Egg Protein Pot is the most useful grab-and-go option at around 2.5g carbs.
              </p>
              <p className="mt-2">
                <Link href="/chains/costa" className="text-primary-600 hover:underline text-sm">
                  Full Costa keto guide →
                </Link>
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2">KFC</h3>
              <p className="text-neutral-700">
                Wings are the standout fast food option at services. Minimal coating, high protein, and a solid snack if you specify your sauce carefully. Peri-Peri is the call.
              </p>
              <p className="mt-2">
                <Link href="/chains/kfc" className="text-primary-600 hover:underline text-sm">
                  Full KFC keto guide →
                </Link>
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2">Burger King</h3>
              <p className="text-neutral-700">
                Works well when KFC isn't available. Any beef patty with cheese, mustard instead of ketchup, no bun. Quick and consistent across sites.
              </p>
              <p className="mt-2">
                <Link href="/chains/burgerking" className="text-primary-600 hover:underline text-sm">
                  Full Burger King keto guide →
                </Link>
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2">Pret</h3>
              <p className="text-neutral-700">
                Worth seeking out if your services has one. The protein pots sit at around 3-5g net carbs, the coffee is good, and the grab-and-go format suits a quick motorway stop.
              </p>
              <p className="mt-2">
                <Link href="/chains/pret" className="text-primary-600 hover:underline text-sm">
                  Full Pret keto guide →
                </Link>
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2">Subway</h3>
              <p className="text-neutral-700">
                The move at Welcome Break is to order as a salad. Any filling in a bowl, mayo or mustard, and you have a decent meal considerably cheaper than most other options at services.
              </p>
              <p className="mt-2">
                <Link href="/chains/subway" className="text-primary-600 hover:underline text-sm">
                  Full Subway keto guide →
                </Link>
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2">Leon</h3>
              <p className="text-neutral-700">
                One of the better-kept secrets on the motorway network. The Chargrilled Chicken Mezze Box is just 0.6g carbs, and because Leon sits slightly apart from the main food court rush at most Roadchef sites, the queues are often shorter than at McDonald's.
              </p>
              <p className="mt-2">
                <Link href="/chains/leon" className="text-primary-600 hover:underline text-sm">
                  Full Leon keto guide →
                </Link>
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2">McDonald's</h3>
              <p className="text-neutral-700">
                Reliable at Roadchef if you order right. The Double Quarter Pounder without the bun gives you around 49g protein and 5g net carbs, which is hard to beat for a fast motorway stop.
              </p>
              <p className="mt-2">
                <Link href="/chains/mcdonalds" className="text-primary-600 hover:underline text-sm">
                  Full McDonald's keto guide →
                </Link>
              </p>
            </div>
          </div>

          {/* M&S angle */}
          <h2 className="text-2xl font-bold text-primary-900 mt-10 mb-4">
            The M&S and Waitrose angle
          </h2>
          <p className="text-neutral-700 mb-6">
            M&S Food at Moto sites is worth a separate mention. The stores carry cooked chicken pieces, boiled eggs, cheese portions, and charcuterie-style snacks that don't appear on any fast food menu. It costs more, but for a long journey where you want to eat in the car rather than queue at a counter, picking up a few items at your first Moto stop is a genuinely good strategy.
          </p>
          <p className="text-neutral-700 mb-6">
            The Waitrose deli counter at Welcome Break sites works the same way - cooked proteins, eggs, and cheese portions that travel well and don't require any ordering conversation.
          </p>

          {/* Emergency kit */}
          <h2 className="text-2xl font-bold text-primary-900 mt-10 mb-4">
            The emergency kit
          </h2>
          <p className="text-neutral-700 mb-6">
            If you're doing a long motorway journey and want certainty regardless of which services you hit, it's worth packing a small bag before you leave. Hard boiled eggs, cheese portions, cooked chicken, a handful of nuts. Motorway food is improving but it's still unpredictable - on a quiet Wednesday at a smaller Roadchef, the Leon might be closed and the Pret might not exist yet. Having something in the car means you're never stuck.
          </p>

          {/* Bottom line */}
          <h2 className="text-2xl font-bold text-primary-900 mt-10 mb-4">
            The bottom line
          </h2>
          <p className="text-neutral-700 mb-6">
            You can eat well on keto at UK motorway services. It takes a bit of forward planning and knowing which operator you're pulling into, but the options are there. Costa or Starbucks for coffee, wings or a bunless burger for a quick stop, Leon or M&S if you want something less processed. Most operators list their brands online by location, so if you're planning a long journey, it's worth checking your stops in advance.
          </p>

          {/* Back link */}
          <div className="mt-12 pt-8 border-t border-neutral-200">
            <Link href="/guides" className="text-primary-600 hover:underline">
              ← Back to Guides
            </Link>
          </div>

        </div>
      </section>
    </div>
  )
}