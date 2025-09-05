import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

export default function Dashboard() {
  const [loading, setLoading] = useState(true)
  const [message, setMessage] = useState('Initializing...')
  const router = useRouter()

  useEffect(() => {
    // Simple timeout to test if useEffect is working
    const timer = setTimeout(() => {
      setMessage('UseEffect is working. Checking token...')
      checkToken()
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const checkToken = () => {
    try {
      setMessage('Checking localStorage...')
      
      if (typeof window === 'undefined') {
        setMessage('Window not available')
        return
      }

      const token = localStorage.getItem('token')
      
      if (!token) {
        setMessage('No token found. Redirecting...')
        setTimeout(() => {
          router.push('/login')
        }, 2000)
        return
      }

      setMessage('Token found. Testing API...')
      testAPI(token)
      
    } catch (error) {
      setMessage(`Error in checkToken: ${error.message}`)
      setLoading(false)
    }
  }

  const testAPI = async (token) => {
    try {
      setMessage('Making API request...')
      
      const response = await fetch('/api/concepts', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })

      setMessage(`API responded with status: ${response.status}`)

      if (response.ok) {
        const data = await response.json()
        setMessage(`API success! Received ${Array.isArray(data) ? data.length : 'invalid'} concepts`)
        
        // Wait a bit then show success
        setTimeout(() => {
          setLoading(false)
        }, 2000)
        
      } else {
        const errorText = await response.text()
        setMessage(`API error (${response.status}): ${errorText}`)
        setLoading(false)
      }
      
    } catch (error) {
      setMessage(`Fetch error: ${error.message}`)
      setLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    router.push('/')
  }

  if (loading) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center',
        padding: '2rem'
      }}>
        <Head>
          <title>Dashboard - Loading</title>
        </Head>
        
        <div style={{ 
          background: 'white', 
          padding: '2rem', 
          borderRadius: '8px', 
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          maxWidth: '500px',
          width: '100%',
          textAlign: 'center'
        }}>
          <h2 style={{ marginBottom: '1rem', color: '#1a1a1a' }}>Loading Dashboard</h2>
          <div style={{ 
            padding: '1rem', 
            background: '#f8f9fa', 
            borderRadius: '4px', 
            marginBottom: '1rem',
            fontFamily: 'monospace',
            fontSize: '0.9rem'
          }}>
            {message}
          </div>
          <div style={{ 
            width: '100%', 
            height: '4px', 
            background: '#e5e7eb', 
            borderRadius: '2px',
            overflow: 'hidden'
          }}>
            <div style={{
              width: '30%',
              height: '100%',
              background: '#1a1a1a',
              animation: 'slide 2s infinite'
            }}></div>
          </div>
        </div>

        <style jsx>{`
          @keyframes slide {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(400%); }
          }
        `}</style>
      </div>
    )
  }

  return (
    <div>
      <Head>
        <title>Dashboard - Vorteca</title>
      </Head>

      <div style={{ minHeight: '100vh', padding: '2rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ 
            background: 'white', 
            padding: '2rem', 
            borderRadius: '8px', 
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            marginBottom: '2rem'
          }}>
            <h1 style={{ color: '#1a1a1a', marginBottom: '1rem' }}>Dashboard Loaded Successfully!</h1>
            <p style={{ color: '#666', marginBottom: '1rem' }}>
              The dashboard has loaded without errors. This means:
            </p>
            <ul style={{ color: '#666', marginBottom: '2rem', paddingLeft: '1.5rem' }}>
              <li>✅ React components are working</li>
              <li>✅ useEffect hook is functioning</li>
              <li>✅ localStorage access is working</li>
              <li>✅ API communication is established</li>
              <li>✅ Token authentication is successful</li>
            </ul>
            
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button 
                onClick={handleLogout}
                style={{
                  background: '#dc2626',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Logout
              </button>
              
              <button 
                onClick={() => window.location.reload()}
                style={{
                  background: '#1a1a1a',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Test Again
              </button>
            </div>
          </div>

          <div style={{ 
            background: '#f8f9fa', 
            padding: '1.5rem', 
            borderRadius: '8px',
            fontFamily: 'monospace',
            fontSize: '0.9rem'
          }}>
            <strong>Final Status:</strong> {message}
          </div>
        </div>
      </div>
    </div>
  )
}
