'use client';
import { useState } from 'react';

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="min-h-screen bg-[#0c1929] text-slate-100">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-[100] font-bold">Skip</a>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0c1929]/95 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div><h1 className="text-xl font-bold text-blue-300">Shield Insurance Group</h1><p className="text-[10px] tracking-[0.2em] text-slate-500 uppercase">Independent Agency — Hartford</p></div>
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollTo('coverage')} className="text-sm text-slate-400 hover:text-blue-300">Coverage</button>
            <button onClick={() => scrollTo('contact')} className="text-sm text-slate-400 hover:text-blue-300">Contact</button>
            <button onClick={() => scrollTo('contact')} className="bg-blue-600 text-white px-5 py-2.5 text-sm rounded-full hover:bg-blue-500">Get Quote</button>
          </div>
        </div>
      </nav>

      <main id="main">
        <section className="pt-24 bg-gradient-to-br from-blue-950 via-[#0c1929] to-indigo-950">
          <div className="max-w-6xl mx-auto px-6 py-20 md:py-32 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-blue-400 text-sm tracking-[0.3em] uppercase mb-4">Independent Agency — Est. 2006</p>
              <h2 className="text-5xl md:text-6xl font-bold leading-[0.95] mb-6">Protection<br />you can <span className="text-blue-400">trust.</span></h2>
              <p className="text-xl text-slate-300 max-w-lg mb-8">Independent insurance agency providing comprehensive coverage for individuals and businesses. We shop 50+ carriers to find you the best rate.</p>
              <div className="flex gap-4">
                <button onClick={() => scrollTo('contact')} className="bg-blue-600 text-white px-8 py-4 text-lg rounded-full hover:bg-blue-500">Get Quote</button>
                <button onClick={() => scrollTo('coverage')} className="border-2 border-slate-500 text-slate-300 px-8 py-4 text-lg rounded-full hover:bg-white/5">Our Coverage</button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-slate-800/50 rounded-xl p-6"><div className="text-3xl font-bold text-blue-400">50+</div><div className="text-xs text-slate-500 uppercase">Carriers</div></div>
              <div className="bg-slate-800/50 rounded-xl p-6"><div className="text-3xl font-bold text-blue-400">$2B+</div><div className="text-xs text-slate-500 uppercase">Coverage Placed</div></div>
              <div className="bg-slate-800/50 rounded-xl p-6"><div className="text-3xl font-bold text-blue-400">95%</div><div className="text-xs text-slate-500 uppercase">Retention</div></div>
              <div className="bg-slate-800/50 rounded-xl p-6"><div className="text-3xl font-bold text-blue-400">20+</div><div className="text-xs text-slate-500 uppercase">Years</div></div>
            </div>
          </div>
        </section>

        <section id="coverage" className="py-24" aria-labelledby="coverage-heading">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16"><h2 id="coverage-heading" className="text-4xl font-bold">Coverage Options</h2><p className="text-slate-400 mt-3">Bundle and save up to 25%.</p></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'Auto', desc: 'Car, truck, motorcycle, and RV insurance.', icon: '🚗' },
                { name: 'Home', desc: 'Homeowners, condo, and renters insurance.', icon: '🏠' },
                { name: 'Life', desc: 'Term and whole life policies for your family.', icon: '❤️' },
                { name: 'Business', desc: 'Commercial liability, property, and workers comp.', icon: '🏢' },
                { name: 'Health', desc: 'Individual and group health plans.', icon: '💊' },
                { name: 'Umbrella', desc: 'Additional liability coverage above your policies.', icon: '☂️' },
              ].map((c, i) => (
                <div key={i} className="border border-slate-800 rounded-xl p-8 hover:border-blue-500/40 transition-colors">
                  <div className="text-4xl mb-4">{c.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{c.name}</h3>
                  <p className="text-slate-400 text-sm">{c.desc}</p>
                  <button onClick={() => scrollTo('contact')} className="mt-4 text-blue-400 text-sm hover:underline">Get a quote →</button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 bg-slate-900/30" aria-labelledby="contact-heading">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 id="contact-heading" className="text-4xl font-bold mb-4">Get a Free Quote</h2>
            <p className="text-slate-400 mb-10">We shop 50+ carriers to find you the best rate. No obligation.</p>
            <form className="border border-slate-800 rounded-xl p-8 space-y-5 text-left" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); setTimeout(() => setSubmitted(false), 4000); }}>
              <div className="grid grid-cols-2 gap-5">
                <div><label className="block text-sm mb-2 text-slate-400">Name</label><input type="text" placeholder="Your name" required className="w-full border border-slate-700 bg-transparent px-4 py-3 rounded-lg placeholder:text-slate-600 focus:border-blue-500 focus:outline-none" /></div>
                <div><label className="block text-sm mb-2 text-slate-400">Phone</label><input type="tel" placeholder="(555) 000-0000" required className="w-full border border-slate-700 bg-transparent px-4 py-3 rounded-lg placeholder:text-slate-600 focus:border-blue-500 focus:outline-none" /></div>
              </div>
              <div><label className="block text-sm mb-2 text-slate-400">Coverage Needed</label>
                <select className="w-full border border-slate-700 bg-[#0c1929] px-4 py-3 rounded-lg focus:border-blue-500 focus:outline-none text-slate-100">
                  <option>Auto Insurance</option><option>Home Insurance</option><option>Life Insurance</option><option>Business Insurance</option><option>Bundle (Save 25%)</option>
                </select>
              </div>
              <button type="submit" disabled={submitted} className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold hover:bg-blue-500 transition-colors disabled:opacity-60">{submitted ? '✓ Quote Requested! We\'ll call within 1 hour' : 'Get Free Quote'}</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800 py-8"><div className="max-w-6xl mx-auto px-6 text-center text-slate-600 text-sm">© {new Date().getFullYear()} Shield Insurance Group. Hartford, CT.</div></footer>
    </div>
  );
}
