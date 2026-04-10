'use client';
import { useState } from 'react';
const coverage = [
  { name: 'Auto Insurance', desc: 'Liability, collision, comprehensive, and uninsured motorist coverage. Multi-vehicle and safe driver discounts. SR-22 filing available.', icon: '🚗' },
  { name: 'Home Insurance', desc: 'Dwelling, personal property, liability, and additional living expenses. Flood and earthquake endorsements available.', icon: '🏠' },
  { name: 'Life Insurance', desc: 'Term life, whole life, and universal life policies. Free needs analysis to determine the right coverage amount.', icon: '🛡️' },
  { name: 'Business Insurance', desc: 'General liability, workers comp, commercial auto, professional liability, and BOP packages for small businesses.', icon: '🏢' },
  { name: 'Umbrella Policy', desc: 'Extra liability protection above your auto and home limits. $1M-$5M coverage. Essential for high-net-worth individuals.', icon: '☂️' },
  { name: 'Health Insurance', desc: 'Individual, family, and group health plans. Medicare supplement and dental/vision add-ons.', icon: '❤️' },
];
export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  return (
    <div className="min-h-screen" style={{ background: 'var(--cream)', color: '#1a1a1a' }}>
      <nav className="sticky top-0 z-50 px-8 py-4 flex justify-between items-center" style={{ background: '#faf9f6ee', backdropFilter: 'blur(12px)', borderBottom: '1px solid #e8e0d4' }}>
        <div><h1 className="heading-trust text-xl font-bold" style={{ color: 'var(--navy)' }}>Sterling Insurance</h1><p className="text-[9px] tracking-[0.2em] uppercase opacity-50">Independent Agency · Est. 1988</p></div>
        <div className="hidden md:flex gap-8 text-sm opacity-70">{['coverage', 'quote', 'contact'].map(s => <button key={s} onClick={() => scrollTo(s)} className="capitalize">{s}</button>)}</div>
        <button onClick={() => scrollTo('quote')} className="text-sm px-5 py-2 rounded font-semibold" style={{ background: 'var(--navy)', color: 'white' }}>Get Quote</button>
      </nav>
      <main>
        <section className="py-24 px-8">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--gold)' }}>Independent Insurance Agency</p>
              <h2 className="heading-trust text-5xl md:text-6xl font-bold mb-6" style={{ color: 'var(--navy)' }}>Protection<br/><em className="font-normal" style={{ color: 'var(--gold)' }}>you can trust.</em></h2>
              <p className="text-lg opacity-60 mb-8 leading-relaxed max-w-lg">We represent 25+ carriers, so we shop the market for you. Independent advice, competitive rates, and a dedicated agent who knows your name.</p>
              <button onClick={() => scrollTo('quote')} className="px-8 py-3 rounded font-semibold" style={{ background: 'var(--navy)', color: 'white' }}>Get a Free Quote</button>
            </div>
            <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80" alt="Insurance" className="w-full h-80 object-cover rounded-lg" loading="lazy" />
          </div>
        </section>
        <section id="coverage" className="py-24 px-8" style={{ background: 'white' }}>
          <div className="max-w-5xl mx-auto">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: 'var(--gold)' }}>What We Cover</p>
            <h2 className="heading-trust text-4xl font-bold mb-12" style={{ color: 'var(--navy)' }}>Coverage Options</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coverage.map(c => (
                <div key={c.name} className="coverage-card">
                  <p className="text-2xl mb-3">{c.icon}</p>
                  <h3 className="font-semibold mb-2">{c.name}</h3>
                  <p className="text-sm opacity-60 leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="quote" className="py-24 px-8" style={{ background: 'var(--navy)', color: 'white' }}>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs tracking-[0.3em] uppercase mb-3 opacity-60">No Obligation</p>
            <h2 className="heading-trust text-4xl font-bold mb-6">Get a Free Quote</h2>
            <p className="opacity-70 mb-8">Tell us what you need covered. We will compare rates from 25+ carriers and find you the best deal. Most quotes delivered within 24 hours.</p>
            {submitted ? (
              <div><p className="heading-trust text-2xl" style={{ color: 'var(--gold)' }}>Received.</p><p className="opacity-70 text-sm mt-2">An agent will contact you within 24 hours.</p></div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} className="space-y-4 text-left" style={{ color: '#1a1a1a' }}>
                <div className="grid grid-cols-2 gap-4"><input type="text" placeholder="Name" required className="w-full" /><input type="tel" placeholder="Phone" required className="w-full" /></div>
                <input type="email" placeholder="Email" required className="w-full" />
                <select className="w-full"><option value="">Coverage needed</option>{coverage.map(c => <option key={c.name}>{c.name}</option>)}</select>
                <textarea rows={3} placeholder="Current coverage details, if any..." className="w-full" />
                <button type="submit" className="w-full py-3 rounded font-semibold" style={{ background: 'var(--gold)', color: 'var(--navy)' }}>Request Quote</button>
              </form>
            )}
          </div>
        </section>
        <section id="contact" className="py-16 px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-trust text-2xl font-bold mb-4" style={{ color: 'var(--navy)' }}>Sterling Insurance Group</h2>
            <div className="flex justify-center gap-8 text-sm opacity-60 flex-wrap">
              <span>📍 3200 Peachtree Rd NE, Atlanta, GA 30305</span>
              <span>📞 <a href="tel:(404) 555-0189" style={{ color: 'var(--navy)' }}>(404) 555-0189</a></span>
              <span>📧 <a href="mailto:quotes@sterlingins.com" style={{ color: 'var(--navy)' }}>quotes@sterlingins.com</a></span>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-8 text-center text-xs opacity-40"><p>Sterling Insurance Group. Atlanta, GA. Licensed in 12 states.</p></footer>
    </div>
  );
}