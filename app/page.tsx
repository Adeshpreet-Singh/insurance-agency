'use client';
import { useState } from 'react';

const coverage = [
  { name: 'Auto Insurance', desc: 'Comprehensive auto protection including liability, collision, comprehensive, and uninsured motorist coverage. We offer multi-vehicle discounts, safe driver rewards, and SR-22 filing services. Whether you drive a sedan, truck, motorcycle, or RV, we will find a policy that keeps you covered on every road ahead.', icon: '🚗' },
  { name: 'Home Insurance', desc: 'Full-spectrum homeowner protection covering dwelling, personal property, liability, and additional living expenses. Available endorsements include flood, earthquake, and scheduled personal property for valuables like jewelry and fine art. We tailor coverage to match your home value and local risk factors.', icon: '🏠' },
  { name: 'Life Insurance', desc: 'Term life, whole life, and universal life policies designed to protect your family financial future. Every consultation includes a free needs analysis to determine the right coverage amount based on your income, debts, and long-term goals. Affordable premiums locked in at your current age.', icon: '🛡️' },
  { name: 'Health Insurance', desc: 'Individual, family, and group health plans from major carriers. We navigate the marketplace on your behalf to find plans with the best network coverage and lowest out-of-pocket costs. Medicare supplement, dental, and vision add-ons available to round out your healthcare protection.', icon: '❤️' },
  { name: 'Business Insurance', desc: 'General liability, workers compensation, commercial auto, professional liability, and business owner policy packages. We specialize in small and mid-size businesses across construction, retail, hospitality, and professional services. Protect your company from lawsuits, property damage, and employee injuries.', icon: '🏢' },
  { name: 'Umbrella Policy', desc: 'Extra liability protection that extends above your auto and home policy limits, providing one million to five million dollars in additional coverage. Essential for high-net-worth individuals, landlords, and anyone who wants peace of mind against catastrophic claims and lawsuits.', icon: '☂️' },
  { name: 'Renters Insurance', desc: 'Affordable coverage for your personal belongings, liability protection, and additional living expenses if your rental becomes uninhabitable. Covers fire, theft, water damage, and more. Policies start at just a few dollars per month and can be bundled with auto for extra savings.', icon: '🔑' },
];

const differentiators = [
  { title: 'Truly Independent', desc: 'Unlike captive agents tied to one carrier, we represent over twenty-five top-rated insurance companies. This means we compare rates and coverage options across the entire market to find the best fit for your specific situation and budget.', icon: '⚖️' },
  { title: '35+ Years of Experience', desc: 'Sterling Insurance Group has served families and businesses in the Southeast since 1988. Our veteran agents have handled thousands of policies across every major line of coverage, bringing deep expertise that newer agencies simply cannot match.', icon: '🏆' },
  { title: 'Dedicated Agent Assigned to You', desc: 'You are never a policy number here. Every client is paired with a named agent who learns your circumstances, reviews your coverage annually, and is available by phone or email whenever life changes require policy adjustments.', icon: '🤝' },
  { title: 'Claims Advocacy', desc: 'When you need to file a claim, we do not disappear. Our team advocates on your behalf with the carrier, helps you navigate paperwork, follows up on adjusters, and pushes for fair and timely settlements so you can focus on recovery.', icon: '📋' },
];

const testimonials = [
  { name: 'Margaret Dawson', role: 'Homeowner, Buckhead', quote: 'Sterling saved us over two thousand dollars a year by switching our home and auto to a carrier we never would have found on our own. Our agent, David, took the time to understand our family needs and explained every option clearly. We have been clients for eight years now and could not be happier.' },
  { name: 'James Whitfield', role: 'Owner, Whitfield Construction', quote: 'As a general contractor, I need workers comp, commercial auto, and general liability all working together. Sterling bundled everything into a package that costs less than what I was paying for each policy separately. When one of my guys got injured on site, they handled the claim fast and kept my premiums from skyrocketing.' },
  { name: 'Priya Nair', role: 'First-time Homebuyer', quote: 'I had no idea where to start with homeowners insurance. My Sterling agent walked me through every coverage type, explained what the mortgage company required, and got me a great rate before my closing date. The whole process took less than a day. I recommend them to everyone I know.' },
];

