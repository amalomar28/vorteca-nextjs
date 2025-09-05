import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import DashboardLayout from '../../components/DashboardLayout';
import ConceptCard from '../../components/ConceptCard';
import FilterSection from '../../components/FilterSection';
import { verifySubscription } from '../../utils/auth';

export default function Dashboard() {
  const router = useRouter();
  const [concepts, setConcepts] = useState([]);
  const [filteredConcepts, setFilteredConcepts] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
    loadConcepts();
  }, []);

  const checkAuth = async () => {
    try {
      const userData = await verifySubscription();
      if (!userData) {
        router.push('/login');
        return;
      }
      setUser(userData);
    } catch (error) {
      console.error('Auth error:', error);
      router.push('/login');
    } finally {
      setLoading(false);
    }
  };

  const loadConcepts = async () => {
    try {
      const response = await fetch('/api/concepts');
      const data = await response.json();
      setConcepts(data);
      setFilteredConcepts(data);
    } catch (error) {
      console.error('Error loading concepts:', error);
    }
  };

  const handleFilter = (filters) => {
    let filtered = concepts;

    if (filters.category && filters.category !== 'all') {
      filtered = filtered.filter(concept => concept.category === filters.category);
    }

    if (filters.marketSize && filters.marketSize !== 'all') {
      filtered = filtered.filter(concept => {
        const size = parseInt(concept.marketSize);
        switch (filters.marketSize) {
          case '50b+': return size >= 50;
          case '100b+': return size >= 100;
          case '200b+': return size >= 200;
          default: return true;
        }
      });
    }

    if (filters.investment && filters.investment !== 'all') {
      filtered = filtered.filter(concept => concept.investmentLevel === filters.investment);
    }

    if (filters.timeline && filters.timeline !== 'all') {
      filtered = filtered.filter(concept => concept.timeline === filters.timeline);
    }

    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      filtered = filtered.filter(concept =>
        concept.title.toLowerCase().includes(searchTerm) ||
        concept.description.toLowerCase().includes(searchTerm) ||
        concept.tags.some(tag => tag.toLowerCase().includes(searchTerm))
      );
    }

    setFilteredConcepts(filtered);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading dashboard...</div>
      </div>
    );
  }

  return (
    <DashboardLayout user={user}>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Monthly Feature Section */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-700 text-white p-8 rounded-lg mb-8 text-center">
          <div className="inline-block bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            September 2025 Featured Concepts
          </div>
          <h2 className="text-3xl font-bold mb-4">3 New High-Potential Opportunities Added</h2>
          <p className="text-lg opacity-90">
            AI-powered micro-investment platform, Cross-border freelancer payments, and Smart building materials with IoT integration
          </p>
        </div>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Business Concept Library</h1>
          <p className="text-xl text-gray-600">
            Browse validated business opportunities across fintech, life enhancement, and novel technology sectors
          </p>
        </div>

        {/* Filters */}
        <FilterSection onFilter={handleFilter} />

        {/* Results Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="text-gray-600">
            Showing {filteredConcepts.length} of {concepts.length} concepts
          </div>
        </div>

        {/* Concepts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredConcepts.map((concept) => (
            <ConceptCard key={concept.id} concept={concept} />
          ))}
        </div>

        {filteredConcepts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg">No concepts match your current filters</div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}