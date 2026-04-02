"use client";

import { useState, useEffect } from "react";

const products = [
  { name: "Auto Insurance", icon: "🚗", desc: "Comprehensive vehicle coverage" },
  { name: "Home Insurance", icon: "🏠", desc: "Protect your biggest asset" },
  { name: "Life Insurance", icon: "❤️", desc: "Secure your family's future" },
  { name: "Business Insurance", icon: "🏢", desc: "Commercial coverage solutions" },
];

const stats = [
  { value: "50K+", label: "Happy Clients" },
  { value: "25+", label: "Years Experience" },
  { value: "$2B+", label: "Claims Paid" },
  { value: "24/7", label: "Support" },
];

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", product: "", message: "" });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Quote request sent! Our agent will contact you within 24 hours.");
  };

  return (
    <div className="min-h-screen bg-[#0a1628] overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a1628]/95 backdrop-blur-xl border-b border-blue-900/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-lg">🛡️</span>
            </div>
            <span className="text-xl font-bold text-white tracking-wider">SHIELD</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {["Products", "About", "Claims", "Contact"].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())} 
                className="text-gray-400 hover:text-blue-400 transition-colors text-sm font-medium"
              >
                {item}
              </button>
            ))}
          </div>
          <button 
            onClick={() => scrollToSection("contact")} 
            className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-500 transition-all"
          >
            Get Quote
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#111] to-black" />
        
        {/* Gradient Orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div 
            className="absolute w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl"
            style={{ 
              top: '15%', 
              left: '20%',
              transform: `translate(${mousePos.x * 0.01}px, ${mousePos.y * 0.01}px)` 
            }}
          />
          <div 
            className="absolute w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-3xl"
            style={{ 
              bottom: '15%', 
              right: '20%',
              transform: `translate(${-mousePos.x * 0.01}px, ${-mousePos.y * 0.01}px)` 
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/10 border border-blue-500/30 rounded-full mb-8">
              <span className="text-blue-400">✓</span>
              <span className="text-blue-300 text-sm">Trusted by 50,000+ Clients</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Protect<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">What Matters</span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-lg">
              Comprehensive insurance coverage that gives you peace of mind. 
              We're here when you need us most.
            </p>

            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => scrollToSection("contact")} 
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-500 transition-all hover:scale-105 shadow-xl shadow-blue-600/30"
              >
                Get Free Quote
              </button>
              <button 
                onClick={() => scrollToSection("products")} 
                className="border-2 border-blue-500 text-blue-400 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-500/10 transition-all"
              >
                View Products
              </button>
            </div>

            <div className="flex gap-8 mt-12">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-bold text-blue-400">{stat.value}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/20">
              <img 
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80" 
                alt="Insurance" 
                className="w-full h-[450px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🛡️</span>
                </div>
                <div>
                  <div className="font-bold text-gray-800">24/7 Support</div>
                  <div className="text-sm text-gray-500">Always here for you</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-32 bg-[#111]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-blue-500 text-sm tracking-[0.3em] uppercase mb-4 block">Coverage</span>
            <h2 className="text-5xl font-bold text-white">Our Products</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div 
                key={index} 
                className="group bg-[#1a1a1a] rounded-2xl p-8 border border-gray-800 hover:border-blue-500/50 transition-all cursor-pointer"
              >
                <span className="text-5xl mb-6 block">{product.icon}</span>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{product.name}</h3>
                <p className="text-gray-500 text-sm">{product.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-32 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-blue-200 text-sm tracking-[0.3em] uppercase mb-4 block">About Us</span>
            <h2 className="text-5xl font-bold mb-8">Trusted Partner</h2>
            <p className="text-blue-100 text-lg leading-relaxed mb-8">
              For over 25 years, Shield Insurance has been protecting what matters most. 
              Our commitment to fast claims processing and personalized service sets us apart.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 rounded-2xl p-6">
                <div className="text-3xl font-bold">$2B+</div>
                <div className="text-blue-200 text-sm">Claims Paid</div>
              </div>
              <div className="bg-white/10 rounded-2xl p-6">
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-blue-200 text-sm">Support</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80" 
              alt="Team" 
              className="rounded-2xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Claims */}
      <section id="claims" className="py-32 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="text-blue-500 text-sm tracking-[0.3em] uppercase mb-4 block">Fast & Easy</span>
          <h2 className="text-5xl font-bold text-white mb-12">Claims Process</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Report", desc: "File your claim online or by phone", icon: "📱" },
              { step: "02", title: "Review", desc: "Our team reviews within 24 hours", icon: "🔍" },
              { step: "03", title: "Resolve", desc: "Fast payment or repair", icon: "✓" },
            ].map((item, index) => (
              <div key={index} className="bg-[#111] rounded-2xl p-8 border border-gray-800">
                <div className="text-5xl mb-6">{item.icon}</div>
                <div className="text-blue-500 text-sm font-bold mb-2">{item.step}</div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 bg-gradient-to-br from-blue-900/20 to-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-blue-500 text-sm tracking-[0.3em] uppercase mb-4 block">Get Started</span>
            <h2 className="text-5xl font-bold text-white">Request Quote</h2>
          </div>

          <div className="bg-[#111] rounded-2xl p-10 border border-gray-800">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-6 py-4 rounded-lg bg-[#0a0a0a] border border-gray-700 text-white focus:border-blue-500 transition-colors"
                  placeholder="Your name"
                  required
                />
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-6 py-4 rounded-lg bg-[#0a0a0a] border border-gray-700 text-white focus:border-blue-500 transition-colors"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <input 
                  type="tel" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-6 py-4 rounded-lg bg-[#0a0a0a] border border-gray-700 text-white focus:border-blue-500 transition-colors"
                  placeholder="Phone"
                />
                <select 
                  value={formData.product}
                  onChange={(e) => setFormData({...formData, product: e.target.value})}
                  className="w-full px-6 py-4 rounded-lg bg-[#0a0a0a] border border-gray-700 text-white focus:border-blue-500 transition-colors"
                >
                  <option value="">Coverage type</option>
                  {products.map((p, i) => (
                    <option key={i} value={p.name}>{p.name}</option>
                  ))}
                </select>
              </div>
              <textarea 
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-6 py-4 rounded-lg bg-[#0a0a0a] border border-gray-700 text-white focus:border-blue-500 transition-colors resize-none"
                placeholder="Additional details..."
              />
              <button 
                type="submit" 
                className="w-full bg-blue-600 text-white py-5 rounded-lg font-bold text-lg hover:bg-blue-500 transition-all"
              >
                Get Free Quote
              </button>
            </form>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-[#111] rounded-2xl p-6 border border-gray-800">
              <span className="text-3xl mb-3 block">📍</span>
              <p className="text-gray-400">123 Insurance Plaza<br />Business District, NY 10004</p>
            </div>
            <div className="bg-[#111] rounded-2xl p-6 border border-gray-800">
              <span className="text-3xl mb-3 block">📞</span>
              <p className="text-gray-400">+1 (800) 555-0199</p>
            </div>
            <div className="bg-[#111] rounded-2xl p-6 border border-gray-800">
              <span className="text-3xl mb-3 block">🕐</span>
              <p className="text-gray-400">24/7 Claims Hotline</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white">🛡️</span>
              </div>
              <span className="text-xl font-bold text-white tracking-wider">SHIELD INSURANCE</span>
            </div>
            <div className="flex gap-6">
              {["LinkedIn", "Twitter", "Facebook"].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="text-gray-500 hover:text-blue-400 transition-colors text-sm"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-600 text-sm">© 2026 Shield Insurance. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}