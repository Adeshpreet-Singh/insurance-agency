'use client';

import { useEffect, useState } from 'react';

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', insurance: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  const faqs = [
    { q: 'What types of insurance do you offer?', a: 'We offer a comprehensive range including life insurance, health insurance, auto insurance, home and property insurance, business liability, workers compensation, and specialized coverage for unique needs.' },
    { q: 'How do I file a claim?', a: 'You can file a claim through our online portal, by calling our 24/7 claims hotline, or by contacting your dedicated agent directly. We aim to acknowledge all claims within 2 hours and begin processing immediately.' },
    { q: 'Can I bundle multiple policies for a discount?', a: 'Absolutely. Our bundling program offers discounts of up to 25% when you combine multiple policies. The most popular bundles are home + auto, life + health, and our comprehensive family protection package.' },
    { q: 'How quickly can I get coverage?', a: 'For most standard policies, coverage can begin the same day you apply. After a quick assessment and quote, your policy documents are issued digitally within hours of approval.' },
  ];

  return (
    <>
      {/* Navigation */}
      <nav className="nav-stripe">
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
            <div style={{ width: 32, height: 32, background: 'var(--accent)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: 16 }}>S</div>
            <span style={{ fontFamily: 'var(--font)', fontWeight: 600, fontSize: '1.125rem', color: 'var(--heading)' }}>Shield Insurance</span>
          </a>
          <div style={{ display: 'flex', alignItems: 'center', gap: 28 }} className="nav-desktop">
            <a href="#coverage" className="nav-link">Coverage</a>
            <a href="#why-us" className="nav-link">Why Us</a>
            <a href="#plans" className="nav-link">Plans</a>
            <a href="#testimonials" className="nav-link">Testimonials</a>
            <a href="#faq" className="nav-link">FAQ</a>
            <a href="#contact" className="nav-link">Contact</a>
            <a href="#contact" className="btn-primary">Get a Quote</a>
          </div>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 8 }} className="mobile-toggle">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--heading)" strokeWidth="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
          </button>
        </div>
        {mobileMenuOpen && (
          <div style={{ padding: '16px 24px', borderTop: '1px solid var(--border)', display: 'flex', flexDirection: 'column', gap: 12 }}>
            <a href="#coverage" className="nav-link">Coverage</a>
            <a href="#why-us" className="nav-link">Why Us</a>
            <a href="#plans" className="nav-link">Plans</a>
            <a href="#contact" className="nav-link">Contact</a>
            <a href="#contact" className="btn-primary" style={{ textAlign: 'center' }}>Get a Quote</a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="hero" style={{ paddingTop: 140, paddingBottom: 100, minHeight: '85vh', display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'absolute', top: -200, right: -200, width: 600, height: 600, background: 'radial-gradient(circle, rgba(83,58,253,0.2) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -100, left: -100, width: 400, height: 400, background: 'radial-gradient(circle, rgba(185,185,249,0.1) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 2, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <div className="badge badge-dark" style={{ marginBottom: 20 }}>Trusted by 50,000+ Families</div>
            <h1 style={{ color: 'var(--dark-text)', marginBottom: 20, fontWeight: 300 }}>
              Protect what matters <span style={{ color: 'var(--purple-200)', fontWeight: 400 }}>most to you</span>
            </h1>
            <p style={{ color: 'var(--dark-muted)', fontSize: '1.125rem', marginBottom: 32, maxWidth: 480, lineHeight: 1.6 }}>
              Comprehensive insurance solutions tailored to your life. From health and home to auto and business, we provide the coverage you need with the service you deserve.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 48 }}>
              <a href="#contact" className="btn-primary btn-primary-lg">Get Free Quote</a>
              <a href="#coverage" className="btn-ghost btn-ghost-lg" style={{ borderColor: 'var(--purple-400)', color: '#fff' }}>Explore Coverage</a>
            </div>
            <div style={{ display: 'flex', gap: 32 }}>
              {[
                { num: '50K+', label: 'Protected Families' },
                { num: '$2B+', label: 'Claims Paid' },
                { num: '24/7', label: 'Support Available' },
              ].map((s, i) => (
                <div key={i}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--purple-200)', letterSpacing: '-0.48px' }}>{s.num}</div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--dark-muted)' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ position: 'relative' }}>
            <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=700&q=80" alt="Family protection" style={{ width: '100%', borderRadius: 8, boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }} />
            <div style={{ position: 'absolute', bottom: -20, left: -20, background: '#fff', borderRadius: 8, padding: '16px 20px', boxShadow: 'var(--shadow-card)', display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--purple-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>🛡️</div>
              <div>
                <div style={{ fontWeight: 600, color: 'var(--heading)', fontSize: '0.875rem' }}>Claims Settled</div>
                <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--accent)' }}>98.5%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Types */}
      <section id="coverage" style={{ padding: '100px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
            <p className="label-text" style={{ marginBottom: 12 }}>Our Coverage</p>
            <h2 style={{ marginBottom: 16 }}>Insurance solutions for every need</h2>
            <p style={{ maxWidth: 560, margin: '0 auto', fontSize: '1.0625rem', lineHeight: 1.6 }}>
              Whether you are protecting your family, your health, your home, or your business, we have the right coverage for you.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {[
              { icon: '❤️', title: 'Life Insurance', desc: 'Secure your family financial future with term life, whole life, and universal life policies. Coverage from $100K to $10M with competitive premiums.' },
              { icon: '🏥', title: 'Health Insurance', desc: 'Comprehensive health coverage including individual, family, and group plans. Access to 500,000+ providers and nationwide hospital networks.' },
              { icon: '🚗', title: 'Auto Insurance', desc: 'Full coverage auto insurance with collision, comprehensive, liability, and uninsured motorist protection. Multi-vehicle discounts available.' },
              { icon: '🏠', title: 'Home Insurance', desc: 'Protect your biggest investment with dwelling, personal property, liability, and additional living expense coverage. Flood and earthquake riders available.' },
              { icon: '🏢', title: 'Business Insurance', desc: 'Complete business protection including general liability, professional liability, property, cyber, and directors & officers insurance.' },
              { icon: '✈️', title: 'Travel Insurance', desc: 'Travel with confidence. Trip cancellation, medical evacuation, baggage protection, and 24/7 emergency assistance worldwide.' },
            ].map((cov, i) => (
              <div key={i} className={'card-coverage reveal reveal-delay-${i % 4 + 1}'}>
                <div style={{ width: 48, height: 48, borderRadius: 6, background: 'var(--purple-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', marginBottom: 16 }}>{cov.icon}</div>
                <h3 style={{ marginBottom: 8, fontSize: '1.125rem' }}>{cov.title}</h3>
                <p style={{ fontSize: '0.9375rem', lineHeight: 1.6, marginBottom: 16 }}>{cov.desc}</p>
                <a href="#contact" style={{ fontSize: '0.875rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 4 }}>Get Quote →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="dark-section" style={{ padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -200, right: -100, width: 500, height: 500, background: 'radial-gradient(circle, rgba(83,58,253,0.12) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
            <p className="label-text" style={{ marginBottom: 12 }}>Why Shield Insurance</p>
            <h2 style={{ marginBottom: 16 }}>The protection you can count on</h2>
            <p style={{ maxWidth: 560, margin: '0 auto', fontSize: '1.0625rem', lineHeight: 1.6 }}>
              We combine comprehensive coverage with exceptional service to deliver an insurance experience that puts you first.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center', marginBottom: 64 }}>
            <div className="reveal">
              <img src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&q=80" alt="Our team" style={{ width: '100%', borderRadius: 8 }} />
            </div>
            <div className="reveal">
              <h3 style={{ marginBottom: 16, fontSize: '1.75rem' }}>We are more than an insurance provider</h3>
              <p style={{ marginBottom: 20, lineHeight: 1.6, fontSize: '1.0625rem' }}>
                Since 1998, Shield Insurance has been dedicated to providing peace of mind through comprehensive coverage and genuine care. We believe insurance should be simple, transparent, and accessible to everyone.
              </p>
              <p style={{ marginBottom: 24, lineHeight: 1.6, fontSize: '1.0625rem' }}>
                Our team of licensed agents takes the time to understand your unique situation and recommend coverage that truly fits your needs and budget. No pushy sales tactics, no hidden fees, just honest protection.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                {['A+ Rated Carrier', 'Licensed in 50 States', '24/7 Claims Support', 'No Hidden Fees'].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div className="check-circle">✓</div>
                    <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
            {[
              { number: '50K+', label: 'Families Protected' },
              { number: '$2B+', label: 'Claims Paid' },
              { number: '98.5%', label: 'Claims Settled' },
              { number: '26+', label: 'Years of Trust' },
            ].map((stat, i) => (
              <div key={i} className={'stat-card-dark reveal reveal-delay-${i + 1}'}>
                <div style={{ fontSize: '2.5rem', fontWeight: 300, color: 'var(--purple-200)', marginBottom: 8, letterSpacing: '-0.64px' }}>{stat.number}</div>
                <div style={{ fontWeight: 600, fontSize: '0.875rem' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans / Pricing */}
      <section id="plans" style={{ padding: '100px 0', background: 'var(--border-light)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
            <p className="label-text" style={{ marginBottom: 12 }}>Insurance Plans</p>
            <h2 style={{ marginBottom: 16 }}>Plans designed for every budget</h2>
            <p style={{ maxWidth: 560, margin: '0 auto', fontSize: '1.0625rem', lineHeight: 1.6 }}>
              Choose the level of protection that is right for you. All plans include our award-winning customer service and hassle-free claims process.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {[
              { name: 'Essential', price: '$49', period: '/month', desc: 'Core protection for individuals', features: ['Basic life coverage ($250K)', 'Health insurance (individual)', 'Accidental death benefit', 'Online claims portal', 'Email support'], popular: false },
              { name: 'Family Shield', price: '$129', period: '/month', desc: 'Complete family protection', features: ['Enhanced life coverage ($500K)', 'Family health insurance', 'Home insurance (basic)', 'Auto insurance (1 vehicle)', 'Dedicated agent', '24/7 phone support'], popular: true },
              { name: 'Total Protection', price: '$249', period: '/month', desc: 'Comprehensive coverage, zero worries', features: ['Premium life coverage ($1M)', 'Premium family health', 'Home insurance (comprehensive)', 'Auto insurance (2 vehicles)', 'Umbrella liability ($1M)', 'Travel insurance', 'Priority claims processing', 'Annual policy review'], popular: false },
            ].map((plan, i) => (
              <div key={i} className={'card reveal reveal-delay-${i + 1}'} style={{ padding: '32px', position: 'relative', border: plan.popular ? '2px solid var(--accent)' : undefined }}>
                {plan.popular && <div style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', background: 'var(--accent)', color: '#fff', padding: '4px 16px', borderRadius: 100, fontSize: '0.75rem', fontWeight: 600 }}>Most Popular</div>}
                <h3 style={{ fontSize: '1.25rem', marginBottom: 4 }}>{plan.name}</h3>
                <div style={{ marginBottom: 8 }}>
                  <span style={{ fontSize: '2.5rem', fontWeight: 300, color: 'var(--heading)', letterSpacing: '-0.64px' }}>{plan.price}</span>
                  <span style={{ fontSize: '0.875rem', color: 'var(--body)' }}>{plan.period}</span>
                </div>
                <p style={{ fontSize: '0.875rem', marginBottom: 24 }}>{plan.desc}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
                  {plan.features.map((f, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <div className="check-circle">✓</div>
                      <span style={{ fontSize: '0.875rem' }}>{f}</span>
                    </div>
                  ))}
                </div>
                <a href="#contact" className={plan.popular ? 'btn-primary' : 'btn-ghost'} style={{ width: '100%', textAlign: 'center' }}>Get This Plan</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '100px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
            <p className="label-text" style={{ marginBottom: 12 }}>How It Works</p>
            <h2 style={{ marginBottom: 16 }}>Getting covered is simple</h2>
            <p style={{ maxWidth: 560, margin: '0 auto', fontSize: '1.0625rem', lineHeight: 1.6 }}>
              From quote to coverage in just four easy steps. No paperwork headaches, no confusing jargon.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
            {[
              { step: '01', icon: '📝', title: 'Request a Quote', desc: 'Fill out our simple online form or call us. Takes less than 5 minutes.' },
              { step: '02', icon: '🔍', title: 'Get Assessed', desc: 'Our agents review your needs and find the best coverage options for you.' },
              { step: '03', icon: '📋', title: 'Choose Your Plan', desc: 'Compare plans side by side and select the one that fits your budget and needs.' },
              { step: '04', icon: '🛡️', title: 'Start Coverage', desc: 'Your policy is issued digitally. Coverage can begin the same day.' },
            ].map((phase, i) => (
              <div key={i} className={'reveal reveal-delay-${i + 1}'} style={{ textAlign: 'center' }}>
                <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'var(--purple-50)', border: '2px solid var(--purple-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontSize: '2rem' }}>{phase.icon}</div>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent)', marginBottom: 8, letterSpacing: '0.08em' }}>STEP {phase.step}</div>
                <h3 style={{ marginBottom: 8, fontSize: '1.0625rem' }}>{phase.title}</h3>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" style={{ padding: '100px 0', background: 'var(--border-light)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
            <p className="label-text" style={{ marginBottom: 12 }}>Testimonials</p>
            <h2 style={{ marginBottom: 16 }}>What our clients say</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {[
              { quote: "When our house was damaged in a storm, Shield Insurance had an adjuster out within 24 hours and our claim was settled in less than a week. Incredible service during a stressful time.", name: 'Robert & Lisa Chen', title: 'Homeowners, California', stars: 5 },
              { quote: "I switched from a big national insurer to Shield and saved $2,400 a year with better coverage. My agent Sarah actually takes the time to explain everything and answer my questions.", name: 'Marcus Williams', title: 'Family Shield Plan', stars: 5 },
              { quote: "As a small business owner, I needed comprehensive coverage without breaking the bank. Shield's business insurance package was perfect — affordable, thorough, and their support team is always available.", name: 'Jennifer Adams', title: 'CEO, Adams Consulting', stars: 5 },
            ].map((t, i) => (
              <div key={i} className={'testimonial-card reveal reveal-delay-${i + 1}'}>
                <div className="stars" style={{ marginBottom: 16 }}>{'★'.repeat(t.stars)}</div>
                <p style={{ marginBottom: 24, lineHeight: 1.6, fontSize: '0.9375rem' }}>{t.quote}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--purple-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: 'var(--accent)', fontSize: '0.875rem' }}>{t.name.split(' ').map(w => w[0]).join('').slice(0, 2)}</div>
                  <div>
                    <div style={{ fontWeight: 600, color: 'var(--heading)', fontSize: '0.9375rem' }}>{t.name}</div>
                    <div style={{ fontSize: '0.8125rem', color: 'var(--body)' }}>{t.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ padding: '100px 0' }}>
        <div style={{ maxWidth: 720, margin: '0 auto', padding: '0 24px' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
            <p className="label-text" style={{ marginBottom: 12 }}>FAQ</p>
            <h2 style={{ marginBottom: 16 }}>Common questions</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {faqs.map((faq, i) => (
              <div key={i} className={'faq-item reveal ${activeFaq === i ? 'open' : ''}'}>
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  style={{ width: '100%', padding: '16px 20px', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'var(--font)', fontSize: '0.9375rem', fontWeight: 600, color: 'var(--heading)', textAlign: 'left' }}
                >
                  <span>{faq.q}</span>
                  <span style={{ fontSize: '1.25rem', color: 'var(--accent)', transition: 'transform 0.3s', transform: activeFaq === i ? 'rotate(45deg)' : 'rotate(0)' }}>+</span>
                </button>
                <div className={'faq-answer ${activeFaq === i ? 'open' : ''}'} style={{ padding: activeFaq === i ? '0 20px 16px' : '0 20px' }}>
                  <p style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="dark-section" style={{ padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -100, left: -100, width: 400, height: 400, background: 'radial-gradient(circle, rgba(83,58,253,0.12) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>
            <div className="reveal">
              <p className="label-text" style={{ marginBottom: 12 }}>Get a Quote</p>
              <h2 style={{ marginBottom: 16 }}>Protect your family today</h2>
              <p style={{ marginBottom: 32, fontSize: '1.0625rem', lineHeight: 1.6 }}>
                Fill out the form and one of our licensed agents will contact you within 2 hours with a personalized quote. No obligation, no pressure.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {[
                  { icon: '📞', label: 'Call Us', val: '1-800-SHIELD-1 (1-800-744-3531)' },
                  { icon: '📧', label: 'Email', val: 'quotes@shieldinsurance.com' },
                  { icon: '📍', label: 'Headquarters', val: '500 Insurance Plaza, Chicago, IL 60601' },
                  { icon: '🕐', label: 'Hours', val: '24/7 Claims · Sales: Mon-Sat 8AM-8PM' },
                ].map((c, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                    <div style={{ width: 40, height: 40, borderRadius: 6, background: 'rgba(83,58,253,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0 }}>{c.icon}</div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '0.9375rem' }}>{c.label}</div>
                      <div style={{ fontSize: '0.875rem', color: 'var(--dark-muted)' }}>{c.val}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal">
              <form onSubmit={handleSubmit} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 8, padding: '32px' }}>
                <h3 style={{ marginBottom: 24, fontSize: '1.25rem' }}>Request your free quote</h3>
                {formSubmitted ? (
                  <div style={{ textAlign: 'center', padding: '40px 0' }}>
                    <div style={{ fontSize: '3rem', marginBottom: 16 }}>🛡️</div>
                    <h3 style={{ marginBottom: 8 }}>Quote Request Received!</h3>
                    <p style={{ color: 'var(--dark-muted)' }}>An agent will contact you within 2 hours.</p>
                  </div>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    <div>
                      <label style={{ display: 'block', marginBottom: 6, fontSize: '0.875rem', fontWeight: 500 }}>Full Name</label>
                      <input type="text" placeholder="John Smith" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: 6, fontSize: '0.875rem', fontWeight: 500 }}>Email</label>
                      <input type="email" placeholder="john@example.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: 6, fontSize: '0.875rem', fontWeight: 500 }}>Phone</label>
                      <input type="tel" placeholder="+1 (555) 000-0000" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required />
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: 6, fontSize: '0.875rem', fontWeight: 500 }}>Insurance Type</label>
                      <select value={formData.insurance} onChange={(e) => setFormData({ ...formData, insurance: e.target.value })} required>
                        <option value="">Select coverage type</option>
                        <option value="life">Life Insurance</option>
                        <option value="health">Health Insurance</option>
                        <option value="auto">Auto Insurance</option>
                        <option value="home">Home Insurance</option>
                        <option value="business">Business Insurance</option>
                        <option value="bundle">Bundle (Multiple)</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: 6, fontSize: '0.875rem', fontWeight: 500 }}>Additional Details</label>
                      <textarea rows={3} placeholder="Tell us about your coverage needs..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} style={{ resize: 'vertical' }} />
                    </div>
                    <button type="submit" className="btn-primary btn-primary-lg" style={{ width: '100%' }}>Get My Free Quote</button>
                    <p style={{ fontSize: '0.75rem', textAlign: 'center', color: 'var(--dark-muted)' }}>No obligation. Your information is secure and never shared.</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      
      <section className="section reveal" style={{  background: 'linear-gradient(135deg, #1e40af, #1e40afdd)',
        color: 'white',
        textAlign: 'center'
       }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem'  }}>
            Ready to Transform Your Business?
          </h2>
          <p style={{ fontSize: '1.25rem', 
            opacity: 0.9,
            maxWidth: '600px',
            margin: '0 auto 2.5rem'
           }}>
            Join hundreds of satisfied clients who have achieved remarkable results with our insurance agency solutions.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'  }}>
            <button className="btn-primary btn-lg" style={{  background: 'white', color: '#1e40af'  }}>
              Start Your Project Today
            </button>
            <button className="btn-secondary btn-lg" style={{ borderColor: 'white', color: 'white'  }}>
              Schedule a Call
            </button>
          </div>
        </div>
      </section>

<footer className="footer-stripe" style={{ padding: '64px 0 32px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, marginBottom: 48 }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                <div style={{ width: 32, height: 32, background: 'var(--accent)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700 }}>S</div>
                <span style={{ fontWeight: 600, fontSize: '1.125rem', color: 'var(--dark-text)' }}>Shield Insurance</span>
              </div>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.6, maxWidth: 320, marginBottom: 20 }}>
                Comprehensive insurance solutions protecting families and businesses since 1998. A+ rated, licensed nationwide.
              </p>
              <div style={{ display: 'flex', gap: 12 }}>
                {['LinkedIn', 'Facebook', 'Twitter'].map((s) => (
                  <a key={s} href="#" className="footer-link" style={{ padding: '6px 12px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 4, fontSize: '0.8125rem' }}>{s}</a>
                ))}
              </div>
            </div>
            <div>
              <h4 style={{ color: 'var(--dark-text)', fontSize: '0.875rem', fontWeight: 600, marginBottom: 16 }}>Coverage</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {['Life Insurance', 'Health Insurance', 'Auto Insurance', 'Home Insurance', 'Business Insurance'].map((l) => (
                  <a key={l} href="#" className="footer-link">{l}</a>
                ))}
              </div>
            </div>
            <div>
              <h4 style={{ color: 'var(--dark-text)', fontSize: '0.875rem', fontWeight: 600, marginBottom: 16 }}>Company</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {['About Us', 'Careers', 'Press', 'Blog', 'Contact'].map((l) => (
                  <a key={l} href="#" className="footer-link">{l}</a>
                ))}
              </div>
            </div>
            <div>
              <h4 style={{ color: 'var(--dark-text)', fontSize: '0.875rem', fontWeight: 600, marginBottom: 16 }}>Support</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {['File a Claim', 'FAQ', 'Policy Lookup', 'Agent Locator', 'Customer Portal'].map((l) => (
                  <a key={l} href="#" className="footer-link">{l}</a>
                ))}
              </div>
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
            <p style={{ fontSize: '0.8125rem' }}>2026 Shield Insurance Group. All rights reserved. NAIC #12345.</p>
            <div style={{ display: 'flex', gap: 24 }}>
              <a href="#" className="footer-link" style={{ fontSize: '0.8125rem' }}>Privacy Policy</a>
              <a href="#" className="footer-link" style={{ fontSize: '0.8125rem' }}>Terms of Service</a>
              <a href="#" className="footer-link" style={{ fontSize: '0.8125rem' }}>Licenses</a>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{'
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      '}</style>
    </>
  );
}
