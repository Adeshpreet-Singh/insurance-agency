'use client';
import { useState } from 'react';

const coverageTypes = [
  { name: 'Auto Insurance', icon: '🚗', desc: 'Comprehensive auto protection including liability, collision, comprehensive, and uninsured motorist coverage. Multi-vehicle discounts, safe driver rewards, and SR-22 filing services available for sedans, trucks, motorcycles, and RVs.' },
  { name: 'Home Insurance', icon: '🏠', desc: 'Full-spectrum homeowner protection covering dwelling, personal property, liability, and additional living expenses. Endorsements include flood, earthquake, and scheduled personal property for valuables.' },
  { name: 'Life Insurance', icon: '🛡️', desc: 'Term life, whole life, and universal life policies designed to protect your family\'s financial future. Every consultation includes a free needs analysis to determine the right coverage amount.' },
  { name: 'Health Insurance', icon: '❤️', desc: 'Individual, family, and group health plans from major carriers. We navigate the marketplace on your behalf to find plans with the best network coverage and lowest out-of-pocket costs.' },
  { name: 'Business Insurance', icon: '🏢', desc: 'General liability, workers compensation, commercial auto, professional liability, and business owner policy packages for small and mid-size businesses across every industry.' },
  { name: 'Umbrella Policy', icon: '☂️', desc: 'Extra liability protection extending above your auto and home policy limits, providing one to five million dollars in additional coverage against catastrophic claims and lawsuits.' },
];

const testimonials = [
  { name: 'Margaret Dawson', role: 'Homeowner, Buckhead', quote: 'Sterling saved us over two thousand dollars a year by switching our home and auto to a carrier we never would have found on our own. Our agent took the time to understand our family needs and explained every option clearly. We have been clients for eight years now and could not be happier.' },
  { name: 'James Whitfield', role: 'Owner, Whitfield Construction', quote: 'As a general contractor, I need workers comp, commercial auto, and general liability all working together. Sterling bundled everything into a package that costs less than what I was paying separately. When one of my guys got injured on site, they handled the claim fast and kept my premiums from skyrocketing.' },
  { name: 'Priya Nair', role: 'First-time Homebuyer', quote: 'I had no idea where to start with homeowners insurance. My Sterling agent walked me through every coverage type, explained what the mortgage company required, and got me a great rate before my closing date. The whole process took less than a day. I recommend them to everyone I know.' },
];

const stats = [
  { number: '25+', label: 'Insurance Carriers', desc: 'We compare rates across the top-rated carriers in the market.' },
  { number: '35', label: 'Years of Experience', desc: 'Serving families and businesses across the Southeast since 1988.' },
  { number: '12K+', label: 'Clients Protected', desc: 'Thousands of families and businesses trust Sterling with their coverage.' },
  { number: '98%', label: 'Client Retention', desc: 'Our clients stay because we deliver real value year after year.' },
];

