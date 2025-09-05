import { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  const handlePackageClick = (packageName) => {
    alert(`Thank you for your interest in the ${packageName} package! Our strategic team will contact you within 24 hours to discuss your entrepreneurial vision and begin the NDA process.`)
  }

  const handleConceptClick = () => {
    alert('Full concept details available exclusively through our strategic packages. Choose your package level to access our complete library of validated business opportunities.')
  }

  const handleSubscriptionClick = () => {
    alert('Thank you for your interest in our Strategy Insights Monthly subscription! You will be redirected to our secure payment portal.')
  }

  useEffect(() => {
    // Smooth scrolling for anchor links
    const anchors = document.querySelectorAll('a[href^="#"]')
    anchors.forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute('href'))
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }
      })
    })

    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', () => {})
      })
    }
  }, [])

  return (
    <>
      <Head>
        <title>Vorteca - Strategic Business Concept Development</title>
        <meta name="description" content="We transform creative business vision into comprehensive, market-ready opportunity packages. Perfect for entrepreneurs with capital seeking validated, executable concepts." />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#1a1a1a" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet" />
      </Head>

      {/* Header */}
      <header className="bg-white/98 backdrop-blur-lg text-gray-900 py-5 sticky top-0 z-50 shadow-lg border-b border-gray-200">
        <nav className="max-w-6xl mx-auto px-5 flex justify-between items-center">
          <Link href="/" className="text-3xl font-bold flex items-center text-gray-900 no-underline -tracking-wider">
            <i className="fas fa-cube mr-3 text-gray-900 text-4xl"></i>
            Vorteca
          </Link>
          <ul className="hidden md:flex list-none gap-9">
            <li><a href="#packages" className="text-gray-900 no-underline font-medium transition-all duration-300 py-2 border-b-2 border-transparent hover:text-gray-600 hover:border-gray-900 text-sm">Packages</a></li>
            <li><a href="#process" className="text-gray-900 no-underline font-medium transition-all duration-300 py-2 border-b-2 border-transparent hover:text-gray-600 hover:border-gray-900 text-sm">Process</a></li>
            <li><a href="#about" className="text-gray-900 no-underline font-medium transition-all duration-300 py-2 border-b-2 border-transparent hover:text-gray-600 hover:border-gray-900 text-sm">About</a></li>
            <li><a href="#contact" className="text-gray-900 no-underline font-medium transition-all duration-300 py-2 border-b-2 border-transparent hover:text-gray-600 hover:border-gray-900 text-sm">Contact</a></li>
          </ul>
          <a href="#packages" className="bg-gray-900 text-white py-3 px-7 border-0 rounded-md cursor-pointer transition-all duration-300 no-underline font-semibold text-sm hover:bg-gray-700 hover:-translate-y-0.5 hover:shadow-lg">Get Started</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-700 text-white py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_49%,rgba(255,255,255,0.03)_50%,transparent_51%),linear-gradient(-45deg,transparent_49%,rgba(255,255,255,0.03)_50%,transparent_51%)] bg-[length:20px_20px]"></div>
        <div className="max-w-6xl mx-auto px-5 relative z-10">
          <h1 className="text-6xl mb-6 font-extrabold -tracking-wider leading-tight">Strategic Business Concepts</h1>
          <p className="text-xl mb-5 opacity-90 max-w-3xl mx-auto leading-relaxed">We transform creative business vision into comprehensive, market-ready opportunity packages. Perfect for entrepreneurs with capital seeking validated, executable concepts.</p>
          
          <div className="bg-white/10 border border-white/20 py-4 px-6 rounded-lg my-8 max-w-lg mx-auto backdrop-blur-lg">
            <p className="text-base m-0 flex items-center justify-center gap-2">
              <i className="fas fa-shield-alt text-green-400"></i>
              <strong>Full NDA Protection & Complete Confidentiality Guaranteed</strong>
            </p>
          </div>
          
          <div className="flex gap-5 justify-center flex-wrap mt-10">
            <a href="#packages" className="bg-white text-gray-900 py-4 px-10 border-0 rounded-lg text-lg cursor-pointer transition-all duration-300 no-underline inline-block font-semibold hover:bg-gray-100 hover:-translate-y-1 hover:shadow-xl">Explore Concepts</a>
            <a href="#process" className="bg-transparent text-white py-4 px-10 border-2 border-white/40 rounded-lg text-lg cursor-pointer transition-all duration-300 no-underline inline-block font-medium hover:bg-white/10 hover:border-white/60">How It Works</a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
            <div className="p-5">
              <span className="text-6xl font-extrabold text-gray-900 block mb-2">200+</span>
              <div className="text-gray-600 text-lg font-medium">Business Concepts Crafted</div>
            </div>
            <div className="p-5">
              <span className="text-6xl font-extrabold text-gray-900 block mb-2">92%</span>
              <div className="text-gray-600 text-lg font-medium">Client Launch Success Rate</div>
            </div>
            <div className="p-5">
              <span className="text-6xl font-extrabold text-gray-900 block mb-2">$4.1M</span>
              <div className="text-gray-600 text-lg font-medium">Revenue Generated by Clients</div>
            </div>
            <div className="p-5">
              <span className="text-6xl font-extrabold text-gray-900 block mb-2">18</span>
              <div className="text-gray-600 text-lg font-medium">Industries Mastered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Concepts Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-5xl text-gray-900 mb-5 font-bold -tracking-wider">This Month&apos;s Featured Opportunities</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">New business concepts rotate monthly. Get exclusive access to our complete portfolio of validated opportunities with full strategic frameworks.</p>
          </div>
          
          <div className="text-center mb-12">
            <div className="inline-block bg-gray-900 text-white py-3 px-6 rounded-full font-semibold mb-3">September 2025 Spotlight</div>
            <p className="text-gray-600 italic">Concepts refresh monthly - Premium concepts available exclusively to package holders</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
            <div className="bg-gray-50 p-9 rounded-2xl border-l-4 border-gray-900 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="text-gray-900 text-sm font-semibold uppercase tracking-wider mb-4">Fintech Opportunity</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Automated Financial Service</h3>
              <p className="text-gray-600 leading-relaxed mb-5">Revolutionary approach to personal debt management using emerging AI technology. Targets $400B market with unique competitive positioning.</p>
              <div className="flex justify-between items-center">
                <span className="text-gray-900 font-semibold text-sm">Market Potential: $400B+</span>
                <button onClick={handleConceptClick} className="bg-gray-900 text-white py-2 px-4 border-0 rounded-md text-sm cursor-pointer transition-all duration-300 hover:bg-gray-700 hover:-translate-y-0.5">Access Full Concept</button>
              </div>
            </div>
            
            <div className="bg-gray-50 p-9 rounded-2xl border-l-4 border-gray-900 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="text-gray-900 text-sm font-semibold uppercase tracking-wider mb-4">Life Enhancement</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Personal Productivity Platform</h3>
              <p className="text-gray-600 leading-relaxed mb-5">AI-driven solution for life administration challenges. Addresses massive underserved market with proven demand validation.</p>
              <div className="flex justify-between items-center">
                <span className="text-gray-900 font-semibold text-sm">Market Potential: $85B+</span>
                <button onClick={handleConceptClick} className="bg-gray-900 text-white py-2 px-4 border-0 rounded-md text-sm cursor-pointer transition-all duration-300 hover:bg-gray-700 hover:-translate-y-0.5">Access Full Concept</button>
              </div>
            </div>
            
            <div className="bg-gray-50 p-9 rounded-2xl border-l-4 border-gray-900 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="text-gray-900 text-sm font-semibold uppercase tracking-wider mb-4">Novel Innovation</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Personalized Health Technology</h3>
              <p className="text-gray-600 leading-relaxed mb-5">Breakthrough application of genetic science for consumer products. First-mover advantage in rapidly expanding health-tech sector.</p>
              <div className="flex justify-between items-center">
                <span className="text-gray-900 font-semibold text-sm">Market Potential: $180B+</span>
                <button onClick={handleConceptClick} className="bg-gray-900 text-white py-2 px-4 border-0 rounded-md text-sm cursor-pointer transition-all duration-300 hover:bg-gray-700 hover:-translate-y-0.5">Access Full Concept</button>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a href="#packages" className="bg-white text-gray-900 py-4 px-10 border-0 rounded-lg text-lg cursor-pointer transition-all duration-300 no-underline inline-block font-semibold hover:bg-gray-100 hover:-translate-y-1 hover:shadow-xl">View All Concept Categories</a>
          </div>
        </div>
      </section>

      {/* Concept Categories Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-5xl text-gray-900 mb-5 font-bold -tracking-wider">Strategic Concept Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">Comprehensive library of business opportunities across high-growth sectors. Full concepts available exclusively through strategic packages.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-14">
            <div className="bg-white p-10 rounded-2xl text-center shadow-lg">
              <div className="text-5xl mb-5">💳</div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Fintech Innovation</h3>
              <p className="text-gray-600 leading-relaxed mb-6">20 validated financial technology opportunities targeting underserved markets and emerging payment solutions.</p>
              <div className="bg-gray-50 p-5 rounded-lg mb-5">
                <div className="text-sm text-gray-900 font-semibold mb-2">Focus Areas Include:</div>
                <ul className="list-none text-left text-gray-600 text-sm space-y-1">
                  <li>• Automated financial management</li>
                  <li>• Alternative investment platforms</li>
                  <li>• Cross-border payment solutions</li>
                  <li>• Behavioral finance applications</li>
                </ul>
              </div>
              <div className="text-gray-900 font-semibold">Average Market Size: $200B+</div>
            </div>
            
            <div className="bg-white p-10 rounded-2xl text-center shadow-lg">
              <div className="text-5xl mb-5">🏡</div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Life Enhancement</h3>
              <p className="text-gray-600 leading-relaxed mb-6">15 technology-enabled services that solve daily life challenges through automation and community building.</p>
              <div className="bg-gray-50 p-5 rounded-lg mb-5">
                <div className="text-sm text-gray-900 font-semibold mb-2">Focus Areas Include:</div>
                <ul className="list-none text-left text-gray-600 text-sm space-y-1">
                  <li>• Personal productivity automation</li>
                  <li>• Health optimization services</li>
                  <li>• Community connection platforms</li>
                  <li>• Sustainable living solutions</li>
                </ul>
              </div>
              <div className="text-gray-900 font-semibold">Average Market Size: $120B+</div>
            </div>
            
            <div className="bg-white p-10 rounded-2xl text-center shadow-lg">
              <div className="text-5xl mb-5">🚀</div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Novel Technology</h3>
              <p className="text-gray-600 leading-relaxed mb-6">15 breakthrough concepts combining emerging technology with untapped market opportunities for first-mover advantage.</p>
              <div className="bg-gray-50 p-5 rounded-lg mb-5">
                <div className="text-sm text-gray-900 font-semibold mb-2">Focus Areas Include:</div>
                <ul className="list-none text-left text-gray-600 text-sm space-y-1">
                  <li>• Personalized biotechnology</li>
                  <li>• Immersive experience platforms</li>
                  <li>• Advanced communication systems</li>
                  <li>• Environmental innovation</li>
                </ul>
              </div>
              <div className="text-gray-900 font-semibold">Average Market Size: $150B+</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white" id="about">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-5xl text-gray-900 mb-5 font-bold -tracking-wider">Why Choose Vorteca?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">We don&apos;t just generate business ideas – we architect complete strategic frameworks that position you for immediate competitive advantage.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-14">
            <div className="bg-white p-10 rounded-xl text-center border-2 border-gray-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-gray-900">
              <div className="text-4xl text-gray-900 mb-6">
                <i className="fas fa-brain"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Strategic Intelligence</h3>
              <p className="text-gray-600 leading-relaxed">Every concept undergoes rigorous strategic analysis, market validation, and competitive positioning before development.</p>
            </div>
            <div className="bg-white p-10 rounded-xl text-center border-2 border-gray-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-gray-900">
              <div className="text-4xl text-gray-900 mb-6">
                <i className="fas fa-rocket"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Launch-Ready Frameworks</h3>
              <p className="text-gray-600 leading-relaxed">Complete execution blueprints with operational workflows, financial modeling, and strategic implementation timelines.</p>
            </div>
            <div className="bg-white p-10 rounded-xl text-center border-2 border-gray-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-gray-900">
              <div className="text-4xl text-gray-900 mb-6">
                <i className="fas fa-dollar-sign"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Proven ROI Models</h3>
              <p className="text-gray-600 leading-relaxed">All concepts include detailed financial projections showing clear paths to profitability and sustainable growth.</p>
            </div>
            <div className="bg-white p-10 rounded-xl text-center border-2 border-gray-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-gray-900">
              <div className="text-4xl text-gray-900 mb-6">
                <i className="fas fa-users"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Expert Partnership</h3>
              <p className="text-gray-600 leading-relaxed">Access to our network of industry strategists and market experts throughout your implementation journey.</p>
            </div>
            <div className="bg-white p-10 rounded-xl text-center border-2 border-gray-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-gray-900 md:col-span-2 lg:col-span-1">
              <div className="text-4xl text-gray-900 mb-6">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Complete Confidentiality</h3>
              <p className="text-gray-600 leading-relaxed">Full NDA protection and privacy guarantee. Your business concepts remain completely confidential with zero data sharing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-24 bg-gray-50" id="packages">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-5xl text-gray-900 mb-5 font-bold -tracking-wider">Strategic Concept Access</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">Choose your engagement level - from monthly insights to complete strategic business blueprints with full NDA protection.</p>
          </div>
          
          {/* Subscription Option */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-700 text-white py-12 rounded-3xl mb-12">
            <div className="text-center mb-10">
              <h3 className="text-3xl mb-4 font-bold">New: Monthly Strategy Subscription</h3>
              <p className="text-lg opacity-90">Access market intelligence, trend reports, and concept seeds without full strategic development</p>
            </div>
            
            <div className="max-w-4xl mx-auto bg-white/10 p-10 rounded-2xl backdrop-blur-lg">
              <div className="flex justify-between items-center flex-wrap gap-5">
                <div className="flex-1 min-w-64">
                  <h4 className="text-xl mb-3 font-semibold">Strategy Insights Monthly</h4>
                  <p className="opacity-90 mb-4">Perfect for aspiring entrepreneurs who want market intelligence and business idea inspiration</p>
                  <ul className="list-none text-sm space-y-1">
                    <li>✓ Monthly industry trend reports</li>
                    <li>✓ Business concept &quot;seeds&quot; and market opportunities</li>
                    <li>✓ Strategic framework templates</li>
                    <li>✓ Access to monthly strategy webinars</li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-extrabold mb-2">$47<span className="text-base opacity-80">/month</span></div>
                  <button onClick={handleSubscriptionClick} className="bg-white text-gray-900 py-3 px-6 border-0 rounded-lg font-semibold cursor-pointer hover:bg-gray-100 transition-all duration-300">Start Subscription</button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-14">
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl border-2 border-transparent hover:border-gray-900">
              <div className="bg-gray-900 text-white p-9 text-center">
                <div className="text-2xl font-bold mb-3">Foundation</div>
                <div className="text-5xl font-extrabold mb-3">$397</div>
                <div className="opacity-90">Essential framework + concept access</div>
              </div>
              <div className="p-9">
                <div className="bg-gray-50 p-5 rounded-lg mb-6">
                  <h4 className="text-gray-900 mb-2 font-semibold">Complete Strategic Framework Access:</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Curated library of validated business opportunities across multiple high-growth sectors. Full concept details revealed upon package selection and NDA execution.</p>
                </div>
                <ul className="list-none mb-9 space-y-3">
                  <li className="flex items-center"><i className="fas fa-check text-gray-900 mr-3"></i> Access to complete concept library</li>
                  <li className="flex items-center"><i className="fas fa-check text-gray-900 mr-3"></i> Strategic concept overview</li>
                  <li className="flex items-center"><i className="fas fa-check text-gray-900 mr-3"></i> Market opportunity analysis</li>
                  <li className="flex items-center"><i className="fas fa-check text-gray-900 mr-3"></i> Revenue framework design</li>
                  <li className="flex items-center"><i className="fas fa-check text-gray-900 mr-3"></i> 12-step execution roadmap</li>
                  <li className="flex items-center"><i className="fas fa-check text-gray-900 mr-3"></i> Competitive intelligence brief</li>
                  <li className="flex items-center"><i className="fas fa-check text-gray-900 mr-3"></i> Strategic consultation call</li>
                  <li className="flex items-center"><i className="fas fa-check text-gray-900 mr-3"></i> Full NDA protection</li>
                </ul>
                <button onClick={() => handlePackageClick('Foundation')} className="w-full bg-gray-900 text-white py-4 border-0 rounded-lg text-lg cursor-pointer transition-all duration-300 font-semibold hover:bg-gray-700 hover:-translate-y-1 hover:shadow-lg">Choose Foundation</button>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl border-2 border-transparent hover:border-gray-900 relative">
              <div className="absolute top-5 right-5 bg-white text-gray-900 py-2 px-4 rounded-full text-sm font-semibold shadow-lg">Most Popular</div>
              <div className="bg-gradient-to-br from-gray-900 to-gray-700 text-white p-9 text-center">
                <div className="text-2xl font-bold mb-3">Architect</div>
                <div className="text-5xl font-extrabold mb-3">$1,197</div>
                <div className="opacity-90">Comprehensive strategic business architecture</div>
              </div>
              <div className="p-9">
                <div className="bg-gray-50 p-5 rounded-lg mb-6">
                  <h4 className="text-gray-900 mb-2 font-semibold">Advanced Strategic Architecture:</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Comprehensive business development with deep strategic frameworks and operational specifications. Complete architecture scope revealed upon selection.</p>
                </div>
                <ul className="list-none mb-9 space-y-3">
                  <li className="flex items-center"><i className="fas fa-check text-gray-900 mr-3"></i> Everything in Foundation, plus:</li>
                  <li className="flex items-center"><i className="fas fa-check text-gray-900 mr-3"></i> 3-year financial architecture</li>
                  <li className="flex items-center"><i className="fas fa-check text-gray-900 mr-3"></i> Strategic marketing framework</li>
                  <li className="flex items-center"><i className="fas fa-check text-gray-900 mr-3"></i> Operational system design</li>
                  <li className="flex items-center"><i className="fas fa-check text-gray-900 mr-3"></i> Risk intelligence & mitigation</li>
                  <li className="flex items-center"><i className="fas fa-check text-gray-900 mr-3"></i> Strategic partner identification</li>
                  <li className="flex items-center"><i className="fas fa-check text-gray-900 mr-3"></i> Brand positioning strategy</li>
                  <li className="flex items-center"><i className="fas fa-check text-gray-900 mr-3"></i> Priority strategic support</li>
                </ul>
                <button onClick={() => handlePackageClick('Architect')} className="w-full bg-gray-900 text-white py-4 border-0 rounded-lg text-lg cursor-pointer transition-all duration-300 font-semibold hover:bg-gray-700 hover:-translate-y-1 hover:shadow-lg">Choose Architect</button>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl border-2 border-transparent hover:border-gray-900">
              <div className="bg-gray-900 text-white p-9 text-center">
                <div className="text-2xl font-bold mb-3">Enterprise</div>
                <div className="text-5xl font-extrabold mb-3">$2,997</div>
                <div className="opacity-90">Complete market-domination blueprint</div>
              </div>
              <div className="p-9">
                <div className="bg-gray-50 p-5 rounded-lg mb-6">
                  <h4 className="text-gray-900 mb-2 font-semibold">Executive Strategic Blueprint:</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Complete market-domination package with legal compliance, operational specifications, and executive-level strategic frameworks. Full scope revealed upon engagement.</p>
                </div>
                <ul className="list-none mb-9 space-y-3">
                  <li className="flex items-center"><i className="fas fa-check text-gray-900 mr-3"></i> Everything in Architect, plus:</li>
                  <li className="flex items-center"><i className="fas fa-check text-gray-900 mr-3"></i> Legal structure optimization</li>
                  <li className="flex items-center"><i className="fas fa-check text-gray-900 mr-3"></i> Regulatory compliance roadmap</li>
                  <li className="flex items-center"><i className="fas fa-check text-gray-900 mr-3"></i> Technology architecture specs</li>
                  <li className="flex items-center"><i className="fas fa-check text-gray-900 mr-3"></i> Team scaling blueprint</li>
                  <li className="flex items-center"><i className="fas fa-check text-gray-900 mr-3"></i> 12-month strategic calendar</li>
                  <li className="flex items-center"><i className="fas fa-check text-gray-900 mr-3"></i> Performance analytics framework</li>
                  <li className="flex items-center"><i className="fas fa-check text-gray-900 mr-3"></i> 90-day launch sprint plan</li>
                  <li className="flex items-center"><i className="fas fa-check text-gray-900 mr-3"></i> Executive strategy sessions</li>
                </ul>
                <button onClick={() => handlePackageClick('Enterprise')} className="w-full bg-gray-900 text-white py-4 border-0 rounded-lg text-lg cursor-pointer transition-all duration-300 font-semibold hover:bg-gray-700 hover:-translate-y-1 hover:shadow-lg">Choose Enterprise</button>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12 bg-gray-100 p-8 rounded-xl">
            <h3 className="text-gray-900 mb-4 text-xl font-bold">Strategic Portfolio Overview:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
              <div>
                <strong className="text-gray-900 block mb-2">Fintech Solutions (20 concepts)</strong>
                <p className="text-gray-600 text-sm">Advanced financial technology opportunities targeting underserved markets and emerging trends</p>
              </div>
              <div>
                <strong className="text-gray-900 block mb-2">Life Enhancement (15 concepts)</strong>
                <p className="text-gray-600 text-sm">Technology-enabled services that solve daily challenges through innovation and automation</p>
              </div>
              <div>
                <strong className="text-gray-900 block mb-2">Novel Technology (15 concepts)</strong>
                <p className="text-gray-600 text-sm">Breakthrough applications combining emerging technology with untapped market opportunities</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm mt-5 italic">Full concept details and strategic frameworks available exclusively through package selection</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
            <div>
              <h3 className="mb-5 text-white font-semibold text-lg">Vorteca</h3>
              <p className="text-gray-300 leading-relaxed">Transforming creative business vision into strategic, market-ready opportunities for ambitious entrepreneurs worldwide. Full confidentiality and IP protection guaranteed.</p>
            </div>
            
            <div>
              <h3 className="mb-5 text-white font-semibold text-lg">Strategic Services</h3>
              <ul className="list-none space-y-2">
                <li><a href="#packages" className="text-gray-300 no-underline leading-relaxed hover:text-white transition-colors">Foundation Package</a></li>
                <li><a href="#packages" className="text-gray-300 no-underline leading-relaxed hover:text-white transition-colors">Architect Package</a></li>
                <li><a href="#packages" className="text-gray-300 no-underline leading-relaxed hover:text-white transition-colors">Enterprise Package</a></li>
                <li><a href="#" className="text-gray-300 no-underline leading-relaxed hover:text-white transition-colors">Custom Concept Development</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="mb-5 text-white font-semibold text-lg">Resources</h3>
              <ul className="list-none space-y-2">
                <li><a href="#" className="text-gray-300 no-underline leading-relaxed hover:text-white transition-colors">Strategic Case Studies</a></li>
                <li><a href="#" className="text-gray-300 no-underline leading-relaxed hover:text-white transition-colors">Business Intelligence Blog</a></li>
                <li><a href="#" className="text-gray-300 no-underline leading-relaxed hover:text-white transition-colors">Market Opportunity Reports</a></li>
                <li><a href="#" className="text-gray-300 no-underline leading-relaxed hover:text-white transition-colors">Execution Frameworks</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="mb-5 text-white font-semibold text-lg">Connect</h3>
              <ul className="list-none space-y-2">
                <li className="text-gray-300 leading-relaxed">Email: hello@myvorteca.com</li>
                <li className="text-gray-300 leading-relaxed">Strategic Hotline: (555) 123-4567</li>
                <li className="text-gray-300 leading-relaxed">Address: 789 Strategy Lane<br />Austin, TX 78701</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center pt-8 border-t border-gray-700 text-gray-400">
            <p>&copy; 2025 Vorteca. All rights reserved. | Privacy Policy | Terms of Service | NDA Policy</p>
          </div>
        </div>
      </footer>
    </>
  )
}
