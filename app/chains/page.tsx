import Link from 'next/link';
import { chains } from '@/data';

export default function ChainsPage() {
  return (
    <div className="container-custom py-12">
      <h1 className="text-4xl font-bold text-primary-900 mb-6">All Chains</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {chains.map((chain) => (
          <Link
            key={chain.id}
            href={`/chains/${chain.slug}`}
            className="card hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                {chain.name.charAt(0)}
              </div>
              <div>
                <h2 className="font-bold text-lg text-neutral-900">{chain.name}</h2>
                <p className="text-sm text-neutral-600">{chain.items.length} keto options</p>
              </div>
            </div>
            
            <p className="text-neutral-700 text-sm mb-3">{chain.description}</p>
            
            <div className="text-xs text-neutral-500">
              Best option: {Math.min(...chain.items.map(i => i.nutrition.netCarbs))}g net carbs
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
