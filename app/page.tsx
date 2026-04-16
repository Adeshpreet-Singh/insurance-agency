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
  const [activeService, setActiveService] = useState<number | null>(null);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-ivory text-navy px-4 md:px-8">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-navy text-ivory px-4 py-2 rounded z-[100] font-bold px-4 md:px-8">
        Skip to main content
      </a>

      <header>
        <nav role="navigation" aria-label="Main navigation" className="fixed top-0 left-0 right-0 z-50 bg-ivory/95 backdrop-blur-md border-b border-rule px-4 md:px-8">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center px-4 md:px-8">
            <div>
              <h1 className="text-xl tracking-[0.15em] uppercase font-bold px-4 md:px-8" style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "1.5rem", lineHeight: "1.2" }}>
                Sterling <span className="text-gold px-4 md:px-8">Insurance</span>
              </h1>
              <p className="text-[10px] tracking-[0.3em] text-slate uppercase px-4 md:px-8" style={{ fontSize: "1.125rem", lineHeight: "1.7", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>Comprehensive Protection Since 1991</p>
            </div>
            <div className="hidden md:flex items-center gap-8 px-4 md:px-8">
              {['services', 'team', 'results', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() = style={{ padding: "1rem 2rem", fontSize: "1.125rem", fontWeight: "600", borderRadius: "0.5rem", background: "var(--primary)", color: "white", border: "none", cursor: "pointer", transition: "transform 0.2s, box-shadow 0.2s" }}> scrollTo(item)}
                  className="text-sm text-charcoal hover:text-gold transition-colors tracking-wider uppercase px-4 md:px-8"
                >
                  {item === 'services' ? 'Coverage' : item === 'results' ? 'Results' : item}
                </button>
              ))}
              <button
                onClick={() = style={{ padding: "1rem 2rem", fontSize: "1.125rem", fontWeight: "600", borderRadius: "0.5rem", background: "var(--primary)", color: "white", border: "none", cursor: "pointer", transition: "transform 0.2s, box-shadow 0.2s" }}> scrollTo('contact')}
                className="bg-navy text-ivory px-6 py-2.5 text-sm tracking-wider uppercase hover:bg-navy-light transition-colors px-4 md:px-8"
              >
                Get a Quote
              </button>
            </div>
            <button
              onClick={() = style={{ padding: "1rem 2rem", fontSize: "1.125rem", fontWeight: "600", borderRadius: "0.5rem", background: "var(--primary)", color: "white", border: "none", cursor: "pointer", transition: "transform 0.2s, box-shadow 0.2s" }}> setMenuOpen(!menuOpen)}
              className="md:hidden text-navy px-4 md:px-8"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <svg className="w-6 h-6 px-4 md:px-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" / style={{ fontSize: "1.125rem", lineHeight: "1.7", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" / style={{ fontSize: "1.125rem", lineHeight: "1.7", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>
                )}
              </svg>
            </button>
          </div>
          {menuOpen && (
            <div className="md:hidden bg-ivory border-t border-rule px-6 py-4 space-y-1 px-4 md:px-8">
              {['services', 'team', 'results', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() = style={{ padding: "1rem 2rem", fontSize: "1.125rem", fontWeight: "600", borderRadius: "0.5rem", background: "var(--primary)", color: "white", border: "none", cursor: "pointer", transition: "transform 0.2s, box-shadow 0.2s" }}> scrollTo(item)}
                  className="block w-full text-left px-4 py-3 text-charcoal hover:text-gold tracking-wider uppercase px-4 md:px-8"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </nav>
      </header>

      <main id="main" role="main">
        {/* Hero */}
        <section className="pt-28 pb-20 md:pb-32 px-4 md:px-8" style={{ padding: "5rem 1rem", marginBottom: "2rem" }}>
          <div className="max-w-6xl mx-auto px-6 px-4 md:px-8">
            <div className="grid md:grid-cols-12 gap-8 items-end px-4 md:px-8">
              <div className="md:col-span-8 px-4 md:px-8">
                <p className="text-gold text-sm tracking-[0.3em] uppercase mb-6 px-4 md:px-8" style={{ fontSize: "1.125rem", lineHeight: "1.7", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>Boston &middot; Established 1991</p>
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight mb-8 px-4 md:px-8" style={{ fontSize: "2.25rem", fontWeight: "bold", marginBottom: "1.25rem", lineHeight: "1.3" }}>
                  Protecting
                  <br />
                  what <span className="text-gold px-4 md:px-8">matters.</span>
                </h2>
                <p className="text-xl text-slate max-w-lg leading-relaxed mb-10 drop-cap px-4 md:px-8" style={{ fontSize: "1.125rem", lineHeight: "1.7", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>
                  Three decades of trusted insurance counsel. We don&apos;t just sell policies — we build protective shields around everything you&apos;ve worked hard to build.
                </p>
                <div className="flex gap-4 px-4 md:px-8">
                  <button
                    onClick={() = style={{ padding: "1rem 2rem", fontSize: "1.125rem", fontWeight: "600", borderRadius: "0.5rem", background: "var(--primary)", color: "white", border: "none", cursor: "pointer", transition: "transform 0.2s, box-shadow 0.2s" }}> scrollTo('contact')}
                    className="bg-navy text-ivory px-8 py-4 text-lg tracking-wider uppercase hover:bg-navy-light transition-colors px-4 md:px-8"
                  >
                    Get a Quote
                  </button>
                  <button
                    onClick={() = style={{ padding: "1rem 2rem", fontSize: "1.125rem", fontWeight: "600", borderRadius: "0.5rem", background: "var(--primary)", color: "white", border: "none", cursor: "pointer", transition: "transform 0.2s, box-shadow 0.2s" }}> scrollTo('services')}
                    className="border-2 border-navy text-navy px-8 py-4 text-lg tracking-wider uppercase hover:bg-navy hover:text-ivory transition-colors px-4 md:px-8"
                  >
                    Coverage Options
                  </button>
                </div>
              </div>
              <div className="md:col-span-4 flex flex-col items-end gap-6 text-right px-4 md:px-8">
                <div className="seal w-28 h-28 flex flex-col items-center justify-center px-4 md:px-8">
                  <span className="text-gold text-2xl font-bold px-4 md:px-8">33</span>
                  <span className="text-slate text-xs tracking-wider uppercase px-4 md:px-8">Years</span>
                </div>
                <div>
                  <div className="text-4xl font-bold text-navy px-4 md:px-8">$2.1B</div>
                  <div className="text-sm text-slate tracking-wider uppercase px-4 md:px-8">Claims paid</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-navy px-4 md:px-8">15,000+</div>
                  <div className="text-sm text-slate tracking-wider uppercase px-4 md:px-8">Families protected</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-6xl mx-auto px-6 px-4 md:px-8">
          <div className="ornament-rule text-gold text-lg px-4 md:px-8">&#x2726;</div>
        </div>

        {/* Services */}
        <section id="services" className="py-24 px-4 md:px-8" aria-labelledby="services-heading" style={{ padding: "5rem 1rem", marginBottom: "2rem" }}>
          <div className="max-w-6xl mx-auto px-6 px-4 md:px-8">
            <div className="grid md:grid-cols-12 gap-8 mb-16 px-4 md:px-8">
              <div className="md:col-span-4 px-4 md:px-8">
                <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3 px-4 md:px-8" style={{ fontSize: "1.125rem", lineHeight: "1.7", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>What We Cover</p>
                <h2 id="services-heading" className="text-4xl md:text-5xl font-bold px-4 md:px-8" style={{ fontSize: "2.25rem", fontWeight: "bold", marginBottom: "1.25rem", lineHeight: "1.3" }}>
                  Coverage
                  <br />
                  Options
                </h2>
              </div>
              <div className="md:col-span-8 flex items-end px-4 md:px-8">
                <p className="text-slate text-lg leading-relaxed px-4 md:px-8" style={{ fontSize: "1.125rem", lineHeight: "1.7", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>
                  From your family&apos;s health to your business&apos;s future, we offer comprehensive coverage solutions tailored to your unique needs.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8">
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
                  <div className="flex items-start justify-between mb-4 px-4 md:px-8">
                    <h3 className="text-xl font-bold px-4 md:px-8" style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem", lineHeight: "1.4" }}>{svc.name}</h3>
                    <span className="text-gold text-xl px-4 md:px-8">{activeService === i ? '\u2212' : '\u002B'}</span>
                  </div>
                  <p className="text-slate leading-relaxed mb-4 text-sm px-4 md:px-8" style={{ fontSize: "1.125rem", lineHeight: "1.7", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>{svc.desc}</p>
                  {activeService === i && (
                    <div className="border-t border-rule pt-4 mt-4 px-4 md:px-8">
                      <p className="text-xs tracking-wider uppercase text-gold mb-3 px-4 md:px-8" style={{ fontSize: "1.125rem", lineHeight: "1.7", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>Policy Types</p>
                      <ul className="space-y-2 px-4 md:px-8">
                        {svc.details.map((d, j) => (
                          <li key={j} className="text-sm text-charcoal flex items-center gap-2 px-4 md:px-8">
                            <span className="w-1 h-1 rounded-full bg-gold px-4 md:px-8" />
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
        <section id="team" className="py-24 bg-navy text-ivory px-4 md:px-8" aria-labelledby="team-heading" style={{ padding: "5rem 1rem", marginBottom: "2rem" }}>
          <div className="max-w-6xl mx-auto px-6 px-4 md:px-8">
            <div className="grid md:grid-cols-12 gap-8 mb-16 px-4 md:px-8">
              <div className="md:col-span-5 px-4 md:px-8">
                <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3 px-4 md:px-8" style={{ fontSize: "1.125rem", lineHeight: "1.7", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>Our Team</p>
                <h2 id="team-heading" className="text-4xl md:text-5xl font-bold px-4 md:px-8" style={{ fontSize: "2.25rem", fontWeight: "bold", marginBottom: "1.25rem", lineHeight: "1.3" }}>
                  The advisors behind
                  <br />
                  your protection.
                </h2>
              </div>
              <div className="md:col-span-7 flex items-end px-4 md:px-8">
                <p className="text-slate text-lg leading-relaxed px-4 md:px-8" style={{ fontSize: "1.125rem", lineHeight: "1.7", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>
                  Our licensed advisors hold the industry&apos;s highest certifications and bring decades of experience navigating complex insurance needs.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-8">
              {TEAM.map((member, i) => (
                <div key={i} className="border border-gold-muted p-6 hover:border-gold/40 transition-all px-4 md:px-8">
                  <div className="w-full aspect-square bg-navy-light mb-6 flex items-center justify-center text-5xl text-gold/30 px-4 md:px-8">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="text-gold text-xs tracking-wider uppercase mb-1 px-4 md:px-8">{member.title}</div>
                  <h3 className="text-xl font-bold mb-2 px-4 md:px-8" style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem", lineHeight: "1.4" }}>{member.name}</h3>
                  <div className="text-slate text-sm space-y-1 px-4 md:px-8">
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
        <section id="results" className="py-24 px-4 md:px-8" aria-labelledby="results-heading" style={{ padding: "5rem 1rem", marginBottom: "2rem" }}>
          <div className="max-w-6xl mx-auto px-6 px-4 md:px-8">
            <div className="text-center mb-16 px-4 md:px-8">
              <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3 px-4 md:px-8" style={{ fontSize: "1.125rem", lineHeight: "1.7", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>Client Trust</p>
              <h2 id="results-heading" className="text-4xl md:text-5xl font-bold px-4 md:px-8" style={{ fontSize: "2.25rem", fontWeight: "bold", marginBottom: "1.25rem", lineHeight: "1.3" }}>
                What our clients say
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 px-4 md:px-8">
              {TESTIMONIALS.map((t, i) => (
                <blockquote key={i} className="pull-quote px-4 md:px-8">
                  <p className="text-xl leading-relaxed mb-6 italic px-4 md:px-8" style={{ fontSize: "1.125rem", lineHeight: "1.7", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>&ldquo;{t.text}&rdquo;</p>
                  <footer>
                    <cite className="not-italic px-4 md:px-8">
                      <span className="font-bold px-4 md:px-8">{t.name}</span>
                      <br />
                      <span className="text-slate text-sm px-4 md:px-8">{t.role}</span>
                    </cite>
                  </footer>
                </blockquote>
              ))}
            </div>

            {/* Awards */}
            <div className="mt-20 grid md:grid-cols-4 gap-6 text-center px-4 md:px-8">
              {[
                { label: 'Independent Agents', sub: 'Trusted Choice Member' },
                { label: 'AM Best A+', sub: 'Superior Rating' },
                { label: 'IIABA', sub: 'Best Practices Agency' },
                { label: 'BBB A+ Rating', sub: 'Accredited Business' },
              ].map((award, i) => (
                <div key={i} className="border border-rule p-6 px-4 md:px-8">
                  <div className="text-lg font-bold mb-1 px-4 md:px-8">{award.label}</div>
                  <div className="text-slate text-sm px-4 md:px-8">{award.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-24 bg-parchment px-4 md:px-8" aria-labelledby="contact-heading" style={{ padding: "5rem 1rem", marginBottom: "2rem" }}>
          <div className="max-w-6xl mx-auto px-6 px-4 md:px-8">
            <div className="grid md:grid-cols-12 gap-12 px-4 md:px-8">
              <div className="md:col-span-5 px-4 md:px-8">
                <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3 px-4 md:px-8" style={{ fontSize: "1.125rem", lineHeight: "1.7", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>Get In Touch</p>
                <h2 id="contact-heading" className="text-4xl md:text-5xl font-bold mb-6 px-4 md:px-8" style={{ fontSize: "2.25rem", fontWeight: "bold", marginBottom: "1.25rem", lineHeight: "1.3" }}>
                  Request a
                  <br />
                  free quote.
                </h2>
                <p className="text-slate leading-relaxed mb-8 px-4 md:px-8" style={{ fontSize: "1.125rem", lineHeight: "1.7", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>
                  Get a personalized quote in under 24 hours. Our advisors will review your needs and find the optimal coverage at the best value.
                </p>
                <div className="space-y-4 px-4 md:px-8">
                  <div className="flex items-start gap-4 px-4 md:px-8">
                    <span className="text-gold text-lg mt-0.5 px-4 md:px-8">&#x1F4CD;</span>
                    <div>
                      <div className="font-bold px-4 md:px-8">Office</div>
                      <div className="text-slate text-sm px-4 md:px-8">200 State Street, Suite 1200<br />Boston, MA 02109</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 px-4 md:px-8">
                    <span className="text-gold text-lg mt-0.5 px-4 md:px-8">&#x1F4DE;</span>
                    <div>
                      <div className="font-bold px-4 md:px-8">Phone</div>
                      <div className="text-slate text-sm px-4 md:px-8">(617) 555-0191</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 px-4 md:px-8">
                    <span className="text-gold text-lg mt-0.5 px-4 md:px-8">&#x1F514;</span>
                    <div>
                      <div className="font-bold px-4 md:px-8">Claims Hotline</div>
                      <div className="text-slate text-sm px-4 md:px-8">24/7 — (617) 555-0192</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-7 px-4 md:px-8">
                <form className="bg-white border border-rule p-8 space-y-5 px-4 md:px-8" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-5 px-4 md:px-8">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2 px-4 md:px-8">Full Name</label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Robert Sterling"
                        className="w-full border border-rule px-4 py-3 text-navy bg-ivory placeholder:text-slate/50 focus:border-gold focus:ring-1 focus:ring-gold/30 focus:outline-none px-4 md:px-8"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2 px-4 md:px-8">Email</label>
                      <input
                        id="email"
                        type="email"
                        placeholder="robert@company.com"
                        className="w-full border border-rule px-4 py-3 text-navy bg-ivory placeholder:text-slate/50 focus:border-gold focus:ring-1 focus:ring-gold/30 focus:outline-none px-4 md:px-8"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="coverage" className="block text-sm font-medium mb-2 px-4 md:px-8">Coverage Needed</label>
                    <select
                      id="coverage"
                      className="w-full border border-rule px-4 py-3 text-navy bg-ivory focus:border-gold focus:ring-1 focus:ring-gold/30 focus:outline-none px-4 md:px-8"
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
                    <label htmlFor="message" className="block text-sm font-medium mb-2 px-4 md:px-8">Brief Description</label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Tell us about your coverage needs..."
                      className="w-full border border-rule px-4 py-3 text-navy bg-ivory placeholder:text-slate/50 focus:border-gold focus:ring-1 focus:ring-gold/30 focus:outline-none resize-none px-4 md:px-8"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-navy text-ivory py-4 text-lg tracking-wider uppercase hover:bg-navy-light transition-colors px-4 md:px-8"
                   style={{ padding: "1rem 2rem", fontSize: "1.125rem", fontWeight: "600", borderRadius: "0.5rem", background: "var(--primary)", color: "white", border: "none", cursor: "pointer", transition: "transform 0.2s, box-shadow 0.2s" }}>
                    Request Quote
                  </button>
                  <p className="text-center text-slate text-xs px-4 md:px-8" style={{ fontSize: "1.125rem", lineHeight: "1.7", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>
                    No obligation. Quotes delivered within 24 hours.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      
      <section style={{ padding: "5rem 1rem", background: "var(--primary)", color: "white", textAlign: "center" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem" }}>Ready to Get Started?</h2>
          <p style={{ fontSize: "1.25rem", marginBottom: "2rem", opacity: 0.9 }}>Contact us today to discuss your project and get a free consultation.</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <button style={{ padding: "1rem 2rem", fontSize: "1.125rem", fontWeight: "600", borderRadius: "0.5rem", background: "white", color: "var(--primary)", border: "none", cursor: "pointer" }}>Get Free Quote</button>
            <button style={{ padding: "1rem 2rem", fontSize: "1.125rem", fontWeight: "600", borderRadius: "0.5rem", background: "transparent", color: "white", border: "2px solid white", cursor: "pointer" }}>Schedule a Call</button>
          </div>
        </div>
      </section>

  </main>

      <footer className="bg-navy text-ivory py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto px-6 px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 px-4 md:px-8">
            <div>
              <div className="text-lg tracking-[0.15em] uppercase font-bold px-4 md:px-8">
                Sterling <span className="text-gold px-4 md:px-8">Insurance</span> Group
              </div>
              <div className="text-slate text-xs tracking-wider mt-1 px-4 md:px-8">Comprehensive Protection Solutions</div>
            </div>
            <div className="flex gap-6 text-sm text-slate px-4 md:px-8">
              <span>200 State Street, Boston</span>
              <span>(617) 555-0191</span>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-navy-light flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate px-4 md:px-8">
            <span>&copy; 2026 Sterling Insurance Group. All rights reserved.</span>
            <div className="flex gap-6 px-4 md:px-8">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <span>Licensing Information</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
