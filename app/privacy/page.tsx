export default function PrivacyPage() {
  return (
    <div className="container-custom py-12 max-w-3xl">
      <h1 className="text-4xl font-bold text-primary-900 mb-6">Privacy Policy</h1>
      
      <div className="prose">
        <p className="text-neutral-600 mb-6">Last updated: March 2026</p>

        <div className="card mb-6">
          <h2 className="text-xl font-semibold text-primary-900 mb-3">Data We Collect</h2>
          <p className="text-neutral-700">
            FastKeto UK is a simple informational website. We currently collect minimal data:
          </p>
          <ul className="text-neutral-700 mt-3 space-y-1">
            <li>• Basic analytics (page views, visitor location - via Google Analytics)</li>
            <li>• No personal information</li>
            <li>• No user accounts</li>
            <li>• No cookies beyond analytics</li>
          </ul>
        </div>

        <div className="card mb-6">
          <h2 className="text-xl font-semibold text-primary-900 mb-3">How We Use Data</h2>
          <p className="text-neutral-700">
            Analytics help us understand which chains and pages are most popular, so we can 
            prioritize adding new content.
          </p>
        </div>

        <div className="card mb-6">
          <h2 className="text-xl font-semibold text-primary-900 mb-3">Third Parties</h2>
          <p className="text-neutral-700 mb-3">We may use:</p>
          <ul className="text-neutral-700 space-y-1">
            <li>• Google Analytics for traffic analysis</li>
            <li>• Google AdSense for advertising (coming soon)</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="text-xl font-semibold text-primary-900 mb-3">Contact</h2>
          <p className="text-neutral-700">
            Questions about privacy? Email: [Your email here]
          </p>
        </div>
      </div>
    </div>
  );
}
