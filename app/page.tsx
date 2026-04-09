'use client';
import { useState } from 'react';

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="min-h-screen bg-blue-950 text-blue-50">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 {{ACCENTBG}} text-white px-4 py-2 rounded z-[100] font-bold">Skip to main content</a>
      <header>
        <nav role="navigation" aria-label="Main navigation" className="fixed top-0 left-0 right-0 z-50 bg-blue-950/95 backdrop-blur-md border-b border-current/10">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <div><h1 className="text-xl font-bold">Shield Insurance Group</h1><p className="text-xs text-blue-300 tracking-wider uppercase">Est. 2006</p></div>
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollTo('about')} className="text-sm text-blue-300 hover:text-blue-300">About</button>
              <button onClick={() => scrollTo('services')} className="text-sm text-blue-300 hover:text-blue-300">Services</button>
              <button onClick={() => scrollTo('team')} className="text-sm text-blue-300 hover:text-blue-300">Team</button>
              <button onClick={() => scrollTo('contact')} className="{{ACCENTBG}} text-white px-5 py-2 text-sm rounded-full">Get Quote</button>
            </div>
          </div>
        </nav>
      </header>
      <main id="main" role="main">
        {/* EDITORIAL HERO - Asymmetric split */}
        <section className="pt-24">
          <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-7">
              <p className="text-blue-300 text-sm tracking-widest uppercase mb-6">Est. 2006</p>
              <h2 className="text-5xl md:text-7xl font-bold leading-[0.9] tracking-tight whitespace-pre-line">Protection
