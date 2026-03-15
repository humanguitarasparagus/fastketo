export default function GuidesPage() {
  return (
    <div className="container-custom py-12">
      <h1 className="text-4xl font-bold text-primary-900 mb-6">Keto Guides</h1>
      
      <div className="card bg-primary-50 mb-8">
        <h2 className="text-2xl font-semibold text-primary-900 mb-3">Coming Soon</h2>
        <p className="text-neutral-700">
          We're working on comprehensive guides to help you succeed with keto at fast food restaurants.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card opacity-60">
          <h3 className="font-bold text-lg mb-2">Keto Basics</h3>
          <p className="text-neutral-600 text-sm">Understanding ketosis and macros</p>
        </div>

        <div className="card opacity-60">
          <h3 className="font-bold text-lg mb-2">Eating Out on Keto</h3>
          <p className="text-neutral-600 text-sm">General tips for any restaurant</p>
        </div>

        <div className="card opacity-60">
          <h3 className="font-bold text-lg mb-2">Fast Food Hacks</h3>
          <p className="text-neutral-600 text-sm">Customization tricks and swaps</p>
        </div>

        <div className="card opacity-60">
          <h3 className="font-bold text-lg mb-2">Keto-Friendly Chains</h3>
          <p className="text-neutral-600 text-sm">Ranking all chains by keto-friendliness</p>
        </div>
      </div>
    </div>
  );
}
