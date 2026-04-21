'use client';

import { useState } from 'react';

const SERVICES = [
 {
 name: 'Auto Insurance',
 desc: 'Full-spectrum auto coverage from liability to comprehensive, with competitive rates and responsive claims service.',
 details: ['Liability Coverage', 'Collision & Comprehensive', 'Uninsured Motorist'],
 icon: '🚗',
 },
 {
 name: 'Home Insurance',
 desc: 'Protect your most valuable asset with coverage that shields your home from fire, theft, natural disasters, and liability.',
 details: ['Homeowners', 'Renters Insurance', 'Condo Coverage'],
 icon: '🏠',
 },
 {
 name: 'Life Insurance',
 desc: 'Comprehensive life insurance solutions that protect your family\'s financial future and provide lasting peace of mind.',
 details: ['Term Life', 'Whole Life', 'Universal Life'],
 icon: '💙',
 },
 {
 name: 'Business Insurance',
 desc: 'Tailored commercial insurance packages that safeguard your business, employees, and assets.',
 details: ['General Liability', 'Workers Compensation', 'Professional Liability'],
 icon: '🏢',
 },
 {
 name: 'Health Insurance',
 desc: 'Individual and family health coverage plans with access to the nation\'s leading providers and hospitals.',
 details: ['Individual Plans', 'Family Coverage', 'Medicare Supplement'],
 icon: '🩺',
 },
 {
 name: 'Umbrella Insurance',
 desc: 'Extended liability protection that goes beyond standard policies, providing an additional layer of security.',
 details: ['Excess Liability', 'Personal Umbrella', 'Commercial Umbrella'],
 icon: '☂️',
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

const CLAIMS_STEPS = [
 { step: '01', title: 'Report Your Claim', desc: 'Call our 24/7 hotline or submit online. We respond within 1 hour during business hours.' },
 { step: '02', title: 'Claim Assignment', desc: 'A dedicated adjuster is assigned to your case and will contact you to discuss next steps.' },
 { step: '03', title: 'Assessment', desc: 'We evaluate the damage, review your coverage, and provide a transparent estimate.' },
 { step: '04', title: 'Resolution', desc: 'We process your claim swiftly and get you the settlement you deserve — most claims resolved in days.' },
];

const WHATSAPP_NUMBER = '16175550191';
const WEB3FORMS_ACCESS_KEY = 'YOUR_ACCESS_KEY_HERE';

export default function Home() {
 const [menuOpen, setMenuOpen] = useState(false);
 const [activeService, setActiveService] = useState<number | null>(null);
 const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

 const scrollToSection = (id: string) => {
 document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
 setMenuOpen(false);
 };

 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
 e.preventDefault();
 setFormStatus('sending');
 const form = e.currentTarget;
 const formData = new FormData(form);
 formData.append('access_key', WEB3FORMS_ACCESS_KEY);

 try {
 const res = await fetch('https://api.web3forms.com/submit', {
 method: 'POST',
 body: formData,
 });
 const data = await res.json();
 if (data.success) {
 setFormStatus('success');
 form.reset();
 } else {
 setFormStatus('error');
 }
 } catch {
 setFormStatus('error');
 }
 };

 return (
 <div className="min-h-screen">
 <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[var(--navy)] text-white px-4 py-2 rounded z-[100] font-bold">
 Skip to main content
 </a>

 {/* Header */}
 <header>
 <nav role="navigation" aria-label="Main navigation" className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-[var(--border)]">
 <div className=" section-container">
 <div>
 <h1 className="text-xl tracking-[0.15em] uppercase font-bold">
 Sterling <span>Insurance</span>
 </h1>
 <p className="text-[10px] tracking-[0.3em] uppercase">Comprehensive Protection Since 1991</p>
 </div>
 <div className="hidden md:flex items-center gap-8">
 {['services', 'claims', 'team', 'testimonials', 'contact'].map((item) => (
 <button
 key={item}
 onClick={() => scrollToSection(item.toLowerCase())}
 className="text-sm hover:text-[var(--accent)] transition-colors tracking-wider uppercase"

 >
 {item === 'services' ? 'Coverage' : item === 'testimonials' ? 'Results' : item}
 </button>
 ))}
 <button
 onClick={() => scrollToSection('contact')}
 className="btn"
 >
 Get a Quote
 </button>
 </div>
 <button
 onClick={() => setMenuOpen(!menuOpen)}
 className="md:hidden p-2"
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
 <div className="md:hidden bg-white border-t border-[var(--border)] px-6 py-4 space-y-1">
 {['services', 'claims', 'team', 'testimonials', 'contact'].map((item) => (
 <button
 key={item}
 onClick={() => scrollToSection(item.toLowerCase())}
 className="block w-full text-left px-4 py-3 tracking-wider uppercase"

 >
 {item === 'services' ? 'Coverage' : item === 'testimonials' ? 'Results' : item}
 </button>
 ))}
 </div>
 )}
 </nav>
 </header>

 <main id="main" role="main">
 {/* Hero */}
 <section className="hero pt-28 pb-20 md:pb-32">
 <div className=" section-container">
 <div className="grid md:grid-cols-1 gap-62 gap-8 items-end">
 <div className="md:col-span-8">
 <p className="text-sm tracking-[0.3em] uppercase mb-6">
 Boston &middot; Established 1991
 </p>
 <h2>
 Protecting
 <br />
 what <span>matters.</span>
 </h2>
 <p>
 Three decades of trusted insurance counsel. We don&apos;t just sell policies — we build protective shields around everything you&apos;ve worked hard to build.
 </p>
 <div className="flex gap-4 flex-wrap">
 <button onClick={() => scrollToSection('contact')} className="btn">
 Get a Free Quote
 </button>
 <button onClick={() => scrollToSection('services')} className="btn-outline">
 Coverage Options
 </button>
 </div>
 </div>
            <div className="md:col-span-4 flex flex-col items-end gap-4 md:gap-6 text-right mt-8 md:mt-0">
              <div className="stat-card w-full md:w-auto">
                <div className="stat-number">33</div>
                <div className="stat-label">Years</div>
              </div>
              <div className="stat-card w-full md:w-auto">
                <div className="stat-number">$2.1B</div>
                <div className="stat-label">Claims Paid</div>
              </div>
              <div className="stat-card w-full md:w-auto">
                <div className="stat-number">15,000+</div>
                <div className="stat-label">Families Protected</div>
              </div>
            </div>
 </div>
 </div>
 </section>

 {/* Services */}
 <section id="services" className="py-16 md:py-20" aria-labelledby="services-heading">
 <div className=" section-container">
 <div className="text-center mb-16">
 <span className="badge mb-4">What We Cover</span>
 <h2 id="services-heading">
 Coverage Options
 </h2>
 <p>
 From your family&apos;s health to your business&apos;s future, we offer comprehensive coverage solutions tailored to your unique needs.
 </p>
 </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 gap-6">
 {SERVICES.map((svc, i) => (
 <article
 key={i}
 className={`card transition-all hover:-translate-y-1 ${activeService === i ? 'active' : ''}`}
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
 style={activeService === i ? { borderColor: 'var(--accent)', boxShadow: 'var(--shadow-lg)' } : {}}
 >
 <div className="flex items-start justify-between mb-4">
 <span>{svc.icon}</span>
 <span>
 {activeService === i ? '−' : '+'}
 </span>
 </div>
 <h3>{svc.name}</h3>
 <p>{svc.desc}</p>
 {activeService === i && (
 <div>
 <p>Policy Types</p>
 <ul>
 {svc.details.map((d, j) => (
 <li key={j}>
 <span />
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

 {/* Claims Process */}
 <section id="claims" className="section-alt py-16 md:py-20" aria-labelledby="claims-heading">
 <div className=" section-container">
 <div className="text-center mb-16">
 <span className="badge mb-4">Claims Process</span>
 <h2 id="claims-heading">
 How Claims Work
 </h2>
 <p>
 Filing a claim doesn&apos;t have to be stressful. Our streamlined process gets you back on track fast.
 </p>
 </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CLAIMS_STEPS.map((s, i) => (
 <div key={i} className="card text-center hover:-translate-y-1 transition-all duration-300">
 <div>{s.step}</div>
 <h3>{s.title}</h3>
 <p>{s.desc}</p>
 </div>
 ))}
 </div>
 <div className="text-center mt-10">
 <a href="tel:+16175550192" className="btn">
 📞 24/7 Claims Hotline: (617) 555-0192
 </a>
 </div>
 </div>
 </section>

 {/* Team */}
 <section id="team" className="py-16 md:py-20 section-dark" aria-labelledby="team-heading">
 <div className=" section-container">
 <div className="text-center mb-16">
 <span className="badge badge-dark mb-4">Our Team</span>
 <h2 id="team-heading">
 The Advisors Behind Your Protection
 </h2>
 <p>
 Our licensed advisors hold the industry&apos;s highest certifications and bring decades of experience navigating complex insurance needs.
 </p>
 </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM.map((member, i) => (
<div key={i} className="card hover:-translate-y-1 transition-all duration-300">
<div>
              {member.name.split(' ').map(n => n[0]).join('')}
</div>
 <div>{member.title}</div>
 <h3>{member.name}</h3>
 <div>
 <div>{member.focus}</div>
 <div>{member.education}</div>
 <div>{member.years} years in insurance</div>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Testimonials */}
 <section id="testimonials" className="py-16 md:py-20" aria-labelledby="testimonials-heading">
 <div className=" section-container">
 <div className="text-center mb-16">
 <span className="badge mb-4">Client Trust</span>
 <h2 id="testimonials-heading">
 What Our Clients Say
 </h2>
 </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 gap-8">
 {TESTIMONIALS.map((t, i) => (
 <blockquote key={i} className="card">
 <div>★★★★★</div>
 <p>
 &ldquo;{t.text}&rdquo;
 </p>
 <footer>
 <cite className="not-italic">
 <span>{t.name}</span>
 <br />
 <span>{t.role}</span>
 </cite>
 </footer>
 </blockquote>
 ))}
 </div>

        {/* Awards */}
        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4 gap-4 md:gap-6 text-center">
 {[
 { label: 'Trusted Choice', sub: 'Independent Agent Member' },
 { label: 'AM Best A+', sub: 'Superior Financial Rating' },
 { label: 'IIABA', sub: 'Best Practices Agency' },
 { label: 'BBB A+', sub: 'Accredited Business' },
 ].map((award, i) => (
 <div key={i} className="trust-badge hover:-translate-y-1 transition-all duration-300 hover:shadow-md">
 <div>{award.label}</div>
 <div>{award.sub}</div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Contact */}
 <section id="contact" className="py-24 section-alt" aria-labelledby="contact-heading">
 <div className=" section-container">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12 gap-8 md:gap-12">
 <div className="md:col-span-5">
 <span className="badge mb-4">Get In Touch</span>
 <h2 id="contact-heading">
 Request a Free Quote
 </h2>
 <p>
 Get a personalized quote in under 24 hours. Our advisors will review your needs and find the optimal coverage at the best value.
 </p>

 <div>
 <div className="flex items-start gap-4">
 <span>📍</span>
 <div>
 <div>Office</div>
 <div>200 State Street, Suite 1200<br />Boston, MA 02109</div>
 </div>
 </div>
 <div className="flex items-start gap-4">
 <span>📞</span>
 <div>
 <div>Phone</div>
 <a href="tel:+16175550191">(617) 555-0191</a>
 </div>
 </div>
 <div className="flex items-start gap-4">
 <span>📧</span>
 <div>
 <div>Email</div>
 <a href="mailto:info@sterlinginsurance.com">info@sterlinginsurance.com</a>
 </div>
 </div>
 <div className="flex items-start gap-4">
 <span>🔔</span>
 <div>
 <div>Claims Hotline</div>
 <a href="tel:+16175550192">24/7 — (617) 555-0192</a>
 </div>
 </div>
 <div className="flex items-start gap-4">
 <span>🕐</span>
 <div>
 <div>Business Hours</div>
 <div>
 Mon – Fri: 8:00 AM – 6:00 PM<br />
 Saturday: 9:00 AM – 1:00 PM<br />
 Sunday: Closed<br />
 <span>Claims: 24/7</span>
 </div>
 </div>
 </div>
 </div>

          {/* Google Maps Embed */}
          <div className="overflow-hidden rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.5!2d-71.0535!3d42.3585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDIxJzMwLjYiTiA3McKwMDMnMTIuNiJX!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="250"
              style={{ border: 0, maxWidth: '100%' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sterling Insurance Group Office Location"
            />
          </div>
        </div>

 <div className="md:col-span-7">
 <form className="card" onSubmit={handleSubmit}>
 <input type="hidden" name="subject" value="New Quote Request from Sterling Insurance Website" />
 <input type="checkbox" name="botcheck" />

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name">Full Name *</label>
                <input id="name" name="name" type="text" required placeholder="Robert Sterling" />
              </div>
              <div>
                <label htmlFor="email">Email *</label>
                <input id="email" name="email" type="email" required placeholder="robert@company.com" />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 gap-5">
 <div>
 <label htmlFor="phone">Phone</label>
 <input id="phone" name="phone" type="tel" placeholder="(617) 555-0000" />
 </div>
 <div>
 <label htmlFor="coverage">Coverage Needed *</label>
 <select id="coverage" name="coverage" required defaultValue="">
 <option value="" disabled>Select coverage type</option>
 <option value="auto">Auto Insurance</option>
 <option value="home">Home Insurance</option>
 <option value="life">Life Insurance</option>
 <option value="business">Business Insurance</option>
 <option value="health">Health Insurance</option>
 <option value="umbrella">Umbrella Insurance</option>
 </select>
 </div>
 </div>
 <div>
 <label htmlFor="message">Brief Description</label>
 <textarea id="message" name="message" rows={4} placeholder="Tell us about your coverage needs..." />
 </div>
 <div>
 <button type="submit" className="btn transition-all duration-300" disabled={formStatus === 'sending'}>
 {formStatus === 'sending' ? 'Sending...' : 'Request Quote'}
 </button>
 </div>
 {formStatus === 'success' && (
 <p>
 ✓ Thank you! We&apos;ll get back to you within 24 hours.
 </p>
 )}
 {formStatus === 'error' && (
 <p>
 Something went wrong. Please call us at (617) 555-0191.
 </p>
 )}
 <p>
 No obligation. Quotes delivered within 24 hours.
 </p>
 </form>
 </div>
 </div>
 </div>
 </section>

{/* CTA */}
        <section className="py-20 text-center">
          <div className=" section-container">
            <h2>
              Ready to Get Protected?
            </h2>
            <p className="mt-4 mb-8">
              Contact us today for a free, no-obligation consultation with one of our licensed advisors.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <button onClick={() => scrollToSection('contact')} className="btn">
                Get Free Quote
              </button>
              <a href="tel:+16175550191" className="btn-outline">
                Call (617) 555-0191
              </a>
            </div>
          </div>
        </section>
 </main>

 {/* Footer */}
 <footer>
 <div className=" section-container">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 gap-8">
 <div>
 <div>
 Sterling <span>Insurance</span> Group
 </div>
 <p>Comprehensive protection solutions for individuals and businesses since 1991.</p>
 </div>
 <div>
 <h4>Coverage</h4>
 <div>
 <button onClick={() => scrollToSection('services')}>Auto Insurance</button>
 <button onClick={() => scrollToSection('services')}>Home Insurance</button>
 <button onClick={() => scrollToSection('services')}>Life Insurance</button>
 <button onClick={() => scrollToSection('services')}>Business Insurance</button>
 </div>
 </div>
 <div>
 <h4>Company</h4>
 <div>
 <button onClick={() => scrollToSection('team')}>Our Team</button>
 <button onClick={() => scrollToSection('claims')}>Claims Process</button>
 <button onClick={() => scrollToSection('testimonials')}>Client Reviews</button>
 <button onClick={() => scrollToSection('contact')}>Contact Us</button>
 </div>
 </div>
 <div>
 <h4>Connect</h4>
 <div>
 <a href="tel:+16175550191">📞 (617) 555-0191</a>
 <a href="mailto:info@sterlinginsurance.com">📧 info@sterlinginsurance.com</a>
 <span>📍 200 State St, Boston, MA 02109</span>
 </div>
            <div className="flex gap-3 mt-3">
              <a href="https://linkedin.com/company/sterling-insurance" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors">🔗</a>
              <a href="https://facebook.com/sterlinginsurance" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors">📘</a>
              <a href="https://twitter.com/sterlingins" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors">🐦</a>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors">💬</a>
            </div>
 </div>
 </div>
          <div className="footer-bottom">
            <span>© 2026 Sterling Insurance Group. All rights reserved.</span>
            <div className="flex gap-6">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <span>Licensing</span>
            </div>
          </div>
 </div>
 </footer>

 {/* WhatsApp Floating Button */}
 <a
 href={`https://wa.me/${WHATSAPP_NUMBER}`}
 target="_blank"
 rel="noopener noreferrer"
 aria-label="Chat on WhatsApp"
 >
 💬
 </a>
 </div>
 );
}
