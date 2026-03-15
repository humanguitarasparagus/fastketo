export default function AboutPage() {
  return (
    <div className="container-custom py-12 max-w-3xl">
      <h1 className="text-4xl font-bold text-primary-900 mb-6">About FastKeto UK</h1>
      
      <div className="prose prose-lg">
        <p className="text-lg text-neutral-700 mb-6">
          FastKeto UK is your simple, reliable guide to eating keto at UK fast food chains.
        </p>

        <div className="card mb-6">
          <h2 className="text-2xl font-semibold text-primary-900 mb-3">Our Mission</h2>
          <p className="text-neutral-700">
            We believe staying in ketosis shouldn't mean missing out on convenient food options. 
            Our goal is to provide clear, verified nutrition information so you can make informed 
            choices at your favourite fast food restaurants.
          </p>
        </div>

        <div className="card mb-6">
          <h2 className="text-2xl font-semibold text-primary-900 mb-3">Our Promise</h2>
          <ul className="space-y-2 text-neutral-700">
            <li>✓ All nutrition data verified from official sources</li>
            <li>✓ Updated monthly to reflect menu changes</li>
            <li>✓ No sponsored content or paid placements</li>
            <li>✓ Clean, simple design - no clutter</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="text-2xl font-semibold text-primary-900 mb-3">Disclaimer</h2>
          <p className="text-neutral-600 text-sm">
            Nutrition information is sourced from official restaurant calculators and may vary by location. 
            Always verify with staff and check ingredients if you have allergies. We are not medical 
            professionals - consult your doctor before starting any diet.
          </p>
        </div>
      </div>
    </div>
  );
}