const faqs = [
  { q: 'How quickly can I get a quote?', a: 'Most quotes are delivered within twenty-four hours of your request. For straightforward auto or renters policies, we can often provide same-day pricing. Complex commercial or bundled policies may take up to forty-eight hours as we negotiate with multiple carriers on your behalf.' },
  { q: 'Do I have to pay for a consultation?', a: 'No. All consultations and quote comparisons are completely free with no obligation. We are compensated by the carrier you select, so there is never a fee for our advisory services. You only pay your insurance premium once you decide to move forward with a policy.' },
  { q: 'Can you help me switch from my current insurer?', a: 'Absolutely. We handle the entire switching process for you, including coordinating effective dates so there is no gap in coverage. We will review your current policy to make sure any new coverage matches or exceeds what you already have before making the change.' },
  { q: 'What happens if I need to file a claim?', a: 'You can call us directly or contact the carrier claims line. Either way, your Sterling agent will be notified and will follow up to make sure the claim is processed fairly and promptly. We act as your advocate throughout the entire claims process from initial filing to final settlement.' },
  { q: 'Do you offer bundle discounts?', a: 'Yes. Bundling multiple policies such as home and auto with the same carrier typically saves between ten and twenty-five percent on premiums. We automatically evaluate bundle options during every quote comparison to ensure you are getting every available discount.' },
  { q: 'Which states are you licensed in?', a: 'Sterling Insurance Group is currently licensed in twelve states across the Southeast and Mid-Atlantic region, including Georgia, Florida, Alabama, South Carolina, North Carolina, Tennessee, Virginia, Mississippi, Louisiana, Texas, Kentucky, and Maryland. We are actively expanding our licensing footprint each year.' },
];

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 px-8 py-4 flex justify-between items-center" style={{ background: 'rgba(255,255,255,0.93)', backdropFilter: 'blur(12px)', borderBottom: '1px solid var(--border)' }}>
        <div>
          <h1 className="heading text-xl font-bold">Sterling Insurance Group</h1>
          <p className="text-base tracking-[0.2em] uppercase" style={{ color: 'var(--body)' }}>Independent Agency · Est. 1988</p>
        </div>
        <div className="hidden md:flex gap-8 text-base" style={{ color: 'var(--body)' }}>
          {['coverage', 'why-us', 'process', 'testimonials', 'faq', 'quote'].map(s => (
            <button className="btn" key={s} onClick={() => scrollTo(s)} className="capitalize hover:opacity-100 opacity-90 transition-opacity">{s.replace('-', ' ')}</button>
          ))}
        </div>
        <button className="btn" onClick={() => scrollTo('quote')} className="btn text-base">Get Quote</button>
      </nav>

      <main>
        {/* 1. Hero */}
        <section className="hero py-28 px-8">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="badge mb-5">Independent Insurance Agency</span>
              <h2 className="heading text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Protection for<br />what matters <em style={{ color: 'var(--accent)', fontStyle: 'normal' }}>most.</em>
              </h2>
              <p className="text-lg mb-8 leading-relaxed max-w-lg" style={{ color: 'var(--body)' }}>
                Sterling Insurance Group represents over twenty-five top-rated carriers, which means we shop the entire market on your behalf. You get independent advice, competitive rates, and a dedicated agent who knows your name and understands your unique coverage needs. Whether you are protecting your family, your home, your vehicle, or your business, we build tailored policies that give you genuine peace of mind.
              </p>
              <div className="flex gap-4 flex-wrap">
                <button className="btn" onClick={() => scrollTo('quote')} className="btn">Get a Free Quote</button>
                <button className="btn" onClick={() => scrollTo('coverage')} className="btn-outline">View Coverage</button>
              </div>
              <div className="flex gap-8 mt-10 text-sm" style={{ color: 'var(--body)' }}>
                <div><span className="heading text-2xl font-bold block">25+</span>Carriers Compared</div>
                <div><span className="heading text-2xl font-bold block">35</span>Years in Business</div>
                <div><span className="heading text-2xl font-bold block">12K+</span>Clients Served</div>
              </div>
            </div>
            <div className="img-hover">
              <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80" alt="Professional insurance consultation" className="w-full h-96 object-cover rounded-lg" loading="lazy" />
            </div>
          </div>
        </section>

        {/* 2. Insurance Types */}
        <section id="coverage" className="reveal py-24 px-8" style={{ background: 'white' }}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="badge mb-4">What We Cover</span>
              <h2 className="heading text-4xl font-bold mb-4">Comprehensive Coverage Options</h2>
              <p className="max-w-2xl mx-auto" style={{ color: 'var(--body)' }}>
                From your daily commute to your biggest investment, Sterling Insurance Group offers protection across every major line of personal and commercial insurance. Each policy is customized to your exact situation.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coverage.map(c => (
                <div key={c.name} className="card">
                  <span className="text-3xl mb-4 block">{c.icon}</span>
                  <h3 className="heading text-lg font-semibold mb-2">{c.name}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--body)' }}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Why Sterling */}
        <section id="why-us" className="reveal section-alt py-24 px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="badge mb-4">Why Choose Us</span>
              <h2 className="heading text-4xl font-bold mb-4">The Sterling Difference</h2>
              <p className="max-w-2xl mx-auto" style={{ color: 'var(--body)' }}>
                Insurance is complicated enough. Here is what makes working with Sterling Insurance Group a fundamentally better experience than buying direct or through a captive agent.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {differentiators.map(d => (
                <div key={d.title} className="card text-center">
                  <span className="text-4xl mb-4 block">{d.icon}</span>
                  <h3 className="heading text-lg font-semibold mb-3">{d.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--body)' }}>{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Quote Process */}
        <section id="process" className="reveal py-24 px-8" style={{ background: 'white' }}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="badge mb-4">How It Works</span>
              <h2 className="heading text-4xl font-bold mb-4">Getting a Quote Is Simple</h2>
              <p className="max-w-2xl mx-auto" style={{ color: 'var(--body)' }}>
                We have streamlined our quoting process so you can get competitive rates without the hassle. There is no cost, no obligation, and no pressure. Just honest advice and real savings.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: '01', title: 'Tell Us What You Need', desc: 'Fill out our short quote request form with your basic information and the type of coverage you are looking for. The more detail you provide, the more accurate your quotes will be. You can also call us directly if you prefer to discuss your needs over the phone.' },
                { step: '02', title: 'We Shop the Market', desc: 'Your assigned agent submits your information to multiple carriers and compares rates, coverage limits, deductibles, and discounts side by side. We negotiate on your behalf to secure the most favorable terms available in the market today.' },
                { step: '03', title: 'Review and Choose', desc: 'Within twenty-four hours, you receive a personalized quote comparison with our professional recommendation. Review the options at your convenience, ask any questions, and select the policy that fits your budget and coverage requirements best.' },
              ].map(item => (
                <div key={item.step} className="card relative">
                  <span className="heading text-5xl font-bold opacity-10 absolute top-4 right-6">{item.step}</span>
                  <h3 className="heading text-lg font-semibold mb-3 mt-4">{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--body)' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Claims Process */}
        <section className="reveal section-alt py-24 px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="badge mb-4">Claims Support</span>
              <h2 className="heading text-4xl font-bold mb-4">When You Need to File a Claim</h2>
              <p className="max-w-2xl mx-auto" style={{ color: 'var(--body)' }}>
                Filing an insurance claim can be stressful. Our claims advocacy team guides you through every step and fights for a fair outcome so you can focus on what matters most.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: '1', title: 'Report the Incident', desc: 'Contact your Sterling agent or the carrier claims hotline as soon as possible after the incident. We will help you document the details, gather necessary evidence such as photos and police reports, and ensure your claim is filed accurately the first time to avoid delays.' },
                { step: '2', title: 'Adjuster Review', desc: 'The carrier assigns an adjuster to evaluate your claim. Your Sterling agent stays in contact with the adjuster throughout the review process, follows up on timelines, and provides any additional documentation or clarification needed to keep your claim moving forward efficiently.' },
                { step: '3', title: 'Settlement and Recovery', desc: 'Once the adjuster completes the review, the carrier issues a settlement offer. We review the offer with you to make sure it is fair and complete. If anything looks off, we negotiate on your behalf. Our goal is to get you the full amount you are entitled to as quickly as possible.' },
              ].map(item => (
                <div key={item.step} className="card text-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold" style={{ background: 'var(--accent)' }}>{item.step}</div>
                  <h3 className="heading text-lg font-semibold mb-3">{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--body)' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Testimonials */}
        <section id="testimonials" className="reveal py-24 px-8" style={{ background: 'white' }}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="badge mb-4">Client Stories</span>
              <h2 className="heading text-4xl font-bold mb-4">What Our Clients Say</h2>
              <p className="max-w-2xl mx-auto" style={{ color: 'var(--body)' }}>
                Our reputation is built on decades of honest service and real results. Here is what some of our long-term clients have to say about working with Sterling Insurance Group.
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

        {/* 7. FAQ */}
        <section id="faq" className="reveal section-alt py-24 px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <span className="badge mb-4">Common Questions</span>
              <h2 className="heading text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p style={{ color: 'var(--body)' }}>
                Have questions about working with an independent insurance agency? We have compiled answers to the most common inquiries we receive from new and existing clients.
              </p>
            </div>
            <div className="space-y-4">
              {faqs.map((f, i) => (
                <div key={i} className="card cursor-pointer" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <div className="flex justify-between items-center">
                    <h3 className="heading font-semibold text-sm pr-4">{f.q}</h3>
                    <span className="text-xl flex-shrink-0 transition-transform" style={{ transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0deg)', color: 'var(--accent)' }}>+</span>
                  </div>
                  {openFaq === i && (
                    <p className="text-sm leading-relaxed mt-4" style={{ color: 'var(--body)' }}>{f.a}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Quote Request Form */}
        <section id="quote" className="reveal py-24 px-8" style={{ background: 'var(--dark)', color: 'white' }}>
          <div className="max-w-3xl mx-auto text-center">
            <span className="badge mb-4" style={{ background: 'rgba(83,58,253,0.2)', color: '#a78bfa' }}>No Obligation</span>
            <h2 className="heading text-4xl font-bold mb-4">Request Your Free Quote</h2>
            <p className="mb-10" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Tell us what you need covered and a Sterling agent will compare rates from over twenty-five carriers to find you the best deal. Most quotes are delivered within twenty-four hours. There is no cost and no obligation to buy.
            </p>
            {submitted ? (
              <div className="py-12">
                <p className="heading text-3xl font-bold mb-3" style={{ color: '#a78bfa' }}>Quote Request Received</p>
                <p style={{ color: 'rgba(255,255,255,0.7)' }}>A dedicated Sterling agent will contact you within twenty-four hours with your personalized quote comparison. Thank you for choosing Sterling Insurance Group.</p>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} className="space-y-4 text-left" style={{ color: '#1a1a1a' }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Full Name" required className="w-full border border-gray-300 " />
                  <input type="tel" placeholder="Phone Number" required className="w-full border border-gray-300 " />
                </div>
                <input type="email" placeholder="Email Address" required className="w-full border border-gray-300 " />
                <select className="w-full border border-gray-300 " defaultValue="">
                  <option value="" disabled>Select Coverage Type</option>
                  {coverage.map(c => <option key={c.name}>{c.name}</option>)}
                </select>
                <textarea rows={4} placeholder="Tell us about your current coverage, what you need, and any relevant details such as vehicle year, home value, or business type..." className="w-full border border-gray-300 " />
                <button type="submit" className="btn w-full text-center" style={{ background: 'var(--accent)' }}>Submit Quote Request</button>
                <p className="text-xs text-center" style={{ color: 'rgba(255,255,255,0.5)' }}>By submitting this form, you agree to be contacted by a Sterling Insurance Group agent regarding your quote request.</p>
              </form>
            )}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="reveal py-16 px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading text-2xl font-bold mb-6">Sterling Insurance Group</h2>
            <div className="flex justify-center gap-10 flex-wrap text-sm" style={{ color: 'var(--body)' }}>
              <div>
                <p className="font-semibold mb-1" style={{ color: 'var(--heading)' }}>Office</p>
                <p>3200 Peachtree Rd NE<br />Atlanta, GA 30305</p>
              </div>
              <div>
                <p className="font-semibold mb-1" style={{ color: 'var(--heading)' }}>Phone</p>
                <p><a href="tel:(404) 555-0189" style={{ color: 'var(--accent)' }}>(404) 555-0189</a></p>
              </div>
              <div>
                <p className="font-semibold mb-1" style={{ color: 'var(--heading)' }}>Email</p>
                <p><a href="mailto:quotes@sterlingins.com" style={{ color: 'var(--accent)' }}>quotes@sterlingins.com</a></p>
              </div>
              <div>
                <p className="font-semibold mb-1" style={{ color: 'var(--heading)' }}>Hours</p>
                <p>Mon-Fri: 8am - 6pm<br />Sat: 9am - 1pm</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 text-center text-xs" style={{ color: 'var(--body)', opacity: '0.8' }}>
        <p>Sterling Insurance Group. Atlanta, GA. Licensed in 12 states. All rights reserved.</p>
      </footer>
    </div>
  );
}