you can trust.</h2>
              <p className="text-xl text-blue-300 mt-8 max-w-lg leading-relaxed">Independent insurance agency providing comprehensive coverage for individuals and businesses.</p>
              <div className="flex gap-4 mt-10">
                <button onClick={() => scrollTo('contact')} className="{{ACCENTBG}} text-white px-8 py-4 rounded-full">Get Quote</button>
                <button onClick={() => scrollTo('services')} className="border-2 border-current/20 px-8 py-4 rounded-full">Our Coverage</button>
              </div>
            </div>
            <div className="md:col-span-5 flex flex-col items-end gap-6 text-right">
            <div className="text-center"><div className="text-3xl md:text-4xl font-bold text-blue-300">50+</div><div className="text-sm text-blue-300 mt-1">Carriers</div></div>
            <div className="text-center"><div className="text-3xl md:text-4xl font-bold text-blue-300">$2B+</div><div className="text-sm text-blue-300 mt-1">Coverage placed</div></div>
            <div className="text-center"><div className="text-3xl md:text-4xl font-bold text-blue-300">95%</div><div className="text-sm text-blue-300 mt-1">Retention</div></div>
            </div>
          </div>
        </section>
        {/* Ornament divider */}
        <div className="max-w-6xl mx-auto px-6"><div className="h-px bg-current/10 my-4"></div></div>
        {/* EXPANDABLE SERVICES - Side-by-side description */}
        <section id="services" className="py-24" aria-labelledby="services-heading">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-12 gap-8 mb-16">
              <div className="md:col-span-4"><p className="text-blue-300 text-sm tracking-widest uppercase mb-3">What We Do</p><h2 id="services-heading" className="text-4xl font-bold">Our Services</h2></div>
              <div className="md:col-span-8 flex items-end"><p className="text-blue-300 text-lg">Comprehensive solutions tailored to your needs.</p></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="bg-blue-900 rounded-2xl p-8 hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">🚗</div>
              <h3 className="text-xl font-bold mb-3">Auto</h3>
              <p className="text-blue-300 leading-relaxed">Car, truck, motorcycle insurance.</p>
            </article>
            <article className="bg-blue-900 rounded-2xl p-8 hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-bold mb-3">Home</h3>
              <p className="text-blue-300 leading-relaxed">Homeowners and renters insurance.</p>
            </article>
            <article className="bg-blue-900 rounded-2xl p-8 hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-xl font-bold mb-3">Life</h3>
              <p className="text-blue-300 leading-relaxed">Term and whole life policies.</p>
            </article>
            <article className="bg-blue-900 rounded-2xl p-8 hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-bold mb-3">Business</h3>
              <p className="text-blue-300 leading-relaxed">Commercial liability and property.</p>
            </article>
            <article className="bg-blue-900 rounded-2xl p-8 hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">💊</div>
              <h3 className="text-xl font-bold mb-3">Health</h3>
              <p className="text-blue-300 leading-relaxed">Individual and group health plans.</p>
            </article>
            <article className="bg-blue-900 rounded-2xl p-8 hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">☂️</div>
              <h3 className="text-xl font-bold mb-3">Umbrella</h3>
              <p className="text-blue-300 leading-relaxed">Additional liability coverage.</p>
            </article>
            </div>
          </div>
        </section>
        {/* TEAM - Dark section with initials */}
        <section id="team" className="py-24 bg-blue-900" aria-labelledby="team-heading">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-12 gap-8 mb-16">
              <div className="md:col-span-5"><p className="text-blue-300 text-sm tracking-widest uppercase mb-3">Our Team</p><h2 id="team-heading" className="text-4xl font-bold">The experts behind your success.</h2></div>
              <div className="md:col-span-7 flex items-end"><p className="text-blue-300">Our team combines deep expertise with strategic vision.</p></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-blue-900 rounded-2xl p-6 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-blue-300/20 flex items-center justify-center text-2xl font-bold text-blue-300">RC</div>
              <h3 className="font-bold">Robert Chen</h3><p className="text-sm text-blue-300">Agency Principal</p><p className="text-sm text-blue-300 mt-1">CPCU certified</p></div>
            <div className="bg-blue-900 rounded-2xl p-6 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-blue-300/20 flex items-center justify-center text-2xl font-bold text-blue-300">SW</div>
              <h3 className="font-bold">Sarah Williams</h3><p className="text-sm text-blue-300">Personal Lines</p><p className="text-sm text-blue-300 mt-1">CIC certified</p></div>
            <div className="bg-blue-900 rounded-2xl p-6 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-blue-300/20 flex items-center justify-center text-2xl font-bold text-blue-300">DK</div>
              <h3 className="font-bold">David Kim</h3><p className="text-sm text-blue-300">Commercial Lines</p><p className="text-sm text-blue-300 mt-1">ARM certified</p></div>
            <div className="bg-blue-900 rounded-2xl p-6 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-blue-300/20 flex items-center justify-center text-2xl font-bold text-blue-300">MG</div>
              <h3 className="font-bold">Maria Garcia</h3><p className="text-sm text-blue-300">Life & Health</p><p className="text-sm text-blue-300 mt-1">CLU certified</p></div>
            </div>
          </div>
        </section>
        {/* FAQ */}
        <section id="faq" className="py-24" aria-labelledby="faq-heading">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12"><p className="text-blue-300 text-sm tracking-widest uppercase mb-3">Questions</p><h2 id="faq-heading" className="text-4xl font-bold">FAQ</h2></div>
            <div className="space-y-4">            <details className="group border border-current/10 rounded-xl p-5 cursor-pointer">
              <summary className="font-medium flex justify-between items-center list-none">How to save?<span className="ml-4 text-blue-300 group-open:rotate-45 transition-transform text-xl">+</span></summary>
              <p className="mt-3 text-blue-300 text-sm leading-relaxed">Bundle home + auto for up to 25% savings.</p></details>
            <details className="group border border-current/10 rounded-xl p-5 cursor-pointer">
              <summary className="font-medium flex justify-between items-center list-none">Claims?<span className="ml-4 text-blue-300 group-open:rotate-45 transition-transform text-xl">+</span></summary>
              <p className="mt-3 text-blue-300 text-sm leading-relaxed">We advocate for you through the entire claims process.</p></details>
            <details className="group border border-current/10 rounded-xl p-5 cursor-pointer">
              <summary className="font-medium flex justify-between items-center list-none">Switch?<span className="ml-4 text-blue-300 group-open:rotate-45 transition-transform text-xl">+</span></summary>
              <p className="mt-3 text-blue-300 text-sm leading-relaxed">We handle all paperwork to switch carriers.</p></details></div>
          </div>
        </section>
        {/* CONTACT - Split with form */}
        <section id="contact" className="py-24 bg-blue-900" aria-labelledby="contact-heading">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-blue-300 text-sm tracking-widest uppercase mb-3">Get In Touch</p>
              <h2 id="contact-heading" className="text-4xl font-bold mb-6">Get Quote</h2>
              <div className="space-y-6 text-blue-300">                  <div><div className="font-bold">Phone</div><a href="tel:(555) 012-3457" className="text-blue-300">(555) 012-3457</a></div>
                  <div><div className="font-bold">Address</div><p>500 Insurance Way, Hartford, CT</p></div>
                  <div><div className="font-bold">Hours</div><p>Mon–Fri 8:30 AM – 5 PM</p></div></div>
            </div>
            <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); setTimeout(() => setSubmitted(false), 3000); }}>
              <div className="grid grid-cols-2 gap-5">
                <div><label htmlFor="name" className="block text-sm mb-2">Name</label><input id="name" type="text" placeholder="Your name" className="w-full border border-current/20 rounded-xl px-4 py-3 bg-transparent" /></div>
                <div><label htmlFor="email" className="block text-sm mb-2">Email</label><input id="email" type="email" placeholder="you@email.com" className="w-full border border-current/20 rounded-xl px-4 py-3 bg-transparent" /></div>
              </div>
              <div><label htmlFor="message" className="block text-sm mb-2">Message</label><textarea id="message" rows={4} placeholder="How can we help?" className="w-full border border-current/20 rounded-xl px-4 py-3 bg-transparent resize-none" /></div>
              <button type="submit" className="w-full {{ACCENTBG}} text-white py-4 rounded-xl">{submitted ? "Sent!" : "Get Quote"}</button>
            </form>
          </div>
        </section>
      </main>
      <footer className="bg-blue-900 border-t border-current/10 py-8">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="font-bold">Shield Insurance Group</div>
          <p className="text-sm text-blue-300">&copy; 2026 Shield Insurance Group</p>
        </div>
      </footer>
    </div>
  );
}
