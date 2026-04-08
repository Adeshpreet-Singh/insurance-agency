'use client';

import { useState } from 'react';

const SERVICES = [
  {
    name: 'Life Insurance',
    desc: 'Comprehensive life insurance solutions that protect your family\'s financial future and provide lasting peace of mind.',
    details: ['Term Life', 'Whole Life', 'Universal Life'],
  },
  {
    name: 'Health Insurance',
    desc: 'Individual and family health coverage plans with access to the nation\'s leading providers and hospitals.',
    details: ['Individual Plans', 'Family Coverage', 'Medicare Supplement'],
  },
  {
    name: 'Auto Insurance',
    desc: 'Full-spectrum auto coverage from liability to comprehensive, with competitive rates and responsive claims service.',
    details: ['Liability Coverage', 'Collision & Comprehensive', 'Uninsured Motorist'],
  },
  {
    name: 'Home Insurance',
    desc: 'Protect your most valuable asset with coverage that shields your home from fire, theft, natural disasters, and liability.',
    details: ['Homeowners', 'Renters Insurance', 'Condo Coverage'],
  },
  {
    name: 'Business Insurance',
    desc: 'Tailored commercial insurance packages that safeguard your business, employees, and assets.',
    details: ['General Liability', 'Workers Compensation', 'Professional Liability'],
  },
  {
    name: 'Umbrella Insurance',
    desc: 'Extended liability protection that goes beyond standard policies, providing an additional layer of security.',
    details: ['Excess Liability', 'Personal Umbrella', 'Commercial Umbrella'],
  },
];

const TEAM = [
  { name: 'Robert Sterling', title: 'Founder & President', focus: 'Commercial Lines', education: 'CPCU, ARM', years: 32 },
  { name: 'Margaret Chen', title: 'VP, Personal Lines', focus: 'Life & Health', education: 'CLU, ChFC', years: 24 },
  { name: 'William Torres', title: 'VP, Commercial', focus: 'Business Insurance', education: 'CPCU, CIC', years: 18 },
  { name: 'Emily Patterson', title: 'Senior Advisor', focus: 'Risk Management', education: 'ARM, CISR', years: 14 },
];

