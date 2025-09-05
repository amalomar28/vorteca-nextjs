export default function ConceptModal({ concept, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-screen overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{concept.title}</h2>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                {concept.category.replace('-', ' ').toUpperCase()}
              </span>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Overview */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Market Opportunity</h3>
            <p className="text-gray-600 mb-4">{concept.description}</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gray-50 p-4 rounded">
                <div className="font-semibold text-gray-900">${concept.marketSize}B</div>
                <div className="text-sm text-gray-600">Market Size</div>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <div className="font-semibold text-gray-900">{concept.timeline}</div>
                <div className="text-sm text-gray-600">Timeline</div>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <div className="font-semibold text-gray-900">{concept.investmentLevel}</div>
                <div className="text-sm text-gray-600">Investment</div>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <div className="font-semibold text-gray-900">{concept.difficulty}/5</div>
                <div className="text-sm text-gray-600">Difficulty</div>
              </div>
            </div>
          </div>

          {/* Target Customer */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Target Customer</h3>
            <p className="text-gray-600">{concept.targetCustomer}</p>
          </div>

          {/* Revenue Model */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Revenue Model</h3>
            <p className="text-gray-600">{concept.revenueModel}</p>
          </div>

          {/* Key Differentiator */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Key Differentiator</h3>
            <p className="text-gray-600">{concept.keyDifferentiator}</p>
          </div>

          {/* Implementation Considerations */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Implementation Considerations</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              {concept.implementationNotes.map((note, index) => (
                <li key={index}>{note}</li>
              ))}
            </ul>
          </div>

          {/* Package Information */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <h3 className="text-lg font-semibold mb-2">Complete Strategic Framework Available</h3>
            <p className="text-gray-600 mb-3">
              This preview shows the market opportunity. The full strategic package includes:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
              <li>Detailed competitive analysis and positioning strategy</li>
              <li>Financial projections and unit economics modeling</li>
              <li>Step-by-step implementation roadmap</li>
              <li>Technology architecture recommendations</li>
              <li>Risk assessment and mitigation strategies</li>
              <li>Go-to-market strategy and customer acquisition plan</li>
            </ul>
            <p className="text-sm text-gray-500 mb-4">
              Available in: {concept.packageTiers.join(', ')} packages
            </p>
            <div className="flex space-x-3">
              <a
                href="/#packages"
                className="bg-gray-900 text-white px-6 py-2 rounded font-medium hover:bg-gray-700 transition-colors"
              >
                View Packages
              </a>
              <button
                onClick={onClose}
                className="bg-gray-200 text-gray-700 px-6 py-2 rounded font-medium hover:bg-gray-300 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
