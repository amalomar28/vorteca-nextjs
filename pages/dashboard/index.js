import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

export default function Dashboard() {
  const [user, setUser] = useState(null)
  const [concepts, setConcepts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const router = useRouter()

  useEffect(() => {
    initializeDashboard()
  }, [])

  const initializeDashboard = async () => {
    try {
      // Check if we're in browser environment
      if (typeof window === 'undefined') return

      const token = localStorage.getItem('token')
      if (!token) {
        router.push('/login')
        return
      }

      // Set user info (simplified approach)
      setUser({
        email: 'demo@vorteca.com',
        subscription: 'demo'
      })

      // Try to fetch concepts
      await fetchConcepts(token)
      
    } catch (error) {
      console.error('Dashboard initialization error:', error)
      setError('Failed to initialize dashboard')
      setLoading(false)
    }
  }

  const fetchConcepts = async (token) => {
    try {
      const response = await fetch('/api/concepts', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      
      if (response.ok) {
        const data = await response.json()
        if (Array.isArray(data)) {
          setConcepts(data)
        } else {
          setError('Invalid data format received')
        }
      } else {
        const errorData = await response.json()
        setError(`API Error: ${errorData.message || 'Failed to fetch concepts'}`)
        
        if (response.status === 401) {
          localStorage.removeItem('token')
          router.push('/login')
          return
        }
      }
    } catch (error) {
      console.error('Fetch error:', error)
      setError('Network error: Unable to fetch concepts')
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token')
    }
    router.push('/')
  }

  // Show loading state
  if (loading) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Loading Dashboard...</div>
        <div style={{ fontSize: '0.9rem', color: '#666' }}>Please wait while we load your concepts</div>
      </div>
    )
  }

  // Show error state
  if (error) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#dc2626' }}>Error</div>
        <div style={{ fontSize: '0.9rem', color: '#666', marginBottom: '2rem' }}>{error}</div>
        <button onClick={() => window.location.reload()} style={{ padding: '0.5rem 1rem', background: '#1a1a1a', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Retry
        </button>
      </div>
    )
  }

  // Show dashboard if no user (shouldn't happen, but safety check)
  if (!user) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div>Redirecting to login...</div>
      </div>
    )
  }

  const filteredConcepts = selectedCategory === 'all' 
    ? concepts 
    : concepts.filter(concept => concept.category === selectedCategory)

  return (
    <div>
      <Head>
        <title>Dashboard - Vorteca Business Concepts</title>
        <meta name="description" content="Access your business concept library" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header style={{ background: 'white', borderBottom: '1px solid #e5e7eb', padding: '1rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1a1a1a' }}>Vorteca Dashboard</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ color: '#666', fontSize: '0.875rem' }}>Welcome, {user.email}</span>
            <span style={{ background: '#1a1a1a', color: 'white', padding: '0.25rem 0.75rem', borderRadius: '12px', fontSize: '0.75rem', textTransform: 'capitalize' }}>
              {user.subscription}
            </span>
            <button onClick={handleLogout} style={{ color: '#dc2626', background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.875rem' }}>
              Logout
            </button>
          </div>
        </div>
      </header>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
        {/* Welcome Section */}
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '700', color: '#1a1a1a', marginBottom: '0.5rem' }}>
            Business Concept Library
          </h2>
          <p style={{ color: '#666', fontSize: '1.1rem' }}>
            Explore validated business opportunities with complete strategic frameworks ({concepts.length} concepts available)
          </p>
        </div>

        {/* Filter Tabs */}
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem', borderBottom: '1px solid #e5e7eb' }}>
          {[
            { id: 'all', label: 'All Concepts' },
            { id: 'fintech', label: 'Fintech' },
            { id: 'life-enhancement', label: 'Life Enhancement' },
            { id: 'novel-tech', label: 'Novel Technology' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              style={{
                padding: '0.75rem 1.5rem',
                border: 'none',
                background: selectedCategory === tab.id ? '#1a1a1a' : 'transparent',
                color: selectedCategory === tab.id ? 'white' : '#666',
                borderRadius: '6px 6px 0 0',
                cursor: 'pointer',
                fontWeight: selectedCategory === tab.id ? '600' : '400',
                fontSize: '0.875rem'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Concepts Grid */}
        {concepts.length > 0 ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '1.5rem' }}>
            {filteredConcepts.map(concept => (
              <div key={concept.id} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.5rem', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1a1a1a', marginBottom: '0.5rem' }}>
                      {concept.title}
                    </h3>
                    <span style={{ 
                      background: concept.category === 'fintech' ? '#dbeafe' : concept.category === 'life-enhancement' ? '#d1fae5' : '#fef3c7',
                      color: concept.category === 'fintech' ? '#1e40af' : concept.category === 'life-enhancement' ? '#065f46' : '#92400e',
                      padding: '0.25rem 0.75rem', 
                      borderRadius: '12px', 
                      fontSize: '0.75rem',
                      textTransform: 'capitalize'
                    }}>
                      {concept.category ? concept.category.replace('-', ' ') : 'Business Concept'}
                    </span>
                  </div>
                  <span style={{ color: '#666', fontSize: '0.875rem', fontWeight: '600' }}>
                    {concept.marketSize || 'TBD'}
                  </span>
                </div>

                <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                  {concept.description || 'Business concept description'}
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#666', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '0.25rem' }}>
                      Development Stage
                    </div>
                    <div style={{ fontSize: '0.875rem', fontWeight: '500', color: '#1a1a1a' }}>
                      {concept.stage || 'In Development'}
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#666', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '0.25rem' }}>
                      Risk Level
                    </div>
                    <div style={{ 
                      fontSize: '0.875rem', 
                      fontWeight: '500',
                      color: concept.riskLevel === 'Low' ? '#065f46' : concept.riskLevel === 'Medium' ? '#92400e' : '#dc2626'
                    }}>
                      {concept.riskLevel || 'Medium'}
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#666', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '0.25rem' }}>
                      Time to Market
                    </div>
                    <div style={{ fontSize: '0.875rem', fontWeight: '500', color: '#1a1a1a' }}>
                      {concept.timeToMarket || '6-12 months'}
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#666', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '0.25rem' }}>
                      Investment Required
                    </div>
                    <div style={{ fontSize: '0.875rem', fontWeight: '500', color: '#1a1a1a' }}>
                      {concept.investmentRequired || '$100K-$500K'}
                    </div>
                  </div>
                </div>

                <button style={{
                  width: '100%',
                  background: '#1a1a1a',
                  color: 'white',
                  padding: '0.75rem',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}>
                  View Complete Strategic Framework
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '3rem', color: '#666' }}>
            <p>No concepts available. Please check your subscription or contact support.</p>
          </div>
        )}

        {filteredConcepts.length === 0 && concepts.length > 0 && (
          <div style={{ textAlign: 'center', padding: '3rem', color: '#666' }}>
            <p>No concepts found in the "{selectedCategory}" category.</p>
          </div>
        )}
      </div>
    </div>
  )
}
