import { useState } from 'react';

export default function FilterSection({ onFilter }) {
  const [filters, setFilters] = useState({
    category: 'all',
    marketSize: 'all',
    investment: 'all',
    timeline: 'all',
    search: ''
  });

  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilter(newFilters);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
          <select
            value={filters.category}
            onChange={(e) => handleFilterChange('category', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
          >
            <option value="all">All Industries</option>
            <option value="fintech">Fintech</option>
            <option value="life-enhancement">Life Enhancement</option>
            <option value="novel-tech">Novel Technology</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Market Size</label>
          <select
            value={filters.marketSize}
            onChange={(e) => handleFilterChange('marketSize', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
          >
            <option value="all">All Sizes</option>
            <option value="50b+">$50B+ Market</option>
            <option value="100b+">$100B+ Market</option>
            <option value="200b+">$200B+ Market</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Investment Level</label>
          <select
            value={filters.investment}
            onChange={(e) => handleFilterChange('investment', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
          >
            <option value="all">All Levels</option>
            <option value="under-50k">Under $50K</option>
            <option value="50k-200k">$50K - $200K</option>
            <option value="200k+">$200K+</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Timeline</label>
          <select
            value={filters.timeline}
            onChange={(e) => handleFilterChange('timeline', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
          >
            <option value="all">All Timelines</option>
            <option value="6-12mo">6-12 months</option>
            <option value="12-18mo">12-18 months</option>
            <option value="18mo+">18+ months</option>
          </select>
        </div>
      </div>

      <div>
        <input
          type="text"
          placeholder="Search concepts by keyword, market, or technology..."
          value={filters.search}
          onChange={(e) => handleFilterChange('search', e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
        />
      </div>
    </div>
  );
}