const differentiators = [
  { title: 'Truly Independent', desc: 'Unlike captive agents tied to one carrier, we represent over twenty-five top-rated insurance companies. This means we compare rates and coverage options across the entire market to find the best fit for your specific situation and budget.', icon: '⚖️' },
  { title: '35+ Years of Experience', desc: 'Sterling Insurance Group has served families and businesses in the Southeast since 1988. Our veteran agents have handled thousands of policies across every major line of coverage.', icon: '🏆' },
  { title: 'Dedicated Agent for You', desc: 'Every client is paired with a named agent who learns your circumstances, reviews your coverage annually, and is available whenever life changes require policy adjustments.', icon: '🤝' },
  { title: 'Claims Advocacy', desc: 'When you need to file a claim, we do not disappear. Our team advocates on your behalf with the carrier and pushes for fair and timely settlements so you can focus on recovery.', icon: '📋' },
];

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 px-8 py-4 flex justify-between items-center" style={{ background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(12px)', borderBottom: '1px solid var(--border)' }}>
        <div>
          <h1 className="heading-sans text-xl font-bold" style={{ color: 'var(--navy)' }}>Sterling Insurance Group</h1>
          <p className="text-xs tracking-[0.2em] uppercase" style={{ color: 'var(--body)' }}>Independent Agency · Est. 1988</p>
        </div>
        <div className="hidden md:flex gap-8 text-sm" style={{ color: 'var(--body)' }}>
          {['coverage', 'why-us', 'stats', 'testimonials', 'quote'].map(s => (
            <button key={s} onClick={() => scrollTo(s)} className="capitalize hover:opacity-100 opacity-80 transition-opacity cursor-pointer" style={{ background: 'none', border: 'none', fontFamily: 'inherit' }}>{s.replace('-', ' ')}</button>
          ))}
        </div>
        <button onClick={() => scrollTo('quote')} className="btn text-sm">Get a Free Quote</button>
      </nav>

      <main>
        {/* 1. Hero Section */}
        <section className="hero py-28 px-8">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="badge mb-5">Independent Insurance Agency</span>
              <h2 className="heading-sans text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Protection for<br />what matters <em style={{ color: '#60a5fa', fontStyle: 'normal' }}>most.</em>
              </h2>
              <p className="text-lg mb-8 leading-relaxed max-w-lg" style={{ color: 'rgba(255,255,255,0.85)' }}>
                Sterling Insurance Group represents over twenty-five top-rated carriers, which means we shop the entire market on your behalf. You get independent advice, competitive rates, and a dedicated agent who knows your name and understands your unique coverage needs. Whether you are protecting your family, your home, your vehicle, or your business, we build tailored policies that give you genuine peace of mind.
              </p>
              <div className="flex gap-4 flex-wrap">
                <button onClick={() => scrollTo('quote')} className="btn" style={{ background: '#2563eb' }}>Get a Free Quote</button>
                <button onClick={() => scrollTo('coverage')} className="btn-outline" style={{ borderColor: 'rgba(255,255,255,0.4)', color: 'white' }}>View Coverage Options</button>
              </div>
              <div className="flex gap-8 mt-10 text-base font-medium" style={{ color: 'rgba(255,255,255,0.9)' }}>
                <div><span className="heading-sans text-3xl font-bold block" style={{ color: 'white' }}>25+</span>Carriers Compared</div>
                <div><span className="heading-sans text-3xl font-bold block" style={{ color: 'white' }}>35</span>Years in Business</div>
                <div><span className="heading-sans text-3xl font-bold block" style={{ color: 'white' }}>12K+</span>Clients Served</div>
              </div>
            </div>
            <div className="img-hover">
              <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80" alt="Professional insurance consultation meeting" className="w-full h-[420px] object-cover rounded-lg" loading="eager" />
            </div>
          </div>
        </section>

        {/* 2. Coverage Types */}
        <section id="coverage" className="py-24 px-8" style={{ background: 'white' }}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="badge mb-4">What We Cover</span>
              <h2 className="heading-sans text-4xl font-bold mb-4">Comprehensive Coverage Options</h2>
              <p className="max-w-2xl mx-auto" style={{ color: 'var(--body)' }}>
                From your daily commute to your biggest investment, Sterling Insurance Group offers protection across every major line of personal and commercial insurance. Each policy is customized to your exact situation, and we review your coverage annually to make sure it still fits your life.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coverageTypes.map(c => (
                <div key={c.name} className="card">
                  <span className="text-3xl mb-4 block">{c.icon}</span>
                  <h3 className="heading-sans text-lg font-semibold mb-2">{c.name}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--body)' }}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Why Choose Us */}
        <section id="why-us" className="section-alt py-24 px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="badge mb-4">Why Choose Us</span>
              <h2 className="heading-sans text-4xl font-bold mb-4">The Sterling Difference</h2>
              <p className="max-w-2xl mx-auto" style={{ color: 'var(--body)' }}>
                Insurance is complicated enough. Here is what makes working with Sterling Insurance Group a fundamentally better experience than buying direct or through a captive agent. We put your interests first, always.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {differentiators.map(d => (
                <div key={d.title} className="card text-center">
                  <span className="text-4xl mb-4 block">{d.icon}</span>
                  <h3 className="heading-sans text-lg font-semibold mb-3">{d.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--body)' }}>{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Stats Section */}
        <section id="stats" className="py-24 px-8" style={{ background: 'var(--navy)', color: 'white' }}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="badge mb-4" style={{ background: 'rgba(59,130,246,0.15)', color: '#93c5fd', borderColor: 'rgba(59,130,246,0.3)' }}>By the Numbers</span>
              <h2 className="heading-sans text-4xl font-bold mb-4" style={{ color: 'white' }}>Decades of Trust, Proven Results</h2>
              <p className="max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.7)' }}>
                Our numbers speak to the trust our clients place in us every single day. From the number of carriers we work with to the families we protect, Sterling Insurance Group delivers results that matter.
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map(s => (
                <div key={s.label} className="text-center">
                  <div className="heading-sans text-5xl md:text-6xl font-bold mb-2" style={{ color: '#60a5fa', fontFamily: "'Crimson Text', serif" }}>{s.number}</div>
                  <p className="font-bold text-sm uppercase tracking-wider mb-2" style={{ color: 'rgba(255,255,255,0.9)' }}>{s.label}</p>
                  <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Testimonials */}
        <section id="testimonials" className="py-24 px-8" style={{ background: 'white' }}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="badge mb-4">Client Stories</span>
              <h2 className="heading-sans text-4xl font-bold mb-4">What Our Clients Say</h2>
              <p className="max-w-2xl mx-auto" style={{ color: 'var(--body)' }}>
                Our reputation is built on decades of honest service and real results. Here is what some of our long-term clients have to say about working with Sterling Insurance Group. Every testimonial reflects the personal attention and genuine care we bring to each relationship.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map(t => (
                <div key={t.name} className="card">
                  <div className="flex gap-1 mb-4" style={{ color: '#f59e0b' }}>{'★★★★★'}</div>
                  <p className="text-sm leading-relaxed mb-6 italic" style={{ color: 'var(--body)' }}>&ldquo;{t.quote}&rdquo;</p>
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs" style={{ color: 'var(--body)' }}>{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Second Image Section - About / Trust Builder */}
        <section className="py-24 px-8" style={{ background: 'var(--cool-gray)' }}>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="img-hover">
              <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80" alt="Insurance documents and paperwork review" className="w-full h-[360px] object-cover rounded-lg" loading="lazy" />
            </div>
            <div>
              <span className="badge mb-4">Our Commitment</span>
              <h2 className="heading-sans text-3xl font-bold mb-6">Your Protection Is Our Profession</h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--body)' }}>
                At Sterling Insurance Group, we believe insurance should be straightforward, transparent, and tailored to your life. We are not here to sell you the most expensive policy. We are here to find the right policy for your specific needs at the most competitive price available.
              </p>
              <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--body)' }}>
                Our independent model means we work for you, not the insurance company. Every recommendation we make is based on your best interests, and every policy we write is backed by our commitment to ongoing service and annual reviews. When your life changes, your coverage should too, and we make sure it does.
              </p>
              <ul className="space-y-3">
                {['Free annual policy reviews', 'Claims advocacy and support', 'Multi-policy bundle discounts', 'Licensed in 12 states'].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm font-medium" style={{ color: 'var(--navy)' }}>
                    <span className="w-5 h-5 rounded-full flex items-center justify-center text-xs text-white flex-shrink-0" style={{ background: 'var(--accent)' }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 7. Quote Form */}
        <section id="quote" className="py-24 px-8" style={{ background: 'var(--navy)', color: 'white' }}>
          <div className="max-w-3xl mx-auto text-center">
            <span className="badge mb-4" style={{ background: 'rgba(59,130,246,0.15)', color: '#93c5fd', borderColor: 'rgba(59,130,246,0.3)' }}>No Obligation</span>
            <h2 className="heading-sans text-4xl font-bold mb-4" style={{ color: 'white' }}>Request Your Free Quote</h2>
            <p className="mb-10" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Tell us what you need covered and a Sterling agent will compare rates from over twenty-five carriers to find you the best deal. Most quotes are delivered within twenty-four hours. There is no cost and no obligation to buy.
            </p>
            {submitted ? (
              <div className="py-12">
                <p className="heading-sans text-3xl font-bold mb-3" style={{ color: '#60a5fa' }}>Quote Request Received</p>
                <p style={{ color: 'rgba(255,255,255,0.7)' }}>A dedicated Sterling agent will contact you within twenty-four hours with your personalized quote comparison. Thank you for choosing Sterling Insurance Group.</p>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} className="space-y-4 text-left" style={{ color: '#1a1a1a' }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Full Name" required />
                  <input type="tel" placeholder="Phone Number" required />
                </div>
                <input type="email" placeholder="Email Address" required className="w-full" />
                <select defaultValue="">
                  <option value="" disabled>Select Coverage Type</option>
                  {coverageTypes.map(c => <option key={c.name}>{c.name}</option>)}
                </select>
                <textarea rows={4} placeholder="Tell us about your current coverage, what you need, and any relevant details such as vehicle year, home value, or business type..." />
                <button type="submit" className="btn w-full text-center" style={{ background: '#2563eb' }}>Submit Quote Request</button>
                <p className="text-xs text-center" style={{ color: 'rgba(255,255,255,0.5)' }}>By submitting this form, you agree to be contacted by a Sterling Insurance Group agent regarding your quote request.</p>
              </form>
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={{ background: '#0f1a2e', color: 'rgba(255,255,255,0.7)' }}>
        <div className="max-w-6xl mx-auto py-16 px-8">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div className="md:col-span-2">
              <h3 className="heading-sans text-xl font-bold mb-3" style={{ color: 'white' }}>Sterling Insurance Group</h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.55)' }}>
                An independent insurance agency serving families and businesses across the Southeast since 1988. We represent over twenty-five top-rated carriers and provide personalized coverage solutions backed by decades of experience and genuine care.
              </p>
              <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>Licensed in 12 states across the Southeast and Mid-Atlantic region.</p>
            </div>
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider mb-4" style={{ color: 'rgba(255,255,255,0.9)' }}>Contact</h4>
              <div className="space-y-2 text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
                <p>3200 Peachtree Rd NE<br />Atlanta, GA 30305</p>
                <p><a href="tel:(404) 555-0189" style={{ color: '#60a5fa' }}>(404) 555-0189</a></p>
                <p><a href="mailto:quotes@sterlingins.com" style={{ color: '#60a5fa' }}>quotes@sterlingins.com</a></p>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider mb-4" style={{ color: 'rgba(255,255,255,0.9)' }}>Hours</h4>
              <div className="space-y-1 text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
                <p>Monday – Friday: 8am – 6pm</p>
                <p>Saturday: 9am – 1pm</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
          <div className="border-t pt-8 text-center text-xs" style={{ borderColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.35)' }}>
            <p>© 2024 Sterling Insurance Group. All rights reserved. Licensed in Georgia, Florida, Alabama, South Carolina, North Carolina, Tennessee, Virginia, Mississippi, Louisiana, Texas, Kentucky, and Maryland.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
