'use client';

import { useState } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) { element.scrollIntoView({ behavior: 'smooth' }); element.focus(); }
    setMenuOpen(false);
  };

  const coverage = [
    { title: 'Auto Insurance', desc: 'Comprehensive, collision, liability', icon: '\uD83D\uDE97', price: 'From $89/mo' },
    { title: 'Home Insurance', desc: 'Property, liability, belongings', icon: '\uD83C\uDFE0', price: 'From $125/mo' },
    { title: 'Life Insurance', desc: 'Term, whole, universal policies', icon: '\uD83D\uDC68\u200D\uD83E\uDDBA', price: 'From $25/mo' },
    { title: 'Business Insurance', desc: 'Commercial, liability, workers comp', icon: '\uD83C\uDFE2', price: 'Custom Quote' },
  ];

  return (
    <div className="bg-blue-50 text-gray-900 min-h-screen">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-700 text-white px-4 py-2 rounded-lg z-[100] focus-visible:outline-2 focus-visible:outline-white font-bold">Skip to main content</a>
      <header>
        <nav role="navigation" aria-label="Main navigation" className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-700 rounded-xl flex items-center justify-center text-white text-xl" aria-hidden="true">\uD83D\uDEE1\uFE0F</div>
              <div><h1 className="text-lg font-bold text-blue-900">SafeGuard</h1><p className="text-[9px] text-blue-600 tracking-wider">INSURANCE AGENCY</p></div>
            </div>
            <div className="hidden md:flex items-center gap-8">
              {['Coverage','Why Us','Claims','Contact'].map(item => (<button key={item} onClick={() => scrollToSection(item.toLowerCase())} aria-label={`Navigate to ${item} section`} className="text-sm text-gray-600 hover:text-blue-600 transition-colors focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2 rounded">{item}</button>))}
              <button aria-label="Get a free insurance quote" className="bg-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-blue-800 transition-colors focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2">Get Quote</button>
            </div>
            <button aria-label={menuOpen?"Close menu":"Open menu"} aria-expanded={menuOpen} className="md:hidden text-blue-600 focus-visible:outline-2 focus-visible:outline-blue-500 rounded" onClick={() => setMenuOpen(!menuOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">{menuOpen?<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>:<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>}</svg>
            </button>
          </div>
        </nav>
      </header>
      <main id="main-content" role="main">
        <section aria-labelledby="hero-heading" className="pt-24 pb-16 relative overflow-hidden">
          <div className="absolute inset-0" aria-hidden="true"><div className="absolute top-20 left-20 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl"/></div>
          <div className="relative max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-blue-600 text-sm font-bold tracking-widest mb-4">PROTECTION YOU CAN TRUST</p>
              <h2 id="hero-heading" className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-blue-900">Insure<br/><span className="text-blue-600">With Confidence</span></h2>
              <p className="text-xl text-gray-600 mb-8 max-w-lg">Independent agents finding you the best rates from top carriers. Personalized coverage that fits your life and budget.</p>
              <div className="flex flex-wrap gap-4 mb-10">
                <button aria-label="Get your free insurance quote" className="bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-800 transition-all hover:scale-105 focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2">Free Quote</button>
                <button aria-label="View our coverage options" className="border-2 border-blue-700 text-blue-800 px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-50 transition-all hover:scale-105 focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2">View Coverage</button>
              </div>
              <div className="flex items-center gap-8">
                {[{num:'50K+',label:'Policies Written'},{num:'95%',label:'Claims Approved'},{num:'24/7',label:'Claims Support'}].map((s,i) => (<div key={i}><div className="text-2xl font-bold text-blue-700">{s.num}</div><div className="text-sm text-gray-500">{s.label}</div></div>))}
              </div>
            </div>
            <div className="relative"><div className="bg-white rounded-3xl p-8 shadow-xl"><img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80" alt="Insurance agent reviewing coverage options with a family" className="w-full rounded-2xl"/></div></div>
          </div>
        </section>
        <section id="coverage" aria-labelledby="coverage-heading" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16"><p className="text-blue-600 text-sm font-bold tracking-widest mb-4">WHAT WE COVER</p><h2 id="coverage-heading" className="text-4xl font-bold text-blue-900 mb-4">Insurance Solutions</h2></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coverage.map((c,i) => (<article key={i} className="bg-blue-50 rounded-2xl p-6 hover:shadow-lg transition-all hover:scale-105"><div className="text-4xl mb-4" aria-hidden="true">{c.icon}</div><h3 className="text-xl font-bold text-blue-900 mb-2">{c.title}</h3><p className="text-gray-500 text-sm mb-3">{c.desc}</p><div className="text-blue-600 font-bold">{c.price}</div></article>))}
            </div>
          </div>
        </section>
        <section id="contact" aria-labelledby="contact-heading" className="py-24">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
            <div><p className="text-blue-600 text-sm font-bold tracking-widest mb-4">GET PROTECTED</p><h2 id="contact-heading" className="text-4xl font-bold text-blue-900 mb-6">Get Your Free Quote</h2><p className="text-gray-600 mb-8">Compare rates from 20+ top carriers in minutes.</p></div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <form noValidate className="space-y-6">
                <div><label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your Name</label><input id="name" type="text" aria-required="true" placeholder="Alex Protected" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-colors"/></div>
                <div><label htmlFor="coverage" className="block text-sm font-medium text-gray-700 mb-2">Coverage Type</label><select id="coverage" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-colors"><option value="">Select coverage</option><option value="auto">Auto Insurance</option><option value="home">Home Insurance</option><option value="life">Life Insurance</option><option value="business">Business Insurance</option></select></div>
                <button type="submit" aria-label="Get your free insurance quote" className="w-full bg-blue-700 text-white py-4 rounded-xl font-bold hover:bg-blue-800 transition-all hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2">Get Free Quote</button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer role="contentinfo" className="py-12 bg-blue-900"><div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6"><div className="flex items-center gap-3"><div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center text-white" aria-hidden="true">\uD83D\uDEE1\uFE0F</div><span className="text-white font-bold">SafeGuard Insurance</span></div><p className="text-blue-300 text-sm">Licensed & Independent | Since 2001</p></div></footer>
    </div>
  );
}