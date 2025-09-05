import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  const handlePackageClick = (packageName) => {
    alert(`Thank you for your interest in the ${packageName} package! Our strategic team will contact you within 24 hours to discuss your entrepreneurial vision and begin the NDA process.`);
  };

  const handleConceptClick = () => {
    alert('Full concept details available exclusively through our strategic packages. Choose your package level to access our complete library of validated business opportunities.');
  };

  return (
    <>
      <Head>
        <title>Vorteca - Strategic Business Concept Development</title>
        <meta name="description" content="Transform creative business vision into comprehensive, market-ready opportunity packages. Perfect for entrepreneurs with capital seeking validated, executable concepts." />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet" />
      </Head>

      <div>
        {/* Header */}
        <header style={{ background: 'rgba(255, 255, 255, 0.98)', backdropFilter: 'blur(10px)', color: '#1a1a1a', padding: '1.2rem 0', position: 'sticky', top: 0, zIndex: 100, boxShadow: '0 1px 20px rgba(0, 0, 0, 0.08)', borderBottom: '1px solid #f0f0f0' }}>
          <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
            <Link href="/" style={{ fontSize: '2rem', fontWeight: '700', display: 'flex', alignItems: 'center', color: '#1a1a1a', textDecoration: 'none', letterSpacing: '-0.02em' }}>
              <i className="fas fa-cube" style={{ marginRight: '12px', color: '#1a1a1a', fontSize: '2.2rem' }}></i>
              Vorteca
            </Link>
            <ul style={{ display: 'flex', listStyle: 'none', gap: '35px', margin: 0, padding: 0 }}>
              <li><Link href="#packages" style={{ color: '#1a1a1a', textDecoration: 'none', fontWeight: '500', padding: '8px 0', fontSize: '0.95rem' }}>Packages</Link></li>
              <li><Link href="#process" style={{ color: '#1a1a1a', textDecoration: 'none', fontWeight: '500', padding: '8px 0', fontSize: '0.95rem' }}>Process</Link></li>
              <li><Link href="#about" style={{ color: '#1a1a1a', textDecoration: 'none', fontWeight: '500', padding: '8px 0', fontSize: '0.95rem' }}>About</Link></li>
              <li><Link href="#contact" style={{ color: '#1a1a1a', textDecoration: 'none', fontWeight: '500', padding: '8px 0', fontSize: '0.95rem' }}>Contact</Link></li>
              <li><Link href="/login" style={{ color: '#1a1a1a', textDecoration: 'none', fontWeight: '500', padding: '8px 0', fontSize: '0.95rem' }}>Dashboard Login</Link></li>
            </ul>
            <Link href="#packages" style={{ background: '#1a1a1a', color: 'white', padding: '12px 28px', border: 'none', borderRadius: '6px', textDecoration: 'none', fontWeight: '600', fontSize: '0.95rem' }}>Get Started</Link>
          </nav>
        </header>

        {/* Hero Section */}
        <section style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)', color: 'white', padding: '120px 0 100px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'linear-gradient(45deg, transparent 49%, rgba(255,255,255,0.03) 50%, transparent 51%), linear-gradient(-45deg, transparent 49%, rgba(255,255,255,0.03) 50%, transparent 51%)', backgroundSize: '20px 20px' }}></div>
          <div style={{ position: 'relative', zIndex: 2, maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
            <h1 style={{ fontSize: '4rem', marginBottom: '24px', fontWeight: '800', letterSpacing: '-0.02em', lineHeight: '1.1' }}>Strategic Business Concepts</h1>
            <p style={{ fontSize: '1.4rem', marginBottom: '20px', opacity: '0.9', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto', lineHeight: '1.5' }}>We transform creative business vision into comprehensive, market-ready opportunity packages. Perfect for entrepreneurs with capital seeking validated, executable concepts.</p>
            
            <div style={{ background: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)', padding: '16px 24px', borderRadius: '8px', margin: '30px auto', maxWidth: '500px', backdropFilter: 'blur(10px)' }}>
              <p style={{ fontSize: '1rem', margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <i className="fas fa-shield-alt" style={{ color: '#4ade80' }}></i>
                <strong>Full NDA Protection & Complete Confidentiality Guaranteed</strong>
              </p>
            </div>
            
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '40px' }}>
              <Link href="#packages" style={{ background: 'white', color: '#1a1a1a', padding: '16px 40px', border: 'none', borderRadius: '8px', fontSize: '1.1rem', textDecoration: 'none', display: 'inline-block', fontWeight: '600' }}>Explore Concepts</Link>
              <Link href="#process" style={{ background: 'transparent', color: 'white', padding: '16px 40px', border: '2px solid rgba(255, 255, 255, 0.4)', borderRadius: '8px', fontSize: '1.1rem', textDecoration: 'none', display: 'inline-block', fontWeight: '500' }}>How It Works</Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section style={{ padding: '80px 0', background: '#f8f9fa' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '50px', textAlign: 'center' }}>
              <div style={{ padding: '20px' }}>
                <span style={{ fontSize: '3.5rem', fontWeight: '800', color: '#1a1a1a', display: 'block', marginBottom: '8px' }}>200+</span>
                <div style={{ color: '#666', fontSize: '1.1rem', fontWeight: '500' }}>Business Concepts Crafted</div>
              </div>
              <div style={{ padding: '20px' }}>
                <span style={{ fontSize: '3.5rem', fontWeight: '800', color: '#1a1a1a', display: 'block', marginBottom: '8px' }}>92%</span>
                <div style={{ color: '#666', fontSize: '1.1rem', fontWeight: '500' }}>Client Launch Success Rate</div>
              </div>
              <div style={{ padding: '20px' }}>
                <span style={{ fontSize: '3.5rem', fontWeight: '800', color: '#1a1a1a', display: 'block', marginBottom: '8px' }}>$4.1M</span>
                <div style={{ color: '#666', fontSize: '1.1rem', fontWeight: '500' }}>Revenue Generated by Clients</div>
              </div>
              <div style={{ padding: '20px' }}>
                <span style={{ fontSize: '3.5rem', fontWeight: '800', color: '#1a1a1a', display: 'block', marginBottom: '8px' }}>18</span>
                <div style={{ color: '#666', fontSize: '1.1rem', fontWeight: '500' }}>Industries Mastered</div>
              </div>
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section id="packages" style={{ padding: '100px 0', background: '#f8f9fa' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
            <div style={{ textAlign: 'center', marginBottom: '70px' }}>
              <h2 style={{ fontSize: '2.8rem', color: '#1a1a1a', marginBottom: '20px', fontWeight: '700', letterSpacing: '-0.02em' }}>Strategic Concept Access</h2>
              <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>Choose your engagement level - from monthly insights to complete strategic business blueprints with full NDA protection.</p>
            </div>
            
            {/* Subscription Option */}
            <div style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)', color: 'white', padding: '50px 0', borderRadius: '20px', marginBottom: '50px' }}>
              <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <h3 style={{ fontSize: '2rem', marginBottom: '15px' }}>New: Monthly Strategy Subscription</h3>
                <p style={{ fontSize: '1.1rem', opacity: '0.9' }}>Access market intelligence, trend reports, and concept seeds without full strategic development</p>
              </div>
              
              <div style={{ maxWidth: '800px', margin: '0 auto', background: 'rgba(255, 255, 255, 0.1)', padding: '40px', borderRadius: '15px', backdropFilter: 'blur(10px)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
                  <div>
                    <h4 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>Strategy Insights Monthly</h4>
                    <p style={{ opacity: '0.9', marginBottom: '15px' }}>Perfect for aspiring entrepreneurs who want market intelligence and business idea inspiration</p>
                    <ul style={{ listStyle: 'none', fontSize: '0.9rem', padding: 0 }}>
                      <li style={{ marginBottom: '5px' }}>✓ Monthly industry trend reports</li>
                      <li style={{ marginBottom: '5px' }}>✓ Business concept "seeds" and market opportunities</li>
                      <li style={{ marginBottom: '5px' }}>✓ Strategic framework templates</li>
                      <li style={{ marginBottom: '5px' }}>✓ Access to monthly strategy webinars</li>
                    </ul>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '5px' }}>$47<span style={{ fontSize: '1rem', opacity: '0.8' }}>/month</span></div>
                    <Link href="/login" style={{ background: 'white', color: '#1a1a1a', padding: '12px 24px', border: 'none', borderRadius: '8px', fontWeight: '600', textDecoration: 'none', display: 'inline-block' }}>Start Subscription</Link>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px', marginTop: '60px' }}>
              <div style={{ background: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)', border: '2px solid transparent' }}>
                <div style={{ background: '#1a1a1a', color: 'white', padding: '35px', textAlign: 'center' }}>
                  <div style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '12px' }}>Foundation</div>
                  <div style={{ fontSize: '2.8rem', fontWeight: '800', marginBottom: '12px' }}>$397</div>
                  <div style={{ opacity: '0.9', fontSize: '1rem' }}>Essential framework + concept access</div>
                </div>
                <div style={{ padding: '40px 35px' }}>
                  <button onClick={() => handlePackageClick('Foundation')} style={{ width: '100%', background: '#1a1a1a', color: 'white', padding: '16px', border: 'none', borderRadius: '8px', fontSize: '1.1rem', cursor: 'pointer', fontWeight: '600' }}>Choose Foundation</button>
                </div>
              </div>
              
              <div style={{ background: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)', border: '2px solid transparent', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '20px', right: '20px', background: 'white', color: '#1a1a1a', padding: '6px 16px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)' }}>Most Popular</div>
                <div style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #333 100%)', color: 'white', padding: '35px', textAlign: 'center' }}>
                  <div style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '12px' }}>Architect</div>
                  <div style={{ fontSize: '2.8rem', fontWeight: '800', marginBottom: '12px' }}>$1,197</div>
                  <div style={{ opacity: '0.9', fontSize: '1rem' }}>Comprehensive strategic business architecture</div>
                </div>
                <div style={{ padding: '40px 35px' }}>
                  <button onClick={() => handlePackageClick('Architect')} style={{ width: '100%', background: '#1a1a1a', color: 'white', padding: '16px', border: 'none', borderRadius: '8px', fontSize: '1.1rem', cursor: 'pointer', fontWeight: '600' }}>Choose Architect</button>
                </div>
              </div>
              
              <div style={{ background: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)', border: '2px solid transparent' }}>
                <div style={{ background: '#1a1a1a', color: 'white', padding: '35px', textAlign: 'center' }}>
                  <div style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '12px' }}>Enterprise</div>
                  <div style={{ fontSize: '2.8rem', fontWeight: '800', marginBottom: '12px' }}>$2,997</div>
                  <div style={{ opacity: '0.9', fontSize: '1rem' }}>Complete market-domination blueprint</div>
                </div>
                <div style={{ padding: '40px 35px' }}>
                  <button onClick={() => handlePackageClick('Enterprise')} style={{ width: '100%', background: '#1a1a1a', color: 'white', padding: '16px', border: 'none', borderRadius: '8px', fontSize: '1.1rem', cursor: 'pointer', fontWeight: '600' }}>Choose Enterprise</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={{ background: '#1a1a1a', color: 'white', padding: '60px 0 30px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginBottom: '40px' }}>
              <div>
                <h3 style={{ marginBottom: '20px', color: 'white', fontWeight: '600' }}>Vorteca</h3>
                <p style={{ color: '#ccc', lineHeight: '1.7' }}>Transforming creative business vision into strategic, market-ready opportunities for ambitious entrepreneurs worldwide. Full confidentiality and IP protection guaranteed.</p>
              </div>
              
              <div>
                <h3 style={{ marginBottom: '20px', color: 'white', fontWeight: '600' }}>Strategic Services</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '8px' }}><Link href="#packages" style={{ color: '#ccc', textDecoration: 'none' }}>Foundation Package</Link></li>
                  <li style={{ marginBottom: '8px' }}><Link href="#packages" style={{ color: '#ccc', textDecoration: 'none' }}>Architect Package</Link></li>
                  <li style={{ marginBottom: '8px' }}><Link href="#packages" style={{ color: '#ccc', textDecoration: 'none' }}>Enterprise Package</Link></li>
                  <li style={{ marginBottom: '8px' }}><Link href="#" style={{ color: '#ccc', textDecoration: 'none' }}>Custom Concept Development</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 style={{ marginBottom: '20px', color: 'white', fontWeight: '600' }}>Connect</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '8px', color: '#ccc' }}>Email: hello@myvorteca.com</li>
                  <li style={{ marginBottom: '8px', color: '#ccc' }}>Strategic Hotline: (555) 123-4567</li>
                  <li style={{ color: '#ccc' }}>Address: 789 Strategy Lane<br />Austin, TX 78701</li>
                </ul>
              </div>
            </div>
            
            <div style={{ textAlign: 'center', paddingTop: '30px', borderTop: '1px solid #333', color: '#999' }}>
              <p>&copy; 2025 Vorteca. All rights reserved. | Privacy Policy | Terms of Service | NDA Policy</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}