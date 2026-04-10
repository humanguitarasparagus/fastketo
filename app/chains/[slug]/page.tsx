import { notFound } from 'next/navigation';
import { getChainBySlug } from '@/data';
import { KetoRating, MenuItem } from '@/lib/types';
import { KetoRatingBadge } from '@/components/KetoRatingBadge'

// Generate JSON-LD structured data for SEO
function generateChainSchema(chain: any, faqs: any[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      // Restaurant schema
      {
        '@type': 'Restaurant',
        name: chain.name,
        url: `https://fastketo.co/chains/${chain.slug}`,
        description: chain.description,
        servesCuisine: 'Fast Food',
        priceRange: '£',
      },
      // FAQPage schema
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map(faq => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  };
}


function MenuItemCard({ item }: { item: MenuItem }) {
  return (
    <div id={item.id} className="card scroll-mt-20">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-semibold text-neutral-900">{item.name}</h3>
        <KetoRatingBadge rating={item.ketoRating} />
      </div>

      <p className="text-neutral-700 text-sm mb-4">{item.description}</p>

      {/* Nutrition Grid */}
      <div className="bg-neutral-50 rounded-lg p-4 mb-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
          <div>
            <div className="text-neutral-500 text-xs mb-1">Net Carbs</div>
            <div className="font-mono font-bold text-primary-600 text-lg">
              {item.nutrition.netCarbs}g
            </div>
          </div>
          <div>
            <div className="text-neutral-500 text-xs mb-1">Protein</div>
            <div className="font-mono font-semibold text-neutral-900">
              {item.nutrition.protein}g
            </div>
          </div>
          <div>
            <div className="text-neutral-500 text-xs mb-1">Fat</div>
            <div className="font-mono font-semibold text-neutral-900">
              {item.nutrition.totalFat}g
            </div>
          </div>
          <div>
            <div className="text-neutral-500 text-xs mb-1">Calories</div>
            <div className="font-mono font-semibold text-neutral-900">
              {item.nutrition.calories}
            </div>
          </div>
        </div>
      </div>

      {/* Pro Tips */}
      {item.tips.length > 0 && (
        <div className="mb-4">
          <h4 className="font-semibold text-neutral-900 text-sm mb-2">Pro tips:</h4>
          <ul className="space-y-1">
            {item.tips.map((tip, index) => (
              <li key={index} className="text-neutral-700 text-sm flex items-start">
                <span className="text-primary-500 mr-2">•</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Metadata */}
      <div className="pt-4 border-t border-neutral-200 flex items-center justify-between text-xs text-neutral-500">
        <div className="space-x-4">
          <span>Availability: {item.availability}</span>
          <span>{item.priceRange}</span>
        </div>
        <div>
          Verified: {new Date(item.verifiedDate).toLocaleDateString('en-GB', { 
            month: 'short', 
            year: 'numeric' 
          })}
        </div>
      </div>
    </div>
  );
}
// Generate metadata for each chain page
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const chain = getChainBySlug(slug);

  if (!chain) {
    return {
      title: 'Chain Not Found',
      description: 'This keto fast food chain could not be found.',
    };
  }

  const lowestCarbs = Math.min(...chain.items.map((i) => i.nutrition.netCarbs));

  return {
    title: `Keto at ${chain.name} UK - Low Carb Guide | FastKeto`,
    description: `${chain.description.substring(0, 150)}... Best option: ${lowestCarbs}g net carbs. UK-specific nutrition data and ordering tips.`,
    keywords: [
      `${chain.name} keto`,
      `${chain.name} low carb`,
      `keto ${chain.name} uk`,
      'keto fast food uk',
      `${chain.name} carbs`,
    ],
    openGraph: {
      title: `Keto Options at ${chain.name} UK`,
      description: chain.description,
      url: `https://fastketo.co/chains/${chain.slug}`,
      siteName: 'FastKeto UK',
      locale: 'en_GB',
      type: 'article',
    },
  };
}
export default async function ChainPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const chain = getChainBySlug(slug);

  if (!chain) {
    notFound();
  }

  const topPickItems = chain.items.filter((item) =>
    chain.topPicks.includes(item.id)
  );

  // Use chain-specific FAQs if available, otherwise use generic ones
  const faqs = chain.faqs || [
    {
      question: `What can I eat at ${chain.name} on keto?`,
      answer: `The best keto options at ${chain.name} are bunless burgers, grilled chicken salads without dressing, and black coffee. Always skip buns, fries, and sugary sauces.`,
    },
    {
      question: `How many carbs in a ${topPickItems[0]?.name || 'burger'}?`,
      answer: topPickItems[0]
        ? `A ${topPickItems[0].name} contains approximately ${topPickItems[0].nutrition.netCarbs}g net carbs.`
        : `Check individual items above for specific carb counts.`,
    },
    {
      question: `Can I have ${chain.name} breakfast on keto?`,
      answer: `Yes - order breakfast items without buns or muffins. Sausage patties, eggs, and bacon are keto-friendly. Always ask for no bread to keep carbs low.`,
    },
    {
      question: `Does ${chain.name} do lettuce wraps?`,
      answer: `${chain.name} doesn't officially offer lettuce wraps, but you can ask for extra lettuce and make your own. Most locations are happy to accommodate bunless burger requests.`,
    },
  ];

    return (
    <div>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateChainSchema(chain, faqs)),
        }}
      />
      {/* Header */}
      <section className="bg-gradient-to-b from-primary-50 to-white py-12">
        <div className="container-custom">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <a href="/" className="hover:text-primary-600">Home</a>
<span className="mx-2">/</span>
<span className="text-neutral-900">{chain.name}</span>

            <div className="flex items-start justify-between mb-4">
              <h1 className="text-4xl font-bold text-primary-900">
                Keto Options at {chain.name}
              </h1>
              {/* Logo with brand color */}
              <div 
                className="w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold flex-shrink-0 ml-4 shadow-md"
                style={{ 
                  backgroundColor: chain.brandColor || '#f5f5f5',
                  color: chain.brandColor ? '#fff' : '#333'
                }}
              >
                {chain.name.charAt(0)}
              </div>
            </div>

            <p className="text-lg text-neutral-700 mb-4">{chain.description}</p>

            {/* Quick Summary */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-neutral-200">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                <div>
                  <div className="text-neutral-500 mb-1">Top picks:</div>
                  <div className="font-semibold text-neutral-900">
                    {chain.topPicks.length} items
                  </div>
                </div>
                <div>
                  <div className="text-neutral-500 mb-1">Net carbs range:</div>
                  <div className="font-semibold text-neutral-900">
                    {Math.min(...chain.items.map((i) => i.nutrition.netCarbs))}g - 
                    {Math.max(...chain.items.map((i) => i.nutrition.netCarbs))}g
                  </div>
                </div>
                <div>
                  <div className="text-neutral-500 mb-1">Keto-friendly:</div>
                  <div className="font-semibold text-neutral-900 capitalize">
                    {chain.ketoFriendly}
                  </div>
                </div>
                <div>
                  <div className="text-neutral-500 mb-1">Last updated:</div>
                  <div className="font-semibold text-neutral-900">
                    {new Date(chain.menuLastUpdated).toLocaleDateString('en-GB', {
                      month: 'short',
                      year: 'numeric',
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Picks */}
      <section className="container-custom py-12">
        <h2 className="text-2xl font-bold text-primary-900 mb-6">
          Top Keto Picks at {chain.name}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {topPickItems.map((item) => (
            <MenuItemCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* All Items */}
      <section className="container-custom py-12">
        <h2 className="text-2xl font-bold text-primary-900 mb-6">
          All Keto Options
        </h2>

        <div className="space-y-6">
          {chain.items
            .filter((item) => !chain.topPicks.includes(item.id))
            .map((item) => (
              <MenuItemCard key={item.id} item={item} />
            ))}
        </div>
      </section>

      {/* How to Order - CONDITIONAL */}
      {chain.howToOrder && (
        <section className="container-custom py-12">
          <div className="card bg-primary-50 border-primary-200">
            <h2 className="text-xl font-bold text-primary-900 mb-4">
              How to Order Keto at {chain.name}
            </h2>
            <p className="text-neutral-700 whitespace-pre-line">{chain.howToOrder}</p>
          </div>
        </section>
      )}

      {/* FAQs */}
      <section className="container-custom py-12">
        <h2 className="text-2xl font-bold text-primary-900 mb-6">
          FAQs: Keto at {chain.name}
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="card">
              <h3 className="font-semibold text-neutral-900 mb-2">{faq.question}</h3>
              <p className="text-neutral-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}