const TESTIMONIALS = [
  {
    text: 'When our warehouse suffered major storm damage, Sterling Insurance had adjusters on-site within hours and a check in our hands within days. True peace of mind.',
    name: 'David Rothwell',
    role: 'Owner, Rothwell Manufacturing',
  },
  {
    text: 'Sterling saved us $47,000 annually on our commercial policies while actually improving our coverage. Their expertise is unmatched.',
    name: 'Patricia Nguyen',
    role: 'CFO, BrightPath Education',
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [activeService, setActiveService] = useState<number | null>(null);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-ivory text-navy">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-navy text-ivory px-4 py-2 rounded z-[100] font-bold">
        Skip to main content
      </a>

      <header>
        <nav role="navigation" aria-label="Main navigation" className="fixed top-0 left-0 right-0 z-50 bg-ivory/95 backdrop-blur-md border-b border-rule">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <div>
              <h1 className="text-xl tracking-[0.15em] uppercase font-bold">
                Sterling <span className="text-gold">Insurance</span>
              </h1>
              <p className="text-[10px] tracking-[0.3em] text-slate uppercase">Comprehensive Protection Since 1991</p>
            </div>
            <div className="hidden md:flex items-center gap-8">
              {['services', 'team', 'results', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className="text-sm text-charcoal hover:text-gold transition-colors tracking-wider uppercase"
                >
                  {item === 'services' ? 'Coverage' : item === 'results' ? 'Results' : item}
                </button>
              ))}
              <button
                onClick={() => scrollTo('contact')}
                className="bg-navy text-ivory px-6 py-2.5 text-sm tracking-wider uppercase hover:bg-navy-light transition-colors"
              >
                Get a Quote
              </button>
            </div>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-navy"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          {menuOpen && (
            <div className="md:hidden bg-ivory border-t border-rule px-6 py-4 space-y-1">
              {['services', 'team', 'results', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className="block w-full text-left px-4 py-3 text-charcoal hover:text-gold tracking-wider uppercase"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </nav>
      </header>

      
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Insurance Agency",
            "url": "https://insurance-agency.com",
            "description": "Professional insurance agency services.",
          })}}
        />

        <main id="main" role="main">
        {/* Hero */}
        <section className="pt-28 pb-20 md:pb-32">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-12 gap-8 items-end">
              <div className="md:col-span-8">
                <p className="text-gold text-sm tracking-[0.3em] uppercase mb-6">Boston &middot; Established 1991</p>
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight mb-8">
                  Protecting
                  <br />
                  what <span className="text-gold">matters.</span>
                </h2>
                <p className="text-xl text-slate max-w-lg leading-relaxed mb-10 drop-cap">
                  Three decades of trusted insurance counsel. We don&apos;t just sell policies — we build protective shields around everything you&apos;ve worked hard to build.
                </p>
                <div className="flex gap-4">
                  <button
                    onClick={() => scrollTo('contact')}
                    className="bg-navy text-ivory px-8 py-4 text-lg tracking-wider uppercase hover:bg-navy-light transition-colors"
                  >
                    Get a Quote
                  </button>
                  <button
                    onClick={() => scrollTo('services')}
                    className="border-2 border-navy text-navy px-8 py-4 text-lg tracking-wider uppercase hover:bg-navy hover:text-ivory transition-colors"
                  >
                    Coverage Options
                  </button>
                </div>
              </div>
              <div className="md:col-span-4 flex flex-col items-end gap-6 text-right">
                <div className="seal w-28 h-28 flex flex-col items-center justify-center">
                  <span className="text-gold text-2xl font-bold">33</span>
                  <span className="text-slate text-xs tracking-wider uppercase">Years</span>
                </div>
                <div>
                  <div className="text-4xl font-bold text-navy">$2.1B</div>
                  <div className="text-sm text-slate tracking-wider uppercase">Claims paid</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-navy">15,000+</div>
                  <div className="text-sm text-slate tracking-wider uppercase">Families protected</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="ornament-rule text-gold text-lg">&#x2726;</div>
        </div>

        {/* Services */}
        <section id="services" className="py-24" aria-labelledby="services-heading">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-12 gap-8 mb-16">
              <div className="md:col-span-4">
                <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3">What We Cover</p>
                <h2 id="services-heading" className="text-4xl md:text-5xl font-bold">
                  Coverage
                  <br />
                  Options
                </h2>
              </div>
              <div className="md:col-span-8 flex items-end">
                <p className="text-slate text-lg leading-relaxed">
                  From your family&apos;s health to your business&apos;s future, we offer comprehensive coverage solutions tailored to your unique needs.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.map((svc, i) => (
                <article
                  key={i}
                  className={`card-editorial bg-white border border-rule p-8 cursor-pointer ${
                    activeService === i ? 'border-gold shadow-lg' : ''
                  }`}
                  onClick={() => setActiveService(activeService === i ? null : i)}
                  role="button"
                  tabIndex={0}
                  aria-expanded={activeService === i}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveService(activeService === i ? null : i);
                    }
                  }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold">{svc.name}</h3>
                    <span className="text-gold text-xl">{activeService === i ? '\u2212' : '\u002B'}</span>
                  </div>
                  <p className="text-slate leading-relaxed mb-4 text-sm">{svc.desc}</p>
                  {activeService === i && (
                    <div className="border-t border-rule pt-4 mt-4">
                      <p className="text-xs tracking-wider uppercase text-gold mb-3">Policy Types</p>
                      <ul className="space-y-2">
                        {svc.details.map((d, j) => (
                          <li key={j} className="text-sm text-charcoal flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-gold" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section id="team" className="py-24 bg-navy text-ivory" aria-labelledby="team-heading">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-12 gap-8 mb-16">
              <div className="md:col-span-5">
                <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3">Our Team</p>
                <h2 id="team-heading" className="text-4xl md:text-5xl font-bold">
                  The advisors behind
                  <br />
                  your protection.
                </h2>
              </div>
              <div className="md:col-span-7 flex items-end">
                <p className="text-slate text-lg leading-relaxed">
                  Our licensed advisors hold the industry&apos;s highest certifications and bring decades of experience navigating complex insurance needs.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {TEAM.map((member, i) => (
                <div key={i} className="border border-gold-muted p-6 hover:border-gold/40 transition-all">
                  <div className="w-full aspect-square bg-navy-light mb-6 flex items-center justify-center text-5xl text-gold/30">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="text-gold text-xs tracking-wider uppercase mb-1">{member.title}</div>
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <div className="text-slate text-sm space-y-1">
                    <div>{member.focus}</div>
                    <div>{member.education}</div>
                    <div>{member.years} years in insurance</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results / Testimonials */}
        <section id="results" className="py-24" aria-labelledby="results-heading">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3">Client Trust</p>
              <h2 id="results-heading" className="text-4xl md:text-5xl font-bold">
                What our clients say
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {TESTIMONIALS.map((t, i) => (
                <blockquote key={i} className="pull-quote">
                  <p className="text-xl leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>
                  <footer>
                    <cite className="not-italic">
                      <span className="font-bold">{t.name}</span>
                      <br />
                      <span className="text-slate text-sm">{t.role}</span>
                    </cite>
                  </footer>
                </blockquote>
              ))}
            </div>

            {/* Awards */}
            <div className="mt-20 grid md:grid-cols-4 gap-6 text-center">
              {[
                { label: 'Independent Agents', sub: 'Trusted Choice Member' },
                { label: 'AM Best A+', sub: 'Superior Rating' },
                { label: 'IIABA', sub: 'Best Practices Agency' },
                { label: 'BBB A+ Rating', sub: 'Accredited Business' },
              ].map((award, i) => (
                <div key={i} className="border border-rule p-6">
                  <div className="text-lg font-bold mb-1">{award.label}</div>
                  <div className="text-slate text-sm">{award.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-24 bg-parchment" aria-labelledby="contact-heading">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-12 gap-12">
              <div className="md:col-span-5">
                <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3">Get In Touch</p>
                <h2 id="contact-heading" className="text-4xl md:text-5xl font-bold mb-6">
                  Request a
                  <br />
                  free quote.
                </h2>
                <p className="text-slate leading-relaxed mb-8">
                  Get a personalized quote in under 24 hours. Our advisors will review your needs and find the optimal coverage at the best value.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="text-gold text-lg mt-0.5">&#x1F4CD;</span>
                    <div>
                      <div className="font-bold">Office</div>
                      <div className="text-slate text-sm">200 State Street, Suite 1200<br />Boston, MA 02109</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-gold text-lg mt-0.5">&#x1F4DE;</span>
                    <div>
                      <div className="font-bold">Phone</div>
                      <div className="text-slate text-sm"><a href="tel:(617) 555-0191" className="hover:underline">(617) 555-0191</a></div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-gold text-lg mt-0.5">&#x1F514;</span>
                    <div>
                      <div className="font-bold">Claims Hotline</div>
                      <div className="text-slate text-sm">24/7 — <a href="tel:(617) 555-0192" className="hover:underline">(617) 555-0192</a></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-7">
                <form className="bg-white border border-rule p-8 space-y-5" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); setTimeout(() => setSubmitted(false), 3000); }}>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Robert Sterling"
                        className="w-full border border-rule px-4 py-3 text-navy bg-ivory placeholder:text-slate/50 focus:border-gold focus:ring-1 focus:ring-gold/30 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                      <input
                        id="email"
                        type="email"
                        placeholder="robert@company.com"
                        className="w-full border border-rule px-4 py-3 text-navy bg-ivory placeholder:text-slate/50 focus:border-gold focus:ring-1 focus:ring-gold/30 focus:outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="coverage" className="block text-sm font-medium mb-2">Coverage Needed</label>
                    <select
                      id="coverage"
                      className="w-full border border-rule px-4 py-3 text-navy bg-ivory focus:border-gold focus:ring-1 focus:ring-gold/30 focus:outline-none"
                    >
                      <option value="">Select coverage type</option>
                      <option value="life">Life Insurance</option>
                      <option value="health">Health Insurance</option>
                      <option value="auto">Auto Insurance</option>
                      <option value="home">Home Insurance</option>
                      <option value="business">Business Insurance</option>
                      <option value="umbrella">Umbrella Insurance</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Brief Description</label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Tell us about your coverage needs..."
                      className="w-full border border-rule px-4 py-3 text-navy bg-ivory placeholder:text-slate/50 focus:border-gold focus:ring-1 focus:ring-gold/30 focus:outline-none resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-navy text-ivory py-4 text-lg tracking-wider uppercase hover:bg-navy-light transition-colors"
                  >
                    Request Quote
                  </button>
              {submitted && <p className="text-center text-green-500 text-sm mt-2 animate-pulse">Sent! We will be in touch soon.</p>}
                  <p className="text-center text-slate text-xs">
                    No obligation. Quotes delivered within 24 hours.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      
        
        {/* Gallery Section */}
        <section className="py-24" aria-labelledby="gallery-heading">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 id="gallery-heading" className="text-3xl md:text-4xl font-bold mb-4">Our Work</h2>
              <p className="text-current/60">A selection of recent projects.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {{[
          {title: 'Before & After', img: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&q=80', desc: 'Complete renovation project'},
          {title: 'Residential Job', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&q=80', desc: 'Professional service delivery'},
          {title: 'Commercial Project', img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80', desc: 'Large-scale commercial work'},
          {title: 'Emergency Call', img: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&q=80', desc: 'Same-day emergency response'},
          {title: 'Custom Solution', img: 'https://images.unsplash.com/photo-1585128792020-803d29415281?w=400&q=80', desc: 'Tailored to client needs'},
          {title: 'Team in Action', img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&q=80', desc: 'Our expert team at work'}
              ].map((item, i) => (
                <div key={i} className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-end">
                    <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="font-bold text-sm">{item.title}</div>
                      <div className="text-xs text-white/70">{item.desc}</div>
                    </div>
                  </div>
                </div>
              ))}}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24" aria-labelledby="faq-heading">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-current/60">Everything you need to know.</p>
            </div>
            <div className="space-y-4">
              {{[
          {question: 'How do I schedule an appointment?', answer: 'Call us, text us, or fill out the contact form. We typically respond within 1 hour during business hours.'},
          {question: 'Are you licensed and insured?', answer: 'Yes. We are fully licensed, bonded, and carry comprehensive liability insurance.'},
          {question: 'Do you offer free estimates?', answer: 'Yes. We provide free, no-obligation estimates for all services. Call or fill out our form to get started.'},
          {question: 'What areas do you serve?', answer: 'We serve the entire metro area. Contact us to confirm service availability in your specific location.'}
              ].map((faq, i) => (
                <details key={i} className="group border border-current/10 rounded-xl p-5 [&_summary]:cursor-pointer">
                  <summary className="font-medium flex justify-between items-center list-none">
                    {faq.question}
                    <span className="ml-4 text-current/40 group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-3 text-current/60 text-sm leading-relaxed">{faq.answer}</p>
                </details>
              ))}}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-navy text-ivory py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <div className="text-lg tracking-[0.15em] uppercase font-bold">
                Sterling <span className="text-gold">Insurance</span> Group
              </div>
              <div className="text-slate text-xs tracking-wider mt-1">Comprehensive Protection Solutions</div>
            </div>
            <div className="flex gap-6 text-sm text-slate">
              <span>200 State Street, Boston</span>
              <span><a href="tel:(617) 555-0191" className="hover:underline">(617) 555-0191</a></span>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-navy-light flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate">
            <span>&copy; 2026 Sterling Insurance Group. All rights reserved.</span>
            <div className="flex gap-6">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <span>Licensing Information</span>
            </div>
          </div>
        
            <div className="flex gap-4 text-sm">
              <a href="#" className="hover:underline">Twitter</a>
              <a href="#" className="hover:underline">LinkedIn</a>
              <a href="#" className="hover:underline">Instagram</a>
            </div>
          </div>
      </footer>
    </div>
  );
}
