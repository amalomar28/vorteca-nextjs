import { useState } from 'react';
import ConceptModal from './ConceptModal';

export default function ConceptCard({ concept }) {
  const [showModal, setShowModal] = useState(false);

  const getCategoryColor = () => {
    switch (concept.category) {
      case 'fintech': return 'bg-blue-500';
      case 'life-enhancement': return 'bg-green-500';
      case 'novel-tech': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getBorderColor = () => {
    switch (concept.category) {
      case 'fintech': return 'border-l-blue-500';
      case 'life-enhancement': return 'border-l-green-500';
      case 'novel-tech': return 'border-l-red-500';
      default: return 'border-l-gray-500';
    }
  };

  return (
    <>
      <div className={`bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 ${getBorderColor()}`}>
        {/* Category Badge */}
        <div className="flex justify-between items-start mb-4">
          <span className={`${getCategoryColor()} text-white px-3 py-1 rounded-full text-xs font-semibold uppercase`}>
            {concept.category.replace('-', ' ')}
          </span>
        </div>

        {/* Title and Description */}
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{concept.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{concept.description}</p>

        {/* Metrics */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-gray-50 p-3 rounded text-center">
            <div className="font-semibold text-gray-900">${concept.marketSize}B</div>
            <div className="text-sm text-gray-600">Market Size</div>
          </div>
          <div className="bg-gray-50 p-3 rounded text-center">
            <div className="font-semibold text-gray-900">{concept.timeline}</div>
            <div className="text-sm text-gray-600">Timeline</div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {concept.tags.map((tag, index) => (
            <span key={index} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-lg text-xs font-medium">
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">
            Available in: {concept.packageTiers.join(', ')}
          </span>
          <button
            onClick={() => setShowModal(true)}
            className="bg-gray-900 hover:bg-gray-700 text-white px-4 py-2 rounded font-medium transition-colors"
          >
            View Details
          </button>
        </div>
      </div>

      {showModal && (
        <ConceptModal
          concept={concept}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}
